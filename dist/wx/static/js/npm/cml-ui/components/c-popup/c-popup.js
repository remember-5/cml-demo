var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([56],{238:function(t,e,n){n(239),n(240)},239:function(t,e){},240:function(t,e,n){function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=n(15),s=a(i),l=n(0),r=a(l),c=s.default,u=function t(){o(this,t),this.props={mask:{type:Boolean,default:!0},show:{type:Boolean,default:!1},center:{type:Boolean,default:!0},position:{type:String,default:""}},this.data={animationData:c()},this.computed={maskClass:function(){return this.mask?"has-mask":"no-mask"},containerStyle:function(){var t="";return this.center&&(t+="align-items:center;justify-content:center;"),t},contentStyle:function(){var t="position: absolute;left:0;right:0;top:0;bottom:0;";switch(this.position){case"top":t=t.replace("bottom:0;","display:flex;flex-direction:column;");break;case"right":t=t.replace("left:0;","display:flex;flex-direction:row;");break;case"bottom":t=t.replace("top:0;","display:flex;flex-direction:column;");break;case"left":t=t.replace("right:0;","display:flex;flex-direction:row;");break;default:t="position:relative;"}return t}},this.watch={},this.methods={closeevent:function(){this.$cmlEmit("close")},contentTap:function(){},showMask:function(){this.animationData=c().opacity(.4).backgroundColor("#25262d").step({duration:300,timingFunction:"linear",delay:0}).export()},hideMask:function(){this.animationData=c().opacity(0).step({duration:300,timingFunction:"linear",delay:0}).export()}}};e.default=new u,e.default=r.default.createComponent(e.default).getOptions()}},[238]);