"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,h=p["".concat(i,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,o[1]=u;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>L,default:()=>F,frontMatter:()=>T,metadata:()=>O,toc:()=>C});var r=n(7462),a=n(7294),l=n(3905),o=n(6010),u=n(2466),i=n(6550),c=n(1980),s=n(7392),p=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=f(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:n,groupId:r}),[s,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=i??s;return h({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),c(e),d(e)}),[c,d,l]),tabValues:l}}var w=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),r=c[n].value;r!==l&&(p(t),i(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>s.push(e),onKeyDown:f,onClick:d},u,{className:(0,o.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function E(e){const t=(0,w.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}const I={tabItem:"tabItem_Ymn6"};function x(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(I.tabItem,r),hidden:n},t)}const T={},L="Setup LaunchFlow",O={unversionedId:"walkthroughs/setup_buildflow",id:"walkthroughs/setup_buildflow",title:"Setup LaunchFlow",description:"Install LaunchFlow",source:"@site/docs/walkthroughs/setup_buildflow.md",sourceDirName:"walkthroughs",slug:"/walkthroughs/setup_buildflow",permalink:"/docs/walkthroughs/setup_buildflow",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/walkthroughs/setup_buildflow.md",tags:[],version:"current",frontMatter:{}},S={},C=[{value:"Install LaunchFlow",id:"install-launchflow",level:2},{value:"VS Code Extension",id:"vs-code-extension",level:3},{value:"LaunchFlow CLI",id:"launchflow-cli",level:3},{value:"Sign up for LaunchFlow",id:"sign-up-for-launchflow",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],V={toc:C},N="wrapper";function F(e){let{components:t,...n}=e;return(0,l.kt)(N,(0,r.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"setup-launchflow"},"Setup LaunchFlow"),(0,l.kt)("h2",{id:"install-launchflow"},"Install LaunchFlow"),(0,l.kt)("p",null,"There are two components to using LaunchFlow that need to be installed."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"VS Code Extension - Installed via the VSCode marketplace"),(0,l.kt)("li",{parentName:"ol"},"LaunchFlow CLI - Installed via PyPi")),(0,l.kt)("h3",{id:"vs-code-extension"},"VS Code Extension"),(0,l.kt)("a",{class:"button button--lg button--primary",href:"vscode:extension/LaunchFlow.launchflow"},"Install"),(0,l.kt)("h3",{id:"launchflow-cli"},"LaunchFlow CLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pip install launchflow\n")),(0,l.kt)("h2",{id:"sign-up-for-launchflow"},"Sign up for LaunchFlow"),(0,l.kt)("p",null,"You can currently sign up for LaunchFlow simply by using your Google account. You can signup directly in the VSCode extension or via the LaunchFlow CLI."),(0,l.kt)("p",null,"Signing up will create a free LaunchFlow account. See our ",(0,l.kt)("a",{parentName:"p",href:"https://www.launchflow.com/pricing"},"pricing page")," for more details on what is included in our free tier, and also additional information on our premium tiers."),(0,l.kt)(E,{mdxType:"Tabs"},(0,l.kt)(x,{className:"tab-content",value:"vscode",label:"VS Code",mdxType:"TabItem"},"1. Open up the LaunchFlow extension sidebar 2. Navigate to the `Account` tab 3. Click `Sign in with Google` 4. The extension will prompt you to sign in with LaunchFlow. Click `Allow` 5. The extension will prompt you to open up Google login. Click `Open` 6. Sign in with Google."),(0,l.kt)(x,{className:"tab-content",value:"cli",label:"LaunchFlow CLI",mdxType:"TabItem"},"First login with your google account.",(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"launch auth login\n")),(0,l.kt)("p",null,"Then create your free launchflow account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"launch accounts signup\n")))),(0,l.kt)("h2",{id:"whats-next"},"What's next?"),(0,l.kt)("p",null,"Build your first BuildFlow processor..."))}F.isMDXComponent=!0}}]);