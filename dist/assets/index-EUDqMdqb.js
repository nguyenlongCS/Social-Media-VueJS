(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},gs=[],pn=()=>{},Nv=()=>!1,Fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tu=t=>t.startsWith("onUpdate:"),Et=Object.assign,nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ov=Object.prototype.hasOwnProperty,Ne=(t,e)=>Ov.call(t,e),le=Array.isArray,ms=t=>Xi(t)==="[object Map]",Ls=t=>Xi(t)==="[object Set]",Td=t=>Xi(t)==="[object Date]",pe=t=>typeof t=="function",Ze=t=>typeof t=="string",vn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",rg=t=>(Me(t)||pe(t))&&pe(t.then)&&pe(t.catch),sg=Object.prototype.toString,Xi=t=>sg.call(t),Dv=t=>Xi(t).slice(8,-1),ig=t=>Xi(t)==="[object Object]",ru=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vv=/-(\w)/g,Kt=Ba(t=>t.replace(Vv,(e,n)=>n?n.toUpperCase():"")),xv=/\B([A-Z])/g,Jr=Ba(t=>t.replace(xv,"-$1").toLowerCase()),$a=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ml=Ba(t=>t?`on${$a(t)}`:""),cr=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},og=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},la=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wd;const ja=()=>wd||(wd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function su(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Fv(r):su(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Me(t))return t}const Mv=/;(?![^(]*\))/g,Lv=/:([^]+)/,Uv=/\/\*[^]*?\*\//g;function Fv(t){const e={};return t.replace(Uv,"").split(Mv).forEach(n=>{if(n){const r=n.split(Lv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xt(t){let e="";if(Ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=xt(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$v=eu(Bv);function ag(t){return!!t||t===""}function jv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=qr(t[r],e[r]);return n}function qr(t,e){if(t===e)return!0;let n=Td(t),r=Td(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vn(t),r=vn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?jv(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!qr(t[o],e[o]))return!1}}return String(t)===String(e)}function iu(t,e){return t.findIndex(n=>qr(n,e))}const lg=t=>!!(t&&t.__v_isRef===!0),be=t=>Ze(t)?t:t==null?"":le(t)||Me(t)&&(t.toString===sg||!pe(t.toString))?lg(t)?be(t.value):JSON.stringify(t,cg,2):String(t),cg=(t,e)=>lg(e)?cg(t,e.value):ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ll(r,i)+" =>"]=s,n),{})}:Ls(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ll(n))}:vn(e)?Ll(e):Me(e)&&!le(e)&&!ig(e)?String(e):e,Ll=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class qv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){this._on>0&&--this._on===0&&(Pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Hv(){return Pt}let xe;const Ul=new WeakSet;class ug{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ul.has(this)&&(Ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Id(this),fg(this);const e=xe,n=Zt;xe=this,Zt=!0;try{return this.fn()}finally{pg(this),xe=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lu(e);this.deps=this.depsTail=void 0,Id(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dc(this)&&this.run()}get dirty(){return dc(this)}}let hg=0,yi,vi;function dg(t,e=!1){if(t.flags|=8,e){t.next=vi,vi=t;return}t.next=yi,yi=t}function ou(){hg++}function au(){if(--hg>0)return;if(vi){let e=vi;for(vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yi;){let e=yi;for(yi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function fg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),lu(r),Wv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi)||(t.globalVersion=Oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dc(t))))return;t.flags|=2;const e=t.dep,n=xe,r=Zt;xe=t,Zt=!0;try{fg(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{xe=n,Zt=r,pg(t),t.flags&=-3}}function lu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)lu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const mg=[];function Un(){mg.push(Zt),Zt=!1}function Fn(){const t=mg.pop();Zt=t===void 0?!0:t}function Id(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=xe;xe=void 0;try{e()}finally{xe=n}}}let Oi=0;class zv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!xe||!Zt||xe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==xe)n=this.activeLink=new zv(xe,this),xe.deps?(n.prevDep=xe.depsTail,xe.depsTail.nextDep=n,xe.depsTail=n):xe.deps=xe.depsTail=n,_g(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=xe.depsTail,n.nextDep=void 0,xe.depsTail.nextDep=n,xe.depsTail=n,xe.deps===n&&(xe.deps=r)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){ou();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{au()}}}function _g(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_g(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const fc=new WeakMap,Fr=Symbol(""),pc=Symbol(""),Di=Symbol("");function mt(t,e,n){if(Zt&&xe){let r=fc.get(t);r||fc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new cu),s.map=r,s.key=n),s.track()}}function Cn(t,e,n,r,s,i){const o=fc.get(t);if(!o){Oi++;return}const l=c=>{c&&c.trigger()};if(ou(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&ru(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Di||!vn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Di)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Fr)),ms(t)&&l(o.get(pc)));break;case"delete":c||(l(o.get(Fr)),ms(t)&&l(o.get(pc)));break;case"set":ms(t)&&l(o.get(Fr));break}}au()}function as(t){const e=ke(t);return e===t?e:(mt(e,"iterate",Di),Wt(t)?e:e.map(at))}function qa(t){return mt(t=ke(t),"iterate",Di),t}const Gv={__proto__:null,[Symbol.iterator](){return Fl(this,Symbol.iterator,at)},concat(...t){return as(this).concat(...t.map(e=>le(e)?as(e):e))},entries(){return Fl(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return bn(this,"every",t,e,void 0,arguments)},filter(t,e){return bn(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return bn(this,"find",t,e,at,arguments)},findIndex(t,e){return bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return bn(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Bl(this,"includes",t)},indexOf(...t){return Bl(this,"indexOf",t)},join(t){return as(this).join(t)},lastIndexOf(...t){return Bl(this,"lastIndexOf",t)},map(t,e){return bn(this,"map",t,e,void 0,arguments)},pop(){return oi(this,"pop")},push(...t){return oi(this,"push",t)},reduce(t,...e){return Ad(this,"reduce",t,e)},reduceRight(t,...e){return Ad(this,"reduceRight",t,e)},shift(){return oi(this,"shift")},some(t,e){return bn(this,"some",t,e,void 0,arguments)},splice(...t){return oi(this,"splice",t)},toReversed(){return as(this).toReversed()},toSorted(t){return as(this).toSorted(t)},toSpliced(...t){return as(this).toSpliced(...t)},unshift(...t){return oi(this,"unshift",t)},values(){return Fl(this,"values",at)}};function Fl(t,e,n){const r=qa(t),s=r[e]();return r!==t&&!Wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Kv=Array.prototype;function bn(t,e,n,r,s,i){const o=qa(t),l=o!==t&&!Wt(t),c=o[e];if(c!==Kv[e]){const p=c.apply(t,i);return l?at(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,at(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function Ad(t,e,n,r){const s=qa(t);let i=n;return s!==t&&(Wt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,at(l),c,t)}),s[e](i,...r)}function Bl(t,e,n){const r=ke(t);mt(r,"iterate",Di);const s=r[e](...n);return(s===-1||s===!1)&&du(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function oi(t,e,n=[]){Un(),ou();const r=ke(t)[e].apply(t,n);return au(),Fn(),r}const Qv=eu("__proto__,__v_isRef,__isVue"),yg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn));function Yv(t){vn(t)||(t=String(t));const e=ke(this);return mt(e,"has",t),e.hasOwnProperty(t)}class vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?oE:Ig:i?wg:Tg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=Gv[n]))return c;if(n==="hasOwnProperty")return Yv}const l=Reflect.get(e,n,vt(e)?e:r);return(vn(n)?yg.has(n):Qv(n))||(s||mt(e,"get",n),i)?l:vt(l)?o&&ru(n)?l:l.value:Me(l)?s?ca(l):bs(l):l}}class Eg extends vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gr(i);if(!Wt(r)&&!gr(r)&&(i=ke(i),r=ke(r)),!le(e)&&vt(i)&&!vt(r))return c?!1:(i.value=r,!0)}const o=le(e)&&ru(n)?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,vt(e)?e:s);return e===ke(s)&&(o?cr(r,i)&&Cn(e,"set",n,r):Cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!yg.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",le(e)?"length":Fr),Reflect.ownKeys(e)}}class Xv extends vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jv=new Eg,Zv=new Xv,eE=new Eg(!0);const gc=t=>t,Co=t=>Reflect.getPrototypeOf(t);function tE(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=ms(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?gc:e?ua:at;return!e&&mt(i,"iterate",c?pc:Fr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function ko(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function nE(t,e){const n={get(s){const i=this.__v_raw,o=ke(i),l=ke(s);t||(cr(s,l)&&mt(o,"get",s),mt(o,"get",l));const{has:c}=Co(o),u=e?gc:t?ua:at;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&mt(ke(s),"iterate",Fr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=ke(i),l=ke(s);return t||(cr(s,l)&&mt(o,"has",s),mt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ke(l),u=e?gc:t?ua:at;return!t&&mt(c,"iterate",Fr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return Et(n,t?{add:ko("add"),set:ko("set"),delete:ko("delete"),clear:ko("clear")}:{add(s){!e&&!Wt(s)&&!gr(s)&&(s=ke(s));const i=ke(this);return Co(i).has.call(i,s)||(i.add(s),Cn(i,"add",s,s)),this},set(s,i){!e&&!Wt(i)&&!gr(i)&&(i=ke(i));const o=ke(this),{has:l,get:c}=Co(o);let u=l.call(o,s);u||(s=ke(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Cn(o,"set",s,i):Cn(o,"add",s,i),this},delete(s){const i=ke(this),{has:o,get:l}=Co(i);let c=o.call(i,s);c||(s=ke(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Cn(i,"delete",s,void 0),u},clear(){const s=ke(this),i=s.size!==0,o=s.clear();return i&&Cn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=tE(s,t,e)}),n}function uu(t,e){const n=nE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const rE={get:uu(!1,!1)},sE={get:uu(!1,!0)},iE={get:uu(!0,!1)};const Tg=new WeakMap,wg=new WeakMap,Ig=new WeakMap,oE=new WeakMap;function aE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lE(t){return t.__v_skip||!Object.isExtensible(t)?0:aE(Dv(t))}function bs(t){return gr(t)?t:hu(t,!1,Jv,rE,Tg)}function Ag(t){return hu(t,!1,eE,sE,wg)}function ca(t){return hu(t,!0,Zv,iE,Ig)}function hu(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=lE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function _s(t){return gr(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Wt(t){return!!(t&&t.__v_isShallow)}function du(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function cE(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&og(t,"__v_skip",!0),t}const at=t=>Me(t)?bs(t):t,ua=t=>Me(t)?ca(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function Fe(t){return bg(t,!1)}function uE(t){return bg(t,!0)}function bg(t,e){return vt(t)?t:new hE(t,e)}class hE{constructor(e,n){this.dep=new cu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Wt(e)||gr(e);e=r?e:ke(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function te(t){return vt(t)?t.value:t}const dE={get:(t,e,n)=>e==="__v_raw"?t:te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Rg(t){return _s(t)?t:new Proxy(t,dE)}class fE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new cu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return dg(this,!0),!0}get value(){const e=this.dep.track();return gg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function pE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new fE(r,s,n)}const No={},ha=new WeakMap;let xr;function gE(t,e=!1,n=xr){if(n){let r=ha.get(n);r||ha.set(n,r=[]),r.push(t)}}function mE(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=O=>s?O:Wt(O)||s===!1||s===0?kn(O,1):kn(O);let d,p,g,_,I=!1,P=!1;if(vt(t)?(p=()=>t.value,I=Wt(t)):_s(t)?(p=()=>u(t),I=!0):le(t)?(P=!0,I=t.some(O=>_s(O)||Wt(O)),p=()=>t.map(O=>{if(vt(O))return O.value;if(_s(O))return u(O);if(pe(O))return c?c(O,2):O()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Un();try{g()}finally{Fn()}}const O=xr;xr=d;try{return c?c(t,3,[_]):t(_)}finally{xr=O}}:p=pn,e&&s){const O=p,J=s===!0?1/0:s;p=()=>kn(O(),J)}const C=Hv(),L=()=>{d.stop(),C&&C.active&&nu(C.effects,d)};if(i&&e){const O=e;e=(...J)=>{O(...J),L()}}let M=P?new Array(t.length).fill(No):No;const V=O=>{if(!(!(d.flags&1)||!d.dirty&&!O))if(e){const J=d.run();if(s||I||(P?J.some((W,A)=>cr(W,M[A])):cr(J,M))){g&&g();const W=xr;xr=d;try{const A=[J,M===No?void 0:P&&M[0]===No?[]:M,_];M=J,c?c(e,3,A):e(...A)}finally{xr=W}}}else d.run()};return l&&l(V),d=new ug(p),d.scheduler=o?()=>o(V,!1):V,_=O=>gE(O,!1,d),g=d.onStop=()=>{const O=ha.get(d);if(O){if(c)c(O,4);else for(const J of O)J();ha.delete(d)}},e?r?V(!0):M=d.run():o?o(V.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function kn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,vt(t))kn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Ls(t)||ms(t))t.forEach(r=>{kn(r,e,n)});else if(ig(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ji(t,e,n,r){try{return r?t(...r):t()}catch(s){Ha(s,e,n)}}function En(t,e,n,r){if(pe(t)){const s=Ji(t,e,n,r);return s&&rg(s)&&s.catch(i=>{Ha(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function Ha(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Un(),Ji(i,null,10,[t,c,u]),Fn();return}}_E(t,n,s,r,o)}function _E(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let cn=-1;const ys=[];let nr=null,cs=0;const Sg=Promise.resolve();let da=null;function fu(t){const e=da||Sg;return t?e.then(this?t.bind(this):t):e}function yE(t){let e=cn+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=Vi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function pu(t){if(!(t.flags&1)){const e=Vi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=Vi(n)?Rt.push(t):Rt.splice(yE(e),0,t),t.flags|=1,Pg()}}function Pg(){da||(da=Sg.then(kg))}function vE(t){le(t)?ys.push(...t):nr&&t.id===-1?nr.splice(cs+1,0,t):t.flags&1||(ys.push(t),t.flags|=1),Pg()}function bd(t,e,n=cn+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Cg(t){if(ys.length){const e=[...new Set(ys)].sort((n,r)=>Vi(n)-Vi(r));if(ys.length=0,nr){nr.push(...e);return}for(nr=e,cs=0;cs<nr.length;cs++){const n=nr[cs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,cs=0}}const Vi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kg(t){try{for(cn=0;cn<Rt.length;cn++){const e=Rt[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<Rt.length;cn++){const e=Rt[cn];e&&(e.flags&=-2)}cn=-1,Rt.length=0,Cg(),da=null,(Rt.length||ys.length)&&kg()}}let Mt=null,Ng=null;function fa(t){const e=Mt;return Mt=t,Ng=t&&t.type.__scopeId||null,e}function EE(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xd(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&xd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sn(t,e){if(Mt===null)return t;const n=Ka(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Un(),En(c,n,8,[t.el,l,t,e]),Fn())}}const TE=Symbol("_vte"),wE=t=>t.__isTeleport;function gu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,gu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Og(t,e){return pe(t)?Et({name:t.name},e,{setup:t}):t}function Dg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pa(t,e,n,r,s=!1){if(le(t)){t.forEach((I,P)=>pa(I,e&&(le(e)?e[P]:e),n,r,s));return}if(Ei(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ka(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Ve?l.refs={}:l.refs,p=l.setupState,g=ke(p),_=p===Ve?()=>!1:I=>Ne(g,I);if(u!=null&&u!==c&&(Ze(u)?(d[u]=null,_(u)&&(p[u]=null)):vt(u)&&(u.value=null)),pe(c))Ji(c,l,12,[o,d]);else{const I=Ze(c),P=vt(c);if(I||P){const C=()=>{if(t.f){const L=I?_(c)?p[c]:d[c]:c.value;s?le(L)&&nu(L,i):le(L)?L.includes(i)||L.push(i):I?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else I?(d[c]=o,_(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,Vt(C,n)):C()}}}ja().requestIdleCallback;ja().cancelIdleCallback;const Ei=t=>!!t.type.__asyncLoader,Vg=t=>t.type.__isKeepAlive;function IE(t,e){xg(t,"a",e)}function AE(t,e){xg(t,"da",e)}function xg(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Vg(s.parent.vnode)&&bE(r,e,n,s),s=s.parent}}function bE(t,e,n,r){const s=Wa(e,t,r,!0);Mg(()=>{nu(r[e],s)},n)}function Wa(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Un();const l=Zi(n),c=En(e,n,t,o);return l(),Fn(),c});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=yt)=>{(!Mi||t==="sp")&&Wa(t,(...r)=>e(...r),n)},RE=Hn("bm"),Us=Hn("m"),SE=Hn("bu"),PE=Hn("u"),CE=Hn("bum"),Mg=Hn("um"),kE=Hn("sp"),NE=Hn("rtg"),OE=Hn("rtc");function DE(t,e=yt){Wa("ec",t,e)}const VE="components";function xE(t,e){return LE(VE,t,!0,e)||t}const ME=Symbol.for("v-ndc");function LE(t,e,n=!0,r=!1){const s=Mt||yt;if(s){const i=s.type;{const l=RT(i,!1);if(l&&(l===e||l===Kt(e)||l===$a(Kt(e))))return i}const o=Rd(s[t]||i[t],e)||Rd(s.appContext[t],e);return!o&&r?i:o}}function Rd(t,e){return t&&(t[e]||t[Kt(e)]||t[$a(Kt(e))])}function UE(t,e,n,r){let s;const i=n,o=le(t);if(o||Ze(t)){const l=o&&_s(t);let c=!1,u=!1;l&&(c=!Wt(t),u=gr(t),t=qa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?ua(at(t[d])):at(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const mc=t=>t?nm(t)?Ka(t):mc(t.parent):null,Ti=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mc(t.parent),$root:t=>mc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ug(t),$forceUpdate:t=>t.f||(t.f=()=>{pu(t.update)}),$nextTick:t=>t.n||(t.n=fu.bind(t.proxy)),$watch:t=>iT.bind(t)}),$l=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Ne(t,e),FE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if($l(r,e))return o[e]=1,r[e];if(s!==Ve&&Ne(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Ve&&Ne(n,e))return o[e]=4,n[e];_c&&(o[e]=0)}}const d=Ti[e];let p,g;if(d)return e==="$attrs"&&mt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&Ne(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Ne(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return $l(s,e)?(s[e]=n,!0):r!==Ve&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Ve&&Ne(t,o)||$l(e,o)||(l=i[0])&&Ne(l,o)||Ne(r,o)||Ne(Ti,o)||Ne(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Sd(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _c=!0;function BE(t){const e=Ug(t),n=t.proxy,r=t.ctx;_c=!1,e.beforeCreate&&Pd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:I,activated:P,deactivated:C,beforeDestroy:L,beforeUnmount:M,destroyed:V,unmounted:O,render:J,renderTracked:W,renderTriggered:A,errorCaptured:y,serverPrefetch:w,expose:R,inheritAttrs:b,components:S,directives:v,filters:wt}=e;if(u&&$E(u,r,null),o)for(const we in o){const ve=o[we];pe(ve)&&(r[we]=ve.bind(n))}if(s){const we=s.call(n,n);Me(we)&&(t.data=bs(we))}if(_c=!0,i)for(const we in i){const ve=i[we],Ot=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):pn,Yt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):pn,jt=ze({get:Ot,set:Yt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>jt.value,set:Be=>jt.value=Be})}if(l)for(const we in l)Lg(l[we],r,n,we);if(c){const we=pe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ve=>{Ko(ve,we[ve])})}d&&Pd(d,t,"c");function Ye(we,ve){le(ve)?ve.forEach(Ot=>we(Ot.bind(n))):ve&&we(ve.bind(n))}if(Ye(RE,p),Ye(Us,g),Ye(SE,_),Ye(PE,I),Ye(IE,P),Ye(AE,C),Ye(DE,y),Ye(OE,W),Ye(NE,A),Ye(CE,M),Ye(Mg,O),Ye(kE,w),le(R))if(R.length){const we=t.exposed||(t.exposed={});R.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:Ot=>n[ve]=Ot})})}else t.exposed||(t.exposed={});J&&t.render===pn&&(t.render=J),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),v&&(t.directives=v),w&&Dg(t)}function $E(t,e,n=pn){le(t)&&(t=yc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Pd(t,e,n){En(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lg(t,e,n,r){let s=r.includes(".")?Xg(n,r):()=>n[r];if(Ze(t)){const i=e[t];pe(i)&&Br(s,i)}else if(pe(t))Br(s,t.bind(n));else if(Me(t))if(le(t))t.forEach(i=>Lg(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Br(s,i,t)}}function Ug(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ga(c,u,o,!0)),ga(c,e,o)),Me(e)&&i.set(e,c),c}function ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ga(t,i,n,!0),s&&s.forEach(o=>ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=jE[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const jE={data:Cd,props:kd,emits:kd,methods:hi,computed:hi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:hi,directives:hi,watch:HE,provide:Cd,inject:qE};function Cd(t,e){return e?t?function(){return Et(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function qE(t,e){return hi(yc(t),yc(e))}function yc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function hi(t,e){return t?Et(Object.create(null),t,e):e}function kd(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:Et(Object.create(null),Sd(t),Sd(e??{})):e}function HE(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Fg(){return{app:null,config:{isNativeTag:Nv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WE=0;function zE(t,e){return function(r,s=null){pe(r)||(r=Et({},r)),s!=null&&!Me(s)&&(s=null);const i=Fg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:WE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:PT,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const _=u._ceVNode||Pe(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,d,g),c=!0,u._container=d,d.__vue_app__=u,Ka(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(En(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=vs;vs=u;try{return d()}finally{vs=p}}};return u}}let vs=null;function Ko(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=yt||Mt;if(r||vs){let s=vs?vs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const Bg={},$g=()=>Object.create(Bg),jg=t=>Object.getPrototypeOf(t)===Bg;function GE(t,e,n,r=!1){const s={},i=$g();t.propsDefaults=Object.create(null),qg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ag(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function KE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(za(t.emitsOptions,g))continue;const _=e[g];if(c)if(Ne(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const I=Kt(g);s[I]=vc(c,l,I,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{qg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Ne(e,p)&&((d=Jr(p))===p||!Ne(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=vc(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],u=!0)}u&&Cn(t.attrs,"set","")}function qg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(_i(c))continue;const u=e[c];let d;s&&Ne(s,d=Kt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:za(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=ke(n),u=l||Ve;for(let d=0;d<i.length;d++){const p=i[d];n[p]=vc(s,c,p,u[p],t,!Ne(u,p))}}return o}function vc(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Zi(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Jr(n))&&(r=!0))}return r}const QE=new WeakMap;function Hg(t,e,n=!1){const r=n?QE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,_]=Hg(p,e,!0);Et(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Me(t)&&r.set(t,gs),gs;if(le(i))for(let d=0;d<i.length;d++){const p=Kt(i[d]);Nd(p)&&(o[p]=Ve)}else if(i)for(const d in i){const p=Kt(d);if(Nd(p)){const g=i[d],_=o[p]=le(g)||pe(g)?{type:g}:Et({},g),I=_.type;let P=!1,C=!0;if(le(I))for(let L=0;L<I.length;++L){const M=I[L],V=pe(M)&&M.name;if(V==="Boolean"){P=!0;break}else V==="String"&&(C=!1)}else P=pe(I)&&I.name==="Boolean";_[0]=P,_[1]=C,(P||Ne(_,"default"))&&l.push(p)}}const u=[o,l];return Me(t)&&r.set(t,u),u}function Nd(t){return t[0]!=="$"&&!_i(t)}const mu=t=>t[0]==="_"||t==="$stable",_u=t=>le(t)?t.map(dn):[dn(t)],YE=(t,e,n)=>{if(e._n)return e;const r=EE((...s)=>_u(e(...s)),n);return r._c=!1,r},Wg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(mu(s))continue;const i=t[s];if(pe(i))e[s]=YE(s,i,r);else if(i!=null){const o=_u(i);e[s]=()=>o}}},zg=(t,e)=>{const n=_u(e);t.slots.default=()=>n},Gg=(t,e,n)=>{for(const r in e)(n||!mu(r))&&(t[r]=e[r])},XE=(t,e,n)=>{const r=t.slots=$g();if(t.vnode.shapeFlag&32){const s=e._;s?(Gg(r,e,n),n&&og(r,"_",s,!0)):Wg(e,r)}else e&&zg(t,e)},JE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Gg(s,e,n):(i=!e.$stable,Wg(e,s)),o=e}else e&&(zg(t,e),o={default:1});if(i)for(const l in s)!mu(l)&&o[l]==null&&delete s[l]},Vt=dT;function ZE(t){return eT(t)}function eT(t,e){const n=ja();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=pn,insertStaticContent:I}=t,P=(E,T,k,F=null,q=null,B=null,Y=void 0,G=null,z=!!T.dynamicChildren)=>{if(E===T)return;E&&!ai(E,T)&&(F=U(E),Be(E,q,B,!0),E=null),T.patchFlag===-2&&(z=!1,T.dynamicChildren=null);const{type:H,ref:ie,shapeFlag:Q}=T;switch(H){case Ga:C(E,T,k,F);break;case mr:L(E,T,k,F);break;case Qo:E==null&&M(T,k,F,Y);break;case hn:S(E,T,k,F,q,B,Y,G,z);break;default:Q&1?J(E,T,k,F,q,B,Y,G,z):Q&6?v(E,T,k,F,q,B,Y,G,z):(Q&64||Q&128)&&H.process(E,T,k,F,q,B,Y,G,z,re)}ie!=null&&q&&pa(ie,E&&E.ref,B,T||E,!T)},C=(E,T,k,F)=>{if(E==null)r(T.el=l(T.children),k,F);else{const q=T.el=E.el;T.children!==E.children&&u(q,T.children)}},L=(E,T,k,F)=>{E==null?r(T.el=c(T.children||""),k,F):T.el=E.el},M=(E,T,k,F)=>{[E.el,E.anchor]=I(E.children,T,k,F,E.el,E.anchor)},V=({el:E,anchor:T},k,F)=>{let q;for(;E&&E!==T;)q=g(E),r(E,k,F),E=q;r(T,k,F)},O=({el:E,anchor:T})=>{let k;for(;E&&E!==T;)k=g(E),s(E),E=k;s(T)},J=(E,T,k,F,q,B,Y,G,z)=>{T.type==="svg"?Y="svg":T.type==="math"&&(Y="mathml"),E==null?W(T,k,F,q,B,Y,G,z):w(E,T,q,B,Y,G,z)},W=(E,T,k,F,q,B,Y,G)=>{let z,H;const{props:ie,shapeFlag:Q,transition:se,dirs:he}=E;if(z=E.el=o(E.type,B,ie&&ie.is,ie),Q&8?d(z,E.children):Q&16&&y(E.children,z,null,F,q,jl(E,B),Y,G),he&&Dr(E,null,F,"created"),A(z,E,E.scopeId,Y,F),ie){for(const ge in ie)ge!=="value"&&!_i(ge)&&i(z,ge,null,ie[ge],B,F);"value"in ie&&i(z,"value",null,ie.value,B),(H=ie.onVnodeBeforeMount)&&an(H,F,E)}he&&Dr(E,null,F,"beforeMount");const ae=tT(q,se);ae&&se.beforeEnter(z),r(z,T,k),((H=ie&&ie.onVnodeMounted)||ae||he)&&Vt(()=>{H&&an(H,F,E),ae&&se.enter(z),he&&Dr(E,null,F,"mounted")},q)},A=(E,T,k,F,q)=>{if(k&&_(E,k),F)for(let B=0;B<F.length;B++)_(E,F[B]);if(q){let B=q.subTree;if(T===B||Zg(B.type)&&(B.ssContent===T||B.ssFallback===T)){const Y=q.vnode;A(E,Y,Y.scopeId,Y.slotScopeIds,q.parent)}}},y=(E,T,k,F,q,B,Y,G,z=0)=>{for(let H=z;H<E.length;H++){const ie=E[H]=G?rr(E[H]):dn(E[H]);P(null,ie,T,k,F,q,B,Y,G)}},w=(E,T,k,F,q,B,Y)=>{const G=T.el=E.el;let{patchFlag:z,dynamicChildren:H,dirs:ie}=T;z|=E.patchFlag&16;const Q=E.props||Ve,se=T.props||Ve;let he;if(k&&Vr(k,!1),(he=se.onVnodeBeforeUpdate)&&an(he,k,T,E),ie&&Dr(T,E,k,"beforeUpdate"),k&&Vr(k,!0),(Q.innerHTML&&se.innerHTML==null||Q.textContent&&se.textContent==null)&&d(G,""),H?R(E.dynamicChildren,H,G,k,F,jl(T,q),B):Y||ve(E,T,G,null,k,F,jl(T,q),B,!1),z>0){if(z&16)b(G,Q,se,k,q);else if(z&2&&Q.class!==se.class&&i(G,"class",null,se.class,q),z&4&&i(G,"style",Q.style,se.style,q),z&8){const ae=T.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Ie=ae[ge],ut=Q[Ie],rt=se[Ie];(rt!==ut||Ie==="value")&&i(G,Ie,ut,rt,q,k)}}z&1&&E.children!==T.children&&d(G,T.children)}else!Y&&H==null&&b(G,Q,se,k,q);((he=se.onVnodeUpdated)||ie)&&Vt(()=>{he&&an(he,k,T,E),ie&&Dr(T,E,k,"updated")},F)},R=(E,T,k,F,q,B,Y)=>{for(let G=0;G<T.length;G++){const z=E[G],H=T[G],ie=z.el&&(z.type===hn||!ai(z,H)||z.shapeFlag&198)?p(z.el):k;P(z,H,ie,null,F,q,B,Y,!0)}},b=(E,T,k,F,q)=>{if(T!==k){if(T!==Ve)for(const B in T)!_i(B)&&!(B in k)&&i(E,B,T[B],null,q,F);for(const B in k){if(_i(B))continue;const Y=k[B],G=T[B];Y!==G&&B!=="value"&&i(E,B,G,Y,q,F)}"value"in k&&i(E,"value",T.value,k.value,q)}},S=(E,T,k,F,q,B,Y,G,z)=>{const H=T.el=E?E.el:l(""),ie=T.anchor=E?E.anchor:l("");let{patchFlag:Q,dynamicChildren:se,slotScopeIds:he}=T;he&&(G=G?G.concat(he):he),E==null?(r(H,k,F),r(ie,k,F),y(T.children||[],k,ie,q,B,Y,G,z)):Q>0&&Q&64&&se&&E.dynamicChildren?(R(E.dynamicChildren,se,k,q,B,Y,G),(T.key!=null||q&&T===q.subTree)&&Kg(E,T,!0)):ve(E,T,k,ie,q,B,Y,G,z)},v=(E,T,k,F,q,B,Y,G,z)=>{T.slotScopeIds=G,E==null?T.shapeFlag&512?q.ctx.activate(T,k,F,Y,z):wt(T,k,F,q,B,Y,z):$t(E,T,z)},wt=(E,T,k,F,q,B,Y)=>{const G=E.component=TT(E,F,q);if(Vg(E)&&(G.ctx.renderer=re),wT(G,!1,Y),G.asyncDep){if(q&&q.registerDep(G,Ye,Y),!E.el){const z=G.subTree=Pe(mr);L(null,z,T,k)}}else Ye(G,E,T,k,q,B,Y)},$t=(E,T,k)=>{const F=T.component=E.component;if(uT(E,T,k))if(F.asyncDep&&!F.asyncResolved){we(F,T,k);return}else F.next=T,F.update();else T.el=E.el,F.vnode=T},Ye=(E,T,k,F,q,B,Y)=>{const G=()=>{if(E.isMounted){let{next:Q,bu:se,u:he,parent:ae,vnode:ge}=E;{const ht=Qg(E);if(ht){Q&&(Q.el=ge.el,we(E,Q,Y)),ht.asyncDep.then(()=>{E.isUnmounted||G()});return}}let Ie=Q,ut;Vr(E,!1),Q?(Q.el=ge.el,we(E,Q,Y)):Q=ge,se&&Go(se),(ut=Q.props&&Q.props.onVnodeBeforeUpdate)&&an(ut,ae,Q,ge),Vr(E,!0);const rt=Dd(E),qt=E.subTree;E.subTree=rt,P(qt,rt,p(qt.el),U(qt),E,q,B),Q.el=rt.el,Ie===null&&hT(E,rt.el),he&&Vt(he,q),(ut=Q.props&&Q.props.onVnodeUpdated)&&Vt(()=>an(ut,ae,Q,ge),q)}else{let Q;const{el:se,props:he}=T,{bm:ae,m:ge,parent:Ie,root:ut,type:rt}=E,qt=Ei(T);Vr(E,!1),ae&&Go(ae),!qt&&(Q=he&&he.onVnodeBeforeMount)&&an(Q,Ie,T),Vr(E,!0);{ut.ce&&ut.ce._injectChildStyle(rt);const ht=E.subTree=Dd(E);P(null,ht,k,F,E,q,B),T.el=ht.el}if(ge&&Vt(ge,q),!qt&&(Q=he&&he.onVnodeMounted)){const ht=T;Vt(()=>an(Q,Ie,ht),q)}(T.shapeFlag&256||Ie&&Ei(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&E.a&&Vt(E.a,q),E.isMounted=!0,T=k=F=null}};E.scope.on();const z=E.effect=new ug(G);E.scope.off();const H=E.update=z.run.bind(z),ie=E.job=z.runIfDirty.bind(z);ie.i=E,ie.id=E.uid,z.scheduler=()=>pu(ie),Vr(E,!0),H()},we=(E,T,k)=>{T.component=E;const F=E.vnode.props;E.vnode=T,E.next=null,KE(E,T.props,F,k),JE(E,T.children,k),Un(),bd(E),Fn()},ve=(E,T,k,F,q,B,Y,G,z=!1)=>{const H=E&&E.children,ie=E?E.shapeFlag:0,Q=T.children,{patchFlag:se,shapeFlag:he}=T;if(se>0){if(se&128){Yt(H,Q,k,F,q,B,Y,G,z);return}else if(se&256){Ot(H,Q,k,F,q,B,Y,G,z);return}}he&8?(ie&16&&St(H,q,B),Q!==H&&d(k,Q)):ie&16?he&16?Yt(H,Q,k,F,q,B,Y,G,z):St(H,q,B,!0):(ie&8&&d(k,""),he&16&&y(Q,k,F,q,B,Y,G,z))},Ot=(E,T,k,F,q,B,Y,G,z)=>{E=E||gs,T=T||gs;const H=E.length,ie=T.length,Q=Math.min(H,ie);let se;for(se=0;se<Q;se++){const he=T[se]=z?rr(T[se]):dn(T[se]);P(E[se],he,k,null,q,B,Y,G,z)}H>ie?St(E,q,B,!0,!1,Q):y(T,k,F,q,B,Y,G,z,Q)},Yt=(E,T,k,F,q,B,Y,G,z)=>{let H=0;const ie=T.length;let Q=E.length-1,se=ie-1;for(;H<=Q&&H<=se;){const he=E[H],ae=T[H]=z?rr(T[H]):dn(T[H]);if(ai(he,ae))P(he,ae,k,null,q,B,Y,G,z);else break;H++}for(;H<=Q&&H<=se;){const he=E[Q],ae=T[se]=z?rr(T[se]):dn(T[se]);if(ai(he,ae))P(he,ae,k,null,q,B,Y,G,z);else break;Q--,se--}if(H>Q){if(H<=se){const he=se+1,ae=he<ie?T[he].el:F;for(;H<=se;)P(null,T[H]=z?rr(T[H]):dn(T[H]),k,ae,q,B,Y,G,z),H++}}else if(H>se)for(;H<=Q;)Be(E[H],q,B,!0),H++;else{const he=H,ae=H,ge=new Map;for(H=ae;H<=se;H++){const st=T[H]=z?rr(T[H]):dn(T[H]);st.key!=null&&ge.set(st.key,H)}let Ie,ut=0;const rt=se-ae+1;let qt=!1,ht=0;const Qn=new Array(rt);for(H=0;H<rt;H++)Qn[H]=0;for(H=he;H<=Q;H++){const st=E[H];if(ut>=rt){Be(st,q,B,!0);continue}let Ht;if(st.key!=null)Ht=ge.get(st.key);else for(Ie=ae;Ie<=se;Ie++)if(Qn[Ie-ae]===0&&ai(st,T[Ie])){Ht=Ie;break}Ht===void 0?Be(st,q,B,!0):(Qn[Ht-ae]=H+1,Ht>=ht?ht=Ht:qt=!0,P(st,T[Ht],k,null,q,B,Y,G,z),ut++)}const Gs=qt?nT(Qn):gs;for(Ie=Gs.length-1,H=rt-1;H>=0;H--){const st=ae+H,Ht=T[st],fo=st+1<ie?T[st+1].el:F;Qn[H]===0?P(null,Ht,k,fo,q,B,Y,G,z):qt&&(Ie<0||H!==Gs[Ie]?jt(Ht,k,fo,2):Ie--)}}},jt=(E,T,k,F,q=null)=>{const{el:B,type:Y,transition:G,children:z,shapeFlag:H}=E;if(H&6){jt(E.component.subTree,T,k,F);return}if(H&128){E.suspense.move(T,k,F);return}if(H&64){Y.move(E,T,k,re);return}if(Y===hn){r(B,T,k);for(let Q=0;Q<z.length;Q++)jt(z[Q],T,k,F);r(E.anchor,T,k);return}if(Y===Qo){V(E,T,k);return}if(F!==2&&H&1&&G)if(F===0)G.beforeEnter(B),r(B,T,k),Vt(()=>G.enter(B),q);else{const{leave:Q,delayLeave:se,afterLeave:he}=G,ae=()=>{E.ctx.isUnmounted?s(B):r(B,T,k)},ge=()=>{Q(B,()=>{ae(),he&&he()})};se?se(B,ae,ge):ge()}else r(B,T,k)},Be=(E,T,k,F=!1,q=!1)=>{const{type:B,props:Y,ref:G,children:z,dynamicChildren:H,shapeFlag:ie,patchFlag:Q,dirs:se,cacheIndex:he}=E;if(Q===-2&&(q=!1),G!=null&&(Un(),pa(G,null,k,E,!0),Fn()),he!=null&&(T.renderCache[he]=void 0),ie&256){T.ctx.deactivate(E);return}const ae=ie&1&&se,ge=!Ei(E);let Ie;if(ge&&(Ie=Y&&Y.onVnodeBeforeUnmount)&&an(Ie,T,E),ie&6)on(E.component,k,F);else{if(ie&128){E.suspense.unmount(k,F);return}ae&&Dr(E,null,T,"beforeUnmount"),ie&64?E.type.remove(E,T,k,re,F):H&&!H.hasOnce&&(B!==hn||Q>0&&Q&64)?St(H,T,k,!1,!0):(B===hn&&Q&384||!q&&ie&16)&&St(z,T,k),F&&$e(E)}(ge&&(Ie=Y&&Y.onVnodeUnmounted)||ae)&&Vt(()=>{Ie&&an(Ie,T,E),ae&&Dr(E,null,T,"unmounted")},k)},$e=E=>{const{type:T,el:k,anchor:F,transition:q}=E;if(T===hn){Kn(k,F);return}if(T===Qo){O(E);return}const B=()=>{s(k),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(E.shapeFlag&1&&q&&!q.persisted){const{leave:Y,delayLeave:G}=q,z=()=>Y(k,B);G?G(E.el,B,z):z()}else B()},Kn=(E,T)=>{let k;for(;E!==T;)k=g(E),s(E),E=k;s(T)},on=(E,T,k)=>{const{bum:F,scope:q,job:B,subTree:Y,um:G,m:z,a:H,parent:ie,slots:{__:Q}}=E;Od(z),Od(H),F&&Go(F),ie&&le(Q)&&Q.forEach(se=>{ie.renderCache[se]=void 0}),q.stop(),B&&(B.flags|=8,Be(Y,E,T,k)),G&&Vt(G,T),Vt(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},St=(E,T,k,F=!1,q=!1,B=0)=>{for(let Y=B;Y<E.length;Y++)Be(E[Y],T,k,F,q)},U=E=>{if(E.shapeFlag&6)return U(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),k=T&&T[TE];return k?g(k):T};let Z=!1;const X=(E,T,k)=>{E==null?T._vnode&&Be(T._vnode,null,null,!0):P(T._vnode||null,E,T,null,null,null,k),T._vnode=E,Z||(Z=!0,bd(),Cg(),Z=!1)},re={p:P,um:Be,m:jt,r:$e,mt:wt,mc:y,pc:ve,pbc:R,n:U,o:t};return{render:X,hydrate:void 0,createApp:zE(X)}}function jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function tT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Kg(o,l)),l.type===Ga&&(l.el=o.el),l.type===mr&&!l.el&&(l.el=o.el)}}function nT(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Qg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qg(e)}function Od(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const rT=Symbol.for("v-scx"),sT=()=>en(rT);function Br(t,e,n){return Yg(t,e,n)}function Yg(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,l=Et({},n),c=e&&r||!e&&i!=="post";let u;if(Mi){if(i==="sync"){const _=sT();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const d=yt;l.call=(_,I,P)=>En(_,d,I,P);let p=!1;i==="post"?l.scheduler=_=>{Vt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,I)=>{I?_():pu(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=mE(t,e,l);return Mi&&(u?u.push(g):c&&g()),g}function iT(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?Xg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=Zi(this),l=Yg(s,i.bind(r),n);return o(),l}function Xg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const oT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${Jr(e)}Modifiers`];function aT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&oT(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map(la)));let l,c=r[l=Ml(e)]||r[l=Ml(Kt(e))];!c&&i&&(c=r[l=Ml(Jr(e))]),c&&En(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,En(u,t,6,s)}}function Jg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=Jg(u,e,!0);d&&(l=!0,Et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Me(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):Et(o,i),Me(t)&&r.set(t,o),o)}function za(t,e){return!t||!Fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Jr(e))||Ne(t,e))}function Dd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:_,ctx:I,inheritAttrs:P}=t,C=fa(t);let L,M;try{if(n.shapeFlag&4){const O=s||r,J=O;L=dn(u.call(J,O,d,p,_,g,I)),M=l}else{const O=e;L=dn(O.length>1?O(p,{attrs:l,slots:o,emit:c}):O(p,null)),M=e.props?l:lT(l)}}catch(O){wi.length=0,Ha(O,t,1),L=Pe(mr)}let V=L;if(M&&P!==!1){const O=Object.keys(M),{shapeFlag:J}=V;O.length&&J&7&&(i&&O.some(tu)&&(M=cT(M,i)),V=Rs(V,M,!1,!0))}return n.dirs&&(V=Rs(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&gu(V,n.transition),L=V,fa(C),L}const lT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fa(n))&&((e||(e={}))[n]=t[n]);return e},cT=(t,e)=>{const n={};for(const r in t)(!tu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function uT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Vd(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!za(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Vd(r,o,u):!0:!!o;return!1}function Vd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!za(n,i))return!0}return!1}function hT({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zg=t=>t.__isSuspense;function dT(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):vE(t)}const hn=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),wi=[];let Lt=null;function me(t=!1){wi.push(Lt=t?null:[])}function fT(){wi.pop(),Lt=wi[wi.length-1]||null}let xi=1;function xd(t,e=!1){xi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function em(t){return t.dynamicChildren=xi>0?Lt||gs:null,fT(),xi>0&&Lt&&Lt.push(t),t}function _e(t,e,n,r,s,i){return em(x(t,e,n,r,s,i,!0))}function pT(t,e,n,r,s){return em(Pe(t,e,n,r,s,!0))}function ma(t){return t?t.__v_isVNode===!0:!1}function ai(t,e){return t.type===e.type&&t.key===e.key}const tm=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||vt(t)||pe(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===hn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tm(e),ref:e&&Yo(e),scopeId:Ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return l?(yu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),xi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const Pe=gT;function gT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===ME)&&(t=mr),ma(t)){const l=Rs(t,e,!0);return n&&yu(l,n),xi>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(ST(t)&&(t=t.__vccOpts),e){e=mT(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=xt(l)),Me(c)&&(du(c)&&!le(c)&&(c=Et({},c)),e.style=su(c))}const o=Ze(t)?1:Zg(t)?128:wE(t)?64:Me(t)?4:pe(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function mT(t){return t?du(t)||jg(t)?Et({},t):t:null}function Rs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?yT(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&tm(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Yo(e)):[i,Yo(e)]:Yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rs(t.ssContent),ssFallback:t.ssFallback&&Rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&gu(d,c.clone(d)),d}function Ec(t=" ",e=0){return Pe(Ga,null,t,e)}function _T(t,e){const n=Pe(Qo,null,t);return n.staticCount=e,n}function Nn(t="",e=!1){return e?(me(),pT(mr,null,t)):Pe(mr,null,t)}function dn(t){return t==null||typeof t=="boolean"?Pe(mr):le(t)?Pe(hn,null,t.slice()):ma(t)?rr(t):Pe(Ga,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rs(t)}function yu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!jg(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[Ec(e)]):n=8);t.children=e,t.shapeFlag|=n}function yT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xt([e.class,r.class]));else if(s==="style")e.style=su([e.style,r.style]);else if(Fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function an(t,e,n,r=null){En(t,e,7,[n,r])}const vT=Fg();let ET=0;function TT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vT,i={uid:ET++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hg(r,s),emitsOptions:Jg(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aT.bind(null,i),t.ce&&t.ce(i),i}let yt=null,_a,Tc;{const t=ja(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_a=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),Tc=e("__VUE_SSR_SETTERS__",n=>Mi=n)}const Zi=t=>{const e=yt;return _a(t),t.scope.on(),()=>{t.scope.off(),_a(e)}},Md=()=>{yt&&yt.scope.off(),_a(null)};function nm(t){return t.vnode.shapeFlag&4}let Mi=!1;function wT(t,e=!1,n=!1){e&&Tc(e);const{props:r,children:s}=t.vnode,i=nm(t);GE(t,r,i,e),XE(t,s,n||e);const o=i?IT(t,e):void 0;return e&&Tc(!1),o}function IT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,FE);const{setup:r}=n;if(r){Un();const s=t.setupContext=r.length>1?bT(t):null,i=Zi(t),o=Ji(r,t,0,[t.props,s]),l=rg(o);if(Fn(),i(),(l||t.sp)&&!Ei(t)&&Dg(t),l){if(o.then(Md,Md),e)return o.then(c=>{Ld(t,c)}).catch(c=>{Ha(c,t,0)});t.asyncDep=o}else Ld(t,o)}else rm(t)}function Ld(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Rg(e)),rm(t)}function rm(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=Zi(t);Un();try{BE(t)}finally{Fn(),s()}}}const AT={get(t,e){return mt(t,"get",""),t[e]}};function bT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,AT),slots:t.slots,emit:t.emit,expose:e}}function Ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rg(cE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ti)return Ti[n](t)},has(e,n){return n in e||n in Ti}})):t.proxy}function RT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function ST(t){return pe(t)&&"__vccOpts"in t}const ze=(t,e)=>pE(t,e,Mi);function sm(t,e,n){const r=arguments.length;return r===2?Me(e)&&!le(e)?ma(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ma(n)&&(n=[n]),Pe(t,e,n))}const PT="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wc;const Ud=typeof window<"u"&&window.trustedTypes;if(Ud)try{wc=Ud.createPolicy("vue",{createHTML:t=>t})}catch{}const im=wc?t=>wc.createHTML(t):t=>t,CT="http://www.w3.org/2000/svg",kT="http://www.w3.org/1998/Math/MathML",Pn=typeof document<"u"?document:null,Fd=Pn&&Pn.createElement("template"),NT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Pn.createElementNS(CT,t):e==="mathml"?Pn.createElementNS(kT,t):n?Pn.createElement(t,{is:n}):Pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Fd.innerHTML=im(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Fd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},OT=Symbol("_vtc");function DT(t,e,n){const r=t[OT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ya=Symbol("_vod"),om=Symbol("_vsh"),Bd={beforeMount(t,{value:e},{transition:n}){t[ya]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):li(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),li(t,!0),r.enter(t)):r.leave(t,()=>{li(t,!1)}):li(t,e))},beforeUnmount(t,{value:e}){li(t,e)}};function li(t,e){t.style.display=e?t[ya]:"none",t[om]=!e}const VT=Symbol(""),xT=/(^|;)\s*display\s*:/;function MT(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Xo(r,l,"")}else for(const o in e)n[o]==null&&Xo(r,o,"");for(const o in n)o==="display"&&(i=!0),Xo(r,o,n[o])}else if(s){if(e!==n){const o=r[VT];o&&(n+=";"+o),r.cssText=n,i=xT.test(n)}}else e&&t.removeAttribute("style");ya in t&&(t[ya]=i?r.display:"",t[om]&&(r.display="none"))}const $d=/\s*!important$/;function Xo(t,e,n){if(le(n))n.forEach(r=>Xo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=LT(t,e);$d.test(n)?t.setProperty(Jr(r),n.replace($d,""),"important"):t[r]=n}}const jd=["Webkit","Moz","ms"],ql={};function LT(t,e){const n=ql[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return ql[e]=r;r=$a(r);for(let s=0;s<jd.length;s++){const i=jd[s]+r;if(i in t)return ql[e]=i}return e}const qd="http://www.w3.org/1999/xlink";function Hd(t,e,n,r,s,i=$v(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qd,e.slice(6,e.length)):t.setAttributeNS(qd,e,n):n==null||i&&!ag(n)?t.removeAttribute(e):t.setAttribute(e,i?"":vn(n)?String(n):n)}function Wd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?im(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ag(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function On(t,e,n,r){t.addEventListener(e,n,r)}function UT(t,e,n,r){t.removeEventListener(e,n,r)}const zd=Symbol("_vei");function FT(t,e,n,r,s=null){const i=t[zd]||(t[zd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=BT(e);if(r){const u=i[e]=qT(r,s);On(t,l,u,c)}else o&&(UT(t,l,o,c),i[e]=void 0)}}const Gd=/(?:Once|Passive|Capture)$/;function BT(t){let e;if(Gd.test(t)){e={};let r;for(;r=t.match(Gd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let Hl=0;const $T=Promise.resolve(),jT=()=>Hl||($T.then(()=>Hl=0),Hl=Date.now());function qT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(HT(r,n.value),e,5,[r])};return n.value=t,n.attached=jT(),n}function HT(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,WT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?DT(t,r,o):e==="style"?MT(t,n,r):Fa(e)?tu(e)||FT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zT(t,e,r,o))?(Wd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Hd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?Wd(t,Kt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hd(t,e,r,o))};function zT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kd(e)&&Ze(n)?!1:e in t}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>Go(e,n):e};function GT(t){t.target.composing=!0}function Qd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zt=Symbol("_assign"),Li={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[zt]=_r(s);const i=r||s.props&&s.props.type==="number";On(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=la(l)),t[zt](l)}),n&&On(t,"change",()=>{t.value=t.value.trim()}),e||(On(t,"compositionstart",GT),On(t,"compositionend",Qd),On(t,"change",Qd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[zt]=_r(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?la(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},am={deep:!0,created(t,e,n){t[zt]=_r(n),On(t,"change",()=>{const r=t._modelValue,s=Ss(t),i=t.checked,o=t[zt];if(le(r)){const l=iu(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Ls(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(lm(t,i))})},mounted:Yd,beforeUpdate(t,e,n){t[zt]=_r(n),Yd(t,e,n)}};function Yd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=iu(e,r.props.value)>-1;else if(Ls(e))s=e.has(r.props.value);else{if(e===n)return;s=qr(e,lm(t,!0))}t.checked!==s&&(t.checked=s)}const KT={created(t,{value:e},n){t.checked=qr(e,n.props.value),t[zt]=_r(n),On(t,"change",()=>{t[zt](Ss(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[zt]=_r(r),e!==n&&(t.checked=qr(e,r.props.value))}},QT={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ls(e);On(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?la(Ss(o)):Ss(o));t[zt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,fu(()=>{t._assigning=!1})}),t[zt]=_r(r)},mounted(t,{value:e}){Xd(t,e)},beforeUpdate(t,e,n){t[zt]=_r(n)},updated(t,{value:e}){t._assigning||Xd(t,e)}};function Xd(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Ls(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Ss(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=iu(e,l)>-1}else o.selected=e.has(l);else if(qr(Ss(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ss(t){return"_value"in t?t._value:t.value}function lm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Wl={created(t,e,n){Oo(t,e,n,null,"created")},mounted(t,e,n){Oo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Oo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Oo(t,e,n,r,"updated")}};function YT(t,e){switch(t){case"SELECT":return QT;case"TEXTAREA":return Li;default:switch(e){case"checkbox":return am;case"radio":return KT;default:return Li}}}function Oo(t,e,n,r,s){const o=YT(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const XT=["ctrl","shift","alt","meta"],JT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XT.some(n=>t[`${n}Key`]&&!e.includes(n))},zl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=JT[e[o]];if(l&&l(s,e))return}return t(s,...i)})},ZT=Et({patchProp:WT},NT);let Jd;function ew(){return Jd||(Jd=ZE(ZT))}const tw=(...t)=>{const e=ew().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rw(t){return Ze(t)?document.querySelector(t):t}const We={LANGUAGE:"selectedLanguage",THEME:"selectedTheme",THEME_RGB:"selectedThemeRgb",REMEMBERED_EMAIL:"rememberedEmail",REMEMBERED_PASSWORD:"rememberedPassword"},Do={[We.LANGUAGE]:"EN",[We.THEME]:"#ffeb7c",[We.THEME_RGB]:"255, 235, 124"},sw={EN:{languageBtn:"EN",logoutBtn:"Log Out",brandTagline:"Welcome to ...",loginTab:"Login",signupTab:"Signup",loginBtn:"Login",signupBtn:"Signup",forgotPassword:"forgot password?",rememberMe:"Remember me",qrTitle:"Log In with QR Code",socialTitle:"Or continue with",emailPlaceholder:"email",passwordPlaceholder:"password",confirmPasswordPlaceholder:"confirm password",homeTabs:{community:"Community",friend:"Friend"},actionButtons:{upload:"create status",discover:"discover",settings:"settings"},statusPlaceholder:"What's on your mind?",me:"Me"},VN:{languageBtn:"VN",logoutBtn:"Đăng Xuất",brandTagline:"Chào mừng bạn đến với ...",loginTab:"Đăng Nhập",signupTab:"Đăng Ký",loginBtn:"Đăng Nhập",signupBtn:"Đăng Ký",forgotPassword:"quên mật khẩu?",rememberMe:"Ghi nhớ tôi",qrTitle:"Đăng Nhập bằng Mã QR",socialTitle:"Hoặc tiếp tục với",emailPlaceholder:"email",passwordPlaceholder:"mật khẩu",confirmPasswordPlaceholder:"xác nhận mật khẩu",homeTabs:{community:"Cộng đồng",friend:"Bạn bè"},actionButtons:{upload:"tạo trạng thái",discover:"khám phá",settings:"cài đặt"},statusPlaceholder:"Bạn đang nghĩ gì?",me:"Tôi"}};let ls=null,Vo=null,xo=null,Zd=!1;const Gt=()=>{const t=(I,P=null)=>{try{const C=localStorage.getItem(I);return C!==null?C:P}catch(C){return console.warn(`Failed to get localStorage item "${I}":`,C),P}},e=(I,P)=>{try{P==null?localStorage.removeItem(I):localStorage.setItem(I,P)}catch(C){console.warn(`Failed to set localStorage item "${I}":`,C)}},n=I=>{try{localStorage.removeItem(I)}catch(P){console.warn(`Failed to remove localStorage item "${I}":`,P)}};if(!Zd){ls=Fe(t(We.LANGUAGE,Do[We.LANGUAGE]));const I={color:t(We.THEME,Do[We.THEME]),rgb:t(We.THEME_RGB,Do[We.THEME_RGB])};Vo=Fe(I.color),xo=Fe(I.rgb),Zd=!0}const r=()=>{ls.value=ls.value==="EN"?"VN":"EN",e(We.LANGUAGE,ls.value)},s=ze(()=>sw[ls.value]),i=I=>{const P=I.split(".");let C=s.value;for(const L of P)if(C=C==null?void 0:C[L],!C)break;return C||I},o=()=>{document.documentElement.style.setProperty("--theme-color",Vo.value),document.documentElement.style.setProperty("--theme-color-rgb",xo.value)},l=(I,P)=>{document.documentElement.style.setProperty("--theme-color",I),document.documentElement.style.setProperty("--theme-color-rgb",P),Vo.value=I,xo.value=P,e(We.THEME,I),e(We.THEME_RGB,P)},c=()=>({email:t(We.REMEMBERED_EMAIL),password:t(We.REMEMBERED_PASSWORD)}),u=(I,P)=>{e(We.REMEMBERED_EMAIL,I),e(We.REMEMBERED_PASSWORD,P)},d=()=>{n(We.REMEMBERED_EMAIL),n(We.REMEMBERED_PASSWORD)},p=(I=null)=>{try{I?I.forEach(P=>n(P)):Object.values(We).forEach(P=>n(P))}catch(P){console.warn("Failed to clear localStorage:",P)}},g=()=>{try{const I={};return Object.values(We).forEach(P=>{const C=t(P);C!==null&&(I[P]=C)}),I}catch(I){return console.warn("Failed to backup localStorage:",I),{}}},_=I=>{try{Object.entries(I).forEach(([P,C])=>{Object.values(We).includes(P)&&e(P,C)})}catch(P){console.warn("Failed to restore localStorage:",P)}};return Us(()=>{o()}),{currentLanguage:ls,toggleLanguage:r,t:s,translate:i,currentTheme:Vo,currentThemeRgb:xo,changeThemeColor:l,initializeTheme:o,getItem:t,setItem:e,removeItem:n,getRememberedAuth:c,setRememberedAuth:u,clearRememberedAuth:d,clear:p,backup:g,restore:_,STORAGE_KEYS:We,DEFAULTS:Do}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const us=typeof document<"u";function cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cm(t.default)}const Ce=Object.assign;function Gl(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const Ii=()=>{},rn=Array.isArray,um=/#/g,ow=/&/g,aw=/\//g,lw=/=/g,cw=/\?/g,hm=/\+/g,uw=/%5B/g,hw=/%5D/g,dm=/%5E/g,dw=/%60/g,fm=/%7B/g,fw=/%7C/g,pm=/%7D/g,pw=/%20/g;function vu(t){return encodeURI(""+t).replace(fw,"|").replace(uw,"[").replace(hw,"]")}function gw(t){return vu(t).replace(fm,"{").replace(pm,"}").replace(dm,"^")}function Ic(t){return vu(t).replace(hm,"%2B").replace(pw,"+").replace(um,"%23").replace(ow,"%26").replace(dw,"`").replace(fm,"{").replace(pm,"}").replace(dm,"^")}function mw(t){return Ic(t).replace(lw,"%3D")}function _w(t){return vu(t).replace(um,"%23").replace(cw,"%3F")}function yw(t){return t==null?"":_w(t).replace(aw,"%2F")}function Ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vw=/\/$/,Ew=t=>t.replace(vw,"");function Kl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Aw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ui(o)}}function Tw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ww(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&gm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Iw(t[n],e[n]))return!1;return!0}function Iw(t,e){return rn(t)?tf(t,e):rn(e)?tf(e,t):t===e}function tf(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Aw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Fi;(function(t){t.pop="pop",t.push="push"})(Fi||(Fi={}));var Ai;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ai||(Ai={}));function bw(t){if(!t)if(us){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ew(t)}const Rw=/^[^#]+#/;function Sw(t,e){return t.replace(Rw,"#")+e}function Pw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qa=()=>({left:window.scrollX,top:window.scrollY});function Cw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Pw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nf(t,e){return(history.state?history.state.position-e:-1)+t}const Ac=new Map;function kw(t,e){Ac.set(t,e)}function Nw(t){const e=Ac.get(t);return Ac.delete(t),e}let Ow=()=>location.protocol+"//"+location.host;function mm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ef(c,"")}return ef(n,t)+r+s}function Dw(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=mm(t,location),I=n.value,P=e.value;let C=0;if(g){if(n.value=_,e.value=g,o&&o===I){o=null;return}C=P?g.position-P.position:0}else r(_);s.forEach(L=>{L(n.value,I,{delta:C,type:Fi.pop,direction:C?C>0?Ai.forward:Ai.back:Ai.unknown})})};function c(){o=n.value}function u(g){s.push(g);const _=()=>{const I=s.indexOf(g);I>-1&&s.splice(I,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(Ce({},g.state,{scroll:Qa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function rf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qa():null}}function Vw(t){const{history:e,location:n}=window,r={value:mm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Ow()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(c,u){const d=Ce({},e.state,rf(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=Ce({},s.value,e.state,{forward:c,scroll:Qa()});i(d.current,d,!0);const p=Ce({},rf(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function xw(t){t=bw(t);const e=Vw(t),n=Dw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:Sw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mw(t){return typeof t=="string"||t&&typeof t=="object"}function _m(t){return typeof t=="string"||typeof t=="symbol"}const ym=Symbol("");var sf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sf||(sf={}));function Cs(t,e){return Ce(new Error,{type:t,[ym]:!0},e)}function Rn(t,e){return t instanceof Error&&ym in t&&(e==null||!!(t.type&e))}const of="[^/]+?",Lw={sensitive:!1,strict:!1,start:!0,end:!0},Uw=/[.+*?^${}()[\]/\\]/g;function Fw(t,e){const n=Ce({},Lw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Uw,"\\$&"),_+=40;else if(g.type===1){const{value:I,repeatable:P,optional:C,regexp:L}=g;i.push({name:I,repeatable:P,optional:C});const M=L||of;if(M!==of){_+=10;try{new RegExp(`(${M})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${I}" (${M}): `+O.message)}}let V=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(V=C&&u.length<2?`(?:/${V})`:"/"+V),C&&(V+="?"),s+=V,_+=20,C&&(_+=-8),P&&(_+=-20),M===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",I=i[g-1];p[I.name]=_&&I.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:I,repeatable:P,optional:C}=_,L=I in u?u[I]:"";if(rn(L)&&!P)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const M=rn(L)?L.join("/"):L;if(!M)if(C)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${I}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Bw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(af(r))return 1;if(af(s))return-1}return s.length-r.length}function af(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $w={type:0,value:""},jw=/[a-zA-Z0-9_]/;function qw(t){if(!t)return[[]];if(t==="/")return[[$w]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:jw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Hw(t,e,n){const r=Fw(qw(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ww(t,e){const n=[],r=new Map;e=hf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const I=!_,P=cf(p);P.aliasOf=_&&_.record;const C=hf(e,p),L=[P];if("alias"in p){const O=typeof p.alias=="string"?[p.alias]:p.alias;for(const J of O)L.push(cf(Ce({},P,{components:_?_.record.components:P.components,path:J,aliasOf:_?_.record:P})))}let M,V;for(const O of L){const{path:J}=O;if(g&&J[0]!=="/"){const W=g.record.path,A=W[W.length-1]==="/"?"":"/";O.path=g.record.path+(J&&A+J)}if(M=Hw(O,g,C),_?_.alias.push(M):(V=V||M,V!==M&&V.alias.push(M),I&&p.name&&!uf(M)&&o(p.name)),Em(M)&&c(M),P.children){const W=P.children;for(let A=0;A<W.length;A++)i(W[A],M,_&&_.children[A])}_=_||M}return V?()=>{o(V)}:Ii}function o(p){if(_m(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=Kw(p,n);n.splice(g,0,p),p.record.name&&!uf(p)&&r.set(p.record.name,p)}function u(p,g){let _,I={},P,C;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Cs(1,{location:p});C=_.record.name,I=Ce(lf(g.params,_.keys.filter(V=>!V.optional).concat(_.parent?_.parent.keys.filter(V=>V.optional):[]).map(V=>V.name)),p.params&&lf(p.params,_.keys.map(V=>V.name))),P=_.stringify(I)}else if(p.path!=null)P=p.path,_=n.find(V=>V.re.test(P)),_&&(I=_.parse(P),C=_.record.name);else{if(_=g.name?r.get(g.name):n.find(V=>V.re.test(g.path)),!_)throw Cs(1,{location:p,currentLocation:g});C=_.record.name,I=Ce({},g.params,p.params),P=_.stringify(I)}const L=[];let M=_;for(;M;)L.unshift(M.record),M=M.parent;return{name:C,path:P,params:I,matched:L,meta:Gw(L)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function lf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function cf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:zw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function zw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function uf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gw(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function hf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Kw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;vm(t,e[i])<0?r=i:n=i+1}const s=Qw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Qw(t){let e=t;for(;e=e.parent;)if(Em(e)&&vm(t,e)===0)return e}function Em({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Yw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(hm," "),o=i.indexOf("="),l=Ui(o<0?i:i.slice(0,o)),c=o<0?null:Ui(i.slice(o+1));if(l in e){let u=e[l];rn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function df(t){let e="";for(let n in t){const r=t[n];if(n=mw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(i=>i&&Ic(i)):[r&&Ic(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Jw=Symbol(""),ff=Symbol(""),Ya=Symbol(""),Eu=Symbol(""),bc=Symbol("");function ci(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(Cs(4,{from:n,to:e})):g instanceof Error?c(g):Mw(g)?c(Cs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Ql(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(cm(c)){const d=(c.__vccOpts||c)[e];d&&i.push(sr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=iw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,l,s)()}))}}return i}function pf(t){const e=en(Ya),n=en(Eu),r=ze(()=>{const c=te(t.to);return e.resolve(c)}),s=ze(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ps.bind(null,d));if(g>-1)return g;const _=gf(c[u-2]);return u>1&&gf(d)===_&&p[p.length-1].path!==_?p.findIndex(Ps.bind(null,c[u-2])):g}),i=ze(()=>s.value>-1&&rI(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&gm(n.params,r.value.params));function l(c={}){if(nI(c)){const u=e[te(t.replace)?"replace":"push"](te(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function Zw(t){return t.length===1?t[0]:t}const eI=Og({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:pf,setup(t,{slots:e}){const n=bs(pf(t)),{options:r}=en(Ya),s=ze(()=>({[mf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Zw(e.default(n));return t.custom?i:sm("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tI=eI;function nI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function gf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mf=(t,e,n)=>t??e??n,sI=Og({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(bc),s=ze(()=>t.route||r.value),i=en(ff,0),o=ze(()=>{let u=te(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=ze(()=>s.value.matched[o.value]);Ko(ff,ze(()=>o.value+1)),Ko(Jw,l),Ko(bc,s);const c=Fe();return Br(()=>[c.value,l.value,t.name],([u,d,p],[g,_,I])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Ps(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return _f(n.default,{Component:g,route:u});const _=p.props[d],I=_?_===!0?u.params:typeof _=="function"?_(u):_:null,C=sm(g,Ce({},I,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return _f(n.default,{Component:C,route:u})||C}}});function _f(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iI=sI;function oI(t){const e=Ww(t.routes,t),n=t.parseQuery||Yw,r=t.stringifyQuery||df,s=t.history,i=ci(),o=ci(),l=ci(),c=uE(Zn);let u=Zn;us&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Gl.bind(null,U=>""+U),p=Gl.bind(null,yw),g=Gl.bind(null,Ui);function _(U,Z){let X,re;return _m(U)?(X=e.getRecordMatcher(U),re=Z):re=U,e.addRoute(re,X)}function I(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function P(){return e.getRoutes().map(U=>U.record)}function C(U){return!!e.getRecordMatcher(U)}function L(U,Z){if(Z=Ce({},Z||c.value),typeof U=="string"){const k=Kl(n,U,Z.path),F=e.resolve({path:k.path},Z),q=s.createHref(k.fullPath);return Ce(k,F,{params:g(F.params),hash:Ui(k.hash),redirectedFrom:void 0,href:q})}let X;if(U.path!=null)X=Ce({},U,{path:Kl(n,U.path,Z.path).path});else{const k=Ce({},U.params);for(const F in k)k[F]==null&&delete k[F];X=Ce({},U,{params:p(k)}),Z.params=p(Z.params)}const re=e.resolve(X,Z),Re=U.hash||"";re.params=d(g(re.params));const E=Tw(r,Ce({},U,{hash:gw(Re),path:re.path})),T=s.createHref(E);return Ce({fullPath:E,hash:Re,query:r===df?Xw(U.query):U.query||{}},re,{redirectedFrom:void 0,href:T})}function M(U){return typeof U=="string"?Kl(n,U,c.value.path):Ce({},U)}function V(U,Z){if(u!==U)return Cs(8,{from:Z,to:U})}function O(U){return A(U)}function J(U){return O(Ce(M(U),{replace:!0}))}function W(U){const Z=U.matched[U.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let re=typeof X=="function"?X(U):X;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),Ce({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function A(U,Z){const X=u=L(U),re=c.value,Re=U.state,E=U.force,T=U.replace===!0,k=W(X);if(k)return A(Ce(M(k),{state:typeof k=="object"?Ce({},Re,k.state):Re,force:E,replace:T}),Z||X);const F=X;F.redirectedFrom=Z;let q;return!E&&ww(r,re,X)&&(q=Cs(16,{to:F,from:re}),jt(re,re,!0,!1)),(q?Promise.resolve(q):R(F,re)).catch(B=>Rn(B)?Rn(B,2)?B:Yt(B):ve(B,F,re)).then(B=>{if(B){if(Rn(B,2))return A(Ce({replace:T},M(B.to),{state:typeof B.to=="object"?Ce({},Re,B.to.state):Re,force:E}),Z||F)}else B=S(F,re,!0,T,Re);return b(F,re,B),B})}function y(U,Z){const X=V(U,Z);return X?Promise.reject(X):Promise.resolve()}function w(U){const Z=Kn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function R(U,Z){let X;const[re,Re,E]=aI(U,Z);X=Ql(re.reverse(),"beforeRouteLeave",U,Z);for(const k of re)k.leaveGuards.forEach(F=>{X.push(sr(F,U,Z))});const T=y.bind(null,U,Z);return X.push(T),St(X).then(()=>{X=[];for(const k of i.list())X.push(sr(k,U,Z));return X.push(T),St(X)}).then(()=>{X=Ql(Re,"beforeRouteUpdate",U,Z);for(const k of Re)k.updateGuards.forEach(F=>{X.push(sr(F,U,Z))});return X.push(T),St(X)}).then(()=>{X=[];for(const k of E)if(k.beforeEnter)if(rn(k.beforeEnter))for(const F of k.beforeEnter)X.push(sr(F,U,Z));else X.push(sr(k.beforeEnter,U,Z));return X.push(T),St(X)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),X=Ql(E,"beforeRouteEnter",U,Z,w),X.push(T),St(X))).then(()=>{X=[];for(const k of o.list())X.push(sr(k,U,Z));return X.push(T),St(X)}).catch(k=>Rn(k,8)?k:Promise.reject(k))}function b(U,Z,X){l.list().forEach(re=>w(()=>re(U,Z,X)))}function S(U,Z,X,re,Re){const E=V(U,Z);if(E)return E;const T=Z===Zn,k=us?history.state:{};X&&(re||T?s.replace(U.fullPath,Ce({scroll:T&&k&&k.scroll},Re)):s.push(U.fullPath,Re)),c.value=U,jt(U,Z,X,T),Yt()}let v;function wt(){v||(v=s.listen((U,Z,X)=>{if(!on.listening)return;const re=L(U),Re=W(re);if(Re){A(Ce(Re,{replace:!0,force:!0}),re).catch(Ii);return}u=re;const E=c.value;us&&kw(nf(E.fullPath,X.delta),Qa()),R(re,E).catch(T=>Rn(T,12)?T:Rn(T,2)?(A(Ce(M(T.to),{force:!0}),re).then(k=>{Rn(k,20)&&!X.delta&&X.type===Fi.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(X.delta&&s.go(-X.delta,!1),ve(T,re,E))).then(T=>{T=T||S(re,E,!1),T&&(X.delta&&!Rn(T,8)?s.go(-X.delta,!1):X.type===Fi.pop&&Rn(T,20)&&s.go(-1,!1)),b(re,E,T)}).catch(Ii)}))}let $t=ci(),Ye=ci(),we;function ve(U,Z,X){Yt(U);const re=Ye.list();return re.length?re.forEach(Re=>Re(U,Z,X)):console.error(U),Promise.reject(U)}function Ot(){return we&&c.value!==Zn?Promise.resolve():new Promise((U,Z)=>{$t.add([U,Z])})}function Yt(U){return we||(we=!U,wt(),$t.list().forEach(([Z,X])=>U?X(U):Z()),$t.reset()),U}function jt(U,Z,X,re){const{scrollBehavior:Re}=t;if(!us||!Re)return Promise.resolve();const E=!X&&Nw(nf(U.fullPath,0))||(re||!X)&&history.state&&history.state.scroll||null;return fu().then(()=>Re(U,Z,E)).then(T=>T&&Cw(T)).catch(T=>ve(T,U,Z))}const Be=U=>s.go(U);let $e;const Kn=new Set,on={currentRoute:c,listening:!0,addRoute:_,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:C,getRoutes:P,resolve:L,options:t,push:O,replace:J,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ye.add,isReady:Ot,install(U){const Z=this;U.component("RouterLink",tI),U.component("RouterView",iI),U.config.globalProperties.$router=Z,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>te(c)}),us&&!$e&&c.value===Zn&&($e=!0,O(s.location).catch(Re=>{}));const X={};for(const Re in Zn)Object.defineProperty(X,Re,{get:()=>c.value[Re],enumerable:!0});U.provide(Ya,Z),U.provide(Eu,Ag(X)),U.provide(bc,c);const re=U.unmount;Kn.add(U),U.unmount=function(){Kn.delete(U),Kn.size<1&&(u=Zn,v&&v(),v=null,c.value=Zn,$e=!1,we=!1),re()}}};function St(U){return U.reduce((Z,X)=>Z.then(()=>w(X)),Promise.resolve())}return on}function aI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ps(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ps(u,c))||s.push(c))}return[n,r,s]}function Xa(){return en(Ya)}function lI(t){return en(Eu)}const cI=()=>{};var yf={};/**
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
 */const Tm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new hI;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const I=u<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dI=function(t){const e=Tm(t);return wm.encodeByteArray(e,!0)},va=function(t){return dI(t).replace(/\./g,"")},Im=function(t){try{return wm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pI=()=>fI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof yf>"u")return;const t=yf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Im(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return cI()||pI()||gI()||mI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Am=t=>{var e,n;return(n=(e=Ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bm=t=>{const e=Am(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rm=()=>{var t;return(t=Ja())===null||t===void 0?void 0:t.config},Sm=t=>{var e;return(e=Ja())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function br(t){return t.endsWith(".cloudworkstations.dev")}async function Tu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Pm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}const bi={};function yI(){const t={prod:[],emulator:[]};for(const e of Object.keys(bi))bi[e]?t.emulator.push(e):t.prod.push(e);return t}function vI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vf=!1;function wu(t,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||bi[t]===e||bi[t]||vf)return;bi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=yI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{vf=!0,o()},g}function d(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=vI(r),_=n("text"),I=document.getElementById(_)||document.createElement("span"),P=n("learnmore"),C=document.getElementById(P)||document.createElement("a"),L=n("preprendIcon"),M=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const V=g.element;l(V),d(C,P);const O=u();c(M,L),V.append(M,I,C,O),document.body.appendChild(V)}i?(I.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function TI(){var t;const e=(t=Ja())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function II(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bI(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RI(){return!TI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function SI(){try{return typeof indexedDB=="object"}catch{return!1}}function PI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const CI="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CI,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eo.prototype.create)}}class eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kI(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wn(s,l,r)}}function kI(t,e){return t.replace(NI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NI=/\{\$([^}]+)}/g;function OI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ef(i)&&Ef(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ef(t){return t!==null&&typeof t=="object"}/**
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
 */function to(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DI(t,e){const n=new VI(t,e);return n.subscribe.bind(n)}class VI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Yl),s.error===void 0&&(s.error=Yl),s.complete===void 0&&(s.complete=Yl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yl(){}/**
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
 */function je(t){return t&&t._delegate?t._delegate:t}class yr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class MI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _I;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UI(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LI(t){return t===Mr?void 0:t}function UI(t){return t.instantiationMode==="EAGER"}/**
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
 */class FI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const BI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},$I=Ee.INFO,jI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},qI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=$I,this._logHandler=qI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const HI=(t,e)=>e.some(n=>t instanceof n);let Tf,wf;function WI(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zI(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,Rc=new WeakMap,km=new WeakMap,Xl=new WeakMap,Au=new WeakMap;function GI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cm.set(n,t)}).catch(()=>{}),Au.set(e,t),e}function KI(t){if(Rc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||km.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QI(t){Sc=t(Sc)}function YI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jl(this),e,...n);return km.set(r,e.sort?e.sort():[e]),ur(r)}:zI().includes(t)?function(...e){return t.apply(Jl(this),e),ur(Cm.get(this))}:function(...e){return ur(t.apply(Jl(this),e))}}function XI(t){return typeof t=="function"?YI(t):(t instanceof IDBTransaction&&KI(t),HI(t,WI())?new Proxy(t,Sc):t)}function ur(t){if(t instanceof IDBRequest)return GI(t);if(Xl.has(t))return Xl.get(t);const e=XI(t);return e!==t&&(Xl.set(t,e),Au.set(e,t)),e}const Jl=t=>Au.get(t);function JI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ur(o.result),c.oldVersion,c.newVersion,ur(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ZI=["get","getKey","getAll","getAllKeys","count"],eA=["put","add","delete","clear"],Zl=new Map;function If(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zl.get(e))return Zl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZI.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Zl.set(e,i),i}QI(t=>({...t,get:(e,n,r)=>If(e,n)||t.get(e,n,r),has:(e,n)=>!!If(e,n)||t.has(e,n)}));/**
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
 */class tA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",Af="0.13.1";/**
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
 */const Bn=new Iu("@firebase/app"),rA="@firebase/app-compat",sA="@firebase/analytics-compat",iA="@firebase/analytics",oA="@firebase/app-check-compat",aA="@firebase/app-check",lA="@firebase/auth",cA="@firebase/auth-compat",uA="@firebase/database",hA="@firebase/data-connect",dA="@firebase/database-compat",fA="@firebase/functions",pA="@firebase/functions-compat",gA="@firebase/installations",mA="@firebase/installations-compat",_A="@firebase/messaging",yA="@firebase/messaging-compat",vA="@firebase/performance",EA="@firebase/performance-compat",TA="@firebase/remote-config",wA="@firebase/remote-config-compat",IA="@firebase/storage",AA="@firebase/storage-compat",bA="@firebase/firestore",RA="@firebase/ai",SA="@firebase/firestore-compat",PA="firebase",CA="11.9.0";/**
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
 */const Cc="[DEFAULT]",kA={[Pc]:"fire-core",[rA]:"fire-core-compat",[iA]:"fire-analytics",[sA]:"fire-analytics-compat",[aA]:"fire-app-check",[oA]:"fire-app-check-compat",[lA]:"fire-auth",[cA]:"fire-auth-compat",[uA]:"fire-rtdb",[hA]:"fire-data-connect",[dA]:"fire-rtdb-compat",[fA]:"fire-fn",[pA]:"fire-fn-compat",[gA]:"fire-iid",[mA]:"fire-iid-compat",[_A]:"fire-fcm",[yA]:"fire-fcm-compat",[vA]:"fire-perf",[EA]:"fire-perf-compat",[TA]:"fire-rc",[wA]:"fire-rc-compat",[IA]:"fire-gcs",[AA]:"fire-gcs-compat",[bA]:"fire-fst",[SA]:"fire-fst-compat",[RA]:"fire-vertex","fire-js":"fire-js",[PA]:"fire-js-all"};/**
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
 */const Ea=new Map,NA=new Map,kc=new Map;function bf(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(kc.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;kc.set(e,t);for(const n of Ea.values())bf(n,t);for(const n of NA.values())bf(n,t);return!0}function Za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const OA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new eo("app","Firebase",OA);/**
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
 */class DA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=CA;function Nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=Rm()),!n)throw hr.create("no-options");const i=Ea.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new FI(s);for(const c of kc.values())o.addComponent(c);const l=new DA(n,r,o);return Ea.set(s,l),l}function bu(t=Cc){const e=Ea.get(t);if(!e&&t===Cc&&Rm())return Nm();if(!e)throw hr.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=kA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Wr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const VA="firebase-heartbeat-database",xA=1,Bi="firebase-heartbeat-store";let ec=null;function Om(){return ec||(ec=JI(VA,xA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),ec}async function MA(t){try{const n=(await Om()).transaction(Bi),r=await n.objectStore(Bi).get(Dm(t));return await n.done,r}catch(e){if(e instanceof wn)Bn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Rf(t,e){try{const r=(await Om()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,Dm(t)),await r.done}catch(n){if(n instanceof wn)Bn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Dm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LA=1024,UA=30;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>UA){const o=jA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sf(),{heartbeatsToSend:r,unsentEntries:s}=BA(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function Sf(){return new Date().toISOString().substring(0,10)}function BA(t,e=LA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SI()?PI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Pf(t){return va(JSON.stringify({version:2,heartbeats:t})).length}function jA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function qA(t){Wr(new yr("platform-logger",e=>new tA(e),"PRIVATE")),Wr(new yr("heartbeat",e=>new FA(e),"PRIVATE")),gn(Pc,Af,t),gn(Pc,Af,"esm2017"),gn("fire-js","")}qA("");function Ru(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Vm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HA=Vm,xm=new eo("auth","Firebase",Vm());/**
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
 */const Ta=new Iu("@firebase/auth");function WA(t,...e){Ta.logLevel<=Ee.WARN&&Ta.warn(`Auth (${Zr}): ${t}`,...e)}function Jo(t,...e){Ta.logLevel<=Ee.ERROR&&Ta.error(`Auth (${Zr}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw Pu(t,...e)}function tn(t,...e){return Pu(t,...e)}function Su(t,e,n){const r=Object.assign(Object.assign({},HA()),{[e]:n});return new eo("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Su(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),Su(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xm.create(t,...e)}function ce(t,e,...n){if(!t)throw Pu(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function $n(t,e){t||xn(e)}/**
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
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GA(){return Cf()==="http:"||Cf()==="https:"}function Cf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function KA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GA()||II()||"connection"in navigator)?navigator.onLine:!0}function QA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class no{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=EI()||AI()}get(){return KA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cu(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JA=new no(3e4,6e4);function Wn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zn(t,e,n,r,s={}){return Lm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=to(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return wI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&br(t.emulatorConfig.host)&&(u.credentials="include"),Mm.fetch()(await Um(t,t.config.apiHost,n,l),u)})}async function Lm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YA),e);try{const s=new eb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Su(t,d,u);Qt(t,d)}}catch(s){if(s instanceof wn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function ro(t,e,n,r,s={}){const i=await zn(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Um(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Cu(t.config,s):`${t.config.apiScheme}://${s}`;return XA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ZA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),JA.get())})}}function Mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function kf(t){return t!==void 0&&t.enterprise!==void 0}class tb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nb(t,e){return zn(t,"GET","/v2/recaptchaConfig",Wn(t,e))}/**
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
 */async function rb(t,e){return zn(t,"POST","/v1/accounts:delete",e)}async function wa(t,e){return zn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sb(t,e=!1){const n=je(t),r=await n.getIdToken(e),s=ku(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ri(tc(s.auth_time)),issuedAtTime:Ri(tc(s.iat)),expirationTime:Ri(tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tc(t){return Number(t)*1e3}function ku(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Im(n);return s?JSON.parse(s):(Jo("Failed to decode base64 JWT payload"),null)}catch(s){return Jo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nf(t){const e=ku(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $i(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&ib(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ib({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ob{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Oc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $i(t,wa(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fm(i.providerUserInfo):[],l=lb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Oc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function ab(t){const e=je(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fm(t){return t.map(e=>{var{providerId:n}=e,r=Ru(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cb(t,e){const n=await Lm(t,{},async()=>{const r=to({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Um(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&br(t.emulatorConfig.host)&&(c.credentials="include"),Mm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ub(t,e){return zn(t,"POST","/v2/accounts:revokeToken",Wn(t,e))}/**
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
 */class Es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Es;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Es,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function er(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ob(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $i(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sb(this,e)}reload(){return ab(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await $i(this,rb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:V,emailVerified:O,isAnonymous:J,providerData:W,stsTokenManager:A}=n;ce(V&&A,e,"internal-error");const y=Es.fromJSON(this.name,A);ce(typeof V=="string",e,"internal-error"),er(p,e.name),er(g,e.name),ce(typeof O=="boolean",e,"internal-error"),ce(typeof J=="boolean",e,"internal-error"),er(_,e.name),er(I,e.name),er(P,e.name),er(C,e.name),er(L,e.name),er(M,e.name);const w=new Jt({uid:V,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:J,photoURL:I,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:L,lastLoginAt:M});return W&&Array.isArray(W)&&(w.providerData=W.map(R=>Object.assign({},R))),C&&(w._redirectEventId=C),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Es;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Es;l.updateFromIdToken(r);const c=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Of=new Map;function Mn(t){$n(t instanceof Function,"Expected a class definition");let e=Of.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Of.set(t,e),e)}/**
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
 */class Bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bm.type="NONE";const Df=Bm;/**
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
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wa(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ts(Mn(Df),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn(Df);const o=Zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await wa(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Jt._fromGetAccountInfoResponse(e,g,d)}else p=Jt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ts(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ts(i,e,r))}}/**
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
 */function Vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($m(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zm(e))return"Blackberry";if(Gm(e))return"Webos";if(jm(e))return"Safari";if((e.includes("chrome/")||qm(e))&&!e.includes("edge/"))return"Chrome";if(Wm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $m(t=Tt()){return/firefox\//i.test(t)}function jm(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qm(t=Tt()){return/crios\//i.test(t)}function Hm(t=Tt()){return/iemobile/i.test(t)}function Wm(t=Tt()){return/android/i.test(t)}function zm(t=Tt()){return/blackberry/i.test(t)}function Gm(t=Tt()){return/webos/i.test(t)}function Nu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hb(t=Tt()){var e;return Nu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function db(){return bI()&&document.documentMode===10}function Km(t=Tt()){return Nu(t)||Wm(t)||Gm(t)||zm(t)||/windows phone/i.test(t)||Hm(t)}/**
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
 */function Qm(t,e=[]){let n;switch(t){case"Browser":n=Vf(Tt());break;case"Worker":n=`${Vf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
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
 */class fb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pb(t,e={}){return zn(t,"GET","/v2/passwordPolicy",Wn(t,e))}/**
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
 */const gb=6;class mb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _b{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xf(this),this.idTokenSubscription=new xf(this),this.beforeStateQueue=new fb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ts.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wa(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(Ln(this));const n=e?je(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pb(this),n=new mb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ub(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Ts.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(t){return je(t)}class xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let el={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yb(t){el=t}function Ym(t){return el.loadJS(t)}function vb(){return el.recaptchaEnterpriseScript}function Eb(){return el.gapiScript}function Tb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wb{constructor(){this.enterprise=new Ib}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Ib{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ab="recaptcha-enterprise",Xm="NO_RECAPTCHA";class bb{constructor(e){this.type=Ab,this.auth=Gn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{nb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new tb(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;kf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wb().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&kf(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vb();c.length!==0&&(c+=l),Ym(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Mf(t,e,n,r=!1,s=!1){const i=new bb(t);let o;if(s)o=Xm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Aa(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Mf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Mf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function Rb(t,e){const n=Za(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function Sb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Pb(t,e,n){const r=Gn(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Jm(e),{host:o,port:l}=Cb(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Hr(u,r.config.emulator)&&Hr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,br(o)?(Tu(`${i}//${o}${c}`),wu("Auth",!0)):kb()}function Jm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cb(t){const e=Jm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Lf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Lf(o)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ou{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function Nb(t,e){return zn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ob(t,e){return ro(t,"POST","/v1/accounts:signInWithPassword",Wn(t,e))}async function Db(t,e){return zn(t,"POST","/v1/accounts:sendOobCode",Wn(t,e))}async function Vb(t,e){return Db(t,e)}/**
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
 */async function xb(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}async function Mb(t,e){return ro(t,"POST","/v1/accounts:signInWithEmailLink",Wn(t,e))}/**
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
 */class ji extends Ou{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Aa(e,n,"signInWithPassword",Ob);case"emailLink":return xb(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Aa(e,r,"signUpPassword",Nb);case"emailLink":return Mb(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ws(t,e){return ro(t,"POST","/v1/accounts:signInWithIdp",Wn(t,e))}/**
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
 */const Lb="http://localhost";class zr extends Ou{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ru(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ws(e,n)}buildRequest(){const e={requestUri:Lb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=to(n)}return e}}/**
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
 */function Ub(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fb(t){const e=di(fi(t)).link,n=e?di(fi(e)).deep_link_id:null,r=di(fi(t)).deep_link_id;return(r?di(fi(r)).link:null)||r||n||e||t}class Du{constructor(e){var n,r,s,i,o,l;const c=di(fi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Ub((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Fb(e);try{return new Du(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Du.parseLink(n);return ce(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class so extends Vu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends so{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends so{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class ir extends so{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends so{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function Bb(t,e){return ro(t,"POST","/v1/accounts:signUp",Wn(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=Uf(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Uf(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ba extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ba(e,n,r,s)}}function Zm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,r):i})}async function $b(t,e,n=!1){const r=await $i(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function jb(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await $i(t,Zm(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=ku(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function e_(t,e,n=!1){if(kt(t.app))return Promise.reject(Ln(t));const r="signIn",s=await Zm(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function qb(t,e){return e_(Gn(t),e)}/**
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
 */async function t_(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Hb(t,e,n){const r=Gn(t);await Aa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Vb)}async function Wb(t,e,n){if(kt(t.app))return Promise.reject(Ln(t));const r=Gn(t),o=await Aa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&t_(t),c}),l=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function zb(t,e,n){return kt(t.app)?Promise.reject(Ln(t)):qb(je(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&t_(t),r})}function Gb(t,e,n,r){return je(t).onIdTokenChanged(e,n,r)}function Kb(t,e,n){return je(t).beforeAuthStateChanged(e,n)}function Qb(t,e,n,r){return je(t).onAuthStateChanged(e,n,r)}function Yb(t){return je(t).signOut()}const Ra="__sak";/**
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
 */class n_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xb=1e3,Jb=10;class r_ extends n_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Km(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);db()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}r_.type="LOCAL";const Zb=r_;/**
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
 */class s_ extends n_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s_.type="SESSION";const i_=s_;/**
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
 */function eR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await eR(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=xu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function nR(t){mn().location.href=t}/**
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
 */function o_(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function rR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return o_()?self:null}/**
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
 */const a_="firebaseLocalStorageDb",oR=1,Sa="firebaseLocalStorage",l_="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function aR(){const t=indexedDB.deleteDatabase(a_);return new io(t).toPromise()}function Dc(){const t=indexedDB.open(a_,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:l_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await aR(),e(await Dc()))})})}async function Ff(t,e,n){const r=nl(t,!0).put({[l_]:e,value:n});return new io(r).toPromise()}async function lR(t,e){const n=nl(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function Bf(t,e){const n=nl(t,!0).delete(e);return new io(n).toPromise()}const cR=800,uR=3;class c_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new tR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Ff(e,Ra,"1"),await Bf(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ff(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nl(s,!1).getAll();return new io(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c_.type="LOCAL";const hR=c_;new no(3e4,6e4);/**
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
 */function u_(t,e){return e?Mn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mu extends Ou{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dR(t){return e_(t.auth,new Mu(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),jb(n,new Mu(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),$b(n,new Mu(t),t.bypassAuthState)}/**
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
 */class h_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:Qt(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gR=new no(2e3,1e4);async function d_(t,e,n){if(kt(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=Gn(t);zA(t,e,Vu);const s=u_(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}class Lr extends h_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gR.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const mR="pendingRedirect",ea=new Map;class _R extends h_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await yR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yR(t,e){const n=TR(e),r=ER(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vR(t,e){ea.set(t._key(),e)}function ER(t){return Mn(t._redirectPersistence)}function TR(t){return Zo(mR,t.config.apiKey,t.name)}async function wR(t,e,n=!1){if(kt(t.app))return Promise.reject(Ln(t));const r=Gn(t),s=u_(r,e),o=await new _R(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IR=10*60*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!f_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IR&&this.cachedEventUids.clear(),this.cachedEventUids.has($f(e))}saveEventToCache(e){this.cachedEventUids.add($f(e)),this.lastProcessedEventTime=Date.now()}}function $f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function f_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f_(t);default:return!1}}/**
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
 */async function RR(t,e={}){return zn(t,"GET","/v1/projects",e)}/**
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
 */const SR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function CR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RR(t);for(const n of e)try{if(kR(n))return}catch{}Qt(t,"unauthorized-domain")}function kR(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PR.test(n))return!1;if(SR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const NR=new no(3e4,6e4);function jf(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OR(t){return new Promise((e,n)=>{var r,s,i;function o(){jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(tn(t,"network-request-failed"))},timeout:NR.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=Tb("iframefcb");return mn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},Ym(`${Eb()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ta=null,e})}let ta=null;function DR(t){return ta=ta||OR(t),ta}/**
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
 */const VR=new no(5e3,15e3),xR="__/auth/iframe",MR="emulator/auth/iframe",LR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cu(e,MR):`https://${t.config.authDomain}/${xR}`,r={apiKey:e.apiKey,appName:t.name,v:Zr},s=UR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${to(r).slice(1)}`}async function BR(t){const e=await DR(t),n=mn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:FR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},VR.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const $R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jR=500,qR=600,HR="_blank",WR="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=jR,s=qR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},$R),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Tt().toLowerCase();n&&(l=qm(u)?HR:n),$m(u)&&(e=e||WR,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,I])=>`${g}${_}=${I},`,"");if(hb(u)&&l!=="_self")return GR(e||"",l),new qf(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new qf(p)}function GR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KR="__/auth/handler",QR="emulator/auth/handler",YR=encodeURIComponent("fac");async function Hf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zr,eventId:s};if(e instanceof Vu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof so){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${YR}=${encodeURIComponent(c)}`:"";return`${XR(t)}?${to(l).slice(1)}${u}`}function XR({config:t}){return t.emulator?Cu(t,QR):`https://${t.authDomain}/${KR}`}/**
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
 */const nc="webStorageSupport";class JR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=i_,this._completeRedirectFn=wR,this._overrideRedirectResult=vR}async _openPopup(e,n,r,s){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Hf(e,n,r,Nc(),s);return zR(e,o,xu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Hf(e,n,r,Nc(),s);return nR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BR(e),r=new AR(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nc,{type:nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Km()||jm()||Nu()}}const ZR=JR;var Wf="@firebase/auth",zf="1.10.7";/**
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
 */class e0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function t0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n0(t){Wr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qm(t)},u=new _b(r,s,i,c);return Sb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new yr("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new e0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Wf,zf,t0(t)),gn(Wf,zf,"esm2017")}/**
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
 */const r0=5*60,s0=Sm("authIdTokenMaxAge")||r0;let Gf=null;const i0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s0)return;const s=n==null?void 0:n.token;Gf!==s&&(Gf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function o0(t=bu()){const e=Za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Rb(t,{popupRedirectResolver:ZR,persistence:[hR,Zb,i_]}),r=Sm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=i0(i.toString());Kb(n,o,()=>o(n.currentUser)),Gb(n,l=>o(l))}}const s=Am("auth");return s&&Pb(n,`http://${s}`),n}function a0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n0("Browser");var l0="firebase",c0="11.9.1";/**
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
 */gn(l0,c0,"app");var Kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,p_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function w(){}w.prototype=y.prototype,A.D=y.prototype,A.prototype=new w,A.prototype.constructor=A,A.C=function(R,b,S){for(var v=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)v[wt-2]=arguments[wt];return y.prototype[b].apply(R,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,w){w||(w=0);var R=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)R[b]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(b=0;16>b;++b)R[b]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=A.g[0],w=A.g[1],b=A.g[2];var S=A.g[3],v=y+(S^w&(b^S))+R[0]+3614090360&4294967295;y=w+(v<<7&4294967295|v>>>25),v=S+(b^y&(w^b))+R[1]+3905402710&4294967295,S=y+(v<<12&4294967295|v>>>20),v=b+(w^S&(y^w))+R[2]+606105819&4294967295,b=S+(v<<17&4294967295|v>>>15),v=w+(y^b&(S^y))+R[3]+3250441966&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(S^w&(b^S))+R[4]+4118548399&4294967295,y=w+(v<<7&4294967295|v>>>25),v=S+(b^y&(w^b))+R[5]+1200080426&4294967295,S=y+(v<<12&4294967295|v>>>20),v=b+(w^S&(y^w))+R[6]+2821735955&4294967295,b=S+(v<<17&4294967295|v>>>15),v=w+(y^b&(S^y))+R[7]+4249261313&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(S^w&(b^S))+R[8]+1770035416&4294967295,y=w+(v<<7&4294967295|v>>>25),v=S+(b^y&(w^b))+R[9]+2336552879&4294967295,S=y+(v<<12&4294967295|v>>>20),v=b+(w^S&(y^w))+R[10]+4294925233&4294967295,b=S+(v<<17&4294967295|v>>>15),v=w+(y^b&(S^y))+R[11]+2304563134&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(S^w&(b^S))+R[12]+1804603682&4294967295,y=w+(v<<7&4294967295|v>>>25),v=S+(b^y&(w^b))+R[13]+4254626195&4294967295,S=y+(v<<12&4294967295|v>>>20),v=b+(w^S&(y^w))+R[14]+2792965006&4294967295,b=S+(v<<17&4294967295|v>>>15),v=w+(y^b&(S^y))+R[15]+1236535329&4294967295,w=b+(v<<22&4294967295|v>>>10),v=y+(b^S&(w^b))+R[1]+4129170786&4294967295,y=w+(v<<5&4294967295|v>>>27),v=S+(w^b&(y^w))+R[6]+3225465664&4294967295,S=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(S^y))+R[11]+643717713&4294967295,b=S+(v<<14&4294967295|v>>>18),v=w+(S^y&(b^S))+R[0]+3921069994&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(b^S&(w^b))+R[5]+3593408605&4294967295,y=w+(v<<5&4294967295|v>>>27),v=S+(w^b&(y^w))+R[10]+38016083&4294967295,S=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(S^y))+R[15]+3634488961&4294967295,b=S+(v<<14&4294967295|v>>>18),v=w+(S^y&(b^S))+R[4]+3889429448&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(b^S&(w^b))+R[9]+568446438&4294967295,y=w+(v<<5&4294967295|v>>>27),v=S+(w^b&(y^w))+R[14]+3275163606&4294967295,S=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(S^y))+R[3]+4107603335&4294967295,b=S+(v<<14&4294967295|v>>>18),v=w+(S^y&(b^S))+R[8]+1163531501&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(b^S&(w^b))+R[13]+2850285829&4294967295,y=w+(v<<5&4294967295|v>>>27),v=S+(w^b&(y^w))+R[2]+4243563512&4294967295,S=y+(v<<9&4294967295|v>>>23),v=b+(y^w&(S^y))+R[7]+1735328473&4294967295,b=S+(v<<14&4294967295|v>>>18),v=w+(S^y&(b^S))+R[12]+2368359562&4294967295,w=b+(v<<20&4294967295|v>>>12),v=y+(w^b^S)+R[5]+4294588738&4294967295,y=w+(v<<4&4294967295|v>>>28),v=S+(y^w^b)+R[8]+2272392833&4294967295,S=y+(v<<11&4294967295|v>>>21),v=b+(S^y^w)+R[11]+1839030562&4294967295,b=S+(v<<16&4294967295|v>>>16),v=w+(b^S^y)+R[14]+4259657740&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(w^b^S)+R[1]+2763975236&4294967295,y=w+(v<<4&4294967295|v>>>28),v=S+(y^w^b)+R[4]+1272893353&4294967295,S=y+(v<<11&4294967295|v>>>21),v=b+(S^y^w)+R[7]+4139469664&4294967295,b=S+(v<<16&4294967295|v>>>16),v=w+(b^S^y)+R[10]+3200236656&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(w^b^S)+R[13]+681279174&4294967295,y=w+(v<<4&4294967295|v>>>28),v=S+(y^w^b)+R[0]+3936430074&4294967295,S=y+(v<<11&4294967295|v>>>21),v=b+(S^y^w)+R[3]+3572445317&4294967295,b=S+(v<<16&4294967295|v>>>16),v=w+(b^S^y)+R[6]+76029189&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(w^b^S)+R[9]+3654602809&4294967295,y=w+(v<<4&4294967295|v>>>28),v=S+(y^w^b)+R[12]+3873151461&4294967295,S=y+(v<<11&4294967295|v>>>21),v=b+(S^y^w)+R[15]+530742520&4294967295,b=S+(v<<16&4294967295|v>>>16),v=w+(b^S^y)+R[2]+3299628645&4294967295,w=b+(v<<23&4294967295|v>>>9),v=y+(b^(w|~S))+R[0]+4096336452&4294967295,y=w+(v<<6&4294967295|v>>>26),v=S+(w^(y|~b))+R[7]+1126891415&4294967295,S=y+(v<<10&4294967295|v>>>22),v=b+(y^(S|~w))+R[14]+2878612391&4294967295,b=S+(v<<15&4294967295|v>>>17),v=w+(S^(b|~y))+R[5]+4237533241&4294967295,w=b+(v<<21&4294967295|v>>>11),v=y+(b^(w|~S))+R[12]+1700485571&4294967295,y=w+(v<<6&4294967295|v>>>26),v=S+(w^(y|~b))+R[3]+2399980690&4294967295,S=y+(v<<10&4294967295|v>>>22),v=b+(y^(S|~w))+R[10]+4293915773&4294967295,b=S+(v<<15&4294967295|v>>>17),v=w+(S^(b|~y))+R[1]+2240044497&4294967295,w=b+(v<<21&4294967295|v>>>11),v=y+(b^(w|~S))+R[8]+1873313359&4294967295,y=w+(v<<6&4294967295|v>>>26),v=S+(w^(y|~b))+R[15]+4264355552&4294967295,S=y+(v<<10&4294967295|v>>>22),v=b+(y^(S|~w))+R[6]+2734768916&4294967295,b=S+(v<<15&4294967295|v>>>17),v=w+(S^(b|~y))+R[13]+1309151649&4294967295,w=b+(v<<21&4294967295|v>>>11),v=y+(b^(w|~S))+R[4]+4149444226&4294967295,y=w+(v<<6&4294967295|v>>>26),v=S+(w^(y|~b))+R[11]+3174756917&4294967295,S=y+(v<<10&4294967295|v>>>22),v=b+(y^(S|~w))+R[2]+718787259&4294967295,b=S+(v<<15&4294967295|v>>>17),v=w+(S^(b|~y))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var w=y-this.blockSize,R=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=w;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<y;)if(R[b++]=A.charCodeAt(S++),b==this.blockSize){s(this,R),b=0;break}}else for(;S<y;)if(R[b++]=A[S++],b==this.blockSize){s(this,R),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var w=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=w&255,w/=256;for(this.u(A),A=Array(16),y=w=0;4>y;++y)for(var R=0;32>R;R+=8)A[w++]=this.g[y]>>>R&255;return A};function i(A,y){var w=l;return Object.prototype.hasOwnProperty.call(w,A)?w[A]:w[A]=y(A)}function o(A,y){this.h=y;for(var w=[],R=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;R&&S==y||(w[b]=S,R=!1)}this.g=w}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return C(u(-A));for(var y=[],w=1,R=0;A>=w;R++)y[R]=A/w|0,w*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return C(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),R=p,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),v=parseInt(A.substring(b,b+S),y);8>S?(S=u(Math.pow(y,S)),R=R.j(S).add(u(v))):(R=R.j(w),R=R.add(u(v)))}return R}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var A=0,y=1,w=0;w<this.g.length;w++){var R=this.i(w);A+=(0<=R?R:4294967296+R)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(P(this))return"-"+C(this).toString(A);for(var y=u(Math.pow(A,6)),w=this,R="";;){var b=O(w,y).g;w=L(w,b.j(y));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(A);if(w=b,I(w))return S+R;for(;6>S.length;)S="0"+S;R=S+R}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=L(this,A),P(A)?-1:I(A)?0:1};function C(A){for(var y=A.g.length,w=[],R=0;R<y;R++)w[R]=~A.g[R];return new o(w,~A.h).add(g)}t.abs=function(){return P(this)?C(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],R=0,b=0;b<=y;b++){var S=R+(this.i(b)&65535)+(A.i(b)&65535),v=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);R=v>>>16,S&=65535,v&=65535,w[b]=v<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function L(A,y){return A.add(C(y))}t.j=function(A){if(I(this)||I(A))return p;if(P(this))return P(A)?C(this).j(C(A)):C(C(this).j(A));if(P(A))return C(this.j(C(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,w=[],R=0;R<2*y;R++)w[R]=0;for(R=0;R<this.g.length;R++)for(var b=0;b<A.g.length;b++){var S=this.i(R)>>>16,v=this.i(R)&65535,wt=A.i(b)>>>16,$t=A.i(b)&65535;w[2*R+2*b]+=v*$t,M(w,2*R+2*b),w[2*R+2*b+1]+=S*$t,M(w,2*R+2*b+1),w[2*R+2*b+1]+=v*wt,M(w,2*R+2*b+1),w[2*R+2*b+2]+=S*wt,M(w,2*R+2*b+2)}for(R=0;R<y;R++)w[R]=w[2*R+1]<<16|w[2*R];for(R=y;R<2*y;R++)w[R]=0;return new o(w,0)};function M(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function V(A,y){this.g=A,this.h=y}function O(A,y){if(I(y))throw Error("division by zero");if(I(A))return new V(p,p);if(P(A))return y=O(C(A),y),new V(C(y.g),C(y.h));if(P(y))return y=O(A,C(y)),new V(C(y.g),y.h);if(30<A.g.length){if(P(A)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,R=y;0>=R.l(A);)w=J(w),R=J(R);var b=W(w,1),S=W(R,1);for(R=W(R,2),w=W(w,2);!I(R);){var v=S.add(R);0>=v.l(A)&&(b=b.add(w),S=v),R=W(R,1),w=W(w,1)}return y=L(A,b.j(y)),new V(b,y)}for(b=p;0<=A.l(y);){for(w=Math.max(1,Math.floor(A.m()/y.m())),R=Math.ceil(Math.log(w)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),S=u(w),v=S.j(y);P(v)||0<v.l(A);)w-=R,S=u(w),v=S.j(y);I(S)&&(S=g),b=b.add(S),A=L(A,v)}return new V(b,A)}t.A=function(A){return O(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],R=0;R<y;R++)w[R]=this.i(R)&A.i(R);return new o(w,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],R=0;R<y;R++)w[R]=this.i(R)|A.i(R);return new o(w,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),w=[],R=0;R<y;R++)w[R]=this.i(R)^A.i(R);return new o(w,this.h^A.h)};function J(A){for(var y=A.g.length+1,w=[],R=0;R<y;R++)w[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(w,A.h)}function W(A,y){var w=y>>5;y%=32;for(var R=A.g.length-w,b=[],S=0;S<R;S++)b[S]=0<y?A.i(S+w)>>>y|A.i(S+w+1)<<32-y:A.i(S+w);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,dr=o}).apply(typeof Kf<"u"?Kf:typeof self<"u"?self:typeof window<"u"?window:{});var Lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g_,pi,m_,na,Vc,__,y_,v_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lo=="object"&&Lo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in f))break e;f=f[N]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,N={next:function(){if(!m&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function I(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,N,D){for(var K=Array(arguments.length-2),De=2;De<arguments.length;De++)K[De-2]=arguments[De];return h.prototype[N].apply(m,K)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const N=a.length||0,D=m.length||0;a.length=N+D;for(let K=0;K<D;K++)a[N+K]=m[K]}else a.push(m)}}class L{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var J=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function W(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let f,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(f in m)a[f]=m[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Ot;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class wt{constructor(){this.h=this.g=null}add(h,f){const m=$t.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var $t=new L(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ve=!1,Ot=new wt,Yt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(jt)}};var jt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){S(f)}var h=$t;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function on(a,h){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(J){e:{try{O(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:St[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}I(on,$e);var St={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(a,h,f,m,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=N,this.key=++Z,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,m,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var K=T(a,h,m,N);return-1<K?(h=a[K],f||(h.fa=!1)):(h=new X(h,this.src,D,!!m,N),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var m=a.g[f],N=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=N)&&Array.prototype.splice.call(m,N,1),D&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function T(a,h,f,m){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==m)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function q(a,h,f,m,N){if(Array.isArray(h)){for(var D=0;D<h.length;D++)q(a,h[D],f,m,N);return null}return f=he(f),a&&a[U]?a.K(h,f,u(m)?!!m.capture:!1,N):B(a,h,f,!1,m,N)}function B(a,h,f,m,N,D){if(!h)throw Error("Invalid event type");var K=u(N)?!!N.capture:!!N,De=Q(a);if(De||(a[k]=De=new Re(a)),f=De.add(h,f,m,K,D),f.proxy)return f;if(m=Y(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Kn||(N=K),N===void 0&&(N=!1),a.addEventListener(h.toString(),m,N);else if(a.attachEvent)a.attachEvent(H(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=ie;return a}function G(a,h,f,m,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],f,m,N);else m=u(m)?!!m.capture:!!m,f=he(f),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=T(D,f,m,N),-1<f&&(re(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Q(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,f,m,N)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])E(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(H(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Q(h))?(E(f,a),f.h==0&&(f.src=null,h[k]=null)):re(a)}}}function H(a){return a in F?F[a]:F[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new on(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&z(a),a=f.call(m,h)}return a}function Q(a){return a=a[k],a instanceof Re?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ae(){Be.call(this),this.i=new Re(this),this.M=this,this.F=null}I(ae,Be),ae.prototype[U]=!0,ae.prototype.removeEventListener=function(a,h,f,m){G(this,a,h,f,m)};function ge(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new $e(h,a);else if(h instanceof $e)h.target=h.target||a;else{var N=h;h=new $e(m,a),R(h,N)}if(N=!0,f)for(var D=f.length-1;0<=D;D--){var K=h.g=f[D];N=Ie(K,m,!0,h)&&N}if(K=h.g=a,N=Ie(K,m,!0,h)&&N,N=Ie(K,m,!1,h)&&N,f)for(D=0;D<f.length;D++)K=h.g=f[D],N=Ie(K,m,!1,h)&&N}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)re(f[m]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},ae.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Ie(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,D=0;D<h.length;++D){var K=h[D];if(K&&!K.da&&K.capture==f){var De=K.listener,it=K.ha||K.src;K.fa&&E(a.i,K),N=De.call(it,m)!==!1&&N}}return N&&!m.defaultPrevented}function ut(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function rt(a){a.g=ut(()=>{a.g=null,a.i&&(a.i=!1,rt(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class qt extends Be{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(a){Be.call(this),this.h=a,this.g={}}I(ht,Be);var Qn=[];function Gs(a){W(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}ht.prototype.N=function(){ht.aa.N.call(this),Gs(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,Ht=l.JSON.parse,fo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Tl(){}Tl.prototype.h=null;function kh(a){return a.h||(a.h=a.i())}function Nh(){}var Ks={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wl(){$e.call(this,"d")}I(wl,$e);function Il(){$e.call(this,"c")}I(Il,$e);var Cr={},Oh=null;function po(){return Oh=Oh||new ae}Cr.La="serverreachability";function Dh(a){$e.call(this,Cr.La,a)}I(Dh,$e);function Qs(a){const h=po();ge(h,new Dh(h))}Cr.STAT_EVENT="statevent";function Vh(a,h){$e.call(this,Cr.STAT_EVENT,a),this.stat=h}I(Vh,$e);function It(a){const h=po();ge(h,new Vh(h,a))}Cr.Ma="timingevent";function xh(a,h){$e.call(this,Cr.Ma,a),this.size=h}I(xh,$e);function Ys(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function lv(a,h,f,m,N,D){a.info(function(){if(a.g)if(D)for(var K="",De=D.split("&"),it=0;it<De.length;it++){var Se=De[it].split("=");if(1<Se.length){var dt=Se[0];Se=Se[1];var ft=dt.split("_");K=2<=ft.length&&ft[1]=="type"?K+(dt+"="+Se+"&"):K+(dt+"=redacted&")}}else K=null;else K=D;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+f+`
`+K})}function cv(a,h,f,m,N,D,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+f+`
`+D+" "+K})}function rs(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+hv(a,f)+(m?" "+m:"")})}function uv(a,h){a.info(function(){return"TIMEOUT: "+h})}Xs.prototype.info=function(){};function hv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var K=1;K<N.length;K++)N[K]=""}}}}return st(f)}catch{return h}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Mh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Al;function mo(){}I(mo,Tl),mo.prototype.g=function(){return new XMLHttpRequest},mo.prototype.i=function(){return{}},Al=new mo;function Yn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lh}function Lh(){this.i=null,this.g="",this.h=!1}var Uh={},bl={};function Rl(a,h,f){a.L=1,a.v=Eo(In(h)),a.m=f,a.P=!0,Fh(a,null)}function Fh(a,h){a.F=Date.now(),_o(a),a.A=In(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Zh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Lh,a.g=_d(a.j,f?h:null,!a.m),0<a.O&&(a.M=new qt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Qn[0]=N.toString()),N=Qn);for(var D=0;D<N.length;D++){var K=q(f,N[D],m||h.handleEvent,!1,h.h||h);if(!K)break;h.g[K.key]=K}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Qs(),lv(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&An(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const ft=An(this.g);var h=this.g.Ba();const os=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||od(this.g)))){this.J||ft!=4||h==7||(h==8||0>=os?Qs(3):Qs(2)),Sl(this);var f=this.g.Z();this.X=f;t:if(Bh(this)){var m=od(this.g);a="";var N=m.length,D=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),Js(this);var K="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==N-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,cv(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var De,it=this.g;if((De=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(De)){var Se=De;break t}}Se=null}if(f=Se)rs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Pl(this,f);else{this.o=!1,this.s=3,It(12),kr(this),Js(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<K.length;)if(Xt=dv(this,K),Xt==bl){ft==4&&(this.s=4,It(14),f=!1),rs(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Uh){this.s=4,It(15),rs(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else rs(this.i,this.l,Xt,null),Pl(this,Xt);if(Bh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||K.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)rs(this.i,this.l,K,"[Invalid Chunked Response]"),kr(this),Js(this);else if(0<K.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Vl(dt),dt.M=!0,It(11))}}else rs(this.i,this.l,K,null),Pl(this,K);ft==4&&kr(this),this.o&&!this.J&&(ft==4?fd(this.j,this):(this.o=!1,_o(this)))}else Cv(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),kr(this),Js(this)}}}catch{}finally{}};function Bh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function dv(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?bl:(f=Number(h.substring(f,m)),isNaN(f)?Uh:(m+=1,m+f>h.length?bl:(h=h.slice(m,m+f),a.C=m+f,h)))}Yn.prototype.cancel=function(){this.J=!0,kr(this)};function _o(a){a.S=Date.now()+a.I,$h(a,a.I)}function $h(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ys(g(a.ba,a),h)}function Sl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(uv(this.i,this.A),this.L!=2&&(Qs(),It(17)),kr(this),this.s=2,Js(this)):$h(this,this.S-a)};function Js(a){a.j.G==0||a.J||fd(a.j,a)}function kr(a){Sl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Gs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Pl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Cl(f.h,a))){if(!a.K&&Cl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ro(f),Ao(f);else break e;Dl(f),It(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ys(g(f.Za,f),6e3));if(1>=Hh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&Ro(f),!M(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let Se=N[h];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const dt=Se[3];dt!=null&&(f.la=dt,f.j.info("VER="+f.la));const ft=Se[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const os=Se[5];os!=null&&typeof os=="number"&&0<os&&(m=1.5*os,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Xt=a.g;if(Xt){const Po=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var D=m.h;D.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(kl(D,D.h),D.h=null))}if(m.D){const xl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;xl&&(m.ya=xl,Le(m.I,m.D,xl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var K=a;if(m.qa=md(m,m.J?m.ia:null,m.W),K.K){Wh(m.h,K);var De=K,it=m.L;it&&(De.I=it),De.B&&(Sl(De),_o(De)),m.g=K}else hd(m);0<f.i.length&&bo(f)}else Se[0]!="stop"&&Se[0]!="close"||Or(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Or(f,7):Ol(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}Qs(4)}catch{}}var fv=class{constructor(a,h){this.g=a,this.map=h}};function jh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hh(a){return a.h?1:a.g?a.g.size:0}function Cl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kl(a,h){a.g?a.g.add(h):a.h=h}function Wh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}jh.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function pv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function gv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Gh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=gv(a),m=pv(a),N=m.length,D=0;D<N;D++)h.call(void 0,m[D],f&&f[D],a)}var Kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),N=null;if(0<=m){var D=a[f].substring(0,m);N=a[f].substring(m+1)}else D=a[f];h(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,yo(this,a.j),this.o=a.o,this.g=a.g,vo(this,a.s),this.l=a.l;var h=a.i,f=new ti;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Qh(this,f),this.m=a.m}else a&&(h=String(a).match(Kh))?(this.h=!1,yo(this,h[1]||"",!0),this.o=Zs(h[2]||""),this.g=Zs(h[3]||"",!0),vo(this,h[4]),this.l=Zs(h[5]||"",!0),Qh(this,h[6]||"",!0),this.m=Zs(h[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ei(h,Yh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ei(h,Yh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ei(f,f.charAt(0)=="/"?vv:yv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ei(f,Tv)),a.join("")};function In(a){return new Nr(a)}function yo(a,h,f){a.j=f?Zs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function vo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Qh(a,h,f){h instanceof ti?(a.i=h,wv(a.i,a.h)):(f||(h=ei(h,Ev)),a.i=new ti(h,a.h))}function Le(a,h,f){a.i.set(h,f)}function Eo(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,_v),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _v(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yh=/[#\/\?@]/g,yv=/[#\?:]/g,vv=/[#\?]/g,Ev=/[#\?@]/g,Tv=/#/g;function ti(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&mv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ti.prototype,t.add=function(a,h){Xn(this),this.i=null,a=ss(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Xh(a,h){Xn(a),h=ss(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Jh(a,h){return Xn(a),h=ss(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,m){f.forEach(function(N){a.call(h,N,m,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const N=a[m];for(let D=0;D<N.length;D++)f.push(h[m])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")Jh(this,a)&&(h=h.concat(this.g.get(ss(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=ss(this,a),Jh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Zh(a,h,f){Xh(a,h),0<f.length&&(a.i=null,a.g.set(ss(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const D=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var N=D;K[m]!==""&&(N+="="+encodeURIComponent(String(K[m]))),a.push(N)}}return this.i=a.join("&")};function ss(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function wv(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,m){var N=m.toLowerCase();m!=N&&(Xh(this,m),Zh(this,N,f))},a)),a.j=h}function Iv(a,h){const f=new Xs;if(l.Image){const m=new Image;m.onload=_(Jn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=_(Jn,f,"TestLoadImage: error",!1,h,m),m.onabort=_(Jn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(Jn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Av(a,h){const f=new Xs,m=new AbortController,N=setTimeout(()=>{m.abort(),Jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(N),D.ok?Jn(f,"TestPingServer: ok",!0,h):Jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Jn(f,"TestPingServer: error",!1,h)})}function Jn(a,h,f,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(f)}catch{}}function bv(){this.g=new fo}function Rv(a,h,f){const m=f||"";try{Gh(a,function(N,D){let K=N;u(N)&&(K=st(N)),h.push(m+D+"="+encodeURIComponent(K))})}catch(N){throw h.push(m+"type="+encodeURIComponent("_badmap")),N}}function To(a){this.l=a.Ub||null,this.j=a.eb||!1}I(To,Tl),To.prototype.g=function(){return new wo(this.l,this.j)},To.prototype.i=function(a){return function(){return a}}({});function wo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(wo,ae),t=wo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ed(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ed(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ni(this):ri(this),this.readyState==3&&ed(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ni(this))},t.Qa=function(a){this.g&&(this.response=a,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ri(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function td(a){let h="";return W(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Nl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=td(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,h,f))}function He(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(He,ae);var Sv=/^https?$/i,Pv=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Al.g(),this.v=this.o?kh(this.o):kh(Al),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){nd(this,D);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)f.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())f.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pv,h,void 0))||m||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,K]of f)this.g.setRequestHeader(D,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{id(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){nd(this,D)}};function nd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,rd(a),Io(a)}function rd(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sd(this):this.bb())},t.bb=function(){sd(this)};function sd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||An(a)!=4||a.Z()!=2)){if(a.u&&An(a)==4)ut(a.Ea,0,a);else if(ge(a,"readystatechange"),An(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=K===0){var N=String(a.D).match(Kh)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),m=!Sv.test(N?N.toLowerCase():"")}f=m}if(f)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var D=2<An(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",rd(a)}}finally{Io(a)}}}}function Io(a,h){if(a.g){id(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{f.onreadystatechange=m}catch{}}}function id(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function An(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function od(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Cv(a){const h={};a=(a.g&&2<=An(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var f=b(a[m]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[N]||[];h[N]=D,D.push(f)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ad(a){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=si("baseRetryDelayMs",5e3,a),this.cb=si("retryDelaySeedMs",1e4,a),this.Wa=si("forwardChannelMaxRetries",2,a),this.wa=si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new jh(a&&a.concurrentRequestLimit),this.Da=new bv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ad.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){It(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=md(this,null,this.W),bo(this)};function Ol(a){if(ld(a),a.G==3){var h=a.U++,f=In(a.I);if(Le(f,"SID",a.K),Le(f,"RID",h),Le(f,"TYPE","terminate"),ii(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=Eo(In(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=_d(h.j,null),h.g.ea(h.v)),h.F=Date.now(),_o(h)}gd(a)}function Ao(a){a.g&&(Vl(a),a.g.cancel(),a.g=null)}function ld(a){Ao(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function bo(a){if(!qh(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||Yt(),ve||(we(),ve=!0),Ot.add(h,a),a.B=0}}function kv(a,h){return Hh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ys(g(a.Ga,a,h),pd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Yn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),R(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=ud(this,N,h),f=In(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),ii(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(td(D)))+"&"+h:this.m&&Nl(f,this.m,D)),kl(this.h,N),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",h),Le(f,"SID","null"),N.T=!0,Rl(N,f,null)):Rl(N,f,h),this.G=2}}else this.G==3&&(a?cd(this,a):this.i.length==0||qh(this.h)||cd(this))};function cd(a,h){var f;h?f=h.l:f=a.U++;const m=In(a.I);Le(m,"SID",a.K),Le(m,"RID",f),Le(m,"AID",a.T),ii(a,m),a.m&&a.o&&Nl(m,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=ud(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kl(a.h,f),Rl(f,m,h)}function ii(a,h){a.H&&W(a.H,function(f,m){Le(h,m,f)}),a.l&&Gh({},function(f,m){Le(h,m,f)})}function ud(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const K=["count="+f];D==-1?0<f?(D=N[0].g,K.push("ofs="+D)):D=0:K.push("ofs="+D);let De=!0;for(let it=0;it<f;it++){let Se=N[it].g;const dt=N[it].map;if(Se-=D,0>Se)D=Math.max(0,N[it].g-100),De=!1;else try{Rv(dt,K,"req"+Se+"_")}catch{m&&m(dt)}}if(De){m=K.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function hd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||Yt(),ve||(we(),ve=!0),Ot.add(h,a),a.v=0}}function Dl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ys(g(a.Fa,a),pd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,dd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ys(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ao(this),dd(this))};function Vl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function dd(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=In(a.qa);Le(h,"RID","rpc"),Le(h,"SID",a.K),Le(h,"AID",a.T),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(h,"TO",a.ja),Le(h,"TYPE","xmlhttp"),ii(a,h),a.m&&a.o&&Nl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Eo(In(h)),f.m=null,f.P=!0,Fh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ao(this),Dl(this),It(19))};function Ro(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function fd(a,h){var f=null;if(a.g==h){Ro(a),Vl(a),a.g=null;var m=2}else if(Cl(a.h,h))f=h.D,Wh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;m=po(),ge(m,new xh(m,f)),bo(a)}else hd(a);else if(N=h.s,N==3||N==0&&0<h.X||!(m==1&&kv(a,h)||m==2&&Dl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function pd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const N=!m;m=new Nr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||yo(m,"https"),Eo(m),N?Iv(m.toString(),f):Av(m.toString(),f)}else It(2);a.G=0,a.l&&a.l.sa(h),gd(a),ld(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function gd(a){if(a.G=0,a.ka=[],a.l){const h=zh(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function md(a,h,f){var m=f instanceof Nr?In(f):new Nr(f);if(m.g!="")h&&(m.g=h+"."+m.g),vo(m,m.s);else{var N=l.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var D=new Nr(null);m&&yo(D,m),h&&(D.g=h),N&&vo(D,N),f&&(D.l=f),m=D}return f=a.D,h=a.ya,f&&h&&Le(m,f,h),Le(m,"VER",a.la),ii(a,m),m}function _d(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new To({eb:f})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function yd(){}t=yd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function So(){}So.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){ae.call(this),this.g=new ad(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new is(this)}I(Dt,ae),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ol(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=st(a),a=f);h.i.push(new fv(h.Ya++,a)),h.G==3&&bo(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ol(this.g),delete this.g,Dt.aa.N.call(this)};function vd(a){wl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}I(vd,wl);function Ed(){Il.call(this),this.status=1}I(Ed,Il);function is(a){this.g=a}I(is,yd),is.prototype.ua=function(){ge(this.g,"a")},is.prototype.ta=function(a){ge(this.g,new vd(a))},is.prototype.sa=function(a){ge(this.g,new Ed)},is.prototype.ra=function(){ge(this.g,"b")},So.prototype.createWebChannel=So.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,v_=function(){return new So},y_=function(){return po()},__=Cr,Vc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,na=go,Mh.COMPLETE="complete",m_=Mh,Nh.EventType=Ks,Ks.OPEN="a",Ks.CLOSE="b",Ks.ERROR="c",Ks.MESSAGE="d",ae.prototype.listen=ae.prototype.K,pi=Nh,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,g_=He}).apply(typeof Lo<"u"?Lo:typeof self<"u"?self:typeof window<"u"?window:{});const Qf="@firebase/firestore",Yf="4.7.17";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Bs="11.9.0";/**
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
 */const Kr=new Iu("@firebase/firestore");function hs(){return Kr.logLevel}function ee(t,...e){if(Kr.logLevel<=Ee.DEBUG){const n=e.map(Lu);Kr.debug(`Firestore (${Bs}): ${t}`,...n)}}function jn(t,...e){if(Kr.logLevel<=Ee.ERROR){const n=e.map(Lu);Kr.error(`Firestore (${Bs}): ${t}`,...n)}}function ks(t,...e){if(Kr.logLevel<=Ee.WARN){const n=e.map(Lu);Kr.warn(`Firestore (${Bs}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,E_(t,r,n)}function E_(t,e,n){let r=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw jn(r),new Error(r)}function Oe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||E_(e,s,r)}function fe(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class T_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class h0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class d0{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new T_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new gt(e)}}class f0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class p0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new f0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Xf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function m0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function w_(){return new TextEncoder}/**
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
 */class I_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=m0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function xc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=w_(),o=_0(i.encode(Jf(t,n)),i.encode(Jf(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function Jf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Zf=-62135596800,ep=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ep);return new et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zf)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ep}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Zf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new et(0,0))}static max(){return new de(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const tp="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),s=un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?un.extractNumericId(e).compare(un.extractNumericId(n)):xc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Ue extends un{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends un{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return y0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tp}static keyField(){return new lt([tp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Ue.fromString(e))}static fromName(e){return new oe(Ue.fromString(e).popFirst(5))}static empty(){return new oe(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Ue(e.slice()))}}/**
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
 */const qi=-1;function v0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new vr(s,oe.empty(),e)}function E0(t){return new vr(t.readTime,t.key,qi)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(de.min(),oe.empty(),qi)}static max(){return new vr(de.max(),oe.empty(),qi)}}function T0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const w0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $s(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==w0)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function A0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function js(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}rl.le=-1;/**
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
 */const Uu=-1;function sl(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function b0(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const A_="";function R0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=np(e)),e=S0(t.get(n),e);return np(e)}function S0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case A_:n+="";break;default:n+=i}}return n}function np(t){return t+A_+""}/**
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
 */function rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sp(this.data.getIterator())}getIteratorFrom(e){return new sp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class sp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new tt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class R_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new R_("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const P0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=P0.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Tr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */const S_="server_timestamp",P_="__type__",C_="__previous_value__",k_="__local_write_time__";function Fu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[P_])===null||n===void 0?void 0:n.stringValue)===S_}function il(t){const e=t.mapValue.fields[C_];return Fu(e)?il(e):e}function Hi(t){const e=Er(t.mapValue.fields[k_].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class C0{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Ca="(default)";class Wi{constructor(e,n){this.projectId=e,this.database=n||Ca}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database===Ca}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const N_="__type__",k0="__max__",Fo={mapValue:{}},O_="__vector__",ka="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fu(t)?4:O0(t)?9007199254740991:N0(t)?10:11:ue(28295,{value:t})}function Tn(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),l=Er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Tr(s.bytesValue).isEqual(Tr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?Pa(o)===Pa(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(rp(o)!==rp(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Tn(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function zi(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Os(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),c=Qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ip(t.timestampValue,e.timestampValue);case 4:return ip(Hi(t),Hi(e));case 5:return xc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Tr(i),c=Tr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ye(l[u],c[u]);if(d!==0)return d}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Qe(i.latitude),Qe(o.latitude));return l!==0?l:ye(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return op(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},_=(l=p[ka])===null||l===void 0?void 0:l.arrayValue,I=(c=g[ka])===null||c===void 0?void 0:c.arrayValue,P=ye(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=I==null?void 0:I.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:op(_,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Fo.mapValue&&o===Fo.mapValue)return 0;if(i===Fo.mapValue)return 1;if(o===Fo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=xc(c[p],d[p]);if(g!==0)return g;const _=Os(l[c[p]],u[d[p]]);if(_!==0)return _}return ye(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function ip(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Er(t),r=Er(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function op(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Os(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Ds(t){return Mc(t)}function Mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Mc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Mc(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function ra(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=il(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return Tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ra(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Rr(r.fields,(i,o)=>{s+=i.length+ra(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function ap(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lc(t){return!!t&&"integerValue"in t}function Bu(t){return!!t&&"arrayValue"in t}function lp(t){return!!t&&"nullValue"in t}function cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function N0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[N_])===null||n===void 0?void 0:n.stringValue)===O_}function Si(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Si(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Si(t.arrayValue.values[n]);return e}return Object.assign({},t)}function O0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===k0}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Si(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Si(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Rr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Nt(Si(this.value))}}function D_(t){const e=[];return Rr(t.fields,(n,r)=>{const s=new lt([n]);if(sa(r)){const i=D_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class _t{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new _t(e,0,de.min(),de.min(),de.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,s){return new _t(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new _t(e,2,n,de.min(),de.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new _t(e,3,n,de.min(),de.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function up(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Os(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gi{constructor(e,n="asc"){this.field=e,this.dir=n}}function D0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class V_{}class Je extends V_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x0(e,n,r):n==="array-contains"?new U0(e,r):n==="in"?new F0(e,r):n==="not-in"?new B0(e,r):n==="array-contains-any"?new $0(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new M0(e,r):new L0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Os(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends V_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new sn(e,n)}matches(e){return x_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function x_(t){return t.op==="and"}function M_(t){return V0(t)&&x_(t)}function V0(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function Uc(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(M_(t))return t.filters.map(e=>Uc(e)).join(",");{const e=t.filters.map(n=>Uc(n)).join(",");return`${t.op}(${e})`}}function L_(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&L_(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function U_(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(U_).join(" ,")+"}"}(t):"Filter"}class x0 extends Je{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class M0 extends Je{constructor(e,n){super(e,"in",n),this.keys=F_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L0 extends Je{constructor(e,n){super(e,"not-in",n),this.keys=F_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function F_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class U0 extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bu(n)&&zi(n.arrayValue,this.value)}}class F0 extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zi(this.value.arrayValue,n)}}class B0 extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zi(this.value.arrayValue,n)}}class $0 extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zi(this.value.arrayValue,r))}}/**
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
 */class j0{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function dp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new j0(t,e,n,r,s,i,o)}function $u(t){const e=fe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.Ie=n}return e.Ie}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!D0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!L_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hp(t.startAt,e.startAt)&&hp(t.endAt,e.endAt)}function Fc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class qs{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function q0(t,e,n,r,s,i,o,l){return new qs(t,e,n,r,s,i,o,l)}function B_(t){return new qs(t)}function fp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $_(t){return t.collectionGroup!==null}function Pi(t){const e=fe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(lt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Gi(i,r))}),n.has(lt.keyField().canonicalString())||e.Ee.push(new Gi(lt.keyField(),r))}return e.Ee}function _n(t){const e=fe(t);return e.de||(e.de=H0(e,Pi(t))),e.de}function H0(t,e){if(t.limitType==="F")return dp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Gi(s.field,i)});const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return dp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bc(t,e){const n=t.filters.concat([e]);return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Oa(t,e,n){return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ol(t,e){return ju(_n(t),_n(e))&&t.limitType===e.limitType}function j_(t){return`${$u(_n(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>U_(s)).join(", ")}]`),sl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ds(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ds(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function al(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=up(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Pi(r),s)||r.endAt&&!function(o,l,c){const u=up(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Pi(r),s))}(t,e)}function W0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q_(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=z0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function z0(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Os(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Rr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
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
 */const G0=new qe(oe.comparator);function qn(){return G0}const H_=new qe(oe.comparator);function gi(...t){let e=H_;for(const n of t)e=e.insert(n.key,n);return e}function W_(t){let e=H_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return Ci()}function z_(){return Ci()}function Ci(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const K0=new qe(oe.comparator),Q0=new tt(oe.comparator);function Te(...t){let e=Q0;for(const n of t)e=e.add(n);return e}const Y0=new tt(ye);function X0(){return Y0}/**
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
 */function qu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function G_(t){return{integerValue:""+t}}function J0(t,e){return b0(e)?G_(e):qu(t,e)}/**
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
 */class ll{constructor(){this._=void 0}}function Z0(t,e,n){return t instanceof Ki?function(s,i){const o={fields:{[P_]:{stringValue:S_},[k_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fu(i)&&(i=il(i)),i&&(o.fields[C_]=i),{mapValue:o}}(n,e):t instanceof Qi?Q_(t,e):t instanceof Yi?Y_(t,e):function(s,i){const o=K_(s,i),l=pp(o)+pp(s.Re);return Lc(o)&&Lc(s.Re)?G_(l):qu(s.serializer,l)}(t,e)}function eS(t,e,n){return t instanceof Qi?Q_(t,e):t instanceof Yi?Y_(t,e):n}function K_(t,e){return t instanceof Da?function(r){return Lc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ki extends ll{}class Qi extends ll{constructor(e){super(),this.elements=e}}function Q_(t,e){const n=X_(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yi extends ll{constructor(e){super(),this.elements=e}}function Y_(t,e){let n=X_(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class Da extends ll{constructor(e,n){super(),this.serializer=e,this.Re=n}}function pp(t){return Qe(t.integerValue||t.doubleValue)}function X_(t){return Bu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tS{constructor(e,n){this.field=e,this.transform=n}}function nS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Qi&&s instanceof Qi||r instanceof Yi&&s instanceof Yi?Ns(r.elements,s.elements,Tn):r instanceof Da&&s instanceof Da?Tn(r.Re,s.Re):r instanceof Ki&&s instanceof Ki}(t.transform,e.transform)}class rS{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cl{}function J_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Hu(t.key,nn.none()):new oo(t.key,t.data,nn.none());{const n=t.data,r=Nt.empty();let s=new tt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Ut(s.toArray()),nn.none())}}function sS(t,e,n){t instanceof oo?function(s,i,o){const l=s.value.clone(),c=mp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=mp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Z_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ki(t,e,n,r){return t instanceof oo?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=i.value.clone(),d=_p(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=_p(i.fieldTransforms,c,o),d=o.data;return d.setAll(Z_(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=K_(r.transform,s||null);i!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,i))}return n||null}function gp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ns(r,s,(i,o)=>nS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends cl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends cl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Z_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mp(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eS(o,l,n[s]))}return r}function _p(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Z0(i,o,e))}return r}class Hu extends cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oS extends cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ki(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=z_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=J_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>gp(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>gp(n,r))}}class Wu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return K0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wu(e,n,r,s)}}/**
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
 */class lS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,Ae;function uS(t){switch(t){case $.OK:return ue(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function ey(t){if(t===void 0)return jn("GRPC error has no .code"),$.UNKNOWN;switch(t){case Xe.OK:return $.OK;case Xe.CANCELLED:return $.CANCELLED;case Xe.UNKNOWN:return $.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return $.INTERNAL;case Xe.UNAVAILABLE:return $.UNAVAILABLE;case Xe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Xe.NOT_FOUND:return $.NOT_FOUND;case Xe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Xe.ABORTED:return $.ABORTED;case Xe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Xe.DATA_LOSS:return $.DATA_LOSS;default:return ue(39323,{code:t})}}(Ae=Xe||(Xe={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hS=new dr([4294967295,4294967295],0);function yp(t){const e=w_().encode(t),n=new p_;return n.update(e),new Uint8Array(n.digest())}function vp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=dr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(hS)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=yp(e),[r,s]=vp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=yp(e),[r,s]=vp(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ul{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ul(de.min(),s,new qe(ye),qn(),Te())}}class ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,Te(),Te(),Te())}}/**
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
 */class oa{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class ty{constructor(e,n){this.targetId=e,this.Ce=n}}class ny{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ep{constructor(){this.Fe=0,this.Me=Tp(),this.xe=ct.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Te(),n=Te(),r=Te();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new ao(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Tp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Oe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class dS{constructor(e){this.ze=e,this.je=new Map,this.He=qn(),this.Je=Bo(),this.Ye=Bo(),this.Ze=new qe(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Fc(i))if(r===0){const o=new oe(i.path);this.tt(n,o,_t.newNoDocument(o,de.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Tr(r).toUint8Array()}catch(c){if(c instanceof R_)return ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zu(o,s,i)}catch(c){return ks(c instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Fc(l.target)){const c=new oe(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,_t.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Te();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new ul(e,n,this.Ze,this.He,r);return this.He=qn(),this.Je=Bo(),this.Ye=Bo(),this.Ze=new qe(ye),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Ep,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new tt(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new tt(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ep),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Bo(){return new qe(oe.comparator)}function Tp(){return new qe(oe.comparator)}const fS={asc:"ASCENDING",desc:"DESCENDING"},pS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gS={and:"AND",or:"OR"};class mS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $c(t,e){return t.useProto3Json||sl(e)?e:{value:e}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ry(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _S(t,e){return Va(t,e.toTimestamp())}function yn(t){return Oe(!!t,49232),de.fromTimestamp(function(n){const r=Er(n);return new et(r.seconds,r.nanos)}(t))}function Gu(t,e){return jc(t,e).canonicalString()}function jc(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function sy(t){const e=Ue.fromString(t);return Oe(cy(e),10190,{key:e.toString()}),e}function qc(t,e){return Gu(t.databaseId,e.path)}function rc(t,e){const n=sy(e);if(n.get(1)!==t.databaseId.projectId)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(oy(n))}function iy(t,e){return Gu(t.databaseId,e)}function yS(t){const e=sy(t);return e.length===4?Ue.emptyPath():oy(e)}function Hc(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oy(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wp(t,e,n){return{name:qc(t,e),fields:n.value.mapValue.fields}}function vS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Oe(d===void 0||typeof d=="string",58123),ct.fromBase64String(d||"")):(Oe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?$.UNKNOWN:ey(u.code);return new ne(d,u.message||"")}(o);n=new ny(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):de.min(),l=new Nt({mapValue:{fields:r.document.fields}}),c=_t.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new oa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rc(t,r.document),i=r.readTime?yn(r.readTime):de.min(),o=_t.newNoDocument(s,i),l=r.removedTargetIds||[];n=new oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rc(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cS(s,i),l=r.targetId;n=new ty(l,o)}}return n}function ES(t,e){let n;if(e instanceof oo)n={update:wp(t,e.key,e.value)};else if(e instanceof Hu)n={delete:qc(t,e.key)};else if(e instanceof Sr)n={update:wp(t,e.key,e.data),updateMask:CS(e.fieldMask)};else{if(!(e instanceof oS))return ue(16599,{ft:e.type});n={verify:qc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ki)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Qi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Da)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_S(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function TS(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(de.min())&&(o=yn(i)),new rS(o,s.transformResults||[])}(n,e))):[]}function wS(t,e){return{documents:[iy(t,e.path)]}}function IS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iy(t,s);const i=function(u){if(u.length!==0)return ly(sn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:fs(g.field),direction:RS(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$c(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function AS(t){let e=yS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=ay(p);return g instanceof sn&&M_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(I){return new Gi(ps(I.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,sl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Na(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Na(_,g)}(n.endAt)),q0(e,s,o,i,l,"F",c,u)}function bS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ay(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ps(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ps(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(ps(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>ay(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function RS(t){return fS[t]}function SS(t){return pS[t]}function PS(t){return gS[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return lt.fromServerFormat(t.fieldPath)}function ly(t){return t instanceof Je?function(n){if(n.op==="=="){if(cp(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NAN"}};if(lp(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cp(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NAN"}};if(lp(n.value))return{unaryFilter:{field:fs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(n.field),op:SS(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(s=>ly(s));return r.length===1?r[0]:{compositeFilter:{op:PS(n.op),filters:r}}}(t):ue(54877,{filter:t})}function CS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kS{constructor(e){this.wt=e}}function NS(t){const e=AS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oa(e,e.limit,"L"):e}/**
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
 */class OS{constructor(){this.Cn=new DS}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(vr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class DS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ue.comparator)).toArray()}}/**
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
 */const Ip={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uy=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(uy,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
 */class Vs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Vs(0)}static lr(){return new Vs(-1)}}/**
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
 */const Ap="LruGarbageCollector",VS=1048576;function bp([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class xS{constructor(e){this.Er=e,this.buffer=new tt(bp),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();bp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ee(Ap,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){js(n)?ee(Ap,"Ignoring IndexedDB error during garbage collection: ",n):await $s(n)}await this.mr(3e5)})}}class LS{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(rl.le);const r=new xS(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Ip)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ip):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),hs()<=Ee.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function US(t,e){return new LS(t,e)}/**
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
 */class FS{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $S{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ki(r.mutation,s,Ut.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=gi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=qn();const o=Ci(),l=function(){return Ci()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ki(d.mutation,u,d.mutation.getFieldMask(),et.now())):o.set(u.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new BS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ci();let s=new qe((o,l)=>o-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Ut.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=z_();d.forEach(g=>{if(!i.has(g)){const _=J_(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Ur());let l=qi,c=i;return o.next(u=>j.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Te())).next(d=>({batchId:l,changes:W_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=gi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=gi();return this.indexManager.getCollectionParents(e,i).next(l=>j.forEach(l,c=>{const u=function(p,g){return new qs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,_t.newInvalidDocument(d)))});let l=gi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&ki(d.mutation,u,Ut.empty(),et.now()),al(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class jS{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return j.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:NS(s.bundledQuery),readTime:yn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class qS{constructor(){this.overlays=new qe(oe.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Ur(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return j.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lS(n,r));let i=this.Qr.get(n);i===void 0&&(i=Te(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class HS{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Ku{constructor(){this.$r=new tt(nt.Ur),this.Kr=new tt(nt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new nt(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new nt(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new oe(new Ue([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new oe(new Ue([])),r=new nt(n,e),s=new nt(n,e+1);let i=Te();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new nt(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return oe.comparator(e.key,n.key)||ye(e.Zr,n.Zr)}static Wr(e,n){return ye(e.Zr,n.Zr)||oe.comparator(e.key,n.key)}}/**
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
 */class WS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new tt(nt.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new nt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Uu:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ye);return n.forEach(s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new nt(new oe(i),0);let l=new tt(ye);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),j.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new nt(n,0),s=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class zS{constructor(e){this.ii=e,this.docs=function(){return new qe(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():_t.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||T0(E0(d),r)<=0||(s.has(d.key)||al(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GS(this)}getSize(e){return j.resolve(this.size)}}class GS extends FS{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class KS{constructor(e){this.persistence=e,this.oi=new es(n=>$u(n),ju),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Ku,this.targetCount=0,this.ui=Vs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
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
 */class hy{constructor(e,n){this.ci={},this.overlays={},this.li=new rl(0),this.hi=!1,this.hi=!0,this.Pi=new HS,this.referenceDelegate=e(this),this.Ti=new KS(this),this.indexManager=new OS,this.remoteDocumentCache=function(s){return new zS(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new kS(n),this.Ei=new jS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new WS(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const s=new QS(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class QS extends I0{constructor(e){super(),this.currentSequenceNumber=e}}class Qu{constructor(e){this.persistence=e,this.Vi=new Ku,this.mi=null}static fi(e){return new Qu(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const s=oe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class xa{constructor(e,n){this.persistence=e,this.yi=new es(r=>R0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=US(this,n)}static fi(e,n){return new xa(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?j.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return j.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yu(e,n.fromCache,r,s)}}/**
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
 */class YS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class XS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return RI()?8:A0(Tt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YS;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(hs()<=Ee.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(hs()<=Ee.DEBUG&&ee("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(hs()<=Ee.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):j.resolve())}ws(e,n){if(fp(n))return j.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Oa(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,Oa(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,r,s){return fp(n)||s.isEqual(de.min())?j.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?j.resolve(null):(hs()<=Ee.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.Fs(e,o,n,v0(s,qi)).next(l=>l))})}vs(e,n){let r=new tt(q_(e));return n.forEach((s,i)=>{al(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return hs()<=Ee.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ds(n)),this.ys.getDocumentsMatchingQuery(e,n,vr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Xu="LocalStore",JS=3e8;class ZS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new qe(ye),this.Os=new es(i=>$u(i),ju),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $S(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function eP(t,e,n,r){return new ZS(t,e,n,r)}async function dy(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Te();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function tP(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let _=j.resolve();return g.forEach(I=>{_=_.next(()=>d.getEntry(c,I)).next(P=>{const C=u.docVersions.get(I);Oe(C!==null,48541),P.version.compareTo(C)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function fy(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function nP(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ct.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(P,C,L){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=JS?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(g,_,d)&&l.push(n.Ti.updateTargetData(i,_))});let c=qn(),u=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(rP(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(de.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function rP(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ee(Xu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function sP(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Uu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iP(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Wc(t,e,n){const r=fe(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!js(o))throw o;ee(Xu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Rp(t,e,n){const r=fe(t);let s=de.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=fe(c),g=p.Os.get(d);return g!==void 0?j.resolve(p.xs.get(g)):p.Ti.getTargetData(u,d)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Te())).next(l=>(oP(r,W0(e),l),{documents:l,$s:i})))}function oP(t,e,n){let r=t.Ns.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Sp{constructor(){this.activeTargetIds=X0()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aP{constructor(){this.xo=new Sp,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lP{No(e){}shutdown(){}}/**
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
 */const Pp="ConnectivityMonitor";class Cp{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ee(Pp,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ee(Pp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let $o=null;function zc(){return $o===null?$o=function(){return 268435456+Math.round(2147483648*Math.random())}():$o++,"0x"+$o.toString(16)}/**
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
 */const sc="RestConnection",cP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=zc(),l=this.jo(e,n.toUriEncodedString());ee(sc,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=br(u);return this.Jo(e,l,c,r,d).then(p=>(ee(sc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ks(sc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=cP[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class hP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const pt="WebChannelConnection";class dP extends uP{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=zc();return new Promise((l,c)=>{const u=new g_;u.setWithCredentials(!0),u.listenOnce(m_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case na.NO_ERROR:const p=u.getResponseJson();ee(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case na.TIMEOUT:ee(pt,`RPC '${e}' ${o} timed out`),c(new ne($.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const g=u.getStatus();if(ee(pt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_==null?void 0:_.error;if(I&&I.status&&I.message){const P=function(L){const M=L.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(M)>=0?M:$.UNKNOWN}(I.status);c(new ne(P,I.message))}else c(new ne($.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne($.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{ee(pt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);ee(pt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}I_(e,n,r){const s=zc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v_(),l=y_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ee(pt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.E_(p);let g=!1,_=!1;const I=new hP({Zo:C=>{_?ee(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(ee(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ee(pt,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Xo:()=>p.close()}),P=(C,L,M)=>{C.listen(L,V=>{try{M(V)}catch(O){setTimeout(()=>{throw O},0)}})};return P(p,pi.EventType.OPEN,()=>{_||(ee(pt,`RPC '${e}' stream ${s} transport opened.`),I.__())}),P(p,pi.EventType.CLOSE,()=>{_||(_=!0,ee(pt,`RPC '${e}' stream ${s} transport closed`),I.u_(),this.d_(p))}),P(p,pi.EventType.ERROR,C=>{_||(_=!0,ks(pt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),I.u_(new ne($.UNAVAILABLE,"The operation could not be completed")))}),P(p,pi.EventType.MESSAGE,C=>{var L;if(!_){const M=C.data[0];Oe(!!M,16349);const V=M,O=(V==null?void 0:V.error)||((L=V[0])===null||L===void 0?void 0:L.error);if(O){ee(pt,`RPC '${e}' stream ${s} received error:`,O);const J=O.status;let W=function(w){const R=Xe[w];if(R!==void 0)return ey(R)}(J),A=O.message;W===void 0&&(W=$.INTERNAL,A="Unknown error status: "+J+" with message "+O.message),_=!0,I.u_(new ne(W,A)),p.close()}else ee(pt,`RPC '${e}' stream ${s} received:`,M),I.c_(M)}}),P(l,__.STAT_EVENT,C=>{C.stat===Vc.PROXY?ee(pt,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Vc.NOPROXY&&ee(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.a_()},0),I}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function ic(){return typeof document<"u"?document:null}/**
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
 */function hl(t){return new mS(t,!0)}/**
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
 */class py{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&ee("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const kp="PersistentStream";class gy{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new py(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(jn(n.toString()),jn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new ne($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return ee(kp,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(ee(kp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fP extends gy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=vS(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?yn(o.readTime):de.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Hc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Fc(c)?{documents:wS(i,c)}:{query:IS(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ry(i,o.resumeToken);const u=$c(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Va(i,o.snapshotVersion.toTimestamp());const u=$c(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=bS(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Hc(this.serializer),n.removeTarget=e,this.Q_(n)}}class pP extends gy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=TS(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Hc(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ES(this.serializer,r))};this.Q_(n)}}/**
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
 */class gP{}class mP extends gP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,jc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne($.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,jc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne($.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class _P{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(jn(n),this.ua=!1):ee("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Qr="RemoteStore";class yP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{ts(this)&&(ee(Qr,"Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.da.add(4),await lo(u),u.Va.set("Unknown"),u.da.delete(4),await dl(u)}(this))})}),this.Va=new _P(r,s)}}async function dl(t){if(ts(t))for(const e of t.Aa)await e(!0)}async function lo(t){for(const e of t.Aa)await e(!1)}function my(t,e){const n=fe(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),th(n)?eh(n):Hs(n).N_()&&Zu(n,e))}function Ju(t,e){const n=fe(t),r=Hs(n);n.Ea.delete(e),r.N_()&&_y(n,e),n.Ea.size===0&&(r.N_()?r.k_():ts(n)&&n.Va.set("Unknown"))}function Zu(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hs(t).Z_(e)}function _y(t,e){t.ma.Ke(e),Hs(t).X_(e)}function eh(t){t.ma=new dS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Hs(t).start(),t.Va.ca()}function th(t){return ts(t)&&!Hs(t).O_()&&t.Ea.size>0}function ts(t){return fe(t).da.size===0}function yy(t){t.ma=void 0}async function vP(t){t.Va.set("Online")}async function EP(t){t.Ea.forEach((e,n)=>{Zu(t,e)})}async function TP(t,e){yy(t),th(t)?(t.Va.Pa(e),eh(t)):t.Va.set("Unknown")}async function wP(t,e,n){if(t.Va.set("Online"),e instanceof ny&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){ee(Qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ma(t,r)}else if(e instanceof oa?t.ma.Xe(e):e instanceof ty?t.ma.ot(e):t.ma.nt(e),!n.isEqual(de.min()))try{const r=await fy(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(u);d&&i.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),_y(i,c);const p=new lr(d.target,c,u,d.sequenceNumber);Zu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee(Qr,"Failed to raise snapshot:",r),await Ma(t,r)}}async function Ma(t,e,n){if(!js(e))throw e;t.da.add(1),await lo(t),t.Va.set("Offline"),n||(n=()=>fy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Qr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await dl(t)})}function vy(t,e){return e().catch(n=>Ma(t,n,e))}async function fl(t){const e=fe(t),n=Ir(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Uu;for(;IP(e);)try{const s=await sP(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,AP(e,s)}catch(s){await Ma(e,s)}Ey(e)&&Ty(e)}function IP(t){return ts(t)&&t.Ia.length<10}function AP(t,e){t.Ia.push(e);const n=Ir(t);n.N_()&&n.ea&&n.ta(e.mutations)}function Ey(t){return ts(t)&&!Ir(t).O_()&&t.Ia.length>0}function Ty(t){Ir(t).start()}async function bP(t){Ir(t).ia()}async function RP(t){const e=Ir(t);for(const n of t.Ia)e.ta(n.mutations)}async function SP(t,e,n){const r=t.Ia.shift(),s=Wu.from(r,e,n);await vy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fl(t)}async function PP(t,e){e&&Ir(t).ea&&await async function(r,s){if(function(o){return uS(o)&&o!==$.ABORTED}(s.code)){const i=r.Ia.shift();Ir(r).L_(),await vy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fl(r)}}(t,e),Ey(t)&&Ty(t)}async function Np(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),ee(Qr,"RemoteStore received new credentials");const r=ts(n);n.da.add(3),await lo(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await dl(n)}async function CP(t,e){const n=fe(t);e?(n.da.delete(2),await dl(n)):e||(n.da.add(2),await lo(n),n.Va.set("Unknown"))}function Hs(t){return t.fa||(t.fa=function(n,r,s){const i=fe(n);return i.oa(),new fP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:vP.bind(null,t),n_:EP.bind(null,t),i_:TP.bind(null,t),Y_:wP.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),th(t)?eh(t):t.Va.set("Unknown")):(await t.fa.stop(),yy(t))})),t.fa}function Ir(t){return t.ga||(t.ga=function(n,r,s){const i=fe(n);return i.oa(),new pP(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:bP.bind(null,t),i_:PP.bind(null,t),na:RP.bind(null,t),ra:SP.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await fl(t)):(await t.ga.stop(),t.Ia.length>0&&(ee(Qr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class nh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new nh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(t,e){if(jn("AsyncQueue",`${e}: ${t}`),js(t))return new ne($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=gi(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Is;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Op{constructor(){this.pa=new qe(oe.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new xs(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class kP{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class NP{constructor(){this.queries=Dp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Dp(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new ne($.ABORTED,"Firestore shutting down"))}}function Dp(){return new es(t=>j_(t),ol)}async function OP(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new kP,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=rh(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&sh(n)}async function DP(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VP(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&sh(n)}function xP(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function sh(t){t.Ca.forEach(e=>{e.next()})}var Gc,Vp;(Vp=Gc||(Gc={})).xa="default",Vp.Cache="cache";class MP{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Gc.Cache}}/**
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
 */class wy{constructor(e){this.key=e}}class Iy{constructor(e){this.key=e}}class LP{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Te(),this.mutatedKeys=Te(),this.Za=q_(e),this.Xa=new Is(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new Op,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=al(this.query,p)?p:null,I=!!g&&this.mutatedKeys.has(g.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;g&&_?g.data.isEqual(_.data)?I!==P&&(r.track({type:3,doc:_}),C=!0):this.ru(g,_)||(r.track({type:2,doc:_}),C=!0,(c&&this.Za(_,c)>0||u&&this.Za(_,u)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),C=!0):g&&!_&&(r.track({type:1,doc:g}),C=!0,(c||u)&&(l=!0)),C&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((d,p)=>function(_,I){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:C})}};return P(_)-P(I)}(d.type,p.type)||this.Za(d.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new xs(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Op,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Te(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Iy(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new wy(r))}),n}au(e){this.Ha=e.$s,this.Ya=Te();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return xs.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ih="SyncEngine";class UP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FP{constructor(e){this.key=e,this.cu=!1}}class BP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new es(l=>j_(l),ol),this.Pu=new Map,this.Tu=new Set,this.Iu=new qe(oe.comparator),this.Eu=new Map,this.du=new Ku,this.Au={},this.Ru=new Map,this.Vu=Vs.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function $P(t,e,n=!0){const r=Cy(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Ay(r,e,n,!0),s}async function jP(t,e){const n=Cy(t);await Ay(n,e,!0,!1)}async function Ay(t,e,n,r){const s=await iP(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await qP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&my(t.remoteStore,s),l}async function qP(t,e,n,r,s){t.fu=(p,g,_)=>async function(P,C,L,M){let V=C.view.tu(L);V.Cs&&(V=await Rp(P.localStore,C.query,!1).then(({documents:A})=>C.view.tu(A,V)));const O=M&&M.targetChanges.get(C.targetId),J=M&&M.targetMismatches.get(C.targetId)!=null,W=C.view.applyChanges(V,P.isPrimaryClient,O,J);return Mp(P,C.targetId,W.ou),W.snapshot}(t,p,g,_);const i=await Rp(t.localStore,e,!0),o=new LP(e,i.$s),l=o.tu(i.documents),c=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Mp(t,n,u.ou);const d=new UP(e,n,o);return t.hu.set(e,d),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function HP(t,e,n){const r=fe(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!ol(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ju(r.remoteStore,s.targetId),Kc(r,s.targetId)}).catch($s)):(Kc(r,s.targetId),await Wc(r.localStore,s.targetId,!0))}async function WP(t,e){const n=fe(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ju(n.remoteStore,r.targetId))}async function zP(t,e,n){const r=ZP(t);try{const s=await function(o,l){const c=fe(o),u=et.now(),d=l.reduce((_,I)=>_.add(I.key),Te());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=qn(),P=Te();return c.Bs.getEntries(_,d).next(C=>{I=C,I.forEach((L,M)=>{M.isValidDocument()||(P=P.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,I)).next(C=>{p=C;const L=[];for(const M of l){const V=iS(M,p.get(M.key).overlayedDocument);V!=null&&L.push(new Sr(M.key,V,D_(V.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,L,l)}).next(C=>{g=C;const L=C.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(_,C.batchId,L)})}).then(()=>({batchId:g.batchId,changes:W_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Au[o.currentUser.toKey()];u||(u=new qe(ye)),u=u.insert(l,c),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await co(r,s.changes),await fl(r.remoteStore)}catch(s){const i=rh(s,"Failed to persist write");n.reject(i)}}async function by(t,e){const n=fe(t);try{const r=await nP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?Oe(o.cu,14607):s.removedDocuments.size>0&&(Oe(o.cu,42227),o.cu=!1))}),await co(n,r,e)}catch(r){await $s(r)}}function xp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.Fa(l)&&(u=!0)}),u&&sh(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GP(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new qe(oe.comparator);o=o.insert(i,_t.newNoDocument(i,de.min()));const l=Te().add(i),c=new ul(de.min(),new Map,new qe(ye),o,l);await by(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),oh(r)}else await Wc(r.localStore,e,!1).then(()=>Kc(r,e,n)).catch($s)}async function KP(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await tP(n.localStore,e);Sy(n,r,null),Ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await co(n,s)}catch(s){await $s(s)}}async function QP(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Oe(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Sy(r,e,n),Ry(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await co(r,s)}catch(s){await $s(s)}}function Ry(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function Sy(t,e,n){const r=fe(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function Kc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Py(t,r)})}function Py(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(Ju(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),oh(t))}function Mp(t,e,n){for(const r of n)r instanceof wy?(t.du.addReference(r.key,e),YP(t,r)):r instanceof Iy?(ee(ih,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Py(t,r.key)):ue(19791,{pu:r})}function YP(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(ee(ih,"New document in limbo: "+n),t.Tu.add(r),oh(t))}function oh(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new oe(Ue.fromString(e)),r=t.Vu.next();t.Eu.set(r,new FP(n)),t.Iu=t.Iu.insert(n,r),my(t.remoteStore,new lr(_n(B_(n.path)),r,"TargetPurposeLimboResolution",rl.le))}}async function co(t,e,n){const r=fe(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Yu.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,u){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(u,g=>j.forEach(g.ds,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>j.forEach(g.As,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!js(p))throw p;ee(Xu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=d.xs.get(g),I=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(I);d.xs=d.xs.insert(g,P)}}}(r.localStore,i))}async function XP(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){ee(ih,"User change. New user:",e.toKey());const r=await dy(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new ne($.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(n,r.ks)}}function JP(t,e){const n=fe(t),r=n.Eu.get(e);if(r&&r.cu)return Te().add(r.key);{let s=Te();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function Cy(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GP.bind(null,e),e.lu.Y_=VP.bind(null,e.eventManager),e.lu.gu=xP.bind(null,e.eventManager),e}function ZP(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QP.bind(null,e),e}class La{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return eP(this.persistence,new XS,e.initialUser,this.serializer)}Su(e){return new hy(Qu.fi,this.serializer)}bu(e){return new aP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}La.provider={build:()=>new La};class eC extends La{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Oe(this.persistence.referenceDelegate instanceof xa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MS(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new hy(r=>xa.fi(r,n),this.serializer)}}class Qc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XP.bind(null,this.syncEngine),await CP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NP}()}createDatastore(e){const n=hl(e.databaseInfo.databaseId),r=function(i){return new dP(i)}(e.databaseInfo);return function(i,o,l,c){return new mP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yP(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>xp(this.syncEngine,n,0),function(){return Cp.C()?new Cp:new lP}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new BP(s,i,o,l,c,u);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);ee(Qr,"RemoteStore shutting down."),i.da.add(5),await lo(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qc.provider={build:()=>new Qc};/**
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
 */class tC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):jn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ar="FirestoreClient";class nC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=I_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ee(Ar,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee(Ar,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function oc(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await dy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Lp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rC(t);ee(Ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Np(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Np(e.remoteStore,s)),t._onlineComponents=e}async function rC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Ar,"Using user provided OfflineComponentProvider");try{await oc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await oc(t,new La)}}else ee(Ar,"Using default OfflineComponentProvider"),await oc(t,new eC(void 0));return t._offlineComponents}async function ky(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Ar,"Using user provided OnlineComponentProvider"),await Lp(t,t._uninitializedComponentsProvider._online)):(ee(Ar,"Using default OnlineComponentProvider"),await Lp(t,new Qc))),t._onlineComponents}function sC(t){return ky(t).then(e=>e.syncEngine)}async function iC(t){const e=await ky(t),n=e.eventManager;return n.onListen=$P.bind(null,e.syncEngine),n.onUnlisten=HP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WP.bind(null,e.syncEngine),n}function oC(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new tC({next:g=>{d.xu(),o.enqueueAndForget(()=>DP(i,p)),g.fromCache&&c.source==="server"?u.reject(new ne($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new MP(l,d,{includeMetadataChanges:!0,Qa:!0});return OP(i,p)}(await iC(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ny(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Up=new Map;/**
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
 */function Oy(t,e,n){if(!n)throw new ne($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aC(t,e,n,r){if(e===!0&&r===!0)throw new ne($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fp(t){if(!oe.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bp(t){if(oe.isDocumentKey(t))throw new ne($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function Yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pl(t);throw new ne($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lC(t,e){if(e<=0)throw new ne($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Dy="firestore.googleapis.com",$p=!0;class jp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Dy,this.ssl=$p}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:$p;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VS)throw new ne($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ny((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new u0;switch(r.type){case"firstParty":return new p0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Up.get(n);r&&(ee("ComponentProvider","Removing Datastore"),Up.delete(n),r.terminate())}(this),Promise.resolve()}}function cC(t,e,n,r={}){var s;t=Yr(t,gl);const i=br(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Tu(`https://${c}`),wu("Firestore",!0)),o.host!==Dy&&o.host!==c&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Hr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=gt.MOCK_USER;else{d=Pm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ne($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new gt(g)}t._authCredentials=new h0(new T_(d,p))}}/**
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
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class pr extends Pr{constructor(e,n,r){super(e,n,B_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new oe(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function qp(t,e,...n){if(t=je(t),Oy("collection","path",e),t instanceof gl){const r=Ue.fromString(e,...n);return Bp(r),new pr(t,null,r)}{if(!(t instanceof Bt||t instanceof pr))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Bp(r),new pr(t.firestore,null,r)}}function Yc(t,e,...n){if(t=je(t),arguments.length===1&&(e=I_.newId()),Oy("doc","path",e),t instanceof gl){const r=Ue.fromString(e,...n);return Fp(r),new Bt(t,null,new oe(r))}{if(!(t instanceof Bt||t instanceof pr))throw new ne($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Fp(r),new Bt(t.firestore,t instanceof pr?t.converter:null,new oe(r))}}/**
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
 */const Hp="AsyncQueue";class Wp{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new py(this,"async_queue_retry"),this.rc=()=>{const r=ic();r&&ee(Hp,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=ic();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new fr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!js(e))throw e;ee(Hp,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,jn("INTERNAL UNHANDLED ERROR: ",zp(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=nh.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ue(47125,{cc:zp(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function zp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class uo extends gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wp(e),this._firestoreClient=void 0,await e}}}function uC(t,e){const n=typeof t=="object"?t:bu(),r=typeof t=="string"?t:Ca,s=Za(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bm("firestore");i&&cC(s,...i)}return s}function Vy(t){if(t._terminated)throw new ne($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hC(t),t._firestoreClient}function hC(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new C0(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ny(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new nC(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(ct.fromBase64String(e))}catch(n){throw new ne($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _l{constructor(e){this._methodName=e}}/**
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
 */class ah{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class lh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const dC=/^__.*__$/;class fC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}class xy{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function My(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ic:t})}}class ch{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new ch(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ua(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(My(this.Ic)&&dC.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class pC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hl(e)}bc(e,n,r,s=!1){return new ch({Ic:e,methodName:n,wc:r,path:lt.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(t){const e=t._freezeSettings(),n=hl(t._databaseId);return new pC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gC(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);dh("Data must be an object, but it was:",o,r);const l=Ly(r,o);let c,u;if(i.merge)c=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Xc(e,p,n);if(!o.contains(g))throw new ne($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Fy(d,g)||d.push(g)}c=new Ut(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new fC(new Nt(l),c,u)}class yl extends _l{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yl}}class hh extends _l{_toFieldTransform(e){return new tS(e.path,new Ki)}isEqual(e){return e instanceof hh}}function mC(t,e,n,r){const s=t.bc(1,e,n);dh("Data must be an object, but it was:",s,r);const i=[],o=Nt.empty();Rr(r,(c,u)=>{const d=fh(e,c,n);u=je(u);const p=s.mc(d);if(u instanceof yl)i.push(d);else{const g=ho(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ut(i);return new xy(o,l,s.fieldTransforms)}function _C(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[Xc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Xc(e,i[g])),c.push(i[g+1]);const u=[],d=Nt.empty();for(let g=l.length-1;g>=0;--g)if(!Fy(u,l[g])){const _=l[g];let I=c[g];I=je(I);const P=o.mc(_);if(I instanceof yl)u.push(_);else{const C=ho(I,P);C!=null&&(u.push(_),d.set(_,C))}}const p=new Ut(u);return new xy(d,p,o.fieldTransforms)}function yC(t,e,n,r=!1){return ho(n,t.bc(r?4:3,e))}function ho(t,e){if(Uy(t=je(t)))return dh("Unsupported field value:",e,t),Ly(t,e);if(t instanceof _l)return function(r,s){if(!My(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=ho(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return J0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Va(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Va(s.serializer,i)}}if(r instanceof ah)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ms)return{bytesValue:ry(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof lh)return function(o,l){return{mapValue:{fields:{[N_]:{stringValue:O_},[ka]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.gc("VectorValues must only contain numeric values.");return qu(l.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${pl(r)}`)}(t,e)}function Ly(t,e){const n={};return b_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rr(t,(r,s)=>{const i=ho(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Uy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof ah||t instanceof Ms||t instanceof Bt||t instanceof _l||t instanceof lh)}function dh(t,e,n){if(!Uy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=pl(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function Xc(t,e,n){if((e=je(e))instanceof ml)return e._internalPath;if(typeof e=="string")return fh(t,e);throw Ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const vC=new RegExp("[~\\*/\\[\\]]");function fh(t,e,n){if(e.search(vC)>=0)throw Ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ml(...e.split("."))._internalPath}catch{throw Ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne($.INVALID_ARGUMENT,l+t+c)}function Fy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class By{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ph("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EC extends By{data(){return super.data()}}function ph(t,e){return typeof e=="string"?fh(t,e):e instanceof ml?e._internalPath:e._delegate._internalPath}/**
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
 */function TC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gh{}class mh extends gh{}function wC(t,e,...n){let r=[];e instanceof gh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof yh).length,l=i.filter(c=>c instanceof _h).length;if(o>1||o>0&&l>0)throw new ne($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _h extends mh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _h(e,n,r)}_apply(e){const n=this._parse(e);return $y(e._query,n),new Pr(e.firestore,e.converter,Bc(e._query,n))}_parse(e){const n=uh(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Kp(p,d);const I=[];for(const P of p)I.push(Gp(c,i,P));g={arrayValue:{values:I}}}else g=Gp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Kp(p,d),g=yC(l,o,p,d==="in"||d==="not-in");return Je.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class yh extends gh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)$y(o,c),o=Bc(o,c)}(e._query,n),new Pr(e.firestore,e.converter,Bc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class vh extends mh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new vh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Gi(i,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new qs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function IC(t,e="asc"){const n=e,r=ph("orderBy",t);return vh._create(r,n)}class Eh extends mh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Eh(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,Oa(e._query,this._limit,this._limitType))}}function AC(t){return lC("limit",t),Eh._create("limit",t,"F")}function Gp(t,e,n){if(typeof(n=je(n))=="string"){if(n==="")throw new ne($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$_(e)&&n.indexOf("/")!==-1)throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!oe.isDocumentKey(r))throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ap(t,new oe(r))}if(n instanceof Bt)return ap(t,n._key);throw new ne($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pl(n)}.`)}function Kp(t,e){if(!Array.isArray(t)||t.length===0)throw new ne($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $y(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class bC{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ka].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Qe(o.doubleValue));return new lh(i)}convertGeoPoint(e){return new ah(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=il(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const n=Er(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Oe(cy(r),9688,{name:e});const s=new Wi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function RC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SC extends By{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ph("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends SC{data(e={}){return super.data(e)}}class PC{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new jo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new jo(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:CC(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function CC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}class kC extends bC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function NC(t){t=Yr(t,Pr);const e=Yr(t.firestore,uo),n=Vy(e),r=new kC(e);return TC(t._query),oC(n,t._query).then(s=>new PC(e,r,t,s))}function OC(t,e,n,...r){t=Yr(t,Bt);const s=Yr(t.firestore,uo),i=uh(s);let o;return o=typeof(e=je(e))=="string"||e instanceof ml?_C(i,"updateDoc",t._key,e,n,r):mC(i,"updateDoc",t._key,e),Th(s,[o.toMutation(t._key,nn.exists(!0))])}function DC(t){return Th(Yr(t.firestore,uo),[new Hu(t._key,nn.none())])}function VC(t,e){const n=Yr(t.firestore,uo),r=Yc(t),s=RC(t.converter,e);return Th(n,[gC(uh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Th(t,e){return function(r,s){const i=new fr;return r.asyncQueue.enqueueAndForget(async()=>zP(await sC(r),s,i)),i.promise}(Vy(t),e)}function ac(){return new hh("serverTimestamp")}(function(e,n=!0){(function(s){Bs=s})(Zr),Wr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new uo(new d0(r.getProvider("auth-internal")),new g0(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gn(Qf,Yf,e),gn(Qf,Yf,"esm2017")})();/**
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
 */const jy="firebasestorage.googleapis.com",qy="storageBucket",xC=2*60*1e3,MC=10*60*1e3;/**
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
 */class Ke extends wn{constructor(e,n,r=0){super(lc(e),`Firebase Storage: ${n} (${lc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ke.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ge||(Ge={}));function lc(t){return"storage/"+t}function wh(){const t="An unknown error occurred, please check the error payload for server response.";return new Ke(Ge.UNKNOWN,t)}function LC(t){return new Ke(Ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UC(t){return new Ke(Ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FC(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ke(Ge.UNAUTHENTICATED,t)}function BC(){return new Ke(Ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $C(t){return new Ke(Ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jC(){return new Ke(Ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qC(){return new Ke(Ge.CANCELED,"User canceled the upload/download.")}function HC(t){return new Ke(Ge.INVALID_URL,"Invalid URL '"+t+"'.")}function WC(t){return new Ke(Ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function zC(){return new Ke(Ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qy+"' property when initializing the app?")}function GC(){return new Ke(Ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function KC(){return new Ke(Ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QC(t){return new Ke(Ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Jc(t){return new Ke(Ge.INVALID_ARGUMENT,t)}function Hy(){return new Ke(Ge.APP_DELETED,"The Firebase app was deleted.")}function YC(t){return new Ke(Ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ni(t,e){return new Ke(Ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ui(t){throw new Ke(Ge.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw WC(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),I={bucket:1,path:3},P=n===jy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",L=new RegExp(`^https?://${P}/${s}/${C}`,"i"),V=[{regex:l,indices:c,postModify:i},{regex:_,indices:I,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<V.length;O++){const J=V[O],W=J.regex.exec(e);if(W){const A=W[J.indices.bucket];let y=W[J.indices.path];y||(y=""),r=new Ft(A,y),J.postModify(r);break}}if(r==null)throw HC(e);return r}}class XC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function JC(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...C){u||(u=!0,e.apply(null,C))}function p(C){s=setTimeout(()=>{s=null,t(_,c())},C)}function g(){i&&clearTimeout(i)}function _(C,...L){if(u){g();return}if(C){g(),d.call(null,C,...L);return}if(c()||o){g(),d.call(null,C,...L);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,p(V)}let I=!1;function P(C){I||(I=!0,g(),!u&&(s!==null?(C||(l=2),clearTimeout(s),p(0)):C||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function ZC(t){t(!1)}/**
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
 */function e1(t){return t!==void 0}function t1(t){return typeof t=="object"&&!Array.isArray(t)}function Ih(t){return typeof t=="string"||t instanceof String}function Qp(t){return Ah()&&t instanceof Blob}function Ah(){return typeof Blob<"u"}function Yp(t,e,n,r){if(r<e)throw Jc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Jc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function vl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Wy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var $r;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})($r||($r={}));/**
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
 */function n1(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class r1{constructor(e,n,r,s,i,o,l,c,u,d,p,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,P)=>{this.resolve_=I,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new qo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===$r.NO_ERROR,c=i.getStatus();if(!l||n1(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===$r.ABORT;r(!1,new qo(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new qo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());e1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=wh();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Hy():qC();o(c)}else{const c=jC();o(c)}};this.canceled_?n(!1,new qo(!1,null,!0)):this.backoffId_=JC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function s1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function i1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function o1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function a1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function l1(t,e,n,r,s,i,o=!0,l=!1){const c=Wy(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return o1(d,e),s1(d,n),i1(d,i),a1(d,r),new r1(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function c1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function u1(...t){const e=c1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ah())return new Blob(t);throw new Ke(Ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function h1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function d1(t){if(typeof atob>"u")throw QC("base-64");return atob(t)}/**
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
 */const fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cc{constructor(e,n){this.data=e,this.contentType=n||null}}function f1(t,e){switch(t){case fn.RAW:return new cc(zy(e));case fn.BASE64:case fn.BASE64URL:return new cc(Gy(t,e));case fn.DATA_URL:return new cc(g1(e),m1(e))}throw wh()}function zy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function p1(t){let e;try{e=decodeURIComponent(t)}catch{throw Ni(fn.DATA_URL,"Malformed data URL.")}return zy(e)}function Gy(t,e){switch(t){case fn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ni(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ni(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=d1(e)}catch(s){throw s.message.includes("polyfill")?s:Ni(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ky{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ni(fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function g1(t){const e=new Ky(t);return e.base64?Gy(fn.BASE64,e.rest):p1(e.rest)}function m1(t){return new Ky(t).contentType}function _1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ar{constructor(e,n){let r=0,s="";Qp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qp(this.data_)){const r=this.data_,s=h1(r,e,n);return s===null?null:new ar(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(Ah()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(u1.apply(null,n))}else{const n=e.map(o=>Ih(o)?f1(fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new ar(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Qy(t){let e;try{e=JSON.parse(t)}catch{return null}return t1(e)?e:null}/**
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
 */function y1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function v1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Yy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function E1(t,e){return e}class At{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||E1}}let Ho=null;function T1(t){return!Ih(t)||t.length<2?t:Yy(t)}function Xy(){if(Ho)return Ho;const t=[];t.push(new At("bucket")),t.push(new At("generation")),t.push(new At("metageneration")),t.push(new At("name","fullPath",!0));function e(i,o){return T1(o)}const n=new At("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new At("size");return s.xform=r,t.push(s),t.push(new At("timeCreated")),t.push(new At("updated")),t.push(new At("md5Hash",null,!0)),t.push(new At("cacheControl",null,!0)),t.push(new At("contentDisposition",null,!0)),t.push(new At("contentEncoding",null,!0)),t.push(new At("contentLanguage",null,!0)),t.push(new At("contentType",null,!0)),t.push(new At("metadata","customMetadata",!0)),Ho=t,Ho}function w1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function I1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return w1(r,t),r}function Jy(t,e,n){const r=Qy(e);return r===null?null:I1(t,r,n)}function A1(t,e,n,r){const s=Qy(e);if(s===null||!Ih(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),_=vl(g,n,r),I=Wy({alt:"media",token:u});return _+I})[0]}function b1(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class bh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Zy(t){if(!t)throw wh()}function R1(t,e){function n(r,s){const i=Jy(t,s,e);return Zy(i!==null),i}return n}function S1(t,e){function n(r,s){const i=Jy(t,s,e);return Zy(i!==null),A1(i,s,t.host,t._protocol)}return n}function ev(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=BC():s=FC():n.getStatus()===402?s=UC(t.bucket):n.getStatus()===403?s=$C(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function tv(t){const e=ev(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=LC(t.path)),i.serverResponse=s.serverResponse,i}return n}function P1(t,e,n){const r=e.fullServerUrl(),s=vl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new bh(s,i,S1(t,n),o);return l.errorHandler=tv(e),l}function C1(t,e){const n=e.fullServerUrl(),r=vl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new bh(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=tv(e),l}function k1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function N1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=k1(null,e)),r}function O1(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let V="";for(let O=0;O<2;O++)V=V+Math.random().toString().slice(2);return V}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=N1(e,r,s),d=b1(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",_=ar.getBlob(p,r,g);if(_===null)throw GC();const I={name:u.fullPath},P=vl(i,t.host,t._protocol),C="POST",L=t.maxUploadRetryTime,M=new bh(P,C,R1(t,n),L);return M.urlParams=I,M.headers=o,M.body=_.uploadData(),M.errorHandler=ev(e),M}class D1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=$r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=$r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=$r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw ui("cannot .send() more than once");if(br(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ui("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ui("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ui("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ui("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class V1 extends D1{initXhr(){this.xhr_.responseType="text"}}function Rh(){return new V1}/**
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
 */class Xr{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xr(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Yy(this._location.path)}get storage(){return this._service}get parent(){const e=y1(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YC(e)}}function x1(t,e,n){t._throwIfRoot("uploadBytes");const r=O1(t.storage,t._location,Xy(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,Rh).then(s=>({metadata:s,ref:t}))}function M1(t){t._throwIfRoot("getDownloadURL");const e=P1(t.storage,t._location,Xy());return t.storage.makeRequestWithTokens(e,Rh).then(n=>{if(n===null)throw KC();return n})}function L1(t){t._throwIfRoot("deleteObject");const e=C1(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Rh)}function U1(t,e){const n=v1(t._location.path,e),r=new Ft(t._location.bucket,n);return new Xr(t.storage,r)}/**
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
 */function F1(t){return/^[A-Za-z]+:\/\//.test(t)}function B1(t,e){return new Xr(t,e)}function nv(t,e){if(t instanceof Sh){const n=t;if(n._bucket==null)throw zC();const r=new Xr(n,n._bucket);return e!=null?nv(r,e):r}else return e!==void 0?U1(t,e):t}function $1(t,e){if(e&&F1(e)){if(t instanceof Sh)return B1(t,e);throw Jc("To use ref(service, url), the first argument must be a Storage instance.")}else return nv(t,e)}function Xp(t,e){const n=e==null?void 0:e[qy];return n==null?null:Ft.makeFromBucketSpec(n,t)}function j1(t,e,n,r={}){t.host=`${e}:${n}`;const s=br(e);s&&(Tu(`https://${t.host}/b`),wu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Pm(i,t.app.options.projectId))}class Sh{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=jy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xC,this._maxUploadRetryTime=MC,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=Xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new XC(Hy());{const o=l1(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Jp="@firebase/storage",Zp="0.13.13";/**
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
 */const rv="storage";function q1(t,e,n){return t=je(t),x1(t,e,n)}function H1(t){return t=je(t),M1(t)}function W1(t){return t=je(t),L1(t)}function eg(t,e){return t=je(t),$1(t,e)}function z1(t=bu(),e){t=je(t);const r=Za(t,rv).getImmediate({identifier:e}),s=bm("storage");return s&&G1(r,...s),r}function G1(t,e,n,r={}){j1(t,e,n,r)}function K1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Sh(n,r,s,e,Zr)}function Q1(){Wr(new yr(rv,K1,"PUBLIC").setMultipleInstances(!0)),gn(Jp,Zp,""),gn(Jp,Zp,"esm2017")}Q1();const Y1={apiKey:"AIzaSyAr4nGRhlqXyoHG7dZtqcbj-IN2Xcr0LqM",authDomain:"fir-auth-cozy.firebaseapp.com",projectId:"fir-auth-cozy",storageBucket:"fir-auth-cozy.firebasestorage.app",messagingSenderId:"306302302026",appId:"1:306302302026:web:63ffe859d4cbbeda6073b3",measurementId:"G-SSWWQ42BLN"},Ph=Nm(Y1),jr=o0(Ph),Wo=uC(Ph),tg=z1(Ph),X1=new Vn,sv=new Dn;sv.setCustomParameters({display:"popup"});const J1=async()=>{try{return(await d_(jr,X1)).user}catch(t){throw console.error("Google login error:",t),t}},Z1=async()=>{try{return(await d_(jr,sv)).user}catch(t){throw console.error("Facebook login error:",t),t}},Zc=Fe(null),iv=Fe(!1);let As=null;const ek=()=>{As||(As=Qb(jr,t=>{Zc.value=t,iv.value=!0}))},tk=()=>{As&&(As(),As=null)},nk=async()=>{try{return await Yb(jr),!0}catch(t){throw console.error("Logout error:",t),t}};function El(){As||ek();const t=ze(()=>!!Zc.value);return{user:ca(Zc),isLoggedIn:t,isInitialized:ca(iv),logout:nk,cleanupAuth:tk}}const tr=Fe(""),zo=Fe(""),uc=Fe(!1);function Ch(){const t=Xa(),{isLoggedIn:e,logout:n}=El(),{currentLanguage:r}=Gt(),s={EN:{errors:{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-credential":"Invalid credentials. Please check your email and password.","auth/too-many-requests":"Too many failed attempts. Please try again later.","login-failed":"Login failed. Please try again.","signup-failed":"Signup failed. Please try again.","password-reset-failed":"Failed to send password reset email. Please try again.","password-mismatch":"Passwords do not match.","email-required":"Please enter your email address first.","network-error":"Network error. Please check your connection.","unknown-error":"An unexpected error occurred. Please try again."},success:{"password-reset-sent":"Password reset email sent! Check your inbox.","login-success":"Login successful!","signup-success":"Account created successfully!"},loading:{"logging-in":"Logging in...","signing-up":"Signing up...","sending-reset":"Sending reset email..."}},VN:{errors:{"auth/user-not-found":"Không tìm thấy người dùng với email này.","auth/wrong-password":"Mật khẩu không đúng.","auth/invalid-email":"Địa chỉ email không hợp lệ.","auth/user-disabled":"Tài khoản này đã bị vô hiệu hóa.","auth/email-already-in-use":"Tài khoản với email này đã tồn tại.","auth/weak-password":"Mật khẩu phải có ít nhất 6 ký tự.","auth/invalid-credential":"Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra email và mật khẩu.","auth/too-many-requests":"Quá nhiều lần thử không thành công. Vui lòng thử lại sau.","login-failed":"Đăng nhập thất bại. Vui lòng thử lại.","signup-failed":"Đăng ký thất bại. Vui lòng thử lại.","password-reset-failed":"Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại.","password-mismatch":"Mật khẩu không khớp.","email-required":"Vui lòng nhập địa chỉ email trước.","network-error":"Lỗi mạng. Vui lòng kiểm tra kết nối.","unknown-error":"Đã xảy ra lỗi không mong muốn. Vui lòng thử lại."},success:{"password-reset-sent":"Email đặt lại mật khẩu đã được gửi! Kiểm tra hộp thư của bạn.","login-success":"Đăng nhập thành công!","signup-success":"Tài khoản đã được tạo thành công!"},loading:{"logging-in":"Đang đăng nhập...","signing-up":"Đang đăng ký...","sending-reset":"Đang gửi email đặt lại..."}}},i=(O,J="unknown-error")=>{const W=s[r.value].errors;O.code?tr.value=W[O.code]||W[J]:O.message?O.message.includes("network")?tr.value=W["network-error"]:tr.value=W[J]:typeof O=="string"?tr.value=W[O]||W[J]:tr.value=W[J],zo.value=""},o=O=>{const J=s[r.value].success;zo.value=J[O]||"",tr.value=""},l=()=>{tr.value="",zo.value=""},c=(O=null)=>{uc.value=!0,O&&l()},u=()=>{uc.value=!1},d=async(O,J,W,A)=>{try{c(J),l();const y=await O();return W&&o(W),y}catch(y){throw console.error("Operation failed:",y),i(y,A),y}finally{u()}},p=O=>s[r.value].loading[O]||"",g=O=>btoa(O),_=O=>{try{return atob(O)}catch{return""}},I=async(O,J)=>d(async()=>{if(await zb(jr,O.email,O.password),J){const{setRememberedAuth:W}=Gt();W(O.email,g(O.password))}else{const{clearRememberedAuth:W}=Gt();W()}t.push("/home")},"logging-in",null,"login-failed"),P=async O=>d(async()=>{await Wb(jr,O.email,O.password),t.push("/home")},"signing-up",null,"signup-failed"),C=async O=>d(async()=>{await Hb(jr,O)},"sending-reset","password-reset-sent","password-reset-failed"),L=async()=>d(async()=>{const O=await J1();return console.log("Google login successful:",O),t.push("/home"),O},"logging-in",null,"login-failed"),M=async()=>d(async()=>{const O=await Z1();return console.log("Facebook login successful:",O),t.push("/home"),O},"logging-in",null,"login-failed"),V=async()=>{if(e.value)try{await n(),t.push("/")}catch(O){console.error("Logout error:",O)}};return{loading:ze(()=>uc.value),error:ze(()=>tr.value),successMessage:ze(()=>zo.value),isLoggedIn:e,encryptPassword:g,decryptPassword:_,handleLogin:I,handleSignup:P,handleForgotPassword:C,handleLogout:V,handleGoogleLogin:L,handleFacebookLogin:M,clearMessages:l,getLoadingMessage:p,handleError:i}}const ns=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rk={class:"container-right-nav"},sk=["disabled"],ik={__name:"NavRight",setup(t){const{changeThemeColor:e,toggleLanguage:n,t:r}=Gt(),{isLoggedIn:s,handleLogout:i}=Ch();return(o,l)=>(me(),_e("div",rk,[x("button",{class:"nav-circle orange-circle",onClick:l[0]||(l[0]=c=>te(e)("#ff7b42","255, 123, 66"))}),x("button",{class:"nav-circle green-circle",onClick:l[1]||(l[1]=c=>te(e)("#a4f28d","164, 242, 141"))}),x("button",{class:"nav-circle yellow-circle",onClick:l[2]||(l[2]=c=>te(e)("#ffeb7c","255, 235, 124"))}),x("button",{class:"nav-button language-button",onClick:l[3]||(l[3]=(...c)=>te(n)&&te(n)(...c))},be(te(r).languageBtn),1),x("button",{class:xt(["nav-button logout-button",{disabled:!te(s)}]),onClick:l[4]||(l[4]=(...c)=>te(i)&&te(i)(...c)),disabled:!te(s)},be(te(r).logoutBtn),11,sk)]))}},ok=ns(ik,[["__scopeId","data-v-8e237b3f"]]),ak={__name:"App",setup(t){const{initializeTheme:e}=Gt();return Us(()=>{e()}),(n,r)=>{const s=xE("router-view");return me(),_e("div",null,[Pe(ok),Pe(s)])}}};function lk(){const t=o=>o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?null:"email-invalid":"email-required",e=o=>o?null:"password-required",n=(o,l)=>l?o!==l?"password-mismatch":null:"confirm-password-required";return{validateEmail:t,validatePassword:e,validatePasswordConfirmation:n,validateLoginForm:o=>{const l=t(o.email);if(l)return l;const c=e(o.password);return c||null},validateSignupForm:o=>{const l=t(o.email);if(l)return l;const c=e(o.password);if(c)return c;const u=n(o.password,o.confirmPassword);return u||null},validateForgotPasswordForm:o=>t(o)}}const ck={id:"container-form-login"},uk={class:"tab-buttons-login"},hk={class:"form-container"},dk={class:"input-group"},fk=["placeholder"],pk={class:"password-input-container"},gk=["type","placeholder"],mk={class:"form-options"},_k={class:"remember-me"},yk=["disabled"],vk={class:"input-group"},Ek=["placeholder"],Tk={class:"password-input-container"},wk=["type","placeholder"],Ik={class:"password-input-container"},Ak=["type","placeholder"],bk=["disabled"],Rk={key:0,class:"error-message"},Sk={key:1,class:"success-message"},Pk={__name:"LoginForm",setup(t){const{t:e,currentLanguage:n,getRememberedAuth:r}=Gt(),{loading:s,error:i,successMessage:o,decryptPassword:l,handleLogin:c,handleSignup:u,handleForgotPassword:d,clearMessages:p,handleError:g}=Ch(),{validateLoginForm:_,validateSignupForm:I,validateForgotPasswordForm:P}=lk(),C=Fe("login"),L=Fe(!1),M=Fe(!1),V=Fe(!1),O=Fe(!1),J=bs({email:"",password:""}),W=bs({email:"",password:"",confirmPassword:""});Us(()=>{const b=r();b.email&&(J.email=b.email,J.password=b.password?l(b.password):"",L.value=!0)});const A=b=>{C.value=b,p()},y=()=>{p();const b=_(J);if(b){g(b);return}c(J,L.value)},w=()=>{p();const b=I(W);if(b){g(b);return}u(W)},R=()=>{p();const b=P(J.email);if(b){g(b);return}d(J.email)};return(b,S)=>(me(),_e("div",ck,[x("div",uk,[x("button",{class:xt(["tab-button",{active:C.value==="login"}]),onClick:S[0]||(S[0]=v=>A("login"))},be(te(e).loginTab),3),x("button",{class:xt(["tab-button",{active:C.value==="signup"}]),onClick:S[1]||(S[1]=v=>A("signup"))},be(te(e).signupTab),3)]),x("div",hk,[Sn(x("form",{class:"form",onSubmit:zl(y,["prevent"])},[x("div",dk,[Sn(x("input",{type:"email",class:"input-field theme-input",placeholder:te(e).emailPlaceholder,"onUpdate:modelValue":S[2]||(S[2]=v=>J.email=v),required:""},null,8,fk),[[Li,J.email]]),x("div",pk,[Sn(x("input",{type:M.value?"text":"password",class:"input-field theme-input",placeholder:te(e).passwordPlaceholder,"onUpdate:modelValue":S[3]||(S[3]=v=>J.password=v),required:""},null,8,gk),[[Wl,J.password]]),x("button",{type:"button",class:"toggle-password",onClick:S[4]||(S[4]=v=>M.value=!M.value)},be(M.value?"🙈":"👁️"),1)])]),x("div",mk,[x("label",_k,[Sn(x("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":S[5]||(S[5]=v=>L.value=v)},null,512),[[am,L.value]]),x("span",null,be(te(e).rememberMe),1)]),x("a",{href:"#",class:"forgot-password",onClick:zl(R,["prevent"])},be(te(e).forgotPassword),1)]),x("button",{type:"submit",class:"submit-button",disabled:te(s)},be(te(s)?te(n)==="EN"?"Logging in...":"Đang đăng nhập...":te(e).loginBtn),9,yk)],544),[[Bd,C.value==="login"]]),Sn(x("form",{class:"form",onSubmit:zl(w,["prevent"])},[x("div",vk,[Sn(x("input",{type:"email",class:"input-field theme-input",placeholder:te(e).emailPlaceholder,"onUpdate:modelValue":S[6]||(S[6]=v=>W.email=v),required:""},null,8,Ek),[[Li,W.email]]),x("div",Tk,[Sn(x("input",{type:V.value?"text":"password",class:"input-field theme-input",placeholder:te(e).passwordPlaceholder,"onUpdate:modelValue":S[7]||(S[7]=v=>W.password=v),required:""},null,8,wk),[[Wl,W.password]]),x("button",{type:"button",class:"toggle-password",onClick:S[8]||(S[8]=v=>V.value=!V.value)},be(V.value?"🙈":"👁️"),1)]),x("div",Ik,[Sn(x("input",{type:O.value?"text":"password",class:"input-field theme-input",placeholder:te(e).confirmPasswordPlaceholder,"onUpdate:modelValue":S[9]||(S[9]=v=>W.confirmPassword=v),required:""},null,8,Ak),[[Wl,W.confirmPassword]]),x("button",{type:"button",class:"toggle-password",onClick:S[10]||(S[10]=v=>O.value=!O.value)},be(O.value?"🙈":"👁️"),1)])]),x("button",{type:"submit",class:"submit-button",disabled:te(s)},be(te(s)?te(n)==="EN"?"Signing up...":"Đang đăng ký...":te(e).signupBtn),9,bk)],544),[[Bd,C.value==="signup"]]),te(i)?(me(),_e("div",Rk,be(te(i)),1)):Nn("",!0),te(o)?(me(),_e("div",Sk,be(te(o)),1)):Nn("",!0)])]))}},Ck=ns(Pk,[["__scopeId","data-v-12444bfa"]]),kk={id:"container-social-login"},Nk={class:"qr-section"},Ok={class:"qr-title"},Dk={class:"social-login"},Vk={class:"social-title"},xk={class:"social-buttons"},Mk={__name:"LoginSocial",setup(t){const{t:e}=Gt(),{handleGoogleLogin:n,handleFacebookLogin:r}=Ch();return(s,i)=>(me(),_e("div",kk,[x("div",Nk,[x("div",Ok,be(te(e).qrTitle),1),i[2]||(i[2]=x("div",{class:"qr-code"},[x("div",{class:"qr-pattern",id:"qrcode"},[x("div",{class:"qr-placeholder"},[x("br"),Ec(" QR Login"),x("br"),Ec(" Coming Soon ")])])],-1))]),x("div",Dk,[x("div",Vk,be(te(e).socialTitle),1),x("div",xk,[x("button",{class:"social-button facebook-btn",onClick:i[0]||(i[0]=(...o)=>te(r)&&te(r)(...o))},i[3]||(i[3]=[x("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor"},[x("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})],-1)])),x("button",{class:"social-button google-btn",onClick:i[1]||(i[1]=(...o)=>te(n)&&te(n)(...o))},i[4]||(i[4]=[_T('<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-v-52ba109a><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" data-v-52ba109a></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" data-v-52ba109a></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" data-v-52ba109a></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" data-v-52ba109a></path></svg>',1)]))])])]))}},Lk=ns(Mk,[["__scopeId","data-v-52ba109a"]]),Uk={class:"login-page"},Fk={class:"container-main"},Bk={class:"container-right"},$k={__name:"Login",setup(t){return(e,n)=>(me(),_e("div",Uk,[n[0]||(n[0]=x("div",{class:"container-left"},null,-1)),x("div",Fk,[Pe(Ck)]),x("div",Bk,[Pe(Lk)])]))}},jk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2av04UURTGfzHR+C+uwcXEyj+F+gDGVmvtEAzEF9ClMD6CLOEFTGxUBGwUeq3MgoouoBYUqzYSC9TOlVIi11xzTMgE2HPP3JnZxPmSL9nszp7vfjsz55x7ZqFEiRJ5ohfoB0aBGWAWeCv0r6flsytAlS7DYWAYaAIbgFPSH/sGqAGVog2MAT8DFr8d23KmKnmbuAZ8j2AgyW/AUB4GDgKPMjCQ5CRwICsTPXJNu5y4BBzNIht9yNGEE7ZEO9rltFSACSdcAPbHMDJZoAknHI+RnaziG1Jb7goXAuuMS3AwTZ2wptiPwLktYp4HPhljfrXWmTGj4EqHG9Rnoi/G2KOWs9E2ivk+qhMGjLHboWdl2Cjk25Xdivh7gDWjxo0QI02jyHKAxrJR47VWoDdFdvkcYGTFqPFbuwXoNwo4+QGOKzROptBwyvvwb2ZII3JPoTGeUqOuMTKTUsTz5g7xb0WI/0RjZC6CkOdT4BJwTHgZeBYp9qzGyPtIYlny3X9l5EUXLNR1YENjZLoLFuo68LHGSD0w6G3gLHDKSP/dkUDNkdgF0We4WHgZoNunCViVNkAT0O8eY0G7E/VrO6INqp2WPI9oxN/AGs35kKA1ZdBfwIkIJnzvta7UvB4SuBKwsXoF7E1hYp+05hqtH5btbkjz6Kftpw0mzkhxi5qtkqjILFYrsi5d7QVgF9vDf3YRmAi4nBywChzCiKEAoc1ckw5hCrgjnJIUa93iXiUlJozCMXmfCPBT8cUCTTRjjUz/7eNbBZhoZfGIrkeKUV4mFmNO4pPwp/hhDiYexLycdsKgzGJjG1iNkZ0sdaaeYrSarNi+2JnrRCxDNWkztF2zk2PnZQRa6OPprVCVvUJdRjaNTX8YaMh7dTlG3YqXKFGC1PgDcfh0wGATYKgAAAAASUVORK5CYII=",qk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2Zuy8EQRzHPyIUEgpRiHgk5CoKveioHH+ISGgUKgVRKBQqGhKhFwqvOIWOQiJRiA6Vx3mcN0E2+Uk2G7v2MTOLzCeZ7N1vvjf3++78dnIzB5b/STewBdxJywFZBVqjjAEfPm00gdYo3QGJfbVsDK1xtkIktxlDa5xCiORuY2iNEya5mxha4+QilEsUrXGyIZLriqFNhdGAxEYSaFMhK2VRkLYZcHeDtMXSvwhcA7tAC3+IWmAYOPlmpnb45ZTI3V8C3gJKrqArgUZgEjgEnkM8wEnbjA4THcCTgeQ/gHNgCCjVYWTPgIFjYACo1GWiWbOBI6AfqJKr8+AP6jAyriH5e2Ad6AGq5Wf+las/LzOjDGd9P02QcJvPuGXSNwU8+nx2QqWRTs/gmYhGioCLCPqM6/WTrJRKmPd8ETGMvEfQ43k/iyJuUjaS/y9GLlUZWUjZyJwqI+0JjSTVt6GQ/ZSMHKCYvpRKq1e1kXI55TA5IwWgAg1MGzYyjSYaXEuh7tI6k52jNjIBRjIRjfjpHZowRJQSihM3hjWCnRE92NLClpYebGlhS0sPtrSwpaWHB095OQdpfPNXw1f81RN/+WEcYyx7EliV+IYn7pztIntvdzz3wzjGqAFW5MzLuda5Nl/rsk1dA+ol3gpsywzkXHG/cSz8ZT4BbD/BpvSHvswAAAAASUVORK5CYII=",Hk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVR4nO2ZvUrEQBRGj1iIFqKNhRZWNlZaKFqJnVtZbaGlPsCiT2CpNmJppY0oeQNfQHAt7LQQbRbcUrAQF2RHAjcQQpJ1Y35m3Hvgg0D+7mFyMxMCiuIkE8CxxN92kjngETCSZ2Aex9gA3kMSQT6ATRyhAXzHSATpAgfAEJYyAlykCERzDYxhGTNAsw+JIPdybpRd4Arw5EUxXobECvCWQSKIf+5q6HpLMcccFS2xDXz+QSLIF7Aj16zH7PdHphCGgcMcBKI5A7bKEpkEbgqQCD9qhYv4k9xTgRImIV4Zk5xTIo0ek5z1IqPAZYUCRtKUWjIxDdxZIGEkD8BsvxLLQNuC4k0kbant17xaULRJyMtAiiwC5/K2aFlQfEtq8WtaICOeBSJe1uJVhAEckSTqKtIDHRH00UKbPQ3tEbRH0B5JQ3sE7RGc6hEvIbeuLRpLX8afWiBykofIuvwuq0qiC6yRE/tApwKJDrBHzkwBNfmCKyM1uaeiKMo/5AfqJDSwWMSe7AAAAABJRU5ErkJggg==",Wk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2ZW4gPcRTHPwi1tR7kErubzT2LTSi3LPuilPAiSVmpfdlc2pTaB/ZBER5cV3kSi1XKiyha64UIRRbJNS/u97DrsqNTZ/Vr+v93fjPzmzWb+dSpf2d+c+Z85//7nTm/GcjIyMj4XxkFVAENQDPwBHgP/FKT34/1mIxZBYwkJRQDW4C7gBfRWoHNQNG/EDAeOKZ32nNkEqsRGNsdAgqAeqDdoQC//QT2AIVJiZgQcwqFtQdAuWsRi4Fv3SjCU5NrLnIlYrn+3d0twjOm2rK4IioTXg+21gbMiypiKPAiBSI8tVfAsChCTqcgec9np8KKmJ+CpL08VhFGyIUUJOzlsXNheqaOFCTs5THJrdRGSG0KkvUCbENPXeRelEX/MAWJehbtSyCfU5CoF2AfbYT8SEGinkXbEsjrBKuNlPWNwAzdSPXXdl0q5UJgh06boFiy2wykNQERR3UzZkNv7XhvdxHvjk2gww4FvIvRhvcDtueJKzvJQNY4EvEWmEJ8anPEXm1z4iBtm+OuhwW445ARu01ztKIxphB5MeGSAdrGd643aybG3BXOxD27NPbesCfujijiTY5Ym/SF3VlgiPpKgIvAI6DGGFujvmYd00mFxr8RVojU93sRhFz3xSnzHd+n/iM+v7zsK+qiOpWoT3atoRkHfIoppNx3/KD6j/v8I9RMX5Nv6y2+l0RkdkgxUnZ7GefL723AB+CyMV1GAzf1WVNnjK/TGHJsjOGfE3VqmUw3qoaNiXjXbPVNzcgMB1oshZzALYU6pST2LBcB+wBrdToEiZEm0BUHNOYlHDMQeGrRoU5zcK11xuvTSTimzPIFhSzwpRGv0RfYqdf5DawgAZryJL4fWK9fpK4Z/pMh72a5sZ1o169bzqnMIUDWzErfOCm71cAXHdOhc1zK61x9ZhToQi7VNVUFDAau6Dn3dROWCLd8nWiD0Xbkolj7JNtn0Xejz5tKgrToR836kN/9pINdos+Bq1osvqrAZ8B54Iyuh05R0pv1WCbrv/xc+7GMjIwM/vIH8BXcFZyyIHYAAAAASUVORK5CYII=",zk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2Zvy4EURSHP1QkxJ9+Ezo6FbWIREEkomC7FZ5hC5IteIKthKcQKtmohMIbaHgFihUJI0fuNJPZQfbeM3M5X/Jr5syffJlz7+TeAcMwymIAaABXLg13LDoOgSSTAyJjCHjJEXl2tWio5UikkVo0LBaISK3SDAJ14K5AQvIB3AI7VRz8c8D9NwJ5kWtmqQgbPQb2TyMTwHrZEsvAax8Sad6A1bIkZvp8E9nIvaa1JWSQXnuUSNPRFlkJIJFmSVPkIqDIuZbEiKcB3itdYFhrpgolkWi2156CyK6GSFNBpKkh0lIQaZnIL7A3grVWGKy1sNYKg7UW1lph+BOtNeaWo6FFOu5ZQZgHHhQkEpdHYCHEGqSrKJG4yDP3fUlslSCQZLLpQ+SsAiKnPkTqFRDZxhOyN9sGTpTTBtZ8SfxbRt0EURQ5p/JMAO8F/S61cSLhskBEtlujoQY89fhaR/UzVJgCjoEblyNg8qtiGAbafAJWJByq5iGepgAAAABJRU5ErkJggg==",Gk={class:"container-mid-nav"},ng="activeNavItem",Kk={__name:"NavMid",setup(t){const e=Xa(),n=lI(),{getItem:r,setItem:s}=Gt(),i=Fe("home"),o={home:"/",profile:"/profile",friend:"/friend",mess:"/mess",notification:"/notification"},l={"/":"home","/profile":"profile","/friend":"friend","/mess":"mess","/notification":"notification"},c=u=>{i.value=u;const d=o[u];d&&n.path!==d&&e.push(d)};return Us(()=>{const u=l[n.path];if(u)i.value=u;else{const d=r(ng,"home");i.value=d}}),Br(i,u=>{s(ng,u)},{immediate:!0}),Br(()=>n.path,u=>{const d=l[u];d&&d!==i.value&&(i.value=d)}),(u,d)=>(me(),_e("div",Gk,[x("button",{class:xt(["nav-item",{active:i.value==="profile"}]),onClick:d[0]||(d[0]=p=>c("profile")),"data-tooltip":"Profile"},d[5]||(d[5]=[x("img",{src:jk,alt:"Profile",class:"nav-icon"},null,-1)]),2),x("button",{class:xt(["nav-item",{active:i.value==="friend"}]),onClick:d[1]||(d[1]=p=>c("friend")),"data-tooltip":"Friends"},d[6]||(d[6]=[x("img",{src:qk,alt:"Friends",class:"nav-icon"},null,-1)]),2),x("button",{class:xt(["nav-item",{active:i.value==="home"}]),onClick:d[2]||(d[2]=p=>c("home")),"data-tooltip":"Home"},d[7]||(d[7]=[x("img",{src:Hk,alt:"Home",class:"nav-icon"},null,-1)]),2),x("button",{class:xt(["nav-item",{active:i.value==="mess"}]),onClick:d[3]||(d[3]=p=>c("mess")),"data-tooltip":"Messages"},d[8]||(d[8]=[x("img",{src:Wk,alt:"Messages",class:"nav-icon"},null,-1)]),2),x("button",{class:xt(["nav-item",{active:i.value==="notification"}]),onClick:d[4]||(d[4]=p=>c("notification")),"data-tooltip":"Notifications"},d[9]||(d[9]=[x("img",{src:zk,alt:"Notifications",class:"nav-icon"},null,-1)]),2)]))}},Ws=ns(Kk,[["__scopeId","data-v-8cc26ab5"]]),Qk={id:"container-menu-home"},Yk={class:"menu-buttons"},Xk={class:"menu-button"},Jk={class:"menu-button"},Zk={__name:"HomeMenu",setup(t){const e=Xa(),{t:n}=Gt(),r=()=>{e.push("/status")};return(s,i)=>(me(),_e("div",Qk,[x("div",Yk,[x("button",{class:"menu-button",onClick:r},be(te(n).actionButtons.upload),1),x("button",Xk,be(te(n).actionButtons.discover),1),x("button",Jk,be(te(n).actionButtons.settings),1)])]))}},zs=ns(Zk,[["__scopeId","data-v-8f26325a"]]),ln=Fe(!1),hc=Fe("");function ov(){const{user:t}=El(),{currentLanguage:e}=Gt(),n={EN:{"upload-failed":"Failed to upload file. Please try again.","post-failed":"Failed to create post. Please try again.","fetch-failed":"Failed to load posts. Please try again.","delete-failed":"Failed to delete post. Please try again.",unauthorized:"You must be logged in to perform this action.","file-too-large":"File size must be less than 10MB.","invalid-file-type":"Invalid file type. Only images and videos are allowed."},VN:{"upload-failed":"Tải file lên thất bại. Vui lòng thử lại.","post-failed":"Tạo bài viết thất bại. Vui lòng thử lại.","fetch-failed":"Tải bài viết thất bại. Vui lòng thử lại.","delete-failed":"Xóa bài viết thất bại. Vui lòng thử lại.",unauthorized:"Bạn phải đăng nhập để thực hiện hành động này.","file-too-large":"Kích thước file phải nhỏ hơn 10MB.","invalid-file-type":"Loại file không hợp lệ. Chỉ cho phép ảnh và video."}},r=g=>{hc.value=n[e.value][g]||g},s=()=>{hc.value=""},i=g=>g.size>10*1024*1024?(r("file-too-large"),!1):!g.type.startsWith("image/")&&!g.type.startsWith("video/")?(r("invalid-file-type"),!1):!0,o=async g=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");if(!i(g))throw new Error("File validation failed");try{const _=`${Date.now()}_${g.name}`,I=eg(tg,`uploads/${t.value.uid}/${_}`),P=await q1(I,g);return{url:await H1(P.ref),fileName:_,fileType:g.type,fileSize:g.size,storagePath:P.ref.fullPath}}catch(_){throw console.error("File upload error:",_),r("upload-failed"),_}},l=async g=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{ln.value=!0,s();const _={userId:t.value.uid,userEmail:t.value.email,caption:g.caption||"",mediaUrl:g.mediaUrl||"",mediaType:g.mediaType||"",fileName:g.fileName||"",createdAt:ac(),updatedAt:ac(),likes:0,comments:0};return{id:(await VC(qp(Wo,"posts"),_)).id,..._}}catch(_){throw console.error("Create post error:",_),r("post-failed"),_}finally{ln.value=!1}},c=async(g,_="")=>{try{ln.value=!0,s();const I=await o(g),P={caption:_,mediaUrl:I.url,mediaType:I.fileType,fileName:I.fileName};return await l(P)}catch(I){throw console.error("Create post with file error:",I),I}},u=async(g=10)=>{try{ln.value=!0,s();const _=wC(qp(Wo,"posts"),IC("createdAt","desc"),AC(g)),I=await NC(_),P=[];return I.forEach(C=>{P.push({id:C.id,...C.data()})}),P}catch(_){throw console.error("Get posts error:",_),r("fetch-failed"),_}finally{ln.value=!1}},d=async(g,_=null)=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{if(ln.value=!0,s(),_)try{const I=eg(tg,_);await W1(I)}catch(I){console.warn("Failed to delete file from storage:",I)}return await DC(Yc(Wo,"posts",g)),!0}catch(I){throw console.error("Delete post error:",I),r("delete-failed"),I}finally{ln.value=!1}},p=async(g,_)=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{ln.value=!0,s();const I=Yc(Wo,"posts",g),P={..._,updatedAt:ac()};return await OC(I,P),!0}catch(I){throw console.error("Update post error:",I),r("post-failed"),I}finally{ln.value=!1}};return{loading:ze(()=>ln.value),error:ze(()=>hc.value),uploadFile:o,createPost:l,createPostWithFile:c,getPosts:u,deletePost:d,updatePost:p,clearError:s,validateFile:i}}const eN={id:"container-home-feed"},tN={key:0,class:"loading-state"},nN={class:"loading-text"},rN={key:1,class:"error-state"},sN={class:"error-text"},iN={key:2,class:"empty-state"},oN={class:"empty-text"},aN={key:3,class:"posts-container"},lN={class:"post-header"},cN={class:"user-info"},uN={class:"user-details"},hN={class:"user-email"},dN={class:"post-date"},fN={key:0,class:"post-actions"},pN=["onClick","disabled"],gN={key:0,class:"post-media"},mN=["src","alt"],_N=["src"],yN={key:1,class:"post-caption"},vN={class:"post-footer"},EN={class:"post-stats"},TN={class:"stat-item"},wN={class:"stat-item"},IN={key:4,class:"load-more-container"},AN=["disabled"],bN={__name:"HomeFeed",setup(t){const{getPosts:e,deletePost:n,loading:r,error:s,clearError:i}=ov(),{user:o}=El(),{t:l,currentLanguage:c}=Gt(),u=Fe([]),d=Fe(null),p=Fe(10),g=async()=>{try{i();const L=await e(p.value);u.value=L,console.log("Posts loaded:",L)}catch(L){console.error("Failed to load posts:",L)}},_=async()=>{try{p.value+=10,await g()}catch(L){console.error("Failed to load more posts:",L)}},I=async L=>{if(!C(L)||d.value)return;const M=c.value==="EN"?"Are you sure you want to delete this post?":"Bạn có chắc chắn muốn xóa bài viết này?";if(confirm(M))try{d.value=L.id,await n(L.id,L.storagePath),u.value=u.value.filter(V=>V.id!==L.id),console.log("Post deleted successfully:",L.id)}catch(V){console.error("Failed to delete post:",V)}finally{d.value=null}},P=L=>{if(!L)return"";try{return(L.toDate?L.toDate():new Date(L)).toLocaleDateString(c.value==="EN"?"en-US":"vi-VN",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(M){return console.warn("Date format error:",M),""}},C=L=>o.value&&L.userId===o.value.uid;return Us(()=>{g()}),(L,M)=>(me(),_e("div",eN,[te(r)?(me(),_e("div",tN,[M[0]||(M[0]=x("div",{class:"loading-spinner"},"⏳",-1)),x("div",nN,be(te(l).loading||"Loading..."),1)])):te(s)?(me(),_e("div",rN,[x("div",sN,be(te(s)),1),x("button",{class:"retry-button",onClick:g},be(te(l).retry||"Retry"),1)])):u.value.length===0?(me(),_e("div",iN,[M[1]||(M[1]=x("div",{class:"empty-icon"},"📋",-1)),x("div",oN,be(te(l).noPosts||"No posts yet"),1)])):(me(),_e("div",aN,[(me(!0),_e(hn,null,UE(u.value,V=>(me(),_e("div",{key:V.id,class:"post-item"},[x("div",lN,[x("div",cN,[M[2]||(M[2]=x("div",{class:"user-avatar"},null,-1)),x("div",uN,[x("div",hN,be(V.userEmail),1),x("div",dN,be(P(V.createdAt)),1)])]),C(V)?(me(),_e("div",fN,[x("button",{class:"action-btn delete-btn",onClick:O=>I(V),disabled:d.value===V.id},be(d.value===V.id?"⏳":"🗑️"),9,pN)])):Nn("",!0)]),V.mediaUrl?(me(),_e("div",gN,[V.mediaType.startsWith("image/")?(me(),_e("img",{key:0,src:V.mediaUrl,alt:V.caption,class:"media-image"},null,8,mN)):V.mediaType.startsWith("video/")?(me(),_e("video",{key:1,src:V.mediaUrl,class:"media-video",controls:""},null,8,_N)):Nn("",!0)])):Nn("",!0),V.caption?(me(),_e("div",yN,be(V.caption),1)):Nn("",!0),x("div",vN,[x("div",EN,[x("span",TN,"❤️ "+be(V.likes||0),1),x("span",wN,"💬 "+be(V.comments||0),1)])])]))),128))])),u.value.length>0&&u.value.length>=p.value?(me(),_e("div",IN,[x("button",{class:"load-more-btn",onClick:_,disabled:te(r)},be(te(r)?te(l).loading||"Loading...":te(l).loadMore||"Load More"),9,AN)])):Nn("",!0)]))}},RN=ns(bN,[["__scopeId","data-v-61c97bc1"]]),SN={class:"container-mid-nav"},PN={class:"home-page"},CN={class:"container-left"},kN={class:"container-main"},NN={__name:"Home",setup(t){return(e,n)=>(me(),_e("div",null,[x("div",SN,[Pe(Ws)]),x("div",PN,[x("div",CN,[Pe(zs)]),x("div",kN,[Pe(RN)]),n[0]||(n[0]=x("div",{class:"container-right"},null,-1))])]))}},ON="/assets/sound-C8rOa-_O.gif",DN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2Y30/TUBTH+6Zv6l+g/kP9N/yR+Mx+dQM0waRsazUxEbq129624cs0sh9ITOY6BR42UUCFBBYV2Iasa5GNbsecwRKVIWy7ncV4kvPS3tt+er6355x7Keq8Gm17BoN0qhdA9vnuQJz+ZwHpn9wIKLofiY2OJt0v1J+i+dd+jJPMwgqg1IGoW1jhPyCYJoK2cV+9vKcTk3dHOwCb21cjBujkpFKhpBADXC9WgOGlIjHAYT40k323RgxQXlyF4QehBDFA67jvlm8qXiUFKEQTqtU9eYMYoMsrXnZ4RA1l1vNPAdJCT67nYrBRUsDuEbWh+48vUSSN8Uj3JiPTmqpUoCkHu4ZrZoOgViswEZ7WHB7/CEXaXC7xIsNJK8lsXtfKX6EpB84OJwdBK29CPJPTGV5axmdRRtjQmHiN4cStpJzXMZJ6LnYmWTFyiUxOd3Dilp0VrlJGGr7AyQWWUO5CSQGt+Bnqyy+hMRcGyIgtb8yHW9fwHo5BWXGO4XBtu8PzFxycNMJ4RTUUm91b2/x27E/Fa3gPxzg8fhfOGQhcG5Dx+kftXlE7DRDH4McMDBDXoZOTVoRIXCuUqqfmPJRYiExrTl5axrmGwtnZieuMV9pOZd/q3SbnZDavO7zStmGQmBqcfOBD6nX3cEobUs7rTqPSzGGijmv9lrlJTNSceJconGXs0ZXDUtd5zalKBWprc9CYj7RSTG31DajK7olrknips7DCbf+TxLFmQa0qUF+aBUj7Oibpg/czHUGFqYRqYYWbxABHH4Ze/N5uff/yEZqydHqpy4iwv7HYod0KpgxrWFHCbpuF2qescQ2r1e072Dlq+TEavbZb++v51jNw+4DbCOLbTlxzrXrbIyC88rcaB8O2nShTz3DpX6U2BLCxEO0bsLEQJQ9o+qMP2oyHR7TZj9/o83CAyZodkDbzITplEvsBq2Sww6XYVGcAAAAASUVORK5CYII=",VN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0ElEQVR4nO2ZS2jUUBSGPx+l4hOh44yKC6sgiIrgpqIbURF3uhAEQVdWRMStC0FxVaTTEe1OcCFIQUHE11JFcOFjY20VBHXhG3xW1IqPkQN/4BLSmWSSZhKZD8JMknvvnJ//5Nx7M9CiRYv/hZnAAeAJcJMcsgQ4CYwAVR2PyQkTgA3AOeC3I8A7zJlMMwPoBoYDgvcOc2YWGWUR0AN8dAJ+BfQDL31CTpDB9NkEXAX+OIFeB7YAJWBQ117o86+emUwwXekz5AQ/CpwBVqhNwRHxCOjV92tkgE6lzwdHwGvgCNDhtCv4RMwHnul8cxPjZ21A9bkP7AQm+9oWfCIsvbbq3OaPiWkHP0WBPvSljwnqGqNPkAjjhq7tb3b6vFH6WKBEFLFMD/iIZvbU0udXQPq01ek7lgjjlK4fJ4X08YKw46cErQ45Ri0Rs4Fv41ly5ylV3jsC3iqlrMKQgAjjoO5dIaX06ZY7JChiEvBc923SjE270udBQPqsaXDMeiKMbUmV3KD0eaf0WRBj3DAijFtqs48Y9Psmr3tyxdwhIRGDNcrxSrX5rNVww3jLgapSainxCSvCOK12FWJS0iDfNaCtTAdiCIoiogD80G8ubvD3AgftUS33BF2W9Uk/Ex6H1PZSzNgTFRRVhC0gvX3HxgTjjyUoqghju9PeNl3jTj1BjYgwbqvPXlKmCJR9ggYiPNguq9Tnk3aQTaFDk+cXp2xHcQJtc62fbWmbzhzgvAIyZ6I4OypHO8kI5s5XBbU8ZJ/DEn+RjNEbwZU2573VejJGUQUgjCs7JGI4rZIblXJIV+6o3R4ySjGEK11OyZ1GhinXceWs7h8j4xRruDJXO03b9ywkB/SN4cpRXb9ATigFuNKuty4mZB05os/nyi6dD2W15IZ15a6E7CaHVJx3AFW9G55KDik5y/2q9jO5pSIRuSm5tVx5qv/MW7RoQbr8A2pLKcu/QDhRAAAAAElFTkSuQmCC",xN={id:"container-create-status"},MN={class:"user-info"},LN={class:"username"},UN={key:0,class:"upload-empty"},FN={key:1,class:"file-preview"},BN=["src"],$N=["src"],jN={key:2,class:"audio-preview"},qN={class:"audio-controls"},HN=["src"],WN={key:3,class:"file-info"},zN={class:"file-name"},GN={class:"controls"},KN=["disabled"],QN={class:"input-wrapper"},YN=["placeholder","disabled"],XN=["disabled"],JN={key:0,src:DN,alt:"Loading",class:"control-icon loading"},ZN={key:1,src:VN,alt:"Post",class:"control-icon"},eO={key:0,class:"error-message"},tO={key:1,class:"success-message"},nO={__name:"StatusCreation",setup(t){const e=Xa(),{t:n,currentLanguage:r}=Gt(),{createPostWithFile:s,loading:i,error:o,clearError:l}=ov(),c=Fe(null),u=Fe(""),d=Fe(null),p=Fe(""),g=Fe(""),_=ze(()=>!!d.value&&!i.value),I=ze(()=>{var W;return(W=d.value)==null?void 0:W.type.startsWith("image/")}),P=ze(()=>{var W;return(W=d.value)==null?void 0:W.type.startsWith("video/")}),C=ze(()=>{var W;return(W=d.value)==null?void 0:W.type.startsWith("audio/")}),L=()=>{var W;i.value||(W=c.value)==null||W.click()},M=W=>{const A=W.target.files[0];A&&(d.value=A,p.value&&URL.revokeObjectURL(p.value),p.value=URL.createObjectURL(A),l())},V=()=>{i.value||J("/home")},O=async()=>{if(!(!d.value||i.value))try{l(),g.value="",await s(d.value,u.value),g.value=r.value==="EN"?"Post created successfully!":"Tạo bài viết thành công!",setTimeout(()=>J("/home"),1500)}catch(W){console.error("Failed to create post:",W)}},J=W=>{p.value&&URL.revokeObjectURL(p.value),d.value=null,u.value="",g.value="",l(),e.push(W)};return(W,A)=>(me(),_e("div",xN,[x("div",MN,[A[1]||(A[1]=x("div",{class:"avatar"},null,-1)),x("span",LN,be(te(n).me),1)]),x("div",{class:xt(["upload-area",{disabled:te(i)}]),onClick:L},[d.value?(me(),_e("div",FN,[I.value?(me(),_e("img",{key:0,src:p.value,alt:"Preview",class:"preview-media"},null,8,BN)):P.value?(me(),_e("video",{key:1,src:p.value,class:"preview-media",controls:""},null,8,$N)):C.value?(me(),_e("div",jN,[A[3]||(A[3]=x("div",{class:"audio-waveform"},[x("img",{src:ON,alt:"Sound",class:"voice-icon"})],-1)),x("div",qN,[x("audio",{src:p.value,class:"audio-player",controls:""},null,8,HN)])])):(me(),_e("div",WN,[A[4]||(A[4]=x("div",{class:"file-icon"},"📄",-1)),x("div",zN,be(d.value.name),1)]))])):(me(),_e("div",UN,A[2]||(A[2]=[x("div",{class:"plus-icon"},"+",-1)]))),x("input",{type:"file",ref_key:"fileInput",ref:c,accept:"image/*,video/*,audio/*",style:{display:"none"},onChange:M},null,544)],2),x("div",GN,[x("button",{class:"control-btn close-btn",onClick:V,disabled:te(i)},"×",8,KN),x("div",QN,[Sn(x("input",{type:"text","onUpdate:modelValue":A[0]||(A[0]=y=>u.value=y),placeholder:te(n).statusPlaceholder,class:"caption-input",disabled:te(i)},null,8,YN),[[Li,u.value]])]),x("button",{class:xt(["control-btn post-btn",{disabled:!_.value||te(i)}]),onClick:O,disabled:!_.value||te(i)},[te(i)?(me(),_e("img",JN)):(me(),_e("img",ZN))],10,XN)]),te(o)?(me(),_e("div",eO,be(te(o)),1)):Nn("",!0),g.value?(me(),_e("div",tO,be(g.value),1)):Nn("",!0)]))}},rO=ns(nO,[["__scopeId","data-v-a5eb092f"]]),sO={class:"container-mid-nav"},iO={class:"home-page"},oO={class:"container-left"},aO={class:"container-main"},lO={__name:"Status",setup(t){return(e,n)=>(me(),_e("div",null,[x("div",sO,[Pe(Ws)]),x("div",iO,[x("div",oO,[Pe(zs)]),x("div",aO,[Pe(rO)]),n[0]||(n[0]=x("div",{class:"container-right"},null,-1))])]))}},cO={class:"container-mid-nav"},uO={class:"home-page"},hO={class:"container-left"},dO={__name:"Profile",setup(t){return(e,n)=>(me(),_e("div",null,[x("div",cO,[Pe(Ws)]),x("div",uO,[x("div",hO,[Pe(zs)]),n[0]||(n[0]=x("div",{class:"container-main"},null,-1)),n[1]||(n[1]=x("div",{class:"container-right"},null,-1))])]))}},fO={class:"container-mid-nav"},pO={class:"home-page"},gO={class:"container-left"},mO={__name:"Friend",setup(t){return(e,n)=>(me(),_e("div",null,[x("div",fO,[Pe(Ws)]),x("div",pO,[x("div",gO,[Pe(zs)]),n[0]||(n[0]=x("div",{class:"container-main"},null,-1)),n[1]||(n[1]=x("div",{class:"container-right"},null,-1))])]))}},_O={class:"container-mid-nav"},yO={class:"home-page"},vO={class:"container-left"},EO={__name:"Mess",setup(t){return(e,n)=>(me(),_e("div",null,[x("div",_O,[Pe(Ws)]),x("div",yO,[x("div",vO,[Pe(zs)]),n[0]||(n[0]=x("div",{class:"container-main"},null,-1)),n[1]||(n[1]=x("div",{class:"container-right"},null,-1))])]))}},TO={class:"container-mid-nav"},wO={class:"home-page"},IO={class:"container-left"},AO={__name:"Notification",setup(t){return(e,n)=>(me(),_e("div",null,[x("div",TO,[Pe(Ws)]),x("div",wO,[x("div",IO,[Pe(zs)]),n[0]||(n[0]=x("div",{class:"container-main"},null,-1)),n[1]||(n[1]=x("div",{class:"container-right"},null,-1))])]))}},bO=[{path:"/",component:$k,meta:{requiresGuest:!0}},{path:"/home",component:NN,meta:{requiresAuth:!0}},{path:"/status",component:lO,meta:{requiresAuth:!0}},{path:"/profile",component:dO,meta:{requiresAuth:!0}},{path:"/friend",component:mO,meta:{requiresAuth:!0}},{path:"/mess",component:EO,meta:{requiresAuth:!0}},{path:"/notification",component:AO,meta:{requiresAuth:!0}}],av=oI({history:xw(),routes:bO});av.beforeEach(async(t,e,n)=>{const r=t.matched.some(l=>l.meta.requiresAuth),s=t.matched.some(l=>l.meta.requiresGuest),{isLoggedIn:i,isInitialized:o}=El();o.value||await new Promise(l=>{const c=Br(o,u=>{u&&(c(),l())})}),r&&!i.value?n("/"):s&&i.value?n("/home"):n()});tw(ak).use(av).mount("#app");
