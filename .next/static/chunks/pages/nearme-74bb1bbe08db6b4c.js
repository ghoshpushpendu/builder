(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{9074:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nearme",function(){return n(6802)}])},6349:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1163);t.default=function(e){var t,n,a=(0,o.useRouter)();return(0,r.jsxs)("div",{className:"dropstart",children:[(0,r.jsx)("div",{"data-bs-toggle":"dropdown","aria-expanded":"false",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:(0,r.jsx)("img",{src:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.imageUrl,onError:function(e){!function(e){e.target.src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"}(e)},alt:"Avatar",className:"avatar"})}),(0,r.jsx)("span",{style:{marginTop:"4px",marginLeft:"5px"},children:null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name})]})}),(0,r.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:(0,r.jsxs)("li",{className:"dropdown-item",onClick:function(){localStorage.clear(),a.push("/auth/login")},children:[(0,r.jsx)("i",{className:"bi bi-power"})," Logout"]})})]})}},2425:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),o=n(7294);const a=()=>{};function s(e,t){return Math.floor(Math.random()*(t-e+1)+e)}var i=(0,o.forwardRef)((({progress:e,height:t=2,className:n="",color:r="red",background:i="transparent",onLoaderFinished:l,transitionTime:c=300,loaderSpeed:u=500,waitingTime:d=1e3,shadow:f=!0,containerStyle:h={},style:p={},shadowStyle:m={},containerClassName:v=""},g)=>{const x=(0,o.useRef)(!1),[b,j]=(0,o.useState)(0),[w,y]=(0,o.useState)({active:!1,startingValue:20,refreshRate:1e3}),[N,S]=(0,o.useState)(!1),[k,_]=(0,o.useState)({active:!1,value:20}),E={height:"100%",background:r,transition:`all ${u}ms ease`,width:"0%"},R={position:"fixed",top:0,left:0,height:t,background:i,zIndex:99999999999,width:"100%"},P={boxShadow:`0 0 10px ${r}, 0 0 10px ${r}`,width:"5%",opacity:1,position:"absolute",height:"100%",transition:`all ${u}ms ease`,transform:"rotate(3deg) translate(0px, -4px)",left:"-10rem"},[C,I]=(0,o.useState)(E),[M,T]=(0,o.useState)(P);(0,o.useEffect)((()=>(x.current=!0,()=>{x.current=!1})),[]),(0,o.useImperativeHandle)(g,(()=>({continuousStart(e,t=1e3){if(k.active)return;if(N)return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");const n=e||s(10,20);y({active:!0,refreshRate:t,startingValue:e}),j(n),$(n)},staticStart(e){if(w.active)return;if(N)return void console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!");const t=e||s(30,50);_({active:!0,value:t}),j(t),$(t)},complete(){N?console.warn("react-top-loading-bar: You can't use both controlling by props and ref methods to control the bar!"):(j(100),$(100))}}))),(0,o.useEffect)((()=>{I({...C,background:r}),T({...M,boxShadow:`0 0 10px ${r}, 0 0 5px ${r}`})}),[r]),(0,o.useEffect)((()=>{if(g){if(g&&void 0!==e)return void console.warn('react-top-loading-bar: You can\'t use both controlling by props and ref methods to control the bar! Please use only props or only ref methods! Ref methods will override props if "ref" property is available.');$(b),S(!1)}else e&&$(e),S(!0)}),[e]);const $=e=>{e>=100?(I({...C,width:"100%"}),f&&T({...M,left:e-10+"%"}),setTimeout((()=>{x.current&&(I({...C,opacity:0,width:"100%",transition:`all ${c}ms ease-out`,color:r}),setTimeout((()=>{x.current&&(w.active&&(y({...w,active:!1}),j(0),$(0)),k.active&&(_({...k,active:!1}),j(0),$(0)),l&&l(),j(0),$(0))}),c))}),d)):(I((t=>({...t,width:e+"%",opacity:1,transition:e>0?`all ${u}ms ease`:""}))),f&&T({...M,left:e-5.5+"%",transition:e>0?`all ${u}ms ease`:""}))};return function(e,t,n){const r=(0,o.useRef)(a);(0,o.useEffect)((()=>{r.current=e})),(0,o.useEffect)((()=>{n&&null!==t&&!1!==t&&r.current()}),[n]),(0,o.useEffect)((()=>{if(null===t||!1===t)return;const e=setInterval((()=>r.current()),t);return()=>clearInterval(e)}),[t])}((()=>{const e=s(10,20);b+e<90&&(j(b+e),$(b+e))}),w.active?w.refreshRate:null),(0,o.createElement)("div",{className:v,style:{...R,...h}},(0,o.createElement)("div",{className:n,style:{...C,...p}},f?(0,o.createElement)("div",{style:{...M,...m}}):null))})),l=n(9669),c=n.n(l);function u(){var e=(0,o.useRef)(null);return function(e,t){c().interceptors.request.use((function(t){return e(),console.log("Request Getting Sent"),t}),(function(e){return t(),Promise.reject(e)})),c().interceptors.response.use((function(e){return console.log("Response Came"),t(),e}),(function(e){return t(),Promise.reject(e)}))}((function(){console.log("Start Loading",e),e&&e.current&&e.current.continuousStart()}),(function(){console.log("Stop Loading",e),e&&e.current&&e.current.complete()})),(0,r.jsx)(i,{height:2,color:"#f11946",ref:e})}},4434:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(1163);t.default=function(){var e=(0,o.useRouter)();return(0,r.jsx)("div",{className:"footer-dark",children:(0,r.jsxs)("p",{className:"copyright",children:["Sigma Corporation \xa9 2022 | ",(0,r.jsx)("a",{className:"link-primary",style:{cursor:"pointer"},onClick:function(){e.push("/termsandconditions")},children:"Terms & Conditions"})," | ",(0,r.jsx)("a",{className:"link-primary",style:{cursor:"pointer"},onClick:function(){e.push("/privacypolicy")},children:"Privacy Policy"})," "]})})}},9707:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(4051),o=n.n(r),a=n(5893),s=n(9008),i=n(9669),l=n.n(i),c=n(7294),u=n(6349),d="/_next/static/media/IMG_4867.c5235fad.png",f=n(1163),h=n(2425);function p(e,t,n,r,o,a,s){try{var i=e[a](s),l=i.value}catch(c){return void n(c)}i.done?t(l):Promise.resolve(l).then(r,o)}var m=function(e){var t=(0,c.useState)(null),n=t[0],r=t[1],i=(0,f.useRouter)();console.log(e.title);var m=function(){i.push("/auth/login")},v=function(){var e,t=(e=o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/api/users?_id="+t);case 2:n=e.sent,console.log(n.data.data),r(n.data.data?n.data.data:null);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){p(a,r,o,s,i,"next",e)}function i(e){p(a,r,o,s,i,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,c.useEffect)((function(){void 0!=localStorage.getItem("_id")&&null!=localStorage.getItem("_id")?v(localStorage.getItem("_id")):m()}),[]),(0,a.jsxs)("nav",{className:"navbar header ps-3 pe-3",children:[(0,a.jsx)(h.default,{}),(0,a.jsxs)("div",{className:"navbar-brand brand float-start",onClick:function(){i.push("/")},children:[(0,a.jsx)("img",{src:d,width:"35",height:"35",className:"d-inline-block align-top logo",alt:""}),(0,a.jsx)("span",{className:"align-middle",children:null==e.title||void 0==e.title||e.title.includes("undefined")?"Home":e.title})]}),(0,a.jsxs)(s.default,{children:[(0,a.jsxs)("title",{children:["The Sigma | ",null==e.title||void 0==e.title||e.title.includes("undefined")?"Empowering Innovations":e.title]}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,a.jsx)("link",{href:"/css/common.css",rel:"stylesheet"}),(0,a.jsx)("link",{rel:"icon",href:d}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",integrity:"sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",crossOrigin:"anonymous"})]}),n?(0,a.jsx)("div",{className:"float-end text-center",role:"button",children:(0,a.jsx)(u.default,{user:n})}):(0,a.jsx)("div",{className:"float-end text-center",role:"button",onClick:function(){m()},children:"Please Login ?"})]})}},6802:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5893),o=n(9008),a=(n(894),n(6745),n(4434)),s=n(9707),i=n(4590);function l(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Restaurants Near Me"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("link",{href:"./../css/common.css",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"icon",href:"./../images/IMG_4870.PNG"})]}),(0,r.jsx)(s.default,{}),(0,r.jsx)(i.default,{}),(0,r.jsx)(a.default,{})]})}},6745:function(){},894:function(){},9008:function(e,t,n){e.exports=n(3121)},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,457,669,637,590,888,179],(function(){return t=9074,e(e.s=t);var t}));var t=e.O();_N_E=t}]);