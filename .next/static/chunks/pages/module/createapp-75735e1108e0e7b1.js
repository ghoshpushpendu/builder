(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{3664:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/module/createapp",function(){return n(7239)}])},6349:function(e,t,n){"use strict";n.r(t);var r=n(5893);t.default=function(e){var t,n;return(0,r.jsxs)("div",{className:"dropstart",children:[(0,r.jsxs)("div",{"data-bs-toggle":"dropdown","aria-expanded":"false",children:[(0,r.jsx)("img",{src:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.imageUrl,alt:"Avatar",className:"avatar"}),(0,r.jsx)("div",{children:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name})]}),(0,r.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:(0,r.jsxs)("li",{className:"dropdown-item",onClick:function(){localStorage.clear(),window.location.href="/"},children:[(0,r.jsx)("i",{className:"bi bi-power"})," Logout"]})})]})}},4434:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1163);t.default=function(){var e=(0,a.useRouter)();return(0,r.jsx)("div",{className:"footer-dark",children:(0,r.jsxs)("p",{className:"copyright",children:["Sigma Corporation \xa9 2022 | ",(0,r.jsx)("a",{className:"link-primary",style:{cursor:"pointer"},onClick:function(){e.push("/termsandconditions")},children:"Terms & Conditions"})," | ",(0,r.jsx)("a",{className:"link-primary",style:{cursor:"pointer"},onClick:function(){e.push("/privacypolicy")},children:"Privacy Policy"})," "]})})}},9707:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(4051),a=n.n(r),s=n(5893),o=n(9008),c=n(9669),i=n.n(c),l=n(7294),u=n(6349),d="/_next/static/media/IMG_4867.c5235fad.png",m=n(1163);function p(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(r,a)}var f=function(e){var t=(0,l.useState)(null),n=t[0],r=t[1],c=(0,m.useRouter)(),f=function(){c.push("/auth/login")},h=function(){var e,t=(e=a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/users?_id="+t);case 2:n=e.sent,console.log(n.data.data),r(n.data.data?n.data.data:null);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){p(s,r,a,o,c,"next",e)}function c(e){p(s,r,a,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){void 0!=localStorage.getItem("_id")&&null!=localStorage.getItem("_id")?h(localStorage.getItem("_id")):f()}),[]),(0,s.jsxs)("nav",{className:"navbar header ps-3 pe-3",children:[(0,s.jsxs)("div",{className:"navbar-brand brand float-start",onClick:function(){c.push("/")},children:[(0,s.jsx)("img",{src:d,width:"40",height:"40",className:"d-inline-block align-top logo",alt:""}),(0,s.jsx)("span",{className:"align-middle",children:e.title?e.title:"Home"})]}),(0,s.jsxs)(o.default,{children:[(0,s.jsxs)("title",{children:["The Sigma | ",e.title?e.title:"Empowering Innovations"]}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,s.jsx)("link",{href:"/css/common.css",rel:"stylesheet"}),(0,s.jsx)("link",{rel:"icon",href:d}),(0,s.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",crossOrigin:"anonymous"})]}),n?(0,s.jsx)("div",{className:"float-end text-center",role:"button",children:(0,s.jsx)(u.default,{user:n})}):(0,s.jsxs)("div",{className:"float-end text-center",role:"button",onClick:function(){f()},children:[(0,s.jsx)("img",{src:"https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg",alt:"Avatar",className:"avatar"}),(0,s.jsx)("div",{children:"Please Login ?"})]})]})}},7239:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(4051),a=n.n(r),s=n(5893),o=n(9707),c=n(4434),i=(n(1535),n(6745),"/_next/static/media/html.0dad046c.png"),l="/_next/static/media/css.0dae54a3.png",u="/_next/static/media/bootstrap.65c46f54.png",d=n(7294),m=n(9669),p=n.n(m),f=n(1163);function h(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(l){return void n(l)}c.done?t(i):Promise.resolve(i).then(r,a)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){h(s,r,a,o,c,"next",e)}function c(e){h(s,r,a,o,c,"throw",e)}o(void 0)}))}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}var g=function(){var e=(0,d.useState)({name:"",projectType:"",users:[]}),t=e[0],n=e[1],r=(0,d.useState)(!1),m=r[0],h=r[1],g=(0,f.useRouter)();(0,d.useEffect)((function(){n(j({},t,{users:[{userId:localStorage.getItem("_id")}]}))}),[]);var b=function(e){console.log(e.target.name,e.target.value),console.log(j({},t,x({},e.target.name,e.target.value))),n(j({},t,x({},e.target.name,e.target.value))),setTimeout((function(){console.log(t),k(["name","projectType"])}),500)},y=function(){var e=v(a().mark((function e(n){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),h(!0),console.log(t),e.prev=3,e.next=6,k(t);case 6:if(r=e.sent,N(null),"success"!=r){e.next=17;break}return console.log("Inside Success",t),e.next=12,p().post("/api/projects",t);case 12:s=e.sent,console.log(s),s.data.error?(alert(s.data.message),h(!1)):(alert(s.data.message),g.push("/")),e.next=18;break;case 17:h(!1);case 18:e.next=25;break;case 20:e.prev=20,e.t0=e.catch(3),console.log(e.t0),N(e.t0),h(!1);case 25:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){if(w(),e){var t=document.createElement("p");t.innerText=e.message,t.className="error",0!=document.getElementsByName(e.key).length&&document.getElementsByName(e.key)[0].parentElement.appendChild(t)}},w=function(){document.querySelectorAll(".error").forEach((function(e){e.remove()}))},k=function(){var e=v(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t);case 1:if((e.t1=e.t0()).done){e.next=19;break}if(n=e.t1.value,r=t[n],console.log(n,r),"name"!=n){e.next=14;break}if(-1==r.indexOf(" ")){e.next=10;break}throw{error:!0,message:"* remove the space from the project name",key:n};case 10:if(!(null==r||r.length<10)){e.next=12;break}throw{error:!0,message:"* your project name should be more than 10 characters long",key:n};case 12:e.next=17;break;case 14:if("projectType"!=n){e.next=17;break}if(""!=r){e.next=17;break}throw{error:!0,message:"* please select a project type",key:n};case 17:e.next=1;break;case 19:return e.abrupt("return","success");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,s.jsxs)("div",{children:[(0,s.jsx)(o.default,{title:"Create Application"}),(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsxs)("div",{className:"card mt-3",style:{width:"30rem"},children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("b",{children:"Create Project"})}),(0,s.jsx)("div",{className:"card-body",children:(0,s.jsxs)("form",{children:[(0,s.jsxs)("div",{className:"mb-3 mt-3",children:[(0,s.jsx)("label",{htmlFor:"name",className:"form-label",children:"What is the name of your Project ?"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"My First Project",name:"name",onChange:function(e){b(e)}})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"pwd",className:"form-label",children:"I want to make a"}),(0,s.jsxs)("select",{name:"projectType",defaultValue:"",onChange:function(e){b(e)},className:"form-select","aria-label":"Default select example",children:[(0,s.jsx)("option",{disabled:!0,value:"",children:"-- Select Preferred Option --"}),(0,s.jsx)("option",{value:"web",children:"Landing Page for my Website"}),(0,s.jsx)("option",{disabled:!0,children:"Full Stack Application ( Web , Android , IOS )"}),(0,s.jsx)("option",{value:"3",disabled:!0,children:"Blockchain For my Business"}),(0,s.jsx)("option",{value:"4",disabled:!0,children:"AI / ML Model For my Business"})]})]}),"web"==t.projectType?(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"pwd",className:"form-label",children:"Technology to be used"}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("img",{src:i,height:"50"})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("img",{src:l,height:"50"})}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("img",{src:u,height:"50"})})]})]}):null,0==m?(0,s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){y(e)},children:"Lets Create Project"}):(0,s.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:!0,children:[(0,s.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Wait while we create your project"]})]})})]})}),(0,s.jsx)(c.default,{})]})}},6745:function(){},1535:function(){},9008:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,293,400,637,888,179],(function(){return t=3664,e(e.s=t);var t}));var t=e.O();_N_E=t}]);