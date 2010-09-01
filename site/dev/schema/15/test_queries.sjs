acre.require('/test/lib').enable(this);

var mf = acre.require("MANIFEST").MF;
var q = mf.require("queries");
var mql = mf.require("mql");
var ht = mf.require("queries", "helpers_test");

// Call one of these, specific to where your key comes from
function assert_mql_keys(keys, o, null_check) {
  assert_keys(keys, o, null_check, 'mql')
}

function assert_bdb_keys(keys, o, null_check) {
  assert_keys(keys, o, null_check, 'activity bdb')
}

function assert_cdb_keys(keys, o, null_check) {
  assert_keys(keys, o, null_check, 'cdb')
}

// Called by one of the functions above
function assert_keys(keys, o, null_check, source) {
  
  if (!source) {
    source = 'unknown source';
  }
  
  var errors = [];
  keys.forEach(function(key) {
    if (! (key in o)) {
      errors.push(key);
    }
    if (null_check && o[key] == null) {
      //errors.push(key + " null");
      errors.push("found no values for " + key + " from " + source);
    }
  });
  if (errors.length) {
    ok(false, JSON.stringify(errors));
  }
  else {
    ok(true, JSON.stringify(keys));
  }
};

function assert_domain(domain) {
  assert_mql_keys(["id", "name", "types"], domain, true);
  assert_bdb_keys(["instance_count"], domain, true);
};

test("domains", function() {
  var result;
  q.domains(mql.domains({"id":"/base/slamdunk",key:[]}))
    .then(function(domains) {
       result = domains;
    });
  acre.async.wait_on_results();
  ok(result);
  ok(result.length === 1);
  result = result[0];
  equal(result.id, "/base/slamdunk");
  assert_domain(result);
});

test("common_domains", function() {
  var result;
  q.common_domains()
    .then(function(domains) {
      result = domains;
    });
  acre.async.wait_on_results();
  ok(result);
  ok(result.length);
  result.forEach(function(domain) {
    assert_domain(domain);
  });
});

test("user_domains", function() {
  var result;
  q.user_domains("/user/daepark")
    .then(function(domains) {
      result = domains;
    });
  acre.async.wait_on_results();
  ok(result);
  ok(result.length);
  var slamdunk_base;
  result.forEach(function(domain) {
    assert_domain(domain);
    if (domain.id === "/base/slamdunk") {
      slamdunk_base = domain;
    }
  });
  ok(slamdunk_base);
});


test("domain", function() {
  function assert_type(type, role) {
    assert_mql_keys(["name", "id", "properties"], type, true);
    assert_bdb_keys(["instance_count"], type, true);
    assert_cdb_keys(["blurb"], type, true);
    if (role) {
      equal(type.role, role);
    }
  };

  var result;
  q.domain("/base/slamdunk")
    .then(function(d) {
      result = d;
    });
  acre.async.wait_on_results();
  ok(result);
  assert_keys(["id", "name", "creator",  "owners", "timestamp", "date",
               "blurb", "blob", "types", "mediator:types", "cvt:types"], result, true);
  // regular types
  ok(result.types && result.types.length);
  result.types.forEach(function(type) {
    assert_type(type);
  });
  // mediators
  var mediators = result["mediator:types"];
  if (mediators && mediators.length) {
    mediators.forEach(function(mediator) {
      assert_type(mediator, "mediator");
    });
  }
  // cvts
  var cvts = result["cvt:types"];
  if (cvts && cvts.length) {
    cvts.forEach(function(cvt) {
      assert_type(cvt, "cvt");
    });
  }
});

function assert_prop(prop) {
  assert_keys(["id", "name", "expected_type",
               "tip", "disambiguator", "display_none"], prop, true);
  assert_keys(["unique", "unit", "master_property", "reverse_property"], prop);
  if (prop.expected_type && typeof prop.expected_type === "object") {
    assert_keys(["role"], prop.expected_type);
  }
}

function assert_type(type) {
  assert_mql_keys(["id", "name", "domain",
               "role", "included_types",
               "creator", "timestamp", "date",
               "properties"], type);
  assert_cdb_keys(["instance_count"], type);
  assert_bdb_keys(["blurb", "blob"], type);
  
  if (type.properties && type.properties.length) {
    type.properties.forEach(function(p) {
      assert_prop(p);
    });
  }
};

test("base_type", function() {
  var result;
  q.base_type("/base/slamdunk/player")
    .then(function(t) {
      result = t;
    });
  acre.async.wait_on_results();
  ok(result);
  assert_type(result);
});

test("type", function() {
  var result;
  q.type("/base/slamdunk/player")
    .then(function(t) {
      result = t;
    });
  acre.async.wait_on_results();
  ok(result);
  assert_type(result);
  ok(result.incoming);
  assert_keys(["domain", "commons", "bases"], result.incoming);
});

test("typediagram", function() {
  var result;
  q.typediagram("/base/slamdunk/player")
    .then(function(t) {
      result = t;
    });
  acre.async.wait_on_results();
  ok(result);
  assert_type(result);
  ok(result.incoming);
  assert_keys(["domain", "commons", "bases"], result.incoming);
});


test("type_properties", function() {
  var result;
  q.type_properties("/base/slamdunk/player")
    .then(function(type) {
      result = type.properties;
    });
  acre.async.wait_on_results();
  ok(result);
  result.forEach(function(prop) {
    assert_prop(prop);
  });
});

test("property", function() {
  var result;
  q.property("/film/film/starring")
    .then(function(p) {
      result = p;
    });
  acre.async.wait_on_results();
  ok(result);
  assert_prop(result);
});

test("included_types", function() {
  var result;
  q.included_types("/film/actor")
    .then(function(types) {
      result = types;
    });
  acre.async.wait_on_results();
  ok(result);
  var person = [t.id for each (t in result) if (t.id === "/people/person")];
  ok(person.length === 1, "/people/person is an included type of /film/actor");
});

test("type_role", function() {
  var result;
  q.type_role("/film/performance")
    .then(function(role) {
      result = role;
    });
  acre.async.wait_on_results();
  equal(result, "mediator");

  q.type_role("/people/gender")
    .then(function(role) {
      result = role;
    });
  acre.async.wait_on_results();
  equal(result, "enumeration");
});

//
//
// All tests after this comment requires users to be logged in
//
//
var user = acre.freebase.get_user_info();
if (!user) {
  acre.test.report();
  acre.exit();
}
var user_domain = user.id + "/default_domain";

test("add_included_types", function() {
  var type = ht.create_type(user_domain);
  try {
    var result;
    q.add_included_types(type.id, ["/people/person", "/film/actor"])
      .then(function(included) {
        result = included;
      });
    acre.async.wait_on_results();
    ok(result);
    result = acre.freebase.mqlread({id: type.id, "/freebase/type_hints/included_types": [{id:null}]}).result;
    result = result["/freebase/type_hints/included_types"];
    ok(result.length === 2);
    var included = {};
    result.forEach(function(type) {
      included[type.id] = true;
    });
    ["/people/person", "/film/actor"].forEach(function(type) {
      ok(included[type], type + " is included");
    });
  }
  finally {
    if (type) ht.delete_type(type);
  }
});

test("delete_included_type", function() {
  var type = ht.create_type(user_domain, {"/freebase/type_hints/included_types": {id: "/people/person"}});
  // make sure of included type
  equal(type["/freebase/type_hints/included_types"].id, "/people/person");

  try {
    var result;
    q.delete_included_type(type.id, "/people/person")
      .then(function(deleted) {
        result = deleted;
      });
    acre.async.wait_on_results();
    ok(result);
    result = acre.freebase.mqlread({id: type.id, "/freebase/type_hints/included_types": null}).result;
    ok(!result["/freebase/type_hints/included_types"]);
  }
  finally {
    if (type) ht.delete_type(type);
  }
});


acre.test.report();

