"use strict";(self.webpackChunkbuildflow_docs=self.webpackChunkbuildflow_docs||[]).push([[411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[c]="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o="AWS SQS Streaming",u={unversionedId:"walkthroughs/aws_sqs_streaming",id:"walkthroughs/aws_sqs_streaming",title:"AWS SQS Streaming",description:"AWS SQS support is currenty in prototype mode, and only SQS as a source is supported.",source:"@site/docs/walkthroughs/aws_sqs_streaming.md",sourceDirName:"walkthroughs",slug:"/walkthroughs/aws_sqs_streaming",permalink:"/docs/walkthroughs/aws_sqs_streaming",draft:!1,editUrl:"https://github.com/launchflow/buildflow-docs/tree/main/docs/walkthroughs/aws_sqs_streaming.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"GCS CSV to GCP BigQuery Streaming",permalink:"/docs/walkthroughs/csv_bigquery_streaming"},next:{title:"Dynamic Autoscaling",permalink:"/docs/features/autoscaling"}},i={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Setting up your environment",id:"setting-up-your-environment",level:3},{value:"Run Pipeline",id:"run-pipeline",level:2},{value:"Pipeline Code",id:"pipeline-code",level:3},{value:"Cleaning Up",id:"cleaning-up",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-sqs-streaming"},"AWS SQS Streaming"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"AWS SQS support is currenty in prototype mode, and only SQS as a source is supported.")),(0,a.kt)("p",null,"In this walkthrough we will run a BuildFlow application that reads from an AQS SQS queue and writes to a local parquet file. You can find all the code for this walk through ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/launchflow/buildflow/blob/main/buildflow/samples/sqs_walkthrough.py"},"here"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"In order to follow this guide you must have an AWS account set up where a SQS queue can be created. You will also need to have the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS CLI installed")," to setup authentication and clean up resources."),(0,a.kt)("h3",{id:"setting-up-your-environment"},"Setting up your environment"),(0,a.kt)("p",null,"To interact with AWS resources BuildFlow will use the credentials on your machine. To set those up you can follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"},"here"),"."),(0,a.kt)("p",null,"Install BuildFlow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install buildflow\n")),(0,a.kt)("h2",{id:"run-pipeline"},"Run Pipeline"),(0,a.kt)("p",null,"When running the application the following resources will be created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SQS queue to send a receive messages from.")),(0,a.kt)("p",null,"The application does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Listens to messages on the newly created SQS queue."),(0,a.kt)("li",{parentName:"ol"},"Write the output to a local parquet file")),(0,a.kt)("p",null,"To run the application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python -m buildflow.samples.sqs_walkthrough --queue_name=buildflow-sqs-walkthrough\n")),(0,a.kt)("p",null,"Once this application is running you can use the AWS CLI to publish messages to the queue. First get the queue url by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"get-queue-url"),", then use queue url and the ",(0,a.kt)("inlineCode",{parentName:"p"},"send-message")," command to publish a message to the queue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aws sqs get-queue-url --queue-name=buildflow-sqs-walkthrough\naws sqs send-message --queue-url=$QUEUE_URL --message-body='{\"field\": 1}'\n")),(0,a.kt)("p",null,"Once SQS has sent your message to your application it will write the output to a local parquest file (defaults to: ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp/buildflow/local_pubsub.parquet")," and can be changed by adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"file_path")," flag when running your application)."),(0,a.kt)("p",null,"You can read the file using any parquet library. Below is an example\nin python:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pyarrow.parquet as pq\n\ntable = pq.read_table('/tmp/buildflow/local_pubsub.parquet')\nprint(table)\n")),(0,a.kt)("p",null,"or you can use DuckDB if you want to run SQL queries over the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import duckdb\n\ncursor = duckdb.connect()\ndata = cursor.execute('SELECT * FROM \"/tmp/buildflow/local_pubsub.parquet\"').fetchall()\nprint(data)\n")),(0,a.kt)("h3",{id:"pipeline-code"},"Pipeline Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import argparse\nimport json\nimport sys\nfrom typing import Any, Dict\n\nimport buildflow\nfrom buildflow import Flow\n\n\n# Parser to allow run time configuration of arguments\nparser = argparse.ArgumentParser()\nparser.add_argument('--queue_name', type=str, required=True)\nparser.add_argument('--file_path',\n                    type=str,\n                    default='/tmp/buildflow/local_pubsub.parquet')\nargs, _ = parser.parse_known_args(sys.argv)\n\n\nsource = buildflow.SQSSource(queue_name=args.queue_name)\nsink = buildflow.FileSink(file_path=args.file_path,\n                          file_format=buildflow.FileFormat.PARQUET)\n\nflow = Flow()\n\n\n@app.processor(source=source, sink=sink)\ndef process(element: Dict[str, Any]):\n    return json.loads(element['Body'])\n\n\n# Run our flow.\nflow.run()()\n\n")),(0,a.kt)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,a.kt)("p",null,"Make sure to clean up the resources you created to avoid extra AWS costs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aws sqs delete-queue --queue-url=$QUEUE_URL\n")))}d.isMDXComponent=!0}}]);