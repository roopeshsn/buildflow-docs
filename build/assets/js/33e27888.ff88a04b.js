"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[3724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={},a="Flow Options",l={unversionedId:"user-guides/flows/flow-options",id:"user-guides/flows/flow-options",title:"Flow Options",description:"The Flow object take one FlowOptions object for configuring the flow. In the FlowOptions object you can specify any configuration that you want to be applied to all processors in your flow. This include options for configuring the infrastructure and the runtime.",source:"@site/docs/user-guides/flows/flow-options.md",sourceDirName:"user-guides/flows",slug:"/user-guides/flows/flow-options",permalink:"/docs/user-guides/flows/flow-options",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/user-guides/flows/flow-options.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Flows",permalink:"/docs/user-guides/flows/overview"},next:{title:"Processors",permalink:"/docs/user-guides/processors/overview"}},s={},u=[{value:"Runtime",id:"runtime",level:2},{value:"Credentials",id:"credentials",level:2},{value:"AWS Credentials",id:"aws-credentials",level:3},{value:"GCP Credentials",id:"gcp-credentials",level:3},{value:"Infrastructure",id:"infrastructure",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flow-options"},"Flow Options"),(0,r.kt)("p",null,"The Flow object take one ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/launchflow/buildflow/blob/main/buildflow/core/options/flow_options.py"},(0,r.kt)("inlineCode",{parentName:"a"},"FlowOptions"))," object for configuring the flow. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowOptions")," object you can specify any configuration that you want to be applied to all processors in your flow. This include options for configuring the infrastructure and the runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\napp = Flow(flow_options=FlowOptions(...))\n\n")),(0,r.kt)("h2",{id:"runtime"},"Runtime"),(0,r.kt)("p",null,"The Runtime options control how the node should operate when it is run. All options are optional and have reasonable defaults. Your options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"num_replicas")," - The number of replicas each processor should start with"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"log_level")," - The log level to use for all processors in the node. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"INFO"))),(0,r.kt)("h2",{id:"credentials"},"Credentials"),(0,r.kt)("p",null,"Credentials options control how the Flow should authenticate with the cloud providers (AWS and GCP)."),(0,r.kt)("h3",{id:"aws-credentials"},"AWS Credentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aws_access_key_id")," - The AWS access key id to use for authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aws_secret_access_key")," - The AWS secret access key to use for authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aws_session_token")," - The AWS session token to use for authentication")),(0,r.kt)("h3",{id:"gcp-credentials"},"GCP Credentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gcp_service_account_info")," - The JSON serialized string of the GCP service account to use for authentication. This can be a JSON key or a workload identity pool configuration.")),(0,r.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"require_confirmation")," - Whether or not confirmation should be required before applying changes. Defaults to True."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"refresh_state")," - Whether or not to refresh state before applying changes. Defaults to True.")))}f.isMDXComponent=!0}}]);