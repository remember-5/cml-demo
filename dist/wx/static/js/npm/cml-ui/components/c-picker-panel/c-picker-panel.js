var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([58],{310:function(e,t,n){n(311),n(312)},311:function(e,t){},312:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),c=function(){function e(){i(this,e),this.props={show:{type:Boolean,default:!1},height:{type:Number,default:500},title:{type:String,default:"请选择"},headerHeight:{type:Number,default:100},cancelBtnStyle:{type:String,default:""},confirmBtnStyle:{type:String,default:""}},this.data={},this.computed={wraperStyle:function(){return"height: "+this.height+"cpx"},headerStyle:function(){return"height: "+this.headerHeight+"cpx"},computedCancelBtn:function(){return this.cancelBtnStyle},computedConfirmBtn:function(){return this.confirmBtnStyle}},this.watch={},this.methods={cancelclick:function(){this.$cmlEmit("cancel")},confirmclick:function(){this.$cmlEmit("confirm")}}}return u(e,[{key:"beforeCreate",value:function(){}},{key:"created",value:function(){}},{key:"beforeMount",value:function(){}},{key:"mounted",value:function(){}},{key:"beforeDestroy",value:function(){}},{key:"destroyed",value:function(){}}]),e}();t.default=new c,t.default=o.default.createComponent(t.default).getOptions()}},[310]);