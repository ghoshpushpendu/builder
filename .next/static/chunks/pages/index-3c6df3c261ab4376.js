(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},6349:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1163);t.default=function(e){var t,n,s=(0,a.useRouter)();return(0,r.jsxs)("div",{className:"dropstart",children:[(0,r.jsx)("div",{"data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:(0,r.jsx)("img",{src:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.imageUrl,onError:function(e){!function(e){e.target.src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"}(e)},alt:"Avatar",className:"avatar"})}),(0,r.jsx)("span",{style:{marginTop:"4px",marginLeft:"5px"},children:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name})]})}),(0,r.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:(0,r.jsxs)("li",{className:"dropdown-item",onClick:function(){localStorage.clear(),s.push("/auth/login")},children:[(0,r.jsx)("i",{className:"bi bi-power"})," Logout"]})})]})}},2425:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=n(7294);const s=()=>{};function o(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var i=(0,a.forwardRef)((({progress:e,height:t=2,className:n="",color:r="red",background:i="transparent",onLoaderFinished:c,transitionTime:l=300,loaderSpeed:u=500,waitingTime:d=1e3,shadow:f=!0,containerStyle:p={},style:h={},shadowStyle:m={},containerClassName:v=""},x)=>{const g=(0,a.useRef)(!1),[j,b]=(0,a.useState)(0),[w,y]=(0,a.useState)({active:!1,startingValue:20,refreshRate:1e3}),[N,S]=(0,a.useState)(!1),[k,_]=(0,a.useState)({active:!1,value:20}),E={height:"100%",background:r,transition:`all ${u}ms ease`,width:"0%"},C={position:"fixed",top:0,left:0,height:t,background:i,zIndex:99999999999,width:"100%"},P={boxShadow:`0 0 10px ${r}, 0 0 10px ${r}`,width:"5%",opacity:1,position:"absolute",height:"100%",transition:`all ${u}ms ease`,transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},[R,T]=(0,a.useState)(E),[I,M]=(0,a.useState)(P);(0,a.useEffect)((()=>(g.current=!0,()=>{g.current=!1})),[]),(0,a.useImperativeHandle)(x,(()=>({continuousStart(e,t=1e3){if(k.active)return;if(N)return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");const n=e||o(10,20);y({active:!0,refreshRate:t,startingValue:e}),b(n),L(n)},staticStart(e){if(w.active)return;if(N)return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");const t=e||o(30,50);_({active:!0,value:t}),b(t),L(t)},complete(){N?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(b(100),L(100))}}))),(0,a.useEffect)((()=>{T({...R,background:r}),M({...I,boxShadow:`0 0 10px ${r}, 0 0 5px ${r}`})}),[r]),(0,a.useEffect)((()=>{if(x){if(x&&void 0!==e)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');L(j),S(!1)}else e&&L(e),S(!0)}),[e]);const L=e=>{e>=100?(T({...R,width:"100%"}),f&&M({...I,left:e-10+"%"}),setTimeout((()=>{g.current&&(T({...R,opacity:0,width:"100%",transition:`all ${l}ms ease-out`,color:r}),setTimeout((()=>{g.current&&(w.active&&(y({...w,active:!1}),b(0),L(0)),k.active&&(_({...k,active:!1}),b(0),L(0)),c&&c(),b(0),L(0))}),l))}),d)):(T((t=>({...t,width:e+"%",opacity:1,transition:e>0?`all ${u}ms ease`:""}))),f&&M({...I,left:e-5.5+"%",transition:e>0?`all ${u}ms ease`:""}))};return function(e,t,n){const r=(0,a.useRef)(s);(0,a.useEffect)((()=>{r.current=e})),(0,a.useEffect)((()=>{n&&null!==t&&!1!==t&&r.current()}),[n]),(0,a.useEffect)((()=>{if(null===t||!1===t)return;const e=setInterval((()=>r.current()),t);return()=>clearInterval(e)}),[t])}((()=>{const e=o(10,20);j+e<90&&(b(j+e),L(j+e))}),w.active?w.refreshRate:null),(0,a.createElement)("div",{className:v,style:{...C,...p}},(0,a.createElement)("div",{className:n,style:{...R,...h}},f?(0,a.createElement)("div",{style:{...I,...m}}):null))})),c=n(9669),l=n.n(c);function u(){var e=(0,a.useRef)(null);return function(e,t){l().interceptors.request.use((function(t){return e(),console.log("Request Getting Sent"),t}),(function(e){return t(),Promise.reject(e)})),l().interceptors.response.use((function(e){return console.log("Response Came"),t(),e}),(function(e){return t(),Promise.reject(e)}))}((function(){console.log("Start Loading",e),e&&e.current&&e.current.continuousStart()}),(function(){console.log("Stop Loading",e),e&&e.current&&e.current.complete()})),(0,r.jsx)(i,{height:2,color:"#f11946",ref:e})}},4434:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(1163);t.default=function(){var e=(0,a.useRouter)();return(0,r.jsx)("div",{className:"footer-dark",children:(0,r.jsxs)("p",{className:"copyright",children:["Sigma Corporation \xa9 2022 | ",(0,r.jsx)("a",{className:"link-primary",style:{cursor:"pointer"},onClick:function(){e.push("/termsandconditions")},children:"Terms & Conditions"})," | ",(0,r.jsx)("a",{className:"link-primary",style:{cursor:"pointer"},onClick:function(){e.push("/privacypolicy")},children:"Privacy Policy"})," "]})})}},9707:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(4051),a=n.n(r),s=n(5893),o=n(9008),i=n(9669),c=n.n(i),l=n(7294),u=n(6349),d="/_next/static/media/IMG_4867.c5235fad.png",f=n(1163),p=n(2425);function h(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}var m=function(e){var t=(0,l.useState)(null),n=t[0],r=t[1],i=(0,f.useRouter)();console.log(e.title);var m=function(){i.push("/auth/login")},v=function(){var e,t=(e=a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/api/users?_id="+t);case 2:n=e.sent,console.log(n.data.data),r(n.data.data?n.data.data:null);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){h(s,r,a,o,i,"next",e)}function i(e){h(s,r,a,o,i,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){void 0!=localStorage.getItem("_id")&&null!=localStorage.getItem("_id")?v(localStorage.getItem("_id")):m()}),[]),(0,s.jsxs)("nav",{className:"navbar header ps-3 pe-3",children:[(0,s.jsx)(p.default,{}),(0,s.jsxs)("div",{className:"navbar-brand brand float-start",onClick:function(){i.push("/")},children:[(0,s.jsx)("img",{src:d,width:"35",height:"35",className:"d-inline-block align-top logo",alt:""}),(0,s.jsx)("span",{className:"align-middle",children:null==e.title||void 0==e.title||e.title.includes("undefined")?"Home":e.title})]}),(0,s.jsxs)(o.default,{children:[(0,s.jsxs)("title",{children:["The Sigma | ",null==e.title||void 0==e.title||e.title.includes("undefined")?"Empowering Innovations":e.title]}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,s.jsx)("link",{href:"/css/common.css",rel:"stylesheet"}),(0,s.jsx)("link",{rel:"icon",href:d}),(0,s.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",crossOrigin:"anonymous"})]}),n?(0,s.jsx)("div",{className:"float-end text-center",role:"button",children:(0,s.jsx)(u.default,{user:n})}):(0,s.jsx)("div",{className:"float-end text-center",role:"button",onClick:function(){m()},children:"Please Login ?"})]})}},4186:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=(n(1535),n(6745),n(4434)),s=n(9707),o=n(1182);function i(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(a.default,{})]})}},1182:function(e,t,n){"use strict";n.r(t);var r=n(4051),a=n.n(r),s=n(5893),o=n(9669),i=n.n(o),c=n(7294),l=n(1163);function u(e,t,n,r,a,s,o){try{var i=e[s](o),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}t.default=function(){var e=(0,c.useState)([]),t=e[0],n=e[1],r=(0,l.useRouter)(),o=function(){var e,t=(e=a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("/api/projects?userId="+localStorage.getItem("_id"));case 2:t=e.sent,console.log(t.data.data),n(t.data.data);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){u(s,r,a,o,i,"next",e)}function i(e){u(s,r,a,o,i,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){o()}),[]),(0,s.jsx)("div",{className:"container-fluid applist",children:(0,s.jsxs)("div",{className:"row gx-3 mt-5 ms-3",children:[t&&t.map((function(e,t){return(0,s.jsx)("div",{className:"col-md-3 app",onClick:function(){var t;t=e._id,r.push("/module/editor/"+t)},children:(0,s.jsx)("div",{className:"card p-3",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h5",{className:"card-title",children:e.name}),(0,s.jsxs)("p",{className:"card-text",children:["Type : ",e.projectType]}),(0,s.jsx)("p",{className:"card-text",children:"Technologies : HTML, CSS, TypeScript"})]})})},t)})),(0,s.jsx)("div",{className:"col-md-3",children:(0,s.jsxs)("div",{className:"card p-3",onClick:function(){r.push("/module/createapp")},children:[(0,s.jsx)("i",{className:"bi bi-plus-square-dotted text-center mt-3"}),(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsx)("h5",{className:"card-title",children:"Create Application"}),(0,s.jsx)("p",{className:"card-text",children:"Create an Application From Scratch."})]})]})})]})})}},6745:function(){},1535:function(){},9008:function(e,t,n){e.exports=n(3121)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,293,669,637,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);