"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4418],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=m(a),c=r,s=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(s,i(i({ref:e},k),{},{components:a})):n.createElement(s,i({ref:e},k))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70549:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"kafka",title:"Monitor\uff1aApache Kafka",sidebar_label:"Apache Kafka"},i=void 0,o={unversionedId:"help/kafka",id:"help/kafka",title:"Monitor\uff1aApache Kafka",description:"Collect and monitor the general performance Metrics of Apache Kafka.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/help/kafka.md",sourceDirName:"help",slug:"/help/kafka",permalink:"/en/docs/help/kafka",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/en/docusaurus-plugin-content-docs/current/help/kafka.md",tags:[],version:"current",frontMatter:{id:"kafka",title:"Monitor\uff1aApache Kafka",sidebar_label:"Apache Kafka"},sidebar:"docs",previous:{title:"Zookeeper monitoring",permalink:"/en/docs/help/zookeeper"},next:{title:"Apache Tomcat",permalink:"/en/docs/help/tomcat"}},p={},m=[{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1aserver_info",id:"metrics-setserver_info",level:4},{value:"Metrics Set\uff1amemory_pool",id:"metrics-setmemory_pool",level:4},{value:"Metrics Set\uff1aactive_controller_count",id:"metrics-setactive_controller_count",level:4},{value:"Metrics Set\uff1abroker_partition_count",id:"metrics-setbroker_partition_count",level:4},{value:"Metrics Set\uff1abroker_leader_count",id:"metrics-setbroker_leader_count",level:4},{value:"Metrics Set\uff1abroker_handler_avg_percent",id:"metrics-setbroker_handler_avg_percent",level:4},{value:"Kafka Enable JMX Protocol",id:"kafka-enable-jmx-protocol",level:3}],k={toc:m};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Apache Kafka.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Protocol Use\uff1aJMX")),(0,r.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Port provided by JMX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX connection user name, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX connection password, optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,r.kt)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,r.kt)("h4",{id:"metrics-setserver_info"},"Metrics Set\uff1aserver_info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Version"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka Version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"StartTimeMs"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Start Time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CommitId"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Version Commit ID")))),(0,r.kt)("h4",{id:"metrics-setmemory_pool"},"Metrics Set\uff1amemory_pool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"metrics name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"total size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"init size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"max size")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"used size")))),(0,r.kt)("h4",{id:"metrics-setactive_controller_count"},"Metrics Set\uff1aactive_controller_count"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"server active controller count")))),(0,r.kt)("h4",{id:"metrics-setbroker_partition_count"},"Metrics Set\uff1abroker_partition_count"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"broker partition count")))),(0,r.kt)("h4",{id:"metrics-setbroker_leader_count"},"Metrics Set\uff1abroker_leader_count"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"broker leader count")))),(0,r.kt)("h4",{id:"metrics-setbroker_handler_avg_percent"},"Metrics Set\uff1abroker_handler_avg_percent"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EventType"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"event type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RateUnit"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"rate unit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Count"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"percent count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OneMinuteRate"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"One Minute Rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FiveMinuteRate"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Five Minute Rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MeanRate"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Mean Rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FifteenMinuteRate"),(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Fifteen Minute Rate")))),(0,r.kt)("h3",{id:"kafka-enable-jmx-protocol"},"Kafka Enable JMX Protocol"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Kafka")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-server-start.sh")," "))),(0,r.kt)("p",null,"Append content in kafka-server-start.sh, Attention Replace Port And IP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export JMX_PORT=9999;\nexport KAFKA_JMX_OPTS="-Djava.rmi.server.hostname=ip\u5730\u5740 -Dcom.sun.management.jmxremote.rmi.port=9999 -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false";\n\n# Already Has \nexec $base_dir/kafka-run-class.sh $EXTRA_ARGS kafka.Kafka "$@"\n')))}d.isMDXComponent=!0}}]);