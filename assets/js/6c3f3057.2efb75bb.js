"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[5363],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||p;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7106:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),p=(n(7294),n(4137)),o=["components"],i={id:"docker-deploy",title:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u90e8\u7f72"},l=void 0,s={unversionedId:"start/docker-deploy",id:"start/docker-deploy",title:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat",description:"\u63a8\u8350\u4f7f\u7528docker\u90e8\u7f72HertzBeat",source:"@site/docs/start/docker-deploy.md",sourceDirName:"start",slug:"/start/docker-deploy",permalink:"/docs/next/start/docker-deploy",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/docker-deploy.md",tags:[],version:"current",frontMatter:{id:"docker-deploy",title:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5HertzBeat",sidebar_label:"Docker\u65b9\u5f0f\u90e8\u7f72"},sidebar:"docs",previous:{title:"TDengine\u5b89\u88c5\u521d\u59cb\u5316(\u53ef\u9009)",permalink:"/docs/next/start/tdengine-init"},next:{title:"\u5b89\u88c5\u5305\u65b9\u5f0f\u90e8\u7f72",permalink:"/docs/next/start/package-deploy"}},m=[{value:"Docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",id:"docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898",children:[],level:3}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528docker\u90e8\u7f72HertzBeat  ")),(0,p.kt)("p",null,"\u5b89\u88c5\u90e8\u7f72\u89c6\u9891\u6559\u7a0b: ",(0,p.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1GY41177YL"},"HertzBeat\u5b89\u88c5\u90e8\u7f72-BiliBili"),"  "),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,p.kt)("br",{parentName:"p"}),"\n","Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,p.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u62c9\u53d6HertzBeat Docker\u955c\u50cf",(0,p.kt)("br",{parentName:"p"}),"\n","\u955c\u50cf\u7248\u672cTAG\u53ef\u67e5\u770b",(0,p.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tancloud/hertzbeat/tags"},"\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93"),"     "),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ docker pull tancloud/hertzbeat   \n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6(\u53ef\u9009)",(0,p.kt)("br",{parentName:"p"}),"\n","\u5728\u4e3b\u673a\u76ee\u5f55\u4e0b\u521b\u5efaapplication.yml\uff0ceg:/opt/application.yml",(0,p.kt)("br",{parentName:"p"}),"\n","\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u53c2\u8003 \u9879\u76ee\u4ed3\u5e93",(0,p.kt)("a",{parentName:"p",href:"https://gitee.com/dromara/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),"\uff0c\u66ff\u6362\u91cc\u9762\u7684",(0,p.kt)("inlineCode",{parentName:"p"},"td-engine"),"\u670d\u52a1\u53c2\u6570\uff0cIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\n\u6ce8\u610f\u26a0\ufe0f\uff08\u82e5\u4f7f\u7528\u90ae\u4ef6\u544a\u8b66\uff0c\u9700\u66ff\u6362\u91cc\u9762\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u53c2\u6570\u3002\u82e5\u4f7f\u7528MYSQL\u6570\u636e\u6e90\uff0c\u9700\u66ff\u6362\u91cc\u9762\u7684datasource\u53c2\u6570\u53c2\u89c1",(0,p.kt)("a",{parentName:"p",href:"mysql-init"},"H2\u6570\u636e\u5e93\u5207\u6362\u4e3aMYSQL"),"\uff09",(0,p.kt)("br",{parentName:"p"}),"\n","\u5177\u4f53\u66ff\u6362\u53c2\u6570\u5982\u4e0b:"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"   \n   warehouse.store.td-engine.url\n   warehouse.store.td-engine.username\n   warehouse.store.td-engine.password\n   \n   spring.mail.host\n   spring.mail.port\n   spring.mail.username\n   spring.mail.password\n")),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u7528\u6237\u914d\u7f6e\u6587\u4ef6(\u53ef\u9009,\u81ea\u5b9a\u4e49\u914d\u7f6e\u7528\u6237\u5bc6\u7801)",(0,p.kt)("br",{parentName:"li"}),"HertzBeat\u9ed8\u8ba4\u5185\u7f6e\u4e09\u4e2a\u7528\u6237\u8d26\u6237,\u5206\u522b\u4e3a admin/hertzbeat tom/hertzbeat guest/hertzbeat",(0,p.kt)("br",{parentName:"li"}),"\u82e5\u9700\u8981\u65b0\u589e\u5220\u9664\u4fee\u6539\u8d26\u6237\u6216\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"li"},"sureness.yml")," \u5b9e\u73b0\uff0c\u82e5\u65e0\u6b64\u9700\u6c42\u53ef\u5ffd\u7565\u6b64\u6b65\u9aa4",(0,p.kt)("br",{parentName:"li"}),"\u5728\u4e3b\u673a\u76ee\u5f55\u4e0b\u521b\u5efasureness.yml\uff0ceg:/opt/sureness.yml",(0,p.kt)("br",{parentName:"li"}),"\u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u53c2\u8003 \u9879\u76ee\u4ed3\u5e93",(0,p.kt)("a",{parentName:"li",href:"https://gitee.com/dromara/hertzbeat/blob/master/script/sureness.yml"},"/script/sureness.yml"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"\nresourceRole:\n   - /api/account/auth/refresh===post===[admin,user,guest]\n   - /api/apps/**===get===[admin,user,guest]\n   - /api/monitor/**===get===[admin,user,guest]\n   - /api/monitor/**===post===[admin,user]\n   - /api/monitor/**===put===[admin,user]\n   - /api/monitor/**===delete==[admin]\n   - /api/monitors/**===get===[admin,user,guest]\n   - /api/monitors/**===post===[admin,user]\n   - /api/monitors/**===put===[admin,user]\n   - /api/monitors/**===delete===[admin]\n   - /api/alert/**===get===[admin,user,guest]\n   - /api/alert/**===post===[admin,user]\n   - /api/alert/**===put===[admin,user]\n   - /api/alert/**===delete===[admin]\n   - /api/alerts/**===get===[admin,user,guest]\n   - /api/alerts/**===post===[admin,user]\n   - /api/alerts/**===put===[admin,user]\n   - /api/alerts/**===delete===[admin]\n   - /api/notice/**===get===[admin,user,guest]\n   - /api/notice/**===post===[admin,user]\n   - /api/notice/**===put===[admin,user]\n   - /api/notice/**===delete===[admin]\n   - /api/tag/**===get===[admin,user,guest]\n   - /api/tag/**===post===[admin,user]\n   - /api/tag/**===put===[admin,user]\n   - /api/tag/**===delete===[admin]\n   - /api/summary/**===get===[admin,user,guest]\n   - /api/summary/**===post===[admin,user]\n   - /api/summary/**===put===[admin,user]\n   - /api/summary/**===delete===[admin]\n\n# \u9700\u8981\u88ab\u8fc7\u6ee4\u4fdd\u62a4\u7684\u8d44\u6e90,\u4e0d\u8ba4\u8bc1\u9274\u6743\u76f4\u63a5\u8bbf\u95ee\n# /api/v1/source3===get \u8868\u793a /api/v1/source3===get \u53ef\u4ee5\u88ab\u4efb\u4f55\u4eba\u8bbf\u95ee \u65e0\u9700\u767b\u5f55\u8ba4\u8bc1\u9274\u6743\nexcludedResource:\n   - /api/account/auth/**===*\n   - /api/i18n/**===get\n   - /api/apps/hierarchy===get\n   # web ui \u524d\u7aef\u9759\u6001\u8d44\u6e90\n   - /===get\n   - /dashboard/**===get\n   - /monitors/**===get\n   - /alert/**===get\n   - /account/**===get\n   - /setting/**===get\n   - /passport/**===get\n   - /**/*.html===get\n   - /**/*.js===get\n   - /**/*.css===get\n   - /**/*.ico===get\n   - /**/*.ttf===get\n   - /**/*.png===get\n   - /**/*.gif===get\n   - /**/*.jpg===get\n   - /**/*.svg===get\n   - /**/*.json===get\n   # swagger ui \u8d44\u6e90\n   - /swagger-resources/**===get\n   - /v2/api-docs===get\n   - /v3/api-docs===get\n\n# \u7528\u6237\u8d26\u6237\u4fe1\u606f\n# \u4e0b\u9762\u6709 admin tom lili \u4e09\u4e2a\u8d26\u6237\n# eg: admin \u62e5\u6709[admin,user]\u89d2\u8272,\u5bc6\u7801\u4e3ahertzbeat \n# eg: tom \u62e5\u6709[user],\u5bc6\u7801\u4e3ahertzbeat\n# eg: lili \u62e5\u6709[guest],\u660e\u6587\u5bc6\u7801\u4e3alili, \u52a0\u76d0\u5bc6\u7801\u4e3a1A676730B0C7F54654B0E09184448289\naccount:\n   - appId: admin\n     credential: hertzbeat\n     role: [admin,user]\n   - appId: tom\n     credential: hertzbeat\n     role: [user]\n   - appId: guest\n     credential: hertzbeat\n     role: [guest]\n")),(0,p.kt)("p",null,"   \u4fee\u6539sureness.yml\u7684\u5982\u4e0b",(0,p.kt)("strong",{parentName:"p"},"\u90e8\u5206\u53c2\u6570"),"\uff1a",(0,p.kt)("strong",{parentName:"p"},"[\u6ce8\u610f\u26a0\ufe0fsureness\u914d\u7f6e\u7684\u5176\u5b83\u9ed8\u8ba4\u53c2\u6570\u9700\u4fdd\u7559]"),"  "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"\n# \u7528\u6237\u8d26\u6237\u4fe1\u606f\n# \u4e0b\u9762\u6709 admin tom lili \u4e09\u4e2a\u8d26\u6237\n# eg: admin \u62e5\u6709[admin,user]\u89d2\u8272,\u5bc6\u7801\u4e3ahertzbeat \n# eg: tom \u62e5\u6709[user],\u5bc6\u7801\u4e3ahertzbeat\n# eg: lili \u62e5\u6709[guest],\u660e\u6587\u5bc6\u7801\u4e3alili, \u52a0\u76d0\u5bc6\u7801\u4e3a1A676730B0C7F54654B0E09184448289\naccount:\n   - appId: admin\n     credential: hertzbeat\n     role: [admin,user]\n   - appId: tom\n     credential: hertzbeat\n     role: [user]\n   - appId: guest\n     credential: hertzbeat\n     role: [guest]\n")),(0,p.kt)("ol",{start:6},(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u542f\u52a8HertzBeat Docker\u5bb9\u5668  "),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"$ docker run -d -p 1157:1157 -v /opt/application.yml:/opt/hertzbeat/config/application.yml -v /opt/sureness.yml:/opt/hertzbeat/config/sureness.yml --name hertzbeat tancloud/hertzbeat\n526aa188da767ae94b244226a2b2eec2b5f17dd8eff592893d9ec0cd0f3a1ccd\n")),(0,p.kt)("p",{parentName:"li"},"\u8fd9\u6761\u547d\u4ee4\u542f\u52a8\u4e00\u4e2a\u8fd0\u884cHertzBeat\u7684Docker\u5bb9\u5668\uff0c\u5e76\u4e14\u5c06\u5bb9\u5668\u76841157\u7aef\u53e3\u6620\u5c04\u5230\u5bbf\u4e3b\u673a\u76841157\u7aef\u53e3\u4e0a\u3002\u82e5\u5bbf\u4e3b\u673a\u5df2\u6709\u8fdb\u7a0b\u5360\u7528\u8be5\u7aef\u53e3\uff0c\u5219\u9700\u8981\u4fee\u6539\u4e3b\u673a\u6620\u5c04\u7aef\u53e3\u3002"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},"docker run -d : \u901a\u8fc7Docker\u8fd0\u884c\u4e00\u4e2a\u5bb9\u5668,\u4f7f\u5176\u5728\u540e\u53f0\u8fd0\u884c"),(0,p.kt)("li",{parentName:"ul"},"-p 1157:1157  : \u6620\u5c04\u5bb9\u5668\u7aef\u53e3\u5230\u4e3b\u673a\u7aef\u53e3"),(0,p.kt)("li",{parentName:"ul"},"-v /opt/application.yml:/opt/hertzbeat/config/application.yml  : (\u53ef\u9009,\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u6302\u8f7d\u4e0a\u4e0a\u4e00\u6b65\u4fee\u6539\u7684\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u5373\u4f7f\u7528\u672c\u5730\u914d\u7f6e\u6587\u4ef6\u8986\u76d6\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6\u3002\u6211\u4eec\u9700\u8981\u4fee\u6539\u6b64\u914d\u7f6e\u6587\u4ef6\u7684MYSQL\uff0cTDengine\u914d\u7f6e\u4fe1\u606f\u6765\u8fde\u63a5\u5916\u90e8\u670d\u52a1\u3002"),(0,p.kt)("li",{parentName:"ul"},"-v /opt/sureness.yml:/opt/hertzbeat/config/sureness.yml  : (\u53ef\u9009,\u4e0d\u9700\u8981\u53ef\u5220\u9664)\u6302\u8f7d\u4e0a\u4e00\u6b65\u4fee\u6539\u7684\u8d26\u6237\u914d\u7f6e\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\uff0c\u82e5\u65e0\u4fee\u6539\u8d26\u6237\u9700\u6c42\u53ef\u5220\u9664\u6b64\u547d\u4ee4\u53c2\u6570\u3002  "),(0,p.kt)("li",{parentName:"ul"},"--name hertzbeat : \u547d\u540d\u5bb9\u5668\u540d\u79f0 hertzbeat "),(0,p.kt)("li",{parentName:"ul"},"tancloud/hertzbeat : \u4f7f\u7528\u62c9\u53d6\u7684HertzBeat\u5b98\u65b9\u53d1\u5e03\u7684\u5e94\u7528\u955c\u50cf\u6765\u542f\u52a8\u5bb9\u5668,\u7248\u672c\u53ef\u67e5\u770b",(0,p.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/tancloud/hertzbeat/tags"},"\u5b98\u65b9\u955c\u50cf\u4ed3\u5e93"),"   "))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5f00\u59cb\u63a2\u7d22HertzBeat",(0,p.kt)("br",{parentName:"p"}),"\n","\u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5f00\u59cb\u4f7f\u7528HertzBeat\u8fdb\u884c\u76d1\u63a7\u544a\u8b66\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat\u3002  "))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"HAVE FUN"),"   "),(0,p.kt)("h3",{id:"docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"},"Docker\u90e8\u7f72\u5e38\u89c1\u95ee\u9898"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"MYSQL,TDENGINE\u548cHertzBeat\u90fdDocker\u90e8\u7f72\u5728\u540c\u4e00\u4e3b\u673a\u4e0a\uff0cHertzBeat\u4f7f\u7528localhost\u6216127.0.0.1\u8fde\u63a5\u6570\u636e\u5e93\u5931\u8d25"),(0,p.kt)("br",{parentName:"p"}),"\n","\u6b64\u95ee\u9898\u672c\u8d28\u4e3aDocker\u5bb9\u5668\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7aef\u53e3\u8fde\u63a5\u5931\u8d25\uff0c\u7531\u4e8edocker\u9ed8\u8ba4\u7f51\u7edc\u6a21\u5f0f\u4e3aBridge\u6a21\u5f0f\uff0c\u5176\u901a\u8fc7localhost\u8bbf\u95ee\u4e0d\u5230\u5bbf\u4e3b\u673a\u3002"),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u89e3\u51b3\u529e\u6cd5\u4e00\uff1a\u914d\u7f6eapplication.yml\u5c06\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\u7531localhost\u4fee\u6539\u4e3a\u5bbf\u4e3b\u673a\u7684\u5bf9\u5916IP",(0,p.kt)("br",{parentName:"p"}),"\n","\u89e3\u51b3\u529e\u6cd5\u4e8c\uff1a\u4f7f\u7528Host\u7f51\u7edc\u6a21\u5f0f\u542f\u52a8Docker\uff0c\u5373\u4f7fDocker\u5bb9\u5668\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edc ",(0,p.kt)("inlineCode",{parentName:"p"},"docker run -d --network host ....."),"   "))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6309\u7167\u6d41\u7a0b\u90e8\u7f72\uff0c\u8bbf\u95ee http://ip:1157/ \u65e0\u754c\u9762"),(0,p.kt)("br",{parentName:"p"}),"\n","\u8bf7\u53c2\u8003\u4e0b\u9762\u51e0\u70b9\u6392\u67e5\u95ee\u9898\uff1a  "),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u4e00\uff1a\u82e5\u5207\u6362\u4e86\u4f9d\u8d56\u670d\u52a1MYSQL\u6570\u636e\u5e93\uff0c\u6392\u67e5\u6570\u636e\u5e93\u662f\u5426\u6210\u529f\u521b\u5efa\uff0c\u662f\u5426\u542f\u52a8\u6210\u529f\n\u4e8c\uff1aHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"application.yml")," \u91cc\u9762\u7684\u4f9d\u8d56\u670d\u52a1IP\u8d26\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u662f\u5426\u6b63\u786e",(0,p.kt)("br",{parentName:"p"}),"\n","\u4e09\uff1a\u82e5\u90fd\u65e0\u95ee\u9898\u53ef\u4ee5 ",(0,p.kt)("inlineCode",{parentName:"p"},"docker logs hertzbeat")," \u67e5\u770b\u5bb9\u5668\u65e5\u5fd7\u662f\u5426\u6709\u660e\u663e\u9519\u8bef\uff0c\u63d0issue\u6216\u4ea4\u6d41\u7fa4\u6216\u793e\u533a\u53cd\u9988"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u65e5\u5fd7\u62a5\u9519TDengine\u8fde\u63a5\u6216\u63d2\u5165SQL\u5931\u8d25"),"  "),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u4e00\uff1a\u6392\u67e5\u914d\u7f6e\u7684\u6570\u636e\u5e93\u8d26\u6237\u5bc6\u7801\u662f\u5426\u6b63\u786e\uff0c\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa",(0,p.kt)("br",{parentName:"p"}),"\n","\u4e8c\uff1a\u82e5\u662f\u5b89\u88c5\u5305\u5b89\u88c5\u7684TDengine2.3+\uff0c\u9664\u4e86\u542f\u52a8server\u5916\uff0c\u8fd8\u9700\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"systemctl start taosadapter")," \u542f\u52a8 adapter    "))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u5386\u53f2\u56fe\u8868\u957f\u65f6\u95f4\u90fd\u4e00\u76f4\u65e0\u6570\u636e"),"  "),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"\u4e00\uff1aTdengine\u662f\u5426\u914d\u7f6e\uff0c\u672a\u914d\u7f6e\u5219\u65e0\u5386\u53f2\u56fe\u8868\u6570\u636e",(0,p.kt)("br",{parentName:"p"}),"\n","\u4e8c\uff1aTdengine\u7684\u6570\u636e\u5e93",(0,p.kt)("inlineCode",{parentName:"p"},"hertzbeat"),"\u662f\u5426\u521b\u5efa\n\u4e09: HertzBeat\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,p.kt)("inlineCode",{parentName:"p"},"application.yml")," \u91cc\u9762\u7684\u4f9d\u8d56\u670d\u52a1 Tdengine IP\u8d26\u6237\u5bc6\u7801\u7b49\u914d\u7f6e\u662f\u5426\u6b63\u786e")))))}u.isMDXComponent=!0}}]);