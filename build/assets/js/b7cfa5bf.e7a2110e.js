"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[8245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Contribute",l={unversionedId:"developers/contribute",id:"developers/contribute",title:"Contribute",description:"We welcome any and all types of contribution! Whether you want to report a bug, request a feature, or submit a pull request, we are always grateful for help.",source:"@site/docs/developers/contribute.md",sourceDirName:"developers",slug:"/developers/contribute",permalink:"/docs/developers/contribute",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/developers/contribute.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Infrastructure from Code",permalink:"/docs/features/infrastructure-from-code"}},u={},s=[{value:"Communications",id:"communications",level:2},{value:"Finding Work",id:"finding-work",level:2},{value:"Developing",id:"developing",level:2},{value:"Setup Development Environment",id:"setup-development-environment",level:3},{value:"Submitting a Pull Request",id:"submitting-a-pull-request",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"We welcome any and all types of contribution! Whether you want to report a bug, request a feature, or submit a pull request, we are always grateful for help."),(0,o.kt)("h2",{id:"communications"},"Communications"),(0,o.kt)("p",null,"For general discussion we recommend the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/647F4vtbR7"},"development channel")," in discord. This channel is geared towards developers working on BuildFlow. If you have questions regarding a specific issue please comment on that issue."),(0,o.kt)("h2",{id:"finding-work"},"Finding Work"),(0,o.kt)("p",null,"If you have an issue in mind feel free to assign it to yourself, and if you have specific questions while working on it feel free to tag @JoshTanke or @CalebTVanDyke in a comment, or reach out directly on discord as well."),(0,o.kt)("p",null,"If you don't have an issue in mind please reach out on discord and we can discuss what a good starter issue would be."),(0,o.kt)("h2",{id:"developing"},"Developing"),(0,o.kt)("h3",{id:"setup-development-environment"},"Setup Development Environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make a fork of the repository: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/launchflow/buildflow"},"https://github.com/launchflow/buildflow")),(0,o.kt)("li",{parentName:"ol"},"Clone the forked repo wherever you like"),(0,o.kt)("li",{parentName:"ol"},"Install dev python dependencies:")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},(0,o.kt)("inlineCode",{parentName:"a"},"pyenv"))," to help isolate python dependencies.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install .[dev]\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install pulumi: ",(0,o.kt)("a",{parentName:"li",href:"https://www.pulumi.com/docs/install/"},"https://www.pulumi.com/docs/install/")),(0,o.kt)("li",{parentName:"ol"},"Install pre-commit hooks:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pre-commit install\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Begin your work!")),(0,o.kt)("h3",{id:"submitting-a-pull-request"},"Submitting a Pull Request"),(0,o.kt)("p",null,"When opening a pull request it should automatically get assigned to an owner for code reviewer. If you have a specific person in mind to review your code please tag them in the pull request."),(0,o.kt)("p",null,"Feel free to @ the reviewer in discord to let them know they were assigned a review, or if you have any questions."))}d.isMDXComponent=!0}}]);