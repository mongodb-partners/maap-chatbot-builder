"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[600],{6202:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(4848),s=t(8453);const o={sidebar_position:2},i="External Demo Setup",a={id:"demo/external",title:"External Demo Setup",description:"Introduction",source:"@site/docs/demo/external.md",sourceDirName:"demo",slug:"/demo/external",permalink:"/maap-chatbot-builder/docs/demo/external",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Internal Demo Setup",permalink:"/maap-chatbot-builder/docs/demo/internal"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Data",id:"data",level:3},{value:"Config.yaml",id:"configyaml",level:3},{value:"Environment Variables",id:"environment-variables",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"external-demo-setup",children:"External Demo Setup"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"This page describes how to setup and showcase a simple RAG bot in order to demonstrate it to customers."}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsxs)(n.p,{children:["Use the below ",(0,r.jsx)(n.code,{children:".config"})," and ",(0,r.jsx)(n.code,{children:".env"})," files to setup the demo for external RAG chatbot."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"data",children:"Data"}),"\n",(0,r.jsx)(n.p,{children:"The data here is being loaded from the sitemap of Care Insurance Inc. It contains a structured list of URLs that represent various pages and resources available on their website. This includes pages related to their insurance products, services, customer support, educational content, and possibly other relevant sections such as blogs or news updates."}),"\n",(0,r.jsx)(n.p,{children:"A user can ask tailored question about their specific product and services."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"configyaml",children:"Config.yaml"}),"\n",(0,r.jsx)(n.p,{children:"Update the missing fields with your personal generated values below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ingest:\n    - source: 'sitemap'\n      source_path: 'https://www.careinsurance.com/sitemap.xml'\n      chunk_size: 2000\n      chunk_overlap: 200\nembedding:\n    class_name: Nomic-v1.5\nvector_store:\n    connectionString: '<you_mdb_connection_string>'\n    dbName: '<db_name>'\n    collectionName: 'embedded_content'\n    embeddingKey: 'embedding'\n    textKey: 'text'\n    numCandidates: 150\n    minScore: 0.1 \n    vectorSearchIndexName: 'vector_index'\nllms:\n    class_name: Fireworks\n    model_name: 'accounts/fireworks/models/mixtral-8x22b-instruct'\n    temprature: ''\n    top_p: ''\n    top_k: ''\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The data here can be loaded from different data sources of your choice, listed here is data from sitemap of Care Insurance website."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Update the FIREWORKS_API_KEY with your personal key or ",(0,r.jsx)(n.a,{href:"https://readme.fireworks.ai/docs/quickstart",children:"generate one"})," if not available."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FIREWORKS_API_KEY=\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);