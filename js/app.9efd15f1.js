(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var o=a[s];0!==i[o]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i={app:0},r=[];function o(t){return l.p+"js/"+({addpost:"addpost",admin:"admin",post:"post",profile:"profile"}[t]||t)+"."+{addpost:"26137ba3",admin:"c35317f7",post:"6311de67",profile:"0f66272c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={post:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var n="css/"+({addpost:"addpost",admin:"admin",post:"post",profile:"profile"}[t]||t)+"."+{addpost:"31d6cfe0",admin:"31d6cfe0",post:"c4cca4c4",profile:"31d6cfe0"}[t]+".css",i=l.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===n||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete s[t],p.parentNode.removeChild(p),a(r)},p.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){s[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/qcbh/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},4360:function(t,e,a){"use strict";a("b0c0");var n=a("2b0e"),s=a("2f62");n["a"].use(s["a"]);var i=new s["a"].Store({state:{isAuth:!1,user:{name:""},post:{totalPost:0}},getters:{},mutations:{IS_AUTH:function(t){t.isAuth=!t.isAuth},SET_NAME:function(t,e){t.user.name=e},TOTAL_POST:function(t,e){t.post.totalPost=e}},actions:{}});e["a"]=i},"4f8e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Breadcrumb"),a("router-view"),a("Footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"container-fluid head"},[n("div",{staticClass:"bgfade"},[n("div",{staticClass:"row"},[n("ul",{staticClass:"nav justify-content-end text-white pt-2 fs-3"},[n("div",{staticClass:"btn-group"},[n("button",{staticClass:"\n                btn btn-light\n                dropdown-toggle\n                h-75\n                align-self-center\n                me-3\n                disabled\n              ",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v(" Danh sach noi dung thong tin ")]),n("ul",{staticClass:"dropdown-menu dropdown-menu-end"},t._l(t.ddmenus,(function(e){return n("li",{key:e.title},[n("a",{staticClass:"dropdown-item",attrs:{href:e.rul}},[t._v(" "+t._s(e.title)+" ")])])})),0)]),t._m(0),t._l(t.menus,(function(t){return n("li",{key:t.icon,staticClass:"nav-item"},[n("a",{staticClass:"nav-link disabled",staticStyle:{color:"white"},attrs:{"aria-current":"page",href:t.url}},[n("i",{staticClass:"bi",class:t.icon})])])}))],2)]),n("div",{staticClass:"row container",staticStyle:{"margin-top":"-20px"}},[n("div",{staticClass:"col-2 position-relative",staticStyle:{"min-height":"150px"}},[n("router-link",{staticClass:"\n              navbar-brand\n              position-absolute\n              top-50\n              start-50\n              translate-middle\n            ",attrs:{to:"/"}},[n("img",{staticStyle:{margin:"0"},attrs:{src:a("fd4b"),alt:""}})])],1),n("div",{staticClass:"col-7 text-light align-self-center border-start px-4",staticStyle:{"margin-left":"-15px"}},[t._v(" 《 Quỷ cốc Bát Hoang 》 Là một game thế giới mở sanbox tu tiên trò chơi. Kết hợp tu tiên hệ thống cùng Sơn Hải kinh văn hóa bối cảnh, thể nghiệm từ phàm nhân từng bước một tu hành trưởng thành là cường giả quá trình, cùng Sơn Hải kinh bên trong các loại yêu, thú chiến đấu. Ngươi là có hay không có thể thủ vững bản tâm, cùng khó khăn làm đấu tranh. ")])]),n("div",{staticClass:"d-none d-xxl-block"},[n("div",{staticClass:"row container text-light",staticStyle:{"margin-top":"-10px"}},[n("ul",{staticClass:"nav col-2",staticStyle:{"text-align":"right"}},[t._m(1),n("li",{staticClass:"nav-item px-4"},[t._v(" Bai viet "),n("h3",[t._v(t._s(t.post.totalPost))])])]),n("div",{staticClass:"col-7"})])])])]),n("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-dialog-centered"},[n("div",{staticClass:"modal-content"},[t._m(2),n("div",{staticClass:"modal-body"},[n("SignUp")],1)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("span",{staticClass:"nav-link",attrs:{"aria-current":"page",href:"#"}},[a("i",{staticClass:"bi bi-search",staticStyle:{color:"white"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item pe-1"},[t._v(" Huong dan "),a("h3",[t._v("0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})])}],l=a("2f62"),c=a("ea7b"),u=a("cee2"),d={name:"Header",components:{SignUp:u["default"]},computed:Object(l["b"])(["user","isAuth","post"]),data:function(){return{menus:[{icon:"bi-chat-left-dots-fill",url:"/#"},{icon:"bi-three-dots-vertical",url:"/#"}],ddmenus:[{title:"Huong Dan",url:"/#"},{title:"Tinh Nang",url:"/#"},{title:"Cot Truyen",url:"/#"}]}},methods:{dangxuat:function(){Object(c["f"])(Object(c["b"])()).then((function(){location.reload(),alert("Dang xuat thanh cong")})).catch((function(t){console.log(t)}))}}},p=d,m=(a("abad"),a("2877")),h=Object(m["a"])(p,r,o,!1,null,null,null),f=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-7 fs-1",staticStyle:{"padding-left":"0"}},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb text-secondary"},[a("li",{staticClass:"breadcrumb-item",on:{click:t.home}},[a("router-link",{attrs:{to:"/"}},[t._v("Trang Chủ")])],1)])]),a("nav",{staticStyle:{"margin-top":"-15px"},attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb text-secondary mb-2"},[a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.pos))])])])])])])},b=[],g={name:"Breadcrumb",data:function(){return{pos:"post list"}},computed:Object(l["b"])(["isAuth"]),methods:{home:function(){this.pos="post list"},addpost:function(){this.pos="Add Post"}}},_=g,C=(a("f32c"),Object(m["a"])(_,v,b,!1,null,"f082d382",null)),y=C.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-2"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-7",staticStyle:{"text-align":"center"}},[a("hr"),t._v(" © 2021 DDDTT - Nhij Quang ")])])])}],k={setup:function(){}},j=k,O=(a("760c"),Object(m["a"])(j,w,x,!1,null,null,null)),S=O.exports,E=a("4360"),P={created:function(){var t=Object(c["b"])();Object(c["c"])(t,(function(t){t&&t.emailVerified&&($("#staticBackdrop").modal("hide"),E["a"].commit("IS_AUTH"),t.displayName?E["a"].commit("SET_NAME",t.displayName):E["a"].commit("SET_NAME",t.email))}))},components:{Header:f,Breadcrumb:y,Footer:S},setup:{el:"#app"},methods:{}},A=P,T=(a("034f"),Object(m["a"])(A,s,i,!1,null,null,null)),L=T.exports,R=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"}),a("div",{staticClass:"col-7"},[a("PostList")],1),a("div",{staticClass:"col-3"},[a("RightBar")],1)])])},D=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"post-list"},[a("ul",{staticClass:"list-group"},t._l(t.posts,(function(e){return a("li",{key:e.id,staticClass:"list-group-item row",staticStyle:{display:"flex","padding-left":"0","padding-right":"0"}},[a("div",{staticClass:"col-4"},[a("img",{staticStyle:{width:"100%"},attrs:{src:e.img,alt:""}})]),a("div",{staticClass:"col"},[a("router-link",{attrs:{to:e.id}},[a("h4",[t._v(t._s(e.title))])]),t._v(" "+t._s(e.time)+" ")],1)])})),0)])},H=[],q=a("1da1"),I=(a("96cf"),a("159b"),a("e71f")),M={data:function(){return{posts:[]}},created:function(){var t=this;Object(q["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(I["f"])(Object(I["b"])(Object(I["g"])(),"posts"));case 2:a=e.sent,n=0,a.forEach((function(e){n++;var a={title:"",id:"",img:"",time:""};e.data().title.length>80?a.title=e.data().title.substring(0,80)+"...":a.title=e.data().title,a.id="/post/"+e.id,a.img=e.data().img,a.time=e.data().time,t.posts.push(a),E["a"].commit("TOTAL_POST",n)}));case 5:case"end":return e.stop()}}),e)})))()}},U=M,K=Object(m["a"])(U,B,H,!1,null,null,null),V=K.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},Q=[],G={},J=G,z=Object(m["a"])(J,F,Q,!1,null,null,null),W=z.exports,X={data:function(){return{}},components:{PostList:V,RightBar:W},methods:{}},Z=X,Y=Object(m["a"])(Z,N,D,!1,null,null,null),tt=Y.exports;n["a"].use(R["a"]);var et=[{path:"/",name:"Home",component:tt},{path:"/post",name:"Post",component:function(){return a.e("post").then(a.bind(null,"37d3"))}},{path:"/post/:slug",name:"PostView",component:function(){return a.e("post").then(a.bind(null,"37d3"))}},{path:"/addpost",name:"AddPost",component:function(){return a.e("addpost").then(a.bind(null,"0ff9"))}},{path:"/addpost/:slug",name:"EditPost",component:function(){return a.e("addpost").then(a.bind(null,"0ff9"))}},{path:"/admin",name:"Admin",component:function(){return a.e("admin").then(a.bind(null,"3530"))}},{path:"/profile",name:"Profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))}},{path:"/reg",name:"Reg",component:function(){return Promise.resolve().then(a.bind(null,"cee2"))}},{path:"/*",name:"404",component:function(){return a.e("admin").then(a.bind(null,"8cdb"))}}],at=new R["a"]({mode:"history",base:"/qcbh/",routes:et});at.beforeEach((function(t,e,a){("Profile"!=t.name||E["a"].state.isAuth)&&("AddPost"!=t.name||E["a"].state.isAuth)&&("EditPost"!=t.name||E["a"].state.isAuth)?a():a({name:"Home"})}));var nt=at;a("8ddc");n["a"].config.productionTip=!1,new n["a"]({router:nt,store:E["a"],render:function(t){return t(L)}}).$mount("#app")},"760c":function(t,e,a){"use strict";a("c3f5")},"85ec":function(t,e,a){},abad:function(t,e,a){"use strict";a("4f8e")},c3f5:function(t,e,a){},cee2:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"signup"}},[t.form?a("div",{staticClass:"dangnhap"},[a("h3",[t._v("Dang Nhap")]),a("hr"),a("form",{on:{submit:function(e){return e.preventDefault(),t.dangnhap.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userL.email,expression:"userL.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.userL.email},on:{input:function(e){e.target.composing||t.$set(t.userL,"email",e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userL.passworld,expression:"userL.passworld"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.userL.passworld},on:{input:function(e){e.target.composing||t.$set(t.userL,"passworld",e.target.value)}}})]),t.status?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.status)+" ")]):t._e(),t.xacthuc?a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" Tai khoan chua duoc xac thuc! "),a("br"),t._v(" Tai khoan khong xac thuc se khong the dang bai viet va binh luan! ")]):t._e(),t.xacthuc?a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.reset}},[t._v("Close")]):t._e(),t.xacthuc?t._e():a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Dang nhap")]),t._v(" Neu chua co tai khoan bam "),a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.chuyendoi.apply(null,arguments)}}},[t._v("dang ky")])])]):a("div",{staticClass:"dangky"},[a("h3",[t._v("Dang Ki")]),a("hr"),a("form",{on:{submit:function(e){return e.preventDefault(),t.dangky.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userR.email,expression:"userR.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:t.userR.email},on:{input:function(e){e.target.composing||t.$set(t.userR,"email",e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userR.passworld,expression:"userR.passworld"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.userR.passworld},on:{input:function(e){e.target.composing||t.$set(t.userR,"passworld",e.target.value)}}})]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label"},[t._v("Re-Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userR.repassworld,expression:"userR.repassworld"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.userR.repassworld},on:{input:function(e){e.target.composing||t.$set(t.userR,"repassworld",e.target.value)}}})]),t.status?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.status)+" ")]):t._e(),t.xacthuc?a("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v(" Da dang ki thanh cong. Vui long vao mail cua ban de xac thuc tai khoan! "),a("br"),t._v(" Tai khoan khong xac thuc se khong the dang bai viet va binh luan! ")]):t._e(),t.xacthuc?a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.reset}},[t._v("Close")]):t._e(),t.xacthuc?t._e():a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Dang Ky")]),t._v(" Neu da co tai khoan bam "),a("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.chuyendoi.apply(null,arguments)}}},[t._v("dang nhap")])])])])},s=[],i=a("260b"),r=a("e71f"),o=a("ea7b"),l={apiKey:"AIzaSyARmIL9tbl_t6GyPcVaEElxL-pDtA7jcik",authDomain:"nhijquangqcbh.firebaseapp.com",projectId:"nhijquangqcbh",storageBucket:"nhijquangqcbh.appspot.com",messagingSenderId:"391100504196",appId:"1:391100504196:web:5a7fb5fd29a13f9d0c0ad1",measurementId:"G-HNSQF1XDZW"};Object(i["a"])(l);Object(r["g"])();var c=Object(o["b"])(),u={data:function(){return{userL:{email:"",passworld:""},userR:{email:"",passworld:"",repassworld:""},status:null,form:!0,xacthuc:!1}},methods:{dangky:function(){var t=this;this.status=null,this.userR.passworld==this.userR.repassworld?Object(o["a"])(c,this.userR.email,this.userR.passworld).then((function(e){e.user;t.xacthuc=!0,Object(o["d"])(c.currentUser).then((function(){console.log("Da gui xac minh")}))})).catch((function(e){"auth/weak-password"==e.code?t.status="Mat khau qua ngan!":"auth/email-already-in-use"==e.code?t.status="Email da ton tai, vui long chon email khac!":t.status=e.code})):this.status="Mat khau ko trung khop!"},dangnhap:function(){var t=this;this.status=null,Object(o["e"])(c,this.userL.email,this.userL.passworld).then((function(e){var a=e.user;a.emailVerified||(t.xacthuc=!0)})).catch((function(e){"auth/wrong-password"==e.code?t.status="Sai mat khau!":(e.code="auth/user-not-found")?t.status="Tai khoan khong ton tai!":t.status=e.code}))},chuyendoi:function(){this.form=!this.form,this.status=null,this.xacthuc=!1},reset:function(){this.xacthuc=!1}}},d=u,p=a("2877"),m=Object(p["a"])(d,n,s,!1,null,null,null);e["default"]=m.exports},da65:function(t,e,a){},f32c:function(t,e,a){"use strict";a("da65")},fd4b:function(t,e,a){t.exports=a.p+"img/logo.bfe9015c.png"}});
//# sourceMappingURL=app.9efd15f1.js.map