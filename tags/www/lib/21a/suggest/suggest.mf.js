
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
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
if(!("JSON"in window&&window.JSON)){if(!this.JSON)this.JSON={};(function(){function c(e){return e<10?"0"+e:e}function r(e){a.lastIndex=0;return a.test(e)?'"'+e.replace(a,function(g){var j=h[g];return typeof j==="string"?j:"\\u"+("0000"+g.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function p(e,g){var j,k,l,i,o=b,m,n=g[e];if(n&&typeof n==="object"&&typeof n.toJSON==="function")n=n.toJSON(e);if(typeof f==="function")n=f.call(g,e,n);switch(typeof n){case "string":return r(n);case "number":return isFinite(n)?
String(n):"null";case "boolean":case "null":return String(n);case "object":if(!n)return"null";b+=d;m=[];if(Object.prototype.toString.apply(n)==="[object Array]"){i=n.length;for(j=0;j<i;j+=1)m[j]=p(j,n)||"null";l=m.length===0?"[]":b?"[\n"+b+m.join(",\n"+b)+"\n"+o+"]":"["+m.join(",")+"]";b=o;return l}if(f&&typeof f==="object"){i=f.length;for(j=0;j<i;j+=1){k=f[j];if(typeof k==="string")if(l=p(k,n))m.push(r(k)+(b?": ":":")+l)}}else for(k in n)if(Object.hasOwnProperty.call(n,k))if(l=p(k,n))m.push(r(k)+
(b?": ":":")+l);l=m.length===0?"{}":b?"{\n"+b+m.join(",\n"+b)+"\n"+o+"}":"{"+m.join(",")+"}";b=o;return l}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+c(this.getUTCMonth()+1)+"-"+c(this.getUTCDate())+"T"+c(this.getUTCHours())+":"+c(this.getUTCMinutes())+":"+c(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b,d,h={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},f;if(typeof JSON.stringify!=="function")JSON.stringify=function(e,g,j){var k;d=b="";if(typeof j==="number")for(k=0;k<j;k+=1)d+=" ";else if(typeof j==="string")d=j;if((f=g)&&typeof g!=="function"&&(typeof g!=="object"||typeof g.length!=="number"))throw new Error("JSON.stringify");return p("",
{"":e})};if(typeof JSON.parse!=="function")JSON.parse=function(e,g){function j(l,i){var o,m,n=l[i];if(n&&typeof n==="object")for(o in n)if(Object.hasOwnProperty.call(n,o)){m=j(n,o);if(m!==undefined)n[o]=m;else delete n[o]}return g.call(l,i,n)}var k;e=String(e);q.lastIndex=0;if(q.test(e))e=e.replace(q,function(l){return"\\u"+("0000"+l.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){k=eval("("+e+")");return typeof g==="function"?j({"":k},""):k}throw new SyntaxError("JSON.parse");}})()}
(function(c,r){if(!("console"in window)){var p=window.console={};p.log=p.warn=p.error=p.debug=function(){}}c(function(){var a=c("<div>");c(document.body).append(a);var b=setTimeout(function(){if(c.cleanData){var d=c.cleanData;c.cleanData=function(f){for(var e=0,g;(g=f[e])!=null;e++)c(g).triggerHandler("remove");d(f)}}else{var h=c.fn.remove;c.fn.remove=function(f,e){return this.each(function(){if(!e)if(!f||c.filter(f,[this]).length)c("*",this).add([this]).each(function(){c(this).triggerHandler("remove")});
return h.call(c(this),f,e)})}}},1);a.bind("remove",function(){clearTimeout(b)});a.remove()});c.suggest=function(a,b){c.fn[a]=function(d){this.length||console.warn("Suggest: invoked on empty element set");return this.each(function(){if(this.nodeName)if(this.nodeName.toUpperCase()==="INPUT")this.type&&this.type.toUpperCase()!=="TEXT"&&console.warn("Suggest: unsupported INPUT type: "+this.type);else console.warn("Suggest: unsupported DOM element: "+this.nodeName);var h=c.data(this,a);h&&h._destroy();
c.data(this,a,new c.suggest[a](this,d))._init()})};c.suggest[a]=function(d,h){var f=this,e=this.options=c.extend(true,{},c.suggest.defaults,c.suggest[a].defaults,h),g=e.css_prefix=e.css_prefix||"",j=e.css;this.name=a;c.each(j,function(i){j[i]=g+j[i]});e.ac_param={};c.each(["type","type_strict","mql_filter","as_of_time","exclude_guids","category","all_types","filter"],function(i,o){var m=e[o];if(!(m===null||m==="")){if(typeof m==="object")m=JSON.stringify(m);e.ac_param[o]=m}});if(e.ac_param.type)this.options._type=
c.map(e.ac_param.type.split(/[, ]/),function(i){return i.replace(/[\"\[\]]/g,"")});this._status={START:"",LOADING:"",SELECT:"",ERROR:""};if(e.status&&e.status instanceof Array&&e.status.length>=3){this._status.START=e.status[0]||"";this._status.LOADING=e.status[1]||"";this._status.SELECT=e.status[2]||"";if(e.status.length===4)this._status.ERROR=e.status[3]||""}var k=this.status=c('<div style="display:none;">').addClass(j.status),l=this.list=c("<ul>").addClass(j.list);g=this.pane=c('<div style="display:none;" class="fbs-reset">').addClass(j.pane);
g.append(k).append(l);if(e.parent)c(e.parent).append(g);else{g.css("position","absolute");e.zIndex&&g.css("z-index",e.zIndex);c(document.body).append(g)}g.bind("mousedown",function(i){f.input.data("dont_hide",true);i.stopPropagation()}).bind("mouseup",function(i){f.input.data("dont_hide")&&f.input.focus();f.input.removeData("dont_hide");i.stopPropagation()}).bind("click",function(i){i.stopPropagation();if(i=f.get_selected()){f.onselect(i,true);f.hide_all()}});l.hover(function(i){f.hoverover_list(i)},
function(i){f.hoverout_list(i)});this.input=c(d).attr("autocomplete","off").unbind(".suggest").bind("remove.suggest",function(){f._destroy()}).bind("keydown.suggest",function(i){f.keydown(i)}).bind("keypress.suggest",function(i){f.keypress(i)}).bind("keyup.suggest",function(i){f.keyup(i)}).bind("blur.suggest",function(i){f.blur(i)}).bind("textchange.suggest",function(){f.textchange()}).bind("focus.suggest",function(i){f.focus(i)}).bind(c.browser.msie?"paste.suggest":"input.suggest",function(){clearTimeout(f.paste_timeout);
f.paste_timeout=setTimeout(function(){f.textchange()},0)});this.onresize=function(){f.invalidate_position();if(g.is(":visible")){f.position();if(e.flyout&&f.flyoutpane&&f.flyoutpane.is(":visible")){var i=f.get_selected();i&&f.flyout_position(i)}}};c(window).bind("resize.suggest",this.onresize).bind("scroll.suggest",this.onresize)};c.suggest[a].prototype=c.extend({},c.suggest.prototype,b)};c.suggest.prototype={_init:function(){},_destroy:function(){this.pane.remove();this.list.remove();this.input.unbind(".suggest");
c(window).unbind("resize.suggest",this.onresize).unbind("scroll.suggest",this.onresize);this.input.removeData("data.suggest")},invalidate_position:function(){self._position=null},status_start:function(){this.hide_all();this.status.siblings().hide();if(this._status.START){this.status.text(this._status.START).show();if(!this.pane.is(":visible")){this.position();this.pane_show()}}this._status.LOADING&&this.status.removeClass("loading")},status_loading:function(){this.status.siblings().show();if(this._status.LOADING){this.status.addClass("loading").text(this._status.LOADING).show();
if(!this.pane.is(":visible")){this.position();this.pane_show()}}else this.status.hide()},status_select:function(){this.status.siblings().show();this._status.SELECT?this.status.text(this._status.SELECT).show():this.status.hide();this._status.LOADING&&this.status.removeClass("loading")},status_error:function(){this.status.siblings().show();this._status.ERROR?this.status.text(this._status.ERROR).show():this.status.hide();this._status.LOADING&&this.status.removeClass("loading")},focus:function(a){this.input.val()===
""?this.status_start():this.focus_hook(a)},focus_hook:function(){if(!this.input.data("data.suggest")&&!this.pane.is(":visible")&&c("."+this.options.css.item,this.list).length){this.position();this.pane_show()}},keydown:function(a){var b=a.keyCode;if(b===9)this.tab(a);else if(b===38||b===40)a.shiftKey||a.preventDefault()},keypress:function(a){var b=a.keyCode;if(b===38||b===40)a.shiftKey||a.preventDefault();else b===13&&this.enter(a)},keyup:function(a){var b=a.keyCode;if(b===38){a.preventDefault();
this.up(a)}else if(b===40){a.preventDefault();this.down(a)}else if(a.ctrlKey&&b===77)c(".fbs-more-link",this.pane).click();else if(c.suggest.is_char(a)){clearTimeout(this.keypress.timeout);var d=this;this.keypress.timeout=setTimeout(function(){d.textchange()},0)}else b===27&&this.escape(a);return true},blur:function(a){if(!this.input.data("dont_hide")){this.input.data("data.suggest")||this.check_required(a);this.hide_all()}},tab:function(a){if(!(a.shiftKey||a.metaKey||a.ctrlKey)){a=this.options;a=
this.pane.is(":visible")&&c("."+a.css.item,this.list).length;var b=this.get_selected();if(a&&b){this.onselect(b);this.hide_all()}}},enter:function(a){var b=this.options;if(this.pane.is(":visible"))if(a.shiftKey){this.shift_enter(a);a.preventDefault()}else if(c("."+b.css.item,this.list).length){var d=this.get_selected();if(d){this.onselect(d);this.hide_all();a.preventDefault()}else{d=this.input.data("data.suggest");if(b.soft)d||this.check_required(a);else if(c("."+this.options.css.item+":visible",
this.list).length){this.updown(false);a.preventDefault()}else d||this.check_required(a)}}},shift_enter:function(){},escape:function(){this.hide_all()},up:function(a){this.updown(true,a.ctrlKey||a.shiftKey)},down:function(a){this.updown(false,null,a.ctrlKey||a.shiftKey)},updown:function(a,b,d){var h=this.options.css,f=this.list;if(this.pane.is(":visible")){var e=c("."+h.item+":visible",f);if(e.length){f=c(e[0]);e=c(e[e.length-1]);var g=this.get_selected()||[];clearTimeout(this.ignore_mouseover.timeout);
this._ignore_mouseover=false;if(a)if(b)this._goto(f);else if(g.length)if(g[0]==f[0]){f.removeClass(h.selected);this.input.val(this.input.data("original.suggest"));this.hoverout_list()}else this._goto(g.prevAll("."+h.item+":visible:first"));else this._goto(e);else if(d)this._goto(e);else if(g.length)if(g[0]==e[0]){e.removeClass(h.selected);this.input.val(this.input.data("original.suggest"));this.hoverout_list()}else this._goto(g.nextAll("."+h.item+":visible:first"));else this._goto(f)}}else a||this.textchange()},
_goto:function(a){a.trigger("mouseover.suggest");var b=a.data("data.suggest");this.input.val(b?b.name:this.input.data("original.suggest"));this.scroll_to(a)},scroll_to:function(a){var b=this.list,d=b.scrollTop(),h=d+b.innerHeight(),f=a.outerHeight();a=a.prevAll().length*f;f=a+f;if(a<d){this.ignore_mouseover();b.scrollTop(a)}else if(f>h){this.ignore_mouseover();b.scrollTop(d+f-h)}},textchange:function(){this.input.removeData("data.suggest");this.input.trigger("fb-textchange",this);var a=this.input.val();
if(a==="")this.status_start();else{this.status_loading();this.request(a)}},request:function(){},response:function(a){if(a){"cost"in a&&this.trackEvent(this.name,"response","cost",a.cost);if(this.check_response(a)){var b=[];if(c.isArray(a))b=a;else if("result"in a)b=a.result;var d=c.map(arguments,function(j){return j});this.response_hook.apply(this,d);var h=null,f=this,e=this.options;c.each(b,function(j,k){var l=f.create_item(k,a).bind("mouseover.suggest",function(i){f.mouseover_item(i)}).data("data.suggest",
k);f.list.append(l);if(j===0)h=l});this.input.data("original.suggest",this.input.val());if(c("."+e.css.item,this.list).length===0&&e.nomatch){b=c('<li class="fbs-nomatch">');if(typeof e.nomatch==="string")b.text(e.nomatch);else{e.nomatch.title&&b.append(c('<em class="fbs-nomatch-text">').text(e.nomatch.title));e.nomatch.heading&&b.append(c("<h3>").text(e.nomatch.heading));if((e=e.nomatch.tips)&&e.length){var g=c('<ul class="fbs-search-tips">');c.each(e,function(j,k){g.append(c("<li>").text(k))});
b.append(g)}}b.bind("click.suggest",function(j){j.stopPropagation()});this.list.append(b)}d.push(h);this.show_hook.apply(this,d);this.position();this.pane_show()}}},pane_show:function(){var a=false;if(c("> li",this.list).length)a=true;a||this.pane.children(":not(."+this.options.css.list+")").each(function(){if(c(this).css("display")!="none"){a=true;return false}});if(a)if(this.options.animate){var b=this;this.pane.slideDown("fast",function(){b.input.trigger("fb-pane-show",b)})}else{this.pane.show();
this.input.trigger("fb-pane-show",this)}else{this.pane.hide();this.input.trigger("fb-pane-hide",this)}},create_item:function(a){var b=this.options.css;li=c("<li>").addClass(b.item);a=c("<label>").text(a.name);li.append(c("<div>").addClass(b.item_name).append(a));return li},mouseover_item:function(a){if(!this._ignore_mouseover){a=a.target;if(a.nodeName.toLowerCase()!=="li")a=c(a).parents("li:first");var b=c(a),d=this.options.css;c("."+d.item,this.list).each(function(){this!==b[0]&&c(this).removeClass(d.selected)});
if(!b.hasClass(d.selected)){b.addClass(d.selected);this.mouseover_item_hook(b)}}},mouseover_item_hook:function(){},hoverover_list:function(){},hoverout_list:function(){},check_response:function(){return true},response_hook:function(){this.list.empty()},show_hook:function(){this.status_select()},position:function(){var a=this.pane,b=this.options;if(!b.parent){if(!self._position){var d=this.input,h=d.offset(),f=d.outerWidth(true),e=d.outerHeight(true);h.top+=e;var g=a.outerWidth(),j=a.outerHeight(),
k=h.top+j/2,l=c(window).scrollLeft();d=c(window).scrollTop();var i=c(window).width(),o=c(window).height()+d,m=true;if("left"==b.align)m=true;else if("right"==b.align)m=false;else if(h.left>l+i/2)m=false;if(!m){m=h.left-(g-f);if(m>l)h.left=m}if(k>o){b=h.top-e-j;if(b>d)h.top=b}this._position=h}a.css({top:this._position.top,left:this._position.left})}},ignore_mouseover:function(){this._ignore_mouseover=true;var a=this;this.ignore_mouseover.timeout=setTimeout(function(){a.ignore_mouseover_reset()},1E3)},
ignore_mouseover_reset:function(){this._ignore_mouseover=false},get_selected:function(){var a=null,b=this.options.css.selected;c("li",this.list).each(function(){var d=c(this);if(d.hasClass(b)&&d.is(":visible")){a=d;return false}});return a},onselect:function(a){var b=a.data("data.suggest");if(b){this.input.val(b.name).data("data.suggest",b).trigger("fb-select",b);this.trackEvent(this.name,"fb-select","index",a.prevAll().length)}},trackEvent:function(a,b,d,h){this.input.trigger("fb-track-event",{category:a,
action:b,label:d,value:h})},check_required:function(a){var b=this.options.required;if(b===true){if(this.input.val()!==""){this.input.trigger("fb-required",{domEvent:a});return false}}else if(b==="always"){this.input.trigger("fb-required",{domEvent:a});return false}return true},hide_all:function(){this.pane.hide();this.input.trigger("fb-pane-hide",this)}};c.extend(c.suggest,{defaults:{status:["Start typing to get suggestions...","Searching...","Select an item from the list:","Sorry, something went wrong. Please try again later"],
required:false,soft:false,nomatch:"no matches",css:{pane:"fbs-pane",list:"fbs-list",item:"fbs-item",item_name:"fbs-item-name",selected:"fbs-selected",status:"fbs-status"},css_prefix:null,parent:null,animate:false,zIndex:null},$$:function(a,b){return c("."+a,b)},use_jsonp:function(a){if(!a)return false;var b=window.location.href;b=b.substr(0,b.length-window.location.pathname.length);if(b===a)return false;return true},strongify:function(a,b){var d,h=a.toLowerCase().indexOf(b.toLowerCase());if(h>=0){var f=
b.length;d=document.createTextNode(a.substring(0,h));var e=c("<strong>").text(a.substring(h,h+f));h=document.createTextNode(a.substring(h+f));d=c("<div>").append(d).append(e).append(h)}else d=c("<div>").text(a);return d},keyCode:{CAPS_LOCK:20,CONTROL:17,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ENTER:108,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,OPTION:18,APPLE:224},is_char:function(a){if(a.type==="keypress")if((a.metaKey||a.ctrlKey)&&a.charCode===118)return true;
else{if("isChar"in a)return a.isChar}else{var b=c.suggest.keyCode.not_char;if(!b){b={};c.each(c.suggest.keyCode,function(d,h){b[""+h]=1});c.suggest.keyCode.not_char=b}return!(""+a.keyCode in b)}}});var q={_destroy:c.suggest.prototype._destroy,show_hook:c.suggest.prototype.show_hook};c.suggest("suggest",{_init:function(){var a=this,b=this.options;if(!b.flyout_service_url)b.flyout_service_url=b.service_url;this.jsonp=c.suggest.use_jsonp(b.service_url);if(!c.suggest.cache)c.suggest.cache={};if(b.flyout){this.flyoutpane=
c('<div style="display:none;" class="fbs-reset">').addClass(b.css.flyoutpane);if(b.flyout_parent)c(b.flyout_parent).append(this.flyoutpane);else{this.flyoutpane.css("position","absolute");b.zIndex&&this.flyoutpane.css("z-index",b.zIndex);c(document.body).append(this.flyoutpane)}this.flyoutpane.hover(function(d){a.hoverover_list(d)},function(d){a.hoverout_list(d)}).bind("mousedown.suggest",function(d){d.stopPropagation();a.pane.click()});if(!c.suggest.flyout)c.suggest.flyout={};if(!c.suggest.flyout.cache)c.suggest.flyout.cache=
{}}},_destroy:function(){q._destroy.call(this);this.flyoutpane&&this.flyoutpane.remove();this.input.removeData("request.count.suggest");this.input.removeData("flyout.request.count.suggest")},shift_enter:function(a){if(this.options.suggest_new){this.suggest_new();this.hide_all()}else this.check_required(a)},hide_all:function(){this.pane.hide();this.flyoutpane&&this.flyoutpane.hide();this.input.trigger("fb-pane-hide",this);this.input.trigger("fb-flyoutpane-hide",this)},request:function(a,b){var d=this,
h=this.options;if(this.ac_xhr){this.ac_xhr.abort();this.ac_xhr=null}var f={query:a,prefixed:true,format:"ac"};if(b)f.start=b;c.extend(f,h.ac_param);var e=h.service_url+h.service_path+"?"+c.param(f),g=c.suggest.cache[e];if(g)this.response(g,b?b:-1,true);else{clearTimeout(this.request.timeout);var j={url:h.service_url+h.service_path,data:f,beforeSend:function(){var k=d.input.data("request.count.suggest")||0;k||d.trackEvent(d.name,"start_session");k+=1;d.trackEvent(d.name,"request","count",k);d.input.data("request.count.suggest",
k)},success:function(k){c.suggest.cache[e]=k;k.prefix=a;d.response(k,b?b:-1)},error:function(k){d.status_error();d.trackEvent(d.name,"request","error",{url:this.url,response:k?k.responseText:""});d.input.trigger("fb-error",Array.prototype.slice.call(arguments))},complete:function(k){k&&d.trackEvent(d.name,"request","tid",k.getResponseHeader("X-Metaweb-TID"))},dataType:d.jsonp?"jsonp":"json",cache:true};this.request.timeout=setTimeout(function(){d.ac_xhr=c.ajax(j)},h.xhr_delay)}},create_item:function(a,
b){var d=this.options.css,h=c("<li>").addClass(d.item),f=c("<div>").addClass(d.item_name).append(c("<label>").append(c.suggest.strongify(a.name||a.guid,b.prefix)));h.append(f);var e=a["n:type"]||a["notable:type"];if(e)if(typeof e==="object")f.prepend(c("<div>").addClass(d.item_type).text(e.name));else{var g,j,k=false;c.each(a.type,function(l,i){if(i.id===e)g=i.name;if(i.id==="/common/topic")k="Topic";else if(!j)j=i.name});if(g||j||k)f.prepend(c("<div>").addClass(d.item_type).text(g||j||k))}return h},
mouseover_item_hook:function(a){a=a.data("data.suggest");this.options.flyout&&a&&this.flyout_request(a)},check_response:function(a){return a.prefix===this.input.val()},response_hook:function(a,b){this.flyoutpane&&this.flyoutpane.hide();b>0?c(".fbs-more",this.pane).remove():this.list.empty()},show_hook:function(a,b,d){q.show_hook.apply(this,[a]);var h=this.options,f=this,e=this.pane,g=this.list,j=a.result,k=c(".fbs-more",e),l=c(".fbs-suggestnew",e);if(j&&j.length&&"start"in a){if(!k.length){j=c('<a class="fbs-more-link" href="#" title="(Ctrl+m)">view more</a>');
k=c('<div class="fbs-more">').append(j);j.bind("click.suggest",function(i){i.preventDefault();i.stopPropagation();i=c(this).parent(".fbs-more");f.more(i.data("start.suggest"))});g.after(k)}k.data("start.suggest",a.start);k.show()}else k.remove();if(h.suggest_new){if(!l.length){a=c('<button class="fbs-suggestnew-button">');a.text(h.suggest_new);l=c('<div class="fbs-suggestnew">').append('<div class="fbs-suggestnew-description">Your item not in the list?</div>').append(a).append('<span class="fbs-suggestnew-shortcut">(Shift+Enter)</span>').bind("click.suggest",
function(i){i.stopPropagation();f.suggest_new(i)});e.append(l)}l.show()}else l.remove();if(d&&d.length&&b>0){b=d.prevAll().length*d.outerHeight();g.scrollTop();g.animate({scrollTop:b},"slow",function(){d.trigger("mouseover.suggest")})}},suggest_new:function(){var a=this.input.val();if(a!==""){this.input.data("data.suggest",a).trigger("fb-select-new",a);this.trackEvent(this.name,"fb-select-new","index","new");this.hide_all()}},more:function(a){if(a){var b=this.input.data("original.suggest");b!==null&&
this.input.val(b);this.request(this.input.val(),a);this.trackEvent(this.name,"more","start",a)}return false},flyout_request:function(a){var b=this;if(this.flyout_xhr){this.flyout_xhr.abort();this.flyout_xhr=null}var d=this.options,h=this.flyoutpane.data("data.suggest");if(h&&a.id===h.id){if(!this.flyoutpane.is(":visible")){this.flyout_position(this.get_selected());this.flyoutpane.show();this.input.trigger("fb-flyoutpane-show",this)}}else if((h=c.suggest.flyout.cache[a.id])&&h.id&&h.html)this.flyout_response(h);
else{var f={id:a.id};if(d.as_of_time)f.as_of_time=d.as_of_time;var e={url:d.flyout_service_url+d.flyout_service_path,data:f,beforeSend:function(){var g=b.input.data("flyout.request.count.suggest")||0;g+=1;b.trackEvent(b.name,"flyout.request","count",g);b.input.data("flyout.request.count.suggest",g)},success:function(g){g=b.jsonp?g:{id:f.id,html:g};c.suggest.flyout.cache[g.id]=g;b.flyout_response(g)},error:function(g){b.trackEvent(b.name,"flyout","error",{url:this.url,response:g?g.responseText:""})},
complete:function(g){g&&b.trackEvent(b.name,"flyout","tid",g.getResponseHeader("X-Metaweb-TID"))},dataType:b.jsonp?"jsonp":"html",cache:true};clearTimeout(this.flyout_request.timeout);this.flyout_request.timeout=setTimeout(function(){b.flyout_xhr=c.ajax(e)},d.xhr_delay);this.input.trigger("fb-request-flyout",e)}},flyout_response:function(a){var b=this.pane,d=this.get_selected()||[];if(b.is(":visible")&&d.length)if((b=d.data("data.suggest"))&&a.id===b.id&&a.html){this.flyoutpane.html(a.html);this.flyout_position(d);
this.flyoutpane.show().data("data.suggest",b);this.input.trigger("fb-flyoutpane-show",this)}},flyout_position:function(a){if(!this.options.flyout_parent){var b=this.pane,d=this.flyoutpane,h=this.options.css,f=r,e={top:parseInt(d.css("top"),10),left:parseInt(d.css("left"),10)},g=b.offset(),j=b.outerWidth(),k=d.outerHeight(),l=d.outerWidth();if(this.options.flyout==="bottom"){f=g;j=this.input.offset();if(g.top<j.top)f.top-=k;else f.top+=b.outerHeight();d.addClass(h.flyoutpane+"-bottom")}else{f=a.offset();
a=a.outerHeight();f.left+=j;var i=f.left+l;b=c(document.body).scrollLeft();var o=c(window).width()+b;f.top=f.top+a-k;if(f.top<g.top)f.top=g.top;if(i>o){g=f.left-(j+l);if(g>b)f.left=g}d.removeClass(h.flyoutpane+"-bottom")}f.top===e.top&&f.left===e.left||d.css({top:f.top,left:f.left})}},hoverout_list:function(){this.flyoutpane&&!this.get_selected()&&this.flyoutpane.hide()}});c.extend(c.suggest.suggest,{defaults:{type:null,mql_filter:null,as_of_time:null,filter:null,service_url:"http://www.googleapis.com",
service_path:"/freebase/v1/search",align:null,flyout:true,flyout_service_url:"http://www.freebase.com",flyout_service_path:"/suggest/flyout",flyout_parent:null,suggest_new:null,nomatch:{title:"No suggested matches",heading:"Tips on getting better suggestions:",tips:["Enter more or fewer characters","Add words related to your original search","Try alternate spellings","Check your spelling"]},css:{item_type:"fbs-item-type",flyoutpane:"fbs-flyout-pane"},xhr_delay:200}});document.createElement("input")})(jQuery);
