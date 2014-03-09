/**
 * Copyright (c) 2013, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
(function(t,r){function e(t,r,e){return new n(t,r||null,e||[])}function n(t,r,e){function n(e,n){if(c===h)throw new Error("Generator is already running");if(c===f)throw new Error("Generator has already finished");for(;;){var i=o.delegate;if(i){try{var a=i.generator[e](n);e="next",n=void 0}catch(p){o.delegate=null,e="throw",n=p;continue}if(!a.done)return c=s,a;o[i.resultName]=a.value,o.next=i.nextLoc,o.delegate=null}if("next"===e){if(c===l&&"undefined"!=typeof n)throw new TypeError("attempt to send "+JSON.stringify(n)+" to newborn generator");c===s?o.sent=n:delete o.sent}else if("throw"===e){if(c===l)throw c=f,n;o.dispatchException(n)&&(e="next",n=void 0)}c=h;try{var y=t.call(r,o);c=o.done?f:s;var a={value:y,done:o.done};if(y!==u)return a;o.delegate&&"next"===e&&(n=void 0)}catch(d){"next"===e?o.dispatchException(d):n=d}}}var i=this,o=new a(e),c=l;i.next=n.bind(i,"next"),i.throw=n.bind(i,"throw")}function i(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2]),this.tryEntries.push(r)}function o(t,r){var e=t.completion||{};e.type=0===r?"normal":"return",delete e.arg,t.completion=e}function a(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(i,this),this.reset()}var c=Object.prototype.hasOwnProperty;if(!t.wrapGenerator){t.wrapGenerator=e,"undefined"!=typeof exports&&(exports.wrapGenerator=e);var l="suspendedStart",s="suspendedYield",h="executing",f="completed",u={};e.mark=function(t){return t.constructor=r,t},"GeneratorFunction"!==r.name&&(r.name="GeneratorFunction"),e.isGeneratorFunction=function(t){var e=t&&t.constructor;return e?r.name===e.name:!1},n.prototype.toString=function(){return"[object Generator]"},a.prototype={constructor:a,reset:function(){this.prev=0,this.next=0,this.sent=void 0,this.done=!1,this.delegate=null,this.tryEntries.forEach(o);for(var t,r=0;c.call(this,t="t"+r)||20>r;++r)this[t]=null},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},keys:function(t){var r=[];for(var e in t)r.push(e);r.reverse();var n={};return function(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},dispatchException:function(t){function r(r,n){return o.type="throw",o.arg=t,e.next=r,!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=c.call(i,"catchLoc"),l=c.call(i,"finallyLoc");if(a&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},_findFinallyEntry:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&c.call(e,"finallyLoc")&&(e.finallyLoc===t||this.prev<e.finallyLoc))return e}},abrupt:function(t,r){var e=this._findFinallyEntry(),n=e?e.completion:{};return n.type=t,n.arg=r,e?this.next=e.finallyLoc:this.complete(n),u},complete:function(t){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type&&(this.rval=t.arg,this.next="end"),u},finish:function(t){var r=this._findFinallyEntry(t);return this.complete(r.completion)},"catch":function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var i=n.arg;o(e,r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={generator:t,resultName:r,nextLoc:e},u}}}}).apply(this,Function("return [this, function GeneratorFunction(){}]")());