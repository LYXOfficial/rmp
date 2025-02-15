import{j as b,ad as Vt}from"./chakra-Bbq65mY9.js";import{N as Bt,ar as Ct,as as Ft,a3 as Et,k as Z,o as F,at as Ut,au as Gt,av as Zt,aw as kt,d as tt,c as Ht,p as Xt,ax as _t,ay as Q,az as J,aA as lt,T as it,aB as Lt,aC as Nt,aD as W,q as dt,t as at,aE as Mt,n as rt,m as qt,l as zt,r as ut,E as ht,v as pt,y as xt,U as q,aF as Qt,aG as Jt,S as te,aH as ee,a0 as ne,ab as ot,A as gt,ao as se,ap as oe,z as Dt,a1 as ie}from"./index-B1E7JcuQ.js";import{s as ft,u as Rt,f as Kt,g as re,b as ae,c as ce,e as le,h as de,j as ue,F as he,l as fe,S as ye,k as ge}from"./master-manager-DUc8SgWy.js";import{j as Yt,b as z}from"./react-DsCD0OwY.js";import{u as G,e as pe,i as xe}from"./clipboard-B3U8NrBW.js";import{m as yt}from"./misc-nodes-CWdI2Dn1.js";const me={[Et.Shmetro]:[{"zh-Hans":"安徽南路",en:"South Anhui Road"},{"zh-Hans":"广西西路",en:"West Guangxi Road"},{"zh-Hans":"西藏东路",en:"East Xizang Road"},{"zh-Hans":"湖北北路",en:"North Hubei Road"},{"zh-Hans":"吉林中路",en:"Central Jilin Road"},{"zh-Hans":"乌镇大道",en:"Wuzhen Avenue"},{"zh-Hans":"龙溪公路",en:"Longxi Highway"},{"zh-Hans":"抚顺公园",en:"Fushun Park"},{"zh-Hans":"七星新城",en:"Qixing New Town"},{"zh-Hans":"千灯机场",en:"Qiandeng Airport"},{"zh-Hans":"震泽",en:"Zhengze"},{"zh-Hans":"沧浪高科园区",en:"Canglang High-Tech Park"},{"zh-Hans":"黎里",en:"Lili"},{"zh-Hans":"娄塘新村",en:"Loutang Xincun"},{"zh-Hans":"建设新村",en:"Jianshe Xincun"}],[Et.Bjsubway]:[{"zh-Hans":"青松路",en:"Qingsonglu"},{"zh-Hans":"星海广场",en:"Xinghai Guangchang"},{"zh-Hans":"科技新城",en:"Keji Xincheng"},{"zh-Hans":"东湖桥",en:"Donghuqiao"},{"zh-Hans":"金融中心南",en:"Jinrongzhongxinnan"},{"zh-Hans":"玉泉东路",en:"Yuquan Donglu"},{"zh-Hans":"西山北街",en:"Xishan Beijie"},{"zh-Hans":"天光西门",en:"Tianguangximen"},{"zh-Hans":"翠竹园",en:"Cuizhuyuan"},{"zh-Hans":"明月港",en:"Mingyuegang"},{"zh-Hans":"春华街",en:"Chunhuajie"},{"zh-Hans":"锦绣大道",en:"Jinxiu Dadao"}]},ve=t=>{const e=me[t];return e.at(Math.floor(Math.random()*e.length))},$t=Yt("runtime/getStationNames",async({cityName:t},{getState:e,dispatch:u,rejectWithValue:f})=>{const{token:o}=e().account;if(!o){u(Ct({cityName:t,names:[]}));return}const c=await fetch("".concat(Ft,"/").concat(t),{headers:{accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(o)}});if(!c.ok)return Bt.warn("Failed to fetch random station names",c.statusText),f(c.statusText);const v=await c.json();u(Ct({cityName:t,names:v}))}),It=Yt("runtime/getOneStationName",async(t,{getState:e,dispatch:u})=>{var i;const{stationNames:f}=e().runtime,o=f[t];if(((i=o==null?void 0:o.length)!=null?i:0)==0)return Bt.debug("No random station names in cache, using fallback"),u($t({cityName:t})),Object.values(ve(t));const c=structuredClone(o),v=c.shift();return u(Ct({cityName:t,names:c})),c.length<3&&u($t({cityName:t})),Object.values(v)}),Ot=(t,e,u,f,o,c)=>{if(!("offsetFrom"in c)||!("offsetTo"in c)||Number.isNaN(c.offsetFrom)||Number.isNaN(c.offsetTo))return;if(c.offsetFrom===c.offsetTo)return Tt(t,e,u,f,o)?{x1:e,y1:u,x2:f,y2:o,offset:c.offsetFrom}:void 0;const[v,i]=[c.offsetFrom,c.offsetTo];for(let r=0;r<Math.PI;r+=Math.PI/8)for(let s=r,a=0;a<2;a++,s+=Math.PI){const[P,l,g,A]=[Math.sin(r)*v,Math.cos(r)*v,Math.sin(s)*i,Math.cos(s)*i];if(Tt(t,e+P,u+l,f+g,o+A))return{x1:e+P,y1:u+l,x2:f+g,y2:o+A,offset:0}}},Se=(t,e,u,f,o,c)=>t===u?{x1:t+5*c,y1:e,x2:u+5*c,y2:f,offset:o}:e===f?{x1:t,y1:e+5*c,x2:u,y2:f+5*c,offset:o}:{x1:t+5*Math.SQRT1_2*c,y1:e+5*Math.SQRT1_2*c,x2:u+5*Math.SQRT1_2*c,y2:f+5*Math.SQRT1_2*c,offset:o},Tt=(t,e,u,f,o)=>!!((e===f||u===o)&&[Z.Diagonal,Z.Perpendicular].includes(t)||Math.abs((o-u)/(f-e))===1&&[Z.Diagonal,Z.RotatePerpendicular].includes(t)),be=(t,e)=>{const u=[],f=[];return Object.values(e).forEach(o=>{var m;if(o.length===1){f.push(...o.map(x=>x.edge));return}const c=t.getEdgeAttribute(o.at(0),"type");if(!o.every(x=>t.getEdgeAttribute(x,"type")===c)){f.push(...o.map(x=>x.edge));return}const v=t.getEdgeAttribute(o.at(0),"style");if(!o.every(x=>t.getEdgeAttribute(x,"style")===v)){f.push(...o.map(x=>x.edge));return}const i={},r=new Set,s=new Set,a=Object.fromEntries(o.map(x=>{var C,$;const[_,d]=t.extremities(x);return i[_]=((C=i[_])!=null?C:0)+1,i[d]=(($=i[d])!=null?$:0)+1,r.add(_),s.add(d),[_,[x.edge,d]]})),P=Array.from(r).filter(x=>i[x]===1),l=Array.from(s).filter(x=>i[x]===1);if(P.length!==1||l.length!==1){f.push(...o.map(x=>x.edge));return}const g=P[0],A=l[0];if(g===A){f.push(...o.map(x=>x.edge));return}const E=[a[g][0]];let k=a[g][1];for(let x=1;x<o.length;x=x+1){const _=(m=a[k])==null?void 0:m.at(1);if(!_){f.push(...o.map(d=>d.edge));return}E.push(a[k][0]),k=_}if(k!==A||E.length!==o.length){f.push(...o.map(x=>x.edge));return}u.push(E)}),{allReconciledLines:u,danglingLines:f}},Ae=(t,e)=>{if(!e.every(o=>t.hasEdge(o)))return;const u=e.map(o=>{var l,g,A;const[c,v]=t.extremities(o),i=t.getNodeAttributes(c),r=t.getNodeAttributes(v),{type:s}=t.getEdgeAttributes(o),a=(l=t.getEdgeAttribute(o,s))!=null?l:F[s].defaultAttrs,P=Ot(s,i.x,i.y,r.x,r.y,a);if(P){const{x1:E,y1:k,x2:m,y2:x,offset:_}=P;return F[Z.Simple].generatePath(E,m,k,x,{offset:_})}return(A=(g=F[s])==null?void 0:g.generatePath(i.x,r.x,i.y,r.y,a))!=null?A:"M ".concat(i.x," ").concat(i.y," L ").concat(r.x," ").concat(r.y)});let f="".concat(u[0]," ");for(let o=1;o<e.length;o=o+1)f+=u[o].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return f},we=t=>[...t.nodeEntries()].map(e=>e.node.startsWith("stn")?{id:e.node,type:"station",station:e.attributes}:{id:e.node,type:"misc-node",miscNode:e.attributes}),Pe=t=>{const e={},u={},f=[],o={},c=[];for(const s of t.edgeEntries()){const[a,P,l,g]=[s.sourceAttributes.x,s.sourceAttributes.y,s.targetAttributes.x,s.targetAttributes.y],A=s.attributes[s.attributes.type],E=Ot(s.attributes.type,a,P,l,g,A);u[s.edge]=E}for(const s of t.edgeEntries()){let a=u[s.edge];const{parallelIndex:P}=s.attributes;if(P>=0){const l=Ut(t,s.attributes.type,s.edge),g=u[l];if(!g){f.push(s);continue}if(P>0){const{x1:A,y1:E,x2:k,y2:m,offset:x}=g;a=Se(A,E,k,m,x,P)}}if(s.attributes.reconcileId!==""){const l=s.attributes.reconcileId;l in o?o[l].push(s):o[l]=[s];continue}if(a){const l=s.edge,g=s.attributes,{x1:A,y1:E,x2:k,y2:m,offset:x}=a;e[l]={attr:g,path:F[Z.Simple].generatePath(A,k,E,m,{offset:x})};continue}c.push(s)}const v=new Set;for(;f.length;){const s=f.pop();if(v.has(s.edge))continue;const{parallel:a}=Gt(t,s);if(!a.length)continue;a.forEach(l=>v.add(l.edge));const P=Zt(a);for(const l of a){const g=l.edge;e[g]={attr:l.attributes,path:P[g]}}}const{allReconciledLines:i,danglingLines:r}=be(t,o);for(const s of i){const a=Ae(t,s);if(!a)continue;const P=s[0];e[P]={attr:t.getEdgeAttributes(P),path:a}}for(const s of r){const a=t.getEdgeAttributes(s),[P,l]=t.extremities(s),g=t.getNodeAttributes(P),A=t.getNodeAttributes(l);e[s]={attr:a,path:F[Z.Simple].generatePath(g.x,A.x,g.y,A.y,F[Z.Simple].defaultAttrs)}}for(const s of c){const a=s.edge,P=s.attributes.type,l=s.attributes,[g,A,E,k]=[s.sourceAttributes.x,s.sourceAttributes.y,s.targetAttributes.x,s.targetAttributes.y];if(!(P in F)){e[a]={attr:l,path:"M ".concat(g," ").concat(A," L ").concat(E," ").concat(k)};continue}e[a]={attr:l,path:F[P].generatePath(g,E,A,k,l[P])}}return Object.entries(e).map(([s,a])=>({id:s,type:"line",line:a}))},Wt=t=>{const{id:e,x:u,y:f,handlePointerDown:o,handlePointerMove:c,handlePointerUp:v}=t,i=z.useCallback(a=>o(e,a),[e,o]),r=z.useCallback(a=>c(e,a),[e,c]),s=z.useCallback(a=>v(e,a),[e,v]);return b.jsx("g",{id:e,transform:"translate(".concat(u-6.4," ").concat(f-6.4,")scale(0.025)"),onPointerDown:i,onPointerMove:r,onPointerUp:s,style:{cursor:"move"},children:b.jsx("path",{id:"stn_core_".concat(e),fillRule:"evenodd",clipRule:"evenodd",d:"M256 0c70.69 0 134.7 28.66 181.02 74.98C483.34 121.31 512 185.31 512 256c0 70.69-28.66 134.7-74.98 181.02C390.7 483.34 326.69 512 256 512c-70.69 0-134.69-28.66-181.02-74.98C28.66 390.7 0 326.69 0 256c0-70.69 28.66-134.69 74.98-181.02C121.31 28.66 185.31 0 256 0zm-21.91 302.69v-2.07c.16-13.72 1.51-24.59 4.15-32.67 2.59-8.08 6.32-14.65 11.18-19.63 4.87-5.02 10.72-9.58 17.56-13.72 4.4-2.8 8.39-5.9 11.91-9.37 3.52-3.42 6.32-7.41 8.38-11.91 2.07-4.46 3.11-9.42 3.11-14.91 0-6.53-1.55-12.18-4.66-16.99-3.05-4.77-7.19-8.44-12.27-11.08-5.13-2.59-10.82-3.89-17.09-3.89-5.65 0-11.03 1.15-16.21 3.53-5.12 2.33-9.42 6-12.79 10.97-3.36 4.98-5.33 11.35-5.85 19.11h-33.56c.53-13.21 3.89-24.39 10.05-33.55 6.21-9.16 14.4-16.11 24.55-20.82 10.2-4.71 21.49-7.04 33.81-7.04 13.57 0 25.38 2.48 35.52 7.56 10.15 5.02 18.08 12.06 23.72 21.08 5.59 9 8.44 19.47 8.44 31.48 0 8.23-1.29 15.64-3.88 22.21-2.59 6.58-6.22 12.48-10.98 17.61-4.77 5.18-10.41 9.73-17.03 13.67-6.27 3.94-11.35 7.97-15.18 12.17-3.88 4.19-6.68 9.17-8.44 14.86-1.76 5.74-2.75 12.84-2.9 21.33v2.07h-31.54zm16.68 70.67c-6.06 0-11.24-2.18-15.59-6.48-4.34-4.29-6.47-9.53-6.47-15.63 0-6.01 2.12-11.19 6.47-15.49 4.35-4.3 9.53-6.47 15.59-6.47 5.95 0 11.12 2.19 15.48 6.47 4.39 4.31 6.58 9.48 6.58 15.49 0 4.04-1.05 7.76-3.06 11.08-2.02 3.35-4.66 6.07-7.97 8.03-3.31 1.96-6.99 3-11.03 3z"})})},ke=t=>{const{id:e,path:u,handlePointerDown:f}=t,o=z.useCallback(c=>f(e,c),[e,f]);return b.jsx("path",{id:e,d:u,fill:"none",stroke:"grey",strokeWidth:"5",strokeLinecap:"round",cursor:"pointer",onPointerDown:o})},Me=z.memo(t=>{var r,s,a,P,l,g,A,E,k,m,x,_;const{elements:e,handlePointerDown:u,handlePointerMove:f,handlePointerUp:o,handleEdgePointerDown:c}=t,v=Object.fromEntries(Array.from({length:21},(d,C)=>[C-10,{pre:[],main:[],post:[]}]));for(const d of e)if(d.type==="line"){const C=d.line.attr.type,$=d.line.attr.style,Y=d.line.attr[$],D=(r=kt[$])==null?void 0:r.preComponent;D&&v[d.line.attr.zIndex].pre.push(b.jsx(D,{id:d.id,type:C,path:d.line.path,styleAttrs:Y,newLine:!1,handlePointerDown:c},"".concat(d.id,".pre")));const O=(a=(s=kt[$])==null?void 0:s.component)!=null?a:ke;v[d.line.attr.zIndex].main.push(b.jsx(O,{id:d.id,type:C,path:d.line.path,styleAttrs:Y,newLine:!1,handlePointerDown:c},d.id));const K=(P=kt[$])==null?void 0:P.postComponent;K&&v[d.line.attr.zIndex].post.push(b.jsx(K,{id:d.id,type:C,path:d.line.path,styleAttrs:Y,newLine:!1,handlePointerDown:c},"".concat(d.id,".post")))}else if(d.type==="station"){const C=d.station,$=C.type,Y=(l=ft[$])==null?void 0:l.preComponent;Y&&v[d.station.zIndex].pre.push(b.jsx(Y,{id:d.id,x:C.x,y:C.y,attrs:C,handlePointerDown:u,handlePointerMove:f,handlePointerUp:o},"".concat(d.id,".pre")));const D=(A=(g=ft[$])==null?void 0:g.component)!=null?A:Wt;v[d.station.zIndex].main.push(b.jsx(D,{id:d.id,x:C.x,y:C.y,attrs:C,handlePointerDown:u,handlePointerMove:f,handlePointerUp:o},d.id));const O=(E=ft[$])==null?void 0:E.postComponent;O&&v[d.station.zIndex].post.push(b.jsx(O,{id:d.id,x:C.x,y:C.y,attrs:C,handlePointerDown:u,handlePointerMove:f,handlePointerUp:o},"".concat(d.id,".post")))}else if(d.type==="misc-node"){const C=d.miscNode,$=C.type,Y=(k=yt[$])==null?void 0:k.preComponent;Y&&v[d.miscNode.zIndex].pre.push(b.jsx(Y,{id:d.id,x:C.x,y:C.y,attrs:C[$],handlePointerDown:u,handlePointerMove:f,handlePointerUp:o},"".concat(d.id,".pre")));const D=(x=(m=yt[$])==null?void 0:m.component)!=null?x:Wt;v[d.miscNode.zIndex].main.push(b.jsx(D,{id:d.id,x:C.x,y:C.y,attrs:C[$],handlePointerDown:u,handlePointerMove:f,handlePointerUp:o},d.id));const O=(_=yt[$])==null?void 0:_.postComponent;O&&v[d.miscNode.zIndex].post.push(b.jsx(O,{id:d.id,x:C.x,y:C.y,attrs:C[$],handlePointerDown:u,handlePointerMove:f,handlePointerUp:o},"".concat(d.id,".post")))}return Array.from({length:21},(d,C)=>(C-10).toString()).map(d=>[...v[d].pre,...v[d].main,...v[d].post]).flat()},(t,e)=>t.elements===e.elements),Ce=t=>{const{activeSnapPoint:e}=t,{svgViewBoxZoom:u}=tt(l=>l.param),f=l=>{const A=[{x:l.x,y:l.y},...l.originalNodesPos].sort((k,m)=>k.x===m.x?k.y-m.y:k.x-m.x),E=(A[1].y-A[0].y)/(A[1].x-A[0].x);if(Math.abs(E)<=.01)return{original:A,offset:A.map(k=>({x:k.x,y:k.y+10})),rotate:0};if(Math.abs(E)>=1e10)return{original:A,offset:A.map(k=>({x:k.x+10,y:k.y})),rotate:90};{const m=-1/E,x=10/Math.sqrt(m*m+1),_=10*m/Math.sqrt(m*m+1);return{original:A,offset:A.map(d=>({x:d.x+x,y:d.y+_})),rotate:-Math.atan(m)*(180/Math.PI)}}},{original:o,offset:c,rotate:v}=f(e),i=l=>{const g=Math.sqrt(3)/2*l,A="0,0",E="".concat(-l/2,",").concat(g),k="".concat(l/2,",").concat(g);return"".concat(A," ").concat(E," ").concat(k)},r=u/75,s=8*r,a="#FC8181",P="".concat(r*5," ").concat(r*2);return b.jsxs(b.Fragment,{children:[b.jsx("line",{x1:c[0].x,y1:c[0].y,x2:c[1].x,y2:c[1].y,stroke:a,strokeWidth:r,strokeDasharray:P}),b.jsx("line",{x1:c[1].x,y1:c[1].y,x2:c[2].x,y2:c[2].y,stroke:a,strokeWidth:r,strokeDasharray:P}),b.jsx("line",{x1:o[0].x,y1:o[0].y,x2:c[0].x,y2:c[0].y,stroke:a,strokeWidth:r,strokeDasharray:P}),b.jsx("line",{x1:o[1].x,y1:o[1].y,x2:c[1].x,y2:c[1].y,stroke:a,strokeWidth:r,strokeDasharray:P}),b.jsx("line",{x1:o[2].x,y1:o[2].y,x2:c[2].x,y2:c[2].y,stroke:a,strokeWidth:r,strokeDasharray:P}),b.jsx("polygon",{points:i(s),transform:"translate(".concat(c[0].x,",").concat(c[0].y,") rotate(").concat((v+270)%360,")"),fill:a}),b.jsx("polygon",{points:i(s),transform:"translate(".concat(c[1].x,",").concat(c[1].y,") rotate(").concat((v+270)%360,")"),fill:a}),b.jsx("polygon",{points:i(s),transform:"translate(".concat(c[1].x,",").concat(c[1].y,") rotate(").concat((v+90)%360,")"),fill:a}),b.jsx("polygon",{points:i(s),transform:"translate(".concat(c[2].x,",").concat(c[2].y,") rotate(").concat((v+90)%360,")"),fill:a})]})},Ee=[...Object.values(te),Mt.Virtual,Mt.Master,Mt.LondonArrow],_e=()=>{const t=Ht(),e=z.useRef(window.graph),u=()=>{t(dt()),t(at()),t(pt(e.current.export()))},{telemetry:{project:f},preference:{autoParallel:o,gridLines:c,snapLines:v}}=tt(M=>M.app),{svgViewBoxZoom:i,svgViewBoxMin:r}=tt(M=>M.param),{selected:s,refresh:{nodes:a,edges:P},mode:l,active:g,keepLastPath:A,theme:E}=tt(M=>M.runtime),k=Rt(),{height:m,width:x}=Xt(k),[_,d]=z.useState(),[C,$]=z.useState({dx:0,dy:0}),[Y,D]=z.useState([]),[O,K]=z.useState([]),[et,nt]=z.useState([]);z.useEffect(()=>{if(!_||!v)return;const M=_t(r,i,x,m),N=Kt(e.current,...Object.values(M));K(N),D(re(e.current,N))},[r,i,x,m,_]);const[ct,st]=z.useState(void 0),mt=G((M,N)=>{N.stopPropagation(),l==="select"&&t(Q("free"));const V=N.currentTarget,{x:U,y:R}=J(N);V.setPointerCapture(N.pointerId),nt([]),st(void 0),d({x:U,y:R}),t(lt(M)),N.shiftKey?s.has(M)?t(Lt(M)):t(Nt(M)):s.has(M)||t(it(new Set([M])))}),vt=G((M,N)=>{const{x:V,y:U}=J(N);if(l==="free"&&g===M){if(!N.altKey&&v){const R=e.current.getNodeAttribute(M,"x"),B=e.current.getNodeAttribute(M,"y"),H=R-(_.x-V)*i/100,n=B-(_.y-U)*i/100;let y=H,S=n;if(ae(M,e.current)){let h=et,p=ct;if(h.length!==0&&(h=h.filter(w=>ce(w,H,n)<=6)),p&&(h.length===0||Math.hypot(H-p.x,n-p.y)>6)&&(p=void 0),!p&&h.length===1){const w=h[0],{snapPoint:I,distance:X}=le(e.current,O.filter(T=>!s.has(T)),H,n,w);X<=3&&(p=I)}if(h.length===1&&!p||h.length===0){const{l:w,d:I}=de(H,n,Y,O.filter(T=>!s.has(T)&&!h.some(Pt=>Pt.node===T))),X=h.length===0||!h.some(T=>T.a===w.a&&T.b===w.b);I<3&&h.length<2&&X&&h.push(w)}if(h.length===1)if(p)y=p.x,S=p.y;else{const w=h[0];if(w.a==0)S=-w.c/w.b;else if(w.b==0)y=-w.c/w.a;else{const I=-w.a/w.b,X=-w.c/w.b;S=I*y+X}}else if(h.length===2){const w=h[0],I=h[1],X=w.a*I.b-I.a*w.b;X!==0&&(y=-(w.c*I.b-I.c*w.b)/X,S=-(w.a*I.c-I.a*w.c)/X)}nt(h),st(p)}const L=y-R,j=S-B;s.forEach(h=>{e.current.hasNode(h)&&e.current.updateNodeAttributes(h,p=>({...p,x:W(p.x+L,.01),y:W(p.y+j,.01)}))})}else nt([]),st(void 0),s.forEach(R=>{e.current.hasNode(R)&&e.current.updateNodeAttributes(R,B=>({...B,x:W(B.x-(_.x-V)*i/100,N.altKey?.01:5),y:W(B.y-(_.y-U)*i/100,N.altKey?.01:5)}))});t(dt()),t(at())}else l.startsWith("line")&&$({dx:(_.x-V)*i/100,dy:(_.y-U)*i/100})}),St=G((M,N)=>{if(l.startsWith("line")){A||t(Q("free"));const V=e.current.hasNode(g)&&Ee.includes(e.current.getNodeAttribute(g,"type"));["stn_core_","virtual_circle_"].forEach(R=>{var y,S;const H=(S=(y=document.elementsFromPoint(N.clientX,N.clientY)[0].attributes)==null?void 0:y.getNamedItem("id"))==null?void 0:S.value,n=H==null?void 0:H.startsWith(R);if(V&&n){const L=l.slice(5),j="line_".concat(rt(10)),[h,p]=[g,H.slice(R.length)],w=o?qt(e.current,L,h,p,"from"):-1;e.current.addDirectedEdgeWithKey(j,h,p,{visible:!0,zIndex:0,type:L,[L]:structuredClone(F[L].defaultAttrs),style:zt.SingleColor,[zt.SingleColor]:{color:E},reconcileId:"",parallelIndex:w}),t(it(new Set([j]))),f&&ut.event(ht.ADD_LINE,{type:L})}}),t(at()),t(pt(e.current.export()))}else if(l==="free"&&g){const{x:V,y:U}=J(N);_.x-V===0&&_.y-U===0||t(pt(e.current.export()))}nt([]),st(void 0),d(void 0),t(lt(void 0))}),bt=G((M,N)=>{if(N.stopPropagation(),N.shiftKey||t(xt()),N.shiftKey&&s.has(M)?t(Lt(M)):t(Nt(M)),l.startsWith("station")||l.startsWith("misc-node-virtual")||l.startsWith("misc-node-master")){const V=N.clientX-document.getElementById("canvas").getBoundingClientRect().left,U=N.clientY-document.getElementById("canvas").getBoundingClientRect().top,R=l.startsWith("station"),B=rt(10),H=R?"stn_".concat(B):"misc_node_".concat(B),n=R?l.slice(8):l.slice(10),{x:y,y:S}=q(V,U,i,r),L=R?structuredClone(ft[n].defaultAttrs):structuredClone(yt[n].defaultAttrs);"color"in L&&(L.color=E),e.current.addNode(H,{visible:!0,zIndex:0,x:W(y,5),y:W(S,5),type:n,[n]:L});const j=e.current.getEdgeAttributes(M),{zIndex:h,type:p,style:w}=j,I=j[p],X=j[w],[T,Pt]=e.current.extremities(M),jt=o?0:-1;e.current.addDirectedEdgeWithKey("line_".concat(rt(10)),T,H,{visible:!0,zIndex:h,type:p,[p]:structuredClone(I),style:w,[w]:structuredClone(X),reconcileId:"",parallelIndex:jt}),e.current.addDirectedEdgeWithKey("line_".concat(rt(10)),H,Pt,{visible:!0,zIndex:h,type:p,[p]:structuredClone(I),style:w,[w]:structuredClone(X),reconcileId:"",parallelIndex:jt}),e.current.dropEdge(M),u(),f&&(ut.event(ht.ADD_STATION,{type:n}),ut.event(ht.ADD_LINE,{type:p})),t(Q("free")),t(it(new Set([H])))}}),At=z.useMemo(()=>[...Pe(e.current),...we(e.current)],[P,a]),wt=Qt.component;return b.jsxs(b.Fragment,{children:[b.jsx(Me,{elements:At,handlePointerDown:mt,handlePointerMove:vt,handlePointerUp:St,handleEdgePointerDown:bt}),l.startsWith("line")&&g&&g!=="background"&&b.jsx(wt,{id:"line_create_in_progress___no_use",type:l.slice(5),path:F[l.slice(5)].generatePath(e.current.getNodeAttribute(g,"x"),e.current.getNodeAttribute(g,"x")-C.dx,e.current.getNodeAttribute(g,"y"),e.current.getNodeAttribute(g,"y")-C.dy,F[l.slice(5)].defaultAttrs),styleAttrs:{color:E},newLine:!0,handlePointerDown:()=>{}}),et.length!==0&&et.map(M=>b.jsx("path",{d:F[Z.Simple].generatePath(...Jt(M,_t(r,i,x,m)),F[Z.Simple].defaultAttrs),stroke:"cyan",strokeWidth:i/75},"snap_line_".concat(M.a,"_").concat(M.b,"_").concat(M.c,"_").concat(M.node))),ct&&b.jsx(Ce,{activeSnapPoint:ct})]})},je=z.memo(t=>{const{svgViewBoxMin:e,svgViewBoxZoom:u,svgWidth:f,svgHeight:o}=t,v=Vt().colorMode==="light"?"#666464":"#D3D3D4",i=_t(e,u,f,o),r=u>30?u>120?50:25:5,s=u/200,a={startX:W(i.xMin-r,r),endX:W(i.xMax+r,r),startY:W(i.yMin-r,r),endY:W(i.yMax+r,r)},P=Array.from({length:(a.endX-a.startX)/r+1},(E,k)=>{const m=a.startX+k*r,x=m%(r*5)===0?2*s:s;return b.jsx("line",{x1:m,y1:a.startY,x2:m,y2:a.endY,strokeWidth:x,stroke:v,opacity:"0.5"},"grid_vl_".concat(m))}),l=Array.from({length:(a.endY-a.startY)/r+1},(E,k)=>{const m=a.startY+k*r,x=m%(r*5)===0?2*s:s;return b.jsx("line",{x1:a.startX,y1:m,x2:a.endX,y2:m,strokeWidth:x,stroke:v,opacity:"0.5"},"grid_hl_".concat(m))}),g=Array.from({length:(a.endX-a.startX)/r/5+1},(E,k)=>{const m=W(a.startX,5*r)+k*5*r;return b.jsx("text",{x:m,y:i.yMin+u/5,fontSize:s*25,fill:v,textAnchor:"middle",opacity:"0.5",children:m},"grid_vc_".concat(m))}),A=Array.from({length:(a.endY-a.startY)/r/5+1},(E,k)=>{const m=W(a.startY,5*r)+k*5*r;return b.jsx("text",{x:i.xMin+u/8,y:m,fontSize:s*25,fill:v,textAnchor:"start",opacity:"0.5",children:m},"grid_hc_".concat(m))});return b.jsxs("g",{id:"grid-lines",className:"removeMe",children:[P,l,g,A]})},(t,e)=>t.svgViewBoxMin.x===e.svgViewBoxMin.x&&t.svgViewBoxMin.y===e.svgViewBoxMin.y&&t.svgViewBoxZoom===e.svgViewBoxZoom&&t.svgWidth===e.svgWidth&&t.svgHeight===e.svgHeight),Te=()=>{const t=Ht(),e=z.useRef(window.graph),u=()=>{t(dt()),t(at()),t(pt(e.current.export()))},{activeSubscriptions:f}=tt(n=>n.account),{telemetry:{project:o},preference:{randomStationsNames:c,gridLines:v}}=tt(n=>n.app),{svgViewBoxZoom:i,svgViewBoxMin:r}=tt(n=>n.param),{mode:s,lastTool:a,active:P,selected:l,keepLastPath:g,theme:A,refresh:{nodes:E},masterNodesCount:k,parallelLinesCount:m}=tt(n=>n.runtime),x=Rt(),{height:_,width:d}=Xt(x),C=!f.RMP_CLOUD&&k+1>ee,$=!f.RMP_CLOUD&&m+1>ne,Y=!f.RMP_CLOUD||c==="none";z.useEffect(()=>{const n=ue(e.current);Object.entries(n).filter(([y,S])=>S&&y in he).forEach(([y])=>fe(y))},[E]);const[D,O]=z.useState({x:0,y:0}),[K,et]=z.useState({x:0,y:0}),[nt,ct]=z.useState({x:0,y:0}),[st,mt]=z.useState({x:0,y:0}),vt=G(async n=>{const{x:y,y:S}=J(n);if(s.startsWith("station")){t(Q("free"));const L=rt(10),j="stn_".concat(L),h=s.slice(8),p=structuredClone(ft[h].defaultAttrs);if("color"in p&&(p.color=A),!Y){const X=await t(It(Et.Shmetro));if(It.fulfilled.match(X)){const T=X.payload;p.names.length>T.length?T.push(...Array(p.names.length-T.length).fill(T.at(-1))):p.names.length<T.length&&T.splice(p.names.length,T.length-p.names.length),p.names=T}}const{x:w,y:I}=q(y,S,i,r);e.current.addNode(j,{visible:!0,zIndex:0,x:W(w,5),y:W(I,5),type:h,[h]:p}),u(),o&&ut.event(ht.ADD_STATION,{type:h}),t(it(new Set([j])))}else if(s.startsWith("misc-node")){t(Q("free"));const L=rt(10),j="misc_node_".concat(L),h=s.slice(10),{x:p,y:w}=q(y,S,i,r);e.current.addNode(j,{visible:!0,zIndex:0,x:W(p,5),y:W(w,5),type:h,[h]:structuredClone(yt[h].defaultAttrs)}),u(),o&&ut.event(ht.ADD_STATION,{type:h}),t(it(new Set([j])))}else s==="free"||s.startsWith("line")?(s.startsWith("line")&&(t(Q("free")),g&&t(ie(!1))),ct({x:y,y:S}),mt(r),n.shiftKey||(t(lt("background")),t(xt()))):s==="select"&&(O(q(y,S,i,r)),et(q(y,S,i,r)))}),St=G(n=>{if(s==="select"){if(D.x!=0&&D.y!=0){const{x:y,y:S}=J(n);et(q(y,S,i,r))}}else if(P==="background"){const{x:y,y:S}=J(n);t(gt({x:st.x+(nt.x-y)*i/100,y:st.y+(nt.y-S)*i/100}))}}),bt=G(n=>{if(s==="select"){const{x:y,y:S}=J(n),{x:L,y:j}=q(y,S,i,r),h=Kt(e.current,D.x,D.y,L,j),p=ge(e.current,new Set(h));t(it(new Set([...n.shiftKey?l:[],...h,...p]))),t(Q("free")),O({x:0,y:0}),et({x:0,y:0})}P==="background"&&!n.shiftKey&&t(lt(void 0))}),At=G(n=>{let y=i;n.deltaY>0&&i+10<400?y=i+10:n.deltaY<0&&i-10>0&&(y=i-10),t(Dt(y));const{x:S,y:L}=J(n),j=n.currentTarget.getBoundingClientRect(),[h,p]=[S/j.width,L/j.height];t(gt({x:r.x+S*i/100-d*y/100*h,y:r.y+L*i/100-_*y/100*p}))}),wt=G(async n=>{if(ot?n.key==="Backspace":n.key==="Delete")l.size>0&&(l.forEach(y=>{e.current.hasNode(y)?e.current.dropNode(y):e.current.hasEdge(y)&&e.current.dropEdge(y)}),t(xt()),u());else if(n.key.startsWith("Arrow")){const S=n.key.endsWith("Left")?-1:n.key.endsWith("Right")?1:0,L=n.key.endsWith("Up")?-1:n.key.endsWith("Down")?1:0;t(gt(q(100*S,100*L,i,r)))}else if(n.key==="i"||n.key==="j"||n.key==="k"||n.key==="l"){const S=(n.key==="j"?-1:n.key==="l"?1:0)*10,L=(n.key==="i"?-1:n.key==="k"?1:0)*10;l.size>0&&l.forEach(j=>{e.current.hasNode(j)&&(e.current.updateNodeAttribute(j,"x",h=>(h!=null?h:0)+S),e.current.updateNodeAttribute(j,"y",h=>(h!=null?h:0)+L),u())})}else if(n.key==="f"&&a)t(Q(a));else if(n.key==="z"&&(ot?n.metaKey&&!n.shiftKey:n.ctrlKey))ot&&n.preventDefault(),t(se()),t(dt()),t(at());else if(n.key==="s")t(Q("select"));else if((n.key==="c"||n.key==="x")&&(ot?n.metaKey&&!n.shiftKey:n.ctrlKey)){const y=pe(e.current,l);navigator.clipboard.writeText(y),n.key==="x"&&(t(xt()),l.forEach(S=>{e.current.hasNode(S)?e.current.dropNode(S):e.current.hasEdge(S)&&e.current.dropEdge(S)}),u())}else if(n.key==="v"&&(ot?n.metaKey&&!n.shiftKey:n.ctrlKey)){const y=await navigator.clipboard.readText(),{x:S,y:L}=q(d/2,_/2,i,r),{nodes:j,edges:h}=xe(y,e.current,C,$,W(S,5),W(L,5));u();const p=structuredClone(j);h.forEach(w=>p.add(w)),t(it(p))}else(ot&&n.key==="z"&&n.metaKey&&n.shiftKey||!ot&&n.key==="y"&&n.ctrlKey)&&(t(oe()),t(dt()),t(at()))}),[M,N]=z.useState(0),V=G(n=>{if(n.touches.length===2){t(lt(void 0));const[y,S]=[n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY];N(y*y+S*S)}}),U=G(n=>{if(M!==0&&n.touches.length===2){const[y,S]=[n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY],L=y*y+S*S;let j=i;L-M<0&&i+10<=390?j=i+10:L-M>0&&i-10>=10&&(j=i-10),t(Dt(j)),N(L);const h=n.currentTarget.getBoundingClientRect(),[p,w]=[(n.touches[0].clientX+n.touches[1].clientX)/2-h.left,(n.touches[0].clientY+n.touches[1].clientY)/2-h.top],[I,X]=[p/h.width,w/h.height];t(gt({x:r.x+p*i/100-d*j/100*I,y:r.y+w*i/100-_*j/100*X}))}}),R=G(n=>{M!==0&&N(0)}),[B,H]=z.useState({sx:0,sy:0,ex:0,ey:0});return z.useEffect(()=>{H({sx:D.x<=K.x?D.x:K.x,ex:D.x>K.x?D.x:K.x,sy:D.y<=K.y?D.y:K.y,ey:D.y>K.y?D.y:K.y})},[K.x,K.y]),b.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none",touchAction:"none"},height:_,width:d,viewBox:"".concat(r.x," ").concat(r.y," ").concat(d*i/100," ").concat(_*i/100),onPointerDown:vt,onPointerMove:St,onPointerUp:bt,onTouchStart:V,onTouchMove:U,onTouchEnd:R,onWheel:At,tabIndex:0,onKeyDown:wt,children:[v&&b.jsx(je,{svgViewBoxMin:r,svgViewBoxZoom:i,svgWidth:d,svgHeight:_}),b.jsx(ye,{children:b.jsx(_e,{})}),s==="select"&&D.x!=0&&D.y!=0&&b.jsx("rect",{x:B.sx,y:B.sy,width:B.ex-B.sx,height:B.ey-B.sy,rx:"2",stroke:"#b5b5b6",strokeWidth:"2",strokeOpacity:"0.4",fill:"#b5b5b6",opacity:"0.75"}),b.jsx("defs",{children:b.jsxs("pattern",{id:"opaque",width:"5",height:"5",patternUnits:"userSpaceOnUse",children:[b.jsx("rect",{x:"0",y:"0",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"}),b.jsx("rect",{x:"2.5",y:"2.5",width:"2.5",height:"2.5",fill:"black",fillOpacity:"50%"})]})})]})};export{Te as default};
