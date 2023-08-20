"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[4239],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||s;return t?o.createElement(m,a(a({ref:r},c),{},{components:t})):o.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5982:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const s={},a="Processors",i={unversionedId:"user-guides/processors/overview",id:"user-guides/processors/overview",title:"Processors",description:"A processor is what we like to call a user defined pattern. It is a pre-defined flow of data through a provided pattern. We offer three different implementations of processors:",source:"@site/docs/user-guides/processors/overview.md",sourceDirName:"user-guides/processors",slug:"/user-guides/processors/overview",permalink:"/docs/user-guides/processors/overview",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/user-guides/processors/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Flow Options",permalink:"/docs/user-guides/flows/flow-options"},next:{title:"Stateful Processors",permalink:"/docs/user-guides/processors/stateful-processors"}},l={},p=[{value:"Features",id:"features",level:2}],c={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"processors"},"Processors"),(0,n.kt)("p",null,"A processor is what we like to call a user defined pattern. It is a pre-defined flow of data through a provided pattern. We offer three different implementations of processors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../pipelines/overview"},"Pipelines"),": A real-time pipeline that reads data from a source and writes data to a sink."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../collectors/overview"},"Collectors"),": A collector takes in data from an HTTP endpoint via a GET or POST request and writes it to a sink. Then returns a success or failure response."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../endpoints/overview"},"Endpoints"),": An endpoint takes in data from an HTTP endpoint via a GET or POST request and returns a user defined response.")),(0,n.kt)("p",null,"Some additional patterns we hope to support in the future are open websocket connections and batch pipelines."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All processors can be ",(0,n.kt)("a",{parentName:"li",href:"./async-processors"},"async"),"."),(0,n.kt)("li",{parentName:"ul"},"All processors can be ",(0,n.kt)("a",{parentName:"li",href:"./stateful-processors"},"stateful"),"."),(0,n.kt)("li",{parentName:"ul"},"Support ",(0,n.kt)("a",{parentName:"li",href:"./custom-types"},"custom typing")," for your processors.")))}f.isMDXComponent=!0}}]);