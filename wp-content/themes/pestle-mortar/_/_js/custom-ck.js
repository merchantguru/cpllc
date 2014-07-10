/*! responsive-nav.js v1.0.14
 * https://github.com/viljamis/responsive-nav.js
 * http://responsive-nav.com
 *
 * Copyright (c) 2013 @viljamis
 * Available under the MIT license
 *//* jshint strict:false, forin:false, noarg:true, noempty:true, eqeqeq:true,
boss:true, bitwise:true, browser:true, devel:true, indent:2 *//* exported responsiveNav */var responsiveNav=function(e,t){function y(e,t){g||(g=new m(e,t));return g}var n=!!e.getComputedStyle;e.getComputedStyle||(e.getComputedStyle=function(e){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;t==="float"&&(t="styleFloat");n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()}));return e.currentStyle[t]?e.currentStyle[t]:null};return this});var r,i,s,o=t.documentElement,u=t.getElementsByTagName("head")[0],a=t.createElement("style"),f=!1,l=function(e,t,n,r){if("addEventListener"in e)try{e.addEventListener(t,n,r)}catch(i){if(typeof n!="object"||!n.handleEvent)throw i;e.addEventListener(t,function(e){n.handleEvent.call(n,e)},r)}else"attachEvent"in e&&(typeof n=="object"&&n.handleEvent?e.attachEvent("on"+t,function(){n.handleEvent.call(n)}):e.attachEvent("on"+t,n))},c=function(e,t,n,r){if("removeEventListener"in e)try{e.removeEventListener(t,n,r)}catch(i){if(typeof n!="object"||!n.handleEvent)throw i;e.removeEventListener(t,function(e){n.handleEvent.call(n,e)},r)}else"detachEvent"in e&&(typeof n=="object"&&n.handleEvent?e.detachEvent("on"+t,function(){n.handleEvent.call(n)}):e.detachEvent("on"+t,n))},h=function(e){var t=e.firstChild;while(t!==null&&t.nodeType!==1)t=t.nextSibling;return t},p=function(e,t){for(var n in t)e.setAttribute(n,t[n])},d=function(e,t){e.className+=" "+t;e.className=e.className.replace(/(^\s*)|(\s*$)/g,"")},v=function(e,t){var n=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},m=function(e,n){var s;this.options={animate:!0,transition:400,label:"☰",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(s in n)this.options[s]=n[s];d(o,this.options.jsClass);this.wrapperEl=e.replace("#","");if(!t.getElementById(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=t.getElementById(this.wrapperEl);this.wrapper.inner=h(this.wrapper);i=this.options;r=this.wrapper;this._init(this)};m.prototype={destroy:function(){this._removeStyles();v(r,"closed");v(r,"opened");r.removeAttribute("style");r.removeAttribute("aria-hidden");r=null;g=null;c(e,"load",this,!1);c(e,"resize",this,!1);c(s,"mousedown",this,!1);c(s,"touchstart",this,!1);c(s,"touchend",this,!1);c(s,"keyup",this,!1);c(s,"click",this,!1);i.customToggle?s.removeAttribute("aria-hidden"):s.parentNode.removeChild(s)},toggle:function(){if(!f){v(r,"closed");d(r,"opened");r.style.position=i.openPos;p(r,{"aria-hidden":"false"});f=!0;i.open()}else{v(r,"opened");d(r,"closed");p(r,{"aria-hidden":"true"});i.animate?setTimeout(function(){r.style.position="absolute"},i.transition+10):r.style.position="absolute";f=!1;i.close()}},handleEvent:function(t){var n=t||e.event;switch(n.type){case"mousedown":this._onmousedown(n);break;case"touchstart":this._ontouchstart(n);break;case"touchend":this._ontouchend(n);break;case"keyup":this._onkeyup(n);break;case"click":this._onclick(n);break;case"load":this._transitions(n);this._resize(n);break;case"resize":this._resize(n)}},_init:function(){d(r,"closed");this._createToggle();l(e,"load",this,!1);l(e,"resize",this,!1);l(s,"mousedown",this,!1);l(s,"touchstart",this,!1);l(s,"touchend",this,!1);l(s,"keyup",this,!1);l(s,"click",this,!1)},_createStyles:function(){a.parentNode||u.appendChild(a)},_removeStyles:function(){a.parentNode&&a.parentNode.removeChild(a)},_createToggle:function(){if(!i.customToggle){var e=t.createElement("a");e.innerHTML=i.label;p(e,{href:"#",id:"nav-toggle"});i.insert==="after"?r.parentNode.insertBefore(e,r.nextSibling):r.parentNode.insertBefore(e,r);s=t.getElementById("nav-toggle")}else{var n=i.customToggle.replace("#","");if(!t.getElementById(n))throw new Error("The custom nav toggle you are trying to select doesn't exist");s=t.getElementById(n)}},_preventDefault:function(e){if(e.preventDefault){e.preventDefault();e.stopPropagation()}else e.returnValue=!1},_onmousedown:function(t){var n=t||e.event;if(n.which!==3&&n.button!==2){this._preventDefault(t);this.toggle(t)}},_ontouchstart:function(e){s.onmousedown=null;this._preventDefault(e);this.toggle(e)},_ontouchend:function(){var e=this;r.addEventListener("click",e._preventDefault,!0);setTimeout(function(){r.removeEventListener("click",e._preventDefault,!0)},i.transition)},_onkeyup:function(t){var n=t||e.event;n.keyCode===13&&this.toggle(t)},_onclick:function(e){this._preventDefault(e)},_transitions:function(){if(i.animate){var e=r.style,t="max-height "+i.transition+"ms";e.WebkitTransition=t;e.MozTransition=t;e.OTransition=t;e.transition=t}},_calcHeight:function(){var e=r.inner.offsetHeight,t="#"+this.wrapperEl+".opened{max-height:"+e+"px}";if(n){a.innerHTML=t;t=""}},_resize:function(){if(e.getComputedStyle(s,null).getPropertyValue("display")!=="none"){p(s,{"aria-hidden":"false"});if(r.className.match(/(^|\s)closed(\s|$)/)){p(r,{"aria-hidden":"true"});r.style.position="absolute"}this._createStyles();this._calcHeight()}else{p(s,{"aria-hidden":"true"});p(r,{"aria-hidden":"false"});r.style.position=i.openPos;this._removeStyles()}i.init()}};var g;return y}(window,document);(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];r.className="fit-vids-style";r.id="fit-vids-style";r.style.display="none";r.innerHTML="&shy;<style>                 .fluid-width-video-wrapper {                   width: 100%;                                position: relative;                         padding: 0;                              }                                                                                       .fluid-width-video-wrapper iframe,          .fluid-width-video-wrapper object,          .fluid-width-video-wrapper embed {             position: absolute;                         top: 0;                                     left: 0;                                    width: 100%;                                height: 100%;                            }                                         </style>";i.parentNode.insertBefore(r,i)}t&&e.extend(n,t);return this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r=r.not("object object");r.each(function(){var t=e(this);if(this.tagName.toLowerCase()==="embed"&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)return;var n=this.tagName.toLowerCase()==="object"||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(Math.random()*999999);t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",i*100+"%");t.removeAttr("height").removeAttr("width")})})}})(jQuery);$(document).ready(function(){var e=responsiveNav("#nav",{init:function(){console.log("Responsive Nav Inited!")},open:function(){console.log("Opening…")},close:function(){console.log("Closing…")}});$(document).ready(function(){$(".main").fitVids()})});