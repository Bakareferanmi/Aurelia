function pd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},wl={},Is={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dr=Symbol.for("react.element"),md=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),vd=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),xd=Symbol.for("react.provider"),wd=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),Sd=Symbol.for("react.memo"),Cd=Symbol.for("react.lazy"),ma=Symbol.iterator;function Ed(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var Fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ds=Object.assign,$s={};function yn(e,t,n){this.props=e,this.context=t,this.refs=$s,this.updater=n||Fs}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Us(){}Us.prototype=yn.prototype;function go(e,t,n){this.props=e,this.context=t,this.refs=$s,this.updater=n||Fs}var vo=go.prototype=new Us;vo.constructor=go;Ds(vo,yn.prototype);vo.isPureReactComponent=!0;var ga=Array.isArray,As=Object.prototype.hasOwnProperty,yo={current:null},Ws={key:!0,ref:!0,__self:!0,__source:!0};function Bs(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)As.call(t,r)&&!Ws.hasOwnProperty(r)&&(l[r]=t[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:dr,type:e,key:i,ref:o,props:l,_owner:yo.current}}function jd(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xo(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function Nd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var va=/\/+/g;function Bl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nd(""+e.key):t.toString(36)}function Fr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case dr:case md:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Bl(o,0):r,ga(l)?(n="",e!=null&&(n=e.replace(va,"$&/")+"/"),Fr(l,t,n,"",function(c){return c})):l!=null&&(xo(l)&&(l=jd(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(va,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",ga(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Bl(i,a);o+=Fr(i,t,n,s,l)}else if(s=Ed(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Bl(i,a++),o+=Fr(i,t,n,s,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yr(e,t,n){if(e==null)return e;var r=[],l=0;return Fr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Pd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Dr={transition:null},zd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Dr,ReactCurrentOwner:yo};function Vs(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!xo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=yn;M.Fragment=gd;M.Profiler=yd;M.PureComponent=go;M.StrictMode=vd;M.Suspense=kd;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zd;M.act=Vs;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ds({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=yo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)As.call(t,s)&&!Ws.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:dr,type:e.type,key:l,ref:i,props:r,_owner:o}};M.createContext=function(e){return e={$$typeof:wd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xd,_context:e},e.Consumer=e};M.createElement=Bs;M.createFactory=function(e){var t=Bs.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:_d,render:e}};M.isValidElement=xo;M.lazy=function(e){return{$$typeof:Cd,_payload:{_status:-1,_result:e},_init:Pd}};M.memo=function(e,t){return{$$typeof:Sd,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Dr.transition;Dr.transition={};try{e()}finally{Dr.transition=t}};M.unstable_act=Vs;M.useCallback=function(e,t){return de.current.useCallback(e,t)};M.useContext=function(e){return de.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return de.current.useDeferredValue(e)};M.useEffect=function(e,t){return de.current.useEffect(e,t)};M.useId=function(){return de.current.useId()};M.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return de.current.useMemo(e,t)};M.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};M.useRef=function(e){return de.current.useRef(e)};M.useState=function(e){return de.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return de.current.useTransition()};M.version="18.3.1";Is.exports=M;var x=Is.exports;const Hs=hd(x),Ld=pd({__proto__:null,default:Hs},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd=x,Td=Symbol.for("react.element"),Md=Symbol.for("react.fragment"),Od=Object.prototype.hasOwnProperty,Id=Rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fd={key:!0,ref:!0,__self:!0,__source:!0};function Qs(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Od.call(t,r)&&!Fd.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Td,type:e,key:i,ref:o,props:l,_owner:Id.current}}wl.Fragment=Md;wl.jsx=Qs;wl.jsxs=Qs;Os.exports=wl;var u=Os.exports,vi={},Ks={exports:{}},Se={},Ys={exports:{}},Gs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,L){var T=j.length;j.push(L);e:for(;0<T;){var Y=T-1>>>1,Z=j[Y];if(0<l(Z,L))j[Y]=L,j[T]=Z,T=Y;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var L=j[0],T=j.pop();if(T!==L){j[0]=T;e:for(var Y=0,Z=j.length,gr=Z>>>1;Y<gr;){var Ct=2*(Y+1)-1,Wl=j[Ct],Et=Ct+1,vr=j[Et];if(0>l(Wl,T))Et<Z&&0>l(vr,Wl)?(j[Y]=vr,j[Et]=T,Y=Et):(j[Y]=Wl,j[Ct]=T,Y=Ct);else if(Et<Z&&0>l(vr,T))j[Y]=vr,j[Et]=T,Y=Et;else break e}}return L}function l(j,L){var T=j.sortIndex-L.sortIndex;return T!==0?T:j.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],m=1,h=null,g=3,y=!1,w=!1,_=!1,C=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=j)r(c),L.sortIndex=L.expirationTime,t(s,L);else break;L=n(c)}}function v(j){if(_=!1,p(j),!w)if(n(s)!==null)w=!0,Ul(S);else{var L=n(c);L!==null&&Al(v,L.startTime-j)}}function S(j,L){w=!1,_&&(_=!1,f(z),z=-1),y=!0;var T=g;try{for(p(L),h=n(s);h!==null&&(!(h.expirationTime>L)||j&&!ye());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,g=h.priorityLevel;var Z=Y(h.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(s)&&r(s),p(L)}else r(s);h=n(s)}if(h!==null)var gr=!0;else{var Ct=n(c);Ct!==null&&Al(v,Ct.startTime-L),gr=!1}return gr}finally{h=null,g=T,y=!1}}var N=!1,P=null,z=-1,W=5,R=-1;function ye(){return!(e.unstable_now()-R<W)}function Sn(){if(P!==null){var j=e.unstable_now();R=j;var L=!0;try{L=P(!0,j)}finally{L?Cn():(N=!1,P=null)}}else N=!1}var Cn;if(typeof d=="function")Cn=function(){d(Sn)};else if(typeof MessageChannel<"u"){var ha=new MessageChannel,fd=ha.port2;ha.port1.onmessage=Sn,Cn=function(){fd.postMessage(null)}}else Cn=function(){C(Sn,0)};function Ul(j){P=j,N||(N=!0,Cn())}function Al(j,L){z=C(function(){j(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,Ul(S))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var T=g;g=L;try{return j()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,L){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var T=g;g=j;try{return L()}finally{g=T}},e.unstable_scheduleCallback=function(j,L,T){var Y=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Y+T:Y):T=Y,j){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,j={id:m++,callback:L,priorityLevel:j,startTime:T,expirationTime:Z,sortIndex:-1},T>Y?(j.sortIndex=T,t(c,j),n(s)===null&&j===n(c)&&(_?(f(z),z=-1):_=!0,Al(v,T-Y))):(j.sortIndex=Z,t(s,j),w||y||(w=!0,Ul(S))),j},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(j){var L=g;return function(){var T=g;g=L;try{return j.apply(this,arguments)}finally{g=T}}}})(Gs);Ys.exports=Gs;var Dd=Ys.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $d=x,ke=Dd;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xs=new Set,Kn={};function $t(e,t){un(e,t),un(e+"Capture",t)}function un(e,t){for(Kn[e]=t,e=0;e<t.length;e++)Xs.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ya={},xa={};function Ad(e){return yi.call(xa,e)?!0:yi.call(ya,e)?!1:Ud.test(e)?xa[e]=!0:(ya[e]=!0,!1)}function Wd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bd(e,t,n,r){if(t===null||typeof t>"u"||Wd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var wo=/[\-:]([a-z])/g;function _o(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wo,_o);le[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wo,_o);le[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wo,_o);le[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ko(e,t,n,r){var l=le.hasOwnProperty(t)?le[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bd(t,n,l,r)&&(n=null),r||l===null?Ad(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=$d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Ht=Symbol.for("react.fragment"),So=Symbol.for("react.strict_mode"),xi=Symbol.for("react.profiler"),Js=Symbol.for("react.provider"),qs=Symbol.for("react.context"),Co=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),_i=Symbol.for("react.suspense_list"),Eo=Symbol.for("react.memo"),rt=Symbol.for("react.lazy"),Zs=Symbol.for("react.offscreen"),wa=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=wa&&e[wa]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Vl;function Mn(e){if(Vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||""}return`
`+Vl+e}var Hl=!1;function Ql(e,t){if(!e||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mn(e):""}function Vd(e){switch(e.tag){case 5:return Mn(e.type);case 16:return Mn("Lazy");case 13:return Mn("Suspense");case 19:return Mn("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function ki(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ht:return"Fragment";case Vt:return"Portal";case xi:return"Profiler";case So:return"StrictMode";case wi:return"Suspense";case _i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qs:return(e.displayName||"Context")+".Consumer";case Js:return(e._context.displayName||"Context")+".Provider";case Co:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Eo:return t=e.displayName||null,t!==null?t:ki(e.type)||"Memo";case rt:t=e._payload,e=e._init;try{return ki(e(t))}catch{}}return null}function Hd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ki(t);case 8:return t===So?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qd(e){var t=bs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Qd(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Gr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Si(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _a(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tu(e,t){t=t.checked,t!=null&&ko(e,"checked",t,!1)}function Ci(e,t){tu(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ei(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ei(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ei(e,t,n){(t!=="number"||Gr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ji(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(On(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function nu(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ru(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ru(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,lu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Yn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Kd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Dn[t]=Dn[e]})});function iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+t).trim():t+"px"}function ou(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=iu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Yd=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pi(e,t){if(t){if(Yd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function zi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=null;function jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,nn=null,rn=null;function Ea(e){if(e=hr(e)){if(typeof Ri!="function")throw Error(k(280));var t=e.stateNode;t&&(t=El(t),Ri(e.stateNode,e.type,t))}}function au(e){nn?rn?rn.push(e):rn=[e]:nn=e}function su(){if(nn){var e=nn,t=rn;if(rn=nn=null,Ea(e),t)for(e=0;e<t.length;e++)Ea(t[e])}}function uu(e,t){return e(t)}function cu(){}var Kl=!1;function du(e,t,n){if(Kl)return e(t,n);Kl=!0;try{return uu(e,t,n)}finally{Kl=!1,(nn!==null||rn!==null)&&(cu(),su())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Ti=!1;if(Xe)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){Ti=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{Ti=!1}function Gd(e,t,n,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var $n=!1,Xr=null,Jr=!1,Mi=null,Xd={onError:function(e){$n=!0,Xr=e}};function Jd(e,t,n,r,l,i,o,a,s){$n=!1,Xr=null,Gd.apply(Xd,arguments)}function qd(e,t,n,r,l,i,o,a,s){if(Jd.apply(this,arguments),$n){if($n){var c=Xr;$n=!1,Xr=null}else throw Error(k(198));Jr||(Jr=!0,Mi=c)}}function Ut(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(Ut(e)!==e)throw Error(k(188))}function Zd(e){var t=e.alternate;if(!t){if(t=Ut(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ja(l),e;if(i===r)return ja(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function pu(e){return e=Zd(e),e!==null?hu(e):null}function hu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hu(e);if(t!==null)return t;e=e.sibling}return null}var mu=ke.unstable_scheduleCallback,Na=ke.unstable_cancelCallback,bd=ke.unstable_shouldYield,ef=ke.unstable_requestPaint,G=ke.unstable_now,tf=ke.unstable_getCurrentPriorityLevel,No=ke.unstable_ImmediatePriority,gu=ke.unstable_UserBlockingPriority,qr=ke.unstable_NormalPriority,nf=ke.unstable_LowPriority,vu=ke.unstable_IdlePriority,_l=null,Be=null;function rf(e){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(_l,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:af,lf=Math.log,of=Math.LN2;function af(e){return e>>>=0,e===0?32:31-(lf(e)/of|0)|0}var kr=64,Sr=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~l;a!==0?r=In(a):(i&=o,i!==0&&(r=In(i)))}else o=n&~l,o!==0?r=In(o):i!==0&&(r=In(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function sf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ie(i),a=1<<o,s=l[o];s===-1?(!(a&n)||a&r)&&(l[o]=sf(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Oi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yu(){var e=kr;return kr<<=1,!(kr&4194240)&&(kr=64),e}function Yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function cf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function xu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wu,zo,_u,ku,Su,Ii=!1,Cr=[],ct=null,dt=null,ft=null,Xn=new Map,Jn=new Map,it=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":dt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Nn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=hr(t),t!==null&&zo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function ff(e,t,n,r,l){switch(t){case"focusin":return ct=Nn(ct,e,t,n,r,l),!0;case"dragenter":return dt=Nn(dt,e,t,n,r,l),!0;case"mouseover":return ft=Nn(ft,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Xn.set(i,Nn(Xn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Jn.set(i,Nn(Jn.get(i)||null,e,t,n,r,l)),!0}return!1}function Cu(e){var t=Pt(e.target);if(t!==null){var n=Ut(t);if(n!==null){if(t=n.tag,t===13){if(t=fu(n),t!==null){e.blockedOn=t,Su(e.priority,function(){_u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Li=r,n.target.dispatchEvent(r),Li=null}else return t=hr(n),t!==null&&zo(t),e.blockedOn=n,!1;t.shift()}return!0}function za(e,t,n){$r(e)&&n.delete(t)}function pf(){Ii=!1,ct!==null&&$r(ct)&&(ct=null),dt!==null&&$r(dt)&&(dt=null),ft!==null&&$r(ft)&&(ft=null),Xn.forEach(za),Jn.forEach(za)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ii||(Ii=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,pf)))}function qn(e){function t(l){return Pn(l,e)}if(0<Cr.length){Pn(Cr[0],e);for(var n=1;n<Cr.length;n++){var r=Cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ct!==null&&Pn(ct,e),dt!==null&&Pn(dt,e),ft!==null&&Pn(ft,e),Xn.forEach(t),Jn.forEach(t),n=0;n<it.length;n++)r=it[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<it.length&&(n=it[0],n.blockedOn===null);)Cu(n),n.blockedOn===null&&it.shift()}var ln=be.ReactCurrentBatchConfig,br=!0;function hf(e,t,n,r){var l=I,i=ln.transition;ln.transition=null;try{I=1,Lo(e,t,n,r)}finally{I=l,ln.transition=i}}function mf(e,t,n,r){var l=I,i=ln.transition;ln.transition=null;try{I=4,Lo(e,t,n,r)}finally{I=l,ln.transition=i}}function Lo(e,t,n,r){if(br){var l=Fi(e,t,n,r);if(l===null)ri(e,t,r,el,n),Pa(e,r);else if(ff(l,e,t,n,r))r.stopPropagation();else if(Pa(e,r),t&4&&-1<df.indexOf(e)){for(;l!==null;){var i=hr(l);if(i!==null&&wu(i),i=Fi(e,t,n,r),i===null&&ri(e,t,r,el,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var el=null;function Fi(e,t,n,r){if(el=null,e=jo(r),e=Pt(e),e!==null)if(t=Ut(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return el=e,null}function Eu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case No:return 1;case gu:return 4;case qr:case nf:return 16;case vu:return 536870912;default:return 16}default:return 16}}var at=null,Ro=null,Ur=null;function ju(){if(Ur)return Ur;var e,t=Ro,n=t.length,r,l="value"in at?at.value:at.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Ur=l.slice(e,1<r?1-r:void 0)}function Ar(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function La(){return!1}function Ce(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Er:La,this.isPropagationStopped=La,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=Ce(xn),pr=Q({},xn,{view:0,detail:0}),gf=Ce(pr),Gl,Xl,zn,kl=Q({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Gl=e.screenX-zn.screenX,Xl=e.screenY-zn.screenY):Xl=Gl=0,zn=e),Gl)},movementY:function(e){return"movementY"in e?e.movementY:Xl}}),Ra=Ce(kl),vf=Q({},kl,{dataTransfer:0}),yf=Ce(vf),xf=Q({},pr,{relatedTarget:0}),Jl=Ce(xf),wf=Q({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=Ce(wf),kf=Q({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sf=Ce(kf),Cf=Q({},xn,{data:0}),Ta=Ce(Cf),Ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nf[e])?!!t[e]:!1}function Mo(){return Pf}var zf=Q({},pr,{key:function(e){if(e.key){var t=Ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ar(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mo,charCode:function(e){return e.type==="keypress"?Ar(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ar(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lf=Ce(zf),Rf=Q({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ma=Ce(Rf),Tf=Q({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mo}),Mf=Ce(Tf),Of=Q({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),If=Ce(Of),Ff=Q({},kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Df=Ce(Ff),$f=[9,13,27,32],Oo=Xe&&"CompositionEvent"in window,Un=null;Xe&&"documentMode"in document&&(Un=document.documentMode);var Uf=Xe&&"TextEvent"in window&&!Un,Nu=Xe&&(!Oo||Un&&8<Un&&11>=Un),Oa=" ",Ia=!1;function Pu(e,t){switch(e){case"keyup":return $f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qt=!1;function Af(e,t){switch(e){case"compositionend":return zu(t);case"keypress":return t.which!==32?null:(Ia=!0,Oa);case"textInput":return e=t.data,e===Oa&&Ia?null:e;default:return null}}function Wf(e,t){if(Qt)return e==="compositionend"||!Oo&&Pu(e,t)?(e=ju(),Ur=Ro=at=null,Qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nu&&t.locale!=="ko"?null:t.data;default:return null}}var Bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bf[e.type]:t==="textarea"}function Lu(e,t,n,r){au(r),t=tl(t,"onChange"),0<t.length&&(n=new To("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var An=null,Zn=null;function Vf(e){Wu(e,0)}function Sl(e){var t=Gt(e);if(eu(t))return e}function Hf(e,t){if(e==="change")return t}var Ru=!1;if(Xe){var ql;if(Xe){var Zl="oninput"in document;if(!Zl){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Zl=typeof Da.oninput=="function"}ql=Zl}else ql=!1;Ru=ql&&(!document.documentMode||9<document.documentMode)}function $a(){An&&(An.detachEvent("onpropertychange",Tu),Zn=An=null)}function Tu(e){if(e.propertyName==="value"&&Sl(Zn)){var t=[];Lu(t,Zn,e,jo(e)),du(Vf,t)}}function Qf(e,t,n){e==="focusin"?($a(),An=t,Zn=n,An.attachEvent("onpropertychange",Tu)):e==="focusout"&&$a()}function Kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(Zn)}function Yf(e,t){if(e==="click")return Sl(t)}function Gf(e,t){if(e==="input"||e==="change")return Sl(t)}function Xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Xf;function bn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!yi.call(t,l)||!De(e[l],t[l]))return!1}return!0}function Ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,t){var n=Ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ua(n)}}function Mu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ou(){for(var e=window,t=Gr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Io(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jf(e){var t=Ou(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mu(n.ownerDocument.documentElement,n)){if(r!==null&&Io(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Aa(n,i);var o=Aa(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qf=Xe&&"documentMode"in document&&11>=document.documentMode,Kt=null,Di=null,Wn=null,$i=!1;function Wa(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$i||Kt==null||Kt!==Gr(r)||(r=Kt,"selectionStart"in r&&Io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&bn(Wn,r)||(Wn=r,r=tl(Di,"onSelect"),0<r.length&&(t=new To("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Kt)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yt={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionend:jr("Transition","TransitionEnd")},bl={},Iu={};Xe&&(Iu=document.createElement("div").style,"AnimationEvent"in window||(delete Yt.animationend.animation,delete Yt.animationiteration.animation,delete Yt.animationstart.animation),"TransitionEvent"in window||delete Yt.transitionend.transition);function Cl(e){if(bl[e])return bl[e];if(!Yt[e])return e;var t=Yt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Iu)return bl[e]=t[n];return e}var Fu=Cl("animationend"),Du=Cl("animationiteration"),$u=Cl("animationstart"),Uu=Cl("transitionend"),Au=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Au.set(e,t),$t(t,[e])}for(var ei=0;ei<Ba.length;ei++){var ti=Ba[ei],Zf=ti.toLowerCase(),bf=ti[0].toUpperCase()+ti.slice(1);_t(Zf,"on"+bf)}_t(Fu,"onAnimationEnd");_t(Du,"onAnimationIteration");_t($u,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Uu,"onTransitionEnd");un("onMouseEnter",["mouseout","mouseover"]);un("onMouseLeave",["mouseout","mouseover"]);un("onPointerEnter",["pointerout","pointerover"]);un("onPointerLeave",["pointerout","pointerover"]);$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$t("onBeforeInput",["compositionend","keypress","textInput","paste"]);$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function Va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qd(r,t,void 0,e),e.currentTarget=null}function Wu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;Va(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;Va(l,a,c),i=s}}}if(Jr)throw e=Mi,Jr=!1,Mi=null,e}function D(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+"__bubble";n.has(r)||(Bu(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),Bu(n,e,r,t)}var Nr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[Nr]){e[Nr]=!0,Xs.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nr]||(t[Nr]=!0,ni("selectionchange",!1,t))}}function Bu(e,t,n,r){switch(Eu(t)){case 1:var l=hf;break;case 4:l=mf;break;default:l=Lo}n=l.bind(null,t,n,e),l=void 0,!Ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Pt(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}du(function(){var c=i,m=jo(n),h=[];e:{var g=Au.get(e);if(g!==void 0){var y=To,w=e;switch(e){case"keypress":if(Ar(n)===0)break e;case"keydown":case"keyup":y=Lf;break;case"focusin":w="focus",y=Jl;break;case"focusout":w="blur",y=Jl;break;case"beforeblur":case"afterblur":y=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=yf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Mf;break;case Fu:case Du:case $u:y=_f;break;case Uu:y=If;break;case"scroll":y=gf;break;case"wheel":y=Df;break;case"copy":case"cut":case"paste":y=Sf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ma}var _=(t&4)!==0,C=!_&&e==="scroll",f=_?g!==null?g+"Capture":null:g;_=[];for(var d=c,p;d!==null;){p=d;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Gn(d,f),v!=null&&_.push(tr(d,v,p)))),C)break;d=d.return}0<_.length&&(g=new y(g,w,null,n,m),h.push({event:g,listeners:_}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==Li&&(w=n.relatedTarget||n.fromElement)&&(Pt(w)||w[Je]))break e;if((y||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=c,w=w?Pt(w):null,w!==null&&(C=Ut(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(_=Ra,v="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ma,v="onPointerLeave",f="onPointerEnter",d="pointer"),C=y==null?g:Gt(y),p=w==null?g:Gt(w),g=new _(v,d+"leave",y,n,m),g.target=C,g.relatedTarget=p,v=null,Pt(m)===c&&(_=new _(f,d+"enter",w,n,m),_.target=p,_.relatedTarget=C,v=_),C=v,y&&w)t:{for(_=y,f=w,d=0,p=_;p;p=Wt(p))d++;for(p=0,v=f;v;v=Wt(v))p++;for(;0<d-p;)_=Wt(_),d--;for(;0<p-d;)f=Wt(f),p--;for(;d--;){if(_===f||f!==null&&_===f.alternate)break t;_=Wt(_),f=Wt(f)}_=null}else _=null;y!==null&&Ha(h,g,y,_,!1),w!==null&&C!==null&&Ha(h,C,w,_,!0)}}e:{if(g=c?Gt(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Hf;else if(Fa(g))if(Ru)S=Gf;else{S=Kf;var N=Qf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Yf);if(S&&(S=S(e,c))){Lu(h,S,n,m);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Ei(g,"number",g.value)}switch(N=c?Gt(c):window,e){case"focusin":(Fa(N)||N.contentEditable==="true")&&(Kt=N,Di=c,Wn=null);break;case"focusout":Wn=Di=Kt=null;break;case"mousedown":$i=!0;break;case"contextmenu":case"mouseup":case"dragend":$i=!1,Wa(h,n,m);break;case"selectionchange":if(qf)break;case"keydown":case"keyup":Wa(h,n,m)}var P;if(Oo)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Qt?Pu(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Nu&&n.locale!=="ko"&&(Qt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Qt&&(P=ju()):(at=m,Ro="value"in at?at.value:at.textContent,Qt=!0)),N=tl(c,z),0<N.length&&(z=new Ta(z,e,null,n,m),h.push({event:z,listeners:N}),P?z.data=P:(P=zu(n),P!==null&&(z.data=P)))),(P=Uf?Af(e,n):Wf(e,n))&&(c=tl(c,"onBeforeInput"),0<c.length&&(m=new Ta("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=P))}Wu(h,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function tl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Gn(e,n),i!=null&&r.unshift(tr(e,i,l)),i=Gn(e,t),i!=null&&r.push(tr(e,i,l))),e=e.return}return r}function Wt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ha(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=Gn(n,i),s!=null&&o.unshift(tr(n,s,a))):l||(s=Gn(n,i),s!=null&&o.push(tr(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var tp=/\r\n?/g,np=/\u0000|\uFFFD/g;function Qa(e){return(typeof e=="string"?e:""+e).replace(tp,`
`).replace(np,"")}function Pr(e,t,n){if(t=Qa(t),Qa(e)!==t&&n)throw Error(k(425))}function nl(){}var Ui=null,Ai=null;function Wi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bi=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Ka=typeof Promise=="function"?Promise:void 0,lp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ka<"u"?function(e){return Ka.resolve(null).then(e).catch(ip)}:Bi;function ip(e){setTimeout(function(){throw e})}function li(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);qn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ya(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),We="__reactFiber$"+wn,nr="__reactProps$"+wn,Je="__reactContainer$"+wn,Vi="__reactEvents$"+wn,op="__reactListeners$"+wn,ap="__reactHandles$"+wn;function Pt(e){var t=e[We];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[We]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ya(e);e!==null;){if(n=e[We])return n;e=Ya(e)}return t}e=n,n=e.parentNode}return null}function hr(e){return e=e[We]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function El(e){return e[nr]||null}var Hi=[],Xt=-1;function kt(e){return{current:e}}function $(e){0>Xt||(e.current=Hi[Xt],Hi[Xt]=null,Xt--)}function F(e,t){Xt++,Hi[Xt]=e.current,e.current=t}var wt={},se=kt(wt),me=kt(!1),Mt=wt;function cn(e,t){var n=e.type.contextTypes;if(!n)return wt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function ge(e){return e=e.childContextTypes,e!=null}function rl(){$(me),$(se)}function Ga(e,t,n){if(se.current!==wt)throw Error(k(168));F(se,t),F(me,n)}function Vu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,Hd(e)||"Unknown",l));return Q({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wt,Mt=se.current,F(se,e),F(me,me.current),!0}function Xa(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Vu(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(se),F(se,e)):$(me),F(me,n)}var Qe=null,jl=!1,ii=!1;function Hu(e){Qe===null?Qe=[e]:Qe.push(e)}function sp(e){jl=!0,Hu(e)}function St(){if(!ii&&Qe!==null){ii=!0;var e=0,t=I;try{var n=Qe;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,jl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),mu(No,St),l}finally{I=t,ii=!1}}return null}var Jt=[],qt=0,il=null,ol=0,Ee=[],je=0,Ot=null,Ke=1,Ye="";function jt(e,t){Jt[qt++]=ol,Jt[qt++]=il,il=e,ol=t}function Qu(e,t,n){Ee[je++]=Ke,Ee[je++]=Ye,Ee[je++]=Ot,Ot=e;var r=Ke;e=Ye;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var i=32-Ie(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Ke=1<<32-Ie(t)+l|n<<l|r,Ye=i+e}else Ke=1<<i|n<<l|r,Ye=e}function Fo(e){e.return!==null&&(jt(e,1),Qu(e,1,0))}function Do(e){for(;e===il;)il=Jt[--qt],Jt[qt]=null,ol=Jt[--qt],Jt[qt]=null;for(;e===Ot;)Ot=Ee[--je],Ee[je]=null,Ye=Ee[--je],Ee[je]=null,Ke=Ee[--je],Ee[je]=null}var _e=null,we=null,U=!1,Oe=null;function Ku(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ja(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,we=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ot!==null?{id:Ke,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,we=null,!0):!1;default:return!1}}function Qi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ki(e){if(U){var t=we;if(t){var n=t;if(!Ja(e,t)){if(Qi(e))throw Error(k(418));t=pt(n.nextSibling);var r=_e;t&&Ja(e,t)?Ku(r,n):(e.flags=e.flags&-4097|2,U=!1,_e=e)}}else{if(Qi(e))throw Error(k(418));e.flags=e.flags&-4097|2,U=!1,_e=e}}}function qa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function zr(e){if(e!==_e)return!1;if(!U)return qa(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wi(e.type,e.memoizedProps)),t&&(t=we)){if(Qi(e))throw Yu(),Error(k(418));for(;t;)Ku(e,t),t=pt(t.nextSibling)}if(qa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=_e?pt(e.stateNode.nextSibling):null;return!0}function Yu(){for(var e=we;e;)e=pt(e.nextSibling)}function dn(){we=_e=null,U=!1}function $o(e){Oe===null?Oe=[e]:Oe.push(e)}var up=be.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Lr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Za(e){var t=e._init;return t(e._payload)}function Gu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=vt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,v){return d===null||d.tag!==6?(d=fi(p,f.mode,v),d.return=f,d):(d=l(d,p),d.return=f,d)}function s(f,d,p,v){var S=p.type;return S===Ht?m(f,d,p.props.children,v,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Za(S)===d.type)?(v=l(d,p.props),v.ref=Ln(f,d,p),v.return=f,v):(v=Yr(p.type,p.key,p.props,null,f.mode,v),v.ref=Ln(f,d,p),v.return=f,v)}function c(f,d,p,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=pi(p,f.mode,v),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function m(f,d,p,v,S){return d===null||d.tag!==7?(d=Tt(p,f.mode,v,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function h(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=fi(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xr:return p=Yr(d.type,d.key,d.props,null,f.mode,p),p.ref=Ln(f,null,d),p.return=f,p;case Vt:return d=pi(d,f.mode,p),d.return=f,d;case rt:var v=d._init;return h(f,v(d._payload),p)}if(On(d)||En(d))return d=Tt(d,f.mode,p,null),d.return=f,d;Lr(f,d)}return null}function g(f,d,p,v){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,d,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:return p.key===S?s(f,d,p,v):null;case Vt:return p.key===S?c(f,d,p,v):null;case rt:return S=p._init,g(f,d,S(p._payload),v)}if(On(p)||En(p))return S!==null?null:m(f,d,p,v,null);Lr(f,p)}return null}function y(f,d,p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,a(d,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xr:return f=f.get(v.key===null?p:v.key)||null,s(d,f,v,S);case Vt:return f=f.get(v.key===null?p:v.key)||null,c(d,f,v,S);case rt:var N=v._init;return y(f,d,p,N(v._payload),S)}if(On(v)||En(v))return f=f.get(p)||null,m(d,f,v,S,null);Lr(d,v)}return null}function w(f,d,p,v){for(var S=null,N=null,P=d,z=d=0,W=null;P!==null&&z<p.length;z++){P.index>z?(W=P,P=null):W=P.sibling;var R=g(f,P,p[z],v);if(R===null){P===null&&(P=W);break}e&&P&&R.alternate===null&&t(f,P),d=i(R,d,z),N===null?S=R:N.sibling=R,N=R,P=W}if(z===p.length)return n(f,P),U&&jt(f,z),S;if(P===null){for(;z<p.length;z++)P=h(f,p[z],v),P!==null&&(d=i(P,d,z),N===null?S=P:N.sibling=P,N=P);return U&&jt(f,z),S}for(P=r(f,P);z<p.length;z++)W=y(P,f,z,p[z],v),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?z:W.key),d=i(W,d,z),N===null?S=W:N.sibling=W,N=W);return e&&P.forEach(function(ye){return t(f,ye)}),U&&jt(f,z),S}function _(f,d,p,v){var S=En(p);if(typeof S!="function")throw Error(k(150));if(p=S.call(p),p==null)throw Error(k(151));for(var N=S=null,P=d,z=d=0,W=null,R=p.next();P!==null&&!R.done;z++,R=p.next()){P.index>z?(W=P,P=null):W=P.sibling;var ye=g(f,P,R.value,v);if(ye===null){P===null&&(P=W);break}e&&P&&ye.alternate===null&&t(f,P),d=i(ye,d,z),N===null?S=ye:N.sibling=ye,N=ye,P=W}if(R.done)return n(f,P),U&&jt(f,z),S;if(P===null){for(;!R.done;z++,R=p.next())R=h(f,R.value,v),R!==null&&(d=i(R,d,z),N===null?S=R:N.sibling=R,N=R);return U&&jt(f,z),S}for(P=r(f,P);!R.done;z++,R=p.next())R=y(P,f,z,R.value,v),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?z:R.key),d=i(R,d,z),N===null?S=R:N.sibling=R,N=R);return e&&P.forEach(function(Sn){return t(f,Sn)}),U&&jt(f,z),S}function C(f,d,p,v){if(typeof p=="object"&&p!==null&&p.type===Ht&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case xr:e:{for(var S=p.key,N=d;N!==null;){if(N.key===S){if(S=p.type,S===Ht){if(N.tag===7){n(f,N.sibling),d=l(N,p.props.children),d.return=f,f=d;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rt&&Za(S)===N.type){n(f,N.sibling),d=l(N,p.props),d.ref=Ln(f,N,p),d.return=f,f=d;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Ht?(d=Tt(p.props.children,f.mode,v,p.key),d.return=f,f=d):(v=Yr(p.type,p.key,p.props,null,f.mode,v),v.ref=Ln(f,d,p),v.return=f,f=v)}return o(f);case Vt:e:{for(N=p.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=pi(p,f.mode,v),d.return=f,f=d}return o(f);case rt:return N=p._init,C(f,d,N(p._payload),v)}if(On(p))return w(f,d,p,v);if(En(p))return _(f,d,p,v);Lr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=fi(p,f.mode,v),d.return=f,f=d),o(f)):n(f,d)}return C}var fn=Gu(!0),Xu=Gu(!1),al=kt(null),sl=null,Zt=null,Uo=null;function Ao(){Uo=Zt=sl=null}function Wo(e){var t=al.current;$(al),e._currentValue=t}function Yi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function on(e,t){sl=e,Uo=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(he=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(Uo!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(sl===null)throw Error(k(308));Zt=e,sl.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var zt=null;function Bo(e){zt===null?zt=[e]:zt.push(e)}function Ju(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Bo(t)):(n.next=l.next,l.next=n),t.interleaved=n,qe(e,r)}function qe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var lt=!1;function Vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,qe(e,n)}return l=r.interleaved,l===null?(t.next=t,Bo(r)):(t.next=l.next,l.next=t),r.interleaved=t,qe(e,n)}function Wr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ul(e,t,n,r){var l=e.updateQueue;lt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==o&&(a===null?m.firstBaseUpdate=c:a.next=c,m.lastBaseUpdate=s))}if(i!==null){var h=l.baseState;o=0,m=c=s=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(g=t,y=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){h=w.call(y,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,g=typeof w=="function"?w.call(y,h,g):w,g==null)break e;h=Q({},h,g);break e;case 2:lt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(c=m=y,s=h):m=m.next=y,o|=g;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;g=a,a=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(m===null&&(s=h),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Ft|=o,e.lanes=o,e.memoizedState=h}}function es(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var mr={},Ve=kt(mr),rr=kt(mr),lr=kt(mr);function Lt(e){if(e===mr)throw Error(k(174));return e}function Ho(e,t){switch(F(lr,t),F(rr,e),F(Ve,mr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ni(t,e)}$(Ve),F(Ve,t)}function pn(){$(Ve),$(rr),$(lr)}function Zu(e){Lt(lr.current);var t=Lt(Ve.current),n=Ni(t,e.type);t!==n&&(F(rr,e),F(Ve,n))}function Qo(e){rr.current===e&&($(Ve),$(rr))}var B=kt(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oi=[];function Ko(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var Br=be.ReactCurrentDispatcher,ai=be.ReactCurrentBatchConfig,It=0,V=null,J=null,b=null,dl=!1,Bn=!1,ir=0,cp=0;function ie(){throw Error(k(321))}function Yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,l,i){if(It=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?hp:mp,e=n(r,l),Bn){i=0;do{if(Bn=!1,ir=0,25<=i)throw Error(k(301));i+=1,b=J=null,t.updateQueue=null,Br.current=gp,e=n(r,l)}while(Bn)}if(Br.current=fl,t=J!==null&&J.next!==null,It=0,b=J=V=null,dl=!1,t)throw Error(k(300));return e}function Xo(){var e=ir!==0;return ir=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?V.memoizedState=b=e:b=b.next=e,b}function Le(){if(J===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=b===null?V.memoizedState:b.next;if(t!==null)b=t,J=e;else{if(e===null)throw Error(k(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},b===null?V.memoizedState=b=e:b=b.next=e}return b}function or(e,t){return typeof t=="function"?t(e):t}function si(e){var t=Le(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=J,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var m=c.lane;if((It&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,V.lanes|=m,Ft|=m}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,De(r,t.memoizedState)||(he=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Ft|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=Le(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);De(i,t.memoizedState)||(he=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bu(){}function ec(e,t){var n=V,r=Le(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,he=!0),r=r.queue,Jo(rc.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||b!==null&&b.memoizedState.tag&1){if(n.flags|=2048,ar(9,nc.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(k(349));It&30||tc(n,t,l)}return l}function tc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nc(e,t,n,r){t.value=n,t.getSnapshot=r,lc(t)&&ic(e)}function rc(e,t,n){return n(function(){lc(t)&&ic(e)})}function lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function ic(e){var t=qe(e,1);t!==null&&Fe(t,e,1,-1)}function ts(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:or,lastRenderedState:e},t.queue=e,e=e.dispatch=pp.bind(null,V,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function oc(){return Le().memoizedState}function Vr(e,t,n,r){var l=Ae();V.flags|=e,l.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function Nl(e,t,n,r){var l=Le();r=r===void 0?null:r;var i=void 0;if(J!==null){var o=J.memoizedState;if(i=o.destroy,r!==null&&Yo(r,o.deps)){l.memoizedState=ar(t,n,i,r);return}}V.flags|=e,l.memoizedState=ar(1|t,n,i,r)}function ns(e,t){return Vr(8390656,8,e,t)}function Jo(e,t){return Nl(2048,8,e,t)}function ac(e,t){return Nl(4,2,e,t)}function sc(e,t){return Nl(4,4,e,t)}function uc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cc(e,t,n){return n=n!=null?n.concat([e]):null,Nl(4,4,uc.bind(null,t,e),n)}function qo(){}function dc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fc(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pc(e,t,n){return It&21?(De(n,t)||(n=yu(),V.lanes|=n,Ft|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,he=!0),e.memoizedState=n)}function dp(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=ai.transition;ai.transition={};try{e(!1),t()}finally{I=n,ai.transition=r}}function hc(){return Le().memoizedState}function fp(e,t,n){var r=gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mc(e))gc(t,n);else if(n=Ju(e,t,n,r),n!==null){var l=ce();Fe(n,e,r,l),vc(n,t,r)}}function pp(e,t,n){var r=gt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mc(e))gc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,a=i(o,n);if(l.hasEagerState=!0,l.eagerState=a,De(a,o)){var s=t.interleaved;s===null?(l.next=l,Bo(t)):(l.next=s.next,s.next=l),t.interleaved=l;return}}catch{}finally{}n=Ju(e,t,l,r),n!==null&&(l=ce(),Fe(n,e,r,l),vc(n,t,r))}}function mc(e){var t=e.alternate;return e===V||t!==null&&t===V}function gc(e,t){Bn=dl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var fl={readContext:ze,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},hp={readContext:ze,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:ns,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vr(4194308,4,uc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vr(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ae();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fp.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:ts,useDebugValue:qo,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ts(!1),t=e[0];return e=dp.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Ae();if(U){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ee===null)throw Error(k(349));It&30||tc(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ns(rc.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,nc.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ae(),t=ee.identifierPrefix;if(U){var n=Ye,r=Ke;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mp={readContext:ze,useCallback:dc,useContext:ze,useEffect:Jo,useImperativeHandle:cc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:fc,useReducer:si,useRef:oc,useState:function(){return si(or)},useDebugValue:qo,useDeferredValue:function(e){var t=Le();return pc(t,J.memoizedState,e)},useTransition:function(){var e=si(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:ec,useId:hc,unstable_isNewReconciler:!1},gp={readContext:ze,useCallback:dc,useContext:ze,useEffect:Jo,useImperativeHandle:cc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:fc,useReducer:ui,useRef:oc,useState:function(){return ui(or)},useDebugValue:qo,useDeferredValue:function(e){var t=Le();return J===null?t.memoizedState=e:pc(t,J.memoizedState,e)},useTransition:function(){var e=ui(or)[0],t=Le().memoizedState;return[e,t]},useMutableSource:bu,useSyncExternalStore:ec,useId:hc,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Gi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pl={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),l=gt(e),i=Ge(r,l);i.payload=t,n!=null&&(i.callback=n),t=ht(e,i,l),t!==null&&(Fe(t,e,l,r),Wr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),l=gt(e),i=Ge(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ht(e,i,l),t!==null&&(Fe(t,e,l,r),Wr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=gt(e),l=Ge(n,r);l.tag=2,t!=null&&(l.callback=t),t=ht(e,l,r),t!==null&&(Fe(t,e,r,n),Wr(t,e,r))}};function rs(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!bn(n,r)||!bn(l,i):!0}function yc(e,t,n){var r=!1,l=wt,i=t.contextType;return typeof i=="object"&&i!==null?i=ze(i):(l=ge(t)?Mt:se.current,r=t.contextTypes,i=(r=r!=null)?cn(e,l):wt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function ls(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pl.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Vo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=ze(i):(i=ge(t)?Mt:se.current,l.context=cn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Gi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Pl.enqueueReplaceState(l,l.state,null),ul(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=Vd(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vp=typeof WeakMap=="function"?WeakMap:Map;function xc(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hl||(hl=!0,oo=r),Ji(e,t)},n}function wc(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ji(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ji(e,t),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function is(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Rp.bind(null,e,t,n),t.then(e,e))}function os(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function as(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ht(n,t,1))),n.lanes|=1),e)}var yp=be.ReactCurrentOwner,he=!1;function ue(e,t,n,r){t.child=e===null?Xu(t,null,n,r):fn(t,e.child,n,r)}function ss(e,t,n,r,l){n=n.render;var i=t.ref;return on(t,l),r=Go(e,t,n,r,i,l),n=Xo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(U&&n&&Fo(t),t.flags|=1,ue(e,t,r,l),t.child)}function us(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!ia(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,_c(e,t,i,r,l)):(e=Yr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:bn,n(o,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function _c(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(bn(i,r)&&e.ref===t.ref)if(he=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(he=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return qi(e,t,n,r,l)}function kc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(en,xe),xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(en,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,F(en,xe),xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,F(en,xe),xe|=r;return ue(e,t,l,n),t.child}function Sc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,n,r,l){var i=ge(n)?Mt:se.current;return i=cn(t,i),on(t,l),n=Go(e,t,n,r,i,l),r=Xo(),e!==null&&!he?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):(U&&r&&Fo(t),t.flags|=1,ue(e,t,n,l),t.child)}function cs(e,t,n,r,l){if(ge(n)){var i=!0;ll(t)}else i=!1;if(on(t,l),t.stateNode===null)Hr(e,t),yc(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=ge(n)?Mt:se.current,c=cn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&ls(t,o,r,c),lt=!1;var g=t.memoizedState;o.state=g,ul(t,r,o,l),s=t.memoizedState,a!==r||g!==s||me.current||lt?(typeof m=="function"&&(Gi(t,n,m,r),s=t.memoizedState),(a=lt||rs(t,n,a,r,g,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,qu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Te(t.type,a),o.props=c,h=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=ge(n)?Mt:se.current,s=cn(t,s));var y=n.getDerivedStateFromProps;(m=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==s)&&ls(t,o,r,s),lt=!1,g=t.memoizedState,o.state=g,ul(t,r,o,l);var w=t.memoizedState;a!==h||g!==w||me.current||lt?(typeof y=="function"&&(Gi(t,n,y,r),w=t.memoizedState),(c=lt||rs(t,n,c,r,g,w,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Zi(e,t,n,r,i,l)}function Zi(e,t,n,r,l,i){Sc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Xa(t,n,!1),Ze(e,t,i);r=t.stateNode,yp.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=fn(t,e.child,null,i),t.child=fn(t,null,a,i)):ue(e,t,a,i),t.memoizedState=r.state,l&&Xa(t,n,!0),t.child}function Cc(e){var t=e.stateNode;t.pendingContext?Ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ga(e,t.context,!1),Ho(e,t.containerInfo)}function ds(e,t,n,r,l){return dn(),$o(l),t.flags|=256,ue(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ec(e,t,n){var r=t.pendingProps,l=B.current,i=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(B,l&1),e===null)return Ki(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rl(o,r,0,null),e=Tt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eo(n),t.memoizedState=bi,e):Zo(t,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return xp(e,t,o,r,a,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=vt(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=vt(a,i):(i=Tt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return i=e.child,e=i.sibling,r=vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zo(e,t){return t=Rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&$o(r),fn(t,e.child,null,n),e=Zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function xp(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(k(422))),Rr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Rl({mode:"visible",children:r.children},l,0,null),i=Tt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&fn(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=bi,i);if(!(t.mode&1))return Rr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=ci(i,r,void 0),Rr(e,t,o,r)}if(a=(o&e.childLanes)!==0,he||a){if(r=ee,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,qe(e,l),Fe(r,e,l,-1))}return la(),r=ci(Error(k(421))),Rr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Tp.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,we=pt(l.nextSibling),_e=t,U=!0,Oe=null,e!==null&&(Ee[je++]=Ke,Ee[je++]=Ye,Ee[je++]=Ot,Ke=e.id,Ye=e.overflow,Ot=t),t=Zo(t,r.children),t.flags|=4096,t)}function fs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Yi(e.return,t,n)}function di(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function jc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fs(e,n,t);else if(e.tag===19)fs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),di(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&cl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}di(t,!0,n,null,i);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ft|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wp(e,t,n){switch(t.tag){case 3:Cc(t),dn();break;case 5:Zu(t);break;case 1:ge(t.type)&&ll(t);break;case 4:Ho(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;F(al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ec(e,t,n):(F(B,B.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);F(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,kc(e,t,n)}return Ze(e,t,n)}var Nc,to,Pc,zc;Nc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};to=function(){};Pc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Lt(Ve.current);var i=null;switch(n){case"input":l=Si(e,l),r=Si(e,r),i=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":l=ji(e,l),r=ji(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=nl)}Pi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kn.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&D("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};zc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(Do(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&rl(),oe(t),null;case 3:return r=t.stateNode,pn(),$(me),$(se),Ko(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(uo(Oe),Oe=null))),to(e,t),oe(t),null;case 5:Qo(t);var l=Lt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return oe(t),null}if(e=Lt(Ve.current),zr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[We]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<Fn.length;l++)D(Fn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":_a(r,i),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},D("invalid",r);break;case"textarea":Sa(r,i),D("invalid",r)}Pi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Pr(r.textContent,a,e),l=["children",""+a]):Kn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&D("scroll",r)}switch(n){case"input":wr(r),ka(r,i,!0);break;case"textarea":wr(r),Ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=nl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ru(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[We]=t,e[nr]=r,Nc(e,t,!1,!1),t.stateNode=e;e:{switch(o=zi(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<Fn.length;l++)D(Fn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":_a(e,r),l=Si(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),D("invalid",e);break;case"textarea":Sa(e,r),l=ji(e,r),D("invalid",e);break;default:l=r}Pi(n,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?ou(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&lu(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Yn(e,s):typeof s=="number"&&Yn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&D("scroll",e):s!=null&&ko(e,i,s,o))}switch(n){case"input":wr(e),ka(e,r,!1);break;case"textarea":wr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=nl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Lt(lr.current),Lt(Ve.current),zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[We]=t,(i=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Pr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[We]=t,t.stateNode=r}return oe(t),null;case 13:if($(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Yu(),dn(),t.flags|=98560,i=!1;else if(i=zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[We]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),i=!1}else Oe!==null&&(uo(Oe),Oe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?q===0&&(q=3):la())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return pn(),to(e,t),e===null&&er(t.stateNode.containerInfo),oe(t),null;case 10:return Wo(t.type._context),oe(t),null;case 17:return ge(t.type)&&rl(),oe(t),null;case 19:if($(B),i=t.memoizedState,i===null)return oe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Rn(i,!1);else{if(q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=cl(e),o!==null){for(t.flags|=128,Rn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>mn&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304)}else{if(!r)if(e=cl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return oe(t),null}else 2*G()-i.renderingStartTime>mn&&n!==1073741824&&(t.flags|=128,r=!0,Rn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=B.current,F(B,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ra(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function kp(e,t){switch(Do(t),t.tag){case 1:return ge(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pn(),$(me),$(se),Ko(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qo(t),null;case 13:if($(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(B),null;case 4:return pn(),null;case 10:return Wo(t.type._context),null;case 22:case 23:return ra(),null;case 24:return null;default:return null}}var Tr=!1,ae=!1,Sp=typeof WeakSet=="function"?WeakSet:Set,E=null;function bt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function no(e,t,n){try{n()}catch(r){K(e,t,r)}}var ps=!1;function Cp(e,t){if(Ui=br,e=Ou(),Io(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,m=0,h=e,g=null;t:for(;;){for(var y;h!==n||l!==0&&h.nodeType!==3||(a=o+l),h!==i||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)g=h,h=y;for(;;){if(h===e)break t;if(g===n&&++c===l&&(a=o),g===i&&++m===r&&(s=o),(y=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ai={focusedElem:e,selectionRange:n},br=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,C=w.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?_:Te(t.type,_),C);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){K(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return w=ps,ps=!1,w}function Vn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&no(t,n,i)}l=l.next}while(l!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ro(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lc(e){var t=e.alternate;t!==null&&(e.alternate=null,Lc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[We],delete t[nr],delete t[Vi],delete t[op],delete t[ap])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rc(e){return e.tag===5||e.tag===3||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=nl));else if(r!==4&&(e=e.child,e!==null))for(lo(e,t,n),e=e.sibling;e!==null;)lo(e,t,n),e=e.sibling}function io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(io(e,t,n),e=e.sibling;e!==null;)io(e,t,n),e=e.sibling}var te=null,Me=!1;function nt(e,t,n){for(n=n.child;n!==null;)Tc(e,t,n),n=n.sibling}function Tc(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:ae||bt(n,t);case 6:var r=te,l=Me;te=null,nt(e,t,n),te=r,Me=l,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?li(e.parentNode,n):e.nodeType===1&&li(e,n),qn(e)):li(te,n.stateNode));break;case 4:r=te,l=Me,te=n.stateNode.containerInfo,Me=!0,nt(e,t,n),te=r,Me=l;break;case 0:case 11:case 14:case 15:if(!ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&no(n,t,o),l=l.next}while(l!==r)}nt(e,t,n);break;case 1:if(!ae&&(bt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}nt(e,t,n);break;case 21:nt(e,t,n);break;case 22:n.mode&1?(ae=(r=ae)||n.memoizedState!==null,nt(e,t,n),ae=r):nt(e,t,n);break;default:nt(e,t,n)}}function ms(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sp),t.forEach(function(r){var l=Mp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Me=!1;break e;case 3:te=a.stateNode.containerInfo,Me=!0;break e;case 4:te=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(te===null)throw Error(k(160));Tc(i,o,l),te=null,Me=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){K(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mc(t,e),t=t.sibling}function Mc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),$e(e),r&4){try{Vn(3,e,e.return),zl(3,e)}catch(_){K(e,e.return,_)}try{Vn(5,e,e.return)}catch(_){K(e,e.return,_)}}break;case 1:Re(t,e),$e(e),r&512&&n!==null&&bt(n,n.return);break;case 5:if(Re(t,e),$e(e),r&512&&n!==null&&bt(n,n.return),e.flags&32){var l=e.stateNode;try{Yn(l,"")}catch(_){K(e,e.return,_)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&tu(l,i),zi(a,o);var c=zi(a,i);for(o=0;o<s.length;o+=2){var m=s[o],h=s[o+1];m==="style"?ou(l,h):m==="dangerouslySetInnerHTML"?lu(l,h):m==="children"?Yn(l,h):ko(l,m,h,c)}switch(a){case"input":Ci(l,i);break;case"textarea":nu(l,i);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?tn(l,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?tn(l,!!i.multiple,i.defaultValue,!0):tn(l,!!i.multiple,i.multiple?[]:"",!1))}l[nr]=i}catch(_){K(e,e.return,_)}}break;case 6:if(Re(t,e),$e(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(_){K(e,e.return,_)}}break;case 3:if(Re(t,e),$e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(_){K(e,e.return,_)}break;case 4:Re(t,e),$e(e);break;case 13:Re(t,e),$e(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(ta=G())),r&4&&ms(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(c=ae)||m,Re(t,e),ae=c):Re(t,e),$e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(E=e,m=e.child;m!==null;){for(h=E=m;E!==null;){switch(g=E,y=g.child,g.tag){case 0:case 11:case 14:case 15:Vn(4,g,g.return);break;case 1:bt(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){K(r,n,_)}}break;case 5:bt(g,g.return);break;case 22:if(g.memoizedState!==null){vs(h);continue}}y!==null?(y.return=g,E=y):vs(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=iu("display",o))}catch(_){K(e,e.return,_)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){K(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Re(t,e),$e(e),r&4&&ms(e);break;case 21:break;default:Re(t,e),$e(e)}}function $e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rc(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Yn(l,""),r.flags&=-33);var i=hs(e);io(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hs(e);lo(e,a,o);break;default:throw Error(k(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ep(e,t,n){E=e,Oc(e)}function Oc(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var l=E,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Tr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||ae;a=Tr;var c=ae;if(Tr=o,(ae=s)&&!c)for(E=l;E!==null;)o=E,s=o.child,o.tag===22&&o.memoizedState!==null?ys(l):s!==null?(s.return=o,E=s):ys(l);for(;i!==null;)E=i,Oc(i),i=i.sibling;E=l,Tr=a,ae=c}gs(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,E=i):gs(e)}}function gs(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ae)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&es(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}es(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&qn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}ae||t.flags&512&&ro(t)}catch(g){K(t,t.return,g)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function vs(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function ys(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(s){K(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(s){K(t,l,s)}}var i=t.return;try{ro(t)}catch(s){K(t,i,s)}break;case 5:var o=t.return;try{ro(t)}catch(s){K(t,o,s)}}}catch(s){K(t,t.return,s)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var jp=Math.ceil,pl=be.ReactCurrentDispatcher,bo=be.ReactCurrentOwner,Pe=be.ReactCurrentBatchConfig,O=0,ee=null,X=null,ne=0,xe=0,en=kt(0),q=0,sr=null,Ft=0,Ll=0,ea=0,Hn=null,pe=null,ta=0,mn=1/0,He=null,hl=!1,oo=null,mt=null,Mr=!1,st=null,ml=0,Qn=0,ao=null,Qr=-1,Kr=0;function ce(){return O&6?G():Qr!==-1?Qr:Qr=G()}function gt(e){return e.mode&1?O&2&&ne!==0?ne&-ne:up.transition!==null?(Kr===0&&(Kr=yu()),Kr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Eu(e.type)),e):1}function Fe(e,t,n,r){if(50<Qn)throw Qn=0,ao=null,Error(k(185));fr(e,n,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(Ll|=n),q===4&&ot(e,ne)),ve(e,r),n===1&&O===0&&!(t.mode&1)&&(mn=G()+500,jl&&St()))}function ve(e,t){var n=e.callbackNode;uf(e,t);var r=Zr(e,e===ee?ne:0);if(r===0)n!==null&&Na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Na(n),t===1)e.tag===0?sp(xs.bind(null,e)):Hu(xs.bind(null,e)),lp(function(){!(O&6)&&St()}),n=null;else{switch(xu(r)){case 1:n=No;break;case 4:n=gu;break;case 16:n=qr;break;case 536870912:n=vu;break;default:n=qr}n=Bc(n,Ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ic(e,t){if(Qr=-1,Kr=0,O&6)throw Error(k(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var r=Zr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=gl(e,r);else{t=r;var l=O;O|=2;var i=Dc();(ee!==e||ne!==t)&&(He=null,mn=G()+500,Rt(e,t));do try{zp();break}catch(a){Fc(e,a)}while(!0);Ao(),pl.current=i,O=l,X!==null?t=0:(ee=null,ne=0,t=q)}if(t!==0){if(t===2&&(l=Oi(e),l!==0&&(r=l,t=so(e,l))),t===1)throw n=sr,Rt(e,0),ot(e,r),ve(e,G()),n;if(t===6)ot(e,r);else{if(l=e.current.alternate,!(r&30)&&!Np(l)&&(t=gl(e,r),t===2&&(i=Oi(e),i!==0&&(r=i,t=so(e,i))),t===1))throw n=sr,Rt(e,0),ot(e,r),ve(e,G()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Nt(e,pe,He);break;case 3:if(ot(e,r),(r&130023424)===r&&(t=ta+500-G(),10<t)){if(Zr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Bi(Nt.bind(null,e,pe,He),t);break}Nt(e,pe,He);break;case 4:if(ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ie(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jp(r/1960))-r,10<r){e.timeoutHandle=Bi(Nt.bind(null,e,pe,He),r);break}Nt(e,pe,He);break;case 5:Nt(e,pe,He);break;default:throw Error(k(329))}}}return ve(e,G()),e.callbackNode===n?Ic.bind(null,e):null}function so(e,t){var n=Hn;return e.current.memoizedState.isDehydrated&&(Rt(e,t).flags|=256),e=gl(e,t),e!==2&&(t=pe,pe=n,t!==null&&uo(t)),e}function uo(e){pe===null?pe=e:pe.push.apply(pe,e)}function Np(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ot(e,t){for(t&=~ea,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function xs(e){if(O&6)throw Error(k(327));an();var t=Zr(e,0);if(!(t&1))return ve(e,G()),null;var n=gl(e,t);if(e.tag!==0&&n===2){var r=Oi(e);r!==0&&(t=r,n=so(e,r))}if(n===1)throw n=sr,Rt(e,0),ot(e,t),ve(e,G()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nt(e,pe,He),ve(e,G()),null}function na(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(mn=G()+500,jl&&St())}}function Dt(e){st!==null&&st.tag===0&&!(O&6)&&an();var t=O;O|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,O=t,!(O&6)&&St()}}function ra(){xe=en.current,$(en)}function Rt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rp(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Do(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:pn(),$(me),$(se),Ko();break;case 5:Qo(r);break;case 4:pn();break;case 13:$(B);break;case 19:$(B);break;case 10:Wo(r.type._context);break;case 22:case 23:ra()}n=n.return}if(ee=e,X=e=vt(e.current,null),ne=xe=t,q=0,sr=null,ea=Ll=Ft=0,pe=Hn=null,zt!==null){for(t=0;t<zt.length;t++)if(n=zt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}zt=null}return e}function Fc(e,t){do{var n=X;try{if(Ao(),Br.current=fl,dl){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}dl=!1}if(It=0,b=J=V=null,Bn=!1,ir=0,bo.current=null,n===null||n.return===null){q=1,sr=t,X=null;break}e:{var i=e,o=n.return,a=n,s=t;if(t=ne,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=a,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=os(o);if(y!==null){y.flags&=-257,as(y,o,a,i,t),y.mode&1&&is(i,c,t),t=y,s=c;var w=t.updateQueue;if(w===null){var _=new Set;_.add(s),t.updateQueue=_}else w.add(s);break e}else{if(!(t&1)){is(i,c,t),la();break e}s=Error(k(426))}}else if(U&&a.mode&1){var C=os(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),as(C,o,a,i,t),$o(hn(s,a));break e}}i=s=hn(s,a),q!==4&&(q=2),Hn===null?Hn=[i]:Hn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=xc(i,s,t);ba(i,f);break e;case 1:a=s;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(mt===null||!mt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=wc(i,a,t);ba(i,v);break e}}i=i.return}while(i!==null)}Uc(n)}catch(S){t=S,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function Dc(){var e=pl.current;return pl.current=fl,e===null?fl:e}function la(){(q===0||q===3||q===2)&&(q=4),ee===null||!(Ft&268435455)&&!(Ll&268435455)||ot(ee,ne)}function gl(e,t){var n=O;O|=2;var r=Dc();(ee!==e||ne!==t)&&(He=null,Rt(e,t));do try{Pp();break}catch(l){Fc(e,l)}while(!0);if(Ao(),O=n,pl.current=r,X!==null)throw Error(k(261));return ee=null,ne=0,q}function Pp(){for(;X!==null;)$c(X)}function zp(){for(;X!==null&&!bd();)$c(X)}function $c(e){var t=Wc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Uc(e):X=t,bo.current=null}function Uc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kp(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{q=6,X=null;return}}else if(n=_p(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);q===0&&(q=5)}function Nt(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,Lp(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function Lp(e,t,n,r){do an();while(st!==null);if(O&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(cf(e,i),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,Bc(qr,function(){return an(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Pe.transition,Pe.transition=null;var o=I;I=1;var a=O;O|=4,bo.current=null,Cp(e,n),Mc(n,e),Jf(Ai),br=!!Ui,Ai=Ui=null,e.current=n,Ep(n),ef(),O=a,I=o,Pe.transition=i}else e.current=n;if(Mr&&(Mr=!1,st=e,ml=l),i=e.pendingLanes,i===0&&(mt=null),rf(n.stateNode),ve(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(hl)throw hl=!1,e=oo,oo=null,e;return ml&1&&e.tag!==0&&an(),i=e.pendingLanes,i&1?e===ao?Qn++:(Qn=0,ao=e):Qn=0,St(),null}function an(){if(st!==null){var e=xu(ml),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,st===null)var r=!1;else{if(e=st,st=null,ml=0,O&6)throw Error(k(331));var l=O;for(O|=4,E=e.current;E!==null;){var i=E,o=i.child;if(E.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(E=c;E!==null;){var m=E;switch(m.tag){case 0:case 11:case 15:Vn(8,m,i)}var h=m.child;if(h!==null)h.return=m,E=h;else for(;E!==null;){m=E;var g=m.sibling,y=m.return;if(Lc(m),m===c){E=null;break}if(g!==null){g.return=y,E=g;break}E=y}}}var w=i.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var C=_.sibling;_.sibling=null,_=C}while(_!==null)}}E=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,E=o;else e:for(;E!==null;){if(i=E,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Vn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,E=f;break e}E=i.return}}var d=e.current;for(E=d;E!==null;){o=E;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,E=p;else e:for(o=d;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zl(9,a)}}catch(S){K(a,a.return,S)}if(a===o){E=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,E=v;break e}E=a.return}}if(O=l,St(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(_l,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function ws(e,t,n){t=hn(n,t),t=xc(e,t,1),e=ht(e,t,1),t=ce(),e!==null&&(fr(e,1,t),ve(e,t))}function K(e,t,n){if(e.tag===3)ws(e,e,n);else for(;t!==null;){if(t.tag===3){ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=hn(n,e),e=wc(t,e,1),t=ht(t,e,1),e=ce(),t!==null&&(fr(t,1,e),ve(t,e));break}}t=t.return}}function Rp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(q===4||q===3&&(ne&130023424)===ne&&500>G()-ta?Rt(e,0):ea|=n),ve(e,t)}function Ac(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ce();e=qe(e,t),e!==null&&(fr(e,t,n),ve(e,n))}function Tp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ac(e,n)}function Mp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Ac(e,n)}var Wc;Wc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)he=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return he=!1,wp(e,t,n);he=!!(e.flags&131072)}else he=!1,U&&t.flags&1048576&&Qu(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var l=cn(t,se.current);on(t,n),l=Go(null,t,r,e,l,n);var i=Xo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(i=!0,ll(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Vo(t),l.updater=Pl,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=Zi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&Fo(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Ip(r),e=Te(r,e),l){case 0:t=qi(null,t,r,e,n);break e;case 1:t=cs(null,t,r,e,n);break e;case 11:t=ss(null,t,r,e,n);break e;case 14:t=us(null,t,r,Te(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),qi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),cs(e,t,r,l,n);case 3:e:{if(Cc(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,qu(e,t),ul(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=hn(Error(k(423)),t),t=ds(e,t,r,n,l);break e}else if(r!==l){l=hn(Error(k(424)),t),t=ds(e,t,r,n,l);break e}else for(we=pt(t.stateNode.containerInfo.firstChild),_e=t,U=!0,Oe=null,n=Xu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===l){t=Ze(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return Zu(t),e===null&&Ki(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Wi(r,l)?o=null:i!==null&&Wi(r,i)&&(t.flags|=32),Sc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&Ki(t),null;case 13:return Ec(e,t,n);case 4:return Ho(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),ss(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,F(al,r._currentValue),r._currentValue=o,i!==null)if(De(i.value,o)){if(i.children===l.children&&!me.current){t=Ze(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Ge(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Yi(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,on(t,n),l=ze(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),us(e,t,r,l,n);case 15:return _c(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Hr(e,t),t.tag=1,ge(r)?(e=!0,ll(t)):e=!1,on(t,n),yc(t,r,l),Xi(t,r,l,n),Zi(null,t,r,!0,e,n);case 19:return jc(e,t,n);case 22:return kc(e,t,n)}throw Error(k(156,t.tag))};function Bc(e,t){return mu(e,t)}function Op(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Op(e,t,n,r)}function ia(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ip(e){if(typeof e=="function")return ia(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Co)return 11;if(e===Eo)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")ia(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ht:return Tt(n.children,l,i,t);case So:o=8,l|=8;break;case xi:return e=Ne(12,n,t,l|2),e.elementType=xi,e.lanes=i,e;case wi:return e=Ne(13,n,t,l),e.elementType=wi,e.lanes=i,e;case _i:return e=Ne(19,n,t,l),e.elementType=_i,e.lanes=i,e;case Zs:return Rl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Js:o=10;break e;case qs:o=9;break e;case Co:o=11;break e;case Eo:o=14;break e;case rt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Tt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Rl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=Zs,e.lanes=n,e.stateNode={isHidden:!1},e}function fi(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function pi(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function oa(e,t,n,r,l,i,o,a,s){return e=new Fp(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ne(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vo(i),e}function Dp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vc(e){if(!e)return wt;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ge(n))return Vu(e,n,t)}return t}function Hc(e,t,n,r,l,i,o,a,s){return e=oa(n,r,!0,e,l,i,o,a,s),e.context=Vc(null),n=e.current,r=ce(),l=gt(n),i=Ge(r,l),i.callback=t??null,ht(n,i,l),e.current.lanes=l,fr(e,l,r),ve(e,r),e}function Tl(e,t,n,r){var l=t.current,i=ce(),o=gt(l);return n=Vc(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ht(l,t,o),e!==null&&(Fe(e,l,o,i),Wr(e,l,o)),o}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _s(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function aa(e,t){_s(e,t),(e=e.alternate)&&_s(e,t)}function $p(){return null}var Qc=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Ml.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Tl(e,t,null,null)};Ml.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dt(function(){Tl(null,e,null,null)}),t[Je]=null}};function Ml(e){this._internalRoot=e}Ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=ku();e={blockedOn:null,target:e,priority:t};for(var n=0;n<it.length&&t!==0&&t<it[n].priority;n++);it.splice(n,0,e),n===0&&Cu(e)}};function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function Up(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=vl(o);i.call(c)}}var o=Hc(t,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=o,e[Je]=o.current,er(e.nodeType===8?e.parentNode:e),Dt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=vl(s);a.call(c)}}var s=oa(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=s,e[Je]=s.current,er(e.nodeType===8?e.parentNode:e),Dt(function(){Tl(t,s,n,r)}),s}function Il(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=vl(o);a.call(s)}}Tl(t,o,e,l)}else o=Up(n,t,e,l,r);return vl(o)}wu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(Po(t,n|1),ve(t,G()),!(O&6)&&(mn=G()+500,St()))}break;case 13:Dt(function(){var r=qe(e,1);if(r!==null){var l=ce();Fe(r,e,1,l)}}),aa(e,1)}};zo=function(e){if(e.tag===13){var t=qe(e,134217728);if(t!==null){var n=ce();Fe(t,e,134217728,n)}aa(e,134217728)}};_u=function(e){if(e.tag===13){var t=gt(e),n=qe(e,t);if(n!==null){var r=ce();Fe(n,e,t,r)}aa(e,t)}};ku=function(){return I};Su=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};Ri=function(e,t,n){switch(t){case"input":if(Ci(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=El(r);if(!l)throw Error(k(90));eu(r),Ci(r,l)}}}break;case"textarea":nu(e,n);break;case"select":t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}};uu=na;cu=Dt;var Ap={usingClientEntryPoint:!1,Events:[hr,Gt,El,au,su,na]},Tn={findFiberByHostInstance:Pt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wp={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pu(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||$p,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{_l=Or.inject(Wp),Be=Or}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ua(t))throw Error(k(200));return Dp(e,t,null,n)};Se.createRoot=function(e,t){if(!ua(e))throw Error(k(299));var n=!1,r="",l=Qc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=oa(e,1,!1,null,null,n,!1,r,l),e[Je]=t.current,er(e.nodeType===8?e.parentNode:e),new sa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=pu(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Dt(e)};Se.hydrate=function(e,t,n){if(!Ol(t))throw Error(k(200));return Il(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!ua(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Qc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Hc(t,null,e,1,n??null,l,!1,i,o),e[Je]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Ml(t)};Se.render=function(e,t,n){if(!Ol(t))throw Error(k(200));return Il(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(k(40));return e._reactRootContainer?(Dt(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};Se.unstable_batchedUpdates=na;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Il(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Kc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kc)}catch(e){console.error(e)}}Kc(),Ks.exports=Se;var Bp=Ks.exports,Ss=Bp;vi.createRoot=Ss.createRoot,vi.hydrateRoot=Ss.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ur(){return ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ur.apply(null,arguments)}var ut;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ut||(ut={}));const Cs="popstate";function Vp(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:a}=r.location;return co("",{pathname:i,search:o,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:yl(l)}return Qp(t,n,null,e)}function H(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hp(){return Math.random().toString(36).substr(2,8)}function Es(e,t){return{usr:e.state,key:e.key,idx:t}}function co(e,t,n,r){return n===void 0&&(n=null),ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_n(t):t,{state:n,key:t&&t.key||r||Hp()})}function yl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function _n(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Qp(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,a=ut.Pop,s=null,c=m();c==null&&(c=0,o.replaceState(ur({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function h(){a=ut.Pop;let C=m(),f=C==null?null:C-c;c=C,s&&s({action:a,location:_.location,delta:f})}function g(C,f){a=ut.Push;let d=co(_.location,C,f);c=m()+1;let p=Es(d,c),v=_.createHref(d);try{o.pushState(p,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(v)}i&&s&&s({action:a,location:_.location,delta:1})}function y(C,f){a=ut.Replace;let d=co(_.location,C,f);c=m();let p=Es(d,c),v=_.createHref(d);o.replaceState(p,"",v),i&&s&&s({action:a,location:_.location,delta:0})}function w(C){let f=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof C=="string"?C:yl(C);return d=d.replace(/ $/,"%20"),H(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let _={get action(){return a},get location(){return e(l,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return l.addEventListener(Cs,h),s=C,()=>{l.removeEventListener(Cs,h),s=null}},createHref(C){return t(l,C)},createURL:w,encodeLocation(C){let f=w(C);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(C){return o.go(C)}};return _}var js;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(js||(js={}));function Kp(e,t,n){return n===void 0&&(n="/"),Yp(e,t,n)}function Yp(e,t,n,r){let l=typeof t=="string"?_n(t):t,i=gn(l.pathname||"/",n);if(i==null)return null;let o=Gc(e);Gp(o);let a=null,s=ih(i);for(let c=0;a==null&&c<o.length;++c)a=rh(o[c],s);return a}function Gc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(H(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=yt([r,s.relativePath]),m=n.concat(s);i.children&&i.children.length>0&&(H(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Gc(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:th(c,i.index),routesMeta:m})};return e.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))l(i,o);else for(let s of Xc(i.path))l(i,o,s)}),t}function Xc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Xc(r.join("/")),a=[];return a.push(...o.map(s=>s===""?i:[i,s].join("/"))),l&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Gp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Xp=/^:[\w-]+$/,Jp=3,qp=2,Zp=1,bp=10,eh=-2,Ns=e=>e==="*";function th(e,t){let n=e.split("/"),r=n.length;return n.some(Ns)&&(r+=eh),t&&(r+=qp),n.filter(l=>!Ns(l)).reduce((l,i)=>l+(Xp.test(i)?Jp:i===""?Zp:bp),r)}function nh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function rh(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,m=i==="/"?t:t.slice(i.length)||"/",h=fo({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},m),g=s.route;if(!h)return null;Object.assign(l,h.params),o.push({params:l,pathname:yt([i,h.pathname]),pathnameBase:sh(yt([i,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(i=yt([i,h.pathnameBase]))}return o}function fo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lh(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,m,h)=>{let{paramName:g,isOptional:y}=m;if(g==="*"){let _=a[h]||"";o=i.slice(0,i.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[h];return y&&!w?c[g]=void 0:c[g]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function lh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ih(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function oh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?_n(e):e,i;return n?(n=Jc(n),n.startsWith("/")?i=Ps(n.substring(1),"/"):i=Ps(n,t)):i=t,{pathname:i,search:uh(r),hash:ch(l)}}function Ps(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function hi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ah(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ca(e,t){let n=ah(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function da(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=_n(e):(l=ur({},e),H(!l.pathname||!l.pathname.includes("?"),hi("?","pathname","search",l)),H(!l.pathname||!l.pathname.includes("#"),hi("#","pathname","hash",l)),H(!l.search||!l.search.includes("#"),hi("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}a=h>=0?t[h]:"/"}let s=oh(l,a),c=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||m)&&(s.pathname+="/"),s}const Jc=e=>e.replace(/\/\/+/g,"/"),yt=e=>Jc(e.join("/")),sh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ch=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qc=["post","put","patch","delete"];new Set(qc);const fh=["get",...qc];new Set(fh);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cr(){return cr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cr.apply(null,arguments)}const Fl=x.createContext(null),Zc=x.createContext(null),et=x.createContext(null),Dl=x.createContext(null),tt=x.createContext({outlet:null,matches:[],isDataRoute:!1}),bc=x.createContext(null);function ph(e,t){let{relative:n}=t===void 0?{}:t;kn()||H(!1);let{basename:r,navigator:l}=x.useContext(et),{hash:i,pathname:o,search:a}=$l(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:yt([r,o])),l.createHref({pathname:s,search:a,hash:i})}function kn(){return x.useContext(Dl)!=null}function At(){return kn()||H(!1),x.useContext(Dl).location}function ed(e){x.useContext(et).static||x.useLayoutEffect(e)}function fa(){let{isDataRoute:e}=x.useContext(tt);return e?jh():hh()}function hh(){kn()||H(!1);let e=x.useContext(Fl),{basename:t,future:n,navigator:r}=x.useContext(et),{matches:l}=x.useContext(tt),{pathname:i}=At(),o=JSON.stringify(ca(l,n.v7_relativeSplatPath)),a=x.useRef(!1);return ed(()=>{a.current=!0}),x.useCallback(function(c,m){if(m===void 0&&(m={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=da(c,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:yt([t,h.pathname])),(m.replace?r.replace:r.push)(h,m.state,m)},[t,r,o,i,e])}function td(){let{matches:e}=x.useContext(tt),t=e[e.length-1];return t?t.params:{}}function $l(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=x.useContext(et),{matches:l}=x.useContext(tt),{pathname:i}=At(),o=JSON.stringify(ca(l,r.v7_relativeSplatPath));return x.useMemo(()=>da(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function mh(e,t){return gh(e,t)}function gh(e,t,n,r){kn()||H(!1);let{navigator:l}=x.useContext(et),{matches:i}=x.useContext(tt),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=At(),m;if(t){var h;let C=typeof t=="string"?_n(t):t;s==="/"||(h=C.pathname)!=null&&h.startsWith(s)||H(!1),m=C}else m=c;let g=m.pathname||"/",y=g;if(s!=="/"){let C=s.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=Kp(e,{pathname:y}),_=_h(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:yt([s,l.encodeLocation?l.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:yt([s,l.encodeLocation?l.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return t&&_?x.createElement(Dl.Provider,{value:{location:cr({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ut.Pop}},_):_}function vh(){let e=Eh(),t=dh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:l},n):null,null)}const yh=x.createElement(vh,null);class xh extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?x.createElement(tt.Provider,{value:this.props.routeContext},x.createElement(bc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wh(e){let{routeContext:t,match:n,children:r}=e,l=x.useContext(Fl);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(tt.Provider,{value:t},r)}function _h(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let m=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);m>=0||H(!1),o=o.slice(0,Math.min(o.length,m+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let h=o[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=m),h.route.id){let{loaderData:g,errors:y}=n,w=h.route.loader&&g[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||w){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,h,g)=>{let y,w=!1,_=null,C=null;n&&(y=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||yh,s&&(c<0&&g===0?(Nh("route-fallback"),w=!0,C=null):c===g&&(w=!0,C=h.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let p;return y?p=_:w?p=C:h.route.Component?p=x.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,x.createElement(wh,{match:h,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?x.createElement(xh,{location:n.location,revalidation:n.revalidation,component:_,error:y,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var nd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(nd||{}),rd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rd||{});function kh(e){let t=x.useContext(Fl);return t||H(!1),t}function Sh(e){let t=x.useContext(Zc);return t||H(!1),t}function Ch(e){let t=x.useContext(tt);return t||H(!1),t}function ld(e){let t=Ch(),n=t.matches[t.matches.length-1];return n.route.id||H(!1),n.route.id}function Eh(){var e;let t=x.useContext(bc),n=Sh(),r=ld();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function jh(){let{router:e}=kh(nd.UseNavigateStable),t=ld(rd.UseNavigateStable),n=x.useRef(!1);return ed(()=>{n.current=!0}),x.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,cr({fromRouteId:t},i)))},[e,t])}const zs={};function Nh(e,t,n){zs[e]||(zs[e]=!0)}function Ph(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zh(e){let{to:t,replace:n,state:r,relative:l}=e;kn()||H(!1);let{future:i,static:o}=x.useContext(et),{matches:a}=x.useContext(tt),{pathname:s}=At(),c=fa(),m=da(t,ca(a,i.v7_relativeSplatPath),s,l==="path"),h=JSON.stringify(m);return x.useEffect(()=>c(JSON.parse(h),{replace:n,state:r,relative:l}),[c,h,l,n,r]),null}function Bt(e){H(!1)}function Lh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=ut.Pop,navigator:i,static:o=!1,future:a}=e;kn()&&H(!1);let s=t.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:s,navigator:i,static:o,future:cr({v7_relativeSplatPath:!1},a)}),[s,a,i,o]);typeof r=="string"&&(r=_n(r));let{pathname:m="/",search:h="",hash:g="",state:y=null,key:w="default"}=r,_=x.useMemo(()=>{let C=gn(m,s);return C==null?null:{location:{pathname:C,search:h,hash:g,state:y,key:w},navigationType:l}},[s,m,h,g,y,w,l]);return _==null?null:x.createElement(et.Provider,{value:c},x.createElement(Dl.Provider,{children:n,value:_}))}function Rh(e){let{children:t,location:n}=e;return mh(po(t),n)}new Promise(()=>{});function po(e,t){t===void 0&&(t=[]);let n=[];return x.Children.forEach(e,(r,l)=>{if(!x.isValidElement(r))return;let i=[...t,l];if(r.type===x.Fragment){n.push.apply(n,po(r.props.children,i));return}r.type!==Bt&&H(!1),!r.props.index||!r.props.children||H(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=po(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xl.apply(null,arguments)}function id(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Th(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Mh(e,t){return e.button===0&&(!t||t==="_self")&&!Th(e)}function ho(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(l=>[n,l]):[[n,r]])},[]))}function Oh(e,t){let n=ho(e);return t&&t.forEach((r,l)=>{n.has(l)||t.getAll(l).forEach(i=>{n.append(l,i)})}),n}const Ih=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Dh="6";try{window.__reactRouterVersion=Dh}catch{}const $h=x.createContext({isTransitioning:!1}),Uh="startTransition",Ls=Ld[Uh];function Ah(e){let{basename:t,children:n,future:r,window:l}=e,i=x.useRef();i.current==null&&(i.current=Vp({window:l,v5Compat:!0}));let o=i.current,[a,s]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},m=x.useCallback(h=>{c&&Ls?Ls(()=>s(h)):s(h)},[s,c]);return x.useLayoutEffect(()=>o.listen(m),[o,m]),x.useEffect(()=>Ph(r),[r]),x.createElement(Lh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Wh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=x.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:o,state:a,target:s,to:c,preventScrollReset:m,viewTransition:h}=t,g=id(t,Ih),{basename:y}=x.useContext(et),w,_=!1;if(typeof c=="string"&&Bh.test(c)&&(w=c,Wh))try{let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),S=gn(v.pathname,y);v.origin===p.origin&&S!=null?c=S+v.search+v.hash:_=!0}catch{}let C=ph(c,{relative:l}),f=Hh(c,{replace:o,state:a,target:s,preventScrollReset:m,relative:l,viewTransition:h});function d(p){r&&r(p),p.defaultPrevented||f(p)}return x.createElement("a",xl({},g,{href:w||C,onClick:_||i?r:d,ref:n,target:s}))}),mi=x.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:o=!1,style:a,to:s,viewTransition:c,children:m}=t,h=id(t,Fh),g=$l(s,{relative:h.relative}),y=At(),w=x.useContext(Zc),{navigator:_,basename:C}=x.useContext(et),f=w!=null&&Kh(g)&&c===!0,d=_.encodeLocation?_.encodeLocation(g).pathname:g.pathname,p=y.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;l||(p=p.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&C&&(v=gn(v,C)||v);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let N=p===d||!o&&p.startsWith(d)&&p.charAt(S)==="/",P=v!=null&&(v===d||!o&&v.startsWith(d)&&v.charAt(d.length)==="/"),z={isActive:N,isPending:P,isTransitioning:f},W=N?r:void 0,R;typeof i=="function"?R=i(z):R=[i,N?"active":null,P?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let ye=typeof a=="function"?a(z):a;return x.createElement(re,xl({},h,{"aria-current":W,className:R,ref:n,style:ye,to:s,viewTransition:c}),typeof m=="function"?m(z):m)});var mo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mo||(mo={}));var Rs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Rs||(Rs={}));function Vh(e){let t=x.useContext(Fl);return t||H(!1),t}function Hh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:o,viewTransition:a}=t===void 0?{}:t,s=fa(),c=At(),m=$l(e,{relative:o});return x.useCallback(h=>{if(Mh(h,n)){h.preventDefault();let g=r!==void 0?r:yl(c)===yl(m);s(e,{replace:g,state:l,preventScrollReset:i,relative:o,viewTransition:a})}},[c,s,m,r,l,n,e,i,o,a])}function Qh(e){let t=x.useRef(ho(e)),n=x.useRef(!1),r=At(),l=x.useMemo(()=>Oh(r.search,n.current?null:t.current),[r.search]),i=fa(),o=x.useCallback((a,s)=>{const c=ho(typeof a=="function"?a(l):a);n.current=!0,i("?"+c,s)},[i,l]);return[l,o]}function Kh(e,t){t===void 0&&(t={});let n=x.useContext($h);n==null&&H(!1);let{basename:r}=Vh(mo.useViewTransitionState),l=$l(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return fo(l.pathname,o)!=null||fo(l.pathname,i)!=null}/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=e=>{const t=Gh(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},Jh=x.createContext({}),qh=()=>x.useContext(Jh),Zh=x.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...a},s)=>{const{size:c=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,color:g="currentColor",className:y=""}=qh()??{},w=r??h?Number(n??m)*24/Number(t??c):n??m;return x.createElement("svg",{ref:s,...gi,width:t??c??gi.width,height:t??c??gi.height,stroke:e??g,strokeWidth:w,className:od("lucide",y,l),...!i&&!Xh(a)&&{"aria-hidden":"true"},...a},[...o.map(([_,C])=>x.createElement(_,C)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(e,t)=>{const n=x.forwardRef(({className:r,...l},i)=>x.createElement(Zh,{ref:i,iconNode:t,className:od(`lucide-${Yh(Ts(e))}`,`lucide-${e}`,r),...l}));return n.displayName=Ts(e),n};/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],em=A("arrow-right",bh);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],nm=A("at-sign",tm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lm=A("chevron-down",rm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],om=A("chevron-left",im);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],sm=A("chevron-right",am);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]],cm=A("gift",um);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],fm=A("heart",dm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hm=A("map-pin",pm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],gm=A("menu",mm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],ym=A("message-circle",vm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M5 12h14",key:"1ays0h"}]],wm=A("minus",xm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]],km=A("music-2",_m);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Cm=A("pause",Sm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],jm=A("play",Em);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Pm=A("plus",Nm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Lm=A("rotate-ccw",zm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]],Tm=A("ruler",Rm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ad=A("search",Mm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Im=A("shield-check",Om);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Dm=A("shopping-bag",Fm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Um=A("sparkles",$m);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wm=A("trash-2",Am);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Vm=A("truck",Bm);/**
 * @license lucide-react v1.28.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],sd=A("x",Hm),ud=x.createContext(null);function Qm({children:e}){const[t,n]=x.useState([]);function r(c,m=1){n(h=>h.find(y=>y.id===c.id)?h.map(y=>y.id===c.id?{...y,qty:y.qty+m}:y):[...h,{...c,qty:m}])}function l(c){n(m=>m.filter(h=>h.id!==c))}function i(c,m){n(h=>h.map(g=>g.id===c?{...g,qty:Math.max(1,m)}:g))}const o=x.useMemo(()=>t.reduce((c,m)=>c+m.price*m.qty,0),[t]),a=x.useMemo(()=>t.reduce((c,m)=>c+m.qty,0),[t]),s={items:t,addToCart:r,removeFromCart:l,updateQty:i,subtotal:o,count:a};return u.jsx(ud.Provider,{value:s,children:e})}function pa(){const e=x.useContext(ud);if(!e)throw new Error("useCart must be used within CartProvider");return e}const Ms=["FREE SHIPPING ON ORDERS OVER ₦150,000","NEW ARRIVALS — THE MERIDIAN COLLECTION","FREE RESIZING WITHIN 30 DAYS"];function Km(){const[e,t]=x.useState(0);return x.useEffect(()=>{const n=setInterval(()=>{t(r=>(r+1)%Ms.length)},4500);return()=>clearInterval(n)},[]),u.jsxs("div",{className:"topbar",children:[u.jsx("span",{className:"topbar__msg",children:Ms[e]},e),u.jsx("style",{children:`
        .topbar {
          background: var(--ink);
          color: var(--white);
          text-align: center;
          padding: 10px 16px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          overflow: hidden;
        }
        .topbar__msg {
          display: inline-block;
          animation: topbar-fade 0.5s ease;
        }
        @keyframes topbar-fade {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .topbar__msg { animation: none; }
        }
      `})]})}const Ue={ring:"https://images.unsplash.com/photo-1656010280156-fa8c1793c235?auto=format&fit=crop&w=800&q=70",necklace:"https://images.unsplash.com/photo-1654699991520-aaaf4dd2608b?auto=format&fit=crop&w=800&q=70",earring:"https://images.unsplash.com/photo-1596107034181-9f168717f1ee?auto=format&fit=crop&w=800&q=70",bracelet:"https://images.unsplash.com/photo-1655255114527-d0a834d9a774?auto=format&fit=crop&w=800&q=70",watchA:"https://images.unsplash.com/photo-1704428303280-84768603d539?auto=format&fit=crop&w=800&q=70",watchB:"https://images.unsplash.com/photo-1758071348980-d1eed770f34f?auto=format&fit=crop&w=800&q=70"},vn=[{id:"ring-halcyon",name:"Halcyon Ring",category:"jewelry",type:"ring",price:184e3,material:"18k gold vermeil, lab-grown diamond",description:"A single stone set low on a tapered band, made to catch light without shouting about it. Sized to order.",image:Ue.ring,tile:["#ff4fa3","#ff1587"],featured:!0},{id:"necklace-solene",name:"Solène Pendant",category:"jewelry",type:"necklace",price:156e3,material:"18k gold vermeil, freshwater pearl",description:"A single pearl on a fine box chain — the kind of piece that goes from desk to dinner without a change of clothes.",image:Ue.necklace,tile:["#f3d4e6","#ff1587"],featured:!0},{id:"earring-nova",name:"Nova Hoops",category:"jewelry",type:"earring",price:98e3,material:"18k gold vermeil",description:"Weighted for a slight, satisfying sway. Small enough for Monday, polished enough for anything after.",image:Ue.earring,tile:["#ffd7ea","#d8006b"]},{id:"bracelet-verre",name:"Verre Bangle",category:"jewelry",type:"bracelet",price:122e3,material:"18k gold vermeil",description:"A single unbroken line, worn alone or stacked three deep. Comes in three fits.",image:Ue.bracelet,tile:["#ffb8dc","#ff1587"]},{id:"earring-studette",name:"Studette Drops",category:"jewelry",type:"earring",price:74e3,material:"sterling silver, cubic zirconia",description:"Small stones, secure backs, the earring you forget you are wearing until someone compliments it.",image:Ue.earring,tile:["#f7c9de","#c7a25c"]},{id:"ring-marea",name:"Marea Band",category:"jewelry",type:"ring",price:132e3,material:"18k gold vermeil",description:"A wave-textured band that reads sculptural up close and quiet from across the room.",image:Ue.ring,tile:["#ffe1ef","#ff4fa3"]},{id:"watch-meridian",name:"Meridian",category:"watches",type:"watch",price:268e3,material:"stainless steel case, sapphire crystal, 38mm",description:"A clean three-hand dial with a date window at three — sized to sit close to the wrist, not shout from across a room.",image:Ue.watchA,tile:["#1a1613","#ff1587"],featured:!0},{id:"watch-lumen",name:"Lumen",category:"watches",type:"watch",price:312e3,material:"rose gold-plated case, mother-of-pearl dial, 34mm",description:"A mother-of-pearl face that shifts colour with the light — the closest thing to jewelry that also tells time.",image:Ue.watchB,tile:["#2a201c","#c7a25c"],featured:!0},{id:"watch-noir",name:"Noir Chrono",category:"watches",type:"watch",price:358e3,material:"black IP steel case, chronograph movement, 40mm",description:"The sport watch for people who do not do sport — three subdials, black on black, tactile pushers.",image:Ue.watchA,tile:["#0e0c0b","#6b6560"]},{id:"watch-linea",name:"Linea",category:"watches",type:"watch",price:224e3,material:"gold-plated mesh strap, 32mm",description:"A mesh strap that sits like fabric against the wrist, with a dial small enough to layer under a cuff.",image:Ue.watchB,tile:["#241d1a","#ff8dc0"]}];function Ym(e){return vn.find(t=>t.id===e)}function Gm(){return vn.filter(e=>e.featured)}function Xm(e){return!e||e==="all"?vn:vn.filter(t=>t.category===e)}function sn(e){return`₦${e.toLocaleString("en-NG")}`}function Jm({open:e,onClose:t}){const[n,r]=x.useState(""),l=x.useMemo(()=>{const i=n.trim().toLowerCase();return i?vn.filter(o=>o.name.toLowerCase().includes(i)||o.type.toLowerCase().includes(i)||o.category.toLowerCase().includes(i)).slice(0,6):[]},[n]);return e?u.jsxs("div",{className:"search",children:[u.jsxs("div",{className:"wrap search__row",children:[u.jsx(ad,{size:18,strokeWidth:1.5}),u.jsx("input",{autoFocus:!0,type:"text",placeholder:"Search rings, watches, necklaces…",value:n,onChange:i=>r(i.target.value)}),u.jsx("button",{"aria-label":"Close search",onClick:()=>{r(""),t()},children:u.jsx(sd,{size:18,strokeWidth:1.5})})]}),n.trim()&&u.jsx("div",{className:"wrap search__results",children:l.length===0?u.jsxs("p",{className:"search__empty",children:['No pieces match "',n,'".']}):l.map(i=>u.jsxs(re,{to:`/product/${i.id}`,className:"search__item",onClick:t,children:[u.jsx("span",{children:i.name}),u.jsx("span",{className:"search__item-price",children:sn(i.price)})]},i.id))}),u.jsx("style",{children:`
        .search {
          background: var(--ivory);
          border-bottom: 1px solid rgba(20,16,15,0.08);
        }
        .search__row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px var(--gutter);
          color: var(--graphite);
        }
        .search__row input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-family: var(--font);
          font-size: 15px;
          color: var(--ink);
        }
        .search__row button {
          background: none;
          border: none;
          color: var(--graphite);
          display: flex;
        }
        .search__results {
          padding-bottom: 12px;
          display: flex;
          flex-direction: column;
        }
        .search__empty {
          font-size: 13px;
          color: var(--graphite);
          padding: 8px 0;
        }
        .search__item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 14px;
          border-top: 1px solid rgba(20,16,15,0.06);
        }
        .search__item-price {
          color: var(--pink-deep);
        }
      `})]}):null}const qm="/assets/aurelia-logo-pink-Bd2eiJCA.png";function Zm(){const{count:e}=pa(),[t,n]=x.useState(!1),[r,l]=x.useState(!1);return u.jsxs("header",{className:"header",children:[u.jsx(Km,{}),u.jsxs("div",{className:"wrap header__row",children:[u.jsx("button",{className:"header__burger","aria-label":"Toggle menu",onClick:()=>n(i=>!i),children:t?u.jsx(sd,{size:22,strokeWidth:1.5}):u.jsx(gm,{size:22,strokeWidth:1.5})}),u.jsx(re,{to:"/",className:"header__logo",onClick:()=>n(!1),children:u.jsx("img",{src:qm,alt:"Aurelia"})}),u.jsxs("nav",{className:`header__nav ${t?"is-open":""}`,children:[u.jsx(mi,{to:"/shop/jewelry",onClick:()=>n(!1),children:"Jewelry"}),u.jsx(mi,{to:"/shop/watches",onClick:()=>n(!1),children:"Watches"}),u.jsx(mi,{to:"/shop/all",onClick:()=>n(!1),children:"All Pieces"})]}),u.jsxs("div",{className:"header__actions",children:[u.jsx("button",{className:"header__icon-btn","aria-label":"Search",onClick:()=>l(i=>!i),children:u.jsx(ad,{size:19,strokeWidth:1.5})}),u.jsxs(re,{to:"/wishlist",className:"header__icon-btn header__wishlist","aria-label":"Wishlist",children:[u.jsx(fm,{size:19,strokeWidth:1.5}),u.jsx("span",{className:"header__count header__count--muted",children:"0"})]}),u.jsx("button",{className:"header__icon-btn header__store","aria-label":"Find a store",children:u.jsx(hm,{size:19,strokeWidth:1.5})}),u.jsxs(re,{to:"/cart",className:"header__icon-btn header__cart","aria-label":"View cart",children:[u.jsx(Dm,{size:19,strokeWidth:1.5}),e>0&&u.jsx("span",{className:"header__count",children:e})]})]})]}),u.jsx(Jm,{open:r,onClose:()=>l(!1)}),u.jsx("style",{children:`
        .header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(251, 247, 243, 0.96);
          backdrop-filter: blur(10px);
        }
        .header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
          border-bottom: 1px solid rgba(20, 16, 15, 0.08);
        }
        .header__logo img {
          height: 30px;
          width: auto;
        }
        @media (max-width: 560px) {
          .header__row { height: 64px; }
          .header__logo img { height: 22px; }
        }
        .header__nav {
          display: flex;
          gap: 40px;
        }
        .header__nav a {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink);
          padding-bottom: 4px;
        }
        .header__nav a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: var(--champagne);
          transition: width 0.3s ease;
        }
        .header__nav a:hover::after,
        .header__nav a.active::after {
          width: 100%;
        }
        .header__actions {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .header__icon-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--ink);
          padding: 4px;
        }
        .header__store {
          display: flex;
        }
        .header__count {
          position: absolute;
          top: -6px;
          right: -8px;
          min-width: 16px;
          height: 16px;
          padding: 0 3px;
          border-radius: 50%;
          background: var(--pink);
          color: #fff;
          font-size: 9px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .header__count--muted {
          background: var(--graphite);
        }
        .header__burger {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 4px;
          color: var(--ink);
        }
        @media (max-width: 760px) {
          .header__nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--ivory);
            flex-direction: column;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            border-bottom: 1px solid rgba(20,16,15,0.08);
            transition: max-height 0.35s ease;
          }
          .header__nav.is-open {
            max-height: 220px;
          }
          .header__nav a {
            padding: 16px 32px;
            width: 100%;
          }
          .header__burger {
            display: flex;
          }
          .header__store {
            display: none;
          }
        }
        @media (max-width: 400px) {
          .header__actions { gap: 12px; }
        }
      `})]})}const bm=[{title:"Shop",links:[{label:"Jewelry",to:"/shop/jewelry"},{label:"Watches",to:"/shop/watches"},{label:"All Pieces",to:"/shop/all"}]},{title:"Care",links:[{label:"Shipping & returns",to:"#"},{label:"Sizing guide",to:"#"},{label:"Contact us",to:"#"}]}],eg=["VISA","MASTERCARD","VERVE","PAYPAL","APPLE PAY"];function tg(){const[e,t]=x.useState(null);function n(r){t(l=>l===r?null:r)}return u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"wrap footer__grid",children:[u.jsxs("div",{className:"footer__brand",children:[u.jsx("p",{className:"footer__wordmark",children:"Aurelia"}),u.jsx("p",{className:"footer__tag",children:"Fine jewelry & timepieces, made in small batches."}),u.jsxs("div",{className:"footer__socials",children:[u.jsx("a",{href:"#","aria-label":"WhatsApp",children:u.jsx(ym,{size:18,strokeWidth:1.5})}),u.jsx("a",{href:"#","aria-label":"Instagram",children:u.jsx(nm,{size:18,strokeWidth:1.5})}),u.jsx("a",{href:"#","aria-label":"TikTok",children:u.jsx(km,{size:18,strokeWidth:1.5})})]})]}),bm.map(r=>u.jsxs("div",{className:"footer__col",children:[u.jsxs("button",{className:"footer__col-head",onClick:()=>n(r.title),children:[u.jsx("span",{children:r.title}),u.jsx(lm,{size:16,strokeWidth:1.5,className:`footer__chevron ${e===r.title?"is-open":""}`})]}),u.jsx("ul",{className:e===r.title?"is-open":"",children:r.links.map(l=>u.jsx("li",{children:l.to.startsWith("/")?u.jsx(re,{to:l.to,children:l.label}):u.jsx("a",{href:l.to,children:l.label})},l.label))})]},r.title)),u.jsxs("div",{className:"footer__newsletter",children:[u.jsx("p",{className:"footer__heading",children:"Stay in the light"}),u.jsxs("form",{className:"footer__form",onSubmit:r=>r.preventDefault(),children:[u.jsx("input",{type:"email",placeholder:"Your email",required:!0}),u.jsx("button",{type:"submit","aria-label":"Subscribe",children:u.jsx(em,{size:18,strokeWidth:1.5})})]})]})]}),u.jsx("div",{className:"wrap footer__payments",children:eg.map(r=>u.jsx("span",{className:"footer__badge",children:r},r))}),u.jsxs("div",{className:"wrap footer__bottom",children:[u.jsxs("div",{className:"footer__legal",children:[u.jsx("a",{href:"#",children:"Privacy Policy"}),u.jsx("a",{href:"#",children:"Terms & Conditions"})]}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Aurelia. All rights reserved. Lagos · Made to order"]})]}),u.jsx("style",{children:`
        .footer {
          background: var(--ink);
          color: rgba(255,255,255,0.75);
          padding: 72px 0 28px;
          margin-top: var(--section-y);
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .footer__wordmark {
          font-family: var(--font);
          font-size: 24px;
          font-weight: 300;
          letter-spacing: 0.02em;
          color: var(--pink);
          margin: 0;
        }
        .footer__tag {
          margin-top: 14px;
          font-size: 13px;
          line-height: 1.7;
          max-width: 240px;
          color: rgba(255,255,255,0.55);
        }
        .footer__socials {
          display: flex;
          gap: 14px;
          margin-top: 20px;
        }
        .footer__socials a {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.85);
        }
        .footer__col-head {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: none;
          border: none;
          color: var(--champagne);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0 0 18px;
          cursor: default;
        }
        .footer__chevron {
          display: none;
        }
        .footer ul li {
          margin-bottom: 10px;
          font-size: 14px;
        }
        .footer__newsletter .footer__heading {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--champagne);
          margin: 0 0 18px;
        }
        .footer__form {
          display: flex;
          gap: 8px;
        }
        .footer__form input {
          flex: 1 1 160px;
          min-width: 0;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: var(--radius);
          padding: 12px 14px;
          color: #fff;
          font-family: var(--font);
          font-size: 13px;
        }
        .footer__form input::placeholder {
          color: rgba(255,255,255,0.45);
        }
        .footer__form button {
          width: 44px;
          flex-shrink: 0;
          background: var(--pink);
          border: 1.5px solid var(--pink-deep);
          border-radius: var(--radius);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer__payments {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 24px 32px 0;
        }
        .footer__badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: var(--radius);
          padding: 6px 10px;
          color: rgba(255,255,255,0.7);
        }
        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          flex-wrap: wrap;
          gap: 10px;
        }
        .footer__legal {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 760px) {
          .footer__grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 560px) {
          .footer { padding: 56px 0 24px; }
          .footer__grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .footer__brand { padding-bottom: 28px; }
          .footer__col {
            border-top: 1px solid rgba(255,255,255,0.12);
            padding: 18px 0;
          }
          .footer__col-head {
            padding: 0;
            cursor: pointer;
          }
          .footer__chevron {
            display: block;
            transition: transform 0.25s ease;
          }
          .footer__chevron.is-open {
            transform: rotate(180deg);
          }
          .footer ul {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .footer ul.is-open {
            max-height: 200px;
            margin-top: 14px;
          }
          .footer__newsletter {
            border-top: 1px solid rgba(255,255,255,0.12);
            padding-top: 24px;
          }
          .footer__bottom { flex-direction: column; align-items: flex-start; }
        }
      `})]})}const Ir=[{eyebrow:"Fine Jewelry & Timepieces",headline:["Worn close.","Noticed anyway."],sub:"Gold vermeil jewelry and precision wrist watches, designed in small batches and finished by hand.",cta:{label:"Shop the collection",to:"/shop/all"},image:"https://images.unsplash.com/photo-1656010280156-fa8c1793c235?auto=format&fit=crop&w=1600&q=70"},{eyebrow:"New — The Meridian Collection",headline:["Time, kept","close to you."],sub:"Sapphire crystal cases sized for every wrist, paired with dials that reward a second look.",cta:{label:"Shop watches",to:"/shop/watches"},image:"https://images.unsplash.com/photo-1704428303280-84768603d539?auto=format&fit=crop&w=1600&q=70"}];function ng(){const[e,t]=x.useState(0),[n,r]=x.useState(!0),l=x.useRef(null);x.useEffect(()=>{if(n)return l.current=setInterval(()=>{t(o=>(o+1)%Ir.length)},6e3),()=>clearInterval(l.current)},[n]);const i=Ir[e];return u.jsxs("section",{className:"hero",children:[Ir.map((o,a)=>u.jsx("div",{className:`hero__bg ${a===e?"is-active":""}`,style:{backgroundImage:`url(${o.image})`}},a)),u.jsx("div",{className:"hero__scrim"}),u.jsx("button",{className:"hero__toggle","aria-label":n?"Pause slideshow":"Play slideshow",onClick:()=>r(o=>!o),children:n?u.jsx(Cm,{size:15,strokeWidth:1.5}):u.jsx(jm,{size:15,strokeWidth:1.5})}),u.jsxs("div",{className:"wrap hero__inner",children:[u.jsx("p",{className:"eyebrow eyebrow--light",children:i.eyebrow}),u.jsxs("h1",{className:"hero__headline",children:[i.headline[0],u.jsx("br",{}),i.headline[1]]}),u.jsx("p",{className:"hero__sub",children:i.sub}),u.jsxs("div",{className:"hero__ctas",children:[u.jsx(re,{to:i.cta.to,className:"btn btn--pale",children:i.cta.label}),u.jsx(re,{to:"/shop/all",className:"btn__text",children:"View all pieces →"})]})]}),u.jsx("div",{className:"hero__dots",children:Ir.map((o,a)=>u.jsx("button",{className:`hero__dot ${a===e?"is-active":""}`,"aria-label":`Show slide ${a+1}`,onClick:()=>t(a)},a))}),u.jsx("style",{children:`
        .hero {
          position: relative;
          color: var(--white);
          padding: 110px 0 72px;
          overflow: hidden;
          background: var(--ink);
        }
        @media (max-width: 560px) {
          .hero { padding: 72px 0 56px; }
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s ease;
        }
        .hero__bg.is-active {
          opacity: 1;
        }
        .hero__scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            rgba(20,16,15,0.78) 0%,
            rgba(20,16,15,0.5) 45%,
            rgba(20,16,15,0.35) 100%
          );
        }
        .hero__toggle {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 2;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.4);
          background: rgba(0,0,0,0.25);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero__inner {
          position: relative;
          max-width: 720px;
        }
        .hero__headline {
          margin-top: 18px;
          font-size: clamp(44px, 8vw, 88px);
          font-weight: 200;
          letter-spacing: -0.01em;
          line-height: 1.02;
        }
        .hero__sub {
          margin-top: 26px;
          max-width: 440px;
          font-size: 16px;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255,255,255,0.88);
        }
        .hero__ctas {
          margin-top: 44px;
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .btn__text {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding-bottom: 3px;
        }
        .hero__dots {
          position: relative;
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 48px;
        }
        .hero__dot {
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.35);
          border: none;
          transition: background 0.3s ease;
        }
        .hero__dot.is-active {
          background: var(--white);
        }
      `})]})}function cd({product:e}){return u.jsxs(re,{to:`/product/${e.id}`,className:"pcard",children:[u.jsx("div",{className:"pcard__art shimmer",children:u.jsx("img",{src:e.image,alt:e.name,loading:"lazy"})}),u.jsxs("div",{className:"pcard__body",children:[u.jsx("p",{className:"pcard__type",children:e.type}),u.jsx("h3",{className:"pcard__name",children:e.name}),u.jsx("p",{className:"pcard__price",children:sn(e.price)})]}),u.jsx("style",{children:`
        .pcard {
          display: block;
        }
        .pcard__art {
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--blush);
          border: 1px solid var(--stroke);
        }
        .pcard__art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pcard__body {
          padding-top: 18px;
        }
        .pcard__type {
          margin: 0;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--champagne);
        }
        .pcard__name {
          margin-top: 8px;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.35;
          color: var(--ink);
        }
        .pcard__price {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
        }
      `})]})}function dd({products:e}){return e.length?u.jsxs("div",{className:"grid",children:[e.map(t=>u.jsx(cd,{product:t},t.id)),u.jsx("style",{children:`
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px 28px;
        }
        @media (max-width: 980px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .grid { grid-template-columns: 1fr 1fr; gap: 28px 16px; }
        }
        .empty {
          color: var(--graphite);
          padding: 60px 0;
        }
      `})]}):u.jsx("p",{className:"empty",children:"No pieces here yet — check back soon."})}function rg({products:e}){const t=x.useRef(null);function n(r){const l=t.current;if(!l)return;const i=l.clientWidth*.8*r;l.scrollBy({left:i,behavior:"smooth"})}return u.jsxs("div",{className:"best",children:[u.jsx("button",{className:"best__arrow best__arrow--left","aria-label":"Scroll left",onClick:()=>n(-1),children:u.jsx(om,{size:20,strokeWidth:1.5})}),u.jsx("div",{className:"best__track",ref:t,children:e.map(r=>u.jsx("div",{className:"best__item",children:u.jsx(cd,{product:r})},r.id))}),u.jsx("button",{className:"best__arrow best__arrow--right","aria-label":"Scroll right",onClick:()=>n(1),children:u.jsx(sm,{size:20,strokeWidth:1.5})}),u.jsx("style",{children:`
        .best {
          position: relative;
          display: flex;
          align-items: center;
        }
        .best__track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 4px 2px 12px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .best__track::-webkit-scrollbar {
          display: none;
        }
        .best__item {
          flex: 0 0 220px;
          scroll-snap-align: start;
        }
        .best__arrow {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(20,16,15,0.15);
          background: var(--ivory);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink);
          margin: 0 8px;
        }
        @media (max-width: 640px) {
          .best__arrow { display: none; }
          .best__item { flex-basis: 150px; }
        }
      `})]})}const lg=[{label:"Rings",type:"ring",category:"jewelry",image:"https://images.unsplash.com/photo-1656010280156-fa8c1793c235?auto=format&fit=crop&w=500&q=65"},{label:"Necklaces",type:"necklace",category:"jewelry",image:"https://images.unsplash.com/photo-1654699991520-aaaf4dd2608b?auto=format&fit=crop&w=500&q=65"},{label:"Earrings",type:"earring",category:"jewelry",image:"https://images.unsplash.com/photo-1596107034181-9f168717f1ee?auto=format&fit=crop&w=500&q=65"},{label:"Bracelets",type:"bracelet",category:"jewelry",image:"https://images.unsplash.com/photo-1655255114527-d0a834d9a774?auto=format&fit=crop&w=500&q=65"},{label:"Watches",type:"watch",category:"watches",image:"https://images.unsplash.com/photo-1704428303280-84768603d539?auto=format&fit=crop&w=500&q=65"}];function ig(){return u.jsxs("div",{className:"catgrid",children:[lg.map(({label:e,type:t,category:n,image:r})=>u.jsxs(re,{to:`/shop/${n}?type=${t}`,className:"catgrid__tile",children:[u.jsx("img",{src:r,alt:e,loading:"lazy"}),u.jsx("span",{className:"catgrid__overlay"}),u.jsx("span",{className:"catgrid__label",children:e})]},t)),u.jsx("style",{children:`
        .catgrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        .catgrid__tile {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 16px;
          border: 1px solid var(--stroke);
        }
        .catgrid__tile img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .catgrid__tile:hover img {
          transform: scale(1.06);
        }
        .catgrid__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,16,15,0.72), rgba(20,16,15,0.05) 55%);
        }
        .catgrid__label {
          position: relative;
          color: var(--white);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        @media (max-width: 760px) {
          .catgrid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .catgrid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
        }
      `})]})}const og=[{icon:Vm,label:"Free Shipping",sub:"On orders over ₦150,000"},{icon:Lm,label:"Extended Returns",sub:"30 days, no questions asked"},{icon:cm,label:"Easy Gifting",sub:"Signature box, gift note included"},{icon:Tm,label:"Free Resizing",sub:"Once, within 30 days"},{icon:Um,label:"Made to Order",sub:"Small batches, hand-finished"},{icon:Im,label:"Secure Checkout",sub:"Encrypted payments"}];function ag(){return u.jsxs("div",{className:"benefits",children:[og.map(({icon:e,label:t,sub:n})=>u.jsxs("div",{className:"benefits__item",children:[u.jsx(e,{size:26,strokeWidth:1.25,color:"var(--pink-deep)"}),u.jsx("p",{className:"benefits__label",children:t}),u.jsx("p",{className:"benefits__sub",children:n})]},t)),u.jsx("style",{children:`
        .benefits {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--stroke);
          border: 1px solid var(--stroke);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .benefits__item {
          background: var(--ivory);
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }
        .benefits__label {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--ink);
        }
        .benefits__sub {
          font-size: 12px;
          line-height: 1.5;
          color: var(--graphite);
        }
        @media (max-width: 640px) {
          .benefits { grid-template-columns: repeat(2, 1fr); }
        }
      `})]})}function sg(){const e=Gm(),t=vn.slice(0,8);return u.jsxs(u.Fragment,{children:[u.jsx(ng,{}),u.jsxs("section",{className:"wrap section",children:[u.jsxs("div",{className:"section__head",children:[u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Editors' Pick"}),u.jsx("h2",{className:"section__title",children:"Featured pieces"})]}),u.jsx(re,{to:"/shop/all",className:"section__link",children:"View all →"})]}),u.jsx("div",{className:"divider-gold"}),u.jsx(dd,{products:e})]}),u.jsxs("section",{className:"wrap section",children:[u.jsx("div",{className:"section__head",children:u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Most Loved"}),u.jsx("h2",{className:"section__title",children:"Best sellers"})]})}),u.jsx("div",{className:"divider-gold"}),u.jsx(rg,{products:t})]}),u.jsxs("section",{className:"wrap section",children:[u.jsx("div",{className:"section__head",children:u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:"Browse"}),u.jsx("h2",{className:"section__title",children:"Shop by category"})]})}),u.jsx("div",{className:"divider-gold"}),u.jsx(ig,{})]}),u.jsx("section",{className:"wrap section",children:u.jsx(ag,{})}),u.jsx("style",{children:`
        .section {
          padding: var(--section-y) 0 20px;
        }
        .section__head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .section__title {
          margin-top: 12px;
          font-size: clamp(26px, 5vw, 34px);
          font-weight: 300;
        }
        .section__link {
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--pink-deep);
        }
      `})]})}const ug={all:"All Pieces",jewelry:"Jewelry",watches:"Watches"};function cg(){const{category:e="all"}=td(),[t,n]=Qh(),r=t.get("type");let l=Xm(e);r&&(l=l.filter(a=>a.type===r));const i=ug[e]||"All Pieces";function o(){t.delete("type"),n(t)}return u.jsxs("div",{className:"shop wrap",children:[u.jsxs("div",{className:"shop__head",children:[u.jsx("p",{className:"eyebrow",children:"Shop"}),u.jsx("h1",{children:i}),u.jsxs("div",{className:"shop__tabs",children:[u.jsx(re,{to:"/shop/all",className:e==="all"?"is-active":"",children:"All"}),u.jsx(re,{to:"/shop/jewelry",className:e==="jewelry"?"is-active":"",children:"Jewelry"}),u.jsx(re,{to:"/shop/watches",className:e==="watches"?"is-active":"",children:"Watches"})]}),r&&u.jsxs("button",{className:"shop__filter",onClick:o,children:['Filtered by "',r,'" — clear ×']})]}),u.jsx("div",{className:"divider-gold"}),u.jsx(dd,{products:l}),u.jsx("style",{children:`
        .shop {
          padding: 48px 0 var(--section-y);
        }
        .shop__head h1 {
          margin-top: 12px;
          font-size: clamp(28px, 6vw, 40px);
          font-weight: 300;
        }
        .shop__tabs {
          margin-top: 28px;
          display: flex;
          gap: 24px;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .shop__tabs::-webkit-scrollbar {
          display: none;
        }
        .shop__tabs a {
          white-space: nowrap;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--graphite);
          padding-bottom: 6px;
          border-bottom: 1px solid transparent;
        }
        .shop__tabs a.is-active {
          color: var(--ink);
          border-color: var(--champagne);
        }
        .shop__filter {
          margin-top: 18px;
          display: inline-flex;
          background: var(--blush);
          border: none;
          border-radius: var(--radius);
          padding: 8px 14px;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--pink-deep);
        }
      `})]})}function dg(){const{id:e}=td(),t=Ym(e),{addToCart:n}=pa(),[r,l]=x.useState(!1);if(!t)return u.jsx(zh,{to:"/shop/all",replace:!0});function i(){n(t),l(!0),setTimeout(()=>l(!1),1800)}return u.jsxs("div",{className:"wrap detail",children:[u.jsxs(re,{to:`/shop/${t.category}`,className:"detail__back",children:["← Back to ",t.category==="watches"?"watches":"jewelry"]}),u.jsxs("div",{className:"detail__grid",children:[u.jsx("div",{className:"detail__art shimmer",children:u.jsx("img",{src:t.image,alt:t.name})}),u.jsxs("div",{className:"detail__info",children:[u.jsx("p",{className:"eyebrow",children:t.type}),u.jsx("h1",{children:t.name}),u.jsx("p",{className:"detail__price",children:sn(t.price)}),u.jsx("div",{className:"divider-gold"}),u.jsx("p",{className:"detail__desc",children:t.description}),u.jsxs("p",{className:"detail__material",children:[u.jsx("strong",{children:"Material"})," — ",t.material]}),u.jsx("button",{className:"btn btn--solid detail__cta",onClick:i,children:r?"Added to cart ✓":"Add to cart"}),u.jsxs("ul",{className:"detail__meta",children:[u.jsx("li",{children:"Free resizing within 30 days"}),u.jsx("li",{children:"Ships in 3–5 business days"}),u.jsx("li",{children:"Comes in the Aurelia signature box"})]})]})]}),u.jsx("style",{children:`
        .detail {
          padding: 40px 0 var(--section-y);
        }
        .detail__back {
          font-size: 13px;
          color: var(--graphite);
        }
        .detail__grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .detail__art {
          aspect-ratio: 1 / 1;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--blush);
          border: 1px solid var(--stroke);
        }
        .detail__art img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .detail__info h1 {
          margin-top: 12px;
          font-size: clamp(28px, 6vw, 38px);
          font-weight: 300;
          line-height: 1.15;
        }
        .detail__price {
          margin-top: 14px;
          font-size: 20px;
          font-weight: 500;
          color: var(--pink-deep);
        }
        .detail__desc {
          font-size: 15px;
          line-height: 1.85;
          color: var(--ink);
        }
        .detail__material {
          margin-top: 20px;
          font-size: 14px;
          line-height: 1.6;
          color: var(--graphite);
        }
        .detail__cta {
          margin-top: 32px;
          width: 100%;
          justify-content: center;
        }
        .detail__meta {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(20,16,15,0.1);
        }
        .detail__meta li {
          font-size: 13px;
          color: var(--graphite);
          margin-bottom: 8px;
          padding-left: 18px;
          position: relative;
        }
        .detail__meta li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 7px;
          width: 6px;
          height: 1px;
          background: var(--champagne);
        }
        @media (max-width: 760px) {
          .detail__grid { grid-template-columns: 1fr; gap: 28px; }
          .detail__art { max-width: 360px; margin: 0 auto; }
        }
      `})]})}function fg(){const{items:e,removeFromCart:t,updateQty:n,subtotal:r}=pa();return u.jsxs("div",{className:"wrap cart",children:[u.jsx("p",{className:"eyebrow",children:"Your bag"}),u.jsx("h1",{children:"Cart"}),u.jsx("div",{className:"divider-gold"}),e.length===0?u.jsxs("div",{className:"cart__empty",children:[u.jsx("p",{children:"Your cart is empty — a shame, given what's waiting."}),u.jsx(re,{to:"/shop/all",className:"btn btn--solid",children:"Browse pieces"})]}):u.jsxs("div",{className:"cart__layout",children:[u.jsx("ul",{className:"cart__list",children:e.map(l=>u.jsxs("li",{className:"cart__row",children:[u.jsx("div",{className:"cart__thumb",children:u.jsx("img",{src:l.image,alt:l.name})}),u.jsxs("div",{className:"cart__row-info",children:[u.jsx("p",{className:"cart__row-name",children:l.name}),u.jsx("p",{className:"cart__row-price",children:sn(l.price)}),u.jsxs("div",{className:"cart__qty",children:[u.jsx("button",{"aria-label":"Decrease quantity",onClick:()=>n(l.id,l.qty-1),children:u.jsx(wm,{size:14,strokeWidth:1.5})}),u.jsx("span",{children:l.qty}),u.jsx("button",{"aria-label":"Increase quantity",onClick:()=>n(l.id,l.qty+1),children:u.jsx(Pm,{size:14,strokeWidth:1.5})})]})]}),u.jsx("button",{className:"cart__remove","aria-label":"Remove item",onClick:()=>t(l.id),children:u.jsx(Wm,{size:16,strokeWidth:1.5})})]},l.id))}),u.jsxs("div",{className:"cart__summary",children:[u.jsx("p",{className:"cart__summary-title",children:"Order summary"}),u.jsxs("div",{className:"cart__summary-row",children:[u.jsx("span",{children:"Subtotal"}),u.jsx("span",{children:sn(r)})]}),u.jsxs("div",{className:"cart__summary-row",children:[u.jsx("span",{children:"Shipping"}),u.jsx("span",{children:"Calculated at checkout"})]}),u.jsx("div",{className:"divider-gold"}),u.jsxs("div",{className:"cart__summary-row cart__summary-total",children:[u.jsx("span",{children:"Total"}),u.jsx("span",{children:sn(r)})]}),u.jsx("button",{className:"btn btn--solid cart__checkout",children:"Checkout"})]})]}),u.jsx("style",{children:`
        .cart { padding: 40px 0 var(--section-y); }
        .cart h1 { margin-top: 10px; font-size: clamp(28px, 6vw, 38px); font-weight: 300; }
        .cart__empty {
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
          color: var(--graphite);
        }
        .cart__layout {
          margin-top: 20px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 56px;
        }
        .cart__list { display: flex; flex-direction: column; gap: 24px; }
        .cart__row {
          display: grid;
          grid-template-columns: 96px 1fr auto;
          gap: 20px;
          align-items: center;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(20,16,15,0.08);
        }
        .cart__thumb {
          width: 96px;
          height: 96px;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--blush);
          border: 1px solid var(--stroke);
        }
        .cart__thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cart__row-name { font-size: 16px; line-height: 1.4; }
        .cart__row-price { margin-top: 6px; color: var(--ink); font-weight: 500; font-size: 14px; }
        .cart__qty {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(20,16,15,0.15);
          border-radius: var(--radius);
          padding: 6px 12px;
        }
        .cart__qty button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 0;
          color: var(--ink);
        }
        .cart__qty span {
          min-width: 14px;
          text-align: center;
          font-size: 14px;
        }
        .cart__remove {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          background: none;
          border: 1px solid var(--stroke);
          border-radius: var(--radius);
          color: var(--pink-deep);
          align-self: start;
          transition: background 0.25s ease;
        }
        .cart__remove:hover {
          background: rgba(255, 21, 135, 0.08);
        }
        .cart__summary {
          background: var(--blush);
          border: 1px solid var(--stroke);
          border-radius: var(--radius);
          padding: 32px;
          height: fit-content;
        }
        .cart__summary-title {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--champagne);
          margin: 0 0 22px;
        }
        .cart__summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--graphite);
          margin-bottom: 14px;
        }
        .cart__summary-total {
          color: var(--ink);
          font-size: 16px;
          font-weight: 500;
        }
        .cart__checkout {
          margin-top: 20px;
          width: 100%;
          justify-content: center;
        }
        @media (max-width: 800px) {
          .cart__layout { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 480px) {
          .cart__row {
            grid-template-columns: 64px 1fr;
            grid-template-areas:
              "thumb info"
              "remove remove";
            row-gap: 12px;
          }
          .cart__thumb { grid-area: thumb; width: 64px; height: 64px; }
          .cart__row-info { grid-area: info; }
          .cart__remove {
            grid-area: remove;
            width: auto;
            justify-self: end;
            gap: 6px;
            padding: 0 4px;
          }
        }
      `})]})}function pg(){return u.jsxs("div",{className:"wrap wishlist",children:[u.jsx("p",{className:"eyebrow",children:"Saved"}),u.jsx("h1",{children:"Wishlist"}),u.jsx("div",{className:"divider-gold"}),u.jsxs("div",{className:"wishlist__empty",children:[u.jsx("p",{children:"Nothing saved yet — tap the heart on any piece to keep it here."}),u.jsx(re,{to:"/shop/all",className:"btn btn--solid",children:"Browse pieces"})]}),u.jsx("style",{children:`
        .wishlist { padding: 48px 0 var(--section-y); }
        .wishlist h1 { margin-top: 10px; font-size: clamp(28px, 6vw, 38px); font-weight: 300; }
        .wishlist__empty {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
          color: var(--graphite);
        }
      `})]})}function hg(){return u.jsxs(u.Fragment,{children:[u.jsx(Zm,{}),u.jsx("main",{children:u.jsxs(Rh,{children:[u.jsx(Bt,{path:"/",element:u.jsx(sg,{})}),u.jsx(Bt,{path:"/shop/:category",element:u.jsx(cg,{})}),u.jsx(Bt,{path:"/product/:id",element:u.jsx(dg,{})}),u.jsx(Bt,{path:"/cart",element:u.jsx(fg,{})}),u.jsx(Bt,{path:"/wishlist",element:u.jsx(pg,{})})]})}),u.jsx(tg,{})]})}vi.createRoot(document.getElementById("root")).render(u.jsx(Hs.StrictMode,{children:u.jsx(Ah,{children:u.jsx(Qm,{children:u.jsx(hg,{})})})}));
