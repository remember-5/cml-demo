var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([11],{352:function(e,t,n){n(353),n(354)},353:function(e,t){},354:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(0),h=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(){function e(){i(this,e),this.props={checked:{type:Boolean,default:!1},label:{type:String},disabled:{type:Boolean,default:!1},position:{type:String,default:"left"},groupIndex:{type:Number,default:-1}},this.data={checkedImg:n(355),uncheckImg:n(356),innerChecked:!1},this.computed={checkStyle:function(){var e="";return this.disabled&&(e+="opacity:0.5;"),"right"==this.position?e+="position:absolute;right:0;margin-right:45cpx;":e+="margin-right:13cpx;",e},checkImg:function(){return this.innerChecked?this.checkedImg:this.uncheckImg},checkClass:function(){return this.disabled?"cml-checkbox-disabled":this.innerChecked?"cml-checkbox-checked":"cml-checkbox-uncheck"}},this.watch={checked:function(e){this.innerChecked=e}},this.methods={changeCheck:function(){if(!this.disabled){this.innerChecked=!this.innerChecked;var e={value:this.innerChecked};-1!==this.groupIndex&&(e.index=this.groupIndex),this.$cmlEmit("changeevent",e),this.$cmlEmit("change",e)}}}}return c(e,[{key:"created",value:function(){var e=this.checked;this.innerChecked=e}}]),e}();t.default=new o,t.default=h.default.createComponent(t.default).getOptions()},355:function(e,t,n){e.exports=n.p+"static/img/selected_520dcc8.png"},356:function(e,t,n){e.exports=n.p+"static/img/unselected_4e38c39.png"}},[352]);