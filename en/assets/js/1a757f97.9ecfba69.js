"use strict";(self.webpackChunktancloud=self.webpackChunktancloud||[]).push([[6897],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(n),k=r,s=c["".concat(m,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(s,o(o({ref:e},p),{},{components:n})):a.createElement(s,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1575:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(4137)),o=["components"],i={id:"zookeeper",title:"Monitoring\uff1aZookeeper monitoring",sidebar_label:"Zookeeper monitoring"},m=void 0,d={unversionedId:"help/zookeeper",id:"help/zookeeper",title:"Monitoring\uff1aZookeeper monitoring",description:"Collect and monitor the general performance indicators of Zookeeper.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/zookeeper.md",sourceDirName:"help",slug:"/help/zookeeper",permalink:"/en/docs/help/zookeeper",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/zookeeper.md",tags:[],version:"current",frontMatter:{id:"zookeeper",title:"Monitoring\uff1aZookeeper monitoring",sidebar_label:"Zookeeper monitoring"},sidebar:"docs",previous:{title:"CentOS operating system",permalink:"/en/docs/help/centos"},next:{title:"Threshold alarm configuration",permalink:"/en/docs/help/alert_threshold"}},p=[{value:"Configuration parameter",id:"configuration-parameter",children:[],level:3},{value:"Collection indicator",id:"collection-indicator",children:[{value:"Indicator set\uff1aconf",id:"indicator-setconf",children:[],level:4},{value:"Indicator set\uff1astats",id:"indicator-setstats",children:[],level:4}],level:3},{value:"Zookeeper four word command",id:"zookeeper-four-word-command",children:[],level:2},{value:"netcat protocol",id:"netcat-protocol",children:[],level:2}],u={toc:p};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance indicators of Zookeeper.")),(0,l.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,l.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,l.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},"Port provided by Zookeeper. The default is 2181")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Query timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the timeout of Zookeeper connection, unit: ms, default: 3000ms")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Username"),(0,l.kt)("td",{parentName:"tr",align:null},"User name of the Linux connection where Zookeeper is located")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Password of the Linux connection where Zookeeper is located")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,l.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 10 seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,l.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,l.kt)("h3",{id:"collection-indicator"},"Collection indicator"),(0,l.kt)("h4",{id:"indicator-setconf"},"Indicator set\uff1aconf"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,l.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientPort"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Port")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Data snapshot file directory. By default, 100000 operations generate a snapshot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataDirSize"),(0,l.kt)("td",{parentName:"tr",align:null},"kb"),(0,l.kt)("td",{parentName:"tr",align:null},"Data snapshot file size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataLogDir"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction log file directory, production environment on a separate disk")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataLogSize"),(0,l.kt)("td",{parentName:"tr",align:null},"kb"),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction log file size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tickTime"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Time interval between servers or between clients and servers to maintain heartbeat")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minSessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum session timeout. Heartbeat timex2. The specified time is less than this time, which is used by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxSessionTimeout"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum session timeout. Heartbeat timex20. The specified time is greater than this time, which is used by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"serverId"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Server id")))),(0,l.kt)("h4",{id:"indicator-setstats"},"Indicator set\uff1astats"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Indicator name"),(0,l.kt)("th",{parentName:"tr",align:null},"Indicator unit"),(0,l.kt)("th",{parentName:"tr",align:null},"Indicator help description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_version"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Server version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_server_state"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Server role")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_num_alive_connections"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of connections")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_avg_latency"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Average latency")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_outstanding_requests"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of outstanding requests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_znode_count"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of znode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_packets_sent"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of packets sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_packets_received"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of packets received")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_watch_count"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of watch")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_max_file_descriptor_count"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of file descriptors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_approximate_data_size"),(0,l.kt)("td",{parentName:"tr",align:null},"kb"),(0,l.kt)("td",{parentName:"tr",align:null},"data size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_open_file_descriptor_count"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of open file descriptors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_max_latency"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Max latency")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_ephemerals_count"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of ephemeral nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"zk_min_latency"),(0,l.kt)("td",{parentName:"tr",align:null},"ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Min latency")))),(0,l.kt)("h1",{id:"note"},"Note"),(0,l.kt)("h2",{id:"zookeeper-four-word-command"},"Zookeeper four word command"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The current implementation scheme uses the four word command provided by zookeeper to collect indicators.\nUsers need to add the four word command of zookeeper to the white list by themselves.")),(0,l.kt)("p",null,"Steps"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"1.Find our zookeeper configuration file, which is usually zoo.cfg. "),(0,l.kt)("p",{parentName:"blockquote"},"2.Add the following commands to the configuration file   ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Add the required command to the white list\n4lw.commands.whitelist=stat, ruok, conf, isro\n\n# Add all commands to the white list\n4lw.commands.whitelist=*\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"3.Restart service   ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"zkServer.sh restart\n")),(0,l.kt)("h2",{id:"netcat-protocol"},"netcat protocol"),(0,l.kt)("p",null,"The current implementation scheme requires us to deploy the Linux server of zookeeper\nCommand environment for installing netcat"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"netcat installation steps   "),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yum install -y nc\n"))),(0,l.kt)("p",null,"If the terminal displays the following information, the installation is successful   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Complete!\n")))}c.isMDXComponent=!0}}]);