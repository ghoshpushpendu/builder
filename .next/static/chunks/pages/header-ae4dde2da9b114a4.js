(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{8919:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/header",function(){return n(9707)}])},6349:function(t,e,n){"use strict";n.r(e);var a=n(5893);e.default=function(t){var e,n;return(0,a.jsxs)("div",{className:"dropstart",children:[(0,a.jsxs)("div",{"data-bs-toggle":"dropdown","aria-expanded":"false",children:[(0,a.jsx)("img",{src:null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.imageUrl,alt:"Avatar",className:"avatar"}),(0,a.jsx)("div",{children:null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.name})]}),(0,a.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:(0,a.jsxs)("li",{className:"dropdown-item",onClick:function(){localStorage.clear(),window.location.href="/"},children:[(0,a.jsx)("i",{className:"bi bi-power"})," Logout"]})})]})}},9707:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var a=n(4051),s=n.n(a),i=n(5893),r=n(9008),o=n(9669),l=n.n(o),c=n(7294),d=n(6349),u="/_next/static/media/IMG_4867.c5235fad.png",f=n(1163);function v(t,e,n,a,s,i,r){try{var o=t[i](r),l=o.value}catch(c){return void n(c)}o.done?e(l):Promise.resolve(l).then(a,s)}var h=function(t){var e=(0,c.useState)(null),n=e[0],a=e[1],o=(0,f.useRouter)(),h=function(){o.push("/auth/login")},m=function(){var t,e=(t=s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l().get("/api/users?_id="+e);case 2:n=t.sent,console.log(n.data.data),a(n.data.data?n.data.data:null);case 5:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,s){var i=t.apply(e,n);function r(t){v(i,a,s,r,o,"next",t)}function o(t){v(i,a,s,r,o,"throw",t)}r(void 0)}))});return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){void 0!=localStorage.getItem("_id")&&null!=localStorage.getItem("_id")?m(localStorage.getItem("_id")):h()}),[]),(0,i.jsxs)("nav",{className:"navbar header ps-3 pe-3",children:[(0,i.jsxs)("div",{className:"navbar-brand brand float-start",onClick:function(){o.push("/")},children:[(0,i.jsx)("img",{src:u,width:"40",height:"40",className:"d-inline-block align-top logo",alt:""}),(0,i.jsx)("span",{className:"align-middle",children:t.title?t.title:"Home"})]}),(0,i.jsxs)(r.default,{children:[(0,i.jsxs)("title",{children:["The Sigma | ",t.title?t.title:"Empowering Innovations"]}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("link",{href:"/css/common.css",rel:"stylesheet"}),(0,i.jsx)("link",{rel:"icon",href:"./images/IMG_4870.PNG"}),(0,i.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",crossOrigin:"anonymous"})]}),n?(0,i.jsx)("div",{className:"float-end text-center",role:"button",children:(0,i.jsx)(d.default,{user:n})}):(0,i.jsxs)("div",{className:"float-end text-center",role:"button",onClick:function(){h()},children:[(0,i.jsx)("img",{src:"https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg",alt:"Avatar",className:"avatar"}),(0,i.jsx)("div",{children:"Please Login ?"})]})]})}},9008:function(t,e,n){t.exports=n(3121)}},function(t){t.O(0,[774,400,888,179],(function(){return e=8919,t(t.s=e);var e}));var e=t.O();_N_E=e}]);