/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var callback = acre.environ.params["callback"];
var worker = acre.require("worker");

var t = acre.environ.params["t"];
var q = acre.environ.params["q"];

var infoQ = [{
  "id" : null,
  "guid" : null,
  "name" : null,
  "/common/topic/image" : [{ "optional" : true, "id" : null, "limit" : 1 }]
}];

var options = { 
  limit: "10", 
  mql_output: JSON.stringify(infoQ)
};
if (t.length > 0) {
  options.type = t;
  options.type_strict = 'any';
}

var o = acre.freebase.search(q + "*", options);

if (q.charAt(0) == "/") {
  infoQ[0]["id"] = q;
  try {
    var o2 = acre.freebase.mqlread(infoQ);
    if (o2.result.length > 0) {
      o.result.unshift(o2.result[0]);
    }
  } catch (e) {
  }
}

acre.start_response(200);
if (callback) {
  acre.write(callback + "(");
}
acre.write(JSON.stringify(o));
if (callback) {
  acre.write(")");
}