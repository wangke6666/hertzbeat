"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[5052],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],l={id:"contributing",title:"Contributor Guide",sidebar_label:"Contributor Guide"},s=void 0,u={unversionedId:"others/contributing",id:"others/contributing",title:"Contributor Guide",description:"We are committed to maintaining a happy community that helps each other, welcome every contributor to join us!",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/others/contributing.md",sourceDirName:"others",slug:"/others/contributing",permalink:"/en/docs/next/others/contributing",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/others/contributing.md",tags:[],version:"current",frontMatter:{id:"contributing",title:"Contributor Guide",sidebar_label:"Contributor Guide"},sidebar:"docs",previous:{title:"\u76f8\u5173\u8d44\u6e90",permalink:"/en/docs/next/others/resource"}},m=[{value:"Kinds of Contributions",id:"kinds-of-contributions",children:[],level:3},{value:"Getting HertzBeat up and running",id:"getting-hertzbeat-up-and-running",children:[],level:3},{value:"Find tasks",id:"find-tasks",children:[],level:3},{value:"Submit Pull Request",id:"submit-pull-request",children:[],level:3},{value:"Wait for the code to be merged",id:"wait-for-the-code-to-be-merged",children:[],level:3},{value:"After the code is merged",id:"after-the-code-is-merged",children:[],level:3},{value:"How to become a Committer?",id:"how-to-become-a-committer",children:[],level:3},{value:"Join Discussion",id:"join-discussion",children:[],level:3},{value:"\ud83e\udd50 Architecture",id:"-architecture",children:[],level:2}],c={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We are committed to maintaining a happy community that helps each other, welcome every contributor to join us!")),(0,o.kt)("h3",{id:"kinds-of-contributions"},"Kinds of Contributions"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In the HertzBeat community, there are many ways to contribute:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcbb",(0,o.kt)("strong",{parentName:"p"},"Code"),": Can help the community complete some tasks, write new features or fix some bugs;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u26a0\ufe0f",(0,o.kt)("strong",{parentName:"p"},"Test"),": Can come to participate in the writing of test code, including unit testing, integration testing, e2e testing;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcd6",(0,o.kt)("strong",{parentName:"p"},"Docs"),": Can write or Documentation improved to help users better understand and use HertzBeat;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcdd",(0,o.kt)("strong",{parentName:"p"},"Blog"),": You can write articles about HertzBeat to help the community better promote;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83e\udd14",(0,o.kt)("strong",{parentName:"p"},"Discussion"),": You can participate in the discussion of new features of HertzBeat and integrate your ideas with HertzBeat;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udca1",(0,o.kt)("strong",{parentName:"p"},"Preach"),": Can help publicize or promote the HertzBeat community, speak in meetup or summit;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcac",(0,o.kt)("strong",{parentName:"p"},"Suggestion"),": You can also make some suggestions to the project or community to promote the healthy development of the community;"))),(0,o.kt)("p",null,"More see ",(0,o.kt)("a",{parentName:"p",href:"https://allcontributors.org/docs/en/emoji-key"},"Contribution Types")),(0,o.kt)("p",null,"Even small corrections to typos are very welcome :)"),(0,o.kt)("h3",{id:"getting-hertzbeat-up-and-running"},"Getting HertzBeat up and running"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To get HertzBeat code running on your development tools, and able to debug with breakpoints.\nThis is a front-end and back-end separation project. To start the local code, the back-end ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/tree/master/manager"},"manager")," and the front-end ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat/tree/master/web-app"},"web-app")," must be started separately.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backend start")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Deploy and start dependent services ",(0,o.kt)("inlineCode",{parentName:"li"},"MYSQL")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"TDengine")," database"),(0,o.kt)("li",{parentName:"ol"},"Requires ",(0,o.kt)("inlineCode",{parentName:"li"},"maven3+"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"java8+")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"lombok")," environments"),(0,o.kt)("li",{parentName:"ol"},"Modify the dependent service address and other information of the configuration file-",(0,o.kt)("inlineCode",{parentName:"li"},"manager/src/main/resources/application.yml")),(0,o.kt)("li",{parentName:"ol"},"Start ",(0,o.kt)("inlineCode",{parentName:"li"},"springboot manager")," service ",(0,o.kt)("inlineCode",{parentName:"li"},"manager/src/main/java/com/usthe/manager/Manager.java"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Front-web start")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Need ",(0,o.kt)("inlineCode",{parentName:"li"},"nodejs npm angular-cli")," environment"),(0,o.kt)("li",{parentName:"ol"},"Install yarn: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install -g yarn")),(0,o.kt)("li",{parentName:"ol"},"Execute under the front-end project directory web-app: ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,o.kt)("li",{parentName:"ol"},"Install angular-cli globally: ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install -g @angular/cli@12 --registry=https://registry.npm.taobao.org")),(0,o.kt)("li",{parentName:"ol"},"After the local backend is started, start the local frontend in the web-app directory: ",(0,o.kt)("inlineCode",{parentName:"li"},"ng serve --open")),(0,o.kt)("li",{parentName:"ol"},"Browser access to localhost:4200 to start")),(0,o.kt)("h3",{id:"find-tasks"},"Find tasks"),(0,o.kt)("p",null,"Find the issue you are interested in! On our GitHub repo issue list, we often publish some issues with the label good first issue or status: volunteer wanted.\nThese issues welcome the help of contributors. Among them, good first issues tend to have low thresholds and are suitable for novices."),(0,o.kt)("p",null,"Of course, if you have a good idea, you can also propose it directly on GitHub Discussion or contact with community."),(0,o.kt)("h3",{id:"submit-pull-request"},"Submit Pull Request"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First you need to fork your target ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat"},"hertzbeat repository"),"."),(0,o.kt)("li",{parentName:"ol"},"Then download the code locally with git command:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:${YOUR_USERNAME}/hertzbeat.git #Recommended  \n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After the download is complete, please refer to the getting started guide or README file of the target repository to initialize the project."),(0,o.kt)("li",{parentName:"ol"},"Then, you can refer to the following command to submit the code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b a-feature-branch #Recommended  \n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Submit the coed as a commit, the commit message format specification required: ","[module name or type name]","feature or bugfix or doc: custom message.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git add <modified file/path> \ngit commit -m '[docs]feature: necessary instructions' #Recommended \n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Push to the remote repository")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin a-feature-branch   \n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Then you can initiate a new PR (Pull Request) on GitHub.")),(0,o.kt)("p",null,"Please note that the title of the PR needs to conform to our spec, and write the necessary description in the PR to facilitate code review by Committers and other contributors."),(0,o.kt)("h3",{id:"wait-for-the-code-to-be-merged"},"Wait for the code to be merged"),(0,o.kt)("p",null,"After submitting the PR, the Committer or the community's friends will review the code you submitted (Code Review), and will propose some modification suggestions or conduct some discussions. Please pay attention to your PR in time."),(0,o.kt)("p",null,"If subsequent changes are required, there is no need to initiate a new PR. After submitting a commit on the original branch and pushing it to the remote repository, the PR will be automatically updated."),(0,o.kt)("p",null,"In addition, our project has a relatively standardized and strict CI inspection process. After submitting PR, CI will be triggered. Please pay attention to whether it passes the CI inspection."),(0,o.kt)("p",null,"Finally, the Committers can merge the PR into the master branch."),(0,o.kt)("h3",{id:"after-the-code-is-merged"},"After the code is merged"),(0,o.kt)("p",null,"After the code has been merged, you can delete the development branch on both the local and remote repositories:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d a-dev-branch\ngit push origin --delete a-dev-branch\n")),(0,o.kt)("p",null,"On the master/main branch, you can do the following to sync the upstream repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/dromara/hertzbeat.git #Bind the remote warehouse, if it has been executed, it does not need to be executed again\ngit checkout master \ngit pull upstream master\n")),(0,o.kt)("h3",{id:"how-to-become-a-committer"},"How to become a Committer?"),(0,o.kt)("p",null,"With the above steps, you are a contributor to HertzBeat. Repeat the previous steps to stay active in the community, keep at, you can become a Committer!"),(0,o.kt)("h3",{id:"join-discussion"},"Join Discussion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/hertzbeat/community"},"Gitter Channel")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/usthe/hertzbeat/discussions"},"Github Discussion")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.qq.com/products/379369"},"User Club")),(0,o.kt)("p",null,"Add WeChat account ",(0,o.kt)("inlineCode",{parentName:"p"},"tan-cloud")," to pull you into the WeChat group."),(0,o.kt)("p",null,"QQ group number ",(0,o.kt)("inlineCode",{parentName:"p"},"718618151"),", verify code: ",(0,o.kt)("inlineCode",{parentName:"p"},"tancloud")),(0,o.kt)("p",null,"Public WeChat: ",(0,o.kt)("inlineCode",{parentName:"p"},"tancloudtech")),(0,o.kt)("h2",{id:"-architecture"},"\ud83e\udd50 Architecture"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/manager"},"manager"))," Provide monitoring management, system management basic services.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Provides monitoring management, monitoring configuration management, system user management, etc."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/collector"},"collector"))," Provide metrics data collection services.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Use common protocols to remotely collect and obtain peer-to-peer metrics data."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/warehouse"},"warehouse"))," Provide monitoring data warehousing services.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Metrics data management, data query, calculation and statistics."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/alerter"},"alerter"))," Provide alert service.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Alarm calculation trigger, monitoring status linkage, alarm configuration, and alarm notification."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat/tree/master/web-app"},"web-app"))," Provide web ui.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Angular Web UI.")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/dromara/hertzbeat/home/static/img/docs/hertzbeat-stru-en.svg",alt:"hertzBeat"})))}p.isMDXComponent=!0}}]);