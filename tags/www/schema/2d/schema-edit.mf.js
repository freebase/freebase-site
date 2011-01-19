
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
/*
 
 jQuery Tools @VERSION / Expose - Dim the lights

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/toolbox/expose.html

 Since: Mar 2010
 Date: @DATE 
 
 jQuery Tools @VERSION Overlay - Overlay base. Extend it.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/overlay/

 Since: March 2008
 Date: @DATE 
*/
(function(c){function l(){if(c.browser.msie){var g=c(document).height(),j=c(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,g-j<20?j:g]}return[c(document).width(),c(document).height()]}function h(g){if(g)return g.call(c.mask)}c.tools=c.tools||{version:"@VERSION"};var a;a=c.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var b,d,e,f,m;c.mask={load:function(g,j){if(e)return this;if(typeof g=="string")g={color:g};g=g||f;f=g=c.extend(c.extend({},a.conf),g);b=c("#"+g.maskId);if(!b.length){b=c("<div/>").attr("id",g.maskId);c("body").append(b)}var o=l();b.css({position:"absolute",top:0,left:0,width:o[0],height:o[1],display:"none",opacity:g.startOpacity,zIndex:g.zIndex});g.color&&b.css("backgroundColor",g.color);if(h(g.onBeforeLoad)===false)return this;g.closeOnEsc&&c(document).bind("keydown.mask",function(k){k.keyCode==
27&&c.mask.close(k)});g.closeOnClick&&b.bind("click.mask",function(k){c.mask.close(k)});c(window).bind("resize.mask",function(){c.mask.fit()});if(j&&j.length){m=j.eq(0).css("zIndex");c.each(j,function(){var k=c(this);/relative|absolute|fixed/i.test(k.css("position"))||k.css("position","relative")});d=j.css({zIndex:Math.max(g.zIndex+1,m=="auto"?0:m)})}b.css({display:"block"}).fadeTo(g.loadSpeed,g.opacity,function(){c.mask.fit();h(g.onLoad)});e=true;return this},close:function(){if(e){if(h(f.onBeforeClose)===
false)return this;b.fadeOut(f.closeSpeed,function(){h(f.onClose);d&&d.css({zIndex:m})});c(document).unbind("keydown.mask");b.unbind("click.mask");c(window).unbind("resize.mask");e=false}return this},fit:function(){if(e){var g=l();b.css({width:g[0],height:g[1]})}},getMask:function(){return b},isLoaded:function(){return e},getConf:function(){return f},getExposed:function(){return d}};c.fn.mask=function(g){c.mask.load(g);return this};c.fn.expose=function(g){c.mask.load(g,this);return this}})(jQuery);
(function(c){function l(b,d){var e=this,f=b.add(e),m=c(window),g,j,o,k=c.tools.expose&&(d.mask||d.expose),r=Math.random().toString().slice(10);if(k){if(typeof k=="string")k={color:k};k.closeOnClick=k.closeOnEsc=false}var s=d.target||b.attr("rel");j=s?c(s):b;if(!j.length)throw"Could not find Overlay: "+s;b&&b.index(j)==-1&&b.click(function(i){e.load(i);return i.preventDefault()});c.extend(e,{load:function(i){if(e.isOpened())return e;var n=a[d.effect];if(!n)throw'Overlay: cannot find effect : "'+d.effect+
'"';d.oneInstance&&c.each(h,function(){this.close(i)});i=i||c.Event();i.type="onBeforeLoad";f.trigger(i);if(i.isDefaultPrevented())return e;o=true;k&&c(j).expose(k);var p=d.top,t=d.left,u=j.outerWidth({margin:true}),v=j.outerHeight({margin:true});if(typeof p=="string")p=p=="center"?Math.max((m.height()-v)/2,0):parseInt(p,10)/100*m.height();if(t=="center")t=Math.max((m.width()-u)/2,0);n[0].call(e,{top:p,left:t},function(){if(o){i.type="onLoad";f.trigger(i)}});k&&d.closeOnClick&&c.mask.getMask().one("click",
e.close);d.closeOnClick&&c(document).bind("click."+r,function(q){c(q.target).parents(j).length||e.close(q)});d.closeOnEsc&&c(document).bind("keydown."+r,function(q){q.keyCode==27&&e.close(q)});return e},close:function(i){if(!e.isOpened())return e;i=i||c.Event();i.type="onBeforeClose";f.trigger(i);if(!i.isDefaultPrevented()){o=false;a[d.effect][1].call(e,function(){i.type="onClose";f.trigger(i)});c(document).unbind("click."+r).unbind("keydown."+r);k&&c.mask.close();return e}},getOverlay:function(){return j},
getTrigger:function(){return b},getClosers:function(){return g},isOpened:function(){return o},getConf:function(){return d}});c.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(i,n){c.isFunction(d[n])&&c(e).bind(n,d[n]);e[n]=function(p){c(e).bind(n,p);return e}});g=j.find(d.close||".close");if(!g.length&&!d.close){g=c('<a class="close"></a>');j.prepend(g)}g.click(function(i){e.close(i)});d.load&&e.load()}c.tools=c.tools||{version:"@VERSION"};c.tools.overlay={addEffect:function(b,
d,e){a[b]=[d,e]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!c.browser.msie||c.browser.version>6,left:"center",load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var h=[],a={};c.tools.overlay.addEffect("default",function(b,d){var e=this.getConf(),f=c(window);if(!e.fixed){b.top+=f.scrollTop();b.left+=f.scrollLeft()}b.position=e.fixed?"fixed":"absolute";this.getOverlay().css(b).fadeIn(e.speed,d)},function(b){this.getOverlay().fadeOut(this.getConf().closeSpeed,
b)});c.fn.overlay=function(b){var d=this.data("overlay");if(d)return d;if(c.isFunction(b))b={onBeforeLoad:b};b=c.extend(true,{},c.tools.overlay.conf,b);this.each(function(){d=new l(c(this),b);h.push(d);c(this).data("overlay",d)});return b.api?d:this}})(jQuery);
(function(c){function l(a,b){this.options=c.extend(true,{},l.defaults,b);this.options.jsonp=l.use_jsonp(this.options.mqlread_url);this.input=c(a);this.original=this.input.val();this.init()}c.fn.mqlkey=function(a){return this.each(function(){var b=c(this);if(b.is(":text")){var d=b.data("mqlkey");d&&d._destroy();d=new l(this,a);b.data("mqlkey",d)}})};var h=/^(\!)?(?:([a-z](?:_?[a-z0-9])*)\:)?(\/|\/?[a-z](?:_?[a-z0-9])*(?:\/[a-z](?:_?[a-z0-9])*)*)$/;l.prototype={init:function(){var a=this;this.input.bind("keyup.mqlkey",
function(b){a.textchange(b)}).bind(c.browser.msie?"paste.mqlkey":"input.mqlkey",function(b){a.textchange(b)});if(this.options.source){this.source=c(this.options.source);this.source_generate=true;this.input.bind("change.mqlkey",function(){a.source_generate=false});this.source.bind("change.mqlkey",function(){if(a.source_generate){var b=l.from(a.source.val());a.input.val(b).trigger("keyup")}})}},_destroy:function(){this.input.unbind(".mqlkey");this.source&&this.source.unbind("change.mqlkey")},textchange:function(a){clearTimeout(this.textchange_timeout);
var b=this;this.textchange_timeout=setTimeout(function(){b.textchange_delay(a)},0)},textchange_delay:function(){this.input.trigger("textchange");var a=c.trim(this.input.val());return a===this.original&&a!==""?this.valid(a):h.test(a)?a.length<this.options.minlen?this.invalid(a):this.options.check_key?this.check_key(a):this.valid(a):this.invalid(a)},check_key:function(a){var b=this;if(this.xhr){this.xhr.abort();this.xhr=null}var d={query:'{"query": {"id": null, "key": {"namespace": "'+this.options.namespace+
'", "value": "'+a+'"}}}'};clearTimeout(this.check_key.timeout);var e={url:this.options.mqlread_url,data:d,success:function(f){if(f.code==="/api/status/ok")return f.result?b.invalid(a,"Key already exists"):b.valid(a)},error:function(f){if(f)return b.invalid(f.responseText())},dataType:b.options.jsonp?"jsonp":"json"};this.check_key.timeout=setTimeout(function(){b.ac_xhr=c.ajax(e)},200)},valid:function(a){this.input.trigger("valid",a)},invalid:function(a,b){if(!b){b=this.options.minlen>1?"Key must be "+
this.options.minlen+" or more alphanumeric characters":"Key must be alphanumeric";b+=", lowercase, begin with a letter and not end with a non-alphanumeric character. Underscores are allowed but not consecutively."}this.input.trigger("invalid",b)}};c.extend(l,{defaults:{minlen:1,check_key:true,namespace:"/",mqlread_url:"http://www.freebase.com/api/service/mqlread",source:null},use_jsonp:function(a){if(!a)return false;var b=window.location.href;b=b.substr(0,b.length-window.location.pathname.length);
if(b===a)return false;return true},from:function(a){a=a.toLowerCase();a=a.replace(/[^a-z0-9]/g,"_");a=a.replace(/\_\_+/g,"_");a=a.replace(/[^a-z0-9]+$/,"");return a=a.replace(/^[^a-z]+/,"")}})})(jQuery);
(function(c,l){c(window).ajaxSend(function(a,b,d){d.type==="POST"&&b.setRequestHeader("x-acre-cache-control","max-age: 3600")});var h=l.schema.edit={init_edit_form:function(a){if(a.mode==="add")c("tbody",a.table).append(a.row);else if(a.mode==="edit")a.trigger_row.before(a.row);else throw"Unknown edit type mode: "+a.mode;a.trigger_row.before(a.submit_row);var b=a.event_prefix||"fb.schema.edit.";a.row.bind(b+"submit",function(){h.submit_edit_form(a)}).bind(b+"cancel",function(){h.cancel_edit_form(a)}).bind(b+
"error",function(d,e,f){h.row_error(e,f);a.row.removeClass("loading")}).bind(b+"success",function(){a.row.removeClass("loading")});c(".button-submit",a.submit_row).click(function(){a.row.trigger(b+"submit")});c(".button-cancel",a.submit_row).click(function(){a.row.trigger(b+"cancel")});a.row.showRow(function(){typeof a.init_form==="function"&&a.init_form(a)});a.trigger_row.hide();a.submit_row.show();c("[placeholder]",a.row).placeholder();c(window).bind("fb.lang.select",function(d,e){h.toggle_lang(a.row,
e)})},cancel_edit_form:function(a){a.row.hideRow(function(){c(this).remove()});h.clear_row_message(a.row);a.submit_row.remove();a.trigger_row.show();a.trigger.removeClass("editing")},submit_edit_form:function(a){if(!a.row.is(".loading")){document.activeElement&&c(document.activeElement).blur();h.clear_row_message(a.row);typeof a.validate_form==="function"&&a.validate_form(a);if(!h.has_row_message(a.row,"error")){a.row.addClass("loading");typeof a.submit_form==="function"&&a.submit_form(a)}}},ajax_error_handler:function(a,
b,d){var e;try{e=JSON.parse(a.responseText);e=e.messages[0].message}catch(f){e=a.responseText}if(b){h.row_error(b,e);b.removeClass("loading")}else if(d){h.form_error(d,e);d.removeClass("loading")}},row_error:function(a,b){return h.row_message(a,b,"error")},row_message:function(a,b,d){var e=c('<a class="close-msg" href="#">Close</a>').click(function(f){return l.schema.close_message.apply(this,[f,".row-msg:first"])});b=c("<span>").text(b);e=c('<td colspan="5">').append(e).append(b);e=c('<tr class="row-msg">').append(e);
d&&e.addClass("row-msg-"+d);a.before(e);e.hide().showRow();b=a.data("row-msg");if(!b){b={};a.data("row-msg",b)}if(b[d])b[d].push(e);else b[d]=[e];return e},clear_row_message:function(a){var b=a.data("row-msg");if(b){c.each(b,function(d,e){c.each(e,function(f,m){m.remove()})});a.removeData("row-msg")}},has_row_message:function(a,b){var d=a.data("row-msg");if(b)return d&&d[b]&&d[b].length;return d!=null},init_modal_form:function(a){c(document.body).append(a.form.hide());var b=a.event_prefix||"fb.schema.edit.modal.";
a.form.bind(b+"submit",function(){h.submit_modal_form(a)}).bind(b+"error",function(d,e){h.form_error(a.form,e)}).bind(b+"success",function(){a.form.removeClass("loading")});c(".modal-buttons .button-submit",a.form).click(function(){a.form.trigger(b+"submit")});a.form.overlay({close:".modal-buttons .button-cancel",closeOnClick:false,load:true,mask:{color:"#000",loadSpeed:200,opacity:0.5},onLoad:function(){typeof a.init_form==="function"&&a.init_form(a)}});c("[placeholder]",a.form).placeholder();l.schema.init_modal_help(a.form);
c(window).bind("fb.lang.select",function(d,e){h.toggle_lang(a.form,e)})},submit_modal_form:function(a){if(!a.form.is(".loading")){document.activeElement&&c(document.activeElement).blur();h.clear_form_message(a.form);typeof a.validate_form==="function"&&a.validate_form(a);if(!h.has_form_message(a.form,"error")){a.form.addClass("loading");typeof a.submit_form==="function"&&a.submit_form(a)}}},form_error:function(a,b){return h.form_message(a,b,"error")},form_message:function(a,b,d){b=c("<div class='form-msg'>").text(b).hide();
c(".form-group",a).prepend(b);b.slideDown();var e=a.data("form-msg");if(!e){e={};a.data("form-msg",e)}if(e[d])e[d].push(b);else e[d]=[b];return b},clear_form_message:function(a){var b=a.data("form-msg");if(b){c.each(b,function(d,e){c.each(e,function(f,m){m.remove()})});a.removeData("form-msg")}},has_form_message:function(a,b){var d=a.data("form-msg");if(b)return d&&d[b]&&d[b].length;return d!=null},toggle_lang:function(a,b){c("[lang]",a).each(function(){var d=c(this);c(this).attr("lang")===b?d.show().focus().blur():
d.hide()})},init_mqlkey:function(a,b){a.mqlkey(b).bind("valid",function(){c(this).next(".key-status").removeClass("invalid").removeClass("loading").addClass("valid").text("valid").attr("title","Key is available")}).bind("invalid",function(d,e){c(this).next(".key-status").removeClass("valid").removeClass("loading").addClass("invalid").text("invalid").attr("title",e)}).bind("textchange",function(){c(this).next(".key-status").removeClass("invalid").removeClass("valid").addClass("loading")})},validate_mqlkey:function(a,
b){var d=a.form||a.row,e=b.next(".key-status"),f=b.val();if(f===""){d.trigger(a.event_prefix+"error","Key is required");return false}if(f===b.data("mqlkey").original)return true;if(e.is(".invalid")){d.trigger(a.event_prefix+"error",e.attr("title"));return false}else if(e.is(".loading"))return false;return true},auto_key:function(a,b,d){var e=b.val();if(e)b.data("original",e);else{b.data("autogen",true);b.change(function(){b.data("autogen",false)});a.change(function(){if(b.data("autogen")){var f=c.trim(a.val()).toLowerCase();
f=f.replace(/[^a-z0-9]/g,"_");f=f.replace(/\_\_+/g,"_");f=f.replace(/[^a-z0-9]+$/,"");f=f.replace(/^[^a-z]+/,"");try{h.check_key(f,d)}catch(m){return}b.val(f)}})}},check_key:function(a,b){return b==="/type/domain"?h.check_key_domain(a):b==="/type/type"?h.check_key_type(a):b==="/type/property"?h.check_key_property(a):h.check_key_default(a)},check_key_domain:function(a){return h.check_key_default(a,5)},check_key_type:function(a){return h.check_key_default(a)},check_key_property:function(a){return h.check_key_default(a)},
check_key_default:function(a,b){b||(b=1);if(b===1&&a.length===1){if(/^[a-z]$/.test(a))return a}else{var d="^[a-z][a-z0-9_]";d+=b>1?"{"+(b-1)+",}$":"+$";if(RegExp(d).test(a))if(!(a.match(/__+/)||a.match(/[^a-z0-9]+$/)))return a}d=b>1?"Key must be "+b+" or more alphanumeric characters":"Key must be alphanumeric";d+=", lowercase, begin with a letter and not end with a non-alphanumeric character. Underscores are allowed but not consecutively.";throw d;}}})(jQuery,window.freebase);
