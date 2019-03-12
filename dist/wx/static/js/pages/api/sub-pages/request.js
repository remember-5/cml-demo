var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([5],{179:function(e,t,n){n(180),n(181)},180:function(e,t){},181:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(182),a=o(r),i=n(184),s=o(i),u=n(185),f=o(u),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(0),l=o(c);t.default={data:{title:"",subtitle:"网络请求",respones:[],cell:{title:"网络请求",list:[{title:"",btnText:"点击发起"}]},map:{get:"以 cml.get 发起请求",post:"以 cml.post 发起请求",request:"以 cml.request 发起 put 请求"},isShowLoading:!1},beforeCreate:function(e){this.method=e.method,this.title=["cml",this.method].join(".")},created:function(){this.cell.list[0].title=this.map[this.method]},methods:{onBtnClicked:function(e){var t=this,n=this.method;this.showLoading(),"get"===n&&(0,f.default)({url:"https://postman-echo.com/get?name=get"}).then(function(e){t.respones=t.flatResponses(e),t.hideLoading()}),"post"===n&&(0,s.default)({url:"https://postman-echo.com/post?name=post",data:{name:"cml"}}).then(function(e){t.respones=t.flatResponses(e),t.hideLoading()}),"request"===n&&(0,a.default)({url:"https://postman-echo.com/put?name=request",data:{name:"cml"},method:"PUT"}).then(function(e){t.respones=t.flatResponses(e),t.hideLoading()})},flatResponses:function(e){var t=[];return e&&Object.keys(e).filter(function(e){return~["args","headers","url","data"].indexOf(e)}).forEach(function(n){"string"==typeof e[n]&&t.push({name:n,value:e[n]}),"object"===d(e[n])&&t.push({name:n,child:Object.entries(e[n]).map(function(e){return e.join(":")})})}),t},showLoading:function(){this.isShowLoading=!0},hideLoading:function(){this.isShowLoading=!1}}},t.default=l.default.createPage(t.default).getOptions()},182:function(e,t,n){function o(e){var t=e.url,n=e.data,o=void 0===n?{}:n,a=e.method,u=void 0===a?"GET":a,f=e.header,d=void 0===f?{}:f,c=e.contentType,l=void 0===c?"form":c,p=e.setting,h=void 0===p?{apiPrefix:(0,s.isNeedApiPrefix)(t)}:p,y=e.resDataType,m=void 0===y?"json":y;switch(h.apiPrefix&&(t=(0,s.addApiPrefix)(t)),l){case"form":"string"!=typeof o&&(o=(0,s.queryStringify)(o)),d=r({},d,{"Content-Type":"application/x-www-form-urlencoded"});break;case"json":"string"!=typeof o&&(o=JSON.stringify(o)),d=r({},d,{"Content-Type":"application/json"})}return new Promise(function(e,n){i.default.request({url:t,body:o,setting:h,method:u,headers:d,cb:function(t){var o=t.status,r=t.data;o>=200&&o<300?("json"===m&&(r=(0,s.tryJsonParse)(r)),e(r)):n("http statusCode:"+o)}})})}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=o;var a=n(20),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(4)},183:function(e,t){function n(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.res=e,t.type="http",t}function o(e){return e.json().catch(function(t){throw t&&(t.type="json",t.res=e),t})}function r(e){var t=new FormData;return Object.keys(e).forEach(function(n){void 0!==e[n]&&t.append(n,e[n])}),t}function a(e){var t={};return Object.keys(e).forEach(function(n){var o=e[n];o instanceof Array&&(o=o[0]),t[n.toLowerCase()]=o}),JSON.stringify(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.parseHeader=a;var i={"Content-Type":"application/x-www-form-urlencoded"},s={credentials:"same-origin"},u={form:"application/x-www-form-urlencoded",json:"application/json"};t.default={defaultHeaders:i,defaultOptions:s,defaultType:"form",contentTypeMap:u,filterStatus:n,parseJSON:o,toForm:r,parseHeader:a}},184:function(e,t,n){function o(e){var t=e.url,n=e.data,o=void 0===n?{}:n,a=e.header,u=void 0===a?{}:a,f=e.contentType,d=void 0===f?"form":f,c=e.setting,l=void 0===c?{apiPrefix:(0,s.isNeedApiPrefix)(t)}:c,p=e.resDataType,h=void 0===p?"json":p;switch(l.apiPrefix&&(t=(0,s.addApiPrefix)(t)),d){case"form":"string"!=typeof o&&(o=(0,s.queryStringify)(o)),u=r({},u,{"Content-Type":"application/x-www-form-urlencoded"});break;case"json":"string"!=typeof o&&(o=JSON.stringify(o)),u=r({},u,{"Content-Type":"application/json"})}return new Promise(function(e,n){i.default.request({url:t,body:o,setting:l,method:"POST",headers:u,cb:function(t){var o=t.status,r=t.data;t.headers,o>=200&&o<300?("json"===h&&(r=(0,s.tryJsonParse)(r)),e(r)):n("http statusCode:"+o)}})})}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=o;var a=n(20),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(4)},185:function(e,t,n){function o(e){var t=e.url,n=e.data,o=void 0===n?{}:n,r=e.header,s=void 0===r?{}:r,u=e.setting,f=void 0===u?{apiPrefix:(0,i.isNeedApiPrefix)(t)}:u,d=e.resDataType,c=void 0===d?"json":d;return f.apiPrefix&&(t=(0,i.addApiPrefix)(t)),o&&!(0,i.isEmpty)(o)&&(0,i.queryStringify)(o)&&(-1===t.indexOf("?")&&(t+="?"),t+=(0,i.queryStringify)(o)),new Promise(function(e,n){a.default.request({url:t,body:"",method:"GET",setting:f,headers:s,cb:function(t){var o=t.status,r=t.data;o>=200&&o<300?("json"===c&&(r=(0,i.tryJsonParse)(r)),e(r)):n("http statusCode:"+o)}})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(20),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=n(4)},20:function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(183),i=n(1),s=function(){function e(){o(this,e)}return r(e,[{key:"request",value:function(e){var t=e.url,n=e.body,o=e.headers,r=e.method,i=e.cb;wx.request({url:t,data:n,dataType:"text",method:r,header:o,success:function(e){i({status:e.statusCode,data:e.data,headers:(0,a.parseHeader)(e.header)})},fail:function(e){throw e}})}}]),e}();t.default=new s,(0,i.copyProtoProperty)(t.default)}},[179]);