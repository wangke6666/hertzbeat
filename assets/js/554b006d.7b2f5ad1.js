"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||l;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"mysql-change",title:"\u4f9d\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93H2\u5207\u6362\u4e3aMYSQL",sidebar_label:"H2\u5207\u6362\u4e3aMYSQL"},o=void 0,i={unversionedId:"start/mysql-change",id:"start/mysql-change",title:"\u4f9d\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93H2\u5207\u6362\u4e3aMYSQL",description:"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cHertzBeat\u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528MYSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002",source:"@site/docs/start/mysql-change.md",sourceDirName:"start",slug:"/start/mysql-change",permalink:"/docs/start/mysql-change",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/start/mysql-change.md",tags:[],version:"current",frontMatter:{id:"mysql-change",title:"\u4f9d\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93H2\u5207\u6362\u4e3aMYSQL",sidebar_label:"H2\u5207\u6362\u4e3aMYSQL"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u6848\u4f8b",permalink:"/docs/start/ssl-cert-practice"},next:{title:"\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/docs/advanced/extend-point"}},c={},p=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5MYSQL",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5mysql",level:3},{value:"\u6570\u636e\u5e93\u521b\u5efa",id:"\u6570\u636e\u5e93\u521b\u5efa",level:3},{value:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90",id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90",level:3}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"MYSQL\u662f\u4e00\u6b3e\u503c\u5f97\u4fe1\u8d56\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cHertzBeat\u9664\u4e86\u652f\u6301\u4f7f\u7528\u9ed8\u8ba4\u5185\u7f6e\u7684H2\u6570\u636e\u5e93\u5916\uff0c\u8fd8\u53ef\u4ee5\u5207\u6362\u4e3a\u4f7f\u7528MYSQL\u5b58\u50a8\u76d1\u63a7\u4fe1\u606f\uff0c\u544a\u8b66\u4fe1\u606f\uff0c\u914d\u7f6e\u4fe1\u606f\u7b49\u7ed3\u6784\u5316\u5173\u7cfb\u6570\u636e\u3002  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709MYSQL\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u6570\u636e\u5e93\u521b\u5efa\u90a3\u4e00\u6b65\u3002  ")),(0,n.kt)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5mysql"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5MYSQL"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,n.kt)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002  ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,n.kt)("li",{parentName:"ol"},"Docker\u5b89\u88c5MYSQl  ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ docker run -d --name mysql -p 3306:3306 -v /opt/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7\n")),(0,n.kt)("inlineCode",{parentName:"li"},"-v /opt/data:/var/lib/mysql")," \u4e3amysql\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,n.kt)("inlineCode",{parentName:"li"},"/opt/data"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55",(0,n.kt)("br",{parentName:"li"}),"\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f")),(0,n.kt)("h3",{id:"\u6570\u636e\u5e93\u521b\u5efa"},"\u6570\u636e\u5e93\u521b\u5efa"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u5165MYSQL\u6216\u4f7f\u7528\u5ba2\u6237\u7aef\u8fde\u63a5MYSQL\u670d\u52a1",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"mysql -uroot -p123456"),"  "),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u540d\u79f0\u4e3ahertzbeat\u7684\u6570\u636e\u5e93",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("inlineCode",{parentName:"li"},"create database hertzbeat;")),(0,n.kt)("li",{parentName:"ol"},"\u67e5\u770bhertzbeat\u6570\u636e\u5e93\u662f\u5426\u521b\u5efa\u6210\u529f\n",(0,n.kt)("inlineCode",{parentName:"li"},"show databases;"))),(0,n.kt)("h3",{id:"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6applicationyml\u5207\u6362\u6570\u636e\u6e90"},"\u4fee\u6539hertzbeat\u7684\u914d\u7f6e\u6587\u4ef6application.yml\u5207\u6362\u6570\u636e\u6e90"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\n\u4fee\u6539\u4f4d\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6\n\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,n.kt)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u5373\u53ef",(0,n.kt)("br",{parentName:"li"}),"\u66ff\u6362\u91cc\u9762\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"spring.database"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cIP\u7aef\u53e3\u8d26\u6237\u5bc6\u7801\u9a71\u52a8\n\u539f\u53c2\u6570: ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: org.h2.Driver\n    username: sa\n    password: 123456\n    url: jdbc:h2:./data/hertzbeat;MODE=MYSQL\n")),(0,n.kt)("p",null,"   \u5177\u4f53\u66ff\u6362\u53c2\u6570\u5982\u4e0b,\u9700\u6839\u636emysql\u73af\u5883\u914d\u7f6e\u8d26\u6237\u5bc6\u7801IP:   "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    username: root\n    password: 123456\n    url: jdbc:mysql://localhost:3306/hertzbeat?useUnicode=true&characterEncoding=utf-8&useSSL=false\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u542f\u52a8 HertzBeat \u6d4f\u89c8\u5668\u8bbf\u95ee http://ip:1157/ \u5f00\u59cb\u4f7f\u7528HertzBeat\u8fdb\u884c\u76d1\u63a7\u544a\u8b66\uff0c\u9ed8\u8ba4\u8d26\u6237\u5bc6\u7801 admin/hertzbeat")))}m.isMDXComponent=!0}}]);