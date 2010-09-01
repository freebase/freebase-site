/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
 
 jQuery Tools @VERSION Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: @DATE 
*/
jQuery.cookie=function(a,e,d){if(typeof e!="undefined"){d=d||{};if(e===null){e="";d=$.extend({},d);d.expires=-1}var f="";if(d.expires&&(typeof d.expires=="number"||d.expires.toUTCString)){if(typeof d.expires=="number"){f=new Date;f.setTime(f.getTime()+d.expires*24*60*60*1E3)}else f=d.expires;f="; expires="+f.toUTCString()}var c=d.path?"; path="+d.path:"",b=d.domain?"; domain="+d.domain:"";d=d.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(e),f,c,b,d].join("")}else{e=null;if(document.cookie&&
document.cookie!=""){d=document.cookie.split(";");for(f=0;f<d.length;f++){c=jQuery.trim(d[f]);if(c.substring(0,a.length+1)==a+"="){e=decodeURIComponent(c.substring(a.length+1));break}}}return e}};
jQuery.fn.textPlaceholder=function(a){a=a||"#AAA";return this.each(function(){var e=this;if(!(e.placeholder&&"placeholder"in document.createElement(e.tagName))){var d=e.style.color,f=e.getAttribute("placeholder"),c=$(e);if(e.value===""||e.value==f){e.value=f;e.style.color=a;c.data("placeholder-visible",true)}c.focus(function(){this.style.color=d;if(c.data("placeholder-visible")){c.data("placeholder-visible",false);this.value=""}});c.blur(function(){if(this.value===""){c.data("placeholder-visible",
true);this.value=f;this.style.color=a}else{this.style.color=d;c.data("placeholder-visible",false)}});e.form&&$(e.form).submit(function(){if(c.data("placeholder-visible"))e.value=""})}})};
(function(a){a.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(e,d){this.defaults.type=e;this.defaults.name=d},get:function(e,d){var f=a.extend({},this.defaults,d);if(!f.single.length)f.single="metadata";var c=a.data(e,f.single);if(c)return c;c="{}";var b=function(i){if(typeof i!="string")return i;return i=eval("("+i+")")};if(f.type=="html5"){var g={};a(e.attributes).each(function(){var i=this.nodeName;if(i.match(/^data-/))i=i.replace(/^data-/,
"");else return true;g[i]=b(this.nodeValue)})}else{if(f.type=="class"){var h=f.cre.exec(e.className);if(h)c=h[1]}else if(f.type=="elem"){if(!e.getElementsByTagName)return;h=e.getElementsByTagName(f.name);if(h.length)c=a.trim(h[0].innerHTML)}else if(e.getAttribute!=undefined)if(h=e.getAttribute(f.name))c=h;g=b(c.indexOf("{")<0?"{"+c+"}":c)}a.data(e,f.single,g);return g}}});a.fn.metadata=function(e){return a.metadata.get(this[0],e)}})(jQuery);
(function(a){a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.2",plugin:{add:function(e,d,f){e=a.ui[e].prototype;for(var c in f){e.plugins[c]=e.plugins[c]||[];e.plugins[c].push([d,f[c]])}},call:function(e,d,f){if((d=e.plugins[d])&&e.element[0].parentNode)for(var c=0;c<d.length;c++)e.options[d[c][0]]&&d[c][1].apply(e.element,f)}},contains:function(e,d){return document.compareDocumentPosition?e.compareDocumentPosition(d)&16:e!==d&&e.contains(d)},hasScroll:function(e,d){if(a(e).css("overflow")==
"hidden")return false;var f=d&&d=="left"?"scrollLeft":"scrollTop",c=false;if(e[f]>0)return true;e[f]=1;c=e[f]>0;e[f]=0;return c},isOverAxis:function(e,d,f){return e>d&&e<d+f},isOver:function(e,d,f,c,b,g){return a.ui.isOverAxis(e,f,b)&&a.ui.isOverAxis(d,c,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,
NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(e,d){return typeof e==="number"?this.each(function(){var f=this;setTimeout(function(){a(f).focus();d&&d.call(f)},e)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect",
"none")},scrollParent:function(){var e;e=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",
1))}).eq(0);return/fixed/.test(this.css("position"))||!e.length?a(document):e},zIndex:function(e){if(e!==undefined)return this.css("zIndex",e);if(this.length){e=a(this[0]);for(var d;e.length&&e[0]!==document;){d=e.css("position");if(d=="absolute"||d=="relative"||d=="fixed"){d=parseInt(e.css("zIndex"));if(!isNaN(d)&&d!=0)return d}e=e.parent()}}return 0}});a.extend(a.expr[":"],{data:function(e,d,f){return!!a.data(e,f[3])},focusable:function(e){var d=e.nodeName.toLowerCase(),f=a.attr(e,"tabindex");return(/input|select|textarea|button|object/.test(d)?
!e.disabled:"a"==d||"area"==d?e.href||!isNaN(f):!isNaN(f))&&!a(e)["area"==d?"parents":"closest"](":hidden").length},tabbable:function(e){var d=a.attr(e,"tabindex");return(isNaN(d)||d>=0)&&a(e).is(":focusable")}})}})(jQuery);
(function(a){var e=a.fn.remove;a.fn.remove=function(d,f){return this.each(function(){if(!f)if(!d||a.filter(d,[this]).length)a("*",this).add(this).each(function(){a(this).triggerHandler("remove")});return e.call(a(this),d,f)})};a.widget=function(d,f,c){var b=d.split(".")[0],g;d=d.split(".")[1];g=b+"-"+d;if(!c){c=f;f=a.Widget}a.expr[":"][g]=function(h){return!!a.data(h,d)};a[b]=a[b]||{};a[b][d]=function(h,i){arguments.length&&this._createWidget(h,i)};f=new f;f.options=a.extend({},f.options);a[b][d].prototype=
a.extend(true,f,{namespace:b,widgetName:d,widgetEventPrefix:a[b][d].prototype.widgetEventPrefix||d,widgetBaseClass:g},c);a.widget.bridge(d,a[b][d])};a.widget.bridge=function(d,f){a.fn[d]=function(c){var b=typeof c==="string",g=Array.prototype.slice.call(arguments,1),h=this;c=!b&&g.length?a.extend.apply(null,[true,c].concat(g)):c;if(b&&c.substring(0,1)==="_")return h;b?this.each(function(){var i=a.data(this,d),j=i&&a.isFunction(i[c])?i[c].apply(i,g):i;if(j!==i&&j!==undefined){h=j;return false}}):this.each(function(){var i=
a.data(this,d);if(i){c&&i.option(c);i._init()}else a.data(this,d,new f(c,this))});return h}};a.Widget=function(d,f){arguments.length&&this._createWidget(d,f)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,f){this.element=a(f).data(this.widgetName,this);this.options=a.extend(true,{},this.options,a.metadata&&a.metadata.get(f)[this.widgetName],d);var c=this;this.element.bind("remove."+this.widgetName,function(){c.destroy()});this._create();
this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(d,f){var c=d,b=this;if(arguments.length===0)return a.extend({},b.options);if(typeof d==="string"){if(f===undefined)return this.options[d];c={};c[d]=f}a.each(c,function(g,
h){b._setOption(g,h)});return b},_setOption:function(d,f){this.options[d]=f;if(d==="disabled")this.widget()[f?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",f);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,f,c){var b=this.options[d];f=a.Event(f);f.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();c=c||{};if(f.originalEvent){d=
a.event.props.length;for(var g;d;){g=a.event.props[--d];f[g]=f.originalEvent[g]}}this.element.trigger(f,c);return!(a.isFunction(b)&&b.call(this.element[0],f,c)===false||f.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(d){return e._mouseDown(d)}).bind("click."+this.widgetName,function(d){if(e._preventClickEvent){e._preventClickEvent=false;d.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(e){e.originalEvent=e.originalEvent||{};if(!e.originalEvent.mouseHandled){this._mouseStarted&&
this._mouseUp(e);this._mouseDownEvent=e;var d=this,f=e.which==1,c=typeof this.options.cancel=="string"?a(e.target).parents().add(e.target).filter(this.options.cancel).length:false;if(!f||c||!this._mouseCapture(e))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=this._mouseStart(e)!==false;if(!this._mouseStarted){e.preventDefault();
return true}}this._mouseMoveDelegate=function(b){return d._mouseMove(b)};this._mouseUpDelegate=function(b){return d._mouseUp(b)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.browser.safari||e.preventDefault();return e.originalEvent.mouseHandled=true}},_mouseMove:function(e){if(a.browser.msie&&!e.button)return this._mouseUp(e);if(this._mouseStarted){this._mouseDrag(e);return e.preventDefault()}if(this._mouseDistanceMet(e)&&
this._mouseDelayMet(e))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==false)?this._mouseDrag(e):this._mouseUp(e);return!this._mouseStarted},_mouseUp:function(e){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=e.target==this._mouseDownEvent.target;this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-
e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var e=/left|center|right/,d=/top|center|bottom/,f=a.fn.position,c=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return f.apply(this,arguments);b=a.extend({},b);var g=a(b.of),h=(b.collision||"flip").split(" "),i=b.offset?b.offset.split(" "):[0,0],j,l,n;if(b.of.nodeType===9){j=g.width();l=g.height();n={top:0,left:0}}else if(b.of.scrollTo&&b.of.document){j=g.width();l=g.height();n={top:g.scrollTop(),left:g.scrollLeft()}}else if(b.of.preventDefault){b.at="left top";j=l=
0;n={top:b.of.pageY,left:b.of.pageX}}else{j=g.outerWidth();l=g.outerHeight();n=g.offset()}a.each(["my","at"],function(){var k=(b[this]||"").split(" ");if(k.length===1)k=e.test(k[0])?k.concat(["center"]):d.test(k[0])?["center"].concat(k):["center","center"];k[0]=e.test(k[0])?k[0]:"center";k[1]=d.test(k[1])?k[1]:"center";b[this]=k});if(h.length===1)h[1]=h[0];i[0]=parseInt(i[0],10)||0;if(i.length===1)i[1]=i[0];i[1]=parseInt(i[1],10)||0;if(b.at[0]==="right")n.left+=j;else if(b.at[0]==="center")n.left+=
j/2;if(b.at[1]==="bottom")n.top+=l;else if(b.at[1]==="center")n.top+=l/2;n.left+=i[0];n.top+=i[1];return this.each(function(){var k=a(this),m=k.outerWidth(),q=k.outerHeight(),p=a.extend({},n);if(b.my[0]==="right")p.left-=m;else if(b.my[0]==="center")p.left-=m/2;if(b.my[1]==="bottom")p.top-=q;else if(b.my[1]==="center")p.top-=q/2;p.left=parseInt(p.left);p.top=parseInt(p.top);a.each(["left","top"],function(t,s){a.ui.position[h[t]]&&a.ui.position[h[t]][s](p,{targetWidth:j,targetHeight:l,elemWidth:m,
elemHeight:q,offset:i,my:b.my,at:b.at})});a.fn.bgiframe&&k.bgiframe();k.offset(a.extend(p,{using:b.using}))})};a.ui.position={fit:{left:function(b,g){var h=a(window);h=b.left+g.elemWidth-h.width()-h.scrollLeft();b.left=h>0?b.left-h:Math.max(0,b.left)},top:function(b,g){var h=a(window);h=b.top+g.elemHeight-h.height()-h.scrollTop();b.top=h>0?b.top-h:Math.max(0,b.top)}},flip:{left:function(b,g){if(g.at[0]!=="center"){var h=a(window);h=b.left+g.elemWidth-h.width()-h.scrollLeft();var i=g.my[0]==="left"?
-g.elemWidth:g.my[0]==="right"?g.elemWidth:0,j=-2*g.offset[0];b.left+=b.left<0?i+g.targetWidth+j:h>0?i-g.targetWidth+j:0}},top:function(b,g){if(g.at[1]!=="center"){var h=a(window);h=b.top+g.elemHeight-h.height()-h.scrollTop();var i=g.my[1]==="top"?-g.elemHeight:g.my[1]==="bottom"?g.elemHeight:0,j=g.at[1]==="top"?g.targetHeight:-g.targetHeight,l=-2*g.offset[1];b.top+=b.top<0?i+g.targetHeight+l:h>0?i+j+l:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(b,g){if(/static/.test(a.curCSS(b,"position")))b.style.position=
"relative";var h=a(b),i=h.offset(),j=parseInt(a.curCSS(b,"top",true),10)||0,l=parseInt(a.curCSS(b,"left",true),10)||0;i={top:g.top-i.top+j,left:g.left-i.left+l};"using"in g?g.using.call(b,i):h.css(i)};a.fn.offset=function(b){var g=this[0];if(!g||!g.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return c.call(this)}}})(jQuery);window.freebase=window.fb={};
(function(a){if(!window.console)window.console={log:a.noop,info:a.noop,debug:a.noop,warn:a.noop,error:a.noop}})(jQuery,window.freebase);(function(a,e){e.dispatch=function(d,f,c,b){if(typeof f!=="function")return false;d=a.event.fix(d||window.event);c||(c=[]);b||(b=this);return f.apply(b,[d].concat(c))}})(jQuery,window.freebase);
(function(a,e){var d={};e.get_script=function(f,c){var b=d[f];if(b)if(b.state===1)b.callbacks.push(c);else b.state===4&&c();else{b=d[f]={state:0,callbacks:[c]};a.ajax({url:f,dataType:"script",beforeSend:function(){b.state=1},success:function(){b.state=4;a.each(b.callbacks,function(g,h){h()})},error:function(){b.state=-1}})}}})(jQuery,window.freebase);
(function(a,e){a(window).bind("fb.user.signedin",function(h,i){console.log("fb.user.signnedin");e.user=i;var j=a("#nav-username a:first");if(j.length){j[0].href+=e.user.id;j.text(e.user.name)}a("#signedin").show()}).bind("fb.user.signedout",function(){console.log("fb.user.signedout");a("#signedout").show()});if(/^https?\:\/\/((www|devel)\.)?(freebase|sandbox\-freebase|branch\.qa\.metaweb|trunk\.qa\.metaweb)\.com(\:\d+)?/.test(acre.request.app_url)){var d=function(h,i){var j=h.indexOf("|"+i+"_");if(j!=
-1){j=j+2+i.length;var l=h.indexOf("|",j);if(l!=-1)return decodeURIComponent(h.substr(j,l-j))}return null},f=a.cookie("metaweb-user-info");if(f){var c=d(f,"g"),b=d(f,"u"),g=d(f,"p");g||(g="/user/"+this.name);setTimeout(function(){a(window).trigger("fb.user.signedin",{guid:c,name:b,id:g})},0)}else setTimeout(function(){a(window).trigger("fb.user.signedout")},0)}else a.ajax({url:"/acre/account/user_info",dataType:"json",success:function(h){h&&h.code==="/api/status/ok"?a(window).trigger("fb.user.signedin",
{id:h.id,guid:h.guid,name:h.username}):a(window).trigger("fb.user.signedout")},error:function(){a(window).trigger("fb.user.signedout")}})})(jQuery,window.freebase);
(function(a){a(function(){var e=a("#SearchBox .SearchBox-input,#global-search-input"),d=acre.freebase.site_host;e.suggest({service_url:d,soft:true,category:"object",parent:"#site-search-box",align:"right",status:null});var f=a("#site-search-label"),c=a("#site-search-box .fbs-pane");e.bind("fb-select",function(b,g){window.location=d+"/view"+g.id;return false}).bind("fb-pane-show",function(){f.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",function(){a.trim(e.val())===
""?f.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):f.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){f.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){f.is(":visible")||a("#site-search-label").slideDown("fast")}).blur(function(){!c.is(":visible")&&f.is(":visible")&&a("#site-search-label").slideUp("fast")});a(".SearchBox-form").submit(function(){return a.trim(a("#global-search-input").val()).length==
0?false:true});a("input, textarea").textPlaceholder()})})(jQuery,window.freebase);(function(a,e){e.disable=function(d){a(d).attr("disabled","disabled").addClass("disabled")};e.enable=function(d){a(d).removeAttr("disabled").removeClass("disabled")}})(jQuery,window.freebase);
(function(a,e){if(e.user)if(!(typeof acre==="undefined"||typeof acre.c==="undefined")){var d=acre.c;if(d&&d.id){var f=e.permission={jsonp:function(c){f.has_permission=c.result===true;console.log("has_permission",f.has_permission);a(window).trigger("fb.permission.has_permission",f.has_permission)}};a.ajax({url:acre.request.app_url+"/permission/service/has_permission",data:{id:d.id,user_id:e.user.id},dataType:"jsonp",jsonpCallback:"window.freebase.permission.jsonp"})}}})(jQuery,window.freebase);
(function(a){a.fn.showRow=function(e,d,f){d=d==="fadeIn"?"fadeIn":"slideDown";var c=this;return this.each(function(){var b=a(this).hide(),g=a("> td, > th",b).wrapInner('<div class="wrapInner" style="display: block;">');g=a(".wrapInner",g).hide();b.show();g[d](f,function(){a(this).each(function(){a(this).replaceWith(a(this).contents())});e&&e.call(c)})})};a.fn.hideRow=function(e,d,f){d=d==="fadeOut"?"fadeOut":"slideUp";var c=this;return this.each(function(){var b=a(this).show(),g=a("> td, > th",b).wrapInner('<div class="wrapInner" style="display: block;">');
a(".wrapInner",g)[d](f,function(){a(this).each(function(){a(this).replaceWith(a(this).contents())});b.hide();e&&e.call(c)})})}})(jQuery);
(function(a){function e(c,b,g){var h=this,i=c.add(this),j=c.find(g.tabs),l=b.jquery?b:c.children(b),n;j.length||(j=c.children());l.length||(l=c.parent().find(b));l.length||(l=a(b));a.extend(this,{click:function(k,m){var q=j.eq(k);if(typeof k=="string"&&k.replace("#","")){q=j.filter("[href*="+k.replace("#","")+"]");k=Math.max(j.index(q),0)}if(g.rotate){var p=j.length-1;if(k<0)return h.click(p,m);if(k>p)return h.click(0,m)}if(!q.length){if(n>=0)return h;k=g.initialIndex;q=j.eq(k)}if(k===n)return h;
m=m||a.Event();m.type="onBeforeClick";i.trigger(m,[k]);if(!m.isDefaultPrevented()){d[g.effect].call(h,k,function(){m.type="onClick";i.trigger(m,[k])});n=k;j.removeClass(g.current);q.addClass(g.current);return h}},getConf:function(){return g},getTabs:function(){return j},getPanes:function(){return l},getCurrentPane:function(){return l.eq(n)},getCurrentTab:function(){return j.eq(n)},getIndex:function(){return n},next:function(){return h.click(n+1)},prev:function(){return h.click(n-1)},destroy:function(){j.unbind(g.event).removeClass(g.current);
l.find("a[href^=#]").unbind("click.T");return h}});a.each("onBeforeClick,onClick".split(","),function(k,m){a.isFunction(g[m])&&a(h).bind(m,g[m]);h[m]=function(q){a(h).bind(m,q);return h}});if(g.history&&a.fn.history){a.tools.history.init(j);g.event="history"}j.each(function(k){a(this).bind(g.event,function(m){h.click(k,m);return m.preventDefault()})});l.find("a[href^=#]").bind("click.T",function(k){h.click(a(this).attr("href"),k)});if(location.hash)h.click(location.hash);else if(g.initialIndex===
0||g.initialIndex>0)h.click(g.initialIndex)}a.tools=a.tools||{version:"@VERSION"};a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(c,b){d[c]=b}};var d={"default":function(c,b){this.getPanes().hide().eq(c).show();b.call()},fade:function(c,b){var g=this.getConf(),h=g.fadeOutSpeed,i=this.getPanes();h?i.fadeOut(h):i.hide();i.eq(c).fadeIn(g.fadeInSpeed,b)},slide:function(c,b){this.getPanes().slideUp(200);
this.getPanes().eq(c).slideDown(400,b)},ajax:function(c,b){this.getPanes().eq(0).load(this.getTabs().eq(c).attr("href"),b)}},f;a.tools.tabs.addEffect("horizontal",function(c,b){f||(f=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){a(this).hide()});this.getPanes().eq(c).animate({width:f},function(){a(this).show();b.call()})});a.fn.tabs=function(c,b){var g=this.data("tabs");if(g){g.destroy();this.removeData("tabs")}if(a.isFunction(b))b={onBeforeClick:b};b=a.extend({},
a.tools.tabs.conf,b);this.each(function(){g=new e(a(this),c,b);a(this).data("tabs",g)});return b.api?g:this}})(jQuery);
(function(a){function e(c,b,g){var h=g.relative?c.position().top:c.offset().top,i=g.relative?c.position().left:c.offset().left,j=g.position[0];h-=b.outerHeight()-g.offset[0];i+=c.outerWidth()+g.offset[1];var l=b.outerHeight()+c.outerHeight();if(j=="center")h+=l/2;if(j=="bottom")h+=l;j=g.position[1];c=b.outerWidth()+c.outerWidth();if(j=="center")i-=c/2;if(j=="left")i-=c;return{top:h,left:i}}function d(c,b){var g=this,h=c.add(g),i,j=0,l=0,n=c.attr("title"),k=f[b.effect],m,q=c.is(":input"),p=q&&c.is(":checkbox, :radio, select, :button, :submit"),
t=c.attr("type"),s=b.events[t]||b.events[q?p?"widget":"input":"def"];if(!k)throw'Nonexistent effect "'+b.effect+'"';s=s.split(/,\s*/);if(s.length!=2)throw"Tooltip: bad events configuration for "+t;c.bind(s[0],function(o){clearTimeout(j);if(b.predelay)l=setTimeout(function(){g.show(o)},b.predelay);else g.show(o)}).bind(s[1],function(o){clearTimeout(l);if(b.delay)j=setTimeout(function(){g.hide(o)},b.delay);else g.hide(o)});if(n&&b.cancelDefault){c.removeAttr("title");c.data("title",n)}a.extend(g,{show:function(o){if(!i){if(n)i=
a(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(n);else if(b.tip)i=a(b.tip).eq(0);else{i=c.next();i.length||(i=c.parent().next())}if(!i.length)throw"Cannot find tooltip for "+c;}if(g.isShown())return g;i.stop(true,true);var r=e(c,i,b);o=o||a.Event();o.type="onBeforeShow";h.trigger(o,[r]);if(o.isDefaultPrevented())return g;r=e(c,i,b);i.css({position:"absolute",top:r.top,left:r.left});m=true;k[0].call(g,function(){o.type="onShow";m="full";h.trigger(o)});r=b.events.tooltip.split(/,\s*/);
i.bind(r[0],function(){clearTimeout(j);clearTimeout(l)});r[1]&&!c.is("input:not(:checkbox, :radio), textarea")&&i.bind(r[1],function(u){u.relatedTarget!=c[0]&&c.trigger(s[1].split(" ")[0])});return g},hide:function(o){if(!i||!g.isShown())return g;o=o||a.Event();o.type="onBeforeHide";h.trigger(o);if(!o.isDefaultPrevented()){m=false;f[b.effect][1].call(g,function(){o.type="onHide";m=false;h.trigger(o)});return g}},isShown:function(o){return o?m=="full":m},getConf:function(){return b},getTip:function(){return i},
getTrigger:function(){return c}});a.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(o,r){a.isFunction(b[r])&&a(g).bind(r,b[r]);g[r]=function(u){a(g).bind(r,u);return g}})}a.tools=a.tools||{version:"@VERSION"};a.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},
layout:"<div/>",tipClass:"tooltip"},addEffect:function(c,b,g){f[c]=[b,g]}};var f={toggle:[function(c){var b=this.getConf(),g=this.getTip();b=b.opacity;b<1&&g.css({opacity:b});g.show();c.call()},function(c){this.getTip().hide();c.call()}],fade:[function(c){var b=this.getConf();this.getTip().fadeTo(b.fadeInSpeed,b.opacity,c)},function(c){this.getTip().fadeOut(this.getConf().fadeOutSpeed,c)}]};a.fn.tooltip=function(c){var b=this.data("tooltip");if(b)return b;c=a.extend(true,{},a.tools.tooltip.conf,c);
if(typeof c.position=="string")c.position=c.position.split(/,?\s/);this.each(function(){b=new d(a(this),c);a(this).data("tooltip",b)});return c.api?b:this}})(jQuery);
(function(a,e){var d=e.schema={init_row_menu:function(f){a(".row-menu-trigger",f).each(function(){var c=a(this);c.tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-10,-10],effect:"fade",delay:300});c.parents("tr:first").hover(d.row_menu_hoverover,d.row_menu_hoverout)})},row_menu_hoverover:function(){var f=a(this);f.addClass("row-hover");a(".row-menu-trigger",f).css("visibility","visible")},row_menu_hoverout:function(){var f=a(this);a(".row-menu-trigger",f).css("visibility","hidden");
f.removeClass("row-hover")},close_message:function(f,c){var b=a(this).parents(c);b.is("tr")?b.hideRow(function(){b.remove()}):b.slideUp(function(){b.remove()});return false}};a(function(){a.tablesorter.addParser({id:"schemaName",is:function(){return false},format:function(c){return a(c).text().toLowerCase()},type:"text"});a.tablesorter.addParser({id:"commaDigit",is:function(){return false},format:function(c){return parseInt(c.replace(/\,/g,""))},type:"numeric"});a.tablesorter.defaults.cssAsc="column-header-asc";
a.tablesorter.defaults.cssDesc="column-header-desc";a.tablesorter.defaults.cssHeader="column-header";d.init_row_menu();a(".blurb-trigger").click(function(){var c=a(this),b=c.siblings(".blurb"),g=c.siblings(".blob");if(g.is(":hidden")){g.show();b.hide();c.text("Less")}else{g.hide();b.show();c.text("More")}});var f=a(".breadcrumb-sibling-trigger").outerWidth();a(".breadcrumb-sibling-trigger").tooltip({events:{def:"click,mouseout"},position:"bottom right",offset:[-5,-f],effect:"fade",delay:300,onBeforeShow:function(){this.getTrigger().addClass("active")},
onHide:function(){this.getTrigger().removeClass("active")}})})})(jQuery,window.freebase);
(function(a,e){var d=e.schema.type={init:function(){a("#included-types-table .tbody-header, #incoming-properties-table .tbody-header").each(function(){var f=a(this);f.hasClass("expanded")||f.data("ajax",true);f.click(d.toggle)});d.init_tooltips()},init_tooltips:function(f){a(".return-link-trigger",f).tooltip({events:{def:"click,mouseout"},position:"top center",effect:"fade",delay:300,offset:[-8,0]})},toggle:function(){var f=a(this);if(f.data("ajax")){if(!f.is(".loading")){f.addClass("loading");a.ajax({url:f.attr("data-url"),
dataType:"json",success:function(c){c=a(c.result.html).hide();f.parents("thead:first").after(c);e.schema.init_row_menu(c);d.init_tooltips(c);d._toggle(f)},complete:function(){f.removeClass("loading");f.removeData("ajax")}})}}else d._toggle(f)},_toggle:function(f){var c=f.parents("thead:first").next("tbody:first");if(f.is(".expanded")){c.hide();f.removeClass("expanded");a(".tbody-header-title",f).removeClass("expanded")}else{c.css("display","table-row-group");f.addClass("expanded");a(".tbody-header-title",
f).addClass("expanded")}},init_edit:function(){a(".edit").show()},type_settings:function(f,c){var b=a(this);e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.type_settings_begin(b,c)});return false},add_property:function(f,c){var b=a(this);if(b.is(".editing"))return false;b.addClass("editing");e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.add_property_begin(b,c)});return false},delete_property:function(f,c){var b=a(this);
if(b.is(".editing"))return false;b.addClass("editing");b.parents(".tooltip:first").siblings(".row-menu-trigger:first").data("tooltip").hide();e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.delete_property_begin(b,c)});return false},undo_delete_property:function(){var f=a(this);if(f.is(".editing"))return false;f.addClass("editing");var c=f.metadata();e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.undo_delete_property_begin(f,
c)});return false},edit_property:function(f,c){var b=a(this);if(b.is(".editing"))return false;b.addClass("editing");b.parents(".tooltip:first").siblings(".row-menu-trigger:first").data("tooltip").hide();e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.edit_property_begin(b,c)});return false},add_included_type:function(f,c){var b=a(this);if(b.is(".editing"))return false;b.addClass("editing");e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",
function(){d.edit.add_included_type_begin(b,c)});return false},delete_included_type:function(f,c,b){f.stopPropagation();var g=a(this);if(g.is(".editing"))return false;g.addClass("editing");e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.delete_included_type_begin(g,c,b)});return false},undo_delete_included_type:function(f,c,b){var g=a(this);if(g.is(".editing"))return false;g.addClass("editing");e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",
function(){d.edit.undo_delete_included_type_begin(g,c,b)});return false},reverse_property:function(f,c,b){var g=a(this);if(g.is(".editing"))return false;g.addClass("editing");g.parents(".tooltip:first").siblings(".row-menu-trigger:first").data("tooltip").hide();e.get_script(acre.request.app_url+"/schema/MANIFEST/type-edit.mf.js",function(){d.edit.reverse_property_begin(g,c,b)});return false}};a(window).bind("fb.permission.has_permission",function(f,c){console.log(acre.c.id,"permits",e.user.id,c);
c&&d.init_edit()});a(d.init)})(jQuery,window.freebase);
