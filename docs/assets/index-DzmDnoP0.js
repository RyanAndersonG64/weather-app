(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:Me}=Object.prototype,{getPrototypeOf:Q}=Object,j=(e=>t=>{const n=Me.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>j(t)===e),H=e=>t=>typeof t===e,{isArray:I}=Array,P=H("undefined");function qe(e){return e!==null&&!P(e)&&e.constructor!==null&&!P(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ye=O("ArrayBuffer");function ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ye(e.buffer),t}const ve=H("string"),S=H("function"),Ee=H("number"),M=e=>e!==null&&typeof e=="object",Je=e=>e===!0||e===!1,_=e=>{if(j(e)!=="object")return!1;const t=Q(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$e=O("Date"),Ve=O("File"),We=O("Blob"),Ke=O("FileList"),Ge=e=>M(e)&&S(e.pipe),Xe=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=j(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},Ze=O("URLSearchParams"),Qe=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function F(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function we(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const be=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ge=e=>!P(e)&&e!==be;function W(){const{caseless:e}=ge(this)&&this||{},t={},n=(r,o)=>{const s=e&&we(t,o)||o;_(t[s])&&_(r)?t[s]=W(t[s],r):_(r)?t[s]=W({},r):I(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&F(arguments[r],n);return t}const Ye=(e,t,n,{allOwnKeys:r}={})=>(F(t,(o,s)=>{n&&S(o)?e[s]=he(o,n):e[s]=o},{allOwnKeys:r}),e),et=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),tt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},nt=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Q(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},rt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ot=e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!Ee(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},st=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Q(Uint8Array)),it=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},at=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ct=O("HTMLFormElement"),lt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ut=O("RegExp"),Se=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};F(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},dt=e=>{Se(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ft=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return I(e)?r(e):r(String(e).split(t)),n},mt=()=>{},pt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),v="abcdefghijklmnopqrstuvwxyz",se="0123456789",Re={DIGIT:se,ALPHA:v,ALPHA_DIGIT:v+v.toUpperCase()+se},ht=(e=16,t=Re.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function yt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Et=e=>{const t=new Array(10),n=(r,o)=>{if(M(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=I(r)?[]:{};return F(r,(i,c)=>{const m=n(i,o+1);!P(m)&&(s[c]=m)}),t[o]=void 0,s}}return r};return n(e,0)},wt=O("AsyncFunction"),bt=e=>e&&(M(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:I,isArrayBuffer:ye,isBuffer:qe,isFormData:Xe,isArrayBufferView:ze,isString:ve,isNumber:Ee,isBoolean:Je,isObject:M,isPlainObject:_,isUndefined:P,isDate:$e,isFile:Ve,isBlob:We,isRegExp:ut,isFunction:S,isStream:Ge,isURLSearchParams:Ze,isTypedArray:st,isFileList:Ke,forEach:F,merge:W,extend:Ye,trim:Qe,stripBOM:et,inherits:tt,toFlatObject:nt,kindOf:j,kindOfTest:O,endsWith:rt,toArray:ot,forEachEntry:it,matchAll:at,isHTMLForm:ct,hasOwnProperty:oe,hasOwnProp:oe,reduceDescriptors:Se,freezeMethods:dt,toObjectSet:ft,toCamelCase:lt,noop:mt,toFiniteNumber:pt,findKey:we,global:be,isContextDefined:ge,ALPHABET:Re,generateString:ht,isSpecCompliantForm:yt,toJSONObject:Et,isAsyncFn:wt,isThenable:bt};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Oe=h.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ce[e]={value:e}});Object.defineProperties(h,Ce);Object.defineProperty(Oe,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,s)=>{const i=Object.create(Oe);return a.toFlatObject(e,i,function(m){return m!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const gt=null;function K(e){return a.isPlainObject(e)||a.isArray(e)}function Ae(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ie(e,t,n){return e?e.concat(t).map(function(o,s){return o=Ae(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function St(e){return a.isArray(e)&&!e.some(K)}const Rt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,w){return!a.isUndefined(w[f])});const r=n.metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,m=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function p(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!m&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?m&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,f,w){let b=d;if(d&&!w&&typeof d=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&St(d)||(a.isFileList(d)||a.endsWith(f,"[]"))&&(b=a.toArray(d)))return f=Ae(f),b.forEach(function(x,He){!(a.isUndefined(x)||x===null)&&t.append(i===!0?ie([f],He,s):i===null?f:f+"[]",p(x))}),!1}return K(d)?!0:(t.append(ie(w,f,s),p(d)),!1)}const l=[],E=Object.assign(Rt,{defaultVisitor:u,convertValue:p,isVisitable:K});function g(d,f){if(!a.isUndefined(d)){if(l.indexOf(d)!==-1)throw Error("Circular reference detected in "+f.join("."));l.push(d),a.forEach(d,function(b,A){(!(a.isUndefined(b)||b===null)&&o.call(t,b,a.isString(A)?A.trim():A,f,E))===!0&&g(b,f?f.concat(A):[A])}),l.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function ae(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Y(e,t){this._pairs=[],e&&q(e,this,t)}const xe=Y.prototype;xe.append=function(t,n){this._pairs.push([t,n])};xe.toString=function(t){const n=t?function(r){return t.call(this,r,ae)}:ae;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function Ot(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Be(e,t,n){if(!t)return e;const r=n&&n.encode||Ot,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new Y(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class ce{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ct=typeof URLSearchParams<"u"?URLSearchParams:Y,At=typeof FormData<"u"?FormData:null,xt=typeof Blob<"u"?Blob:null,Bt={isBrowser:!0,classes:{URLSearchParams:Ct,FormData:At,Blob:xt},protocols:["http","https","file","blob","url","data"]},Ie=typeof window<"u"&&typeof document<"u",Tt=(e=>Ie&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),It=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Nt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ie,hasStandardBrowserEnv:Tt,hasStandardBrowserWebWorkerEnv:It},Symbol.toStringTag,{value:"Module"})),R={...Nt,...Bt};function Pt(e,t){return q(e,new R.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return R.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Ft(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Lt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ne(e){function t(n,r,o,s){let i=n[s++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),m=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,m?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Lt(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Ft(r),o,n,0)}),n}return null}function _t(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ee={transitional:Te,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o?JSON.stringify(Ne(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Pt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return q(c?{"files[]":t}:t,m&&new m,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),_t(t)):t}],transformResponse:[function(t){const n=this.transitional||ee.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ee.headers[e]={}});const te=ee,kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ut=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},le=Symbol("internals");function N(e){return e&&String(e).trim().toLowerCase()}function k(e){return e===!1||e==null?e:a.isArray(e)?e.map(k):String(e)}function Dt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const jt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function J(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ht(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Mt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,m,p){const u=N(m);if(!u)throw new Error("header name must be a non-empty string");const l=a.findKey(o,u);(!l||o[l]===void 0||p===!0||p===void 0&&o[l]!==!1)&&(o[l||m]=k(c))}const i=(c,m)=>a.forEach(c,(p,u)=>s(p,u,m));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!jt(t)?i(Ut(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=N(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Dt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=N(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||J(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=N(i),i){const c=a.findKey(r,i);c&&(!n||J(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||J(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=k(o),delete n[s];return}const c=t?Ht(s):String(s).trim();c!==s&&delete n[s],n[c]=k(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[le]=this[le]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=N(i);r[c]||(Mt(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(z.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(z);const C=z;function $(e,t){const n=this||te,r=t||n,o=C.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function Pe(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,h,{__CANCEL__:!0});function qt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zt=R.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function vt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Jt(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Fe(e,t){return e&&!vt(t)?Jt(e,t):t}const $t=R.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Vt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Wt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(m){const p=Date.now(),u=r[s];i||(i=p),n[o]=m,r[o]=p;let l=s,E=0;for(;l!==o;)E+=n[l++],l=l%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),p-i<t)return;const g=u&&p-u;return g?Math.round(E*1e3/g):void 0}}function ue(e,t){let n=0;const r=Wt(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,m=r(c),p=s<=i;n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:m||void 0,estimated:m&&i&&p?(i-s)/m:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Kt=typeof XMLHttpRequest<"u",Gt=Kt&&function(e){return new Promise(function(n,r){let o=e.data;const s=C.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,m;function p(){e.cancelToken&&e.cancelToken.unsubscribe(m),e.signal&&e.signal.removeEventListener("abort",m)}let u;if(a.isFormData(o)){if(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((u=s.getContentType())!==!1){const[f,...w]=u?u.split(";").map(b=>b.trim()).filter(Boolean):[];s.setContentType([f||"multipart/form-data",...w].join("; "))}}let l=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+w))}const E=Fe(e.baseURL,e.url);l.open(e.method.toUpperCase(),Be(E,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function g(){if(!l)return;const f=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),b={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:e,request:l};qt(function(x){n(x),p()},function(x){r(x),p()},b),l=null}if("onloadend"in l?l.onloadend=g:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(g)},l.onabort=function(){l&&(r(new h("Request aborted",h.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||Te;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new h(w,b.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,l)),l=null},R.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&$t(E))){const f=e.xsrfHeaderName&&e.xsrfCookieName&&zt.read(e.xsrfCookieName);f&&s.set(e.xsrfHeaderName,f)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(w,b){l.setRequestHeader(b,w)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(m=f=>{l&&(r(!f||f.type?new L(null,e,l):f),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(m),e.signal&&(e.signal.aborted?m():e.signal.addEventListener("abort",m)));const d=Vt(E);if(d&&R.protocols.indexOf(d)===-1){r(new h("Unsupported protocol "+d+":",h.ERR_BAD_REQUEST,e));return}l.send(o||null)})},G={http:gt,xhr:Gt};a.forEach(G,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const de=e=>`- ${e}`,Xt=e=>a.isFunction(e)||e===null||e===!1,Le={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!Xt(n)&&(r=G[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([c,m])=>`adapter ${c} `+(m===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(de).join(`
`):" "+de(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:G};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function fe(e){return V(e),e.headers=C.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Le.getAdapter(e.adapter||te.adapter)(e).then(function(r){return V(e),r.data=$.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return Pe(r)||(V(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof C?{...e}:e;function T(e,t){t=t||{};const n={};function r(p,u,l){return a.isPlainObject(p)&&a.isPlainObject(u)?a.merge.call({caseless:l},p,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function o(p,u,l){if(a.isUndefined(u)){if(!a.isUndefined(p))return r(void 0,p,l)}else return r(p,u,l)}function s(p,u){if(!a.isUndefined(u))return r(void 0,u)}function i(p,u){if(a.isUndefined(u)){if(!a.isUndefined(p))return r(void 0,p)}else return r(void 0,u)}function c(p,u,l){if(l in t)return r(p,u);if(l in e)return r(void 0,p)}const m={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(p,u)=>o(me(p),me(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const l=m[u]||o,E=l(e[u],t[u],u);a.isUndefined(E)&&l!==c||(n[u]=E)}),n}const _e="1.6.8",ne={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ne[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const pe={};ne.transitional=function(t,n,r){function o(s,i){return"[Axios v"+_e+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new h(o(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!pe[i]&&(pe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function Zt(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],m=c===void 0||i(c,s,e);if(m!==!0)throw new h("option "+s+" must be "+m,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const X={assertOptions:Zt,validators:ne},B=X.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new ce,response:new ce}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=T(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&X.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:X.assertOptions(o,{encode:B.function,serialize:B.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete s[d]}),n.headers=C.concat(i,s);const c=[];let m=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(m=m&&f.synchronous,c.unshift(f.fulfilled,f.rejected))});const p=[];this.interceptors.response.forEach(function(f){p.push(f.fulfilled,f.rejected)});let u,l=0,E;if(!m){const d=[fe.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,p),E=d.length,u=Promise.resolve(n);l<E;)u=u.then(d[l++],d[l++]);return u}E=c.length;let g=n;for(l=0;l<E;){const d=c[l++],f=c[l++];try{g=d(g)}catch(w){f.call(this,w);break}}try{u=fe.call(this,g)}catch(d){return Promise.reject(d)}for(l=0,E=p.length;l<E;)u=u.then(p[l++],p[l++]);return u}getUri(t){t=T(this.defaults,t);const n=Fe(t.baseURL,t.url);return Be(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(T(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(T(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});const U=D;class re{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new L(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new re(function(o){t=o}),cancel:t}}}const Qt=re;function Yt(e){return function(n){return e.apply(null,n)}}function en(e){return a.isObject(e)&&e.isAxiosError===!0}const Z={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Z).forEach(([e,t])=>{Z[t]=e});const tn=Z;function ke(e){const t=new U(e),n=he(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ke(T(e,o))},n}const y=ke(te);y.Axios=U;y.CanceledError=L;y.CancelToken=Qt;y.isCancel=Pe;y.VERSION=_e;y.toFormData=q;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Yt;y.isAxiosError=en;y.mergeConfig=T;y.AxiosHeaders=C;y.formToJSON=e=>Ne(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Le.getAdapter;y.HttpStatusCode=tn;y.default=y;document.getElementById("zipcode").addEventListener("click",function(){document.getElementById("zipcode").value==="Enter a zipcode"&&(document.getElementById("zipcode").value="")});let Ue=0,De=0;navigator.geolocation?navigator.geolocation.getCurrentPosition(nn):alert("Geolocation is not currently available");function nn(e){Ue=e.coords.latitude,De=e.coords.longitude,je()}async function rn(){let e="https://api.openweathermap.org/data/2.5/weather?zip="+document.getElementById("zipcode").value+",us&appid=4ec8e174794a1b4bf79276d10fe060be";try{document.getElementById("errorMessage").textContent="",document.getElementById("loader").style.visibility="visible";let t=await y.get(e);document.getElementById("loader").style.visibility="hidden",console.log(t);const n=await t.data;document.getElementById("outputCity").textContent=n.name;let r=n.main.temp;document.getElementById("kelvin").textContent=r+" K";let o=(r-273.15).toFixed(2);document.getElementById("celsius").textContent=o+" °C";let s=(o*1.8+32).toFixed(2);document.getElementById("fahrenheit").textContent=s+" °F",document.getElementById("outputCondition").textContent=n.weather[0].main;let i="https://openweathermap.org/img/wn/"+n.weather[0].icon+"@2x.png";document.getElementById("weatherIconImage").src=i,s<=50?(document.getElementById("fahrenheit").style.color="blue",document.getElementById("kelvin").style.color="blue",document.getElementById("celsius").style.color="blue"):s>=80?(document.getElementById("fahrenheit").style.color="red",document.getElementById("kelvin").style.color="red",document.getElementById("celsius").style.color="red"):(document.getElementById("fahrenheit").style.color="black",document.getElementById("kelvin").style.color="black",document.getElementById("celsius").style.color="black")}catch{document.getElementById("errorMessage").textContent="Invalid Zip Code",console.error("Invalid Zip Code"),document.getElementById("outputCity").textContent="",document.getElementById("kelvin").textContent="",document.getElementById("celsius").textContent="",document.getElementById("fahrenheit").textContent="",document.getElementById("outputCondition").textContent="",document.getElementById("weatherIconImage").src=""}}document.getElementById("weatherButton").addEventListener("click",rn);async function je(){let e="https://api.openweathermap.org/data/2.5/weather?lat="+Ue+"&lon="+De+"&appid=4ec8e174794a1b4bf79276d10fe060be";try{document.getElementById("errorMessage").textContent="",document.getElementById("loader").style.visibility="visible";let t=await y.get(e);document.getElementById("loader").style.visibility="hidden",console.log(t);const n=await t.data;document.getElementById("outputCity").textContent=n.name;let r=n.main.temp;document.getElementById("kelvin").textContent=r+" K";let o=(r-273.15).toFixed(2);document.getElementById("celsius").textContent=o+" °C";let s=(o*1.8+32).toFixed(2);document.getElementById("fahrenheit").textContent=s+" °F",document.getElementById("outputCondition").textContent=n.weather[0].main;let i="https://openweathermap.org/img/wn/"+n.weather[0].icon+"@2x.png";document.getElementById("weatherIconImage").src=i,s<=50?(document.getElementById("fahrenheit").style.color="blue",document.getElementById("kelvin").style.color="blue",document.getElementById("celsius").style.color="blue"):s>=80?(document.getElementById("fahrenheit").style.color="red",document.getElementById("kelvin").style.color="red",document.getElementById("celsius").style.color="red"):(document.getElementById("fahrenheit").style.color="black",document.getElementById("kelvin").style.color="black",document.getElementById("celsius").style.color="black")}catch{document.getElementById("errorMessage").textContent="Invalid Zip Code",console.error("Invalid Zip Code"),document.getElementById("outputCity").textContent="",document.getElementById("kelvin").textContent="",document.getElementById("celsius").textContent="",document.getElementById("fahrenheit").textContent="",document.getElementById("outputCondition").textContent="",document.getElementById("weatherIconImage").src=""}}document.getElementById("locationButton").addEventListener("click",je);
