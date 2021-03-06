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

var global_results = { 'total_tests' : 0, 'total_failed' : 0, 'total_apps' : 0 };

//copied  from app_util.sjs
var html_id = function(id) { 
    return id.replace(/[\/\.]/g, '');
}

var rown = 0;
$(".summary").each(function(index) {  
    load_app_summary($(this).attr('app_id'), rown++);
    global_results.total_apps++;
});

$("#release-all").click(function(e) { 
    $(".release").each(function(index) { $(this).click(); });
    return false;
});

$("#test-all").click(function(e) { 

    global_results.total_tests = 0;
    global_results.total_failed = 0;

    $(".test").each(function(index) { $(this).click(); });
    return false;
});


function load_app_summary(appid, rown) { 
  if (!rown) {
    rown = 0;
  }
  $("#summary-" + appid).load(
    $("#summary-" + appid).attr('app_url') + '&rown=' + rown,
    [],
    function(text, status, req) { 
      bind_app_buttons(appid);
    }	
  );
}

function bind_app_buttons(appid) { 

    $("#release-" + appid).click(function(e) { 
	app_html_id = $(this).attr('app_html_id');
	
	$.ajax({
	    'url' : $(this).attr('href'),
	    'data' : {'appid' : $(this).attr('app_id'), 'version' : $(this).attr('app_version') },
	    'type' : 'POST',
	    'dataType' : 'json',
	    'success' : function(data, textStatus, req) { 
		$("#message").html("App " + data.result.appid + " version " + data.result.release + " has been released.");
		load_app_summary(app_html_id);
	    },
	    'beforeSend' : function(req) { 
		req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	    }
	    
	});
	
	return false;
    });


    var report_test_result = function(test_result, textStatus, req) { 

	var app_html_id = html_id(test_result.app_path);
	var test_file_div = "<b>" + test_result.testfiles[0].file  + "</b>";
	var test_result_div = "";

	var total_tests = 0, failed_tests = 0;
	var file_class_name = "test-passed";
	for (var i in test_result.testfiles[0].modules[0].tests) { 

	    total_tests++;
	    global_results.total_tests++;
	    
	    var this_test = test_result.testfiles[0].modules[0].tests[i];
	    var class_name = this_test.failures ? "test-failed" : "test-passed";

	    test_result_div += "<br/><span class='" + class_name + "'>" + this_test.name + ": " + parseInt(parseInt(this_test.total) - parseInt(this_test.failures)) + "/" + this_test.total;
	    
	    if (this_test.failures) { 

		file_class_name = "test-failed";
		failed_tests++;
		global_results.total_failed++;
		for (var j in this_test.log) { 
		    var this_log = this_test.log[j];

		    if (this_log.result == true) {
			continue;
		    }
		    test_result_div += "<br/><i>" + this_log.message + "</i>";
		}
	    }

	    test_result_div += "</span>";
	}

	test_file_div += "<br/>" + parseInt(total_tests-failed_tests) + "/" + total_tests + " passed";


	var html_message = "<table style='margin-top: 10px;'><tr><td width='60px' class='" + file_class_name + "'>" + test_file_div + "</td><td width='130px'>" + test_result_div + "</td></tr></table>";

	$("#messages-" + app_html_id).append(html_message);
	$("#message").html("Total Tests: " + global_results.total_tests + " Failed: " + global_results.total_failed);

    };


    var run_tests = function(discovered_tests, textStatus, req) { 
	
	if (discovered_tests.testfiles.length == 0) { 
	    
	    var app_html_id = html_id(discovered_tests.app_path);
	    $("#messages-" + app_html_id).append("(no tests)");
	    return;
	}

	for (var i in discovered_tests.testfiles) { 
	    testfile = discovered_tests.testfiles[i];
	    
	    $.ajax({
		'url' : testfile.run_url,
		'data' : { 'output' : 'json' },
		'type' : 'GET',
		'dataType' : 'jsonp',
		'success' : report_test_result
	    });
	}

    };

    
    $("#test-" + appid).bind('click', function(e) { 

	$.ajax({
	    'url' : $(this).attr('href'),
	    'data' : { 'output' : 'json', 'mode' : 'discover' },
	    'type' : 'GET',
	    'dataType' : 'jsonp',
	    'success' : run_tests
	});
	
	return false;
	
    });
}

/*
  $(".expand").each(function(index) { 
  $(this).click(function(e) { 
  $("#details-" + $(this).attr('app_id')).show();
  $("#details-" + $(this).attr('app_id')).load($(this).attr('app_url'));
  return false;
  })})
*/

