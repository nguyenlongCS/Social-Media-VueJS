(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ru(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},Es=[],pn=()=>{},Mv=()=>!1,ja=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),su=t=>t.startsWith("onUpdate:"),wt=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lv=Object.prototype.hasOwnProperty,Oe=(t,e)=>Lv.call(t,e),ue=Array.isArray,As=t=>Zi(t)==="[object Map]",qs=t=>Zi(t)==="[object Set]",Rd=t=>Zi(t)==="[object Date]",me=t=>typeof t=="function",et=t=>typeof t=="string",vn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",ag=t=>(Le(t)||me(t))&&me(t.then)&&me(t.catch),lg=Object.prototype.toString,Zi=t=>lg.call(t),Uv=t=>Zi(t).slice(8,-1),cg=t=>Zi(t)==="[object Object]",ou=t=>et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vi=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fv=/-(\w)/g,zt=qa(t=>t.replace(Fv,(e,n)=>n?n.toUpperCase():"")),Bv=/\B([A-Z])/g,es=qa(t=>t.replace(Bv,"-$1").toLowerCase()),Ha=qa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ul=qa(t=>t?`on${Ha(t)}`:""),cr=(t,e)=>!Object.is(t,e),Yo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ug=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bd;const $a=()=>bd||(bd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=et(r)?$v(r):au(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(et(t)||Le(t))return t}const jv=/;(?![^(]*\))/g,qv=/:([^]+)/,Hv=/\/\*[^]*?\*\//g;function $v(t){const e={};return t.replace(Hv,"").split(jv).forEach(n=>{if(n){const r=n.split(qv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ze(t){let e="";if(et(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=ze(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wv=ru(Kv);function hg(t){return!!t||t===""}function Gv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Kr(t[r],e[r]);return n}function Kr(t,e){if(t===e)return!0;let n=Rd(t),r=Rd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vn(t),r=vn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?Gv(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Kr(t[o],e[o]))return!1}}return String(t)===String(e)}function lu(t,e){return t.findIndex(n=>Kr(n,e))}const dg=t=>!!(t&&t.__v_isRef===!0),be=t=>et(t)?t:t==null?"":ue(t)||Le(t)&&(t.toString===lg||!me(t.toString))?dg(t)?be(t.value):JSON.stringify(t,fg,2):String(t),fg=(t,e)=>dg(e)?fg(t,e.value):As(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Fl(r,i)+" =>"]=s,n),{})}:qs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Fl(n))}:vn(e)?Fl(e):Le(e)&&!ue(e)&&!cg(e)?String(e):e,Fl=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class zv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qv(){return kt}let Me;const Bl=new WeakSet;class pg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Bl.has(this)&&(Bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cd(this),_g(this);const e=Me,n=Zt;Me=this,Zt=!0;try{return this.fn()}finally{yg(this),Me=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hu(e);this.deps=this.depsTail=void 0,Cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gc(this)&&this.run()}get dirty(){return gc(this)}}let gg=0,Ei,Ai;function mg(t,e=!1){if(t.flags|=8,e){t.next=Ai,Ai=t;return}t.next=Ei,Ei=t}function cu(){gg++}function uu(){if(--gg>0)return;if(Ai){let e=Ai;for(Ai=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ei;){let e=Ei;for(Ei=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function _g(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hu(r),Yv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function gc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(vg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function vg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Vi)||(t.globalVersion=Vi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!gc(t))))return;t.flags|=2;const e=t.dep,n=Me,r=Zt;Me=t,Zt=!0;try{_g(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Zt=r,yg(t),t.flags&=-3}}function hu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Yv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const Eg=[];function Ln(){Eg.push(Zt),Zt=!1}function Un(){const t=Eg.pop();Zt=t===void 0?!0:t}function Cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Vi=0;class Xv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class du{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!Zt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Xv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,Ag(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Vi++,this.notify(e)}notify(e){cu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uu()}}}function Ag(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ag(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mc=new WeakMap,Br=Symbol(""),_c=Symbol(""),xi=Symbol("");function yt(t,e,n){if(Zt&&Me){let r=mc.get(t);r||mc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new du),s.map=r,s.key=n),s.track()}}function Pn(t,e,n,r,s,i){const o=mc.get(t);if(!o){Vi++;return}const l=c=>{c&&c.trigger()};if(cu(),e==="clear")o.forEach(l);else{const c=ue(t),u=c&&ou(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===xi||!vn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(xi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Br)),As(t)&&l(o.get(_c)));break;case"delete":c||(l(o.get(Br)),As(t)&&l(o.get(_c)));break;case"set":As(t)&&l(o.get(Br));break}}uu()}function ds(t){const e=Ne(t);return e===t?e:(yt(e,"iterate",xi),Wt(t)?e:e.map(ct))}function Ka(t){return yt(t=Ne(t),"iterate",xi),t}const Jv={__proto__:null,[Symbol.iterator](){return jl(this,Symbol.iterator,ct)},concat(...t){return ds(this).concat(...t.map(e=>ue(e)?ds(e):e))},entries(){return jl(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return Rn(this,"find",t,e,ct,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ql(this,"includes",t)},indexOf(...t){return ql(this,"indexOf",t)},join(t){return ds(this).join(t)},lastIndexOf(...t){return ql(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return li(this,"pop")},push(...t){return li(this,"push",t)},reduce(t,...e){return Sd(this,"reduce",t,e)},reduceRight(t,...e){return Sd(this,"reduceRight",t,e)},shift(){return li(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return li(this,"splice",t)},toReversed(){return ds(this).toReversed()},toSorted(t){return ds(this).toSorted(t)},toSpliced(...t){return ds(this).toSpliced(...t)},unshift(...t){return li(this,"unshift",t)},values(){return jl(this,"values",ct)}};function jl(t,e,n){const r=Ka(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Zv=Array.prototype;function Rn(t,e,n,r,s,i){const o=Ka(t),l=o!==t&&!Wt(t),c=o[e];if(c!==Zv[e]){const p=c.apply(t,i);return l?ct(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,ct(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Sd(t,e,n,r){const s=Ka(t);let i=n;return s!==t&&(Wt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,ct(l),c,t)}),s[e](i,...r)}function ql(t,e,n){const r=Ne(t);yt(r,"iterate",xi);const s=r[e](...n);return(s===-1||s===!1)&&gu(n[0])?(n[0]=Ne(n[0]),r[e](...n)):s}function li(t,e,n=[]){Ln(),cu();const r=Ne(t)[e].apply(t,n);return uu(),Un(),r}const eE=ru("__proto__,__v_isRef,__isVue"),wg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn));function tE(t){vn(t)||(t=String(t));const e=Ne(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Tg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?hE:Cg:i?bg:Rg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let c;if(o&&(c=Jv[n]))return c;if(n==="hasOwnProperty")return tE}const l=Reflect.get(e,n,At(e)?e:r);return(vn(n)?wg.has(n):eE(n))||(s||yt(e,"get",n),i)?l:At(l)?o&&ou(n)?l:l.value:Le(l)?s?ha(l):ks(l):l}}class Ig extends Tg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gr(i);if(!Wt(r)&&!gr(r)&&(i=Ne(i),r=Ne(r)),!ue(e)&&At(i)&&!At(r))return c?!1:(i.value=r,!0)}const o=ue(e)&&ou(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,At(e)?e:s);return e===Ne(s)&&(o?cr(r,i)&&Pn(e,"set",n,r):Pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!wg.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ue(e)?"length":Br),Reflect.ownKeys(e)}}class nE extends Tg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rE=new Ig,sE=new nE,iE=new Ig(!0);const yc=t=>t,Oo=t=>Reflect.getPrototypeOf(t);function oE(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=As(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?yc:e?da:ct;return!e&&yt(i,"iterate",c?_c:Br),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Do(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function aE(t,e){const n={get(s){const i=this.__v_raw,o=Ne(i),l=Ne(s);t||(cr(s,l)&&yt(o,"get",s),yt(o,"get",l));const{has:c}=Oo(o),u=e?yc:t?da:ct;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Ne(s),"iterate",Br),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ne(i),l=Ne(s);return t||(cr(s,l)&&yt(o,"has",s),yt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ne(l),u=e?yc:t?da:ct;return!t&&yt(c,"iterate",Br),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return wt(n,t?{add:Do("add"),set:Do("set"),delete:Do("delete"),clear:Do("clear")}:{add(s){!e&&!Wt(s)&&!gr(s)&&(s=Ne(s));const i=Ne(this);return Oo(i).has.call(i,s)||(i.add(s),Pn(i,"add",s,s)),this},set(s,i){!e&&!Wt(i)&&!gr(i)&&(i=Ne(i));const o=Ne(this),{has:l,get:c}=Oo(o);let u=l.call(o,s);u||(s=Ne(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Pn(o,"set",s,i):Pn(o,"add",s,i),this},delete(s){const i=Ne(this),{has:o,get:l}=Oo(i);let c=o.call(i,s);c||(s=Ne(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Pn(i,"delete",s,void 0),u},clear(){const s=Ne(this),i=s.size!==0,o=s.clear();return i&&Pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=oE(s,t,e)}),n}function fu(t,e){const n=aE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const lE={get:fu(!1,!1)},cE={get:fu(!1,!0)},uE={get:fu(!0,!1)};const Rg=new WeakMap,bg=new WeakMap,Cg=new WeakMap,hE=new WeakMap;function dE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fE(t){return t.__v_skip||!Object.isExtensible(t)?0:dE(Uv(t))}function ks(t){return gr(t)?t:pu(t,!1,rE,lE,Rg)}function Sg(t){return pu(t,!1,iE,cE,bg)}function ha(t){return pu(t,!0,sE,uE,Cg)}function pu(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=fE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ws(t){return gr(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function gu(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function pE(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&ug(t,"__v_skip",!0),t}const ct=t=>Le(t)?ks(t):t,da=t=>Le(t)?ha(t):t;function At(t){return t?t.__v_isRef===!0:!1}function Ce(t){return Pg(t,!1)}function gE(t){return Pg(t,!0)}function Pg(t,e){return At(t)?t:new mE(t,e)}class mE{constructor(e,n){this.dep=new du,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||gr(e);e=r?e:Ne(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function Q(t){return At(t)?t.value:t}const _E={get:(t,e,n)=>e==="__v_raw"?t:Q(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return At(s)&&!At(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function kg(t){return ws(t)?t:new Proxy(t,_E)}class yE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new du(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return mg(this,!0),!0}get value(){const e=this.dep.track();return vg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vE(t,e,n=!1){let r,s;return me(t)?r=t:(r=t.get,s=t.set),new yE(r,s,n)}const Vo={},fa=new WeakMap;let Mr;function EE(t,e=!1,n=Mr){if(n){let r=fa.get(n);r||fa.set(n,r=[]),r.push(t)}}function AE(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=D=>s?D:Wt(D)||s===!1||s===0?kn(D,1):kn(D);let d,p,g,_,A=!1,C=!1;if(At(t)?(p=()=>t.value,A=Wt(t)):ws(t)?(p=()=>u(t),A=!0):ue(t)?(C=!0,A=t.some(D=>ws(D)||Wt(D)),p=()=>t.map(D=>{if(At(D))return D.value;if(ws(D))return u(D);if(me(D))return c?c(D,2):D()})):me(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Ln();try{g()}finally{Un()}}const D=Mr;Mr=d;try{return c?c(t,3,[_]):t(_)}finally{Mr=D}}:p=pn,e&&s){const D=p,J=s===!0?1/0:s;p=()=>kn(D(),J)}const P=Qv(),x=()=>{d.stop(),P&&P.active&&iu(P.effects,d)};if(i&&e){const D=e;e=(...J)=>{D(...J),x()}}let M=C?new Array(t.length).fill(Vo):Vo;const L=D=>{if(!(!(d.flags&1)||!d.dirty&&!D))if(e){const J=d.run();if(s||A||(C?J.some((K,R)=>cr(K,M[R])):cr(J,M))){g&&g();const K=Mr;Mr=d;try{const R=[J,M===Vo?void 0:C&&M[0]===Vo?[]:M,_];M=J,c?c(e,3,R):e(...R)}finally{Mr=K}}}else d.run()};return l&&l(L),d=new pg(p),d.scheduler=o?()=>o(L,!1):L,_=D=>EE(D,!1,d),g=d.onStop=()=>{const D=fa.get(d);if(D){if(c)c(D,4);else for(const J of D)J();fa.delete(d)}},e?r?L(!0):M=d.run():o?o(L.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function kn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,At(t))kn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(qs(t)||As(t))t.forEach(r=>{kn(r,e,n)});else if(cg(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(t,e,n,r){try{return r?t(...r):t()}catch(s){Wa(s,e,n)}}function En(t,e,n,r){if(me(t)){const s=eo(t,e,n,r);return s&&ag(s)&&s.catch(i=>{Wa(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function Wa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Ln(),eo(i,null,10,[t,c,u]),Un();return}}wE(t,n,s,r,o)}function wE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let cn=-1;const Ts=[];let nr=null,ps=0;const Ng=Promise.resolve();let pa=null;function mu(t){const e=pa||Ng;return t?e.then(this?t.bind(this):t):e}function TE(t){let e=cn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Mi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function _u(t){if(!(t.flags&1)){const e=Mi(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Mi(n)?St.push(t):St.splice(TE(e),0,t),t.flags|=1,Og()}}function Og(){pa||(pa=Ng.then(Vg))}function IE(t){ue(t)?Ts.push(...t):nr&&t.id===-1?nr.splice(ps+1,0,t):t.flags&1||(Ts.push(t),t.flags|=1),Og()}function Pd(t,e,n=cn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Dg(t){if(Ts.length){const e=[...new Set(Ts)].sort((n,r)=>Mi(n)-Mi(r));if(Ts.length=0,nr){nr.push(...e);return}for(nr=e,ps=0;ps<nr.length;ps++){const n=nr[ps];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,ps=0}}const Mi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vg(t){try{for(cn=0;cn<St.length;cn++){const e=St[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),eo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<St.length;cn++){const e=St[cn];e&&(e.flags&=-2)}cn=-1,St.length=0,Dg(),pa=null,(St.length||Ts.length)&&Vg()}}let Ut=null,xg=null;function ga(t){const e=Ut;return Ut=t,xg=t&&t.type.__scopeId||null,e}function RE(t,e=Ut,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fd(-1);const i=ga(e);let o;try{o=t(...s)}finally{ga(i),r._d&&Fd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Cn(t,e){if(Ut===null)return t;const n=Xa(Ut),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(me(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Vr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Ln(),En(c,n,8,[t.el,l,t,e]),Un())}}const bE=Symbol("_vte"),CE=t=>t.__isTeleport;function yu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,yu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Mg(t,e){return me(t)?wt({name:t.name},e,{setup:t}):t}function Lg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ma(t,e,n,r,s=!1){if(ue(t)){t.forEach((A,C)=>ma(A,e&&(ue(e)?e[C]:e),n,r,s));return}if(wi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ma(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Xa(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,g=Ne(p),_=p===xe?()=>!1:A=>Oe(g,A);if(u!=null&&u!==c&&(et(u)?(d[u]=null,_(u)&&(p[u]=null)):At(u)&&(u.value=null)),me(c))eo(c,l,12,[o,d]);else{const A=et(c),C=At(c);if(A||C){const P=()=>{if(t.f){const x=A?_(c)?p[c]:d[c]:c.value;s?ue(x)&&iu(x,i):ue(x)?x.includes(i)||x.push(i):A?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else A?(d[c]=o,_(c)&&(p[c]=o)):C&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,Lt(P,n)):P()}}}$a().requestIdleCallback;$a().cancelIdleCallback;const wi=t=>!!t.type.__asyncLoader,Ug=t=>t.type.__isKeepAlive;function SE(t,e){Fg(t,"a",e)}function PE(t,e){Fg(t,"da",e)}function Fg(t,e,n=Et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ga(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ug(s.parent.vnode)&&kE(r,e,n,s),s=s.parent}}function kE(t,e,n,r){const s=Ga(e,t,r,!0);za(()=>{iu(r[e],s)},n)}function Ga(t,e,n=Et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ln();const l=to(n),c=En(e,n,t,o);return l(),Un(),c});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=Et)=>{(!Ui||t==="sp")&&Ga(t,(...r)=>e(...r),n)},NE=Hn("bm"),Rr=Hn("m"),OE=Hn("bu"),DE=Hn("u"),VE=Hn("bum"),za=Hn("um"),xE=Hn("sp"),ME=Hn("rtg"),LE=Hn("rtc");function UE(t,e=Et){Ga("ec",t,e)}const FE="components";function BE(t,e){return qE(FE,t,!0,e)||t}const jE=Symbol.for("v-ndc");function qE(t,e,n=!0,r=!1){const s=Ut||Et;if(s){const i=s.type;{const l=kA(i,!1);if(l&&(l===e||l===zt(e)||l===Ha(zt(e))))return i}const o=kd(s[t]||i[t],e)||kd(s.appContext[t],e);return!o&&r?i:o}}function kd(t,e){return t&&(t[e]||t[zt(e)]||t[Ha(zt(e))])}function HE(t,e,n,r){let s;const i=n,o=ue(t);if(o||et(t)){const l=o&&ws(t);let c=!1,u=!1;l&&(c=!Wt(t),u=gr(t),t=Ka(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?da(ct(t[d])):ct(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const vc=t=>t?im(t)?Xa(t):vc(t.parent):null,Ti=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jg(t),$forceUpdate:t=>t.f||(t.f=()=>{_u(t.update)}),$nextTick:t=>t.n||(t.n=mu.bind(t.proxy)),$watch:t=>uA.bind(t)}),Hl=(t,e)=>t!==xe&&!t.__isScriptSetup&&Oe(t,e),$E={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Hl(r,e))return o[e]=1,r[e];if(s!==xe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==xe&&Oe(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const d=Ti[e];let p,g;if(d)return e==="$attrs"&&yt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Hl(s,e)?(s[e]=n,!0):r!==xe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==xe&&Oe(t,o)||Hl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(Ti,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Nd(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function KE(t){const e=jg(t),n=t.proxy,r=t.ctx;Ec=!1,e.beforeCreate&&Od(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:A,activated:C,deactivated:P,beforeDestroy:x,beforeUnmount:M,destroyed:L,unmounted:D,render:J,renderTracked:K,renderTriggered:R,errorCaptured:y,serverPrefetch:I,expose:S,inheritAttrs:w,components:b,directives:v,filters:rt}=e;if(u&&WE(u,r,null),o)for(const Ae in o){const Ee=o[Ae];me(Ee)&&(r[Ae]=Ee.bind(n))}if(s){const Ae=s.call(n,n);Le(Ae)&&(t.data=ks(Ae))}if(Ec=!0,i)for(const Ae in i){const Ee=i[Ae],xt=me(Ee)?Ee.bind(n,n):me(Ee.get)?Ee.get.bind(n,n):pn,Yt=!me(Ee)&&me(Ee.set)?Ee.set.bind(n):pn,Ht=Be({get:xt,set:Yt});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:qe=>Ht.value=qe})}if(l)for(const Ae in l)Bg(l[Ae],r,n,Ae);if(c){const Ae=me(c)?c.call(n):c;Reflect.ownKeys(Ae).forEach(Ee=>{Xo(Ee,Ae[Ee])})}d&&Od(d,t,"c");function je(Ae,Ee){ue(Ee)?Ee.forEach(xt=>Ae(xt.bind(n))):Ee&&Ae(Ee.bind(n))}if(je(NE,p),je(Rr,g),je(OE,_),je(DE,A),je(SE,C),je(PE,P),je(UE,y),je(LE,K),je(ME,R),je(VE,M),je(za,D),je(xE,I),ue(S))if(S.length){const Ae=t.exposed||(t.exposed={});S.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>n[Ee],set:xt=>n[Ee]=xt})})}else t.exposed||(t.exposed={});J&&t.render===pn&&(t.render=J),w!=null&&(t.inheritAttrs=w),b&&(t.components=b),v&&(t.directives=v),I&&Lg(t)}function WE(t,e,n=pn){ue(t)&&(t=Ac(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),At(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Od(t,e,n){En(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bg(t,e,n,r){let s=r.includes(".")?em(n,r):()=>n[r];if(et(t)){const i=e[t];me(i)&&jr(s,i)}else if(me(t))jr(s,t.bind(n));else if(Le(t))if(ue(t))t.forEach(i=>Bg(i,e,n,r));else{const i=me(t.handler)?t.handler.bind(n):e[t.handler];me(i)&&jr(s,i,t)}}function jg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>_a(c,u,o,!0)),_a(c,e,o)),Le(e)&&i.set(e,c),c}function _a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_a(t,i,n,!0),s&&s.forEach(o=>_a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=GE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const GE={data:Dd,props:Vd,emits:Vd,methods:fi,computed:fi,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:fi,directives:fi,watch:QE,provide:Dd,inject:zE};function Dd(t,e){return e?t?function(){return wt(me(t)?t.call(this,this):t,me(e)?e.call(this,this):e)}:e:t}function zE(t,e){return fi(Ac(t),Ac(e))}function Ac(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?wt(Object.create(null),t,e):e}function Vd(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:wt(Object.create(null),Nd(t),Nd(e??{})):e}function QE(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function qg(){return{app:null,config:{isNativeTag:Mv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let YE=0;function XE(t,e){return function(r,s=null){me(r)||(r=wt({},r)),s!=null&&!Le(s)&&(s=null);const i=qg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:YE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:OA,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(u,...p)):me(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const _=u._ceVNode||ye(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,d,g),c=!0,u._container=d,d.__vue_app__=u,Xa(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(En(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Is;Is=u;try{return d()}finally{Is=p}}};return u}}let Is=null;function Xo(t,e){if(Et){let n=Et.provides;const r=Et.parent&&Et.parent.provides;r===n&&(n=Et.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=Et||Ut;if(r||Is){let s=Is?Is._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&me(e)?e.call(r&&r.proxy):e}}const Hg={},$g=()=>Object.create(Hg),Kg=t=>Object.getPrototypeOf(t)===Hg;function JE(t,e,n,r=!1){const s={},i=$g();t.propsDefaults=Object.create(null),Wg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Sg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ZE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ne(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Qa(t.emitsOptions,g))continue;const _=e[g];if(c)if(Oe(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const A=zt(g);s[A]=wc(c,l,A,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Wg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=es(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=wc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&Pn(t.attrs,"set","")}function Wg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(vi(c))continue;const u=e[c];let d;s&&Oe(s,d=zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Qa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ne(n),u=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=wc(s,c,p,u[p],t,!Oe(u,p))}}return o}function wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&me(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=to(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===es(n))&&(r=!0))}return r}const eA=new WeakMap;function Gg(t,e,n=!1){const r=n?eA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!me(t)){const d=p=>{c=!0;const[g,_]=Gg(p,e,!0);wt(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Le(t)&&r.set(t,Es),Es;if(ue(i))for(let d=0;d<i.length;d++){const p=zt(i[d]);xd(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=zt(d);if(xd(p)){const g=i[d],_=o[p]=ue(g)||me(g)?{type:g}:wt({},g),A=_.type;let C=!1,P=!0;if(ue(A))for(let x=0;x<A.length;++x){const M=A[x],L=me(M)&&M.name;if(L==="Boolean"){C=!0;break}else L==="String"&&(P=!1)}else C=me(A)&&A.name==="Boolean";_[0]=C,_[1]=P,(C||Oe(_,"default"))&&l.push(p)}}const u=[o,l];return Le(t)&&r.set(t,u),u}function xd(t){return t[0]!=="$"&&!vi(t)}const vu=t=>t[0]==="_"||t==="$stable",Eu=t=>ue(t)?t.map(dn):[dn(t)],tA=(t,e,n)=>{if(e._n)return e;const r=RE((...s)=>Eu(e(...s)),n);return r._c=!1,r},zg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(vu(s))continue;const i=t[s];if(me(i))e[s]=tA(s,i,r);else if(i!=null){const o=Eu(i);e[s]=()=>o}}},Qg=(t,e)=>{const n=Eu(e);t.slots.default=()=>n},Yg=(t,e,n)=>{for(const r in e)(n||!vu(r))&&(t[r]=e[r])},nA=(t,e,n)=>{const r=t.slots=$g();if(t.vnode.shapeFlag&32){const s=e._;s?(Yg(r,e,n),n&&ug(r,"_",s,!0)):zg(e,r)}else e&&Qg(t,e)},rA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Yg(s,e,n):(i=!e.$stable,zg(e,s)),o=e}else e&&(Qg(t,e),o={default:1});if(i)for(const l in s)!vu(l)&&o[l]==null&&delete s[l]},Lt=_A;function sA(t){return iA(t)}function iA(t,e){const n=$a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=pn,insertStaticContent:A}=t,C=(E,T,k,F=null,H=null,B=null,X=void 0,G=null,W=!!T.dynamicChildren)=>{if(E===T)return;E&&!ci(E,T)&&(F=U(E),qe(E,H,B,!0),E=null),T.patchFlag===-2&&(W=!1,T.dynamicChildren=null);const{type:$,ref:ae,shapeFlag:Y}=T;switch($){case Ya:P(E,T,k,F);break;case mr:x(E,T,k,F);break;case Kl:E==null&&M(T,k,F,X);break;case hn:b(E,T,k,F,H,B,X,G,W);break;default:Y&1?J(E,T,k,F,H,B,X,G,W):Y&6?v(E,T,k,F,H,B,X,G,W):(Y&64||Y&128)&&$.process(E,T,k,F,H,B,X,G,W,re)}ae!=null&&H&&ma(ae,E&&E.ref,B,T||E,!T)},P=(E,T,k,F)=>{if(E==null)r(T.el=l(T.children),k,F);else{const H=T.el=E.el;T.children!==E.children&&u(H,T.children)}},x=(E,T,k,F)=>{E==null?r(T.el=c(T.children||""),k,F):T.el=E.el},M=(E,T,k,F)=>{[E.el,E.anchor]=A(E.children,T,k,F,E.el,E.anchor)},L=({el:E,anchor:T},k,F)=>{let H;for(;E&&E!==T;)H=g(E),r(E,k,F),E=H;r(T,k,F)},D=({el:E,anchor:T})=>{let k;for(;E&&E!==T;)k=g(E),s(E),E=k;s(T)},J=(E,T,k,F,H,B,X,G,W)=>{T.type==="svg"?X="svg":T.type==="math"&&(X="mathml"),E==null?K(T,k,F,H,B,X,G,W):I(E,T,H,B,X,G,W)},K=(E,T,k,F,H,B,X,G)=>{let W,$;const{props:ae,shapeFlag:Y,transition:se,dirs:fe}=E;if(W=E.el=o(E.type,B,ae&&ae.is,ae),Y&8?d(W,E.children):Y&16&&y(E.children,W,null,F,H,$l(E,B),X,G),fe&&Vr(E,null,F,"created"),R(W,E,E.scopeId,X,F),ae){for(const _e in ae)_e!=="value"&&!vi(_e)&&i(W,_e,null,ae[_e],B,F);"value"in ae&&i(W,"value",null,ae.value,B),($=ae.onVnodeBeforeMount)&&an($,F,E)}fe&&Vr(E,null,F,"beforeMount");const ce=oA(H,se);ce&&se.beforeEnter(W),r(W,T,k),(($=ae&&ae.onVnodeMounted)||ce||fe)&&Lt(()=>{$&&an($,F,E),ce&&se.enter(W),fe&&Vr(E,null,F,"mounted")},H)},R=(E,T,k,F,H)=>{if(k&&_(E,k),F)for(let B=0;B<F.length;B++)_(E,F[B]);if(H){let B=H.subTree;if(T===B||nm(B.type)&&(B.ssContent===T||B.ssFallback===T)){const X=H.vnode;R(E,X,X.scopeId,X.slotScopeIds,H.parent)}}},y=(E,T,k,F,H,B,X,G,W=0)=>{for(let $=W;$<E.length;$++){const ae=E[$]=G?rr(E[$]):dn(E[$]);C(null,ae,T,k,F,H,B,X,G)}},I=(E,T,k,F,H,B,X)=>{const G=T.el=E.el;let{patchFlag:W,dynamicChildren:$,dirs:ae}=T;W|=E.patchFlag&16;const Y=E.props||xe,se=T.props||xe;let fe;if(k&&xr(k,!1),(fe=se.onVnodeBeforeUpdate)&&an(fe,k,T,E),ae&&Vr(T,E,k,"beforeUpdate"),k&&xr(k,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&d(G,""),$?S(E.dynamicChildren,$,G,k,F,$l(T,H),B):X||Ee(E,T,G,null,k,F,$l(T,H),B,!1),W>0){if(W&16)w(G,Y,se,k,H);else if(W&2&&Y.class!==se.class&&i(G,"class",null,se.class,H),W&4&&i(G,"style",Y.style,se.style,H),W&8){const ce=T.dynamicProps;for(let _e=0;_e<ce.length;_e++){const Ie=ce[_e],dt=Y[Ie],it=se[Ie];(it!==dt||Ie==="value")&&i(G,Ie,dt,it,H,k)}}W&1&&E.children!==T.children&&d(G,T.children)}else!X&&$==null&&w(G,Y,se,k,H);((fe=se.onVnodeUpdated)||ae)&&Lt(()=>{fe&&an(fe,k,T,E),ae&&Vr(T,E,k,"updated")},F)},S=(E,T,k,F,H,B,X)=>{for(let G=0;G<T.length;G++){const W=E[G],$=T[G],ae=W.el&&(W.type===hn||!ci(W,$)||W.shapeFlag&198)?p(W.el):k;C(W,$,ae,null,F,H,B,X,!0)}},w=(E,T,k,F,H)=>{if(T!==k){if(T!==xe)for(const B in T)!vi(B)&&!(B in k)&&i(E,B,T[B],null,H,F);for(const B in k){if(vi(B))continue;const X=k[B],G=T[B];X!==G&&B!=="value"&&i(E,B,G,X,H,F)}"value"in k&&i(E,"value",T.value,k.value,H)}},b=(E,T,k,F,H,B,X,G,W)=>{const $=T.el=E?E.el:l(""),ae=T.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:fe}=T;fe&&(G=G?G.concat(fe):fe),E==null?(r($,k,F),r(ae,k,F),y(T.children||[],k,ae,H,B,X,G,W)):Y>0&&Y&64&&se&&E.dynamicChildren?(S(E.dynamicChildren,se,k,H,B,X,G),(T.key!=null||H&&T===H.subTree)&&Xg(E,T,!0)):Ee(E,T,k,ae,H,B,X,G,W)},v=(E,T,k,F,H,B,X,G,W)=>{T.slotScopeIds=G,E==null?T.shapeFlag&512?H.ctx.activate(T,k,F,X,W):rt(T,k,F,H,B,X,W):It(E,T,W)},rt=(E,T,k,F,H,B,X)=>{const G=E.component=RA(E,F,H);if(Ug(E)&&(G.ctx.renderer=re),bA(G,!1,X),G.asyncDep){if(H&&H.registerDep(G,je,X),!E.el){const W=G.subTree=ye(mr);x(null,W,T,k)}}else je(G,E,T,k,H,B,X)},It=(E,T,k)=>{const F=T.component=E.component;if(gA(E,T,k))if(F.asyncDep&&!F.asyncResolved){Ae(F,T,k);return}else F.next=T,F.update();else T.el=E.el,F.vnode=T},je=(E,T,k,F,H,B,X)=>{const G=()=>{if(E.isMounted){let{next:Y,bu:se,u:fe,parent:ce,vnode:_e}=E;{const ft=Jg(E);if(ft){Y&&(Y.el=_e.el,Ae(E,Y,X)),ft.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Ie=Y,dt;xr(E,!1),Y?(Y.el=_e.el,Ae(E,Y,X)):Y=_e,se&&Yo(se),(dt=Y.props&&Y.props.onVnodeBeforeUpdate)&&an(dt,ce,Y,_e),xr(E,!0);const it=Ld(E),$t=E.subTree;E.subTree=it,C($t,it,p($t.el),U($t),E,H,B),Y.el=it.el,Ie===null&&mA(E,it.el),fe&&Lt(fe,H),(dt=Y.props&&Y.props.onVnodeUpdated)&&Lt(()=>an(dt,ce,Y,_e),H)}else{let Y;const{el:se,props:fe}=T,{bm:ce,m:_e,parent:Ie,root:dt,type:it}=E,$t=wi(T);xr(E,!1),ce&&Yo(ce),!$t&&(Y=fe&&fe.onVnodeBeforeMount)&&an(Y,Ie,T),xr(E,!0);{dt.ce&&dt.ce._injectChildStyle(it);const ft=E.subTree=Ld(E);C(null,ft,k,F,E,H,B),T.el=ft.el}if(_e&&Lt(_e,H),!$t&&(Y=fe&&fe.onVnodeMounted)){const ft=T;Lt(()=>an(Y,Ie,ft),H)}(T.shapeFlag&256||Ie&&wi(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&Lt(E.a,H),E.isMounted=!0,T=k=F=null}};E.scope.on();const W=E.effect=new pg(G);E.scope.off();const $=E.update=W.run.bind(W),ae=E.job=W.runIfDirty.bind(W);ae.i=E,ae.id=E.uid,W.scheduler=()=>_u(ae),xr(E,!0),$()},Ae=(E,T,k)=>{T.component=E;const F=E.vnode.props;E.vnode=T,E.next=null,ZE(E,T.props,F,k),rA(E,T.children,k),Ln(),Pd(E),Un()},Ee=(E,T,k,F,H,B,X,G,W=!1)=>{const $=E&&E.children,ae=E?E.shapeFlag:0,Y=T.children,{patchFlag:se,shapeFlag:fe}=T;if(se>0){if(se&128){Yt($,Y,k,F,H,B,X,G,W);return}else if(se&256){xt($,Y,k,F,H,B,X,G,W);return}}fe&8?(ae&16&&Pt($,H,B),Y!==$&&d(k,Y)):ae&16?fe&16?Yt($,Y,k,F,H,B,X,G,W):Pt($,H,B,!0):(ae&8&&d(k,""),fe&16&&y(Y,k,F,H,B,X,G,W))},xt=(E,T,k,F,H,B,X,G,W)=>{E=E||Es,T=T||Es;const $=E.length,ae=T.length,Y=Math.min($,ae);let se;for(se=0;se<Y;se++){const fe=T[se]=W?rr(T[se]):dn(T[se]);C(E[se],fe,k,null,H,B,X,G,W)}$>ae?Pt(E,H,B,!0,!1,Y):y(T,k,F,H,B,X,G,W,Y)},Yt=(E,T,k,F,H,B,X,G,W)=>{let $=0;const ae=T.length;let Y=E.length-1,se=ae-1;for(;$<=Y&&$<=se;){const fe=E[$],ce=T[$]=W?rr(T[$]):dn(T[$]);if(ci(fe,ce))C(fe,ce,k,null,H,B,X,G,W);else break;$++}for(;$<=Y&&$<=se;){const fe=E[Y],ce=T[se]=W?rr(T[se]):dn(T[se]);if(ci(fe,ce))C(fe,ce,k,null,H,B,X,G,W);else break;Y--,se--}if($>Y){if($<=se){const fe=se+1,ce=fe<ae?T[fe].el:F;for(;$<=se;)C(null,T[$]=W?rr(T[$]):dn(T[$]),k,ce,H,B,X,G,W),$++}}else if($>se)for(;$<=Y;)qe(E[$],H,B,!0),$++;else{const fe=$,ce=$,_e=new Map;for($=ce;$<=se;$++){const ot=T[$]=W?rr(T[$]):dn(T[$]);ot.key!=null&&_e.set(ot.key,$)}let Ie,dt=0;const it=se-ce+1;let $t=!1,ft=0;const Qn=new Array(it);for($=0;$<it;$++)Qn[$]=0;for($=fe;$<=Y;$++){const ot=E[$];if(dt>=it){qe(ot,H,B,!0);continue}let Kt;if(ot.key!=null)Kt=_e.get(ot.key);else for(Ie=ce;Ie<=se;Ie++)if(Qn[Ie-ce]===0&&ci(ot,T[Ie])){Kt=Ie;break}Kt===void 0?qe(ot,H,B,!0):(Qn[Kt-ce]=$+1,Kt>=ft?ft=Kt:$t=!0,C(ot,T[Kt],k,null,H,B,X,G,W),dt++)}const Qs=$t?aA(Qn):Es;for(Ie=Qs.length-1,$=it-1;$>=0;$--){const ot=ce+$,Kt=T[ot],mo=ot+1<ae?T[ot+1].el:F;Qn[$]===0?C(null,Kt,k,mo,H,B,X,G,W):$t&&(Ie<0||$!==Qs[Ie]?Ht(Kt,k,mo,2):Ie--)}}},Ht=(E,T,k,F,H=null)=>{const{el:B,type:X,transition:G,children:W,shapeFlag:$}=E;if($&6){Ht(E.component.subTree,T,k,F);return}if($&128){E.suspense.move(T,k,F);return}if($&64){X.move(E,T,k,re);return}if(X===hn){r(B,T,k);for(let Y=0;Y<W.length;Y++)Ht(W[Y],T,k,F);r(E.anchor,T,k);return}if(X===Kl){L(E,T,k);return}if(F!==2&&$&1&&G)if(F===0)G.beforeEnter(B),r(B,T,k),Lt(()=>G.enter(B),H);else{const{leave:Y,delayLeave:se,afterLeave:fe}=G,ce=()=>{E.ctx.isUnmounted?s(B):r(B,T,k)},_e=()=>{Y(B,()=>{ce(),fe&&fe()})};se?se(B,ce,_e):_e()}else r(B,T,k)},qe=(E,T,k,F=!1,H=!1)=>{const{type:B,props:X,ref:G,children:W,dynamicChildren:$,shapeFlag:ae,patchFlag:Y,dirs:se,cacheIndex:fe}=E;if(Y===-2&&(H=!1),G!=null&&(Ln(),ma(G,null,k,E,!0),Un()),fe!=null&&(T.renderCache[fe]=void 0),ae&256){T.ctx.deactivate(E);return}const ce=ae&1&&se,_e=!wi(E);let Ie;if(_e&&(Ie=X&&X.onVnodeBeforeUnmount)&&an(Ie,T,E),ae&6)on(E.component,k,F);else{if(ae&128){E.suspense.unmount(k,F);return}ce&&Vr(E,null,T,"beforeUnmount"),ae&64?E.type.remove(E,T,k,re,F):$&&!$.hasOnce&&(B!==hn||Y>0&&Y&64)?Pt($,T,k,!1,!0):(B===hn&&Y&384||!H&&ae&16)&&Pt(W,T,k),F&&He(E)}(_e&&(Ie=X&&X.onVnodeUnmounted)||ce)&&Lt(()=>{Ie&&an(Ie,T,E),ce&&Vr(E,null,T,"unmounted")},k)},He=E=>{const{type:T,el:k,anchor:F,transition:H}=E;if(T===hn){zn(k,F);return}if(T===Kl){D(E);return}const B=()=>{s(k),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(E.shapeFlag&1&&H&&!H.persisted){const{leave:X,delayLeave:G}=H,W=()=>X(k,B);G?G(E.el,B,W):W()}else B()},zn=(E,T)=>{let k;for(;E!==T;)k=g(E),s(E),E=k;s(T)},on=(E,T,k)=>{const{bum:F,scope:H,job:B,subTree:X,um:G,m:W,a:$,parent:ae,slots:{__:Y}}=E;Md(W),Md($),F&&Yo(F),ae&&ue(Y)&&Y.forEach(se=>{ae.renderCache[se]=void 0}),H.stop(),B&&(B.flags|=8,qe(X,E,T,k)),G&&Lt(G,T),Lt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Pt=(E,T,k,F=!1,H=!1,B=0)=>{for(let X=B;X<E.length;X++)qe(E[X],T,k,F,H)},U=E=>{if(E.shapeFlag&6)return U(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),k=T&&T[bE];return k?g(k):T};let ee=!1;const Z=(E,T,k)=>{E==null?T._vnode&&qe(T._vnode,null,null,!0):C(T._vnode||null,E,T,null,null,null,k),T._vnode=E,ee||(ee=!0,Pd(),Dg(),ee=!1)},re={p:C,um:qe,m:Ht,r:He,mt:rt,mc:y,pc:Ee,pbc:S,n:U,o:t};return{render:Z,hydrate:void 0,createApp:XE(Z)}}function $l({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function oA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xg(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Xg(o,l)),l.type===Ya&&(l.el=o.el),l.type===mr&&!l.el&&(l.el=o.el)}}function aA(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Jg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jg(e)}function Md(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const lA=Symbol.for("v-scx"),cA=()=>en(lA);function jr(t,e,n){return Zg(t,e,n)}function Zg(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=wt({},n),c=e&&r||!e&&i!=="post";let u;if(Ui){if(i==="sync"){const _=cA();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const d=Et;l.call=(_,A,C)=>En(_,d,A,C);let p=!1;i==="post"?l.scheduler=_=>{Lt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,A)=>{A?_():_u(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=AE(t,e,l);return Ui&&(u?u.push(g):c&&g()),g}function uA(t,e,n){const r=this.proxy,s=et(t)?t.includes(".")?em(r,t):()=>r[t]:t.bind(r,r);let i;me(e)?i=e:(i=e.handler,n=e);const o=to(this),l=Zg(s,i.bind(r),n);return o(),l}function em(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const hA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${es(e)}Modifiers`];function dA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&hA(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>et(d)?d.trim():d)),o.number&&(s=n.map(ua)));let l,c=r[l=Ul(e)]||r[l=Ul(zt(e))];!c&&i&&(c=r[l=Ul(es(e))]),c&&En(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,En(u,t,6,s)}}function tm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!me(t)){const c=u=>{const d=tm(u,e,!0);d&&(l=!0,wt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):wt(o,i),Le(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,es(e))||Oe(t,e))}function Ld(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:_,ctx:A,inheritAttrs:C}=t,P=ga(t);let x,M;try{if(n.shapeFlag&4){const D=s||r,J=D;x=dn(u.call(J,D,d,p,_,g,A)),M=l}else{const D=e;x=dn(D.length>1?D(p,{attrs:l,slots:o,emit:c}):D(p,null)),M=e.props?l:fA(l)}}catch(D){Ii.length=0,Wa(D,t,1),x=ye(mr)}let L=x;if(M&&C!==!1){const D=Object.keys(M),{shapeFlag:J}=L;D.length&&J&7&&(i&&D.some(su)&&(M=pA(M,i)),L=Ns(L,M,!1,!0))}return n.dirs&&(L=Ns(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&yu(L,n.transition),x=L,ga(P),x}const fA=t=>{let e;for(const n in t)(n==="class"||n==="style"||ja(n))&&((e||(e={}))[n]=t[n]);return e},pA=(t,e)=>{const n={};for(const r in t)(!su(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ud(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Qa(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ud(r,o,u):!0:!!o;return!1}function Ud(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qa(n,i))return!0}return!1}function mA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const nm=t=>t.__isSuspense;function _A(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):IE(t)}const hn=Symbol.for("v-fgt"),Ya=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),Kl=Symbol.for("v-stc"),Ii=[];let Ft=null;function ie(t=!1){Ii.push(Ft=t?null:[])}function yA(){Ii.pop(),Ft=Ii[Ii.length-1]||null}let Li=1;function Fd(t,e=!1){Li+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function rm(t){return t.dynamicChildren=Li>0?Ft||Es:null,yA(),Li>0&&Ft&&Ft.push(t),t}function oe(t,e,n,r,s,i){return rm(O(t,e,n,r,s,i,!0))}function vA(t,e,n,r,s){return rm(ye(t,e,n,r,s,!0))}function ya(t){return t?t.__v_isVNode===!0:!1}function ci(t,e){return t.type===e.type&&t.key===e.key}const sm=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?et(t)||At(t)||me(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function O(t,e=null,n=null,r=0,s=null,i=t===hn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sm(e),ref:e&&Jo(e),scopeId:xg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ut};return l?(Au(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=et(n)?8:16),Li>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const ye=EA;function EA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===jE)&&(t=mr),ya(t)){const l=Ns(t,e,!0);return n&&Au(l,n),Li>0&&!i&&Ft&&(l.shapeFlag&6?Ft[Ft.indexOf(t)]=l:Ft.push(l)),l.patchFlag=-2,l}if(NA(t)&&(t=t.__vccOpts),e){e=AA(e);let{class:l,style:c}=e;l&&!et(l)&&(e.class=ze(l)),Le(c)&&(gu(c)&&!ue(c)&&(c=wt({},c)),e.style=au(c))}const o=et(t)?1:nm(t)?128:CE(t)?64:Le(t)?4:me(t)?2:0;return O(t,e,n,r,s,o,i,!0)}function AA(t){return t?gu(t)||Kg(t)?wt({},t):t:null}function Ns(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?wA(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&sm(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Jo(e)):[i,Jo(e)]:Jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ns(t.ssContent),ssFallback:t.ssFallback&&Ns(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&yu(d,c.clone(d)),d}function Tc(t=" ",e=0){return ye(Ya,null,t,e)}function qr(t="",e=!1){return e?(ie(),vA(mr,null,t)):ye(mr,null,t)}function dn(t){return t==null||typeof t=="boolean"?ye(mr):ue(t)?ye(hn,null,t.slice()):ya(t)?rr(t):ye(Ya,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ns(t)}function Au(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Au(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Kg(e)?e._ctx=Ut:s===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else me(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),r&64?(n=16,e=[Tc(e)]):n=8);t.children=e,t.shapeFlag|=n}function wA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ze([e.class,r.class]));else if(s==="style")e.style=au([e.style,r.style]);else if(ja(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function an(t,e,n,r=null){En(t,e,7,[n,r])}const TA=qg();let IA=0;function RA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||TA,i={uid:IA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gg(r,s),emitsOptions:tm(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dA.bind(null,i),t.ce&&t.ce(i),i}let Et=null,va,Ic;{const t=$a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Ic=e("__VUE_SSR_SETTERS__",n=>Ui=n)}const to=t=>{const e=Et;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Bd=()=>{Et&&Et.scope.off(),va(null)};function im(t){return t.vnode.shapeFlag&4}let Ui=!1;function bA(t,e=!1,n=!1){e&&Ic(e);const{props:r,children:s}=t.vnode,i=im(t);JE(t,r,i,e),nA(t,s,n||e);const o=i?CA(t,e):void 0;return e&&Ic(!1),o}function CA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,$E);const{setup:r}=n;if(r){Ln();const s=t.setupContext=r.length>1?PA(t):null,i=to(t),o=eo(r,t,0,[t.props,s]),l=ag(o);if(Un(),i(),(l||t.sp)&&!wi(t)&&Lg(t),l){if(o.then(Bd,Bd),e)return o.then(c=>{jd(t,c)}).catch(c=>{Wa(c,t,0)});t.asyncDep=o}else jd(t,o)}else om(t)}function jd(t,e,n){me(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=kg(e)),om(t)}function om(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=to(t);Ln();try{KE(t)}finally{Un(),s()}}}const SA={get(t,e){return yt(t,"get",""),t[e]}};function PA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,SA),slots:t.slots,emit:t.emit,expose:e}}function Xa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(kg(pE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}})):t.proxy}function kA(t,e=!0){return me(t)?t.displayName||t.name:t.name||e&&t.__name}function NA(t){return me(t)&&"__vccOpts"in t}const Be=(t,e)=>vE(t,e,Ui);function am(t,e,n){const r=arguments.length;return r===2?Le(e)&&!ue(e)?ya(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ya(n)&&(n=[n]),ye(t,e,n))}const OA="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rc;const qd=typeof window<"u"&&window.trustedTypes;if(qd)try{Rc=qd.createPolicy("vue",{createHTML:t=>t})}catch{}const lm=Rc?t=>Rc.createHTML(t):t=>t,DA="http://www.w3.org/2000/svg",VA="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,Hd=Sn&&Sn.createElement("template"),xA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(DA,t):e==="mathml"?Sn.createElementNS(VA,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hd.innerHTML=lm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Hd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},MA=Symbol("_vtc");function LA(t,e,n){const r=t[MA];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ea=Symbol("_vod"),cm=Symbol("_vsh"),$d={beforeMount(t,{value:e},{transition:n}){t[Ea]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ui(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ui(t,!0),r.enter(t)):r.leave(t,()=>{ui(t,!1)}):ui(t,e))},beforeUnmount(t,{value:e}){ui(t,e)}};function ui(t,e){t.style.display=e?t[Ea]:"none",t[cm]=!e}const UA=Symbol(""),FA=/(^|;)\s*display\s*:/;function BA(t,e,n){const r=t.style,s=et(n);let i=!1;if(n&&!s){if(e)if(et(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Zo(r,l,"")}else for(const o in e)n[o]==null&&Zo(r,o,"");for(const o in n)o==="display"&&(i=!0),Zo(r,o,n[o])}else if(s){if(e!==n){const o=r[UA];o&&(n+=";"+o),r.cssText=n,i=FA.test(n)}}else e&&t.removeAttribute("style");Ea in t&&(t[Ea]=i?r.display:"",t[cm]&&(r.display="none"))}const Kd=/\s*!important$/;function Zo(t,e,n){if(ue(n))n.forEach(r=>Zo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jA(t,e);Kd.test(n)?t.setProperty(es(r),n.replace(Kd,""),"important"):t[r]=n}}const Wd=["Webkit","Moz","ms"],Wl={};function jA(t,e){const n=Wl[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Wl[e]=r;r=Ha(r);for(let s=0;s<Wd.length;s++){const i=Wd[s]+r;if(i in t)return Wl[e]=i}return e}const Gd="http://www.w3.org/1999/xlink";function zd(t,e,n,r,s,i=Wv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gd,e.slice(6,e.length)):t.setAttributeNS(Gd,e,n):n==null||i&&!hg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":vn(n)?String(n):n)}function Qd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=hg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Nn(t,e,n,r){t.addEventListener(e,n,r)}function qA(t,e,n,r){t.removeEventListener(e,n,r)}const Yd=Symbol("_vei");function HA(t,e,n,r,s=null){const i=t[Yd]||(t[Yd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=$A(e);if(r){const u=i[e]=GA(r,s);Nn(t,l,u,c)}else o&&(qA(t,l,o,c),i[e]=void 0)}}const Xd=/(?:Once|Passive|Capture)$/;function $A(t){let e;if(Xd.test(t)){e={};let r;for(;r=t.match(Xd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let Gl=0;const KA=Promise.resolve(),WA=()=>Gl||(KA.then(()=>Gl=0),Gl=Date.now());function GA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(zA(r,n.value),e,5,[r])};return n.value=t,n.attached=WA(),n}function zA(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,QA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?LA(t,r,o):e==="style"?BA(t,n,r):ja(e)?su(e)||HA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YA(t,e,r,o))?(Qd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&zd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!et(r))?Qd(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zd(t,e,r,o))};function YA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jd(e)&&me(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jd(e)&&et(n)?!1:e in t}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Yo(e,n):e};function XA(t){t.target.composing=!0}function Zd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),Fi={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gt]=_r(s);const i=r||s.props&&s.props.type==="number";Nn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ua(l)),t[Gt](l)}),n&&Nn(t,"change",()=>{t.value=t.value.trim()}),e||(Nn(t,"compositionstart",XA),Nn(t,"compositionend",Zd),Nn(t,"change",Zd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gt]=_r(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?ua(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},um={deep:!0,created(t,e,n){t[Gt]=_r(n),Nn(t,"change",()=>{const r=t._modelValue,s=Os(t),i=t.checked,o=t[Gt];if(ue(r)){const l=lu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(qs(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(hm(t,i))})},mounted:ef,beforeUpdate(t,e,n){t[Gt]=_r(n),ef(t,e,n)}};function ef(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=lu(e,r.props.value)>-1;else if(qs(e))s=e.has(r.props.value);else{if(e===n)return;s=Kr(e,hm(t,!0))}t.checked!==s&&(t.checked=s)}const JA={created(t,{value:e},n){t.checked=Kr(e,n.props.value),t[Gt]=_r(n),Nn(t,"change",()=>{t[Gt](Os(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Gt]=_r(r),e!==n&&(t.checked=Kr(e,r.props.value))}},ZA={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=qs(e);Nn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ua(Os(o)):Os(o));t[Gt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,mu(()=>{t._assigning=!1})}),t[Gt]=_r(r)},mounted(t,{value:e}){tf(t,e)},beforeUpdate(t,e,n){t[Gt]=_r(n)},updated(t,{value:e}){t._assigning||tf(t,e)}};function tf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!qs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Os(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=lu(e,l)>-1}else o.selected=e.has(l);else if(Kr(Os(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Os(t){return"_value"in t?t._value:t.value}function hm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const zl={created(t,e,n){xo(t,e,n,null,"created")},mounted(t,e,n){xo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){xo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){xo(t,e,n,r,"updated")}};function ew(t,e){switch(t){case"SELECT":return ZA;case"TEXTAREA":return Fi;default:switch(e){case"checkbox":return um;case"radio":return JA;default:return Fi}}}function xo(t,e,n,r,s){const o=ew(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const tw=["ctrl","shift","alt","meta"],nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>tw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ql=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=nw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},rw=wt({patchProp:QA},xA);let nf;function sw(){return nf||(nf=sA(rw))}const iw=(...t)=>{const e=sw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=aw(r);if(!s)return;const i=e._component;!me(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ow(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ow(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function aw(t){return et(t)?document.querySelector(t):t}const Ge={LANGUAGE:"selectedLanguage",THEME:"selectedTheme",THEME_RGB:"selectedThemeRgb",REMEMBERED_EMAIL:"rememberedEmail",REMEMBERED_PASSWORD:"rememberedPassword"},Mo={[Ge.LANGUAGE]:"EN",[Ge.THEME]:"#ffeb7c",[Ge.THEME_RGB]:"255, 235, 124"},lw={EN:{languageBtn:"EN",logoutBtn:"Log Out",brandTagline:"Welcome to ...",loginTab:"Login",signupTab:"Signup",loginBtn:"Login",signupBtn:"Signup",forgotPassword:"forgot password?",rememberMe:"Remember me",qrTitle:"Log In with QR Code",socialTitle:"Or continue with",emailPlaceholder:"email",passwordPlaceholder:"password",confirmPasswordPlaceholder:"confirm password",homeTabs:{community:"Community",friend:"Friend"},actionButtons:{upload:"create status",discover:"discover",settings:"settings"},statusPlaceholder:"What's on your mind?",me:"Me"},VN:{languageBtn:"VN",logoutBtn:"Đăng Xuất",brandTagline:"Chào mừng bạn đến với ...",loginTab:"Đăng Nhập",signupTab:"Đăng Ký",loginBtn:"Đăng Nhập",signupBtn:"Đăng Ký",forgotPassword:"quên mật khẩu?",rememberMe:"Ghi nhớ tôi",qrTitle:"Đăng Nhập bằng Mã QR",socialTitle:"Hoặc tiếp tục với",emailPlaceholder:"email",passwordPlaceholder:"mật khẩu",confirmPasswordPlaceholder:"xác nhận mật khẩu",homeTabs:{community:"Cộng đồng",friend:"Bạn bè"},actionButtons:{upload:"tạo trạng thái",discover:"khám phá",settings:"cài đặt"},statusPlaceholder:"Bạn đang nghĩ gì?",me:"Tôi"}};let fs=null,Lo=null,Uo=null,rf=!1;const Vt=()=>{const t=(A,C=null)=>{try{const P=localStorage.getItem(A);return P!==null?P:C}catch(P){return console.warn(`Failed to get localStorage item "${A}":`,P),C}},e=(A,C)=>{try{C==null?localStorage.removeItem(A):localStorage.setItem(A,C)}catch(P){console.warn(`Failed to set localStorage item "${A}":`,P)}},n=A=>{try{localStorage.removeItem(A)}catch(C){console.warn(`Failed to remove localStorage item "${A}":`,C)}};if(!rf){fs=Ce(t(Ge.LANGUAGE,Mo[Ge.LANGUAGE]));const A={color:t(Ge.THEME,Mo[Ge.THEME]),rgb:t(Ge.THEME_RGB,Mo[Ge.THEME_RGB])};Lo=Ce(A.color),Uo=Ce(A.rgb),rf=!0}const r=()=>{fs.value=fs.value==="EN"?"VN":"EN",e(Ge.LANGUAGE,fs.value)},s=Be(()=>lw[fs.value]),i=A=>{const C=A.split(".");let P=s.value;for(const x of C)if(P=P==null?void 0:P[x],!P)break;return P||A},o=()=>{document.documentElement.style.setProperty("--theme-color",Lo.value),document.documentElement.style.setProperty("--theme-color-rgb",Uo.value)},l=(A,C)=>{document.documentElement.style.setProperty("--theme-color",A),document.documentElement.style.setProperty("--theme-color-rgb",C),Lo.value=A,Uo.value=C,e(Ge.THEME,A),e(Ge.THEME_RGB,C)},c=()=>({email:t(Ge.REMEMBERED_EMAIL),password:t(Ge.REMEMBERED_PASSWORD)}),u=(A,C)=>{e(Ge.REMEMBERED_EMAIL,A),e(Ge.REMEMBERED_PASSWORD,C)},d=()=>{n(Ge.REMEMBERED_EMAIL),n(Ge.REMEMBERED_PASSWORD)},p=(A=null)=>{try{A?A.forEach(C=>n(C)):Object.values(Ge).forEach(C=>n(C))}catch(C){console.warn("Failed to clear localStorage:",C)}},g=()=>{try{const A={};return Object.values(Ge).forEach(C=>{const P=t(C);P!==null&&(A[C]=P)}),A}catch(A){return console.warn("Failed to backup localStorage:",A),{}}},_=A=>{try{Object.entries(A).forEach(([C,P])=>{Object.values(Ge).includes(C)&&e(C,P)})}catch(C){console.warn("Failed to restore localStorage:",C)}};return Rr(()=>{o()}),{currentLanguage:fs,toggleLanguage:r,t:s,translate:i,currentTheme:Lo,currentThemeRgb:Uo,changeThemeColor:l,initializeTheme:o,getItem:t,setItem:e,removeItem:n,getRememberedAuth:c,setRememberedAuth:u,clearRememberedAuth:d,clear:p,backup:g,restore:_,STORAGE_KEYS:Ge,DEFAULTS:Mo}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const gs=typeof document<"u";function dm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dm(t.default)}const ke=Object.assign;function Yl(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const Ri=()=>{},rn=Array.isArray,fm=/#/g,uw=/&/g,hw=/\//g,dw=/=/g,fw=/\?/g,pm=/\+/g,pw=/%5B/g,gw=/%5D/g,gm=/%5E/g,mw=/%60/g,mm=/%7B/g,_w=/%7C/g,_m=/%7D/g,yw=/%20/g;function wu(t){return encodeURI(""+t).replace(_w,"|").replace(pw,"[").replace(gw,"]")}function vw(t){return wu(t).replace(mm,"{").replace(_m,"}").replace(gm,"^")}function bc(t){return wu(t).replace(pm,"%2B").replace(yw,"+").replace(fm,"%23").replace(uw,"%26").replace(mw,"`").replace(mm,"{").replace(_m,"}").replace(gm,"^")}function Ew(t){return bc(t).replace(dw,"%3D")}function Aw(t){return wu(t).replace(fm,"%23").replace(fw,"%3F")}function ww(t){return t==null?"":Aw(t).replace(hw,"%2F")}function Bi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Tw=/\/$/,Iw=t=>t.replace(Tw,"");function Xl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Sw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Bi(o)}}function Rw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function sf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(e.matched[r],n.matched[s])&&ym(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ds(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ym(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Cw(t[n],e[n]))return!1;return!0}function Cw(t,e){return rn(t)?of(t,e):rn(e)?of(e,t):t===e}function of(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Sw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ji;(function(t){t.pop="pop",t.push="push"})(ji||(ji={}));var bi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bi||(bi={}));function Pw(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Iw(t)}const kw=/^[^#]+#/;function Nw(t,e){return t.replace(kw,"#")+e}function Ow(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ja=()=>({left:window.scrollX,top:window.scrollY});function Dw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ow(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function af(t,e){return(history.state?history.state.position-e:-1)+t}const Cc=new Map;function Vw(t,e){Cc.set(t,e)}function xw(t){const e=Cc.get(t);return Cc.delete(t),e}let Mw=()=>location.protocol+"//"+location.host;function vm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),sf(c,"")}return sf(n,t)+r+s}function Lw(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=vm(t,location),A=n.value,C=e.value;let P=0;if(g){if(n.value=_,e.value=g,o&&o===A){o=null;return}P=C?g.position-C.position:0}else r(_);s.forEach(x=>{x(n.value,A,{delta:P,type:ji.pop,direction:P?P>0?bi.forward:bi.back:bi.unknown})})};function c(){o=n.value}function u(g){s.push(g);const _=()=>{const A=s.indexOf(g);A>-1&&s.splice(A,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Ja()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function lf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ja():null}}function Uw(t){const{history:e,location:n}=window,r={value:vm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Mw()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(c,u){const d=ke({},e.state,lf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=ke({},s.value,e.state,{forward:c,scroll:Ja()});i(d.current,d,!0);const p=ke({},lf(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function Fw(t){t=Pw(t);const e=Uw(t),n=Lw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:Nw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Bw(t){return typeof t=="string"||t&&typeof t=="object"}function Em(t){return typeof t=="string"||typeof t=="symbol"}const Am=Symbol("");var cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cf||(cf={}));function Vs(t,e){return ke(new Error,{type:t,[Am]:!0},e)}function bn(t,e){return t instanceof Error&&Am in t&&(e==null||!!(t.type&e))}const uf="[^/]+?",jw={sensitive:!1,strict:!1,start:!0,end:!0},qw=/[.+*?^${}()[\]/\\]/g;function Hw(t,e){const n=ke({},jw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(qw,"\\$&"),_+=40;else if(g.type===1){const{value:A,repeatable:C,optional:P,regexp:x}=g;i.push({name:A,repeatable:C,optional:P});const M=x||uf;if(M!==uf){_+=10;try{new RegExp(`(${M})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${A}" (${M}): `+D.message)}}let L=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(L=P&&u.length<2?`(?:/${L})`:"/"+L),P&&(L+="?"),s+=L,_+=20,P&&(_+=-8),C&&(_+=-20),M===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",A=i[g-1];p[A.name]=_&&A.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:A,repeatable:C,optional:P}=_,x=A in u?u[A]:"";if(rn(x)&&!C)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const M=rn(x)?x.join("/"):x;if(!M)if(P)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${A}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function $w(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function wm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$w(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hf(r))return 1;if(hf(s))return-1}return s.length-r.length}function hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kw={type:0,value:""},Ww=/[a-zA-Z0-9_]/;function Gw(t){if(!t)return[[]];if(t==="/")return[[Kw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:Ww.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function zw(t,e,n){const r=Hw(Gw(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Qw(t,e){const n=[],r=new Map;e=gf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const A=!_,C=ff(p);C.aliasOf=_&&_.record;const P=gf(e,p),x=[C];if("alias"in p){const D=typeof p.alias=="string"?[p.alias]:p.alias;for(const J of D)x.push(ff(ke({},C,{components:_?_.record.components:C.components,path:J,aliasOf:_?_.record:C})))}let M,L;for(const D of x){const{path:J}=D;if(g&&J[0]!=="/"){const K=g.record.path,R=K[K.length-1]==="/"?"":"/";D.path=g.record.path+(J&&R+J)}if(M=zw(D,g,P),_?_.alias.push(M):(L=L||M,L!==M&&L.alias.push(M),A&&p.name&&!pf(M)&&o(p.name)),Tm(M)&&c(M),C.children){const K=C.children;for(let R=0;R<K.length;R++)i(K[R],M,_&&_.children[R])}_=_||M}return L?()=>{o(L)}:Ri}function o(p){if(Em(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=Jw(p,n);n.splice(g,0,p),p.record.name&&!pf(p)&&r.set(p.record.name,p)}function u(p,g){let _,A={},C,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Vs(1,{location:p});P=_.record.name,A=ke(df(g.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&df(p.params,_.keys.map(L=>L.name))),C=_.stringify(A)}else if(p.path!=null)C=p.path,_=n.find(L=>L.re.test(C)),_&&(A=_.parse(C),P=_.record.name);else{if(_=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!_)throw Vs(1,{location:p,currentLocation:g});P=_.record.name,A=ke({},g.params,p.params),C=_.stringify(A)}const x=[];let M=_;for(;M;)x.unshift(M.record),M=M.parent;return{name:P,path:C,params:A,matched:x,meta:Xw(x)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ff(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Yw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Yw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Xw(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function gf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Jw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;wm(t,e[i])<0?r=i:n=i+1}const s=Zw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Zw(t){let e=t;for(;e=e.parent;)if(Tm(e)&&wm(t,e)===0)return e}function Tm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function eT(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(pm," "),o=i.indexOf("="),l=Bi(o<0?i:i.slice(0,o)),c=o<0?null:Bi(i.slice(o+1));if(l in e){let u=e[l];rn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function mf(t){let e="";for(let n in t){const r=t[n];if(n=Ew(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(i=>i&&bc(i)):[r&&bc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function tT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nT=Symbol(""),_f=Symbol(""),Za=Symbol(""),Tu=Symbol(""),Sc=Symbol("");function hi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Vs(4,{from:n,to:e})):g instanceof Error?c(g):Bw(g)?c(Vs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Jl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(dm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(sr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=cw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,l,s)()}))}}return i}function yf(t){const e=en(Za),n=en(Tu),r=Be(()=>{const c=Q(t.to);return e.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ds.bind(null,d));if(g>-1)return g;const _=vf(c[u-2]);return u>1&&vf(d)===_&&p[p.length-1].path!==_?p.findIndex(Ds.bind(null,c[u-2])):g}),i=Be(()=>s.value>-1&&aT(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&ym(n.params,r.value.params));function l(c={}){if(oT(c)){const u=e[Q(t.replace)?"replace":"push"](Q(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function rT(t){return t.length===1?t[0]:t}const sT=Mg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:yf,setup(t,{slots:e}){const n=ks(yf(t)),{options:r}=en(Za),s=Be(()=>({[Ef(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ef(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&rT(e.default(n));return t.custom?i:am("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),iT=sT;function oT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function aT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ef=(t,e,n)=>t??e??n,lT=Mg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Sc),s=Be(()=>t.route||r.value),i=en(_f,0),o=Be(()=>{let u=Q(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Be(()=>s.value.matched[o.value]);Xo(_f,Be(()=>o.value+1)),Xo(nT,l),Xo(Sc,s);const c=Ce();return jr(()=>[c.value,l.value,t.name],([u,d,p],[g,_,A])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Ds(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return Af(n.default,{Component:g,route:u});const _=p.props[d],A=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=am(g,ke({},A,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Af(n.default,{Component:P,route:u})||P}}});function Af(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cT=lT;function uT(t){const e=Qw(t.routes,t),n=t.parseQuery||eT,r=t.stringifyQuery||mf,s=t.history,i=hi(),o=hi(),l=hi(),c=gE(Zn);let u=Zn;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Yl.bind(null,U=>""+U),p=Yl.bind(null,ww),g=Yl.bind(null,Bi);function _(U,ee){let Z,re;return Em(U)?(Z=e.getRecordMatcher(U),re=ee):re=U,e.addRoute(re,Z)}function A(U){const ee=e.getRecordMatcher(U);ee&&e.removeRoute(ee)}function C(){return e.getRoutes().map(U=>U.record)}function P(U){return!!e.getRecordMatcher(U)}function x(U,ee){if(ee=ke({},ee||c.value),typeof U=="string"){const k=Xl(n,U,ee.path),F=e.resolve({path:k.path},ee),H=s.createHref(k.fullPath);return ke(k,F,{params:g(F.params),hash:Bi(k.hash),redirectedFrom:void 0,href:H})}let Z;if(U.path!=null)Z=ke({},U,{path:Xl(n,U.path,ee.path).path});else{const k=ke({},U.params);for(const F in k)k[F]==null&&delete k[F];Z=ke({},U,{params:p(k)}),ee.params=p(ee.params)}const re=e.resolve(Z,ee),Se=U.hash||"";re.params=d(g(re.params));const E=Rw(r,ke({},U,{hash:vw(Se),path:re.path})),T=s.createHref(E);return ke({fullPath:E,hash:Se,query:r===mf?tT(U.query):U.query||{}},re,{redirectedFrom:void 0,href:T})}function M(U){return typeof U=="string"?Xl(n,U,c.value.path):ke({},U)}function L(U,ee){if(u!==U)return Vs(8,{from:ee,to:U})}function D(U){return R(U)}function J(U){return D(ke(M(U),{replace:!0}))}function K(U){const ee=U.matched[U.matched.length-1];if(ee&&ee.redirect){const{redirect:Z}=ee;let re=typeof Z=="function"?Z(U):Z;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),ke({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function R(U,ee){const Z=u=x(U),re=c.value,Se=U.state,E=U.force,T=U.replace===!0,k=K(Z);if(k)return R(ke(M(k),{state:typeof k=="object"?ke({},Se,k.state):Se,force:E,replace:T}),ee||Z);const F=Z;F.redirectedFrom=ee;let H;return!E&&bw(r,re,Z)&&(H=Vs(16,{to:F,from:re}),Ht(re,re,!0,!1)),(H?Promise.resolve(H):S(F,re)).catch(B=>bn(B)?bn(B,2)?B:Yt(B):Ee(B,F,re)).then(B=>{if(B){if(bn(B,2))return R(ke({replace:T},M(B.to),{state:typeof B.to=="object"?ke({},Se,B.to.state):Se,force:E}),ee||F)}else B=b(F,re,!0,T,Se);return w(F,re,B),B})}function y(U,ee){const Z=L(U,ee);return Z?Promise.reject(Z):Promise.resolve()}function I(U){const ee=zn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(U):U()}function S(U,ee){let Z;const[re,Se,E]=hT(U,ee);Z=Jl(re.reverse(),"beforeRouteLeave",U,ee);for(const k of re)k.leaveGuards.forEach(F=>{Z.push(sr(F,U,ee))});const T=y.bind(null,U,ee);return Z.push(T),Pt(Z).then(()=>{Z=[];for(const k of i.list())Z.push(sr(k,U,ee));return Z.push(T),Pt(Z)}).then(()=>{Z=Jl(Se,"beforeRouteUpdate",U,ee);for(const k of Se)k.updateGuards.forEach(F=>{Z.push(sr(F,U,ee))});return Z.push(T),Pt(Z)}).then(()=>{Z=[];for(const k of E)if(k.beforeEnter)if(rn(k.beforeEnter))for(const F of k.beforeEnter)Z.push(sr(F,U,ee));else Z.push(sr(k.beforeEnter,U,ee));return Z.push(T),Pt(Z)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),Z=Jl(E,"beforeRouteEnter",U,ee,I),Z.push(T),Pt(Z))).then(()=>{Z=[];for(const k of o.list())Z.push(sr(k,U,ee));return Z.push(T),Pt(Z)}).catch(k=>bn(k,8)?k:Promise.reject(k))}function w(U,ee,Z){l.list().forEach(re=>I(()=>re(U,ee,Z)))}function b(U,ee,Z,re,Se){const E=L(U,ee);if(E)return E;const T=ee===Zn,k=gs?history.state:{};Z&&(re||T?s.replace(U.fullPath,ke({scroll:T&&k&&k.scroll},Se)):s.push(U.fullPath,Se)),c.value=U,Ht(U,ee,Z,T),Yt()}let v;function rt(){v||(v=s.listen((U,ee,Z)=>{if(!on.listening)return;const re=x(U),Se=K(re);if(Se){R(ke(Se,{replace:!0,force:!0}),re).catch(Ri);return}u=re;const E=c.value;gs&&Vw(af(E.fullPath,Z.delta),Ja()),S(re,E).catch(T=>bn(T,12)?T:bn(T,2)?(R(ke(M(T.to),{force:!0}),re).then(k=>{bn(k,20)&&!Z.delta&&Z.type===ji.pop&&s.go(-1,!1)}).catch(Ri),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),Ee(T,re,E))).then(T=>{T=T||b(re,E,!1),T&&(Z.delta&&!bn(T,8)?s.go(-Z.delta,!1):Z.type===ji.pop&&bn(T,20)&&s.go(-1,!1)),w(re,E,T)}).catch(Ri)}))}let It=hi(),je=hi(),Ae;function Ee(U,ee,Z){Yt(U);const re=je.list();return re.length?re.forEach(Se=>Se(U,ee,Z)):console.error(U),Promise.reject(U)}function xt(){return Ae&&c.value!==Zn?Promise.resolve():new Promise((U,ee)=>{It.add([U,ee])})}function Yt(U){return Ae||(Ae=!U,rt(),It.list().forEach(([ee,Z])=>U?Z(U):ee()),It.reset()),U}function Ht(U,ee,Z,re){const{scrollBehavior:Se}=t;if(!gs||!Se)return Promise.resolve();const E=!Z&&xw(af(U.fullPath,0))||(re||!Z)&&history.state&&history.state.scroll||null;return mu().then(()=>Se(U,ee,E)).then(T=>T&&Dw(T)).catch(T=>Ee(T,U,ee))}const qe=U=>s.go(U);let He;const zn=new Set,on={currentRoute:c,listening:!0,addRoute:_,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:C,resolve:x,options:t,push:D,replace:J,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:je.add,isReady:xt,install(U){const ee=this;U.component("RouterLink",iT),U.component("RouterView",cT),U.config.globalProperties.$router=ee,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(c)}),gs&&!He&&c.value===Zn&&(He=!0,D(s.location).catch(Se=>{}));const Z={};for(const Se in Zn)Object.defineProperty(Z,Se,{get:()=>c.value[Se],enumerable:!0});U.provide(Za,ee),U.provide(Tu,Sg(Z)),U.provide(Sc,c);const re=U.unmount;zn.add(U),U.unmount=function(){zn.delete(U),zn.size<1&&(u=Zn,v&&v(),v=null,c.value=Zn,He=!1,Ae=!1),re()}}};function Pt(U){return U.reduce((ee,Z)=>ee.then(()=>I(Z)),Promise.resolve())}return on}function hT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ds(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ds(u,c))||s.push(c))}return[n,r,s]}function el(){return en(Za)}function dT(t){return en(Tu)}const fT=()=>{};var wf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Rm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Im(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new gT;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const A=u<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mT=function(t){const e=Im(t);return Rm.encodeByteArray(e,!0)},Aa=function(t){return mT(t).replace(/\./g,"")},bm=function(t){try{return Rm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=()=>_T().__FIREBASE_DEFAULTS__,vT=()=>{if(typeof process>"u"||typeof wf>"u")return;const t=wf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ET=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bm(t[1]);return e&&JSON.parse(e)},tl=()=>{try{return fT()||yT()||vT()||ET()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cm=t=>{var e,n;return(n=(e=tl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sm=t=>{const e=Cm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pm=()=>{var t;return(t=tl())===null||t===void 0?void 0:t.config},km=t=>{var e;return(e=tl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){return t.endsWith(".cloudworkstations.dev")}async function Iu(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Aa(JSON.stringify(n)),Aa(JSON.stringify(o)),""].join(".")}const Ci={};function wT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ci))Ci[e]?t.emulator.push(e):t.prod.push(e);return t}function TT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Tf=!1;function Ru(t,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||Ci[t]===e||Ci[t]||Tf)return;Ci[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=wT().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Tf=!0,o()},g}function d(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=TT(r),_=n("text"),A=document.getElementById(_)||document.createElement("span"),C=n("learnmore"),P=document.getElementById(C)||document.createElement("a"),x=n("preprendIcon"),M=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;l(L),d(P,C);const D=u();c(M,x),L.append(M,A,P,D),document.body.appendChild(L)}i?(A.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function RT(){var t;const e=(t=tl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ST(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PT(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kT(){return!RT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NT(){try{return typeof indexedDB=="object"}catch{return!1}}function OT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DT,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,no.prototype.create)}}class no{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wn(s,l,r)}}function VT(t,e){return t.replace(xT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xT=/\{\$([^}]+)}/g;function MT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(If(i)&&If(o)){if(!Wr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LT(t,e){const n=new UT(t,e);return n.subscribe.bind(n)}class UT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Zl),s.error===void 0&&(s.error=Zl),s.complete===void 0&&(s.complete=Zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qT(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(t){return t===Lr?void 0:t}function qT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const $T={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},KT=we.INFO,WT={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},GT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bu{constructor(e){this.name=e,this._logLevel=KT,this._logHandler=GT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const zT=(t,e)=>e.some(n=>t instanceof n);let Rf,bf;function QT(){return Rf||(Rf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YT(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,Pc=new WeakMap,Dm=new WeakMap,ec=new WeakMap,Cu=new WeakMap;function XT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),Cu.set(e,t),e}function JT(t){if(Pc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Pc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZT(t){kc=t(kc)}function eI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tc(this),e,...n);return Dm.set(r,e.sort?e.sort():[e]),ur(r)}:YT().includes(t)?function(...e){return t.apply(tc(this),e),ur(Om.get(this))}:function(...e){return ur(t.apply(tc(this),e))}}function tI(t){return typeof t=="function"?eI(t):(t instanceof IDBTransaction&&JT(t),zT(t,QT())?new Proxy(t,kc):t)}function ur(t){if(t instanceof IDBRequest)return XT(t);if(ec.has(t))return ec.get(t);const e=tI(t);return e!==t&&(ec.set(t,e),Cu.set(e,t)),e}const tc=t=>Cu.get(t);function nI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ur(o.result),c.oldVersion,c.newVersion,ur(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const rI=["get","getKey","getAll","getAllKeys","count"],sI=["put","add","delete","clear"],nc=new Map;function Cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return nc.set(e,i),i}ZT(t=>({...t,get:(e,n,r)=>Cf(e,n)||t.get(e,n,r),has:(e,n)=>!!Cf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nc="@firebase/app",Sf="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new bu("@firebase/app"),aI="@firebase/app-compat",lI="@firebase/analytics-compat",cI="@firebase/analytics",uI="@firebase/app-check-compat",hI="@firebase/app-check",dI="@firebase/auth",fI="@firebase/auth-compat",pI="@firebase/database",gI="@firebase/data-connect",mI="@firebase/database-compat",_I="@firebase/functions",yI="@firebase/functions-compat",vI="@firebase/installations",EI="@firebase/installations-compat",AI="@firebase/messaging",wI="@firebase/messaging-compat",TI="@firebase/performance",II="@firebase/performance-compat",RI="@firebase/remote-config",bI="@firebase/remote-config-compat",CI="@firebase/storage",SI="@firebase/storage-compat",PI="@firebase/firestore",kI="@firebase/ai",NI="@firebase/firestore-compat",OI="firebase",DI="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="[DEFAULT]",VI={[Nc]:"fire-core",[aI]:"fire-core-compat",[cI]:"fire-analytics",[lI]:"fire-analytics-compat",[hI]:"fire-app-check",[uI]:"fire-app-check-compat",[dI]:"fire-auth",[fI]:"fire-auth-compat",[pI]:"fire-rtdb",[gI]:"fire-data-connect",[mI]:"fire-rtdb-compat",[_I]:"fire-fn",[yI]:"fire-fn-compat",[vI]:"fire-iid",[EI]:"fire-iid-compat",[AI]:"fire-fcm",[wI]:"fire-fcm-compat",[TI]:"fire-perf",[II]:"fire-perf-compat",[RI]:"fire-rc",[bI]:"fire-rc-compat",[CI]:"fire-gcs",[SI]:"fire-gcs-compat",[PI]:"fire-fst",[NI]:"fire-fst-compat",[kI]:"fire-vertex","fire-js":"fire-js",[OI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map,xI=new Map,Dc=new Map;function Pf(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(Dc.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of wa.values())Pf(n,t);for(const n of xI.values())Pf(n,t);return!0}function nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new no("app","Firebase",MI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=DI;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=Pm()),!n)throw hr.create("no-options");const i=wa.get(s);if(i){if(Wr(n,i.options)&&Wr(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new HT(s);for(const c of Dc.values())o.addComponent(c);const l=new LI(n,r,o);return wa.set(s,l),l}function Su(t=Oc){const e=wa.get(t);if(!e&&t===Oc&&Pm())return Vm();if(!e)throw hr.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=VI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(l.join(" "));return}Gr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="firebase-heartbeat-database",FI=1,qi="firebase-heartbeat-store";let rc=null;function xm(){return rc||(rc=nI(UI,FI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),rc}async function BI(t){try{const n=(await xm()).transaction(qi),r=await n.objectStore(qi).get(Mm(t));return await n.done,r}catch(e){if(e instanceof wn)Fn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function kf(t,e){try{const r=(await xm()).transaction(qi,"readwrite");await r.objectStore(qi).put(e,Mm(t)),await r.done}catch(n){if(n instanceof wn)Fn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(r.message)}}}function Mm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1024,qI=30;class HI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>qI){const o=WI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nf(),{heartbeatsToSend:r,unsentEntries:s}=$I(this._heartbeatsCache.heartbeats),i=Aa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Fn.warn(n),""}}}function Nf(){return new Date().toISOString().substring(0,10)}function $I(t,e=jI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Of(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NT()?OT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Of(t){return Aa(JSON.stringify({version:2,heartbeats:t})).length}function WI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){Gr(new yr("platform-logger",e=>new iI(e),"PRIVATE")),Gr(new yr("heartbeat",e=>new HI(e),"PRIVATE")),gn(Nc,Sf,t),gn(Nc,Sf,"esm2017"),gn("fire-js","")}GI("");function Pu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Lm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zI=Lm,Um=new no("auth","Firebase",Lm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=new bu("@firebase/auth");function QI(t,...e){Ta.logLevel<=we.WARN&&Ta.warn(`Auth (${ts}): ${t}`,...e)}function ea(t,...e){Ta.logLevel<=we.ERROR&&Ta.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw Nu(t,...e)}function tn(t,...e){return Nu(t,...e)}function ku(t,e,n){const r=Object.assign(Object.assign({},zI()),{[e]:n});return new no("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return ku(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function YI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),ku(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Um.create(t,...e)}function he(t,e,...n){if(!t)throw Nu(e,...n)}function Vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Bn(t,e){t||Vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XI(){return Df()==="http:"||Df()==="https:"}function Df(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XI()||CT()||"connection"in navigator)?navigator.onLine:!0}function ZI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=IT()||ST()}get(){return JI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nR=new so(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kn(t,e,n,r,s={}){return Bm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ro(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return bT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&br(t.emulatorConfig.host)&&(u.credentials="include"),Fm.fetch()(await jm(t,t.config.apiHost,n,l),u)})}async function Bm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},eR),e);try{const s=new sR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Fo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ku(t,d,u);Qt(t,d)}}catch(s){if(s instanceof wn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function io(t,e,n,r,s={}){const i=await Kn(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`;return tR.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function rR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),nR.get())})}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function Vf(t){return t!==void 0&&t.enterprise!==void 0}class iR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oR(t,e){return Kn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aR(t,e){return Kn(t,"POST","/v1/accounts:delete",e)}async function Ia(t,e){return Kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lR(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=Du(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(sc(s.auth_time)),issuedAtTime:Si(sc(s.iat)),expirationTime:Si(sc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function Du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=bm(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xf(t){const e=Du(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&cR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Hi(t,Ia(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qm(i.providerUserInfo):[],l=dR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new xc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function hR(t){const e=$e(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qm(t){return t.map(e=>{var{providerId:n}=e,r=Pu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){const n=await Bm(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await jm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&br(t.emulatorConfig.host)&&(c.credentials="include"),Fm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pR(t,e){return Kn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=xf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Rs;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Rs,this.toJSON())}_performRefresh(){return Vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lR(this,e)}reload(){return hR(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await Hi(this,aR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:D,isAnonymous:J,providerData:K,stsTokenManager:R}=n;he(L&&R,e,"internal-error");const y=Rs.fromJSON(this.name,R);he(typeof L=="string",e,"internal-error"),er(p,e.name),er(g,e.name),he(typeof D=="boolean",e,"internal-error"),he(typeof J=="boolean",e,"internal-error"),er(_,e.name),er(A,e.name),er(C,e.name),er(P,e.name),er(x,e.name),er(M,e.name);const I=new Jt({uid:L,auth:e,email:g,emailVerified:D,displayName:p,isAnonymous:J,photoURL:A,phoneNumber:_,tenantId:C,stsTokenManager:y,createdAt:x,lastLoginAt:M});return K&&Array.isArray(K)&&(I.providerData=K.map(S=>Object.assign({},S))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Rs;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ra(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?qm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Rs;l.updateFromIdToken(r);const c=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf=new Map;function xn(t){Bn(t instanceof Function,"Expected a class definition");let e=Mf.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hm.type="NONE";const Lf=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ia(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(xn(Lf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xn(Lf);const o=ta(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await Ia(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Jt._fromGetAccountInfoResponse(e,g,d)}else p=Jt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new bs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new bs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qm(e))return"Blackberry";if(Ym(e))return"Webos";if(Km(e))return"Safari";if((e.includes("chrome/")||Wm(e))&&!e.includes("edge/"))return"Chrome";if(zm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $m(t=Tt()){return/firefox\//i.test(t)}function Km(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wm(t=Tt()){return/crios\//i.test(t)}function Gm(t=Tt()){return/iemobile/i.test(t)}function zm(t=Tt()){return/android/i.test(t)}function Qm(t=Tt()){return/blackberry/i.test(t)}function Ym(t=Tt()){return/webos/i.test(t)}function Vu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gR(t=Tt()){var e;return Vu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mR(){return PT()&&document.documentMode===10}function Xm(t=Tt()){return Vu(t)||zm(t)||Ym(t)||Qm(t)||/windows phone/i.test(t)||Gm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(t,e=[]){let n;switch(t){case"Browser":n=Uf(Tt());break;case"Worker":n=`${Uf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(t,e={}){return Kn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=6;class ER{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ff(this),this.idTokenSubscription=new Ff(this),this.beforeStateQueue=new _R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ia(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ZI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Mn(this));const n=e?$e(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yR(this),n=new ER(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new no("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wn(t){return $e(t)}class Ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=LT(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wR(t){rl=t}function Zm(t){return rl.loadJS(t)}function TR(){return rl.recaptchaEnterpriseScript}function IR(){return rl.gapiScript}function RR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bR{constructor(){this.enterprise=new CR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class CR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const SR="recaptcha-enterprise",e_="NO_RECAPTCHA";class PR{constructor(e){this.type=SR,this.auth=Wn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{oR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new iR(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Vf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(e_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Vf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=TR();c.length!==0&&(c+=l),Zm(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Bf(t,e,n,r=!1,s=!1){const i=new PR(t);let o;if(s)o=e_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ba(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Bf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(t,e){const n=nl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Wr(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function NR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OR(t,e,n){const r=Wn(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=t_(e),{host:o,port:l}=DR(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(Wr(u,r.config.emulator)&&Wr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,br(o)?(Iu(`${i}//${o}${c}`),Ru("Auth",!0)):VR()}function t_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DR(t){const e=t_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vn("not implemented")}_getIdTokenResponse(e){return Vn("not implemented")}_linkToIdToken(e,n){return Vn("not implemented")}_getReauthenticationResolver(e){return Vn("not implemented")}}async function xR(t,e){return Kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(t,e){return io(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}async function LR(t,e){return Kn(t,"POST","/v1/accounts:sendOobCode",$n(t,e))}async function UR(t,e){return LR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function BR(t,e){return io(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends xu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,n,"signInWithPassword",MR);case"emailLink":return FR(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ba(e,r,"signUpPassword",xR);case"emailLink":return BR(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(t,e){return io(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="http://localhost";class zr extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cs(e,n)}buildRequest(){const e={requestUri:jR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HR(t){const e=pi(gi(t)).link,n=e?pi(gi(e)).deep_link_id:null,r=pi(gi(t)).deep_link_id;return(r?pi(gi(r)).link:null)||r||n||e||t}class Mu{constructor(e){var n,r,s,i,o,l;const c=pi(gi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=qR((s=c.mode)!==null&&s!==void 0?s:null);he(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=HR(e);try{return new Mu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mu.parseLink(n);return he(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends oo{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends oo{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends oo{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return io(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=qf(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qf(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ca(e,n,r,s)}}function n_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ca._fromErrorAndOperation(t,i,e,r):i})}async function KR(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Mn(r));const s="reauthenticate";try{const i=await Hi(t,n_(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Du(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r_(t,e,n=!1){if(Ot(t.app))return Promise.reject(Mn(t));const r="signIn",s=await n_(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function GR(t,e){return r_(Wn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s_(t){const e=Wn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zR(t,e,n){const r=Wn(t);await ba(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",UR)}async function QR(t,e,n){if(Ot(t.app))return Promise.reject(Mn(t));const r=Wn(t),o=await ba(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$R).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&s_(t),c}),l=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function YR(t,e,n){return Ot(t.app)?Promise.reject(Mn(t)):GR($e(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&s_(t),r})}function XR(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function JR(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function ZR(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function eb(t){return $e(t).signOut()}const Sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=1e3,nb=10;class o_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);mR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o_.type="LOCAL";const rb=o_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a_.type="SESSION";const l_=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await sb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Uu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(){return window}function ob(t){mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function ab(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cb(){return c_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_="firebaseLocalStorageDb",ub=1,Pa="firebaseLocalStorage",h_="fbase_key";class ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function il(t,e){return t.transaction([Pa],e?"readwrite":"readonly").objectStore(Pa)}function hb(){const t=indexedDB.deleteDatabase(u_);return new ao(t).toPromise()}function Mc(){const t=indexedDB.open(u_,ub);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pa,{keyPath:h_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pa)?e(r):(r.close(),await hb(),e(await Mc()))})})}async function Hf(t,e,n){const r=il(t,!0).put({[h_]:e,value:n});return new ao(r).toPromise()}async function db(t,e){const n=il(t,!1).get(e),r=await new ao(n).toPromise();return r===void 0?null:r.value}function $f(t,e){const n=il(t,!0).delete(e);return new ao(n).toPromise()}const fb=800,pb=3;class d_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sl._getInstance(cb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ab(),!this.activeServiceWorker)return;this.sender=new ib(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Hf(e,Sa,"1"),await $f(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>db(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$f(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=il(s,!1).getAll();return new ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d_.type="LOCAL";const gb=d_;new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t,e){return e?xn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mb(t){return r_(t.auth,new Fu(t),t.bypassAuthState)}function _b(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),WR(n,new Fu(t),t.bypassAuthState)}async function yb(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),KR(n,new Fu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mb;case"linkViaPopup":case"linkViaRedirect":return yb;case"reauthViaPopup":case"reauthViaRedirect":return _b;default:Qt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=new so(2e3,1e4);async function g_(t,e,n){if(Ot(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=Wn(t);YI(t,e,Lu);const s=f_(r,n);return new Ur(r,"signInViaPopup",e,s).executeNotNull()}class Ur extends p_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vb.get())};e()}}Ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="pendingRedirect",na=new Map;class Ab extends p_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await wb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wb(t,e){const n=Rb(e),r=Ib(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Tb(t,e){na.set(t._key(),e)}function Ib(t){return xn(t._redirectPersistence)}function Rb(t){return ta(Eb,t.config.apiKey,t.name)}async function bb(t,e,n=!1){if(Ot(t.app))return Promise.reject(Mn(t));const r=Wn(t),s=f_(r,e),o=await new Ab(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=10*60*1e3;class Sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!m_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kf(e))}saveEventToCache(e){this.cachedEventUids.add(Kf(e)),this.lastProcessedEventTime=Date.now()}}function Kf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function m_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return m_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e={}){return Kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ob=/^https?/;async function Db(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kb(t);for(const n of e)try{if(Vb(n))return}catch{}Qt(t,"unauthorized-domain")}function Vb(t){const e=Vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ob.test(n))return!1;if(Nb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new so(3e4,6e4);function Wf(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mb(t){return new Promise((e,n)=>{var r,s,i;function o(){Wf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wf(),n(tn(t,"network-request-failed"))},timeout:xb.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=RR("iframefcb");return mn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},Zm(`${IR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ra=null,e})}let ra=null;function Lb(t){return ra=ra||Mb(t),ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new so(5e3,15e3),Fb="__/auth/iframe",Bb="emulator/auth/iframe",jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hb(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,Bb):`https://${t.config.authDomain}/${Fb}`,r={apiKey:e.apiKey,appName:t.name,v:ts},s=qb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ro(r).slice(1)}`}async function $b(t){const e=await Lb(t),n=mn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:Hb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},Ub.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wb=500,Gb=600,zb="_blank",Qb="http://localhost";class Gf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Yb(t,e,n,r=Wb,s=Gb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Kb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Tt().toLowerCase();n&&(l=Wm(u)?zb:n),$m(u)&&(e=e||Qb,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,A])=>`${g}${_}=${A},`,"");if(gR(u)&&l!=="_self")return Xb(e||"",l),new Gf(null);const p=window.open(e||"",l,d);he(p,t,"popup-blocked");try{p.focus()}catch{}return new Gf(p)}function Xb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="__/auth/handler",Zb="emulator/auth/handler",e0=encodeURIComponent("fac");async function zf(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:s};if(e instanceof Lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof oo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${e0}=${encodeURIComponent(c)}`:"";return`${t0(t)}?${ro(l).slice(1)}${u}`}function t0({config:t}){return t.emulator?Ou(t,Zb):`https://${t.authDomain}/${Jb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="webStorageSupport";class n0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l_,this._completeRedirectFn=bb,this._overrideRedirectResult=Tb}async _openPopup(e,n,r,s){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zf(e,n,r,Vc(),s);return Yb(e,o,Uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zf(e,n,r,Vc(),s);return ob(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $b(e),r=new Sb(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ic,{type:ic},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ic];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Db(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xm()||Km()||Vu()}}const r0=n0;var Qf="@firebase/auth",Yf="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o0(t){Gr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jm(t)},u=new AR(r,s,i,c);return NR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new yr("auth-internal",e=>{const n=Wn(e.getProvider("auth").getImmediate());return(r=>new s0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Qf,Yf,i0(t)),gn(Qf,Yf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0=5*60,l0=km("authIdTokenMaxAge")||a0;let Xf=null;const c0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>l0)return;const s=n==null?void 0:n.token;Xf!==s&&(Xf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function u0(t=Su()){const e=nl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kR(t,{popupRedirectResolver:r0,persistence:[gb,rb,l_]}),r=km("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=c0(i.toString());JR(n,o,()=>o(n.currentUser)),XR(n,l=>o(l))}}const s=Cm("auth");return s&&OR(n,`http://${s}`),n}function h0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",h0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o0("Browser");var d0="firebase",f0="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(d0,f0,"app");var Jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,__;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function I(){}I.prototype=y.prototype,R.D=y.prototype,R.prototype=new I,R.prototype.constructor=R,R.C=function(S,w,b){for(var v=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)v[rt-2]=arguments[rt];return y.prototype[w].apply(S,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,I){I||(I=0);var S=Array(16);if(typeof y=="string")for(var w=0;16>w;++w)S[w]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(w=0;16>w;++w)S[w]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=R.g[0],I=R.g[1],w=R.g[2];var b=R.g[3],v=y+(b^I&(w^b))+S[0]+3614090360&4294967295;y=I+(v<<7&4294967295|v>>>25),v=b+(w^y&(I^w))+S[1]+3905402710&4294967295,b=y+(v<<12&4294967295|v>>>20),v=w+(I^b&(y^I))+S[2]+606105819&4294967295,w=b+(v<<17&4294967295|v>>>15),v=I+(y^w&(b^y))+S[3]+3250441966&4294967295,I=w+(v<<22&4294967295|v>>>10),v=y+(b^I&(w^b))+S[4]+4118548399&4294967295,y=I+(v<<7&4294967295|v>>>25),v=b+(w^y&(I^w))+S[5]+1200080426&4294967295,b=y+(v<<12&4294967295|v>>>20),v=w+(I^b&(y^I))+S[6]+2821735955&4294967295,w=b+(v<<17&4294967295|v>>>15),v=I+(y^w&(b^y))+S[7]+4249261313&4294967295,I=w+(v<<22&4294967295|v>>>10),v=y+(b^I&(w^b))+S[8]+1770035416&4294967295,y=I+(v<<7&4294967295|v>>>25),v=b+(w^y&(I^w))+S[9]+2336552879&4294967295,b=y+(v<<12&4294967295|v>>>20),v=w+(I^b&(y^I))+S[10]+4294925233&4294967295,w=b+(v<<17&4294967295|v>>>15),v=I+(y^w&(b^y))+S[11]+2304563134&4294967295,I=w+(v<<22&4294967295|v>>>10),v=y+(b^I&(w^b))+S[12]+1804603682&4294967295,y=I+(v<<7&4294967295|v>>>25),v=b+(w^y&(I^w))+S[13]+4254626195&4294967295,b=y+(v<<12&4294967295|v>>>20),v=w+(I^b&(y^I))+S[14]+2792965006&4294967295,w=b+(v<<17&4294967295|v>>>15),v=I+(y^w&(b^y))+S[15]+1236535329&4294967295,I=w+(v<<22&4294967295|v>>>10),v=y+(w^b&(I^w))+S[1]+4129170786&4294967295,y=I+(v<<5&4294967295|v>>>27),v=b+(I^w&(y^I))+S[6]+3225465664&4294967295,b=y+(v<<9&4294967295|v>>>23),v=w+(y^I&(b^y))+S[11]+643717713&4294967295,w=b+(v<<14&4294967295|v>>>18),v=I+(b^y&(w^b))+S[0]+3921069994&4294967295,I=w+(v<<20&4294967295|v>>>12),v=y+(w^b&(I^w))+S[5]+3593408605&4294967295,y=I+(v<<5&4294967295|v>>>27),v=b+(I^w&(y^I))+S[10]+38016083&4294967295,b=y+(v<<9&4294967295|v>>>23),v=w+(y^I&(b^y))+S[15]+3634488961&4294967295,w=b+(v<<14&4294967295|v>>>18),v=I+(b^y&(w^b))+S[4]+3889429448&4294967295,I=w+(v<<20&4294967295|v>>>12),v=y+(w^b&(I^w))+S[9]+568446438&4294967295,y=I+(v<<5&4294967295|v>>>27),v=b+(I^w&(y^I))+S[14]+3275163606&4294967295,b=y+(v<<9&4294967295|v>>>23),v=w+(y^I&(b^y))+S[3]+4107603335&4294967295,w=b+(v<<14&4294967295|v>>>18),v=I+(b^y&(w^b))+S[8]+1163531501&4294967295,I=w+(v<<20&4294967295|v>>>12),v=y+(w^b&(I^w))+S[13]+2850285829&4294967295,y=I+(v<<5&4294967295|v>>>27),v=b+(I^w&(y^I))+S[2]+4243563512&4294967295,b=y+(v<<9&4294967295|v>>>23),v=w+(y^I&(b^y))+S[7]+1735328473&4294967295,w=b+(v<<14&4294967295|v>>>18),v=I+(b^y&(w^b))+S[12]+2368359562&4294967295,I=w+(v<<20&4294967295|v>>>12),v=y+(I^w^b)+S[5]+4294588738&4294967295,y=I+(v<<4&4294967295|v>>>28),v=b+(y^I^w)+S[8]+2272392833&4294967295,b=y+(v<<11&4294967295|v>>>21),v=w+(b^y^I)+S[11]+1839030562&4294967295,w=b+(v<<16&4294967295|v>>>16),v=I+(w^b^y)+S[14]+4259657740&4294967295,I=w+(v<<23&4294967295|v>>>9),v=y+(I^w^b)+S[1]+2763975236&4294967295,y=I+(v<<4&4294967295|v>>>28),v=b+(y^I^w)+S[4]+1272893353&4294967295,b=y+(v<<11&4294967295|v>>>21),v=w+(b^y^I)+S[7]+4139469664&4294967295,w=b+(v<<16&4294967295|v>>>16),v=I+(w^b^y)+S[10]+3200236656&4294967295,I=w+(v<<23&4294967295|v>>>9),v=y+(I^w^b)+S[13]+681279174&4294967295,y=I+(v<<4&4294967295|v>>>28),v=b+(y^I^w)+S[0]+3936430074&4294967295,b=y+(v<<11&4294967295|v>>>21),v=w+(b^y^I)+S[3]+3572445317&4294967295,w=b+(v<<16&4294967295|v>>>16),v=I+(w^b^y)+S[6]+76029189&4294967295,I=w+(v<<23&4294967295|v>>>9),v=y+(I^w^b)+S[9]+3654602809&4294967295,y=I+(v<<4&4294967295|v>>>28),v=b+(y^I^w)+S[12]+3873151461&4294967295,b=y+(v<<11&4294967295|v>>>21),v=w+(b^y^I)+S[15]+530742520&4294967295,w=b+(v<<16&4294967295|v>>>16),v=I+(w^b^y)+S[2]+3299628645&4294967295,I=w+(v<<23&4294967295|v>>>9),v=y+(w^(I|~b))+S[0]+4096336452&4294967295,y=I+(v<<6&4294967295|v>>>26),v=b+(I^(y|~w))+S[7]+1126891415&4294967295,b=y+(v<<10&4294967295|v>>>22),v=w+(y^(b|~I))+S[14]+2878612391&4294967295,w=b+(v<<15&4294967295|v>>>17),v=I+(b^(w|~y))+S[5]+4237533241&4294967295,I=w+(v<<21&4294967295|v>>>11),v=y+(w^(I|~b))+S[12]+1700485571&4294967295,y=I+(v<<6&4294967295|v>>>26),v=b+(I^(y|~w))+S[3]+2399980690&4294967295,b=y+(v<<10&4294967295|v>>>22),v=w+(y^(b|~I))+S[10]+4293915773&4294967295,w=b+(v<<15&4294967295|v>>>17),v=I+(b^(w|~y))+S[1]+2240044497&4294967295,I=w+(v<<21&4294967295|v>>>11),v=y+(w^(I|~b))+S[8]+1873313359&4294967295,y=I+(v<<6&4294967295|v>>>26),v=b+(I^(y|~w))+S[15]+4264355552&4294967295,b=y+(v<<10&4294967295|v>>>22),v=w+(y^(b|~I))+S[6]+2734768916&4294967295,w=b+(v<<15&4294967295|v>>>17),v=I+(b^(w|~y))+S[13]+1309151649&4294967295,I=w+(v<<21&4294967295|v>>>11),v=y+(w^(I|~b))+S[4]+4149444226&4294967295,y=I+(v<<6&4294967295|v>>>26),v=b+(I^(y|~w))+S[11]+3174756917&4294967295,b=y+(v<<10&4294967295|v>>>22),v=w+(y^(b|~I))+S[2]+718787259&4294967295,w=b+(v<<15&4294967295|v>>>17),v=I+(b^(w|~y))+S[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,R.g[2]=R.g[2]+w&4294967295,R.g[3]=R.g[3]+b&4294967295}r.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var I=y-this.blockSize,S=this.B,w=this.h,b=0;b<y;){if(w==0)for(;b<=I;)s(this,R,b),b+=this.blockSize;if(typeof R=="string"){for(;b<y;)if(S[w++]=R.charCodeAt(b++),w==this.blockSize){s(this,S),w=0;break}}else for(;b<y;)if(S[w++]=R[b++],w==this.blockSize){s(this,S),w=0;break}}this.h=w,this.o+=y},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var I=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=I&255,I/=256;for(this.u(R),R=Array(16),y=I=0;4>y;++y)for(var S=0;32>S;S+=8)R[I++]=this.g[y]>>>S&255;return R};function i(R,y){var I=l;return Object.prototype.hasOwnProperty.call(I,R)?I[R]:I[R]=y(R)}function o(R,y){this.h=y;for(var I=[],S=!0,w=R.length-1;0<=w;w--){var b=R[w]|0;S&&b==y||(I[w]=b,S=!1)}this.g=I}var l={};function c(R){return-128<=R&&128>R?i(R,function(y){return new o([y|0],0>y?-1:0)}):new o([R|0],0>R?-1:0)}function u(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return P(u(-R));for(var y=[],I=1,S=0;R>=I;S++)y[S]=R/I|0,I*=4294967296;return new o(y,0)}function d(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return P(d(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(y,8)),S=p,w=0;w<R.length;w+=8){var b=Math.min(8,R.length-w),v=parseInt(R.substring(w,w+b),y);8>b?(b=u(Math.pow(y,b)),S=S.j(b).add(u(v))):(S=S.j(I),S=S.add(u(v)))}return S}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-P(this).m();for(var R=0,y=1,I=0;I<this.g.length;I++){var S=this.i(I);R+=(0<=S?S:4294967296+S)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(A(this))return"0";if(C(this))return"-"+P(this).toString(R);for(var y=u(Math.pow(R,6)),I=this,S="";;){var w=D(I,y).g;I=x(I,w.j(y));var b=((0<I.g.length?I.g[0]:I.h)>>>0).toString(R);if(I=w,A(I))return b+S;for(;6>b.length;)b="0"+b;S=b+S}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function A(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function C(R){return R.h==-1}t.l=function(R){return R=x(this,R),C(R)?-1:A(R)?0:1};function P(R){for(var y=R.g.length,I=[],S=0;S<y;S++)I[S]=~R.g[S];return new o(I,~R.h).add(g)}t.abs=function(){return C(this)?P(this):this},t.add=function(R){for(var y=Math.max(this.g.length,R.g.length),I=[],S=0,w=0;w<=y;w++){var b=S+(this.i(w)&65535)+(R.i(w)&65535),v=(b>>>16)+(this.i(w)>>>16)+(R.i(w)>>>16);S=v>>>16,b&=65535,v&=65535,I[w]=v<<16|b}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(R,y){return R.add(P(y))}t.j=function(R){if(A(this)||A(R))return p;if(C(this))return C(R)?P(this).j(P(R)):P(P(this).j(R));if(C(R))return P(this.j(P(R)));if(0>this.l(_)&&0>R.l(_))return u(this.m()*R.m());for(var y=this.g.length+R.g.length,I=[],S=0;S<2*y;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var w=0;w<R.g.length;w++){var b=this.i(S)>>>16,v=this.i(S)&65535,rt=R.i(w)>>>16,It=R.i(w)&65535;I[2*S+2*w]+=v*It,M(I,2*S+2*w),I[2*S+2*w+1]+=b*It,M(I,2*S+2*w+1),I[2*S+2*w+1]+=v*rt,M(I,2*S+2*w+1),I[2*S+2*w+2]+=b*rt,M(I,2*S+2*w+2)}for(S=0;S<y;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=y;S<2*y;S++)I[S]=0;return new o(I,0)};function M(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function L(R,y){this.g=R,this.h=y}function D(R,y){if(A(y))throw Error("division by zero");if(A(R))return new L(p,p);if(C(R))return y=D(P(R),y),new L(P(y.g),P(y.h));if(C(y))return y=D(R,P(y)),new L(P(y.g),y.h);if(30<R.g.length){if(C(R)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,S=y;0>=S.l(R);)I=J(I),S=J(S);var w=K(I,1),b=K(S,1);for(S=K(S,2),I=K(I,2);!A(S);){var v=b.add(S);0>=v.l(R)&&(w=w.add(I),b=v),S=K(S,1),I=K(I,1)}return y=x(R,w.j(y)),new L(w,y)}for(w=p;0<=R.l(y);){for(I=Math.max(1,Math.floor(R.m()/y.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),b=u(I),v=b.j(y);C(v)||0<v.l(R);)I-=S,b=u(I),v=b.j(y);A(b)&&(b=g),w=w.add(b),R=x(R,v)}return new L(w,R)}t.A=function(R){return D(this,R).h},t.and=function(R){for(var y=Math.max(this.g.length,R.g.length),I=[],S=0;S<y;S++)I[S]=this.i(S)&R.i(S);return new o(I,this.h&R.h)},t.or=function(R){for(var y=Math.max(this.g.length,R.g.length),I=[],S=0;S<y;S++)I[S]=this.i(S)|R.i(S);return new o(I,this.h|R.h)},t.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),I=[],S=0;S<y;S++)I[S]=this.i(S)^R.i(S);return new o(I,this.h^R.h)};function J(R){for(var y=R.g.length+1,I=[],S=0;S<y;S++)I[S]=R.i(S)<<1|R.i(S-1)>>>31;return new o(I,R.h)}function K(R,y){var I=y>>5;y%=32;for(var S=R.g.length-I,w=[],b=0;b<S;b++)w[b]=0<y?R.i(b+I)>>>y|R.i(b+I+1)<<32-y:R.i(b+I);return new o(w,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,__=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,dr=o}).apply(typeof Jf<"u"?Jf:typeof self<"u"?self:typeof window<"u"?window:{});var Bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var y_,mi,v_,sa,Lc,E_,A_,w_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bo=="object"&&Bo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in f))break e;f=f[N]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,N={next:function(){if(!m&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,N,V){for(var z=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)z[Ve-2]=arguments[Ve];return h.prototype[N].apply(m,z)}}function C(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const N=a.length||0,V=m.length||0;a.length=N+V;for(let z=0;z<V;z++)a[N+z]=m[z]}else a.push(m)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var J=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function K(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function R(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(f in m)a[f]=m[f];for(let V=0;V<I.length;V++)f=I[V],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function w(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function b(a){l.setTimeout(()=>{throw a},0)}function v(){var a=xt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class rt{constructor(){this.h=this.g=null}add(h,f){const m=It.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var It=new x(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Ee=!1,xt=new rt,Yt=()=>{const a=l.Promise.resolve(void 0);Ae=()=>{a.then(Ht)}};var Ht=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){b(f)}var h=It;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function qe(){this.s=this.s,this.C=this.C}qe.prototype.s=!1,qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function on(a,h){if(He.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{D(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}A(on,He);var Pt={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Z(a,h,f,m,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=N,this.key=++ee,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,h,f,m,N){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var z=T(a,h,m,N);return-1<z?(h=a[z],f||(h.fa=!1)):(h=new Z(h,this.src,V,!!m,N),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var m=a.g[f],N=Array.prototype.indexOf.call(m,h,void 0),V;(V=0<=N)&&Array.prototype.splice.call(m,N,1),V&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,m){for(var N=0;N<a.length;++N){var V=a[N];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==m)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function H(a,h,f,m,N){if(Array.isArray(h)){for(var V=0;V<h.length;V++)H(a,h[V],f,m,N);return null}return f=fe(f),a&&a[U]?a.K(h,f,u(m)?!!m.capture:!1,N):B(a,h,f,!1,m,N)}function B(a,h,f,m,N,V){if(!h)throw Error("Invalid event type");var z=u(N)?!!N.capture:!!N,Ve=Y(a);if(Ve||(a[k]=Ve=new Se(a)),f=Ve.add(h,f,m,z,V),f.proxy)return f;if(m=X(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)zn||(N=z),N===void 0&&(N=!1),a.addEventListener(h.toString(),m,N);else if(a.attachEvent)a.attachEvent($(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function X(){function a(f){return h.call(a.src,a.listener,f)}const h=ae;return a}function G(a,h,f,m,N){if(Array.isArray(h))for(var V=0;V<h.length;V++)G(a,h[V],f,m,N);else m=u(m)?!!m.capture:!!m,f=fe(f),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=T(V,f,m,N),-1<f&&(re(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,m,N)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])E(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent($(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Y(h))?(E(f,a),f.h==0&&(f.src=null,h[k]=null)):re(a)}}}function $(a){return a in F?F[a]:F[a]="on"+a}function ae(a,h){if(a.da)a=!0;else{h=new on(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&W(a),a=f.call(m,h)}return a}function Y(a){return a=a[k],a instanceof Se?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function fe(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ce(){qe.call(this),this.i=new Se(this),this.M=this,this.F=null}A(ce,qe),ce.prototype[U]=!0,ce.prototype.removeEventListener=function(a,h,f,m){G(this,a,h,f,m)};function _e(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new He(h,a);else if(h instanceof He)h.target=h.target||a;else{var N=h;h=new He(m,a),S(h,N)}if(N=!0,f)for(var V=f.length-1;0<=V;V--){var z=h.g=f[V];N=Ie(z,m,!0,h)&&N}if(z=h.g=a,N=Ie(z,m,!0,h)&&N,N=Ie(z,m,!1,h)&&N,f)for(V=0;V<f.length;V++)z=h.g=f[V],N=Ie(z,m,!1,h)&&N}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)re(f[m]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},ce.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Ie(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,V=0;V<h.length;++V){var z=h[V];if(z&&!z.da&&z.capture==f){var Ve=z.listener,at=z.ha||z.src;z.fa&&E(a.i,z),N=Ve.call(at,m)!==!1&&N}}return N&&!m.defaultPrevented}function dt(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function it(a){a.g=dt(()=>{a.g=null,a.i&&(a.i=!1,it(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $t extends qe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){qe.call(this),this.h=a,this.g={}}A(ft,qe);var Qn=[];function Qs(a){K(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Qs(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ot=l.JSON.stringify,Kt=l.JSON.parse,mo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Tl(){}Tl.prototype.h=null;function Vh(a){return a.h||(a.h=a.i())}function xh(){}var Ys={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Il(){He.call(this,"d")}A(Il,He);function Rl(){He.call(this,"c")}A(Rl,He);var kr={},Mh=null;function _o(){return Mh=Mh||new ce}kr.La="serverreachability";function Lh(a){He.call(this,kr.La,a)}A(Lh,He);function Xs(a){const h=_o();_e(h,new Lh(h))}kr.STAT_EVENT="statevent";function Uh(a,h){He.call(this,kr.STAT_EVENT,a),this.stat=h}A(Uh,He);function Rt(a){const h=_o();_e(h,new Uh(h,a))}kr.Ma="timingevent";function Fh(a,h){He.call(this,kr.Ma,a),this.size=h}A(Fh,He);function Js(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Zs(){this.g=!0}Zs.prototype.xa=function(){this.g=!1};function fv(a,h,f,m,N,V){a.info(function(){if(a.g)if(V)for(var z="",Ve=V.split("&"),at=0;at<Ve.length;at++){var Pe=Ve[at].split("=");if(1<Pe.length){var pt=Pe[0];Pe=Pe[1];var gt=pt.split("_");z=2<=gt.length&&gt[1]=="type"?z+(pt+"="+Pe+"&"):z+(pt+"=redacted&")}}else z=null;else z=V;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+f+`
`+z})}function pv(a,h,f,m,N,V,z){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+f+`
`+V+" "+z})}function ls(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+mv(a,f)+(m?" "+m:"")})}function gv(a,h){a.info(function(){return"TIMEOUT: "+h})}Zs.prototype.info=function(){};function mv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return ot(f)}catch{return h}}var yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bl;function vo(){}A(vo,Tl),vo.prototype.g=function(){return new XMLHttpRequest},vo.prototype.i=function(){return{}},bl=new vo;function Yn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var qh={},Cl={};function Sl(a,h,f){a.L=1,a.v=To(Tn(h)),a.m=f,a.P=!0,Hh(a,null)}function Hh(a,h){a.F=Date.now(),Eo(a),a.A=Tn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),rd(f.i,"t",m),a.C=0,f=a.j.J,a.h=new jh,a.g=Ad(a.j,f?h:null,!a.m),0<a.O&&(a.M=new $t(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Qn[0]=N.toString()),N=Qn);for(var V=0;V<N.length;V++){var z=H(f,N[V],m||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Xs(),fv(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=In(this.g);var h=this.g.Ba();const hs=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||ud(this.g)))){this.J||gt!=4||h==7||(h==8||0>=hs?Xs(3):Xs(2)),Pl(this);var f=this.g.Z();this.X=f;t:if($h(this)){var m=ud(this.g);a="";var N=m.length,V=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),ei(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(V&&h==N-1)});m.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=f==200,pv(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,at=this.g;if((Ve=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ve)){var Pe=Ve;break t}}Pe=null}if(f=Pe)ls(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,f);else{this.o=!1,this.s=3,Rt(12),Nr(this),ei(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<z.length;)if(Xt=_v(this,z),Xt==Cl){gt==4&&(this.s=4,Rt(14),f=!1),ls(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==qh){this.s=4,Rt(15),ls(this.i,this.l,z,"[Invalid Chunk]"),f=!1;break}else ls(this.i,this.l,Xt,null),kl(this,Xt);if($h(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||z.length!=0||this.h.h||(this.s=1,Rt(16),f=!1),this.o=this.o&&f,!f)ls(this.i,this.l,z,"[Invalid Chunked Response]"),Nr(this),ei(this);else if(0<z.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Ml(pt),pt.M=!0,Rt(11))}}else ls(this.i,this.l,z,null),kl(this,z);gt==4&&Nr(this),this.o&&!this.J&&(gt==4?_d(this.j,this):(this.o=!1,Eo(this)))}else Vv(this.g),f==400&&0<z.indexOf("Unknown SID")?(this.s=3,Rt(12)):(this.s=0,Rt(13)),Nr(this),ei(this)}}}catch{}finally{}};function $h(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function _v(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Cl:(f=Number(h.substring(f,m)),isNaN(f)?qh:(m+=1,m+f>h.length?Cl:(h=h.slice(m,m+f),a.C=m+f,h)))}Yn.prototype.cancel=function(){this.J=!0,Nr(this)};function Eo(a){a.S=Date.now()+a.I,Kh(a,a.I)}function Kh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Js(g(a.ba,a),h)}function Pl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(gv(this.i,this.A),this.L!=2&&(Xs(),Rt(17)),Nr(this),this.s=2,ei(this)):Kh(this,this.S-a)};function ei(a){a.j.G==0||a.J||_d(a.j,a)}function Nr(a){Pl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function kl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Nl(f.h,a))){if(!a.K&&Nl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Po(f),Co(f);else break e;xl(f),Rt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Js(g(f.Za,f),6e3));if(1>=zh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Dr(f,11)}else if((a.K||f.g==a)&&Po(f),!M(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let Pe=N[h];if(f.T=Pe[0],Pe=Pe[1],f.G==2)if(Pe[0]=="c"){f.K=Pe[1],f.ia=Pe[2];const pt=Pe[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const gt=Pe[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const hs=Pe[5];hs!=null&&typeof hs=="number"&&0<hs&&(m=1.5*hs,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Xt=a.g;if(Xt){const No=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var V=m.h;V.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ol(V,V.h),V.h=null))}if(m.D){const Ll=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ll&&(m.ya=Ll,Ue(m.I,m.D,Ll))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var z=a;if(m.qa=Ed(m,m.J?m.ia:null,m.W),z.K){Qh(m.h,z);var Ve=z,at=m.L;at&&(Ve.I=at),Ve.B&&(Pl(Ve),Eo(Ve)),m.g=z}else gd(m);0<f.i.length&&So(f)}else Pe[0]!="stop"&&Pe[0]!="close"||Dr(f,7);else f.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?Dr(f,7):Vl(f):Pe[0]!="noop"&&f.l&&f.l.ta(Pe),f.v=0)}}Xs(4)}catch{}}var yv=class{constructor(a,h){this.g=a,this.map=h}};function Wh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zh(a){return a.h?1:a.g?a.g.size:0}function Nl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ol(a,h){a.g?a.g.add(h):a.h=h}function Qh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Wh.prototype.cancel=function(){if(this.i=Yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return C(a.i)}function vv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function Ev(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Xh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Ev(a),m=vv(a),N=m.length,V=0;V<N;V++)h.call(void 0,m[V],f&&f[V],a)}var Jh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Av(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),N=null;if(0<=m){var V=a[f].substring(0,m);N=a[f].substring(m+1)}else V=a[f];h(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,Ao(this,a.j),this.o=a.o,this.g=a.g,wo(this,a.s),this.l=a.l;var h=a.i,f=new ri;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Zh(this,f),this.m=a.m}else a&&(h=String(a).match(Jh))?(this.h=!1,Ao(this,h[1]||"",!0),this.o=ti(h[2]||""),this.g=ti(h[3]||"",!0),wo(this,h[4]),this.l=ti(h[5]||"",!0),Zh(this,h[6]||"",!0),this.m=ti(h[7]||"")):(this.h=!1,this.i=new ri(null,this.h))}Or.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ni(h,ed,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ni(h,ed,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ni(f,f.charAt(0)=="/"?Iv:Tv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ni(f,bv)),a.join("")};function Tn(a){return new Or(a)}function Ao(a,h,f){a.j=f?ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function wo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zh(a,h,f){h instanceof ri?(a.i=h,Cv(a.i,a.h)):(f||(h=ni(h,Rv)),a.i=new ri(h,a.h))}function Ue(a,h,f){a.i.set(h,f)}function To(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ni(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,wv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function wv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ed=/[#\/\?@]/g,Tv=/[#\?:]/g,Iv=/[#\?]/g,Rv=/[#\?@]/g,bv=/#/g;function ri(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&Av(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ri.prototype,t.add=function(a,h){Xn(this),this.i=null,a=cs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function td(a,h){Xn(a),h=cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function nd(a,h){return Xn(a),h=cs(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,m){f.forEach(function(N){a.call(h,N,m,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const N=a[m];for(let V=0;V<N.length;V++)f.push(h[m])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")nd(this,a)&&(h=h.concat(this.g.get(cs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=cs(this,a),nd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function rd(a,h,f){td(a,h),0<f.length&&(a.i=null,a.g.set(cs(a,h),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const V=encodeURIComponent(String(m)),z=this.V(m);for(m=0;m<z.length;m++){var N=V;z[m]!==""&&(N+="="+encodeURIComponent(String(z[m]))),a.push(N)}}return this.i=a.join("&")};function cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Cv(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,m){var N=m.toLowerCase();m!=N&&(td(this,m),rd(this,N,f))},a)),a.j=h}function Sv(a,h){const f=new Zs;if(l.Image){const m=new Image;m.onload=_(Jn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=_(Jn,f,"TestLoadImage: error",!1,h,m),m.onabort=_(Jn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(Jn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Pv(a,h){const f=new Zs,m=new AbortController,N=setTimeout(()=>{m.abort(),Jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(N),V.ok?Jn(f,"TestPingServer: ok",!0,h):Jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Jn(f,"TestPingServer: error",!1,h)})}function Jn(a,h,f,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(f)}catch{}}function kv(){this.g=new mo}function Nv(a,h,f){const m=f||"";try{Xh(a,function(N,V){let z=N;u(N)&&(z=ot(N)),h.push(m+V+"="+encodeURIComponent(z))})}catch(N){throw h.push(m+"type="+encodeURIComponent("_badmap")),N}}function Io(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Io,Tl),Io.prototype.g=function(){return new Ro(this.l,this.j)},Io.prototype.i=function(a){return function(){return a}}({});function Ro(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Ro,ce),t=Ro.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ii(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,si(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?si(this):ii(this),this.readyState==3&&sd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,si(this))},t.Qa=function(a){this.g&&(this.response=a,si(this))},t.ga=function(){this.g&&si(this)};function si(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ii(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ii(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function id(a){let h="";return K(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Dl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=id(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,h,f))}function We(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(We,ce);var Ov=/^https?$/i,Dv=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bl.g(),this.v=this.o?Vh(this.o):Vh(bl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){od(this,V);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)f.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())f.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Dv,h,void 0))||m||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,z]of f)this.g.setRequestHeader(V,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cd(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){od(this,V)}};function od(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ad(a),bo(a)}function ad(a){a.A||(a.A=!0,_e(a,"complete"),_e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,_e(this,"complete"),_e(this,"abort"),bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bo(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ld(this):this.bb())},t.bb=function(){ld(this)};function ld(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)dt(a.Ea,0,a);else if(_e(a,"readystatechange"),In(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=z===0){var N=String(a.D).match(Jh)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),m=!Ov.test(N?N.toLowerCase():"")}f=m}if(f)_e(a,"complete"),_e(a,"success");else{a.m=6;try{var V=2<In(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",ad(a)}}finally{bo(a)}}}}function bo(a,h){if(a.g){cd(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||_e(a,"ready");try{f.onreadystatechange=m}catch{}}}function cd(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Kt(h)}};function ud(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Vv(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var f=w(a[m]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[N]||[];h[N]=V,V.push(f)}R(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function oi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function hd(a){this.Aa=0,this.i=[],this.j=new Zs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=oi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=oi("baseRetryDelayMs",5e3,a),this.cb=oi("retryDelaySeedMs",1e4,a),this.Wa=oi("forwardChannelMaxRetries",2,a),this.wa=oi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wh(a&&a.concurrentRequestLimit),this.Da=new kv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){Rt(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Ed(this,null,this.W),So(this)};function Vl(a){if(dd(a),a.G==3){var h=a.U++,f=Tn(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",h),Ue(f,"TYPE","terminate"),ai(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=To(Tn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ad(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Eo(h)}vd(a)}function Co(a){a.g&&(Ml(a),a.g.cancel(),a.g=null)}function dd(a){Co(a),a.u&&(l.clearTimeout(a.u),a.u=null),Po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function So(a){if(!Gh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ae||Yt(),Ee||(Ae(),Ee=!0),xt.add(h,a),a.B=0}}function xv(a,h){return zh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Js(g(a.Ga,a,h),yd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Yn(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),S(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=pd(this,N,h),f=Tn(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),ai(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(id(V)))+"&"+h:this.m&&Dl(f,this.m,V)),Ol(this.h,N),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",h),Ue(f,"SID","null"),N.T=!0,Sl(N,f,null)):Sl(N,f,h),this.G=2}}else this.G==3&&(a?fd(this,a):this.i.length==0||Gh(this.h)||fd(this))};function fd(a,h){var f;h?f=h.l:f=a.U++;const m=Tn(a.I);Ue(m,"SID",a.K),Ue(m,"RID",f),Ue(m,"AID",a.T),ai(a,m),a.m&&a.o&&Dl(m,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ol(a.h,f),Sl(f,m,h)}function ai(a,h){a.H&&K(a.H,function(f,m){Ue(h,m,f)}),a.l&&Xh({},function(f,m){Ue(h,m,f)})}function pd(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let V=-1;for(;;){const z=["count="+f];V==-1?0<f?(V=N[0].g,z.push("ofs="+V)):V=0:z.push("ofs="+V);let Ve=!0;for(let at=0;at<f;at++){let Pe=N[at].g;const pt=N[at].map;if(Pe-=V,0>Pe)V=Math.max(0,N[at].g-100),Ve=!1;else try{Nv(pt,z,"req"+Pe+"_")}catch{m&&m(pt)}}if(Ve){m=z.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function gd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ae||Yt(),Ee||(Ae(),Ee=!0),xt.add(h,a),a.v=0}}function xl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Js(g(a.Fa,a),yd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,md(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Js(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Rt(10),Co(this),md(this))};function Ml(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function md(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ai(a,h),a.m&&a.o&&Dl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=To(Tn(h)),f.m=null,f.P=!0,Hh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Co(this),xl(this),Rt(19))};function Po(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function _d(a,h){var f=null;if(a.g==h){Po(a),Ml(a),a.g=null;var m=2}else if(Nl(a.h,h))f=h.D,Qh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;m=_o(),_e(m,new Fh(m,f)),So(a)}else gd(a);else if(N=h.s,N==3||N==0&&0<h.X||!(m==1&&xv(a,h)||m==2&&xl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function yd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const N=!m;m=new Or(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ao(m,"https"),To(m),N?Sv(m.toString(),f):Pv(m.toString(),f)}else Rt(2);a.G=0,a.l&&a.l.sa(h),vd(a),dd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function vd(a){if(a.G=0,a.ka=[],a.l){const h=Yh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Ed(a,h,f){var m=f instanceof Or?Tn(f):new Or(f);if(m.g!="")h&&(m.g=h+"."+m.g),wo(m,m.s);else{var N=l.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var V=new Or(null);m&&Ao(V,m),h&&(V.g=h),N&&wo(V,N),f&&(V.l=f),m=V}return f=a.D,h=a.ya,f&&h&&Ue(m,f,h),Ue(m,"VER",a.la),ai(a,m),m}function Ad(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Io({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wd(){}t=wd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ko(){}ko.prototype.g=function(a,h){return new Mt(a,h)};function Mt(a,h){ce.call(this),this.g=new hd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new us(this)}A(Mt,ce),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Vl(this.g)},Mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ot(a),a=f);h.i.push(new yv(h.Ya++,a)),h.G==3&&So(h)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Vl(this.g),delete this.g,Mt.aa.N.call(this)};function Td(a){Il.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Td,Il);function Id(){Rl.call(this),this.status=1}A(Id,Rl);function us(a){this.g=a}A(us,wd),us.prototype.ua=function(){_e(this.g,"a")},us.prototype.ta=function(a){_e(this.g,new Td(a))},us.prototype.sa=function(a){_e(this.g,new Id)},us.prototype.ra=function(){_e(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,w_=function(){return new ko},A_=function(){return _o()},E_=kr,Lc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,sa=yo,Bh.COMPLETE="complete",v_=Bh,xh.EventType=Ys,Ys.OPEN="a",Ys.CLOSE="b",Ys.ERROR="c",Ys.MESSAGE="d",ce.prototype.listen=ce.prototype.K,mi=xh,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,y_=We}).apply(typeof Bo<"u"?Bo:typeof self<"u"?self:typeof window<"u"?window:{});const Zf="@firebase/firestore",ep="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new bu("@firebase/firestore");function ms(){return Yr.logLevel}function te(t,...e){if(Yr.logLevel<=we.DEBUG){const n=e.map(Bu);Yr.debug(`Firestore (${$s}): ${t}`,...n)}}function jn(t,...e){if(Yr.logLevel<=we.ERROR){const n=e.map(Bu);Yr.error(`Firestore (${$s}): ${t}`,...n)}}function xs(t,...e){if(Yr.logLevel<=we.WARN){const n=e.map(Bu);Yr.warn(`Firestore (${$s}): ${t}`,...n)}}function Bu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,T_(t,r,n)}function T_(t,e,n){let r=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw jn(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||T_(e,s,r)}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class p0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class g0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m0{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new I_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class _0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class y0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new _0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new tp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new tp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=E0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Uc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ve(r,s);{const i=R_(),o=A0(i.encode(np(t,n)),i.encode(np(e,n)));return o!==0?o:ve(r,s)}}n+=r>65535?2:1}return ve(t.length,e.length)}function np(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function A0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ve(t[n],e[n]);return ve(t.length,e.length)}function Ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp=-62135596800,sp=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sp);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<rp)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sp}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-rp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new tt(0,0))}static max(){return new pe(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ve(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),s=un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?un.extractNumericId(e).compare(un.extractNumericId(n)):Uc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Fe extends un{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const w0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends un{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return w0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ip}static keyField(){return new ut([ip])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Fe.fromString(e))}static fromName(e){return new le(Fe.fromString(e).popFirst(5))}static empty(){return new le(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=-1;function T0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new vr(s,le.empty(),e)}function I0(t){return new vr(t.readTime,t.key,Ki)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(pe.min(),le.empty(),Ki)}static max(){return new vr(pe.max(),le.empty(),Ki)}}function R0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ks(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==b0)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function S0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ws(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ol.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=-1;function al(t){return t==null}function ka(t){return t===0&&1/t==-1/0}function P0(t){return typeof t=="number"&&Number.isInteger(t)&&!ka(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="";function k0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=op(e)),e=N0(t.get(n),e);return op(e)}function N0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case C_:n+="";break;default:n+=i}}return n}function op(t){return t+C_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function S_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jo(this.root,e,this.comparator,!1)}getReverseIterator(){return new jo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jo(this.root,e,this.comparator,!0)}}class jo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lp(this.data.getIterator())}getIteratorFrom(e){return new lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new nt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new P_("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const O0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=O0.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ar(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="server_timestamp",N_="__type__",O_="__previous_value__",D_="__local_write_time__";function qu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[N_])===null||n===void 0?void 0:n.stringValue)===k_}function ll(t){const e=t.mapValue.fields[O_];return qu(e)?ll(e):e}function Wi(t){const e=Er(t.mapValue.fields[D_].timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Na="(default)";class Gi{constructor(e,n){this.projectId=e,this.database=n||Na}static empty(){return new Gi("","")}get isDefaultDatabase(){return this.database===Na}isEqual(e){return e instanceof Gi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_="__type__",V0="__max__",qo={mapValue:{}},x_="__vector__",Oa="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qu(t)?4:M0(t)?9007199254740991:x0(t)?10:11:de(28295,{value:t})}function An(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wi(t).isEqual(Wi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),l=Er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ar(s.bytesValue).isEqual(Ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),l=Xe(i.doubleValue);return o===l?ka(o)===ka(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ms(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ap(o)!==ap(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!An(o[c],l[c])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function zi(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Xe(i.integerValue||i.doubleValue),c=Xe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return cp(t.timestampValue,e.timestampValue);case 4:return cp(Wi(t),Wi(e));case 5:return Uc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ar(i),c=Ar(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ve(l[u],c[u]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ve(Xe(i.latitude),Xe(o.latitude));return l!==0?l:ve(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return up(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},_=(l=p[Oa])===null||l===void 0?void 0:l.arrayValue,A=(c=g[Oa])===null||c===void 0?void 0:c.arrayValue,C=ve(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:up(_,A)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===qo.mapValue&&o===qo.mapValue)return 0;if(i===qo.mapValue)return 1;if(o===qo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Uc(c[p],d[p]);if(g!==0)return g;const _=Ls(l[c[p]],u[d[p]]);if(_!==0)return _}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de(23264,{Pe:n})}}function cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Er(t),r=Er(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function up(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ls(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Us(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"}(t.mapValue):de(61005,{value:t})}function ia(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ll(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return Ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ia(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,o)=>{s+=i.length+ia(o)}),s}(t.mapValue);default:throw de(13486,{value:t})}}function hp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bc(t){return!!t&&"integerValue"in t}function Hu(t){return!!t&&"arrayValue"in t}function dp(t){return!!t&&"nullValue"in t}function fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function x0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[V_])===null||n===void 0?void 0:n.stringValue)===x_}function Pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Pi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function M0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===V0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pi(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Pi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Pi(this.value))}}function M_(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new ut([n]);if(oa(r)){const i=M_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,pe.min(),pe.min(),pe.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,pe.min(),pe.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,pe.min(),pe.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,n){this.position=e,this.inclusive=n}}function pp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n="asc"){this.field=e,this.dir=n}}function L0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class Ze extends L_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F0(e,n,r):n==="array-contains"?new q0(e,r):n==="in"?new H0(e,r):n==="not-in"?new $0(e,r):n==="array-contains-any"?new K0(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B0(e,r):new j0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ls(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends L_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new sn(e,n)}matches(e){return U_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function U_(t){return t.op==="and"}function F_(t){return U0(t)&&U_(t)}function U0(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function jc(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Us(t.value);if(F_(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function B_(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&An(r.value,s.value)}(t,e):t instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&B_(o,s.filters[l]),!0):!1}(t,e):void de(19439)}function j_(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Us(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(j_).join(" ,")+"}"}(t):"Filter"}class F0 extends Ze{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class B0 extends Ze{constructor(e,n){super(e,"in",n),this.keys=q_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j0 extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=q_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function q_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class q0 extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hu(n)&&zi(n.arrayValue,this.value)}}class H0 extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class $0 extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zi(this.value.arrayValue,n)}}class K0 extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function mp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new W0(t,e,n,r,s,i,o)}function $u(t){const e=ge(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),al(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Us(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Us(r)).join(",")),e.Ie=n}return e.Ie}function Ku(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!L0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!B_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gp(t.startAt,e.startAt)&&gp(t.endAt,e.endAt)}function qc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function G0(t,e,n,r,s,i,o,l){return new Gs(t,e,n,r,s,i,o,l)}function H_(t){return new Gs(t)}function _p(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $_(t){return t.collectionGroup!==null}function ki(t){const e=ge(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ut.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Qi(i,r))}),n.has(ut.keyField().canonicalString())||e.Ee.push(new Qi(ut.keyField(),r))}return e.Ee}function _n(t){const e=ge(t);return e.de||(e.de=z0(e,ki(t))),e.de}function z0(t,e){if(t.limitType==="F")return mp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qi(s.field,i)});const n=t.endAt?new Da(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Da(t.startAt.position,t.startAt.inclusive):null;return mp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hc(t,e){const n=t.filters.concat([e]);return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Va(t,e,n){return new Gs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cl(t,e){return Ku(_n(t),_n(e))&&t.limitType===e.limitType}function K_(t){return`${$u(_n(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>j_(s)).join(", ")}]`),al(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Us(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Us(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function ul(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ki(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=pp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,ki(r),s)||r.endAt&&!function(o,l,c){const u=pp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,ki(r),s))}(t,e)}function Q0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function W_(t){return(e,n)=>{let r=!1;for(const s of ki(t)){const i=Y0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Y0(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ls(c,u):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return S_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new Ke(le.comparator);function qn(){return X0}const G_=new Ke(le.comparator);function _i(...t){let e=G_;for(const n of t)e=e.insert(n.key,n);return e}function z_(t){let e=G_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return Ni()}function Q_(){return Ni()}function Ni(){return new ns(t=>t.toString(),(t,e)=>t.isEqual(e))}const J0=new Ke(le.comparator),Z0=new nt(le.comparator);function Te(...t){let e=Z0;for(const n of t)e=e.add(n);return e}const eC=new nt(ve);function tC(){return eC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ka(e)?"-0":e}}function Y_(t){return{integerValue:""+t}}function nC(t,e){return P0(e)?Y_(e):Wu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this._=void 0}}function rC(t,e,n){return t instanceof Yi?function(s,i){const o={fields:{[N_]:{stringValue:k_},[D_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&qu(i)&&(i=ll(i)),i&&(o.fields[O_]=i),{mapValue:o}}(n,e):t instanceof Xi?J_(t,e):t instanceof Ji?Z_(t,e):function(s,i){const o=X_(s,i),l=yp(o)+yp(s.Re);return Bc(o)&&Bc(s.Re)?Y_(l):Wu(s.serializer,l)}(t,e)}function sC(t,e,n){return t instanceof Xi?J_(t,e):t instanceof Ji?Z_(t,e):n}function X_(t,e){return t instanceof xa?function(r){return Bc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Yi extends hl{}class Xi extends hl{constructor(e){super(),this.elements=e}}function J_(t,e){const n=ey(e);for(const r of t.elements)n.some(s=>An(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ji extends hl{constructor(e){super(),this.elements=e}}function Z_(t,e){let n=ey(e);for(const r of t.elements)n=n.filter(s=>!An(s,r));return{arrayValue:{values:n}}}class xa extends hl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function yp(t){return Xe(t.integerValue||t.doubleValue)}function ey(t){return Hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.field=e,this.transform=n}}function oC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xi&&s instanceof Xi||r instanceof Ji&&s instanceof Ji?Ms(r.elements,s.elements,An):r instanceof xa&&s instanceof xa?An(r.Re,s.Re):r instanceof Yi&&s instanceof Yi}(t.transform,e.transform)}class aC{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dl{}function ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gu(t.key,nn.none()):new lo(t.key,t.data,nn.none());{const n=t.data,r=Dt.empty();let s=new nt(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Bt(s.toArray()),nn.none())}}function lC(t,e,n){t instanceof lo?function(s,i,o){const l=s.value.clone(),c=Ep(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Ep(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ny(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Oi(t,e,n,r){return t instanceof lo?function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=i.value.clone(),d=Ap(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,c){if(!aa(i.precondition,o))return l;const u=Ap(i.fieldTransforms,c,o),d=o.data;return d.setAll(ny(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function cC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=X_(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function vp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ms(r,s,(i,o)=>oC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lo extends dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ny(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ep(t,e,n){const r=new Map;De(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,sC(o,l,n[s]))}return r}function Ap(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rC(i,o,e))}return r}class Gu extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uC extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Oi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Q_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=ty(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ms(this.mutations,e.mutations,(n,r)=>vp(n,r))&&Ms(this.baseMutations,e.baseMutations,(n,r)=>vp(n,r))}}class zu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return J0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Re;function pC(t){switch(t){case j.OK:return de(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function ry(t){if(t===void 0)return jn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Je.OK:return j.OK;case Je.CANCELLED:return j.CANCELLED;case Je.UNKNOWN:return j.UNKNOWN;case Je.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Je.INTERNAL:return j.INTERNAL;case Je.UNAVAILABLE:return j.UNAVAILABLE;case Je.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Je.NOT_FOUND:return j.NOT_FOUND;case Je.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Je.ABORTED:return j.ABORTED;case Je.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Je.DATA_LOSS:return j.DATA_LOSS;default:return de(39323,{code:t})}}(Re=Je||(Je={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=new dr([4294967295,4294967295],0);function wp(t){const e=R_().encode(t),n=new __;return n.update(e),new Uint8Array(n.digest())}function Tp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class Qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new yi(`Invalid padding: ${n}`);if(r<0)throw new yi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new yi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new yi(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=dr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(gC)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=wp(e),[r,s]=Tp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=wp(e),[r,s]=Tp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class yi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fl(pe.min(),s,new Ke(ve),qn(),Te())}}class co{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class sy{constructor(e,n){this.targetId=e,this.Ce=n}}class iy{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ip{constructor(){this.Fe=0,this.Me=Rp(),this.xe=ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),r=Te();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de(38017,{changeType:i})}}),new co(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Rp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,De(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class mC{constructor(e){this.ze=e,this.je=new Map,this.He=qn(),this.Je=Ho(),this.Ye=Ho(),this.Ze=new Ke(ve)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:de(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(qc(i))if(r===0){const o=new le(i.path);this.tt(n,o,vt.newNoDocument(o,pe.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ar(r).toUint8Array()}catch(c){if(c instanceof P_)return xs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Qu(o,s,i)}catch(c){return xs(c instanceof yi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&qc(l.target)){const c=new le(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,vt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Te();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new fl(e,n,this.Ze,this.He,r);return this.He=qn(),this.Je=Ho(),this.Ye=Ho(),this.Ze=new Ke(ve),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Ip,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new nt(ve),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new nt(ve),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ip),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Ho(){return new Ke(le.comparator)}function Rp(){return new Ke(le.comparator)}const _C={asc:"ASCENDING",desc:"DESCENDING"},yC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vC={and:"AND",or:"OR"};class EC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $c(t,e){return t.useProto3Json||al(e)?e:{value:e}}function Ma(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AC(t,e){return Ma(t,e.toTimestamp())}function yn(t){return De(!!t,49232),pe.fromTimestamp(function(n){const r=Er(n);return new tt(r.seconds,r.nanos)}(t))}function Yu(t,e){return Kc(t,e).canonicalString()}function Kc(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ay(t){const e=Fe.fromString(t);return De(dy(e),10190,{key:e.toString()}),e}function Wc(t,e){return Yu(t.databaseId,e.path)}function oc(t,e){const n=ay(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(cy(n))}function ly(t,e){return Yu(t.databaseId,e)}function wC(t){const e=ay(t);return e.length===4?Fe.emptyPath():cy(e)}function Gc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cy(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function bp(t,e,n){return{name:Wc(t,e),fields:n.value.mapValue.fields}}function TC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(De(d===void 0||typeof d=="string",58123),ht.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?j.UNKNOWN:ry(u.code);return new ne(d,u.message||"")}(o);n=new iy(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):pe.min(),l=new Dt({mapValue:{fields:r.document.fields}}),c=vt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new la(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oc(t,r.document),i=r.readTime?yn(r.readTime):pe.min(),o=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new la([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oc(t,r.document),i=r.removedTargetIds||[];n=new la([],i,s,null)}else{if(!("filter"in e))return de(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new fC(s,i),l=r.targetId;n=new sy(l,o)}}return n}function IC(t,e){let n;if(e instanceof lo)n={update:bp(t,e.key,e.value)};else if(e instanceof Gu)n={delete:Wc(t,e.key)};else if(e instanceof Sr)n={update:bp(t,e.key,e.data),updateMask:DC(e.fieldMask)};else{if(!(e instanceof uC))return de(16599,{ft:e.type});n={verify:Wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Yi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ji)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xa)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw de(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)}(t,e.precondition)),n}function RC(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(pe.min())&&(o=yn(i)),new aC(o,s.transformResults||[])}(n,e))):[]}function bC(t,e){return{documents:[ly(t,e.path)]}}function CC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ly(t,s);const i=function(u){if(u.length!==0)return hy(sn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:ys(g.field),direction:kC(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$c(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function SC(t){let e=wC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=uy(p);return g instanceof sn&&F_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new Qi(vs(A.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,al(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Da(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Da(_,g)}(n.endAt)),G0(e,s,o,i,l,"F",c,u)}function PC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function uy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>uy(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function kC(t){return _C[t]}function NC(t){return yC[t]}function OC(t){return vC[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return ut.fromServerFormat(t.fieldPath)}function hy(t){return t instanceof Ze?function(n){if(n.op==="=="){if(fp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(dp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(dp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:NC(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(s=>hy(s));return r.length===1?r[0]:{compositeFilter:{op:OC(n.op),filters:r}}}(t):de(54877,{filter:t})}function DC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.wt=e}}function xC(t){const e=SC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Va(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.Cn=new LC}addToCollectionParentIndex(e,n){return this.Cn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(vr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class LC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fy=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(fy,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Fs(0)}static lr(){return new Fs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="LruGarbageCollector",UC=1048576;function Pp([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class FC{constructor(e){this.Er=e,this.buffer=new nt(Pp),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Pp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class BC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){te(Sp,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ws(n)?te(Sp,"Ignoring IndexedDB error during garbage collection: ",n):await Ks(n)}await this.mr(3e5)})}}class jC{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return q.resolve(ol.le);const r=new FC(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Cp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cp):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ms()<=we.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function qC(t,e){return new jC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(){this.changes=new ns(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Oi(r.mutation,s,Bt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=_i();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=qn();const o=Ni(),l=function(){return Ni()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Oi(d.mutation,u,d.mutation.getFieldMask(),tt.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new $C(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ni();let s=new Ke((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Bt.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=Q_();d.forEach(g=>{if(!i.has(g)){const _=ty(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Fr());let l=Ki,c=i;return o.next(u=>q.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:l,changes:z_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=_i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=_i();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(p,g){return new Gs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,vt.newInvalidDocument(d)))});let l=_i();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Oi(d.mutation,u,Bt.empty(),tt.now()),ul(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return q.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:xC(s.bundledQuery),readTime:yn(s.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.overlays=new Ke(le.comparator),this.Qr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Fr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return q.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dC(n,r));let i=this.Qr.get(n);i===void 0&&(i=Te(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.$r=new nt(st.Ur),this.Kr=new nt(st.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new st(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new st(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new le(new Fe([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new le(new Fe([])),r=new st(n,e),s=new st(n,e+1);let i=Te();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return le.comparator(e.key,n.key)||ve(e.Zr,n.Zr)}static Wr(e,n){return ve(e.Zr,n.Zr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new nt(st.Ur)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new st(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?ju:this.nr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ve);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),q.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new st(new le(i),0);let l=new nt(ve);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),q.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return q.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new st(n,0),s=this.Xr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e){this.ii=e,this.docs=function(){return new Ke(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,l=new le(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||R0(I0(d),r)<=0||(s.has(d.key)||ul(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de(9500)}si(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new XC(this)}getSize(e){return q.resolve(this.size)}}class XC extends HC{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.persistence=e,this.oi=new ns(n=>$u(n),Ku),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this._i=0,this.ai=new Xu,this.targetCount=0,this.ui=Fs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),q.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Fs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Tr(n),q.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.ci={},this.overlays={},this.li=new ol(0),this.hi=!1,this.hi=!0,this.Pi=new zC,this.referenceDelegate=e(this),this.Ti=new JC(this),this.indexManager=new MC,this.remoteDocumentCache=function(s){return new YC(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new VC(n),this.Ei=new WC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new QC(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new ZC(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return q.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class ZC extends C0{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Vi=new Xu,this.mi=null}static fi(e){return new Ju(e)}get gi(){if(this.mi)return this.mi;throw de(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.gi,r=>{const s=le.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return q.or([()=>q.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class La{constructor(e,n){this.persistence=e,this.yi=new ns(r=>k0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=qC(this,n)}static fi(e,n){return new La(e,n)}di(){}Ai(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return q.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?q.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),q.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}Dr(e,n,r){return q.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return kT()?8:S0(Tt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eS;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(ms()<=we.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),q.resolve()):(ms()<=we.DEBUG&&te("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ms()<=we.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):q.resolve())}ws(e,n){if(_p(n))return q.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Va(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,Va(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,r,s){return _p(n)||s.isEqual(pe.min())?q.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?q.resolve(null):(ms()<=we.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.Fs(e,o,n,T0(s,Ki)).next(l=>l))})}vs(e,n){let r=new nt(W_(e));return n.forEach((s,i)=>{ul(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ms()<=we.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",_s(n)),this.ys.getDocumentsMatchingQuery(e,n,vr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="LocalStore",nS=3e8;class rS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ke(ve),this.Os=new ns(i=>$u(i),Ku),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KC(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function sS(t,e,n,r){return new rS(t,e,n,r)}async function gy(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function iS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let _=q.resolve();return g.forEach(A=>{_=_.next(()=>d.getEntry(c,A)).next(C=>{const P=u.docVersions.get(A);De(P!==null,48541),C.version.compareTo(P)<0&&(p.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),d.addEntry(C)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function my(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function oS(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ht.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(C,P,x){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=nS?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,_,d)&&l.push(n.Ti.updateTargetData(i,_))});let c=qn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(aS(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(pe.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function aS(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(eh,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function lS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ju),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cS(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function zc(t,e,n){const r=ge(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ws(o))throw o;te(eh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function kp(t,e,n){const r=ge(t);let s=pe.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ge(c),g=p.Os.get(d);return g!==void 0?q.resolve(p.xs.get(g)):p.Ti.getTargetData(u,d)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Te())).next(l=>(uS(r,Q0(e),l),{documents:l,$s:i})))}function uS(t,e,n){let r=t.Ns.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Np{constructor(){this.activeTargetIds=tC()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hS{constructor(){this.xo=new Np,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="ConnectivityMonitor";class Dp{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){te(Op,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){te(Op,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o=null;function Qc(){return $o===null?$o=function(){return 268435456+Math.round(2147483648*Math.random())}():$o++,"0x"+$o.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="RestConnection",fS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Na?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Qc(),l=this.jo(e,n.toUriEncodedString());te(ac,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=br(u);return this.Jo(e,l,c,r,d).then(p=>(te(ac,`Received RPC '${e}' ${o}: `,p),p),p=>{throw xs(ac,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=fS[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class mS extends pS{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Qc();return new Promise((l,c)=>{const u=new y_;u.setWithCredentials(!0),u.listenOnce(v_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();te(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case sa.TIMEOUT:te(mt,`RPC '${e}' ${o} timed out`),c(new ne(j.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const g=u.getStatus();if(te(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const C=function(x){const M=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(M)>=0?M:j.UNKNOWN}(A.status);c(new ne(C,A.message))}else c(new ne(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(j.UNAVAILABLE,"Connection failed."));break;default:de(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{te(mt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);te(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}I_(e,n,r){const s=Qc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=w_(),l=A_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(mt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.E_(p);let g=!1,_=!1;const A=new gS({Zo:P=>{_?te(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(te(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(mt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Xo:()=>p.close()}),C=(P,x,M)=>{P.listen(x,L=>{try{M(L)}catch(D){setTimeout(()=>{throw D},0)}})};return C(p,mi.EventType.OPEN,()=>{_||(te(mt,`RPC '${e}' stream ${s} transport opened.`),A.__())}),C(p,mi.EventType.CLOSE,()=>{_||(_=!0,te(mt,`RPC '${e}' stream ${s} transport closed`),A.u_(),this.d_(p))}),C(p,mi.EventType.ERROR,P=>{_||(_=!0,xs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),A.u_(new ne(j.UNAVAILABLE,"The operation could not be completed")))}),C(p,mi.EventType.MESSAGE,P=>{var x;if(!_){const M=P.data[0];De(!!M,16349);const L=M,D=(L==null?void 0:L.error)||((x=L[0])===null||x===void 0?void 0:x.error);if(D){te(mt,`RPC '${e}' stream ${s} received error:`,D);const J=D.status;let K=function(I){const S=Je[I];if(S!==void 0)return ry(S)}(J),R=D.message;K===void 0&&(K=j.INTERNAL,R="Unknown error status: "+J+" with message "+D.message),_=!0,A.u_(new ne(K,R)),p.close()}else te(mt,`RPC '${e}' stream ${s} received:`,M),A.c_(M)}}),C(l,E_.STAT_EVENT,P=>{P.stat===Lc.PROXY?te(mt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Lc.NOPROXY&&te(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.a_()},0),A}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){return new EC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="PersistentStream";class yy{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new _y(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new ne(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return te(Vp,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(te(Vp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _S extends yy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=TC(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?yn(o.readTime):pe.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=qc(c)?{documents:bC(i,c)}:{query:CC(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=oy(i,o.resumeToken);const u=$c(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=Ma(i,o.snapshotVersion.toTimestamp());const u=$c(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=PC(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.Q_(n)}}class yS extends yy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=RC(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Gc(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IC(this.serializer,r))};this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{}class ES extends vS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,Kc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(j.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Kc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(j.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class AS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(jn(n),this.ua=!1):te("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="RemoteStore";class wS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{rs(this)&&(te(Xr,"Restarting streams for network reachability change."),await async function(c){const u=ge(c);u.da.add(4),await uo(u),u.Va.set("Unknown"),u.da.delete(4),await gl(u)}(this))})}),this.Va=new AS(r,s)}}async function gl(t){if(rs(t))for(const e of t.Aa)await e(!0)}async function uo(t){for(const e of t.Aa)await e(!1)}function vy(t,e){const n=ge(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),sh(n)?rh(n):zs(n).N_()&&nh(n,e))}function th(t,e){const n=ge(t),r=zs(n);n.Ea.delete(e),r.N_()&&Ey(n,e),n.Ea.size===0&&(r.N_()?r.k_():rs(n)&&n.Va.set("Unknown"))}function nh(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zs(t).Z_(e)}function Ey(t,e){t.ma.Ke(e),zs(t).X_(e)}function rh(t){t.ma=new mC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),zs(t).start(),t.Va.ca()}function sh(t){return rs(t)&&!zs(t).O_()&&t.Ea.size>0}function rs(t){return ge(t).da.size===0}function Ay(t){t.ma=void 0}async function TS(t){t.Va.set("Online")}async function IS(t){t.Ea.forEach((e,n)=>{nh(t,e)})}async function RS(t,e){Ay(t),sh(t)?(t.Va.Pa(e),rh(t)):t.Va.set("Unknown")}async function bS(t,e,n){if(t.Va.set("Online"),e instanceof iy&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){te(Xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ua(t,r)}else if(e instanceof la?t.ma.Xe(e):e instanceof sy?t.ma.ot(e):t.ma.nt(e),!n.isEqual(pe.min()))try{const r=await my(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(u);d&&i.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),Ey(i,c);const p=new lr(d.target,c,u,d.sequenceNumber);nh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te(Xr,"Failed to raise snapshot:",r),await Ua(t,r)}}async function Ua(t,e,n){if(!Ws(e))throw e;t.da.add(1),await uo(t),t.Va.set("Offline"),n||(n=()=>my(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Xr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await gl(t)})}function wy(t,e){return e().catch(n=>Ua(t,n,e))}async function ml(t){const e=ge(t),n=Tr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:ju;for(;CS(e);)try{const s=await lS(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,SS(e,s)}catch(s){await Ua(e,s)}Ty(e)&&Iy(e)}function CS(t){return rs(t)&&t.Ia.length<10}function SS(t,e){t.Ia.push(e);const n=Tr(t);n.N_()&&n.ea&&n.ta(e.mutations)}function Ty(t){return rs(t)&&!Tr(t).O_()&&t.Ia.length>0}function Iy(t){Tr(t).start()}async function PS(t){Tr(t).ia()}async function kS(t){const e=Tr(t);for(const n of t.Ia)e.ta(n.mutations)}async function NS(t,e,n){const r=t.Ia.shift(),s=zu.from(r,e,n);await wy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ml(t)}async function OS(t,e){e&&Tr(t).ea&&await async function(r,s){if(function(o){return pC(o)&&o!==j.ABORTED}(s.code)){const i=r.Ia.shift();Tr(r).L_(),await wy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ml(r)}}(t,e),Ty(t)&&Iy(t)}async function xp(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),te(Xr,"RemoteStore received new credentials");const r=rs(n);n.da.add(3),await uo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await gl(n)}async function DS(t,e){const n=ge(t);e?(n.da.delete(2),await gl(n)):e||(n.da.add(2),await uo(n),n.Va.set("Unknown"))}function zs(t){return t.fa||(t.fa=function(n,r,s){const i=ge(n);return i.oa(),new _S(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:TS.bind(null,t),n_:IS.bind(null,t),i_:RS.bind(null,t),Y_:bS.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),sh(t)?rh(t):t.Va.set("Unknown")):(await t.fa.stop(),Ay(t))})),t.fa}function Tr(t){return t.ga||(t.ga=function(n,r,s){const i=ge(n);return i.oa(),new yS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:PS.bind(null,t),i_:OS.bind(null,t),na:kS.bind(null,t),ra:NS.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await ml(t)):(await t.ga.stop(),t.Ia.length>0&&(te(Xr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new ih(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(t,e){if(jn("AsyncQueue",`${e}: ${t}`),Ws(t))return new ne(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{static emptySet(e){return new Ss(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=_i(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.pa=new Ke(le.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):de(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Bs(e,n,Ss.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class xS{constructor(){this.queries=Lp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=Lp(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new ne(j.ABORTED,"Firestore shutting down"))}}function Lp(){return new ns(t=>K_(t),cl)}async function MS(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new VS,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=oh(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&ah(n)}async function LS(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function US(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&ah(n)}function FS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function ah(t){t.Ca.forEach(e=>{e.next()})}var Yc,Up;(Up=Yc||(Yc={})).xa="default",Up.Cache="cache";class BS{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Yc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.key=e}}class by{constructor(e){this.key=e}}class jS{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Te(),this.mutatedKeys=Te(),this.Za=W_(e),this.Xa=new Ss(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new Mp,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=ul(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),C=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?A!==C&&(r.track({type:3,doc:_}),P=!0):this.ru(g,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Za(_,c)>0||u&&this.Za(_,u)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(_?(o=o.add(_),i=C?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((d,p)=>function(_,A){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de(20277,{Vt:P})}};return C(_)-C(A)}(d.type,p.type)||this.Za(d.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new Bs(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Mp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Te(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new by(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Ry(r))}),n}au(e){this.Ha=e.$s,this.Ya=Te();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Bs.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const lh="SyncEngine";class qS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class HS{constructor(e){this.key=e,this.cu=!1}}class $S{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new ns(l=>K_(l),cl),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ke(le.comparator),this.Eu=new Map,this.du=new Xu,this.Au={},this.Ru=new Map,this.Vu=Fs.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function KS(t,e,n=!0){const r=Oy(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Cy(r,e,n,!0),s}async function WS(t,e){const n=Oy(t);await Cy(n,e,!0,!1)}async function Cy(t,e,n,r){const s=await cS(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await GS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&vy(t.remoteStore,s),l}async function GS(t,e,n,r,s){t.fu=(p,g,_)=>async function(C,P,x,M){let L=P.view.tu(x);L.Cs&&(L=await kp(C.localStore,P.query,!1).then(({documents:R})=>P.view.tu(R,L)));const D=M&&M.targetChanges.get(P.targetId),J=M&&M.targetMismatches.get(P.targetId)!=null,K=P.view.applyChanges(L,C.isPrimaryClient,D,J);return Bp(C,P.targetId,K.ou),K.snapshot}(t,p,g,_);const i=await kp(t.localStore,e,!0),o=new jS(e,i.$s),l=o.tu(i.documents),c=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Bp(t,n,u.ou);const d=new qS(e,n,o);return t.hu.set(e,d),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function zS(t,e,n){const r=ge(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!cl(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&th(r.remoteStore,s.targetId),Xc(r,s.targetId)}).catch(Ks)):(Xc(r,s.targetId),await zc(r.localStore,s.targetId,!0))}async function QS(t,e){const n=ge(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),th(n.remoteStore,r.targetId))}async function YS(t,e,n){const r=rP(t);try{const s=await function(o,l){const c=ge(o),u=tt.now(),d=l.reduce((_,A)=>_.add(A.key),Te());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=qn(),C=Te();return c.Bs.getEntries(_,d).next(P=>{A=P,A.forEach((x,M)=>{M.isValidDocument()||(C=C.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,A)).next(P=>{p=P;const x=[];for(const M of l){const L=cC(M,p.get(M.key).overlayedDocument);L!=null&&x.push(new Sr(M.key,L,M_(L.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,l)}).next(P=>{g=P;const x=P.applyToLocalDocumentSet(p,C);return c.documentOverlayCache.saveOverlays(_,P.batchId,x)})}).then(()=>({batchId:g.batchId,changes:z_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Au[o.currentUser.toKey()];u||(u=new Ke(ve)),u=u.insert(l,c),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await ho(r,s.changes),await ml(r.remoteStore)}catch(s){const i=oh(s,"Failed to persist write");n.reject(i)}}async function Sy(t,e){const n=ge(t);try{const r=await oS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?De(o.cu,14607):s.removedDocuments.size>0&&(De(o.cu,42227),o.cu=!1))}),await ho(n,r,e)}catch(r){await Ks(r)}}function Fp(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.Fa(l)&&(u=!0)}),u&&ah(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XS(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Ke(le.comparator);o=o.insert(i,vt.newNoDocument(i,pe.min()));const l=Te().add(i),c=new fl(pe.min(),new Map,new Ke(ve),o,l);await Sy(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),ch(r)}else await zc(r.localStore,e,!1).then(()=>Xc(r,e,n)).catch(Ks)}async function JS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await iS(n.localStore,e);ky(n,r,null),Py(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ho(n,s)}catch(s){await Ks(s)}}async function ZS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(De(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);ky(r,e,n),Py(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ho(r,s)}catch(s){await Ks(s)}}function Py(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function ky(t,e,n){const r=ge(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Ny(t,r)})}function Ny(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(th(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),ch(t))}function Bp(t,e,n){for(const r of n)r instanceof Ry?(t.du.addReference(r.key,e),eP(t,r)):r instanceof by?(te(lh,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Ny(t,r.key)):de(19791,{pu:r})}function eP(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(te(lh,"New document in limbo: "+n),t.Tu.add(r),ch(t))}function ch(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new le(Fe.fromString(e)),r=t.Vu.next();t.Eu.set(r,new HS(n)),t.Iu=t.Iu.insert(n,r),vy(t.remoteStore,new lr(_n(H_(n.path)),r,"TargetPurposeLimboResolution",ol.le))}}async function ho(t,e,n){const r=ge(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Zu.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,u){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,g=>q.forEach(g.ds,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>q.forEach(g.As,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Ws(p))throw p;te(eh,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=d.xs.get(g),A=_.snapshotVersion,C=_.withLastLimboFreeSnapshotVersion(A);d.xs=d.xs.insert(g,C)}}}(r.localStore,i))}async function tP(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){te(lh,"User change. New user:",e.toKey());const r=await gy(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new ne(j.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ho(n,r.ks)}}function nP(t,e){const n=ge(t),r=n.Eu.get(e);if(r&&r.cu)return Te().add(r.key);{let s=Te();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function Oy(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XS.bind(null,e),e.lu.Y_=US.bind(null,e.eventManager),e.lu.gu=FS.bind(null,e.eventManager),e}function rP(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZS.bind(null,e),e}class Fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return sS(this.persistence,new tS,e.initialUser,this.serializer)}Su(e){return new py(Ju.fi,this.serializer)}bu(e){return new hS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fa.provider={build:()=>new Fa};class sP extends Fa{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){De(this.persistence.referenceDelegate instanceof La,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new BC(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new py(r=>La.fi(r,n),this.serializer)}}class Jc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tP.bind(null,this.syncEngine),await DS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xS}()}createDatastore(e){const n=pl(e.databaseInfo.databaseId),r=function(i){return new mS(i)}(e.databaseInfo);return function(i,o,l,c){return new ES(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new wS(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fp(this.syncEngine,n,0),function(){return Dp.C()?new Dp:new dS}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new $S(s,i,o,l,c,u);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);te(Xr,"RemoteStore shutting down."),i.da.add(5),await uo(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jc.provider={build:()=>new Jc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirestoreClient";class oP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=b_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cc(t,e){t.asyncQueue.verifyOperationInProgress(),te(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aP(t);te(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xp(e.remoteStore,s)),t._onlineComponents=e}async function aP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Ir,"Using user provided OfflineComponentProvider");try{await cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;xs("Error using user provided cache. Falling back to memory cache: "+n),await cc(t,new Fa)}}else te(Ir,"Using default OfflineComponentProvider"),await cc(t,new sP(void 0));return t._offlineComponents}async function Dy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Ir,"Using user provided OnlineComponentProvider"),await jp(t,t._uninitializedComponentsProvider._online)):(te(Ir,"Using default OnlineComponentProvider"),await jp(t,new Jc))),t._onlineComponents}function lP(t){return Dy(t).then(e=>e.syncEngine)}async function cP(t){const e=await Dy(t),n=e.eventManager;return n.onListen=KS.bind(null,e.syncEngine),n.onUnlisten=zS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QS.bind(null,e.syncEngine),n}function uP(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new iP({next:g=>{d.xu(),o.enqueueAndForget(()=>LS(i,p)),g.fromCache&&c.source==="server"?u.reject(new ne(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new BS(l,d,{includeMetadataChanges:!0,Qa:!0});return MS(i,p)}(await cP(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t,e,n){if(!n)throw new ne(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hP(t,e,n,r){if(e===!0&&r===!0)throw new ne(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hp(t){if(!le.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $p(t){if(le.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _l(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_l(t);throw new ne(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function dP(t,e){if(e<=0)throw new ne(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firestore.googleapis.com",Kp=!0;class Wp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=My,this.ssl=Kp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Kp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<UC)throw new ne(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}hP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new p0;switch(r.type){case"firstParty":return new y0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qp.get(n);r&&(te("ComponentProvider","Removing Datastore"),qp.delete(n),r.terminate())}(this),Promise.resolve()}}function fP(t,e,n,r={}){var s;t=Jr(t,yl);const i=br(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Iu(`https://${c}`),Ru("Firestore",!0)),o.host!==My&&o.host!==c&&xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Wr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=_t.MOCK_USER;else{d=Nm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ne(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new _t(g)}t._authCredentials=new g0(new I_(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class qt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class pr extends Pr{constructor(e,n,r){super(e,n,H_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new le(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function Gp(t,e,...n){if(t=$e(t),xy("collection","path",e),t instanceof yl){const r=Fe.fromString(e,...n);return $p(r),new pr(t,null,r)}{if(!(t instanceof qt||t instanceof pr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return $p(r),new pr(t.firestore,null,r)}}function Zc(t,e,...n){if(t=$e(t),arguments.length===1&&(e=b_.newId()),xy("doc","path",e),t instanceof yl){const r=Fe.fromString(e,...n);return Hp(r),new qt(t,null,new le(r))}{if(!(t instanceof qt||t instanceof pr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return Hp(r),new qt(t.firestore,t instanceof pr?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="AsyncQueue";class Qp{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new _y(this,"async_queue_retry"),this.rc=()=>{const r=lc();r&&te(zp,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=lc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new fr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ws(e))throw e;te(zp,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,jn("INTERNAL UNHANDLED ERROR: ",Yp(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=ih.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&de(47125,{cc:Yp(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function Yp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fo extends yl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qp(e),this._firestoreClient=void 0,await e}}}function pP(t,e){const n=typeof t=="object"?t:Su(),r=typeof t=="string"?t:Na,s=nl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sm("firestore");i&&fP(s,...i)}return s}function Ly(t){if(t._terminated)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gP(t),t._firestoreClient}function gP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new D0(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Vy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new oP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(ht.fromBase64String(e))}catch(n){throw new ne(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^__.*__$/;class _P{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new lo(e,this.data,n,this.fieldTransforms)}}class Uy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{Ic:t})}}class dh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ba(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Fy(this.Ic)&&mP.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class yP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pl(e)}bc(e,n,r,s=!1){return new dh({Ic:e,methodName:n,wc:r,path:ut.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fh(t){const e=t._freezeSettings(),n=pl(t._databaseId);return new yP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vP(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);gh("Data must be an object, but it was:",o,r);const l=By(r,o);let c,u;if(i.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=eu(e,p,n);if(!o.contains(g))throw new ne(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);qy(d,g)||d.push(g)}c=new Bt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new _P(new Dt(l),c,u)}class Al extends El{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Al}}class ph extends El{_toFieldTransform(e){return new iC(e.path,new Yi)}isEqual(e){return e instanceof ph}}function EP(t,e,n,r){const s=t.bc(1,e,n);gh("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Cr(r,(c,u)=>{const d=mh(e,c,n);u=$e(u);const p=s.mc(d);if(u instanceof Al)i.push(d);else{const g=po(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Bt(i);return new Uy(o,l,s.fieldTransforms)}function AP(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[eu(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(eu(e,i[g])),c.push(i[g+1]);const u=[],d=Dt.empty();for(let g=l.length-1;g>=0;--g)if(!qy(u,l[g])){const _=l[g];let A=c[g];A=$e(A);const C=o.mc(_);if(A instanceof Al)u.push(_);else{const P=po(A,C);P!=null&&(u.push(_),d.set(_,P))}}const p=new Bt(u);return new Uy(d,p,o.fieldTransforms)}function wP(t,e,n,r=!1){return po(n,t.bc(r?4:3,e))}function po(t,e){if(jy(t=$e(t)))return gh("Unsupported field value:",e,t),By(t,e);if(t instanceof El)return function(r,s){if(!Fy(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=po(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Ma(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ma(s.serializer,i)}}if(r instanceof uh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:oy(s.serializer,r._byteString)};if(r instanceof qt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hh)return function(o,l){return{mapValue:{fields:{[V_]:{stringValue:x_},[Oa]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.gc("VectorValues must only contain numeric values.");return Wu(l.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${_l(r)}`)}(t,e)}function By(t,e){const n={};return S_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=po(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function jy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof uh||t instanceof js||t instanceof qt||t instanceof El||t instanceof hh)}function gh(t,e,n){if(!jy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_l(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function eu(t,e,n){if((e=$e(e))instanceof vl)return e._internalPath;if(typeof e=="string")return mh(t,e);throw Ba("Field path arguments must be of type string or ",t,!1,void 0,n)}const TP=new RegExp("[~\\*/\\[\\]]");function mh(t,e,n){if(e.search(TP)>=0)throw Ba(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vl(...e.split("."))._internalPath}catch{throw Ba(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ba(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(j.INVALID_ARGUMENT,l+t+c)}function qy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IP extends Hy{data(){return super.data()}}function _h(t,e){return typeof e=="string"?mh(t,e):e instanceof vl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yh{}class vh extends yh{}function bP(t,e,...n){let r=[];e instanceof yh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ah).length,l=i.filter(c=>c instanceof Eh).length;if(o>1||o>0&&l>0)throw new ne(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Eh extends vh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Eh(e,n,r)}_apply(e){const n=this._parse(e);return $y(e._query,n),new Pr(e.firestore,e.converter,Hc(e._query,n))}_parse(e){const n=fh(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Jp(p,d);const A=[];for(const C of p)A.push(Xp(c,i,C));g={arrayValue:{values:A}}}else g=Xp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Jp(p,d),g=wP(l,o,p,d==="in"||d==="not-in");return Ze.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ah extends yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ah(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)$y(o,c),o=Hc(o,c)}(e._query,n),new Pr(e.firestore,e.converter,Hc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wh extends vh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Qi(i,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Gs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function CP(t,e="asc"){const n=e,r=_h("orderBy",t);return wh._create(r,n)}class Th extends vh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Th(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,Va(e._query,this._limit,this._limitType))}}function SP(t){return dP("limit",t),Th._create("limit",t,"F")}function Xp(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new ne(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$_(e)&&n.indexOf("/")!==-1)throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!le.isDocumentKey(r))throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hp(t,new le(r))}if(n instanceof qt)return hp(t,n._key);throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_l(n)}.`)}function Jp(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $y(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class PP{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Oa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new hh(i)}convertGeoPoint(e){return new uh(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ll(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wi(e));default:return null}}convertTimestamp(e){const n=Er(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);De(dy(r),9688,{name:e});const s=new Gi(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NP extends Hy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ca extends NP{data(e={}){return super.data(e)}}class OP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ko(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ca(this._firestore,this._userDataWriter,r.key,r,new Ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ko(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ca(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ko(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:DP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de(61501,{type:t})}}class VP extends PP{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,n)}}function xP(t){t=Jr(t,Pr);const e=Jr(t.firestore,fo),n=Ly(e),r=new VP(e);return RP(t._query),uP(n,t._query).then(s=>new OP(e,r,t,s))}function MP(t,e,n,...r){t=Jr(t,qt);const s=Jr(t.firestore,fo),i=fh(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof vl?AP(i,"updateDoc",t._key,e,n,r):EP(i,"updateDoc",t._key,e),Ih(s,[o.toMutation(t._key,nn.exists(!0))])}function LP(t){return Ih(Jr(t.firestore,fo),[new Gu(t._key,nn.none())])}function UP(t,e){const n=Jr(t.firestore,fo),r=Zc(t),s=kP(t.converter,e);return Ih(n,[vP(fh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Ih(t,e){return function(r,s){const i=new fr;return r.asyncQueue.enqueueAndForget(async()=>YS(await lP(r),s,i)),i.promise}(Ly(t),e)}function uc(){return new ph("serverTimestamp")}(function(e,n=!0){(function(s){$s=s})(ts),Gr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new fo(new m0(r.getProvider("auth-internal")),new v0(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gn(Zf,ep,e),gn(Zf,ep,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="firebasestorage.googleapis.com",Wy="storageBucket",FP=2*60*1e3,BP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends wn{constructor(e,n,r=0){super(hc(e),`Firebase Storage: ${n} (${hc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qe||(Qe={}));function hc(t){return"storage/"+t}function Rh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ye(Qe.UNKNOWN,t)}function jP(t){return new Ye(Qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qP(t){return new Ye(Qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ye(Qe.UNAUTHENTICATED,t)}function $P(){return new Ye(Qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function KP(t){return new Ye(Qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WP(){return new Ye(Qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function GP(){return new Ye(Qe.CANCELED,"User canceled the upload/download.")}function zP(t){return new Ye(Qe.INVALID_URL,"Invalid URL '"+t+"'.")}function QP(t){return new Ye(Qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function YP(){return new Ye(Qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Wy+"' property when initializing the app?")}function XP(){return new Ye(Qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JP(){return new Ye(Qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZP(t){return new Ye(Qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tu(t){return new Ye(Qe.INVALID_ARGUMENT,t)}function Gy(){return new Ye(Qe.APP_DELETED,"The Firebase app was deleted.")}function e1(t){return new Ye(Qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Di(t,e){return new Ye(Qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function di(t){throw new Ye(Qe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw QP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),A={bucket:1,path:3},C=n===Ky?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",x=new RegExp(`^https?://${C}/${s}/${P}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:_,indices:A,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<L.length;D++){const J=L[D],K=J.regex.exec(e);if(K){const R=K[J.indices.bucket];let y=K[J.indices.path];y||(y=""),r=new jt(R,y),J.postModify(r);break}}if(r==null)throw zP(e);return r}}class t1{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...P){u||(u=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,t(_,c())},P)}function g(){i&&clearTimeout(i)}function _(P,...x){if(u){g();return}if(P){g(),d.call(null,P,...x);return}if(c()||o){g(),d.call(null,P,...x);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,p(L)}let A=!1;function C(P){A||(A=!0,g(),!u&&(s!==null?(P||(l=2),clearTimeout(s),p(0)):P||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function r1(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){return t!==void 0}function i1(t){return typeof t=="object"&&!Array.isArray(t)}function bh(t){return typeof t=="string"||t instanceof String}function Zp(t){return Ch()&&t instanceof Blob}function Ch(){return typeof Blob<"u"}function eg(t,e,n,r){if(r<e)throw tu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function zy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Hr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hr||(Hr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n,r,s,i,o,l,c,u,d,p,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,C)=>{this.resolve_=A,this.reject_=C,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Wo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Hr.NO_ERROR,c=i.getStatus();if(!l||o1(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Hr.ABORT;r(!1,new Wo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Wo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());s1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Rh();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Gy():GP();o(c)}else{const c=WP();o(c)}};this.canceled_?n(!1,new Wo(!1,null,!0)):this.backoffId_=n1(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&r1(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function l1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function c1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function u1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function h1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function d1(t,e,n,r,s,i,o=!0,l=!1){const c=zy(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return u1(d,e),l1(d,n),c1(d,i),h1(d,r),new a1(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function p1(...t){const e=f1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ch())return new Blob(t);throw new Ye(Qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function g1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t){if(typeof atob>"u")throw ZP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dc{constructor(e,n){this.data=e,this.contentType=n||null}}function _1(t,e){switch(t){case fn.RAW:return new dc(Qy(e));case fn.BASE64:case fn.BASE64URL:return new dc(Yy(t,e));case fn.DATA_URL:return new dc(v1(e),E1(e))}throw Rh()}function Qy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function y1(t){let e;try{e=decodeURIComponent(t)}catch{throw Di(fn.DATA_URL,"Malformed data URL.")}return Qy(e)}function Yy(t,e){switch(t){case fn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Di(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Di(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=m1(e)}catch(s){throw s.message.includes("polyfill")?s:Di(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Xy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Di(fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=A1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function v1(t){const e=new Xy(t);return e.base64?Yy(fn.BASE64,e.rest):y1(e.rest)}function E1(t){return new Xy(t).contentType}function A1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){let r=0,s="";Zp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zp(this.data_)){const r=this.data_,s=g1(r,e,n);return s===null?null:new ar(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(Ch()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(p1.apply(null,n))}else{const n=e.map(o=>bh(o)?_1(fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new ar(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){let e;try{e=JSON.parse(t)}catch{return null}return i1(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function T1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Zy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t,e){return e}class bt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||I1}}let Go=null;function R1(t){return!bh(t)||t.length<2?t:Zy(t)}function ev(){if(Go)return Go;const t=[];t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));function e(i,o){return R1(o)}const n=new bt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new bt("size");return s.xform=r,t.push(s),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),Go=t,Go}function b1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function C1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return b1(r,t),r}function tv(t,e,n){const r=Jy(e);return r===null?null:C1(t,r,n)}function S1(t,e,n,r){const s=Jy(e);if(s===null||!bh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),_=wl(g,n,r),A=zy({alt:"media",token:u});return _+A})[0]}function P1(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Sh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){if(!t)throw Rh()}function k1(t,e){function n(r,s){const i=tv(t,s,e);return nv(i!==null),i}return n}function N1(t,e){function n(r,s){const i=tv(t,s,e);return nv(i!==null),S1(i,s,t.host,t._protocol)}return n}function rv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=$P():s=HP():n.getStatus()===402?s=qP(t.bucket):n.getStatus()===403?s=KP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function sv(t){const e=rv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=jP(t.path)),i.serverResponse=s.serverResponse,i}return n}function O1(t,e,n){const r=e.fullServerUrl(),s=wl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Sh(s,i,N1(t,n),o);return l.errorHandler=sv(e),l}function D1(t,e){const n=e.fullServerUrl(),r=wl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new Sh(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=sv(e),l}function V1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function x1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=V1(null,e)),r}function M1(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let D=0;D<2;D++)L=L+Math.random().toString().slice(2);return L}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=x1(e,r,s),d=P1(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",_=ar.getBlob(p,r,g);if(_===null)throw XP();const A={name:u.fullPath},C=wl(i,t.host,t._protocol),P="POST",x=t.maxUploadRetryTime,M=new Sh(C,P,k1(t,n),x);return M.urlParams=A,M.headers=o,M.body=_.uploadData(),M.errorHandler=rv(e),M}class L1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Hr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Hr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Hr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw di("cannot .send() more than once");if(br(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw di("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw di("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw di("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw di("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class U1 extends L1{initXhr(){this.xhr_.responseType="text"}}function Ph(){return new U1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zr(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zy(this._location.path)}get storage(){return this._service}get parent(){const e=w1(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new Zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw e1(e)}}function F1(t,e,n){t._throwIfRoot("uploadBytes");const r=M1(t.storage,t._location,ev(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,Ph).then(s=>({metadata:s,ref:t}))}function B1(t){t._throwIfRoot("getDownloadURL");const e=O1(t.storage,t._location,ev());return t.storage.makeRequestWithTokens(e,Ph).then(n=>{if(n===null)throw JP();return n})}function j1(t){t._throwIfRoot("deleteObject");const e=D1(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ph)}function q1(t,e){const n=T1(t._location.path,e),r=new jt(t._location.bucket,n);return new Zr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t){return/^[A-Za-z]+:\/\//.test(t)}function $1(t,e){return new Zr(t,e)}function iv(t,e){if(t instanceof kh){const n=t;if(n._bucket==null)throw YP();const r=new Zr(n,n._bucket);return e!=null?iv(r,e):r}else return e!==void 0?q1(t,e):t}function K1(t,e){if(e&&H1(e)){if(t instanceof kh)return $1(t,e);throw tu("To use ref(service, url), the first argument must be a Storage instance.")}else return iv(t,e)}function tg(t,e){const n=e==null?void 0:e[Wy];return n==null?null:jt.makeFromBucketSpec(n,t)}function W1(t,e,n,r={}){t.host=`${e}:${n}`;const s=br(e);s&&(Iu(`https://${t.host}/b`),Ru("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Nm(i,t.app.options.projectId))}class kh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=Ky,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=FP,this._maxUploadRetryTime=BP,this._requests=new Set,s!=null?this._bucket=jt.makeFromBucketSpec(s,this._host):this._bucket=tg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=tg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){eg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new t1(Gy());{const o=d1(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ng="@firebase/storage",rg="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="storage";function G1(t,e,n){return t=$e(t),F1(t,e,n)}function z1(t){return t=$e(t),B1(t)}function Q1(t){return t=$e(t),j1(t)}function sg(t,e){return t=$e(t),K1(t,e)}function Y1(t=Su(),e){t=$e(t);const r=nl(t,ov).getImmediate({identifier:e}),s=Sm("storage");return s&&X1(r,...s),r}function X1(t,e,n,r={}){W1(t,e,n,r)}function J1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new kh(n,r,s,e,ts)}function Z1(){Gr(new yr(ov,J1,"PUBLIC").setMultipleInstances(!0)),gn(ng,rg,""),gn(ng,rg,"esm2017")}Z1();const ek={apiKey:"AIzaSyAr4nGRhlqXyoHG7dZtqcbj-IN2Xcr0LqM",authDomain:"fir-auth-cozy.firebaseapp.com",projectId:"fir-auth-cozy",storageBucket:"fir-auth-cozy.firebasestorage.app",messagingSenderId:"306302302026",appId:"1:306302302026:web:63ffe859d4cbbeda6073b3",measurementId:"G-SSWWQ42BLN"},Nh=Vm(ek),$r=u0(Nh),zo=pP(Nh),ig=Y1(Nh),tk=new Dn,av=new On;av.setCustomParameters({display:"popup"});const nk=async()=>{try{return(await g_($r,tk)).user}catch(t){throw console.error("Google login error:",t),t}},rk=async()=>{try{return(await g_($r,av)).user}catch(t){throw console.error("Facebook login error:",t),t}},nu=Ce(null),lv=Ce(!1);let Ps=null;const sk=()=>{Ps||(Ps=ZR($r,t=>{nu.value=t,lv.value=!0}))},ik=()=>{Ps&&(Ps(),Ps=null)},ok=async()=>{try{return await eb($r),!0}catch(t){throw console.error("Logout error:",t),t}};function go(){Ps||sk();const t=Be(()=>!!nu.value);return{user:ha(nu),isLoggedIn:t,isInitialized:ha(lv),logout:ok,cleanupAuth:ik}}const tr=Ce(""),Qo=Ce(""),fc=Ce(!1);function Oh(){const t=el(),{isLoggedIn:e,logout:n}=go(),{currentLanguage:r}=Vt(),s={EN:{errors:{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-credential":"Invalid credentials. Please check your email and password.","auth/too-many-requests":"Too many failed attempts. Please try again later.","login-failed":"Login failed. Please try again.","signup-failed":"Signup failed. Please try again.","password-reset-failed":"Failed to send password reset email. Please try again.","password-mismatch":"Passwords do not match.","email-required":"Please enter your email address first.","network-error":"Network error. Please check your connection.","unknown-error":"An unexpected error occurred. Please try again."},success:{"password-reset-sent":"Password reset email sent! Check your inbox.","login-success":"Login successful!","signup-success":"Account created successfully!"},loading:{"logging-in":"Logging in...","signing-up":"Signing up...","sending-reset":"Sending reset email..."}},VN:{errors:{"auth/user-not-found":"Không tìm thấy người dùng với email này.","auth/wrong-password":"Mật khẩu không đúng.","auth/invalid-email":"Địa chỉ email không hợp lệ.","auth/user-disabled":"Tài khoản này đã bị vô hiệu hóa.","auth/email-already-in-use":"Tài khoản với email này đã tồn tại.","auth/weak-password":"Mật khẩu phải có ít nhất 6 ký tự.","auth/invalid-credential":"Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra email và mật khẩu.","auth/too-many-requests":"Quá nhiều lần thử không thành công. Vui lòng thử lại sau.","login-failed":"Đăng nhập thất bại. Vui lòng thử lại.","signup-failed":"Đăng ký thất bại. Vui lòng thử lại.","password-reset-failed":"Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại.","password-mismatch":"Mật khẩu không khớp.","email-required":"Vui lòng nhập địa chỉ email trước.","network-error":"Lỗi mạng. Vui lòng kiểm tra kết nối.","unknown-error":"Đã xảy ra lỗi không mong muốn. Vui lòng thử lại."},success:{"password-reset-sent":"Email đặt lại mật khẩu đã được gửi! Kiểm tra hộp thư của bạn.","login-success":"Đăng nhập thành công!","signup-success":"Tài khoản đã được tạo thành công!"},loading:{"logging-in":"Đang đăng nhập...","signing-up":"Đang đăng ký...","sending-reset":"Đang gửi email đặt lại..."}}},i=(D,J="unknown-error")=>{const K=s[r.value].errors;D.code?tr.value=K[D.code]||K[J]:D.message?D.message.includes("network")?tr.value=K["network-error"]:tr.value=K[J]:typeof D=="string"?tr.value=K[D]||K[J]:tr.value=K[J],Qo.value=""},o=D=>{const J=s[r.value].success;Qo.value=J[D]||"",tr.value=""},l=()=>{tr.value="",Qo.value=""},c=(D=null)=>{fc.value=!0,D&&l()},u=()=>{fc.value=!1},d=async(D,J,K,R)=>{try{c(J),l();const y=await D();return K&&o(K),y}catch(y){throw console.error("Operation failed:",y),i(y,R),y}finally{u()}},p=D=>s[r.value].loading[D]||"",g=D=>btoa(D),_=D=>{try{return atob(D)}catch{return""}},A=async(D,J)=>d(async()=>{if(await YR($r,D.email,D.password),J){const{setRememberedAuth:K}=Vt();K(D.email,g(D.password))}else{const{clearRememberedAuth:K}=Vt();K()}t.push("/home")},"logging-in",null,"login-failed"),C=async D=>d(async()=>{await QR($r,D.email,D.password),t.push("/home")},"signing-up",null,"signup-failed"),P=async D=>d(async()=>{await zR($r,D)},"sending-reset","password-reset-sent","password-reset-failed"),x=async()=>d(async()=>{const D=await nk();return console.log("Google login successful:",D),t.push("/home"),D},"logging-in",null,"login-failed"),M=async()=>d(async()=>{const D=await rk();return console.log("Facebook login successful:",D),t.push("/home"),D},"logging-in",null,"login-failed"),L=async()=>{if(e.value)try{await n(),t.push("/")}catch(D){console.error("Logout error:",D)}};return{loading:Be(()=>fc.value),error:Be(()=>tr.value),successMessage:Be(()=>Qo.value),isLoggedIn:e,encryptPassword:g,decryptPassword:_,handleLogin:A,handleSignup:C,handleForgotPassword:P,handleLogout:L,handleGoogleLogin:x,handleFacebookLogin:M,clearMessages:l,getLoadingMessage:p,handleError:i}}const Gn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ak={class:"container-right-nav"},lk=["disabled"],ck={__name:"NavRight",setup(t){const{changeThemeColor:e,toggleLanguage:n,t:r}=Vt(),{isLoggedIn:s,handleLogout:i}=Oh();return(o,l)=>(ie(),oe("div",ak,[O("button",{class:"nav-circle orange-circle",onClick:l[0]||(l[0]=c=>Q(e)("#ff7b42","255, 123, 66"))}),O("button",{class:"nav-circle green-circle",onClick:l[1]||(l[1]=c=>Q(e)("#a4f28d","164, 242, 141"))}),O("button",{class:"nav-circle yellow-circle",onClick:l[2]||(l[2]=c=>Q(e)("#ffeb7c","255, 235, 124"))}),O("button",{class:"nav-button language-button",onClick:l[3]||(l[3]=(...c)=>Q(n)&&Q(n)(...c))},be(Q(r).languageBtn),1),O("button",{class:ze(["nav-button logout-button",{disabled:!Q(s)}]),onClick:l[4]||(l[4]=(...c)=>Q(i)&&Q(i)(...c)),disabled:!Q(s)},be(Q(r).logoutBtn),11,lk)]))}},uk=Gn(ck,[["__scopeId","data-v-8e237b3f"]]),hk={__name:"App",setup(t){const{initializeTheme:e}=Vt();return Rr(()=>{e()}),(n,r)=>{const s=BE("router-view");return ie(),oe("div",null,[ye(uk),ye(s)])}}};function dk(){const t=o=>o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?null:"email-invalid":"email-required",e=o=>o?null:"password-required",n=(o,l)=>l?o!==l?"password-mismatch":null:"confirm-password-required";return{validateEmail:t,validatePassword:e,validatePasswordConfirmation:n,validateLoginForm:o=>{const l=t(o.email);if(l)return l;const c=e(o.password);return c||null},validateSignupForm:o=>{const l=t(o.email);if(l)return l;const c=e(o.password);if(c)return c;const u=n(o.password,o.confirmPassword);return u||null},validateForgotPasswordForm:o=>t(o)}}const fk={id:"container-form-login"},pk={class:"tab-buttons-login"},gk={class:"form-container"},mk={class:"input-group"},_k=["placeholder"],yk={class:"password-input-container"},vk=["type","placeholder"],Ek=["src","alt"],Ak={class:"form-options"},wk={class:"remember-me"},Tk=["disabled"],Ik={class:"input-group"},Rk=["placeholder"],bk={class:"password-input-container"},Ck=["type","placeholder"],Sk=["src","alt"],Pk={class:"password-input-container"},kk=["type","placeholder"],Nk=["src","alt"],Ok=["disabled"],Dk={key:0,class:"error-message"},Vk={key:1,class:"success-message"},xk={__name:"LoginForm",setup(t){const{t:e,currentLanguage:n,getRememberedAuth:r}=Vt(),{loading:s,error:i,successMessage:o,decryptPassword:l,handleLogin:c,handleSignup:u,handleForgotPassword:d,clearMessages:p,handleError:g}=Oh(),{validateLoginForm:_,validateSignupForm:A,validateForgotPasswordForm:C}=dk(),P=Ce("login"),x=Ce(!1),M=Ce(!1),L=Ce(!1),D=Ce(!1),J=ks({email:"",password:""}),K=ks({email:"",password:"",confirmPassword:""});Rr(()=>{const w=r();w.email&&(J.email=w.email,J.password=w.password?l(w.password):"",x.value=!0)});const R=w=>{P.value=w,p()},y=()=>{p();const w=_(J);if(w){g(w);return}c(J,x.value)},I=()=>{p();const w=A(K);if(w){g(w);return}u(K)},S=()=>{p();const w=C(J.email);if(w){g(w);return}d(J.email)};return(w,b)=>(ie(),oe("div",fk,[O("div",pk,[O("button",{class:ze(["tab-button",{active:P.value==="login"}]),onClick:b[0]||(b[0]=v=>R("login"))},be(Q(e).loginTab),3),O("button",{class:ze(["tab-button",{active:P.value==="signup"}]),onClick:b[1]||(b[1]=v=>R("signup"))},be(Q(e).signupTab),3)]),O("div",gk,[Cn(O("form",{class:"form",onSubmit:Ql(y,["prevent"])},[O("div",mk,[Cn(O("input",{type:"email",class:"input-field theme-input",placeholder:Q(e).emailPlaceholder,"onUpdate:modelValue":b[2]||(b[2]=v=>J.email=v),required:""},null,8,_k),[[Fi,J.email]]),O("div",yk,[Cn(O("input",{type:M.value?"text":"password",class:"input-field theme-input",placeholder:Q(e).passwordPlaceholder,"onUpdate:modelValue":b[3]||(b[3]=v=>J.password=v),required:""},null,8,vk),[[zl,J.password]]),O("button",{type:"button",class:"toggle-password",onClick:b[4]||(b[4]=v=>M.value=!M.value)},[O("img",{src:M.value?"/src/components/icons/hide.png":"/src/components/icons/show.png",alt:M.value?"Hide password":"Show password",class:"password-icon"},null,8,Ek)])])]),O("div",Ak,[O("label",wk,[Cn(O("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":b[5]||(b[5]=v=>x.value=v)},null,512),[[um,x.value]]),O("span",null,be(Q(e).rememberMe),1)]),O("a",{href:"#",class:"forgot-password",onClick:Ql(S,["prevent"])},be(Q(e).forgotPassword),1)]),O("button",{type:"submit",class:"submit-button",disabled:Q(s)},be(Q(s)?Q(n)==="EN"?"Logging in...":"Đang đăng nhập...":Q(e).loginBtn),9,Tk)],544),[[$d,P.value==="login"]]),Cn(O("form",{class:"form",onSubmit:Ql(I,["prevent"])},[O("div",Ik,[Cn(O("input",{type:"email",class:"input-field theme-input",placeholder:Q(e).emailPlaceholder,"onUpdate:modelValue":b[6]||(b[6]=v=>K.email=v),required:""},null,8,Rk),[[Fi,K.email]]),O("div",bk,[Cn(O("input",{type:L.value?"text":"password",class:"input-field theme-input",placeholder:Q(e).passwordPlaceholder,"onUpdate:modelValue":b[7]||(b[7]=v=>K.password=v),required:""},null,8,Ck),[[zl,K.password]]),O("button",{type:"button",class:"toggle-password",onClick:b[8]||(b[8]=v=>L.value=!L.value)},[O("img",{src:L.value?"/src/components/icons/hide.png":"/src/components/icons/show.png",alt:L.value?"Hide password":"Show password",class:"password-icon"},null,8,Sk)])]),O("div",Pk,[Cn(O("input",{type:D.value?"text":"password",class:"input-field theme-input",placeholder:Q(e).confirmPasswordPlaceholder,"onUpdate:modelValue":b[9]||(b[9]=v=>K.confirmPassword=v),required:""},null,8,kk),[[zl,K.confirmPassword]]),O("button",{type:"button",class:"toggle-password",onClick:b[10]||(b[10]=v=>D.value=!D.value)},[O("img",{src:D.value?"/src/components/icons/hide.png":"/src/components/icons/show.png",alt:D.value?"Hide password":"Show password",class:"password-icon"},null,8,Nk)])])]),O("button",{type:"submit",class:"submit-button",disabled:Q(s)},be(Q(s)?Q(n)==="EN"?"Signing up...":"Đang đăng ký...":Q(e).signupBtn),9,Ok)],544),[[$d,P.value==="signup"]]),Q(i)?(ie(),oe("div",Dk,be(Q(i)),1)):qr("",!0),Q(o)?(ie(),oe("div",Vk,be(Q(o)),1)):qr("",!0)])]))}},Mk=Gn(xk,[["__scopeId","data-v-3d9f281c"]]),Lk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2Zv2sUQRTHP+evwigSrCyiAWOpTXpBxcRcCkn8BVrZif+AjUJQSA5Jo4VpbMQiJtrE/CCojZ3YGEQx9nYaE6PRxOJWBp4Qwu7czuzb3Tm4L3zhmn1vPszsm7fvoKWWgtceoArUgGlgEfgO/BWb35+A58AI0CfPBKGKLGgSWAciR/8BJoAzEqsUXQDeeyw+yQvAYJEAR4BXigBb/QLoyhviHLCSI0QkXgUu5wFgzu9QAQDRFtc03x0TaKwEiEj8QAtmpESISHwnK8SlACAi8ZUs1emn0iLMffFQSraJux/YB7QDncBRYLRBjB/AYR8QrRL7EjiQIt/VFLHmXSHOK0HMAjtS5kwDYjyQFqKidGN/kyOEMsi7tFWsT2k3hh0gXEAioDdNwEklkGOWHN3Afcn1328dYo83gtjr2cXGVZjtFoiNjPF/A7ttIFXFTjZJj5Ry9NhAakpJXltyfCniHZxWSjKXEL8iX4saOaZsIJ8V74847VKKH8lnc6KWmgjkqw1ko4lA1rVBBqT522zbdKQ9wXcd85q1JmrZA+Q0Onri0QIlarFEENNDueT9aAs2WxLINmBNs/wOlwRySPvzt98j4HXpnza7y3Ihdsf4mkfeXhuIacR+eQQtuvyuAW2NtvlpE4BMkEI9TQByKg2IOccfAgZZwEFnAwapUuA4KC+QeTzUKVPxUEBWgIN4yjSE9QBA6sBFMup2ACBDKOleiSCjKOuGwzHTAKlr7kTcX2/LBYAsucx4s3SqMzmCTAEdFKh+y5jTB+SNzJ1L03HgsYxJXUFWZfJoYgQjs8iTwE0pDHHaCTwDbgEn5JmWWiJg/QOlYrQmouYwLQAAAABJRU5ErkJggg==",Uk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2ZSWsUURSFP5WYDoqiRiPigAvBP+BCiWsxDqigoMZf4EKIgqgrd6IoCCrOA1m5cCW208JFjCDGnWDiiANBQaIimnRi8uTJFZpQ1bxb9V5VteTAgV503fNOveneWzCB/xuzgE3AMeAW0AsMABVgWH73AWX5j/3vHAqCRqAduAv8BoySI8AdiTE1DwNNQAfQn2DwcewH9srLyQRtwGuPBsbzjWgEQwk4G9CAqeIYcF5m3ivmA08zMmGq+BhY4MvEUuBVDiaM8J2ciKkwV45MkyMP+dgTeSwnU8X9eMC5ep8Ji3UeBlKR9f0I6JZ9NpzlTDTJWZ5k8IPAJWC9LM3xmCZ3xGUxGsyExb6E5/5VYDHuWAR0hjJRSpB2/AK2p9C0z/7wacJiVwITqzzotuAZ95XLaQcFxGxgVGHkCgXFFuXppNnYmeKEwsgFx5iTgJ5APBwnelthZK3CiAmYGUfCNcMdUlRxIY18ixMdcAxgb30KYMQAM6NERxwfflggIwujRF0Tuu4CGVkeJfrV8eG3BTKyJEr0ZZ1tdgM0R4mWFQHaCmCkAkyJEj2uCHKxAEb64kQ3B0hRrJEjCvYoxnCzVtKo6d9ewy+mA58V+gdrBbunnN6dHo2cVGqvrBWsXRnMLrFWDya2SX3jqvsFaPBd6g7KC0hT6rpexv94yiVwR8JTpDPugopBc4qm+AoXgVKKXu+QtHo2xnTSG6TGt/vhe0KNB4qX9bfeMClpl8sHadB1Ac/EaNq4rShxxoOob94gAewSe1KAwRvhJ2AeKfpNrslkSI5KGzb1h568zezGE1pyWmZj0ov2CrtnTmdo4iewlYBYA7wIbKILWEYGsLOzB/jo2UCvJKKTyRiNkiuVFV2YqI7+dWBDXMWXNWbIYI5K0fNcstSKmLR9s/dy09u87ACwOubL1gSoZ/wB2IjAIiE1bGAAAAAASUVORK5CYII=",Fk={id:"container-social-login"},Bk={class:"qr-section"},jk={class:"qr-title"},qk={class:"social-login"},Hk={class:"social-title"},$k={class:"social-buttons"},Kk={__name:"LoginSocial",setup(t){const{t:e}=Vt(),{handleGoogleLogin:n,handleFacebookLogin:r}=Oh();return(s,i)=>(ie(),oe("div",Fk,[O("div",Bk,[O("div",jk,be(Q(e).qrTitle),1),i[2]||(i[2]=O("div",{class:"qr-code"},[O("div",{class:"qr-pattern",id:"qrcode"},[O("div",{class:"qr-placeholder"},[O("br"),Tc(" QR Login"),O("br"),Tc(" Coming Soon ")])])],-1))]),O("div",qk,[O("div",Hk,be(Q(e).socialTitle),1),O("div",$k,[O("button",{class:"social-button facebook-btn",onClick:i[0]||(i[0]=(...o)=>Q(r)&&Q(r)(...o))},i[3]||(i[3]=[O("img",{src:Lk,alt:"Facebook",class:"social-icon"},null,-1)])),O("button",{class:"social-button google-btn",onClick:i[1]||(i[1]=(...o)=>Q(n)&&Q(n)(...o))},i[4]||(i[4]=[O("img",{src:Uk,alt:"Google",class:"social-icon"},null,-1)]))])])]))}},Wk=Gn(Kk,[["__scopeId","data-v-2df100bf"]]),Gk={class:"login-page"},zk={class:"container-main"},Qk={class:"container-right"},Yk={__name:"Login",setup(t){return(e,n)=>(ie(),oe("div",Gk,[n[0]||(n[0]=O("div",{class:"container-left"},null,-1)),O("div",zk,[ye(Mk)]),O("div",Qk,[ye(Wk)])]))}},Xk={class:"container-left-nav"},Jk={key:0,class:"user-profile"},Zk={class:"username"},eN={key:1,class:"guest-profile"},tN={class:"guest-text"},nN={__name:"NavLeft",setup(t){const{user:e}=go(),{t:n}=Vt(),r=Be(()=>{var s;return(s=e.value)!=null&&s.email?e.value.email.replace("@gmail.com",""):""});return(s,i)=>(ie(),oe("div",Xk,[Q(e)?(ie(),oe("div",Jk,[i[0]||(i[0]=O("div",{class:"user-avatar"},null,-1)),O("div",Zk,be(r.value),1)])):(ie(),oe("div",eN,[O("div",tN,be(Q(n).guest||"Guest"),1)]))]))}},ss=Gn(nN,[["__scopeId","data-v-e700a94c"]]),rN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2av04UURTGfzHR+C+uwcXEyj+F+gDGVmvtEAzEF9ClMD6CLOEFTGxUBGwUeq3MgoouoBYUqzYSC9TOlVIi11xzTMgE2HPP3JnZxPmSL9nszp7vfjsz55x7ZqFEiRJ5ohfoB0aBGWAWeCv0r6flsytAlS7DYWAYaAIbgFPSH/sGqAGVog2MAT8DFr8d23KmKnmbuAZ8j2AgyW/AUB4GDgKPMjCQ5CRwICsTPXJNu5y4BBzNIht9yNGEE7ZEO9rltFSACSdcAPbHMDJZoAknHI+RnaziG1Jb7goXAuuMS3AwTZ2wptiPwLktYp4HPhljfrXWmTGj4EqHG9Rnoi/G2KOWs9E2ivk+qhMGjLHboWdl2Cjk25Xdivh7gDWjxo0QI02jyHKAxrJR47VWoDdFdvkcYGTFqPFbuwXoNwo4+QGOKzROptBwyvvwb2ZII3JPoTGeUqOuMTKTUsTz5g7xb0WI/0RjZC6CkOdT4BJwTHgZeBYp9qzGyPtIYlny3X9l5EUXLNR1YENjZLoLFuo68LHGSD0w6G3gLHDKSP/dkUDNkdgF0We4WHgZoNunCViVNkAT0O8eY0G7E/VrO6INqp2WPI9oxN/AGs35kKA1ZdBfwIkIJnzvta7UvB4SuBKwsXoF7E1hYp+05hqtH5btbkjz6Kftpw0mzkhxi5qtkqjILFYrsi5d7QVgF9vDf3YRmAi4nBywChzCiKEAoc1ckw5hCrgjnJIUa93iXiUlJozCMXmfCPBT8cUCTTRjjUz/7eNbBZhoZfGIrkeKUV4mFmNO4pPwp/hhDiYexLycdsKgzGJjG1iNkZ0sdaaeYrSarNi+2JnrRCxDNWkztF2zk2PnZQRa6OPprVCVvUJdRjaNTX8YaMh7dTlG3YqXKFGC1PgDcfh0wGATYKgAAAAASUVORK5CYII=",sN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2Zuy8EQRzHPyIUEgpRiHgk5CoKveioHH+ISGgUKgVRKBQqGhKhFwqvOIWOQiJRiA6Vx3mcN0E2+Uk2G7v2MTOLzCeZ7N1vvjf3++78dnIzB5b/STewBdxJywFZBVqjjAEfPm00gdYo3QGJfbVsDK1xtkIktxlDa5xCiORuY2iNEya5mxha4+QilEsUrXGyIZLriqFNhdGAxEYSaFMhK2VRkLYZcHeDtMXSvwhcA7tAC3+IWmAYOPlmpnb45ZTI3V8C3gJKrqArgUZgEjgEnkM8wEnbjA4THcCTgeQ/gHNgCCjVYWTPgIFjYACo1GWiWbOBI6AfqJKr8+AP6jAyriH5e2Ad6AGq5Wf+las/LzOjDGd9P02QcJvPuGXSNwU8+nx2QqWRTs/gmYhGioCLCPqM6/WTrJRKmPd8ETGMvEfQ43k/iyJuUjaS/y9GLlUZWUjZyJwqI+0JjSTVt6GQ/ZSMHKCYvpRKq1e1kXI55TA5IwWgAg1MGzYyjSYaXEuh7tI6k52jNjIBRjIRjfjpHZowRJQSihM3hjWCnRE92NLClpYebGlhS0sPtrSwpaWHB095OQdpfPNXw1f81RN/+WEcYyx7EliV+IYn7pztIntvdzz3wzjGqAFW5MzLuda5Nl/rsk1dA+ol3gpsywzkXHG/cSz8ZT4BbD/BpvSHvswAAAAASUVORK5CYII=",iN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVR4nO2ZvUrEQBRGj1iIFqKNhRZWNlZaKFqJnVtZbaGlPsCiT2CpNmJppY0oeQNfQHAt7LQQbRbcUrAQF2RHAjcQQpJ1Y35m3Hvgg0D+7mFyMxMCiuIkE8CxxN92kjngETCSZ2Aex9gA3kMSQT6ATRyhAXzHSATpAgfAEJYyAlykCERzDYxhGTNAsw+JIPdybpRd4Arw5EUxXobECvCWQSKIf+5q6HpLMcccFS2xDXz+QSLIF7Aj16zH7PdHphCGgcMcBKI5A7bKEpkEbgqQCD9qhYv4k9xTgRImIV4Zk5xTIo0ek5z1IqPAZYUCRtKUWjIxDdxZIGEkD8BsvxLLQNuC4k0kbant17xaULRJyMtAiiwC5/K2aFlQfEtq8WtaICOeBSJe1uJVhAEckSTqKtIDHRH00UKbPQ3tEbRH0B5JQ3sE7RGc6hEvIbeuLRpLX8afWiBykofIuvwuq0qiC6yRE/tApwKJDrBHzkwBNfmCKyM1uaeiKMo/5AfqJDSwWMSe7AAAAABJRU5ErkJggg==",oN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2ZW4gPcRTHPwi1tR7kErubzT2LTSi3LPuilPAiSVmpfdlc2pTaB/ZBER5cV3kSi1XKiyha64UIRRbJNS/u97DrsqNTZ/Vr+v93fjPzmzWb+dSpf2d+c+Z85//7nTm/GcjIyMj4XxkFVAENQDPwBHgP/FKT34/1mIxZBYwkJRQDW4C7gBfRWoHNQNG/EDAeOKZ32nNkEqsRGNsdAgqAeqDdoQC//QT2AIVJiZgQcwqFtQdAuWsRi4Fv3SjCU5NrLnIlYrn+3d0twjOm2rK4IioTXg+21gbMiypiKPAiBSI8tVfAsChCTqcgec9np8KKmJ+CpL08VhFGyIUUJOzlsXNheqaOFCTs5THJrdRGSG0KkvUCbENPXeRelEX/MAWJehbtSyCfU5CoF2AfbYT8SEGinkXbEsjrBKuNlPWNwAzdSPXXdl0q5UJgh06boFiy2wykNQERR3UzZkNv7XhvdxHvjk2gww4FvIvRhvcDtueJKzvJQNY4EvEWmEJ8anPEXm1z4iBtm+OuhwW445ARu01ztKIxphB5MeGSAdrGd643aybG3BXOxD27NPbesCfujijiTY5Ym/SF3VlgiPpKgIvAI6DGGFujvmYd00mFxr8RVojU93sRhFz3xSnzHd+n/iM+v7zsK+qiOpWoT3atoRkHfIoppNx3/KD6j/v8I9RMX5Nv6y2+l0RkdkgxUnZ7GefL723AB+CyMV1GAzf1WVNnjK/TGHJsjOGfE3VqmUw3qoaNiXjXbPVNzcgMB1oshZzALYU6pST2LBcB+wBrdToEiZEm0BUHNOYlHDMQeGrRoU5zcK11xuvTSTimzPIFhSzwpRGv0RfYqdf5DawgAZryJL4fWK9fpK4Z/pMh72a5sZ1o169bzqnMIUDWzErfOCm71cAXHdOhc1zK61x9ZhToQi7VNVUFDAau6Dn3dROWCLd8nWiD0Xbkolj7JNtn0Xejz5tKgrToR836kN/9pINdos+Bq1osvqrAZ8B54Iyuh05R0pv1WCbrv/xc+7GMjIwM/vIH8BXcFZyyIHYAAAAASUVORK5CYII=",aN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2Zvy4EURSHP1QkxJ9+Ezo6FbWIREEkomC7FZ5hC5IteIKthKcQKtmohMIbaHgFihUJI0fuNJPZQfbeM3M5X/Jr5syffJlz7+TeAcMwymIAaABXLg13LDoOgSSTAyJjCHjJEXl2tWio5UikkVo0LBaISK3SDAJ14K5AQvIB3AI7VRz8c8D9NwJ5kWtmqQgbPQb2TyMTwHrZEsvAax8Sad6A1bIkZvp8E9nIvaa1JWSQXnuUSNPRFlkJIJFmSVPkIqDIuZbEiKcB3itdYFhrpgolkWi2156CyK6GSFNBpKkh0lIQaZnIL7A3grVWGKy1sNYKg7UW1lph+BOtNeaWo6FFOu5ZQZgHHhQkEpdHYCHEGqSrKJG4yDP3fUlslSCQZLLpQ+SsAiKnPkTqFRDZxhOyN9sGTpTTBtZ8SfxbRt0EURQ5p/JMAO8F/S61cSLhskBEtlujoQY89fhaR/UzVJgCjoEblyNg8qtiGAbafAJWJByq5iGepgAAAABJRU5ErkJggg==",lN={class:"container-mid-nav"},og="activeNavItem",cN={__name:"NavMid",setup(t){const e=el(),n=dT(),{getItem:r,setItem:s}=Vt(),i=Ce("home"),o={home:"/",profile:"/profile",friend:"/friend",mess:"/mess",notification:"/notification"},l={"/":"home","/profile":"profile","/friend":"friend","/mess":"mess","/notification":"notification"},c=u=>{i.value=u;const d=o[u];d&&n.path!==d&&e.push(d)};return Rr(()=>{const u=l[n.path];if(u)i.value=u;else{const d=r(og,"home");i.value=d}}),jr(i,u=>{s(og,u)},{immediate:!0}),jr(()=>n.path,u=>{const d=l[u];d&&d!==i.value&&(i.value=d)}),(u,d)=>(ie(),oe("div",lN,[O("button",{class:ze(["nav-item",{active:i.value==="profile"}]),onClick:d[0]||(d[0]=p=>c("profile")),"data-tooltip":"Profile"},d[5]||(d[5]=[O("img",{src:rN,alt:"Profile",class:"nav-icon"},null,-1)]),2),O("button",{class:ze(["nav-item",{active:i.value==="friend"}]),onClick:d[1]||(d[1]=p=>c("friend")),"data-tooltip":"Friends"},d[6]||(d[6]=[O("img",{src:sN,alt:"Friends",class:"nav-icon"},null,-1)]),2),O("button",{class:ze(["nav-item",{active:i.value==="home"}]),onClick:d[2]||(d[2]=p=>c("home")),"data-tooltip":"Home"},d[7]||(d[7]=[O("img",{src:iN,alt:"Home",class:"nav-icon"},null,-1)]),2),O("button",{class:ze(["nav-item",{active:i.value==="mess"}]),onClick:d[3]||(d[3]=p=>c("mess")),"data-tooltip":"Messages"},d[8]||(d[8]=[O("img",{src:oN,alt:"Messages",class:"nav-icon"},null,-1)]),2),O("button",{class:ze(["nav-item",{active:i.value==="notification"}]),onClick:d[4]||(d[4]=p=>c("notification")),"data-tooltip":"Notifications"},d[9]||(d[9]=[O("img",{src:aN,alt:"Notifications",class:"nav-icon"},null,-1)]),2)]))}},is=Gn(cN,[["__scopeId","data-v-daa4333c"]]),uN={id:"container-menu-home"},hN={class:"menu-buttons"},dN={class:"menu-button"},fN={__name:"HomeMenu",setup(t){const e=el(),{t:n}=Vt(),r=()=>{e.push("/status")},s=()=>{e.push("/discover")};return(i,o)=>(ie(),oe("div",uN,[O("div",hN,[O("button",{class:"menu-button",onClick:r},be(Q(n).actionButtons.upload),1),O("button",{class:"menu-button",onClick:s},be(Q(n).actionButtons.discover),1),O("button",dN,be(Q(n).actionButtons.settings),1)])]))}},os=Gn(fN,[["__scopeId","data-v-4a5c9152"]]),cv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGYklEQVR4nN1Za2wUVRT+eIiiIvgANT7AIPgAFK3svVsaa3xg6Z67tcSKrwhiJIqJGhMVYmS1na2gIQRiVAzMtmg0NKIYf6gQ0BgDiWLEgD/ERBQUpLNtqQjKc83Z2W1np3dmpyy1W05y/8zee875zj2vexboAVq2oHWoaSRjppH8KRFPpuxl/Zowkq+tjO0Zgb5AZm3rhLTSHQBylxlP7m2sbwmjmGlFfPdwM2797gWiA4xhtSZeaRuFYiXTsJY6XOmYGU++2lDbMq6xvnlswki+mDCsww4wq1CMFIulBqYt3QlkrnuPaSRndbqYdSgRaxuGYiOztnmMw9pHX4/tPdu9p6kpNSAXbMtkFBs11LaMc8TBgVQq1U+3zzSsHR2A66xbUWy0fKE1JBG3jmSVXF7XOtK9p6Fu72jTsI777SkKShjW6kx87GxatHOwJqNt6rg1w9qCYqWmWGpQos66pbG+/Xznd7O+udKMJ3e7UrBCX6KG+uQUp8tlbqMOfYma+IYMa5cjJbeYcet+FCOVYPZpEpEHJGiNhHra+VuDkax23MR+Dnb+Xo7ygQK0VILWCqiZ16JmUK8BKEV0iAA9I6B+k1Cp7AqDrs7uScST8zvdKflO9rtApNJ5RoD+EFDPl6Pq/yuQEpFLBGihBO1zKmMv2lcCuqATSPOjjht5JPs9BHWFAO13nxegvyTUosmgy3sQQNUEAWqQoENdFVD/CtAKgcgY55lYLNU/EW++16xrme4ukDYY9aYAHdQY5LCAercUlRNPGoAw6DYB+lRCHdcAaBGg+CRUXnSi/MtQMVxAvSSgmrsCSt/SuhBoCgBtp5CXJNSVEvStjrkE/SJAT5ajpks/5SR+RKWLpGGt5oLoL69msAQ9JqG262WqLZOgxnULRAiR6/UWoqQATa9BzYAgfPiV6IiR+cGkx/pLRKol1B7N7bSVgsKBQUgoy8MqzOxngehTbMH8QKwq7q0ySwVJ5WFEawTUN17yJdTfYURv7iaIdGBv9nCv3RJqXhki5/qCqW2dsDzeMt4fQM1QCXpWQu3yUH6zK8m0h6BkIBACdJTdiH8TiJRIqJX8TXND+yVo2SRMHZvP4l0BVF9sBzq1aQx1TIA+kYjebutAUzk7+oLRgQhD3ecWXIq7RkuoJRLqgJdgT0vl8KmcyIbhNKtL5TJttMpr3Od8wdggKJkPhJPCqB4hoF72jiXaEEI04kqZ/eyKTus93MdinszbT7ZANJrrZlyYIyEIqO9dSnwcJJCZSkBnCtAcTgAegH4MIzqLlwRt804eNId5IQBxXyagGl18tmuApK+3WYJiXKyCpkwBNU1AbfTJNm4ZG/kMnw0ioRxVwwRoLvdlGn4MpGqUAK3yCOSDEvQGF8duFNLJAuojjhl9HPFvKvDQIYzKkQK0WNebZfh9mNMaZRq5pZyndQck1AcCURFEOO/jQNRYrj04j0iJBL0voI7oDCyg3nL3djkkMeU8AXpBV1kz6ysJUl4uYYPQdcadwekDpl8mIWzwON/O6Tq4y2eCSiLykH+Q5lZ4tqKAas0fI7TPmaazsgTU1jxnvwgMQGelMBQJqC89mPPNzeMONfcm6JCA+s4R3Ftz3YTB8Bk1L9Ml6ABvcmWogoB0UBjRG+xi1dVvXQocDkFVcZA6bnBxCJG7dUXQv6KrmQUDuQlVl+la9TyJgR9F02wlcoHwN7uzdRa0jhv7R4LeLkX0KqesgoFwkeLHFNeUECouDZIYMjd1j4NHFyD292jUVtx+nEkoQ0BdqNejcCDrHNZ60G9vBSpODyNyp7veeAFh4iaT3S9fFyEKBeJMgcys2wzyAAnOQxUMZP0pAUTkulbfBSKhPj8lgAiozxxKxIN2qScXSKw/yy40Rta4W5IQ6InrcMdZPQ1Eeo6GaO0JAFEzdEO5zEgo0FCuu0DK/Id1rMuMbgOxwdCNAvSevpVOv53NMCLjCwXC7bjX+FRAHWEdWBcUSvy4kaAF+mlHWsmv7dY+d6yZD0j+6YxawrJxsimEinPs1t1r/kQ/CKjZ5Sg/wxsITxJJ2eC1PP5k9+L2Bz1N3JII0MM+b5X0/x329L5DwWUC6nHv2S5tY5699qePAJXZbbdfa+69vNyy1yg7dMv/VuneMK/XiKcyXokhO171HRqgyIiH2xLqOQnawf+n8JA638C7EPoPVcmpxof96UMAAAAASUVORK5CYII=",uv="/assets/sound-1ShJEH_O.gif",hv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2Y30/TUBTH+6Zv6l+g/kP9N/yR+Mx+dQM0waRsazUxEbq129624cs0sh9ITOY6BR42UUCFBBYV2Iasa5GNbsecwRKVIWy7ncV4kvPS3tt+er6355x7Keq8Gm17BoN0qhdA9vnuQJz+ZwHpn9wIKLofiY2OJt0v1J+i+dd+jJPMwgqg1IGoW1jhPyCYJoK2cV+9vKcTk3dHOwCb21cjBujkpFKhpBADXC9WgOGlIjHAYT40k323RgxQXlyF4QehBDFA67jvlm8qXiUFKEQTqtU9eYMYoMsrXnZ4RA1l1vNPAdJCT67nYrBRUsDuEbWh+48vUSSN8Uj3JiPTmqpUoCkHu4ZrZoOgViswEZ7WHB7/CEXaXC7xIsNJK8lsXtfKX6EpB84OJwdBK29CPJPTGV5axmdRRtjQmHiN4cStpJzXMZJ6LnYmWTFyiUxOd3Dilp0VrlJGGr7AyQWWUO5CSQGt+Bnqyy+hMRcGyIgtb8yHW9fwHo5BWXGO4XBtu8PzFxycNMJ4RTUUm91b2/x27E/Fa3gPxzg8fhfOGQhcG5Dx+kftXlE7DRDH4McMDBDXoZOTVoRIXCuUqqfmPJRYiExrTl5axrmGwtnZieuMV9pOZd/q3SbnZDavO7zStmGQmBqcfOBD6nX3cEobUs7rTqPSzGGijmv9lrlJTNSceJconGXs0ZXDUtd5zalKBWprc9CYj7RSTG31DajK7olrknips7DCbf+TxLFmQa0qUF+aBUj7Oibpg/czHUGFqYRqYYWbxABHH4Ze/N5uff/yEZqydHqpy4iwv7HYod0KpgxrWFHCbpuF2qescQ2r1e072Dlq+TEavbZb++v51jNw+4DbCOLbTlxzrXrbIyC88rcaB8O2nShTz3DpX6U2BLCxEO0bsLEQJQ9o+qMP2oyHR7TZj9/o83CAyZodkDbzITplEvsBq2Sww6XYVGcAAAAASUVORK5CYII=",pN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAApklEQVR4nOXQMQ4BURSF4T+htYRZBCV7mCinFDWNhD1QsoexD8NCaEmmJDEJzSuU99wbBfMnr3nJO1/yoC0tgBp4pVOnO7nqY8R7qm8DB/6+XeB7thZgFQCWFqAIAIUFGAWAoQXIAkBmATrA0zHeAF2MXRzAGaGTAzgqwN4BlAqwcQBrBZg7gJkCjB1ArgADB9BXgB7wEMbv6Y3UFLgZxq/ARB3/nd5G6fCJTgW3rQAAAABJRU5ErkJggg==",gN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFsUlEQVR4nO1Ze4hUVRi/FhH0pMfsrKv7nHPu+c6d3Tn37t2ZWTWTZM0ti8oUtUz9q9ANNCr9q4zIEoposzIU+svyDyHtD4WygoqIQNFSE7FSUNy7vha0DVHXL85178y5d+40+5idGWE/+MEw95zvcb7zPc45mjZO4zRORaNEInG7ReNcxNhDVszoNPV4MkXIXaPlazc13S15WTGj0+VN49yeaN+mFZMMw7hD6NAlCHwrCFwxKccABkzKDwjK37RJPDZUvlbMIHKOnDvIw8dXELgsCOyWsuUCjsaGm0zClwsKPSHKh0JQflUQvjUei9fmYyq/yTFhypv5+BJ+SlDjBanTsCxgjN0pKHwVxjSpc+xkDOeAjik9j3DCL5iEr5yvaTd7POVvQWCVSeBi2BzJaw7oLm8pI3yhYIfcIUPer4LAfpXBFB3wrUQD/thWgz3tEXQU7ElW40eiDh8FPUz41y11LfdIyG0S/C4Vl3MlD5VnT3sEf2ircWVK2f5Fgn0F43Jw1XapE1+Mx/BwKuoTFIZT6Qh+bk3GmToLeueIC+U/OeYLq9adU4jv4VTU1SEQPztVb+eQIHy1OmFdoiHHAy6mTURnSlWo4D9TUVweEKyiKx7Dv9Lhc508kDpI7wR4vRJqRBLgPpNCnzdwVXOTz4jemY14cdN6vHLsCOLAAPZ2kPzeaY/gu6IeLUWw/P2eqA9fmCEaszLepBgC5w3DuDfHEJPAWm/QdB18q3Z2wVS8evI4Srp8aC/2b92IvTNqCwrfZNZmBG82C493CkB6e7q6dQm8FmII/90b8KGoy0w+PVvHqz0ncOBCH/a9tHDYwt9ONOA7iYZRG+EMolvUqbGy3x8bjDWo++83Jbjl6uO1a3h+xZMj3hIj3U5OCPalor5YsZuMOnVbzfI+PAJ6duLUahzoO4uXft5dNEWKgU7my4wdWUMoLPU+PGdkg/jME5YbFxe6Xy+78o6CxQZRg35Jdmvp0OV9eN6IZSbIgD63rANPd7KyK+8okDpm4kSHrqwhlC0L80ilYjH3eWRpxhC3JR/88DCrrNV3QtDBlHaIwKyMIbL99j60Uu7m63Ir6+TB0XTUV2gTut6oZuAJgvCz3scdrZPKrrCTB1+2TlKPDael7sHKvt0bsKalsewKO3nwanO2TREUtuVWdgpLvAHTdMBjw2zsSoG/01U4VWnrBTGeDT83E/gnrE2pFHQr7Yk8oMkDYI4h19MwbPQGPlhhXjneXoUzmHLIInyDlo9aGGPqBcOGCvJKt79ZvCwvL/Ia4nqF8M3ehLQOuCflP4aWA3uS1a4uSpBv1ApRst6oVlPxMwYd0pF0rHAqHcGFnKo3KmcSTYkqbShkUliktsrlDPwPRH3gDsCYPyQjMluMwjZvchsF3GXXlNyIb+waV7aSqbZrwyXpPpNCr1pbfg1c24wlfklW+2qGScExCYloIyF5Hyso9HvMOhjDgyXow/5IR93mVWlF/rViMGVERmSMIcZ89XpzHqd4dAzry5FUFc6FbHBL2QkKc7VikCCwRg24x4HioTHwzOFUFJ/KubFkLxfFCMWYblXAY0zHA0WsMQeS1WHXru9rY0Em5etVQbMZw71FSACy4KkxYV6v3uu0saTgNnuAsVGl5p12jcvDXytgrVYKMgmsUBNAqz6yovmZVYu2WicovyafHkpiRMYYCotkWlRXUh7ITrYXzmgn0hFc3dzo30oU+hM6X1BSI7LGxIVJ+DFVIZme/6/R3J+K+nqnwWJ3wmKsTSsn2bp+v0n598HXp0/N3K22xZoc9nDzU3Njc1SrBLJt+xZB4ZNA6nSfJuStvoT/SSBTsT+Wc7VKI5MY80wC54IpWiLghXMWYU9rlUxJ9zzjf74LGPFdCyGTtRuEJshXXZPyS+rxVFD+xrCfmCuBBDVMk8JBCflbu5GJEHKrRLn1GCetxPQf2i1AP7zloYsAAAAASUVORK5CYII=",mN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcElEQVR4nO2RMQqAMBAE5yGm9u2KkI+pmHxAm7M5QiBw6XZgqxumORBCCDFIAg6g2jKwznYTcAGv2203Hwpzj8bx3+5ioW7tCMXFQt3aEZ6B2LCbO8LmYqHuag/3xxNYXCzcTfbwYtsaodmuEEIImny615Rj1YkBLAAAAABJRU5ErkJggg==",ln=Ce(!1),pc=Ce("");function Dh(){const{user:t}=go(),{currentLanguage:e}=Vt(),n={EN:{"upload-failed":"Failed to upload file. Please try again.","post-failed":"Failed to create post. Please try again.","fetch-failed":"Failed to load posts. Please try again.","delete-failed":"Failed to delete post. Please try again.",unauthorized:"You must be logged in to perform this action.","file-too-large":"File size must be less than 10MB.","invalid-file-type":"Invalid file type. Only images, videos, and audio files are allowed."},VN:{"upload-failed":"Tải file lên thất bại. Vui lòng thử lại.","post-failed":"Tạo bài viết thất bại. Vui lòng thử lại.","fetch-failed":"Tải bài viết thất bại. Vui lòng thử lại.","delete-failed":"Xóa bài viết thất bại. Vui lòng thử lại.",unauthorized:"Bạn phải đăng nhập để thực hiện hành động này.","file-too-large":"Kích thước file phải nhỏ hơn 10MB.","invalid-file-type":"Loại file không hợp lệ. Chỉ cho phép ảnh, video và âm thanh."}},r=g=>{pc.value=n[e.value][g]||g},s=()=>{pc.value=""},i=g=>g.size>10*1024*1024?(r("file-too-large"),!1):!g.type.startsWith("image/")&&!g.type.startsWith("video/")&&!g.type.startsWith("audio/")?(r("invalid-file-type"),!1):!0,o=async g=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");if(!i(g))throw new Error("File validation failed");try{const _=`${Date.now()}_${g.name}`,A=sg(ig,`uploads/${t.value.uid}/${_}`),C=await G1(A,g);return{url:await z1(C.ref),fileName:_,fileType:g.type,fileSize:g.size,storagePath:C.ref.fullPath}}catch(_){throw console.error("File upload error:",_),r("upload-failed"),_}},l=async g=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{ln.value=!0,s();const _={userId:t.value.uid,userEmail:t.value.email,caption:g.caption||"",mediaUrl:g.mediaUrl||"",mediaType:g.mediaType||"",fileName:g.fileName||"",storagePath:g.storagePath||"",createdAt:uc(),updatedAt:uc(),likes:0,comments:0};return{id:(await UP(Gp(zo,"posts"),_)).id,..._}}catch(_){throw console.error("Create post error:",_),r("post-failed"),_}finally{ln.value=!1}},c=async(g,_="")=>{try{ln.value=!0,s();const A=await o(g),C={caption:_,mediaUrl:A.url,mediaType:A.fileType,fileName:A.fileName,storagePath:A.storagePath};return await l(C)}catch(A){throw console.error("Create post with file error:",A),A}},u=async(g=10)=>{try{ln.value=!0,s();const _=bP(Gp(zo,"posts"),CP("createdAt","desc"),SP(g)),A=await xP(_),C=[];return A.forEach(P=>{C.push({id:P.id,...P.data()})}),C}catch(_){throw console.error("Get posts error:",_),r("fetch-failed"),_}finally{ln.value=!1}},d=async(g,_=null)=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{if(ln.value=!0,s(),_)try{const A=sg(ig,_);await Q1(A)}catch(A){console.warn("Failed to delete file from storage:",A)}return await LP(Zc(zo,"posts",g)),!0}catch(A){throw console.error("Delete post error:",A),r("delete-failed"),A}finally{ln.value=!1}},p=async(g,_)=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{ln.value=!0,s();const A=Zc(zo,"posts",g),C={..._,updatedAt:uc()};return await MP(A,C),!0}catch(A){throw console.error("Update post error:",A),r("post-failed"),A}finally{ln.value=!1}};return{loading:Be(()=>ln.value),error:Be(()=>pc.value),uploadFile:o,createPost:l,createPostWithFile:c,getPosts:u,deletePost:d,updatePost:p,clearError:s,validateFile:i}}const _N={key:0,class:"loading-state"},yN={class:"loading-text"},vN={key:1,class:"error-state"},EN={class:"error-text"},AN={key:2,class:"empty-state"},wN={class:"empty-text"},TN={key:3,class:"single-post-container"},IN={class:"user-info"},RN={class:"username"},bN={class:"post-media-area"},CN=["src","alt"],SN=["src"],PN={key:2,class:"audio-preview"},kN={class:"audio-controls"},NN=["src"],ON={key:3,class:"file-info"},DN={class:"file-name"},VN={class:"controls"},xN=["disabled"],MN={key:0,src:hv,alt:"Loading",class:"control-icon loading"},LN={key:1,src:pN,alt:"Delete",class:"control-icon"},UN={class:"input-wrapper"},FN={key:4,class:"scroll-hint"},BN={__name:"HomeFeed",setup(t){const{getPosts:e,deletePost:n,loading:r,error:s,clearError:i}=Dh(),{user:o}=go(),{t:l,currentLanguage:c}=Vt(),u=Ce([]),d=Ce(null),p=Ce(0),g=Ce(!0),_=Ce(0),A=Ce(!1),C=Be(()=>u.value[p.value]||null);let P=null,x=null;const M=w=>{if(A.value||u.value.length<=1)return;w.preventDefault(),A.value=!0,P&&clearTimeout(P);const b=w.deltaY;b>0&&p.value<u.value.length-1?p.value++:b<0&&p.value>0&&p.value--,J(),P=setTimeout(()=>{A.value=!1},500)},L=w=>{_.value=w.touches[0].clientY},D=w=>{if(u.value.length<=1)return;const b=w.changedTouches[0].clientY,v=_.value-b;Math.abs(v)<50||(v>0&&p.value<u.value.length-1?p.value++:v<0&&p.value>0&&p.value--,J())},J=()=>{g.value=!1,x&&clearTimeout(x),x=setTimeout(()=>{g.value=!0},3e3)},K=async()=>{try{i();const w=await e(20);u.value=w,p.value=0}catch(w){console.error("Failed to load posts:",w)}},R=async w=>{if(!y(w)||d.value)return;const b=c.value==="EN"?"Are you sure you want to delete this post?":"Bạn có chắc chắn muốn xóa bài viết này?";if(confirm(b))try{d.value=w.id,await n(w.id,w.storagePath),u.value=u.value.filter(v=>v.id!==w.id),p.value>=u.value.length&&u.value.length>0&&(p.value=u.value.length-1)}catch(v){console.error("Failed to delete post:",v)}finally{d.value=null}},y=w=>o.value&&w&&w.userId===o.value.uid,I=w=>w!=null&&w.userEmail?y(w)?c.value==="EN"?"Me":"Tôi":w.userEmail.replace("@gmail.com",""):"",S=w=>{console.log("Like post:",w.id)};return Rr(()=>{K(),setTimeout(()=>{g.value=!0},1e3)}),za(()=>{P&&clearTimeout(P),x&&clearTimeout(x)}),(w,b)=>{var v,rt,It,je,Ae;return ie(),oe("div",{id:"container-home-feed",onWheel:M,onTouchstart:L,onTouchend:D},[Q(r)?(ie(),oe("div",_N,[b[2]||(b[2]=O("div",{class:"loading-spinner"},"⏳",-1)),O("div",yN,be(Q(l).loading||"Loading..."),1)])):Q(s)?(ie(),oe("div",vN,[O("div",EN,be(Q(s)),1),O("button",{class:"retry-button",onClick:K},be(Q(l).retry||"Retry"),1)])):u.value.length===0?(ie(),oe("div",AN,[b[3]||(b[3]=O("img",{src:cv,alt:"No posts",class:"empty-icon"},null,-1)),O("div",wN,be(Q(l).noPosts||"No posts yet"),1)])):C.value?(ie(),oe("div",TN,[O("div",IN,[b[4]||(b[4]=O("div",{class:"user-avatar"},null,-1)),O("span",RN,be(I(C.value)),1)]),O("div",bN,[(v=C.value.mediaType)!=null&&v.startsWith("image/")?(ie(),oe("img",{key:0,src:C.value.mediaUrl,alt:C.value.caption,class:"preview-media"},null,8,CN)):(rt=C.value.mediaType)!=null&&rt.startsWith("video/")?(ie(),oe("video",{key:1,src:C.value.mediaUrl,class:"preview-media",controls:""},null,8,SN)):(It=C.value.mediaType)!=null&&It.startsWith("audio/")?(ie(),oe("div",PN,[b[5]||(b[5]=O("div",{class:"audio-waveform"},[O("img",{src:uv,alt:"Sound",class:"voice-icon"})],-1)),O("div",kN,[O("audio",{src:C.value.mediaUrl,class:"audio-player",controls:""},null,8,NN)])])):C.value.mediaUrl?(ie(),oe("div",ON,[b[6]||(b[6]=O("div",{class:"file-icon"},"📄",-1)),O("div",DN,be(C.value.fileName||"File"),1)])):qr("",!0)]),O("div",VN,[y(C.value)?(ie(),oe("button",{key:0,class:"control-btn delete-btn",onClick:b[0]||(b[0]=Ee=>R(C.value)),disabled:d.value===C.value.id},[d.value===C.value.id?(ie(),oe("img",MN)):(ie(),oe("img",LN))],8,xN)):(ie(),oe("button",{key:1,class:"control-btn like-btn",onClick:b[1]||(b[1]=Ee=>S(C.value))},b[7]||(b[7]=[O("img",{src:gN,alt:"Like",class:"control-icon"},null,-1)]))),O("div",UN,[O("div",{class:ze(["caption-display",{"no-caption":!((je=C.value.caption)!=null&&je.trim())}])},be(((Ae=C.value.caption)==null?void 0:Ae.trim())||(Q(c)==="EN"?"No Caption":"Không có chú thích")),3)]),b[8]||(b[8]=O("button",{class:"control-btn option-btn"},[O("img",{src:mN,alt:"Options",class:"control-icon"})],-1))])])):qr("",!0),u.value.length>1?(ie(),oe("div",FN,[O("div",{class:ze(["scroll-arrow",{visible:g.value}])},be(p.value<u.value.length-1?"↓":"↑"),3)])):qr("",!0)],32)}}},jN=Gn(BN,[["__scopeId","data-v-dff6d439"]]);function as(){const t=Ce(1),e=Ce(0),n=Ce(0),r=Ce(!1),s=Ce(!1),i=()=>{s.value=window.innerWidth<=480},o=()=>{if(!s.value)return"";switch(t.value){case 0:return"show-left";case 1:return"";case 2:return"show-right";default:return""}},l=x=>{if(!s.value)return;const M=x.touches[0];e.value=M.clientX,n.value=M.clientY,r.value=!0},c=x=>{if(!s.value||!r.value)return;const M=x.touches[0],L=Math.abs(M.clientX-e.value),D=Math.abs(M.clientY-n.value);L>D&&L>30&&x.preventDefault()},u=x=>{if(!s.value||!r.value)return;const M=x.changedTouches[0],L=M.clientX-e.value,D=M.clientY-n.value;Math.abs(L)>Math.abs(D)&&Math.abs(L)>50&&(L>0?d():p()),r.value=!1},d=()=>{t.value=t.value>0?t.value-1:2},p=()=>{t.value=t.value<2?t.value+1:0},g=x=>{x>=0&&x<=2&&(t.value=x)},_=()=>{t.value=1},A=()=>{if(!s.value)return;const x=document.querySelector(".home-page, .login-page");x&&(x.addEventListener("touchstart",l,{passive:!1}),x.addEventListener("touchmove",c,{passive:!1}),x.addEventListener("touchend",u,{passive:!0}))},C=()=>{const x=document.querySelector(".home-page, .login-page");x&&(x.removeEventListener("touchstart",l),x.removeEventListener("touchmove",c),x.removeEventListener("touchend",u))},P=()=>{const x=s.value;i(),x!==s.value&&(t.value=1,s.value?A():C())};return Rr(()=>{i(),s.value&&A(),window.addEventListener("resize",P)}),za(()=>{C(),window.removeEventListener("resize",P)}),{currentView:t,isMobile:s,getContainerClass:o,swipeToPrevious:d,swipeToNext:p,swipeToView:g,resetToMain:_}}const qN={class:"container-left"},HN={class:"container-main"},$N={__name:"Home",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",qN,[ye(os)]),O("div",HN,[ye(jN)]),r[0]||(r[0]=O("div",{class:"container-right"},null,-1))],2)]))}},KN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2aTUsCQRjHf6e0Q2FQ2i0/TChBkUezzxBF38LsUBRE1z5CJeU3kOicL3Xq5RLVOVOcWHiEkFXXdcbdWfrDHxZWd57fzuzsPM8s/Cu6WgByQAkoA3XgC2iJneOanHN+swkkCIliwDZQATqAGtPOf26Aglxr6poF9oE3H8EP8iuwB8SnBbEGPGkE6PcjkDUJ4HT9sUGAfl9Iz2tVCrifIoQS3wFJXRBp6W4VkJsSw0RakmlUBewnYNkvRDyg4aSGDDNfU/RZCIJXfT7xM8WqkDrjFcLpvobGhnvSdb1Hry/Nfc13UDeIAna99MarBSAvox78bc0NmgJRwNYwkIpFIOVh+UTHIpA2MO8GkjPQmEkQBay7gRxaCHLgBlK2EOTSDaRpIUjdDeTTQpB3N5CWj+BMSXn0d6RBPqMytBoWgtQiPf2WLAQpRnqJkrBs0fgzaNHo6NYikGuGqGARSD4qqe4MI7RnAcjOKIher9RDDNIcp+KY1XwHdbkLrDKmTkMQuOrzET4Uk8KxComrXh7wQVoM0bZCigmVNpgGe3EDWEGTkgENs6psNhnZDO1OCeLc9N57xvBQq/uZYv0qJqX9F40Az/LGDuQLiJhUxctSix03+LasYvOTTK265eQGG1LGvJJ8+uPPRzXO8YOkp0VJiua0R/EvwqFfI80Y7+tuRdkAAAAASUVORK5CYII=",WN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0ElEQVR4nO2ZS2jUUBSGPx+l4hOh44yKC6sgiIrgpqIbURF3uhAEQVdWRMStC0FxVaTTEe1OcCFIQUHE11JFcOFjY20VBHXhG3xW1IqPkQN/4BLSmWSSZhKZD8JMknvvnJ//5Nx7M9CiRYv/hZnAAeAJcJMcsgQ4CYwAVR2PyQkTgA3AOeC3I8A7zJlMMwPoBoYDgvcOc2YWGWUR0AN8dAJ+BfQDL31CTpDB9NkEXAX+OIFeB7YAJWBQ117o86+emUwwXekz5AQ/CpwBVqhNwRHxCOjV92tkgE6lzwdHwGvgCNDhtCv4RMwHnul8cxPjZ21A9bkP7AQm+9oWfCIsvbbq3OaPiWkHP0WBPvSljwnqGqNPkAjjhq7tb3b6vFH6WKBEFLFMD/iIZvbU0udXQPq01ek7lgjjlK4fJ4X08YKw46cErQ45Ri0Rs4Fv41ly5ylV3jsC3iqlrMKQgAjjoO5dIaX06ZY7JChiEvBc923SjE270udBQPqsaXDMeiKMbUmV3KD0eaf0WRBj3DAijFtqs48Y9Psmr3tyxdwhIRGDNcrxSrX5rNVww3jLgapSainxCSvCOK12FWJS0iDfNaCtTAdiCIoiogD80G8ubvD3AgftUS33BF2W9Uk/Ex6H1PZSzNgTFRRVhC0gvX3HxgTjjyUoqghju9PeNl3jTj1BjYgwbqvPXlKmCJR9ggYiPNguq9Tnk3aQTaFDk+cXp2xHcQJtc62fbWmbzhzgvAIyZ6I4OypHO8kI5s5XBbU8ZJ/DEn+RjNEbwZU2573VejJGUQUgjCs7JGI4rZIblXJIV+6o3R4ySjGEK11OyZ1GhinXceWs7h8j4xRruDJXO03b9ywkB/SN4cpRXb9ATigFuNKuty4mZB05os/nyi6dD2W15IZ15a6E7CaHVJx3AFW9G55KDik5y/2q9jO5pSIRuSm5tVx5qv/MW7RoQbr8A2pLKcu/QDhRAAAAAElFTkSuQmCC",GN={id:"container-create-status"},zN={class:"user-info"},QN={class:"username"},YN={key:0,class:"upload-empty"},XN={key:1,class:"file-preview"},JN=["src"],ZN=["src"],eO={key:2,class:"audio-preview"},tO={class:"audio-controls"},nO=["src"],rO={key:3,class:"file-info"},sO={class:"file-name"},iO={class:"controls"},oO=["disabled"],aO={class:"input-wrapper"},lO=["placeholder","disabled"],cO=["disabled"],uO={key:0,src:hv,alt:"Loading",class:"control-icon loading"},hO={key:1,src:WN,alt:"Post",class:"control-icon"},dO={key:0,class:"error-message"},fO={key:1,class:"success-message"},pO={__name:"StatusCreation",setup(t){const e=el(),{t:n,currentLanguage:r}=Vt(),{createPostWithFile:s,loading:i,error:o,clearError:l}=Dh(),c=Ce(null),u=Ce(""),d=Ce(null),p=Ce(""),g=Ce(""),_=Be(()=>!!d.value&&!i.value),A=Be(()=>{var K;return(K=d.value)==null?void 0:K.type.startsWith("image/")}),C=Be(()=>{var K;return(K=d.value)==null?void 0:K.type.startsWith("video/")}),P=Be(()=>{var K;return(K=d.value)==null?void 0:K.type.startsWith("audio/")}),x=()=>{var K;i.value||(K=c.value)==null||K.click()},M=K=>{const R=K.target.files[0];R&&(d.value=R,p.value&&URL.revokeObjectURL(p.value),p.value=URL.createObjectURL(R),l())},L=()=>{i.value||J("/home")},D=async()=>{if(!(!d.value||i.value))try{l(),g.value="",await s(d.value,u.value),g.value=r.value==="EN"?"Post created successfully!":"Tạo bài viết thành công!",setTimeout(()=>J("/home"),1500)}catch(K){console.error("Failed to create post:",K)}},J=K=>{p.value&&URL.revokeObjectURL(p.value),d.value=null,u.value="",g.value="",l(),e.push(K)};return(K,R)=>(ie(),oe("div",GN,[O("div",zN,[R[1]||(R[1]=O("div",{class:"avatar"},null,-1)),O("span",QN,be(Q(n).me),1)]),O("div",{class:ze(["upload-area",{disabled:Q(i)}]),onClick:x},[d.value?(ie(),oe("div",XN,[A.value?(ie(),oe("img",{key:0,src:p.value,alt:"Preview",class:"preview-media"},null,8,JN)):C.value?(ie(),oe("video",{key:1,src:p.value,class:"preview-media",controls:""},null,8,ZN)):P.value?(ie(),oe("div",eO,[R[3]||(R[3]=O("div",{class:"audio-waveform"},[O("img",{src:uv,alt:"Sound",class:"voice-icon"})],-1)),O("div",tO,[O("audio",{src:p.value,class:"audio-player",controls:""},null,8,nO)])])):(ie(),oe("div",rO,[R[4]||(R[4]=O("div",{class:"file-icon"},"📄",-1)),O("div",sO,be(d.value.name),1)]))])):(ie(),oe("div",YN,R[2]||(R[2]=[O("img",{src:KN,alt:"Upload",class:"plus-icon"},null,-1)]))),O("input",{type:"file",ref_key:"fileInput",ref:c,accept:"image/*,video/*,audio/*",style:{display:"none"},onChange:M},null,544)],2),O("div",iO,[O("button",{class:"control-btn close-btn",onClick:L,disabled:Q(i)},"×",8,oO),O("div",aO,[Cn(O("input",{type:"text","onUpdate:modelValue":R[0]||(R[0]=y=>u.value=y),placeholder:Q(n).statusPlaceholder,class:"caption-input",disabled:Q(i)},null,8,lO),[[Fi,u.value]])]),O("button",{class:ze(["control-btn post-btn",{disabled:!_.value||Q(i)}]),onClick:D,disabled:!_.value||Q(i)},[Q(i)?(ie(),oe("img",uO)):(ie(),oe("img",hO))],10,cO)]),Q(o)?(ie(),oe("div",dO,be(Q(o)),1)):qr("",!0),g.value?(ie(),oe("div",fO,be(g.value),1)):qr("",!0)]))}},gO=Gn(pO,[["__scopeId","data-v-acef362c"]]),mO={class:"container-left"},_O={class:"container-main"},yO={__name:"Status",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",mO,[ye(os)]),O("div",_O,[ye(gO)]),r[0]||(r[0]=O("div",{class:"container-right"},null,-1))],2)]))}},vO={class:"container-left"},EO={__name:"Profile",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",vO,[ye(os)]),r[0]||(r[0]=O("div",{class:"container-main"},null,-1)),r[1]||(r[1]=O("div",{class:"container-right"},null,-1))],2)]))}},AO={class:"container-left"},wO={__name:"Friend",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",AO,[ye(os)]),r[0]||(r[0]=O("div",{class:"container-main"},null,-1)),r[1]||(r[1]=O("div",{class:"container-right"},null,-1))],2)]))}},TO={class:"container-left"},IO={__name:"Mess",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",TO,[ye(os)]),r[0]||(r[0]=O("div",{class:"container-main"},null,-1)),r[1]||(r[1]=O("div",{class:"container-right"},null,-1))],2)]))}},RO={class:"container-left"},bO={__name:"Notification",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",RO,[ye(os)]),r[0]||(r[0]=O("div",{class:"container-main"},null,-1)),r[1]||(r[1]=O("div",{class:"container-right"},null,-1))],2)]))}},CO={id:"container-discover-feed"},SO={key:0,class:"loading-state"},PO={class:"loading-text"},kO={key:1,class:"error-state"},NO={class:"error-text"},OO={key:2,class:"empty-state"},DO={class:"empty-text"},VO={key:3,class:"media-grid"},xO=["onClick"],MO=["src","alt"],LO={key:1,class:"video-thumbnail"},UO=["src"],FO={key:2,class:"audio-thumbnail"},BO={key:3,class:"file-thumbnail"},jO={key:4,class:"text-thumbnail"},qO={__name:"DiscoverFeed",setup(t){const{getPosts:e,loading:n,error:r,clearError:s}=Dh(),{t:i}=Vt(),o=Ce([]),l=async()=>{try{s();const u=await e(50);o.value=u}catch(u){console.error("Failed to load posts:",u)}},c=u=>{console.log("Open post:",u.id)};return Rr(()=>{l()}),(u,d)=>(ie(),oe("div",CO,[Q(n)?(ie(),oe("div",SO,[d[0]||(d[0]=O("div",{class:"loading-spinner"},"⏳",-1)),O("div",PO,be(Q(i).loading||"Loading..."),1)])):Q(r)?(ie(),oe("div",kO,[O("div",NO,be(Q(r)),1),O("button",{class:"retry-button",onClick:l},be(Q(i).retry||"Retry"),1)])):o.value.length===0?(ie(),oe("div",OO,[d[1]||(d[1]=O("img",{src:cv,alt:"No posts",class:"empty-icon"},null,-1)),O("div",DO,be(Q(i).noPosts||"No posts yet"),1)])):(ie(),oe("div",VO,[(ie(!0),oe(hn,null,HE(o.value,p=>{var g,_,A;return ie(),oe("div",{key:p.id,class:"media-item",onClick:C=>c(p)},[(g=p.mediaType)!=null&&g.startsWith("image/")?(ie(),oe("img",{key:0,src:p.mediaUrl,alt:p.caption,class:"media-thumbnail"},null,8,MO)):(_=p.mediaType)!=null&&_.startsWith("video/")?(ie(),oe("div",LO,[O("video",{src:p.mediaUrl,class:"media-thumbnail",muted:""},null,8,UO),d[2]||(d[2]=O("div",{class:"video-overlay"},[O("div",{class:"play-icon"},"▶")],-1))])):(A=p.mediaType)!=null&&A.startsWith("audio/")?(ie(),oe("div",FO,d[3]||(d[3]=[O("div",{class:"audio-icon"},"🎵",-1)]))):p.mediaUrl?(ie(),oe("div",BO,d[4]||(d[4]=[O("div",{class:"file-icon"},"📄",-1)]))):(ie(),oe("div",jO,d[5]||(d[5]=[O("div",{class:"text-icon"},"💬",-1)])))],8,xO)}),128))]))]))}},HO=Gn(qO,[["__scopeId","data-v-ede5d518"]]),$O={class:"container-left"},KO={class:"container-main"},WO={__name:"Discover",setup(t){const{getContainerClass:e}=as();return(n,r)=>(ie(),oe("div",null,[ye(ss),ye(is),O("div",{class:ze(["home-page",Q(e)()])},[O("div",$O,[ye(os)]),O("div",KO,[ye(HO)]),r[0]||(r[0]=O("div",{class:"container-right"},null,-1))],2)]))}},GO=[{path:"/",component:Yk,meta:{requiresGuest:!0}},{path:"/home",component:$N,meta:{requiresAuth:!0}},{path:"/status",component:yO,meta:{requiresAuth:!0}},{path:"/profile",component:EO,meta:{requiresAuth:!0}},{path:"/friend",component:wO,meta:{requiresAuth:!0}},{path:"/mess",component:IO,meta:{requiresAuth:!0}},{path:"/notification",component:bO,meta:{requiresAuth:!0}},{path:"/discover",component:WO,meta:{requiresAuth:!0}}],dv=uT({history:Fw(),routes:GO});dv.beforeEach(async(t,e,n)=>{const r=t.matched.some(l=>l.meta.requiresAuth),s=t.matched.some(l=>l.meta.requiresGuest),{isLoggedIn:i,isInitialized:o}=go();o.value||await new Promise(l=>{const c=jr(o,u=>{u&&(c(),l())})}),r&&!i.value?n("/"):s&&i.value?n("/home"):n()});iw(hk).use(dv).mount("#app");
