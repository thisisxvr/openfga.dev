!function(){"use strict";var e,t,n,f,r,a={},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,loaded:!1,exports:{}};return a[e].call(n.exports,n,n.exports,c),n.loaded=!0,n.exports}c.m=a,e=[],c.O=function(t,n,f,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],f=e[u][1],r=e[u][2];for(var o=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(c.O).every((function(e){return c.O[e](n[d])}))?n.splice(d--,1):(o=!1,r<a&&(a=r));if(o){e.splice(u--,1);var b=f();void 0!==b&&(t=b)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,f,r]},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},c.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);c.r(r);var a={};t=t||[null,n({}),n([]),n(n)];for(var o=2&f&&e;"object"==typeof o&&!~t.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},c.d(r,a),r},c.d=function(e,t){for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce((function(t,n){return c.f[n](e,t),t}),[]))},c.u=function(e){return"assets/js/"+({53:"935f2afb",82:"f2293519",184:"da47cdd3",217:"4030e01c",364:"c0216763",839:"12222535",918:"74b790b4",933:"1c18e9d1",980:"c1effc01",1026:"c5a83edb",1705:"09ae4137",1817:"1b6f9b50",1913:"66705ac8",2198:"0720899f",2336:"ed2d010e",2450:"acf022e4",2452:"63b646c1",2635:"d027ab77",2744:"3827dd5a",3077:"6786195a",3237:"1df93b7f",3500:"fb21f531",3510:"19156113",3603:"da1c8cf6",4446:"208aa761",4640:"fd623b45",4833:"5af03414",4889:"758972bd",4956:"e74060df",5007:"b353b515",5957:"2aa557c7",6272:"9d245810",6403:"7bbc0b76",6599:"f2fbbf46",6734:"16b4f906",7252:"4bd95953",7264:"09827740",7399:"865cdd38",7571:"ed0ef0b3",7626:"fba7836a",7918:"17896441",7920:"1a4e3797",8018:"a36c58ef",8421:"23374ca6",8592:"common",8883:"4a075682",9065:"15d97348",9218:"f50a8a78",9295:"8b8eeb75",9346:"8df6dade",9367:"426218f8",9462:"6fa91d53",9514:"1be78505"}[e]||e)+"."+{53:"35e7b5e3",82:"2eedcd73",184:"0efec626",217:"228340b6",364:"3d4264f7",839:"9aad4eb1",918:"0f56b6c6",933:"1ba6f170",980:"3e59cf4e",1026:"e4ad9efe",1705:"c779fb21",1817:"935e4ddc",1913:"9edd5e18",2198:"b54cc324",2336:"b60014b6",2450:"36d92922",2452:"772d1c43",2635:"a2d73cbd",2744:"39bec830",3077:"0665f40a",3237:"fe1cf78b",3500:"7f76784b",3510:"b0e09c54",3603:"50c8c653",4446:"7d7c0983",4640:"75e57a58",4681:"baddb156",4833:"d40352c4",4889:"c05454b0",4956:"94e533a0",4972:"87e53e9a",5007:"b53131dd",5525:"990d1060",5957:"528a34d8",6272:"015fe741",6403:"06bf1cce",6599:"5dec8e17",6734:"68358455",7252:"c76c72c0",7264:"1296d300",7399:"f3c3f320",7571:"6efe8496",7626:"a098fa70",7918:"7132a62b",7920:"571042c0",8018:"c08e30bb",8421:"f6aa0276",8443:"eaaa1d40",8592:"62bff8e8",8883:"c57acfba",9065:"857ff7da",9218:"469de371",9295:"4c9f9027",9346:"5dd31eb5",9367:"25b9c0e1",9462:"61991efc",9514:"4628943b"}[e]+".js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f={},r="openfga.dev:",c.l=function(e,t,n,a){if(f[e])f[e].push(t);else{var o,d;if(void 0!==n)for(var b=document.getElementsByTagName("script"),u=0;u<b.length;u++){var i=b[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==r+n){o=i;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.setAttribute("data-webpack",r+n),o.src=e),f[e]=[t];var l=function(t,n){o.onerror=o.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)}},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},c.p="/openfga.dev/",c.gca=function(e){return e={12222535:"839",17896441:"7918",19156113:"3510","935f2afb":"53",f2293519:"82",da47cdd3:"184","4030e01c":"217",c0216763:"364","74b790b4":"918","1c18e9d1":"933",c1effc01:"980",c5a83edb:"1026","09ae4137":"1705","1b6f9b50":"1817","66705ac8":"1913","0720899f":"2198",ed2d010e:"2336",acf022e4:"2450","63b646c1":"2452",d027ab77:"2635","3827dd5a":"2744","6786195a":"3077","1df93b7f":"3237",fb21f531:"3500",da1c8cf6:"3603","208aa761":"4446",fd623b45:"4640","5af03414":"4833","758972bd":"4889",e74060df:"4956",b353b515:"5007","2aa557c7":"5957","9d245810":"6272","7bbc0b76":"6403",f2fbbf46:"6599","16b4f906":"6734","4bd95953":"7252","09827740":"7264","865cdd38":"7399",ed0ef0b3:"7571",fba7836a:"7626","1a4e3797":"7920",a36c58ef:"8018","23374ca6":"8421",common:"8592","4a075682":"8883","15d97348":"9065",f50a8a78:"9218","8b8eeb75":"9295","8df6dade":"9346","426218f8":"9367","6fa91d53":"9462","1be78505":"9514"}[e]||e,c.p+c.u(e)},function(){var e={1303:0,532:0};c.f.j=function(t,n){var f=c.o(e,t)?e[t]:void 0;if(0!==f)if(f)n.push(f[2]);else if(/^(1303|532)$/.test(t))e[t]=0;else{var r=new Promise((function(n,r){f=e[t]=[n,r]}));n.push(f[2]=r);var a=c.p+c.u(t),o=new Error;c.l(a,(function(n){if(c.o(e,t)&&(0!==(f=e[t])&&(e[t]=void 0),f)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,f[1](o)}}),"chunk-"+t,t)}},c.O.j=function(t){return 0===e[t]};var t=function(t,n){var f,r,a=n[0],o=n[1],d=n[2],b=0;if(a.some((function(t){return 0!==e[t]}))){for(f in o)c.o(o,f)&&(c.m[f]=o[f]);if(d)var u=d(c)}for(t&&t(n);b<a.length;b++)r=a[b],c.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return c.O(u)},n=self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();