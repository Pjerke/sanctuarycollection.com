(function(t){function e(e){for(var o,c,i=e[0],s=e[1],l=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"13aa":function(t,e,n){t.exports=n.p+"img/ruth.1e4561ff.jpeg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{id:"home",app:"",color:t.color,"elevate-on-scroll":"",dark:""}},[n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo("#home")}}},[t._v("The Sanctuary Collection")]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo("#header-project")}}},[t._v("Project")]),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo("#header-unittypes")}}},[t._v("Unit Types")]),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo("#header-pricelist")}}},[t._v("Price list")]),n("v-btn",{attrs:{text:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo("#header-contact")}}},[t._v("Contact")])],1),n("v-main",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"pa-0"},[n("Main")],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-0",staticStyle:{"background-color":"#f4f4f4"},attrs:{fluid:""}},[o("v-img",{attrs:{src:n("8532"),"aspect-ratio":"1.7"}}),o("v-row",{staticClass:"text-h1 font-weight-medium font-italic text--secondary",staticStyle:{height:"15vh"},attrs:{id:"header-project",align:"center",justify:"center"}},[t._v(" Project ")]),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"8"}},[t._v(" This is the project. ")])],1),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"10"}},[o("v-img",{attrs:{src:n("e858"),"aspect-ratio":"1.7",contain:""}})],1)],1),o("v-row",{staticClass:"text-h1 font-weight-medium font-italic text--secondary",staticStyle:{height:"15vh"},attrs:{id:"header-unittypes",align:"center",justify:"center"}},[t._v(" Unit Types ")]),o("div",{staticStyle:{"background-color":"blue"}},[t._v("content")]),o("v-row",{staticClass:"text-h1 font-weight-medium font-italic text--secondary",staticStyle:{height:"15vh"},attrs:{id:"header-pricelist",align:"center",justify:"center"}},[t._v(" Price List ")]),o("div",{staticStyle:{"background-color":"blue"}},[t._v("content")]),o("v-row",{staticClass:"text-h1 font-weight-medium font-italic text--secondary",staticStyle:{height:"15vh"},attrs:{id:"header-contact",align:"center",justify:"center"}},[t._v(" Contact ")]),o("v-card",{staticClass:"ma-2 mx-auto",attrs:{width:"60vw",shaped:"",raised:"",outlined:""}},[o("v-container",{attrs:{"fill-height":""}},[o("v-row",[o("v-col",{staticClass:"my-auto",attrs:{cols:"5"}},[o("v-img",{attrs:{src:n("13aa"),height:"25vh",contain:"","aspect-ratio":1}})],1),o("v-col",{attrs:{cols:"7"}},[t._v(" My name is Ruth Panggabean and I am an in-house salesperson for XX. Please don't hesitate to contact me on any of the following media if you're interested in a unit or have any questions "),o("v-row",{staticClass:"pt-1"},[o("v-col",{attrs:{cols:"4"}},[o("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.sendWhatsapp}},[o("v-icon",{attrs:{left:""}},[t._v("fa-mobile-alt")]),t._v(" "+t._s(t.phoneNumber)+" ")],1)],1),o("v-col",[o("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.sendMail}},[o("v-icon",{attrs:{left:""}},[t._v("fa-envelope")]),t._v(" "+t._s(t.email)+" ")],1)],1)],1),o("v-row",[o("v-col",{attrs:{cols:"4"}},[o("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.openInstagram}},[o("v-icon",{attrs:{left:""}},[t._v("fab fa-instagram")]),t._v(" Instagram ")],1)],1),o("v-col",[o("v-btn",{staticClass:"text-none",attrs:{text:""},on:{click:t.openFacebook}},[o("v-icon",{attrs:{left:""}},[t._v("fab fa-facebook-square")]),t._v(" Facebook ")],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=(n("99af"),{name:"Main",data:function(){return{phoneNumber:"+31627320067",phoneMessage:"test",email:"pieter_gilissen@hotmail.com",emailMessage:"",instagram:"https://www.instagram.com/ruthverroo/",facebook:"https://www.facebook.com/ruthveronica.f.panggabean"}},methods:{sendWhatsapp:function(){window.open("https://api.whatsapp.com/send?phone=".concat(this.phoneNumber,"&text=").concat(this.phoneMessage),"_blank")},sendMail:function(){window.open("mailto:".concat(this.email,"?subject=subject&body=").concat(this.emailMessage))},openInstagram:function(){window.open(this.instagram)},openFacebook:function(){window.open(this.facebook)}}}),l=s,u=n("2877"),f=n("6544"),p=n.n(f),v=n("8336"),h=n("b0af"),d=n("62ad"),g=n("a523"),m=n("132d"),b=n("adda"),y=n("0fd9"),w=Object(u["a"])(l,c,i,!1,null,null,null),x=w.exports;p()(w,{VBtn:v["a"],VCard:h["a"],VCol:d["a"],VContainer:g["a"],VIcon:m["a"],VImg:b["a"],VRow:y["a"]});var _={name:"App",components:{Main:x},data:function(){return{offsetTop:0}},computed:{color:function(){return 0===this.offsetTop?"transparent":"#4B55BE"}},methods:{onScroll:function(t){this.offsetTop=t.target.scrollingElement.scrollTop},scrollTo:function(t){console.log(t),console.log(window)}}},j=_,k=n("7496"),C=n("40dc"),S=n("f6c4"),T=n("2fa4"),M=n("269a"),O=n.n(M),P=n("f977"),V=Object(u["a"])(j,a,r,!1,null,null,null),$=V.exports;p()(V,{VApp:k["a"],VAppBar:C["a"],VBtn:v["a"],VMain:S["a"],VSpacer:T["a"]}),O()(V,{Scroll:P["b"]});n("15f5");var I=n("f309");o["a"].use(I["a"]);var B=new I["a"]({theme:{themes:{light:{primary:"#0F711E",secondary:"#b0bec5",anchor:"#8c9eff"}}},icons:{iconfont:"fa"}}),E=B;o["a"].config.productionTip=!1,new o["a"]({vuetify:E,render:function(t){return t($)}}).$mount("#app")},8532:function(t,e,n){t.exports=n.p+"img/front.d66e5329.png"},e858:function(t,e,n){t.exports=n.p+"img/project.e73a6ca4.png"}});
//# sourceMappingURL=app.c6b30c01.js.map