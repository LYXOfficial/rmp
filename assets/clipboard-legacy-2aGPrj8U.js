System.register(["./react-legacy-CNd4YBNT.js","./index-legacy-Qcy4LSvn.js"],(function(e,t){"use strict";var r,n,s;return{setters:[e=>{r=e.b},e=>{n=e.n,s=e.ay}],execute:function(){e("u",(function(e){const n=r.useRef(o);t((()=>{n.current=e}),[e]);const s=r.useRef(null);return s.current||(s.current=function(){return n.current.apply(this,arguments)}),s.current}));const t="undefined"!=typeof window?r.useInsertionEffect||r.useLayoutEffect:()=>{};function o(){throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.")}e("e",((e,t)=>{const r={},n={};let[s,o]=[0,0],c=0;t.forEach((t=>{if(e.hasNode(t)){const n=t,i=e.getNodeAttributes(n);r[n]=i,s+=i.x,o+=i.y,c++}else if(e.hasEdge(t)){const r=t,[s,o]=e.extremities(r);n[r]={attr:e.getEdgeAttributes(r),source:s,target:o}}}));const i={app:"rmp",version:1,nodesWithAttrs:r,edgesWithAttrs:n,avgX:s/c,avgY:o/c};return JSON.stringify(i)})),e("i",((e,t,r,o,c,i)=>{const{nodesWithAttrs:a,edgesWithAttrs:d,version:f}=JSON.parse(e);if(1!==f)throw Error(`Unrecognized version: ${f}`);const u={};Object.keys(a).filter((e=>t.hasNode(e))).forEach((e=>{const t=n(10);if(e.startsWith("stn_"))u[e]=`stn_${t}`;else{if(!e.startsWith("misc_node_"))throw Error(`Unrecognized node id: ${e}`);u[e]=`misc_node_${t}`}})),Object.keys(d).filter((e=>t.hasEdge(e))).forEach((e=>u[e]=`line_${n(10)}`));const h=Object.entries(u).reduce(((e,[t,r])=>e.replaceAll(t,r)),e),{nodesWithAttrs:l,edgesWithAttrs:g,avgX:E,avgY:b}=JSON.parse(h),y=r?Object.fromEntries(Object.entries(l).filter((([e,t])=>t.type!==s.Master))):l,O=r?Object.fromEntries(Object.entries(g).filter((([e,{source:t,target:r}])=>t in y&&r in y))):g;if(o)for(const n in O)O[n].attr.parallelIndex>=0&&(O[n].attr.parallelIndex=-1);const[j,p]=[c-E,i-b];return Object.entries(y).forEach((([e,r])=>{r.x+=j,r.y+=p,t.addNode(e,r)})),Object.entries(O).forEach((([e,{attr:r,source:n,target:s}])=>t.addDirectedEdgeWithKey(e,n,s,r))),{nodes:new Set(Object.keys(y)),edges:new Set(Object.keys(O))}}))}}}));
