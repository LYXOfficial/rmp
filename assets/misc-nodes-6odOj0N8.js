import{aq as L,C as w,f as j,ar as C,e as B,c as H,o as O}from"./index-GNs-_pGM.js";import{j as t}from"./chakra-IQx0hwqQ.js";import{b as l}from"./react-5OqMKJZU.js";import{L as J,M as K,f as Q}from"./stations-w6iu8c6d.js";const Y=n=>{const{id:e,x:o,y:d,handlePointerDown:i,handlePointerMove:m,handlePointerUp:s}=n,u=l.useCallback(r=>i(e,r),[e,i]),a=l.useCallback(r=>m(e,r),[e,m]),c=l.useCallback(r=>s(e,r),[e,s]);return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")rotate(45)"),children:[t.jsx("line",{x1:"-5",y1:"0",x2:"5",y2:"0",stroke:"black"}),t.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"black"}),t.jsx("circle",{id:"virtual_circle_".concat(e),r:5,stroke:"black",fill:"white",fillOpacity:"0",onPointerDown:u,onPointerMove:a,onPointerUp:c,style:{cursor:"move"}})]}),[e,o,d,u,a,c])},_={},ee=()=>t.jsx(L,{fields:[]}),ne=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,transform:"rotate(45)",focusable:!1,children:[t.jsx("circle",{cx:"12",cy:"12",r:"6",stroke:"currentColor",fill:"none"}),t.jsx("line",{x1:"6",y1:"12",x2:"18",y2:"12",stroke:"currentColor"}),t.jsx("line",{x1:"12",y1:"6",x2:"12",y2:"18",stroke:"currentColor"})]}),te={component:Y,icon:ne,defaultAttrs:_,attrsComponent:ee,metadata:{displayName:"panel.details.nodes.virtual.displayName",tags:[]}},oe=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=M.num,color:c=M.color}=i!=null?i:M,[r,x]=a>=10?[22.67,10.75]:[21,10],g=l.useCallback(p=>m(e,p),[e,m]),f=l.useCallback(p=>s(e,p),[e,s]),h=l.useCallback(p=>u(e,p),[e,u]);return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],width:r,height:"22.67"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x,y:"19",fill:c[3],fontSize:"21.33",letterSpacing:"-1.75",children:a}),t.jsx("text",{className:"rmp-name__zh",x:r+2,y:"12",fontSize:"14.67",children:"号线"}),t.jsxs("text",{className:"rmp-name__en",x:r+4,y:"21.5",fontSize:"8",children:["Line ",a]}),t.jsx("rect",{fill:"white",fillOpacity:"0",width:r,height:"22.67",onPointerDown:g,onPointerMove:f,onPointerUp:h,style:{cursor:"move"}})]}),[e,o,d,a,...c,g,f,h])},M={num:1,color:[w.Shanghai,"sh1","#E4002B",j.white]},ie=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:M).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:M;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.ShmetroNumLineBadge,defaultTheme:M.color})}],le=()=>t.jsx(L,{fields:ie}),ae=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"10",height:"16"}),t.jsx("text",{x:"4",y:"18",fill:"white",children:"1"}),t.jsx("text",{x:"14",y:"10",fontSize:"5",children:"号线"}),t.jsx("text",{x:"14",y:"18",fontSize:"4",children:"Line 1"})]}),se={component:oe,icon:ae,defaultAttrs:M,attrsComponent:le,metadata:{displayName:"panel.details.nodes.shmetroNumLineBadge.displayName",tags:[]}},ce=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{names:a=v.names,color:c=v.color}=i!=null?i:v,r=l.useRef(null),[x,g]=l.useState({width:12});l.useEffect(()=>g(r.current.getBBox()),[...a,g,r]);const f=l.useCallback(y=>m(e,y),[e,m]),h=l.useCallback(y=>s(e,y),[e,s]),p=l.useCallback(y=>u(e,y),[e,u]);return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:x.width+7,height:"21"}),t.jsxs("g",{ref:r,children:[t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"hanging",x:(x.width+7)/2,y:"4",fontSize:"10",fill:c[3],letterSpacing:"-0.25",children:a[0]}),t.jsx("text",{className:"rmp-name__en",textAnchor:"middle",dominantBaseline:"hanging",x:(x.width+7)/2,y:"13",fontSize:"5",fill:c[3],letterSpacing:"-0.25",children:a[1]})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:x.width+7,height:"21",onPointerDown:f,onPointerMove:h,onPointerUp:p,style:{cursor:"move"}})]}),[e,o,d,...a,x,...c,f,h,p])},v={names:["浦江线","Pujiang Line"],color:[w.Shanghai,"pjl","#B5B5B6",j.white]},re=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:v).names[0],onChange:(n,e)=>{const o=e!=null?e:v;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:v).names[1],onChange:(n,e)=>{const o=e!=null?e:v;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.ShmetroTextLineBadge,defaultTheme:v.color})}],de=()=>t.jsx(L,{fields:re}),me=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12"}),t.jsx("text",{x:"5",y:"11",fontSize:"5",fill:"white",children:"浦江线"}),t.jsx("text",{x:"3",y:"16",fontSize:"4",fill:"white",children:"Pujiang Line"})]}),he={component:ce,icon:me,defaultAttrs:v,attrsComponent:de,metadata:{displayName:"panel.details.nodes.shmetroTextLineBadge.displayName",tags:[]}},ue=n=>{var h,p;const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{names:a=R.names,color:c=R.color,tram:r=R.tram}=i!=null?i:R,x=l.useCallback(y=>m(e,y),[e,m]),g=l.useCallback(y=>s(e,y),[e,s]),f=l.useCallback(y=>u(e,y),[e,u]);return t.jsx("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")scale(").concat(r?.5:1,")"),onPointerDown:x,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:t.jsx(J,{zhName:(h=a.at(0))!=null?h:"",enName:(p=a.at(1))!=null?p:"",foregroundColour:c[3],backgroundColour:c[2],spanDigits:!0})})},R={names:["1号线","Line 1"],color:[w.Guangzhou,"gz1","#F3D03E",j.black],tram:!1},xe=n=>{const{id:e,attrs:o,handleAttrsUpdate:d}=n,{t:i}=H(),m=[{type:"input",label:i("panel.details.nodes.common.nameZh"),value:o.names[0],onChange:s=>{o.names[0]=s,d(e,o)},minW:"full"},{type:"input",label:i("panel.details.nodes.common.nameEn"),value:o.names[1],onChange:s=>{o.names[1]=s,d(e,o)},minW:"full"},{type:"switch",label:i("panel.details.nodes.gzmtrLineBadge.tram"),oneLine:!0,isChecked:o.tram,onChange:s=>{o.tram=s,d(e,o)},minW:"full"},{type:"custom",label:i("color"),component:t.jsx(C,{type:B.GzmtrLineBadge,defaultTheme:R.color})}];return t.jsx(O,{fields:m})},ge=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"5",width:"20",height:"14",rx:"1"}),t.jsx("text",{x:"6",y:"15",textAnchor:"middle",fontSize:"10",fill:"white",children:"1"}),t.jsx("text",{x:"15",y:"12",textAnchor:"middle",fontSize:"6",fill:"white",children:"号线"}),t.jsx("text",{x:"14.5",y:"17",textAnchor:"middle",fontSize:"4",fill:"white",children:"Line 1"})]}),pe={component:ue,icon:ge,defaultAttrs:R,attrsComponent:xe,metadata:{displayName:"panel.details.nodes.gzmtrLineBadge.displayName",tags:[]}},E=11.84375,fe=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=k.num,color:c=k.color}=i!=null?i:k,r=l.useCallback(h=>m(e,h),[e,m]),x=l.useCallback(h=>s(e,h),[e,s]),g=l.useCallback(h=>u(e,h),[e,u]),f=c[3]===j.black?"#003670":j.white;return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:E+21,height:"16",rx:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:E/2+2,y:"13.5",fill:f,fontSize:"15",letterSpacing:"-1.5",children:a}),t.jsx("text",{className:"rmp-name__zh",x:E+(a>9?5.5:3),y:"8.5",fontSize:"7",fill:f,children:"号线"}),t.jsxs("text",{className:"rmp-name__en",x:E+(a>9?6:4.5),y:"13.5",fontSize:"4",fill:f,children:["Line ",a]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:E+23,height:"16",rx:"2",onPointerDown:r,onPointerMove:x,onPointerUp:g,style:{cursor:"move"}})]}),[e,o,d,a,...c,r,x,g])},k={num:1,color:[w.Beijing,"bj1","#c23a30",j.white]},be=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:k).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:k;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.BjsubwayNumLineBadge,defaultTheme:k.color})}],ye=()=>t.jsx(L,{fields:be}),Be=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),t.jsx("text",{x:"11",y:"11",fill:"white",fontSize:"5",children:"号线"}),t.jsx("text",{x:"11",y:"17",fill:"white",fontSize:"4",children:"Line 1"})]}),je={component:fe,icon:Be,defaultAttrs:k,attrsComponent:ye,metadata:{displayName:"panel.details.nodes.bjsubwayNumLineBadge.displayName",tags:[]}},Ne=28.84375,we=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{names:a=P.names,color:c=P.color}=i!=null?i:P,r=l.useRef(null),[x,g]=l.useState({width:12});l.useEffect(()=>g(r.current.getBBox()),[...a,g,r]);const f=l.useCallback(S=>m(e,S),[e,m]),h=l.useCallback(S=>s(e,S),[e,s]),p=l.useCallback(S=>u(e,S),[e,u]),y=Math.max(Ne,x.width),N=c[3]===j.black?"#003670":j.white;return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:y+4,height:"16",rx:"2"}),t.jsxs("g",{ref:r,children:[t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:(y+4)/2,y:"8",fontSize:"7",fill:N,children:a[0]}),t.jsx("text",{className:"rmp-name__en",textAnchor:"middle",x:(y+4)/2,y:"13.5",fontSize:"4",fill:N,children:a[1]})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:y+3,height:"16",rx:"2",onPointerDown:f,onPointerMove:h,onPointerUp:p,style:{cursor:"move"}})]}),[e,o,d,...a,x,...c,f,h,p])},P={names:["八通线","Batong Line"],color:[w.Beijing,"bj1","#c23a30",j.white]},Ce=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:P).names[0],onChange:(n,e)=>{const o=e!=null?e:P;return o.names[0]=n.toString(),o}},{type:"input",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:P).names[1],onChange:(n,e)=>{const o=e!=null?e:P;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.BjsubwayTextLineBadge,defaultTheme:P.color})}],Se=()=>t.jsx(L,{fields:Ce}),Le=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"6",width:"20",height:"12",rx:"2"}),t.jsx("text",{x:"3",y:"12",fontSize:"6",fill:"white",children:"八通线"}),t.jsx("text",{x:"3",y:"16",fontSize:"3.2",fill:"white",children:"Batong Line"})]}),ze={component:we,icon:Le,defaultAttrs:P,attrsComponent:Se,metadata:{displayName:"panel.details.nodes.bjsubwayTextLineBadge.displayName",tags:[]}},ve=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=z.num,branch:c=z.branch,color:r=z.color}=i!=null?i:z,x=l.useCallback(h=>m(e,h),[e,m]),g=l.useCallback(h=>s(e,h),[e,s]),f=l.useCallback(h=>u(e,h),[e,u]);return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:r[2],width:"20",height:"20",rx:"2",ry:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",dominantBaseline:"middle",x:"10",y:"11.4",fill:r[3],fontSize:"15",letterSpacing:"-1",children:a}),c&&t.jsxs(t.Fragment,{children:[t.jsx("text",{className:"rmp-name__zh",x:20+2.5,y:"10",fontSize:"10",children:"支线"}),t.jsx("text",{className:"rmp-name__en",x:20+2.5,y:"18",fontSize:"5",fill:"gray",children:"Branch line"})]}),t.jsx("rect",{fill:"white",fillOpacity:"0",width:"20",height:"20",rx:"2",ry:"2",onPointerDown:x,onPointerMove:g,onPointerUp:f,style:{cursor:"move"}})]}),[e,o,d,a,c,...r,x,g,f])},z={num:1,branch:!1,color:[w.Suzhou,"sz1","#78BA25",j.white]},Pe=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:z).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:z;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"switch",label:"panel.details.nodes.suzhouRTNumLineBadge.branch",isChecked:n=>{var e;return(e=n==null?void 0:n.branch)!=null?e:z.branch},onChange:(n,e)=>{const o=e!=null?e:z;return o.branch=n,o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.SuzhouRTNumLineBadge,defaultTheme:z.color})}],Te=()=>t.jsx(L,{fields:Pe}),Ae=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"4",y:"4",width:"16",height:"16",rx:"3",ry:"3"}),t.jsx("text",{x:"12",y:"13.4",textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"14",children:"1"})]}),Me={component:ve,icon:Ae,defaultAttrs:z,attrsComponent:Te,metadata:{displayName:"panel.details.nodes.suzhouRTNumLineBadge.displayName",tags:[]}},ke=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{content:a=b.content,fontSize:c=b.fontSize,lineHeight:r=b.lineHeight,textAnchor:x=b.textAnchor,dominantBaseline:g=b.dominantBaseline,language:f=b.language,color:h=b.color,rotate:p=b.rotate,italic:y=b.italic,bold:N=b.bold}=i!=null?i:b,S=l.useRef(null),[A,X]=l.useState({x:0,y:0,width:32,height:16});l.useEffect(()=>X(S.current.getBBox()),[a,x,g,X,S]);const G=l.useCallback(q=>m(e,q),[e,m]),Z=l.useCallback(q=>s(e,q),[e,s]),V=l.useCallback(q=>u(e,q),[e,u]);return l.useMemo(()=>t.jsx("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")rotate(").concat(p,")"),onPointerDown:G,onPointerMove:Z,onPointerUp:V,style:{cursor:"move"},children:t.jsx(K,{ref:S,text:a.split("\n"),lineHeight:r,grow:"down",className:"rmp-name__".concat(f),fontSize:c,textAnchor:x,dominantBaseline:g,fill:h[2],fontStyle:y,fontWeight:N})}),[e,o,d,a,c,r,x,g,f,h,p,y,N,A,G,Z,V])},b={content:"Enter your text here",fontSize:16,lineHeight:16,textAnchor:"middle",dominantBaseline:"middle",language:"en",color:[w.Shanghai,"jsr","#000000",j.white],rotate:0,italic:"normal",bold:"normal"},De=[{type:"textarea",label:"panel.details.nodes.text.content",value:n=>(n!=null?n:b).content,onChange:(n,e)=>{const o=e!=null?e:b;return o.content=n.toString(),o}},{type:"input",label:"panel.details.nodes.text.fontSize",value:n=>(n!=null?n:b).fontSize,validator:n=>Number.isInteger(n)&&Number(n)>0,onChange:(n,e)=>{const o=e!=null?e:b;return o.fontSize=Number(n),o}},{type:"input",label:"panel.details.nodes.text.lineHeight",value:n=>(n!=null?n:b).lineHeight,validator:n=>Number.isInteger(n)&&Number(n)>0,onChange:(n,e)=>{const o=e!=null?e:b;return o.lineHeight=Number(n),o}},{type:"select",label:"panel.details.nodes.text.textAnchor",value:n=>(n!=null?n:b).textAnchor,options:{start:"start",middle:"middle",end:"end"},onChange:(n,e)=>{const o=e!=null?e:b;return o.textAnchor=n,o}},{type:"select",label:"panel.details.nodes.text.dominantBaseline",value:n=>(n!=null?n:b).dominantBaseline,options:{auto:"auto",middle:"middle",hanging:"hanging"},onChange:(n,e)=>{const o=e!=null?e:b;return o.dominantBaseline=n,o}},{type:"select",label:"panel.details.nodes.text.language",value:n=>(n!=null?n:b).language,options:{zh:"Chinese",en:"English",mtr__zh:"MTR Chinese",mtr__en:"MTR English"},onChange:(n,e)=>{const o=e!=null?e:b;return o.language=n.toString(),o}},{type:"select",label:"panel.details.nodes.text.rotate",value:n=>{var e;return(e=n==null?void 0:n.rotate)!=null?e:b.rotate},options:{0:"0",45:"45",90:"90",135:"135",180:"180",225:"225",270:"270",315:"315"},onChange:(n,e)=>{const o=e!=null?e:b;return o.rotate=Number(n),o}},{type:"switch",label:"panel.details.nodes.text.italic",isChecked:n=>{var e;return((e=n==null?void 0:n.italic)!=null?e:b.italic)==="italic"},onChange:(n,e)=>{const o=e!=null?e:b;return o.italic=n?"italic":"normal",o}},{type:"switch",label:"panel.details.nodes.text.bold",isChecked:n=>{var e;return((e=n==null?void 0:n.bold)!=null?e:b.bold)==="bold"},onChange:(n,e)=>{const o=e!=null?e:b;return o.bold=n?"bold":"normal",o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.Text,defaultTheme:b.color})}],Ue=()=>t.jsx(L,{fields:De}),$e=t.jsx("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:t.jsx("text",{x:"12",y:"12",textAnchor:"middle",dominantBaseline:"middle",fontSize:"10",children:"Text"})}),Re={component:ke,icon:$e,defaultAttrs:b,attrsComponent:Ue,metadata:{displayName:"panel.details.nodes.text.displayName",tags:[]}},Ie=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=D.num,color:c=D.color}=i!=null?i:D,r=l.useCallback(h=>m(e,h),[e,m]),x=l.useCallback(h=>s(e,h),[e,s]),g=l.useCallback(h=>u(e,h),[e,u]),f=c[3];return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:"25",height:"15"}),t.jsxs("text",{className:"rmp-name__berlin",textAnchor:"middle",x:"12.5",y:"12.5",fill:f,fontSize:"14",letterSpacing:"1",children:["U",a]}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"25",height:"15",onPointerDown:r,onPointerMove:x,onPointerUp:g,style:{cursor:"move"}})]}),[e,o,d,a,...c,r,x,g])},D={num:1,color:[w.Berlin,"bu1","#62AD2D",j.white]},qe=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:D).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:D;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.BerlinUBahnLineBadge,defaultTheme:D.color})}],Ee=()=>t.jsx(L,{fields:qe}),Fe=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"U1"})]}),We={component:Ie,icon:Fe,defaultAttrs:D,attrsComponent:Ee,metadata:{displayName:"panel.details.nodes.berlinUBahnLineBadge.displayName",tags:[]}},He=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=U.num,color:c=U.color}=i!=null?i:U,[r,x]=a>=10?[6,19.75]:[10,20],g=l.useCallback(y=>m(e,y),[e,m]),f=l.useCallback(y=>s(e,y),[e,s]),h=l.useCallback(y=>u(e,y),[e,u]),p=c[3];return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:"30",height:"15",rx:"8"}),t.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x:r,y:"12.5",fill:p,fontSize:"14",letterSpacing:"0",children:"S"}),t.jsx("text",{className:"rmp-name__berlin",textAnchor:"middle",x,y:"12.5",fill:p,fontSize:"14",letterSpacing:"-0.2",children:a}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"30",height:"15",onPointerDown:g,onPointerMove:f,onPointerUp:h,style:{cursor:"move"}})]}),[e,o,d,a,...c,g,f,h])},U={num:1,color:[w.Berlin,"bs1","#DD6CA6",j.white]},Oe=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:U).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:U;return Number.isNaN(n)||(o.num=Number(n)),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.BerlinSBahnLineBadge,defaultTheme:U.color})}],Xe=()=>t.jsx(L,{fields:Oe}),Ge=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"8"}),t.jsx("text",{x:"4.5",y:"16.5",fill:"white",fontSize:"14",children:"S1"})]}),Ze={component:He,icon:Ge,defaultAttrs:U,attrsComponent:Xe,metadata:{displayName:"panel.details.nodes.berlinSBahnLineBadge.displayName",tags:[]}},Ve=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=$.num,color:c=$.color}=i!=null?i:$,r=l.useCallback(N=>m(e,N),[e,m]),x=l.useCallback(N=>s(e,N),[e,s]),g=l.useCallback(N=>u(e,N),[e,u]),f=c[3],h=Number.isInteger(a)?16:15,[p,y]=Number.isInteger(a)?Number(a)>=10?[-1.2,1.5]:[0,5.5]:[0,2.55];return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"left",x:y,y:"10",fill:f,fontSize:h,letterSpacing:p,dominantBaseline:"central",children:a}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"20",height:"20",rx:"10",ry:"10",onPointerDown:r,onPointerMove:x,onPointerUp:g,style:{cursor:"move"}})]}),[e,o,d,a,...c,r,x,g])},$={num:1,color:[w.Chongqing,"cq1","#e4002b",j.white]},Ke=[{type:"input",label:"panel.details.nodes.common.num",value:n=>(n!=null?n:$).num,validator:n=>!Number.isNaN(n),onChange:(n,e)=>{const o=e!=null?e:$;return Number.isNaN(Number(n))?o.num=n:o.num=Number(n),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.ChongqingRTNumLineBadge,defaultTheme:$.color})}],Je=()=>t.jsx(L,{fields:Ke}),Qe=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),t.jsx("text",{x:"8",y:"18",fill:"white",fontSize:"18",children:"1"})]}),Ye={component:Ve,icon:Qe,defaultAttrs:$,attrsComponent:Je,metadata:{displayName:"panel.details.nodes.chongqingRTNumLineBadge.displayName",tags:[]}},_e=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{names:a=T.names,color:c=T.color}=i!=null?i:T,r=l.useRef(null),x=l.useCallback(p=>m(e,p),[e,m]),g=l.useCallback(p=>s(e,p),[e,s]),f=l.useCallback(p=>u(e,p),[e,u]),h=c[3];return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),children:[t.jsx("rect",{fill:c[2],x:"0",width:"20",height:"20",rx:"10",ry:"10"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:"10",y:"10.5",fill:h,fontSize:"6",letterSpacing:"0",children:a[0]}),t.jsx(K,{ref:r,text:a[1].split("\n"),className:"rmp-name__en",textAnchor:"middle",x:"10",y:"9.25",fill:h,fontSize:"2.5",letterSpacing:"0",lineHeight:2.25,grow:"down"}),t.jsx("rect",{fill:"white",fillOpacity:"0",x:"0",width:"20",height:"20",rx:"10",ry:"10",onPointerDown:x,onPointerMove:g,onPointerUp:f,style:{cursor:"move"}})]}),[e,o,d,...a,...c,x,g,f])},T={names:["空港线","Konggang Line"],color:[w.Chongqing,"cq3","#003da5",j.white]},en=[{type:"input",label:"panel.details.nodes.common.nameZh",value:n=>(n!=null?n:T).names[0],onChange:(n,e)=>{const o=e!=null?e:T;return o.names[0]=n.toString(),o}},{type:"textarea",label:"panel.details.nodes.common.nameEn",value:n=>(n!=null?n:T).names[1],onChange:(n,e)=>{const o=e!=null?e:T;return o.names[1]=n.toString(),o}},{type:"custom",label:"color",component:t.jsx(C,{type:B.ChongqingRTTextLineBadge,defaultTheme:T.color})}],nn=()=>t.jsx(L,{fields:en}),tn=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),t.jsx("text",{x:"4.5",y:"12.5",fill:"white",fontSize:"5",children:"空港线"}),t.jsx("text",{x:"4.5",y:"15",fill:"white",fontSize:"2",children:"Konggang Line"})]}),on={component:_e,icon:tn,defaultAttrs:T,attrsComponent:nn,metadata:{displayName:"panel.details.nodes.chongqingRTTextLineBadge.displayName",tags:[]}},W=11.84375,ln=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=I.num,color:c=I.color,isBranch:r=I.isBranch}=i!=null?i:I,x=l.useCallback(A=>m(e,A),[e,m]),g=l.useCallback(A=>s(e,A),[e,s]),f=l.useCallback(A=>u(e,A),[e,u]),h=c[3]===j.black?"#003670":j.white,p=r?10:W+(a>9?6.5:3),y=r?-1:0,N=r?11:W+(a>9?7:3.5),S=r?6:W/2+4;return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),onPointerDown:x,onPointerMove:g,onPointerUp:f,style:{cursor:"move"},children:[t.jsx("rect",{fill:c[2],x:"0",width:W+21,height:"16",rx:"2"}),t.jsx("text",{className:"rmp-name__zh",textAnchor:"middle",x:S,y:"13.5",fill:h,fontSize:"15",letterSpacing:"-1",children:a}),t.jsxs("text",{className:"rmp-name__zh",x:p,y:"9.5",fontSize:"6",fill:h,letterSpacing:y,children:["号线",r?"支线":""]}),t.jsxs("text",{className:"rmp-name__en",x:N,y:"13.5",fontSize:"3",fill:h,children:[r?"Branch":""," Line ",a]})]}),[e,o,d,a,...c,r,x,g,f])},I={num:1,color:[w.Shenzhen,"sz1","#00b140",j.white],isBranch:!1},an=n=>{const{id:e,attrs:o,handleAttrsUpdate:d}=n,{t:i}=H(),m=[{type:"input",label:i("panel.details.nodes.common.num"),value:String(o.num),validator:s=>!Number.isNaN(s),onChange:s=>{o.num=Number(s),d(e,o)},minW:"full"},{type:"custom",label:i("color"),component:t.jsx(C,{type:B.ShenzhenMetroNumLineBadge,defaultTheme:I.color}),minW:"full"},{type:"switch",label:i("panel.details.nodes.shenzhenMetroNumLineBadge.branch"),oneLine:!0,isChecked:o.isBranch,onChange:s=>{o.isBranch=s,d(e,o)},minW:"full"}];return t.jsx(O,{fields:m})},sn=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"4",width:"20",height:"16",rx:"2"}),t.jsx("text",{x:"4",y:"17",fill:"white",fontSize:"14",children:"1"}),t.jsx("text",{x:"11",y:"14",fill:"white",fontSize:"5",children:"号线"}),t.jsx("text",{x:"12",y:"17",fill:"white",fontSize:"3",children:"Line 1"})]}),cn={component:ln,icon:sn,defaultAttrs:I,attrsComponent:an,metadata:{displayName:"panel.details.nodes.shenzhenMetroNumLineBadge.displayName",tags:[]}},rn=n=>{const{id:e,x:o,y:d,attrs:i,handlePointerDown:m,handlePointerMove:s,handlePointerUp:u}=n,{num:a=F.num,color:c=F.color}=i!=null?i:F,r=l.useCallback(p=>m(e,p),[e,m]),x=l.useCallback(p=>s(e,p),[e,s]),g=l.useCallback(p=>u(e,p),[e,u]),f=c[3],h=c[2];return l.useMemo(()=>t.jsxs("g",{id:e,transform:"translate(".concat(o,", ").concat(d,")"),onPointerDown:r,onPointerMove:x,onPointerUp:g,style:{cursor:"move"},children:[t.jsx("circle",{r:"6",fill:h}),t.jsx("text",{className:"rmp-name__mrt",textAnchor:"middle",x:"0",y:"0",width:"12",height:"12",fill:f,fontSize:"9",dominantBaseline:"central",letterSpacing:"-0.2",children:a})]}),[e,o,d,a,...c,r,x,g])},F={num:1,color:[w.Singapore,"ewl","#009739",j.white]},dn=n=>{const{id:e,attrs:o,handleAttrsUpdate:d}=n,{t:i}=H(),m=[{type:"input",label:i("panel.details.nodes.common.num"),value:String(o.num),validator:s=>!Number.isNaN(s),onChange:s=>{o.num=Number(s),d(e,o)},minW:"full"},{type:"custom",label:i("color"),component:t.jsx(C,{type:B.MRTDestinationNumbers,defaultTheme:F.color}),minW:"full"}];return t.jsx(O,{fields:m})},mn=t.jsxs("svg",{viewBox:"0 0 24 24",height:40,width:40,focusable:!1,children:[t.jsx("rect",{fill:"currentColor",x:"2",y:"2",rx:"10",ry:"10",width:"20",height:"20"}),t.jsx("text",{x:"9",y:"17",fill:"white",fontSize:"14",children:"1"})]}),hn={component:rn,icon:mn,defaultAttrs:F,attrsComponent:dn,metadata:{displayName:"panel.details.nodes.mrtDestinationNumbers.displayName",tags:[]}},fn={[B.Virtual]:te,[B.ShmetroNumLineBadge]:se,[B.ShmetroTextLineBadge]:he,[B.GzmtrLineBadge]:pe,[B.BjsubwayNumLineBadge]:je,[B.BjsubwayTextLineBadge]:ze,[B.SuzhouRTNumLineBadge]:Me,[B.BerlinSBahnLineBadge]:Ze,[B.BerlinUBahnLineBadge]:We,[B.ChongqingRTNumLineBadge]:Ye,[B.ChongqingRTTextLineBadge]:on,[B.ShenzhenMetroNumLineBadge]:cn,[B.MRTDestinationNumbers]:hn,[B.Facilities]:Q,[B.Text]:Re};export{fn as m};
