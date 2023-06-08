"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(f,s(s({ref:t},l),{},{components:r})):o.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},s="Processor API",i={unversionedId:"apis/processor",id:"apis/processor",title:"Processor API",description:"The Processor API is the primary abstraction provided by BuildFlow. It contains all of the user's processing logic between the IO Providers. Processors come in two different flavors: streaming and batch. The main difference between the two is that in batch mode you operate on a finite (bounded) set of data, and in streaming mode you operate on an infinite (unbounded) stream of data.",source:"@site/docs/apis/processor.md",sourceDirName:"apis",slug:"/apis/processor",permalink:"/docs/apis/processor",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/apis/processor.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mainSidebar",previous:{title:"Quickstart",permalink:"/docs/quickstart"},next:{title:"Node API",permalink:"/docs/apis/node"}},c={},p=[{value:"How to create a Processor",id:"how-to-create-a-processor",level:2},{value:"@processor decorator",id:"processor-decorator",level:3},{value:"Processor class",id:"processor-class",level:3},{value:"Lifecycle Methods",id:"lifecycle-methods",level:2},{value:"source",id:"source",level:3},{value:"sink",id:"sink",level:3},{value:"setup",id:"setup",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"processor-api"},"Processor API"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Processor API")," is the primary abstraction provided by ",(0,n.kt)("strong",{parentName:"p"},"BuildFlow"),". It contains all of the user's processing logic between the ",(0,n.kt)("a",{parentName:"p",href:"./providers/base"},"IO Providers"),". Processors come in two different flavors: ",(0,n.kt)("a",{parentName:"p",href:"/docs/processors/streaming"},"streaming")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/processors/batch"},"batch"),". The main difference between the two is that in batch mode you operate on a finite (bounded) set of data, and in streaming mode you operate on an infinite (unbounded) stream of data."),(0,n.kt)("p",null,"The return type of your process function determines what will be written to your sink. In batch mode you can return a Ray Dataset, python dictionaries, or python dataclasses. In streaming mode you can return python dictionaries or python dataclasses. If you return a python dataclass you can take advantage of BuildFlow's automatic ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/schema-validation"},"schema validation"),"."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"There should be ",(0,n.kt)("em",{parentName:"p"},"little to no")," I/O logic in the processor.")),(0,n.kt)("h2",{id:"how-to-create-a-processor"},"How to create a Processor"),(0,n.kt)("p",null,"A Processor can be created using either the ",(0,n.kt)("strong",{parentName:"p"},"processor")," decorator, or the ",(0,n.kt)("strong",{parentName:"p"},"Processor")," class."),(0,n.kt)("h3",{id:"processor-decorator"},"@processor decorator"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from buildflow import Node\nfrom buildflow.io import BigQuerySource\nfrom ray.data import Dataset\n\napp = Node()\n\n@app.processor(source=BigQuerySource(query='...'))\ndef process_dataset(bigquery_dataset: Dataset):\n    ...\n\napp.run()\n")),(0,n.kt)("h3",{id:"processor-class"},"Processor class"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from buildflow import Node, Processor\nfrom buildflow.io import BigQuerySource\n\napp = Node()\n\nclass MyProcessor(Processor):\n\n    def source(self):\n        return PubSubSource(subscription='...')\n\n    def process(self, message_data: Dict[str, Any]):\n        ...\n\napp.run(MyProcessor())()\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},"processor")," decorator and the ",(0,n.kt)("strong",{parentName:"p"},"Processor")," class are functionally equivalent. The ",(0,n.kt)("strong",{parentName:"p"},"processor")," decorator is just a convenience wrapper around the ",(0,n.kt)("strong",{parentName:"p"},"Processor")," class.")),(0,n.kt)("h2",{id:"lifecycle-methods"},"Lifecycle Methods"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Processor API")," contains 3 lifecycle methods that are executed by the runtime: ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"source")),", ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"sink")),", & ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"setup"))),(0,n.kt)("h3",{id:"source"},"source"),(0,n.kt)("p",null,"This ",(0,n.kt)("strong",{parentName:"p"},"source")," method defines the input reference for the processor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import buildflow\nfrom buildflow.io import PubSubSource\n\nclass MyProcessor:\n  ...\n\n  def source(self) -> buildflow.IO:\n    return PubSubSource(subscription='...')\n\n")),(0,n.kt)("h3",{id:"sink"},"sink"),(0,n.kt)("p",null,"This ",(0,n.kt)("strong",{parentName:"p"},"sink")," method defines the output reference for the processor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import buildflow\nfrom buildflow.io import BigQuerySink\n\nclass MyProcessor:\n  ...\n\n  def sink() -> buildflow.IO:\n    return BigQuerySink(table_id='...')\n\n")),(0,n.kt)("h3",{id:"setup"},"setup"),(0,n.kt)("p",null,"This ",(0,n.kt)("strong",{parentName:"p"},"setup")," method contains any ",(0,n.kt)("em",{parentName:"p"},"non-serializable")," dependencies that need to be initialized ",(0,n.kt)("em",{parentName:"p"},"for each replica"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"_","_","init","_","_")," method is called before the Processor is sent to the runtime. The runtime invokes the ",(0,n.kt)("strong",{parentName:"p"},"setup")," method on each Processor replica after it is created."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Most non-serializable objects are clients & loaded models."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"bigquery.Client(...), keras.Model(...), etc..."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import buildflow\nfrom tensorflow import keras\nfrom google.cloud import storage\n\nclass MyProcessor:\n\n  def __init__(self):\n    # Serializable fields can go in the __init__ method\n    self.model_path = 'path/to/location'\n    self.bucket_uri = 'gs://bucket_id'\n\n  def setup(self) -> buildflow.IO:\n    # Non-serializable fields go in the setup method\n    self.my_model = keras.models.load_model(self.model_path)\n    self.storage_client = storage.Client(self.bucket_uri)\n\n")))}u.isMDXComponent=!0}}]);