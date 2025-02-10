import{d as je,e as B,f as ue,k as Ae,b as k,c as te,g as fe,p as at,h as st,i as ct,a as ut,j as S,_ as ft}from"./@babel-CbNk-B6_.js";import{c as Y}from"./classnames-ELZfJkp_.js";import{b as ne,z as vt,y as gt,C as rt,u as Re,K as Ce}from"./rc-util-jI2IUycA.js";import{r as D,a as L}from"./react-CIM1rrag.js";import{L as ht}from"./rc-virtual-list-jPw5Q6vC.js";import{C as yt}from"./rc-motion-C8hKN_nz.js";function W(a,t){return a[t]}var pt=["children"];function ot(a,t){return"".concat(a,"-").concat(t)}function Kt(a){return a&&a.type&&a.type.isTreeNode}function Te(a,t){return a??t}function _e(a){var t=a||{},g=t.title,e=t._title,d=t.key,v=t.children,p=g||"title";return{title:p,_title:e||[p],key:d||"key",children:v||"children"}}function mt(a){function t(g){var e=gt(g);return e.map(function(d){if(!Kt(d))return ne(!d,"Tree/TreeNode can only accept TreeNode as children."),null;var v=d.key,p=d.props,n=p.children,o=Ae(p,pt),r=B({key:v},o),l=t(n);return l.length&&(r.children=l),r}).filter(function(d){return d})}return t(a)}function Ue(a,t,g){var e=_e(g),d=e._title,v=e.key,p=e.children,n=new Set(t===!0?[]:t),o=[];function r(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return l.map(function(c,f){for(var y=ot(u?u.pos:"0",f),K=Te(c[v],y),s,h=0;h<d.length;h+=1){var x=d[h];if(c[x]!==void 0){s=c[x];break}}var m=Object.assign(vt(c,[].concat(ue(d),[v,p])),{title:s,key:K,parent:u,pos:y,children:null,data:c,isStart:[].concat(ue(u?u.isStart:[]),[f===0]),isEnd:[].concat(ue(u?u.isEnd:[]),[f===l.length-1])});return o.push(m),t===!0||n.has(K)?m.children=r(c[p]||[],m):m.children=[],m})}return r(a),o}function kt(a,t,g){var e={};je(g)==="object"?e=g:e={externalGetKey:g},e=e||{};var d=e,v=d.childrenPropName,p=d.externalGetKey,n=d.fieldNames,o=_e(n),r=o.key,l=o.children,u=v||l,c;p?typeof p=="string"?c=function(K){return K[p]}:typeof p=="function"&&(c=function(K){return p(K)}):c=function(K,s){return Te(K[r],s)};function f(y,K,s,h){var x=y?y[u]:a,m=y?ot(s.pos,K):"0",N=y?[].concat(ue(h),[y]):[];if(y){var E=c(y,m),b={node:y,index:K,pos:m,key:E,parentPos:s.node?s.pos:null,level:s.level+1,nodes:N};t(b)}x&&x.forEach(function(O,i){f(O,i,{node:y,pos:m,level:s?s.level+1:-1},N)})}f(null)}function Nt(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=t.initWrapper,e=t.processEntity,d=t.onProcessFinished,v=t.externalGetKey,p=t.childrenPropName,n=t.fieldNames,o=arguments.length>2?arguments[2]:void 0,r=v||o,l={},u={},c={posEntities:l,keyEntities:u};return g&&(c=g(c)||c),kt(a,function(f){var y=f.node,K=f.index,s=f.pos,h=f.key,x=f.parentPos,m=f.level,N=f.nodes,E={node:y,nodes:N,index:K,key:h,pos:s,level:m},b=Te(h,s);l[s]=E,u[b]=E,E.parent=l[x],E.parent&&(E.parent.children=E.parent.children||[],E.parent.children.push(E)),e&&e(E,c)},{externalGetKey:r,childrenPropName:p,fieldNames:n}),d&&d(c),c}function Pe(a,t){var g=t.expandedKeys,e=t.selectedKeys,d=t.loadedKeys,v=t.loadingKeys,p=t.checkedKeys,n=t.halfCheckedKeys,o=t.dragOverNodeKey,r=t.dropPosition,l=t.keyEntities,u=W(l,a),c={eventKey:a,expanded:g.indexOf(a)!==-1,selected:e.indexOf(a)!==-1,loaded:d.indexOf(a)!==-1,loading:v.indexOf(a)!==-1,checked:p.indexOf(a)!==-1,halfChecked:n.indexOf(a)!==-1,pos:String(u?u.pos:""),dragOver:o===a&&r===0,dragOverGapTop:o===a&&r===-1,dragOverGapBottom:o===a&&r===1};return c}function F(a){var t=a.data,g=a.expanded,e=a.selected,d=a.checked,v=a.loaded,p=a.loading,n=a.halfChecked,o=a.dragOver,r=a.dragOverGapTop,l=a.dragOverGapBottom,u=a.pos,c=a.active,f=a.eventKey,y=B(B({},t),{},{expanded:g,selected:e,checked:d,loaded:v,loading:p,halfChecked:n,dragOver:o,dragOverGapTop:r,dragOverGapBottom:l,pos:u,active:c,key:f});return"props"in y||Object.defineProperty(y,"props",{get:function(){return ne(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),a}}),y}function dt(a,t){var g=new Set;return a.forEach(function(e){t.has(e)||g.add(e)}),g}function Ct(a){var t=a||{},g=t.disabled,e=t.disableCheckbox,d=t.checkable;return!!(g||e)||d===!1}function xt(a,t,g,e){for(var d=new Set(a),v=new Set,p=0;p<=g;p+=1){var n=t.get(p)||new Set;n.forEach(function(u){var c=u.key,f=u.node,y=u.children,K=y===void 0?[]:y;d.has(c)&&!e(f)&&K.filter(function(s){return!e(s.node)}).forEach(function(s){d.add(s.key)})})}for(var o=new Set,r=g;r>=0;r-=1){var l=t.get(r)||new Set;l.forEach(function(u){var c=u.parent,f=u.node;if(!(e(f)||!u.parent||o.has(u.parent.key))){if(e(u.parent.node)){o.add(c.key);return}var y=!0,K=!1;(c.children||[]).filter(function(s){return!e(s.node)}).forEach(function(s){var h=s.key,x=d.has(h);y&&!x&&(y=!1),!K&&(x||v.has(h))&&(K=!0)}),y&&d.add(c.key),K&&v.add(c.key),o.add(c.key)}})}return{checkedKeys:Array.from(d),halfCheckedKeys:Array.from(dt(v,d))}}function Et(a,t,g,e,d){for(var v=new Set(a),p=new Set(t),n=0;n<=e;n+=1){var o=g.get(n)||new Set;o.forEach(function(c){var f=c.key,y=c.node,K=c.children,s=K===void 0?[]:K;!v.has(f)&&!p.has(f)&&!d(y)&&s.filter(function(h){return!d(h.node)}).forEach(function(h){v.delete(h.key)})})}p=new Set;for(var r=new Set,l=e;l>=0;l-=1){var u=g.get(l)||new Set;u.forEach(function(c){var f=c.parent,y=c.node;if(!(d(y)||!c.parent||r.has(c.parent.key))){if(d(c.parent.node)){r.add(f.key);return}var K=!0,s=!1;(f.children||[]).filter(function(h){return!d(h.node)}).forEach(function(h){var x=h.key,m=v.has(x);K&&!m&&(K=!1),!s&&(m||p.has(x))&&(s=!0)}),K||v.delete(f.key),s&&p.add(f.key),r.add(f.key)}})}return{checkedKeys:Array.from(v),halfCheckedKeys:Array.from(dt(p,v))}}function Be(a,t,g,e){var d=[],v;e?v=e:v=Ct;var p=new Set(a.filter(function(l){var u=!!W(g,l);return u||d.push(l),u})),n=new Map,o=0;Object.keys(g).forEach(function(l){var u=g[l],c=u.level,f=n.get(c);f||(f=new Set,n.set(c,f)),f.add(u),o=Math.max(o,c)}),ne(!d.length,"Tree missing follow keys: ".concat(d.slice(0,100).map(function(l){return"'".concat(l,"'")}).join(", ")));var r;return t===!0?r=xt(p,n,o,v):r=Et(p,t.halfCheckedKeys,n,o,v),r}var He=D.createContext(null),bt=D.createContext({}),Dt=function(t){for(var g=t.prefixCls,e=t.level,d=t.isStart,v=t.isEnd,p="".concat(g,"-indent-unit"),n=[],o=0;o<e;o+=1)n.push(D.createElement("span",{key:o,className:Y(p,k(k({},"".concat(p,"-start"),d[o]),"".concat(p,"-end"),v[o]))}));return D.createElement("span",{"aria-hidden":"true",className:"".concat(g,"-indent")},n)};const St=D.memo(Dt);var Ot=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],Ve="open",Ye="close",Pt="---",$e=function(t){var g,e,d=t.eventKey,v=t.className,p=t.style,n=t.dragOver,o=t.dragOverGapTop,r=t.dragOverGapBottom,l=t.isLeaf,u=t.isStart,c=t.isEnd,f=t.expanded,y=t.selected,K=t.checked,s=t.halfChecked,h=t.loading,x=t.domRef,m=t.active,N=t.data,E=t.onMouseMove,b=t.selectable,O=Ae(t,Ot),i=L.useContext(He),T=L.useContext(bt),w=L.useRef(null),R=L.useState(!1),$=te(R,2),I=$[0],_=$[1],M=L.useMemo(function(){var P;return!!(i.disabled||t.disabled||(P=T.nodeDisabled)!==null&&P!==void 0&&P.call(T,N))},[i.disabled,t.disabled,T.nodeDisabled,N]),U=L.useMemo(function(){return!i.checkable||t.checkable===!1?!1:i.checkable},[i.checkable,t.checkable]),G=function(C){M||i.onNodeSelect(C,F(t))},ae=function(C){M||!U||t.disableCheckbox||i.onNodeCheck(C,F(t),!K)},xe=L.useMemo(function(){return typeof b=="boolean"?b:i.selectable},[b,i.selectable]),ge=function(C){i.onNodeClick(C,F(t)),xe?G(C):ae(C)},he=function(C){i.onNodeDoubleClick(C,F(t))},re=function(C){i.onNodeMouseEnter(C,F(t))},H=function(C){i.onNodeMouseLeave(C,F(t))},oe=function(C){i.onNodeContextMenu(C,F(t))},j=L.useMemo(function(){return!!(i.draggable&&(!i.draggable.nodeDraggable||i.draggable.nodeDraggable(N)))},[i.draggable,N]),ye=function(C){C.stopPropagation(),_(!0),i.onNodeDragStart(C,t);try{C.dataTransfer.setData("text/plain","")}catch{}},Ee=function(C){C.preventDefault(),C.stopPropagation(),i.onNodeDragEnter(C,t)},Q=function(C){C.preventDefault(),C.stopPropagation(),i.onNodeDragOver(C,t)},be=function(C){C.stopPropagation(),i.onNodeDragLeave(C,t)},pe=function(C){C.stopPropagation(),_(!1),i.onNodeDragEnd(C,t)},Z=function(C){C.preventDefault(),C.stopPropagation(),_(!1),i.onNodeDrop(C,t)},de=function(C){h||i.onNodeExpand(C,F(t))},De=L.useMemo(function(){var P=W(i.keyEntities,d)||{},C=P.children;return!!(C||[]).length},[i.keyEntities,d]),z=L.useMemo(function(){return l===!1?!1:l||!i.loadData&&!De||i.loadData&&t.loaded&&!De},[l,i.loadData,De,t.loaded]);L.useEffect(function(){h||typeof i.loadData=="function"&&f&&!z&&!t.loaded&&i.onNodeLoad(F(t))},[h,i.loadData,i.onNodeLoad,f,z,t]);var Ie=L.useMemo(function(){var P;return(P=i.draggable)!==null&&P!==void 0&&P.icon?L.createElement("span",{className:"".concat(i.prefixCls,"-draggable-icon")},i.draggable.icon):null},[i.draggable]),Ke=function(C){var V=t.switcherIcon||i.switcherIcon;return typeof V=="function"?V(B(B({},t),{},{isLeaf:C})):V},we=function(){if(z){var C=Ke(!0);return C!==!1?L.createElement("span",{className:Y("".concat(i.prefixCls,"-switcher"),"".concat(i.prefixCls,"-switcher-noop"))},C):null}var V=Ke(!1);return V!==!1?L.createElement("span",{onClick:de,className:Y("".concat(i.prefixCls,"-switcher"),"".concat(i.prefixCls,"-switcher_").concat(f?Ve:Ye))},V):null},Se=L.useMemo(function(){if(!U)return null;var P=typeof U!="boolean"?U:null;return L.createElement("span",{className:Y("".concat(i.prefixCls,"-checkbox"),k(k(k({},"".concat(i.prefixCls,"-checkbox-checked"),K),"".concat(i.prefixCls,"-checkbox-indeterminate"),!K&&s),"".concat(i.prefixCls,"-checkbox-disabled"),M||t.disableCheckbox)),onClick:ae,role:"checkbox","aria-checked":s?"mixed":K,"aria-disabled":M||t.disableCheckbox,"aria-label":"Select ".concat(typeof t.title=="string"?t.title:"tree node")},P)},[U,K,s,M,t.disableCheckbox,t.title]),me=L.useMemo(function(){return z?null:f?Ve:Ye},[z,f]),ke=L.useMemo(function(){return L.createElement("span",{className:Y("".concat(i.prefixCls,"-iconEle"),"".concat(i.prefixCls,"-icon__").concat(me||"docu"),k({},"".concat(i.prefixCls,"-icon_loading"),h))})},[i.prefixCls,me,h]),A=L.useMemo(function(){var P=!!i.draggable,C=!t.disabled&&P&&i.dragOverNodeKey===d;return C?i.dropIndicatorRender({dropPosition:i.dropPosition,dropLevelOffset:i.dropLevelOffset,indent:i.indent,prefixCls:i.prefixCls,direction:i.direction}):null},[i.dropPosition,i.dropLevelOffset,i.indent,i.prefixCls,i.direction,i.draggable,i.dragOverNodeKey,i.dropIndicatorRender]),q=L.useMemo(function(){var P=t.title,C=P===void 0?Pt:P,V="".concat(i.prefixCls,"-node-content-wrapper"),Fe;if(i.showIcon){var Me=t.icon||i.icon;Fe=Me?L.createElement("span",{className:Y("".concat(i.prefixCls,"-iconEle"),"".concat(i.prefixCls,"-icon__customize"))},typeof Me=="function"?Me(t):Me):ke}else i.loadData&&h&&(Fe=ke);var Le;return typeof C=="function"?Le=C(N):i.titleRender?Le=i.titleRender(N):Le=C,L.createElement("span",{ref:w,title:typeof C=="string"?C:"",className:Y(V,"".concat(V,"-").concat(me||"normal"),k({},"".concat(i.prefixCls,"-node-selected"),!M&&(y||I))),onMouseEnter:re,onMouseLeave:H,onContextMenu:oe,onClick:ge,onDoubleClick:he},Fe,L.createElement("span",{className:"".concat(i.prefixCls,"-title")},Le),A)},[i.prefixCls,i.showIcon,t,i.icon,ke,i.titleRender,N,me,re,H,oe,ge,he]),X=rt(O,{aria:!0,data:!0}),Ne=W(i.keyEntities,d)||{},ie=Ne.level,Oe=c[c.length-1],le=!M&&j,se=i.draggingNodeKey===d,ce=b!==void 0?{"aria-selected":!!b}:void 0;return L.createElement("div",fe({ref:x,role:"treeitem","aria-expanded":l?void 0:f,className:Y(v,"".concat(i.prefixCls,"-treenode"),(e={},k(k(k(k(k(k(k(k(k(k(e,"".concat(i.prefixCls,"-treenode-disabled"),M),"".concat(i.prefixCls,"-treenode-switcher-").concat(f?"open":"close"),!l),"".concat(i.prefixCls,"-treenode-checkbox-checked"),K),"".concat(i.prefixCls,"-treenode-checkbox-indeterminate"),s),"".concat(i.prefixCls,"-treenode-selected"),y),"".concat(i.prefixCls,"-treenode-loading"),h),"".concat(i.prefixCls,"-treenode-active"),m),"".concat(i.prefixCls,"-treenode-leaf-last"),Oe),"".concat(i.prefixCls,"-treenode-draggable"),j),"dragging",se),k(k(k(k(k(k(k(e,"drop-target",i.dropTargetKey===d),"drop-container",i.dropContainerKey===d),"drag-over",!M&&n),"drag-over-gap-top",!M&&o),"drag-over-gap-bottom",!M&&r),"filter-node",(g=i.filterTreeNode)===null||g===void 0?void 0:g.call(i,F(t))),"".concat(i.prefixCls,"-treenode-leaf"),z))),style:p,draggable:le,onDragStart:le?ye:void 0,onDragEnter:j?Ee:void 0,onDragOver:j?Q:void 0,onDragLeave:j?be:void 0,onDrop:j?Z:void 0,onDragEnd:j?pe:void 0,onMouseMove:E},ce,X),L.createElement(St,{prefixCls:i.prefixCls,level:ie,isStart:u,isEnd:c}),Ie,we(),Se,q)};$e.isTreeNode=1;function J(a,t){if(!a)return[];var g=a.slice(),e=g.indexOf(t);return e>=0&&g.splice(e,1),g}function ee(a,t){var g=(a||[]).slice();return g.indexOf(t)===-1&&g.push(t),g}function qe(a){return a.split("-")}function Tt(a,t){var g=[],e=W(t,a);function d(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];v.forEach(function(p){var n=p.key,o=p.children;g.push(n),d(o)})}return d(e.children),g}function wt(a){if(a.parent){var t=qe(a.pos);return Number(t[t.length-1])===a.parent.children.length-1}return!1}function Mt(a){var t=qe(a.pos);return Number(t[t.length-1])===0}function ze(a,t,g,e,d,v,p,n,o,r){var l,u=a.clientX,c=a.clientY,f=a.target.getBoundingClientRect(),y=f.top,K=f.height,s=(r==="rtl"?-1:1)*(((d==null?void 0:d.x)||0)-u),h=(s-12)/e,x=o.filter(function(U){var G;return(G=n[U])===null||G===void 0||(G=G.children)===null||G===void 0?void 0:G.length}),m=W(n,g.eventKey);if(c<y+K/2){var N=p.findIndex(function(U){return U.key===m.key}),E=N<=0?0:N-1,b=p[E].key;m=W(n,b)}var O=m.key,i=m,T=m.key,w=0,R=0;if(!x.includes(O))for(var $=0;$<h&&wt(m);$+=1)m=m.parent,R+=1;var I=t.data,_=m.node,M=!0;return Mt(m)&&m.level===0&&c<y+K/2&&v({dragNode:I,dropNode:_,dropPosition:-1})&&m.key===g.eventKey?w=-1:(i.children||[]).length&&x.includes(T)?v({dragNode:I,dropNode:_,dropPosition:0})?w=0:M=!1:R===0?h>-1.5?v({dragNode:I,dropNode:_,dropPosition:1})?w=1:M=!1:v({dragNode:I,dropNode:_,dropPosition:0})?w=0:v({dragNode:I,dropNode:_,dropPosition:1})?w=1:M=!1:v({dragNode:I,dropNode:_,dropPosition:1})?w=1:M=!1,{dropPosition:w,dropLevelOffset:R,dropTargetKey:m.key,dropTargetPos:m.pos,dragOverNodeKey:T,dropContainerKey:w===0?null:((l=m.parent)===null||l===void 0?void 0:l.key)||null,dropAllowed:M}}function Xe(a,t){if(a){var g=t.multiple;return g?a.slice():a.length?[a[0]]:a}}function Ge(a){if(!a)return null;var t;if(Array.isArray(a))t={checkedKeys:a,halfCheckedKeys:void 0};else if(je(a)==="object")t={checkedKeys:a.checked||void 0,halfCheckedKeys:a.halfChecked||void 0};else return ne(!1,"`checkedKeys` is not an array or an object"),null;return t}function Je(a,t){var g=new Set;function e(d){if(!g.has(d)){var v=W(t,d);if(v){g.add(d);var p=v.parent,n=v.node;n.disabled||p&&e(p.key)}}}return(a||[]).forEach(function(d){e(d)}),ue(g)}var Lt=function(t){var g=t.dropPosition,e=t.dropLevelOffset,d=t.indent,v={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(g){case-1:v.top=0,v.left=-e*d;break;case 1:v.bottom=0,v.left=-e*d;break;case 0:v.bottom=0,v.left=d;break}return L.createElement("div",{style:v})};function Rt(a,t){var g=D.useState(!1),e=te(g,2),d=e[0],v=e[1];Re(function(){if(d)return a(),function(){t()}},[d]),Re(function(){return v(!0),function(){v(!1)}},[])}var _t=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],$t=D.forwardRef(function(a,t){var g=a.className,e=a.style,d=a.motion,v=a.motionNodes,p=a.motionType,n=a.onMotionStart,o=a.onMotionEnd,r=a.active,l=a.treeNodeRequiredProps,u=Ae(a,_t),c=D.useState(!0),f=te(c,2),y=f[0],K=f[1],s=D.useContext(He),h=s.prefixCls,x=v&&p!=="hide";Re(function(){v&&x!==y&&K(x)},[v]);var m=function(){v&&n()},N=D.useRef(!1),E=function(){v&&!N.current&&(N.current=!0,o())};Rt(m,E);var b=function(i){x===i&&E()};return v?D.createElement(yt,fe({ref:t,visible:y},d,{motionAppear:p==="show",onVisibleChanged:b}),function(O,i){var T=O.className,w=O.style;return D.createElement("div",{ref:i,className:Y("".concat(h,"-treenode-motion"),T),style:w},v.map(function(R){var $=Object.assign({},(at(R.data),R.data)),I=R.title,_=R.key,M=R.isStart,U=R.isEnd;delete $.children;var G=Pe(_,l);return D.createElement($e,fe({},$,G,{title:I,active:r,data:R.data,key:_,isStart:M,isEnd:U}))}))}):D.createElement($e,fe({domRef:t,className:g,style:e},u,{active:r}))});function At(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],g=a.length,e=t.length;if(Math.abs(g-e)!==1)return{add:!1,key:null};function d(v,p){var n=new Map;v.forEach(function(r){n.set(r,!0)});var o=p.filter(function(r){return!n.has(r)});return o.length===1?o[0]:null}return g<e?{add:!0,key:d(a,t)}:{add:!1,key:d(t,a)}}function Qe(a,t,g){var e=a.findIndex(function(n){return n.key===g}),d=a[e+1],v=t.findIndex(function(n){return n.key===g});if(d){var p=t.findIndex(function(n){return n.key===d.key});return t.slice(v+1,p)}return t.slice(v+1)}var It=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","scrollWidth","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],Ze={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Ft=function(){},ve="RC_TREE_MOTION_".concat(Math.random()),We={key:ve},it={key:ve,level:0,index:0,pos:"0",node:We,nodes:[We]},et={parent:null,children:[],pos:it.pos,data:We,title:null,key:ve,isStart:[],isEnd:[]};function tt(a,t,g,e){return t===!1||!g?a:a.slice(0,Math.ceil(g/e)+1)}function nt(a){var t=a.key,g=a.pos;return Te(t,g)}function Ut(a){for(var t=String(a.data.key),g=a;g.parent;)g=g.parent,t="".concat(g.data.key," > ").concat(t);return t}var Bt=D.forwardRef(function(a,t){var g=a.prefixCls,e=a.data;a.selectable,a.checkable;var d=a.expandedKeys,v=a.selectedKeys,p=a.checkedKeys,n=a.loadedKeys,o=a.loadingKeys,r=a.halfCheckedKeys,l=a.keyEntities,u=a.disabled,c=a.dragging,f=a.dragOverNodeKey,y=a.dropPosition,K=a.motion,s=a.height,h=a.itemHeight,x=a.virtual,m=a.scrollWidth,N=a.focusable,E=a.activeItem,b=a.focused,O=a.tabIndex,i=a.onKeyDown,T=a.onFocus,w=a.onBlur,R=a.onActiveChange,$=a.onListChangeStart,I=a.onListChangeEnd,_=Ae(a,It),M=D.useRef(null),U=D.useRef(null);D.useImperativeHandle(t,function(){return{scrollTo:function(q){M.current.scrollTo(q)},getIndentWidth:function(){return U.current.offsetWidth}}});var G=D.useState(d),ae=te(G,2),xe=ae[0],ge=ae[1],he=D.useState(e),re=te(he,2),H=re[0],oe=re[1],j=D.useState(e),ye=te(j,2),Ee=ye[0],Q=ye[1],be=D.useState([]),pe=te(be,2),Z=pe[0],de=pe[1],De=D.useState(null),z=te(De,2),Ie=z[0],Ke=z[1],we=D.useRef(e);we.current=e;function Se(){var A=we.current;oe(A),Q(A),de([]),Ke(null),I()}Re(function(){ge(d);var A=At(xe,d);if(A.key!==null)if(A.add){var q=H.findIndex(function(se){var ce=se.key;return ce===A.key}),X=tt(Qe(H,e,A.key),x,s,h),Ne=H.slice();Ne.splice(q+1,0,et),Q(Ne),de(X),Ke("show")}else{var ie=e.findIndex(function(se){var ce=se.key;return ce===A.key}),Oe=tt(Qe(e,H,A.key),x,s,h),le=e.slice();le.splice(ie+1,0,et),Q(le),de(Oe),Ke("hide")}else H!==e&&(oe(e),Q(e))},[d,e]),D.useEffect(function(){c||Se()},[c]);var me=K?Ee:e,ke={expandedKeys:d,selectedKeys:v,loadedKeys:n,loadingKeys:o,checkedKeys:p,halfCheckedKeys:r,dragOverNodeKey:f,dropPosition:y,keyEntities:l};return D.createElement(D.Fragment,null,b&&E&&D.createElement("span",{style:Ze,"aria-live":"assertive"},Ut(E)),D.createElement("div",null,D.createElement("input",{style:Ze,disabled:N===!1||u,tabIndex:N!==!1?O:null,onKeyDown:i,onFocus:T,onBlur:w,value:"",onChange:Ft,"aria-label":"for screen reader"})),D.createElement("div",{className:"".concat(g,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},D.createElement("div",{className:"".concat(g,"-indent")},D.createElement("div",{ref:U,className:"".concat(g,"-indent-unit")}))),D.createElement(ht,fe({},_,{data:me,itemKey:nt,height:s,fullHeight:!1,virtual:x,itemHeight:h,scrollWidth:m,prefixCls:"".concat(g,"-list"),ref:M,role:"tree",onVisibleChange:function(q){q.every(function(X){return nt(X)!==ve})&&Se()}}),function(A){var q=A.pos,X=Object.assign({},(at(A.data),A.data)),Ne=A.title,ie=A.key,Oe=A.isStart,le=A.isEnd,se=Te(ie,q);delete X.key,delete X.children;var ce=Pe(se,ke);return D.createElement($t,fe({},X,ce,{title:Ne,active:!!E&&ie===E.key,pos:q,data:A.data,isStart:Oe,isEnd:le,motion:K,motionNodes:ie===ve?Z:null,motionType:Ie,onMotionStart:$,onMotionEnd:Se,treeNodeRequiredProps:ke,onMouseMove:function(){R(null)}}))}))}),Gt=10,lt=function(a){st(g,a);var t=ct(g);function g(){var e;ut(this,g);for(var d=arguments.length,v=new Array(d),p=0;p<d;p++)v[p]=arguments[p];return e=t.call.apply(t,[this].concat(v)),k(S(e),"destroyed",!1),k(S(e),"delayedDragEnterLogic",void 0),k(S(e),"loadingRetryTimes",{}),k(S(e),"state",{keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:_e()}),k(S(e),"dragStartMousePosition",null),k(S(e),"dragNodeProps",null),k(S(e),"currentMouseOverDroppableNodeKey",null),k(S(e),"listRef",D.createRef()),k(S(e),"onNodeDragStart",function(n,o){var r=e.state,l=r.expandedKeys,u=r.keyEntities,c=e.props.onDragStart,f=o.eventKey;e.dragNodeProps=o,e.dragStartMousePosition={x:n.clientX,y:n.clientY};var y=J(l,f);e.setState({draggingNodeKey:f,dragChildrenKeys:Tt(f,u),indent:e.listRef.current.getIndentWidth()}),e.setExpandedKeys(y),window.addEventListener("dragend",e.onWindowDragEnd),c==null||c({event:n,node:F(o)})}),k(S(e),"onNodeDragEnter",function(n,o){var r=e.state,l=r.expandedKeys,u=r.keyEntities,c=r.dragChildrenKeys,f=r.flattenNodes,y=r.indent,K=e.props,s=K.onDragEnter,h=K.onExpand,x=K.allowDrop,m=K.direction,N=o.pos,E=o.eventKey;if(e.currentMouseOverDroppableNodeKey!==E&&(e.currentMouseOverDroppableNodeKey=E),!e.dragNodeProps){e.resetDragState();return}var b=ze(n,e.dragNodeProps,o,y,e.dragStartMousePosition,x,f,u,l,m),O=b.dropPosition,i=b.dropLevelOffset,T=b.dropTargetKey,w=b.dropContainerKey,R=b.dropTargetPos,$=b.dropAllowed,I=b.dragOverNodeKey;if(c.includes(T)||!$){e.resetDragState();return}if(e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach(function(_){clearTimeout(e.delayedDragEnterLogic[_])}),e.dragNodeProps.eventKey!==o.eventKey&&(n.persist(),e.delayedDragEnterLogic[N]=window.setTimeout(function(){if(e.state.draggingNodeKey!==null){var _=ue(l),M=W(u,o.eventKey);M&&(M.children||[]).length&&(_=ee(l,o.eventKey)),e.props.hasOwnProperty("expandedKeys")||e.setExpandedKeys(_),h==null||h(_,{node:F(o),expanded:!0,nativeEvent:n.nativeEvent})}},800)),e.dragNodeProps.eventKey===T&&i===0){e.resetDragState();return}e.setState({dragOverNodeKey:I,dropPosition:O,dropLevelOffset:i,dropTargetKey:T,dropContainerKey:w,dropTargetPos:R,dropAllowed:$}),s==null||s({event:n,node:F(o),expandedKeys:l})}),k(S(e),"onNodeDragOver",function(n,o){var r=e.state,l=r.dragChildrenKeys,u=r.flattenNodes,c=r.keyEntities,f=r.expandedKeys,y=r.indent,K=e.props,s=K.onDragOver,h=K.allowDrop,x=K.direction;if(e.dragNodeProps){var m=ze(n,e.dragNodeProps,o,y,e.dragStartMousePosition,h,u,c,f,x),N=m.dropPosition,E=m.dropLevelOffset,b=m.dropTargetKey,O=m.dropContainerKey,i=m.dropTargetPos,T=m.dropAllowed,w=m.dragOverNodeKey;l.includes(b)||!T||(e.dragNodeProps.eventKey===b&&E===0?e.state.dropPosition===null&&e.state.dropLevelOffset===null&&e.state.dropTargetKey===null&&e.state.dropContainerKey===null&&e.state.dropTargetPos===null&&e.state.dropAllowed===!1&&e.state.dragOverNodeKey===null||e.resetDragState():N===e.state.dropPosition&&E===e.state.dropLevelOffset&&b===e.state.dropTargetKey&&O===e.state.dropContainerKey&&i===e.state.dropTargetPos&&T===e.state.dropAllowed&&w===e.state.dragOverNodeKey||e.setState({dropPosition:N,dropLevelOffset:E,dropTargetKey:b,dropContainerKey:O,dropTargetPos:i,dropAllowed:T,dragOverNodeKey:w}),s==null||s({event:n,node:F(o)}))}}),k(S(e),"onNodeDragLeave",function(n,o){e.currentMouseOverDroppableNodeKey===o.eventKey&&!n.currentTarget.contains(n.relatedTarget)&&(e.resetDragState(),e.currentMouseOverDroppableNodeKey=null);var r=e.props.onDragLeave;r==null||r({event:n,node:F(o)})}),k(S(e),"onWindowDragEnd",function(n){e.onNodeDragEnd(n,null,!0),window.removeEventListener("dragend",e.onWindowDragEnd)}),k(S(e),"onNodeDragEnd",function(n,o){var r=e.props.onDragEnd;e.setState({dragOverNodeKey:null}),e.cleanDragState(),r==null||r({event:n,node:F(o)}),e.dragNodeProps=null,window.removeEventListener("dragend",e.onWindowDragEnd)}),k(S(e),"onNodeDrop",function(n,o){var r,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u=e.state,c=u.dragChildrenKeys,f=u.dropPosition,y=u.dropTargetKey,K=u.dropTargetPos,s=u.dropAllowed;if(s){var h=e.props.onDrop;if(e.setState({dragOverNodeKey:null}),e.cleanDragState(),y!==null){var x=B(B({},Pe(y,e.getTreeNodeRequiredProps())),{},{active:((r=e.getActiveItem())===null||r===void 0?void 0:r.key)===y,data:W(e.state.keyEntities,y).node}),m=c.includes(y);ne(!m,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var N=qe(K),E={event:n,node:F(x),dragNode:e.dragNodeProps?F(e.dragNodeProps):null,dragNodesKeys:[e.dragNodeProps.eventKey].concat(c),dropToGap:f!==0,dropPosition:f+Number(N[N.length-1])};l||h==null||h(E),e.dragNodeProps=null}}}),k(S(e),"cleanDragState",function(){var n=e.state.draggingNodeKey;n!==null&&e.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),e.dragStartMousePosition=null,e.currentMouseOverDroppableNodeKey=null}),k(S(e),"triggerExpandActionExpand",function(n,o){var r=e.state,l=r.expandedKeys,u=r.flattenNodes,c=o.expanded,f=o.key,y=o.isLeaf;if(!(y||n.shiftKey||n.metaKey||n.ctrlKey)){var K=u.filter(function(h){return h.key===f})[0],s=F(B(B({},Pe(f,e.getTreeNodeRequiredProps())),{},{data:K.data}));e.setExpandedKeys(c?J(l,f):ee(l,f)),e.onNodeExpand(n,s)}}),k(S(e),"onNodeClick",function(n,o){var r=e.props,l=r.onClick,u=r.expandAction;u==="click"&&e.triggerExpandActionExpand(n,o),l==null||l(n,o)}),k(S(e),"onNodeDoubleClick",function(n,o){var r=e.props,l=r.onDoubleClick,u=r.expandAction;u==="doubleClick"&&e.triggerExpandActionExpand(n,o),l==null||l(n,o)}),k(S(e),"onNodeSelect",function(n,o){var r=e.state.selectedKeys,l=e.state,u=l.keyEntities,c=l.fieldNames,f=e.props,y=f.onSelect,K=f.multiple,s=o.selected,h=o[c.key],x=!s;x?K?r=ee(r,h):r=[h]:r=J(r,h);var m=r.map(function(N){var E=W(u,N);return E?E.node:null}).filter(Boolean);e.setUncontrolledState({selectedKeys:r}),y==null||y(r,{event:"select",selected:x,node:o,selectedNodes:m,nativeEvent:n.nativeEvent})}),k(S(e),"onNodeCheck",function(n,o,r){var l=e.state,u=l.keyEntities,c=l.checkedKeys,f=l.halfCheckedKeys,y=e.props,K=y.checkStrictly,s=y.onCheck,h=o.key,x,m={event:"check",node:o,checked:r,nativeEvent:n.nativeEvent};if(K){var N=r?ee(c,h):J(c,h),E=J(f,h);x={checked:N,halfChecked:E},m.checkedNodes=N.map(function(R){return W(u,R)}).filter(Boolean).map(function(R){return R.node}),e.setUncontrolledState({checkedKeys:N})}else{var b=Be([].concat(ue(c),[h]),!0,u),O=b.checkedKeys,i=b.halfCheckedKeys;if(!r){var T=new Set(O);T.delete(h);var w=Be(Array.from(T),{halfCheckedKeys:i},u);O=w.checkedKeys,i=w.halfCheckedKeys}x=O,m.checkedNodes=[],m.checkedNodesPositions=[],m.halfCheckedKeys=i,O.forEach(function(R){var $=W(u,R);if($){var I=$.node,_=$.pos;m.checkedNodes.push(I),m.checkedNodesPositions.push({node:I,pos:_})}}),e.setUncontrolledState({checkedKeys:O},!1,{halfCheckedKeys:i})}s==null||s(x,m)}),k(S(e),"onNodeLoad",function(n){var o,r=n.key,l=e.state.keyEntities,u=W(l,r);if(!(u!=null&&(o=u.children)!==null&&o!==void 0&&o.length)){var c=new Promise(function(f,y){e.setState(function(K){var s=K.loadedKeys,h=s===void 0?[]:s,x=K.loadingKeys,m=x===void 0?[]:x,N=e.props,E=N.loadData,b=N.onLoad;if(!E||h.includes(r)||m.includes(r))return null;var O=E(n);return O.then(function(){var i=e.state.loadedKeys,T=ee(i,r);b==null||b(T,{event:"load",node:n}),e.setUncontrolledState({loadedKeys:T}),e.setState(function(w){return{loadingKeys:J(w.loadingKeys,r)}}),f()}).catch(function(i){if(e.setState(function(w){return{loadingKeys:J(w.loadingKeys,r)}}),e.loadingRetryTimes[r]=(e.loadingRetryTimes[r]||0)+1,e.loadingRetryTimes[r]>=Gt){var T=e.state.loadedKeys;ne(!1,"Retry for `loadData` many times but still failed. No more retry."),e.setUncontrolledState({loadedKeys:ee(T,r)}),f()}y(i)}),{loadingKeys:ee(m,r)}})});return c.catch(function(){}),c}}),k(S(e),"onNodeMouseEnter",function(n,o){var r=e.props.onMouseEnter;r==null||r({event:n,node:o})}),k(S(e),"onNodeMouseLeave",function(n,o){var r=e.props.onMouseLeave;r==null||r({event:n,node:o})}),k(S(e),"onNodeContextMenu",function(n,o){var r=e.props.onRightClick;r&&(n.preventDefault(),r({event:n,node:o}))}),k(S(e),"onFocus",function(){var n=e.props.onFocus;e.setState({focused:!0});for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];n==null||n.apply(void 0,r)}),k(S(e),"onBlur",function(){var n=e.props.onBlur;e.setState({focused:!1}),e.onActiveChange(null);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];n==null||n.apply(void 0,r)}),k(S(e),"getTreeNodeRequiredProps",function(){var n=e.state,o=n.expandedKeys,r=n.selectedKeys,l=n.loadedKeys,u=n.loadingKeys,c=n.checkedKeys,f=n.halfCheckedKeys,y=n.dragOverNodeKey,K=n.dropPosition,s=n.keyEntities;return{expandedKeys:o||[],selectedKeys:r||[],loadedKeys:l||[],loadingKeys:u||[],checkedKeys:c||[],halfCheckedKeys:f||[],dragOverNodeKey:y,dropPosition:K,keyEntities:s}}),k(S(e),"setExpandedKeys",function(n){var o=e.state,r=o.treeData,l=o.fieldNames,u=Ue(r,n,l);e.setUncontrolledState({expandedKeys:n,flattenNodes:u},!0)}),k(S(e),"onNodeExpand",function(n,o){var r=e.state.expandedKeys,l=e.state,u=l.listChanging,c=l.fieldNames,f=e.props,y=f.onExpand,K=f.loadData,s=o.expanded,h=o[c.key];if(!u){var x=r.includes(h),m=!s;if(ne(s&&x||!s&&!x,"Expand state not sync with index check"),r=m?ee(r,h):J(r,h),e.setExpandedKeys(r),y==null||y(r,{node:o,expanded:m,nativeEvent:n.nativeEvent}),m&&K){var N=e.onNodeLoad(o);N&&N.then(function(){var E=Ue(e.state.treeData,r,c);e.setUncontrolledState({flattenNodes:E})}).catch(function(){var E=e.state.expandedKeys,b=J(E,h);e.setExpandedKeys(b)})}}}),k(S(e),"onListChangeStart",function(){e.setUncontrolledState({listChanging:!0})}),k(S(e),"onListChangeEnd",function(){setTimeout(function(){e.setUncontrolledState({listChanging:!1})})}),k(S(e),"onActiveChange",function(n){var o=e.state.activeKey,r=e.props,l=r.onActiveChange,u=r.itemScrollOffset,c=u===void 0?0:u;o!==n&&(e.setState({activeKey:n}),n!==null&&e.scrollTo({key:n,offset:c}),l==null||l(n))}),k(S(e),"getActiveItem",function(){var n=e.state,o=n.activeKey,r=n.flattenNodes;return o===null?null:r.find(function(l){var u=l.key;return u===o})||null}),k(S(e),"offsetActiveKey",function(n){var o=e.state,r=o.flattenNodes,l=o.activeKey,u=r.findIndex(function(y){var K=y.key;return K===l});u===-1&&n<0&&(u=r.length),u=(u+n+r.length)%r.length;var c=r[u];if(c){var f=c.key;e.onActiveChange(f)}else e.onActiveChange(null)}),k(S(e),"onKeyDown",function(n){var o=e.state,r=o.activeKey,l=o.expandedKeys,u=o.checkedKeys,c=o.fieldNames,f=e.props,y=f.onKeyDown,K=f.checkable,s=f.selectable;switch(n.which){case Ce.UP:{e.offsetActiveKey(-1),n.preventDefault();break}case Ce.DOWN:{e.offsetActiveKey(1),n.preventDefault();break}}var h=e.getActiveItem();if(h&&h.data){var x=e.getTreeNodeRequiredProps(),m=h.data.isLeaf===!1||!!(h.data[c.children]||[]).length,N=F(B(B({},Pe(r,x)),{},{data:h.data,active:!0}));switch(n.which){case Ce.LEFT:{m&&l.includes(r)?e.onNodeExpand({},N):h.parent&&e.onActiveChange(h.parent.key),n.preventDefault();break}case Ce.RIGHT:{m&&!l.includes(r)?e.onNodeExpand({},N):h.children&&h.children.length&&e.onActiveChange(h.children[0].key),n.preventDefault();break}case Ce.ENTER:case Ce.SPACE:{K&&!N.disabled&&N.checkable!==!1&&!N.disableCheckbox?e.onNodeCheck({},N,!u.includes(r)):!K&&s&&!N.disabled&&N.selectable!==!1&&e.onNodeSelect({},N);break}}}y==null||y(n)}),k(S(e),"setUncontrolledState",function(n){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.destroyed){var l=!1,u=!0,c={};Object.keys(n).forEach(function(f){if(e.props.hasOwnProperty(f)){u=!1;return}l=!0,c[f]=n[f]}),l&&(!o||u)&&e.setState(B(B({},c),r))}}),k(S(e),"scrollTo",function(n){e.listRef.current.scrollTo(n)}),e}return ft(g,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var d=this.props,v=d.activeKey,p=d.itemScrollOffset,n=p===void 0?0:p;v!==void 0&&v!==this.state.activeKey&&(this.setState({activeKey:v}),v!==null&&this.scrollTo({key:v,offset:n}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var d=this.state,v=d.focused,p=d.flattenNodes,n=d.keyEntities,o=d.draggingNodeKey,r=d.activeKey,l=d.dropLevelOffset,u=d.dropContainerKey,c=d.dropTargetKey,f=d.dropPosition,y=d.dragOverNodeKey,K=d.indent,s=this.props,h=s.prefixCls,x=s.className,m=s.style,N=s.showLine,E=s.focusable,b=s.tabIndex,O=b===void 0?0:b,i=s.selectable,T=s.showIcon,w=s.icon,R=s.switcherIcon,$=s.draggable,I=s.checkable,_=s.checkStrictly,M=s.disabled,U=s.motion,G=s.loadData,ae=s.filterTreeNode,xe=s.height,ge=s.itemHeight,he=s.scrollWidth,re=s.virtual,H=s.titleRender,oe=s.dropIndicatorRender,j=s.onContextMenu,ye=s.onScroll,Ee=s.direction,Q=s.rootClassName,be=s.rootStyle,pe=rt(this.props,{aria:!0,data:!0}),Z;$&&(je($)==="object"?Z=$:typeof $=="function"?Z={nodeDraggable:$}:Z={});var de={prefixCls:h,selectable:i,showIcon:T,icon:w,switcherIcon:R,draggable:Z,draggingNodeKey:o,checkable:I,checkStrictly:_,disabled:M,keyEntities:n,dropLevelOffset:l,dropContainerKey:u,dropTargetKey:c,dropPosition:f,dragOverNodeKey:y,indent:K,direction:Ee,dropIndicatorRender:oe,loadData:G,filterTreeNode:ae,titleRender:H,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop};return D.createElement(He.Provider,{value:de},D.createElement("div",{className:Y(h,x,Q,k(k(k({},"".concat(h,"-show-line"),N),"".concat(h,"-focused"),v),"".concat(h,"-active-focused"),r!==null)),style:be},D.createElement(Bt,fe({ref:this.listRef,prefixCls:h,style:m,data:p,disabled:M,selectable:i,checkable:!!I,motion:U,dragging:o!==null,height:xe,itemHeight:ge,virtual:re,focusable:E,focused:v,tabIndex:O,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:j,onScroll:ye,scrollWidth:he},this.getTreeNodeRequiredProps(),pe))))}}],[{key:"getDerivedStateFromProps",value:function(d,v){var p=v.prevProps,n={prevProps:d};function o(O){return!p&&d.hasOwnProperty(O)||p&&p[O]!==d[O]}var r,l=v.fieldNames;if(o("fieldNames")&&(l=_e(d.fieldNames),n.fieldNames=l),o("treeData")?r=d.treeData:o("children")&&(ne(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),r=mt(d.children)),r){n.treeData=r;var u=Nt(r,{fieldNames:l});n.keyEntities=B(k({},ve,it),u.keyEntities)}var c=n.keyEntities||v.keyEntities;if(o("expandedKeys")||p&&o("autoExpandParent"))n.expandedKeys=d.autoExpandParent||!p&&d.defaultExpandParent?Je(d.expandedKeys,c):d.expandedKeys;else if(!p&&d.defaultExpandAll){var f=B({},c);delete f[ve];var y=[];Object.keys(f).forEach(function(O){var i=f[O];i.children&&i.children.length&&y.push(i.key)}),n.expandedKeys=y}else!p&&d.defaultExpandedKeys&&(n.expandedKeys=d.autoExpandParent||d.defaultExpandParent?Je(d.defaultExpandedKeys,c):d.defaultExpandedKeys);if(n.expandedKeys||delete n.expandedKeys,r||n.expandedKeys){var K=Ue(r||v.treeData,n.expandedKeys||v.expandedKeys,l);n.flattenNodes=K}if(d.selectable&&(o("selectedKeys")?n.selectedKeys=Xe(d.selectedKeys,d):!p&&d.defaultSelectedKeys&&(n.selectedKeys=Xe(d.defaultSelectedKeys,d))),d.checkable){var s;if(o("checkedKeys")?s=Ge(d.checkedKeys)||{}:!p&&d.defaultCheckedKeys?s=Ge(d.defaultCheckedKeys)||{}:r&&(s=Ge(d.checkedKeys)||{checkedKeys:v.checkedKeys,halfCheckedKeys:v.halfCheckedKeys}),s){var h=s,x=h.checkedKeys,m=x===void 0?[]:x,N=h.halfCheckedKeys,E=N===void 0?[]:N;if(!d.checkStrictly){var b=Be(m,!0,c);m=b.checkedKeys,E=b.halfCheckedKeys}n.checkedKeys=m,n.halfCheckedKeys=E}}return o("loadedKeys")&&(n.loadedKeys=d.loadedKeys),n}}]),g}(D.Component);k(lt,"defaultProps",{prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:Lt,allowDrop:function(){return!0},expandAction:!1});k(lt,"TreeNode",$e);export{lt as T,Be as a,J as b,Nt as c,ee as d,Je as e,_e as f,mt as g,$e as h};
