(function(t){function e(e){for(var a,c,i=e[0],s=e[1],u=e[2],d=0,p=[];d<i.length;d++)c=i[d],n[c]&&p.push(n[c][0]),n[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,c=1;c<r.length;c++){var s=r[c];0!==n[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function c(t){return i.p+"js/"+({cart:"cart"}[t]||t)+"."+{cart:"c22ddbfd"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,a){r=n[t]=[e,a]});e.push(r[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(t),o=function(e){s.onerror=s.onload=null,clearTimeout(u);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");c.type=a,c.request=o,r[1](c)}n[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("1d50")},"1d50":function(t,e,r){"use strict";r.r(e);r("b731"),r("2e6c"),r("a04c");var a=r("e832"),n=r("1ea0");r("ada9"),r("7db1");a["a"].use(n["a"]);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("app-header"),r("b-container",[r("router-view")],1)],1)},c=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"nav"}},[r("b-nav",{attrs:{tabs:""}},[r("b-nav-item",[r("router-link",{attrs:{to:"/"}},[t._v("Shop")])],1),r("b-nav-item",[r("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),null!=t.cust.accountId?r("b-nav-item",[r("router-link",{attrs:{to:"/account"}},[t._v("Hi "+t._s(t.cust.firstName))])],1):t._e(),null==t.cust.accountId?r("b-nav-item",[r("login-item")],1):t._e()],1)],1)},s=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-form",{attrs:{inline:""}},[r("b-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{size:"sm",id:"username",placeholder:"Username"}}),r("b-input",{attrs:{type:"password",id:"passwordg",size:"sm",placeholder:"Password"}}),r("b-button",{attrs:{size:"sm",variant:"outline-primary"}},[t._v("Submit")])],1)],1)},d=[],l=r("94ea"),p={name:"login-item",computed:Object(l["b"])(["cust"])},m=p,b=r("a6c2"),f=Object(b["a"])(m,u,d,!1,null,null,null),v=f.exports,h={name:"app-header",components:{loginItem:v},computed:Object(l["b"])(["cust"])},g=h,y=Object(b["a"])(g,i,s,!1,null,null,null),_=y.exports,w={components:{appHeader:_}},I=w,C=Object(b["a"])(I,o,c,!1,null,null,null),O=C.exports,j={accountId:null,firstName:"Todd",lastName:"Rederburg",email:"Todd@Todd.com",userName:"Toddy1",password:"TODDISTHEBEST",createdOn:new Date("Feb 3, 2019 15:30"),active:!0,street:"55 Leddy Cres.",city:"Saskatoon",prov:"SK",postCode:"S7N4V1"},k=[{productId:"1",desc:"black diamond rope",price:219.99,available:4,rating:5,img:"/assets/static/rope.jpg/",comments:[]},{productId:"2",desc:"scarpa shoes",price:119.99,available:10,rating:5,img:"https://picsum.photos/600/300/?image=25",comments:[]},{productId:"3",desc:"arc'teryx harness",price:99.99,available:3,rating:3.9,img:"https://picsum.photos/600/300/?image=25",comments:[]},{productId:"4",desc:"flashed chalk",price:9.99,available:40,rating:4,img:"https://picsum.photos/600/300/?image=25",comments:[]},{productId:"5",desc:"black diamond ATC",price:39.99,available:5,rating:4.4,img:"https://picsum.photos/600/300/?image=25",comments:[]}],S={cartId:0,createdOn:new Date("Feb 3, 2019 21:46"),cartItems:[{cartItemId:0,quantity:2,item:{productId:"3",desc:"arc'teryx harness",price:99.99,available:3,rating:3.9,img:"https://picsum.photos/600/300/?image=25",comments:[]}},{cartItemId:1,quantity:1,item:{productId:"4",desc:"flashed chalk",price:9.99,available:40,rating:4,img:"https://picsum.photos/600/300/?image=25",comments:[]}}],active:!0},T={Comment:[{commentId:0,body:"I love this product",rating:5,edited:!1,deleted:!1}]};a["a"].use(l["a"]);var x=new l["a"].Store({state:{cust:j,prod:k,carts:S,comments:T},mutations:{},actions:{}}),M=r("4af9"),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},t._l(t.prod,function(t){return r("div",{key:t.productId},[r("product-card",{attrs:{product:t}})],1)}),0)},E=[],P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-col",{attrs:{sm:"12",md:"6",lg:"3"}},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{title:"$"+t.product.price.toString(),"img-src":t.product.img,"img-alt":"Image","img-top":"",tag:"article"}},[r("p",{staticClass:"card-text"},[t._v(t._s(t.product.desc))]),r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.addToCart}},[t._v("Add to Cart")]),r("product-modal",{attrs:{product:t.product}})],1)],1)],1)},A=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-button",{attrs:{variant:"outline-success"},on:{click:t.showModal}},[t._v("Learn More")]),r("b-modal",{ref:"myModalRef",attrs:{"hide-footer":"",title:t.product.desc}},[r("div",{staticClass:"d-block text-center"},[r("h3",[t._v(t._s(t.product.desc))]),r("b-img",{attrs:{src:t.product.img,fluid:""}}),r("p",[t._v("$"+t._s(t.product.price)+" | Rating: "+t._s(t.product.rating.toString())+" | Available: "+t._s(t.product.available.toString()))])],1),r("b-row",[r("b-col",{attrs:{sm:"4"}},[r("b-form-input",{attrs:{type:"number"}})],1),r("b-col",{attrs:{sm:"4"}},[r("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-danger",block:""},on:{click:t.hideModal}},[t._v("Close Me")])],1),r("b-col",{attrs:{sm:"4"}},[r("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-primary",block:""},on:{click:t.addToCart}},[t._v("Add To Cart")])],1)],1)],1)],1)},R=[],D={name:"product-modal",props:["product"],methods:{showModal:function(){this.$refs.myModalRef.show()},hideModal:function(){this.$refs.myModalRef.hide()},addToCart:function(){alert("you did it!")}}},q=D,z=Object(b["a"])(q,N,R,!1,null,null,null),H=z.exports,L={name:"product-card",components:{productModal:H},props:["product"],methods:{addToCart:function(){alert("you did it!")}}},F=L,J=Object(b["a"])(F,P,A,!1,null,null,null),B=J.exports,K={name:"home",components:{productCard:B},computed:Object(l["b"])(["prod"])},U=K,V=Object(b["a"])(U,$,E,!1,null,null,null),G=V.exports;a["a"].use(M["a"]),a["a"].use(n["a"]);var Q=new M["a"]({routes:[{path:"/",name:"Shop",component:G},{path:"/cart",name:"cart",component:function(){return r.e("cart").then(r.bind(null,"13f5"))}},{path:"/account",name:"account",component:function(){return r.e("cart").then(r.bind(null,"1d70"))}}]});a["a"].config.productionTip=!1,new a["a"]({store:x,router:Q,render:function(t){return t(O)}}).$mount("#app")}});
//# sourceMappingURL=app.a73c03bf.js.map