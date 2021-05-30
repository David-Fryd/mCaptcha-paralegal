(()=>{"use strict";var e,n,t,r,o,i={180:(e,n,t)=>{t.d(n,{Nj:()=>r,Z6:()=>o,yY:()=>i,yM:()=>a});var r=function(){var e;return function(){if(null==e&&null==(e=new URL(window.location.href).searchParams.get("sitekey")))throw new Error("Define sitekey in query parameter");return e}()},o={getConfig:"/api/v1/pow/config",verififyPoW:"/api/v1/pow/verify"},i=function(){var e;return function(){if(null==e&&null==(e=document.getElementById("widget__verification-checkbox")))throw new Error("mCaptcha button not found)");return e}()},a=function(){var e,n,t,r,o=function(e){return e.style.display="block"},i=function(e){return e.style.display="none"},a=function(){if(null==e){if(null==(e=document.querySelector(".widget__verification-text--before")))throw new Error("before element not found)");return e}},c=function(){if(null==n&&null==(n=document.querySelector(".widget__verification-text--after")))throw new Error("after element not found)");return n},u=function(){if(null==r&&null==(r=document.querySelector(".widget__verification-text--error")))throw new Error("before error not found)");return r},l=function(){if(null==t&&null==(t=document.querySelector(".widget__verification-text--during")))throw new Error("before during not found)");return t};return{before:function(){o(a()),i(c()),i(l()),i(u())},after:function(){i(a()),o(c()),i(l()),i(u())},during:function(){i(a()),i(c()),o(l()),i(u())},error:function(){i(a()),i(c()),i(l()),o(u())}}}},731:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(525),o=t(180);const i=function(){return e=void 0,n=void 0,i=function(){var e,n,t;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,6,,7]),e={key:o.Nj()},[4,fetch(o.Z6.getConfig,(0,r.Z)(e))];case 1:return(n=i.sent()).ok?[4,n.json()]:[3,3];case 2:return[2,i.sent()];case 3:return[4,n.json()];case 4:throw t=i.sent(),new Error(t);case 5:return[3,7];case 6:throw i.sent();case 7:return[2]}}))},new((t=void 0)||(t=Promise))((function(r,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function c(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((i=i.apply(e,n||[])).next())}));var e,n,t,i}},404:(e,n,t)=>{t.a(e,(async e=>{var n=t(720),r=t(731),o=t(792),i=t(243),a=t(180),c=e([n]);n=(c.then?await c:c)[0];var u=!1,l=function(e){return t=void 0,c=void 0,f=function(){var t,c,l,f;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(s){switch(s.label){case 0:if(u)return e.preventDefault(),[2];s.label=1;case 1:return s.trys.push([1,5,,6]),u=!0,0==a.yY().checked?(a.yM().before(),u=!1,[2]):(e.preventDefault(),a.yM().during(),[4,(0,r.Z)()]);case 2:return t=s.sent(),[4,(0,n.Z)(t)];case 3:return c=s.sent(),[4,(0,o.Z)(c)];case 4:return l=s.sent(),(0,i.Z)(l),a.yY().checked=!0,a.yM().after(),u=!1,[3,6];case 5:return f=s.sent(),a.yM().error(),console.error(f),u=!1,[3,6];case 6:return[2]}}))},new((l=void 0)||(l=Promise))((function(e,n){function r(e){try{i(f.next(e))}catch(e){n(e)}}function o(e){try{i(f.throw(e))}catch(e){n(e)}}function i(n){var t;n.done?e(n.value):(t=n.value,t instanceof l?t:new l((function(e){e(t)}))).then(r,o)}i((f=f.apply(t,c||[])).next())}));var t,c,l,f};document.querySelector(".widget__verification-container").style.display="flex",a.yY().addEventListener("click",(function(e){return l(e)}))}))},720:(e,n,t)=>{t.a(e,(async e=>{t.d(n,{Z:()=>a});var r=t(838),o=t(180),i=e([r]);r=(i.then?await i:i)[0];const a=function(e){return n=void 0,t=void 0,a=function(){var n,t;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(i){try{return n=(0,r.I)(e.salt,e.string,e.difficulty_factor),t=JSON.parse(n),[2,{key:o.Nj(),string:e.string,nonce:t.nonce,result:t.result}]}catch(e){throw e}return[2]}))},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{u(a.next(e))}catch(e){r(e)}}function c(e){try{u(a.throw(e))}catch(e){r(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}u((a=a.apply(n,t||[])).next())}));var n,t,i,a}}))},243:(e,n,t)=>{t.d(n,{Z:()=>r});const r=function(e){window.parent.postMessage(e,"*")}},792:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(525),o=t(180);const i=function(e){return n=void 0,t=void 0,a=function(){var n,t,i;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,6,,7]),[4,fetch(o.Z6.verififyPoW,(0,r.Z)(e))];case 1:return(n=a.sent()).ok?(console.debug("work verified"),[4,n.json()]):[3,3];case 2:return t=a.sent(),console.debug("token "+t.token),[2,t];case 3:return[4,n.json()];case 4:throw i=a.sent(),console.error("error: "+i.error),new Error(i);case 5:return[3,7];case 6:throw a.sent();case 7:return[2]}}))},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{u(a.next(e))}catch(e){r(e)}}function c(e){try{u(a.throw(e))}catch(e){r(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,c)}u((a=a.apply(n,t||[])).next())}));var n,t,i,a}},525:(e,n,t)=>{t.d(n,{Z:()=>r});const r=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}}},838:(e,n,t)=>{t.a(e,(async r=>{t.d(n,{I:()=>y});var o=t(716);e=t.hmd(e);var i=r([o]);o=(i.then?await i:i)[0];let a=0,c=null;function u(){return null!==c&&c.buffer===o.memory.buffer||(c=new Uint8Array(o.memory.buffer)),c}let l=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const f="function"==typeof l.encodeInto?function(e,n){return l.encodeInto(e,n)}:function(e,n){const t=l.encode(e);return n.set(t),{read:e.length,written:t.length}};function s(e,n,t){if(void 0===t){const t=l.encode(e),r=n(t.length);return u().subarray(r,r+t.length).set(t),a=t.length,r}let r=e.length,o=n(r);const i=u();let c=0;for(;c<r;c++){const n=e.charCodeAt(c);if(n>127)break;i[o+c]=n}if(c!==r){0!==c&&(e=e.slice(c)),o=t(o,r,r=c+3*e.length);const n=u().subarray(o+c,o+r);c+=f(e,n).written}return a=c,o}let p=null;function d(){return null!==p&&p.buffer===o.memory.buffer||(p=new Int32Array(o.memory.buffer)),p}let h=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function y(e,n,t){try{const w=o.__wbindgen_add_to_stack_pointer(-16);var r=s(e,o.__wbindgen_malloc,o.__wbindgen_realloc),i=a,c=s(n,o.__wbindgen_malloc,o.__wbindgen_realloc),l=a;o.gen_pow(w,r,i,c,l,t);var f=d()[w/4+0],p=d()[w/4+1];return y=f,b=p,h.decode(u().subarray(y,y+b))}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(f,p)}var y,b}h.decode()}))},716:(e,n,t)=>{e.exports=t.v(n,e.id,"1476099975f2b060264c")}},a={};function c(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,loaded:!1,exports:{}};return i[e](t,t.exports,c),t.loaded=!0,t.exports}e="function"==typeof Symbol?Symbol("webpack then"):"__webpack_then__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t=e=>{e&&(e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r=e=>!--e.r&&e(),o=(e,n)=>e?e.push(n):r(n),c.a=(i,a,c)=>{var u,l,f,s=c&&[],p=i.exports,d=!0,h=!1,y=(n,t,r)=>{h||(h=!0,t.r+=n.length,n.map(((n,o)=>n[e](t,r))),h=!1)},b=new Promise(((e,n)=>{f=n,l=()=>(e(p),t(s),s=0)}));b[n]=p,b[e]=(e,n)=>{if(d)return r(e);u&&y(u,e,n),o(s,e),b.catch(n)},i.exports=b,a((i=>{if(!i)return l();var a,c;u=(i=>i.map((i=>{if(null!==i&&"object"==typeof i){if(i[e])return i;if(i.then){var a=[];i.then((e=>{c[n]=e,t(a),a=0}));var c={[e]:(e,n)=>(o(a,e),i.catch(n))};return c}}return{[e]:e=>r(e),[n]:i}})))(i);var f=new Promise(((e,t)=>{(a=()=>e(c=u.map((e=>e[n])))).r=0,y(u,a,t)}));return a.r?f:c})).then(l,f),d=!1},c.d=(e,n)=>{for(var t in n)c.o(n,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var n=c.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),c.v=(e,n,t,r)=>{var o=fetch(c.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((n=>Object.assign(e,n.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((n=>Object.assign(e,n.instance.exports)))},c(404)})();