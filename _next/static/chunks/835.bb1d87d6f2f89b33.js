"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{43:function(e,t,n){var r=n(1876).Buffer;Object.defineProperty(t,"__esModule",{value:!0});let l=n(8754),a=l._(n(1800)),i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:365,r=new Date;r.setTime(r.getTime()+864e5*n);let l="expires="+r.toUTCString();document.cookie=e+"="+t+"; "+l+"; path=/; SameSite=None; Secure",localStorage.setItem(e,t)},o=e=>{for(var t=document.cookie.split(";"),n=0;n<t.length;n++){var r=t[n].trim();if(0===r.indexOf(e+"="))return r.substring(e.length+1,r.length)}return null},s=()=>{console.log("proccessCookie",o("UserToken")),i("AccessToken",o("AccessToken")||localStorage.getItem("AccessToken")||""),i("UserToken",o("UserToken")||localStorage.getItem("UserToken")||"")},c=e=>{let{year:t,month:n}=e;var r={"by-date":e["by-date"]||"false","max-results":e["max-results"]||e.maxResults||10,"start-index":(e.start||e["start-index"]||0)+1,orderby:e.orderby||"updated",q:e.q||"",label:e.label||"","updated-min":e["updated-min"]||"","updated-max":e["updated-max"]||""};return t&&4==parseInt(t).toString().length&&(r["updated-min"]=(0,a.default)("".concat(t,"-").concat(n||"01")).startOf("month").startOf("day").format("YYYY-MM-DDTHH:mm:ssZ"),r["updated-max"]=(0,a.default)("".concat(t,"-").concat(n||"12")).endOf("month").endOf("day").format("YYYY-MM-DDTHH:mm:ssZ")),r},d=e=>{let t=new URLSearchParams,n=c(e),{label:r}=n;delete n.label,delete n.title,Object.keys(n).forEach(e=>{n[e]&&t.set(e,n[e])}),t.set("alt","json");var l="/feeds/posts/default?".concat(t.toString());return r&&(l="/feeds/posts/default/-/".concat(r.split("+").join("/"),"?").concat(t.toString())),l},u=e=>{let{id:t}=e;return"/feeds/posts/default/".concat(t,"?alt=json")},m=e=>{let t=document.createElement("div");t.innerHTML=e;let n=t.getElementsByClassName("hidden");return n.length?n[0].innerText:""},f=()=>"jsonp_callback_".concat(Math.round(1e5*Math.random())),p=e=>new Promise((t,n)=>{let r=f(),l=document.createElement("script");l.src="".concat("").concat(e,"&callback=").concat(r),window[r]=e=>{delete window[r],document.body.removeChild(l),t(e)},l.onerror=e=>{delete window[r],document.body.removeChild(l),t(null)},document.body.appendChild(l)}),h=(e,t)=>{if("media$thumbnail"in e)n=e.media$thumbnail.url.replace("s72-c",t?"s450":"s150");else{var n,r=e.content.$t,l=r.indexOf("<img"),a=r.indexOf('src="',l),i=r.indexOf('"',a+5),o=r.substr(a+5,i-a-5);n=-1!=l&&-1!=a&&-1!=i&&""!=o?o:"https://i.imgur.com/vT2qWM7.png"}var s=e.link.find(e=>"alternate"===e.rel),c=s?s.href:null;return{id:e.id.$t.match(/(post|page)-(\d+)/)[2],author:e.author[0].name.$t,category:(e.category||[]).map(e=>e.term),published:e.published.$t,title:e.title.$t,updated:e.updated.$t,content:e.content.$t,subtitle:m(e.content.$t),cover:n,url:c.replace("","")}},x=async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var n,r;let l=await p(e);if(null==l?void 0:null===(n=l.feed)||void 0===n?void 0:n.entry)return null==l?void 0:null===(r=l.feed)||void 0===r?void 0:r.entry.map(e=>h(e,t));return[]}catch(e){throw e}},g=async e=>{try{let t=await p(e);if(null==t?void 0:t.entry)return h(t.entry);return null}catch(e){throw e}},y=e=>{if(!e||!e.content)return null;var t=e.content.match(/var sheet_id= "(.*?)";/);if(t)return JSON.parse(r.from(t[1],"base64").toString("utf8"));var n=/const CONFIG_ = (\{.*?\});/g;return(t=e.content.match(n))?JSON.parse(n.exec(t[0])[1]):null},v=()=>{let e=JSON.parse(sessionStorage.getItem("posts")||"{}");return e},b=["moz","ms","o","webkit"],j=e=>e?e+"Hidden":"hidden",S=()=>{for(let e=0;e<b.length;e++)if(j(b[e]) in document)return b[e];return null},k=e=>{let{year:t,month:n,label:r}=e;return r||(n?"B\xe0i đăng trong Th\xe1ng ".concat(n," năm ").concat(t):"B\xe0i đăng trong năm ".concat(t))};e.exports={createUrlFeed:d,getPostByCategory:x,createUrlFeedPost:u,getPostDetail:g,parseExam:y,getPostLocal:v,proccessCookie:s,setCookie:i,getCookie:o,getHiddenPropertyName:j,getVisibilityEvent:e=>(e||"")+"visibilitychange",getBrowserPrefix:S,getTitleCategory:k}},1800:function(e,t,n){n.r(t);var r=n(7484),l=n.n(r),a=n(9387),i=n.n(a);n(7553),l().extend(i()),t.default=l()},9609:function(e){let t=e=>{let t=Math.floor((new Date-new Date(e))/1e3);for(let[e,n]of Object.entries({năm:31536e3,tháng:2592e3,tuần:604800,ngày:86400,giờ:3600,phút:60})){let r=Math.floor(t/n);if(r>=1)return"".concat(r," ").concat(e," trước")}return"Vừa mới"},n=e=>"".concat(Math.floor(e/36e5).toString().padStart(2,"0"),":").concat(Math.floor(e%36e5/6e4).toString().padStart(2,"0"),":").concat(Math.floor(e%6e4/1e3).toString().padStart(2,"0"));e.exports={timeAgo:t,convertMilliseconds:n}},9835:function(e,t,n){n.r(t);var r=n(5893),l=n(1163),a=n(9770),i=n(43),o=n(8147),s=n(9008),c=n.n(s),d=n(7294);let u=()=>{let e=(0,l.useRouter)();(0,d.useEffect)(()=>{if(e.isReady){let{year:t,month:n,label:r}=e.query;if(!r&&(n&&isNaN(n)&&isNaN(parseInt(n))||t&&isNaN(t)&&isNaN(parseInt(t))))return e.push("/")}},[]);let{data:t,isLoading:n}=(0,a.Z)(e.isReady?(0,i.createUrlFeed)(e.query):null,i.getPostByCategory);return n||!e.isReady?(0,r.jsx)("div",{children:"Đang tải"}):(0,r.jsxs)("div",{className:"content-block col-items colLeft-items",children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:(0,i.getTitleCategory)(null==e?void 0:e.query)})}),(t||[]).map(e=>(0,r.jsx)(o.Z,{post:e,size:"full"},e.id))]})};t.default=u},8147:function(e,t,n){var r=n(5893),l=n(1649),a=n(7225),i=n(4799),o=n(3972),s=n(7357),c=n(9878),d=n(1623);n(1664);var u=n(9609),m=n(1163);let f=e=>{let{post:t,size:n="default"}=e,f=(0,m.useRouter)(),p=(0,l.I0)(),h=e=>{e.stopPropagation(),e.preventDefault(),p((0,a.z)(t))},x=e=>{sessionStorage.setItem("posts",JSON.stringify(t)),f.push(t.url)};return(0,r.jsxs)(d.Z,{sx:{position:"relative",display:"flex",alignItems:"center",textDecoration:"none",borderTop:"1px solid rgba(47, 43, 61, 0.12)",paddingY:2},component:"div",title:t.title,onClick:x,children:[(0,r.jsx)(s.Z,{sx:{width:{sm:"full"==n?200:100,xs:125},height:{sm:"full"==n?125:70,xs:80},zIndex:1},children:(0,r.jsx)(s.Z,{sx:{backgroundImage:"url(".concat(t.cover,")"),display:"block",position:"relative",width:"100%",height:"100%",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",zIndex:1},className:"cover-post"})}),(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",flex:1,paddingLeft:3,justifyContent:"space-between",minHeight:{sm:"full"==n?"8rem":"5rem",xs:"5rem"}},children:[(0,r.jsx)(o.Z,{variant:"h2",className:"title-post",sx:{fontWeight:"full"==n?600:400,fontSize:{sm:"full"==n?"1.25rem":"0.875rem",xs:"0.875rem"},overflow:"hidden",textAlign:"justify"},children:t.title}),"full"==n?(0,r.jsx)(o.Z,{variant:"body2",className:"title-post",sx:{overflow:"hidden",textAlign:"justify",display:{sm:"none",xs:"none",md:"inherit"}},children:t.subtitle}):null,(0,r.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",pb:1,justifyContent:"space-between"},children:[(0,r.jsxs)(s.Z,{sx:{mr:2,display:"flex",alignItems:"center"},children:["full"==n?(0,r.jsxs)(s.Z,{sx:{display:{sm:"flex",xs:"none"},alignItems:"center",color:"primary.main",mr:1},children:[(0,r.jsx)(c.Z,{icon:"tabler:discount-check-filled",size:"small",fontSize:15}),(0,r.jsx)(o.Z,{variant:"body2",sx:{mx:1,fontWeight:600,color:"primary.main"},children:t.author}),(0,r.jsx)(c.Z,{icon:"tabler:point-filled",fontSize:10})]}):null,(0,r.jsx)(o.Z,{variant:"body2",sx:{color:"primary.main",fontWeight:600,fontSize:"0.75rem"},children:(0,u.timeAgo)(t.updated)})]}),(0,r.jsx)(i.Z,{size:"small",sx:{color:"primary.main"},title:"Chia sẻ b\xe0i viết",onClick:h,children:(0,r.jsx)(c.Z,{icon:"tabler:share",fontSize:15})})]})]})]})};t.Z=f}}]);