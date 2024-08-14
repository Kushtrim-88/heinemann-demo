var webview=function(w){"use strict";var Tt=Object.defineProperty,Mt=Object.defineProperties;var Pt=Object.getOwnPropertyDescriptors;var Fe=Object.getOwnPropertySymbols;var It=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var Be=(w,f,g)=>f in w?Tt(w,f,{enumerable:!0,configurable:!0,writable:!0,value:g}):w[f]=g,S=(w,f)=>{for(var g in f||(f={}))It.call(f,g)&&Be(w,g,f[g]);if(Fe)for(var g of Fe(f))Rt.call(f,g)&&Be(w,g,f[g]);return w},D=(w,f)=>Mt(w,Pt(f));var b;const f=(o,e)=>[...e.querySelectorAll(o)],g=o=>{const t=new DOMParser().parseFromString(o,"text/html");return{head:t.querySelector("head"),body:t.querySelector("body")}},ze=(o,e,t)=>{const i=new RegExp(`heyflow\\[(?:'|")${e}(?:'|")\\]`,"g"),n=`heyflow['${t}']`;o.head.innerHTML=o.head.innerHTML.replace(i,n),o.body.innerHTML=o.body.innerHTML.replace(i,n);const s=o.head.querySelector("#window-props");return s&&(s.innerHTML=s.innerHTML.replace(e,t)),o},me=()=>{const o=document.querySelectorAll("heyflow-wrapper");return Array.from(o).reduce((e,t)=>{const i=t.getAttribute("flow-id");return i&&e.push(i),e},[])},qe=()=>({VITE_FLOW_URL_PATTERN:"https://heyflow-serve.ey.r.appspot.com/[FLOW_ID]",VITE_API_ENDPOINT:"https://zenflow-api.ey.r.appspot.com"}),We=o=>{for(const[e,t]of Object.entries(o))if(t===void 0)throw new Error(`Missing variable ${e} in env`);return o},je=qe(),fe=We(je),{VITE_API_ENDPOINT:Ve}=fe,V=async({flowID:o,embeddedFlowIDs:e,message:t,severity:i,data:n})=>{const s=S({flowID:o,embeddedFlowIDs:e,message:t,severity:i,userAgent:window.navigator.userAgent,hostname:window.location.hostname,pathname:window.location.pathname},n?{data:n}:{});await fetch(`${Ve}/widget/logs`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).catch(r=>{console.error("Error sending widget log:",r,s)})},A=({message:o,error:e,flowID:t})=>{const i={message:o,severity:"error",data:{error:`${e.name} ${e.message}`}};if(t)V(D(S({},i),{flowID:t}));else{const n=me();n.length>0&&V(D(S({},i),{embeddedFlowIDs:n}))}};window.addEventListener("unhandledrejection",o=>{var i;const e=(i=o.reason)==null?void 0:i.stack;if(!(e!=null&&e.includes("/webview.js")))return;const t=me();t.length>0&&V({embeddedFlowIDs:t,message:"Unhandled rejection",severity:"error",data:{error:`${o.reason}`}})}),Promise.resolve().then(()=>at).then(o=>o.default()).catch(o=>{console.error(o),A({message:"Failed to import loader-element",error:o})}),Promise.resolve().then(()=>mt).then(o=>o.default()).catch(o=>{console.error(o),A({message:"Failed to import modal-element",error:o})}),Promise.resolve().then(()=>St).then(o=>o.default()).catch(o=>{console.error(o),A({message:"Failed to import heyflow-wrapper",error:o})});const Ye="heyflowWidget";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),we=new Map;let ye=class{constructor(e,t){if(this._$cssResult$=!0,t!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=we.get(this.cssText);return J&&e===void 0&&(we.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}};const ge=o=>new ye(typeof o=="string"?o:o+"",Q),Z=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new ye(t,Q)},Ke=(o,e)=>{J?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),n=window.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,o.appendChild(i)})},ve=J?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ge(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const _e=window.trustedTypes,Ge=_e?_e.emptyScript:"",be=window.reactiveElementPolyfillSupport,ee={toAttribute(o,e){switch(e){case Boolean:o=o?Ge:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch(i){t=null}}return t}},$e=(o,e)=>e!==o&&(e==e||o==o),te={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:$e};let R=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const n=this._$Eh(i,t);n!==void 0&&(this._$Eu.set(n,i),e.push(n))}),e}static createProperty(e,t=te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||te}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(ve(n))}else e!==void 0&&t.push(ve(e));return t}static _$Eh(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ke(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=te){var n,s;const r=this.constructor._$Eh(e,i);if(r!==void 0&&i.reflect===!0){const h=((s=(n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&s!==void 0?s:ee.toAttribute)(t,i.type);this._$Ei=e,h==null?this.removeAttribute(r):this.setAttribute(r,h),this._$Ei=null}}_$AK(e,t){var i,n,s;const r=this.constructor,h=r._$Eu.get(e);if(h!==void 0&&this._$Ei!==h){const l=r.getPropertyOptions(h),a=l.converter,p=(s=(n=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&s!==void 0?s:ee.fromAttribute;this._$Ei=h,this[h]=p(t,l.type),this._$Ei=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||$e)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,s)=>this[s]=n),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$ES(i,this[i],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};R.finalized=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},be==null||be({ReactiveElement:R}),((X=globalThis.reactiveElementVersions)!==null&&X!==void 0?X:globalThis.reactiveElementVersions=[]).push("1.3.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ie;const k=globalThis.trustedTypes,Ee=k?k.createPolicy("lit-html",{createHTML:o=>o}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,Se="?"+x,Je=`<${Se}>`,H=document,F=(o="")=>H.createComment(o),B=o=>o===null||typeof o!="object"&&typeof o!="function",Ae=Array.isArray,Qe=o=>{var e;return Ae(o)||typeof((e=o)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Ce=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Oe=/'/g,Te=/"/g,Me=/^(?:script|style|textarea|title)$/i,Ze=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),C=Ze(1),O=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Pe=new WeakMap,Xe=(o,e,t)=>{var i,n;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let r=s._$litPart$;if(r===void 0){const h=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=r=new W(e.insertBefore(F(),h),h,void 0,t!=null?t:{})}return r._$AI(o),r},L=H.createTreeWalker(H,129,null,!1),et=(o,e)=>{const t=o.length-1,i=[];let n,s=e===2?"<svg>":"",r=z;for(let l=0;l<t;l++){const a=o[l];let p,d,c=-1,m=0;for(;m<a.length&&(r.lastIndex=m,d=r.exec(a),d!==null);)m=r.lastIndex,r===z?d[1]==="!--"?r=xe:d[1]!==void 0?r=Ce:d[2]!==void 0?(Me.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=P):d[3]!==void 0&&(r=P):r===P?d[0]===">"?(r=n!=null?n:z,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,p=d[1],r=d[3]===void 0?P:d[3]==='"'?Te:Oe):r===Te||r===Oe?r=P:r===xe||r===Ce?r=z:(r=P,n=void 0);const _=r===P&&o[l+1].startsWith("/>")?" ":"";s+=r===z?a+Je:c>=0?(i.push(p),a.slice(0,c)+"$lit$"+a.slice(c)+x+_):a+x+(c===-2?(i.push(void 0),l):_)}const h=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ee!==void 0?Ee.createHTML(h):h,i]};class q{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let s=0,r=0;const h=e.length-1,l=this.parts,[a,p]=et(e,t);if(this.el=q.createElement(a,i),L.currentNode=this.el.content,t===2){const d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=L.nextNode())!==null&&l.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(x)){const m=p[r++];if(d.push(c),m!==void 0){const _=n.getAttribute(m.toLowerCase()+"$lit$").split(x),$=/([.?@])?(.*)/.exec(m);l.push({type:1,index:s,name:$[2],strings:_,ctor:$[1]==="."?it:$[1]==="?"?ot:$[1]==="@"?st:Y})}else l.push({type:6,index:s})}for(const c of d)n.removeAttribute(c)}if(Me.test(n.tagName)){const d=n.textContent.split(x),c=d.length-1;if(c>0){n.textContent=k?k.emptyScript:"";for(let m=0;m<c;m++)n.append(d[m],F()),L.nextNode(),l.push({type:2,index:++s});n.append(d[c],F())}}}else if(n.nodeType===8)if(n.data===Se)l.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(x,d+1))!==-1;)l.push({type:7,index:s}),d+=x.length-1}s++}}static createElement(e,t){const i=H.createElement("template");return i.innerHTML=e,i}}function N(o,e,t=o,i){var n,s,r,h;if(e===O)return e;let l=i!==void 0?(n=t._$Cl)===null||n===void 0?void 0:n[i]:t._$Cu;const a=B(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,t,i)),i!==void 0?((r=(h=t)._$Cl)!==null&&r!==void 0?r:h._$Cl=[])[i]=l:t._$Cu=l),l!==void 0&&(e=N(o,l._$AS(o,e.values),l,i)),e}class tt{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:n}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:H).importNode(i,!0);L.currentNode=s;let r=L.nextNode(),h=0,l=0,a=n[0];for(;a!==void 0;){if(h===a.index){let p;a.type===2?p=new W(r,r.nextSibling,this,e):a.type===1?p=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(p=new rt(r,this,e)),this.v.push(p),a=n[++l]}h!==(a==null?void 0:a.index)&&(r=L.nextNode(),h++)}return s}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class W{constructor(e,t,i,n){var s;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cg=(s=n==null?void 0:n.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),B(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==O&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Qe(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==u&&B(this._$AH)?this._$AA.nextSibling.data=e:this.k(H.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=q.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.m(i);else{const r=new tt(s,this),h=r.p(this.options);r.m(i),this.k(h),this._$AH=r}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new q(e)),t}S(e){Ae(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const s of e)n===t.length?t.push(i=new W(this.M(F()),this.M(F()),this,this.options)):i=t[n],i._$AI(s),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Y{constructor(e,t,i,n,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const s=this.strings;let r=!1;if(s===void 0)e=N(this,e,t,0),r=!B(e)||e!==this._$AH&&e!==O,r&&(this._$AH=e);else{const h=e;let l,a;for(e=s[0],l=0;l<s.length-1;l++)a=N(this,h[i+l],t,l),a===O&&(a=this._$AH[l]),r||(r=!B(a)||a!==this._$AH[l]),a===u?e=u:e!==u&&(e+=(a!=null?a:"")+s[l+1]),this._$AH[l]=a}r&&!n&&this.C(e)}C(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class it extends Y{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===u?void 0:e}}const nt=k?k.emptyScript:"";class ot extends Y{constructor(){super(...arguments),this.type=4}C(e){e&&e!==u?this.element.setAttribute(this.name,nt):this.element.removeAttribute(this.name)}}class st extends Y{constructor(e,t,i,n,s){super(e,t,i,n,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=N(this,e,t,0))!==null&&i!==void 0?i:u)===O)return;const n=this._$AH,s=e===u&&n!==u||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==u&&(n===u||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class rt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const Ie=window.litHtmlPolyfillSupport;Ie==null||Ie(q,W),((ie=globalThis.litHtmlVersions)!==null&&ie!==void 0?ie:globalThis.litHtmlVersions=[]).push("2.2.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne,oe;class I extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return O}}I.finalized=!0,I._$litElement$=!0,(ne=globalThis.litElementHydrateSupport)===null||ne===void 0||ne.call(globalThis,{LitElement:I});const Re=globalThis.litElementPolyfillSupport;Re==null||Re({LitElement:I}),((oe=globalThis.litElementVersions)!==null&&oe!==void 0?oe:globalThis.litElementVersions=[]).push("3.2.0");function se(o,e){customElements.get(o)===void 0&&customElements.define(o,e)}const lt=()=>se("loader-element",K),ae=class ae extends I{render(){return C`<div>
      <svg
        id="dots"
        width="75px"
        height="16px"
        viewBox="0 0 132 70"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>dots</title>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="darkgrey"
          fill-rule="evenodd"
        >
          <g id="dots">
            <circle id="dot1" cx="-40" cy="35" r="35"></circle>
            <circle id="dot2" cx="65" cy="35" r="35"></circle>
            <circle id="dot3" cx="165" cy="35" r="35"></circle>
          </g>
        </g>
      </svg>
    </div>`}};ae.styles=Z`
    div {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 2rem;
    }
    img {
      width: 8rem;
    }
    #dots #dot1 {
      animation: load 0.8s infinite;
    }
    #dots #dot2 {
      animation: load 0.8s infinite;
      animation-delay: 0.1s;
    }
    #dots #dot3 {
      animation: load 0.8s infinite;
      animation-delay: 0.2s;
    }
    @keyframes load {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `;let K=ae;const at=Object.freeze(Object.defineProperty({__proto__:null,LoaderElement:K,default:lt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?D(S({},e),{finisher(t){t.createProperty(e.key,o)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function y(o){return(e,t)=>t!==void 0?((i,n,s)=>{n.constructor.createProperty(s,i)})(o,e,t):dt(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(o){return y(D(S({},o),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re;((re=window.HTMLSlotElement)===null||re===void 0?void 0:re.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=o=>(...e)=>({_$litDirective$:o,values:e});let Le=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=He(class extends Le{constructor(o){var e;if(super(o),o.type!==ke.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.et===void 0){this.et=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((t=this.st)===null||t===void 0)&&t.has(s))&&this.et.add(s);return this.render(e)}const n=o.element.classList;this.et.forEach(s=>{s in e||(n.remove(s),this.et.delete(s))});for(const s in e){const r=!!e[s];r===this.et.has(s)||!((i=this.st)===null||i===void 0)&&i.has(s)||(r?(n.add(s),this.et.add(s)):(n.remove(s),this.et.delete(s)))}return O}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=He(class extends Le{constructor(o){var e;if(super(o),o.type!==ke.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{const i=o[t];return i==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[e]){const{style:t}=o.element;if(this.ct===void 0){this.ct=new Set;for(const i in e)this.ct.add(i);return this.render(e)}this.ct.forEach(i=>{e[i]==null&&(this.ct.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const n=e[i];n!=null&&(this.ct.add(i),i.includes("-")?t.setProperty(i,n):t[i]=n)}return O}}),ht=`@keyframes slideInFromBottom {
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOutToBottom {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20%);
  }
}

.button-reset-mixin() {
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
}

.hey_fix {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.hey__open-modal-button {
  .button-reset-mixin();
  visibility: visible !important;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: block;
  font-family: 'Helvetica Neue', 'Helvetica', arial, sans-serif;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-size: 13px;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  opacity: 0.95;
  text-decoration: none;
  border-radius: 50%;
  box-shadow:
    rgba(0, 0, 0, 0.06) 0px 1px 6px 0px,
    rgba(0, 0, 0, 0.16) 0px 2px 32px 0px;
  height: 60px;
  width: 60px;

  &.rectangular {
    border-radius: 3px;
    padding: 18px 30px;
  }

  &:hover {
    opacity: 1;
  }

  svg {
    fill: white;
    transform: translateY(13px);
    height: 35px;
    width: 35px;
  }
}

.hey__hide {
  display: none;
}

.hey__modal-wrapper {
  margin: 0 auto;
  position: absolute;
  left: -10000px;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10000;
}

.hey__modal-wrapper-visible {
  visibility: visible !important;
  z-index: 1000;
  left: 0;
}

.hey__modal {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1001;
  transition: top 0.2s;
}

.hey__modal_web-component {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100vw;
}

.hey__modal-web-component-wrapper {
  position: absolute;
  z-index: 1001;
  overflow-y: scroll;
  scrollbar-width: none;
  width: fit-content;
  max-height: 100%;
  max-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::-webkit-scrollbar {
    display: none;
  }
}

.hey__modal-web-component-wrapper_with-close-btn {
  // space for the close button
  padding: 0 20px;
  max-width: calc(100% - 40px);

  &.hey__modal-web-component-wrapper_auto-width {
    padding: 0;
    max-width: 100%;
  }
}

.hey__modal-web-component-wrapper_auto-width {
  width: 100%;
}

.hey__modal-visible {
  opacity: 1;
  animation: 0.2s ease-out 0s 1 slideInFromBottom;
}

.hey__modal-hide {
  animation: 0.2s ease-out 0s 1 slideOutToBottom;
  opacity: 0;
  z-index: -1000;
}

.hey__modal-full-screen {
  top: 0 !important;
  left: 0 !important;
  height: 100%;
  width: 100% !important;
  overflow: scroll;

  ::slotted(heyflow-wrapper) {
    --heyflow-widget-height: 100%;
  }
}

.hey__modal-full-height {
  height: 100%;

  iframe {
    height: 100% !important;
  }
}

.hey__overlay {
  position: fixed;
  display: none;
  opacity: 0;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  width: 100%;
  z-index: -999;
  transition: background, 0.2s;
}

.hey__overlay-visible {
  display: block;
  opacity: 1;
  z-index: 999;
}

.hey__close-modal-button {
  .button-reset-mixin();
  visibility: visible;
  position: absolute;
  top: -25px;
  right: -25px;
  fill: #cececa;
  cursor: pointer;
  transition: top 0.2s ease 0s;

  svg {
    width: 18px;
    height: 18px;
  }
}

.hey__close-modal-button_web-component {
  top: 0;
  right: 0;
}

.hey__close-modal-button_full-screen {
  top: 5px;
  right: 5px;
}

.hey__modal-full-height .hey__close-modal-button {
  top: 0;
}

.hey__close-modal-button-mobile {
  .button-reset-mixin();
  display: none;
  position: fixed;
  fill: #cececa;
  cursor: pointer;
  top: initial;
  right: 50%;
  transform: translate(50%, 50%);
  // Check with positionModal();
  bottom: 30px;
  z-index: 1001;

  svg {
    box-sizing: initial;
    height: 20px;
    width: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
    padding: 7px;
  }
}

.hey__modal-wrapper-visible.hey__mobile {
  .hey__close-modal-button-mobile {
    display: block;
  }

  .hey__close-modal-button {
    display: none;
  }
}
`;var ct=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,T=(o,e,t,i)=>{for(var n=i>1?void 0:i?pt(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(n=(i?r(e,t,n):r(n))||n);return i&&n&&ct(e,t,n),n};const le="heyflow-modal-element:open",ut=()=>se("heyflow-modal-element",v),de=class de extends I{constructor(){super(...arguments),this.WIDGET_TAG_NAME="HEYFLOW-WRAPPER",this.bodyOverflow="",this.isFullscreen=!1,this.modalId="",this.overlayBackgroundColor="rgba(0, 0, 0, 0.6)",this.hideCloseButton=!1,this.isOpened=!1,this.areFlowStylesSet=!1,this.areFlowEventListenersSet=!1,this.doesFlowHaveWidth=!1,this.boundOnKeyDown=this.onKeyDown.bind(this),this.boundOnCustomEvent=this.onCustomEvent.bind(this),this.boundOnIframeMessage=this.onIframeMessage.bind(this)}connectedCallback(){var e;try{super.connectedCallback(),this.modalId||console.warn("Please set `modal-id`"),this.bodyOverflow=document.body.style.overflow,document.addEventListener("keydown",this.boundOnKeyDown),window.addEventListener(le,this.boundOnCustomEvent)}catch(t){const i=(e=this.querySelector(this.WIDGET_TAG_NAME.toLowerCase()))==null?void 0:e.getAttribute("flow-id");console.warn("An error occurred while initialising modal element",{error:t,flowID:i}),A({flowID:i,message:"Error initializing modal element",error:t})}}disconnectedCallback(){document.removeEventListener("keydown",this.boundOnKeyDown),window.removeEventListener("message",this.boundOnIframeMessage),window.removeEventListener(le,this.boundOnCustomEvent),super.disconnectedCallback()}openModal(){document.body.style.overflow="hidden",this.isOpened=!0,this.setPropertiesBasedOnWidget()}closeModal(){document.body.style.overflow=this.bodyOverflow,this.isOpened=!1}setPropertiesBasedOnWidget(){var e,t,i,n;if(this.slotChild||(this.slotChild=(t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot"))==null?void 0:t.assignedElements()[0]),((i=this.slotChild)==null?void 0:i.tagName)===this.WIDGET_TAG_NAME){!this.areFlowStylesSet&&!this.isFullscreen&&this.setStylesBasedOnFlow(),this.areFlowEventListenersSet||window.addEventListener("message",this.boundOnIframeMessage);const s=(n=this.slotChild)==null?void 0:n.getAttribute("style-config");let r={};if(s)try{r=JSON.parse(s)}catch(h){r={}}r.width&&(this.doesFlowHaveWidth=!0)}}onKeyDown(e){e.code==="Escape"&&this.closeModal()}onCustomEvent(e){var t;e.type===le&&((t=e.detail)==null?void 0:t.modalId)===this.modalId&&this.openModal()}setStylesBasedOnFlow(){var n,s,r,h;this.areFlowStylesSet=!0;const{"width-mid":e,"width-wide":t}=(r=(s=(n=window.heyflow)==null?void 0:n.constants)==null?void 0:s.STYLES)!=null?r:{"width-mid":800,"width-wide":1200},i=document.createElement("style");i.innerHTML=`
			@media screen and (min-width: ${e}) {
				.hey__modal-wrapper .hey__modal-web-component-wrapper {
					top: 50%;
					left: 50%;
					right: auto;
					bottom: auto;
					transform: translate(-50%, -50%);
					max-height: 90%;
					max-width: min(${e}, 80%);
					padding: 20px;
				}
			}

			@media screen and (min-width: ${t}) {
				.hey__modal-wrapper .hey__modal-web-component-wrapper {
					max-width: min(${t}, 60%);
				}
			}
		`,(h=this.shadowRoot)==null||h.appendChild(i)}onIframeMessage(e){var i,n;if(!e.data)return;let t;try{t=JSON.parse(e.data)}catch(s){return}if(["goToScreen","goBack"].includes(t.event)&&["","true"].includes(String((i=this.slotChild)==null?void 0:i.getAttribute("scroll-up-on-navigation")))){const s=(n=this.shadowRoot)==null?void 0:n.querySelector(".hey__modal-web-component-wrapper");s&&(s.scrollTop=0)}t.event==="closeModal"&&this.closeModal()}render(){return C`
      <div
        class=${j({"hey__modal-wrapper":!0,"hey__modal-wrapper-visible":this.isOpened})}
        style=${Ne({display:this.isOpened?"block":"none"})}
      >
        <div
          class=${j({hey__modal:!0,"hey__modal_web-component":!0,"hey__modal-visible":this.isOpened,"hey__modal-hide":!this.isOpened,"hey__modal-full-screen":this.isFullscreen})}
        >
          <div
            class=${j({"hey__modal-web-component-wrapper":!0,"hey__modal-web-component-wrapper_auto-width":!this.doesFlowHaveWidth,"hey__modal-web-component-wrapper_with-close-btn":!this.hideCloseButton})}
          >
            <slot></slot>
            ${this.hideCloseButton?C``:C`
                  <button
                    class=${j({"hey__close-modal-button":!0,"hey__close-modal-button_web-component":!0,"hey__close-modal-button_full-screen":this.isFullscreen})}
                    @click="${this.closeModal}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                      ></path>
                      <path d="M0 0h24v24H0z" fill="none"></path>
                    </svg>
                  </button>
                `}
          </div>
          <div
            class=${j({hey__overlay:!0,"hey__overlay-visible":this.isOpened})}
            style="background-color: ${this.overlayBackgroundColor}"
            @click="${this.closeModal}"
          ></div>
        </div>
      </div>
    `}};de.styles=Z`
    ${ge(ht.toString())}
  `;let v=de;T([y({attribute:"full-screen",type:Boolean})],v.prototype,"isFullscreen",2),T([y({attribute:"modal-id",type:String})],v.prototype,"modalId",2),T([y({attribute:"overlay-background-color",type:String})],v.prototype,"overlayBackgroundColor",2),T([y({attribute:"hide-close-button",type:Boolean})],v.prototype,"hideCloseButton",2),T([G()],v.prototype,"isOpened",2),T([G()],v.prototype,"areFlowStylesSet",2),T([G()],v.prototype,"areFlowEventListenersSet",2),T([G()],v.prototype,"doesFlowHaveWidth",2);const mt=Object.freeze(Object.defineProperty({__proto__:null,ModalElement:v,default:ut},Symbol.toStringTag,{value:"Module"}));class ft{constructor(){this.queue=[],this.acquired=!1}async acquire(){if(!this.acquired)this.acquired=!0;else return new Promise((e,t)=>{this.queue.push(e)})}async release(){if(this.queue.length===0&&this.acquired){this.acquired=!1;return}const e=this.queue.shift();return new Promise(t=>{e(),t()})}}const wt=async o=>{const e=vt(o);console.log("flowSrc ",e);const t=await fetch(e);if(!t.ok){const i=`Error while fetching Flow: ${t.status}`;throw new Error(i)}return t.text()},{VITE_FLOW_URL_PATTERN:yt}=fe,gt="[FLOW_ID]",vt=o=>yt.replace(gt,o);var _t=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,M=(o,e,t,i)=>{for(var n=i>1?void 0:i?bt(e,t):e,s=o.length-1,r;s>=0;s--)(r=o[s])&&(n=(i?r(e,t,n):r(n))||n);return i&&n&&_t(e,t,n),n};const Ue=new ft,$t=()=>se("heyflow-wrapper",De),Et=.01,E=(b=class extends I{constructor(){super(...arguments),this.scriptQueue=[],this.embedIndex=0,this.embedReference="",this.boundOnLessCompiled=this.onLessCompiled.bind(this),this.boundOnIframeMessage=this.onIframeMessage.bind(this),this.template=b.loadingTemplate,this.dynamicHeight=!1,this.urlParams="",this.scrollUpOnNavigation=!1,this.lang=navigator.language,this.getSafeNumber=e=>e&&!isNaN(e)?e:0}getHeyflowWindowContext(){var e;return(e=window.heyflow)==null?void 0:e[this.embedReference]}setWidthOverrides(){var s,r,h,l,a,p;const{"width-narrow":e,"width-mid":t,"width-wide":i}=(p=(a=(r=(s=window.heyflow)==null?void 0:s.constants)==null?void 0:r.STYLES)!=null?a:(l=(h=this.getHeyflowWindowContext())==null?void 0:h.constants)==null?void 0:l.STYLES)!=null?p:{};Object.entries({"width-narrow":e,"width-mid":t,"width-wide":i}).forEach(([d,c])=>{document.documentElement.style.setProperty(`--heyflow-widget-${d}`,c)})}getStyleConfig(){var e;return!this.dynamicHeight&&((e=this.styleConfig)==null?void 0:e.height)!==void 0?S({overflow:"auto"},this.styleConfig):this.styleConfig}render(){return C`
      <article
        class="heyflow-widget-root"
        style=${Ne(S({},this.getStyleConfig()))}
        lang="${this.lang}"
      >
        ${this.template}
      </article>
    `}async connectedCallback(){var e;await Ue.acquire(),window.embeds=(e=window.embeds)!=null?e:new Set;try{if(super.connectedCallback(),!this.flowId)return;this.setupEmbedReference(),await this.updateTemplateWithFlow(),this.detectIFrameEnvironment(),this.setupEventListeners(),this.injectFontDefinitions(),this.initFlow(),this.setupResizeObserver()}catch(t){console.warn("An error occurred while initialising a heyflow widget",{error:t,flowId:this.flowId,embedIndex:this.embedIndex}),(t==null?void 0:t.message)!=="Error while fetching Flow: 404"&&A({flowID:this.flowId,message:"Error initializing heyflow-wrapper",error:t})}finally{await Ue.release()}}disconnectedCallback(){window.removeEventListener("lessCompiled",this.boundOnLessCompiled),window.removeEventListener("message",this.boundOnIframeMessage),window.embeds.delete(this.embedReference)}detectIFrameEnvironment(){var e,t;window.top!==window.self&&((t=(e=this.shadowRoot)==null?void 0:e.querySelector("article"))==null||t.classList.add("parent-is-iframe"))}setupEmbedReference(){document.querySelectorAll("heyflow-wrapper").length!==1&&(this.embedIndex=window.embeds.size),this.embedReference=`${this.flowId}-${this.embedIndex}`,window.embeds.add(this.embedReference),this.setAttribute("index",this.embedReference)}async updateTemplateWithFlow(){var t;const e=g(await wt(this.flowId));this.flow=ze(e,this.flowId,this.embedReference);try{await this.injectFlowStyles(),this.enqueueScripts(),await this.injectScripts()}catch(i){throw A({flowID:this.flowId,message:"Error injecting assets while initialising widget",error:i}),i}this.template=(t=C`${this.flow.body}`)!=null?t:b.fallbackTemplate,await this.updateComplete}async injectFlowStyles(){return new Promise(e=>{var l,a;let t=!1;const i=(l=this.flow)==null?void 0:l.head.querySelector("style"),n=(a=this.flow)==null?void 0:a.head.querySelectorAll('link[rel="stylesheet"]'),s=p=>{var d;try{(d=this.shadowRoot)==null||d.appendChild(p)}catch(c){throw A({flowID:this.flowId,message:"Error appending style related node to shadowRoot",error:c}),c}},r=p=>()=>{clearTimeout(p),e()},h=p=>(d,c,m,_,$)=>{clearTimeout(p),$&&A({flowID:this.flowId,message:"Error loading stylesheet",error:$})};i&&(i.innerHTML=i.innerHTML.replace(/:root/g,":host").replace(/(\d)(rem)/g,"$1em"),s(i)),n==null||n.forEach(p=>{const d=p.href.split("/").pop();if(d!=null&&d.match(/app(?:-.+|)\.css/)||d!=null&&d.match(/flow(?:-.+|)\.css/)){const c=document.createElement("link"),m=d.replace("flow","app");c.href=`${p.href.replace(d,m)}?q=${this.embedReference}`,c.rel=p.rel,t=!0;const _=setTimeout(()=>{V({flowID:this.flowId,message:"Stylesheet has not been loaded after 5000ms",data:{filename:d}})},5e3);c.onload=r(_),c.onerror=h(_),s(c),p.remove()}}),(!i&&!(n!=null&&n.length)||!t)&&e()})}enqueueScripts(){if(this.flow){const e=f("script",this.flow.head);this.scriptQueue=e}}async injectScripts(){return new Promise(e=>{const t=this.scriptQueue.filter(s=>s.src);let i=0;function n(){i++,i===t.length&&e()}this.scriptQueue.forEach(s=>{var h;const r=document.createElement("script");s.src?(r.src=s.src,r.type=s.type,r.onload=n,r.onerror=()=>{console.warn(`failed to inject script from: ${r.src}, please disable your ad-blocker`)}):r.innerHTML=s.innerHTML,s.src.match(/app(?:-.+|)\.js/)&&s.type==="module"&&(r.src=`${s.src}?q=${this.embedReference}`),(h=this.shadowRoot)==null||h.appendChild(r)}),t.length||e()})}injectFontDefinitions(){this.flow&&f('link[rel="stylesheet"]',this.flow.head).forEach(t=>document.head.appendChild(t))}onLessCompiled(){var t;const e=document.getElementById("less:static-flow-src-style");e&&((t=this.shadowRoot)==null||t.appendChild(e))}onIframeMessage(e){var i;if(!e.data)return;let t;try{t=JSON.parse(e.data)}catch(n){return}if(["goToScreen","goBack"].includes(t.event)&&this.scrollUpOnNavigation){const n=document.querySelector(`[index="${t.widgetWrapperRef}"]`),s=(i=n==null?void 0:n.shadowRoot)==null?void 0:i.querySelector('[data-id="heyflow-main"]');this.dynamicHeight?n==null||n.scrollIntoView():s&&(s.scrollTop=0,s.scrollIntoView())}}setupEventListeners(){window.addEventListener("lessCompiled",this.boundOnLessCompiled),window.addEventListener("message",this.boundOnIframeMessage)}initFlow(){var e,t;this.setWidthOverrides(),document.dispatchEvent(new CustomEvent("finishedInjection",{detail:{urlParams:this.urlParams,embedReference:this.embedReference}})),this.screen&&((e=window.heyflow)!=null&&e.setAlternativeInitialScreen?window.heyflow.setAlternativeInitialScreen(this.screen,!0):(t=this.getHeyflowWindowContext())==null||t.setAlternativeInitialScreen(this.screen,!0)),delete window.currentlyMounting}setupResizeObserver(){var i;const e=new ResizeObserver(n=>{const s=n[0].borderBoxSize[0].blockSize;this.handleDynamicSizing(Math.ceil(s))}),t=(i=this.shadowRoot)==null?void 0:i.querySelector("form");t&&e.observe(t)}handleDynamicSizing(e){var t,i,n,s,r,h,l,a,p,d,c,m,_,$;if(this.dynamicHeight){const he=(t=this.shadowRoot)==null?void 0:t.querySelector("form + div"),ce=(i=this.shadowRoot)==null?void 0:i.querySelector("form"),pe=(n=this.shadowRoot)==null?void 0:n.querySelector("header"),ue=(s=this.shadowRoot)==null?void 0:s.querySelector(".footer-container"),U=(r=this.shadowRoot)==null?void 0:r.querySelector(".heyflow-widget-root"),At=this.getSafeNumber(parseInt((l=(h=U==null?void 0:U.style)==null?void 0:h.borderTopWidth)!=null?l:"0",10)+parseInt((p=(a=U==null?void 0:U.style)==null?void 0:a.borderBottomWidth)!=null?p:"0",10)),xt=ce?this.getSafeNumber(parseInt((d=getComputedStyle(ce).marginTop)!=null?d:0)+parseInt((c=getComputedStyle(ce).marginBottom)!=null?c:0)):0,Ct=Math.floor(e*Et),Ot=((m=pe==null?void 0:pe.clientHeight)!=null?m:0)+((_=ue==null?void 0:ue.clientHeight)!=null?_:0)+(($=he==null?void 0:he.clientHeight)!=null?$:0)+e+At+xt+Ct;this.styleConfig=D(S({},this.styleConfig),{height:`${Ot}px`})}}},b.fallbackTemplate=C`<p>
    🤕 Error integrating Heyflow, check javascript console for details!
  </p>`,b.loadingTemplate=C`<loader-element />`,b.styles=Z`
    :host {
      all: initial;
      width: 100%;
    }

    /*Workaround to make Material Icons Work https://github.com/google/material-design-icons/issues/1165*/
    .material-icons {
      font-family: 'Material Icons';
      font-style: normal;
    }

    .heyflow-widget-root {
      margin: 0 auto;
      // We set --heyflow-widget-height in modal-element if needed
      height: var(--heyflow-widget-height, 600px);
      max-width: 100%;
    }

    /* TODO these are hacky overrides to fix sizing issues if the web component is embedded inside of an iframe.
		The iframe class is set only if the web component is running inside of an iframe.*/
    .parent-is-iframe .multiple-choice .option-content.picture {
      height: auto;
    }

    /* This prevents weird whitespace problem under large images. */
    .parent-is-iframe .block-content.image-block {
      display: flex;
    }

    .parent-is-iframe img {
      /* overrides an inline style. */
      height: auto !important;
      max-height: 100%;
    }

    /* adds an overflow hidden to the span in the button cause it shows scroll bars in Safari and this would break the button */
    .generic-button-block .content .label,
    .generic-button-block .content .line2 {
      overflow: hidden;
    }

    /* !importants are here because of packages/flow/src/style/x_responsive.less */
    form section > .block > .inner-wide {
      width: min(var(--heyflow-widget-width-wide), 100%) !important;
    }

    form section > .block > .inner-mid {
      width: min(var(--heyflow-widget-width-mid), 100%) !important;
    }

    form section > .block > .inner-narrow {
      width: min(var(--heyflow-widget-width-narrow), 100%) !important;
    }
  `,b);M([y()],E.prototype,"template",2),M([y({attribute:"flow-id"})],E.prototype,"flowId",2),M([y({attribute:"screen"})],E.prototype,"screen",2),M([y({attribute:"style-config",type:Object})],E.prototype,"styleConfig",2),M([y({attribute:"dynamic-height",type:Boolean})],E.prototype,"dynamicHeight",2),M([y({attribute:"url-parameters"})],E.prototype,"urlParams",2),M([y({attribute:"scroll-up-on-navigation",type:Boolean})],E.prototype,"scrollUpOnNavigation",2),M([y({attribute:"lang"})],E.prototype,"lang",2);let De=E;const St=Object.freeze(Object.defineProperty({__proto__:null,HeyflowWrapper:De,default:$t},Symbol.toStringTag,{value:"Module"}));return w.heyflowWidget=Ye,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),w}({});
