(()=>{var e={};e.id=468,e.ids=[468],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6947:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>c});var s=r(482),a=r(9108),n=r(2563),i=r.n(n),o=r(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["catalog",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,159)),"D:\\IT\\frontend\\catalog\\frontend\\src\\app\\catalog\\[id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"D:\\IT\\frontend\\catalog\\frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\IT\\frontend\\catalog\\frontend\\src\\app\\catalog\\[id]\\page.tsx"],u="/catalog/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/catalog/[id]/page",pathname:"/catalog/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2689:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},3078:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1476,23))},4067:(e,t,r)=>{Promise.resolve().then(r.bind(r,505))},505:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(5344),a=r(3729);let n=e=>e.replace("/catalog/","");var i=r(4767),o=r(3386),l=r(9119),c=r(3113);let d=()=>{let e=n((0,i.usePathname)()),[t,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(0,o.r)(`${l.M}?id=${e}`).then(e=>r(e[0]))},[e]),console.log(t),s.jsx("div",{className:"flex items-center flex-col h-screen",children:t&&s.jsx(c.Z,{carInfo:t})})}},3113:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(5344),a=r(3729),n=r(9410),i=r(6506);let o=(0,a.memo)(e=>{let{carInfo:t}=e;return s.jsx("li",{className:"list-none",children:s.jsx(i.default,{href:`/catalog/${t.id}`,className:"block",children:(0,s.jsxs)("div",{className:"bg-gray-200 p-4 m-2 w-72 h-72 flex flex-col items-center justify-center rounded-lg",children:[s.jsx("div",{className:"h-64 w-64",children:s.jsx(n.default,{loader:({src:e})=>t.url||e,src:t.url,alt:`image for ${t.name}`,width:300,height:200})}),(0,s.jsxs)("h3",{className:"text-xl font-bold",children:[t.mark," ",t.name]}),s.jsx("p",{className:"text-md",children:t.price})]})})},t.id)})},9119:(e,t,r)=>{"use strict";r.d(t,{M:()=>s});let s="http://localhost:3001/cars"},3386:(e,t,r)=>{"use strict";async function s(e){try{console.log(e);let t=await fetch(e);if(!t.ok)throw Error("Network response was not ok");return await t.json()}catch(e){return console.error("Error during fetch:",e),[]}}r.d(t,{r:()=>s})},159:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`D:\IT\frontend\catalog\frontend\src\app\catalog\[id]\page.tsx`),{__esModule:a,$$typeof:n}=s,i=s.default},1342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l,metadata:()=>o});var s=r(5036),a=r(3640),n=r.n(a);r(5023);var i=r(6274);let o={title:"Create Next App",description:"Generated by create next app"};function l({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:n().className,children:[(0,s.jsxs)("nav",{className:"p-10 flex gap-20 text-4xl text-center font-bold bg-gray-500 color-white",children:[s.jsx(i.default,{href:"/",children:"Home"}),s.jsx(i.default,{href:"/catalog",children:"List"}),s.jsx(i.default,{href:"/reviews",children:"Reviews"})]}),s.jsx("main",{className:"flex min-h-screen flex-col justify-between p-32",children:e})]})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,710,337,397],()=>r(6947));module.exports=s})();