"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[896],{43:function(e,t,n){var r=n(1876).Buffer;Object.defineProperty(t,"__esModule",{value:!0});let a=n(8754),i=a._(n(1800)),o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365,r=new Date;r.setTime(r.getTime()+864e5*n);let a="expires="+r.toUTCString();document.cookie=e+"="+t+"; "+a+"; path=/; SameSite=None; Secure",localStorage.setItem(e,t)},l=e=>{for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].trim();if(0===r.indexOf(e+"="))return r.substring(e.length+1,r.length)}return null},s=()=>{console.log("proccessCookie",l("UserToken")),o("AccessToken",l("AccessToken")||localStorage.getItem("AccessToken")||""),o("UserToken",l("UserToken")||localStorage.getItem("UserToken")||"")},c=e=>{let{year:t,month:n}=e;var r={"by-date":e["by-date"]||"false","max-results":e["max-results"]||e.maxResults||10,"start-index":(e.start||e["start-index"]||0)+1,orderby:e.orderby||"updated",q:e.q||"",label:e.label||"","updated-min":e["updated-min"]||"","updated-max":e["updated-max"]||""};return t&&4==parseInt(t).toString().length&&(r["updated-min"]=(0,i.default)("".concat(t,"-").concat(n||"01")).startOf("month").startOf("day").format("YYYY-MM-DDTHH:mm:ssZ"),r["updated-max"]=(0,i.default)("".concat(t,"-").concat(n||"12")).endOf("month").endOf("day").format("YYYY-MM-DDTHH:mm:ssZ")),r},d=e=>{let t=new URLSearchParams,n=c(e),{label:r}=n;delete n.label,delete n.title,Object.keys(n).forEach(e=>{n[e]&&t.set(e,n[e])}),t.set("alt","json");var a="/feeds/posts/default?".concat(t.toString());return r&&(a="/feeds/posts/default/-/".concat(r.split("+").join("/"),"?").concat(t.toString())),a},u=e=>{let{id:t}=e;return"/feeds/posts/default/".concat(t,"?alt=json")},m=e=>{let t=document.createElement("div");t.innerHTML=e;let n=t.getElementsByClassName("hidden");return n.length?n[0].innerText:""},h=()=>"jsonp_callback_".concat(Math.round(1e5*Math.random())),f=e=>new Promise((t,n)=>{let r=h(),a=document.createElement("script");a.src="".concat("").concat(e,"&callback=").concat(r),window[r]=e=>{delete window[r],document.body.removeChild(a),t(e)},a.onerror=e=>{delete window[r],document.body.removeChild(a),t(null)},document.body.appendChild(a)}),x=(e,t)=>{if("media$thumbnail"in e)n=e.media$thumbnail.url.replace("s72-c",t?"s450":"s150");else{var n,r=e.content.$t,a=r.indexOf("<img"),i=r.indexOf('src="',a),o=r.indexOf('"',i+5),l=r.substr(i+5,o-i-5);n=-1!=a&&-1!=i&&-1!=o&&""!=l?l:"https://i.imgur.com/vT2qWM7.png"}var s=e.link.find(e=>"alternate"===e.rel),c=s?s.href:null;return{id:e.id.$t.match(/(post|page)-(\d+)/)[2],author:e.author[0].name.$t,category:(e.category||[]).map(e=>e.term),published:e.published.$t,title:e.title.$t,updated:e.updated.$t,content:e.content.$t,subtitle:m(e.content.$t),cover:n,url:c.replace("","")}},p=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var n,r;let a=await f(e);if(null==a?void 0:null===(n=a.feed)||void 0===n?void 0:n.entry)return null==a?void 0:null===(r=a.feed)||void 0===r?void 0:r.entry.map(e=>x(e,t));return[]}catch(e){throw e}},g=async e=>{try{let t=await f(e);if(null==t?void 0:t.entry)return x(t.entry);return null}catch(e){throw e}},v=e=>{if(!e||!e.content)return null;var t=e.content.match(/var sheet_id= "(.*?)";/);if(t)return JSON.parse(r.from(t[1],"base64").toString("utf8"));var n=/const CONFIG_ = (\{.*?\});/g;return(t=e.content.match(n))?JSON.parse(n.exec(t[0])[1]):null},y=()=>{let e=JSON.parse(sessionStorage.getItem("posts")||"{}");return e},b=["moz","ms","o","webkit"],j=e=>e?e+"Hidden":"hidden",w=()=>{for(let e=0;e<b.length;e++)if(j(b[e]) in document)return b[e];return null},Z=e=>{let{year:t,month:n,label:r}=e;return r||(n?"B\xe0i đăng trong Th\xe1ng ".concat(n," năm ").concat(t):"B\xe0i đăng trong năm ".concat(t))};e.exports={createUrlFeed:d,getPostByCategory:p,createUrlFeedPost:u,getPostDetail:g,parseExam:v,getPostLocal:y,proccessCookie:s,setCookie:o,getCookie:l,getHiddenPropertyName:j,getVisibilityEvent:e=>(e||"")+"visibilitychange",getBrowserPrefix:w,getTitleCategory:Z}},1800:function(e,t,n){n.r(t);var r=n(7484),a=n.n(r),i=n(9387),o=n.n(i);n(7553),a().extend(o()),t.default=a()},9609:function(e){let t=e=>{let t=Math.floor((new Date-new Date(e))/1e3);for(let[e,n]of Object.entries({năm:31536e3,tháng:2592e3,tuần:604800,ngày:86400,giờ:3600,phút:60})){let r=Math.floor(t/n);if(r>=1)return"".concat(r," ").concat(e," trước")}return"Vừa mới"},n=e=>"".concat(Math.floor(e/36e5).toString().padStart(2,"0"),":").concat(Math.floor(e%36e5/6e4).toString().padStart(2,"0"),":").concat(Math.floor(e%6e4/1e3).toString().padStart(2,"0"));e.exports={timeAgo:t,convertMilliseconds:n}},8147:function(e,t,n){var r=n(5893),a=n(1649),i=n(7225),o=n(4799),l=n(3972),s=n(7357),c=n(9878),d=n(1623);n(1664);var u=n(9609),m=n(1163);let h=e=>{let{post:t,size:n="default"}=e,h=(0,m.useRouter)(),f=(0,a.I0)(),x=e=>{e.stopPropagation(),e.preventDefault(),f((0,i.z)(t))},p=e=>{sessionStorage.setItem("posts",JSON.stringify(t)),h.push(t.url)};return(0,r.jsxs)(d.Z,{sx:{position:"relative",display:"flex",alignItems:"center",textDecoration:"none",borderTop:"1px solid rgba(47, 43, 61, 0.12)",paddingY:2},component:"div",title:t.title,onClick:p,children:[(0,r.jsx)(s.Z,{sx:{width:{sm:"full"==n?200:100,xs:125},height:{sm:"full"==n?125:70,xs:80},zIndex:1},children:(0,r.jsx)(s.Z,{sx:{backgroundImage:"url(".concat(t.cover,")"),display:"block",position:"relative",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",zIndex:1},className:"cover-post"})}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",flex:1,paddingLeft:3,justifyContent:"space-between",minHeight:{sm:"full"==n?"8rem":"5rem",xs:"5rem"}},children:[(0,r.jsx)(l.Z,{variant:"h2",className:"title-post",sx:{fontWeight:"full"==n?600:400,fontSize:{sm:"full"==n?"1.25rem":"0.875rem",xs:"0.875rem"},overflow:"hidden",textAlign:"justify"},children:t.title}),"full"==n?(0,r.jsx)(l.Z,{variant:"body2",className:"title-post",sx:{overflow:"hidden",textAlign:"justify",display:{sm:"none",xs:"none",md:"inherit"}},children:t.subtitle}):null,(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",pb:1,justifyContent:"space-between"},children:[(0,r.jsxs)(s.Z,{sx:{mr:2,display:"flex",alignItems:"center"},children:["full"==n?(0,r.jsxs)(s.Z,{sx:{display:{sm:"flex",xs:"none"},alignItems:"center",color:"primary.main",mr:1},children:[(0,r.jsx)(c.Z,{icon:"tabler:discount-check-filled",size:"small",fontSize:15}),(0,r.jsx)(l.Z,{variant:"body2",sx:{mx:1,fontWeight:600,color:"primary.main"},children:t.author}),(0,r.jsx)(c.Z,{icon:"tabler:point-filled",fontSize:10})]}):null,(0,r.jsx)(l.Z,{variant:"body2",sx:{color:"primary.main",fontWeight:600,fontSize:"0.75rem"},children:(0,u.timeAgo)(t.updated)})]}),(0,r.jsx)(o.Z,{size:"small",sx:{color:"primary.main"},title:"Chia sẻ b\xe0i viết",onClick:x,children:(0,r.jsx)(c.Z,{icon:"tabler:share",fontSize:15})})]})]})]})};t.Z=h},7896:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(5893),a=n(6867),i=n(3972),o=n(9878),l=n(8147),s=n(1664),c=n.n(s),d=n(9770),u=n(1163),m=n(43),h=n(7357),f=n(2054),x=n(7294);let p=()=>(0,r.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingY:2,borderTop:"1px solid rgba(47, 43, 61, 0.12)"},children:[(0,r.jsx)(f.Z,{variant:"rounded",animation:"wave",height:65,width:100}),(0,r.jsxs)(h.Z,{sx:{ml:2,position:"relative",display:"flex",flex:1,flexDirection:"column"},children:[(0,r.jsx)(f.Z,{animation:"wave",height:20,width:"100%"}),(0,r.jsx)(f.Z,{animation:"wave",height:20,width:"100%"}),(0,r.jsx)(f.Z,{animation:"wave",height:20,width:"100%"}),(0,r.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)(f.Z,{animation:"wave",height:15,width:"50%"}),(0,r.jsx)(f.Z,{variant:"circular",width:16,height:16})]})]})]});var g=x.memo(p);let v=e=>{let{title:t,url:n,label:s="",maxResults:h=10}=e,f=(0,u.useRouter)(),{data:x,isLoading:p}=(0,d.Z)(f.isReady?(0,m.createUrlFeed)({label:s,maxResults:h}):null,m.getPostByCategory,{revalidateOnFocus:!1,revalidateOnReconnect:!1});return(0,r.jsxs)("div",{children:[(0,r.jsx)(a.Z,{avatar:(0,r.jsx)(o.Z,{icon:"tabler:affiliate-filled",fontSize:20}),title:(0,r.jsx)(i.Z,{sx:{fontWeight:"bold"},variant:"h5",className:"post-title",noWrap:!0,children:t||s}),component:c(),href:n,sx:{textDecoration:"none",".MuiCardHeader-content":{width:"100%"},paddingX:0,paddingY:3,".MuiCardHeader-avatar":{mr:"0.5rem",color:"primary.main"}}}),(0,r.jsxs)("div",{style:{textAlign:"center"},children:[p?Array(h).fill(0).map((e,t)=>(0,r.jsx)(g,{},t)):null,p||(x||[]).length?null:(0,r.jsx)(i.Z,{variant:"body",sx:{color:"error.main"},children:"Chưa c\xf3 b\xe0i đăng n\xe0o"}),(x||[]).map(e=>(0,r.jsx)(l.Z,{post:e},e.id))]})]})};var y=v}}]);