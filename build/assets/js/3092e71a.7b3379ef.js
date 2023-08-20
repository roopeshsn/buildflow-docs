"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[3837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},l="S3 File Change Stream",o={unversionedId:"reference/primitives/aws/s3_file_change_stream",id:"reference/primitives/aws/s3_file_change_stream",title:"S3 File Change Stream",description:"S3FileChangeStream is a source primitive that can be used to subscribe to file changes on a given S3 bucket. To create a S3FileChangeStream provide:",source:"@site/docs/reference/primitives/aws/s3_file_change_stream.md",sourceDirName:"reference/primitives/aws",slug:"/reference/primitives/aws/s3_file_change_stream",permalink:"/docs/reference/primitives/aws/s3_file_change_stream",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/reference/primitives/aws/s3_file_change_stream.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"AWS SQS",permalink:"/docs/reference/primitives/aws/sqs"},next:{title:"Google Cloud Platform",permalink:"/docs/category/google-cloud-platform"}},s={},c=[{value:"Types",id:"types",level:2},{value:"Resource Creation",id:"resource-creation",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"s3-file-change-stream"},"S3 File Change Stream"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"S3FileChangeStream")," is a source primitive that can be used to subscribe to file changes on a given S3 bucket. To create a ",(0,a.kt)("inlineCode",{parentName:"p"},"S3FileChangeStream")," provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s3_bucket")," ",(0,a.kt)("strong",{parentName:"li"},"required"),": ",(0,a.kt)("a",{parentName:"li",href:"s3"},"S3Bucket")," to subscribe to change events from. NOTE: you do not need to provide file path or file format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"event_types"),": List of event types to subscribe to. Defaults to: ",(0,a.kt)("inlineCode",{parentName:"li"},"[S3ChangeStreamEventType.OBJECT_CREATED_ALL]"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom buildflow.io.aws import S3Bucket, S3FileChangeStream\nfrom buildflow.types.aws import S3FileChangeEvent\n\n@app.pipeline(source=S3FileChangeStream(\n    s3_bucket=S3Bucket(bucket_name="my-bucket")), sink=...)\ndef pipeline(elem: S3FileChangeEvent):\n    ...\n')),(0,a.kt)("p",null,"With managed bucket:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom buildflow.io.aws import S3Bucket, S3FileChangeStream\nfrom buildflow.types.aws import S3FileChangeEvent\n\n@app.pipeline(source=S3FileChangeStream(\n    s3_bucket=S3Bucket(bucket_name="my-bucket").options(managed=True)), sink=...)\ndef pipeline(elem: S3FileChangeEvent):\n    ...\n')),(0,a.kt)("p",null,"With event types:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from buildflow.io.aws import S3Bucket, S3FileChangeStream\nfrom buildflow.types.aws import S3FileChangeEvent, S3ChangeStreamEventType\n\n@app.pipeline(source=S3FileChangeStream(\n    s3_bucket=S3Bucket(bucket_name="my-bucket"),\n    event_types=[S3ChangeStreamEventType.OBJECT_CREATED_ALL, S3ChangeStreamEventType.OBJECT_REMOVED_ALL]), sink=...)\ndef pipeline(elem: S3FileChangeEvent):\n    ...\n')),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"S3FileChangeStream")," source always returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"S3FileChangeEvent")," object. This object contains the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metadata"),": any metadata that was associated with the file change event. This is a dictionary of strings."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"blob"),": The raw contents of the file. This is lazily fetched.")),(0,a.kt)("h2",{id:"resource-creation"},"Resource Creation"),(0,a.kt)("p",null,"If you are using BuildFlow's built in resource creation/management you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"S3FileChangeStream")," primitive type to create and manage all resources that are need to subscribe to a S3 bucket."),(0,a.kt)("p",null,"The following resources will be created:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"S3 Bucket"),(0,a.kt)("li",{parentName:"ul"},"SQS Queue"),(0,a.kt)("li",{parentName:"ul"},"S3 Bucket Notification"),(0,a.kt)("li",{parentName:"ul"},"SQS Queue Policy")))}m.isMDXComponent=!0}}]);