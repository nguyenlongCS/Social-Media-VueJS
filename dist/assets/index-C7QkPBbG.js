(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function tu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xe={},ms=[],pn=()=>{},Ov=()=>!1,Fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),nu=t=>t.startsWith("onUpdate:"),At=Object.assign,ru=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dv=Object.prototype.hasOwnProperty,Oe=(t,e)=>Dv.call(t,e),le=Array.isArray,_s=t=>Ji(t)==="[object Map]",Us=t=>Ji(t)==="[object Set]",Td=t=>Ji(t)==="[object Date]",pe=t=>typeof t=="function",Ze=t=>typeof t=="string",vn=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",ig=t=>(Le(t)||pe(t))&&pe(t.then)&&pe(t.catch),og=Object.prototype.toString,Ji=t=>og.call(t),Vv=t=>Ji(t).slice(8,-1),ag=t=>Ji(t)==="[object Object]",su=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,yi=tu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},xv=/-(\w)/g,zt=Ba(t=>t.replace(xv,(e,n)=>n?n.toUpperCase():"")),Mv=/\B([A-Z])/g,Jr=Ba(t=>t.replace(Mv,"-$1").toLowerCase()),ja=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ml=Ba(t=>t?`on${ja(t)}`:""),cr=(t,e)=>!Object.is(t,e),zo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},la=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Id;const qa=()=>Id||(Id=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function iu(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Bv(r):iu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Le(t))return t}const Lv=/;(?![^(]*\))/g,Uv=/:([^]+)/,Fv=/\/\*[^]*?\*\//g;function Bv(t){const e={};return t.replace(Fv,"").split(Lv).forEach(n=>{if(n){const r=n.split(Uv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function et(t){let e="";if(Ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=et(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qv=tu(jv);function cg(t){return!!t||t===""}function $v(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=$r(t[r],e[r]);return n}function $r(t,e){if(t===e)return!0;let n=Td(t),r=Td(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vn(t),r=vn(e),n||r)return t===e;if(n=le(t),r=le(e),n||r)return n&&r?$v(t,e):!1;if(n=Le(t),r=Le(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!$r(t[o],e[o]))return!1}}return String(t)===String(e)}function ou(t,e){return t.findIndex(n=>$r(n,e))}const ug=t=>!!(t&&t.__v_isRef===!0),Se=t=>Ze(t)?t:t==null?"":le(t)||Le(t)&&(t.toString===og||!pe(t.toString))?ug(t)?Se(t.value):JSON.stringify(t,hg,2):String(t),hg=(t,e)=>ug(e)?hg(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ll(r,i)+" =>"]=s,n),{})}:Us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ll(n))}:vn(e)?Ll(e):Le(e)&&!le(e)&&!ag(e)?String(e):e,Ll=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pt;class Hv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){++this._on===1&&(this.prevScope=Pt,Pt=this)}off(){this._on>0&&--this._on===0&&(Pt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Kv(){return Pt}let Me;const Ul=new WeakSet;class dg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pt&&Pt.active&&Pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ul.has(this)&&(Ul.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rd(this),gg(this);const e=Me,n=Zt;Me=this,Zt=!0;try{return this.fn()}finally{mg(this),Me=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cu(e);this.deps=this.depsTail=void 0,Rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ul.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fc(this)&&this.run()}get dirty(){return fc(this)}}let fg=0,vi,Ei;function pg(t,e=!1){if(t.flags|=8,e){t.next=Ei,Ei=t;return}t.next=vi,vi=t}function au(){fg++}function lu(){if(--fg>0)return;if(Ei){let e=Ei;for(Ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vi;){let e=vi;for(vi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function gg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),cu(r),Wv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function fc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_g(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _g(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Di)||(t.globalVersion=Di,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fc(t))))return;t.flags|=2;const e=t.dep,n=Me,r=Zt;Me=t,Zt=!0;try{gg(t);const s=t.fn(t._value);(e.version===0||cr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,Zt=r,mg(t),t.flags&=-3}}function cu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)cu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Wv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const yg=[];function Un(){yg.push(Zt),Zt=!1}function Fn(){const t=yg.pop();Zt=t===void 0?!0:t}function Rd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Di=0;class Gv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!Zt||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Gv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,vg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Di++,this.notify(e)}notify(e){au();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lu()}}}function vg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)vg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pc=new WeakMap,Fr=Symbol(""),gc=Symbol(""),Vi=Symbol("");function _t(t,e,n){if(Zt&&Me){let r=pc.get(t);r||pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new uu),s.map=r,s.key=n),s.track()}}function Pn(t,e,n,r,s,i){const o=pc.get(t);if(!o){Di++;return}const l=c=>{c&&c.trigger()};if(au(),e==="clear")o.forEach(l);else{const c=le(t),u=c&&su(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===Vi||!vn(g)&&g>=d)&&l(p)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),u&&l(o.get(Vi)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Fr)),_s(t)&&l(o.get(gc)));break;case"delete":c||(l(o.get(Fr)),_s(t)&&l(o.get(gc)));break;case"set":_s(t)&&l(o.get(Fr));break}}lu()}function ls(t){const e=Ne(t);return e===t?e:(_t(e,"iterate",Vi),Kt(t)?e:e.map(lt))}function $a(t){return _t(t=Ne(t),"iterate",Vi),t}const zv={__proto__:null,[Symbol.iterator](){return Fl(this,Symbol.iterator,lt)},concat(...t){return ls(this).concat(...t.map(e=>le(e)?ls(e):e))},entries(){return Fl(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return Rn(this,"every",t,e,void 0,arguments)},filter(t,e){return Rn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return Rn(this,"find",t,e,lt,arguments)},findIndex(t,e){return Rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Rn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return Rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Bl(this,"includes",t)},indexOf(...t){return Bl(this,"indexOf",t)},join(t){return ls(this).join(t)},lastIndexOf(...t){return Bl(this,"lastIndexOf",t)},map(t,e){return Rn(this,"map",t,e,void 0,arguments)},pop(){return ai(this,"pop")},push(...t){return ai(this,"push",t)},reduce(t,...e){return bd(this,"reduce",t,e)},reduceRight(t,...e){return bd(this,"reduceRight",t,e)},shift(){return ai(this,"shift")},some(t,e){return Rn(this,"some",t,e,void 0,arguments)},splice(...t){return ai(this,"splice",t)},toReversed(){return ls(this).toReversed()},toSorted(t){return ls(this).toSorted(t)},toSpliced(...t){return ls(this).toSpliced(...t)},unshift(...t){return ai(this,"unshift",t)},values(){return Fl(this,"values",lt)}};function Fl(t,e,n){const r=$a(t),s=r[e]();return r!==t&&!Kt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Qv=Array.prototype;function Rn(t,e,n,r,s,i){const o=$a(t),l=o!==t&&!Kt(t),c=o[e];if(c!==Qv[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;o!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,u,r);return l&&s?s(d):d}function bd(t,e,n,r){const s=$a(t);let i=n;return s!==t&&(Kt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,lt(l),c,t)}),s[e](i,...r)}function Bl(t,e,n){const r=Ne(t);_t(r,"iterate",Vi);const s=r[e](...n);return(s===-1||s===!1)&&fu(n[0])?(n[0]=Ne(n[0]),r[e](...n)):s}function ai(t,e,n=[]){Un(),au();const r=Ne(t)[e].apply(t,n);return lu(),Fn(),r}const Yv=tu("__proto__,__v_isRef,__isVue"),Eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn));function Xv(t){vn(t)||(t=String(t));const e=Ne(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Ag{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?aE:Rg:i?Ig:Tg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){let c;if(o&&(c=zv[n]))return c;if(n==="hasOwnProperty")return Xv}const l=Reflect.get(e,n,Et(e)?e:r);return(vn(n)?Eg.has(n):Yv(n))||(s||_t(e,"get",n),i)?l:Et(l)?o&&su(n)?l:l.value:Le(l)?s?ca(l):bs(l):l}}class wg extends Ag{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=gr(i);if(!Kt(r)&&!gr(r)&&(i=Ne(i),r=Ne(r)),!le(e)&&Et(i)&&!Et(r))return c?!1:(i.value=r,!0)}const o=le(e)&&su(n)?Number(n)<e.length:Oe(e,n),l=Reflect.set(e,n,r,Et(e)?e:s);return e===Ne(s)&&(o?cr(r,i)&&Pn(e,"set",n,r):Pn(e,"add",n,r)),l}deleteProperty(e,n){const r=Oe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!Eg.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",le(e)?"length":Fr),Reflect.ownKeys(e)}}class Jv extends Ag{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zv=new wg,eE=new Jv,tE=new wg(!0);const mc=t=>t,ko=t=>Reflect.getPrototypeOf(t);function nE(t,e,n){return function(...r){const s=this.__v_raw,i=Ne(s),o=_s(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?mc:e?ua:lt;return!e&&_t(i,"iterate",c?gc:Fr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function No(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rE(t,e){const n={get(s){const i=this.__v_raw,o=Ne(i),l=Ne(s);t||(cr(s,l)&&_t(o,"get",s),_t(o,"get",l));const{has:c}=ko(o),u=e?mc:t?ua:lt;if(c.call(o,s))return u(i.get(s));if(c.call(o,l))return u(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&_t(Ne(s),"iterate",Fr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Ne(i),l=Ne(s);return t||(cr(s,l)&&_t(o,"has",s),_t(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=Ne(l),u=e?mc:t?ua:lt;return!t&&_t(c,"iterate",Fr),l.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return At(n,t?{add:No("add"),set:No("set"),delete:No("delete"),clear:No("clear")}:{add(s){!e&&!Kt(s)&&!gr(s)&&(s=Ne(s));const i=Ne(this);return ko(i).has.call(i,s)||(i.add(s),Pn(i,"add",s,s)),this},set(s,i){!e&&!Kt(i)&&!gr(i)&&(i=Ne(i));const o=Ne(this),{has:l,get:c}=ko(o);let u=l.call(o,s);u||(s=Ne(s),u=l.call(o,s));const d=c.call(o,s);return o.set(s,i),u?cr(i,d)&&Pn(o,"set",s,i):Pn(o,"add",s,i),this},delete(s){const i=Ne(this),{has:o,get:l}=ko(i);let c=o.call(i,s);c||(s=Ne(s),c=o.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Pn(i,"delete",s,void 0),u},clear(){const s=Ne(this),i=s.size!==0,o=s.clear();return i&&Pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nE(s,t,e)}),n}function hu(t,e){const n=rE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Oe(n,s)&&s in r?n:r,s,i)}const sE={get:hu(!1,!1)},iE={get:hu(!1,!0)},oE={get:hu(!0,!1)};const Tg=new WeakMap,Ig=new WeakMap,Rg=new WeakMap,aE=new WeakMap;function lE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cE(t){return t.__v_skip||!Object.isExtensible(t)?0:lE(Vv(t))}function bs(t){return gr(t)?t:du(t,!1,Zv,sE,Tg)}function bg(t){return du(t,!1,tE,iE,Ig)}function ca(t){return du(t,!0,eE,oE,Rg)}function du(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=cE(t);if(i===0)return t;const o=s.get(t);if(o)return o;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ys(t){return gr(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function gr(t){return!!(t&&t.__v_isReadonly)}function Kt(t){return!!(t&&t.__v_isShallow)}function fu(t){return t?!!t.__v_raw:!1}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function uE(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&lg(t,"__v_skip",!0),t}const lt=t=>Le(t)?bs(t):t,ua=t=>Le(t)?ca(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function Ce(t){return Sg(t,!1)}function hE(t){return Sg(t,!0)}function Sg(t,e){return Et(t)?t:new dE(t,e)}class dE{constructor(e,n){this.dep=new uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ne(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Kt(e)||gr(e);e=r?e:Ne(e),cr(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function Z(t){return Et(t)?t.value:t}const fE={get:(t,e,n)=>e==="__v_raw"?t:Z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Et(s)&&!Et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cg(t){return ys(t)?t:new Proxy(t,fE)}class pE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Di-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return pg(this,!0),!0}get value(){const e=this.dep.track();return _g(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new pE(r,s,n)}const Oo={},ha=new WeakMap;let xr;function mE(t,e=!1,n=xr){if(n){let r=ha.get(n);r||ha.set(n,r=[]),r.push(t)}}function _E(t,e,n=xe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,u=O=>s?O:Kt(O)||s===!1||s===0?kn(O,1):kn(O);let d,p,g,_,T=!1,S=!1;if(Et(t)?(p=()=>t.value,T=Kt(t)):ys(t)?(p=()=>u(t),T=!0):le(t)?(S=!0,T=t.some(O=>ys(O)||Kt(O)),p=()=>t.map(O=>{if(Et(O))return O.value;if(ys(O))return u(O);if(pe(O))return c?c(O,2):O()})):pe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Un();try{g()}finally{Fn()}}const O=xr;xr=d;try{return c?c(t,3,[_]):t(_)}finally{xr=O}}:p=pn,e&&s){const O=p,W=s===!0?1/0:s;p=()=>kn(O(),W)}const P=Kv(),x=()=>{d.stop(),P&&P.active&&ru(P.effects,d)};if(i&&e){const O=e;e=(...W)=>{O(...W),x()}}let M=S?new Array(t.length).fill(Oo):Oo;const L=O=>{if(!(!(d.flags&1)||!d.dirty&&!O))if(e){const W=d.run();if(s||T||(S?W.some((H,A)=>cr(H,M[A])):cr(W,M))){g&&g();const H=xr;xr=d;try{const A=[W,M===Oo?void 0:S&&M[0]===Oo?[]:M,_];M=W,c?c(e,3,A):e(...A)}finally{xr=H}}}else d.run()};return l&&l(L),d=new dg(p),d.scheduler=o?()=>o(L,!1):L,_=O=>mE(O,!1,d),g=d.onStop=()=>{const O=ha.get(d);if(O){if(c)c(O,4);else for(const W of O)W();ha.delete(d)}},e?r?L(!0):M=d.run():o?o(L.bind(null,!0),!0):d.run(),x.pause=d.pause.bind(d),x.resume=d.resume.bind(d),x.stop=x,x}function kn(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Et(t))kn(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)kn(t[r],e,n);else if(Us(t)||_s(t))t.forEach(r=>{kn(r,e,n)});else if(ag(t)){for(const r in t)kn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&kn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ha(s,e,n)}}function En(t,e,n,r){if(pe(t)){const s=Zi(t,e,n,r);return s&&ig(s)&&s.catch(i=>{Ha(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(En(t[i],e,n,r));return s}}function Ha(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xe;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Un(),Zi(i,null,10,[t,c,u]),Fn();return}}yE(t,n,s,r,o)}function yE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let cn=-1;const vs=[];let nr=null,us=0;const Pg=Promise.resolve();let da=null;function pu(t){const e=da||Pg;return t?e.then(this?t.bind(this):t):e}function vE(t){let e=cn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=xi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gu(t){if(!(t.flags&1)){const e=xi(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=xi(n)?St.push(t):St.splice(vE(e),0,t),t.flags|=1,kg()}}function kg(){da||(da=Pg.then(Og))}function EE(t){le(t)?vs.push(...t):nr&&t.id===-1?nr.splice(us+1,0,t):t.flags&1||(vs.push(t),t.flags|=1),kg()}function Sd(t,e,n=cn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ng(t){if(vs.length){const e=[...new Set(vs)].sort((n,r)=>xi(n)-xi(r));if(vs.length=0,nr){nr.push(...e);return}for(nr=e,us=0;us<nr.length;us++){const n=nr[us];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nr=null,us=0}}const xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Og(t){try{for(cn=0;cn<St.length;cn++){const e=St[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<St.length;cn++){const e=St[cn];e&&(e.flags&=-2)}cn=-1,St.length=0,Ng(),da=null,(St.length||vs.length)&&Og()}}let Mt=null,Dg=null;function fa(t){const e=Mt;return Mt=t,Dg=t&&t.type.__scopeId||null,e}function AE(t,e=Mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ld(-1);const i=fa(e);let o;try{o=t(...s)}finally{fa(i),r._d&&Ld(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sn(t,e){if(Mt===null)return t;const n=za(Mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=xe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&kn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(Un(),En(c,n,8,[t.el,l,t,e]),Fn())}}const wE=Symbol("_vte"),TE=t=>t.__isTeleport;function mu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,mu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vg(t,e){return pe(t)?At({name:t.name},e,{setup:t}):t}function xg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pa(t,e,n,r,s=!1){if(le(t)){t.forEach((T,S)=>pa(T,e&&(le(e)?e[S]:e),n,r,s));return}if(Ai(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?za(r.component):r.el,o=s?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===xe?l.refs={}:l.refs,p=l.setupState,g=Ne(p),_=p===xe?()=>!1:T=>Oe(g,T);if(u!=null&&u!==c&&(Ze(u)?(d[u]=null,_(u)&&(p[u]=null)):Et(u)&&(u.value=null)),pe(c))Zi(c,l,12,[o,d]);else{const T=Ze(c),S=Et(c);if(T||S){const P=()=>{if(t.f){const x=T?_(c)?p[c]:d[c]:c.value;s?le(x)&&ru(x,i):le(x)?x.includes(i)||x.push(i):T?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else T?(d[c]=o,_(c)&&(p[c]=o)):S&&(c.value=o,t.k&&(d[t.k]=o))};o?(P.id=-1,xt(P,n)):P()}}}qa().requestIdleCallback;qa().cancelIdleCallback;const Ai=t=>!!t.type.__asyncLoader,Mg=t=>t.type.__isKeepAlive;function IE(t,e){Lg(t,"a",e)}function RE(t,e){Lg(t,"da",e)}function Lg(t,e,n=vt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Mg(s.parent.vnode)&&bE(r,e,n,s),s=s.parent}}function bE(t,e,n,r){const s=Ka(e,t,r,!0);_u(()=>{ru(r[e],s)},n)}function Ka(t,e,n=vt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Un();const l=eo(n),c=En(e,n,t,o);return l(),Fn(),c});return r?s.unshift(i):s.push(i),i}}const Hn=t=>(e,n=vt)=>{(!Li||t==="sp")&&Ka(t,(...r)=>e(...r),n)},SE=Hn("bm"),Zr=Hn("m"),CE=Hn("bu"),PE=Hn("u"),kE=Hn("bum"),_u=Hn("um"),NE=Hn("sp"),OE=Hn("rtg"),DE=Hn("rtc");function VE(t,e=vt){Ka("ec",t,e)}const xE="components";function ME(t,e){return UE(xE,t,!0,e)||t}const LE=Symbol.for("v-ndc");function UE(t,e,n=!0,r=!1){const s=Mt||vt;if(s){const i=s.type;{const l=bA(i,!1);if(l&&(l===e||l===zt(e)||l===ja(zt(e))))return i}const o=Cd(s[t]||i[t],e)||Cd(s.appContext[t],e);return!o&&r?i:o}}function Cd(t,e){return t&&(t[e]||t[zt(e)]||t[ja(zt(e))])}function FE(t,e,n,r){let s;const i=n,o=le(t);if(o||Ze(t)){const l=o&&ys(t);let c=!1,u=!1;l&&(c=!Kt(t),u=gr(t),t=$a(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?u?ua(lt(t[d])):lt(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const _c=t=>t?rm(t)?za(t):_c(t.parent):null,wi=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_c(t.parent),$root:t=>_c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Fg(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=pu.bind(t.proxy)),$watch:t=>oA.bind(t)}),jl=(t,e)=>t!==xe&&!t.__isScriptSetup&&Oe(t,e),BE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(jl(r,e))return o[e]=1,r[e];if(s!==xe&&Oe(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==xe&&Oe(n,e))return o[e]=4,n[e];yc&&(o[e]=0)}}const d=wi[e];let p,g;if(d)return e==="$attrs"&&_t(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Oe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,Oe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return jl(s,e)?(s[e]=n,!0):r!==xe&&Oe(r,e)?(r[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==xe&&Oe(t,o)||jl(e,o)||(l=i[0])&&Oe(l,o)||Oe(r,o)||Oe(wi,o)||Oe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pd(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yc=!0;function jE(t){const e=Fg(t),n=t.proxy,r=t.ctx;yc=!1,e.beforeCreate&&kd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:_,updated:T,activated:S,deactivated:P,beforeDestroy:x,beforeUnmount:M,destroyed:L,unmounted:O,render:W,renderTracked:H,renderTriggered:A,errorCaptured:y,serverPrefetch:I,expose:b,inheritAttrs:R,components:C,directives:v,filters:Tt}=e;if(u&&qE(u,r,null),o)for(const we in o){const ve=o[we];pe(ve)&&(r[we]=ve.bind(n))}if(s){const we=s.call(n,n);Le(we)&&(t.data=bs(we))}if(yc=!0,i)for(const we in i){const ve=i[we],Dt=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):pn,Yt=!pe(ve)&&pe(ve.set)?ve.set.bind(n):pn,qt=Be({get:Dt,set:Yt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>qt.value,set:je=>qt.value=je})}if(l)for(const we in l)Ug(l[we],r,n,we);if(c){const we=pe(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ve=>{Qo(ve,we[ve])})}d&&kd(d,t,"c");function Ye(we,ve){le(ve)?ve.forEach(Dt=>we(Dt.bind(n))):ve&&we(ve.bind(n))}if(Ye(SE,p),Ye(Zr,g),Ye(CE,_),Ye(PE,T),Ye(IE,S),Ye(RE,P),Ye(VE,y),Ye(DE,H),Ye(OE,A),Ye(kE,M),Ye(_u,O),Ye(NE,I),le(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(ve=>{Object.defineProperty(we,ve,{get:()=>n[ve],set:Dt=>n[ve]=Dt})})}else t.exposed||(t.exposed={});W&&t.render===pn&&(t.render=W),R!=null&&(t.inheritAttrs=R),C&&(t.components=C),v&&(t.directives=v),I&&xg(t)}function qE(t,e,n=pn){le(t)&&(t=vc(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),Et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function kd(t,e,n){En(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ug(t,e,n,r){let s=r.includes(".")?Jg(n,r):()=>n[r];if(Ze(t)){const i=e[t];pe(i)&&Br(s,i)}else if(pe(t))Br(s,t.bind(n));else if(Le(t))if(le(t))t.forEach(i=>Ug(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Br(s,i,t)}}function Fg(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>ga(c,u,o,!0)),ga(c,e,o)),Le(e)&&i.set(e,c),c}function ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ga(t,i,n,!0),s&&s.forEach(o=>ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=$E[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const $E={data:Nd,props:Od,emits:Od,methods:di,computed:di,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:di,directives:di,watch:KE,provide:Nd,inject:HE};function Nd(t,e){return e?t?function(){return At(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function HE(t,e){return di(vc(t),vc(e))}function vc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?At(Object.create(null),t,e):e}function Od(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:At(Object.create(null),Pd(t),Pd(e??{})):e}function KE(t,e){if(!t)return e;if(!e)return t;const n=At(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function Bg(){return{app:null,config:{isNativeTag:Ov,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let WE=0;function GE(t,e){return function(r,s=null){pe(r)||(r=At({},r)),s!=null&&!Le(s)&&(s=null);const i=Bg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:WE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:CA,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,g){if(!c){const _=u._ceVNode||Pe(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,d,g),c=!0,u._container=d,d.__vue_app__=u,za(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(En(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Es;Es=u;try{return d()}finally{Es=p}}};return u}}let Es=null;function Qo(t,e){if(vt){let n=vt.provides;const r=vt.parent&&vt.parent.provides;r===n&&(n=vt.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=vt||Mt;if(r||Es){let s=Es?Es._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const jg={},qg=()=>Object.create(jg),$g=t=>Object.getPrototypeOf(t)===jg;function zE(t,e,n,r=!1){const s={},i=qg();t.propsDefaults=Object.create(null),Hg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function QE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=Ne(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Wa(t.emitsOptions,g))continue;const _=e[g];if(c)if(Oe(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const T=zt(g);s[T]=Ec(c,l,T,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Hg(t,e,s,i)&&(u=!0);let d;for(const p in l)(!e||!Oe(e,p)&&((d=Jr(p))===p||!Oe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Ec(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Oe(e,p))&&(delete i[p],u=!0)}u&&Pn(t.attrs,"set","")}function Hg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(yi(c))continue;const u=e[c];let d;s&&Oe(s,d=zt(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Wa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Ne(n),u=l||xe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ec(s,c,p,u[p],t,!Oe(u,p))}}return o}function Ec(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Oe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=eo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Jr(n))&&(r=!0))}return r}const YE=new WeakMap;function Kg(t,e,n=!1){const r=n?YE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!pe(t)){const d=p=>{c=!0;const[g,_]=Kg(p,e,!0);At(o,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Le(t)&&r.set(t,ms),ms;if(le(i))for(let d=0;d<i.length;d++){const p=zt(i[d]);Dd(p)&&(o[p]=xe)}else if(i)for(const d in i){const p=zt(d);if(Dd(p)){const g=i[d],_=o[p]=le(g)||pe(g)?{type:g}:At({},g),T=_.type;let S=!1,P=!0;if(le(T))for(let x=0;x<T.length;++x){const M=T[x],L=pe(M)&&M.name;if(L==="Boolean"){S=!0;break}else L==="String"&&(P=!1)}else S=pe(T)&&T.name==="Boolean";_[0]=S,_[1]=P,(S||Oe(_,"default"))&&l.push(p)}}const u=[o,l];return Le(t)&&r.set(t,u),u}function Dd(t){return t[0]!=="$"&&!yi(t)}const yu=t=>t[0]==="_"||t==="$stable",vu=t=>le(t)?t.map(dn):[dn(t)],XE=(t,e,n)=>{if(e._n)return e;const r=AE((...s)=>vu(e(...s)),n);return r._c=!1,r},Wg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yu(s))continue;const i=t[s];if(pe(i))e[s]=XE(s,i,r);else if(i!=null){const o=vu(i);e[s]=()=>o}}},Gg=(t,e)=>{const n=vu(e);t.slots.default=()=>n},zg=(t,e,n)=>{for(const r in e)(n||!yu(r))&&(t[r]=e[r])},JE=(t,e,n)=>{const r=t.slots=qg();if(t.vnode.shapeFlag&32){const s=e._;s?(zg(r,e,n),n&&lg(r,"_",s,!0)):Wg(e,r)}else e&&Gg(t,e)},ZE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=xe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:zg(s,e,n):(i=!e.$stable,Wg(e,s)),o=e}else e&&(Gg(t,e),o={default:1});if(i)for(const l in s)!yu(l)&&o[l]==null&&delete s[l]},xt=fA;function eA(t){return tA(t)}function tA(t,e){const n=qa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:_=pn,insertStaticContent:T}=t,S=(E,w,k,F=null,$=null,B=null,X=void 0,z=null,G=!!w.dynamicChildren)=>{if(E===w)return;E&&!li(E,w)&&(F=U(E),je(E,$,B,!0),E=null),w.patchFlag===-2&&(G=!1,w.dynamicChildren=null);const{type:K,ref:ie,shapeFlag:Y}=w;switch(K){case Ga:P(E,w,k,F);break;case mr:x(E,w,k,F);break;case $l:E==null&&M(w,k,F,X);break;case hn:C(E,w,k,F,$,B,X,z,G);break;default:Y&1?W(E,w,k,F,$,B,X,z,G):Y&6?v(E,w,k,F,$,B,X,z,G):(Y&64||Y&128)&&K.process(E,w,k,F,$,B,X,z,G,re)}ie!=null&&$&&pa(ie,E&&E.ref,B,w||E,!w)},P=(E,w,k,F)=>{if(E==null)r(w.el=l(w.children),k,F);else{const $=w.el=E.el;w.children!==E.children&&u($,w.children)}},x=(E,w,k,F)=>{E==null?r(w.el=c(w.children||""),k,F):w.el=E.el},M=(E,w,k,F)=>{[E.el,E.anchor]=T(E.children,w,k,F,E.el,E.anchor)},L=({el:E,anchor:w},k,F)=>{let $;for(;E&&E!==w;)$=g(E),r(E,k,F),E=$;r(w,k,F)},O=({el:E,anchor:w})=>{let k;for(;E&&E!==w;)k=g(E),s(E),E=k;s(w)},W=(E,w,k,F,$,B,X,z,G)=>{w.type==="svg"?X="svg":w.type==="math"&&(X="mathml"),E==null?H(w,k,F,$,B,X,z,G):I(E,w,$,B,X,z,G)},H=(E,w,k,F,$,B,X,z)=>{let G,K;const{props:ie,shapeFlag:Y,transition:se,dirs:he}=E;if(G=E.el=o(E.type,B,ie&&ie.is,ie),Y&8?d(G,E.children):Y&16&&y(E.children,G,null,F,$,ql(E,B),X,z),he&&Dr(E,null,F,"created"),A(G,E,E.scopeId,X,F),ie){for(const ge in ie)ge!=="value"&&!yi(ge)&&i(G,ge,null,ie[ge],B,F);"value"in ie&&i(G,"value",null,ie.value,B),(K=ie.onVnodeBeforeMount)&&an(K,F,E)}he&&Dr(E,null,F,"beforeMount");const ae=nA($,se);ae&&se.beforeEnter(G),r(G,w,k),((K=ie&&ie.onVnodeMounted)||ae||he)&&xt(()=>{K&&an(K,F,E),ae&&se.enter(G),he&&Dr(E,null,F,"mounted")},$)},A=(E,w,k,F,$)=>{if(k&&_(E,k),F)for(let B=0;B<F.length;B++)_(E,F[B]);if($){let B=$.subTree;if(w===B||em(B.type)&&(B.ssContent===w||B.ssFallback===w)){const X=$.vnode;A(E,X,X.scopeId,X.slotScopeIds,$.parent)}}},y=(E,w,k,F,$,B,X,z,G=0)=>{for(let K=G;K<E.length;K++){const ie=E[K]=z?rr(E[K]):dn(E[K]);S(null,ie,w,k,F,$,B,X,z)}},I=(E,w,k,F,$,B,X)=>{const z=w.el=E.el;let{patchFlag:G,dynamicChildren:K,dirs:ie}=w;G|=E.patchFlag&16;const Y=E.props||xe,se=w.props||xe;let he;if(k&&Vr(k,!1),(he=se.onVnodeBeforeUpdate)&&an(he,k,w,E),ie&&Dr(w,E,k,"beforeUpdate"),k&&Vr(k,!0),(Y.innerHTML&&se.innerHTML==null||Y.textContent&&se.textContent==null)&&d(z,""),K?b(E.dynamicChildren,K,z,k,F,ql(w,$),B):X||ve(E,w,z,null,k,F,ql(w,$),B,!1),G>0){if(G&16)R(z,Y,se,k,$);else if(G&2&&Y.class!==se.class&&i(z,"class",null,se.class,$),G&4&&i(z,"style",Y.style,se.style,$),G&8){const ae=w.dynamicProps;for(let ge=0;ge<ae.length;ge++){const Te=ae[ge],ht=Y[Te],st=se[Te];(st!==ht||Te==="value")&&i(z,Te,ht,st,$,k)}}G&1&&E.children!==w.children&&d(z,w.children)}else!X&&K==null&&R(z,Y,se,k,$);((he=se.onVnodeUpdated)||ie)&&xt(()=>{he&&an(he,k,w,E),ie&&Dr(w,E,k,"updated")},F)},b=(E,w,k,F,$,B,X)=>{for(let z=0;z<w.length;z++){const G=E[z],K=w[z],ie=G.el&&(G.type===hn||!li(G,K)||G.shapeFlag&198)?p(G.el):k;S(G,K,ie,null,F,$,B,X,!0)}},R=(E,w,k,F,$)=>{if(w!==k){if(w!==xe)for(const B in w)!yi(B)&&!(B in k)&&i(E,B,w[B],null,$,F);for(const B in k){if(yi(B))continue;const X=k[B],z=w[B];X!==z&&B!=="value"&&i(E,B,z,X,$,F)}"value"in k&&i(E,"value",w.value,k.value,$)}},C=(E,w,k,F,$,B,X,z,G)=>{const K=w.el=E?E.el:l(""),ie=w.anchor=E?E.anchor:l("");let{patchFlag:Y,dynamicChildren:se,slotScopeIds:he}=w;he&&(z=z?z.concat(he):he),E==null?(r(K,k,F),r(ie,k,F),y(w.children||[],k,ie,$,B,X,z,G)):Y>0&&Y&64&&se&&E.dynamicChildren?(b(E.dynamicChildren,se,k,$,B,X,z),(w.key!=null||$&&w===$.subTree)&&Qg(E,w,!0)):ve(E,w,k,ie,$,B,X,z,G)},v=(E,w,k,F,$,B,X,z,G)=>{w.slotScopeIds=z,E==null?w.shapeFlag&512?$.ctx.activate(w,k,F,X,G):Tt(w,k,F,$,B,X,G):jt(E,w,G)},Tt=(E,w,k,F,$,B,X)=>{const z=E.component=AA(E,F,$);if(Mg(E)&&(z.ctx.renderer=re),wA(z,!1,X),z.asyncDep){if($&&$.registerDep(z,Ye,X),!E.el){const G=z.subTree=Pe(mr);x(null,G,w,k)}}else Ye(z,E,w,k,$,B,X)},jt=(E,w,k)=>{const F=w.component=E.component;if(hA(E,w,k))if(F.asyncDep&&!F.asyncResolved){we(F,w,k);return}else F.next=w,F.update();else w.el=E.el,F.vnode=w},Ye=(E,w,k,F,$,B,X)=>{const z=()=>{if(E.isMounted){let{next:Y,bu:se,u:he,parent:ae,vnode:ge}=E;{const dt=Yg(E);if(dt){Y&&(Y.el=ge.el,we(E,Y,X)),dt.asyncDep.then(()=>{E.isUnmounted||z()});return}}let Te=Y,ht;Vr(E,!1),Y?(Y.el=ge.el,we(E,Y,X)):Y=ge,se&&zo(se),(ht=Y.props&&Y.props.onVnodeBeforeUpdate)&&an(ht,ae,Y,ge),Vr(E,!0);const st=xd(E),$t=E.subTree;E.subTree=st,S($t,st,p($t.el),U($t),E,$,B),Y.el=st.el,Te===null&&dA(E,st.el),he&&xt(he,$),(ht=Y.props&&Y.props.onVnodeUpdated)&&xt(()=>an(ht,ae,Y,ge),$)}else{let Y;const{el:se,props:he}=w,{bm:ae,m:ge,parent:Te,root:ht,type:st}=E,$t=Ai(w);Vr(E,!1),ae&&zo(ae),!$t&&(Y=he&&he.onVnodeBeforeMount)&&an(Y,Te,w),Vr(E,!0);{ht.ce&&ht.ce._injectChildStyle(st);const dt=E.subTree=xd(E);S(null,dt,k,F,E,$,B),w.el=dt.el}if(ge&&xt(ge,$),!$t&&(Y=he&&he.onVnodeMounted)){const dt=w;xt(()=>an(Y,Te,dt),$)}(w.shapeFlag&256||Te&&Ai(Te.vnode)&&Te.vnode.shapeFlag&256)&&E.a&&xt(E.a,$),E.isMounted=!0,w=k=F=null}};E.scope.on();const G=E.effect=new dg(z);E.scope.off();const K=E.update=G.run.bind(G),ie=E.job=G.runIfDirty.bind(G);ie.i=E,ie.id=E.uid,G.scheduler=()=>gu(ie),Vr(E,!0),K()},we=(E,w,k)=>{w.component=E;const F=E.vnode.props;E.vnode=w,E.next=null,QE(E,w.props,F,k),ZE(E,w.children,k),Un(),Sd(E),Fn()},ve=(E,w,k,F,$,B,X,z,G=!1)=>{const K=E&&E.children,ie=E?E.shapeFlag:0,Y=w.children,{patchFlag:se,shapeFlag:he}=w;if(se>0){if(se&128){Yt(K,Y,k,F,$,B,X,z,G);return}else if(se&256){Dt(K,Y,k,F,$,B,X,z,G);return}}he&8?(ie&16&&Ct(K,$,B),Y!==K&&d(k,Y)):ie&16?he&16?Yt(K,Y,k,F,$,B,X,z,G):Ct(K,$,B,!0):(ie&8&&d(k,""),he&16&&y(Y,k,F,$,B,X,z,G))},Dt=(E,w,k,F,$,B,X,z,G)=>{E=E||ms,w=w||ms;const K=E.length,ie=w.length,Y=Math.min(K,ie);let se;for(se=0;se<Y;se++){const he=w[se]=G?rr(w[se]):dn(w[se]);S(E[se],he,k,null,$,B,X,z,G)}K>ie?Ct(E,$,B,!0,!1,Y):y(w,k,F,$,B,X,z,G,Y)},Yt=(E,w,k,F,$,B,X,z,G)=>{let K=0;const ie=w.length;let Y=E.length-1,se=ie-1;for(;K<=Y&&K<=se;){const he=E[K],ae=w[K]=G?rr(w[K]):dn(w[K]);if(li(he,ae))S(he,ae,k,null,$,B,X,z,G);else break;K++}for(;K<=Y&&K<=se;){const he=E[Y],ae=w[se]=G?rr(w[se]):dn(w[se]);if(li(he,ae))S(he,ae,k,null,$,B,X,z,G);else break;Y--,se--}if(K>Y){if(K<=se){const he=se+1,ae=he<ie?w[he].el:F;for(;K<=se;)S(null,w[K]=G?rr(w[K]):dn(w[K]),k,ae,$,B,X,z,G),K++}}else if(K>se)for(;K<=Y;)je(E[K],$,B,!0),K++;else{const he=K,ae=K,ge=new Map;for(K=ae;K<=se;K++){const it=w[K]=G?rr(w[K]):dn(w[K]);it.key!=null&&ge.set(it.key,K)}let Te,ht=0;const st=se-ae+1;let $t=!1,dt=0;const Qn=new Array(st);for(K=0;K<st;K++)Qn[K]=0;for(K=he;K<=Y;K++){const it=E[K];if(ht>=st){je(it,$,B,!0);continue}let Ht;if(it.key!=null)Ht=ge.get(it.key);else for(Te=ae;Te<=se;Te++)if(Qn[Te-ae]===0&&li(it,w[Te])){Ht=Te;break}Ht===void 0?je(it,$,B,!0):(Qn[Ht-ae]=K+1,Ht>=dt?dt=Ht:$t=!0,S(it,w[Ht],k,null,$,B,X,z,G),ht++)}const zs=$t?rA(Qn):ms;for(Te=zs.length-1,K=st-1;K>=0;K--){const it=ae+K,Ht=w[it],po=it+1<ie?w[it+1].el:F;Qn[K]===0?S(null,Ht,k,po,$,B,X,z,G):$t&&(Te<0||K!==zs[Te]?qt(Ht,k,po,2):Te--)}}},qt=(E,w,k,F,$=null)=>{const{el:B,type:X,transition:z,children:G,shapeFlag:K}=E;if(K&6){qt(E.component.subTree,w,k,F);return}if(K&128){E.suspense.move(w,k,F);return}if(K&64){X.move(E,w,k,re);return}if(X===hn){r(B,w,k);for(let Y=0;Y<G.length;Y++)qt(G[Y],w,k,F);r(E.anchor,w,k);return}if(X===$l){L(E,w,k);return}if(F!==2&&K&1&&z)if(F===0)z.beforeEnter(B),r(B,w,k),xt(()=>z.enter(B),$);else{const{leave:Y,delayLeave:se,afterLeave:he}=z,ae=()=>{E.ctx.isUnmounted?s(B):r(B,w,k)},ge=()=>{Y(B,()=>{ae(),he&&he()})};se?se(B,ae,ge):ge()}else r(B,w,k)},je=(E,w,k,F=!1,$=!1)=>{const{type:B,props:X,ref:z,children:G,dynamicChildren:K,shapeFlag:ie,patchFlag:Y,dirs:se,cacheIndex:he}=E;if(Y===-2&&($=!1),z!=null&&(Un(),pa(z,null,k,E,!0),Fn()),he!=null&&(w.renderCache[he]=void 0),ie&256){w.ctx.deactivate(E);return}const ae=ie&1&&se,ge=!Ai(E);let Te;if(ge&&(Te=X&&X.onVnodeBeforeUnmount)&&an(Te,w,E),ie&6)on(E.component,k,F);else{if(ie&128){E.suspense.unmount(k,F);return}ae&&Dr(E,null,w,"beforeUnmount"),ie&64?E.type.remove(E,w,k,re,F):K&&!K.hasOnce&&(B!==hn||Y>0&&Y&64)?Ct(K,w,k,!1,!0):(B===hn&&Y&384||!$&&ie&16)&&Ct(G,w,k),F&&qe(E)}(ge&&(Te=X&&X.onVnodeUnmounted)||ae)&&xt(()=>{Te&&an(Te,w,E),ae&&Dr(E,null,w,"unmounted")},k)},qe=E=>{const{type:w,el:k,anchor:F,transition:$}=E;if(w===hn){zn(k,F);return}if(w===$l){O(E);return}const B=()=>{s(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(E.shapeFlag&1&&$&&!$.persisted){const{leave:X,delayLeave:z}=$,G=()=>X(k,B);z?z(E.el,B,G):G()}else B()},zn=(E,w)=>{let k;for(;E!==w;)k=g(E),s(E),E=k;s(w)},on=(E,w,k)=>{const{bum:F,scope:$,job:B,subTree:X,um:z,m:G,a:K,parent:ie,slots:{__:Y}}=E;Vd(G),Vd(K),F&&zo(F),ie&&le(Y)&&Y.forEach(se=>{ie.renderCache[se]=void 0}),$.stop(),B&&(B.flags|=8,je(X,E,w,k)),z&&xt(z,w),xt(()=>{E.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ct=(E,w,k,F=!1,$=!1,B=0)=>{for(let X=B;X<E.length;X++)je(E[X],w,k,F,$)},U=E=>{if(E.shapeFlag&6)return U(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const w=g(E.anchor||E.el),k=w&&w[wE];return k?g(k):w};let ee=!1;const J=(E,w,k)=>{E==null?w._vnode&&je(w._vnode,null,null,!0):S(w._vnode||null,E,w,null,null,null,k),w._vnode=E,ee||(ee=!0,Sd(),Ng(),ee=!1)},re={p:S,um:je,m:qt,r:qe,mt:Tt,mc:y,pc:ve,pbc:b,n:U,o:t};return{render:J,hydrate:void 0,createApp:GE(J)}}function ql({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Vr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function nA(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qg(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rr(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Qg(o,l)),l.type===Ga&&(l.el=o.el),l.type===mr&&!l.el&&(l.el=o.el)}}function rA(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Yg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yg(e)}function Vd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const sA=Symbol.for("v-scx"),iA=()=>en(sA);function Br(t,e,n){return Xg(t,e,n)}function Xg(t,e,n=xe){const{immediate:r,deep:s,flush:i,once:o}=n,l=At({},n),c=e&&r||!e&&i!=="post";let u;if(Li){if(i==="sync"){const _=iA();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=pn,_.resume=pn,_.pause=pn,_}}const d=vt;l.call=(_,T,S)=>En(_,d,T,S);let p=!1;i==="post"?l.scheduler=_=>{xt(_,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,T)=>{T?_():gu(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const g=_E(t,e,l);return Li&&(u?u.push(g):c&&g()),g}function oA(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?Jg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=eo(this),l=Xg(s,i.bind(r),n);return o(),l}function Jg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const aA=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${Jr(e)}Modifiers`];function lA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),o=i&&aA(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map(la)));let l,c=r[l=Ml(e)]||r[l=Ml(zt(e))];!c&&i&&(c=r[l=Ml(Jr(e))]),c&&En(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,En(u,t,6,s)}}function Zg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!pe(t)){const c=u=>{const d=Zg(u,e,!0);d&&(l=!0,At(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(le(i)?i.forEach(c=>o[c]=null):At(o,i),Le(t)&&r.set(t,o),o)}function Wa(t,e){return!t||!Fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Jr(e))||Oe(t,e))}function xd(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:g,setupState:_,ctx:T,inheritAttrs:S}=t,P=fa(t);let x,M;try{if(n.shapeFlag&4){const O=s||r,W=O;x=dn(u.call(W,O,d,p,_,g,T)),M=l}else{const O=e;x=dn(O.length>1?O(p,{attrs:l,slots:o,emit:c}):O(p,null)),M=e.props?l:cA(l)}}catch(O){Ti.length=0,Ha(O,t,1),x=Pe(mr)}let L=x;if(M&&S!==!1){const O=Object.keys(M),{shapeFlag:W}=L;O.length&&W&7&&(i&&O.some(nu)&&(M=uA(M,i)),L=Ss(L,M,!1,!0))}return n.dirs&&(L=Ss(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&mu(L,n.transition),x=L,fa(P),x}const cA=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fa(n))&&((e||(e={}))[n]=t[n]);return e},uA=(t,e)=>{const n={};for(const r in t)(!nu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function hA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Md(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!Wa(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Md(r,o,u):!0:!!o;return!1}function Md(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wa(n,i))return!0}return!1}function dA({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const em=t=>t.__isSuspense;function fA(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):EE(t)}const hn=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),mr=Symbol.for("v-cmt"),$l=Symbol.for("v-stc"),Ti=[];let Lt=null;function me(t=!1){Ti.push(Lt=t?null:[])}function pA(){Ti.pop(),Lt=Ti[Ti.length-1]||null}let Mi=1;function Ld(t,e=!1){Mi+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function tm(t){return t.dynamicChildren=Mi>0?Lt||ms:null,pA(),Mi>0&&Lt&&Lt.push(t),t}function _e(t,e,n,r,s,i){return tm(V(t,e,n,r,s,i,!0))}function gA(t,e,n,r,s){return tm(Pe(t,e,n,r,s,!0))}function ma(t){return t?t.__v_isVNode===!0:!1}function li(t,e){return t.type===e.type&&t.key===e.key}const nm=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Et(t)||pe(t)?{i:Mt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===hn?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nm(e),ref:e&&Yo(e),scopeId:Dg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return l?(Eu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),Mi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const Pe=mA;function mA(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===LE)&&(t=mr),ma(t)){const l=Ss(t,e,!0);return n&&Eu(l,n),Mi>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(SA(t)&&(t=t.__vccOpts),e){e=_A(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=et(l)),Le(c)&&(fu(c)&&!le(c)&&(c=At({},c)),e.style=iu(c))}const o=Ze(t)?1:em(t)?128:TE(t)?64:Le(t)?4:pe(t)?2:0;return V(t,e,n,r,s,o,i,!0)}function _A(t){return t?fu(t)||$g(t)?At({},t):t:null}function Ss(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?yA(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&nm(u),ref:e&&e.ref?n&&i?le(i)?i.concat(Yo(e)):[i,Yo(e)]:Yo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ss(t.ssContent),ssFallback:t.ssFallback&&Ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&mu(d,c.clone(d)),d}function Ac(t=" ",e=0){return Pe(Ga,null,t,e)}function Nn(t="",e=!1){return e?(me(),gA(mr,null,t)):Pe(mr,null,t)}function dn(t){return t==null||typeof t=="boolean"?Pe(mr):le(t)?Pe(hn,null,t.slice()):ma(t)?rr(t):Pe(Ga,null,String(t))}function rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ss(t)}function Eu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Eu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!$g(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Mt},n=32):(e=String(e),r&64?(n=16,e=[Ac(e)]):n=8);t.children=e,t.shapeFlag|=n}function yA(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=et([e.class,r.class]));else if(s==="style")e.style=iu([e.style,r.style]);else if(Fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function an(t,e,n,r=null){En(t,e,7,[n,r])}const vA=Bg();let EA=0;function AA(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||vA,i={uid:EA++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kg(r,s),emitsOptions:Zg(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=lA.bind(null,i),t.ce&&t.ce(i),i}let vt=null,_a,wc;{const t=qa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_a=e("__VUE_INSTANCE_SETTERS__",n=>vt=n),wc=e("__VUE_SSR_SETTERS__",n=>Li=n)}const eo=t=>{const e=vt;return _a(t),t.scope.on(),()=>{t.scope.off(),_a(e)}},Ud=()=>{vt&&vt.scope.off(),_a(null)};function rm(t){return t.vnode.shapeFlag&4}let Li=!1;function wA(t,e=!1,n=!1){e&&wc(e);const{props:r,children:s}=t.vnode,i=rm(t);zE(t,r,i,e),JE(t,s,n||e);const o=i?TA(t,e):void 0;return e&&wc(!1),o}function TA(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,BE);const{setup:r}=n;if(r){Un();const s=t.setupContext=r.length>1?RA(t):null,i=eo(t),o=Zi(r,t,0,[t.props,s]),l=ig(o);if(Fn(),i(),(l||t.sp)&&!Ai(t)&&xg(t),l){if(o.then(Ud,Ud),e)return o.then(c=>{Fd(t,c)}).catch(c=>{Ha(c,t,0)});t.asyncDep=o}else Fd(t,o)}else sm(t)}function Fd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=Cg(e)),sm(t)}function sm(t,e,n){const r=t.type;t.render||(t.render=r.render||pn);{const s=eo(t);Un();try{jE(t)}finally{Fn(),s()}}}const IA={get(t,e){return _t(t,"get",""),t[e]}};function RA(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,IA),slots:t.slots,emit:t.emit,expose:e}}function za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cg(uE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wi)return wi[n](t)},has(e,n){return n in e||n in wi}})):t.proxy}function bA(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function SA(t){return pe(t)&&"__vccOpts"in t}const Be=(t,e)=>gE(t,e,Li);function im(t,e,n){const r=arguments.length;return r===2?Le(e)&&!le(e)?ma(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ma(n)&&(n=[n]),Pe(t,e,n))}const CA="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Tc;const Bd=typeof window<"u"&&window.trustedTypes;if(Bd)try{Tc=Bd.createPolicy("vue",{createHTML:t=>t})}catch{}const om=Tc?t=>Tc.createHTML(t):t=>t,PA="http://www.w3.org/2000/svg",kA="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,jd=Cn&&Cn.createElement("template"),NA={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(PA,t):e==="mathml"?Cn.createElementNS(kA,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jd.innerHTML=om(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=jd.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},OA=Symbol("_vtc");function DA(t,e,n){const r=t[OA];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ya=Symbol("_vod"),am=Symbol("_vsh"),qd={beforeMount(t,{value:e},{transition:n}){t[ya]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ci(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ci(t,!0),r.enter(t)):r.leave(t,()=>{ci(t,!1)}):ci(t,e))},beforeUnmount(t,{value:e}){ci(t,e)}};function ci(t,e){t.style.display=e?t[ya]:"none",t[am]=!e}const VA=Symbol(""),xA=/(^|;)\s*display\s*:/;function MA(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Xo(r,l,"")}else for(const o in e)n[o]==null&&Xo(r,o,"");for(const o in n)o==="display"&&(i=!0),Xo(r,o,n[o])}else if(s){if(e!==n){const o=r[VA];o&&(n+=";"+o),r.cssText=n,i=xA.test(n)}}else e&&t.removeAttribute("style");ya in t&&(t[ya]=i?r.display:"",t[am]&&(r.display="none"))}const $d=/\s*!important$/;function Xo(t,e,n){if(le(n))n.forEach(r=>Xo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=LA(t,e);$d.test(n)?t.setProperty(Jr(r),n.replace($d,""),"important"):t[r]=n}}const Hd=["Webkit","Moz","ms"],Hl={};function LA(t,e){const n=Hl[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Hl[e]=r;r=ja(r);for(let s=0;s<Hd.length;s++){const i=Hd[s]+r;if(i in t)return Hl[e]=i}return e}const Kd="http://www.w3.org/1999/xlink";function Wd(t,e,n,r,s,i=qv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kd,e.slice(6,e.length)):t.setAttributeNS(Kd,e,n):n==null||i&&!cg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":vn(n)?String(n):n)}function Gd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?om(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=cg(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function On(t,e,n,r){t.addEventListener(e,n,r)}function UA(t,e,n,r){t.removeEventListener(e,n,r)}const zd=Symbol("_vei");function FA(t,e,n,r,s=null){const i=t[zd]||(t[zd]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=BA(e);if(r){const u=i[e]=$A(r,s);On(t,l,u,c)}else o&&(UA(t,l,o,c),i[e]=void 0)}}const Qd=/(?:Once|Passive|Capture)$/;function BA(t){let e;if(Qd.test(t)){e={};let r;for(;r=t.match(Qd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jr(t.slice(2)),e]}let Kl=0;const jA=Promise.resolve(),qA=()=>Kl||(jA.then(()=>Kl=0),Kl=Date.now());function $A(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;En(HA(r,n.value),e,5,[r])};return n.value=t,n.attached=qA(),n}function HA(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,KA=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?DA(t,r,o):e==="style"?MA(t,n,r):Fa(e)?nu(e)||FA(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WA(t,e,r,o))?(Gd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wd(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?Gd(t,zt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wd(t,e,r,o))};function WA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yd(e)&&Ze(n)?!1:e in t}const _r=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>zo(e,n):e};function GA(t){t.target.composing=!0}function Xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wt=Symbol("_assign"),Ui={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wt]=_r(s);const i=r||s.props&&s.props.type==="number";On(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=la(l)),t[Wt](l)}),n&&On(t,"change",()=>{t.value=t.value.trim()}),e||(On(t,"compositionstart",GA),On(t,"compositionend",Xd),On(t,"change",Xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Wt]=_r(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?la(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},lm={deep:!0,created(t,e,n){t[Wt]=_r(n),On(t,"change",()=>{const r=t._modelValue,s=Cs(t),i=t.checked,o=t[Wt];if(le(r)){const l=ou(r,s),c=l!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const u=[...r];u.splice(l,1),o(u)}}else if(Us(r)){const l=new Set(r);i?l.add(s):l.delete(s),o(l)}else o(cm(t,i))})},mounted:Jd,beforeUpdate(t,e,n){t[Wt]=_r(n),Jd(t,e,n)}};function Jd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(le(e))s=ou(e,r.props.value)>-1;else if(Us(e))s=e.has(r.props.value);else{if(e===n)return;s=$r(e,cm(t,!0))}t.checked!==s&&(t.checked=s)}const zA={created(t,{value:e},n){t.checked=$r(e,n.props.value),t[Wt]=_r(n),On(t,"change",()=>{t[Wt](Cs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Wt]=_r(r),e!==n&&(t.checked=$r(e,r.props.value))}},QA={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Us(e);On(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?la(Cs(o)):Cs(o));t[Wt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,pu(()=>{t._assigning=!1})}),t[Wt]=_r(r)},mounted(t,{value:e}){Zd(t,e)},beforeUpdate(t,e,n){t[Wt]=_r(n)},updated(t,{value:e}){t._assigning||Zd(t,e)}};function Zd(t,e){const n=t.multiple,r=le(e);if(!(n&&!r&&!Us(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],l=Cs(o);if(n)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(l)):o.selected=ou(e,l)>-1}else o.selected=e.has(l);else if($r(Cs(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Cs(t){return"_value"in t?t._value:t.value}function cm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Wl={created(t,e,n){Do(t,e,n,null,"created")},mounted(t,e,n){Do(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){Do(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){Do(t,e,n,r,"updated")}};function YA(t,e){switch(t){case"SELECT":return QA;case"TEXTAREA":return Ui;default:switch(e){case"checkbox":return lm;case"radio":return zA;default:return Ui}}}function Do(t,e,n,r,s){const o=YA(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const XA=["ctrl","shift","alt","meta"],JA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XA.some(n=>t[`${n}Key`]&&!e.includes(n))},Gl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=JA[e[o]];if(l&&l(s,e))return}return t(s,...i)})},ZA=At({patchProp:KA},NA);let ef;function ew(){return ef||(ef=eA(ZA))}const tw=(...t)=>{const e=ew().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rw(t){return Ze(t)?document.querySelector(t):t}const We={LANGUAGE:"selectedLanguage",THEME:"selectedTheme",THEME_RGB:"selectedThemeRgb",REMEMBERED_EMAIL:"rememberedEmail",REMEMBERED_PASSWORD:"rememberedPassword"},Vo={[We.LANGUAGE]:"EN",[We.THEME]:"#ffeb7c",[We.THEME_RGB]:"255, 235, 124"},sw={EN:{languageBtn:"EN",logoutBtn:"Log Out",brandTagline:"Welcome to ...",loginTab:"Login",signupTab:"Signup",loginBtn:"Login",signupBtn:"Signup",forgotPassword:"forgot password?",rememberMe:"Remember me",qrTitle:"Log In with QR Code",socialTitle:"Or continue with",emailPlaceholder:"email",passwordPlaceholder:"password",confirmPasswordPlaceholder:"confirm password",homeTabs:{community:"Community",friend:"Friend"},actionButtons:{upload:"create status",discover:"discover",settings:"settings"},statusPlaceholder:"What's on your mind?",me:"Me"},VN:{languageBtn:"VN",logoutBtn:"Đăng Xuất",brandTagline:"Chào mừng bạn đến với ...",loginTab:"Đăng Nhập",signupTab:"Đăng Ký",loginBtn:"Đăng Nhập",signupBtn:"Đăng Ký",forgotPassword:"quên mật khẩu?",rememberMe:"Ghi nhớ tôi",qrTitle:"Đăng Nhập bằng Mã QR",socialTitle:"Hoặc tiếp tục với",emailPlaceholder:"email",passwordPlaceholder:"mật khẩu",confirmPasswordPlaceholder:"xác nhận mật khẩu",homeTabs:{community:"Cộng đồng",friend:"Bạn bè"},actionButtons:{upload:"tạo trạng thái",discover:"khám phá",settings:"cài đặt"},statusPlaceholder:"Bạn đang nghĩ gì?",me:"Tôi"}};let cs=null,xo=null,Mo=null,tf=!1;const Gt=()=>{const t=(T,S=null)=>{try{const P=localStorage.getItem(T);return P!==null?P:S}catch(P){return console.warn(`Failed to get localStorage item "${T}":`,P),S}},e=(T,S)=>{try{S==null?localStorage.removeItem(T):localStorage.setItem(T,S)}catch(P){console.warn(`Failed to set localStorage item "${T}":`,P)}},n=T=>{try{localStorage.removeItem(T)}catch(S){console.warn(`Failed to remove localStorage item "${T}":`,S)}};if(!tf){cs=Ce(t(We.LANGUAGE,Vo[We.LANGUAGE]));const T={color:t(We.THEME,Vo[We.THEME]),rgb:t(We.THEME_RGB,Vo[We.THEME_RGB])};xo=Ce(T.color),Mo=Ce(T.rgb),tf=!0}const r=()=>{cs.value=cs.value==="EN"?"VN":"EN",e(We.LANGUAGE,cs.value)},s=Be(()=>sw[cs.value]),i=T=>{const S=T.split(".");let P=s.value;for(const x of S)if(P=P==null?void 0:P[x],!P)break;return P||T},o=()=>{document.documentElement.style.setProperty("--theme-color",xo.value),document.documentElement.style.setProperty("--theme-color-rgb",Mo.value)},l=(T,S)=>{document.documentElement.style.setProperty("--theme-color",T),document.documentElement.style.setProperty("--theme-color-rgb",S),xo.value=T,Mo.value=S,e(We.THEME,T),e(We.THEME_RGB,S)},c=()=>({email:t(We.REMEMBERED_EMAIL),password:t(We.REMEMBERED_PASSWORD)}),u=(T,S)=>{e(We.REMEMBERED_EMAIL,T),e(We.REMEMBERED_PASSWORD,S)},d=()=>{n(We.REMEMBERED_EMAIL),n(We.REMEMBERED_PASSWORD)},p=(T=null)=>{try{T?T.forEach(S=>n(S)):Object.values(We).forEach(S=>n(S))}catch(S){console.warn("Failed to clear localStorage:",S)}},g=()=>{try{const T={};return Object.values(We).forEach(S=>{const P=t(S);P!==null&&(T[S]=P)}),T}catch(T){return console.warn("Failed to backup localStorage:",T),{}}},_=T=>{try{Object.entries(T).forEach(([S,P])=>{Object.values(We).includes(S)&&e(S,P)})}catch(S){console.warn("Failed to restore localStorage:",S)}};return Zr(()=>{o()}),{currentLanguage:cs,toggleLanguage:r,t:s,translate:i,currentTheme:xo,currentThemeRgb:Mo,changeThemeColor:l,initializeTheme:o,getItem:t,setItem:e,removeItem:n,getRememberedAuth:c,setRememberedAuth:u,clearRememberedAuth:d,clear:p,backup:g,restore:_,STORAGE_KEYS:We,DEFAULTS:Vo}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hs=typeof document<"u";function um(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&um(t.default)}const ke=Object.assign;function zl(t,e){const n={};for(const r in e){const s=e[r];n[r]=rn(s)?s.map(t):t(s)}return n}const Ii=()=>{},rn=Array.isArray,hm=/#/g,ow=/&/g,aw=/\//g,lw=/=/g,cw=/\?/g,dm=/\+/g,uw=/%5B/g,hw=/%5D/g,fm=/%5E/g,dw=/%60/g,pm=/%7B/g,fw=/%7C/g,gm=/%7D/g,pw=/%20/g;function Au(t){return encodeURI(""+t).replace(fw,"|").replace(uw,"[").replace(hw,"]")}function gw(t){return Au(t).replace(pm,"{").replace(gm,"}").replace(fm,"^")}function Ic(t){return Au(t).replace(dm,"%2B").replace(pw,"+").replace(hm,"%23").replace(ow,"%26").replace(dw,"`").replace(pm,"{").replace(gm,"}").replace(fm,"^")}function mw(t){return Ic(t).replace(lw,"%3D")}function _w(t){return Au(t).replace(hm,"%23").replace(cw,"%3F")}function yw(t){return t==null?"":_w(t).replace(aw,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vw=/\/$/,Ew=t=>t.replace(vw,"");function Ql(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=Iw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fi(o)}}function Aw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function nf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ww(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ps(e.matched[r],n.matched[s])&&mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ps(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Tw(t[n],e[n]))return!1;return!0}function Tw(t,e){return rn(t)?rf(t,e):rn(e)?rf(e,t):t===e}function rf(t,e){return rn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Iw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Bi;(function(t){t.pop="pop",t.push="push"})(Bi||(Bi={}));var Ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ri||(Ri={}));function Rw(t){if(!t)if(hs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ew(t)}const bw=/^[^#]+#/;function Sw(t,e){return t.replace(bw,"#")+e}function Cw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Qa=()=>({left:window.scrollX,top:window.scrollY});function Pw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Cw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function sf(t,e){return(history.state?history.state.position-e:-1)+t}const Rc=new Map;function kw(t,e){Rc.set(t,e)}function Nw(t){const e=Rc.get(t);return Rc.delete(t),e}let Ow=()=>location.protocol+"//"+location.host;function _m(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),nf(c,"")}return nf(n,t)+r+s}function Dw(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const _=_m(t,location),T=n.value,S=e.value;let P=0;if(g){if(n.value=_,e.value=g,o&&o===T){o=null;return}P=S?g.position-S.position:0}else r(_);s.forEach(x=>{x(n.value,T,{delta:P,type:Bi.pop,direction:P?P>0?Ri.forward:Ri.back:Ri.unknown})})};function c(){o=n.value}function u(g){s.push(g);const _=()=>{const T=s.indexOf(g);T>-1&&s.splice(T,1)};return i.push(_),_}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Qa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function of(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Qa():null}}function Vw(t){const{history:e,location:n}=window,r={value:_m(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Ow()+t+c;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](g)}}function o(c,u){const d=ke({},e.state,of(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=ke({},s.value,e.state,{forward:c,scroll:Qa()});i(d.current,d,!0);const p=ke({},of(r.value,c,null),{position:d.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function xw(t){t=Rw(t);const e=Vw(t),n=Dw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:Sw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Mw(t){return typeof t=="string"||t&&typeof t=="object"}function ym(t){return typeof t=="string"||typeof t=="symbol"}const vm=Symbol("");var af;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(af||(af={}));function ks(t,e){return ke(new Error,{type:t,[vm]:!0},e)}function bn(t,e){return t instanceof Error&&vm in t&&(e==null||!!(t.type&e))}const lf="[^/]+?",Lw={sensitive:!1,strict:!1,start:!0,end:!0},Uw=/[.+*?^${}()[\]/\\]/g;function Fw(t,e){const n=ke({},Lw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Uw,"\\$&"),_+=40;else if(g.type===1){const{value:T,repeatable:S,optional:P,regexp:x}=g;i.push({name:T,repeatable:S,optional:P});const M=x||lf;if(M!==lf){_+=10;try{new RegExp(`(${M})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${T}" (${M}): `+O.message)}}let L=S?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(L=P&&u.length<2?`(?:/${L})`:"/"+L),P&&(L+="?"),s+=L,_+=20,P&&(_+=-8),S&&(_+=-20),M===".*"&&(_+=-50)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const _=d[g]||"",T=i[g-1];p[T.name]=_&&T.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of g)if(_.type===0)d+=_.value;else if(_.type===1){const{value:T,repeatable:S,optional:P}=_,x=T in u?u[T]:"";if(rn(x)&&!S)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const M=rn(x)?x.join("/"):x;if(!M)if(P)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);d+=M}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function Bw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Em(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Bw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cf(r))return 1;if(cf(s))return-1}return s.length-r.length}function cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const jw={type:0,value:""},qw=/[a-zA-Z0-9_]/;function $w(t){if(!t)return[[]];if(t==="/")return[[jw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:qw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Hw(t,e,n){const r=Fw($w(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Kw(t,e){const n=[],r=new Map;e=ff({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const T=!_,S=hf(p);S.aliasOf=_&&_.record;const P=ff(e,p),x=[S];if("alias"in p){const O=typeof p.alias=="string"?[p.alias]:p.alias;for(const W of O)x.push(hf(ke({},S,{components:_?_.record.components:S.components,path:W,aliasOf:_?_.record:S})))}let M,L;for(const O of x){const{path:W}=O;if(g&&W[0]!=="/"){const H=g.record.path,A=H[H.length-1]==="/"?"":"/";O.path=g.record.path+(W&&A+W)}if(M=Hw(O,g,P),_?_.alias.push(M):(L=L||M,L!==M&&L.alias.push(M),T&&p.name&&!df(M)&&o(p.name)),Am(M)&&c(M),S.children){const H=S.children;for(let A=0;A<H.length;A++)i(H[A],M,_&&_.children[A])}_=_||M}return L?()=>{o(L)}:Ii}function o(p){if(ym(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=zw(p,n);n.splice(g,0,p),p.record.name&&!df(p)&&r.set(p.record.name,p)}function u(p,g){let _,T={},S,P;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ks(1,{location:p});P=_.record.name,T=ke(uf(g.params,_.keys.filter(L=>!L.optional).concat(_.parent?_.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),p.params&&uf(p.params,_.keys.map(L=>L.name))),S=_.stringify(T)}else if(p.path!=null)S=p.path,_=n.find(L=>L.re.test(S)),_&&(T=_.parse(S),P=_.record.name);else{if(_=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!_)throw ks(1,{location:p,currentLocation:g});P=_.record.name,T=ke({},g.params,p.params),S=_.stringify(T)}const x=[];let M=_;for(;M;)x.unshift(M.record),M=M.parent;return{name:P,path:S,params:T,matched:x,meta:Gw(x)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function uf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Ww(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Ww(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function df(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gw(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function ff(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Em(t,e[i])<0?r=i:n=i+1}const s=Qw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Qw(t){let e=t;for(;e=e.parent;)if(Am(e)&&Em(t,e)===0)return e}function Am({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Yw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dm," "),o=i.indexOf("="),l=Fi(o<0?i:i.slice(0,o)),c=o<0?null:Fi(i.slice(o+1));if(l in e){let u=e[l];rn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function pf(t){let e="";for(let n in t){const r=t[n];if(n=mw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rn(r)?r.map(i=>i&&Ic(i)):[r&&Ic(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Xw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Jw=Symbol(""),gf=Symbol(""),Ya=Symbol(""),wu=Symbol(""),bc=Symbol("");function ui(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(ks(4,{from:n,to:e})):g instanceof Error?c(g):Mw(g)?c(ks(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function Yl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(um(c)){const d=(c.__vccOpts||c)[e];d&&i.push(sr(d,n,r,o,l,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=iw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&sr(_,n,r,o,l,s)()}))}}return i}function mf(t){const e=en(Ya),n=en(wu),r=Be(()=>{const c=Z(t.to);return e.resolve(c)}),s=Be(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ps.bind(null,d));if(g>-1)return g;const _=_f(c[u-2]);return u>1&&_f(d)===_&&p[p.length-1].path!==_?p.findIndex(Ps.bind(null,c[u-2])):g}),i=Be(()=>s.value>-1&&rT(n.params,r.value.params)),o=Be(()=>s.value>-1&&s.value===n.matched.length-1&&mm(n.params,r.value.params));function l(c={}){if(nT(c)){const u=e[Z(t.replace)?"replace":"push"](Z(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Be(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}function Zw(t){return t.length===1?t[0]:t}const eT=Vg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:mf,setup(t,{slots:e}){const n=bs(mf(t)),{options:r}=en(Ya),s=Be(()=>({[yf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Zw(e.default(n));return t.custom?i:im("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),tT=eT;function nT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!rn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function _f(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yf=(t,e,n)=>t??e??n,sT=Vg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(bc),s=Be(()=>t.route||r.value),i=en(gf,0),o=Be(()=>{let u=Z(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=Be(()=>s.value.matched[o.value]);Qo(gf,Be(()=>o.value+1)),Qo(Jw,l),Qo(bc,s);const c=Ce();return Br(()=>[c.value,l.value,t.name],([u,d,p],[g,_,T])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Ps(d,_)||!g)&&(d.enterCallbacks[p]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return vf(n.default,{Component:g,route:u});const _=p.props[d],T=_?_===!0?u.params:typeof _=="function"?_(u):_:null,P=im(g,ke({},T,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return vf(n.default,{Component:P,route:u})||P}}});function vf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iT=sT;function oT(t){const e=Kw(t.routes,t),n=t.parseQuery||Yw,r=t.stringifyQuery||pf,s=t.history,i=ui(),o=ui(),l=ui(),c=hE(Zn);let u=Zn;hs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=zl.bind(null,U=>""+U),p=zl.bind(null,yw),g=zl.bind(null,Fi);function _(U,ee){let J,re;return ym(U)?(J=e.getRecordMatcher(U),re=ee):re=U,e.addRoute(re,J)}function T(U){const ee=e.getRecordMatcher(U);ee&&e.removeRoute(ee)}function S(){return e.getRoutes().map(U=>U.record)}function P(U){return!!e.getRecordMatcher(U)}function x(U,ee){if(ee=ke({},ee||c.value),typeof U=="string"){const k=Ql(n,U,ee.path),F=e.resolve({path:k.path},ee),$=s.createHref(k.fullPath);return ke(k,F,{params:g(F.params),hash:Fi(k.hash),redirectedFrom:void 0,href:$})}let J;if(U.path!=null)J=ke({},U,{path:Ql(n,U.path,ee.path).path});else{const k=ke({},U.params);for(const F in k)k[F]==null&&delete k[F];J=ke({},U,{params:p(k)}),ee.params=p(ee.params)}const re=e.resolve(J,ee),Re=U.hash||"";re.params=d(g(re.params));const E=Aw(r,ke({},U,{hash:gw(Re),path:re.path})),w=s.createHref(E);return ke({fullPath:E,hash:Re,query:r===pf?Xw(U.query):U.query||{}},re,{redirectedFrom:void 0,href:w})}function M(U){return typeof U=="string"?Ql(n,U,c.value.path):ke({},U)}function L(U,ee){if(u!==U)return ks(8,{from:ee,to:U})}function O(U){return A(U)}function W(U){return O(ke(M(U),{replace:!0}))}function H(U){const ee=U.matched[U.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let re=typeof J=="function"?J(U):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),ke({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function A(U,ee){const J=u=x(U),re=c.value,Re=U.state,E=U.force,w=U.replace===!0,k=H(J);if(k)return A(ke(M(k),{state:typeof k=="object"?ke({},Re,k.state):Re,force:E,replace:w}),ee||J);const F=J;F.redirectedFrom=ee;let $;return!E&&ww(r,re,J)&&($=ks(16,{to:F,from:re}),qt(re,re,!0,!1)),($?Promise.resolve($):b(F,re)).catch(B=>bn(B)?bn(B,2)?B:Yt(B):ve(B,F,re)).then(B=>{if(B){if(bn(B,2))return A(ke({replace:w},M(B.to),{state:typeof B.to=="object"?ke({},Re,B.to.state):Re,force:E}),ee||F)}else B=C(F,re,!0,w,Re);return R(F,re,B),B})}function y(U,ee){const J=L(U,ee);return J?Promise.reject(J):Promise.resolve()}function I(U){const ee=zn.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(U):U()}function b(U,ee){let J;const[re,Re,E]=aT(U,ee);J=Yl(re.reverse(),"beforeRouteLeave",U,ee);for(const k of re)k.leaveGuards.forEach(F=>{J.push(sr(F,U,ee))});const w=y.bind(null,U,ee);return J.push(w),Ct(J).then(()=>{J=[];for(const k of i.list())J.push(sr(k,U,ee));return J.push(w),Ct(J)}).then(()=>{J=Yl(Re,"beforeRouteUpdate",U,ee);for(const k of Re)k.updateGuards.forEach(F=>{J.push(sr(F,U,ee))});return J.push(w),Ct(J)}).then(()=>{J=[];for(const k of E)if(k.beforeEnter)if(rn(k.beforeEnter))for(const F of k.beforeEnter)J.push(sr(F,U,ee));else J.push(sr(k.beforeEnter,U,ee));return J.push(w),Ct(J)}).then(()=>(U.matched.forEach(k=>k.enterCallbacks={}),J=Yl(E,"beforeRouteEnter",U,ee,I),J.push(w),Ct(J))).then(()=>{J=[];for(const k of o.list())J.push(sr(k,U,ee));return J.push(w),Ct(J)}).catch(k=>bn(k,8)?k:Promise.reject(k))}function R(U,ee,J){l.list().forEach(re=>I(()=>re(U,ee,J)))}function C(U,ee,J,re,Re){const E=L(U,ee);if(E)return E;const w=ee===Zn,k=hs?history.state:{};J&&(re||w?s.replace(U.fullPath,ke({scroll:w&&k&&k.scroll},Re)):s.push(U.fullPath,Re)),c.value=U,qt(U,ee,J,w),Yt()}let v;function Tt(){v||(v=s.listen((U,ee,J)=>{if(!on.listening)return;const re=x(U),Re=H(re);if(Re){A(ke(Re,{replace:!0,force:!0}),re).catch(Ii);return}u=re;const E=c.value;hs&&kw(sf(E.fullPath,J.delta),Qa()),b(re,E).catch(w=>bn(w,12)?w:bn(w,2)?(A(ke(M(w.to),{force:!0}),re).then(k=>{bn(k,20)&&!J.delta&&J.type===Bi.pop&&s.go(-1,!1)}).catch(Ii),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ve(w,re,E))).then(w=>{w=w||C(re,E,!1),w&&(J.delta&&!bn(w,8)?s.go(-J.delta,!1):J.type===Bi.pop&&bn(w,20)&&s.go(-1,!1)),R(re,E,w)}).catch(Ii)}))}let jt=ui(),Ye=ui(),we;function ve(U,ee,J){Yt(U);const re=Ye.list();return re.length?re.forEach(Re=>Re(U,ee,J)):console.error(U),Promise.reject(U)}function Dt(){return we&&c.value!==Zn?Promise.resolve():new Promise((U,ee)=>{jt.add([U,ee])})}function Yt(U){return we||(we=!U,Tt(),jt.list().forEach(([ee,J])=>U?J(U):ee()),jt.reset()),U}function qt(U,ee,J,re){const{scrollBehavior:Re}=t;if(!hs||!Re)return Promise.resolve();const E=!J&&Nw(sf(U.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return pu().then(()=>Re(U,ee,E)).then(w=>w&&Pw(w)).catch(w=>ve(w,U,ee))}const je=U=>s.go(U);let qe;const zn=new Set,on={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:S,resolve:x,options:t,push:O,replace:W,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ye.add,isReady:Dt,install(U){const ee=this;U.component("RouterLink",tT),U.component("RouterView",iT),U.config.globalProperties.$router=ee,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(c)}),hs&&!qe&&c.value===Zn&&(qe=!0,O(s.location).catch(Re=>{}));const J={};for(const Re in Zn)Object.defineProperty(J,Re,{get:()=>c.value[Re],enumerable:!0});U.provide(Ya,ee),U.provide(wu,bg(J)),U.provide(bc,c);const re=U.unmount;zn.add(U),U.unmount=function(){zn.delete(U),zn.size<1&&(u=Zn,v&&v(),v=null,c.value=Zn,qe=!1,we=!1),re()}}};function Ct(U){return U.reduce((ee,J)=>ee.then(()=>I(J)),Promise.resolve())}return on}function aT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Ps(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Ps(u,c))||s.push(c))}return[n,r,s]}function Xa(){return en(Ya)}function lT(t){return en(wu)}const cT=()=>{};var Ef={};/**
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
 */const wm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(g=64)),r.push(n[d],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new hT;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const T=u<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dT=function(t){const e=wm(t);return Tm.encodeByteArray(e,!0)},va=function(t){return dT(t).replace(/\./g,"")},Im=function(t){try{return Tm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pT=()=>fT().__FIREBASE_DEFAULTS__,gT=()=>{if(typeof process>"u"||typeof Ef>"u")return;const t=Ef.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Im(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return cT()||pT()||gT()||mT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rm=t=>{var e,n;return(n=(e=Ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bm=t=>{const e=Rm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sm=()=>{var t;return(t=Ja())===null||t===void 0?void 0:t.config},Cm=t=>{var e;return(e=Ja())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rr(t){return t.endsWith(".cloudworkstations.dev")}async function Tu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Pm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}const bi={};function yT(){const t={prod:[],emulator:[]};for(const e of Object.keys(bi))bi[e]?t.emulator.push(e):t.prod.push(e);return t}function vT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Af=!1;function Iu(t,e){if(typeof window>"u"||typeof document>"u"||!Rr(window.location.host)||bi[t]===e||bi[t]||Af)return;bi[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=yT().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Af=!0,o()},g}function d(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=vT(r),_=n("text"),T=document.getElementById(_)||document.createElement("span"),S=n("learnmore"),P=document.getElementById(S)||document.createElement("a"),x=n("preprendIcon"),M=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const L=g.element;l(L),d(P,S);const O=u();c(M,x),L.append(M,T,P,O),document.body.appendChild(L)}i?(T.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ET(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function AT(){var t;const e=(t=Ja())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function IT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RT(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bT(){return!AT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ST(){try{return typeof indexedDB=="object"}catch{return!1}}function CT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const PT="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PT,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new wn(s,l,r)}}function kT(t,e){return t.replace(NT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NT=/\{\$([^}]+)}/g;function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wf(i)&&wf(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
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
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DT(t,e){const n=new VT(t,e);return n.subscribe.bind(n)}class VT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xl),s.error===void 0&&(s.error=Xl),s.complete===void 0&&(s.complete=Xl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xl(){}/**
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
 */class MT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _T;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UT(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LT(t){return t===Mr?void 0:t}function UT(t){return t.instantiationMode==="EAGER"}/**
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
 */class FT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new MT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const BT={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},jT=Ee.INFO,qT={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},$T=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ru{constructor(e){this.name=e,this._logLevel=jT,this._logHandler=$T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const HT=(t,e)=>e.some(n=>t instanceof n);let Tf,If;function KT(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WT(){return If||(If=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const km=new WeakMap,Sc=new WeakMap,Nm=new WeakMap,Jl=new WeakMap,bu=new WeakMap;function GT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&km.set(n,t)}).catch(()=>{}),bu.set(e,t),e}function zT(t){if(Sc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sc.set(t,e)}let Cc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Nm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QT(t){Cc=t(Cc)}function YT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zl(this),e,...n);return Nm.set(r,e.sort?e.sort():[e]),ur(r)}:WT().includes(t)?function(...e){return t.apply(Zl(this),e),ur(km.get(this))}:function(...e){return ur(t.apply(Zl(this),e))}}function XT(t){return typeof t=="function"?YT(t):(t instanceof IDBTransaction&&zT(t),HT(t,KT())?new Proxy(t,Cc):t)}function ur(t){if(t instanceof IDBRequest)return GT(t);if(Jl.has(t))return Jl.get(t);const e=XT(t);return e!==t&&(Jl.set(t,e),bu.set(e,t)),e}const Zl=t=>bu.get(t);function JT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ur(o.result),c.oldVersion,c.newVersion,ur(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const ZT=["get","getKey","getAll","getAllKeys","count"],eI=["put","add","delete","clear"],ec=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ZT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return ec.set(e,i),i}QT(t=>({...t,get:(e,n,r)=>Rf(e,n)||t.get(e,n,r),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
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
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pc="@firebase/app",bf="0.13.1";/**
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
 */const Bn=new Ru("@firebase/app"),rI="@firebase/app-compat",sI="@firebase/analytics-compat",iI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",lI="@firebase/auth",cI="@firebase/auth-compat",uI="@firebase/database",hI="@firebase/data-connect",dI="@firebase/database-compat",fI="@firebase/functions",pI="@firebase/functions-compat",gI="@firebase/installations",mI="@firebase/installations-compat",_I="@firebase/messaging",yI="@firebase/messaging-compat",vI="@firebase/performance",EI="@firebase/performance-compat",AI="@firebase/remote-config",wI="@firebase/remote-config-compat",TI="@firebase/storage",II="@firebase/storage-compat",RI="@firebase/firestore",bI="@firebase/ai",SI="@firebase/firestore-compat",CI="firebase",PI="11.9.0";/**
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
 */const kc="[DEFAULT]",kI={[Pc]:"fire-core",[rI]:"fire-core-compat",[iI]:"fire-analytics",[sI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[lI]:"fire-auth",[cI]:"fire-auth-compat",[uI]:"fire-rtdb",[hI]:"fire-data-connect",[dI]:"fire-rtdb-compat",[fI]:"fire-fn",[pI]:"fire-fn-compat",[gI]:"fire-iid",[mI]:"fire-iid-compat",[_I]:"fire-fcm",[yI]:"fire-fcm-compat",[vI]:"fire-perf",[EI]:"fire-perf-compat",[AI]:"fire-rc",[wI]:"fire-rc-compat",[TI]:"fire-gcs",[II]:"fire-gcs-compat",[RI]:"fire-fst",[SI]:"fire-fst-compat",[bI]:"fire-vertex","fire-js":"fire-js",[CI]:"fire-js-all"};/**
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
 */const Ea=new Map,NI=new Map,Nc=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){Bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(Nc.has(e))return Bn.debug(`There were multiple attempts to register component ${e}.`),!1;Nc.set(e,t);for(const n of Ea.values())Sf(n,t);for(const n of NI.values())Sf(n,t);return!0}function Za(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const OI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hr=new to("app","Firebase",OI);/**
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
 */class DI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hr.create("app-deleted",{appName:this._name})}}/**
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
 */const es=PI;function Om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw hr.create("bad-app-name",{appName:String(s)});if(n||(n=Sm()),!n)throw hr.create("no-options");const i=Ea.get(s);if(i){if(Hr(n,i.options)&&Hr(r,i.config))return i;throw hr.create("duplicate-app",{appName:s})}const o=new FT(s);for(const c of Nc.values())o.addComponent(c);const l=new DI(n,r,o);return Ea.set(s,l),l}function Su(t=kc){const e=Ea.get(t);if(!e&&t===kc&&Sm())return Om();if(!e)throw hr.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=kI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Bn.warn(l.join(" "));return}Kr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const VI="firebase-heartbeat-database",xI=1,ji="firebase-heartbeat-store";let tc=null;function Dm(){return tc||(tc=JT(VI,xI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw hr.create("idb-open",{originalErrorMessage:t.message})})),tc}async function MI(t){try{const n=(await Dm()).transaction(ji),r=await n.objectStore(ji).get(Vm(t));return await n.done,r}catch(e){if(e instanceof wn)Bn.warn(e.message);else{const n=hr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Bn.warn(n.message)}}}async function Cf(t,e){try{const r=(await Dm()).transaction(ji,"readwrite");await r.objectStore(ji).put(e,Vm(t)),await r.done}catch(n){if(n instanceof wn)Bn.warn(n.message);else{const r=hr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Bn.warn(r.message)}}}function Vm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LI=1024,UI=30;class FI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>UI){const o=qI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pf(),{heartbeatsToSend:r,unsentEntries:s}=BI(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Bn.warn(n),""}}}function Pf(){return new Date().toISOString().substring(0,10)}function BI(t,e=LI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ST()?CT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kf(t){return va(JSON.stringify({version:2,heartbeats:t})).length}function qI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function $I(t){Kr(new yr("platform-logger",e=>new tI(e),"PRIVATE")),Kr(new yr("heartbeat",e=>new FI(e),"PRIVATE")),gn(Pc,bf,t),gn(Pc,bf,"esm2017"),gn("fire-js","")}$I("");function Cu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HI=xm,Mm=new to("auth","Firebase",xm());/**
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
 */const Aa=new Ru("@firebase/auth");function KI(t,...e){Aa.logLevel<=Ee.WARN&&Aa.warn(`Auth (${es}): ${t}`,...e)}function Jo(t,...e){Aa.logLevel<=Ee.ERROR&&Aa.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw ku(t,...e)}function tn(t,...e){return ku(t,...e)}function Pu(t,e,n){const r=Object.assign(Object.assign({},HI()),{[e]:n});return new to("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Pu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function WI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),Pu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ku(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mm.create(t,...e)}function ce(t,e,...n){if(!t)throw ku(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jo(e),new Error(e)}function jn(t,e){t||xn(e)}/**
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
 */function Oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GI(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||TT()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=ET()||IT()}get(){return zI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nu(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const YI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JI=new ro(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,r,s={}){return Um(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=no(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return wT()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Rr(t.emulatorConfig.host)&&(u.credentials="include"),Lm.fetch()(await Fm(t,t.config.apiHost,n,l),u)})}async function Um(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},YI),e);try{const s=new eR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Lo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Lo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Lo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Lo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pu(t,d,u);Qt(t,d)}}catch(s){if(s instanceof wn)throw s;Qt(t,"network-request-failed",{message:String(s)})}}async function so(t,e,n,r,s={}){const i=await Wn(t,e,n,r,s);return"mfaPendingCredential"in i&&Qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Fm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Nu(t.config,s):`${t.config.apiScheme}://${s}`;return XI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ZI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),JI.get())})}}function Lo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function Of(t){return t!==void 0&&t.enterprise!==void 0}class tR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nR(t,e){return Wn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
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
 */async function rR(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function wa(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sR(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=Ou(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(nc(s.auth_time)),issuedAtTime:Si(nc(s.iat)),expirationTime:Si(nc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function Ou(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Im(n);return s?JSON.parse(s):(Jo("Failed to decode base64 JWT payload"),null)}catch(s){return Jo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Df(t){const e=Ou(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&iR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class oR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ta(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qi(t,wa(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bm(i.providerUserInfo):[],l=lR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function aR(t){const e=$e(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bm(t){return t.map(e=>{var{providerId:n}=e,r=Cu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cR(t,e){const n=await Um(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Fm(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Rr(t.emulatorConfig.host)&&(c.credentials="include"),Lm.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function uR(t,e){return Wn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
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
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new As;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
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
 */function er(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sR(this,e)}reload(){return aR(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await qi(this,rR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(l=n.tenantId)!==null&&l!==void 0?l:void 0,P=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:O,isAnonymous:W,providerData:H,stsTokenManager:A}=n;ce(L&&A,e,"internal-error");const y=As.fromJSON(this.name,A);ce(typeof L=="string",e,"internal-error"),er(p,e.name),er(g,e.name),ce(typeof O=="boolean",e,"internal-error"),ce(typeof W=="boolean",e,"internal-error"),er(_,e.name),er(T,e.name),er(S,e.name),er(P,e.name),er(x,e.name),er(M,e.name);const I=new Jt({uid:L,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:W,photoURL:T,phoneNumber:_,tenantId:S,stsTokenManager:y,createdAt:x,lastLoginAt:M});return H&&Array.isArray(H)&&(I.providerData=H.map(b=>Object.assign({},b))),P&&(I._redirectEventId=P),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new As;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new As;l.updateFromIdToken(r);const c=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Vf=new Map;function Mn(t){jn(t instanceof Function,"Expected a class definition");let e=Vf.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vf.set(t,e),e)}/**
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
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jm.type="NONE";const xf=jm;/**
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
 */function Zo(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wa(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Mn(xf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Mn(xf);const o=Zo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const g=await wa(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Jt._fromGetAccountInfoResponse(e,g,d)}else p=Jt._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ws(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ws(i,e,r))}}/**
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
 */function Mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(zm(e))return"Webos";if($m(e))return"Safari";if((e.includes("chrome/")||Hm(e))&&!e.includes("edge/"))return"Chrome";if(Wm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qm(t=wt()){return/firefox\//i.test(t)}function $m(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hm(t=wt()){return/crios\//i.test(t)}function Km(t=wt()){return/iemobile/i.test(t)}function Wm(t=wt()){return/android/i.test(t)}function Gm(t=wt()){return/blackberry/i.test(t)}function zm(t=wt()){return/webos/i.test(t)}function Du(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hR(t=wt()){var e;return Du(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dR(){return RT()&&document.documentMode===10}function Qm(t=wt()){return Du(t)||Wm(t)||zm(t)||Gm(t)||/windows phone/i.test(t)||Km(t)}/**
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
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=Mf(wt());break;case"Worker":n=`${Mf(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class fR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pR(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const gR=6;class mR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _R{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.beforeStateQueue=new fR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wa(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(Ln(this));const n=e?$e(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pR(this),n=new mR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new to("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await uR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gn(t){return $e(t)}class Lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=DT(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let el={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yR(t){el=t}function Xm(t){return el.loadJS(t)}function vR(){return el.recaptchaEnterpriseScript}function ER(){return el.gapiScript}function AR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class wR{constructor(){this.enterprise=new TR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class TR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const IR="recaptcha-enterprise",Jm="NO_RECAPTCHA";class RR{constructor(e){this.type=IR,this.auth=Gn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{nR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new tR(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;Of(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Jm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new wR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Of(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vR();c.length!==0&&(c+=l),Xm(c).then(()=>{s(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Uf(t,e,n,r=!1,s=!1){const i=new RR(t);let o;if(s)o=Jm;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ia(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Uf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Uf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function bR(t,e){const n=Za(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return s;Qt(s,"already-initialized")}return n.initialize({options:e})}function SR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CR(t,e,n){const r=Gn(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zm(e),{host:o,port:l}=PR(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Hr(u,r.config.emulator)&&Hr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Rr(o)?(Tu(`${i}//${o}${c}`),Iu("Auth",!0)):kR()}function Zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PR(t){const e=Zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ff(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ff(o)}}}function Ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function NR(t,e){return Wn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OR(t,e){return so(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}async function DR(t,e){return Wn(t,"POST","/v1/accounts:sendOobCode",Kn(t,e))}async function VR(t,e){return DR(t,e)}/**
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
 */async function xR(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function MR(t,e){return so(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
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
 */class $i extends Vu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $i(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $i(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,n,"signInWithPassword",OR);case"emailLink":return xR(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ia(e,r,"signUpPassword",NR);case"emailLink":return MR(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ts(t,e){return so(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
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
 */const LR="http://localhost";class Wr extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Wr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:LR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
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
 */function UR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FR(t){const e=fi(pi(t)).link,n=e?fi(pi(e)).deep_link_id:null,r=fi(pi(t)).deep_link_id;return(r?fi(pi(r)).link:null)||r||n||e||t}class xu{constructor(e){var n,r,s,i,o,l;const c=fi(pi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=UR((s=c.mode)!==null&&s!==void 0?s:null);ce(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=FR(e);try{return new xu(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return $i._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=xu.parseLink(n);return ce(r,"argument-error"),$i._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class io extends Mu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dn extends io{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class ir extends io{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
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
 */class or extends io{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
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
 */async function BR(t,e){return so(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),o=Bf(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bf(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ra extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ra.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ra(e,n,r,s)}}function e_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ra._fromErrorAndOperation(t,i,e,r):i})}async function jR(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
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
 */async function qR(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(Ln(r));const s="reauthenticate";try{const i=await qi(t,e_(r,s,e,t),n);ce(i.idToken,r,"internal-error");const o=Ou(i.idToken);ce(o,r,"internal-error");const{sub:l}=o;return ce(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),i}}/**
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
 */async function t_(t,e,n=!1){if(Nt(t.app))return Promise.reject(Ln(t));const r="signIn",s=await e_(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function $R(t,e){return t_(Gn(t),e)}/**
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
 */async function n_(t){const e=Gn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HR(t,e,n){const r=Gn(t);await Ia(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",VR)}async function KR(t,e,n){if(Nt(t.app))return Promise.reject(Ln(t));const r=Gn(t),o=await Ia(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BR).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&n_(t),c}),l=await Gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function WR(t,e,n){return Nt(t.app)?Promise.reject(Ln(t)):$R($e(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&n_(t),r})}function GR(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function zR(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function QR(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function YR(t){return $e(t).signOut()}const ba="__sak";/**
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
 */class r_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const XR=1e3,JR=10;class s_ extends r_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);dR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}s_.type="LOCAL";const ZR=s_;/**
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
 */class i_ extends r_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}i_.type="SESSION";const o_=i_;/**
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
 */function eb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await eb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
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
 */function Lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Lu("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function mn(){return window}function nb(t){mn().location.href=t}/**
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
 */function a_(){return typeof mn().WorkerGlobalScope<"u"&&typeof mn().importScripts=="function"}async function rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ib(){return a_()?self:null}/**
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
 */const l_="firebaseLocalStorageDb",ob=1,Sa="firebaseLocalStorage",c_="fbase_key";class oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function ab(){const t=indexedDB.deleteDatabase(l_);return new oo(t).toPromise()}function Vc(){const t=indexedDB.open(l_,ob);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:c_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await ab(),e(await Vc()))})})}async function jf(t,e,n){const r=nl(t,!0).put({[c_]:e,value:n});return new oo(r).toPromise()}async function lb(t,e){const n=nl(t,!1).get(e),r=await new oo(n).toPromise();return r===void 0?null:r.value}function qf(t,e){const n=nl(t,!0).delete(e);return new oo(n).toPromise()}const cb=800,ub=3;class u_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(ib()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vc();return await jf(e,ba,"1"),await qf(e,ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=nl(s,!1).getAll();return new oo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}u_.type="LOCAL";const hb=u_;new ro(3e4,6e4);/**
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
 */function h_(t,e){return e?Mn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uu extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function db(t){return t_(t.auth,new Uu(t),t.bypassAuthState)}function fb(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),qR(n,new Uu(t),t.bypassAuthState)}async function pb(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),jR(n,new Uu(t),t.bypassAuthState)}/**
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
 */class d_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return db;case"linkViaPopup":case"linkViaRedirect":return pb;case"reauthViaPopup":case"reauthViaRedirect":return fb;default:Qt(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gb=new ro(2e3,1e4);async function f_(t,e,n){if(Nt(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=Gn(t);WI(t,e,Mu);const s=h_(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}class Lr extends d_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=Lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gb.get())};e()}}Lr.currentPopupAction=null;/**
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
 */const mb="pendingRedirect",ea=new Map;class _b extends d_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const r=await yb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yb(t,e){const n=Ab(e),r=Eb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function vb(t,e){ea.set(t._key(),e)}function Eb(t){return Mn(t._redirectPersistence)}function Ab(t){return Zo(mb,t.config.apiKey,t.name)}async function wb(t,e,n=!1){if(Nt(t.app))return Promise.reject(Ln(t));const r=Gn(t),s=h_(r,e),o=await new _b(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Tb=10*60*1e3;class Ib{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Rb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!p_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tb&&this.cachedEventUids.clear(),this.cachedEventUids.has($f(e))}saveEventToCache(e){this.cachedEventUids.add($f(e)),this.lastProcessedEventTime=Date.now()}}function $f(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Rb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p_(t);default:return!1}}/**
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
 */async function bb(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
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
 */const Sb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cb=/^https?/;async function Pb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bb(t);for(const n of e)try{if(kb(n))return}catch{}Qt(t,"unauthorized-domain")}function kb(t){const e=Oc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cb.test(n))return!1;if(Sb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Nb=new ro(3e4,6e4);function Hf(){const t=mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ob(t){return new Promise((e,n)=>{var r,s,i;function o(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(tn(t,"network-request-failed"))},timeout:Nb.get()})}if(!((s=(r=mn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=mn().gapi)===null||i===void 0)&&i.load)o();else{const l=AR("iframefcb");return mn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},Xm(`${ER()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ta=null,e})}let ta=null;function Db(t){return ta=ta||Ob(t),ta}/**
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
 */const Vb=new ro(5e3,15e3),xb="__/auth/iframe",Mb="emulator/auth/iframe",Lb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ub=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nu(e,Mb):`https://${t.config.authDomain}/${xb}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=Ub.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${no(r).slice(1)}`}async function Bb(t){const e=await Db(t),n=mn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:Fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=mn().setTimeout(()=>{i(o)},Vb.get());function c(){mn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qb=500,$b=600,Hb="_blank",Kb="http://localhost";class Kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wb(t,e,n,r=qb,s=$b){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},jb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=wt().toLowerCase();n&&(l=Hm(u)?Hb:n),qm(u)&&(e=e||Kb,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if(hR(u)&&l!=="_self")return Gb(e||"",l),new Kf(null);const p=window.open(e||"",l,d);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Kf(p)}function Gb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const zb="__/auth/handler",Qb="emulator/auth/handler",Yb=encodeURIComponent("fac");async function Wf(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof Mu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof io){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${Yb}=${encodeURIComponent(c)}`:"";return`${Xb(t)}?${no(l).slice(1)}${u}`}function Xb({config:t}){return t.emulator?Nu(t,Qb):`https://${t.authDomain}/${zb}`}/**
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
 */const rc="webStorageSupport";class Jb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o_,this._completeRedirectFn=wb,this._overrideRedirectResult=vb}async _openPopup(e,n,r,s){var i;jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wf(e,n,r,Oc(),s);return Wb(e,o,Lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wf(e,n,r,Oc(),s);return nb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Bb(e),r=new Ib(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||$m()||Du()}}const Zb=Jb;var Gf="@firebase/auth",zf="1.10.7";/**
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
 */function t0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function n0(t){Kr(new yr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},u=new _R(r,s,i,c);return SR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new yr("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new e0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Gf,zf,t0(t)),gn(Gf,zf,"esm2017")}/**
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
 */const r0=5*60,s0=Cm("authIdTokenMaxAge")||r0;let Qf=null;const i0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>s0)return;const s=n==null?void 0:n.token;Qf!==s&&(Qf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function o0(t=Su()){const e=Za(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bR(t,{popupRedirectResolver:Zb,persistence:[hb,ZR,o_]}),r=Cm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=i0(i.toString());zR(n,o,()=>o(n.currentUser)),GR(n,l=>o(l))}}const s=Rm("auth");return s&&CR(n,`http://${s}`),n}function a0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});n0("Browser");var l0="firebase",c0="11.9.1";/**
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
 */gn(l0,c0,"app");var Yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,g_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function I(){}I.prototype=y.prototype,A.D=y.prototype,A.prototype=new I,A.prototype.constructor=A,A.C=function(b,R,C){for(var v=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)v[Tt-2]=arguments[Tt];return y.prototype[R].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,I){I||(I=0);var b=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)b[R]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(R=0;16>R;++R)b[R]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=A.g[0],I=A.g[1],R=A.g[2];var C=A.g[3],v=y+(C^I&(R^C))+b[0]+3614090360&4294967295;y=I+(v<<7&4294967295|v>>>25),v=C+(R^y&(I^R))+b[1]+3905402710&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(I^C&(y^I))+b[2]+606105819&4294967295,R=C+(v<<17&4294967295|v>>>15),v=I+(y^R&(C^y))+b[3]+3250441966&4294967295,I=R+(v<<22&4294967295|v>>>10),v=y+(C^I&(R^C))+b[4]+4118548399&4294967295,y=I+(v<<7&4294967295|v>>>25),v=C+(R^y&(I^R))+b[5]+1200080426&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(I^C&(y^I))+b[6]+2821735955&4294967295,R=C+(v<<17&4294967295|v>>>15),v=I+(y^R&(C^y))+b[7]+4249261313&4294967295,I=R+(v<<22&4294967295|v>>>10),v=y+(C^I&(R^C))+b[8]+1770035416&4294967295,y=I+(v<<7&4294967295|v>>>25),v=C+(R^y&(I^R))+b[9]+2336552879&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(I^C&(y^I))+b[10]+4294925233&4294967295,R=C+(v<<17&4294967295|v>>>15),v=I+(y^R&(C^y))+b[11]+2304563134&4294967295,I=R+(v<<22&4294967295|v>>>10),v=y+(C^I&(R^C))+b[12]+1804603682&4294967295,y=I+(v<<7&4294967295|v>>>25),v=C+(R^y&(I^R))+b[13]+4254626195&4294967295,C=y+(v<<12&4294967295|v>>>20),v=R+(I^C&(y^I))+b[14]+2792965006&4294967295,R=C+(v<<17&4294967295|v>>>15),v=I+(y^R&(C^y))+b[15]+1236535329&4294967295,I=R+(v<<22&4294967295|v>>>10),v=y+(R^C&(I^R))+b[1]+4129170786&4294967295,y=I+(v<<5&4294967295|v>>>27),v=C+(I^R&(y^I))+b[6]+3225465664&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^I&(C^y))+b[11]+643717713&4294967295,R=C+(v<<14&4294967295|v>>>18),v=I+(C^y&(R^C))+b[0]+3921069994&4294967295,I=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(I^R))+b[5]+3593408605&4294967295,y=I+(v<<5&4294967295|v>>>27),v=C+(I^R&(y^I))+b[10]+38016083&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^I&(C^y))+b[15]+3634488961&4294967295,R=C+(v<<14&4294967295|v>>>18),v=I+(C^y&(R^C))+b[4]+3889429448&4294967295,I=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(I^R))+b[9]+568446438&4294967295,y=I+(v<<5&4294967295|v>>>27),v=C+(I^R&(y^I))+b[14]+3275163606&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^I&(C^y))+b[3]+4107603335&4294967295,R=C+(v<<14&4294967295|v>>>18),v=I+(C^y&(R^C))+b[8]+1163531501&4294967295,I=R+(v<<20&4294967295|v>>>12),v=y+(R^C&(I^R))+b[13]+2850285829&4294967295,y=I+(v<<5&4294967295|v>>>27),v=C+(I^R&(y^I))+b[2]+4243563512&4294967295,C=y+(v<<9&4294967295|v>>>23),v=R+(y^I&(C^y))+b[7]+1735328473&4294967295,R=C+(v<<14&4294967295|v>>>18),v=I+(C^y&(R^C))+b[12]+2368359562&4294967295,I=R+(v<<20&4294967295|v>>>12),v=y+(I^R^C)+b[5]+4294588738&4294967295,y=I+(v<<4&4294967295|v>>>28),v=C+(y^I^R)+b[8]+2272392833&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^I)+b[11]+1839030562&4294967295,R=C+(v<<16&4294967295|v>>>16),v=I+(R^C^y)+b[14]+4259657740&4294967295,I=R+(v<<23&4294967295|v>>>9),v=y+(I^R^C)+b[1]+2763975236&4294967295,y=I+(v<<4&4294967295|v>>>28),v=C+(y^I^R)+b[4]+1272893353&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^I)+b[7]+4139469664&4294967295,R=C+(v<<16&4294967295|v>>>16),v=I+(R^C^y)+b[10]+3200236656&4294967295,I=R+(v<<23&4294967295|v>>>9),v=y+(I^R^C)+b[13]+681279174&4294967295,y=I+(v<<4&4294967295|v>>>28),v=C+(y^I^R)+b[0]+3936430074&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^I)+b[3]+3572445317&4294967295,R=C+(v<<16&4294967295|v>>>16),v=I+(R^C^y)+b[6]+76029189&4294967295,I=R+(v<<23&4294967295|v>>>9),v=y+(I^R^C)+b[9]+3654602809&4294967295,y=I+(v<<4&4294967295|v>>>28),v=C+(y^I^R)+b[12]+3873151461&4294967295,C=y+(v<<11&4294967295|v>>>21),v=R+(C^y^I)+b[15]+530742520&4294967295,R=C+(v<<16&4294967295|v>>>16),v=I+(R^C^y)+b[2]+3299628645&4294967295,I=R+(v<<23&4294967295|v>>>9),v=y+(R^(I|~C))+b[0]+4096336452&4294967295,y=I+(v<<6&4294967295|v>>>26),v=C+(I^(y|~R))+b[7]+1126891415&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~I))+b[14]+2878612391&4294967295,R=C+(v<<15&4294967295|v>>>17),v=I+(C^(R|~y))+b[5]+4237533241&4294967295,I=R+(v<<21&4294967295|v>>>11),v=y+(R^(I|~C))+b[12]+1700485571&4294967295,y=I+(v<<6&4294967295|v>>>26),v=C+(I^(y|~R))+b[3]+2399980690&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~I))+b[10]+4293915773&4294967295,R=C+(v<<15&4294967295|v>>>17),v=I+(C^(R|~y))+b[1]+2240044497&4294967295,I=R+(v<<21&4294967295|v>>>11),v=y+(R^(I|~C))+b[8]+1873313359&4294967295,y=I+(v<<6&4294967295|v>>>26),v=C+(I^(y|~R))+b[15]+4264355552&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~I))+b[6]+2734768916&4294967295,R=C+(v<<15&4294967295|v>>>17),v=I+(C^(R|~y))+b[13]+1309151649&4294967295,I=R+(v<<21&4294967295|v>>>11),v=y+(R^(I|~C))+b[4]+4149444226&4294967295,y=I+(v<<6&4294967295|v>>>26),v=C+(I^(y|~R))+b[11]+3174756917&4294967295,C=y+(v<<10&4294967295|v>>>22),v=R+(y^(C|~I))+b[2]+718787259&4294967295,R=C+(v<<15&4294967295|v>>>17),v=I+(C^(R|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(R+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var I=y-this.blockSize,b=this.B,R=this.h,C=0;C<y;){if(R==0)for(;C<=I;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<y;)if(b[R++]=A.charCodeAt(C++),R==this.blockSize){s(this,b),R=0;break}}else for(;C<y;)if(b[R++]=A[C++],R==this.blockSize){s(this,b),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var I=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=I&255,I/=256;for(this.u(A),A=Array(16),y=I=0;4>y;++y)for(var b=0;32>b;b+=8)A[I++]=this.g[y]>>>b&255;return A};function i(A,y){var I=l;return Object.prototype.hasOwnProperty.call(I,A)?I[A]:I[A]=y(A)}function o(A,y){this.h=y;for(var I=[],b=!0,R=A.length-1;0<=R;R--){var C=A[R]|0;b&&C==y||(I[R]=C,b=!1)}this.g=I}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new o([y|0],0>y?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return P(u(-A));for(var y=[],I=1,b=0;A>=I;b++)y[b]=A/I|0,I*=4294967296;return new o(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return P(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=u(Math.pow(y,8)),b=p,R=0;R<A.length;R+=8){var C=Math.min(8,A.length-R),v=parseInt(A.substring(R,R+C),y);8>C?(C=u(Math.pow(y,C)),b=b.j(C).add(u(v))):(b=b.j(I),b=b.add(u(v)))}return b}var p=c(0),g=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(S(this))return-P(this).m();for(var A=0,y=1,I=0;I<this.g.length;I++){var b=this.i(I);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(T(this))return"0";if(S(this))return"-"+P(this).toString(A);for(var y=u(Math.pow(A,6)),I=this,b="";;){var R=O(I,y).g;I=x(I,R.j(y));var C=((0<I.g.length?I.g[0]:I.h)>>>0).toString(A);if(I=R,T(I))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function T(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function S(A){return A.h==-1}t.l=function(A){return A=x(this,A),S(A)?-1:T(A)?0:1};function P(A){for(var y=A.g.length,I=[],b=0;b<y;b++)I[b]=~A.g[b];return new o(I,~A.h).add(g)}t.abs=function(){return S(this)?P(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),I=[],b=0,R=0;R<=y;R++){var C=b+(this.i(R)&65535)+(A.i(R)&65535),v=(C>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);b=v>>>16,C&=65535,v&=65535,I[R]=v<<16|C}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(A,y){return A.add(P(y))}t.j=function(A){if(T(this)||T(A))return p;if(S(this))return S(A)?P(this).j(P(A)):P(P(this).j(A));if(S(A))return P(this.j(P(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,I=[],b=0;b<2*y;b++)I[b]=0;for(b=0;b<this.g.length;b++)for(var R=0;R<A.g.length;R++){var C=this.i(b)>>>16,v=this.i(b)&65535,Tt=A.i(R)>>>16,jt=A.i(R)&65535;I[2*b+2*R]+=v*jt,M(I,2*b+2*R),I[2*b+2*R+1]+=C*jt,M(I,2*b+2*R+1),I[2*b+2*R+1]+=v*Tt,M(I,2*b+2*R+1),I[2*b+2*R+2]+=C*Tt,M(I,2*b+2*R+2)}for(b=0;b<y;b++)I[b]=I[2*b+1]<<16|I[2*b];for(b=y;b<2*y;b++)I[b]=0;return new o(I,0)};function M(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function L(A,y){this.g=A,this.h=y}function O(A,y){if(T(y))throw Error("division by zero");if(T(A))return new L(p,p);if(S(A))return y=O(P(A),y),new L(P(y.g),P(y.h));if(S(y))return y=O(A,P(y)),new L(P(y.g),y.h);if(30<A.g.length){if(S(A)||S(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,b=y;0>=b.l(A);)I=W(I),b=W(b);var R=H(I,1),C=H(b,1);for(b=H(b,2),I=H(I,2);!T(b);){var v=C.add(b);0>=v.l(A)&&(R=R.add(I),C=v),b=H(b,1),I=H(I,1)}return y=x(A,R.j(y)),new L(R,y)}for(R=p;0<=A.l(y);){for(I=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(I)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=u(I),v=C.j(y);S(v)||0<v.l(A);)I-=b,C=u(I),v=C.j(y);T(C)&&(C=g),R=R.add(C),A=x(A,v)}return new L(R,A)}t.A=function(A){return O(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),I=[],b=0;b<y;b++)I[b]=this.i(b)&A.i(b);return new o(I,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),I=[],b=0;b<y;b++)I[b]=this.i(b)|A.i(b);return new o(I,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),I=[],b=0;b<y;b++)I[b]=this.i(b)^A.i(b);return new o(I,this.h^A.h)};function W(A){for(var y=A.g.length+1,I=[],b=0;b<y;b++)I[b]=A.i(b)<<1|A.i(b-1)>>>31;return new o(I,A.h)}function H(A,y){var I=y>>5;y%=32;for(var b=A.g.length-I,R=[],C=0;C<b;C++)R[C]=0<y?A.i(C+I)>>>y|A.i(C+I+1)<<32-y:A.i(C+I);return new o(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,g_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,dr=o}).apply(typeof Yf<"u"?Yf:typeof self<"u"?self:typeof window<"u"?window:{});var Uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_,gi,__,na,xc,y_,v_,E_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uo=="object"&&Uo];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var N=a[m];if(!(N in f))break e;f=f[N]}a=a[a.length-1],m=f[a],h=h(m),h!=m&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,m=!1,N={next:function(){if(!m&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,m),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function T(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,N,D){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return h.prototype[N].apply(m,Q)}}function S(a){const h=a.length;if(0<h){const f=Array(h);for(let m=0;m<h;m++)f[m]=a[m];return f}return[]}function P(a,h){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const N=a.length||0,D=m.length||0;a.length=N+D;for(let Q=0;Q<D;Q++)a[N+Q]=m[Q]}else a.push(m)}}class x{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var W=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function H(a,h,f){for(const m in a)h.call(f,a[m],m,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(a,h){let f,m;for(let N=1;N<arguments.length;N++){m=arguments[N];for(f in m)a[f]=m[f];for(let D=0;D<I.length;D++)f=I[D],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Dt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Tt{constructor(){this.h=this.g=null}add(h,f){const m=jt.get();m.set(h,f),this.h?this.h.next=m:this.g=m,this.h=m}}var jt=new x(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ve=!1,Dt=new Tt,Yt=()=>{const a=l.Promise.resolve(void 0);we=()=>{a.then(qt)}};var qt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){C(f)}var h=jt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var zn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function on(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(W){e:{try{O(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&on.aa.h.call(this)}}T(on,qe);var Ct={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(a,h,f,m,N){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.ha=N,this.key=++ee,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,h,f,m,N){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var Q=w(a,h,m,N);return-1<Q?(h=a[Q],f||(h.fa=!1)):(h=new J(h,this.src,D,!!m,N),h.fa=f,a.push(h)),h};function E(a,h){var f=h.type;if(f in a.g){var m=a.g[f],N=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=N)&&Array.prototype.splice.call(m,N,1),D&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,h,f,m){for(var N=0;N<a.length;++N){var D=a[N];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==m)return N}return-1}var k="closure_lm_"+(1e6*Math.random()|0),F={};function $(a,h,f,m,N){if(Array.isArray(h)){for(var D=0;D<h.length;D++)$(a,h[D],f,m,N);return null}return f=he(f),a&&a[U]?a.K(h,f,u(m)?!!m.capture:!1,N):B(a,h,f,!1,m,N)}function B(a,h,f,m,N,D){if(!h)throw Error("Invalid event type");var Q=u(N)?!!N.capture:!!N,Ve=Y(a);if(Ve||(a[k]=Ve=new Re(a)),f=Ve.add(h,f,m,Q,D),f.proxy)return f;if(m=X(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)zn||(N=Q),N===void 0&&(N=!1),a.addEventListener(h.toString(),m,N);else if(a.attachEvent)a.attachEvent(K(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function X(){function a(f){return h.call(a.src,a.listener,f)}const h=ie;return a}function z(a,h,f,m,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)z(a,h[D],f,m,N);else m=u(m)?!!m.capture:!!m,f=he(f),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=w(D,f,m,N),-1<f&&(re(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Y(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,f,m,N)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])E(h.i,a);else{var f=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(f,m,a.capture):h.detachEvent?h.detachEvent(K(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=Y(h))?(E(f,a),f.h==0&&(f.src=null,h[k]=null)):re(a)}}}function K(a){return a in F?F[a]:F[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new on(h,this);var f=a.listener,m=a.ha||a.src;a.fa&&G(a),a=f.call(m,h)}return a}function Y(a){return a=a[k],a instanceof Re?a:null}var se="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(a){return typeof a=="function"?a:(a[se]||(a[se]=function(h){return a.handleEvent(h)}),a[se])}function ae(){je.call(this),this.i=new Re(this),this.M=this,this.F=null}T(ae,je),ae.prototype[U]=!0,ae.prototype.removeEventListener=function(a,h,f,m){z(this,a,h,f,m)};function ge(a,h){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var N=h;h=new qe(m,a),b(h,N)}if(N=!0,f)for(var D=f.length-1;0<=D;D--){var Q=h.g=f[D];N=Te(Q,m,!0,h)&&N}if(Q=h.g=a,N=Te(Q,m,!0,h)&&N,N=Te(Q,m,!1,h)&&N,f)for(D=0;D<f.length;D++)Q=h.g=f[D],N=Te(Q,m,!1,h)&&N}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],m=0;m<f.length;m++)re(f[m]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,m){return this.i.add(String(a),h,!1,f,m)},ae.prototype.L=function(a,h,f,m){return this.i.add(String(a),h,!0,f,m)};function Te(a,h,f,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,D=0;D<h.length;++D){var Q=h[D];if(Q&&!Q.da&&Q.capture==f){var Ve=Q.listener,ot=Q.ha||Q.src;Q.fa&&E(a.i,Q),N=Ve.call(ot,m)!==!1&&N}}return N&&!m.defaultPrevented}function ht(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function st(a){a.g=ht(()=>{a.g=null,a.i&&(a.i=!1,st(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class $t extends je{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(a){je.call(this),this.h=a,this.g={}}T(dt,je);var Qn=[];function zs(a){H(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}dt.prototype.N=function(){dt.aa.N.call(this),zs(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=l.JSON.stringify,Ht=l.JSON.parse,po=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Al(){}Al.prototype.h=null;function Oh(a){return a.h||(a.h=a.i())}function Dh(){}var Qs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wl(){qe.call(this,"d")}T(wl,qe);function Tl(){qe.call(this,"c")}T(Tl,qe);var Pr={},Vh=null;function go(){return Vh=Vh||new ae}Pr.La="serverreachability";function xh(a){qe.call(this,Pr.La,a)}T(xh,qe);function Ys(a){const h=go();ge(h,new xh(h))}Pr.STAT_EVENT="statevent";function Mh(a,h){qe.call(this,Pr.STAT_EVENT,a),this.stat=h}T(Mh,qe);function It(a){const h=go();ge(h,new Mh(h,a))}Pr.Ma="timingevent";function Lh(a,h){qe.call(this,Pr.Ma,a),this.size=h}T(Lh,qe);function Xs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Js(){this.g=!0}Js.prototype.xa=function(){this.g=!1};function cv(a,h,f,m,N,D){a.info(function(){if(a.g)if(D)for(var Q="",Ve=D.split("&"),ot=0;ot<Ve.length;ot++){var be=Ve[ot].split("=");if(1<be.length){var ft=be[0];be=be[1];var pt=ft.split("_");Q=2<=pt.length&&pt[1]=="type"?Q+(ft+"="+be+"&"):Q+(ft+"=redacted&")}}else Q=null;else Q=D;return"XMLHTTP REQ ("+m+") [attempt "+N+"]: "+h+`
`+f+`
`+Q})}function uv(a,h,f,m,N,D,Q){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+N+"]: "+h+`
`+f+`
`+D+" "+Q})}function ss(a,h,f,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+dv(a,f)+(m?" "+m:"")})}function hv(a,h){a.info(function(){return"TIMEOUT: "+h})}Js.prototype.info=function(){};function dv(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var N=m[1];if(Array.isArray(N)&&!(1>N.length)){var D=N[0];if(D!="noop"&&D!="stop"&&D!="close")for(var Q=1;Q<N.length;Q++)N[Q]=""}}}}return it(f)}catch{return h}}var mo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Il;function _o(){}T(_o,Al),_o.prototype.g=function(){return new XMLHttpRequest},_o.prototype.i=function(){return{}},Il=new _o;function Yn(a,h,f,m){this.j=a,this.i=h,this.l=f,this.R=m||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fh}function Fh(){this.i=null,this.g="",this.h=!1}var Bh={},Rl={};function bl(a,h,f){a.L=1,a.v=Ao(Tn(h)),a.m=f,a.P=!0,jh(a,null)}function jh(a,h){a.F=Date.now(),yo(a),a.A=Tn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),td(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Fh,a.g=vd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new $t(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,m=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Qn[0]=N.toString()),N=Qn);for(var D=0;D<N.length;D++){var Q=$(f,N[D],m||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ys(),cv(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const pt=In(this.g);var h=this.g.Ba();const as=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||ld(this.g)))){this.J||pt!=4||h==7||(h==8||0>=as?Ys(3):Ys(2)),Sl(this);var f=this.g.Z();this.X=f;t:if(qh(this)){var m=ld(this.g);a="";var N=m.length,D=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),Zs(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==N-1)});m.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,uv(this.i,this.u,this.A,this.l,this.R,pt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ot=this.g;if((Ve=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Ve)){var be=Ve;break t}}be=null}if(f=be)ss(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cl(this,f);else{this.o=!1,this.s=3,It(12),kr(this),Zs(this);break e}}if(this.P){f=!0;let Xt;for(;!this.J&&this.C<Q.length;)if(Xt=fv(this,Q),Xt==Rl){pt==4&&(this.s=4,It(14),f=!1),ss(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Bh){this.s=4,It(15),ss(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else ss(this.i,this.l,Xt,null),Cl(this,Xt);if(qh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||Q.length!=0||this.h.h||(this.s=1,It(16),f=!1),this.o=this.o&&f,!f)ss(this.i,this.l,Q,"[Invalid Chunked Response]"),kr(this),Zs(this);else if(0<Q.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),Vl(ft),ft.M=!0,It(11))}}else ss(this.i,this.l,Q,null),Cl(this,Q);pt==4&&kr(this),this.o&&!this.J&&(pt==4?gd(this.j,this):(this.o=!1,yo(this)))}else kv(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),kr(this),Zs(this)}}}catch{}finally{}};function qh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function fv(a,h){var f=a.C,m=h.indexOf(`
`,f);return m==-1?Rl:(f=Number(h.substring(f,m)),isNaN(f)?Bh:(m+=1,m+f>h.length?Rl:(h=h.slice(m,m+f),a.C=m+f,h)))}Yn.prototype.cancel=function(){this.J=!0,kr(this)};function yo(a){a.S=Date.now()+a.I,$h(a,a.I)}function $h(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xs(g(a.ba,a),h)}function Sl(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(hv(this.i,this.A),this.L!=2&&(Ys(),It(17)),kr(this),this.s=2,Zs(this)):$h(this,this.S-a)};function Zs(a){a.j.G==0||a.J||gd(a.j,a)}function kr(a){Sl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,zs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Cl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Pl(f.h,a))){if(!a.K&&Pl(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var N=m;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)So(f),Ro(f);else break e;Dl(f),It(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Xs(g(f.Za,f),6e3));if(1>=Wh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&So(f),!M(h))for(N=f.Da.g.parse(h),h=0;h<N.length;h++){let be=N[h];if(f.T=be[0],be=be[1],f.G==2)if(be[0]=="c"){f.K=be[1],f.ia=be[2];const ft=be[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const pt=be[4];pt!=null&&(f.Aa=pt,f.j.info("SVER="+f.Aa));const as=be[5];as!=null&&typeof as=="number"&&0<as&&(m=1.5*as,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Xt=a.g;if(Xt){const Po=Xt.g?Xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var D=m.h;D.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(kl(D,D.h),D.h=null))}if(m.D){const xl=Xt.g?Xt.g.getResponseHeader("X-HTTP-Session-Id"):null;xl&&(m.ya=xl,Ue(m.I,m.D,xl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var Q=a;if(m.qa=yd(m,m.J?m.ia:null,m.W),Q.K){Gh(m.h,Q);var Ve=Q,ot=m.L;ot&&(Ve.I=ot),Ve.B&&(Sl(Ve),yo(Ve)),m.g=Q}else fd(m);0<f.i.length&&bo(f)}else be[0]!="stop"&&be[0]!="close"||Or(f,7);else f.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Or(f,7):Ol(f):be[0]!="noop"&&f.l&&f.l.ta(be),f.v=0)}}Ys(4)}catch{}}var pv=class{constructor(a,h){this.g=a,this.map=h}};function Hh(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wh(a){return a.h?1:a.g?a.g.size:0}function Pl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function kl(a,h){a.g?a.g.add(h):a.h=h}function Gh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Hh.prototype.cancel=function(){if(this.i=zh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function zh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return S(a.i)}function gv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,m=0;m<f;m++)h.push(a[m]);return h}h=[],f=0;for(m in a)h[f++]=a[m];return h}function mv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const m in a)h[f++]=m;return h}}}function Qh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=mv(a),m=gv(a),N=m.length,D=0;D<N;D++)h.call(void 0,m[D],f&&f[D],a)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _v(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),N=null;if(0<=m){var D=a[f].substring(0,m);N=a[f].substring(m+1)}else D=a[f];h(D,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Nr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Nr){this.h=a.h,vo(this,a.j),this.o=a.o,this.g=a.g,Eo(this,a.s),this.l=a.l;var h=a.i,f=new ni;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Xh(this,f),this.m=a.m}else a&&(h=String(a).match(Yh))?(this.h=!1,vo(this,h[1]||"",!0),this.o=ei(h[2]||""),this.g=ei(h[3]||"",!0),Eo(this,h[4]),this.l=ei(h[5]||"",!0),Xh(this,h[6]||"",!0),this.m=ei(h[7]||"")):(this.h=!1,this.i=new ni(null,this.h))}Nr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ti(h,Jh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ti(h,Jh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ti(f,f.charAt(0)=="/"?Ev:vv,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ti(f,wv)),a.join("")};function Tn(a){return new Nr(a)}function vo(a,h,f){a.j=f?ei(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Eo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Xh(a,h,f){h instanceof ni?(a.i=h,Tv(a.i,a.h)):(f||(h=ti(h,Av)),a.i=new ni(h,a.h))}function Ue(a,h,f){a.i.set(h,f)}function Ao(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ei(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ti(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,yv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jh=/[#\/\?@]/g,vv=/[#\?:]/g,Ev=/[#\?]/g,Av=/[#\?@]/g,wv=/#/g;function ni(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&_v(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=ni.prototype,t.add=function(a,h){Xn(this),this.i=null,a=is(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Zh(a,h){Xn(a),h=is(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ed(a,h){return Xn(a),h=is(a,h),a.g.has(h)}t.forEach=function(a,h){Xn(this),this.g.forEach(function(f,m){f.forEach(function(N){a.call(h,N,m,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){const N=a[m];for(let D=0;D<N.length;D++)f.push(h[m])}return f},t.V=function(a){Xn(this);let h=[];if(typeof a=="string")ed(this,a)&&(h=h.concat(this.g.get(is(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Xn(this),this.i=null,a=is(this,a),ed(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function td(a,h,f){Zh(a,h),0<f.length&&(a.i=null,a.g.set(is(a,h),S(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];const D=encodeURIComponent(String(m)),Q=this.V(m);for(m=0;m<Q.length;m++){var N=D;Q[m]!==""&&(N+="="+encodeURIComponent(String(Q[m]))),a.push(N)}}return this.i=a.join("&")};function is(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Tv(a,h){h&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(f,m){var N=m.toLowerCase();m!=N&&(Zh(this,m),td(this,N,f))},a)),a.j=h}function Iv(a,h){const f=new Js;if(l.Image){const m=new Image;m.onload=_(Jn,f,"TestLoadImage: loaded",!0,h,m),m.onerror=_(Jn,f,"TestLoadImage: error",!1,h,m),m.onabort=_(Jn,f,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(Jn,f,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Rv(a,h){const f=new Js,m=new AbortController,N=setTimeout(()=>{m.abort(),Jn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(N),D.ok?Jn(f,"TestPingServer: ok",!0,h):Jn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Jn(f,"TestPingServer: error",!1,h)})}function Jn(a,h,f,m,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),m(f)}catch{}}function bv(){this.g=new po}function Sv(a,h,f){const m=f||"";try{Qh(a,function(N,D){let Q=N;u(N)&&(Q=it(N)),h.push(m+D+"="+encodeURIComponent(Q))})}catch(N){throw h.push(m+"type="+encodeURIComponent("_badmap")),N}}function wo(a){this.l=a.Ub||null,this.j=a.eb||!1}T(wo,Al),wo.prototype.g=function(){return new To(this.l,this.j)},wo.prototype.i=function(a){return function(){return a}}({});function To(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(To,ae),t=To.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ri(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,si(this)),this.g&&(this.readyState=3,si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function nd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ri(this):si(this),this.readyState==3&&nd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ri(this))},t.Qa=function(a){this.g&&(this.response=a,ri(this))},t.ga=function(){this.g&&ri(this)};function ri(a){a.readyState=4,a.l=null,a.j=null,a.v=null,si(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function rd(a){let h="";return H(a,function(f,m){h+=m,h+=":",h+=f,h+=`\r
`}),h}function Nl(a,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=rd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,h,f))}function Ke(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ke,ae);var Cv=/^https?$/i,Pv=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Il.g(),this.v=this.o?Oh(this.o):Oh(Il),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){sd(this,D);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var N in m)f.set(N,m[N]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())f.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Pv,h,void 0))||m||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,Q]of f)this.g.setRequestHeader(D,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ad(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){sd(this,D)}};function sd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,id(a),Io(a)}function id(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Io(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Io(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?od(this):this.bb())},t.bb=function(){od(this)};function od(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)ht(a.Ea,0,a);else if(ge(a,"readystatechange"),In(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var m;if(m=Q===0){var N=String(a.D).match(Yh)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),m=!Cv.test(N?N.toLowerCase():"")}f=m}if(f)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var D=2<In(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",id(a)}}finally{Io(a)}}}}function Io(a,h){if(a.g){ad(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{f.onreadystatechange=m}catch{}}}function ad(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Ht(h)}};function ld(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kv(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(M(a[m]))continue;var f=R(a[m]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[N]||[];h[N]=D,D.push(f)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function cd(a){this.Aa=0,this.i=[],this.j=new Js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ii("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ii("baseRetryDelayMs",5e3,a),this.cb=ii("retryDelaySeedMs",1e4,a),this.Wa=ii("forwardChannelMaxRetries",2,a),this.wa=ii("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hh(a&&a.concurrentRequestLimit),this.Da=new bv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=cd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,m){It(0),this.W=a,this.H=h||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=yd(this,null,this.W),bo(this)};function Ol(a){if(ud(a),a.G==3){var h=a.U++,f=Tn(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",h),Ue(f,"TYPE","terminate"),oi(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=Ao(Tn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=vd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),yo(h)}_d(a)}function Ro(a){a.g&&(Vl(a),a.g.cancel(),a.g=null)}function ud(a){Ro(a),a.u&&(l.clearTimeout(a.u),a.u=null),So(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function bo(a){if(!Kh(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||Yt(),ve||(we(),ve=!0),Dt.add(h,a),a.B=0}}function Nv(a,h){return Wh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xs(g(a.Ga,a,h),md(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Yn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),b(D,this.S)):D=this.S),this.m!==null||this.O||(N.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=dd(this,N,h),f=Tn(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),oi(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(rd(D)))+"&"+h:this.m&&Nl(f,this.m,D)),kl(this.h,N),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",h),Ue(f,"SID","null"),N.T=!0,bl(N,f,null)):bl(N,f,h),this.G=2}}else this.G==3&&(a?hd(this,a):this.i.length==0||Kh(this.h)||hd(this))};function hd(a,h){var f;h?f=h.l:f=a.U++;const m=Tn(a.I);Ue(m,"SID",a.K),Ue(m,"RID",f),Ue(m,"AID",a.T),oi(a,m),a.m&&a.o&&Nl(m,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=dd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),kl(a.h,f),bl(f,m,h)}function oi(a,h){a.H&&H(a.H,function(f,m){Ue(h,m,f)}),a.l&&Qh({},function(f,m){Ue(h,m,f)})}function dd(a,h,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let D=-1;for(;;){const Q=["count="+f];D==-1?0<f?(D=N[0].g,Q.push("ofs="+D)):D=0:Q.push("ofs="+D);let Ve=!0;for(let ot=0;ot<f;ot++){let be=N[ot].g;const ft=N[ot].map;if(be-=D,0>be)D=Math.max(0,N[ot].g-100),Ve=!1;else try{Sv(ft,Q,"req"+be+"_")}catch{m&&m(ft)}}if(Ve){m=Q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,m}function fd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||Yt(),ve||(we(),ve=!0),Dt.add(h,a),a.v=0}}function Dl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xs(g(a.Fa,a),md(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,pd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ro(this),pd(this))};function Vl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function pd(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Tn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),oi(a,h),a.m&&a.o&&Nl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ao(Tn(h)),f.m=null,f.P=!0,jh(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),Dl(this),It(19))};function So(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function gd(a,h){var f=null;if(a.g==h){So(a),Vl(a),a.g=null;var m=2}else if(Pl(a.h,h))f=h.D,Gh(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;m=go(),ge(m,new Lh(m,f)),bo(a)}else fd(a);else if(N=h.s,N==3||N==0&&0<h.X||!(m==1&&Nv(a,h)||m==2&&Dl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),N){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function md(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),m=a.Xa;const N=!m;m=new Nr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vo(m,"https"),Ao(m),N?Iv(m.toString(),f):Rv(m.toString(),f)}else It(2);a.G=0,a.l&&a.l.sa(h),_d(a),ud(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function _d(a){if(a.G=0,a.ka=[],a.l){const h=zh(a.h);(h.length!=0||a.i.length!=0)&&(P(a.ka,h),P(a.ka,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.ra()}}function yd(a,h,f){var m=f instanceof Nr?Tn(f):new Nr(f);if(m.g!="")h&&(m.g=h+"."+m.g),Eo(m,m.s);else{var N=l.location;m=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var D=new Nr(null);m&&vo(D,m),h&&(D.g=h),N&&Eo(D,N),f&&(D.l=f),m=D}return f=a.D,h=a.ya,f&&h&&Ue(m,f,h),Ue(m,"VER",a.la),oi(a,m),m}function vd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new wo({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ed(){}t=Ed.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Co(){}Co.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){ae.call(this),this.g=new cd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new os(this)}T(Vt,ae),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Ol(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=it(a),a=f);h.i.push(new pv(h.Ya++,a)),h.G==3&&bo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Ol(this.g),delete this.g,Vt.aa.N.call(this)};function Ad(a){wl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}T(Ad,wl);function wd(){Tl.call(this),this.status=1}T(wd,Tl);function os(a){this.g=a}T(os,Ed),os.prototype.ua=function(){ge(this.g,"a")},os.prototype.ta=function(a){ge(this.g,new Ad(a))},os.prototype.sa=function(a){ge(this.g,new wd)},os.prototype.ra=function(){ge(this.g,"b")},Co.prototype.createWebChannel=Co.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,E_=function(){return new Co},v_=function(){return go()},y_=Pr,xc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mo.NO_ERROR=0,mo.TIMEOUT=8,mo.HTTP_ERROR=6,na=mo,Uh.COMPLETE="complete",__=Uh,Dh.EventType=Qs,Qs.OPEN="a",Qs.CLOSE="b",Qs.ERROR="c",Qs.MESSAGE="d",ae.prototype.listen=ae.prototype.K,gi=Dh,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,m_=Ke}).apply(typeof Uo<"u"?Uo:typeof self<"u"?self:typeof window<"u"?window:{});const Xf="@firebase/firestore",Jf="4.7.17";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */const zr=new Ru("@firebase/firestore");function ds(){return zr.logLevel}function te(t,...e){if(zr.logLevel<=Ee.DEBUG){const n=e.map(Fu);zr.debug(`Firestore (${Bs}): ${t}`,...n)}}function qn(t,...e){if(zr.logLevel<=Ee.ERROR){const n=e.map(Fu);zr.error(`Firestore (${Bs}): ${t}`,...n)}}function Ns(t,...e){if(zr.logLevel<=Ee.WARN){const n=e.map(Fu);zr.warn(`Firestore (${Bs}): ${t}`,...n)}}function Fu(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,A_(t,r,n)}function A_(t,e,n){let r=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw qn(r),new Error(r)}function De(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||A_(e,s,r)}function fe(t,e){return t}/**
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
 */class w_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class h0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class d0{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){De(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new fr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string",31837,{l:r}),new w_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string",2055,{h:e}),new mt(e)}}class f0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class p0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new f0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){De(this.o===void 0,3512);const r=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Zf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Zf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function T_(){return new TextEncoder}/**
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
 */class I_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=m0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ye(t,e){return t<e?-1:t>e?1:0}function Mc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ye(r,s);{const i=T_(),o=_0(i.encode(ep(t,n)),i.encode(ep(e,n)));return o!==0?o:ye(r,s)}}n+=r>65535?2:1}return ye(t.length,e.length)}function ep(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function _0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const tp=-62135596800,np=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*np);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<tp)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/np}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-tp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new tt(0,0))}static max(){return new de(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rp="__name__";class un{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ue(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const r=un.isNumericId(e),s=un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?un.extractNumericId(e).compare(un.extractNumericId(n)):Mc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Fe extends un{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const y0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends un{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return y0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rp}static keyField(){return new ct([rp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
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
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Fe.fromString(e))}static fromName(e){return new oe(Fe.fromString(e).popFirst(5))}static empty(){return new oe(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Fe(e.slice()))}}/**
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
 */const Hi=-1;function v0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new vr(s,oe.empty(),e)}function E0(t){return new vr(t.readTime,t.key,Hi)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(de.min(),oe.empty(),Hi)}static max(){return new vr(de.max(),oe.empty(),Hi)}}function A0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const w0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function js(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==w0)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(s=>s?q.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new q((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new q((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function I0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const Bu=-1;function sl(t){return t==null}function Ca(t){return t===0&&1/t==-1/0}function R0(t){return typeof t=="number"&&Number.isInteger(t)&&!Ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const R_="";function b0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sp(e)),e=S0(t.get(n),e);return sp(e)}function S0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case R_:n+="";break;default:n+=i}}return n}function sp(t){return t+R_+""}/**
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
 */function ip(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function br(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fo(this.root,e,this.comparator,!0)}}class Fo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new op(this.data.getIterator())}getIteratorFrom(e){return new op(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class op{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new nt(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class S_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new S_("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const C0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(De(!!t,39018),typeof t=="string"){let e=0;const n=C0.exec(t);if(De(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ar(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
 */const C_="server_timestamp",P_="__type__",k_="__previous_value__",N_="__local_write_time__";function ju(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[P_])===null||n===void 0?void 0:n.stringValue)===C_}function il(t){const e=t.mapValue.fields[k_];return ju(e)?il(e):e}function Ki(t){const e=Er(t.mapValue.fields[N_].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class P0{constructor(e,n,r,s,i,o,l,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=d}}const Pa="(default)";class Wi{constructor(e,n){this.projectId=e,this.database=n||Pa}static empty(){return new Wi("","")}get isDefaultDatabase(){return this.database===Pa}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const O_="__type__",k0="__max__",Bo={mapValue:{}},D_="__vector__",ka="value";function wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ju(t)?4:O0(t)?9007199254740991:N0(t)?10:11:ue(28295,{value:t})}function An(t,e){if(t===e)return!0;const n=wr(t);if(n!==wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ki(t).isEqual(Ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),l=Er(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ar(s.bytesValue).isEqual(Ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),l=Qe(i.doubleValue);return o===l?Ca(o)===Ca(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Os(t.arrayValue.values||[],e.arrayValue.values||[],An);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ip(o)!==ip(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!An(o[c],l[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function Gi(t,e){return(t.values||[]).find(n=>An(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=wr(t),r=wr(e);if(n!==r)return ye(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Qe(i.integerValue||i.doubleValue),c=Qe(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return ap(t.timestampValue,e.timestampValue);case 4:return ap(Ki(t),Ki(e));case 5:return Mc(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ar(i),c=Ar(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=ye(l[u],c[u]);if(d!==0)return d}return ye(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ye(Qe(i.latitude),Qe(o.latitude));return l!==0?l:ye(Qe(i.longitude),Qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lp(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},g=o.fields||{},_=(l=p[ka])===null||l===void 0?void 0:l.arrayValue,T=(c=g[ka])===null||c===void 0?void 0:c.arrayValue,S=ye(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return S!==0?S:lp(_,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Bo.mapValue&&o===Bo.mapValue)return 0;if(i===Bo.mapValue)return 1;if(o===Bo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Mc(c[p],d[p]);if(g!==0)return g;const _=Ds(l[c[p]],u[d[p]]);if(_!==0)return _}return ye(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function ap(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Er(t),r=Er(e),s=ye(n.seconds,r.seconds);return s!==0?s:ye(n.nanos,r.nanos)}function lp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ds(n[s],r[s]);if(i)return i}return ye(n.length,r.length)}function Vs(t){return Lc(t)}function Lc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Lc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Lc(n.fields[o])}`;return s+"}"}(t.mapValue):ue(61005,{value:t})}function ra(t){switch(wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=il(t);return e?16+ra(e):16;case 5:return 2*t.stringValue.length;case 6:return Ar(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+ra(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return br(r.fields,(i,o)=>{s+=i.length+ra(o)}),s}(t.mapValue);default:throw ue(13486,{value:t})}}function cp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function qu(t){return!!t&&"arrayValue"in t}function up(t){return!!t&&"nullValue"in t}function hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function N0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[O_])===null||n===void 0?void 0:n.stringValue)===D_}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return br(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function O0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===k0}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ci(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return An(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){br(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(Ci(this.value))}}function V_(t){const e=[];return br(t.fields,(n,r)=>{const s=new ct([n]);if(sa(r)){const i=V_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ut(e)}/**
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
 */class yt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new yt(e,0,de.min(),de.min(),de.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,de.min(),de.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,de.min(),de.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function dp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!An(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class zi{constructor(e,n="asc"){this.field=e,this.dir=n}}function D0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class x_{}class Je extends x_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x0(e,n,r):n==="array-contains"?new U0(e,r):n==="in"?new F0(e,r):n==="not-in"?new B0(e,r):n==="array-contains-any"?new j0(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new M0(e,r):new L0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ds(n,this.value)):n!==null&&wr(this.value)===wr(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends x_{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new sn(e,n)}matches(e){return M_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function M_(t){return t.op==="and"}function L_(t){return V0(t)&&M_(t)}function V0(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function Fc(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(L_(t))return t.filters.map(e=>Fc(e)).join(",");{const e=t.filters.map(n=>Fc(n)).join(",");return`${t.op}(${e})`}}function U_(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&An(r.value,s.value)}(t,e):t instanceof sn?function(r,s){return s instanceof sn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&U_(o,s.filters[l]),!0):!1}(t,e):void ue(19439)}function F_(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Vs(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(F_).join(" ,")+"}"}(t):"Filter"}class x0 extends Je{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class M0 extends Je{constructor(e,n){super(e,"in",n),this.keys=B_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class L0 extends Je{constructor(e,n){super(e,"not-in",n),this.keys=B_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function B_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class U0 extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qu(n)&&Gi(n.arrayValue,this.value)}}class F0 extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gi(this.value.arrayValue,n)}}class B0 extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Gi(this.value.arrayValue,n)}}class j0 extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gi(this.value.arrayValue,r))}}/**
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
 */class q0{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function pp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new q0(t,e,n,r,s,i,o)}function $u(t){const e=fe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Fc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vs(r)).join(",")),e.Ie=n}return e.Ie}function Hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!D0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fp(t.startAt,e.startAt)&&fp(t.endAt,e.endAt)}function Bc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class $s{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function $0(t,e,n,r,s,i,o,l){return new $s(t,e,n,r,s,i,o,l)}function j_(t){return new $s(t)}function gp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function q_(t){return t.collectionGroup!==null}function Pi(t){const e=fe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new nt(ct.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new zi(i,r))}),n.has(ct.keyField().canonicalString())||e.Ee.push(new zi(ct.keyField(),r))}return e.Ee}function _n(t){const e=fe(t);return e.de||(e.de=H0(e,Pi(t))),e.de}function H0(t,e){if(t.limitType==="F")return pp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new zi(s.field,i)});const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return pp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jc(t,e){const n=t.filters.concat([e]);return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Oa(t,e,n){return new $s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ol(t,e){return Hu(_n(t),_n(e))&&t.limitType===e.limitType}function $_(t){return`${$u(_n(t))}|lt:${t.limitType}`}function fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>F_(s)).join(", ")}]`),sl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Vs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Vs(s)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function al(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Pi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,Pi(r),s)||r.endAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,Pi(r),s))}(t,e)}function K0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H_(t){return(e,n)=>{let r=!1;for(const s of Pi(t)){const i=W0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function W0(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Ds(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue(19790,{direction:t.dir})}}/**
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
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){br(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return b_(this.inner)}size(){return this.innerSize}}/**
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
 */const G0=new He(oe.comparator);function $n(){return G0}const K_=new He(oe.comparator);function mi(...t){let e=K_;for(const n of t)e=e.insert(n.key,n);return e}function W_(t){let e=K_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return ki()}function G_(){return ki()}function ki(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const z0=new He(oe.comparator),Q0=new nt(oe.comparator);function Ae(...t){let e=Q0;for(const n of t)e=e.add(n);return e}const Y0=new nt(ye);function X0(){return Y0}/**
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
 */function Ku(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ca(e)?"-0":e}}function z_(t){return{integerValue:""+t}}function J0(t,e){return R0(e)?z_(e):Ku(t,e)}/**
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
 */class ll{constructor(){this._=void 0}}function Z0(t,e,n){return t instanceof Qi?function(s,i){const o={fields:{[P_]:{stringValue:C_},[N_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ju(i)&&(i=il(i)),i&&(o.fields[k_]=i),{mapValue:o}}(n,e):t instanceof Yi?Y_(t,e):t instanceof Xi?X_(t,e):function(s,i){const o=Q_(s,i),l=mp(o)+mp(s.Re);return Uc(o)&&Uc(s.Re)?z_(l):Ku(s.serializer,l)}(t,e)}function eS(t,e,n){return t instanceof Yi?Y_(t,e):t instanceof Xi?X_(t,e):n}function Q_(t,e){return t instanceof Da?function(r){return Uc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qi extends ll{}class Yi extends ll{constructor(e){super(),this.elements=e}}function Y_(t,e){const n=J_(e);for(const r of t.elements)n.some(s=>An(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xi extends ll{constructor(e){super(),this.elements=e}}function X_(t,e){let n=J_(e);for(const r of t.elements)n=n.filter(s=>!An(s,r));return{arrayValue:{values:n}}}class Da extends ll{constructor(e,n){super(),this.serializer=e,this.Re=n}}function mp(t){return Qe(t.integerValue||t.doubleValue)}function J_(t){return qu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class tS{constructor(e,n){this.field=e,this.transform=n}}function nS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Yi&&s instanceof Yi||r instanceof Xi&&s instanceof Xi?Os(r.elements,s.elements,An):r instanceof Da&&s instanceof Da?An(r.Re,s.Re):r instanceof Qi&&s instanceof Qi}(t.transform,e.transform)}class rS{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ia(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cl{}function Z_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wu(t.key,nn.none()):new ao(t.key,t.data,nn.none());{const n=t.data,r=Ot.empty();let s=new nt(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Sr(t.key,r,new Ut(s.toArray()),nn.none())}}function sS(t,e,n){t instanceof ao?function(s,i,o){const l=s.value.clone(),c=yp(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Sr?function(s,i,o){if(!ia(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=yp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ey(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ni(t,e,n,r){return t instanceof ao?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=i.value.clone(),d=vp(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Sr?function(i,o,l,c){if(!ia(i.precondition,o))return l;const u=vp(i.fieldTransforms,c,o),d=o.data;return d.setAll(ey(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return ia(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Q_(r.transform,s||null);i!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,i))}return n||null}function _p(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Os(r,s,(i,o)=>nS(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ao extends cl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Sr extends cl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ey(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yp(t,e,n){const r=new Map;De(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,eS(o,l,n[s]))}return r}function vp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Z0(i,o,e))}return r}class Wu extends cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oS extends cl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=G_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Z_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&Os(this.mutations,e.mutations,(n,r)=>_p(n,r))&&Os(this.baseMutations,e.baseMutations,(n,r)=>_p(n,r))}}class Gu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return z0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gu(e,n,r,s)}}/**
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
 */var Xe,Ie;function uS(t){switch(t){case j.OK:return ue(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function ty(t){if(t===void 0)return qn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Xe.OK:return j.OK;case Xe.CANCELLED:return j.CANCELLED;case Xe.UNKNOWN:return j.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return j.INTERNAL;case Xe.UNAVAILABLE:return j.UNAVAILABLE;case Xe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Xe.NOT_FOUND:return j.NOT_FOUND;case Xe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Xe.ABORTED:return j.ABORTED;case Xe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Xe.DATA_LOSS:return j.DATA_LOSS;default:return ue(39323,{code:t})}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const hS=new dr([4294967295,4294967295],0);function Ep(t){const e=T_().encode(t),n=new g_;return n.update(e),new Uint8Array(n.digest())}function Ap(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new dr([n,r],0),new dr([s,i],0)]}class zu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _i(`Invalid padding: ${n}`);if(r<0)throw new _i(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _i(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _i(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=dr.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(dr.fromNumber(r)));return s.compare(hS)===1&&(s=new dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Ep(e),[r,s]=Ap(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zu(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Ep(e),[r,s]=Ap(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ul{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ul(de.min(),s,new He(ye),$n(),Ae())}}class lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lo(r,n,Ae(),Ae(),Ae())}}/**
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
 */class oa{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class ny{constructor(e,n){this.targetId=e,this.Ce=n}}class ry{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wp{constructor(){this.Fe=0,this.Me=Tp(),this.xe=ut.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ae(),n=Ae(),r=Ae();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue(38017,{changeType:i})}}),new lo(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Tp()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,De(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class dS{constructor(e){this.ze=e,this.je=new Map,this.He=$n(),this.Je=jo(),this.Ye=jo(),this.Ze=new He(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Bc(i))if(r===0){const o=new oe(i.path);this.tt(n,o,yt.newNoDocument(o,de.min()))}else De(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),c=l?this.lt(l,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ar(r).toUint8Array()}catch(c){if(c instanceof S_)return Ns("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zu(o,s,i)}catch(c){return Ns(c instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Bc(l.target)){const c=new oe(l.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,yt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=Ae();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new ul(e,n,this.Ze,this.He,r);return this.He=$n(),this.Je=jo(),this.Ye=jo(),this.Ze=new He(ye),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new wp,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new nt(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new nt(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new wp),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function jo(){return new He(oe.comparator)}function Tp(){return new He(oe.comparator)}const fS={asc:"ASCENDING",desc:"DESCENDING"},pS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gS={and:"AND",or:"OR"};class mS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qc(t,e){return t.useProto3Json||sl(e)?e:{value:e}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _S(t,e){return Va(t,e.toTimestamp())}function yn(t){return De(!!t,49232),de.fromTimestamp(function(n){const r=Er(n);return new tt(r.seconds,r.nanos)}(t))}function Qu(t,e){return $c(t,e).canonicalString()}function $c(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iy(t){const e=Fe.fromString(t);return De(uy(e),10190,{key:e.toString()}),e}function Hc(t,e){return Qu(t.databaseId,e.path)}function sc(t,e){const n=iy(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(ay(n))}function oy(t,e){return Qu(t.databaseId,e)}function yS(t){const e=iy(t);return e.length===4?Fe.emptyPath():ay(e)}function Kc(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ay(t){return De(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ip(t,e,n){return{name:Hc(t,e),fields:n.value.mapValue.fields}}function vS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(De(d===void 0||typeof d=="string",58123),ut.fromBase64String(d||"")):(De(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?j.UNKNOWN:ty(u.code);return new ne(d,u.message||"")}(o);n=new ry(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sc(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):de.min(),l=new Ot({mapValue:{fields:r.document.fields}}),c=yt.newFoundDocument(s,i,o,l),u=r.targetIds||[],d=r.removedTargetIds||[];n=new oa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sc(t,r.document),i=r.readTime?yn(r.readTime):de.min(),o=yt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sc(t,r.document),i=r.removedTargetIds||[];n=new oa([],i,s,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new cS(s,i),l=r.targetId;n=new ny(l,o)}}return n}function ES(t,e){let n;if(e instanceof ao)n={update:Ip(t,e.key,e.value)};else if(e instanceof Wu)n={delete:Hc(t,e.key)};else if(e instanceof Sr)n={update:Ip(t,e.key,e.data),updateMask:PS(e.fieldMask)};else{if(!(e instanceof oS))return ue(16599,{ft:e.type});n={verify:Hc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Qi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Da)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ue(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_S(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function AS(t,e){return t&&t.length>0?(De(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(de.min())&&(o=yn(i)),new rS(o,s.transformResults||[])}(n,e))):[]}function wS(t,e){return{documents:[oy(t,e.path)]}}function TS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=oy(t,s);const i=function(u){if(u.length!==0)return cy(sn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:ps(g.field),direction:bS(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=qc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:s}}function IS(t){let e=yS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=ly(p);return g instanceof sn&&L_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(T){return new zi(gs(T.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,sl(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Na(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Na(_,g)}(n.endAt)),$0(e,s,o,i,l,"F",c,u)}function RS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ly(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=gs(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=gs(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=gs(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gs(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>ly(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function bS(t){return fS[t]}function SS(t){return pS[t]}function CS(t){return gS[t]}function ps(t){return{fieldPath:t.canonicalString()}}function gs(t){return ct.fromServerFormat(t.fieldPath)}function cy(t){return t instanceof Je?function(n){if(n.op==="=="){if(hp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NAN"}};if(up(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hp(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NAN"}};if(up(n.value))return{unaryFilter:{field:ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ps(n.field),op:SS(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(s=>cy(s));return r.length===1?r[0]:{compositeFilter:{op:CS(n.op),filters:r}}}(t):ue(54877,{filter:t})}function PS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,s,i=de.min(),o=de.min(),l=ut.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kS{constructor(e){this.wt=e}}function NS(t){const e=IS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oa(e,e.limit,"L"):e}/**
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
 */class OS{constructor(){this.Cn=new DS}addToCollectionParentIndex(e,n){return this.Cn.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(vr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class DS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Fe.comparator)).toArray()}}/**
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
 */const Rp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hy=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(hy,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
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
 */class xs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new xs(0)}static lr(){return new xs(-1)}}/**
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
 */const bp="LruGarbageCollector",VS=1048576;function Sp([t,e],[n,r]){const s=ye(t,n);return s===0?ye(e,r):s}class xS{constructor(e){this.Er=e,this.buffer=new nt(Sp),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class MS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){te(bp,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qs(n)?te(bp,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.mr(3e5)})}}class LS{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return q.resolve(rl.le);const r=new xS(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Rp)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rp):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,o,l,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ds()<=Ee.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function US(t,e){return new LS(t,e)}/**
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
 */class FS{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ni(r.mutation,s,Ut.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=mi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=$n();const o=ki(),l=function(){return ki()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Sr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Ni(d.mutation,u,d.mutation.getFieldMask(),tt.now())):o.set(u.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new BS(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ki();let s=new He((o,l)=>o-l),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||Ut.empty();d=l.applyToLocalView(u,d),r.set(c,d);const p=(s.get(l.batchId)||Ae()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=G_();d.forEach(g=>{if(!i.has(g)){const _=Z_(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):q_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):q.resolve(Ur());let l=Hi,c=i;return o.next(u=>q.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ae())).next(d=>({batchId:l,changes:W_(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=mi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=mi();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(p,g){return new $s(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let l=mi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&Ni(d.mutation,u,Ut.empty(),tt.now()),al(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class qS{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return q.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:NS(s.bundledQuery),readTime:yn(s.readTime)}}(n)),q.resolve()}}/**
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
 */class $S{constructor(){this.overlays=new He(oe.comparator),this.Qr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return q.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const s=Ur(),i=n.length+1,o=new oe(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return q.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Ur(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=Ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=s)););return q.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lS(n,r));let i=this.Qr.get(n);i===void 0&&(i=Ae(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class HS{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
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
 */class Yu{constructor(){this.$r=new nt(rt.Ur),this.Kr=new nt(rt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new rt(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new rt(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new oe(new Fe([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new oe(new Fe([])),r=new rt(n,e),s=new rt(n,e+1);let i=Ae();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return oe.comparator(e.key,n.key)||ye(e.Zr,n.Zr)}static Wr(e,n){return ye(e.Zr,n.Zr)||oe.comparator(e.key,n.key)}}/**
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
 */class KS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new nt(rt.Ur)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aS(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Xr=this.Xr.add(new rt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Bu:this.nr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],o=>{const l=this.ei(o.Zr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ye);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],l=>{r=r.add(l.Zr)})}),q.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new rt(new oe(i),0);let l=new nt(ye);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},o),q.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return q.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new rt(n,0),s=this.Xr.firstAfterOrEqual(r);return q.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class WS{constructor(e){this.ii=e,this.docs=function(){return new He(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=$n();const o=n.path,l=new oe(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||A0(E0(d),r)<=0||(s.has(d.key)||al(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue(9500)}si(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new GS(this)}getSize(e){return q.resolve(this.size)}}class GS extends FS{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class zS{constructor(e){this.persistence=e,this.oi=new ts(n=>$u(n),Hu),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this._i=0,this.ai=new Yu,this.targetCount=0,this.ui=xs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),q.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new xs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Tr(n),q.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),q.waitFor(i).next(()=>s)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.ai.containsKey(n))}}/**
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
 */class dy{constructor(e,n){this.ci={},this.overlays={},this.li=new rl(0),this.hi=!1,this.hi=!0,this.Pi=new HS,this.referenceDelegate=e(this),this.Ti=new zS(this),this.indexManager=new OS,this.remoteDocumentCache=function(s){return new WS(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new kS(n),this.Ei=new qS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $S,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new KS(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){te("MemoryPersistence","Starting transaction:",e);const s=new QS(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return q.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class QS extends T0{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.Vi=new Yu,this.mi=null}static fi(e){return new Xu(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),q.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.gi,r=>{const s=oe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return q.or([()=>q.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class xa{constructor(e,n){this.persistence=e,this.yi=new ts(r=>b0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=US(this,n)}static fi(e,n){return new xa(e,n)}di(){}Ai(e){return q.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return q.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?q.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,de.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),q.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),q.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ra(e.data.value)),n}Dr(e,n,r){return q.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return q.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ju{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ju(e,n.fromCache,r,s)}}/**
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
 */class XS{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return bT()?8:I0(wt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new YS;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(ds()<=Ee.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),q.resolve()):(ds()<=Ee.DEBUG&&te("QueryEngine","Query:",fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(ds()<=Ee.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):q.resolve())}ws(e,n){if(gp(n))return q.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Oa(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,o,c.readTime)?this.ws(e,Oa(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,r,s){return gp(n)||s.isEqual(de.min())?q.resolve(null):this.ys.getDocuments(e,r).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,r,s)?q.resolve(null):(ds()<=Ee.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fs(n)),this.Fs(e,o,n,v0(s,Hi)).next(l=>l))})}vs(e,n){let r=new nt(H_(e));return n.forEach((s,i)=>{al(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return ds()<=Ee.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",fs(n)),this.ys.getDocumentsMatchingQuery(e,n,vr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Zu="LocalStore",JS=3e8;class ZS{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new He(ye),this.Os=new ts(i=>$u(i),Hu),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jS(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function eC(t,e,n,r){return new ZS(t,e,n,r)}async function fy(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ae();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:l}))})})}function tC(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,g=p.keys();let _=q.resolve();return g.forEach(T=>{_=_.next(()=>d.getEntry(c,T)).next(S=>{const P=u.docVersions.get(T);De(P!==null,48541),S.version.compareTo(P)<0&&(p.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),d.addEntry(S)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function py(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function nC(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.xs;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ti.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ti.addMatchingKeys(i,d.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(S,P,x){return S.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=JS?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,_,d)&&l.push(n.Ti.updateTargetData(i,_))});let c=$n(),u=Ae();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(rC(i,o,e.documentUpdates).next(d=>{c=d.qs,u=d.Qs})),!r.isEqual(de.min())){const d=n.Ti.getLastRemoteSnapshotVersion(i).next(p=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=s,i))}function rC(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=$n();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(de.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):te(Zu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:s}})}function sC(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iC(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ti.getTargetData(r,e).next(i=>i?(s=i,q.resolve(s)):n.Ti.allocateTargetId(r).next(o=>(s=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Wc(t,e,n){const r=fe(t),s=r.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!qs(o))throw o;te(Zu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Cp(t,e,n){const r=fe(t);let s=de.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=fe(c),g=p.Os.get(d);return g!==void 0?q.resolve(p.xs.get(g)):p.Ti.getTargetData(u,d)}(r,o,_n(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ae())).next(l=>(oC(r,K0(e),l),{documents:l,$s:i})))}function oC(t,e,n){let r=t.Ns.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ns.set(e,r)}class Pp{constructor(){this.activeTargetIds=X0()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aC{constructor(){this.xo=new Pp,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Pp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lC{No(e){}shutdown(){}}/**
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
 */const kp="ConnectivityMonitor";class Np{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){te(kp,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){te(kp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let qo=null;function Gc(){return qo===null?qo=function(){return 268435456+Math.round(2147483648*Math.random())}():qo++,"0x"+qo.toString(16)}/**
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
 */const ic="RestConnection",cC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class uC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Pa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const o=Gc(),l=this.jo(e,n.toUriEncodedString());te(ic,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),d=Rr(u);return this.Jo(e,l,c,r,d).then(p=>(te(ic,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ns(ic,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,o){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=cC[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class hC{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const gt="WebChannelConnection";class dC extends uC{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Gc();return new Promise((l,c)=>{const u=new m_;u.setWithCredentials(!0),u.listenOnce(__.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case na.NO_ERROR:const p=u.getResponseJson();te(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case na.TIMEOUT:te(gt,`RPC '${e}' ${o} timed out`),c(new ne(j.DEADLINE_EXCEEDED,"Request time out"));break;case na.HTTP_ERROR:const g=u.getStatus();if(te(gt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const S=function(x){const M=x.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(M)>=0?M:j.UNKNOWN}(T.status);c(new ne(S,T.message))}else c(new ne(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ne(j.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{te(gt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);te(gt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}I_(e,n,r){const s=Gc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E_(),l=v_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");te(gt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.E_(p);let g=!1,_=!1;const T=new hC({Zo:P=>{_?te(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(te(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),te(gt,`RPC '${e}' stream ${s} sending:`,P),p.send(P))},Xo:()=>p.close()}),S=(P,x,M)=>{P.listen(x,L=>{try{M(L)}catch(O){setTimeout(()=>{throw O},0)}})};return S(p,gi.EventType.OPEN,()=>{_||(te(gt,`RPC '${e}' stream ${s} transport opened.`),T.__())}),S(p,gi.EventType.CLOSE,()=>{_||(_=!0,te(gt,`RPC '${e}' stream ${s} transport closed`),T.u_(),this.d_(p))}),S(p,gi.EventType.ERROR,P=>{_||(_=!0,Ns(gt,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),T.u_(new ne(j.UNAVAILABLE,"The operation could not be completed")))}),S(p,gi.EventType.MESSAGE,P=>{var x;if(!_){const M=P.data[0];De(!!M,16349);const L=M,O=(L==null?void 0:L.error)||((x=L[0])===null||x===void 0?void 0:x.error);if(O){te(gt,`RPC '${e}' stream ${s} received error:`,O);const W=O.status;let H=function(I){const b=Xe[I];if(b!==void 0)return ty(b)}(W),A=O.message;H===void 0&&(H=j.INTERNAL,A="Unknown error status: "+W+" with message "+O.message),_=!0,T.u_(new ne(H,A)),p.close()}else te(gt,`RPC '${e}' stream ${s} received:`,M),T.c_(M)}}),S(l,y_.STAT_EVENT,P=>{P.stat===xc.PROXY?te(gt,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===xc.NOPROXY&&te(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.a_()},0),T}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function oc(){return typeof document<"u"?document:null}/**
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
 */class gy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=s,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),s=Math.max(0,n-r);s>0&&te("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Op="PersistentStream";class my{constructor(e,n,r,s,i,o,l,c){this.xi=e,this.S_=r,this.D_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new gy(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.v_===n&&this.z_(r,s)},r=>{e(()=>{const s=new ne(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(s)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.j_(s))}),this.stream.onMessage(s=>{r(()=>++this.M_==1?this.J_(s):this.onNext(s))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return te(Op,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(te(Op,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fC extends my{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=vS(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?yn(o.readTime):de.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Kc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Bc(c)?{documents:wS(i,c)}:{query:TS(i,c).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=sy(i,o.resumeToken);const u=qc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(de.min())>0){l.readTime=Va(i,o.snapshotVersion.toTimestamp());const u=qc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=RS(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Kc(this.serializer),n.removeTarget=e,this.Q_(n)}}class pC extends my{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return De(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,De(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){De(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=AS(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.ra(r,n)}ia(){const e={};e.database=Kc(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ES(this.serializer,r))};this.Q_(n)}}/**
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
 */class gC{}class mC extends gC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.sa=!1}oa(){if(this.sa)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,$c(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(j.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,$c(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(j.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class _C{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(qn(n),this.ua=!1):te("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Qr="RemoteStore";class yC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{r.enqueueAndForget(async()=>{ns(this)&&(te(Qr,"Restarting streams for network reachability change."),await async function(c){const u=fe(c);u.da.add(4),await co(u),u.Va.set("Unknown"),u.da.delete(4),await dl(u)}(this))})}),this.Va=new _C(r,s)}}async function dl(t){if(ns(t))for(const e of t.Aa)await e(!0)}async function co(t){for(const e of t.Aa)await e(!1)}function _y(t,e){const n=fe(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),rh(n)?nh(n):Hs(n).N_()&&th(n,e))}function eh(t,e){const n=fe(t),r=Hs(n);n.Ea.delete(e),r.N_()&&yy(n,e),n.Ea.size===0&&(r.N_()?r.k_():ns(n)&&n.Va.set("Unknown"))}function th(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hs(t).Z_(e)}function yy(t,e){t.ma.Ke(e),Hs(t).X_(e)}function nh(t){t.ma=new dS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Hs(t).start(),t.Va.ca()}function rh(t){return ns(t)&&!Hs(t).O_()&&t.Ea.size>0}function ns(t){return fe(t).da.size===0}function vy(t){t.ma=void 0}async function vC(t){t.Va.set("Online")}async function EC(t){t.Ea.forEach((e,n)=>{th(t,e)})}async function AC(t,e){vy(t),rh(t)?(t.Va.Pa(e),nh(t)):t.Va.set("Unknown")}async function wC(t,e,n){if(t.Va.set("Online"),e instanceof ry&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ea.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ea.delete(l),s.ma.removeTarget(l))}(t,e)}catch(r){te(Qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ma(t,r)}else if(e instanceof oa?t.ma.Xe(e):e instanceof ny?t.ma.ot(e):t.ma.nt(e),!n.isEqual(de.min()))try{const r=await py(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ma.It(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ea.get(u);d&&i.Ea.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.Ea.get(c);if(!d)return;i.Ea.set(c,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),yy(i,c);const p=new lr(d.target,c,u,d.sequenceNumber);th(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){te(Qr,"Failed to raise snapshot:",r),await Ma(t,r)}}async function Ma(t,e,n){if(!qs(e))throw e;t.da.add(1),await co(t),t.Va.set("Offline"),n||(n=()=>py(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Qr,"Retrying IndexedDB access"),await n(),t.da.delete(1),await dl(t)})}function Ey(t,e){return e().catch(n=>Ma(t,n,e))}async function fl(t){const e=fe(t),n=Tr(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Bu;for(;TC(e);)try{const s=await sC(e.localStore,r);if(s===null){e.Ia.length===0&&n.k_();break}r=s.batchId,IC(e,s)}catch(s){await Ma(e,s)}Ay(e)&&wy(e)}function TC(t){return ns(t)&&t.Ia.length<10}function IC(t,e){t.Ia.push(e);const n=Tr(t);n.N_()&&n.ea&&n.ta(e.mutations)}function Ay(t){return ns(t)&&!Tr(t).O_()&&t.Ia.length>0}function wy(t){Tr(t).start()}async function RC(t){Tr(t).ia()}async function bC(t){const e=Tr(t);for(const n of t.Ia)e.ta(n.mutations)}async function SC(t,e,n){const r=t.Ia.shift(),s=Gu.from(r,e,n);await Ey(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fl(t)}async function CC(t,e){e&&Tr(t).ea&&await async function(r,s){if(function(o){return uS(o)&&o!==j.ABORTED}(s.code)){const i=r.Ia.shift();Tr(r).L_(),await Ey(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fl(r)}}(t,e),Ay(t)&&wy(t)}async function Dp(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),te(Qr,"RemoteStore received new credentials");const r=ns(n);n.da.add(3),await co(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await dl(n)}async function PC(t,e){const n=fe(t);e?(n.da.delete(2),await dl(n)):e||(n.da.add(2),await co(n),n.Va.set("Unknown"))}function Hs(t){return t.fa||(t.fa=function(n,r,s){const i=fe(n);return i.oa(),new fC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:vC.bind(null,t),n_:EC.bind(null,t),i_:AC.bind(null,t),Y_:wC.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),rh(t)?nh(t):t.Va.set("Unknown")):(await t.fa.stop(),vy(t))})),t.fa}function Tr(t){return t.ga||(t.ga=function(n,r,s){const i=fe(n);return i.oa(),new pC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:RC.bind(null,t),i_:CC.bind(null,t),na:bC.bind(null,t),ra:SC.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await fl(t)):(await t.ga.stop(),t.Ia.length>0&&(te(Qr,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class sh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new sh(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ih(t,e){if(qn("AsyncQueue",`${e}: ${t}`),qs(t))return new ne(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Is{static emptySet(e){return new Is(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=mi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Is)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Vp{constructor(){this.pa=new He(oe.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ms(e,n,Is.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class kC{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class NC{constructor(){this.queries=xp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=xp(),i.forEach((o,l)=>{for(const c of l.Sa)c.onError(r)})})(this,new ne(j.ABORTED,"Firestore shutting down"))}}function xp(){return new ts(t=>$_(t),ol)}async function OC(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Da()&&e.va()&&(r=2):(i=new kC,r=e.va()?0:1);try{switch(r){case 0:i.ba=await n.onListen(s,!0);break;case 1:i.ba=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=ih(o,`Initialization of query '${fs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&oh(n)}async function DC(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.va()?0:1:!i.Da()&&e.va()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VC(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Ma(s)&&(r=!0);o.ba=s}}r&&oh(n)}function xC(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function oh(t){t.Ca.forEach(e=>{e.next()})}var zc,Mp;(Mp=zc||(zc={})).xa="default",Mp.Cache="cache";class MC{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==zc.Cache}}/**
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
 */class Ty{constructor(e){this.key=e}}class Iy{constructor(e){this.key=e}}class LC{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ae(),this.mutatedKeys=Ae(),this.Za=H_(e),this.Xa=new Is(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new Vp,s=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),_=al(this.query,p)?p:null,T=!!g&&this.mutatedKeys.has(g.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;g&&_?g.data.isEqual(_.data)?T!==S&&(r.track({type:3,doc:_}),P=!0):this.ru(g,_)||(r.track({type:2,doc:_}),P=!0,(c&&this.Za(_,c)>0||u&&this.Za(_,u)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),P=!0):g&&!_&&(r.track({type:1,doc:g}),P=!0,(c||u)&&(l=!0)),P&&(_?(o=o.add(_),i=S?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Xa:o,nu:r,Cs:l,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((d,p)=>function(_,T){const S=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:P})}};return S(_)-S(T)}(d.type,p.type)||this.Za(d.doc,p.doc)),this.iu(r),s=s!=null&&s;const l=n&&!s?this.su():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new Ms(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Vp,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Ae(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Iy(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Ty(r))}),n}au(e){this.Ha=e.$s,this.Ya=Ae();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Ms.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ah="SyncEngine";class UC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FC{constructor(e){this.key=e,this.cu=!1}}class BC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new ts(l=>$_(l),ol),this.Pu=new Map,this.Tu=new Set,this.Iu=new He(oe.comparator),this.Eu=new Map,this.du=new Yu,this.Au={},this.Ru=new Map,this.Vu=xs.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function jC(t,e,n=!0){const r=ky(t);let s;const i=r.hu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.uu()):s=await Ry(r,e,n,!0),s}async function qC(t,e){const n=ky(t);await Ry(n,e,!0,!1)}async function Ry(t,e,n,r){const s=await iC(t.localStore,_n(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await $C(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&_y(t.remoteStore,s),l}async function $C(t,e,n,r,s){t.fu=(p,g,_)=>async function(S,P,x,M){let L=P.view.tu(x);L.Cs&&(L=await Cp(S.localStore,P.query,!1).then(({documents:A})=>P.view.tu(A,L)));const O=M&&M.targetChanges.get(P.targetId),W=M&&M.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges(L,S.isPrimaryClient,O,W);return Up(S,P.targetId,H.ou),H.snapshot}(t,p,g,_);const i=await Cp(t.localStore,e,!0),o=new LC(e,i.$s),l=o.tu(i.documents),c=lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);Up(t,n,u.ou);const d=new UC(e,n,o);return t.hu.set(e,d),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function HC(t,e,n){const r=fe(t),s=r.hu.get(e),i=r.Pu.get(s.targetId);if(i.length>1)return r.Pu.set(s.targetId,i.filter(o=>!ol(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&eh(r.remoteStore,s.targetId),Qc(r,s.targetId)}).catch(js)):(Qc(r,s.targetId),await Wc(r.localStore,s.targetId,!0))}async function KC(t,e){const n=fe(t),r=n.hu.get(e),s=n.Pu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),eh(n.remoteStore,r.targetId))}async function WC(t,e,n){const r=ZC(t);try{const s=await function(o,l){const c=fe(o),u=tt.now(),d=l.reduce((_,T)=>_.add(T.key),Ae());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=$n(),S=Ae();return c.Bs.getEntries(_,d).next(P=>{T=P,T.forEach((x,M)=>{M.isValidDocument()||(S=S.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,T)).next(P=>{p=P;const x=[];for(const M of l){const L=iS(M,p.get(M.key).overlayedDocument);L!=null&&x.push(new Sr(M.key,L,V_(L.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,x,l)}).next(P=>{g=P;const x=P.applyToLocalDocumentSet(p,S);return c.documentOverlayCache.saveOverlays(_,P.batchId,x)})}).then(()=>({batchId:g.batchId,changes:W_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let u=o.Au[o.currentUser.toKey()];u||(u=new He(ye)),u=u.insert(l,c),o.Au[o.currentUser.toKey()]=u}(r,s.batchId,n),await uo(r,s.changes),await fl(r.remoteStore)}catch(s){const i=ih(s,"Failed to persist write");n.reject(i)}}async function by(t,e){const n=fe(t);try{const r=await nC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Eu.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.cu=!0:s.modifiedDocuments.size>0?De(o.cu,14607):s.removedDocuments.size>0&&(De(o.cu,42227),o.cu=!1))}),await uo(n,r,e)}catch(r){await js(r)}}function Lp(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.hu.forEach((i,o)=>{const l=o.view.Fa(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=fe(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const g of p.Sa)g.Fa(l)&&(u=!0)}),u&&oh(c)}(r.eventManager,e),s.length&&r.lu.Y_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GC(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new He(oe.comparator);o=o.insert(i,yt.newNoDocument(i,de.min()));const l=Ae().add(i),c=new ul(de.min(),new Map,new He(ye),o,l);await by(r,c),r.Iu=r.Iu.remove(i),r.Eu.delete(e),lh(r)}else await Wc(r.localStore,e,!1).then(()=>Qc(r,e,n)).catch(js)}async function zC(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await tC(n.localStore,e);Cy(n,r,null),Sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uo(n,s)}catch(s){await js(s)}}async function QC(t,e,n){const r=fe(t);try{const s=await function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(De(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);Cy(r,e,n),Sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uo(r,s)}catch(s){await js(s)}}function Sy(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function Cy(t,e,n){const r=fe(t);let s=r.Au[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Au[r.currentUser.toKey()]=s}}function Qc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||Py(t,r)})}function Py(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(eh(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),lh(t))}function Up(t,e,n){for(const r of n)r instanceof Ty?(t.du.addReference(r.key,e),YC(t,r)):r instanceof Iy?(te(ah,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||Py(t,r.key)):ue(19791,{pu:r})}function YC(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||(te(ah,"New document in limbo: "+n),t.Tu.add(r),lh(t))}function lh(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new oe(Fe.fromString(e)),r=t.Vu.next();t.Eu.set(r,new FC(n)),t.Iu=t.Iu.insert(n,r),_y(t.remoteStore,new lr(_n(j_(n.path)),r,"TargetPurposeLimboResolution",rl.le))}}async function uo(t,e,n){const r=fe(t),s=[],i=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,c)=>{o.push(r.fu(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=Ju.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(o),r.lu.Y_(s),await async function(c,u){const d=fe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,g=>q.forEach(g.ds,_=>d.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>q.forEach(g.As,_=>d.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!qs(p))throw p;te(Zu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=d.xs.get(g),T=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(T);d.xs=d.xs.insert(g,S)}}}(r.localStore,i))}async function XC(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){te(ah,"User change. New user:",e.toKey());const r=await fy(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(l=>{l.forEach(c=>{c.reject(new ne(j.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uo(n,r.ks)}}function JC(t,e){const n=fe(t),r=n.Eu.get(e);if(r&&r.cu)return Ae().add(r.key);{let s=Ae();const i=n.Pu.get(e);if(!i)return s;for(const o of i){const l=n.hu.get(o);s=s.unionWith(l.view.eu)}return s}}function ky(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GC.bind(null,e),e.lu.Y_=VC.bind(null,e.eventManager),e.lu.gu=xC.bind(null,e.eventManager),e}function ZC(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QC.bind(null,e),e}class La{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return eC(this.persistence,new XS,e.initialUser,this.serializer)}Su(e){return new dy(Xu.fi,this.serializer)}bu(e){return new aC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}La.provider={build:()=>new La};class eP extends La{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){De(this.persistence.referenceDelegate instanceof xa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new MS(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new dy(r=>xa.fi(r,n),this.serializer)}}class Yc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Lp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XC.bind(null,this.syncEngine),await PC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NC}()}createDatastore(e){const n=hl(e.databaseInfo.databaseId),r=function(i){return new dC(i)}(e.databaseInfo);return function(i,o,l,c){return new mC(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new yC(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Lp(this.syncEngine,n,0),function(){return Np.C()?new Np:new lC}())}createSyncEngine(e,n){return function(s,i,o,l,c,u,d){const p=new BC(s,i,o,l,c,u);return d&&(p.mu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);te(Qr,"RemoteStore shutting down."),i.da.add(5),await co(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yc.provider={build:()=>new Yc};/**
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
 */class tP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ir="FirestoreClient";class nP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=I_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{te(Ir,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(te(Ir,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ih(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ac(t,e){t.asyncQueue.verifyOperationInProgress(),te(Ir,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rP(t);te(Ir,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Dp(e.remoteStore,s)),t._onlineComponents=e}async function rP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Ir,"Using user provided OfflineComponentProvider");try{await ac(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await ac(t,new La)}}else te(Ir,"Using default OfflineComponentProvider"),await ac(t,new eP(void 0));return t._offlineComponents}async function Ny(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Ir,"Using user provided OnlineComponentProvider"),await Fp(t,t._uninitializedComponentsProvider._online)):(te(Ir,"Using default OnlineComponentProvider"),await Fp(t,new Yc))),t._onlineComponents}function sP(t){return Ny(t).then(e=>e.syncEngine)}async function iP(t){const e=await Ny(t),n=e.eventManager;return n.onListen=jC.bind(null,e.syncEngine),n.onUnlisten=HC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KC.bind(null,e.syncEngine),n}function oP(t,e,n={}){const r=new fr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new tP({next:g=>{d.xu(),o.enqueueAndForget(()=>DC(i,p)),g.fromCache&&c.source==="server"?u.reject(new ne(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new MC(l,d,{includeMetadataChanges:!0,Qa:!0});return OC(i,p)}(await iP(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Oy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bp=new Map;/**
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
 */function Dy(t,e,n){if(!n)throw new ne(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aP(t,e,n,r){if(e===!0&&r===!0)throw new ne(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jp(t){if(!oe.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qp(t){if(oe.isDocumentKey(t))throw new ne(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function Yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pl(t);throw new ne(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lP(t,e){if(e<=0)throw new ne(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const Vy="firestore.googleapis.com",$p=!0;class Hp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vy,this.ssl=$p}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:$p;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VS)throw new ne(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Oy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new u0;switch(r.type){case"firstParty":return new p0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bp.get(n);r&&(te("ComponentProvider","Removing Datastore"),Bp.delete(n),r.terminate())}(this),Promise.resolve()}}function cP(t,e,n,r={}){var s;t=Yr(t,gl);const i=Rr(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Tu(`https://${c}`),Iu("Firestore",!0)),o.host!==Vy&&o.host!==c&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:r});if(!Hr(u,l)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=mt.MOCK_USER;else{d=Pm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ne(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new mt(g)}t._authCredentials=new h0(new w_(d,p))}}/**
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
 */class Cr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cr(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class pr extends Cr{constructor(e,n,r){super(e,n,j_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new oe(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function Kp(t,e,...n){if(t=$e(t),Dy("collection","path",e),t instanceof gl){const r=Fe.fromString(e,...n);return qp(r),new pr(t,null,r)}{if(!(t instanceof Bt||t instanceof pr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return qp(r),new pr(t.firestore,null,r)}}function Xc(t,e,...n){if(t=$e(t),arguments.length===1&&(e=I_.newId()),Dy("doc","path",e),t instanceof gl){const r=Fe.fromString(e,...n);return jp(r),new Bt(t,null,new oe(r))}{if(!(t instanceof Bt||t instanceof pr))throw new ne(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return jp(r),new Bt(t.firestore,t instanceof pr?t.converter:null,new oe(r))}}/**
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
 */const Wp="AsyncQueue";class Gp{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new gy(this,"async_queue_retry"),this.rc=()=>{const r=oc();r&&te(Wp,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new fr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!qs(e))throw e;te(Wp,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,qn("INTERNAL UNHANDLED ERROR: ",zp(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const s=sh.createAndSchedule(this,e,n,r,i=>this.uc(i));return this.Zu.push(s),s}oc(){this.Xu&&ue(47125,{cc:zp(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function zp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ho extends gl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Gp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gp(e),this._firestoreClient=void 0,await e}}}function uP(t,e){const n=typeof t=="object"?t:Su(),r=typeof t=="string"?t:Pa,s=Za(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bm("firestore");i&&cP(s,...i)}return s}function xy(t){if(t._terminated)throw new ne(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hP(t),t._firestoreClient}function hP(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,d){return new P0(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Oy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new nP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ls(ut.fromBase64String(e))}catch(n){throw new ne(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ls(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ml{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ch{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class uh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const dP=/^__.*__$/;class fP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ao(e,this.data,n,this.fieldTransforms)}}class My{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ic:t})}}class hh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Vc(e),s}mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.dc({path:r,Rc:!1});return s.Ec(),s}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Ua(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Ly(this.Ic)&&dP.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class pP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hl(e)}bc(e,n,r,s=!1){return new hh({Ic:e,methodName:n,wc:r,path:ct.emptyPath(),Rc:!1,yc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dh(t){const e=t._freezeSettings(),n=hl(t._databaseId);return new pP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gP(t,e,n,r,s,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,s);ph("Data must be an object, but it was:",o,r);const l=Uy(r,o);let c,u;if(i.merge)c=new Ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Jc(e,p,n);if(!o.contains(g))throw new ne(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);By(d,g)||d.push(g)}c=new Ut(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new fP(new Ot(l),c,u)}class yl extends _l{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof yl}}class fh extends _l{_toFieldTransform(e){return new tS(e.path,new Qi)}isEqual(e){return e instanceof fh}}function mP(t,e,n,r){const s=t.bc(1,e,n);ph("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();br(r,(c,u)=>{const d=gh(e,c,n);u=$e(u);const p=s.mc(d);if(u instanceof yl)i.push(d);else{const g=fo(u,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Ut(i);return new My(o,l,s.fieldTransforms)}function _P(t,e,n,r,s,i){const o=t.bc(1,e,n),l=[Jc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(Jc(e,i[g])),c.push(i[g+1]);const u=[],d=Ot.empty();for(let g=l.length-1;g>=0;--g)if(!By(u,l[g])){const _=l[g];let T=c[g];T=$e(T);const S=o.mc(_);if(T instanceof yl)u.push(_);else{const P=fo(T,S);P!=null&&(u.push(_),d.set(_,P))}}const p=new Ut(u);return new My(d,p,o.fieldTransforms)}function yP(t,e,n,r=!1){return fo(n,t.bc(r?4:3,e))}function fo(t,e){if(Fy(t=$e(t)))return ph("Unsupported field value:",e,t),Uy(t,e);if(t instanceof _l)return function(r,s){if(!Ly(s.Ic))throw s.gc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.gc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=fo(l,s.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return J0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Va(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Va(s.serializer,i)}}if(r instanceof ch)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ls)return{bytesValue:sy(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof uh)return function(o,l){return{mapValue:{fields:{[O_]:{stringValue:D_},[ka]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.gc("VectorValues must only contain numeric values.");return Ku(l.serializer,u)})}}}}}}(r,s);throw s.gc(`Unsupported field value: ${pl(r)}`)}(t,e)}function Uy(t,e){const n={};return b_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):br(t,(r,s)=>{const i=fo(s,e.Ac(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Fy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof ch||t instanceof Ls||t instanceof Bt||t instanceof _l||t instanceof uh)}function ph(t,e,n){if(!Fy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=pl(n);throw r==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+r)}}function Jc(t,e,n){if((e=$e(e))instanceof ml)return e._internalPath;if(typeof e=="string")return gh(t,e);throw Ua("Field path arguments must be of type string or ",t,!1,void 0,n)}const vP=new RegExp("[~\\*/\\[\\]]");function gh(t,e,n){if(e.search(vP)>=0)throw Ua(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ml(...e.split("."))._internalPath}catch{throw Ua(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ua(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(j.INVALID_ARGUMENT,l+t+c)}function By(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EP extends jy{data(){return super.data()}}function mh(t,e){return typeof e=="string"?gh(t,e):e instanceof ml?e._internalPath:e._delegate._internalPath}/**
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
 */function AP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _h{}class yh extends _h{}function wP(t,e,...n){let r=[];e instanceof _h&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Eh).length,l=i.filter(c=>c instanceof vh).length;if(o>1||o>0&&l>0)throw new ne(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class vh extends yh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new vh(e,n,r)}_apply(e){const n=this._parse(e);return qy(e._query,n),new Cr(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=dh(e.firestore);return function(i,o,l,c,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Yp(p,d);const T=[];for(const S of p)T.push(Qp(c,i,S));g={arrayValue:{values:T}}}else g=Qp(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Yp(p,d),g=yP(l,o,p,d==="in"||d==="not-in");return Je.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Eh extends _h{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Eh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)qy(o,c),o=jc(o,c)}(e._query,n),new Cr(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ah extends yh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ah(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new zi(i,o)}(e._query,this._field,this._direction);return new Cr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new $s(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function TP(t,e="asc"){const n=e,r=mh("orderBy",t);return Ah._create(r,n)}class wh extends yh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new wh(e,n,r)}_apply(e){return new Cr(e.firestore,e.converter,Oa(e._query,this._limit,this._limitType))}}function IP(t){return lP("limit",t),wh._create("limit",t,"F")}function Qp(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new ne(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!q_(e)&&n.indexOf("/")!==-1)throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!oe.isDocumentKey(r))throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cp(t,new oe(r))}if(n instanceof Bt)return cp(t,n._key);throw new ne(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pl(n)}.`)}function Yp(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qy(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class RP{convertValue(e,n="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return br(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ka].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Qe(o.doubleValue));return new uh(i)}convertGeoPoint(e){return new ch(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=il(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const n=Er(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);De(uy(r),9688,{name:e});const s=new Wi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class $o{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SP extends jy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class aa extends SP{data(e={}){return super.data(e)}}class CP{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $o(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new aa(this._firestore,this._userDataWriter,r.key,r,new $o(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new aa(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $o(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:PP(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function PP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}class kP extends RP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function NP(t){t=Yr(t,Cr);const e=Yr(t.firestore,ho),n=xy(e),r=new kP(e);return AP(t._query),oP(n,t._query).then(s=>new CP(e,r,t,s))}function OP(t,e,n,...r){t=Yr(t,Bt);const s=Yr(t.firestore,ho),i=dh(s);let o;return o=typeof(e=$e(e))=="string"||e instanceof ml?_P(i,"updateDoc",t._key,e,n,r):mP(i,"updateDoc",t._key,e),Th(s,[o.toMutation(t._key,nn.exists(!0))])}function DP(t){return Th(Yr(t.firestore,ho),[new Wu(t._key,nn.none())])}function VP(t,e){const n=Yr(t.firestore,ho),r=Xc(t),s=bP(t.converter,e);return Th(n,[gP(dh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function Th(t,e){return function(r,s){const i=new fr;return r.asyncQueue.enqueueAndForget(async()=>WC(await sP(r),s,i)),i.promise}(xy(t),e)}function lc(){return new fh("serverTimestamp")}(function(e,n=!0){(function(s){Bs=s})(es),Kr(new yr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ho(new d0(r.getProvider("auth-internal")),new g0(o,r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),gn(Xf,Jf,e),gn(Xf,Jf,"esm2017")})();/**
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
 */const $y="firebasestorage.googleapis.com",Hy="storageBucket",xP=2*60*1e3,MP=10*60*1e3;/**
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
 */class ze extends wn{constructor(e,n,r=0){super(cc(e),`Firebase Storage: ${n} (${cc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ge||(Ge={}));function cc(t){return"storage/"+t}function Ih(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Ge.UNKNOWN,t)}function LP(t){return new ze(Ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UP(t){return new ze(Ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function FP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Ge.UNAUTHENTICATED,t)}function BP(){return new ze(Ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function jP(t){return new ze(Ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qP(){return new ze(Ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $P(){return new ze(Ge.CANCELED,"User canceled the upload/download.")}function HP(t){return new ze(Ge.INVALID_URL,"Invalid URL '"+t+"'.")}function KP(t){return new ze(Ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WP(){return new ze(Ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hy+"' property when initializing the app?")}function GP(){return new ze(Ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zP(){return new ze(Ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QP(t){return new ze(Ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zc(t){return new ze(Ge.INVALID_ARGUMENT,t)}function Ky(){return new ze(Ge.APP_DELETED,"The Firebase app was deleted.")}function YP(t){return new ze(Ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oi(t,e){return new ze(Ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function hi(t){throw new ze(Ge.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw KP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${s}/o${g}`,"i"),T={bucket:1,path:3},S=n===$y?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",x=new RegExp(`^https?://${S}/${s}/${P}`,"i"),L=[{regex:l,indices:c,postModify:i},{regex:_,indices:T,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<L.length;O++){const W=L[O],H=W.regex.exec(e);if(H){const A=H[W.indices.bucket];let y=H[W.indices.path];y||(y=""),r=new Ft(A,y),W.postModify(r);break}}if(r==null)throw HP(e);return r}}class XP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function JP(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...P){u||(u=!0,e.apply(null,P))}function p(P){s=setTimeout(()=>{s=null,t(_,c())},P)}function g(){i&&clearTimeout(i)}function _(P,...x){if(u){g();return}if(P){g(),d.call(null,P,...x);return}if(c()||o){g(),d.call(null,P,...x);return}r<64&&(r*=2);let L;l===1?(l=2,L=0):L=(r+Math.random())*1e3,p(L)}let T=!1;function S(P){T||(T=!0,g(),!u&&(s!==null?(P||(l=2),clearTimeout(s),p(0)):P||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function ZP(t){t(!1)}/**
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
 */function e1(t){return t!==void 0}function t1(t){return typeof t=="object"&&!Array.isArray(t)}function Rh(t){return typeof t=="string"||t instanceof String}function Xp(t){return bh()&&t instanceof Blob}function bh(){return typeof Blob<"u"}function Jp(t,e,n,r){if(r<e)throw Zc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function vl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Wy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jr||(jr={}));/**
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
 */class r1{constructor(e,n,r,s,i,o,l,c,u,d,p,g=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=g,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,S)=>{this.resolve_=T,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ho(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===jr.NO_ERROR,c=i.getStatus();if(!l||n1(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===jr.ABORT;r(!1,new Ho(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ho(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());e1(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=Ih();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ky():$P();o(c)}else{const c=qP();o(c)}};this.canceled_?n(!1,new Ho(!1,null,!0)):this.backoffId_=JP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ho{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function s1(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function i1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function o1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function a1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function l1(t,e,n,r,s,i,o=!0,l=!1){const c=Wy(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return o1(d,e),s1(d,n),i1(d,i),a1(d,r),new r1(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,l)}/**
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
 */function c1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function u1(...t){const e=c1();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(bh())return new Blob(t);throw new ze(Ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function h1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function d1(t){if(typeof atob>"u")throw QP("base-64");return atob(t)}/**
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
 */const fn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class uc{constructor(e,n){this.data=e,this.contentType=n||null}}function f1(t,e){switch(t){case fn.RAW:return new uc(Gy(e));case fn.BASE64:case fn.BASE64URL:return new uc(zy(t,e));case fn.DATA_URL:return new uc(g1(e),m1(e))}throw Ih()}function Gy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function p1(t){let e;try{e=decodeURIComponent(t)}catch{throw Oi(fn.DATA_URL,"Malformed data URL.")}return Gy(e)}function zy(t,e){switch(t){case fn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Oi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case fn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Oi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=d1(e)}catch(s){throw s.message.includes("polyfill")?s:Oi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Qy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oi(fn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_1(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function g1(t){const e=new Qy(t);return e.base64?zy(fn.BASE64,e.rest):p1(e.rest)}function m1(t){return new Qy(t).contentType}function _1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class ar{constructor(e,n){let r=0,s="";Xp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xp(this.data_)){const r=this.data_,s=h1(r,e,n);return s===null?null:new ar(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(bh()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(u1.apply(null,n))}else{const n=e.map(o=>Rh(o)?f1(fn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new ar(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Yy(t){let e;try{e=JSON.parse(t)}catch{return null}return t1(e)?e:null}/**
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
 */function y1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function v1(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Xy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function E1(t,e){return e}class Rt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||E1}}let Ko=null;function A1(t){return!Rh(t)||t.length<2?t:Xy(t)}function Jy(){if(Ko)return Ko;const t=[];t.push(new Rt("bucket")),t.push(new Rt("generation")),t.push(new Rt("metageneration")),t.push(new Rt("name","fullPath",!0));function e(i,o){return A1(o)}const n=new Rt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Rt("size");return s.xform=r,t.push(s),t.push(new Rt("timeCreated")),t.push(new Rt("updated")),t.push(new Rt("md5Hash",null,!0)),t.push(new Rt("cacheControl",null,!0)),t.push(new Rt("contentDisposition",null,!0)),t.push(new Rt("contentEncoding",null,!0)),t.push(new Rt("contentLanguage",null,!0)),t.push(new Rt("contentType",null,!0)),t.push(new Rt("metadata","customMetadata",!0)),Ko=t,Ko}function w1(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function T1(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return w1(r,t),r}function Zy(t,e,n){const r=Yy(e);return r===null?null:T1(t,r,n)}function I1(t,e,n,r){const s=Yy(e);if(s===null||!Rh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,g="/b/"+o(d)+"/o/"+o(p),_=vl(g,n,r),T=Wy({alt:"media",token:u});return _+T})[0]}function R1(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Sh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ev(t){if(!t)throw Ih()}function b1(t,e){function n(r,s){const i=Zy(t,s,e);return ev(i!==null),i}return n}function S1(t,e){function n(r,s){const i=Zy(t,s,e);return ev(i!==null),I1(i,s,t.host,t._protocol)}return n}function tv(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=BP():s=FP():n.getStatus()===402?s=UP(t.bucket):n.getStatus()===403?s=jP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function nv(t){const e=tv(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=LP(t.path)),i.serverResponse=s.serverResponse,i}return n}function C1(t,e,n){const r=e.fullServerUrl(),s=vl(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Sh(s,i,S1(t,n),o);return l.errorHandler=nv(e),l}function P1(t,e){const n=e.fullServerUrl(),r=vl(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new Sh(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=nv(e),l}function k1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function N1(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=k1(null,e)),r}function O1(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let L="";for(let O=0;O<2;O++)L=L+Math.random().toString().slice(2);return L}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=N1(e,r,s),d=R1(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+c+"--",_=ar.getBlob(p,r,g);if(_===null)throw GP();const T={name:u.fullPath},S=vl(i,t.host,t._protocol),P="POST",x=t.maxUploadRetryTime,M=new Sh(S,P,b1(t,n),x);return M.urlParams=T,M.headers=o,M.body=_.uploadData(),M.errorHandler=tv(e),M}class D1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw hi("cannot .send() more than once");if(Rr(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class V1 extends D1{initXhr(){this.xhr_.responseType="text"}}function Ch(){return new V1}/**
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
 */class Xr{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xr(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xy(this._location.path)}get storage(){return this._service}get parent(){const e=y1(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YP(e)}}function x1(t,e,n){t._throwIfRoot("uploadBytes");const r=O1(t.storage,t._location,Jy(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,Ch).then(s=>({metadata:s,ref:t}))}function M1(t){t._throwIfRoot("getDownloadURL");const e=C1(t.storage,t._location,Jy());return t.storage.makeRequestWithTokens(e,Ch).then(n=>{if(n===null)throw zP();return n})}function L1(t){t._throwIfRoot("deleteObject");const e=P1(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ch)}function U1(t,e){const n=v1(t._location.path,e),r=new Ft(t._location.bucket,n);return new Xr(t.storage,r)}/**
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
 */function F1(t){return/^[A-Za-z]+:\/\//.test(t)}function B1(t,e){return new Xr(t,e)}function rv(t,e){if(t instanceof Ph){const n=t;if(n._bucket==null)throw WP();const r=new Xr(n,n._bucket);return e!=null?rv(r,e):r}else return e!==void 0?U1(t,e):t}function j1(t,e){if(e&&F1(e)){if(t instanceof Ph)return B1(t,e);throw Zc("To use ref(service, url), the first argument must be a Storage instance.")}else return rv(t,e)}function Zp(t,e){const n=e==null?void 0:e[Hy];return n==null?null:Ft.makeFromBucketSpec(n,t)}function q1(t,e,n,r={}){t.host=`${e}:${n}`;const s=Rr(e);s&&(Tu(`https://${t.host}/b`),Iu("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Pm(i,t.app.options.projectId))}class Ph{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=$y,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xP,this._maxUploadRetryTime=MP,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=Zp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Zp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new XP(Ky());{const o=l1(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const eg="@firebase/storage",tg="0.13.13";/**
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
 */const sv="storage";function $1(t,e,n){return t=$e(t),x1(t,e,n)}function H1(t){return t=$e(t),M1(t)}function K1(t){return t=$e(t),L1(t)}function ng(t,e){return t=$e(t),j1(t,e)}function W1(t=Su(),e){t=$e(t);const r=Za(t,sv).getImmediate({identifier:e}),s=bm("storage");return s&&G1(r,...s),r}function G1(t,e,n,r={}){q1(t,e,n,r)}function z1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ph(n,r,s,e,es)}function Q1(){Kr(new yr(sv,z1,"PUBLIC").setMultipleInstances(!0)),gn(eg,tg,""),gn(eg,tg,"esm2017")}Q1();const Y1={apiKey:"AIzaSyAr4nGRhlqXyoHG7dZtqcbj-IN2Xcr0LqM",authDomain:"fir-auth-cozy.firebaseapp.com",projectId:"fir-auth-cozy",storageBucket:"fir-auth-cozy.firebasestorage.app",messagingSenderId:"306302302026",appId:"1:306302302026:web:63ffe859d4cbbeda6073b3",measurementId:"G-SSWWQ42BLN"},kh=Om(Y1),qr=o0(kh),Wo=uP(kh),rg=W1(kh),X1=new Vn,iv=new Dn;iv.setCustomParameters({display:"popup"});const J1=async()=>{try{return(await f_(qr,X1)).user}catch(t){throw console.error("Google login error:",t),t}},Z1=async()=>{try{return(await f_(qr,iv)).user}catch(t){throw console.error("Facebook login error:",t),t}},eu=Ce(null),ov=Ce(!1);let Rs=null;const ek=()=>{Rs||(Rs=QR(qr,t=>{eu.value=t,ov.value=!0}))},tk=()=>{Rs&&(Rs(),Rs=null)},nk=async()=>{try{return await YR(qr),!0}catch(t){throw console.error("Logout error:",t),t}};function El(){Rs||ek();const t=Be(()=>!!eu.value);return{user:ca(eu),isLoggedIn:t,isInitialized:ca(ov),logout:nk,cleanupAuth:tk}}const tr=Ce(""),Go=Ce(""),hc=Ce(!1);function Nh(){const t=Xa(),{isLoggedIn:e,logout:n}=El(),{currentLanguage:r}=Gt(),s={EN:{errors:{"auth/user-not-found":"No user found with this email address.","auth/wrong-password":"Incorrect password.","auth/invalid-email":"Invalid email address.","auth/user-disabled":"This account has been disabled.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password should be at least 6 characters.","auth/invalid-credential":"Invalid credentials. Please check your email and password.","auth/too-many-requests":"Too many failed attempts. Please try again later.","login-failed":"Login failed. Please try again.","signup-failed":"Signup failed. Please try again.","password-reset-failed":"Failed to send password reset email. Please try again.","password-mismatch":"Passwords do not match.","email-required":"Please enter your email address first.","network-error":"Network error. Please check your connection.","unknown-error":"An unexpected error occurred. Please try again."},success:{"password-reset-sent":"Password reset email sent! Check your inbox.","login-success":"Login successful!","signup-success":"Account created successfully!"},loading:{"logging-in":"Logging in...","signing-up":"Signing up...","sending-reset":"Sending reset email..."}},VN:{errors:{"auth/user-not-found":"Không tìm thấy người dùng với email này.","auth/wrong-password":"Mật khẩu không đúng.","auth/invalid-email":"Địa chỉ email không hợp lệ.","auth/user-disabled":"Tài khoản này đã bị vô hiệu hóa.","auth/email-already-in-use":"Tài khoản với email này đã tồn tại.","auth/weak-password":"Mật khẩu phải có ít nhất 6 ký tự.","auth/invalid-credential":"Thông tin đăng nhập không hợp lệ. Vui lòng kiểm tra email và mật khẩu.","auth/too-many-requests":"Quá nhiều lần thử không thành công. Vui lòng thử lại sau.","login-failed":"Đăng nhập thất bại. Vui lòng thử lại.","signup-failed":"Đăng ký thất bại. Vui lòng thử lại.","password-reset-failed":"Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại.","password-mismatch":"Mật khẩu không khớp.","email-required":"Vui lòng nhập địa chỉ email trước.","network-error":"Lỗi mạng. Vui lòng kiểm tra kết nối.","unknown-error":"Đã xảy ra lỗi không mong muốn. Vui lòng thử lại."},success:{"password-reset-sent":"Email đặt lại mật khẩu đã được gửi! Kiểm tra hộp thư của bạn.","login-success":"Đăng nhập thành công!","signup-success":"Tài khoản đã được tạo thành công!"},loading:{"logging-in":"Đang đăng nhập...","signing-up":"Đang đăng ký...","sending-reset":"Đang gửi email đặt lại..."}}},i=(O,W="unknown-error")=>{const H=s[r.value].errors;O.code?tr.value=H[O.code]||H[W]:O.message?O.message.includes("network")?tr.value=H["network-error"]:tr.value=H[W]:typeof O=="string"?tr.value=H[O]||H[W]:tr.value=H[W],Go.value=""},o=O=>{const W=s[r.value].success;Go.value=W[O]||"",tr.value=""},l=()=>{tr.value="",Go.value=""},c=(O=null)=>{hc.value=!0,O&&l()},u=()=>{hc.value=!1},d=async(O,W,H,A)=>{try{c(W),l();const y=await O();return H&&o(H),y}catch(y){throw console.error("Operation failed:",y),i(y,A),y}finally{u()}},p=O=>s[r.value].loading[O]||"",g=O=>btoa(O),_=O=>{try{return atob(O)}catch{return""}},T=async(O,W)=>d(async()=>{if(await WR(qr,O.email,O.password),W){const{setRememberedAuth:H}=Gt();H(O.email,g(O.password))}else{const{clearRememberedAuth:H}=Gt();H()}t.push("/home")},"logging-in",null,"login-failed"),S=async O=>d(async()=>{await KR(qr,O.email,O.password),t.push("/home")},"signing-up",null,"signup-failed"),P=async O=>d(async()=>{await HR(qr,O)},"sending-reset","password-reset-sent","password-reset-failed"),x=async()=>d(async()=>{const O=await J1();return console.log("Google login successful:",O),t.push("/home"),O},"logging-in",null,"login-failed"),M=async()=>d(async()=>{const O=await Z1();return console.log("Facebook login successful:",O),t.push("/home"),O},"logging-in",null,"login-failed"),L=async()=>{if(e.value)try{await n(),t.push("/")}catch(O){console.error("Logout error:",O)}};return{loading:Be(()=>hc.value),error:Be(()=>tr.value),successMessage:Be(()=>Go.value),isLoggedIn:e,encryptPassword:g,decryptPassword:_,handleLogin:T,handleSignup:S,handleForgotPassword:P,handleLogout:L,handleGoogleLogin:x,handleFacebookLogin:M,clearMessages:l,getLoadingMessage:p,handleError:i}}const rs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},rk={class:"container-right-nav"},sk=["disabled"],ik={__name:"NavRight",setup(t){const{changeThemeColor:e,toggleLanguage:n,t:r}=Gt(),{isLoggedIn:s,handleLogout:i}=Nh();return(o,l)=>(me(),_e("div",rk,[V("button",{class:"nav-circle orange-circle",onClick:l[0]||(l[0]=c=>Z(e)("#ff7b42","255, 123, 66"))}),V("button",{class:"nav-circle green-circle",onClick:l[1]||(l[1]=c=>Z(e)("#a4f28d","164, 242, 141"))}),V("button",{class:"nav-circle yellow-circle",onClick:l[2]||(l[2]=c=>Z(e)("#ffeb7c","255, 235, 124"))}),V("button",{class:"nav-button language-button",onClick:l[3]||(l[3]=(...c)=>Z(n)&&Z(n)(...c))},Se(Z(r).languageBtn),1),V("button",{class:et(["nav-button logout-button",{disabled:!Z(s)}]),onClick:l[4]||(l[4]=(...c)=>Z(i)&&Z(i)(...c)),disabled:!Z(s)},Se(Z(r).logoutBtn),11,sk)]))}},ok=rs(ik,[["__scopeId","data-v-8e237b3f"]]),ak={__name:"App",setup(t){const{initializeTheme:e}=Gt();return Zr(()=>{e()}),(n,r)=>{const s=ME("router-view");return me(),_e("div",null,[Pe(ok),Pe(s)])}}};function lk(){const t=o=>o?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?null:"email-invalid":"email-required",e=o=>o?null:"password-required",n=(o,l)=>l?o!==l?"password-mismatch":null:"confirm-password-required";return{validateEmail:t,validatePassword:e,validatePasswordConfirmation:n,validateLoginForm:o=>{const l=t(o.email);if(l)return l;const c=e(o.password);return c||null},validateSignupForm:o=>{const l=t(o.email);if(l)return l;const c=e(o.password);if(c)return c;const u=n(o.password,o.confirmPassword);return u||null},validateForgotPasswordForm:o=>t(o)}}const ck={id:"container-form-login"},uk={class:"tab-buttons-login"},hk={class:"form-container"},dk={class:"input-group"},fk=["placeholder"],pk={class:"password-input-container"},gk=["type","placeholder"],mk=["src","alt"],_k={class:"form-options"},yk={class:"remember-me"},vk=["disabled"],Ek={class:"input-group"},Ak=["placeholder"],wk={class:"password-input-container"},Tk=["type","placeholder"],Ik=["src","alt"],Rk={class:"password-input-container"},bk=["type","placeholder"],Sk=["src","alt"],Ck=["disabled"],Pk={key:0,class:"error-message"},kk={key:1,class:"success-message"},Nk={__name:"LoginForm",setup(t){const{t:e,currentLanguage:n,getRememberedAuth:r}=Gt(),{loading:s,error:i,successMessage:o,decryptPassword:l,handleLogin:c,handleSignup:u,handleForgotPassword:d,clearMessages:p,handleError:g}=Nh(),{validateLoginForm:_,validateSignupForm:T,validateForgotPasswordForm:S}=lk(),P=Ce("login"),x=Ce(!1),M=Ce(!1),L=Ce(!1),O=Ce(!1),W=bs({email:"",password:""}),H=bs({email:"",password:"",confirmPassword:""});Zr(()=>{const R=r();R.email&&(W.email=R.email,W.password=R.password?l(R.password):"",x.value=!0)});const A=R=>{P.value=R,p()},y=()=>{p();const R=_(W);if(R){g(R);return}c(W,x.value)},I=()=>{p();const R=T(H);if(R){g(R);return}u(H)},b=()=>{p();const R=S(W.email);if(R){g(R);return}d(W.email)};return(R,C)=>(me(),_e("div",ck,[V("div",uk,[V("button",{class:et(["tab-button",{active:P.value==="login"}]),onClick:C[0]||(C[0]=v=>A("login"))},Se(Z(e).loginTab),3),V("button",{class:et(["tab-button",{active:P.value==="signup"}]),onClick:C[1]||(C[1]=v=>A("signup"))},Se(Z(e).signupTab),3)]),V("div",hk,[Sn(V("form",{class:"form",onSubmit:Gl(y,["prevent"])},[V("div",dk,[Sn(V("input",{type:"email",class:"input-field theme-input",placeholder:Z(e).emailPlaceholder,"onUpdate:modelValue":C[2]||(C[2]=v=>W.email=v),required:""},null,8,fk),[[Ui,W.email]]),V("div",pk,[Sn(V("input",{type:M.value?"text":"password",class:"input-field theme-input",placeholder:Z(e).passwordPlaceholder,"onUpdate:modelValue":C[3]||(C[3]=v=>W.password=v),required:""},null,8,gk),[[Wl,W.password]]),V("button",{type:"button",class:"toggle-password",onClick:C[4]||(C[4]=v=>M.value=!M.value)},[V("img",{src:M.value?"/src/components/icons/hide.png":"/src/components/icons/show.png",alt:M.value?"Hide password":"Show password",class:"password-icon"},null,8,mk)])])]),V("div",_k,[V("label",yk,[Sn(V("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":C[5]||(C[5]=v=>x.value=v)},null,512),[[lm,x.value]]),V("span",null,Se(Z(e).rememberMe),1)]),V("a",{href:"#",class:"forgot-password",onClick:Gl(b,["prevent"])},Se(Z(e).forgotPassword),1)]),V("button",{type:"submit",class:"submit-button",disabled:Z(s)},Se(Z(s)?Z(n)==="EN"?"Logging in...":"Đang đăng nhập...":Z(e).loginBtn),9,vk)],544),[[qd,P.value==="login"]]),Sn(V("form",{class:"form",onSubmit:Gl(I,["prevent"])},[V("div",Ek,[Sn(V("input",{type:"email",class:"input-field theme-input",placeholder:Z(e).emailPlaceholder,"onUpdate:modelValue":C[6]||(C[6]=v=>H.email=v),required:""},null,8,Ak),[[Ui,H.email]]),V("div",wk,[Sn(V("input",{type:L.value?"text":"password",class:"input-field theme-input",placeholder:Z(e).passwordPlaceholder,"onUpdate:modelValue":C[7]||(C[7]=v=>H.password=v),required:""},null,8,Tk),[[Wl,H.password]]),V("button",{type:"button",class:"toggle-password",onClick:C[8]||(C[8]=v=>L.value=!L.value)},[V("img",{src:L.value?"/src/components/icons/hide.png":"/src/components/icons/show.png",alt:L.value?"Hide password":"Show password",class:"password-icon"},null,8,Ik)])]),V("div",Rk,[Sn(V("input",{type:O.value?"text":"password",class:"input-field theme-input",placeholder:Z(e).confirmPasswordPlaceholder,"onUpdate:modelValue":C[9]||(C[9]=v=>H.confirmPassword=v),required:""},null,8,bk),[[Wl,H.confirmPassword]]),V("button",{type:"button",class:"toggle-password",onClick:C[10]||(C[10]=v=>O.value=!O.value)},[V("img",{src:O.value?"/src/components/icons/hide.png":"/src/components/icons/show.png",alt:O.value?"Hide password":"Show password",class:"password-icon"},null,8,Sk)])])]),V("button",{type:"submit",class:"submit-button",disabled:Z(s)},Se(Z(s)?Z(n)==="EN"?"Signing up...":"Đang đăng ký...":Z(e).signupBtn),9,Ck)],544),[[qd,P.value==="signup"]]),Z(i)?(me(),_e("div",Pk,Se(Z(i)),1)):Nn("",!0),Z(o)?(me(),_e("div",kk,Se(Z(o)),1)):Nn("",!0)])]))}},Ok=rs(Nk,[["__scopeId","data-v-3d9f281c"]]),Dk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2Zv2sUQRTHP+evwigSrCyiAWOpTXpBxcRcCkn8BVrZif+AjUJQSA5Jo4VpbMQiJtrE/CCojZ3YGEQx9nYaE6PRxOJWBp4Qwu7czuzb3Tm4L3zhmn1vPszsm7fvoKWWgtceoArUgGlgEfgO/BWb35+A58AI0CfPBKGKLGgSWAciR/8BJoAzEqsUXQDeeyw+yQvAYJEAR4BXigBb/QLoyhviHLCSI0QkXgUu5wFgzu9QAQDRFtc03x0TaKwEiEj8QAtmpESISHwnK8SlACAi8ZUs1emn0iLMffFQSraJux/YB7QDncBRYLRBjB/AYR8QrRL7EjiQIt/VFLHmXSHOK0HMAjtS5kwDYjyQFqKidGN/kyOEMsi7tFWsT2k3hh0gXEAioDdNwEklkGOWHN3Afcn1328dYo83gtjr2cXGVZjtFoiNjPF/A7ttIFXFTjZJj5Ry9NhAakpJXltyfCniHZxWSjKXEL8iX4saOaZsIJ8V74847VKKH8lnc6KWmgjkqw1ko4lA1rVBBqT522zbdKQ9wXcd85q1JmrZA+Q0Onri0QIlarFEENNDueT9aAs2WxLINmBNs/wOlwRySPvzt98j4HXpnza7y3Ihdsf4mkfeXhuIacR+eQQtuvyuAW2NtvlpE4BMkEI9TQByKg2IOccfAgZZwEFnAwapUuA4KC+QeTzUKVPxUEBWgIN4yjSE9QBA6sBFMup2ACBDKOleiSCjKOuGwzHTAKlr7kTcX2/LBYAsucx4s3SqMzmCTAEdFKh+y5jTB+SNzJ1L03HgsYxJXUFWZfJoYgQjs8iTwE0pDHHaCTwDbgEn5JmWWiJg/QOlYrQmouYwLQAAAABJRU5ErkJggg==",Vk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR4nO2ZSWsUURSFP5WYDoqiRiPigAvBP+BCiWsxDqigoMZf4EKIgqgrd6IoCCrOA1m5cCW208JFjCDGnWDiiANBQaIimnRi8uTJFZpQ1bxb9V5VteTAgV503fNOveneWzCB/xuzgE3AMeAW0AsMABVgWH73AWX5j/3vHAqCRqAduAv8BoySI8AdiTE1DwNNQAfQn2DwcewH9srLyQRtwGuPBsbzjWgEQwk4G9CAqeIYcF5m3ivmA08zMmGq+BhY4MvEUuBVDiaM8J2ciKkwV45MkyMP+dgTeSwnU8X9eMC5ep8Ji3UeBlKR9f0I6JZ9NpzlTDTJWZ5k8IPAJWC9LM3xmCZ3xGUxGsyExb6E5/5VYDHuWAR0hjJRSpB2/AK2p9C0z/7wacJiVwITqzzotuAZ95XLaQcFxGxgVGHkCgXFFuXppNnYmeKEwsgFx5iTgJ5APBwnelthZK3CiAmYGUfCNcMdUlRxIY18ixMdcAxgb30KYMQAM6NERxwfflggIwujRF0Tuu4CGVkeJfrV8eG3BTKyJEr0ZZ1tdgM0R4mWFQHaCmCkAkyJEj2uCHKxAEb64kQ3B0hRrJEjCvYoxnCzVtKo6d9ewy+mA58V+gdrBbunnN6dHo2cVGqvrBWsXRnMLrFWDya2SX3jqvsFaPBd6g7KC0hT6rpexv94yiVwR8JTpDPugopBc4qm+AoXgVKKXu+QtHo2xnTSG6TGt/vhe0KNB4qX9bfeMClpl8sHadB1Ac/EaNq4rShxxoOob94gAewSe1KAwRvhJ2AeKfpNrslkSI5KGzb1h568zezGE1pyWmZj0ov2CrtnTmdo4iewlYBYA7wIbKILWEYGsLOzB/jo2UCvJKKTyRiNkiuVFV2YqI7+dWBDXMWXNWbIYI5K0fNcstSKmLR9s/dy09u87ACwOubL1gSoZ/wB2IjAIiE1bGAAAAAASUVORK5CYII=",xk={id:"container-social-login"},Mk={class:"qr-section"},Lk={class:"qr-title"},Uk={class:"social-login"},Fk={class:"social-title"},Bk={class:"social-buttons"},jk={__name:"LoginSocial",setup(t){const{t:e}=Gt(),{handleGoogleLogin:n,handleFacebookLogin:r}=Nh();return(s,i)=>(me(),_e("div",xk,[V("div",Mk,[V("div",Lk,Se(Z(e).qrTitle),1),i[2]||(i[2]=V("div",{class:"qr-code"},[V("div",{class:"qr-pattern",id:"qrcode"},[V("div",{class:"qr-placeholder"},[V("br"),Ac(" QR Login"),V("br"),Ac(" Coming Soon ")])])],-1))]),V("div",Uk,[V("div",Fk,Se(Z(e).socialTitle),1),V("div",Bk,[V("button",{class:"social-button facebook-btn",onClick:i[0]||(i[0]=(...o)=>Z(r)&&Z(r)(...o))},i[3]||(i[3]=[V("img",{src:Dk,alt:"Facebook",class:"social-icon"},null,-1)])),V("button",{class:"social-button google-btn",onClick:i[1]||(i[1]=(...o)=>Z(n)&&Z(n)(...o))},i[4]||(i[4]=[V("img",{src:Vk,alt:"Google",class:"social-icon"},null,-1)]))])])]))}},qk=rs(jk,[["__scopeId","data-v-2df100bf"]]),$k={class:"login-page"},Hk={class:"container-main"},Kk={class:"container-right"},Wk={__name:"Login",setup(t){return(e,n)=>(me(),_e("div",$k,[n[0]||(n[0]=V("div",{class:"container-left"},null,-1)),V("div",Hk,[Pe(Ok)]),V("div",Kk,[Pe(qk)])]))}},Gk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2av04UURTGfzHR+C+uwcXEyj+F+gDGVmvtEAzEF9ClMD6CLOEFTGxUBGwUeq3MgoouoBYUqzYSC9TOlVIi11xzTMgE2HPP3JnZxPmSL9nszp7vfjsz55x7ZqFEiRJ5ohfoB0aBGWAWeCv0r6flsytAlS7DYWAYaAIbgFPSH/sGqAGVog2MAT8DFr8d23KmKnmbuAZ8j2AgyW/AUB4GDgKPMjCQ5CRwICsTPXJNu5y4BBzNIht9yNGEE7ZEO9rltFSACSdcAPbHMDJZoAknHI+RnaziG1Jb7goXAuuMS3AwTZ2wptiPwLktYp4HPhljfrXWmTGj4EqHG9Rnoi/G2KOWs9E2ivk+qhMGjLHboWdl2Cjk25Xdivh7gDWjxo0QI02jyHKAxrJR47VWoDdFdvkcYGTFqPFbuwXoNwo4+QGOKzROptBwyvvwb2ZII3JPoTGeUqOuMTKTUsTz5g7xb0WI/0RjZC6CkOdT4BJwTHgZeBYp9qzGyPtIYlny3X9l5EUXLNR1YENjZLoLFuo68LHGSD0w6G3gLHDKSP/dkUDNkdgF0We4WHgZoNunCViVNkAT0O8eY0G7E/VrO6INqp2WPI9oxN/AGs35kKA1ZdBfwIkIJnzvta7UvB4SuBKwsXoF7E1hYp+05hqtH5btbkjz6Kftpw0mzkhxi5qtkqjILFYrsi5d7QVgF9vDf3YRmAi4nBywChzCiKEAoc1ckw5hCrgjnJIUa93iXiUlJozCMXmfCPBT8cUCTTRjjUz/7eNbBZhoZfGIrkeKUV4mFmNO4pPwp/hhDiYexLycdsKgzGJjG1iNkZ0sdaaeYrSarNi+2JnrRCxDNWkztF2zk2PnZQRa6OPprVCVvUJdRjaNTX8YaMh7dTlG3YqXKFGC1PgDcfh0wGATYKgAAAAASUVORK5CYII=",zk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2Zuy8EQRzHPyIUEgpRiHgk5CoKveioHH+ISGgUKgVRKBQqGhKhFwqvOIWOQiJRiA6Vx3mcN0E2+Uk2G7v2MTOLzCeZ7N1vvjf3++78dnIzB5b/STewBdxJywFZBVqjjAEfPm00gdYo3QGJfbVsDK1xtkIktxlDa5xCiORuY2iNEya5mxha4+QilEsUrXGyIZLriqFNhdGAxEYSaFMhK2VRkLYZcHeDtMXSvwhcA7tAC3+IWmAYOPlmpnb45ZTI3V8C3gJKrqArgUZgEjgEnkM8wEnbjA4THcCTgeQ/gHNgCCjVYWTPgIFjYACo1GWiWbOBI6AfqJKr8+AP6jAyriH5e2Ad6AGq5Wf+las/LzOjDGd9P02QcJvPuGXSNwU8+nx2QqWRTs/gmYhGioCLCPqM6/WTrJRKmPd8ETGMvEfQ43k/iyJuUjaS/y9GLlUZWUjZyJwqI+0JjSTVt6GQ/ZSMHKCYvpRKq1e1kXI55TA5IwWgAg1MGzYyjSYaXEuh7tI6k52jNjIBRjIRjfjpHZowRJQSihM3hjWCnRE92NLClpYebGlhS0sPtrSwpaWHB095OQdpfPNXw1f81RN/+WEcYyx7EliV+IYn7pztIntvdzz3wzjGqAFW5MzLuda5Nl/rsk1dA+ol3gpsywzkXHG/cSz8ZT4BbD/BpvSHvswAAAAASUVORK5CYII=",Qk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABfklEQVR4nO2ZvUrEQBRGj1iIFqKNhRZWNlZaKFqJnVtZbaGlPsCiT2CpNmJppY0oeQNfQHAt7LQQbRbcUrAQF2RHAjcQQpJ1Y35m3Hvgg0D+7mFyMxMCiuIkE8CxxN92kjngETCSZ2Aex9gA3kMSQT6ATRyhAXzHSATpAgfAEJYyAlykCERzDYxhGTNAsw+JIPdybpRd4Arw5EUxXobECvCWQSKIf+5q6HpLMcccFS2xDXz+QSLIF7Aj16zH7PdHphCGgcMcBKI5A7bKEpkEbgqQCD9qhYv4k9xTgRImIV4Zk5xTIo0ek5z1IqPAZYUCRtKUWjIxDdxZIGEkD8BsvxLLQNuC4k0kbant17xaULRJyMtAiiwC5/K2aFlQfEtq8WtaICOeBSJe1uJVhAEckSTqKtIDHRH00UKbPQ3tEbRH0B5JQ3sE7RGc6hEvIbeuLRpLX8afWiBykofIuvwuq0qiC6yRE/tApwKJDrBHzkwBNfmCKyM1uaeiKMo/5AfqJDSwWMSe7AAAAABJRU5ErkJggg==",Yk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADC0lEQVR4nO2ZW4gPcRTHPwi1tR7kErubzT2LTSi3LPuilPAiSVmpfdlc2pTaB/ZBER5cV3kSi1XKiyha64UIRRbJNS/u97DrsqNTZ/Vr+v93fjPzmzWb+dSpf2d+c+Z85//7nTm/GcjIyMj4XxkFVAENQDPwBHgP/FKT34/1mIxZBYwkJRQDW4C7gBfRWoHNQNG/EDAeOKZ32nNkEqsRGNsdAgqAeqDdoQC//QT2AIVJiZgQcwqFtQdAuWsRi4Fv3SjCU5NrLnIlYrn+3d0twjOm2rK4IioTXg+21gbMiypiKPAiBSI8tVfAsChCTqcgec9np8KKmJ+CpL08VhFGyIUUJOzlsXNheqaOFCTs5THJrdRGSG0KkvUCbENPXeRelEX/MAWJehbtSyCfU5CoF2AfbYT8SEGinkXbEsjrBKuNlPWNwAzdSPXXdl0q5UJgh06boFiy2wykNQERR3UzZkNv7XhvdxHvjk2gww4FvIvRhvcDtueJKzvJQNY4EvEWmEJ8anPEXm1z4iBtm+OuhwW445ARu01ztKIxphB5MeGSAdrGd643aybG3BXOxD27NPbesCfujijiTY5Ym/SF3VlgiPpKgIvAI6DGGFujvmYd00mFxr8RVojU93sRhFz3xSnzHd+n/iM+v7zsK+qiOpWoT3atoRkHfIoppNx3/KD6j/v8I9RMX5Nv6y2+l0RkdkgxUnZ7GefL723AB+CyMV1GAzf1WVNnjK/TGHJsjOGfE3VqmUw3qoaNiXjXbPVNzcgMB1oshZzALYU6pST2LBcB+wBrdToEiZEm0BUHNOYlHDMQeGrRoU5zcK11xuvTSTimzPIFhSzwpRGv0RfYqdf5DawgAZryJL4fWK9fpK4Z/pMh72a5sZ1o169bzqnMIUDWzErfOCm71cAXHdOhc1zK61x9ZhToQi7VNVUFDAau6Dn3dROWCLd8nWiD0Xbkolj7JNtn0Xejz5tKgrToR836kN/9pINdos+Bq1osvqrAZ8B54Iyuh05R0pv1WCbrv/xc+7GMjIwM/vIH8BXcFZyyIHYAAAAASUVORK5CYII=",Xk="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2Zvy4EURSHP1QkxJ9+Ezo6FbWIREEkomC7FZ5hC5IteIKthKcQKtmohMIbaHgFihUJI0fuNJPZQfbeM3M5X/Jr5syffJlz7+TeAcMwymIAaABXLg13LDoOgSSTAyJjCHjJEXl2tWio5UikkVo0LBaISK3SDAJ14K5AQvIB3AI7VRz8c8D9NwJ5kWtmqQgbPQb2TyMTwHrZEsvAax8Sad6A1bIkZvp8E9nIvaa1JWSQXnuUSNPRFlkJIJFmSVPkIqDIuZbEiKcB3itdYFhrpgolkWi2156CyK6GSFNBpKkh0lIQaZnIL7A3grVWGKy1sNYKg7UW1lph+BOtNeaWo6FFOu5ZQZgHHhQkEpdHYCHEGqSrKJG4yDP3fUlslSCQZLLpQ+SsAiKnPkTqFRDZxhOyN9sGTpTTBtZ8SfxbRt0EURQ5p/JMAO8F/S61cSLhskBEtlujoQY89fhaR/UzVJgCjoEblyNg8qtiGAbafAJWJByq5iGepgAAAABJRU5ErkJggg==",Jk={class:"container-mid-nav"},sg="activeNavItem",Zk={__name:"NavMid",setup(t){const e=Xa(),n=lT(),{getItem:r,setItem:s}=Gt(),i=Ce("home"),o={home:"/",profile:"/profile",friend:"/friend",mess:"/mess",notification:"/notification"},l={"/":"home","/profile":"profile","/friend":"friend","/mess":"mess","/notification":"notification"},c=u=>{i.value=u;const d=o[u];d&&n.path!==d&&e.push(d)};return Zr(()=>{const u=l[n.path];if(u)i.value=u;else{const d=r(sg,"home");i.value=d}}),Br(i,u=>{s(sg,u)},{immediate:!0}),Br(()=>n.path,u=>{const d=l[u];d&&d!==i.value&&(i.value=d)}),(u,d)=>(me(),_e("div",Jk,[V("button",{class:et(["nav-item",{active:i.value==="profile"}]),onClick:d[0]||(d[0]=p=>c("profile")),"data-tooltip":"Profile"},d[5]||(d[5]=[V("img",{src:Gk,alt:"Profile",class:"nav-icon"},null,-1)]),2),V("button",{class:et(["nav-item",{active:i.value==="friend"}]),onClick:d[1]||(d[1]=p=>c("friend")),"data-tooltip":"Friends"},d[6]||(d[6]=[V("img",{src:zk,alt:"Friends",class:"nav-icon"},null,-1)]),2),V("button",{class:et(["nav-item",{active:i.value==="home"}]),onClick:d[2]||(d[2]=p=>c("home")),"data-tooltip":"Home"},d[7]||(d[7]=[V("img",{src:Qk,alt:"Home",class:"nav-icon"},null,-1)]),2),V("button",{class:et(["nav-item",{active:i.value==="mess"}]),onClick:d[3]||(d[3]=p=>c("mess")),"data-tooltip":"Messages"},d[8]||(d[8]=[V("img",{src:Yk,alt:"Messages",class:"nav-icon"},null,-1)]),2),V("button",{class:et(["nav-item",{active:i.value==="notification"}]),onClick:d[4]||(d[4]=p=>c("notification")),"data-tooltip":"Notifications"},d[9]||(d[9]=[V("img",{src:Xk,alt:"Notifications",class:"nav-icon"},null,-1)]),2)]))}},Ks=rs(Zk,[["__scopeId","data-v-daa4333c"]]),eN={id:"container-menu-home"},tN={class:"menu-buttons"},nN={class:"menu-button"},rN={class:"menu-button"},sN={__name:"HomeMenu",setup(t){const e=Xa(),{t:n}=Gt(),r=()=>{e.push("/status")};return(s,i)=>(me(),_e("div",eN,[V("div",tN,[V("button",{class:"menu-button",onClick:r},Se(Z(n).actionButtons.upload),1),V("button",nN,Se(Z(n).actionButtons.discover),1),V("button",rN,Se(Z(n).actionButtons.settings),1)])]))}},Ws=rs(sN,[["__scopeId","data-v-8f26325a"]]),iN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGYklEQVR4nN1Za2wUVRT+eIiiIvgANT7AIPgAFK3svVsaa3xg6Z67tcSKrwhiJIqJGhMVYmS1na2gIQRiVAzMtmg0NKIYf6gQ0BgDiWLEgD/ERBQUpLNtqQjKc83Z2W1np3dmpyy1W05y/8zee875zj2vexboAVq2oHWoaSRjppH8KRFPpuxl/Zowkq+tjO0Zgb5AZm3rhLTSHQBylxlP7m2sbwmjmGlFfPdwM2797gWiA4xhtSZeaRuFYiXTsJY6XOmYGU++2lDbMq6xvnlswki+mDCsww4wq1CMFIulBqYt3QlkrnuPaSRndbqYdSgRaxuGYiOztnmMw9pHX4/tPdu9p6kpNSAXbMtkFBs11LaMc8TBgVQq1U+3zzSsHR2A66xbUWy0fKE1JBG3jmSVXF7XOtK9p6Fu72jTsI777SkKShjW6kx87GxatHOwJqNt6rg1w9qCYqWmWGpQos66pbG+/Xznd7O+udKMJ3e7UrBCX6KG+uQUp8tlbqMOfYma+IYMa5cjJbeYcet+FCOVYPZpEpEHJGiNhHra+VuDkax23MR+Dnb+Xo7ygQK0VILWCqiZ16JmUK8BKEV0iAA9I6B+k1Cp7AqDrs7uScST8zvdKflO9rtApNJ5RoD+EFDPl6Pq/yuQEpFLBGihBO1zKmMv2lcCuqATSPOjjht5JPs9BHWFAO13nxegvyTUosmgy3sQQNUEAWqQoENdFVD/CtAKgcgY55lYLNU/EW++16xrme4ukDYY9aYAHdQY5LCAercUlRNPGoAw6DYB+lRCHdcAaBGg+CRUXnSi/MtQMVxAvSSgmrsCSt/SuhBoCgBtp5CXJNSVEvStjrkE/SJAT5ajpks/5SR+RKWLpGGt5oLoL69msAQ9JqG262WqLZOgxnULRAiR6/UWoqQATa9BzYAgfPiV6IiR+cGkx/pLRKol1B7N7bSVgsKBQUgoy8MqzOxngehTbMH8QKwq7q0ySwVJ5WFEawTUN17yJdTfYURv7iaIdGBv9nCv3RJqXhki5/qCqW2dsDzeMt4fQM1QCXpWQu3yUH6zK8m0h6BkIBACdJTdiH8TiJRIqJX8TXND+yVo2SRMHZvP4l0BVF9sBzq1aQx1TIA+kYjebutAUzk7+oLRgQhD3ecWXIq7RkuoJRLqgJdgT0vl8KmcyIbhNKtL5TJttMpr3Od8wdggKJkPhJPCqB4hoF72jiXaEEI04kqZ/eyKTus93MdinszbT7ZANJrrZlyYIyEIqO9dSnwcJJCZSkBnCtAcTgAegH4MIzqLlwRt804eNId5IQBxXyagGl18tmuApK+3WYJiXKyCpkwBNU1AbfTJNm4ZG/kMnw0ioRxVwwRoLvdlGn4MpGqUAK3yCOSDEvQGF8duFNLJAuojjhl9HPFvKvDQIYzKkQK0WNebZfh9mNMaZRq5pZyndQck1AcCURFEOO/jQNRYrj04j0iJBL0voI7oDCyg3nL3djkkMeU8AXpBV1kz6ysJUl4uYYPQdcadwekDpl8mIWzwON/O6Tq4y2eCSiLykH+Q5lZ4tqKAas0fI7TPmaazsgTU1jxnvwgMQGelMBQJqC89mPPNzeMONfcm6JCA+s4R3Ftz3YTB8Bk1L9Ml6ABvcmWogoB0UBjRG+xi1dVvXQocDkFVcZA6bnBxCJG7dUXQv6KrmQUDuQlVl+la9TyJgR9F02wlcoHwN7uzdRa0jhv7R4LeLkX0KqesgoFwkeLHFNeUECouDZIYMjd1j4NHFyD292jUVtx+nEkoQ0BdqNejcCDrHNZ60G9vBSpODyNyp7veeAFh4iaT3S9fFyEKBeJMgcys2wzyAAnOQxUMZP0pAUTkulbfBSKhPj8lgAiozxxKxIN2qScXSKw/yy40Rta4W5IQ6InrcMdZPQ1Eeo6GaO0JAFEzdEO5zEgo0FCuu0DK/Id1rMuMbgOxwdCNAvSevpVOv53NMCLjCwXC7bjX+FRAHWEdWBcUSvy4kaAF+mlHWsmv7dY+d6yZD0j+6YxawrJxsimEinPs1t1r/kQ/CKjZ5Sg/wxsITxJJ2eC1PP5k9+L2Bz1N3JII0MM+b5X0/x329L5DwWUC6nHv2S5tY5699qePAJXZbbdfa+69vNyy1yg7dMv/VuneMK/XiKcyXokhO171HRqgyIiH2xLqOQnawf+n8JA638C7EPoPVcmpxof96UMAAAAASUVORK5CYII=",ln=Ce(!1),dc=Ce("");function av(){const{user:t}=El(),{currentLanguage:e}=Gt(),n={EN:{"upload-failed":"Failed to upload file. Please try again.","post-failed":"Failed to create post. Please try again.","fetch-failed":"Failed to load posts. Please try again.","delete-failed":"Failed to delete post. Please try again.",unauthorized:"You must be logged in to perform this action.","file-too-large":"File size must be less than 10MB.","invalid-file-type":"Invalid file type. Only images and videos are allowed."},VN:{"upload-failed":"Tải file lên thất bại. Vui lòng thử lại.","post-failed":"Tạo bài viết thất bại. Vui lòng thử lại.","fetch-failed":"Tải bài viết thất bại. Vui lòng thử lại.","delete-failed":"Xóa bài viết thất bại. Vui lòng thử lại.",unauthorized:"Bạn phải đăng nhập để thực hiện hành động này.","file-too-large":"Kích thước file phải nhỏ hơn 10MB.","invalid-file-type":"Loại file không hợp lệ. Chỉ cho phép ảnh và video."}},r=g=>{dc.value=n[e.value][g]||g},s=()=>{dc.value=""},i=g=>g.size>10*1024*1024?(r("file-too-large"),!1):!g.type.startsWith("image/")&&!g.type.startsWith("video/")?(r("invalid-file-type"),!1):!0,o=async g=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");if(!i(g))throw new Error("File validation failed");try{const _=`${Date.now()}_${g.name}`,T=ng(rg,`uploads/${t.value.uid}/${_}`),S=await $1(T,g);return{url:await H1(S.ref),fileName:_,fileType:g.type,fileSize:g.size,storagePath:S.ref.fullPath}}catch(_){throw console.error("File upload error:",_),r("upload-failed"),_}},l=async g=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{ln.value=!0,s();const _={userId:t.value.uid,userEmail:t.value.email,caption:g.caption||"",mediaUrl:g.mediaUrl||"",mediaType:g.mediaType||"",fileName:g.fileName||"",createdAt:lc(),updatedAt:lc(),likes:0,comments:0};return{id:(await VP(Kp(Wo,"posts"),_)).id,..._}}catch(_){throw console.error("Create post error:",_),r("post-failed"),_}finally{ln.value=!1}},c=async(g,_="")=>{try{ln.value=!0,s();const T=await o(g),S={caption:_,mediaUrl:T.url,mediaType:T.fileType,fileName:T.fileName};return await l(S)}catch(T){throw console.error("Create post with file error:",T),T}},u=async(g=10)=>{try{ln.value=!0,s();const _=wP(Kp(Wo,"posts"),TP("createdAt","desc"),IP(g)),T=await NP(_),S=[];return T.forEach(P=>{S.push({id:P.id,...P.data()})}),S}catch(_){throw console.error("Get posts error:",_),r("fetch-failed"),_}finally{ln.value=!1}},d=async(g,_=null)=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{if(ln.value=!0,s(),_)try{const T=ng(rg,_);await K1(T)}catch(T){console.warn("Failed to delete file from storage:",T)}return await DP(Xc(Wo,"posts",g)),!0}catch(T){throw console.error("Delete post error:",T),r("delete-failed"),T}finally{ln.value=!1}},p=async(g,_)=>{if(!t.value)throw r("unauthorized"),new Error("User not authenticated");try{ln.value=!0,s();const T=Xc(Wo,"posts",g),S={..._,updatedAt:lc()};return await OP(T,S),!0}catch(T){throw console.error("Update post error:",T),r("post-failed"),T}finally{ln.value=!1}};return{loading:Be(()=>ln.value),error:Be(()=>dc.value),uploadFile:o,createPost:l,createPostWithFile:c,getPosts:u,deletePost:d,updatePost:p,clearError:s,validateFile:i}}const oN={id:"container-home-feed"},aN={key:0,class:"loading-state"},lN={class:"loading-text"},cN={key:1,class:"error-state"},uN={class:"error-text"},hN={key:2,class:"empty-state"},dN={class:"empty-text"},fN={key:3,class:"posts-container"},pN={class:"post-header"},gN={class:"user-info"},mN={class:"user-details"},_N={class:"user-email"},yN={class:"post-date"},vN={key:0,class:"post-actions"},EN=["onClick","disabled"],AN={key:0,class:"post-media"},wN=["src","alt"],TN=["src"],IN={key:1,class:"post-caption"},RN={class:"post-footer"},bN={class:"post-stats"},SN={class:"stat-item"},CN={class:"stat-item"},PN={key:4,class:"mobile-nav-controls"},kN=["disabled"],NN={class:"page-indicator"},ON=["disabled"],DN={__name:"HomeFeed",setup(t){const{getPosts:e,deletePost:n,loading:r,error:s,clearError:i}=av(),{user:o}=El(),{t:l,currentLanguage:c}=Gt(),u=Ce([]),d=Ce(null),p=Ce(0),g=Ce(3),_=Be(()=>Math.ceil(u.value.length/g.value)),T=Be(()=>{const W=p.value*g.value,H=W+g.value;return u.value.slice(W,H)}),S=async()=>{try{i();const W=await e(20);u.value=W,p.value=0,console.log("Posts loaded:",W)}catch(W){console.error("Failed to load posts:",W)}},P=()=>{p.value<_.value-1&&p.value++},x=()=>{p.value>0&&p.value--},M=async W=>{if(!O(W)||d.value)return;const H=c.value==="EN"?"Are you sure you want to delete this post?":"Bạn có chắc chắn muốn xóa bài viết này?";if(confirm(H))try{d.value=W.id,await n(W.id,W.storagePath),u.value=u.value.filter(A=>A.id!==W.id),T.value.length===0&&p.value>0&&p.value--,console.log("Post deleted successfully:",W.id)}catch(A){console.error("Failed to delete post:",A)}finally{d.value=null}},L=W=>{if(!W)return"";try{return(W.toDate?W.toDate():new Date(W)).toLocaleDateString(c.value==="EN"?"en-US":"vi-VN",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(H){return console.warn("Date format error:",H),""}},O=W=>o.value&&W.userId===o.value.uid;return Zr(()=>{S()}),(W,H)=>(me(),_e("div",oN,[Z(r)?(me(),_e("div",aN,[H[0]||(H[0]=V("div",{class:"loading-spinner"},"⏳",-1)),V("div",lN,Se(Z(l).loading||"Loading..."),1)])):Z(s)?(me(),_e("div",cN,[V("div",uN,Se(Z(s)),1),V("button",{class:"retry-button",onClick:S},Se(Z(l).retry||"Retry"),1)])):u.value.length===0?(me(),_e("div",hN,[H[1]||(H[1]=V("img",{src:iN,alt:"No posts",class:"empty-icon"},null,-1)),V("div",dN,Se(Z(l).noPosts||"No posts yet"),1)])):(me(),_e("div",fN,[(me(!0),_e(hn,null,FE(T.value,A=>(me(),_e("div",{key:A.id,class:"post-item"},[V("div",pN,[V("div",gN,[H[2]||(H[2]=V("div",{class:"user-avatar"},null,-1)),V("div",mN,[V("div",_N,Se(A.userEmail),1),V("div",yN,Se(L(A.createdAt)),1)])]),O(A)?(me(),_e("div",vN,[V("button",{class:"action-btn delete-btn",onClick:y=>M(A),disabled:d.value===A.id},Se(d.value===A.id?"⏳":"🗑️"),9,EN)])):Nn("",!0)]),A.mediaUrl?(me(),_e("div",AN,[A.mediaType.startsWith("image/")?(me(),_e("img",{key:0,src:A.mediaUrl,alt:A.caption,class:"media-image"},null,8,wN)):A.mediaType.startsWith("video/")?(me(),_e("video",{key:1,src:A.mediaUrl,class:"media-video",controls:""},null,8,TN)):Nn("",!0)])):Nn("",!0),A.caption?(me(),_e("div",IN,Se(A.caption),1)):Nn("",!0),V("div",RN,[V("div",bN,[V("span",SN,"❤️ "+Se(A.likes||0),1),V("span",CN,"💬 "+Se(A.comments||0),1)])])]))),128))])),u.value.length>g.value?(me(),_e("div",PN,[V("button",{class:"nav-control-btn",onClick:x,disabled:p.value===0}," ◀ ",8,kN),V("span",NN,Se(p.value+1)+" / "+Se(_.value),1),V("button",{class:"nav-control-btn",onClick:P,disabled:p.value>=_.value-1}," ▶ ",8,ON)])):Nn("",!0)]))}},VN=rs(DN,[["__scopeId","data-v-31318992"]]);function Gs(){const t=Ce(1),e=Ce(0),n=Ce(0),r=Ce(!1),s=Ce(!1),i=()=>{s.value=window.innerWidth<=480},o=()=>{if(!s.value)return"";switch(t.value){case 0:return"show-left";case 1:return"";case 2:return"show-right";default:return""}},l=x=>{if(!s.value)return;const M=x.touches[0];e.value=M.clientX,n.value=M.clientY,r.value=!0},c=x=>{if(!s.value||!r.value)return;const M=x.touches[0],L=Math.abs(M.clientX-e.value),O=Math.abs(M.clientY-n.value);L>O&&L>30&&x.preventDefault()},u=x=>{if(!s.value||!r.value)return;const M=x.changedTouches[0],L=M.clientX-e.value,O=M.clientY-n.value;Math.abs(L)>Math.abs(O)&&Math.abs(L)>50&&(L>0?d():p()),r.value=!1},d=()=>{t.value=t.value>0?t.value-1:2},p=()=>{t.value=t.value<2?t.value+1:0},g=x=>{x>=0&&x<=2&&(t.value=x)},_=()=>{t.value=1},T=()=>{if(!s.value)return;const x=document.querySelector(".home-page, .login-page");x&&(x.addEventListener("touchstart",l,{passive:!1}),x.addEventListener("touchmove",c,{passive:!1}),x.addEventListener("touchend",u,{passive:!0}))},S=()=>{const x=document.querySelector(".home-page, .login-page");x&&(x.removeEventListener("touchstart",l),x.removeEventListener("touchmove",c),x.removeEventListener("touchend",u))},P=()=>{const x=s.value;i(),x!==s.value&&(t.value=1,s.value?T():S())};return Zr(()=>{i(),s.value&&T(),window.addEventListener("resize",P)}),_u(()=>{S(),window.removeEventListener("resize",P)}),{currentView:t,isMobile:s,getContainerClass:o,swipeToPrevious:d,swipeToNext:p,swipeToView:g,resetToMain:_}}const xN={class:"container-left"},MN={class:"container-main"},LN={__name:"Home",setup(t){const{getContainerClass:e}=Gs();return(n,r)=>(me(),_e("div",null,[Pe(Ks),V("div",{class:et(["home-page",Z(e)()])},[V("div",xN,[Pe(Ws)]),V("div",MN,[Pe(VN)]),r[0]||(r[0]=V("div",{class:"container-right"},null,-1))],2)]))}},UN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2aTUsCQRjHf6e0Q2FQ2i0/TChBkUezzxBF38LsUBRE1z5CJeU3kOicL3Xq5RLVOVOcWHiEkFXXdcbdWfrDHxZWd57fzuzsPM8s/Cu6WgByQAkoA3XgC2iJneOanHN+swkkCIliwDZQATqAGtPOf26Aglxr6poF9oE3H8EP8iuwB8SnBbEGPGkE6PcjkDUJ4HT9sUGAfl9Iz2tVCrifIoQS3wFJXRBp6W4VkJsSw0RakmlUBewnYNkvRDyg4aSGDDNfU/RZCIJXfT7xM8WqkDrjFcLpvobGhnvSdb1Hry/Nfc13UDeIAna99MarBSAvox78bc0NmgJRwNYwkIpFIOVh+UTHIpA2MO8GkjPQmEkQBay7gRxaCHLgBlK2EOTSDaRpIUjdDeTTQpB3N5CWj+BMSXn0d6RBPqMytBoWgtQiPf2WLAQpRnqJkrBs0fgzaNHo6NYikGuGqGARSD4qqe4MI7RnAcjOKIher9RDDNIcp+KY1XwHdbkLrDKmTkMQuOrzET4Uk8KxComrXh7wQVoM0bZCigmVNpgGe3EDWEGTkgENs6psNhnZDO1OCeLc9N57xvBQq/uZYv0qJqX9F40Az/LGDuQLiJhUxctSix03+LasYvOTTK265eQGG1LGvJJ8+uPPRzXO8YOkp0VJiua0R/EvwqFfI80Y7+tuRdkAAAAASUVORK5CYII=",FN="/assets/sound-1ShJEH_O.gif",BN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2Y30/TUBTH+6Zv6l+g/kP9N/yR+Mx+dQM0waRsazUxEbq129624cs0sh9ITOY6BR42UUCFBBYV2Iasa5GNbsecwRKVIWy7ncV4kvPS3tt+er6355x7Keq8Gm17BoN0qhdA9vnuQJz+ZwHpn9wIKLofiY2OJt0v1J+i+dd+jJPMwgqg1IGoW1jhPyCYJoK2cV+9vKcTk3dHOwCb21cjBujkpFKhpBADXC9WgOGlIjHAYT40k323RgxQXlyF4QehBDFA67jvlm8qXiUFKEQTqtU9eYMYoMsrXnZ4RA1l1vNPAdJCT67nYrBRUsDuEbWh+48vUSSN8Uj3JiPTmqpUoCkHu4ZrZoOgViswEZ7WHB7/CEXaXC7xIsNJK8lsXtfKX6EpB84OJwdBK29CPJPTGV5axmdRRtjQmHiN4cStpJzXMZJ6LnYmWTFyiUxOd3Dilp0VrlJGGr7AyQWWUO5CSQGt+Bnqyy+hMRcGyIgtb8yHW9fwHo5BWXGO4XBtu8PzFxycNMJ4RTUUm91b2/x27E/Fa3gPxzg8fhfOGQhcG5Dx+kftXlE7DRDH4McMDBDXoZOTVoRIXCuUqqfmPJRYiExrTl5axrmGwtnZieuMV9pOZd/q3SbnZDavO7zStmGQmBqcfOBD6nX3cEobUs7rTqPSzGGijmv9lrlJTNSceJconGXs0ZXDUtd5zalKBWprc9CYj7RSTG31DajK7olrknips7DCbf+TxLFmQa0qUF+aBUj7Oibpg/czHUGFqYRqYYWbxABHH4Ze/N5uff/yEZqydHqpy4iwv7HYod0KpgxrWFHCbpuF2qescQ2r1e072Dlq+TEavbZb++v51jNw+4DbCOLbTlxzrXrbIyC88rcaB8O2nShTz3DpX6U2BLCxEO0bsLEQJQ9o+qMP2oyHR7TZj9/o83CAyZodkDbzITplEvsBq2Sww6XYVGcAAAAASUVORK5CYII=",jN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC0ElEQVR4nO2ZS2jUUBSGPx+l4hOh44yKC6sgiIrgpqIbURF3uhAEQVdWRMStC0FxVaTTEe1OcCFIQUHE11JFcOFjY20VBHXhG3xW1IqPkQN/4BLSmWSSZhKZD8JMknvvnJ//5Nx7M9CiRYv/hZnAAeAJcJMcsgQ4CYwAVR2PyQkTgA3AOeC3I8A7zJlMMwPoBoYDgvcOc2YWGWUR0AN8dAJ+BfQDL31CTpDB9NkEXAX+OIFeB7YAJWBQ117o86+emUwwXekz5AQ/CpwBVqhNwRHxCOjV92tkgE6lzwdHwGvgCNDhtCv4RMwHnul8cxPjZ21A9bkP7AQm+9oWfCIsvbbq3OaPiWkHP0WBPvSljwnqGqNPkAjjhq7tb3b6vFH6WKBEFLFMD/iIZvbU0udXQPq01ek7lgjjlK4fJ4X08YKw46cErQ45Ri0Rs4Fv41ly5ylV3jsC3iqlrMKQgAjjoO5dIaX06ZY7JChiEvBc923SjE270udBQPqsaXDMeiKMbUmV3KD0eaf0WRBj3DAijFtqs48Y9Psmr3tyxdwhIRGDNcrxSrX5rNVww3jLgapSainxCSvCOK12FWJS0iDfNaCtTAdiCIoiogD80G8ubvD3AgftUS33BF2W9Uk/Ex6H1PZSzNgTFRRVhC0gvX3HxgTjjyUoqghju9PeNl3jTj1BjYgwbqvPXlKmCJR9ggYiPNguq9Tnk3aQTaFDk+cXp2xHcQJtc62fbWmbzhzgvAIyZ6I4OypHO8kI5s5XBbU8ZJ/DEn+RjNEbwZU2573VejJGUQUgjCs7JGI4rZIblXJIV+6o3R4ySjGEK11OyZ1GhinXceWs7h8j4xRruDJXO03b9ywkB/SN4cpRXb9ATigFuNKuty4mZB05os/nyi6dD2W15IZ15a6E7CaHVJx3AFW9G55KDik5y/2q9jO5pSIRuSm5tVx5qv/MW7RoQbr8A2pLKcu/QDhRAAAAAElFTkSuQmCC",qN={id:"container-create-status"},$N={class:"user-info"},HN={class:"username"},KN={key:0,class:"upload-empty"},WN={key:1,class:"file-preview"},GN=["src"],zN=["src"],QN={key:2,class:"audio-preview"},YN={class:"audio-controls"},XN=["src"],JN={key:3,class:"file-info"},ZN={class:"file-name"},eO={class:"controls"},tO=["disabled"],nO={class:"input-wrapper"},rO=["placeholder","disabled"],sO=["disabled"],iO={key:0,src:BN,alt:"Loading",class:"control-icon loading"},oO={key:1,src:jN,alt:"Post",class:"control-icon"},aO={key:0,class:"error-message"},lO={key:1,class:"success-message"},cO={__name:"StatusCreation",setup(t){const e=Xa(),{t:n,currentLanguage:r}=Gt(),{createPostWithFile:s,loading:i,error:o,clearError:l}=av(),c=Ce(null),u=Ce(""),d=Ce(null),p=Ce(""),g=Ce(""),_=Be(()=>!!d.value&&!i.value),T=Be(()=>{var H;return(H=d.value)==null?void 0:H.type.startsWith("image/")}),S=Be(()=>{var H;return(H=d.value)==null?void 0:H.type.startsWith("video/")}),P=Be(()=>{var H;return(H=d.value)==null?void 0:H.type.startsWith("audio/")}),x=()=>{var H;i.value||(H=c.value)==null||H.click()},M=H=>{const A=H.target.files[0];A&&(d.value=A,p.value&&URL.revokeObjectURL(p.value),p.value=URL.createObjectURL(A),l())},L=()=>{i.value||W("/home")},O=async()=>{if(!(!d.value||i.value))try{l(),g.value="",await s(d.value,u.value),g.value=r.value==="EN"?"Post created successfully!":"Tạo bài viết thành công!",setTimeout(()=>W("/home"),1500)}catch(H){console.error("Failed to create post:",H)}},W=H=>{p.value&&URL.revokeObjectURL(p.value),d.value=null,u.value="",g.value="",l(),e.push(H)};return(H,A)=>(me(),_e("div",qN,[V("div",$N,[A[1]||(A[1]=V("div",{class:"avatar"},null,-1)),V("span",HN,Se(Z(n).me),1)]),V("div",{class:et(["upload-area",{disabled:Z(i)}]),onClick:x},[d.value?(me(),_e("div",WN,[T.value?(me(),_e("img",{key:0,src:p.value,alt:"Preview",class:"preview-media"},null,8,GN)):S.value?(me(),_e("video",{key:1,src:p.value,class:"preview-media",controls:""},null,8,zN)):P.value?(me(),_e("div",QN,[A[3]||(A[3]=V("div",{class:"audio-waveform"},[V("img",{src:FN,alt:"Sound",class:"voice-icon"})],-1)),V("div",YN,[V("audio",{src:p.value,class:"audio-player",controls:""},null,8,XN)])])):(me(),_e("div",JN,[A[4]||(A[4]=V("div",{class:"file-icon"},"📄",-1)),V("div",ZN,Se(d.value.name),1)]))])):(me(),_e("div",KN,A[2]||(A[2]=[V("img",{src:UN,alt:"Upload",class:"plus-icon"},null,-1)]))),V("input",{type:"file",ref_key:"fileInput",ref:c,accept:"image/*,video/*,audio/*",style:{display:"none"},onChange:M},null,544)],2),V("div",eO,[V("button",{class:"control-btn close-btn",onClick:L,disabled:Z(i)},"×",8,tO),V("div",nO,[Sn(V("input",{type:"text","onUpdate:modelValue":A[0]||(A[0]=y=>u.value=y),placeholder:Z(n).statusPlaceholder,class:"caption-input",disabled:Z(i)},null,8,rO),[[Ui,u.value]])]),V("button",{class:et(["control-btn post-btn",{disabled:!_.value||Z(i)}]),onClick:O,disabled:!_.value||Z(i)},[Z(i)?(me(),_e("img",iO)):(me(),_e("img",oO))],10,sO)]),Z(o)?(me(),_e("div",aO,Se(Z(o)),1)):Nn("",!0),g.value?(me(),_e("div",lO,Se(g.value),1)):Nn("",!0)]))}},uO=rs(cO,[["__scopeId","data-v-acef362c"]]),hO={class:"container-left"},dO={class:"container-main"},fO={__name:"Status",setup(t){const{getContainerClass:e}=Gs();return(n,r)=>(me(),_e("div",null,[Pe(Ks),V("div",{class:et(["home-page",Z(e)()])},[V("div",hO,[Pe(Ws)]),V("div",dO,[Pe(uO)]),r[0]||(r[0]=V("div",{class:"container-right"},null,-1))],2)]))}},pO={class:"container-left"},gO={__name:"Profile",setup(t){const{getContainerClass:e}=Gs();return(n,r)=>(me(),_e("div",null,[Pe(Ks),V("div",{class:et(["home-page",Z(e)()])},[V("div",pO,[Pe(Ws)]),r[0]||(r[0]=V("div",{class:"container-main"},null,-1)),r[1]||(r[1]=V("div",{class:"container-right"},null,-1))],2)]))}},mO={class:"container-left"},_O={__name:"Friend",setup(t){const{getContainerClass:e}=Gs();return(n,r)=>(me(),_e("div",null,[Pe(Ks),V("div",{class:et(["home-page",Z(e)()])},[V("div",mO,[Pe(Ws)]),r[0]||(r[0]=V("div",{class:"container-main"},null,-1)),r[1]||(r[1]=V("div",{class:"container-right"},null,-1))],2)]))}},yO={class:"container-left"},vO={__name:"Mess",setup(t){const{getContainerClass:e}=Gs();return(n,r)=>(me(),_e("div",null,[Pe(Ks),V("div",{class:et(["home-page",Z(e)()])},[V("div",yO,[Pe(Ws)]),r[0]||(r[0]=V("div",{class:"container-main"},null,-1)),r[1]||(r[1]=V("div",{class:"container-right"},null,-1))],2)]))}},EO={class:"container-left"},AO={__name:"Notification",setup(t){const{getContainerClass:e}=Gs();return(n,r)=>(me(),_e("div",null,[Pe(Ks),V("div",{class:et(["home-page",Z(e)()])},[V("div",EO,[Pe(Ws)]),r[0]||(r[0]=V("div",{class:"container-main"},null,-1)),r[1]||(r[1]=V("div",{class:"container-right"},null,-1))],2)]))}},wO=[{path:"/",component:Wk,meta:{requiresGuest:!0}},{path:"/home",component:LN,meta:{requiresAuth:!0}},{path:"/status",component:fO,meta:{requiresAuth:!0}},{path:"/profile",component:gO,meta:{requiresAuth:!0}},{path:"/friend",component:_O,meta:{requiresAuth:!0}},{path:"/mess",component:vO,meta:{requiresAuth:!0}},{path:"/notification",component:AO,meta:{requiresAuth:!0}}],lv=oT({history:xw(),routes:wO});lv.beforeEach(async(t,e,n)=>{const r=t.matched.some(l=>l.meta.requiresAuth),s=t.matched.some(l=>l.meta.requiresGuest),{isLoggedIn:i,isInitialized:o}=El();o.value||await new Promise(l=>{const c=Br(o,u=>{u&&(c(),l())})}),r&&!i.value?n("/"):s&&i.value?n("/home"):n()});tw(ak).use(lv).mount("#app");
