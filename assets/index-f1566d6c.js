(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function xa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function _a(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=pe(r)?ol(r):_a(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(pe(e))return e;if(ce(e))return e}}const rl=/;(?![^(]*\))/g,al=/:([^]+)/,il=/\/\*.*?\*\//gs;function ol(e){const t={};return e.replace(il,"").split(rl).forEach(n=>{if(n){const r=n.split(al);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function wa(e){let t="";if(pe(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=wa(e[n]);r&&(t+=r+" ")}else if(ce(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ll=xa(sl);function Ao(e){return!!e||e===""}const re={},jt=[],je=()=>{},cl=()=>!1,fl=/^on[^a-z]/,pr=e=>fl.test(e),Ea=e=>e.startsWith("onUpdate:"),ye=Object.assign,ka=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ul=Object.prototype.hasOwnProperty,q=(e,t)=>ul.call(e,t),B=Array.isArray,sn=e=>hr(e)==="[object Map]",dl=e=>hr(e)==="[object Set]",H=e=>typeof e=="function",pe=e=>typeof e=="string",Aa=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Oo=e=>ce(e)&&H(e.then)&&H(e.catch),ml=Object.prototype.toString,hr=e=>ml.call(e),pl=e=>hr(e).slice(8,-1),hl=e=>hr(e)==="[object Object]",Oa=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gl=/-(\w)/g,qe=gr(e=>e.replace(gl,(t,n)=>n?n.toUpperCase():"")),vl=/\B([A-Z])/g,Vt=gr(e=>e.replace(vl,"-$1").toLowerCase()),vr=gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=gr(e=>e?`on${vr(e)}`:""),gn=(e,t)=>!Object.is(e,t),Nr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let si;const yl=()=>si||(si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class xl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function _l(e,t=Ie){t&&t.active&&t.effects.push(e)}function wl(){return Ie}const Pa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Po=e=>(e.w&ut)>0,Co=e=>(e.n&ut)>0,El=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ut},kl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Po(a)&&!Co(a)?a.delete(e):t[n++]=a,a.w&=~ut,a.n&=~ut}t.length=n}},Yr=new WeakMap;let nn=0,ut=1;const qr=30;let Te;const kt=Symbol(""),Vr=Symbol("");class Ca{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_l(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,ct=!0,ut=1<<++nn,nn<=qr?El(this):li(this),this.fn()}finally{nn<=qr&&kl(this),ut=1<<--nn,Te=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(li(this),this.onStop&&this.onStop(),this.active=!1)}}function li(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ct=!0;const So=[];function Xt(){So.push(ct),ct=!1}function Gt(){const e=So.pop();ct=e===void 0?!0:e}function Ee(e,t,n){if(ct&&Te){let r=Yr.get(e);r||Yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Pa()),Ro(a)}}function Ro(e,t){let n=!1;nn<=qr?Co(e)||(e.n|=ut,n=!Po(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function Qe(e,t,n,r,a,i){const o=Yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?Oa(n)&&s.push(o.get("length")):(s.push(o.get(kt)),sn(e)&&s.push(o.get(Vr)));break;case"delete":B(e)||(s.push(o.get(kt)),sn(e)&&s.push(o.get(Vr)));break;case"set":sn(e)&&s.push(o.get(kt));break}if(s.length===1)s[0]&&Xr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Xr(Pa(l))}}function Xr(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&ci(r);for(const r of n)r.computed||ci(r)}function ci(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Al=xa("__proto__,__v_isRef,__isVue"),Io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Aa)),Ol=Sa(),Pl=Sa(!1,!0),Cl=Sa(!0),fi=Sl();function Sl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Xt();const r=V(this)[t].apply(this,n);return Gt(),r}}),e}function Rl(e){const t=V(this);return Ee(t,"has",e),t.hasOwnProperty(e)}function Sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Yl:Fo:t?Lo:Mo).get(r))return r;const o=B(r);if(!e){if(o&&q(fi,a))return Reflect.get(fi,a,i);if(a==="hasOwnProperty")return Rl}const s=Reflect.get(r,a,i);return(Aa(a)?Io.has(a):Al(a))||(e||Ee(r,"get",a),t)?s:ge(s)?o&&Oa(a)?s:s.value:ce(s)?e?jo(s):Sn(s):s}}const Il=To(),Tl=To(!0);function To(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&ge(o)&&!ge(a))return!1;if(!e&&(!ar(a)&&!Bt(a)&&(o=V(o),a=V(a)),!B(n)&&ge(o)&&!ge(a)))return o.value=a,!0;const s=B(n)&&Oa(r)?Number(r)<n.length:q(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?gn(a,o)&&Qe(n,"set",r,a):Qe(n,"add",r,a)),l}}function Nl(e,t){const n=q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Ml(e,t){const n=Reflect.has(e,t);return(!Aa(t)||!Io.has(t))&&Ee(e,"has",t),n}function Ll(e){return Ee(e,"iterate",B(e)?"length":kt),Reflect.ownKeys(e)}const No={get:Ol,set:Il,deleteProperty:Nl,has:Ml,ownKeys:Ll},Fl={get:Cl,set(e,t){return!0},deleteProperty(e,t){return!0}},jl=ye({},No,{get:Pl,set:Tl}),Ra=e=>e,br=e=>Reflect.getPrototypeOf(e);function Ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Ee(a,"get",t),Ee(a,"get",i));const{has:o}=br(a),s=r?Ra:n?Na:vn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Fn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Ee(r,"has",e),Ee(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function jn(e,t=!1){return e=e.__v_raw,!t&&Ee(V(e),"iterate",kt),Reflect.get(e,"size",e)}function ui(e){e=V(e);const t=V(this);return br(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function di(e,t){t=V(t);const n=V(this),{has:r,get:a}=br(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?gn(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function mi(e){const t=V(this),{has:n,get:r}=br(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function pi(){const e=V(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function $n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?Ra:e?Na:vn;return!e&&Ee(s,"iterate",kt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=sn(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ra:t?Na:vn;return!t&&Ee(i,"iterate",l?Vr:kt),{next(){const{value:d,done:p}=f.next();return p?{value:d,done:p}:{value:s?[c(d[0]),c(d[1])]:c(d),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function $l(){const e={get(i){return Ln(this,i)},get size(){return jn(this)},has:Fn,add:ui,set:di,delete:mi,clear:pi,forEach:$n(!1,!1)},t={get(i){return Ln(this,i,!1,!0)},get size(){return jn(this)},has:Fn,add:ui,set:di,delete:mi,clear:pi,forEach:$n(!1,!0)},n={get(i){return Ln(this,i,!0)},get size(){return jn(this,!0)},has(i){return Fn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:$n(!0,!1)},r={get(i){return Ln(this,i,!0,!0)},get size(){return jn(this,!0)},has(i){return Fn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[zl,Dl,Hl,Bl]=$l();function Ia(e,t){const n=t?e?Bl:Hl:e?Dl:zl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(q(n,a)&&a in r?n:r,a,i)}const Ul={get:Ia(!1,!1)},Kl={get:Ia(!1,!0)},Wl={get:Ia(!0,!1)},Mo=new WeakMap,Lo=new WeakMap,Fo=new WeakMap,Yl=new WeakMap;function ql(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vl(e){return e.__v_skip||!Object.isExtensible(e)?0:ql(pl(e))}function Sn(e){return Bt(e)?e:Ta(e,!1,No,Ul,Mo)}function Xl(e){return Ta(e,!1,jl,Kl,Lo)}function jo(e){return Ta(e,!0,Fl,Wl,Fo)}function Ta(e,t,n,r,a){if(!ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Vl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function $t(e){return Bt(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function ar(e){return!!(e&&e.__v_isShallow)}function $o(e){return $t(e)||Bt(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function zo(e){return rr(e,"__v_skip",!0),e}const vn=e=>ce(e)?Sn(e):e,Na=e=>ce(e)?jo(e):e;function Do(e){ct&&Te&&(e=V(e),Ro(e.dep||(e.dep=Pa())))}function Ho(e,t){e=V(e);const n=e.dep;n&&Xr(n)}function ge(e){return!!(e&&e.__v_isRef===!0)}function Gl(e){return Bo(e,!1)}function Ql(e){return Bo(e,!0)}function Bo(e,t){return ge(e)?e:new Jl(e,t)}class Jl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:vn(t)}get value(){return Do(this),this._value}set value(t){const n=this.__v_isShallow||ar(t)||Bt(t);t=n?t:V(t),gn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:vn(t),Ho(this))}}function zt(e){return ge(e)?e.value:e}const Zl={get:(e,t,n)=>zt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ge(a)&&!ge(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Uo(e){return $t(e)?e:new Proxy(e,Zl)}var Ko;class ec{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ko]=!1,this._dirty=!0,this.effect=new Ca(t,()=>{this._dirty||(this._dirty=!0,Ho(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return Do(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ko="__v_isReadonly";function tc(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=je):(r=e.get,a=e.set),new ec(r,a,i||!a,n)}function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){yr(i,t,n)}return a}function $e(e,t,n,r){if(H(e)){const i=ft(e,t,n,r);return i&&Oo(i)&&i.catch(o=>{yr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push($e(e[i],t,n,r));return a}function yr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}nc(e,n,a,r)}function nc(e,t,n,r=!0){console.error(e)}let bn=!1,Gr=!1;const he=[];let We=0;const Dt=[];let Xe=null,xt=0;const Wo=Promise.resolve();let Ma=null;function Yo(e){const t=Ma||Wo;return e?t.then(this?e.bind(this):e):t}function rc(e){let t=We+1,n=he.length;for(;t<n;){const r=t+n>>>1;yn(he[r])<e?t=r+1:n=r}return t}function La(e){(!he.length||!he.includes(e,bn&&e.allowRecurse?We+1:We))&&(e.id==null?he.push(e):he.splice(rc(e.id),0,e),qo())}function qo(){!bn&&!Gr&&(Gr=!0,Ma=Wo.then(Xo))}function ac(e){const t=he.indexOf(e);t>We&&he.splice(t,1)}function ic(e){B(e)?Dt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?xt+1:xt))&&Dt.push(e),qo()}function hi(e,t=bn?We+1:0){for(;t<he.length;t++){const n=he[t];n&&n.pre&&(he.splice(t,1),t--,n())}}function Vo(e){if(Dt.length){const t=[...new Set(Dt)];if(Dt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>yn(n)-yn(r)),xt=0;xt<Xe.length;xt++)Xe[xt]();Xe=null,xt=0}}const yn=e=>e.id==null?1/0:e.id,oc=(e,t)=>{const n=yn(e)-yn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Xo(e){Gr=!1,bn=!0,he.sort(oc);const t=je;try{for(We=0;We<he.length;We++){const n=he[We];n&&n.active!==!1&&ft(n,null,14)}}finally{We=0,he.length=0,Vo(),bn=!1,Ma=null,(he.length||Dt.length)&&Xo()}}function sc(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||re;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:p}=r[c]||re;p&&(a=n.map(g=>pe(g)?g.trim():g)),d&&(a=n.map(bl))}let s,l=r[s=Tr(t)]||r[s=Tr(qe(t))];!l&&i&&(l=r[s=Tr(Vt(t))]),l&&$e(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,$e(f,e,6,a)}}function Go(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const c=Go(f,t,!0);c&&(s=!0,ye(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ce(e)&&r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):ye(o,i),ce(e)&&r.set(e,o),o)}function xr(e,t){return!e||!pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),q(e,t[0].toLowerCase()+t.slice(1))||q(e,Vt(t))||q(e,t))}let Me=null,_r=null;function ir(e){const t=Me;return Me=e,_r=e&&e.type.__scopeId||null,t}function lc(e){_r=e}function cc(){_r=null}function rn(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ki(-1);const i=ir(t);let o;try{o=e(...a)}finally{ir(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:d,data:p,setupState:g,ctx:A,inheritAttrs:S}=e;let L,b;const _=ir(e);try{if(n.shapeFlag&4){const z=a||r;L=Ke(c.call(z,z,d,i,g,p,A)),b=l}else{const z=t;L=Ke(z.length>1?z(i,{attrs:l,slots:s,emit:f}):z(i,null)),b=t.props?l:fc(l)}}catch(z){fn.length=0,yr(z,e,1),L=le(Ot)}let O=L;if(b&&S!==!1){const z=Object.keys(b),{shapeFlag:K}=O;z.length&&K&7&&(o&&z.some(Ea)&&(b=uc(b,o)),O=Ut(O,b))}return n.dirs&&(O=Ut(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),L=O,ir(_),L}const fc=e=>{let t;for(const n in e)(n==="class"||n==="style"||pr(n))&&((t||(t={}))[n]=e[n]);return t},uc=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dc(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gi(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(o[p]!==r[p]&&!xr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?gi(r,o,f):!0:!!o;return!1}function gi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function mc({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pc=e=>e.__isSuspense;function hc(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):ic(e)}function Jn(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Ge(e,t,n=!1){const r=de||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const Dn={};function ln(e,t,n){return Qo(e,t,n)}function Qo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=re){const s=wl()===(de==null?void 0:de.scope)?de:null;let l,f=!1,c=!1;if(ge(e)?(l=()=>e.value,f=ar(e)):$t(e)?(l=()=>e,r=!0):B(e)?(c=!0,f=e.some(O=>$t(O)||ar(O)),l=()=>e.map(O=>{if(ge(O))return O.value;if($t(O))return Mt(O);if(H(O))return ft(O,s,2)})):H(e)?t?l=()=>ft(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),$e(e,s,3,[p])}:l=je,t&&r){const O=l;l=()=>Mt(O())}let d,p=O=>{d=b.onStop=()=>{ft(O,s,4)}},g;if(wn)if(p=je,t?n&&$e(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const O=ff();g=O.__watcherHandles||(O.__watcherHandles=[])}else return je;let A=c?new Array(e.length).fill(Dn):Dn;const S=()=>{if(b.active)if(t){const O=b.run();(r||f||(c?O.some((z,K)=>gn(z,A[K])):gn(O,A)))&&(d&&d(),$e(t,s,3,[O,A===Dn?void 0:c&&A[0]===Dn?[]:A,p]),A=O)}else b.run()};S.allowRecurse=!!t;let L;a==="sync"?L=S:a==="post"?L=()=>we(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),L=()=>La(S));const b=new Ca(l,L);t?n?S():A=b.run():a==="post"?we(b.run.bind(b),s&&s.suspense):b.run();const _=()=>{b.stop(),s&&s.scope&&ka(s.scope.effects,b)};return g&&g.push(_),_}function gc(e,t,n){const r=this.proxy,a=pe(e)?e.includes(".")?Jo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=de;Kt(this);const s=Qo(a,i.bind(r),n);return o?Kt(o):At(),s}function Jo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Mt(e,t){if(!ce(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ge(e))Mt(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Mt(e[n],t);else if(dl(e)||sn(e))e.forEach(n=>{Mt(n,t)});else if(hl(e))for(const n in e)Mt(e[n],t);return e}function Rn(e){return H(e)?{setup:e,name:e.name}:e}const Zn=e=>!!e.type.__asyncLoader,Zo=e=>e.type.__isKeepAlive;function vc(e,t){es(e,"a",t)}function bc(e,t){es(e,"da",t)}function es(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(wr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Zo(a.parent.vnode)&&yc(r,t,n,a),a=a.parent}}function yc(e,t,n,r){const a=wr(t,e,r,!0);ts(()=>{ka(r[t],a)},n)}function wr(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Xt(),Kt(n);const s=$e(t,n,e,o);return At(),Gt(),s});return r?a.unshift(i):a.push(i),i}}const tt=e=>(t,n=de)=>(!wn||e==="sp")&&wr(e,(...r)=>t(...r),n),xc=tt("bm"),_c=tt("m"),wc=tt("bu"),Ec=tt("u"),kc=tt("bum"),ts=tt("um"),Ac=tt("sp"),Oc=tt("rtg"),Pc=tt("rtc");function Cc(e,t=de){wr("ec",e,t)}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Xt(),$e(l,n,8,[e.el,s,e,t]),Gt())}}const ns="components";function or(e,t){return Rc(ns,e,!0,t)||e}const Sc=Symbol();function Rc(e,t,n=!0,r=!1){const a=Me||de;if(a){const i=a.type;if(e===ns){const s=sf(i,!1);if(s&&(s===t||s===qe(t)||s===vr(qe(t))))return i}const o=vi(a[e]||i[e],t)||vi(a.appContext[e],t);return!o&&r?i:o}}function vi(e,t){return e&&(e[t]||e[qe(t)]||e[vr(qe(t))])}const Qr=e=>e?ps(e)?Da(e)||e.proxy:Qr(e.parent):null,cn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$emit:e=>e.emit,$options:e=>Fa(e),$forceUpdate:e=>e.f||(e.f=()=>La(e.update)),$nextTick:e=>e.n||(e.n=Yo.bind(e.proxy)),$watch:e=>gc.bind(e)}),Lr=(e,t)=>e!==re&&!e.__isScriptSetup&&q(e,t),Ic={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Lr(r,t))return o[t]=1,r[t];if(a!==re&&q(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&q(f,t))return o[t]=3,i[t];if(n!==re&&q(n,t))return o[t]=4,n[t];Jr&&(o[t]=0)}}const c=cn[t];let d,p;if(c)return t==="$attrs"&&Ee(e,"get",t),c(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==re&&q(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Lr(a,t)?(a[t]=n,!0):r!==re&&q(r,t)?(r[t]=n,!0):q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==re&&q(e,o)||Lr(t,o)||(s=i[0])&&q(s,o)||q(r,o)||q(cn,o)||q(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Jr=!0;function Tc(e){const t=Fa(e),n=e.proxy,r=e.ctx;Jr=!1,t.beforeCreate&&bi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:d,mounted:p,beforeUpdate:g,updated:A,activated:S,deactivated:L,beforeDestroy:b,beforeUnmount:_,destroyed:O,unmounted:z,render:K,renderTracked:ne,renderTriggered:oe,errorCaptured:ke,serverPrefetch:ve,expose:Pe,inheritAttrs:rt,components:De,directives:St,filters:ht}=t;if(f&&Nc(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const G=o[J];H(G)&&(r[J]=G.bind(n))}if(a){const J=a.call(n,n);ce(J)&&(e.data=Sn(J))}if(Jr=!0,i)for(const J in i){const G=i[J],Ce=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):je,gt=!H(G)&&H(G.set)?G.set.bind(n):je,Se=ie({get:Ce,set:gt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Se.value,set:xe=>Se.value=xe})}if(s)for(const J in s)rs(s[J],r,n,J);if(l){const J=H(l)?l.call(n):l;Reflect.ownKeys(J).forEach(G=>{Jn(G,J[G])})}c&&bi(c,e,"c");function fe(J,G){B(G)?G.forEach(Ce=>J(Ce.bind(n))):G&&J(G.bind(n))}if(fe(xc,d),fe(_c,p),fe(wc,g),fe(Ec,A),fe(vc,S),fe(bc,L),fe(Cc,ke),fe(Pc,ne),fe(Oc,oe),fe(kc,_),fe(ts,z),fe(Ac,ve),B(Pe))if(Pe.length){const J=e.exposed||(e.exposed={});Pe.forEach(G=>{Object.defineProperty(J,G,{get:()=>n[G],set:Ce=>n[G]=Ce})})}else e.exposed||(e.exposed={});K&&e.render===je&&(e.render=K),rt!=null&&(e.inheritAttrs=rt),De&&(e.components=De),St&&(e.directives=St)}function Nc(e,t,n=je,r=!1){B(e)&&(e=Zr(e));for(const a in e){const i=e[a];let o;ce(i)?"default"in i?o=Ge(i.from||a,i.default,!0):o=Ge(i.from||a):o=Ge(i),ge(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function bi(e,t,n){$e(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function rs(e,t,n,r){const a=r.includes(".")?Jo(n,r):()=>n[r];if(pe(e)){const i=t[e];H(i)&&ln(a,i)}else if(H(e))ln(a,e.bind(n));else if(ce(e))if(B(e))e.forEach(i=>rs(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&ln(a,i,e)}}function Fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>sr(l,f,o,!0)),sr(l,t,o)),ce(t)&&i.set(t,l),l}function sr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&sr(e,i,n,!0),a&&a.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Mc[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Mc={data:yi,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:yt,directives:yt,watch:Fc,provide:yi,inject:Lc};function yi(e,t){return t?e?function(){return ye(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Lc(e,t){return yt(Zr(e),Zr(t))}function Zr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function yt(e,t){return e?ye(ye(Object.create(null),e),t):t}function Fc(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function jc(e,t,n,r=!1){const a={},i={};rr(i,kr,1),e.propsDefaults=Object.create(null),as(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Xl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $c(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(xr(e.emitsOptions,p))continue;const g=t[p];if(l)if(q(i,p))g!==i[p]&&(i[p]=g,f=!0);else{const A=qe(p);a[A]=ea(l,s,A,g,e,!1)}else g!==i[p]&&(i[p]=g,f=!0)}}}else{as(e,t,a,i)&&(f=!0);let c;for(const d in s)(!t||!q(t,d)&&((c=Vt(d))===d||!q(t,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(a[d]=ea(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!q(t,d))&&(delete i[d],f=!0)}f&&Qe(e,"set","$attrs")}function as(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Qn(l))continue;const f=t[l];let c;a&&q(a,c=qe(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:xr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||re;for(let c=0;c<i.length;c++){const d=i[c];n[d]=ea(a,l,d,f[d],e,!q(f,d))}}return o}function ea(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=q(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Kt(a),r=f[n]=l.call(null,t),At())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function is(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const c=d=>{l=!0;const[p,g]=is(d,t,!0);ye(o,p),g&&s.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ce(e)&&r.set(e,jt),jt;if(B(i))for(let c=0;c<i.length;c++){const d=qe(i[c]);xi(d)&&(o[d]=re)}else if(i)for(const c in i){const d=qe(c);if(xi(d)){const p=i[c],g=o[d]=B(p)||H(p)?{type:p}:Object.assign({},p);if(g){const A=Ei(Boolean,g.type),S=Ei(String,g.type);g[0]=A>-1,g[1]=S<0||A<S,(A>-1||q(g,"default"))&&s.push(d)}}}const f=[o,s];return ce(e)&&r.set(e,f),f}function xi(e){return e[0]!=="$"}function _i(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function wi(e,t){return _i(e)===_i(t)}function Ei(e,t){return B(t)?t.findIndex(n=>wi(n,e)):H(t)&&wi(t,e)?0:-1}const os=e=>e[0]==="_"||e==="$stable",ja=e=>B(e)?e.map(Ke):[Ke(e)],zc=(e,t,n)=>{if(t._n)return t;const r=rn((...a)=>ja(t(...a)),n);return r._c=!1,r},ss=(e,t,n)=>{const r=e._ctx;for(const a in e){if(os(a))continue;const i=e[a];if(H(i))t[a]=zc(a,i,r);else if(i!=null){const o=ja(i);t[a]=()=>o}}},ls=(e,t)=>{const n=ja(t);e.slots.default=()=>n},Dc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),rr(t,"_",n)):ss(t,e.slots={})}else e.slots={},t&&ls(e,t);rr(e.slots,kr,1)},Hc=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=re;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ye(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ss(t,a)),o=t}else t&&(ls(e,t),o={default:1});if(i)for(const s in a)!os(s)&&!(s in o)&&delete a[s]};function cs(){return{app:null,config:{isNativeTag:cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bc=0;function Uc(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!ce(a)&&(a=null);const i=cs(),o=new Set;let s=!1;const l=i.app={_uid:Bc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:uf,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...c)):H(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,d){if(!s){const p=le(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,d),s=!0,l._container=f,f.__vue_app__=l,Da(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function ta(e,t,n,r,a=!1){if(B(e)){e.forEach((p,g)=>ta(p,t&&(B(t)?t[g]:t),n,r,a));return}if(Zn(r)&&!a)return;const i=r.shapeFlag&4?Da(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===re?s.refs={}:s.refs,d=s.setupState;if(f!=null&&f!==l&&(pe(f)?(c[f]=null,q(d,f)&&(d[f]=null)):ge(f)&&(f.value=null)),H(l))ft(l,s,12,[o,c]);else{const p=pe(l),g=ge(l);if(p||g){const A=()=>{if(e.f){const S=p?q(d,l)?d[l]:c[l]:l.value;a?B(S)&&ka(S,i):B(S)?S.includes(i)||S.push(i):p?(c[l]=[i],q(d,l)&&(d[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,q(d,l)&&(d[l]=o)):g&&(l.value=o,e.k&&(c[e.k]=o))};o?(A.id=-1,we(A,n)):A()}}}const we=hc;function Kc(e){return Wc(e)}function Wc(e,t){const n=yl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:d,nextSibling:p,setScopeId:g=je,insertStaticContent:A}=e,S=(u,m,h,v=null,x=null,k=null,R=!1,E=null,P=!!m.dynamicChildren)=>{if(u===m)return;u&&!en(u,m)&&(v=C(u),xe(u,x,k,!0),u=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:w,ref:j,shapeFlag:N}=m;switch(w){case Er:L(u,m,h,v);break;case Ot:b(u,m,h,v);break;case Fr:u==null&&_(m,h,v,R);break;case Ue:De(u,m,h,v,x,k,R,E,P);break;default:N&1?K(u,m,h,v,x,k,R,E,P):N&6?St(u,m,h,v,x,k,R,E,P):(N&64||N&128)&&w.process(u,m,h,v,x,k,R,E,P,Y)}j!=null&&x&&ta(j,u&&u.ref,k,m||u,!m)},L=(u,m,h,v)=>{if(u==null)r(m.el=s(m.children),h,v);else{const x=m.el=u.el;m.children!==u.children&&f(x,m.children)}},b=(u,m,h,v)=>{u==null?r(m.el=l(m.children||""),h,v):m.el=u.el},_=(u,m,h,v)=>{[u.el,u.anchor]=A(u.children,m,h,v,u.el,u.anchor)},O=({el:u,anchor:m},h,v)=>{let x;for(;u&&u!==m;)x=p(u),r(u,h,v),u=x;r(m,h,v)},z=({el:u,anchor:m})=>{let h;for(;u&&u!==m;)h=p(u),a(u),u=h;a(m)},K=(u,m,h,v,x,k,R,E,P)=>{R=R||m.type==="svg",u==null?ne(m,h,v,x,k,R,E,P):ve(u,m,x,k,R,E,P)},ne=(u,m,h,v,x,k,R,E)=>{let P,w;const{type:j,props:N,shapeFlag:$,transition:D,dirs:W}=u;if(P=u.el=o(u.type,k,N&&N.is,N),$&8?c(P,u.children):$&16&&ke(u.children,P,null,v,x,k&&j!=="foreignObject",R,E),W&&vt(u,null,v,"created"),oe(P,u,u.scopeId,R,v),N){for(const Q in N)Q!=="value"&&!Qn(Q)&&i(P,Q,null,N[Q],k,u.children,v,x,I);"value"in N&&i(P,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Be(w,v,u)}W&&vt(u,null,v,"beforeMount");const Z=(!x||x&&!x.pendingBranch)&&D&&!D.persisted;Z&&D.beforeEnter(P),r(P,m,h),((w=N&&N.onVnodeMounted)||Z||W)&&we(()=>{w&&Be(w,v,u),Z&&D.enter(P),W&&vt(u,null,v,"mounted")},x)},oe=(u,m,h,v,x)=>{if(h&&g(u,h),v)for(let k=0;k<v.length;k++)g(u,v[k]);if(x){let k=x.subTree;if(m===k){const R=x.vnode;oe(u,R,R.scopeId,R.slotScopeIds,x.parent)}}},ke=(u,m,h,v,x,k,R,E,P=0)=>{for(let w=P;w<u.length;w++){const j=u[w]=E?st(u[w]):Ke(u[w]);S(null,j,m,h,v,x,k,R,E)}},ve=(u,m,h,v,x,k,R)=>{const E=m.el=u.el;let{patchFlag:P,dynamicChildren:w,dirs:j}=m;P|=u.patchFlag&16;const N=u.props||re,$=m.props||re;let D;h&&bt(h,!1),(D=$.onVnodeBeforeUpdate)&&Be(D,h,m,u),j&&vt(m,u,h,"beforeUpdate"),h&&bt(h,!0);const W=x&&m.type!=="foreignObject";if(w?Pe(u.dynamicChildren,w,E,h,v,W,k):R||G(u,m,E,null,h,v,W,k,!1),P>0){if(P&16)rt(E,m,N,$,h,v,x);else if(P&2&&N.class!==$.class&&i(E,"class",null,$.class,x),P&4&&i(E,"style",N.style,$.style,x),P&8){const Z=m.dynamicProps;for(let Q=0;Q<Z.length;Q++){const ue=Z[Q],Re=N[ue],It=$[ue];(It!==Re||ue==="value")&&i(E,ue,Re,It,x,u.children,h,v,I)}}P&1&&u.children!==m.children&&c(E,m.children)}else!R&&w==null&&rt(E,m,N,$,h,v,x);((D=$.onVnodeUpdated)||j)&&we(()=>{D&&Be(D,h,m,u),j&&vt(m,u,h,"updated")},v)},Pe=(u,m,h,v,x,k,R)=>{for(let E=0;E<m.length;E++){const P=u[E],w=m[E],j=P.el&&(P.type===Ue||!en(P,w)||P.shapeFlag&70)?d(P.el):h;S(P,w,j,null,v,x,k,R,!0)}},rt=(u,m,h,v,x,k,R)=>{if(h!==v){if(h!==re)for(const E in h)!Qn(E)&&!(E in v)&&i(u,E,h[E],null,R,m.children,x,k,I);for(const E in v){if(Qn(E))continue;const P=v[E],w=h[E];P!==w&&E!=="value"&&i(u,E,w,P,R,m.children,x,k,I)}"value"in v&&i(u,"value",h.value,v.value)}},De=(u,m,h,v,x,k,R,E,P)=>{const w=m.el=u?u.el:s(""),j=m.anchor=u?u.anchor:s("");let{patchFlag:N,dynamicChildren:$,slotScopeIds:D}=m;D&&(E=E?E.concat(D):D),u==null?(r(w,h,v),r(j,h,v),ke(m.children,h,j,x,k,R,E,P)):N>0&&N&64&&$&&u.dynamicChildren?(Pe(u.dynamicChildren,$,h,x,k,R,E),(m.key!=null||x&&m===x.subTree)&&fs(u,m,!0)):G(u,m,h,j,x,k,R,E,P)},St=(u,m,h,v,x,k,R,E,P)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?x.ctx.activate(m,h,v,R,P):ht(m,h,v,x,k,R,P):Jt(u,m,P)},ht=(u,m,h,v,x,k,R)=>{const E=u.component=tf(u,v,x);if(Zo(u)&&(E.ctx.renderer=Y),nf(E),E.asyncDep){if(x&&x.registerDep(E,fe),!u.el){const P=E.subTree=le(Ot);b(null,P,m,h)}return}fe(E,u,m,h,x,k,R)},Jt=(u,m,h)=>{const v=m.component=u.component;if(dc(u,m,h))if(v.asyncDep&&!v.asyncResolved){J(v,m,h);return}else v.next=m,ac(v.update),v.update();else m.el=u.el,v.vnode=m},fe=(u,m,h,v,x,k,R)=>{const E=()=>{if(u.isMounted){let{next:j,bu:N,u:$,parent:D,vnode:W}=u,Z=j,Q;bt(u,!1),j?(j.el=W.el,J(u,j,R)):j=W,N&&Nr(N),(Q=j.props&&j.props.onVnodeBeforeUpdate)&&Be(Q,D,j,W),bt(u,!0);const ue=Mr(u),Re=u.subTree;u.subTree=ue,S(Re,ue,d(Re.el),C(Re),u,x,k),j.el=ue.el,Z===null&&mc(u,ue.el),$&&we($,x),(Q=j.props&&j.props.onVnodeUpdated)&&we(()=>Be(Q,D,j,W),x)}else{let j;const{el:N,props:$}=m,{bm:D,m:W,parent:Z}=u,Q=Zn(m);if(bt(u,!1),D&&Nr(D),!Q&&(j=$&&$.onVnodeBeforeMount)&&Be(j,Z,m),bt(u,!0),N&&U){const ue=()=>{u.subTree=Mr(u),U(N,u.subTree,u,x,null)};Q?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=Mr(u);S(null,ue,h,v,u,x,k),m.el=ue.el}if(W&&we(W,x),!Q&&(j=$&&$.onVnodeMounted)){const ue=m;we(()=>Be(j,Z,ue),x)}(m.shapeFlag&256||Z&&Zn(Z.vnode)&&Z.vnode.shapeFlag&256)&&u.a&&we(u.a,x),u.isMounted=!0,m=h=v=null}},P=u.effect=new Ca(E,()=>La(w),u.scope),w=u.update=()=>P.run();w.id=u.uid,bt(u,!0),w()},J=(u,m,h)=>{m.component=u;const v=u.vnode.props;u.vnode=m,u.next=null,$c(u,m.props,v,h),Hc(u,m.children,h),Xt(),hi(),Gt()},G=(u,m,h,v,x,k,R,E,P=!1)=>{const w=u&&u.children,j=u?u.shapeFlag:0,N=m.children,{patchFlag:$,shapeFlag:D}=m;if($>0){if($&128){gt(w,N,h,v,x,k,R,E,P);return}else if($&256){Ce(w,N,h,v,x,k,R,E,P);return}}D&8?(j&16&&I(w,x,k),N!==w&&c(h,N)):j&16?D&16?gt(w,N,h,v,x,k,R,E,P):I(w,x,k,!0):(j&8&&c(h,""),D&16&&ke(N,h,v,x,k,R,E,P))},Ce=(u,m,h,v,x,k,R,E,P)=>{u=u||jt,m=m||jt;const w=u.length,j=m.length,N=Math.min(w,j);let $;for($=0;$<N;$++){const D=m[$]=P?st(m[$]):Ke(m[$]);S(u[$],D,h,null,x,k,R,E,P)}w>j?I(u,x,k,!0,!1,N):ke(m,h,v,x,k,R,E,P,N)},gt=(u,m,h,v,x,k,R,E,P)=>{let w=0;const j=m.length;let N=u.length-1,$=j-1;for(;w<=N&&w<=$;){const D=u[w],W=m[w]=P?st(m[w]):Ke(m[w]);if(en(D,W))S(D,W,h,null,x,k,R,E,P);else break;w++}for(;w<=N&&w<=$;){const D=u[N],W=m[$]=P?st(m[$]):Ke(m[$]);if(en(D,W))S(D,W,h,null,x,k,R,E,P);else break;N--,$--}if(w>N){if(w<=$){const D=$+1,W=D<j?m[D].el:v;for(;w<=$;)S(null,m[w]=P?st(m[w]):Ke(m[w]),h,W,x,k,R,E,P),w++}}else if(w>$)for(;w<=N;)xe(u[w],x,k,!0),w++;else{const D=w,W=w,Z=new Map;for(w=W;w<=$;w++){const Ae=m[w]=P?st(m[w]):Ke(m[w]);Ae.key!=null&&Z.set(Ae.key,w)}let Q,ue=0;const Re=$-W+1;let It=!1,ai=0;const Zt=new Array(Re);for(w=0;w<Re;w++)Zt[w]=0;for(w=D;w<=N;w++){const Ae=u[w];if(ue>=Re){xe(Ae,x,k,!0);continue}let He;if(Ae.key!=null)He=Z.get(Ae.key);else for(Q=W;Q<=$;Q++)if(Zt[Q-W]===0&&en(Ae,m[Q])){He=Q;break}He===void 0?xe(Ae,x,k,!0):(Zt[He-W]=w+1,He>=ai?ai=He:It=!0,S(Ae,m[He],h,null,x,k,R,E,P),ue++)}const ii=It?Yc(Zt):jt;for(Q=ii.length-1,w=Re-1;w>=0;w--){const Ae=W+w,He=m[Ae],oi=Ae+1<j?m[Ae+1].el:v;Zt[w]===0?S(null,He,h,oi,x,k,R,E,P):It&&(Q<0||w!==ii[Q]?Se(He,h,oi,2):Q--)}}},Se=(u,m,h,v,x=null)=>{const{el:k,type:R,transition:E,children:P,shapeFlag:w}=u;if(w&6){Se(u.component.subTree,m,h,v);return}if(w&128){u.suspense.move(m,h,v);return}if(w&64){R.move(u,m,h,Y);return}if(R===Ue){r(k,m,h);for(let N=0;N<P.length;N++)Se(P[N],m,h,v);r(u.anchor,m,h);return}if(R===Fr){O(u,m,h);return}if(v!==2&&w&1&&E)if(v===0)E.beforeEnter(k),r(k,m,h),we(()=>E.enter(k),x);else{const{leave:N,delayLeave:$,afterLeave:D}=E,W=()=>r(k,m,h),Z=()=>{N(k,()=>{W(),D&&D()})};$?$(k,W,Z):Z()}else r(k,m,h)},xe=(u,m,h,v=!1,x=!1)=>{const{type:k,props:R,ref:E,children:P,dynamicChildren:w,shapeFlag:j,patchFlag:N,dirs:$}=u;if(E!=null&&ta(E,null,h,u,!0),j&256){m.ctx.deactivate(u);return}const D=j&1&&$,W=!Zn(u);let Z;if(W&&(Z=R&&R.onVnodeBeforeUnmount)&&Be(Z,m,u),j&6)y(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}D&&vt(u,null,m,"beforeUnmount"),j&64?u.type.remove(u,m,h,x,Y,v):w&&(k!==Ue||N>0&&N&64)?I(w,m,h,!1,!0):(k===Ue&&N&384||!x&&j&16)&&I(P,m,h),v&&Rt(u)}(W&&(Z=R&&R.onVnodeUnmounted)||D)&&we(()=>{Z&&Be(Z,m,u),D&&vt(u,null,m,"unmounted")},h)},Rt=u=>{const{type:m,el:h,anchor:v,transition:x}=u;if(m===Ue){Mn(h,v);return}if(m===Fr){z(u);return}const k=()=>{a(h),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(u.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:E}=x,P=()=>R(h,k);E?E(u.el,k,P):P()}else k()},Mn=(u,m)=>{let h;for(;u!==m;)h=p(u),a(u),u=h;a(m)},y=(u,m,h)=>{const{bum:v,scope:x,update:k,subTree:R,um:E}=u;v&&Nr(v),x.stop(),k&&(k.active=!1,xe(R,u,m,h)),E&&we(E,m),we(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},I=(u,m,h,v=!1,x=!1,k=0)=>{for(let R=k;R<u.length;R++)xe(u[R],m,h,v,x)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),F=(u,m,h)=>{u==null?m._vnode&&xe(m._vnode,null,null,!0):S(m._vnode||null,u,m,null,null,null,h),hi(),Vo(),m._vnode=u},Y={p:S,um:xe,m:Se,r:Rt,mt:ht,mc:ke,pc:G,pbc:Pe,n:C,o:e};let ae,U;return t&&([ae,U]=t(Y)),{render:F,hydrate:ae,createApp:Uc(F,ae)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function fs(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=st(a[i]),s.el=o.el),n||fs(o,s)),s.type===Er&&(s.el=o.el)}}function Yc(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const qc=e=>e.__isTeleport,Ue=Symbol(void 0),Er=Symbol(void 0),Ot=Symbol(void 0),Fr=Symbol(void 0),fn=[];let Le=null;function xn(e=!1){fn.push(Le=e?null:[])}function Vc(){fn.pop(),Le=fn[fn.length-1]||null}let _n=1;function ki(e){_n+=e}function us(e){return e.dynamicChildren=_n>0?Le||jt:null,Vc(),_n>0&&Le&&Le.push(e),e}function $a(e,t,n,r,a,i){return us(Ar(e,t,n,r,a,i,!0))}function ds(e,t,n,r,a){return us(le(e,t,n,r,a,!0))}function na(e){return e?e.__v_isVNode===!0:!1}function en(e,t){return e.type===t.type&&e.key===t.key}const kr="__vInternal",ms=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:n})=>e!=null?pe(e)||ge(e)||H(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function Ar(e,t=null,n=null,r=0,a=null,i=e===Ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ms(t),ref:t&&er(t),scopeId:_r,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Me};return s?(za(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=pe(n)?8:16),_n>0&&!o&&Le&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Le.push(l),l}const le=Xc;function Xc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Sc)&&(e=Ot),na(e)){const s=Ut(e,t,!0);return n&&za(s,n),_n>0&&!i&&Le&&(s.shapeFlag&6?Le[Le.indexOf(e)]=s:Le.push(s)),s.patchFlag|=-2,s}if(lf(e)&&(e=e.__vccOpts),t){t=Gc(t);let{class:s,style:l}=t;s&&!pe(s)&&(t.class=wa(s)),ce(l)&&($o(l)&&!B(l)&&(l=ye({},l)),t.style=_a(l))}const o=pe(e)?1:pc(e)?128:qc(e)?64:ce(e)?4:H(e)?2:0;return Ar(e,t,n,r,a,o,i,!0)}function Gc(e){return e?$o(e)||kr in e?ye({},e):e:null}function Ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Jc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ms(s),ref:t&&t.ref?n&&a?B(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function an(e=" ",t=0){return le(Er,null,e,t)}function Qc(e="",t=!1){return t?(xn(),ds(Ot,null,e)):le(Ot,null,e)}function Ke(e){return e==null||typeof e=="boolean"?le(Ot):B(e)?le(Ue,null,e.slice()):typeof e=="object"?st(e):le(Er,null,String(e))}function st(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function za(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),za(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(kr in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[an(t)]):n=8);e.children=t,e.shapeFlag|=n}function Jc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=wa([t.class,r.class]));else if(a==="style")t.style=_a([t.style,r.style]);else if(pr(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Be(e,t,n,r=null){$e(e,t,7,[n,r])}const Zc=cs();let ef=0;function tf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Zc,i={uid:ef++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:is(r,a),emitsOptions:Go(r,a),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sc.bind(null,i),e.ce&&e.ce(i),i}let de=null;const Kt=e=>{de=e,e.scope.on()},At=()=>{de&&de.scope.off(),de=null};function ps(e){return e.vnode.shapeFlag&4}let wn=!1;function nf(e,t=!1){wn=t;const{props:n,children:r}=e.vnode,a=ps(e);jc(e,n,a,t),Dc(e,r);const i=a?rf(e,t):void 0;return wn=!1,i}function rf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=zo(new Proxy(e.ctx,Ic));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?of(e):null;Kt(e),Xt();const i=ft(r,e,0,[e.props,a]);if(Gt(),At(),Oo(i)){if(i.then(At,At),t)return i.then(o=>{Ai(e,o,t)}).catch(o=>{yr(o,e,0)});e.asyncDep=i}else Ai(e,i,t)}else hs(e,t)}function Ai(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ce(t)&&(e.setupState=Uo(t)),hs(e,n)}let Oi;function hs(e,t,n){const r=e.type;if(!e.render){if(!t&&Oi&&!r.render){const a=r.template||Fa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=ye(ye({isCustomElement:i,delimiters:s},o),l);r.render=Oi(a,f)}}e.render=r.render||je}Kt(e),Xt(),Tc(e),Gt(),At()}function af(e){return new Proxy(e.attrs,{get(t,n){return Ee(e,"get","$attrs"),t[n]}})}function of(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=af(e))},slots:e.slots,emit:e.emit,expose:t}}function Da(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Uo(zo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in cn)return cn[n](e)},has(t,n){return n in t||n in cn}}))}function sf(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function lf(e){return H(e)&&"__vccOpts"in e}const ie=(e,t)=>tc(e,t,wn);function Or(e,t,n){const r=arguments.length;return r===2?ce(t)&&!B(t)?na(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&na(n)&&(n=[n]),le(e,t,n))}const cf=Symbol(""),ff=()=>Ge(cf),uf="3.2.47",df="http://www.w3.org/2000/svg",_t=typeof document<"u"?document:null,Pi=_t&&_t.createElement("template"),mf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?_t.createElementNS(df,e):_t.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Pi.innerHTML=r?`<svg>${e}</svg>`:e;const s=Pi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function pf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function hf(e,t,n){const r=e.style,a=pe(n);if(n&&!a){if(t&&!pe(t))for(const i in t)n[i]==null&&ra(r,i,"");for(const i in n)ra(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ci=/\s*!important$/;function ra(e,t,n){if(B(n))n.forEach(r=>ra(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=gf(e,t);Ci.test(n)?e.setProperty(Vt(r),n.replace(Ci,""),"important"):e[r]=n}}const Si=["Webkit","Moz","ms"],jr={};function gf(e,t){const n=jr[t];if(n)return n;let r=qe(t);if(r!=="filter"&&r in e)return jr[t]=r;r=vr(r);for(let a=0;a<Si.length;a++){const i=Si[a]+r;if(i in e)return jr[t]=i}return t}const Ri="http://www.w3.org/1999/xlink";function vf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ri,t.slice(6,t.length)):e.setAttributeNS(Ri,t,n);else{const i=ll(t);n==null||i&&!Ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function bf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ao(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function yf(e,t,n,r){e.addEventListener(t,n,r)}function xf(e,t,n,r){e.removeEventListener(t,n,r)}function _f(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=wf(t);if(r){const f=i[t]=Af(r,a);yf(e,s,f,l)}else o&&(xf(e,s,o,l),i[t]=void 0)}}const Ii=/(?:Once|Passive|Capture)$/;function wf(e){let t;if(Ii.test(e)){t={};let r;for(;r=e.match(Ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let $r=0;const Ef=Promise.resolve(),kf=()=>$r||(Ef.then(()=>$r=0),$r=Date.now());function Af(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Of(r,n.value),t,5,[r])};return n.value=e,n.attached=kf(),n}function Of(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ti=/^on[a-z]/,Pf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?pf(e,r,a):t==="style"?hf(e,n,r):pr(t)?Ea(t)||_f(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?bf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),vf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ti.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ti.test(t)&&pe(n)?!1:t in e}const Sf=["ctrl","shift","alt","meta"],Rf={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Sf.some(n=>e[`${n}Key`]&&!t.includes(n))},tp=(e,t)=>(n,...r)=>{for(let a=0;a<t.length;a++){const i=Rf[t[a]];if(i&&i(n,t))return}return e(n,...r)},If=ye({patchProp:Pf},mf);let Ni;function Tf(){return Ni||(Ni=Kc(If))}const Nf=(...e)=>{const t=Tf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Mf(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Mf(e){return pe(e)?document.querySelector(e):e}const Lf="/IDS/TaskBuddy/assets/profile-picture-3912bebe.jpg";const Ha=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Ff={},jf=e=>(lc("data-v-6a413808"),e=e(),cc(),e),$f=jf(()=>Ar("img",{class:"icon profile-picture",src:Lf,alt:"Profile picture"},null,-1));function zf(e,t){const n=or("font-awesome-icon"),r=or("router-link");return xn(),$a("nav",null,[le(r,{to:"/"},{default:rn(()=>[le(n,{class:"icon",icon:"fa-solid fa-house"}),an(" Home ")]),_:1}),le(r,{to:"/league"},{default:rn(()=>[le(n,{class:"icon",icon:"fa-solid fa-ranking-star"}),an(" League ")]),_:1}),le(r,{to:"/social"},{default:rn(()=>[le(n,{class:"icon",icon:"fa-solid fa-users"}),an(" Social ")]),_:1}),le(r,{to:"/profile"},{default:rn(()=>[$f,an(" Profile ")]),_:1})])}const Df=Ha(Ff,[["render",zf],["__scopeId","data-v-6a413808"]]);const Hf={components:{Navigation:Df},computed:{currentRouteName(){return this.$route.name}}};function Bf(e,t,n,r,a,i){const o=or("router-view"),s=or("Navigation");return xn(),$a(Ue,null,[le(o,{class:"router-view"}),this.currentRouteName!=="Login"?(xn(),ds(s,{key:0})):Qc("",!0)],64)}const Uf=Ha(Hf,[["render",Bf],["__scopeId","data-v-bc4c285a"]]),Kf="modulepreload",Wf=function(e){return"/IDS/TaskBuddy/"+e},Mi={},Hn=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Wf(i),i in Mi)return;Mi[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===i&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":Kf,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,d)=>{f.addEventListener("load",c),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Nt=typeof window<"u";function Yf(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const X=Object.assign;function zr(e,t){const n={};for(const r in t){const a=t[r];n[r]=ze(a)?a.map(e):e(a)}return n}const un=()=>{},ze=Array.isArray,qf=/\/$/,Vf=e=>e.replace(qf,"");function Dr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("#");let l=t.indexOf("?");return s<l&&s>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,s>-1?s:t.length),a=e(i)),s>-1&&(r=r||t.slice(0,s),o=t.slice(s,t.length)),r=Jf(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function Xf(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gf(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Wt(t.matched[r],n.matched[a])&&gs(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Wt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function gs(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Qf(e[n],t[n]))return!1;return!0}function Qf(e,t){return ze(e)?Fi(e,t):ze(t)?Fi(t,e):e===t}function Fi(e,t){return ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Jf(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var En;(function(e){e.pop="pop",e.push="push"})(En||(En={}));var dn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(dn||(dn={}));function Zf(e){if(!e)if(Nt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Vf(e)}const eu=/^[^#]+#/;function tu(e,t){return e.replace(eu,"#")+t}function nu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pr=()=>({left:window.pageXOffset,top:window.pageYOffset});function ru(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=nu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ji(e,t){return(history.state?history.state.position-t:-1)+e}const aa=new Map;function au(e,t){aa.set(e,t)}function iu(e){const t=aa.get(e);return aa.delete(e),t}let ou=()=>location.protocol+"//"+location.host;function vs(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),Li(l,"")}return Li(n,e)+r+a}function su(e,t,n,r){let a=[],i=[],o=null;const s=({state:p})=>{const g=vs(e,location),A=n.value,S=t.value;let L=0;if(p){if(n.value=g,t.value=p,o&&o===A){o=null;return}L=S?p.position-S.position:0}else r(g);a.forEach(b=>{b(n.value,A,{delta:L,type:En.pop,direction:L?L>0?dn.forward:dn.back:dn.unknown})})};function l(){o=n.value}function f(p){a.push(p);const g=()=>{const A=a.indexOf(p);A>-1&&a.splice(A,1)};return i.push(g),g}function c(){const{history:p}=window;p.state&&p.replaceState(X({},p.state,{scroll:Pr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:l,listen:f,destroy:d}}function $i(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?Pr():null}}function lu(e){const{history:t,location:n}=window,r={value:vs(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,f,c){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:ou()+e+l;try{t[c?"replaceState":"pushState"](f,"",p),a.value=f}catch(g){console.error(g),n[c?"replace":"assign"](p)}}function o(l,f){const c=X({},t.state,$i(a.value.back,l,a.value.forward,!0),f,{position:a.value.position});i(l,c,!0),r.value=l}function s(l,f){const c=X({},a.value,t.state,{forward:l,scroll:Pr()});i(c.current,c,!0);const d=X({},$i(r.value,l,null),{position:c.position+1},f);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function cu(e){e=Zf(e);const t=lu(e),n=su(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=X({location:"",base:e,go:r,createHref:tu.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function fu(e){return typeof e=="string"||e&&typeof e=="object"}function bs(e){return typeof e=="string"||typeof e=="symbol"}const it={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ys=Symbol("");var zi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(zi||(zi={}));function Yt(e,t){return X(new Error,{type:e,[ys]:!0},t)}function Ve(e,t){return e instanceof Error&&ys in e&&(t==null||!!(e.type&t))}const Di="[^/]+?",uu={sensitive:!1,strict:!1,start:!0,end:!0},du=/[.+*?^${}()[\]/\\]/g;function mu(e,t){const n=X({},uu,t),r=[];let a=n.start?"^":"";const i=[];for(const f of e){const c=f.length?[]:[90];n.strict&&!f.length&&(a+="/");for(let d=0;d<f.length;d++){const p=f[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(a+="/"),a+=p.value.replace(du,"\\$&"),g+=40;else if(p.type===1){const{value:A,repeatable:S,optional:L,regexp:b}=p;i.push({name:A,repeatable:S,optional:L});const _=b||Di;if(_!==Di){g+=10;try{new RegExp(`(${_})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${A}" (${_}): `+z.message)}}let O=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(O=L&&f.length<2?`(?:/${O})`:"/"+O),L&&(O+="?"),a+=O,g+=20,L&&(g+=-8),S&&(g+=-20),_===".*"&&(g+=-50)}c.push(g)}r.push(c)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(f){const c=f.match(o),d={};if(!c)return null;for(let p=1;p<c.length;p++){const g=c[p]||"",A=i[p-1];d[A.name]=g&&A.repeatable?g.split("/"):g}return d}function l(f){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const g of p)if(g.type===0)c+=g.value;else if(g.type===1){const{value:A,repeatable:S,optional:L}=g,b=A in f?f[A]:"";if(ze(b)&&!S)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const _=ze(b)?b.join("/"):b;if(!_)if(L)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:i,parse:s,stringify:l}}function pu(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function hu(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=pu(r[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-r.length)===1){if(Hi(r))return 1;if(Hi(a))return-1}return a.length-r.length}function Hi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const gu={type:0,value:""},vu=/[a-zA-Z0-9_]/;function bu(e){if(!e)return[[]];if(e==="/")return[[gu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${f}": ${g}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,f="",c="";function d(){f&&(n===0?i.push({type:0,value:f}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:f,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function p(){f+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(f&&d(),o()):l===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:vu.test(l)?p():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),a}function yu(e,t,n){const r=mu(bu(e.path),n),a=X(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function xu(e,t){const n=[],r=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function a(c){return r.get(c)}function i(c,d,p){const g=!p,A=_u(c);A.aliasOf=p&&p.record;const S=Ki(t,c),L=[A];if("alias"in c){const O=typeof c.alias=="string"?[c.alias]:c.alias;for(const z of O)L.push(X({},A,{components:p?p.record.components:A.components,path:z,aliasOf:p?p.record:A}))}let b,_;for(const O of L){const{path:z}=O;if(d&&z[0]!=="/"){const K=d.record.path,ne=K[K.length-1]==="/"?"":"/";O.path=d.record.path+(z&&ne+z)}if(b=yu(O,d,S),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&c.name&&!Ui(b)&&o(c.name)),A.children){const K=A.children;for(let ne=0;ne<K.length;ne++)i(K[ne],b,p&&p.children[ne])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return _?()=>{o(_)}:un}function o(c){if(bs(c)){const d=r.get(c);d&&(r.delete(c),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(c);d>-1&&(n.splice(d,1),c.record.name&&r.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function s(){return n}function l(c){let d=0;for(;d<n.length&&hu(c,n[d])>=0&&(c.record.path!==n[d].record.path||!xs(c,n[d]));)d++;n.splice(d,0,c),c.record.name&&!Ui(c)&&r.set(c.record.name,c)}function f(c,d){let p,g={},A,S;if("name"in c&&c.name){if(p=r.get(c.name),!p)throw Yt(1,{location:c});S=p.record.name,g=X(Bi(d.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),c.params&&Bi(c.params,p.keys.map(_=>_.name))),A=p.stringify(g)}else if("path"in c)A=c.path,p=n.find(_=>_.re.test(A)),p&&(g=p.parse(A),S=p.record.name);else{if(p=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!p)throw Yt(1,{location:c,currentLocation:d});S=p.record.name,g=X({},d.params,c.params),A=p.stringify(g)}const L=[];let b=p;for(;b;)L.unshift(b.record),b=b.parent;return{name:S,path:A,params:g,matched:L,meta:Eu(L)}}return e.forEach(c=>i(c)),{addRoute:i,resolve:f,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Bi(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function _u(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:wu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function wu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ui(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Eu(e){return e.reduce((t,n)=>X(t,n.meta),{})}function Ki(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xs(e,t){return t.children.some(n=>n===e||xs(e,n))}const _s=/#/g,ku=/&/g,Au=/\//g,Ou=/=/g,Pu=/\?/g,ws=/\+/g,Cu=/%5B/g,Su=/%5D/g,Es=/%5E/g,Ru=/%60/g,ks=/%7B/g,Iu=/%7C/g,As=/%7D/g,Tu=/%20/g;function Ba(e){return encodeURI(""+e).replace(Iu,"|").replace(Cu,"[").replace(Su,"]")}function Nu(e){return Ba(e).replace(ks,"{").replace(As,"}").replace(Es,"^")}function ia(e){return Ba(e).replace(ws,"%2B").replace(Tu,"+").replace(_s,"%23").replace(ku,"%26").replace(Ru,"`").replace(ks,"{").replace(As,"}").replace(Es,"^")}function Mu(e){return ia(e).replace(Ou,"%3D")}function Lu(e){return Ba(e).replace(_s,"%23").replace(Pu,"%3F")}function Fu(e){return e==null?"":Lu(e).replace(Au,"%2F")}function lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ju(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(ws," "),o=i.indexOf("="),s=lr(o<0?i:i.slice(0,o)),l=o<0?null:lr(i.slice(o+1));if(s in t){let f=t[s];ze(f)||(f=t[s]=[f]),f.push(l)}else t[s]=l}return t}function Wi(e){let t="";for(let n in e){const r=e[n];if(n=Mu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&ia(i)):[r&&ia(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function $u(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=ze(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const zu=Symbol(""),Yi=Symbol(""),Ua=Symbol(""),Os=Symbol(""),oa=Symbol("");function tn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function lt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(Yt(4,{from:n,to:t})):d instanceof Error?s(d):fu(d)?s(Yt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},f=e.call(r&&r.instances[a],t,n,l);let c=Promise.resolve(f);e.length<3&&(c=c.then(l)),c.catch(d=>s(d))})}function Hr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(Du(s)){const f=(s.__vccOpts||s)[t];f&&a.push(lt(f,n,r,i,o))}else{let l=s();a.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const c=Yf(f)?f.default:f;i.components[o]=c;const p=(c.__vccOpts||c)[t];return p&&lt(p,n,r,i,o)()}))}}return a}function Du(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qi(e){const t=Ge(Ua),n=Ge(Os),r=ie(()=>t.resolve(zt(e.to))),a=ie(()=>{const{matched:l}=r.value,{length:f}=l,c=l[f-1],d=n.matched;if(!c||!d.length)return-1;const p=d.findIndex(Wt.bind(null,c));if(p>-1)return p;const g=Vi(l[f-2]);return f>1&&Vi(c)===g&&d[d.length-1].path!==g?d.findIndex(Wt.bind(null,l[f-2])):p}),i=ie(()=>a.value>-1&&Ku(n.params,r.value.params)),o=ie(()=>a.value>-1&&a.value===n.matched.length-1&&gs(n.params,r.value.params));function s(l={}){return Uu(l)?t[zt(e.replace)?"replace":"push"](zt(e.to)).catch(un):Promise.resolve()}return{route:r,href:ie(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const Hu=Rn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qi,setup(e,{slots:t}){const n=Sn(qi(e)),{options:r}=Ge(Ua),a=ie(()=>({[Xi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Or("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),Bu=Hu;function Uu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ku(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!ze(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function Vi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,n)=>e??t??n,Wu=Rn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ge(oa),a=ie(()=>e.route||r.value),i=Ge(Yi,0),o=ie(()=>{let f=zt(i);const{matched:c}=a.value;let d;for(;(d=c[f])&&!d.components;)f++;return f}),s=ie(()=>a.value.matched[o.value]);Jn(Yi,ie(()=>o.value+1)),Jn(zu,s),Jn(oa,a);const l=Gl();return ln(()=>[l.value,s.value,e.name],([f,c,d],[p,g,A])=>{c&&(c.instances[d]=f,g&&g!==c&&f&&f===p&&(c.leaveGuards.size||(c.leaveGuards=g.leaveGuards),c.updateGuards.size||(c.updateGuards=g.updateGuards))),f&&c&&(!g||!Wt(c,g)||!p)&&(c.enterCallbacks[d]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=a.value,c=e.name,d=s.value,p=d&&d.components[c];if(!p)return Gi(n.default,{Component:p,route:f});const g=d.props[c],A=g?g===!0?f.params:typeof g=="function"?g(f):g:null,L=Or(p,X({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[c]=null)},ref:l}));return Gi(n.default,{Component:L,route:f})||L}}});function Gi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yu=Wu;function qu(e){const t=xu(e.routes,e),n=e.parseQuery||ju,r=e.stringifyQuery||Wi,a=e.history,i=tn(),o=tn(),s=tn(),l=Ql(it);let f=it;Nt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=zr.bind(null,y=>""+y),d=zr.bind(null,Fu),p=zr.bind(null,lr);function g(y,I){let C,F;return bs(y)?(C=t.getRecordMatcher(y),F=I):F=y,t.addRoute(F,C)}function A(y){const I=t.getRecordMatcher(y);I&&t.removeRoute(I)}function S(){return t.getRoutes().map(y=>y.record)}function L(y){return!!t.getRecordMatcher(y)}function b(y,I){if(I=X({},I||l.value),typeof y=="string"){const u=Dr(n,y,I.path),m=t.resolve({path:u.path},I),h=a.createHref(u.fullPath);return X(u,m,{params:p(m.params),hash:lr(u.hash),redirectedFrom:void 0,href:h})}let C;if("path"in y)C=X({},y,{path:Dr(n,y.path,I.path).path});else{const u=X({},y.params);for(const m in u)u[m]==null&&delete u[m];C=X({},y,{params:d(y.params)}),I.params=d(I.params)}const F=t.resolve(C,I),Y=y.hash||"";F.params=c(p(F.params));const ae=Xf(r,X({},y,{hash:Nu(Y),path:F.path})),U=a.createHref(ae);return X({fullPath:ae,hash:Y,query:r===Wi?$u(y.query):y.query||{}},F,{redirectedFrom:void 0,href:U})}function _(y){return typeof y=="string"?Dr(n,y,l.value.path):X({},y)}function O(y,I){if(f!==y)return Yt(8,{from:I,to:y})}function z(y){return oe(y)}function K(y){return z(X(_(y),{replace:!0}))}function ne(y){const I=y.matched[y.matched.length-1];if(I&&I.redirect){const{redirect:C}=I;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),X({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function oe(y,I){const C=f=b(y),F=l.value,Y=y.state,ae=y.force,U=y.replace===!0,u=ne(C);if(u)return oe(X(_(u),{state:typeof u=="object"?X({},Y,u.state):Y,force:ae,replace:U}),I||C);const m=C;m.redirectedFrom=I;let h;return!ae&&Gf(r,F,C)&&(h=Yt(16,{to:m,from:F}),gt(F,F,!0,!1)),(h?Promise.resolve(h):ve(m,F)).catch(v=>Ve(v)?Ve(v,2)?v:Ce(v):J(v,m,F)).then(v=>{if(v){if(Ve(v,2))return oe(X({replace:U},_(v.to),{state:typeof v.to=="object"?X({},Y,v.to.state):Y,force:ae}),I||m)}else v=rt(m,F,!0,U,Y);return Pe(m,F,v),v})}function ke(y,I){const C=O(y,I);return C?Promise.reject(C):Promise.resolve()}function ve(y,I){let C;const[F,Y,ae]=Vu(y,I);C=Hr(F.reverse(),"beforeRouteLeave",y,I);for(const u of F)u.leaveGuards.forEach(m=>{C.push(lt(m,y,I))});const U=ke.bind(null,y,I);return C.push(U),Tt(C).then(()=>{C=[];for(const u of i.list())C.push(lt(u,y,I));return C.push(U),Tt(C)}).then(()=>{C=Hr(Y,"beforeRouteUpdate",y,I);for(const u of Y)u.updateGuards.forEach(m=>{C.push(lt(m,y,I))});return C.push(U),Tt(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!I.matched.includes(u))if(ze(u.beforeEnter))for(const m of u.beforeEnter)C.push(lt(m,y,I));else C.push(lt(u.beforeEnter,y,I));return C.push(U),Tt(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=Hr(ae,"beforeRouteEnter",y,I),C.push(U),Tt(C))).then(()=>{C=[];for(const u of o.list())C.push(lt(u,y,I));return C.push(U),Tt(C)}).catch(u=>Ve(u,8)?u:Promise.reject(u))}function Pe(y,I,C){for(const F of s.list())F(y,I,C)}function rt(y,I,C,F,Y){const ae=O(y,I);if(ae)return ae;const U=I===it,u=Nt?history.state:{};C&&(F||U?a.replace(y.fullPath,X({scroll:U&&u&&u.scroll},Y)):a.push(y.fullPath,Y)),l.value=y,gt(y,I,C,U),Ce()}let De;function St(){De||(De=a.listen((y,I,C)=>{if(!Mn.listening)return;const F=b(y),Y=ne(F);if(Y){oe(X(Y,{replace:!0}),F).catch(un);return}f=F;const ae=l.value;Nt&&au(ji(ae.fullPath,C.delta),Pr()),ve(F,ae).catch(U=>Ve(U,12)?U:Ve(U,2)?(oe(U.to,F).then(u=>{Ve(u,20)&&!C.delta&&C.type===En.pop&&a.go(-1,!1)}).catch(un),Promise.reject()):(C.delta&&a.go(-C.delta,!1),J(U,F,ae))).then(U=>{U=U||rt(F,ae,!1),U&&(C.delta&&!Ve(U,8)?a.go(-C.delta,!1):C.type===En.pop&&Ve(U,20)&&a.go(-1,!1)),Pe(F,ae,U)}).catch(un)}))}let ht=tn(),Jt=tn(),fe;function J(y,I,C){Ce(y);const F=Jt.list();return F.length?F.forEach(Y=>Y(y,I,C)):console.error(y),Promise.reject(y)}function G(){return fe&&l.value!==it?Promise.resolve():new Promise((y,I)=>{ht.add([y,I])})}function Ce(y){return fe||(fe=!y,St(),ht.list().forEach(([I,C])=>y?C(y):I()),ht.reset()),y}function gt(y,I,C,F){const{scrollBehavior:Y}=e;if(!Nt||!Y)return Promise.resolve();const ae=!C&&iu(ji(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return Yo().then(()=>Y(y,I,ae)).then(U=>U&&ru(U)).catch(U=>J(U,y,I))}const Se=y=>a.go(y);let xe;const Rt=new Set,Mn={currentRoute:l,listening:!0,addRoute:g,removeRoute:A,hasRoute:L,getRoutes:S,resolve:b,options:e,push:z,replace:K,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:Jt.add,isReady:G,install(y){const I=this;y.component("RouterLink",Bu),y.component("RouterView",Yu),y.config.globalProperties.$router=I,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(l)}),Nt&&!xe&&l.value===it&&(xe=!0,z(a.location).catch(Y=>{}));const C={};for(const Y in it)C[Y]=ie(()=>l.value[Y]);y.provide(Ua,I),y.provide(Os,Sn(C)),y.provide(oa,l);const F=y.unmount;Rt.add(y),y.unmount=function(){Rt.delete(y),Rt.size<1&&(f=it,De&&De(),De=null,l.value=it,xe=!1,fe=!1),F()}}};return Mn}function Tt(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Vu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(f=>Wt(f,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(f=>Wt(f,l))||a.push(l))}return[n,r,a]}const Xu={},Gu={class:"home"},Qu=Ar("h1",null,"Home",-1),Ju=[Qu];function Zu(e,t){return xn(),$a("div",Gu,Ju)}const ed=Ha(Xu,[["render",Zu]]),td=[{path:"/",name:"Home",component:ed},{path:"/login",name:"Login",component:()=>Hn(()=>import("./Login-6334c90f.js"),["assets/Login-6334c90f.js","assets/Login-1a8b0693.css"])},{path:"/league",name:"League",component:()=>Hn(()=>import("./League-832da325.js"),[])},{path:"/social",name:"Social",component:()=>Hn(()=>import("./Social-761210e9.js"),[])},{path:"/profile",name:"Profile",component:()=>Hn(()=>import("./Profile-c0d34d82.js"),[])}],nd=qu({history:cu(),routes:td});function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){me(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e){return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cr(e)}function rd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ji(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ad(e,t,n){return t&&Ji(e.prototype,t),n&&Ji(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ka(e,t){return od(e)||ld(e,t)||Ps(e,t)||fd()}function In(e){return id(e)||sd(e)||Ps(e)||cd()}function id(e){if(Array.isArray(e))return sa(e)}function od(e){if(Array.isArray(e))return e}function sd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ld(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ps(e,t){if(e){if(typeof e=="string")return sa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sa(e,t)}}function sa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zi=function(){},Wa={},Cs={},Ss=null,Rs={mark:Zi,measure:Zi};try{typeof window<"u"&&(Wa=window),typeof document<"u"&&(Cs=document),typeof MutationObserver<"u"&&(Ss=MutationObserver),typeof performance<"u"&&(Rs=performance)}catch{}var ud=Wa.navigator||{},eo=ud.userAgent,to=eo===void 0?"":eo,dt=Wa,te=Cs,no=Ss,Bn=Rs;dt.document;var nt=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Is=~to.indexOf("MSIE")||~to.indexOf("Trident/"),Un,Kn,Wn,Yn,qn,Je="___FONT_AWESOME___",la=16,Ts="fa",Ns="svg-inline--fa",Pt="data-fa-i2svg",ca="data-fa-pseudo-element",dd="data-fa-pseudo-element-pending",Ya="data-prefix",qa="data-icon",ro="fontawesome-i2svg",md="async",pd=["HTML","HEAD","STYLE","SCRIPT"],Ms=function(){try{return!0}catch{return!1}}(),ee="classic",se="sharp",Va=[ee,se];function Tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var kn=Tn((Un={},me(Un,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(Un,se,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Un)),An=Tn((Kn={},me(Kn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Kn,se,{solid:"fass",regular:"fasr"}),Kn)),On=Tn((Wn={},me(Wn,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Wn,se,{fass:"fa-solid",fasr:"fa-regular"}),Wn)),hd=Tn((Yn={},me(Yn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(Yn,se,{"fa-solid":"fass","fa-regular":"fasr"}),Yn)),gd=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ls="fa-layers-text",vd=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bd=Tn((qn={},me(qn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(qn,se,{900:"fass",400:"fasr"}),qn)),Fs=[1,2,3,4,5,6,7,8,9,10],yd=Fs.concat([11,12,13,14,15,16,17,18,19,20]),xd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Pn=new Set;Object.keys(An[ee]).map(Pn.add.bind(Pn));Object.keys(An[se]).map(Pn.add.bind(Pn));var _d=[].concat(Va,In(Pn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wt.GROUP,wt.SWAP_OPACITY,wt.PRIMARY,wt.SECONDARY]).concat(Fs.map(function(e){return"".concat(e,"x")})).concat(yd.map(function(e){return"w-".concat(e)})),mn=dt.FontAwesomeConfig||{};function wd(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ed(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var kd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kd.forEach(function(e){var t=Ka(e,2),n=t[0],r=t[1],a=Ed(wd(n));a!=null&&(mn[r]=a)})}var js={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ts,replacementClass:Ns,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mn.familyPrefix&&(mn.cssPrefix=mn.familyPrefix);var qt=T(T({},js),mn);qt.autoReplaceSvg||(qt.observeMutations=!1);var M={};Object.keys(js).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){qt[e]=n,pn.forEach(function(r){return r(M)})},get:function(){return qt[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){qt.cssPrefix=t,pn.forEach(function(n){return n(M)})},get:function(){return qt.cssPrefix}});dt.FontAwesomeConfig=M;var pn=[];function Ad(e){return pn.push(e),function(){pn.splice(pn.indexOf(e),1)}}var ot=la,Ye={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Od(e){if(!(!e||!nt)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var Pd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cn(){for(var e=12,t="";e-- >0;)t+=Pd[Math.random()*62|0];return t}function Qt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Xa(e){return e.classList?Qt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $s(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat($s(e[n]),'" ')},"").trim()}function Cr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ga(e){return e.size!==Ye.size||e.x!==Ye.x||e.y!==Ye.y||e.rotate!==Ye.rotate||e.flipX||e.flipY}function Sd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Rd(e){var t=e.transform,n=e.width,r=n===void 0?la:n,a=e.height,i=a===void 0?la:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Is?l+="translate(".concat(t.x/ot-r/2,"em, ").concat(t.y/ot-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/ot,"em), calc(-50% + ").concat(t.y/ot,"em)) "):l+="translate(".concat(t.x/ot,"em, ").concat(t.y/ot,"em) "),l+="scale(".concat(t.size/ot*(t.flipX?-1:1),", ").concat(t.size/ot*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Id=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zs(){var e=Ts,t=Ns,n=M.cssPrefix,r=M.replacementClass,a=Id;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ao=!1;function Br(){M.autoAddCss&&!ao&&(Od(zs()),ao=!0)}var Td={mixout:function(){return{dom:{css:zs,insertCss:Br}}},hooks:function(){return{beforeDOMElementCreation:function(){Br()},beforeI2svg:function(){Br()}}}},Ze=dt||{};Ze[Je]||(Ze[Je]={});Ze[Je].styles||(Ze[Je].styles={});Ze[Je].hooks||(Ze[Je].hooks={});Ze[Je].shims||(Ze[Je].shims=[]);var Fe=Ze[Je],Ds=[],Nd=function e(){te.removeEventListener("DOMContentLoaded",e),fr=1,Ds.map(function(t){return t()})},fr=!1;nt&&(fr=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),fr||te.addEventListener("DOMContentLoaded",Nd));function Md(e){nt&&(fr?setTimeout(e,0):Ds.push(e))}function Nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?$s(e):"<".concat(t," ").concat(Cd(r),">").concat(i.map(Nn).join(""),"</").concat(t,">")}function io(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ld=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ld(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Fd(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function fa(e){var t=Fd(e);return t.length===1?t[0].toString(16):null}function jd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function oo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ua(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=oo(t);typeof Fe.hooks.addPack=="function"&&!a?Fe.hooks.addPack(e,oo(t)):Fe.styles[e]=T(T({},Fe.styles[e]||{}),i),e==="fas"&&ua("fa",t)}var Vn,Xn,Gn,Lt=Fe.styles,$d=Fe.shims,zd=(Vn={},me(Vn,ee,Object.values(On[ee])),me(Vn,se,Object.values(On[se])),Vn),Qa=null,Hs={},Bs={},Us={},Ks={},Ws={},Dd=(Xn={},me(Xn,ee,Object.keys(kn[ee])),me(Xn,se,Object.keys(kn[se])),Xn);function Hd(e){return~_d.indexOf(e)}function Bd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Hd(a)?a:null}var Ys=function(){var t=function(i){return Ur(Lt,function(o,s,l){return o[l]=Ur(s,i,{}),o},{})};Hs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ws=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||M.autoFetchSvg,r=Ur($d,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Us=r.names,Ks=r.unicodes,Qa=Sr(M.styleDefault,{family:M.familyDefault})};Ad(function(e){Qa=Sr(e.styleDefault,{family:M.familyDefault})});Ys();function Ja(e,t){return(Hs[e]||{})[t]}function Ud(e,t){return(Bs[e]||{})[t]}function Et(e,t){return(Ws[e]||{})[t]}function qs(e){return Us[e]||{prefix:null,iconName:null}}function Kd(e){var t=Ks[e],n=Ja("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Qa}var Za=function(){return{prefix:null,iconName:null,rest:[]}};function Sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=kn[r][e],i=An[r][e]||An[r][a],o=e in Fe.styles?e:null;return i||o||null}var so=(Gn={},me(Gn,ee,Object.keys(On[ee])),me(Gn,se,Object.keys(On[se])),Gn);function Rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},me(t,ee,"".concat(M.cssPrefix,"-").concat(ee)),me(t,se,"".concat(M.cssPrefix,"-").concat(se)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(f){return so[ee].includes(f)}))&&(s=ee),(e.includes(i[se])||e.some(function(f){return so[se].includes(f)}))&&(s=se);var l=e.reduce(function(f,c){var d=Bd(M.cssPrefix,c);if(Lt[c]?(c=zd[s].includes(c)?hd[s][c]:c,o=c,f.prefix=c):Dd[s].indexOf(c)>-1?(o=c,f.prefix=Sr(c,{family:s})):d?f.iconName=d:c!==M.replacementClass&&c!==i[ee]&&c!==i[se]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?qs(f.iconName):{},g=Et(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||g||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Lt.far&&Lt.fas&&!M.autoFetchSvg&&(f.prefix="fas")}return f},Za());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===se&&(Lt.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Et(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var Wd=function(){function e(){rd(this,e),this.definitions={}}return ad(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=T(T({},n.definitions[s]||{}),o[s]),ua(s,o[s]);var l=On[ee][s];l&&ua(l,o[s]),Ys()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=f)}),n[s][l]=f}),n}}]),e}(),lo=[],Ft={},Ht={},Yd=Object.keys(Ht);function qd(e,t){var n=t.mixoutsTo;return lo=e,Ft={},Object.keys(Ht).forEach(function(r){Yd.indexOf(r)===-1&&delete Ht[r]}),lo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),cr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ft[o]||(Ft[o]=[]),Ft[o].push(i[o])})}r.provides&&r.provides(Ht)}),n}function da(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ft[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ct(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ft[e]||[];a.forEach(function(i){i.apply(null,n)})}function et(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ht[e]?Ht[e].apply(null,t):void 0}function ma(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(t)return t=Et(n,t)||t,io(Vs.definitions,n,t)||io(Fe.styles,n,t)}var Vs=new Wd,Vd=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Ct("noAuto")},Xd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return nt?(Ct("beforeI2svg",t),et("pseudoElements2svg",t),et("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,Md(function(){Qd({autoReplaceSvgRoot:n}),Ct("watch",t)})}},Gd={icon:function(t){if(t===null)return null;if(cr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Et(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Sr(t[0]);return{prefix:r,iconName:Et(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(gd))){var a=Rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:Et(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:Et(i,t)||t}}}},Oe={noAuto:Vd,config:M,dom:Xd,parse:Gd,library:Vs,findIconDefinition:ma,toHtml:Nn},Qd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Fe.styles).length>0||M.autoFetchSvg)&&nt&&M.autoReplaceSvg&&Oe.dom.i2svg({node:r})};function Ir(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(nt){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Jd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ga(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Cr(T(T({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Zd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},a),{},{id:o}),children:r}]}]}function ei(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=r.found?r:n,S=A.width,L=A.height,b=a==="fak",_=[M.replacementClass,i?"".concat(M.cssPrefix,"-").concat(i):""].filter(function(ve){return d.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(d.classes).join(" "),O={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(L)})},z=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(S/L*16*.0625,"em")}:{};g&&(O.attributes[Pt]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||Cn())},children:[l]}),delete O.attributes.title);var K=T(T({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:T(T({},z),d.styles)}),ne=r.found&&n.found?et("generateAbstractMask",K)||{children:[],attributes:{}}:et("generateAbstractIcon",K)||{children:[],attributes:{}},oe=ne.children,ke=ne.attributes;return K.children=oe,K.attributes=ke,s?Zd(K):Jd(K)}function co(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=T(T(T({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Pt]="");var c=T({},o.styles);Ga(a)&&(c.transform=Rd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Cr(c);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function em(e){var t=e.content,n=e.title,r=e.extra,a=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Cr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kr=Fe.styles;function pa(e){var t=e[0],n=e[1],r=e.slice(4),a=Ka(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(wt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var tm={found:!1,width:512,height:512};function nm(e,t){!Ms&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ha(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(et("missingIconAbstract"),n==="fa"){var i=qs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Kr[t]&&Kr[t][e]){var o=Kr[t][e];return r(pa(o))}nm(e,t),r(T(T({},tm),{},{icon:M.showMissingIcons&&e?et("missingIconAbstract")||{}:{}}))})}var fo=function(){},ga=M.measurePerformance&&Bn&&Bn.mark&&Bn.measure?Bn:{mark:fo,measure:fo},on='FA "6.3.0"',rm=function(t){return ga.mark("".concat(on," ").concat(t," begins")),function(){return Xs(t)}},Xs=function(t){ga.mark("".concat(on," ").concat(t," ends")),ga.measure("".concat(on," ").concat(t),"".concat(on," ").concat(t," begins"),"".concat(on," ").concat(t," ends"))},ti={begin:rm,end:Xs},tr=function(){};function uo(e){var t=e.getAttribute?e.getAttribute(Pt):null;return typeof t=="string"}function am(e){var t=e.getAttribute?e.getAttribute(Ya):null,n=e.getAttribute?e.getAttribute(qa):null;return t&&n}function im(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function om(){if(M.autoReplaceSvg===!0)return nr.replace;var e=nr[M.autoReplaceSvg];return e||nr.replace}function sm(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function lm(e){return te.createElement(e)}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?sm:lm:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Gs(o,{ceFn:r}))}),a}function cm(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Gs(a),n)}),n.getAttribute(Pt)===null&&M.keepOriginalSource){var r=te.createComment(cm(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Xa(n).indexOf(M.replacementClass))return nr.replace(t);var a=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===M.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Nn(s)}).join(`
`);n.setAttribute(Pt,""),n.innerHTML=o}};function mo(e){e()}function Qs(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=mo;M.mutateApproach===md&&(r=dt.requestAnimationFrame||mo),r(function(){var a=om(),i=ti.begin("mutate");e.map(a),i(),n()})}}var ni=!1;function Js(){ni=!0}function va(){ni=!1}var ur=null;function po(e){if(no&&M.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,o=i===void 0?tr:i,s=e.observeMutationsRoot,l=s===void 0?te:s;ur=new no(function(f){if(!ni){var c=mt();Qt(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!uo(d.addedNodes[0])&&(M.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&uo(d.target)&&~xd.indexOf(d.attributeName))if(d.attributeName==="class"&&am(d.target)){var p=Rr(Xa(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(Ya,g||c),A&&d.target.setAttribute(qa,A)}else im(d.target)&&a(d.target)})}}),nt&&ur.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fm(){ur&&ur.disconnect()}function um(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function dm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Rr(Xa(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ud(a.prefix,e.innerText)||Ja(a.prefix,fa(e.innerText))),!a.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function mm(e){var t=Qt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Cn()):(t["aria-hidden"]="true",t.focusable="false")),t}function pm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ye,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ho(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dm(e),r=n.iconName,a=n.prefix,i=n.rest,o=mm(e),s=da("parseNodeAttributes",{},e),l=t.styleParser?um(e):[];return T({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ye,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var hm=Fe.styles;function Zs(e){var t=M.autoReplaceSvg==="nest"?ho(e,{styleParser:!1}):ho(e);return~t.extra.classes.indexOf(Ls)?et("generateLayersText",e,t):et("generateSvgReplacementMutation",e,t)}var pt=new Set;Va.map(function(e){pt.add("fa-".concat(e))});Object.keys(kn[ee]).map(pt.add.bind(pt));Object.keys(kn[se]).map(pt.add.bind(pt));pt=In(pt);function go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!nt)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(ro,"-").concat(d))},a=function(d){return n.remove("".concat(ro,"-").concat(d))},i=M.autoFetchSvg?pt:Va.map(function(c){return"fa-".concat(c)}).concat(Object.keys(hm));i.includes("fa")||i.push("fa");var o=[".".concat(Ls,":not([").concat(Pt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Qt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ti.begin("onTree"),f=s.reduce(function(c,d){try{var p=Zs(d);p&&c.push(p)}catch(g){Ms||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(f).then(function(p){Qs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),d(p)})})}function gm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zs(e).then(function(n){n&&Qs([n],t)})}function vm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ma(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ma(a||{})),e(r,T(T({},n),{},{mask:a}))}}var bm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ye:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,d=n.title,p=d===void 0?null:d,g=n.titleId,A=g===void 0?null:g,S=n.classes,L=S===void 0?[]:S,b=n.attributes,_=b===void 0?{}:b,O=n.styles,z=O===void 0?{}:O;if(t){var K=t.prefix,ne=t.iconName,oe=t.icon;return Ir(T({type:"icon"},t),function(){return Ct("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(p?_["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(A||Cn()):(_["aria-hidden"]="true",_.focusable="false")),ei({icons:{main:pa(oe),mask:l?pa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:ne,transform:T(T({},Ye),a),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:_,styles:z,classes:L}})})}},ym={mixout:function(){return{icon:vm(bm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=go,n.nodeCallback=gm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return go(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,d=r.maskId,p=r.extra;return new Promise(function(g,A){Promise.all([ha(a,s),c.iconName?ha(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var L=Ka(S,2),b=L[0],_=L[1];g([n,ei({icons:{main:b,mask:_},prefix:s,iconName:a,transform:l,symbol:f,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Cr(s);l.length>0&&(a.style=l);var f;return Ga(o)&&(f=et("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},xm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Ir({type:"layer"},function(){Ct("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},_m={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Ir({type:"counter",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),em({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},wm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ye:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Ir({type:"text",content:n},function(){return Ct("beforeDOMElementCreation",{content:n,params:r}),co({content:n,transform:T(T({},Ye),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(M.cssPrefix,"-layers-text")].concat(In(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Is){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return M.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,co({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Em=new RegExp('"',"ug"),vo=[1105920,1112319];function km(e){var t=e.replace(Em,""),n=jd(t,0),r=n>=vo[0]&&n<=vo[1],a=t.length===2?t[0]===t[1]:!1;return{value:fa(a?t[0]:t),isSecondary:r||a}}function bo(e,t){var n="".concat(dd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Qt(e.children),o=i.filter(function(oe){return oe.getAttribute(ca)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(vd),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?se:ee,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?An[p][l[2].toLowerCase()]:bd[p][f],A=km(d),S=A.value,L=A.isSecondary,b=l[0].startsWith("FontAwesome"),_=Ja(g,S),O=_;if(b){var z=Kd(S);z.iconName&&z.prefix&&(_=z.iconName,g=z.prefix)}if(_&&!L&&(!o||o.getAttribute(Ya)!==g||o.getAttribute(qa)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var K=pm(),ne=K.extra;ne.attributes[ca]=t,ha(_,g).then(function(oe){var ke=ei(T(T({},K),{},{icons:{main:oe,mask:Za()},prefix:g,iconName:O,extra:ne,watchable:!0})),ve=te.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ke.map(function(Pe){return Nn(Pe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Am(e){return Promise.all([bo(e,"::before"),bo(e,"::after")])}function Om(e){return e.parentNode!==document.head&&!~pd.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ca)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function yo(e){if(nt)return new Promise(function(t,n){var r=Qt(e.querySelectorAll("*")).filter(Om).map(Am),a=ti.begin("searchPseudoElements");Js(),Promise.all(r).then(function(){a(),va(),t()}).catch(function(){a(),va(),n()})})}var Pm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=yo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;M.searchPseudoElements&&yo(a)}}},xo=!1,Cm={mixout:function(){return{dom:{unwatch:function(){Js(),xo=!0}}}},hooks:function(){return{bootstrap:function(){po(da("mutationObserverCallbacks",{}))},noAuto:function(){fm()},watch:function(n){var r=n.observeMutationsRoot;xo?va():po(da("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_o=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Sm={mixout:function(){return{parse:{transform:function(n){return _o(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=_o(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:p};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Wr={x:0,y:0,width:"100%",height:"100%"};function wo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Rm(e){return e.tag==="g"?e.children:[e]}var Im={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Rr(a.split(" ").map(function(o){return o.trim()})):Za();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,d=o.width,p=o.icon,g=Sd({transform:l,containerWidth:d,iconWidth:f}),A={tag:"rect",attributes:T(T({},Wr),{},{fill:"white"})},S=c.children?{children:c.children.map(wo)}:{},L={tag:"g",attributes:T({},g.inner),children:[wo(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},S))]},b={tag:"g",attributes:T({},g.outer),children:[L]},_="mask-".concat(s||Cn()),O="clip-".concat(s||Cn()),z={tag:"mask",attributes:T(T({},Wr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,b]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Rm(p)},z]};return r.push(K,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(_,")")},Wr)}),{children:r,attributes:a}}}},Tm={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:T(T({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:T(T({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:T(T({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Mm=[Td,ym,xm,_m,wm,Pm,Cm,Sm,Im,Tm,Nm];qd(Mm,{mixoutsTo:Oe});Oe.noAuto;var el=Oe.config,Lm=Oe.library;Oe.dom;var dr=Oe.parse;Oe.findIconDefinition;Oe.toHtml;var Fm=Oe.icon;Oe.layer;var jm=Oe.text;Oe.counter;function Eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Eo(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mr(e){return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $m(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function zm(e,t){if(e==null)return{};var n=$m(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ba(e){return Dm(e)||Hm(e)||Bm(e)||Um()}function Dm(e){if(Array.isArray(e))return ya(e)}function Hm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bm(e,t){if(e){if(typeof e=="string")return ya(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ya(e,t)}}function ya(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Um(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tl={exports:{}};(function(e){(function(t){var n=function(b,_,O){if(!f(_)||d(_)||p(_)||g(_)||l(_))return _;var z,K=0,ne=0;if(c(_))for(z=[],ne=_.length;K<ne;K++)z.push(n(b,_[K],O));else{z={};for(var oe in _)Object.prototype.hasOwnProperty.call(_,oe)&&(z[b(oe,O)]=n(b,_[oe],O))}return z},r=function(b,_){_=_||{};var O=_.separator||"_",z=_.split||/(?=[A-Z])/;return b.split(z).join(O)},a=function(b){return A(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var _=a(b);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(b,_){return r(b,_).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},d=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},g=function(b){return s.call(b)=="[object Boolean]"},A=function(b){return b=b-0,b===b},S=function(b,_){var O=_&&"process"in _?_.process:_;return typeof O!="function"?b:function(z,K){return O(z,b,K)}},L={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,_){return n(S(a,_),b)},decamelizeKeys:function(b,_){return n(S(o,_),b,_)},pascalizeKeys:function(b,_){return n(S(i,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=L:t.humps=L})(Km)})(tl);var Wm=tl.exports,Ym=["class","style"];function qm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ri(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Vm(c);break;case"style":l.style=qm(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=zm(n,Ym);return Or(e.tag,Ne(Ne(Ne({},t),{},{class:a.class,style:Ne(Ne({},a.style),o)},a.attrs),s),r)}var nl=!1;try{nl=!0}catch{}function Xm(){if(!nl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function Gm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ko(e){if(e&&mr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(dr.icon)return dr.icon(e);if(e===null)return null;if(mr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Qm=Rn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ie(function(){return ko(t.icon)}),i=ie(function(){return hn("classes",Gm(t))}),o=ie(function(){return hn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=ie(function(){return hn("mask",ko(t.mask))}),l=ie(function(){return Fm(a.value,Ne(Ne(Ne(Ne({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});ln(l,function(c){if(!c)return Xm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=ie(function(){return l.value?ri(l.value.abstract[0],{},r):null});return function(){return f.value}}});Rn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=el.familyPrefix,i=ie(function(){return["".concat(a,"-layers")].concat(ba(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Or("div",{class:i.value},r.default?r.default():[])}}});Rn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=el.familyPrefix,i=ie(function(){return hn("classes",[].concat(ba(t.counter?["".concat(a,"-layers-counter")]:[]),ba(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ie(function(){return hn("transform",typeof t.transform=="string"?dr.transform(t.transform):t.transform)}),s=ie(function(){var f=jm(t.value.toString(),Ne(Ne({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=ie(function(){return ri(s.value,{},r)});return function(){return l.value}}});var Jm={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"]},Zm={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},ep={prefix:"fas",iconName:"ranking-star",icon:[640,512,[],"e561","M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"]};Lm.add(Zm,ep,Jm);Nf(Uf).use(nd).component("font-awesome-icon",Qm).mount("#app");export{Ha as _,Ar as a,le as b,$a as c,rn as d,an as e,cc as f,xn as o,lc as p,or as r,tp as w};
