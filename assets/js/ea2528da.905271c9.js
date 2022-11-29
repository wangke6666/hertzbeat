"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[9146],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,b=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(b,o(o({ref:n},d),{},{components:t})):a.createElement(b,o({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},53709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={id:"extend-jdbc",title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},o=void 0,i={unversionedId:"advanced/extend-jdbc",id:"version-v1.0.0/advanced/extend-jdbc",title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",description:"\u4ece\u81ea\u5b9a\u4e49\u76d1\u63a7\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528JDBC(\u76ee\u524d\u652f\u6301mysql,mariadb,postgresql,sqlserver)\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002",source:"@site/versioned_docs/version-v1.0.0/advanced/extend-jdbc.md",sourceDirName:"advanced",slug:"/advanced/extend-jdbc",permalink:"/docs/v1.0.0/advanced/extend-jdbc",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/versioned_docs/version-v1.0.0/advanced/extend-jdbc.md",tags:[],version:"v1.0.0",frontMatter:{id:"extend-jdbc",title:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",sidebar_label:"JDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7"},sidebar:"docs",previous:{title:"JsonPath\u89e3\u6790\u65b9\u5f0f",permalink:"/docs/v1.0.0/advanced/extend-http-jsonpath"},next:{title:"SSH\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7",permalink:"/docs/v1.0.0/advanced/extend-ssh"}},s={},p=[{value:"JDBC\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",id:"jdbc\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b",level:3},{value:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f",level:3},{value:"<strong>oneRow</strong>",id:"onerow",level:4},{value:"<strong>multiRow</strong>",id:"multirow",level:4},{value:"<strong>columns</strong>",id:"columns",level:4},{value:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4",level:3},{value:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6",id:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6",level:3},{value:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6",id:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6",level:3}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ece",(0,r.kt)("a",{parentName:"p",href:"extend-point"},"\u81ea\u5b9a\u4e49\u76d1\u63a7"),"\u4e86\u89e3\u719f\u6089\u4e86\u600e\u4e48\u81ea\u5b9a\u4e49\u7c7b\u578b\uff0c\u6307\u6807\uff0c\u534f\u8bae\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u6765\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u7528JDBC(\u76ee\u524d\u652f\u6301mysql,mariadb,postgresql,sqlserver)\u81ea\u5b9a\u4e49\u6307\u6807\u76d1\u63a7\u3002\nJDBC\u534f\u8bae\u81ea\u5b9a\u4e49\u76d1\u63a7\u53ef\u4ee5\u8ba9\u6211\u4eec\u5f88\u65b9\u4fbf\u7684\u901a\u8fc7\u5199SQL\u67e5\u8be2\u8bed\u53e5\u5c31\u80fd\u76d1\u63a7\u5230\u6211\u4eec\u60f3\u76d1\u63a7\u7684\u6307\u6807     ")),(0,r.kt)("h3",{id:"jdbc\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"},"JDBC\u534f\u8bae\u91c7\u96c6\u6d41\u7a0b"),(0,r.kt)("p",null,"\u3010",(0,r.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u76f4\u8fdeMYSQL"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884cSQL\u67e5\u8be2\u8bed\u53e5"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e\u89e3\u6790:oneRow, multiRow, columns"),"\u3011->\u3010",(0,r.kt)("strong",{parentName:"p"},"\u6307\u6807\u6570\u636e\u63d0\u53d6"),"\u3011   "),(0,r.kt)("p",null,"\u7531\u6d41\u7a0b\u53ef\u89c1\uff0c\u6211\u4eec\u81ea\u5b9a\u4e49\u4e00\u4e2aJDBC\u534f\u8bae\u7684\u76d1\u63a7\u7c7b\u578b\uff0c\u9700\u8981\u914d\u7f6eJDBC\u8bf7\u6c42\u53c2\u6570\uff0c\u914d\u7f6e\u83b7\u53d6\u54ea\u4e9b\u6307\u6807\uff0c\u914d\u7f6e\u67e5\u8be2SQL\u8bed\u53e5\u3002"),(0,r.kt)("h3",{id:"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"},"\u6570\u636e\u89e3\u6790\u65b9\u5f0f"),(0,r.kt)("p",null,"SQL\u67e5\u8be2\u56de\u6765\u7684\u6570\u636e\u5b57\u6bb5\u548c\u6211\u4eec\u9700\u8981\u7684\u6307\u6807\u6620\u5c04\uff0c\u5c31\u80fd\u83b7\u53d6\u5bf9\u5e94\u7684\u6307\u6807\u6570\u636e\uff0c\u76ee\u524d\u6620\u5c04\u89e3\u6790\u65b9\u5f0f\u6709\u4e09\u79cd\uff1aoneRow, multiRow, columns"),(0,r.kt)("h4",{id:"onerow"},(0,r.kt)("strong",{parentName:"h4"},"oneRow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u67e5\u8be2\u4e00\u884c\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5217\u540d\u79f0\uff0c\u548c\u67e5\u8be2\u7684\u5b57\u6bb5\u6620\u5c04  ")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u67e5\u8be2\u7684\u6307\u6807\u5b57\u6bb5\u4e3a\uff1aone tow three four\n\u67e5\u8be2SQL\uff1aselect one, tow, three, four from book limit 1;\n\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\u4e00\u884c\u91c7\u96c6\u6570\u636e\u3002   "),(0,r.kt)("h4",{id:"multirow"},(0,r.kt)("strong",{parentName:"h4"},"multiRow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u67e5\u8be2\u591a\u884c\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u8fd4\u56de\u7ed3\u679c\u96c6\u7684\u5217\u540d\u79f0\uff0c\u548c\u67e5\u8be2\u7684\u5b57\u6bb5\u6620\u5c04  ")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u67e5\u8be2\u7684\u6307\u6807\u5b57\u6bb5\u4e3a\uff1aone tow three four\n\u67e5\u8be2SQL\uff1aselect one, tow, three, four from book;\n\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u4e00\u4e00\u6620\u5c04\u4e3a\u591a\u884c\u91c7\u96c6\u6570\u636e\u3002"),(0,r.kt)("h4",{id:"columns"},(0,r.kt)("strong",{parentName:"h4"},"columns")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u91c7\u96c6\u4e00\u884c\u6307\u6807\u6570\u636e, \u901a\u8fc7\u67e5\u8be2\u7684\u4e24\u5217\u6570\u636e(key-value)\uff0ckey\u548c\u67e5\u8be2\u7684\u5b57\u6bb5\u5339\u914d\uff0cvalue\u4e3a\u67e5\u8be2\u5b57\u6bb5\u7684\u503c  ")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a",(0,r.kt)("br",{parentName:"p"}),"\n","\u67e5\u8be2\u5b57\u6bb5\uff1aone tow three four",(0,r.kt)("br",{parentName:"p"}),"\n","\u67e5\u8be2SQL\uff1aselect key, value from book;",(0,r.kt)("br",{parentName:"p"}),"\n","SQL\u54cd\u5e94\u6570\u636e\uff1a   "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"key"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"one"),(0,r.kt)("td",{parentName:"tr",align:null},"243")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"two"),(0,r.kt)("td",{parentName:"tr",align:null},"435")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"three"),(0,r.kt)("td",{parentName:"tr",align:null},"332")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"four"),(0,r.kt)("td",{parentName:"tr",align:null},"643")))),(0,r.kt)("p",null,"\u8fd9\u91cc\u6307\u6807\u5b57\u6bb5\u5c31\u80fd\u548c\u54cd\u5e94\u6570\u636e\u7684key\u6620\u5c04,\u83b7\u53d6\u5bf9\u5e94\u7684value\u4e3a\u5176\u91c7\u96c6\u76d1\u63a7\u6570\u636e\u3002     "),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6b65\u9aa4"},"\u81ea\u5b9a\u4e49\u6b65\u9aa4"),(0,r.kt)("p",null,"\u914d\u7f6e\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u9700\u65b0\u589e\u914d\u7f6e\u4e24\u4e2aYML\u6587\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aexample_sql.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/app/ \u4e0b"),(0,r.kt)("li",{parentName:"ol"},"\u7528\u76d1\u63a7\u7c7b\u578b\u547d\u540d\u7684\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6 - \u4f8b\u5982\uff1aexample_sql.yml \u9700\u4f4d\u4e8e\u5b89\u88c5\u76ee\u5f55 /hertzbeat/define/param/ \u4e0b"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542fhertzbeat\u7cfb\u7edf\uff0c\u6211\u4eec\u5c31\u9002\u914d\u597d\u4e86\u4e00\u4e2a\u65b0\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\u3002")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u4e0b\u9762\u8be6\u7ec6\u4ecb\u7ecd\u4e0b\u8fd9\u4fe9\u6587\u4ef6\u7684\u914d\u7f6e\u7528\u6cd5\uff0c\u8bf7\u6ce8\u610f\u770b\u4f7f\u7528\u6ce8\u91ca\u3002   "),(0,r.kt)("h3",{id:"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76d1\u63a7\u914d\u7f6e\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,r.kt)("em",{parentName:"p"},"\u76d1\u63a7\u7c7b\u578b\u7684\u540d\u79f0(\u56fd\u9645\u5316), \u8bf7\u6c42\u53c2\u6570\u6620\u5c04, \u6307\u6807\u4fe1\u606f, \u91c7\u96c6\u534f\u8bae\u914d\u7f6e\u4fe1\u606f"),"\u7b49\u3002  ")),(0,r.kt)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample_sql\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528JDBC\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6587\u4ef6\u540d\u79f0: example_sql.yml \u4f4d\u4e8e /define/app/example_sql.yml   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u6b64\u76d1\u63a7\u7c7b\u578b\u6240\u5c5e\u7c7b\u522b\uff1aservice-\u5e94\u7528\u670d\u52a1\u76d1\u63a7 db-\u6570\u636e\u5e93\u76d1\u63a7 custom-\u81ea\u5b9a\u4e49\u76d1\u63a7 os-\u64cd\u4f5c\u7cfb\u7edf\u76d1\u63a7\ncategory: db\n# \u76d1\u63a7\u5e94\u7528\u7c7b\u578b(\u4e0e\u6587\u4ef6\u540d\u4fdd\u6301\u4e00\u81f4) eg: linux windows tomcat mysql aws...\napp: example_sql\nname:\n  zh-CN: \u6a21\u62dfMYSQL\u5e94\u7528\u7c7b\u578b\n  en-US: MYSQL EXAMPLE APP\n# \u53c2\u6570\u6620\u5c04map. \u8fd9\u4e9b\u4e3a\u8f93\u5165\u53c2\u6570\u53d8\u91cf\uff0c\u5373\u53ef\u4ee5\u7528^_^host^_^\u7684\u5f62\u5f0f\u5199\u5230\u540e\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u7cfb\u7edf\u81ea\u52a8\u53d8\u91cf\u503c\u66ff\u6362\n# type\u662f\u53c2\u6570\u7c7b\u578b: 0-number\u6570\u5b57, 1-string\u660e\u6587\u5b57\u7b26\u4e32, 2-secret\u52a0\u5bc6\u5b57\u7b26\u4e32\n# \u5f3a\u5236\u56fa\u5b9a\u5fc5\u987b\u53c2\u6570 - host\nconfigmap:\n  - key: host\n    type: 1\n  - key: port\n    type: 0\n  - key: username\n    type: 1\n  - key: password\n    type: 2\n  - key: database\n    type: 1\n  - key: url\n    type: 1\n# \u6307\u6807\u7ec4\u5217\u8868\nmetrics:\n  - name: basic\n    # \u6307\u6807\u7ec4\u8c03\u5ea6\u4f18\u5148\u7ea7(0-127)\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8,\u4f18\u5148\u7ea7\u4f4e\u7684\u6307\u6807\u7ec4\u4f1a\u7b49\u4f18\u5148\u7ea7\u9ad8\u7684\u6307\u6807\u7ec4\u91c7\u96c6\u5b8c\u6210\u540e\u624d\u4f1a\u88ab\u8c03\u5ea6,\u76f8\u540c\u4f18\u5148\u7ea7\u7684\u6307\u6807\u7ec4\u4f1a\u5e76\u884c\u8c03\u5ea6\u91c7\u96c6\n    # \u4f18\u5148\u7ea7\u4e3a0\u7684\u6307\u6807\u7ec4\u4e3a\u53ef\u7528\u6027\u6307\u6807\u7ec4,\u5373\u5b83\u4f1a\u88ab\u9996\u5148\u8c03\u5ea6,\u91c7\u96c6\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u8c03\u5ea6\u5176\u5b83\u6307\u6807\u7ec4,\u91c7\u96c6\u5931\u8d25\u5219\u4e2d\u65ad\u8c03\u5ea6\n    priority: 0\n    # \u6307\u6807\u7ec4\u4e2d\u7684\u5177\u4f53\u76d1\u63a7\u6307\u6807\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   instance\u662f\u5426\u4e3a\u5b9e\u4f8b\u4e3b\u952e   unit:\u6307\u6807\u5355\u4f4d\n      - field: version\n        type: 1\n        instance: true\n      - field: port\n        type: 1\n      - field: datadir\n        type: 1\n      - field: max_connections\n        type: 0\n    # (\u975e\u5fc5\u987b)\u76d1\u63a7\u6307\u6807\u522b\u540d\uff0c\u4e0e\u4e0a\u9762\u7684\u6307\u6807\u540d\u6620\u5c04\u3002\u7528\u4e8e\u91c7\u96c6\u63a5\u53e3\u6570\u636e\u5b57\u6bb5\u4e0d\u76f4\u63a5\u662f\u6700\u7ec8\u6307\u6807\u540d\u79f0,\u9700\u8981\u6b64\u522b\u540d\u505a\u6620\u5c04\u8f6c\u6362\n    aliasFields:\n      - version\n      - version_compile_os\n      - version_compile_machine\n      - port\n      - datadir\n      - max_connections\n    # (\u975e\u5fc5\u987b)\u6307\u6807\u8ba1\u7b97\u8868\u8fbe\u5f0f,\u4e0e\u4e0a\u9762\u7684\u522b\u540d\u4e00\u8d77\u4f5c\u7528,\u8ba1\u7b97\u51fa\u6700\u7ec8\u9700\u8981\u7684\u6307\u6807\u503c\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - port=port\n      - datadir=datadir\n      - max_connections=max_connections\n      - version=version+\"_\"+version_compile_os+\"_\"+version_compile_machine\n    protocol: jdbc\n    jdbc:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL\u67e5\u8be2\u65b9\u5f0f\uff1a oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global variables where Variable_name like 'version%' or Variable_name = 'max_connections' or Variable_name = 'datadir' or Variable_name = 'port';\n      url: ^_^url^_^\n\n  - name: status\n    priority: 1\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   instance\u662f\u5426\u4e3a\u5b9e\u4f8b\u4e3b\u952e   unit:\u6307\u6807\u5355\u4f4d\n      - field: threads_created\n        type: 0\n      - field: threads_connected\n        type: 0\n      - field: threads_cached\n        type: 0\n      - field: threads_running\n        type: 0\n    # (\u975e\u5fc5\u987b)\u76d1\u63a7\u6307\u6807\u522b\u540d\uff0c\u4e0e\u4e0a\u9762\u7684\u6307\u6807\u540d\u6620\u5c04\u3002\u7528\u4e8e\u91c7\u96c6\u63a5\u53e3\u6570\u636e\u5b57\u6bb5\u4e0d\u76f4\u63a5\u662f\u6700\u7ec8\u6307\u6807\u540d\u79f0,\u9700\u8981\u6b64\u522b\u540d\u505a\u6620\u5c04\u8f6c\u6362\n    aliasFields:\n      - threads_created\n      - threads_connected\n      - threads_cached\n      - threads_running\n    # (\u975e\u5fc5\u987b)\u6307\u6807\u8ba1\u7b97\u8868\u8fbe\u5f0f,\u4e0e\u4e0a\u9762\u7684\u522b\u540d\u4e00\u8d77\u4f5c\u7528,\u8ba1\u7b97\u51fa\u6700\u7ec8\u9700\u8981\u7684\u6307\u6807\u503c\n    # eg: cores=core1+core2, usage=usage, waitTime=allTime-runningTime\n    calculates:\n      - threads_created=threads_created\n      - threads_connected=threads_connected\n      - threads_cached=threads_cached\n      - threads_running=threads_running\n    protocol: jdbc\n    jdbc:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL\u67e5\u8be2\u65b9\u5f0f\uff1a oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global status where Variable_name like 'thread%' or Variable_name = 'com_commit' or Variable_name = 'com_rollback' or Variable_name = 'questions' or Variable_name = 'uptime';\n      url: ^_^url^_^\n\n  - name: innodb\n    priority: 2\n    fields:\n      # \u6307\u6807\u4fe1\u606f \u5305\u62ec field\u540d\u79f0   type\u5b57\u6bb5\u7c7b\u578b:0-number\u6570\u5b57,1-string\u5b57\u7b26\u4e32   instance\u662f\u5426\u4e3a\u5b9e\u4f8b\u4e3b\u952e   unit:\u6307\u6807\u5355\u4f4d\n      - field: innodb_data_reads\n        type: 0\n        unit: \u6b21\u6570\n      - field: innodb_data_writes\n        type: 0\n        unit: \u6b21\u6570\n      - field: innodb_data_read\n        type: 0\n        unit: kb\n      - field: innodb_data_written\n        type: 0\n        unit: kb\n    protocol: jdbc\n    jdbc:\n      # \u4e3b\u673ahost: ipv4 ipv6 \u57df\u540d\n      host: ^_^host^_^\n      # \u7aef\u53e3\n      port: ^_^port^_^\n      platform: mysql\n      username: ^_^username^_^\n      password: ^_^password^_^\n      database: ^_^database^_^\n      # SQL\u67e5\u8be2\u65b9\u5f0f\uff1a oneRow, multiRow, columns\n      queryType: columns\n      # sql\n      sql: show global status where Variable_name like 'innodb%';\n      url: ^_^url^_^\n")),(0,r.kt)("h3",{id:"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6"},"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76d1\u63a7\u53c2\u6570\u5b9a\u4e49\u6587\u4ef6\u7528\u4e8e\u5b9a\u4e49 ",(0,r.kt)("em",{parentName:"p"},"\u9700\u8981\u7684\u8f93\u5165\u53c2\u6570\u5b57\u6bb5\u7ed3\u6784\u5b9a\u4e49(\u524d\u7aef\u9875\u9762\u6839\u636e\u7ed3\u6784\u6e32\u67d3\u8f93\u5165\u53c2\u6570\u6846)"),"\u3002")),(0,r.kt)("p",null,"\u6837\u4f8b\uff1a\u81ea\u5b9a\u4e49\u4e00\u4e2a\u540d\u79f0\u4e3aexample_sql\u7684\u81ea\u5b9a\u4e49\u76d1\u63a7\u7c7b\u578b\uff0c\u5176\u4f7f\u7528JDBC\u534f\u8bae\u91c7\u96c6\u6307\u6807\u6570\u636e\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u6587\u4ef6\u540d\u79f0: example_sql.yml \u4f4d\u4e8e /define/param/example_sql.yml   "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"app: example_sql\nparam:\n  - field: host\n    name: \u4e3b\u673aHost\n    type: host\n    required: true\n  - field: port\n    name: \u7aef\u53e3\n    type: number\n    range: '[0,65535]'\n    required: true\n    defaultValue: 80\n    placeholder: '\u8bf7\u8f93\u5165\u7aef\u53e3'\n  - field: database\n    name: \u6570\u636e\u5e93\u540d\u79f0\n    type: text\n    required: false\n  - field: username\n    name: \u7528\u6237\u540d\n    type: text\n    limit: 20\n    required: false\n  - field: password\n    name: \u5bc6\u7801\n    type: password\n    required: false\n  - field: url\n    name: URL\n    type: text\n    required: false\n")))}m.isMDXComponent=!0}}]);