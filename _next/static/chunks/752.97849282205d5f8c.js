"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{6867:function(e,t,a){var r=a(3366),n=a(7462),i=a(7294),o=a(6010),s=a(4780),l=a(3972),d=a(1657),u=a(948),h=a(968),c=a(5893);let p=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h.J,t)},m=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,n.Z)({[`& .${h.Z.title}`]:t.title,[`& .${h.Z.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),Z=i.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiCardHeader"}),{action:i,avatar:s,className:u,component:h="div",disableTypography:Z=!1,subheader:w,subheaderTypographyProps:y,title:x,titleTypographyProps:C}=a,k=(0,r.Z)(a,p),R=(0,n.Z)({},a,{component:h,disableTypography:Z}),M=v(R),S=x;null==S||S.type===l.Z||Z||(S=(0,c.jsx)(l.Z,(0,n.Z)({variant:s?"body2":"h5",className:M.title,component:"span",display:"block"},C,{children:S})));let N=w;return null==N||N.type===l.Z||Z||(N=(0,c.jsx)(l.Z,(0,n.Z)({variant:s?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:N}))),(0,c.jsxs)(m,(0,n.Z)({className:(0,o.Z)(M.root,u),as:h,ref:t,ownerState:R},k,{children:[s&&(0,c.jsx)(f,{className:M.avatar,ownerState:R,children:s}),(0,c.jsxs)(b,{className:M.content,ownerState:R,children:[S,N]}),i&&(0,c.jsx)(g,{className:M.action,ownerState:R,children:i})]}))});t.Z=Z},968:function(e,t,a){a.d(t,{J:function(){return i}});var r=a(1588),n=a(4867);function i(e){return(0,n.Z)("MuiCardHeader",e)}let o=(0,r.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);t.Z=o},2054:function(e,t,a){var r=a(3366),n=a(7462),i=a(7294),o=a(6010),s=a(917),l=a(4780),d=a(8606),u=a(1796),h=a(948),c=a(1657),p=a(3472),v=a(5893);let m=["animation","className","component","height","style","variant","width"],f=e=>e,g,b,Z,w,y=e=>{let{classes:t,variant:a,animation:r,hasChildren:n,width:i,height:o}=e;return(0,l.Z)({root:["root",a,r,n&&"withChildren",n&&!i&&"fitContent",n&&!o&&"heightAuto"]},p.B,t)},x=(0,s.F4)(g||(g=f`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),C=(0,s.F4)(b||(b=f`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),k=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],!1!==a.animation&&t[a.animation],a.hasChildren&&t.withChildren,a.hasChildren&&!a.width&&t.fitContent,a.hasChildren&&!a.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let a=(0,d.Wy)(e.shape.borderRadius)||"px",r=(0,d.YL)(e.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,u.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${a}/${Math.round(r/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(Z||(Z=f`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),x),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(w||(w=f`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),C,(t.vars||t).palette.action.hover)),R=i.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:s,component:l="span",height:d,style:u,variant:h="text",width:p}=a,f=(0,r.Z)(a,m),g=(0,n.Z)({},a,{animation:i,component:l,variant:h,hasChildren:!!f.children}),b=y(g);return(0,v.jsx)(k,(0,n.Z)({as:l,ref:t,className:(0,o.Z)(b.root,s),ownerState:g},f,{style:(0,n.Z)({width:p,height:d},u)}))});t.Z=R},3472:function(e,t,a){a.d(t,{B:function(){return i}});var r=a(1588),n=a(4867);function i(e){return(0,n.Z)("MuiSkeleton",e)}let o=(0,r.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);t.Z=o},8401:function(e,t,a){a.r(t);var r=a(5893),n=a(8263),i=a(7896),o=a(7294);let s=()=>{let[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{var e,a;(null==window?void 0:null===(e=window.BLOGGER)||void 0===e?void 0:e.HOMEPAGE)&&t(null==window?void 0:null===(a=window.BLOGGER)||void 0===a?void 0:a.HOMEPAGE)},[]),null==e?void 0:e.map((e,t)=>(0,r.jsx)(n.ZP,{container:!0,spacing:6,component:"section",children:null==e?void 0:e.map((e,t)=>(0,r.jsx)(n.ZP,{item:!0,md:3,sm:6,xs:12,children:(0,r.jsx)(i.Z,{...e})},t))},t))};t.default=s}}]);