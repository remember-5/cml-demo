var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([19],{350:function(t,e,n){n(351),n(352)},351:function(t,e){},352:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t){var e=t.split(";"),n={};return e.forEach(function(t){var e=t.split(":");2===e.length&&(n[e[0]]=e[1])}),n}function o(t){return t?Object.keys(t).map(function(e){return e+":"+t[e]+";"}).join(""):""}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l=n(353),c=n(0),s=function(t){return t&&t.__esModule?t:{default:t}}(c),d=function t(){i(this,t),this.props={text:{type:String,default:"确认"},size:{type:String,default:"none"},type:{type:String,default:"blue"},disabled:{type:Boolean,default:!1},btnStyle:{type:String,default:""},textStyle:{type:String,default:""},disabledStyle:{type:String,default:""},openType:{type:String,default:""},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:"当前标题"},sendMessagePath:{type:String,default:"当前分享路径"},sendMessageImg:{type:String,default:"截图"},showMessageCard:{type:Boolean,default:!1},appParameter:{type:String,default:""}},this.computed={mrBtnStyle:function(){var t=this.type,e=this.disabled,n=this.btnStyle,i=this.size,c=this.disabledStyle,s=a({},l.STYLE_MAP[t],r(n),l.BUTTON_STYLE_MAP[i]),d={opacity:.2};return"white"===t&&(d={"background-color":"rgba(0, 0, 0, 0.1)"}),o(e?a({},s,d,r(c),{"border-width":0}):s)},mrTextStyle:function(){var t=this.type,e=this.disabled,n=this.textStyle,i=this.size,c=a({},l.TEXT_STYLE_MAP[t],r(n),l.TEXT_FONTSIZE_STYLE_MAP[i]);return o(e?a({},c,{color:"#FFFFFF"}):c)}},this.methods={onclick:function(t){var e=this.type,n=this.disabled;n||this.$cmlEmit("onclick",{type:e,disabled:n})},getuserinfo:function(t){this.$cmlEmit("getuserinfo",t.detail)},contact:function(t){this.$cmlEmit("contact")},getphonenumber:function(t){this.$cmlEmit("getphonenumber",{errMsg:t.detail.errMsg,encryptedData:t.detail.encryptedData||"",iv:t.detail.iv||""})},error:function(t){this.$cmlEmit("error",{errMsg:t.detail.errMsg})},opensetting:function(t){this.$cmlEmit("opensetting")}}};e.default=new d,e.default=s.default.createComponent(e.default).getOptions()},353:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.STYLE_MAP={red:{"background-color":"#db2a36"},orange:{"background-color":"#fc9153"},white:{"background-color":"#FFFFFF","border-color":"#A5A5A5","border-width":"1px"},blue:{"background-color":"#4a4c5b"},green:{"background-color":"#50a050"}},e.TEXT_STYLE_MAP={red:{color:"#FFFFFF"},orange:{color:"#FFFFFF"},blue:{color:"#FFFFFF"},white:{color:"#3D3D3D"},green:{color:"#FFFFFF"}},e.BUTTON_STYLE_MAP={full:{width:"702cpx",height:"88cpx"},big:{width:"339cpx",height:"70cpx"},medium:{width:"218cpx",height:"60cpx"},small:{width:"157cpx",height:"44cpx"}},e.TEXT_FONTSIZE_STYLE_MAP={full:{"font-size":"36cpx"},big:{"font-size":"32cpx"},medium:{"font-size":"28cpx"},small:{"font-size":"24cpx"}}}},[350]);