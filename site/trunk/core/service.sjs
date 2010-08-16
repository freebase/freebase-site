var mf = acre.require("MANIFEST").MF;
var h = mf.require("helpers");
var lib = mf.require("service", "lib");
var deferred = mf.require("promise", "deferred");

/**
 * A generic service for json/p responses.
 *
 * Usage:
 *
 * var service = acre.require("/freebase/site/core/service").service;
 *
 * var myapis = {
 *   myservice_1: function(args, headers) {
 *     return {id:args.id};
 *   },
 *   myservice_2: function(args, headers) {
 *     return {foo:args.foo, bar:args.bar};
 *   }
 * };
 * myapis.myservice_1.args = ["id"];
 *
 * myapis.myservice_2.args = ["foo", "bar"];
 * myapis.myservice_2.auth = true;
 *
 * if (acre.current_script == acre.request.script) {
 *   service(this, myapis);
 * }
 *
 * So if you server side script (sjs) is invoked with path_info == "/myservice_2",
 * The service library will:
 * 1. Check your api dictionary (i.e., myapis) for required args for myservice_2 (i.e, ["foo", "bar"])
 * 2. Check required authentication (i.e., myservice_2 requires authentication)
 * 3. Invoke myapis.myservice_2 and /freebase/libs/service/lib to properly format/handle as json/p response.
 *
 * Note that your api methods can return a deferred/promise (@see /freebase/site/promise/deferred)
 *
 * @see http://service.freebaseapps.com/index
 */
function main(scope, api) {
  var request = scope.acre.request;
  var method = request.method;
  var headers = request.headers;
  var action = request.path_info;

  if (action.length && action[0] === '/') {
    action = action.substring(1);
  }

  if (typeof api[action] !== "function") {
    throw new ApiNotFoundError("api not found: " + action);
  }

  var fn = api[action];
  var svc = (method === 'GET' ? lib.GetService :
             (headers['content-type'].indexOf("multipart/form-data") === 0 ? lib.FormService : lib.PostService));

  var d;
  try {
    var args = lib.parse_request_args(fn.args); // check required args
    if (fn.auth) { // check authentication
      lib.check_user();
    }
    // api method can return deferred/promise
    if (svc === lib.FormService) {
      d = fn(args, headers, scope.acre.request.body);
    }
    else {
      d = fn(args, headers);
    }
  }
  catch (e if instanceof_service_error(e)) {
    return handle_service_error(e);
  }
  // otherwise, let it fallthrough to error page to wrap the JS call stack

  function success(result) {
    svc(function() {
      return result;
    }, scope);
  };

  function error(e) {
    svc(function() {
      return handle_service_error(e);
    }, scope);
  };

  deferred.when(d, success, error);

  acre.async.wait_on_results();

  // cache_policy
  if (h.is_client() && fn.cache_policy) {
    acre.response.set_cache_policy(fn.cache_policy);
  }
};


function ApiNotFoundError() {
    Error.apply(this, arguments);
}
ApiNotFoundError.prototype = new Error();
ApiNotFoundError.prototype.constructor = ApiNotFoundError;
ApiNotFoundError.prototype.name = 'ApiNotFoundError';


/**
 * is e and instanceof a known error
 */
function instanceof_service_error(e) {
  return e instanceof lib.ServiceError  ||
    e instanceof acre.freebase.Error ||
    e instanceof acre.errors.URLError ||
    typeof e === 'string';
};

function handle_service_error(e) {
  /**
   * This series of catch blocks copied from
   * //service.libs.freebase.dev/lib (run_function_as_service)
   */

  if (e instanceof lib.ServiceError) {
    return lib.output_response(e);
  }
  else if (e instanceof acre.freebase.Error) {
    // it's an acre.freebase error so pass along original error from Freebase
    return lib.output_response(e.response);
  }
  else if (e instanceof acre.errors.URLError) {
    // it's an unknown urlfetch error so parse it
    var response = e.response.body;
    var info;
    try {
      // is it a JSON-formatted error?
      info = JSON.parse(response);
    }
    catch(e) {
      // otherwise just package the response as string
      info = response;
    }
    var msg = e.request_url ? "Error fetching " + e.request_url : "Error fetching external URL";
    return lib.output_response(new lib.ServiceError("500 Service Error", null, {
      message: msg,
      code : "/api/status/error/service/external",
      info :info
    }));
  }
  else {
    // catch all defaults to validation errors
    var msg = e;
    if (e instanceof Error) {
      msg = (typeof e.toString === "function") ? e.toString() : ""+e;
    }
    return lib.output_response(new lib.ServiceError("400 Bad Request", null, {
      message: e,
      code : "/api/status/error/input/validation"
    }));
  }
};

