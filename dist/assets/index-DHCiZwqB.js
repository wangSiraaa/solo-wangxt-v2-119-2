(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function $v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gm={exports:{}},Vl={},Wm={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),Yv=Symbol.for("react.portal"),qv=Symbol.for("react.fragment"),Kv=Symbol.for("react.strict_mode"),Zv=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),e0=Symbol.for("react.forward_ref"),t0=Symbol.for("react.suspense"),n0=Symbol.for("react.memo"),i0=Symbol.for("react.lazy"),Eh=Symbol.iterator;function r0(t){return t===null||typeof t!="object"?null:(t=Eh&&t[Eh]||t["@@iterator"],typeof t=="function"?t:null)}var jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,$m={};function Os(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||jm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=Os.prototype;function od(t,e,n){this.props=t,this.context=e,this.refs=$m,this.updater=n||jm}var ad=od.prototype=new Ym;ad.constructor=od;Xm(ad,Os.prototype);ad.isPureReactComponent=!0;var wh=Array.isArray,qm=Object.prototype.hasOwnProperty,ld={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qm.call(e,i)&&!Km.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bo,type:t,key:s,ref:o,props:r,_owner:ld.current}}function s0(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function o0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Th=/\/+/g;function mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o0(""+t.key):e.toString(36)}function za(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case Yv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mc(o,0):i,wh(r)?(n="",t!=null&&(n=t.replace(Th,"$&/")+"/"),za(r,e,n,"",function(c){return c})):r!=null&&(cd(r)&&(r=s0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Th,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mc(s,a);o+=za(s,e,n,l,r)}else if(l=r0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mc(s,a++),o+=za(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qo(t,e,n){if(t==null)return t;var i=[],r=0;return za(t,i,"","",function(s){return e.call(n,s,r++)}),i}function a0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ba={transition:null},l0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ba,ReactCurrentOwner:ld};function Qm(){throw Error("act(...) is not supported in production builds of React.")}Oe.Children={map:Qo,forEach:function(t,e,n){Qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qo(t,function(){e++}),e},toArray:function(t){return Qo(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Oe.Component=Os;Oe.Fragment=qv;Oe.Profiler=Zv;Oe.PureComponent=od;Oe.StrictMode=Kv;Oe.Suspense=t0;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l0;Oe.act=Qm;Oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qm.call(e,l)&&!Km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Bo,type:t.type,key:r,ref:s,props:i,_owner:o}};Oe.createContext=function(t){return t={$$typeof:Jv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Qv,_context:t},t.Consumer=t};Oe.createElement=Zm;Oe.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};Oe.createRef=function(){return{current:null}};Oe.forwardRef=function(t){return{$$typeof:e0,render:t}};Oe.isValidElement=cd;Oe.lazy=function(t){return{$$typeof:i0,_payload:{_status:-1,_result:t},_init:a0}};Oe.memo=function(t,e){return{$$typeof:n0,type:t,compare:e===void 0?null:e}};Oe.startTransition=function(t){var e=Ba.transition;Ba.transition={};try{t()}finally{Ba.transition=e}};Oe.unstable_act=Qm;Oe.useCallback=function(t,e){return qt.current.useCallback(t,e)};Oe.useContext=function(t){return qt.current.useContext(t)};Oe.useDebugValue=function(){};Oe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Oe.useEffect=function(t,e){return qt.current.useEffect(t,e)};Oe.useId=function(){return qt.current.useId()};Oe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Oe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Oe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Oe.useMemo=function(t,e){return qt.current.useMemo(t,e)};Oe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Oe.useRef=function(t){return qt.current.useRef(t)};Oe.useState=function(t){return qt.current.useState(t)};Oe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Oe.useTransition=function(){return qt.current.useTransition()};Oe.version="18.3.1";Wm.exports=Oe;var we=Wm.exports;const c0=$v(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0=we,f0=Symbol.for("react.element"),d0=Symbol.for("react.fragment"),h0=Object.prototype.hasOwnProperty,p0=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m0={key:!0,ref:!0,__self:!0,__source:!0};function Jm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)h0.call(e,i)&&!m0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:f0,type:t,key:s,ref:o,props:r,_owner:p0.current}}Vl.Fragment=d0;Vl.jsx=Jm;Vl.jsxs=Jm;Gm.exports=Vl;var O=Gm.exports,wu={},eg={exports:{}},Sn={},tg={exports:{}},ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var K=L.length;L.push($);e:for(;0<K;){var se=K-1>>>1,Ee=L[se];if(0<r(Ee,$))L[se]=$,L[K]=Ee,K=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],K=L.pop();if(K!==$){L[0]=K;e:for(var se=0,Ee=L.length,ke=Ee>>>1;se<ke;){var X=2*(se+1)-1,ee=L[X],ae=X+1,ce=L[ae];if(0>r(ee,K))ae<Ee&&0>r(ce,ee)?(L[se]=ce,L[ae]=K,se=ae):(L[se]=ee,L[X]=K,se=X);else if(ae<Ee&&0>r(ce,K))L[se]=ce,L[ae]=K,se=ae;else break e}}return $}function r(L,$){var K=L.sortIndex-$.sortIndex;return K!==0?K:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=L)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(L){if(_=!1,x(L),!g)if(n(l)!==null)g=!0,U(R);else{var $=n(c);$!==null&&Q(S,$.startTime-L)}}function R(L,$){g=!1,_&&(_=!1,u(P),P=-1),p=!0;var K=h;try{for(x($),d=n(l);d!==null&&(!(d.expirationTime>$)||L&&!E());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var Ee=se(d.expirationTime<=$);$=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(l)&&i(l),x($)}else i(l);d=n(l)}if(d!==null)var ke=!0;else{var X=n(c);X!==null&&Q(S,X.startTime-$),ke=!1}return ke}finally{d=null,h=K,p=!1}}var T=!1,A=null,P=-1,V=5,y=-1;function E(){return!(t.unstable_now()-y<V)}function G(){if(A!==null){var L=t.unstable_now();y=L;var $=!0;try{$=A(!0,L)}finally{$?z():(T=!1,A=null)}}else T=!1}var z;if(typeof v=="function")z=function(){v(G)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,J=j.port2;j.port1.onmessage=G,z=function(){J.postMessage(null)}}else z=function(){m(G,0)};function U(L){A=L,T||(T=!0,z())}function Q(L,$){P=m(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,U(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var K=h;h=$;try{return L()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=h;h=L;try{return $()}finally{h=K}},t.unstable_scheduleCallback=function(L,$,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,L){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=K+Ee,L={id:f++,callback:$,priorityLevel:L,startTime:K,expirationTime:Ee,sortIndex:-1},K>se?(L.sortIndex=K,e(c,L),n(l)===null&&L===n(c)&&(_?(u(P),P=-1):_=!0,Q(S,K-se))):(L.sortIndex=Ee,e(l,L),g||p||(g=!0,U(R))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var $=h;return function(){var K=h;h=$;try{return L.apply(this,arguments)}finally{h=K}}}})(ng);tg.exports=ng;var g0=tg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0=we,yn=g0;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,xo={};function Ur(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(xo[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=Object.prototype.hasOwnProperty,v0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ah={},Rh={};function x0(t){return Tu.call(Rh,t)?!0:Tu.call(Ah,t)?!1:v0.test(t)?Rh[t]=!0:(Ah[t]=!0,!1)}function y0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S0(t,e,n,i){if(e===null||typeof e>"u"||y0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ud=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ud,fd);Ot[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ud,fd);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ud,fd);Ot[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S0(e,n,r,i)&&(n=null),i||r===null?x0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=_0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),sg=Symbol.for("react.context"),pd=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Cu=Symbol.for("react.suspense_list"),md=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),og=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,gc;function ro(t){if(gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gc=e&&e[1]||""}return`
`+gc+t}var _c=!1;function vc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ro(t):""}function M0(t){switch(t.tag){case 5:return ro(t.type);case 16:return ro("Lazy");case 13:return ro("Suspense");case 19:return ro("SuspenseList");case 0:case 2:case 15:return t=vc(t.type,!1),t;case 11:return t=vc(t.type.render,!1),t;case 1:return t=vc(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Au:return"Profiler";case hd:return"StrictMode";case Ru:return"Suspense";case Cu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case md:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function E0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function w0(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ea(t){t._valueTracker||(t._valueTracker=w0(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function cg(t,e){e=e.checked,e!=null&&dd(t,"checked",e,!1)}function Lu(t,e){cg(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Lh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(so(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function ug(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Dh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ta,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ta=ta||document.createElement("div"),ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){T0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var A0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nu(t,e){if(e){if(A0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ou=null;function gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ku=null,gs=null,_s=null;function Ih(t){if(t=Go(t)){if(typeof ku!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=$l(e),ku(t.stateNode,t.type,e))}}function mg(t){gs?_s?_s.push(t):_s=[t]:gs=t}function gg(){if(gs){var t=gs,e=_s;if(_s=gs=null,Ih(t),e)for(t=0;t<e.length;t++)Ih(e[t])}}function _g(t,e){return t(e)}function vg(){}var xc=!1;function xg(t,e,n){if(xc)return t(e,n);xc=!0;try{return _g(t,e,n)}finally{xc=!1,(gs!==null||_s!==null)&&(vg(),gg())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var i=$l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var zu=!1;if(vi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){zu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{zu=!1}function R0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var uo=!1,cl=null,ul=!1,Bu=null,C0={onError:function(t){uo=!0,cl=t}};function P0(t,e,n,i,r,s,o,a,l){uo=!1,cl=null,R0.apply(C0,arguments)}function b0(t,e,n,i,r,s,o,a,l){if(P0.apply(this,arguments),uo){if(uo){var c=cl;uo=!1,cl=null}else throw Error(ne(198));ul||(ul=!0,Bu=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uh(t){if(Nr(t)!==t)throw Error(ne(188))}function L0(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Uh(r),t;if(s===i)return Uh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Sg(t){return t=L0(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=yn.unstable_scheduleCallback,Nh=yn.unstable_cancelCallback,D0=yn.unstable_shouldYield,I0=yn.unstable_requestPaint,vt=yn.unstable_now,U0=yn.unstable_getCurrentPriorityLevel,_d=yn.unstable_ImmediatePriority,wg=yn.unstable_UserBlockingPriority,fl=yn.unstable_NormalPriority,N0=yn.unstable_LowPriority,Tg=yn.unstable_IdlePriority,Gl=null,ei=null;function F0(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Gl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:z0,O0=Math.log,k0=Math.LN2;function z0(t){return t>>>=0,t===0?32:31-(O0(t)/k0|0)|0}var na=64,ia=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=oo(a):(s&=o,s!==0&&(i=oo(s)))}else o=n&~r,o!==0?i=oo(o):s!==0&&(i=oo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function B0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=B0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=na;return na<<=1,!(na&4194240)&&(na=64),t}function yc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ho(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function V0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cg,xd,Pg,bg,Lg,Vu=!1,ra=[],Hi=null,Vi=null,Gi=null,Mo=new Map,Eo=new Map,Ni=[],G0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Go(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function W0(t,e,n,i,r){switch(e){case"focusin":return Hi=Ws(Hi,t,e,n,i,r),!0;case"dragenter":return Vi=Ws(Vi,t,e,n,i,r),!0;case"mouseover":return Gi=Ws(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,Ws(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,Ws(Eo.get(s)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=vr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){Pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ha(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ou=i,n.target.dispatchEvent(i),Ou=null}else return e=Go(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){Ha(t)&&n.delete(e)}function j0(){Vu=!1,Hi!==null&&Ha(Hi)&&(Hi=null),Vi!==null&&Ha(Vi)&&(Vi=null),Gi!==null&&Ha(Gi)&&(Gi=null),Mo.forEach(Oh),Eo.forEach(Oh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,j0)))}function wo(t){function e(r){return js(r,t)}if(0<ra.length){js(ra[0],t);for(var n=1;n<ra.length;n++){var i=ra[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Hi!==null&&js(Hi,t),Vi!==null&&js(Vi,t),Gi!==null&&js(Gi,t),Mo.forEach(e),Eo.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&Ni.shift()}var vs=Ei.ReactCurrentBatchConfig,hl=!0;function X0(t,e,n,i){var r=Je,s=vs.transition;vs.transition=null;try{Je=1,yd(t,e,n,i)}finally{Je=r,vs.transition=s}}function $0(t,e,n,i){var r=Je,s=vs.transition;vs.transition=null;try{Je=4,yd(t,e,n,i)}finally{Je=r,vs.transition=s}}function yd(t,e,n,i){if(hl){var r=Gu(t,e,n,i);if(r===null)bc(t,e,i,pl,n),Fh(t,i);else if(W0(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<G0.indexOf(t)){for(;r!==null;){var s=Go(r);if(s!==null&&Cg(s),s=Gu(t,e,n,i),s===null&&bc(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else bc(t,e,i,null,n)}}var pl=null;function Gu(t,e,n,i){if(pl=null,t=gd(i),t=vr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function Ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U0()){case _d:return 1;case wg:return 4;case fl:case N0:return 16;case Tg:return 536870912;default:return 16}default:return 16}}var ki=null,Sd=null,Va=null;function Ug(){if(Va)return Va;var t,e=Sd,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Va=r.slice(t,1<i?1-i:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function kh(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sa:kh,this.isPropagationStopped=kh,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=Mn(ks),Vo=ht({},ks,{view:0,detail:0}),Y0=Mn(Vo),Sc,Mc,Xs,Wl=ht({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Sc=t.screenX-Xs.screenX,Mc=t.screenY-Xs.screenY):Mc=Sc=0,Xs=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),zh=Mn(Wl),q0=ht({},Wl,{dataTransfer:0}),K0=Mn(q0),Z0=ht({},Vo,{relatedTarget:0}),Ec=Mn(Z0),Q0=ht({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),J0=Mn(Q0),ex=ht({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tx=Mn(ex),nx=ht({},ks,{data:0}),Bh=Mn(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sx[t])?!!e[t]:!1}function Ed(){return ox}var ax=ht({},Vo,{key:function(t){if(t.key){var e=ix[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ed,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lx=Mn(ax),cx=ht({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=Mn(cx),ux=ht({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ed}),fx=Mn(ux),dx=ht({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=Mn(dx),px=ht({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=Mn(px),gx=[9,13,27,32],wd=vi&&"CompositionEvent"in window,fo=null;vi&&"documentMode"in document&&(fo=document.documentMode);var _x=vi&&"TextEvent"in window&&!fo,Ng=vi&&(!wd||fo&&8<fo&&11>=fo),Vh=" ",Gh=!1;function Fg(t,e){switch(t){case"keyup":return gx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function vx(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(Gh=!0,Vh);case"textInput":return t=e.data,t===Vh&&Gh?null:t;default:return null}}function xx(t,e){if(ns)return t==="compositionend"||!wd&&Fg(t,e)?(t=Ug(),Va=Sd=ki=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ng&&e.locale!=="ko"?null:e.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yx[t.type]:e==="textarea"}function kg(t,e,n,i){mg(i),e=ml(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ho=null,To=null;function Sx(t){qg(t,0)}function jl(t){var e=ss(t);if(lg(e))return t}function Mx(t,e){if(t==="change")return e}var zg=!1;if(vi){var wc;if(vi){var Tc="oninput"in document;if(!Tc){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),Tc=typeof jh.oninput=="function"}wc=Tc}else wc=!1;zg=wc&&(!document.documentMode||9<document.documentMode)}function Xh(){ho&&(ho.detachEvent("onpropertychange",Bg),To=ho=null)}function Bg(t){if(t.propertyName==="value"&&jl(To)){var e=[];kg(e,To,t,gd(t)),xg(Sx,e)}}function Ex(t,e,n){t==="focusin"?(Xh(),ho=e,To=n,ho.attachEvent("onpropertychange",Bg)):t==="focusout"&&Xh()}function wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(To)}function Tx(t,e){if(t==="click")return jl(e)}function Ax(t,e){if(t==="input"||t==="change")return jl(e)}function Rx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Rx;function Ao(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Tu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function $h(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yh(t,e){var n=$h(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$h(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Cx(t){var e=Vg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(i!==null&&Td(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Yh(n,s);var o=Yh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Px=vi&&"documentMode"in document&&11>=document.documentMode,is=null,Wu=null,po=null,ju=!1;function qh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ju||is==null||is!==ll(i)||(i=is,"selectionStart"in i&&Td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),po&&Ao(po,i)||(po=i,i=ml(Wu,"onSelect"),0<i.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Ac={},Gg={};vi&&(Gg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Xl(t){if(Ac[t])return Ac[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gg)return Ac[t]=e[n];return t}var Wg=Xl("animationend"),jg=Xl("animationiteration"),Xg=Xl("animationstart"),$g=Xl("transitionend"),Yg=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,e){Yg.set(t,e),Ur(e,[t])}for(var Rc=0;Rc<Kh.length;Rc++){var Cc=Kh[Rc],bx=Cc.toLowerCase(),Lx=Cc[0].toUpperCase()+Cc.slice(1);tr(bx,"on"+Lx)}tr(Wg,"onAnimationEnd");tr(jg,"onAnimationIteration");tr(Xg,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr($g,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Zh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,b0(i,e,void 0,t),t.currentTarget=null}function qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zh(r,a,c),s=l}}}if(ul)throw t=Bu,ul=!1,Bu=null,t}function ot(t,e){var n=e[Ku];n===void 0&&(n=e[Ku]=new Set);var i=t+"__bubble";n.has(i)||(Kg(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),Kg(n,t,i,e)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[aa]){t[aa]=!0,ig.forEach(function(n){n!=="selectionchange"&&(Dx.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[aa]||(e[aa]=!0,Pc("selectionchange",!1,e))}}function Kg(t,e,n,i){switch(Ig(e)){case 1:var r=X0;break;case 4:r=$0;break;default:r=yd}n=r.bind(null,e,n,t),r=void 0,!zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function bc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xg(function(){var c=s,f=gd(n),d=[];e:{var h=Yg.get(t);if(h!==void 0){var p=Md,g=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":p=lx;break;case"focusin":g="focus",p=Ec;break;case"focusout":g="blur",p=Ec;break;case"beforeblur":case"afterblur":p=Ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=K0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fx;break;case Wg:case jg:case Xg:p=J0;break;case $g:p=hx;break;case"scroll":p=Y0;break;case"wheel":p=mx;break;case"copy":case"cut":case"paste":p=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hh}var _=(e&4)!==0,m=!_&&t==="scroll",u=_?h!==null?h+"Capture":null:h;_=[];for(var v=c,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=So(v,u),S!=null&&_.push(Co(v,S,x)))),m)break;v=v.return}0<_.length&&(h=new p(h,g,null,n,f),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ou&&(g=n.relatedTarget||n.fromElement)&&(vr(g)||g[xi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?vr(g):null,g!==null&&(m=Nr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=zh,S="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Hh,S="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:ss(p),x=g==null?h:ss(g),h=new _(S,v+"leave",p,n,f),h.target=m,h.relatedTarget=x,S=null,vr(f)===c&&(_=new _(u,v+"enter",g,n,f),_.target=x,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,u=g,v=0,x=_;x;x=zr(x))v++;for(x=0,S=u;S;S=zr(S))x++;for(;0<v-x;)_=zr(_),v--;for(;0<x-v;)u=zr(u),x--;for(;v--;){if(_===u||u!==null&&_===u.alternate)break t;_=zr(_),u=zr(u)}_=null}else _=null;p!==null&&Qh(d,h,p,_,!1),g!==null&&m!==null&&Qh(d,m,g,_,!0)}}e:{if(h=c?ss(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=Mx;else if(Wh(h))if(zg)R=Ax;else{R=wx;var T=Ex}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Tx);if(R&&(R=R(t,c))){kg(d,R,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Du(h,"number",h.value)}switch(T=c?ss(c):window,t){case"focusin":(Wh(T)||T.contentEditable==="true")&&(is=T,Wu=c,po=null);break;case"focusout":po=Wu=is=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,qh(d,n,f);break;case"selectionchange":if(Px)break;case"keydown":case"keyup":qh(d,n,f)}var A;if(wd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ns?Fg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Ng&&n.locale!=="ko"&&(ns||P!=="onCompositionStart"?P==="onCompositionEnd"&&ns&&(A=Ug()):(ki=f,Sd="value"in ki?ki.value:ki.textContent,ns=!0)),T=ml(c,P),0<T.length&&(P=new Bh(P,t,null,n,f),d.push({event:P,listeners:T}),A?P.data=A:(A=Og(n),A!==null&&(P.data=A)))),(A=_x?vx(t,n):xx(t,n))&&(c=ml(c,"onBeforeInput"),0<c.length&&(f=new Bh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}qg(d,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=So(t,n),s!=null&&i.unshift(Co(t,s,r)),s=So(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=So(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=So(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ix=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function Jh(t){return(typeof t=="string"?t:""+t).replace(Ix,`
`).replace(Ux,"")}function la(t,e,n){if(e=Jh(e),Jh(t)!==e&&n)throw Error(ne(425))}function gl(){}var Xu=null,$u=null;function Yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,Nx=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(t){return ep.resolve(null).then(t).catch(Ox)}:qu;function Ox(t){setTimeout(function(){throw t})}function Lc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function Wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+zs,Po="__reactProps$"+zs,xi="__reactContainer$"+zs,Ku="__reactEvents$"+zs,kx="__reactListeners$"+zs,zx="__reactHandles$"+zs;function vr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tp(t);t!==null;){if(n=t[Qn])return n;t=tp(t)}return e}t=n,n=t.parentNode}return null}function Go(t){return t=t[Qn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function $l(t){return t[Po]||null}var Zu=[],os=-1;function nr(t){return{current:t}}function lt(t){0>os||(t.current=Zu[os],Zu[os]=null,os--)}function it(t,e){os++,Zu[os]=t.current,t.current=e}var Qi={},Gt=nr(Qi),rn=nr(!1),Ar=Qi;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function _l(){lt(rn),lt(Gt)}function np(t,e,n){if(Gt.current!==Qi)throw Error(ne(168));it(Gt,e),it(rn,n)}function Zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,E0(t)||"Unknown",r));return ht({},n,i)}function vl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Ar=Gt.current,it(Gt,t),it(rn,rn.current),!0}function ip(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Zg(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,lt(rn),lt(Gt),it(Gt,t)):lt(rn),it(rn,n)}var fi=null,Yl=!1,Dc=!1;function Qg(t){fi===null?fi=[t]:fi.push(t)}function Bx(t){Yl=!0,Qg(t)}function ir(){if(!Dc&&fi!==null){Dc=!0;var t=0,e=Je;try{var n=fi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,Yl=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Eg(_d,ir),r}finally{Je=e,Dc=!1}}return null}var as=[],ls=0,xl=null,yl=0,Tn=[],An=0,Rr=null,di=1,hi="";function hr(t,e){as[ls++]=yl,as[ls++]=xl,xl=t,yl=e}function Jg(t,e,n){Tn[An++]=di,Tn[An++]=hi,Tn[An++]=Rr,Rr=t;var i=di;t=hi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,di=1<<32-jn(e)+r|n<<r|i,hi=s+t}else di=1<<s|n<<r|i,hi=t}function Ad(t){t.return!==null&&(hr(t,1),Jg(t,1,0))}function Rd(t){for(;t===xl;)xl=as[--ls],as[ls]=null,yl=as[--ls],as[ls]=null;for(;t===Rr;)Rr=Tn[--An],Tn[An]=null,hi=Tn[--An],Tn[An]=null,di=Tn[--An],Tn[An]=null}var vn=null,gn=null,ct=!1,Hn=null;function e_(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=Wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:di,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function Qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ju(t){if(ct){var e=gn;if(e){var n=e;if(!rp(t,e)){if(Qu(t))throw Error(ne(418));e=Wi(n.nextSibling);var i=vn;e&&rp(t,e)?e_(i,n):(t.flags=t.flags&-4097|2,ct=!1,vn=t)}}else{if(Qu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ct=!1,vn=t}}}function sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function ca(t){if(t!==vn)return!1;if(!ct)return sp(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yu(t.type,t.memoizedProps)),e&&(e=gn)){if(Qu(t))throw t_(),Error(ne(418));for(;e;)e_(t,e),e=Wi(e.nextSibling)}if(sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=Wi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?Wi(t.stateNode.nextSibling):null;return!0}function t_(){for(var t=gn;t;)t=Wi(t.nextSibling)}function As(){gn=vn=null,ct=!1}function Cd(t){Hn===null?Hn=[t]:Hn.push(t)}var Hx=Ei.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function op(t){var e=t._init;return e(t._payload)}function n_(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Yi(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,x,S){return v===null||v.tag!==6?(v=zc(x,u.mode,S),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,S){var R=x.type;return R===ts?f(u,v,x.props.children,S,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Di&&op(R)===v.type)?(S=r(v,x.props),S.ref=$s(u,v,x),S.return=u,S):(S=Ka(x.type,x.key,x.props,null,u.mode,S),S.ref=$s(u,v,x),S.return=u,S)}function c(u,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Bc(x,u.mode,S),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function f(u,v,x,S,R){return v===null||v.tag!==7?(v=wr(x,u.mode,S,R),v.return=u,v):(v=r(v,x),v.return=u,v)}function d(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return x=Ka(v.type,v.key,v.props,null,u.mode,x),x.ref=$s(u,null,v),x.return=u,x;case es:return v=Bc(v,u.mode,x),v.return=u,v;case Di:var S=v._init;return d(u,S(v._payload),x)}if(so(v)||Vs(v))return v=wr(v,u.mode,x,null),v.return=u,v;ua(u,v)}return null}function h(u,v,x,S){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Jo:return x.key===R?l(u,v,x,S):null;case es:return x.key===R?c(u,v,x,S):null;case Di:return R=x._init,h(u,v,R(x._payload),S)}if(so(x)||Vs(x))return R!==null?null:f(u,v,x,S,null);ua(u,x)}return null}function p(u,v,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(v,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Jo:return u=u.get(S.key===null?x:S.key)||null,l(v,u,S,R);case es:return u=u.get(S.key===null?x:S.key)||null,c(v,u,S,R);case Di:var T=S._init;return p(u,v,x,T(S._payload),R)}if(so(S)||Vs(S))return u=u.get(x)||null,f(v,u,S,R,null);ua(v,S)}return null}function g(u,v,x,S){for(var R=null,T=null,A=v,P=v=0,V=null;A!==null&&P<x.length;P++){A.index>P?(V=A,A=null):V=A.sibling;var y=h(u,A,x[P],S);if(y===null){A===null&&(A=V);break}t&&A&&y.alternate===null&&e(u,A),v=s(y,v,P),T===null?R=y:T.sibling=y,T=y,A=V}if(P===x.length)return n(u,A),ct&&hr(u,P),R;if(A===null){for(;P<x.length;P++)A=d(u,x[P],S),A!==null&&(v=s(A,v,P),T===null?R=A:T.sibling=A,T=A);return ct&&hr(u,P),R}for(A=i(u,A);P<x.length;P++)V=p(A,u,P,x[P],S),V!==null&&(t&&V.alternate!==null&&A.delete(V.key===null?P:V.key),v=s(V,v,P),T===null?R=V:T.sibling=V,T=V);return t&&A.forEach(function(E){return e(u,E)}),ct&&hr(u,P),R}function _(u,v,x,S){var R=Vs(x);if(typeof R!="function")throw Error(ne(150));if(x=R.call(x),x==null)throw Error(ne(151));for(var T=R=null,A=v,P=v=0,V=null,y=x.next();A!==null&&!y.done;P++,y=x.next()){A.index>P?(V=A,A=null):V=A.sibling;var E=h(u,A,y.value,S);if(E===null){A===null&&(A=V);break}t&&A&&E.alternate===null&&e(u,A),v=s(E,v,P),T===null?R=E:T.sibling=E,T=E,A=V}if(y.done)return n(u,A),ct&&hr(u,P),R;if(A===null){for(;!y.done;P++,y=x.next())y=d(u,y.value,S),y!==null&&(v=s(y,v,P),T===null?R=y:T.sibling=y,T=y);return ct&&hr(u,P),R}for(A=i(u,A);!y.done;P++,y=x.next())y=p(A,u,P,y.value,S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),v=s(y,v,P),T===null?R=y:T.sibling=y,T=y);return t&&A.forEach(function(G){return e(u,G)}),ct&&hr(u,P),R}function m(u,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ts&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Jo:e:{for(var R=x.key,T=v;T!==null;){if(T.key===R){if(R=x.type,R===ts){if(T.tag===7){n(u,T.sibling),v=r(T,x.props.children),v.return=u,u=v;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Di&&op(R)===T.type){n(u,T.sibling),v=r(T,x.props),v.ref=$s(u,T,x),v.return=u,u=v;break e}n(u,T);break}else e(u,T);T=T.sibling}x.type===ts?(v=wr(x.props.children,u.mode,S,x.key),v.return=u,u=v):(S=Ka(x.type,x.key,x.props,null,u.mode,S),S.ref=$s(u,v,x),S.return=u,u=S)}return o(u);case es:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Bc(x,u.mode,S),v.return=u,u=v}return o(u);case Di:return T=x._init,m(u,v,T(x._payload),S)}if(so(x))return g(u,v,x,S);if(Vs(x))return _(u,v,x,S);ua(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=zc(x,u.mode,S),v.return=u,u=v),o(u)):n(u,v)}return m}var Rs=n_(!0),i_=n_(!1),Sl=nr(null),Ml=null,cs=null,Pd=null;function bd(){Pd=cs=Ml=null}function Ld(t){var e=Sl.current;lt(Sl),t._currentValue=e}function ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){Ml=t,Pd=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Pd!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(Ml===null)throw Error(ne(308));cs=t,Ml.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var xr=null;function Dd(t){xr===null?xr=[t]:xr.push(t)}function r_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,yi(t,i)}function yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ji(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,yi(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}function ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(h=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=ht({},d,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=d}}function lp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Wo={},ti=nr(Wo),bo=nr(Wo),Lo=nr(Wo);function yr(t){if(t===Wo)throw Error(ne(174));return t}function Ud(t,e){switch(it(Lo,e),it(bo,t),it(ti,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}lt(ti),it(ti,e)}function Cs(){lt(ti),lt(bo),lt(Lo)}function o_(t){yr(Lo.current);var e=yr(ti.current),n=Uu(e,t.type);e!==n&&(it(bo,t),it(ti,n))}function Nd(t){bo.current===t&&(lt(ti),lt(bo))}var ft=nr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ic=[];function Fd(){for(var t=0;t<Ic.length;t++)Ic[t]._workInProgressVersionPrimary=null;Ic.length=0}var ja=Ei.ReactCurrentDispatcher,Uc=Ei.ReactCurrentBatchConfig,Cr=0,dt=null,Et=null,bt=null,Tl=!1,mo=!1,Do=0,Vx=0;function kt(){throw Error(ne(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function kd(t,e,n,i,r,s){if(Cr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=t===null||t.memoizedState===null?Xx:$x,t=n(i,r),mo){s=0;do{if(mo=!1,Do=0,25<=s)throw Error(ne(301));s+=1,bt=Et=null,e.updateQueue=null,ja.current=Yx,t=n(i,r)}while(mo)}if(ja.current=Al,e=Et!==null&&Et.next!==null,Cr=0,bt=Et=dt=null,Tl=!1,e)throw Error(ne(300));return t}function zd(){var t=Do!==0;return Do=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function Dn(){if(Et===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=bt===null?dt.memoizedState:bt.next;if(e!==null)bt=e,Et=t;else{if(t===null)throw Error(ne(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function Io(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Cr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,dt.lanes|=f,Pr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(nn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function a_(){}function l_(t,e){var n=dt,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,nn=!0),i=i.queue,Bd(f_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Uo(9,u_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ne(349));Cr&30||c_(n,e,r)}return r}function c_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function u_(t,e,n,i){e.value=n,e.getSnapshot=i,d_(e)&&h_(t)}function f_(t,e,n){return n(function(){d_(e)&&h_(t)})}function d_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function h_(t){var e=yi(t,1);e!==null&&Xn(e,t,1,-1)}function cp(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=jx.bind(null,dt,t),[e.memoizedState,t]}function Uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function p_(){return Dn().memoizedState}function Xa(t,e,n,i){var r=Kn();dt.flags|=t,r.memoizedState=Uo(1|e,n,void 0,i===void 0?null:i)}function ql(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Od(i,o.deps)){r.memoizedState=Uo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=Uo(1|e,n,s,i)}function up(t,e){return Xa(8390656,8,t,e)}function Bd(t,e){return ql(2048,8,t,e)}function m_(t,e){return ql(4,2,t,e)}function g_(t,e){return ql(4,4,t,e)}function __(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function v_(t,e,n){return n=n!=null?n.concat([t]):null,ql(4,4,__.bind(null,e,t),n)}function Hd(){}function x_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function y_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function S_(t,e,n){return Cr&21?(Yn(n,e)||(n=Ag(),dt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function Gx(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Uc.transition;Uc.transition={};try{t(!1),e()}finally{Je=n,Uc.transition=i}}function M_(){return Dn().memoizedState}function Wx(t,e,n){var i=$i(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},E_(t))w_(e,n);else if(n=r_(t,e,n,i),n!==null){var r=$t();Xn(n,t,i,r),T_(n,e,i)}}function jx(t,e,n){var i=$i(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(E_(t))w_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,Dd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=r_(t,e,r,i),n!==null&&(r=$t(),Xn(n,t,i,r),T_(n,e,i))}}function E_(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function w_(t,e){mo=Tl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}var Al={readContext:Ln,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},Xx={readContext:Ln,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:up,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,__.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Wx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Hd,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=Gx.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Kn();if(ct){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Lt===null)throw Error(ne(349));Cr&30||c_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,up(f_.bind(null,i,s,t),[t]),i.flags|=2048,Uo(9,u_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Lt.identifierPrefix;if(ct){var n=hi,i=di;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$x={readContext:Ln,useCallback:x_,useContext:Ln,useEffect:Bd,useImperativeHandle:v_,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:y_,useReducer:Nc,useRef:p_,useState:function(){return Nc(Io)},useDebugValue:Hd,useDeferredValue:function(t){var e=Dn();return S_(e,Et.memoizedState,t)},useTransition:function(){var t=Nc(Io)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:M_,unstable_isNewReconciler:!1},Yx={readContext:Ln,useCallback:x_,useContext:Ln,useEffect:Bd,useImperativeHandle:v_,useInsertionEffect:m_,useLayoutEffect:g_,useMemo:y_,useReducer:Fc,useRef:p_,useState:function(){return Fc(Io)},useDebugValue:Hd,useDeferredValue:function(t){var e=Dn();return Et===null?e.memoizedState=t:S_(e,Et.memoizedState,t)},useTransition:function(){var t=Fc(Io)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:a_,useSyncExternalStore:l_,useId:M_,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=$i(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Xn(e,t,r,i),Wa(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=$i(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ji(t,s,r),e!==null&&(Xn(e,t,r,i),Wa(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=$i(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ji(t,r,i),e!==null&&(Xn(e,t,i,n),Wa(e,t,i))}};function fp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function A_(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=sn(e)?Ar:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kl.enqueueReplaceState(e,e.state,null)}function nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=sn(e)?Ar:Gt.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=M0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Oc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function R_(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,pf=i),rf(t,e)},n}function C_(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rf(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new qx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cy.bind(null,t,e,n),e.then(t,t))}function pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,ji(n,e,1))),n.lanes|=1),t)}var Kx=Ei.ReactCurrentOwner,nn=!1;function jt(t,e,n,i){e.child=t===null?i_(e,null,n,i):Rs(e,t.child,n,i)}function gp(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=kd(t,e,n,i,s,r),n=zd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ct&&n&&Ad(e),e.flags|=1,jt(t,e,i,r),e.child)}function _p(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,P_(t,e,s,i,r)):(t=Ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(o,i)&&t.ref===e.ref)return Si(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function P_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Si(t,e,r)}return sf(t,e,n,i,r)}function b_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(fs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(fs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(fs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(fs,pn),pn|=i;return jt(t,e,r,n),e.child}function L_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,i,r){var s=sn(n)?Ar:Gt.current;return s=Ts(e,s),xs(e,r),n=kd(t,e,n,i,s,r),i=zd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Si(t,e,r)):(ct&&i&&Ad(e),e.flags|=1,jt(t,e,n,r),e.child)}function vp(t,e,n,i,r){if(sn(n)){var s=!0;vl(e)}else s=!1;if(xs(e,r),e.stateNode===null)$a(t,e),A_(e,n,i),nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=sn(n)?Ar:Gt.current,c=Ts(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&dp(e,o,i,c),Ii=!1;var h=e.memoizedState;o.state=h,El(e,i,o,r),l=e.memoizedState,a!==i||h!==l||rn.current||Ii?(typeof f=="function"&&(tf(e,n,f,i),l=e.memoizedState),(a=Ii||fp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,s_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:kn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=sn(n)?Ar:Gt.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&dp(e,o,i,l),Ii=!1,h=e.memoizedState,o.state=h,El(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||rn.current||Ii?(typeof p=="function"&&(tf(e,n,p,i),g=e.memoizedState),(c=Ii||fp(e,n,c,i,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return of(t,e,n,i,s,r)}function of(t,e,n,i,r,s){L_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ip(e,n,!1),Si(t,e,s);i=e.stateNode,Kx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&ip(e,n,!0),e.child}function D_(t){var e=t.stateNode;e.pendingContext?np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&np(t,e.context,!1),Ud(t,e.containerInfo)}function xp(t,e,n,i,r){return As(),Cd(r),e.flags|=256,jt(t,e,n,i),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function I_(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ft,r&1),t===null)return Ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,i,0,null),t=wr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lf(n),e.memoizedState=af,t):Vd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Zx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=wr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=af,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vd(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fa(t,e,n,i){return i!==null&&Cd(i),Rs(e,t.child,null,n),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Oc(Error(ne(422))),fa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jl({mode:"visible",children:i.children},r,0,null),s=wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=lf(o),e.memoizedState=af,s);if(!(e.mode&1))return fa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Oc(s,i,void 0),fa(t,e,o,i)}if(a=(o&t.childLanes)!==0,nn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,yi(t,r),Xn(i,t,r,-1))}return Yd(),i=Oc(Error(ne(421))),fa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=uy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=Wi(r.nextSibling),vn=e,ct=!0,Hn=null,t!==null&&(Tn[An++]=di,Tn[An++]=hi,Tn[An++]=Rr,di=t.id,hi=t.overflow,Rr=e),e=Vd(e,i.children),e.flags|=4096,e)}function yp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ef(t.return,e,n)}function kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function U_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&yp(t,n,e);else if(t.tag===19)yp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}kc(e,!0,n,null,s);break;case"together":kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Si(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qx(t,e,n){switch(e.tag){case 3:D_(e),As();break;case 5:o_(e);break;case 1:sn(e.type)&&vl(e);break;case 4:Ud(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Sl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?I_(t,e,n):(it(ft,ft.current&1),t=Si(t,e,n),t!==null?t.sibling:null);it(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return U_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return Si(t,e,n)}var N_,cf,F_,O_;N_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cf=function(){};F_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(ti.current);var s=null;switch(n){case"input":r=bu(t,r),i=bu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Nu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};O_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Jx(t,e,n){var i=e.pendingProps;switch(Rd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return sn(e.type)&&_l(),zt(e),null;case 3:return i=e.stateNode,Cs(),lt(rn),lt(Gt),Fd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(_f(Hn),Hn=null))),cf(t,e),zt(e),null;case 5:Nd(e);var r=yr(Lo.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return zt(e),null}if(t=yr(ti.current),ca(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Po]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ao.length;r++)ot(ao[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":Ph(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Lh(i,s),ot("invalid",i)}Nu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&la(i.textContent,a,t),r=["children",""+a]):xo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":ea(i),bh(i,s,!0);break;case"textarea":ea(i),Dh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Po]=i,N_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ao.length;r++)ot(ao[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":Ph(t,i),r=bu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Lh(t,i),r=Iu(t,i),ot("invalid",t);break;default:r=i}Nu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&yo(t,l):typeof l=="number"&&yo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&dd(t,s,l,o))}switch(n){case"input":ea(t),bh(t,i,!1);break;case"textarea":ea(t),Dh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)O_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=yr(Lo.current),yr(ti.current),ca(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:la(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&la(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return zt(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&gn!==null&&e.mode&1&&!(e.flags&128))t_(),As(),e.flags|=98560,s=!1;else if(s=ca(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Qn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else Hn!==null&&(_f(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?wt===0&&(wt=3):Yd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Cs(),cf(t,e),t===null&&Ro(e.stateNode.containerInfo),zt(e),null;case 10:return Ld(e.type._context),zt(e),null;case 17:return sn(e.type)&&_l(),zt(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ys(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=wl(t),o!==null){for(e.flags|=128,Ys(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>bs&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=wl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return zt(e),null}else 2*vt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ft.current,it(ft,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function ey(t,e){switch(Rd(e),e.tag){case 1:return sn(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),lt(rn),lt(Gt),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Nd(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return Cs(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var da=!1,Vt=!1,ty=typeof WeakSet=="function"?WeakSet:Set,pe=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function uf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Sp=!1;function ny(t,e){if(Xu=hl,t=Vg(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},hl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:kn(e.type,_),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return g=Sp,Sp=!1,g}function go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&uf(e,n,s)}r=r.next}while(r!==i)}}function Zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k_(t){var e=t.alternate;e!==null&&(t.alternate=null,k_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Po],delete e[Ku],delete e[kx],delete e[zx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function z_(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}var Ut=null,zn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)B_(t,e,n),n=n.sibling}function B_(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Gl,n)}catch{}switch(n.tag){case 5:Vt||us(n,e);case 6:var i=Ut,r=zn;Ut=null,Ti(t,e,n),Ut=i,zn=r,Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(zn?(t=Ut,n=n.stateNode,t.nodeType===8?Lc(t.parentNode,n):t.nodeType===1&&Lc(t,n),wo(t)):Lc(Ut,n.stateNode));break;case 4:i=Ut,r=zn,Ut=n.stateNode.containerInfo,zn=!0,Ti(t,e,n),Ut=i,zn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uf(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Vt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ti(t,e,n),Vt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Ep(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ty),e.forEach(function(i){var r=fy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,zn=!1;break e;case 3:Ut=a.stateNode.containerInfo,zn=!0;break e;case 4:Ut=a.stateNode.containerInfo,zn=!0;break e}a=a.return}if(Ut===null)throw Error(ne(160));B_(s,o,r),Ut=null,zn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}function H_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),qn(t),i&4){try{go(3,t,t.return),Zl(3,t)}catch(_){mt(t,t.return,_)}try{go(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:Un(e,t),qn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Un(e,t),qn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{yo(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&cg(r,s),Fu(a,o);var c=Fu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?pg(r,d):f==="dangerouslySetInnerHTML"?dg(r,d):f==="children"?yo(r,d):dd(r,f,d,c)}switch(a){case"input":Lu(r,s);break;case"textarea":ug(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ms(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Po]=s}catch(_){mt(t,t.return,_)}}break;case 6:if(Un(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){mt(t,t.return,_)}}break;case 3:if(Un(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:Un(e,t),qn(t);break;case 13:Un(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(jd=vt())),i&4&&Ep(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(c=Vt)||f,Un(e,t),Vt=c):Un(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:go(4,h,h.return);break;case 1:us(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:us(h,h.return);break;case 22:if(h.memoizedState!==null){Tp(d);continue}}p!==null?(p.return=h,pe=p):Tp(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hg("display",o))}catch(_){mt(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){mt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),qn(t),i&4&&Ep(t);break;case 21:break;default:Un(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(z_(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var s=Mp(t);hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mp(t);df(t,a,o);break;default:throw Error(ne(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iy(t,e,n){pe=t,V_(t)}function V_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||da;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=da;var c=Vt;if(da=o,(Vt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Ap(r):l!==null?(l.return=o,pe=l):Ap(r);for(;s!==null;)pe=s,V_(s),s=s.sibling;pe=r,da=a,Vt=c}wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):wp(t)}}function wp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Zl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Vt||e.flags&512&&ff(e)}catch(h){mt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Tp(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ap(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{ff(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{ff(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var ry=Math.ceil,Rl=Ei.ReactCurrentDispatcher,Gd=Ei.ReactCurrentOwner,bn=Ei.ReactCurrentBatchConfig,je=0,Lt=null,St=null,Nt=0,pn=0,fs=nr(0),wt=0,No=null,Pr=0,Ql=0,Wd=0,_o=null,tn=null,jd=0,bs=1/0,ui=null,Cl=!1,pf=null,Xi=null,ha=!1,zi=null,Pl=0,vo=0,mf=null,Ya=-1,qa=0;function $t(){return je&6?vt():Ya!==-1?Ya:Ya=vt()}function $i(t){return t.mode&1?je&2&&Nt!==0?Nt&-Nt:Hx.transition!==null?(qa===0&&(qa=Ag()),qa):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Ig(t.type)),t):1}function Xn(t,e,n,i){if(50<vo)throw vo=0,mf=null,Error(ne(185));Ho(t,n,i),(!(je&2)||t!==Lt)&&(t===Lt&&(!(je&2)&&(Ql|=n),wt===4&&Fi(t,Nt)),on(t,i),n===1&&je===0&&!(e.mode&1)&&(bs=vt()+500,Yl&&ir()))}function on(t,e){var n=t.callbackNode;H0(t,e);var i=dl(t,t===Lt?Nt:0);if(i===0)n!==null&&Nh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Nh(n),e===1)t.tag===0?Bx(Rp.bind(null,t)):Qg(Rp.bind(null,t)),Fx(function(){!(je&6)&&ir()}),n=null;else{switch(Rg(i)){case 1:n=_d;break;case 4:n=wg;break;case 16:n=fl;break;case 536870912:n=Tg;break;default:n=fl}n=K_(n,G_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G_(t,e){if(Ya=-1,qa=0,je&6)throw Error(ne(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=dl(t,t===Lt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=bl(t,i);else{e=i;var r=je;je|=2;var s=j_();(Lt!==t||Nt!==e)&&(ui=null,bs=vt()+500,Er(t,e));do try{ay();break}catch(a){W_(t,a)}while(!0);bd(),Rl.current=s,je=r,St!==null?e=0:(Lt=null,Nt=0,e=wt)}if(e!==0){if(e===2&&(r=Hu(t),r!==0&&(i=r,e=gf(t,r))),e===1)throw n=No,Er(t,0),Fi(t,i),on(t,vt()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!sy(r)&&(e=bl(t,i),e===2&&(s=Hu(t),s!==0&&(i=s,e=gf(t,s))),e===1))throw n=No,Er(t,0),Fi(t,i),on(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:pr(t,tn,ui);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=jd+500-vt(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qu(pr.bind(null,t,tn,ui),e);break}pr(t,tn,ui);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ry(i/1960))-i,10<i){t.timeoutHandle=qu(pr.bind(null,t,tn,ui),i);break}pr(t,tn,ui);break;case 5:pr(t,tn,ui);break;default:throw Error(ne(329))}}}return on(t,vt()),t.callbackNode===n?G_.bind(null,t):null}function gf(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=bl(t,e),t!==2&&(e=tn,tn=n,e!==null&&_f(e)),t}function _f(t){tn===null?tn=t:tn.push.apply(tn,t)}function sy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~Wd,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function Rp(t){if(je&6)throw Error(ne(327));ys();var e=dl(t,0);if(!(e&1))return on(t,vt()),null;var n=bl(t,e);if(t.tag!==0&&n===2){var i=Hu(t);i!==0&&(e=i,n=gf(t,i))}if(n===1)throw n=No,Er(t,0),Fi(t,e),on(t,vt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,tn,ui),on(t,vt()),null}function Xd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(bs=vt()+500,Yl&&ir())}}function br(t){zi!==null&&zi.tag===0&&!(je&6)&&ys();var e=je;je|=1;var n=bn.transition,i=Je;try{if(bn.transition=null,Je=1,t)return t()}finally{Je=i,bn.transition=n,je=e,!(je&6)&&ir()}}function $d(){pn=fs.current,lt(fs)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Nx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Rd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Cs(),lt(rn),lt(Gt),Fd();break;case 5:Nd(i);break;case 4:Cs();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Ld(i.type._context);break;case 22:case 23:$d()}n=n.return}if(Lt=t,St=t=Yi(t.current,null),Nt=pn=e,wt=0,No=null,Wd=Ql=Pr=0,tn=_o=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xr=null}return t}function W_(t,e){do{var n=St;try{if(bd(),ja.current=Al,Tl){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Tl=!1}if(Cr=0,bt=Et=dt=null,mo=!1,Do=0,Gd.current=null,n===null||n.return===null){wt=1,No=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=pp(o);if(p!==null){p.flags&=-257,mp(p,o,a,s,e),p.mode&1&&hp(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){hp(s,c,e),Yd();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=pp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mp(m,o,a,s,e),Cd(Ps(l,a));break e}}s=l=Ps(l,a),wt!==4&&(wt=2),_o===null?_o=[s]:_o.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=R_(s,l,e);ap(s,u);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Xi===null||!Xi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=C_(s,a,e);ap(s,S);break e}}s=s.return}while(s!==null)}$_(n)}catch(R){e=R,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function j_(){var t=Rl.current;return Rl.current=Al,t===null?Al:t}function Yd(){(wt===0||wt===3||wt===2)&&(wt=4),Lt===null||!(Pr&268435455)&&!(Ql&268435455)||Fi(Lt,Nt)}function bl(t,e){var n=je;je|=2;var i=j_();(Lt!==t||Nt!==e)&&(ui=null,Er(t,e));do try{oy();break}catch(r){W_(t,r)}while(!0);if(bd(),je=n,Rl.current=i,St!==null)throw Error(ne(261));return Lt=null,Nt=0,wt}function oy(){for(;St!==null;)X_(St)}function ay(){for(;St!==null&&!D0();)X_(St)}function X_(t){var e=q_(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?$_(t):St=e,Gd.current=null}function $_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ey(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,St=null;return}}else if(n=Jx(n,e,pn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);wt===0&&(wt=5)}function pr(t,e,n){var i=Je,r=bn.transition;try{bn.transition=null,Je=1,ly(t,e,n,i)}finally{bn.transition=r,Je=i}return null}function ly(t,e,n,i){do ys();while(zi!==null);if(je&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V0(t,s),t===Lt&&(St=Lt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ha||(ha=!0,K_(fl,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Je;Je=1;var a=je;je|=4,Gd.current=null,ny(t,n),H_(n,t),Cx($u),hl=!!Xu,$u=Xu=null,t.current=n,iy(n),I0(),je=a,Je=o,bn.transition=s}else t.current=n;if(ha&&(ha=!1,zi=t,Pl=r),s=t.pendingLanes,s===0&&(Xi=null),F0(n.stateNode),on(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=pf,pf=null,t;return Pl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===mf?vo++:(vo=0,mf=t):vo=0,ir(),null}function ys(){if(zi!==null){var t=Rg(Pl),e=bn.transition,n=Je;try{if(bn.transition=null,Je=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Pl=0,je&6)throw Error(ne(331));var r=je;for(je|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:go(8,f,s)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,p=f.return;if(k_(f),f===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var v=t.current;for(pe=v;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zl(9,a)}}catch(R){mt(a,a.return,R)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(je=r,ir(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Gl,t)}catch{}i=!0}return i}finally{Je=n,bn.transition=e}}return!1}function Cp(t,e,n){e=Ps(n,e),e=R_(t,e,1),t=ji(t,e,1),e=$t(),t!==null&&(Ho(t,1,e),on(t,e))}function mt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Ps(n,t),t=C_(e,t,1),e=ji(e,t,1),t=$t(),e!==null&&(Ho(e,1,t),on(e,t));break}}e=e.return}}function cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Nt&n)===n&&(wt===4||wt===3&&(Nt&130023424)===Nt&&500>vt()-jd?Er(t,0):Wd|=n),on(t,e)}function Y_(t,e){e===0&&(t.mode&1?(e=ia,ia<<=1,!(ia&130023424)&&(ia=4194304)):e=1);var n=$t();t=yi(t,e),t!==null&&(Ho(t,e,n),on(t,n))}function uy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y_(t,n)}function fy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Y_(t,n)}var q_;q_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,Qx(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ct&&e.flags&1048576&&Jg(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;$a(t,e),t=e.pendingProps;var r=Ts(e,Gt.current);xs(e,n),r=kd(null,e,i,t,r,n);var s=zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,vl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Id(e),r.updater=Kl,e.stateNode=r,r._reactInternals=e,nf(e,i,t,n),e=of(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Ad(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch($a(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hy(i),t=kn(i,t),r){case 0:e=sf(null,e,i,t,n);break e;case 1:e=vp(null,e,i,t,n);break e;case 11:e=gp(null,e,i,t,n);break e;case 14:e=_p(null,e,i,kn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),vp(t,e,i,r,n);case 3:e:{if(D_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,s_(t,e),El(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ne(423)),e),e=xp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ne(424)),e),e=xp(t,e,i,n,r);break e}else for(gn=Wi(e.stateNode.containerInfo.firstChild),vn=e,ct=!0,Hn=null,n=i_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=Si(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return o_(e),t===null&&Ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yu(i,r)?o=null:s!==null&&Yu(i,s)&&(e.flags|=32),L_(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Ju(e),null;case 13:return I_(t,e,n);case 4:return Ud(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),gp(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Sl,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!rn.current){e=Si(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Ln(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),_p(t,e,i,r,n);case 15:return P_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),$a(t,e),e.tag=1,sn(i)?(t=!0,vl(e)):t=!1,xs(e,n),A_(e,i,r),nf(e,i,r,n),of(null,e,i,!0,t,n);case 19:return U_(t,e,n);case 22:return b_(t,e,n)}throw Error(ne(156,e.tag))};function K_(t,e){return Eg(t,e)}function dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new dy(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hy(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pd)return 11;if(t===md)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return wr(n.children,r,s,e);case hd:o=8,r|=8;break;case Au:return t=Cn(12,n,e,r|2),t.elementType=Au,t.lanes=s,t;case Ru:return t=Cn(13,n,e,r),t.elementType=Ru,t.lanes=s,t;case Cu:return t=Cn(19,n,e,r),t.elementType=Cu,t.lanes=s,t;case og:return Jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:o=10;break e;case sg:o=9;break e;case pd:o=11;break e;case md:o=14;break e;case Di:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function wr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function Jl(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=og,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function py(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yc(0),this.expirationTimes=yc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,i,r,s,o,a,l){return t=new py(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function my(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Z_(t){if(!t)return Qi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(sn(n))return Zg(t,n,e)}return e}function Q_(t,e,n,i,r,s,o,a,l){return t=Kd(n,i,!0,t,r,s,o,a,l),t.context=Z_(null),n=t.current,i=$t(),r=$i(n),s=gi(i,r),s.callback=e??null,ji(n,s,r),t.current.lanes=r,Ho(t,r,i),on(t,i),t}function ec(t,e,n,i){var r=e.current,s=$t(),o=$i(r);return n=Z_(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ji(r,e,o),t!==null&&(Xn(t,r,o,s),Wa(t,r,o)),o}function Ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Zd(t,e){Pp(t,e),(t=t.alternate)&&Pp(t,e)}function gy(){return null}var J_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}tc.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));ec(t,e,null,null)};tc.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){ec(null,t,null,null)}),e[xi]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=bg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Dg(t)}};function Jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function _y(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ll(o);s.call(c)}}var o=Q_(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=o,t[xi]=o.current,Ro(t.nodeType===8?t.parentNode:t),br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ll(l);a.call(c)}}var l=Kd(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[xi]=l.current,Ro(t.nodeType===8?t.parentNode:t),br(function(){ec(e,l,n,i)}),l}function ic(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ll(o);a.call(l)}}ec(e,o,t,r)}else o=_y(n,e,t,r,i);return Ll(o)}Cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(vd(e,n|1),on(e,vt()),!(je&6)&&(bs=vt()+500,ir()))}break;case 13:br(function(){var i=yi(t,1);if(i!==null){var r=$t();Xn(i,t,1,r)}}),Zd(t,1)}};xd=function(t){if(t.tag===13){var e=yi(t,134217728);if(e!==null){var n=$t();Xn(e,t,134217728,n)}Zd(t,134217728)}};Pg=function(t){if(t.tag===13){var e=$i(t),n=yi(t,e);if(n!==null){var i=$t();Xn(n,t,e,i)}Zd(t,e)}};bg=function(){return Je};Lg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};ku=function(t,e,n){switch(e){case"input":if(Lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$l(i);if(!r)throw Error(ne(90));lg(i),Lu(i,r)}}}break;case"textarea":ug(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};_g=Xd;vg=br;var vy={usingClientEntryPoint:!1,Events:[Go,ss,$l,mg,gg,Xd]},qs={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Gl=pa.inject(xy),ei=pa}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(e))throw Error(ne(200));return my(t,e,null,n)};Sn.createRoot=function(t,e){if(!Jd(t))throw Error(ne(299));var n=!1,i="",r=J_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,Ro(t.nodeType===8?t.parentNode:t),new Qd(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return br(t)};Sn.hydrate=function(t,e,n){if(!nc(e))throw Error(ne(200));return ic(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!Jd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=J_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q_(e,null,t,1,n??null,r,!1,s,o),t[xi]=e.current,Ro(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tc(e)};Sn.render=function(t,e,n){if(!nc(e))throw Error(ne(200));return ic(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(ne(40));return t._reactRootContainer?(br(function(){ic(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Xd;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return ic(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function ev(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev)}catch(t){console.error(t)}}ev(),eg.exports=Sn;var yy=eg.exports,Lp=yy;wu.createRoot=Lp.createRoot,wu.hydrateRoot=Lp.hydrateRoot;function Sy(t,e="model.obj"){const n=[],i=[],r=[],s=[],o=[],a=[];let l="default";const c=t.split(/\r?\n/);for(const p of c){const g=p.trim();if(!g||g.startsWith("#"))continue;const _=g.split(/\s+/),m=_[0];if(m==="v"&&_.length>=4)n.push(Number(_[1]),Number(_[2]),Number(_[3]));else if(m==="vt"&&_.length>=3)i.push(Number(_[1]),Number(_[2]));else if(m==="vn"&&_.length>=4)r.push(Number(_[1]),Number(_[2]),Number(_[3]));else if(m==="o"||m==="g")l=_.slice(1).join(" ")||"default";else if(m==="f"&&_.length>=4){const u=s.length,v=[];for(let S=1;S<_.length;S++){const R=_[S],T=R.split("/"),A=Hc(T[0],n.length/3),P=T[1]!==void 0&&T[1]!==""?Hc(T[1],i.length/2):-1,V=T[2]!==void 0&&T[2]!==""?Hc(T[2],r.length/3):-1;if(A<0)throw new Error(`面 #${u+1} 存在无法解析的顶点引用: "${R}"`);v.push(o.length),o.push({v:A,vt:P,vn:V})}for(const S of v){const R=o[S],T=n.length/3,A=i.length/2,P=r.length/3;if(R.v>=T)throw new Error(`面 #${u+1} 引用了不存在的 v ${R.v+1}`);if(R.vt>=A)throw new Error(`面 #${u+1} 引用了不存在的 vt ${R.vt+1}`);if(R.vn>=P)throw new Error(`面 #${u+1} 引用了不存在的 vn ${R.vn+1}`)}const x={id:u,cornerIds:v,group:l};s.push(x);for(let S=1;S+1<v.length;S++)a.push({id:a.length,faceId:u,corners:[v[0],v[S],v[S+1]]})}}if(s.length===0)throw new Error("OBJ 中没有任何面（至少需要一行 f）");const f=Float64Array.from(n),d=i.length>=2,h=d?Float64Array.from(i):Ey(f);if(!d)for(const p of o)p.vt=p.v;return{sourceObj:t,fileName:e,positions:f,uvs:h,normals:Float64Array.from(r),faces:s,corners:o,triangles:a,cornerTri:My(a,o.length),vertexCount:f.length/3,uvCount:h.length/2,hasUv:d,uvOrigin:d?"obj":"planar-fallback"}}function My(t,e){const n=new Int32Array(e).fill(-1);for(const i of t)n[i.corners[0]]=i.id,n[i.corners[1]]=i.id,n[i.corners[2]]=i.id;return n}function Hc(t,e){const n=parseInt(t,10);return Number.isFinite(n)?n>0?n-1:e+n:-1}function Ey(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,o=-1/0;for(let g=0;g<t.length;g+=3){const _=t[g],m=t[g+1],u=t[g+2];e=Math.min(e,_),r=Math.max(r,_),n=Math.min(n,m),s=Math.max(s,m),i=Math.min(i,u),o=Math.max(o,u)}const a={x:r-e||1,y:s-n||1,z:o-i||1},l={x:e,y:n,z:i},c=["x","y","z"].map(g=>({a:g,s:a[g]})).sort((g,_)=>_.s-g.s).map(g=>g.a),f=c[0],d=c[1],h={x:0,y:1,z:2},p=new Float64Array(t.length/3*2);for(let g=0,_=0;g<t.length;g+=3,_+=2)p[_]=(t[g+h[f]]-l[f])/a[f],p[_+1]=1-(t[g+h[d]]-l[d])/a[d];return p}function $n(t,e){const n=t.corners[e],i=n.vt>=0?n.vt:n.v;return[t.uvs[i*2],t.uvs[i*2+1]]}function Tr(t,e){const n=t.corners[e].v;return{x:t.positions[n*3],y:t.positions[n*3+1],z:t.positions[n*3+2]}}const Dl=1e-10;function Jn(t,e){return{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z}}function tv(t,e){return{x:t.y*e.z-t.z*e.y,y:t.z*e.x-t.x*e.z,z:t.x*e.y-t.y*e.x}}function wy(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}function Bi(t){return Math.hypot(t.x,t.y,t.z)}function vf(t){const e=t.triangles.length,n=new Array(e);let i={x:1/0,y:1/0,z:1/0},r={x:-1/0,y:-1/0,z:-1/0};for(let m=0;m<t.positions.length;m+=3){const u={x:t.positions[m],y:t.positions[m+1],z:t.positions[m+2]};i={x:Math.min(i.x,u.x),y:Math.min(i.y,u.y),z:Math.min(i.z,u.z)},r={x:Math.max(r.x,u.x),y:Math.max(r.y,u.y),z:Math.max(r.z,u.z)}}const s=Math.max(Bi(Jn(r,i)),Dl);let o=1/0,a=1/0,l=-1/0,c=-1/0;for(let m=0;m<t.uvs.length;m+=2)o=Math.min(o,t.uvs[m]),l=Math.max(l,t.uvs[m]),a=Math.min(a,t.uvs[m+1]),c=Math.max(c,t.uvs[m+1]);const f=Math.max(Math.hypot(l-o,c-a),Dl),d=[];for(const m of t.triangles){const[u,v,x]=m.corners,S=Tr(t,u),R=Tr(t,v),T=Tr(t,x),[A,P]=$n(t,u),[V,y]=$n(t,v),[E,G]=$n(t,x),z=Jn(R,S),j=Jn(T,S),J=tv(z,j),U=Bi(J)/2,Q=((V-A)*(G-P)-(E-A)*(y-P))/2,L=Math.abs(Q),$=Ty(S,R,T,s)<1e-7,K=Ay(A,P,V,y,E,G,f)<1e-7,se=!$&&!K&&Q<0;!$&&!K&&d.push(U/L);let Ee=null;if(!$&&!K){const ke=Cy(S,R,T),X=Py(A,P,V,y,E,G);let ee=0;for(let ae=0;ae<3;ae++)ee=Math.max(ee,Math.abs(ke[ae]-X[ae]));Ee=ee*180/Math.PI}n[m.id]={area3d:U,areaUv:L,signed3d:1,signedUv:Q,degenerate3d:$,degenerateUv:K,flipped:se,areaRatio:null,angleDistortion:Ee}}const h=Ry(d)||1;for(const m of n)!m.degenerate3d&&!m.degenerateUv&&(m.areaRatio=Math.sqrt(m.area3d/m.areaUv/h));const p=by(t,s),g=Dy(t,n,s),_=Iy(t,g,n);for(const m of g){let u=0;for(const v of m.triIds)_[v]&&u++;m.overlapTriCount=u}return{metrics:n,edges:p,islands:g,overlap:_,globalScale:Math.sqrt(h),bounds3d:{min:i,max:r}}}function nv(t,e){const n=Math.max(...e);return n===0?0:2*t/(n*n)}function Ty(t,e,n,i){const r=Bi(tv(Jn(e,t),Jn(n,t)))/2,s=[Bi(Jn(t,e)),Bi(Jn(e,n)),Bi(Jn(n,t))];return Math.min(...s)<=1e-9*i?0:nv(r,s)}function Ay(t,e,n,i,r,s,o){const a=Math.abs((n-t)*(s-e)-(r-t)*(i-e))/2,l=[Math.hypot(n-t,i-e),Math.hypot(r-n,s-i),Math.hypot(t-r,e-s)];return Math.min(...l)<=1e-9*o?0:nv(a,l)}function Ry(t){if(t.length===0)return 0;const e=[...t].sort((i,r)=>i-r),n=e.length>>1;return e.length%2?e[n]:(e[n-1]+e[n])/2}function Cy(t,e,n){return[Vc(t,e,n),Vc(e,t,n),Vc(n,t,e)]}function Vc(t,e,n){const i=Jn(e,t),r=Jn(n,t),s=wy(i,r)/(Bi(i)*Bi(r));return Math.acos(Math.min(1,Math.max(-1,s)))}function Py(t,e,n,i,r,s){const o=(a,l,c,f,d,h)=>{const p=(c*d+f*h)/(Math.hypot(c,f)*Math.hypot(d,h));return Math.acos(Math.min(1,Math.max(-1,p))+0*a+0*l)};return[o(t,e,n-t,i-e,r-t,s-e),o(n,i,t-n,e-i,r-n,s-i),o(r,s,t-r,e-s,n-r,i-s)]}function by(t,e){const n=1e-7*e,i=n*n,r=Ly(t,i),s=new Map;for(const a of t.triangles){const l=[[a.corners[0],a.corners[1]],[a.corners[1],a.corners[2]],[a.corners[2],a.corners[0]]];for(const[c,f]of l){const d=t.corners[c].v,h=t.corners[f].v,p=r[d],g=r[h],_=Math.min(p,g),m=Math.max(p,g),u=`${_}_${m}`;let v=s.get(u);v||(v=[],s.set(u,v)),v.push(p===_?{tri:a.id,ca:c,cb:f,va:d,vb:h}:{tri:a.id,ca:f,cb:c,va:h,vb:d})}}const o=[];for(const[a,l]of s){const[c,f]=a.split("_").map(Number),d=l.length===1,h=l.length>=3;let p=!1;if(l.length===2){const g=l[0].va!==l[1].va||l[0].vb!==l[1].vb,_=Dp(t,l[0].ca,l[1].ca)||Dp(t,l[0].cb,l[1].cb);p=g||_}o.push({key:a,a:c,b:f,occurrences:l.map(g=>({tri:g.tri,ca:g.ca,cb:g.cb})),boundary:d,nonManifold:h,seam:p})}return o}function Ly(t,e){const n=t.vertexCount,i=new Int32Array(n);for(let a=0;a<n;a++)i[a]=a;const r=a=>{let l=a;for(;i[l]!==l;)l=i[l];for(;i[a]!==l;){const c=i[a];i[a]=l,a=c}return l},s=(a,l)=>{i[r(a)]=r(l)};for(let a=0;a<n;a++)for(let l=a+1;l<n;l++){const c=t.positions[a*3]-t.positions[l*3],f=t.positions[a*3+1]-t.positions[l*3+1],d=t.positions[a*3+2]-t.positions[l*3+2];c*c+f*f+d*d<=e&&s(a,l)}const o=new Int32Array(n);for(let a=0;a<n;a++)o[a]=r(a);return o}function Dp(t,e,n){const i=t.corners[e],r=t.corners[n];if(i.vt>=0&&r.vt>=0&&i.vt===r.vt)return!1;const[s,o]=$n(t,e),[a,l]=$n(t,n);return Math.hypot(s-a,o-l)>1e-6}function Dy(t,e,n){const i=g=>{const[_,m]=$n(t,g);return`p${_.toFixed(6)}_${m.toFixed(6)}`},r=new Int32Array(t.triangles.length);for(let g=0;g<r.length;g++)r[g]=g;const s=g=>{let _=g;for(;r[_]!==_;)_=r[_];for(;r[g]!==_;){const m=r[g];r[g]=_,g=m}return _},o=(g,_)=>{r[s(g)]=s(_)},a=1e-7*n,l=a*a,c=(g,_)=>{const m=t.corners[g].v,u=t.corners[_].v;if(m===u)return!0;const v=t.positions[m*3]-t.positions[u*3],x=t.positions[m*3+1]-t.positions[u*3+1],S=t.positions[m*3+2]-t.positions[u*3+2];return v*v+x*x+S*S<=l},f=new Map;for(const g of t.triangles){const _=[[g.corners[0],g.corners[1]],[g.corners[1],g.corners[2]],[g.corners[2],g.corners[0]]];for(const[m,u]of _){const v=Tr(t,m),x=Tr(t,u),S=[Ip(v,a),Ip(x,a)].sort().join("|"),R=f.get(S);R?R.push({tri:g.id,ca:m,cb:u}):f.set(S,[{tri:g.id,ca:m,cb:u}])}}for(const g of f.values())for(let _=0;_<g.length;_++)for(let m=_+1;m<g.length;m++){const u=g[_],v=g[m],x=c(u.ca,v.ca)&&c(u.cb,v.cb),S=c(u.ca,v.cb)&&c(u.cb,v.ca);if(!x&&!S)continue;const R=(A,P)=>{const V=t.corners[A],y=t.corners[P];return V.vt>=0&&y.vt>=0&&V.vt===y.vt?!0:i(A)===i(P)};(x?R(u.ca,v.ca)&&R(u.cb,v.cb):R(u.ca,v.cb)&&R(u.cb,v.ca))&&o(u.tri,v.tri)}const d=new Map;for(const g of t.triangles){const _=s(g.id),m=d.get(_);m?m.push(g.id):d.set(_,[g.id])}const h=[];let p=0;for(const[,g]of d){let _=0;for(const m of g){const u=e[m];!u.degenerate3d&&!u.degenerateUv&&u.flipped&&_++}h.push({id:p++,triIds:g,mirrored:_>0,overlapTriCount:0})}return h}function Ip(t,e){const n=i=>Math.round(i/e).toString();return`${n(t.x)},${n(t.y)},${n(t.z)}`}function Iy(t,e,n){const i=t.triangles.length,r=new Uint8Array(i),s=[];let o=1/0,a=1/0,l=-1/0,c=-1/0;for(const _ of e)for(const m of _.triIds){const u=n[m];if(u.degenerate3d||u.degenerateUv)continue;const v=t.triangles[m],x=[0,1,2].map(y=>$n(t,v.corners[y])),S=[x[0][0],x[1][0],x[2][0]],R=[x[0][1],x[1][1],x[2][1]],T=Math.min(...S),A=Math.max(...S),P=Math.min(...R),V=Math.max(...R);o=Math.min(o,T),l=Math.max(l,A),a=Math.min(a,P),c=Math.max(c,V),s.push({id:m,island:_.id,u:S,v:R,minU:T,minV:P,maxU:A,maxV:V})}const f=32,d=Math.max(l-o,Dl),h=Math.max(c-a,Dl),p=Array.from({length:f*f},()=>[]);for(const _ of s){const m=Math.min(f-1,Math.max(0,Math.floor((_.minU-o)/d*f))),u=Math.min(f-1,Math.max(0,Math.floor((_.maxU-o)/d*f))),v=Math.min(f-1,Math.max(0,Math.floor((_.minV-a)/h*f))),x=Math.min(f-1,Math.max(0,Math.floor((_.maxV-a)/h*f)));for(let S=m;S<=u;S++)for(let R=v;R<=x;R++)p[R*f+S].push(_)}const g=new Set;for(const _ of p)for(let m=0;m<_.length;m++)for(let u=m+1;u<_.length;u++){const v=_[m],x=_[u];if(v.island===x.island)continue;const S=v.id<x.id?v.id*i+x.id:x.id*i+v.id;if(g.has(S)||(g.add(S),v.maxU<x.minU||x.maxU<v.minU||v.maxV<x.minV||x.maxV<v.minV))continue;Fy(v,x)>1e-9&&(r[v.id]=1,r[x.id]=1)}return r}function Uy(t,e){const i=(e.u[1]-e.u[0])*(e.v[2]-e.v[0])-(e.u[2]-e.u[0])*(e.v[1]-e.v[0])>=0?[0,1,2]:[0,2,1];let r=t;for(let s=0;s<3;s++){const o=i[s],a=i[(s+1)%3],l=[e.u[o],e.v[o]],c=[e.u[a],e.v[a]],f=[],d=h=>(c[0]-l[0])*(h[1]-l[1])-(c[1]-l[1])*(h[0]-l[0])>=0;for(let h=0;h<r.length;h++){const p=r[h],g=r[(h+r.length-1)%r.length],_=d(p),m=d(g);_?(m||f.push(Up(g,p,l,c)),f.push(p)):m&&f.push(Up(g,p,l,c))}if(r=f,r.length===0)break}return r}function Up(t,e,n,i){const r=[e[0]-t[0],e[1]-t[1]],s=[i[0]-n[0],i[1]-n[1]],o=((n[0]-t[0])*s[1]-(n[1]-t[1])*s[0])/(r[0]*s[1]-r[1]*s[0]);return[t[0]+o*r[0],t[1]+o*r[1]]}function Ny(t){let e=0;for(let n=0;n<t.length;n++){const i=t[n],r=t[(n+1)%t.length];e+=i[0]*r[1]-r[0]*i[1]}return Math.abs(e)/2}function Fy(t,e){const n=[[t.u[0],t.v[0]],[t.u[1],t.v[1]],[t.u[2],t.v[2]]];return Ny(Uy(n,e))}function Np(t){const e=[];e.push("# 低模 UV 检查器导出"),e.push(`# 来源: ${t.fileName}`),e.push(`# 三角面: ${t.triangles.length}  原始面: ${t.faces.length}`),e.push(`# UV 来源: ${t.uvOrigin==="obj"?"OBJ/编辑后":"平面回退"}`),e.push("o LowpolyUVExport");const n=o=>{const a=o.toFixed(6);return a==="-0.000000"?"0.000000":a},i=new Map,r=[],s=new Int32Array(t.corners.length);for(let o=0;o<t.corners.length;o++){const a=t.corners[o],l=a.vt>=0?a.vt:a.v,c=t.uvs[l*2],f=t.uvs[l*2+1],d=`${n(c)}/${n(f)}`;let h=i.get(d);h===void 0&&(h=r.length+1,i.set(d,h),r.push([c,f])),s[o]=h}for(let o=0;o<t.corners.length;o++){const a=t.corners[o];e.push(`v ${n(t.positions[a.v*3])} ${n(t.positions[a.v*3+1])} ${n(t.positions[a.v*3+2])}`)}for(const[o,a]of r)e.push(`vt ${n(o)} ${n(a)}`);for(const o of t.triangles){const a=o.corners.map(l=>`${l+1}/${s[l]}`);e.push(`f ${a.join(" ")}`)}return e.join(`
`)+`
`}function Oy(t,e,n="text/plain;charset=utf-8"){const i=new Blob([e],{type:n}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=t,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}const eh={minRatio:.5,maxRatio:2,maxAngle:15};function iv(t){const e=eh,n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a;let i=n(t==null?void 0:t.minRatio,e.minRatio),r=n(t==null?void 0:t.maxRatio,e.maxRatio);const s=n(t==null?void 0:t.maxAngle,e.maxAngle);return i=Math.max(1e-6,Math.min(i,1e6)),r=Math.max(1e-6,Math.min(r,1e6)),i>r&&(i=r),{minRatio:i,maxRatio:r,maxAngle:Math.max(0,Math.min(s,180))}}const Za=1,Qa=2,Ja=4;function th(t,e,n){const i=iv(n),r=t.triangles.length,s=new Uint8Array(r),o=new Map;for(const g of t.triangles){const _=o.get(g.faceId);_?_.push(g.id):o.set(g.faceId,[g.id])}const a=g=>1e-9*Math.max(1,Math.abs(g));for(const g of t.triangles){const _=e.metrics[g.id];let m=0;_.areaRatio!==null&&(_.areaRatio+a(i.minRatio)<i.minRatio&&(m|=Za),_.areaRatio-a(i.maxRatio)>i.maxRatio&&(m|=Qa)),_.angleDistortion!==null&&_.angleDistortion-a(i.maxAngle)>i.maxAngle&&(m|=Ja),s[g.id]=m}let l=0,c=0;for(let g=0;g<r;g++)s[g]&(Za|Qa)&&l++,s[g]&Ja&&c++;const f=[],d=[],h=[],p=[];for(const g of[...o.keys()].sort((_,m)=>_-m)){const _=o.get(g);let m=null,u=null,v=null;const x=new Set;for(const A of _){const P=e.metrics[A];P.areaRatio!==null&&(m=m===null?P.areaRatio:Math.min(m,P.areaRatio),u=u===null?P.areaRatio:Math.max(u,P.areaRatio)),P.angleDistortion!==null&&(v=v===null?P.angleDistortion:Math.max(v,P.angleDistortion));const V=s[A];V&Za&&x.add("density-low"),V&Qa&&x.add("density-high"),V&Ja&&x.add("angle")}const R={faceId:g,triIds:_,areaMin:m,areaMax:u,angleMax:v,issues:["density-low","density-high","angle"].filter(A=>x.has(A))};f.push(R),(x.has("density-low")||x.has("density-high"))&&d.push(g),x.has("angle")&&h.push(g),R.issues.length>0&&p.push(R)}return{rules:i,triMask:s,faces:f,problemFaces:p,areaFaceIds:d,angleFaceIds:h,areaTriCount:l,angleTriCount:c}}const or=t=>Math.round(t*1e6)/1e6;function ky(t,e,n,i=new Date){const r=p=>{const g=new Set;return t.triangles.forEach(_=>{p(_.id)&&g.add(_.faceId)}),[...g].sort((_,m)=>_-m)};let s=0,o=0,a=0,l=0,c=null,f=null,d=null;for(let p=0;p<e.metrics.length;p++){const g=e.metrics[p];g.degenerate3d&&s++,g.degenerateUv&&o++,g.flipped&&a++,e.overlap[p]&&l++,g.areaRatio!==null&&(c=c===null?g.areaRatio:Math.min(c,g.areaRatio),f=f===null?g.areaRatio:Math.max(f,g.areaRatio)),g.angleDistortion!==null&&(d=d===null?g.angleDistortion:Math.max(d,g.angleDistortion))}const h=n.problemFaces.map(p=>({faceId:p.faceId,issues:p.issues,areaRatioMin:p.areaMin===null?null:or(p.areaMin),areaRatioMax:p.areaMax===null?null:or(p.areaMax),angleDistortionMax:p.angleMax===null?null:or(p.angleMax),triIds:p.triIds}));return{type:"uv-rule-check",version:1,generatedAt:i.toISOString(),model:{fileName:t.fileName,faceCount:t.faces.length,triangleCount:t.triangles.length,vertexCount:t.vertexCount},rules:n.rules,metrics:{globalScale:or(e.globalScale),areaRatioMin:c===null?null:or(c),areaRatioMax:f===null?null:or(f),angleDistortionMax:d===null?null:or(d)},counts:{densityFaces:n.areaFaceIds.length,angleFaces:n.angleFaceIds.length,problemFaces:n.problemFaces.length,densityTriangles:n.areaTriCount,angleTriangles:n.angleTriCount,flippedTriangles:a,overlapTriangles:l,degenerateTriangles3d:s,degenerateTrianglesUv:o},problemFaces:h,flippedFaces:r(p=>e.metrics[p].flipped),overlapFaces:r(p=>e.overlap[p]===1),degenerateFaces:r(p=>e.metrics[p].degenerate3d||e.metrics[p].degenerateUv),notes:["面积比率与角度偏差边界取等号不超限。","退化面不参与面积比率与角度判定，ratio 为 null。","翻转/重叠/退化使用既有独立算法，与阈值无关。","本检查只改判定，不修改模型 UV。"]}}const zy="modulepreload",By=function(t){return"/"+t},Fp={},Hy=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=By(l),l in Fp)return;Fp[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":zy,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let Gc=null;function Vy(){return Gc||(Gc=Hy(()=>import("./index-2lRZeN62.js"),[]).then(t=>(t.default??t)())),Gc}const Gy=1e-12;async function Wy(t){const e=await Vy(),n=new Int32Array(t.corners.length),i=[];for(let l=0;l<t.corners.length;l++){const c=Tr(t,l);let f=-1;for(let d=0;d<i.length;d+=3){const h=i[d]-c.x,p=i[d+1]-c.y,g=i[d+2]-c.z;if(h*h+p*p+g*g<=Gy){f=d/3;break}}f<0&&(f=i.length/3,i.push(c.x,c.y,c.z)),n[l]=f}const r=t.triangles.length,s=new Uint32Array(r*3);for(const l of t.triangles)s[l.id*3]=n[l.corners[0]],s[l.id*3+1]=n[l.corners[1]],s[l.id*3+2]=n[l.corners[2]];const o=Float32Array.from(i),a=e.createAtlas();try{const l=a.addMesh({positions:o,indices:s});if(l!==e.AddMeshError.Success)throw new Error(`xatlas 拒绝该网格：${e.addMeshErrorString(l)}（非流形或索引非法）`);a.addMeshJoin(),a.generate({normalSeamWeight:4,textureSeamWeight:.5,fixWinding:!1,maxIterations:2},{padding:4,bilinear:!0,rotateCharts:!0});const c=a.getMesh(0);if(c.indexCount!==s.length)throw new Error(`xatlas 输出三角形数变化（${s.length/3} -> ${c.indexCount/3}），放弃映射`);const f=Math.max(1,a.width),d=Math.max(1,a.height),h=new Array(i.length/3).fill(null);for(const _ of c.vertices){if(_.xref<0||_.xref>=h.length)continue;const m=_.uv[0]/f,u=_.uv[1]/d;h[_.xref]===null&&(h[_.xref]=[m,u])}const p=new Float64Array(t.corners.length*2);for(let _=0;_<r;_++){const m=t.triangles[_];for(let u=0;u<3;u++){const v=c.indices[_*3+u],x=c.vertices[v],S=x.uv[0]/f,R=x.uv[1]/d,T=m.corners[u];p[T*2]=S,p[T*2+1]=R}}for(let _=0;_<t.corners.length;_++)if(!Number.isFinite(p[_*2])){const m=n[_],u=h[m];u&&(p[_*2]=u[0],p[_*2+1]=u[1])}const g=a.getUtilization(0);return{uvs:p,chartCount:a.chartCount,utilization:g}}finally{a.destroy()}}const jy="lowpoly-uv-inspector",Il="projects",Xy=1;function $y(){return new Promise((t,e)=>{const n=indexedDB.open(jy,Xy);n.onupgradeneeded=()=>{const i=n.result;i.objectStoreNames.contains(Il)||i.createObjectStore(Il,{keyPath:"id"}).createIndex("updatedAt","updatedAt")},n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)})}function rc(t,e){return $y().then(n=>new Promise((i,r)=>{const s=n.transaction(Il,t),o=e(s.objectStore(Il));o.onsuccess=()=>{s.oncomplete=()=>{n.close(),i(o.result)}},o.onerror=()=>{n.close(),r(o.error)}}))}function Yy(t){return rc("readwrite",e=>e.put({...t,updatedAt:Date.now()})).then(()=>{})}function qy(){return rc("readonly",t=>t.index("updatedAt").getAll()).then(t=>t.reverse())}function Ky(t){return rc("readonly",e=>e.get(t))}function Zy(t){return rc("readwrite",e=>e.delete(t)).then(()=>{})}function Qy(){return`p_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function Jy(t,e){switch(e.type){case"load":return{...t,mesh:e.mesh,stats:e.stats,objText:e.objText,fileName:e.fileName,projectId:e.projectId,selectedFaceIds:new Set,unwrapping:!1,history:[],notice:null};case"replace-mesh":return{...t,mesh:e.mesh,stats:e.stats,history:t.mesh?[...t.history,t.mesh].slice(-10):t.history,notice:e.notice??t.notice};case"select":return{...t,selectedFaceIds:e.faceIds};case"toggle-face":{const n=new Set(t.selectedFaceIds);return n.has(e.faceId)?n.delete(e.faceId):n.add(e.faceId),{...t,selectedFaceIds:n}}case"set-checker":return{...t,checkerOn:e.on,checkerScale:e.scale??t.checkerScale};case"toggle-flag":return{...t,[e.key]:!t[e.key]};case"set-rules":return{...t,rules:e.rules};case"unwrapping":return{...t,unwrapping:e.on};case"notice":return{...t,notice:e.notice};case"project-id":return{...t,projectId:e.id};case"undo":{if(t.history.length===0)return t;const n=t.history[t.history.length-1];return{...t,mesh:n,stats:vf(n),history:t.history.slice(0,-1),notice:{kind:"info",text:"已撤销上一次 UV 替换"}}}default:return t}}const rv=we.createContext(null);function eS({children:t}){const[e,n]=we.useReducer(Jy,void 0,()=>({mesh:null,stats:null,objText:"",fileName:"",projectId:null,selectedFaceIds:new Set,checkerOn:!0,checkerScale:8,showFlipped:!0,showOverlap:!0,showRules:!0,rules:eh,unwrapping:!1,notice:null,history:[]})),i=we.useRef(e);i.current=e;const[r,s]=we.useReducer((R,T)=>T,[]),o=we.useCallback(async()=>{try{s(await qy())}catch{}},[]);we.useEffect(()=>{o()},[o]);const a=we.useCallback(R=>{n({type:"notice",notice:R})},[]),l=we.useCallback((R,T,A=null)=>{try{const P=Sy(R,T),V=vf(P);n({type:"load",mesh:P,stats:V,objText:R,fileName:T,projectId:A})}catch(P){n({type:"notice",notice:{kind:"error",text:`解析失败：${P instanceof Error?P.message:String(P)}`}})}},[]),c=we.useCallback(R=>{n({type:"select",faceIds:R})},[]),f=we.useCallback(R=>{n({type:"toggle-face",faceId:R})},[]),d=we.useCallback((R,T)=>{n({type:"set-checker",on:R,scale:T})},[]),h=we.useCallback(R=>{n({type:"toggle-flag",key:R})},[]),p=we.useCallback(R=>{n({type:"set-rules",rules:R})},[]),g=we.useCallback(async()=>{const R=i.current.mesh;if(!(!R||i.current.unwrapping)){n({type:"unwrapping",on:!0}),n({type:"notice",notice:{kind:"info",text:"xatlas WASM 展开中…"}});try{const T=await Wy(R);if(!Number.isFinite(T.utilization)||T.uvs.length!==R.corners.length*2)throw new Error("xatlas 返回结果不完整");const A={...R,uvs:T.uvs,uvCount:T.uvs.length/2,hasUv:!0,uvOrigin:"obj",corners:R.corners.map((V,y)=>({...V,vt:y}))};A.uvs=T.uvs;const P=vf(A);n({type:"replace-mesh",mesh:A,stats:P,notice:{kind:"success",text:`自动展开完成：${T.chartCount} 个图，利用率 ${(T.utilization*100).toFixed(0)}%`}})}catch(T){n({type:"notice",notice:{kind:"error",text:`自动展开失败，已保留原模型：${T instanceof Error?T.message:String(T)}`}})}finally{n({type:"unwrapping",on:!1})}}},[]),_=we.useCallback(()=>{const R=i.current.mesh;if(!R)return;const T=Np(R),A=new Blob([T],{type:"text/plain;charset=utf-8"}),P=URL.createObjectURL(A),V=document.createElement("a");V.href=P,V.download=R.fileName.replace(/\.obj$/i,"")+"_uv.obj",document.body.appendChild(V),V.click(),V.remove(),setTimeout(()=>URL.revokeObjectURL(P),1e3),n({type:"notice",notice:{kind:"success",text:"已导出 OBJ，可用 Blender/Maya 等重新载入验证"}})},[]),m=we.useCallback(async()=>{const R=i.current.mesh;if(!R)return;const T=i.current.projectId??Qy(),A=Np(R),P={id:T,name:R.fileName,updatedAt:Date.now(),objText:A,fileName:R.fileName};try{await Yy(P),n({type:"project-id",id:T}),n({type:"notice",notice:{kind:"success",text:`工程已存入 IndexedDB（${T}）`}}),await o()}catch(V){n({type:"notice",notice:{kind:"error",text:`保存失败：${V instanceof Error?V.message:String(V)}`}})}},[o]),u=we.useCallback(async R=>{try{const T=await Ky(R);if(!T)return;l(T.objText,T.fileName,R)}catch(T){n({type:"notice",notice:{kind:"error",text:`打开工程失败：${T instanceof Error?T.message:String(T)}`}})}},[l]),v=we.useCallback(async R=>{await Zy(R),i.current.projectId===R&&n({type:"project-id",id:null}),await o()},[o]),x=we.useCallback(()=>n({type:"undo"}),[]),S=we.useMemo(()=>({state:e,loadObjText:l,selectFaces:c,toggleFace:f,setChecker:d,toggleFlag:h,setRules:p,runUnwrap:g,exportCurrent:_,saveCurrent:m,projects:r,refreshProjects:o,openProject:u,removeProject:v,notify:a,undo:x}),[e,r,l,c,f,d,h,p,g,_,m,o,u,v,a,x]);return O.jsx(rv.Provider,{value:S,children:t})}function Fr(){const t=we.useContext(rv);if(!t)throw new Error("useApp must be used within AppProvider");return t}const jo=(t,e)=>`# ${t}
# ${e}
`,tS=`${jo("镜像岛样例","折边两侧映射到同一 UV 区域，第二片 UV 反向")}
v -1 0 0
v  0 0 0
v  0 1 0
v  0 0 0
v  1 0 0
v  0 1 0
vt 0 0
vt 1 0
vt 1 1
f 1/1 2/2 3/3
f 4/1 5/3 6/2
`;function nS(){const t=[jo("共享边接缝样例","立方体：相邻面顶点独立、每面独占 UV 格子，共享边均为接缝")],e=(r,s,o)=>[r,s,o],n=[[e(-1,-1,-1),e(1,-1,-1),e(1,1,-1),e(-1,1,-1)],[e(1,-1,1),e(-1,-1,1),e(-1,1,1),e(1,1,1)],[e(1,-1,-1),e(1,-1,1),e(1,1,1),e(1,1,-1)],[e(-1,-1,1),e(-1,-1,-1),e(-1,1,-1),e(-1,1,1)],[e(-1,1,-1),e(1,1,-1),e(1,1,1),e(-1,1,1)],[e(-1,-1,1),e(1,-1,1),e(1,-1,-1),e(-1,-1,-1)]];for(const r of n)for(const[s,o,a]of r)t.push(`v ${s*.5} ${o*.5} ${a*.5}`);const i=[[0,0],[2,0],[4,0],[0,2],[2,2],[4,2]];for(const[r,s]of i)for(const[o,a]of[[0,0],[1,0],[1,1],[0,1]])t.push(`vt ${r+o} ${s+a}`);return n.forEach((r,s)=>{const o=s*4+1,a=s*4+1;t.push(`f ${o}/${a} ${o+1}/${a+1} ${o+2}/${a+2}`),t.push(`f ${o}/${a} ${o+2}/${a+2} ${o+3}/${a+3}`)}),t.join(`
`)+`
`}const iS=`${jo("非流形边样例","三个三角形共享同一条 3D 边（鳍片结构）")}
v -1 0 0
v  1 0 0
v  0 0 -1
v  0 1 0
v  0 -1 0
vt 0 0
vt 1 0
vt 0.5 1
vt 2 0
vt 3 0
vt 2.5 1
vt 4 0
vt 5 0
vt 4.5 1
f 1/1 2/2 3/3
f 1/4 2/5 4/6
f 1/7 2/8 5/9
`,rS=`${jo("退化/拉伸/重叠混合样例","A 正常, B 3D退化(共线), C UV拉伸, D 与 A 岛间重叠")}
v 0 0 0
v 1 0 0
v 1 1 0
v 0 0 0
v 0.5 0 0
v 1 0 0
v 2 0 0
v 3 0 0
v 3 1 0
v 0 -1 0
v 1 -1 0
v 1 0 0
vt 0 0
vt 1 0
vt 1 1
vt 2 0
vt 2.5 0
vt 3 0
vt 0 0
vt 1 0
vt 1 0.02
f 1/1 2/2 3/3
f 4/4 5/5 6/6
f 7/7 8/8 9/9
f 10/1 11/2 12/3
`,sS=`${jo("密度/角度梯度样例","6 个全等直角三角形：密度与角度畸变各档梯度，无翻转/重叠/退化")}
v 0 0 0
v 1 0 0
v 1 1 0
v 3 0 0
v 4 0 0
v 4 1 0
v 6 0 0
v 7 0 0
v 7 1 0
v 9 0 0
v 10 0 0
v 10 1 0
v 12 0 0
v 13 0 0
v 13 1 0
v 15 0 0
v 16 0 0
v 16 1 0
vt 0 0
vt 1 0
vt 0.5 1
vt 2 0
vt 3 0
vt 2.2 1
vt 4 0
vt 4.4 0
vt 4 0.4
vt 9 0
vt 10 0
vt 9.8 1
vt 6 0
vt 8.5 0
vt 6 2.5
vt 11 0
vt 11.6 0
vt 11 0.6
f 1/1 2/2 3/3
f 4/4 5/5 6/6
f 7/7 8/8 9/9
f 10/10 11/11 12/12
f 13/13 14/14 15/15
f 16/16 17/17 18/18
`,sv=[{id:"mirrored",label:"镜像岛",description:"折边两侧映射到同一 UV 区域，绕序相反",obj:tS},{id:"seams",label:"共享边接缝",description:"立方体：每面顶点独立、UV 各占一格，共享边全为接缝",obj:nS()},{id:"nonmanifold",label:"非流形边",description:"三个三角形共享一条 3D 边",obj:iS},{id:"degenerate",label:"退化/拉伸/重叠",description:"退化面不计比率，另有强拉伸与岛间重叠",obj:rS},{id:"gradient",label:"密度/角度梯度",description:"密度与角度畸变各档梯度：验收阈值收紧/放宽",obj:sS}];function oS(){const{state:t,loadObjText:e,runUnwrap:n,exportCurrent:i,saveCurrent:r,projects:s,openProject:o,removeProject:a,setChecker:l,toggleFlag:c,undo:f}=Fr(),d=we.useRef(null),h=async p=>{const g=await p.text();e(g,p.name)};return O.jsxs("header",{className:"toolbar",children:[O.jsx("div",{className:"brand",children:"低模 UV 检查器"}),O.jsx("button",{onClick:()=>{var p;return(p=d.current)==null?void 0:p.click()},children:"载入 OBJ"}),O.jsx("input",{ref:d,type:"file",accept:".obj,text/plain",style:{display:"none"},onChange:p=>{var _;const g=(_=p.target.files)==null?void 0:_[0];g&&h(g),p.target.value=""}}),O.jsx("span",{className:"sep"}),O.jsxs("div",{className:"dropdown",children:[O.jsx("button",{children:"样例 ▾"}),O.jsx("div",{className:"menu",children:sv.map(p=>O.jsx("button",{title:p.description,onClick:()=>e(p.obj,`${p.id}.obj`),children:p.label},p.id))})]}),O.jsx("button",{className:"primary",disabled:!t.mesh||t.unwrapping,onClick:()=>void n(),title:"调用 xatlas WASM 重新展开；失败时自动保留原模型",children:t.unwrapping?"展开中…":"xatlas 自动展开"}),O.jsxs("button",{disabled:t.history.length===0,onClick:f,children:["撤销 (",t.history.length,")"]}),O.jsx("span",{className:"sep"}),O.jsxs("label",{className:"chk",children:[O.jsx("input",{type:"checkbox",checked:t.checkerOn,onChange:p=>l(p.target.checked)}),"棋盘"]}),O.jsx("select",{value:t.checkerScale,onChange:p=>l(t.checkerOn,Number(p.target.value)),title:"0..1 UV 内棋盘格数",children:[4,8,16,32].map(p=>O.jsxs("option",{value:p,children:[p,"×",p]},p))}),O.jsxs("label",{className:"chk",children:[O.jsx("input",{type:"checkbox",checked:t.showFlipped,onChange:()=>c("showFlipped")}),"翻转"]}),O.jsxs("label",{className:"chk",children:[O.jsx("input",{type:"checkbox",checked:t.showOverlap,onChange:()=>c("showOverlap")}),"重叠"]}),O.jsxs("label",{className:"chk",children:[O.jsx("input",{type:"checkbox",checked:t.showRules,onChange:()=>c("showRules")}),"超限"]}),O.jsx("span",{className:"sep"}),O.jsx("button",{disabled:!t.mesh,onClick:i,title:"导出非索引 v/vt OBJ，标准工具可重新载入验证",children:"导出 UV OBJ"}),O.jsx("button",{disabled:!t.mesh,onClick:()=>void r(),children:"存工程"}),O.jsx("div",{className:"spacer"}),O.jsxs("div",{className:"dropdown align-right",children:[O.jsxs("button",{children:["工程库 (",s.length,") ▾"]}),O.jsxs("div",{className:"menu",children:[s.length===0&&O.jsx("div",{className:"menu-empty",children:"IndexedDB 暂无存档"}),s.map(p=>O.jsxs("div",{className:"menu-item",children:[O.jsxs("button",{className:"proj-open",title:`${new Date(p.updatedAt).toLocaleString()}
${p.id}`,onClick:()=>void o(p.id),children:[p.name,O.jsx("small",{children:new Date(p.updatedAt).toLocaleString()})]}),O.jsx("button",{className:"proj-del",onClick:()=>void a(p.id),children:"×"})]},p.id))]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="169",_i={ROTATE:0,DOLLY:1,PAN:2},ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},aS=0,Op=1,lS=2,ov=1,cS=2,ci=3,Ji=0,an=1,mn=2,qi=0,Ss=1,kp=2,zp=3,Bp=4,uS=5,gr=100,fS=101,dS=102,hS=103,pS=104,mS=200,gS=201,_S=202,vS=203,xf=204,yf=205,xS=206,yS=207,SS=208,MS=209,ES=210,wS=211,TS=212,AS=213,RS=214,Sf=0,Mf=1,Ef=2,Ls=3,wf=4,Tf=5,Af=6,Rf=7,av=0,CS=1,PS=2,Ki=0,bS=1,LS=2,DS=3,IS=4,US=5,NS=6,FS=7,lv=300,Ds=301,Is=302,Cf=303,Pf=304,sc=306,Fo=1e3,Sr=1001,bf=1002,Pn=1003,OS=1004,ma=1005,Vn=1006,Wc=1007,Mr=1008,Mi=1009,cv=1010,uv=1011,Oo=1012,ih=1013,Lr=1014,pi=1015,Xo=1016,rh=1017,sh=1018,Us=1020,fv=35902,dv=1021,hv=1022,Wn=1023,pv=1024,mv=1025,Ms=1026,Ns=1027,gv=1028,oh=1029,_v=1030,ah=1031,lh=1033,el=33776,tl=33777,nl=33778,il=33779,Lf=35840,Df=35841,If=35842,Uf=35843,Nf=36196,Ff=37492,Of=37496,kf=37808,zf=37809,Bf=37810,Hf=37811,Vf=37812,Gf=37813,Wf=37814,jf=37815,Xf=37816,$f=37817,Yf=37818,qf=37819,Kf=37820,Zf=37821,rl=36492,Qf=36494,Jf=36495,vv=36283,ed=36284,td=36285,nd=36286,kS=3200,zS=3201,xv=0,BS=1,Oi="",Bn="srgb",rr="srgb-linear",ch="display-p3",oc="display-p3-linear",Ul="linear",at="srgb",Nl="rec709",Fl="p3",Br=7680,Hp=519,HS=512,VS=513,GS=514,yv=515,WS=516,jS=517,XS=518,$S=519,Vp=35044,Gp="300 es",mi=2e3,Ol=2001;class Or{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=Math.PI/180,id=180/Math.PI;function $o(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Xt(t,e,n){return Math.max(e,Math.min(n,t))}function YS(t,e){return(t%e+e)%e}function jc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const qS={DEG2RAD:sl};class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],g=i[8],_=r[0],m=r[3],u=r[6],v=r[1],x=r[4],S=r[7],R=r[2],T=r[5],A=r[8];return s[0]=o*_+a*v+l*R,s[3]=o*m+a*x+l*T,s[6]=o*u+a*S+l*A,s[1]=c*_+f*v+d*R,s[4]=c*m+f*x+d*T,s[7]=c*u+f*S+d*A,s[2]=h*_+p*v+g*R,s[5]=h*m+p*x+g*T,s[8]=h*u+p*S+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Xc.makeScale(e,n)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Xc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Fe;function Sv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KS(){const t=kl("canvas");return t.style.display="block",t}const Wp={};function ol(t){t in Wp||(Wp[t]=!0,console.warn(t))}function ZS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function QS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const jp=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xp=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[rr]:{transfer:Ul,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Bn]:{transfer:at,primaries:Nl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[oc]:{transfer:Ul,primaries:Fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(jp)},[ch]:{transfer:at,primaries:Fl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xp),fromReference:t=>t.applyMatrix3(jp).convertLinearToSRGB()}},eM=new Set([rr,oc]),Ze={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!eM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zs[e].toReference,r=Zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zs[t].primaries},getTransfer:function(t){return t===Oi?Ul:Zs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Zs[e].luminanceCoefficients)}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Hr;class tM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=kl("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class Mv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yc(r[o].image)):s.push(Yc(r[o]))}else s=Yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iM=0;class Yt extends Or{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Sr,r=Sr,s=Vn,o=Mr,a=Wn,l=Mi,c=Yt.DEFAULT_ANISOTROPY,f=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=$o(),this.name="",this.source=new Mv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fo:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fo:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=lv;Yt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,n=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,R=(u+1)/2,T=(f+h)/4,A=(d+_)/4,P=(g+m)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends Or{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new gt(0,0,e,n),this.scissorTest=!1,this.viewport=new gt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Mv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends rM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ev extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==h||c!==p||f!==g){let m=1-a;const u=l*h+c*p+f*g+d*_,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,u*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*v;if(l=l*m+h*S,c=c*m+p*S,f=f*m+g*S,d=d*m+_*S,m===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*d+l*p-c*h,e[n+1]=l*g+f*h+c*d-a*p,e[n+2]=c*g+f*p+a*h-l*d,e[n+3]=f*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"YZX":this._x=h*f*d+c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d-h*p*g;break;case"XZY":this._x=h*f*d-c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new F,$p=new Ir;class Yo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),_a.subVectors(this.max,Qs),Vr.subVectors(e.a,Qs),Gr.subVectors(e.b,Qs),Wr.subVectors(e.c,Qs),Ai.subVectors(Gr,Vr),Ri.subVectors(Wr,Gr),ar.subVectors(Vr,Wr);let n=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-ar.z,ar.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,ar.z,0,-ar.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-ar.y,ar.x,0];return!Kc(n,Vr,Gr,Wr,_a)||(n=[1,0,0,0,1,0,0,0,1],!Kc(n,Vr,Gr,Wr,_a))?!1:(va.crossVectors(Ai,Ri),n=[va.x,va.y,va.z],Kc(n,Vr,Gr,Wr,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new F,new F,new F,new F,new F,new F,new F,new F],Nn=new F,ga=new Yo,Vr=new F,Gr=new F,Wr=new F,Ai=new F,Ri=new F,ar=new F,Qs=new F,_a=new F,va=new F,lr=new F;function Kc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),f=i.dot(lr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const oM=new Yo,Js=new F,Zc=new F;class ac{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Zc)),this.expandByPoint(Js.copy(e.center).sub(Zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new F,Qc=new F,xa=new F,Ci=new F,Jc=new F,ya=new F,eu=new F;class lc{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Qc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(xa),a=Ci.dot(this.direction),l=-Ci.dot(xa),c=Ci.lengthSq(),f=Math.abs(1-o*o);let d,h,p,g;if(f>0)if(d=o*l-a,h=o*a-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const _=1/f;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qc).addScaledVector(xa,h),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Jc.subVectors(n,e),ya.subVectors(i,e),eu.crossVectors(Jc,ya);let o=this.direction.dot(eu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(ya.crossVectors(Ci,ya));if(l<0)return null;const c=a*this.direction.dot(Jc.cross(Ci));if(c<0||l+c>o)return null;const f=-a*Ci.dot(eu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,g,_,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,g=a*f,_=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-_*c,n[9]=-a*l,n[2]=_-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,g=c*f,_=c*d;n[0]=h+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=_+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,g=c*f,_=c*d;n[0]=h-_*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=_-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,g=a*f,_=a*d;n[0]=l*f,n[4]=g*c-p,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*f,n[4]=_-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+g,n[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+_,n[5]=o*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*f,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,lM)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Pi.crossVectors(i,fn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Pi.crossVectors(i,fn)),Pi.normalize(),Sa.crossVectors(fn,Pi),r[0]=Pi.x,r[4]=Sa.x,r[8]=fn.x,r[1]=Pi.y,r[5]=Sa.y,r[9]=fn.y,r[2]=Pi.z,r[6]=Sa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],g=i[2],_=i[6],m=i[10],u=i[14],v=i[3],x=i[7],S=i[11],R=i[15],T=r[0],A=r[4],P=r[8],V=r[12],y=r[1],E=r[5],G=r[9],z=r[13],j=r[2],J=r[6],U=r[10],Q=r[14],L=r[3],$=r[7],K=r[11],se=r[15];return s[0]=o*T+a*y+l*j+c*L,s[4]=o*A+a*E+l*J+c*$,s[8]=o*P+a*G+l*U+c*K,s[12]=o*V+a*z+l*Q+c*se,s[1]=f*T+d*y+h*j+p*L,s[5]=f*A+d*E+h*J+p*$,s[9]=f*P+d*G+h*U+p*K,s[13]=f*V+d*z+h*Q+p*se,s[2]=g*T+_*y+m*j+u*L,s[6]=g*A+_*E+m*J+u*$,s[10]=g*P+_*G+m*U+u*K,s[14]=g*V+_*z+m*Q+u*se,s[3]=v*T+x*y+S*j+R*L,s[7]=v*A+x*E+S*J+R*$,s[11]=v*P+x*G+S*U+R*K,s[15]=v*V+x*z+S*Q+R*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+_*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],u=e[15],v=d*m*c-_*h*c+_*l*p-a*m*p-d*l*u+a*h*u,x=g*h*c-f*m*c-g*l*p+o*m*p+f*l*u-o*h*u,S=f*_*c-g*d*c+g*a*p-o*_*p-f*a*u+o*d*u,R=g*d*l-f*_*l-g*a*h+o*_*h+f*a*m-o*d*m,T=n*v+i*x+r*S+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*u-i*h*u)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(f*m*s-g*h*s+g*r*p-n*m*p-f*r*u+n*h*u)*A,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(g*d*s-f*_*s-g*i*p+n*_*p+f*i*u-n*d*u)*A,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(f*_*r-g*d*r+g*i*h-n*_*h-f*i*m+n*d*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,g=s*d,_=o*f,m=o*d,u=a*d,v=l*c,x=l*f,S=l*d,R=i.x,T=i.y,A=i.z;return r[0]=(1-(_+u))*R,r[1]=(p+S)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+u))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+x)*A,r[9]=(m-v)*A,r[10]=(1-(h+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,f=1/o,d=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===mi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ol)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let g,_;if(a===mi)g=(o+s)*d,_=-2*d;else if(a===Ol)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new F,Fn=new ut,aM=new F(0,0,0),lM=new F(1,1,1),Pi=new F,Sa=new F,fn=new F,Yp=new ut,qp=new Ir;class ni{constructor(e=0,n=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const Kp=new F,Xr=new Ir,oi=new ut,Ma=new F,eo=new F,uM=new F,fM=new Ir,Zp=new F(1,0,0),Qp=new F(0,1,0),Jp=new F(0,0,1),em={type:"added"},dM={type:"removed"},$r={type:"childadded",child:null},tu={type:"childremoved",child:null};class Dt extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new F,n=new ni,i=new Ir,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Fe}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(Qp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(Qp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(eo,Ma,this.up):oi.lookAt(Ma,eo,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(oi),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(em),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dM),tu.child=e,this.dispatchEvent(tu),tu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(em),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,uM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,fM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new F(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new F,ai=new F,nu=new F,li=new F,Yr=new F,qr=new F,tm=new F,iu=new F,ru=new F,su=new F,ou=new gt,au=new gt,lu=new gt;class Gn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),ai.subVectors(i,n),nu.subVectors(e,n);const o=On.dot(On),a=On.dot(ai),l=On.dot(nu),c=ai.dot(ai),f=ai.dot(nu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ou.setScalar(0),au.setScalar(0),lu.setScalar(0),ou.fromBufferAttribute(e,n),au.fromBufferAttribute(e,i),lu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ou,s.x),o.addScaledVector(au,s.y),o.addScaledVector(lu,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),ai.subVectors(e,n),On.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),qr.subVectors(s,i),iu.subVectors(e,i);const l=Yr.dot(iu),c=qr.dot(iu);if(l<=0&&c<=0)return n.copy(i);ru.subVectors(e,r);const f=Yr.dot(ru),d=qr.dot(ru);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Yr,o);su.subVectors(e,s);const p=Yr.dot(su),g=qr.dot(su);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(qr,a);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return tm.subVectors(s,r),a=(d-f)/(d-f+(p-g)),n.copy(r).addScaledVector(tm,a);const u=1/(m+_+h);return o=_*u,a=h*u,n.copy(i).addScaledVector(Yr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=YS(e,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=cu(o,s,e+1/3),this.g=cu(o,s,e),this.b=cu(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=wv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return Ze.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Xt(Ht.r*255,0,255))*65536+Math.round(Xt(Ht.g*255,0,255))*256+Math.round(Xt(Ht.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Bn){Ze.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ea);const i=jc(bi.h,Ea.h,n),r=jc(bi.s,Ea.s,n),s=jc(bi.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new ze;ze.NAMES=wv;let hM=0;class Bs extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ss,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xf,this.blendDst=yf,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xf&&(i.blendSrc=this.blendSrc),this.blendDst!==yf&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ko extends Bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,wa=new De;class xn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class Tv extends xn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Av extends xn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ft extends xn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pM=0;const wn=new ut,uu=new Dt,Kr=new F,dn=new Yo,to=new Yo,Ct=new F;class Tt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Av:Tv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ft(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(dn.min,to.min),dn.expandByPoint(Ct),Ct.addVectors(dn.max,to.max),dn.expandByPoint(Ct)):(dn.expandByPoint(to.min),dn.expandByPoint(to.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ct.fromBufferAttribute(a,c),l&&(Kr.fromBufferAttribute(e,c),Ct.add(Kr)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new F,l[P]=new F;const c=new F,f=new F,d=new F,h=new De,p=new De,g=new De,_=new F,m=new F;function u(P,V,y){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,V),d.fromBufferAttribute(i,y),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,y),f.sub(c),d.sub(c),p.sub(h),g.sub(h);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(E),a[P].add(_),a[V].add(_),a[y].add(_),l[P].add(m),l[V].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,V=v.length;P<V;++P){const y=v[P],E=y.start,G=y.count;for(let z=E,j=E+G;z<j;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new F,S=new F,R=new F,T=new F;function A(P){R.fromBufferAttribute(r,P),T.copy(R);const V=a[P];x.copy(V),x.sub(R.multiplyScalar(R.dot(V))).normalize(),S.crossVectors(T,V);const E=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,E)}for(let P=0,V=v.length;P<V;++P){const y=v[P],E=y.start,G=y.count;for(let z=E,j=E+G;z<j;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,c=new F,f=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*f;for(let u=0;u<f;u++)h[g++]=c[p++]}return new xn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nm=new ut,cr=new lc,Ta=new ac,im=new F,Aa=new F,Ra=new F,Ca=new F,fu=new F,Pa=new F,rm=new F,ba=new F;class _n extends Dt{constructor(e=new Tt,n=new ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(fu.fromBufferAttribute(d,e),o?Pa.addScaledVector(fu,f):Pa.addScaledVector(fu.sub(n),f))}n.add(Pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Ta.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Ta,im)===null||cr.origin.distanceToSquared(im)>(e.far-e.near)**2))&&(nm.copy(s).invert(),cr.copy(e.ray).applyMatrix4(nm),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=x;S<R;S+=3){const T=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=La(this,u,e,i,c,f,d,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=La(this,o,e,i,c,f,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,R=x;S<R;S+=3){const T=S,A=S+1,P=S+2;r=La(this,u,e,i,c,f,d,T,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,u=_;m<u;m+=3){const v=m,x=m+1,S=m+2;r=La(this,o,e,i,c,f,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mM(t,e,n,i,r,s,o,a){let l;if(e.side===an?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ji,a),l===null)return null;ba.copy(a),ba.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ba);return c<n.near||c>n.far?null:{distance:c,point:ba.clone(),object:t}}function La(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Aa),t.getVertexPosition(l,Ra),t.getVertexPosition(c,Ca);const f=mM(t,e,n,i,Aa,Ra,Ca,rm);if(f){const d=new F;Gn.getBarycoord(rm,Aa,Ra,Ca,d),r&&(f.uv=Gn.getInterpolatedAttribute(r,a,l,c,d,new De)),s&&(f.uv1=Gn.getInterpolatedAttribute(s,a,l,c,d,new De)),o&&(f.normal=Gn.getInterpolatedAttribute(o,a,l,c,d,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Gn.getNormal(Aa,Ra,Ca,h.normal),f.face=h,f.barycoord=d}return f}class qo extends Tt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(d,2));function g(_,m,u,v,x,S,R,T,A,P,V){const y=S/A,E=R/P,G=S/2,z=R/2,j=T/2,J=A+1,U=P+1;let Q=0,L=0;const $=new F;for(let K=0;K<U;K++){const se=K*E-z;for(let Ee=0;Ee<J;Ee++){const ke=Ee*y-G;$[_]=ke*v,$[m]=se*x,$[u]=j,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[u]=T>0?1:-1,f.push($.x,$.y,$.z),d.push(Ee/A),d.push(1-K/P),Q+=1}}for(let K=0;K<P;K++)for(let se=0;se<A;se++){const Ee=h+se+J*K,ke=h+se+J*(K+1),X=h+(se+1)+J*(K+1),ee=h+(se+1)+J*K;l.push(Ee,ke,ee),l.push(ke,X,ee),L+=6}a.addGroup(p,L,V),p+=L,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function gM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Rv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const _M={clone:Fs,merge:Wt};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends Bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Cv extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new F,sm=new De,om=new De;class Rn extends Cv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(sl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,sm,om),n.subVectors(om,sm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Qr=1;class yM extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Zr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new Rn(Zr,Qr,e,n);s.layers=this.layers,this.add(s);const o=new Rn(Zr,Qr,e,n);o.layers=this.layers,this.add(o);const a=new Rn(Zr,Qr,e,n);a.layers=this.layers,this.add(a);const l=new Rn(Zr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new Rn(Zr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pv extends Yt{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qo(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:qi});s.uniforms.tEquirect.value=n;const o=new _n(r,s),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Vn),new yM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const du=new F,MM=new F,EM=new Fe;class Ui{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=du.subVectors(i,n).cross(MM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||EM.getNormalMatrix(e),r=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new ac,Da=new F;class fh{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],u=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-u).normalize(),i[1].setComponents(l+s,h+c,m+p,S+u).normalize(),i[2].setComponents(l+o,h+f,m+g,S+v).normalize(),i[3].setComponents(l-o,h-f,m-g,S-v).normalize(),i[4].setComponents(l-a,h-d,m-_,S-x).normalize(),n===mi)i[5].setComponents(l+a,h+d,m+_,S+x).normalize();else if(n===Ol)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];t.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class cc extends Tt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],g=[],_=[],m=[];for(let u=0;u<f;u++){const v=u*h-o;for(let x=0;x<c;x++){const S=x*d-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const x=v+c*u,S=v+c*(u+1),R=v+1+c*(u+1),T=v+1+c*u;p.push(x,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tE="gl_FragColor = linearToOutputTexel( gl_FragColor );",nE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_E=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ME=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,x1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,D1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,X1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,q1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:TM,alphahash_pars_fragment:AM,alphamap_fragment:RM,alphamap_pars_fragment:CM,alphatest_fragment:PM,alphatest_pars_fragment:bM,aomap_fragment:LM,aomap_pars_fragment:DM,batching_pars_vertex:IM,batching_vertex:UM,begin_vertex:NM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:kM,bumpmap_pars_fragment:zM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:GM,color_fragment:WM,color_pars_fragment:jM,color_pars_vertex:XM,color_vertex:$M,common:YM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:KM,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:eE,colorspace_fragment:tE,colorspace_pars_fragment:nE,envmap_fragment:iE,envmap_common_pars_fragment:rE,envmap_pars_fragment:sE,envmap_pars_vertex:oE,envmap_physical_pars_fragment:_E,envmap_vertex:aE,fog_vertex:lE,fog_pars_vertex:cE,fog_fragment:uE,fog_pars_fragment:fE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:hE,lights_lambert_fragment:pE,lights_lambert_pars_fragment:mE,lights_pars_begin:gE,lights_toon_fragment:vE,lights_toon_pars_fragment:xE,lights_phong_fragment:yE,lights_phong_pars_fragment:SE,lights_physical_fragment:ME,lights_physical_pars_fragment:EE,lights_fragment_begin:wE,lights_fragment_maps:TE,lights_fragment_end:AE,logdepthbuf_fragment:RE,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:PE,logdepthbuf_vertex:bE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:IE,map_particle_pars_fragment:UE,metalnessmap_fragment:NE,metalnessmap_pars_fragment:FE,morphinstance_vertex:OE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:BE,morphtarget_vertex:HE,normal_fragment_begin:VE,normal_fragment_maps:GE,normal_pars_fragment:WE,normal_pars_vertex:jE,normal_vertex:XE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:KE,iridescence_pars_fragment:ZE,opaque_fragment:QE,packing:JE,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:a1,shadowmap_vertex:l1,shadowmask_pars_fragment:c1,skinbase_vertex:u1,skinning_pars_vertex:f1,skinning_vertex:d1,skinnormal_vertex:h1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:g1,tonemapping_pars_fragment:_1,transmission_fragment:v1,transmission_pars_fragment:x1,uv_pars_fragment:y1,uv_pars_vertex:S1,uv_vertex:M1,worldpos_vertex:E1,background_vert:w1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:R1,cube_vert:C1,cube_frag:P1,depth_vert:b1,depth_frag:L1,distanceRGBA_vert:D1,distanceRGBA_frag:I1,equirect_vert:U1,equirect_frag:N1,linedashed_vert:F1,linedashed_frag:O1,meshbasic_vert:k1,meshbasic_frag:z1,meshlambert_vert:B1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:W1,meshnormal_frag:j1,meshphong_vert:X1,meshphong_frag:$1,meshphysical_vert:Y1,meshphysical_frag:q1,meshtoon_vert:K1,meshtoon_frag:Z1,points_vert:Q1,points_frag:J1,shadow_vert:ew,shadow_frag:tw,sprite_vert:nw,sprite_frag:iw},oe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Zn={basic:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Wt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Wt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Wt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Wt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Wt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Wt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Wt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Wt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Wt([oe.common,oe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Wt([oe.lights,oe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Zn.physical={uniforms:Wt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ia={r:0,b:0,g:0},fr=new ni,rw=new ut;function sw(t,e,n,i,r,s,o){const a=new ze(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?n:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?u(a,l):S&&S.isColor&&(u(S,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===sc)?(f===void 0&&(f=new _n(new qo(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),fr.copy(x.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(rw.makeRotationFromEuler(fr)),f.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,(d!==S||h!==S.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new _n(new cc(2,2),new er({name:"BackgroundMaterial",uniforms:Fs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,x){v.getRGB(Ia,Rv(t)),i.buffers.color.setClear(Ia.r,Ia.g,Ia.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:_,addToRenderList:m}}function ow(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,E,G,z,j){let J=!1;const U=d(z,G,E);s!==U&&(s=U,c(s.object)),J=p(y,z,G,j),J&&g(y,z,G,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(y,E,G,z),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function d(y,E,G){const z=G.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let J=j[E.id];J===void 0&&(J={},j[E.id]=J);let U=J[z];return U===void 0&&(U=h(l()),J[z]=U),U}function h(y){const E=[],G=[],z=[];for(let j=0;j<n;j++)E[j]=0,G[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,E,G,z){const j=s.attributes,J=E.attributes;let U=0;const Q=G.getAttributes();for(const L in Q)if(Q[L].location>=0){const K=j[L];let se=J[L];if(se===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;U++}return s.attributesNum!==U||s.index!==z}function g(y,E,G,z){const j={},J=E.attributes;let U=0;const Q=G.getAttributes();for(const L in Q)if(Q[L].location>=0){let K=J[L];K===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),j[L]=se,U++}s.attributes=j,s.attributesNum=U,s.index=z}function _(){const y=s.newAttributes;for(let E=0,G=y.length;E<G;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){const G=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;G[y]=1,z[y]===0&&(t.enableVertexAttribArray(y),z[y]=1),j[y]!==E&&(t.vertexAttribDivisor(y,E),j[y]=E)}function v(){const y=s.newAttributes,E=s.enabledAttributes;for(let G=0,z=E.length;G<z;G++)E[G]!==y[G]&&(t.disableVertexAttribArray(G),E[G]=0)}function x(y,E,G,z,j,J,U){U===!0?t.vertexAttribIPointer(y,E,G,j,J):t.vertexAttribPointer(y,E,G,z,j,J)}function S(y,E,G,z){_();const j=z.attributes,J=G.getAttributes(),U=E.defaultAttributeValues;for(const Q in J){const L=J[Q];if(L.location>=0){let $=j[Q];if($===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const K=$.normalized,se=$.itemSize,Ee=e.get($);if(Ee===void 0)continue;const ke=Ee.buffer,X=Ee.type,ee=Ee.bytesPerElement,ae=X===t.INT||X===t.UNSIGNED_INT||$.gpuType===ih;if($.isInterleavedBufferAttribute){const ce=$.data,Ie=ce.stride,Ae=$.offset;if(ce.isInstancedInterleavedBuffer){for(let Ve=0;Ve<L.locationSize;Ve++)u(L.location+Ve,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ve=0;Ve<L.locationSize;Ve++)m(L.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Ve=0;Ve<L.locationSize;Ve++)x(L.location+Ve,se/L.locationSize,X,K,Ie*ee,(Ae+se/L.locationSize*Ve)*ee,ae)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<L.locationSize;ce++)u(L.location+ce,$.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<L.locationSize;ce++)m(L.location+ce);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let ce=0;ce<L.locationSize;ce++)x(L.location+ce,se/L.locationSize,X,K,se*ee,se/L.locationSize*ce*ee,ae)}}else if(U!==void 0){const K=U[Q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}v()}function R(){P();for(const y in i){const E=i[y];for(const G in E){const z=E[G];for(const j in z)f(z[j].object),delete z[j];delete E[G]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const G in E){const z=E[G];for(const j in z)f(z[j].object),delete z[j];delete E[G]}delete i[y.id]}function A(y){for(const E in i){const G=i[E];if(G[y.id]===void 0)continue;const z=G[y.id];for(const j in z)f(z[j].object),delete z[j];delete G[y.id]}}function P(){V(),o=!0,s!==r&&(s=r,c(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:V,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function aw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_];for(let _=0;_<h.length;_++)n.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Wn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Mi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!P)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:T}}function cw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ui,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,x=v*4;let S=u.clippingState||null;l.value=S,S=f(g,h,x,p);for(let R=0;R!==x;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const u=p+_*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function uw(t){let e=new WeakMap;function n(o,a){return a===Cf?o.mapping=Ds:a===Pf&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cf||a===Pf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class dh extends Cv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,am=[.125,.215,.35,.446,.526,.582],_r=20,hu=new dh,lm=new ze;let pu=null,mu=0,gu=0,_u=!1;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,cm=[new F(-mr,Jr,0),new F(mr,Jr,0),new F(-Jr,0,mr),new F(Jr,0,mr),new F(0,mr,-Jr),new F(0,mr,Jr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu,mu,gu),this._renderer.xr.enabled=_u,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget(),mu=this._renderer.getActiveCubeFace(),gu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Xo,format:Wn,colorSpace:rr,depthBuffer:!1},r=fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fw(s)),this._blurMaterial=dw(s,e,n)}return r}_compileMaterial(e){const n=new _n(this._lodPlanes[0],e);this._renderer.compile(n,hu)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(lm),f.toneMapping=Ki,f.autoClear=!1;const p=new ko({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new _n(new qo,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(lm),_=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Ua(r,v*x,u>2?x:0,x,x),f.setRenderTarget(r),_&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ua(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cm[(r-s-1)%cm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new _n(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const u=[];let v=0;for(let A=0;A<_r;++A){const P=A/_,V=Math.exp(-P*P/2);u.push(V),A===0?v+=V:A<m&&(v+=2*V)}for(let A=0;A<u.length;A++)u[A]=u[A]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-hs?r-x+hs:0),T=4*(this._cubeSize-S);Ua(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(d,hu)}}function fw(t){const e=[],n=[],i=[];let r=t;const s=t-hs+1+am.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-hs?l=am[o-t+hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,_=3,m=2,u=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,V=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(V,_*g*T),x.set(h,m*g*T);const y=[T,T,T,T,T,T];S.set(y,u*g*T)}const R=new Tt;R.setAttribute("position",new xn(v,_)),R.setAttribute("uv",new xn(x,m)),R.setAttribute("faceIndex",new xn(S,u)),e.push(R),r>hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fm(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ua(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dw(t,e,n){const i=new Float32Array(_r),r=new F(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function dm(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hm(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cf||l===Pf,f=l===Ds||l===Is;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new um(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new um(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ol("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,u=_.length;m<u;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,u=_.length;m<u;m++)e.update(_[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const R=v[x+0],T=v[x+1],A=v[x+2];h.push(R,T,T,A,A,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const R=x+0,T=x+1,A=x+2;h.push(R,T,T,A,A,R)}}else return;const m=new(Sv(h)?Av:Tv)(h,1);m.version=_;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function gw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v];for(let v=0;v<_.length;v++)n.update(u,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function _w(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vw(t,e,n){const i=new WeakMap,r=new gt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let V=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",V)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=a.attributes.position.count*x,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*R*4*d),A=new Ev(T,S,R,d);A.type=pi,A.needsUpdate=!0;const P=x*4;for(let y=0;y<d;y++){const E=m[y],G=u[y],z=v[y],j=S*R*4*y;for(let J=0;J<E.count;J++){const U=J*P;p===!0&&(r.fromBufferAttribute(E,J),T[j+U+0]=r.x,T[j+U+1]=r.y,T[j+U+2]=r.z,T[j+U+3]=0),g===!0&&(r.fromBufferAttribute(G,J),T[j+U+4]=r.x,T[j+U+5]=r.y,T[j+U+6]=r.z,T[j+U+7]=0),_===!0&&(r.fromBufferAttribute(z,J),T[j+U+8]=r.x,T[j+U+9]=r.y,T[j+U+10]=r.z,T[j+U+11]=z.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new De(S,R)},i.set(a,h),a.addEventListener("dispose",V)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function xw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Lv extends Yt{constructor(e,n,i,r,s,o,a,l,c,f=Ms){if(f!==Ms&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ms&&(i=Lr),i===void 0&&f===Ns&&(i=Us),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Dv=new Yt,pm=new Lv(1,1),Iv=new Ev,Uv=new sM,Nv=new Pv,mm=[],gm=[],_m=new Float32Array(16),vm=new Float32Array(9),xm=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function At(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(At(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Rt(n,i)}}function Tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;vm.set(i),t.uniformMatrix3fv(this.addr,!1,vm),Rt(n,i)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(At(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(At(n,i))return;_m.set(i),t.uniformMatrix4fv(this.addr,!1,_m),Rt(n,i)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function Lw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(At(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(At(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(At(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function Nw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(pm.compareFunction=yv,s=pm):s=Dv,n.setTexture2D(e||s,r)}function Fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Uv,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nv,r)}function kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Iv,r)}function zw(t){switch(t){case 5126:return yw;case 35664:return Sw;case 35665:return Mw;case 35666:return Ew;case 35674:return ww;case 35675:return Tw;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Cw;case 35668:case 35672:return Pw;case 35669:case 35673:return bw;case 5125:return Lw;case 36294:return Dw;case 36295:return Iw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return kw}}function Bw(t,e){t.uniform1fv(this.addr,e)}function Hw(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function Vw(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function Gw(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function Ww(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jw(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Xw(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $w(t,e){t.uniform1iv(this.addr,e)}function Yw(t,e){t.uniform2iv(this.addr,e)}function qw(t,e){t.uniform3iv(this.addr,e)}function Kw(t,e){t.uniform4iv(this.addr,e)}function Zw(t,e){t.uniform1uiv(this.addr,e)}function Qw(t,e){t.uniform2uiv(this.addr,e)}function Jw(t,e){t.uniform3uiv(this.addr,e)}function eT(t,e){t.uniform4uiv(this.addr,e)}function tT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Dv,s[o])}function nT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Uv,s[o])}function iT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Nv,s[o])}function rT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);At(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Iv,s[o])}function sT(t){switch(t){case 5126:return Bw;case 35664:return Hw;case 35665:return Vw;case 35666:return Gw;case 35674:return Ww;case 35675:return jw;case 35676:return Xw;case 5124:case 35670:return $w;case 35667:case 35671:return Yw;case 35668:case 35672:return qw;case 35669:case 35673:return Kw;case 5125:return Zw;case 36294:return Qw;case 36295:return Jw;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}class oT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zw(n.type)}}class aT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sT(n.type)}}class lT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const vu=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function cT(t,e,n){const i=t.name,r=i.length;for(vu.lastIndex=0;;){const s=vu.exec(i),o=vu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ym(n,c===void 0?new oT(a,t,e):new aT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new lT(a),ym(n,d)),n=d}}}class al{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);cT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uT=37297;let fT=0;function dT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function hT(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Fl&&n===Nl?i="LinearDisplayP3ToLinearSRGB":e===Nl&&n===Fl&&(i="LinearSRGBToLinearDisplayP3"),t){case rr:case oc:return[i,"LinearTransferOETF"];case Bn:case ch:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+dT(t.getShaderSource(e),o)}else return r}function pT(t,e){const n=hT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function mT(t,e){let n;switch(e){case bS:n="Linear";break;case LS:n="Reinhard";break;case DS:n="Cineon";break;case IS:n="ACESFilmic";break;case NS:n="AgX";break;case FS:n="Neutral";break;case US:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Na=new F;function gT(){Ze.getLuminanceCoefficients(Na);const t=Na.x.toFixed(4),e=Na.y.toFixed(4),n=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _T(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function vT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function lo(t){return t!==""}function Em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yT=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(t){return t.replace(yT,MT)}const ST=new Map;function MT(t,e){let n=Ne[e];if(n===void 0){const i=ST.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const ET=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(t){return t.replace(ET,wT)}function wT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Am(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ov?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ci&&(e="SHADOWMAP_TYPE_VSM"),e}function AT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function CT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case av:e="ENVMAP_BLENDING_MULTIPLY";break;case CS:e="ENVMAP_BLENDING_MIX";break;case PS:e="ENVMAP_BLENDING_ADD";break}return e}function PT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=TT(n),c=AT(n),f=RT(n),d=CT(n),h=PT(n),p=_T(n),g=vT(s),_=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(lo).join(`
`),u.length>0&&(u+=`
`)):(m=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),u=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ki?"#define TONE_MAPPING":"",n.toneMapping!==Ki?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Ki?mT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,pT("linearToOutputTexel",n.outputColorSpace),gT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lo).join(`
`)),o=rd(o),o=Em(o,n),o=wm(o,n),a=rd(a),a=Em(a,n),a=wm(a,n),o=Tm(o),a=Tm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=v+m+o,S=v+u+a,R=Sm(r,r.VERTEX_SHADER,x),T=Sm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,R),r.attachShader(_,T),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(E){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(T).trim();let J=!0,U=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,R,T);else{const Q=Mm(r,R,"vertex"),L=Mm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+G+`
`+Q+`
`+L)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||j==="")&&(U=!1);U&&(E.diagnostics={runnable:J,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:j,prefix:u}})}r.deleteShader(R),r.deleteShader(T),P=new al(r,_),V=xT(r,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let V;this.getAttributes=function(){return V===void 0&&A(this),V};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,uT)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let LT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new IT(e),n.set(e,i)),i}}class IT{constructor(e){this.id=LT++,this.code=e,this.usedTimes=0}}function UT(t,e,n,i,r,s,o){const a=new uh,l=new DT,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,G,z,j){const J=z.fog,U=j.geometry,Q=y.isMeshStandardMaterial?z.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Q),$=L&&L.mapping===sc?L.image.height:null,K=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const se=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ee=se!==void 0?se.length:0;let ke=0;U.morphAttributes.position!==void 0&&(ke=1),U.morphAttributes.normal!==void 0&&(ke=2),U.morphAttributes.color!==void 0&&(ke=3);let X,ee,ae,ce;if(K){const Qt=Zn[K];X=Qt.vertexShader,ee=Qt.fragmentShader}else X=y.vertexShader,ee=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),ce=l.getFragmentShaderID(y);const Ie=t.getRenderTarget(),Ae=j.isInstancedMesh===!0,Ve=j.isBatchedMesh===!0,et=!!y.map,Ge=!!y.matcap,b=!!L,ln=!!y.aoMap,Be=!!y.lightMap,Xe=!!y.bumpMap,Ce=!!y.normalMap,rt=!!y.displacementMap,Le=!!y.emissiveMap,C=!!y.metalnessMap,M=!!y.roughnessMap,k=y.anisotropy>0,q=y.clearcoat>0,te=y.dispersion>0,Y=y.iridescence>0,ye=y.sheen>0,le=y.transmission>0,me=k&&!!y.anisotropyMap,$e=q&&!!y.clearcoatMap,ie=q&&!!y.clearcoatNormalMap,ge=q&&!!y.clearcoatRoughnessMap,Pe=Y&&!!y.iridescenceMap,be=Y&&!!y.iridescenceThicknessMap,_e=ye&&!!y.sheenColorMap,He=ye&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,nt=!!y.specularColorMap,D=!!y.specularIntensityMap,de=le&&!!y.transmissionMap,W=le&&!!y.thicknessMap,Z=!!y.gradientMap,ue=!!y.alphaMap,he=y.alphaTest>0,We=!!y.alphaHash,xt=!!y.extensions;let Zt=Ki;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Zt=t.toneMapping);const Ye={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:ee,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&j._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&j.instanceColor!==null,instancingMorph:Ae&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:rr,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:Ge,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:$,aoMap:ln,lightMap:Be,bumpMap:Xe,normalMap:Ce,displacementMap:p&&rt,emissiveMap:Le,normalMapObjectSpace:Ce&&y.normalMapType===BS,normalMapTangentSpace:Ce&&y.normalMapType===xv,metalnessMap:C,roughnessMap:M,anisotropy:k,anisotropyMap:me,clearcoat:q,clearcoatMap:$e,clearcoatNormalMap:ie,clearcoatRoughnessMap:ge,dispersion:te,iridescence:Y,iridescenceMap:Pe,iridescenceThicknessMap:be,sheen:ye,sheenColorMap:_e,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:nt,specularIntensityMap:D,transmission:le,transmissionMap:de,thicknessMap:W,gradientMap:Z,opaque:y.transparent===!1&&y.blending===Ss&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:he,alphaHash:We,combine:y.combine,mapUv:et&&m(y.map.channel),aoMapUv:ln&&m(y.aoMap.channel),lightMapUv:Be&&m(y.lightMap.channel),bumpMapUv:Xe&&m(y.bumpMap.channel),normalMapUv:Ce&&m(y.normalMap.channel),displacementMapUv:rt&&m(y.displacementMap.channel),emissiveMapUv:Le&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:$e&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(y.sheenRoughnessMap.channel),specularMapUv:Ue&&m(y.specularMap.channel),specularColorMapUv:nt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:de&&m(y.transmissionMap.channel),thicknessMapUv:W&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ce||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!U.attributes.uv&&(et||ue),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:Zt,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function v(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)E.push(G),E.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(x(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function R(y){const E=_[y.type];let G;if(E){const z=Zn[E];G=_M.clone(z.uniforms)}else G=y.uniforms;return G}function T(y,E){let G;for(let z=0,j=f.length;z<j;z++){const J=f[z];if(J.cacheKey===E){G=J,++G.usedTimes;break}}return G===void 0&&(G=new bT(t,E,y,s),f.push(G)),G}function A(y){if(--y.usedTimes===0){const E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function P(y){l.remove(y)}function V(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:R,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:f,dispose:V}}function NT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function FT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,_,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=m),e++,u}function a(d,h,p,g,_,m){const u=o(d,h,p,g,_,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,g,_,m){const u=o(d,h,p,g,_,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||FT),i.length>1&&i.sort(h||Rm),r.length>1&&r.sort(h||Rm)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function OT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Cm,t.set(i,[o])):r>=s.length?(o=new Cm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function kT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new ze};break;case"SpotLight":n={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function zT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BT=0;function HT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VT(t){const e=new kT,n=zT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new ut,o=new ut;function a(c){let f=0,d=0,h=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let p=0,g=0,_=0,m=0,u=0,v=0,x=0,S=0,R=0,T=0,A=0;c.sort(HT);for(let V=0,y=c.length;V<y;V++){const E=c[V],G=E.color,z=E.intensity,j=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=G.r*z,d+=G.g*z,h+=G.b*z;else if(E.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(E.sh.coefficients[U],z);A++}else if(E.isDirectionalLight){const U=e.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=U,p++}else if(E.isSpotLight){const U=e.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(G).multiplyScalar(z),U.distance=j,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,i.spot[_]=U;const Q=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,Q.updateMatrices(E),E.castShadow&&T++),i.spotLightMatrix[_]=Q.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=J,S++}_++}else if(E.isRectAreaLight){const U=e.get(E);U.color.copy(G).multiplyScalar(z),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=U,m++}else if(E.isPointLight){const U=e.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),U.distance=E.distance,U.decay=E.decay,E.castShadow){const Q=E.shadow,L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=E.shadow.matrix,x++}i.point[g]=U,g++}else if(E.isHemisphereLight){const U=e.get(E);U.skyColor.copy(E.color).multiplyScalar(z),U.groundColor.copy(E.groundColor).multiplyScalar(z),i.hemi[u]=U,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==v||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=v,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=A,i.version=BT++)}function l(c,f){let d=0,h=0,p=0,g=0,_=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Pm(t){const e=new VT(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Pm(t),e.set(r,[a])):s>=o.length?(a=new Pm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class WT extends Bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends Bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$T=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YT(t,e,n){let i=new fh;const r=new De,s=new De,o=new gt,a=new WT({depthPacking:zS}),l=new jT,c={},f=n.maxTextureSize,d={[Ji]:an,[an]:Ji,[mn]:mn},h=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:XT,fragmentShader:$T}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ov;let u=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const V=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),G=t.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=u!==ci&&this.type===ci,j=u===ci&&this.type!==ci;for(let J=0,U=T.length;J<U;J++){const Q=T[J],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||z===!0||j===!0){const se=this.type!==ci?{minFilter:Pn,magFilter:Pn}:{};L.map!==null&&L.map.dispose(),L.map=new Dr(r.x,r.y,se),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let se=0;se<K;se++){const Ee=L.getViewport(se);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),G.viewport(o),L.updateMatrices(Q,se),i=L.getFrustum(),S(A,P,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===ci&&v(L,P),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(V,y,E)};function v(T,A){const P=e.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Dr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,p,_,null)}function x(T,A,P,V){let y=null;const E=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)y=E;else if(y=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=y.uuid,z=A.uuid;let j=c[G];j===void 0&&(j={},c[G]=j);let J=j[z];J===void 0&&(J=y.clone(),j[z]=J,A.addEventListener("dispose",R)),y=J}if(y.visible=A.visible,y.wireframe=A.wireframe,V===ci?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:d[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=t.properties.get(y);G.light=P}return y}function S(T,A,P,V,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=e.update(T),j=T.material;if(Array.isArray(j)){const J=z.groups;for(let U=0,Q=J.length;U<Q;U++){const L=J[U],$=j[L.materialIndex];if($&&$.visible){const K=x(T,$,V,y);T.onBeforeShadow(t,T,A,P,z,K,L),t.renderBufferDirect(P,null,z,K,T,L),T.onAfterShadow(t,T,A,P,z,K,L)}}}else if(j.visible){const J=x(T,j,V,y);T.onBeforeShadow(t,T,A,P,z,J,null),t.renderBufferDirect(P,null,z,J,T,null),T.onAfterShadow(t,T,A,P,z,J,null)}}const G=T.children;for(let z=0,j=G.length;z<j;z++)S(G[z],A,P,V,y)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const V=c[P],y=T.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}const qT={[Sf]:Mf,[Ef]:Af,[wf]:Rf,[Ls]:Tf,[Mf]:Sf,[Af]:Ef,[Rf]:wf,[Tf]:Ls};function KT(t){function e(){let D=!1;const de=new gt;let W=null;const Z=new gt(0,0,0,0);return{setMask:function(ue){W!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){D=ue},setClear:function(ue,he,We,xt,Zt){Zt===!0&&(ue*=xt,he*=xt,We*=xt),de.set(ue,he,We,xt),Z.equals(de)===!1&&(t.clearColor(ue,he,We,xt),Z.copy(de))},reset:function(){D=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,de=!1,W=null,Z=null,ue=null;return{setReversed:function(he){de=he},setTest:function(he){he?ae(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(he){W!==he&&!D&&(t.depthMask(he),W=he)},setFunc:function(he){if(de&&(he=qT[he]),Z!==he){switch(he){case Sf:t.depthFunc(t.NEVER);break;case Mf:t.depthFunc(t.ALWAYS);break;case Ef:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case wf:t.depthFunc(t.EQUAL);break;case Tf:t.depthFunc(t.GEQUAL);break;case Af:t.depthFunc(t.GREATER);break;case Rf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=he}},setLocked:function(he){D=he},setClear:function(he){ue!==he&&(t.clearDepth(he),ue=he)},reset:function(){D=!1,W=null,Z=null,ue=null}}}function i(){let D=!1,de=null,W=null,Z=null,ue=null,he=null,We=null,xt=null,Zt=null;return{setTest:function(Ye){D||(Ye?ae(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Ye){de!==Ye&&!D&&(t.stencilMask(Ye),de=Ye)},setFunc:function(Ye,Qt,ii){(W!==Ye||Z!==Qt||ue!==ii)&&(t.stencilFunc(Ye,Qt,ii),W=Ye,Z=Qt,ue=ii)},setOp:function(Ye,Qt,ii){(he!==Ye||We!==Qt||xt!==ii)&&(t.stencilOp(Ye,Qt,ii),he=Ye,We=Qt,xt=ii)},setLocked:function(Ye){D=Ye},setClear:function(Ye){Zt!==Ye&&(t.clearStencil(Ye),Zt=Ye)},reset:function(){D=!1,de=null,W=null,Z=null,ue=null,he=null,We=null,xt=null,Zt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,u=null,v=null,x=null,S=null,R=null,T=new ze(0,0,0),A=0,P=!1,V=null,y=null,E=null,G=null,z=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,U=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),J=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),J=U>=2);let L=null,$={};const K=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ee=new gt().fromArray(K),ke=new gt().fromArray(se);function X(D,de,W,Z){const ue=new Uint8Array(4),he=t.createTexture();t.bindTexture(D,he),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<W;We++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(de+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return he}const ee={};ee[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),ee[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ee[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Ls),Be(!1),Xe(Op),ae(t.CULL_FACE),b(qi);function ae(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ie(D,de){return f[D]!==de?(t.bindFramebuffer(D,de),f[D]=de,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ae(D,de){let W=h,Z=!1;if(D){W=d.get(de),W===void 0&&(W=[],d.set(de,W));const ue=D.textures;if(W.length!==ue.length||W[0]!==t.COLOR_ATTACHMENT0){for(let he=0,We=ue.length;he<We;he++)W[he]=t.COLOR_ATTACHMENT0+he;W.length=ue.length,Z=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,Z=!0);Z&&t.drawBuffers(W)}function Ve(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const et={[gr]:t.FUNC_ADD,[fS]:t.FUNC_SUBTRACT,[dS]:t.FUNC_REVERSE_SUBTRACT};et[hS]=t.MIN,et[pS]=t.MAX;const Ge={[mS]:t.ZERO,[gS]:t.ONE,[_S]:t.SRC_COLOR,[xf]:t.SRC_ALPHA,[ES]:t.SRC_ALPHA_SATURATE,[SS]:t.DST_COLOR,[xS]:t.DST_ALPHA,[vS]:t.ONE_MINUS_SRC_COLOR,[yf]:t.ONE_MINUS_SRC_ALPHA,[MS]:t.ONE_MINUS_DST_COLOR,[yS]:t.ONE_MINUS_DST_ALPHA,[wS]:t.CONSTANT_COLOR,[TS]:t.ONE_MINUS_CONSTANT_COLOR,[AS]:t.CONSTANT_ALPHA,[RS]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,de,W,Z,ue,he,We,xt,Zt,Ye){if(D===qi){g===!0&&(ce(t.BLEND),g=!1);return}if(g===!1&&(ae(t.BLEND),g=!0),D!==uS){if(D!==_||Ye!==P){if((m!==gr||x!==gr)&&(t.blendEquation(t.FUNC_ADD),m=gr,x=gr),Ye)switch(D){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.ONE,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,v=null,S=null,R=null,T.set(0,0,0),A=0,_=D,P=Ye}return}ue=ue||de,he=he||W,We=We||Z,(de!==m||ue!==x)&&(t.blendEquationSeparate(et[de],et[ue]),m=de,x=ue),(W!==u||Z!==v||he!==S||We!==R)&&(t.blendFuncSeparate(Ge[W],Ge[Z],Ge[he],Ge[We]),u=W,v=Z,S=he,R=We),(xt.equals(T)===!1||Zt!==A)&&(t.blendColor(xt.r,xt.g,xt.b,Zt),T.copy(xt),A=Zt),_=D,P=!1}function ln(D,de){D.side===mn?ce(t.CULL_FACE):ae(t.CULL_FACE);let W=D.side===an;de&&(W=!W),Be(W),D.blending===Ss&&D.transparent===!1?b(qi):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){V!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),V=D)}function Xe(D){D!==aS?(ae(t.CULL_FACE),D!==y&&(D===Op?t.cullFace(t.BACK):D===lS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),y=D}function Ce(D){D!==E&&(J&&t.lineWidth(D),E=D)}function rt(D,de,W){D?(ae(t.POLYGON_OFFSET_FILL),(G!==de||z!==W)&&(t.polygonOffset(de,W),G=de,z=W)):ce(t.POLYGON_OFFSET_FILL)}function Le(D){D?ae(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+j-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,de,W){W===void 0&&(L===null?W=t.TEXTURE0+j-1:W=L);let Z=$[W];Z===void 0&&(Z={type:void 0,texture:void 0},$[W]=Z),(Z.type!==D||Z.texture!==de)&&(L!==W&&(t.activeTexture(W),L=W),t.bindTexture(D,de||ee[D]),Z.type=D,Z.texture=de)}function k(){const D=$[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){Ee.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ee.copy(D))}function _e(D){ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ke.copy(D))}function He(D,de){let W=l.get(de);W===void 0&&(W=new WeakMap,l.set(de,W));let Z=W.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(de,D.name),W.set(D,Z))}function Ue(D,de){const Z=l.get(de).get(D);a.get(de)!==Z&&(t.uniformBlockBinding(de,Z,D.__bindingPointIndex),a.set(de,Z))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,$={},f={},d=new WeakMap,h=[],p=null,g=!1,_=null,m=null,u=null,v=null,x=null,S=null,R=null,T=new ze(0,0,0),A=0,P=!1,V=null,y=null,E=null,G=null,z=null,Ee.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:ce,bindFramebuffer:Ie,drawBuffers:Ae,useProgram:Ve,setBlending:b,setMaterial:ln,setFlipSided:Be,setCullFace:Xe,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:Le,activeTexture:C,bindTexture:M,unbindTexture:k,compressedTexImage2D:q,compressedTexImage3D:te,texImage2D:ge,texImage3D:Pe,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:$e,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:be,viewport:_e,reset:nt}}function bm(t,e,n,i){const r=ZT(i);switch(n){case dv:return t*e;case pv:return t*e;case mv:return t*e*2;case gv:return t*e/r.components*r.byteLength;case oh:return t*e/r.components*r.byteLength;case _v:return t*e*2/r.components*r.byteLength;case ah:return t*e*2/r.components*r.byteLength;case hv:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case lh:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:case Uf:return Math.max(t,16)*Math.max(e,8)/4;case Lf:case If:return Math.max(t,8)*Math.max(e,8)/2;case Nf:case Ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rl:case Qf:case Jf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vv:case ed:return Math.ceil(t/4)*Math.ceil(e/4)*8;case td:case nd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZT(t){switch(t){case Mi:case cv:return{byteLength:1,components:1};case Oo:case uv:case Xo:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case Lr:case ih:case pi:return{byteLength:4,components:1};case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function QT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):kl("canvas")}function _(C,M,k){let q=1;const te=Le(C);if((te.width>k||te.height>k)&&(q=k/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*te.width),ye=Math.floor(q*te.height);d===void 0&&(d=g(Y,ye));const le=M?g(Y,ye):d;return le.width=Y,le.height=ye,le.getContext("2d").drawImage(C,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+ye+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Pn&&C.minFilter!==Vn}function u(C){t.generateMipmap(C)}function v(C,M,k,q,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=M;if(M===t.RED&&(k===t.FLOAT&&(Y=t.R32F),k===t.HALF_FLOAT&&(Y=t.R16F),k===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.R8UI),k===t.UNSIGNED_SHORT&&(Y=t.R16UI),k===t.UNSIGNED_INT&&(Y=t.R32UI),k===t.BYTE&&(Y=t.R8I),k===t.SHORT&&(Y=t.R16I),k===t.INT&&(Y=t.R32I)),M===t.RG&&(k===t.FLOAT&&(Y=t.RG32F),k===t.HALF_FLOAT&&(Y=t.RG16F),k===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RG8UI),k===t.UNSIGNED_SHORT&&(Y=t.RG16UI),k===t.UNSIGNED_INT&&(Y=t.RG32UI),k===t.BYTE&&(Y=t.RG8I),k===t.SHORT&&(Y=t.RG16I),k===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),k===t.UNSIGNED_INT&&(Y=t.RGB32UI),k===t.BYTE&&(Y=t.RGB8I),k===t.SHORT&&(Y=t.RGB16I),k===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),k===t.UNSIGNED_INT&&(Y=t.RGBA32UI),k===t.BYTE&&(Y=t.RGBA8I),k===t.SHORT&&(Y=t.RGBA16I),k===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const ye=te?Ul:Ze.getTransfer(q);k===t.FLOAT&&(Y=t.RGBA32F),k===t.HALF_FLOAT&&(Y=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Y=ye===at?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(C,M){let k;return C?M===null||M===Lr||M===Us?k=t.DEPTH24_STENCIL8:M===pi?k=t.DEPTH32F_STENCIL8:M===Oo&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Lr||M===Us?k=t.DEPTH_COMPONENT24:M===pi?k=t.DEPTH_COMPONENT32F:M===Oo&&(k=t.DEPTH_COMPONENT16),k}function S(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pn&&C.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&f.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),V(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const k=C.source,q=h.get(k);if(q){const te=q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(C),Object.keys(q).length===0&&h.delete(k)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const k=C.source,q=h.get(k);delete q[M.__cacheKey],o.memory.textures--}function V(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let te=0;te<M.__webglFramebuffer[q].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[q][te]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=C.textures;for(let q=0,te=k.length;q<te;q++){const Y=i.get(k[q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[q])}i.remove(C)}let y=0;function E(){y=0}function G(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function z(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){const k=i.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(k,C,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function J(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ke(k,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function U(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){ke(k,C,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function Q(C,M){const k=i.get(C);if(C.version>0&&k.__version!==C.version){X(k,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const L={[Fo]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[bf]:t.MIRRORED_REPEAT},$={[Pn]:t.NEAREST,[OS]:t.NEAREST_MIPMAP_NEAREST,[ma]:t.NEAREST_MIPMAP_LINEAR,[Vn]:t.LINEAR,[Wc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},K={[HS]:t.NEVER,[$S]:t.ALWAYS,[VS]:t.LESS,[yv]:t.LEQUAL,[GS]:t.EQUAL,[XS]:t.GEQUAL,[WS]:t.GREATER,[jS]:t.NOTEQUAL};function se(C,M){if(M.type===pi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Wc||M.magFilter===ma||M.magFilter===Mr||M.minFilter===Vn||M.minFilter===Wc||M.minFilter===ma||M.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==ma&&M.minFilter!==Mr||M.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ee(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const q=M.source;let te=h.get(q);te===void 0&&(te={},h.set(q,te));const Y=z(M);if(Y!==C.__cacheKey){te[Y]===void 0&&(te[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[Y].usedTimes++;const ye=te[C.__cacheKey];ye!==void 0&&(te[C.__cacheKey].usedTimes--,ye.usedTimes===0&&P(M)),C.__cacheKey=Y,C.__webglTexture=te[Y].texture}return k}function ke(C,M,k){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const te=Ee(C,M),Y=M.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+k);const ye=i.get(Y);if(Y.version!==ye.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const le=Ze.getPrimaries(Ze.workingColorSpace),me=M.colorSpace===Oi?null:Ze.getPrimaries(M.colorSpace),$e=M.colorSpace===Oi||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ie=_(M.image,!1,r.maxTextureSize);ie=rt(M,ie);const ge=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let be=v(M.internalFormat,ge,Pe,M.colorSpace,M.isVideoTexture);se(q,M);let _e;const He=M.mipmaps,Ue=M.isVideoTexture!==!0,nt=ye.__version===void 0||te===!0,D=Y.dataReady,de=S(M,ie);if(M.isDepthTexture)be=x(M.format===Ns,M.type),nt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,be,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Pe,null));else if(M.isDataTexture)if(He.length>0){Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,de,be,He[0].width,He[0].height);for(let W=0,Z=He.length;W<Z;W++)_e=He[W],Ue?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):n.texImage2D(t.TEXTURE_2D,W,be,_e.width,_e.height,0,ge,Pe,_e.data);M.generateMipmaps=!1}else Ue?(nt&&n.texStorage2D(t.TEXTURE_2D,de,be,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Pe,ie.data)):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Pe,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,be,He[0].width,He[0].height,ie.depth);for(let W=0,Z=He.length;W<Z;W++)if(_e=He[W],M.format!==Wn)if(ge!==null)if(Ue){if(D)if(M.layerUpdates.size>0){const ue=bm(_e.width,_e.height,M.format,M.type);for(const he of M.layerUpdates){const We=_e.data.subarray(he*ue/_e.data.BYTES_PER_ELEMENT,(he+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,he,_e.width,_e.height,1,ge,We,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,be,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ie.depth,ge,Pe,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,be,_e.width,_e.height,ie.depth,0,ge,Pe,_e.data)}else{Ue&&nt&&n.texStorage2D(t.TEXTURE_2D,de,be,He[0].width,He[0].height);for(let W=0,Z=He.length;W<Z;W++)_e=He[W],M.format!==Wn?ge!==null?Ue?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,W,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Pe,_e.data):n.texImage2D(t.TEXTURE_2D,W,be,_e.width,_e.height,0,ge,Pe,_e.data)}else if(M.isDataArrayTexture)if(Ue){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,be,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const W=bm(ie.width,ie.height,M.format,M.type);for(const Z of M.layerUpdates){const ue=ie.data.subarray(Z*W/ie.data.BYTES_PER_ELEMENT,(Z+1)*W/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ge,Pe,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(M.isData3DTexture)Ue?(nt&&n.texStorage3D(t.TEXTURE_3D,de,be,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Pe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,ge,Pe,ie.data);else if(M.isFramebufferTexture){if(nt)if(Ue)n.texStorage2D(t.TEXTURE_2D,de,be,ie.width,ie.height);else{let W=ie.width,Z=ie.height;for(let ue=0;ue<de;ue++)n.texImage2D(t.TEXTURE_2D,ue,be,W,Z,0,ge,Pe,null),W>>=1,Z>>=1}}else if(He.length>0){if(Ue&&nt){const W=Le(He[0]);n.texStorage2D(t.TEXTURE_2D,de,be,W.width,W.height)}for(let W=0,Z=He.length;W<Z;W++)_e=He[W],Ue?D&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge,Pe,_e):n.texImage2D(t.TEXTURE_2D,W,be,ge,Pe,_e);M.generateMipmaps=!1}else if(Ue){if(nt){const W=Le(ie);n.texStorage2D(t.TEXTURE_2D,de,be,W.width,W.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Pe,ie)}else n.texImage2D(t.TEXTURE_2D,0,be,ge,Pe,ie);m(M)&&u(q),ye.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function X(C,M,k){if(M.image.length!==6)return;const q=Ee(C,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+k);const Y=i.get(te);if(te.version!==Y.__version||q===!0){n.activeTexture(t.TEXTURE0+k);const ye=Ze.getPrimaries(Ze.workingColorSpace),le=M.colorSpace===Oi?null:Ze.getPrimaries(M.colorSpace),me=M.colorSpace===Oi||ye===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!$e&&!ie?ge[Z]=_(M.image[Z],!0,r.maxCubemapSize):ge[Z]=ie?M.image[Z].image:M.image[Z],ge[Z]=rt(M,ge[Z]);const Pe=ge[0],be=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),He=v(M.internalFormat,be,_e,M.colorSpace),Ue=M.isVideoTexture!==!0,nt=Y.__version===void 0||q===!0,D=te.dataReady;let de=S(M,Pe);se(t.TEXTURE_CUBE_MAP,M);let W;if($e){Ue&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,He,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){W=ge[Z].mipmaps;for(let ue=0;ue<W.length;ue++){const he=W[ue];M.format!==Wn?be!==null?Ue?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,he.width,he.height,be,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,He,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,0,0,he.width,he.height,be,_e,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue,He,he.width,he.height,0,be,_e,he.data)}}}else{if(W=M.mipmaps,Ue&&nt){W.length>0&&de++;const Z=Le(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,be,_e,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,ge[Z].width,ge[Z].height,0,be,_e,ge[Z].data);for(let ue=0;ue<W.length;ue++){const We=W[ue].image[Z].image;Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,We.width,We.height,be,_e,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,He,We.width,We.height,0,be,_e,We.data)}}else{Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,_e,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,be,_e,ge[Z]);for(let ue=0;ue<W.length;ue++){const he=W[ue];Ue?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,0,0,be,_e,he.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue+1,He,be,_e,he.image[Z])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),Y.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ee(C,M,k,q,te,Y){const ye=s.convert(k.format,k.colorSpace),le=s.convert(k.type),me=v(k.internalFormat,ye,le,k.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>Y),ge=Math.max(1,M.height>>Y);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Y,me,ie,ge,M.depth,0,ye,le,null):n.texImage2D(te,Y,me,ie,ge,0,ye,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,i.get(k).__webglTexture,0,Be(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,i.get(k).__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(C,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const q=M.depthTexture,te=q&&q.isDepthTexture?q.type:null,Y=x(M.stencilBuffer,te),ye=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Be(M);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Y,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,C)}else{const q=M.textures;for(let te=0;te<q.length;te++){const Y=q[te],ye=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),me=v(Y.internalFormat,ye,le,Y.colorSpace),$e=Be(M);k&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const q=i.get(M.depthTexture).__webglTexture,te=Be(M);if(M.depthTexture.format===Ms)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(M.depthTexture.format===Ns)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const M=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,C)}else if(k){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[q],C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(C,M,k){const q=i.get(C);M!==void 0&&ee(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ie(C)}function Ve(C){const M=C.texture,k=i.get(C),q=i.get(M);C.addEventListener("dispose",T);const te=C.textures,Y=C.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let me=0;me<M.mipmaps.length;me++)k.__webglFramebuffer[le][me]=t.createFramebuffer()}else k.__webglFramebuffer[le]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)k.__webglFramebuffer[le]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ye)for(let le=0,me=te.length;le<me;le++){const $e=i.get(te[le]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Xe(C)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const me=te[le];k.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const $e=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=v(me.internalFormat,$e,ie,me.colorSpace,C.isXRRenderTarget===!0),Pe=Be(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,k.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ee(k.__webglFramebuffer[le][me],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ee(k.__webglFramebuffer[le],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let le=0,me=te.length;le<me;le++){const $e=te[le],ie=i.get($e);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),se(t.TEXTURE_2D,$e),ee(k.__webglFramebuffer,C,$e,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m($e)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,q.__webglTexture),se(le,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ee(k.__webglFramebuffer[me],C,M,t.COLOR_ATTACHMENT0,le,me);else ee(k.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,le,0);m(M)&&u(le),n.unbindTexture()}C.depthBuffer&&Ie(C)}function et(C){const M=C.textures;for(let k=0,q=M.length;k<q;k++){const te=M[k];if(m(te)){const Y=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(te).__webglTexture;n.bindTexture(Y,ye),u(Y),n.unbindTexture()}}}const Ge=[],b=[];function ln(C){if(C.samples>0){if(Xe(C)===!1){const M=C.textures,k=C.width,q=C.height;let te=t.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(C),le=M.length>1;if(le)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,k,q,0,0,k,q,te,t.NEAREST),l===!0&&(Ge.length=0,b.length=0,Ge.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(Y),b.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Be(C){return Math.min(r.maxSamples,C.samples)}function Xe(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function rt(C,M){const k=C.colorSpace,q=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==rr&&k!==Oi&&(Ze.getTransfer(k)===at?(q!==Wn||te!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=E,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=Ae,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Xe}function JT(t,e){function n(i,r=Oi){let s;const o=Ze.getTransfer(r);if(i===Mi)return t.UNSIGNED_BYTE;if(i===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===fv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cv)return t.BYTE;if(i===uv)return t.SHORT;if(i===Oo)return t.UNSIGNED_SHORT;if(i===ih)return t.INT;if(i===Lr)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Xo)return t.HALF_FLOAT;if(i===dv)return t.ALPHA;if(i===hv)return t.RGB;if(i===Wn)return t.RGBA;if(i===pv)return t.LUMINANCE;if(i===mv)return t.LUMINANCE_ALPHA;if(i===Ms)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===gv)return t.RED;if(i===oh)return t.RED_INTEGER;if(i===_v)return t.RG;if(i===ah)return t.RG_INTEGER;if(i===lh)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lf||i===Df||i===If||i===Uf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Lf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===If)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Uf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nf||i===Ff||i===Of)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nf||i===Ff)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Of)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kf||i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===jf||i===Xf||i===$f||i===Yf||i===qf||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$f)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===Qf||i===Jf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vv||i===ed||i===td||i===nd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ed)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===td)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class eA extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tA={type:"move"};class xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),u=this._getHandJoint(c,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new er({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _n(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends Or{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,g=null;const _=new rA,m=n.getContextAttributes();let u=null,v=null;const x=[],S=[],R=new De;let T=null;const A=new Rn;A.layers.enable(1),A.viewport=new gt;const P=new Rn;P.layers.enable(2),P.viewport=new gt;const V=[A,P],y=new eA;y.layers.enable(1),y.layers.enable(2);let E=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=x[X];return ee===void 0&&(ee=new xu,x[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=x[X];return ee===void 0&&(ee=new xu,x[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=x[X];return ee===void 0&&(ee=new xu,x[X]=ee),ee.getHandSpace()};function z(X){const ee=S.indexOf(X.inputSource);if(ee===-1)return;const ae=x[ee];ae!==void 0&&(ae.update(X.inputSource,X.frame,c||o),ae.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",J);for(let X=0;X<x.length;X++){const ee=S[X];ee!==null&&(S[X]=null,x[X].disconnect(ee))}E=null,G=null,_.reset(),e.setRenderTarget(u),p=null,h=null,d=null,r=null,v=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Dr(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ae=null,ce=null;m.depth&&(ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ee=m.stencil?Ns:Ms,ae=m.stencil?Us:Lr);const Ie={colorFormat:n.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Dr(h.textureWidth,h.textureHeight,{format:Wn,type:Mi,depthTexture:new Lv(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(X){for(let ee=0;ee<X.removed.length;ee++){const ae=X.removed[ee],ce=S.indexOf(ae);ce>=0&&(S[ce]=null,x[ce].disconnect(ae))}for(let ee=0;ee<X.added.length;ee++){const ae=X.added[ee];let ce=S.indexOf(ae);if(ce===-1){for(let Ae=0;Ae<x.length;Ae++)if(Ae>=S.length){S.push(ae),ce=Ae;break}else if(S[Ae]===null){S[Ae]=ae,ce=Ae;break}if(ce===-1)break}const Ie=x[ce];Ie&&Ie.connect(ae)}}const U=new F,Q=new F;function L(X,ee,ae){U.setFromMatrixPosition(ee.matrixWorld),Q.setFromMatrixPosition(ae.matrixWorld);const ce=U.distanceTo(Q),Ie=ee.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,Ve=Ie[14]/(Ie[10]-1),et=Ie[14]/(Ie[10]+1),Ge=(Ie[9]+1)/Ie[5],b=(Ie[9]-1)/Ie[5],ln=(Ie[8]-1)/Ie[0],Be=(Ae[8]+1)/Ae[0],Xe=Ve*ln,Ce=Ve*Be,rt=ce/(-ln+Be),Le=rt*-ln;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Le),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const C=Ve+rt,M=et+rt,k=Xe-Le,q=Ce+(ce-Le),te=Ge*et/M*C,Y=b*et/M*C;X.projectionMatrix.makePerspective(k,q,te,Y,C,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function $(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ee=X.near,ae=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ae=_.depthFar)),y.near=P.near=A.near=ee,y.far=P.far=A.far=ae,(E!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,G=y.far);const ce=X.parent,Ie=y.cameras;$(y,ce);for(let Ae=0;Ae<Ie.length;Ae++)$(Ie[Ae],ce);Ie.length===2?L(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),K(X,y,ce)};function K(X,ee,ae){ae===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=id*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let se=null;function Ee(X,ee){if(f=ee.getViewerPose(c||o),g=ee,f!==null){const ae=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ce=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ae=0;Ae<ae.length;Ae++){const Ve=ae[Ae];let et=null;if(p!==null)et=p.getViewport(Ve);else{const b=d.getViewSubImage(h,Ve);et=b.viewport,Ae===0&&(e.setRenderTargetTextures(v,b.colorTexture,h.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(v))}let Ge=V[Ae];Ge===void 0&&(Ge=new Rn,Ge.layers.enable(Ae),Ge.viewport=new gt,V[Ae]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(et.x,et.y,et.width,et.height),Ae===0&&(y.matrix.copy(Ge.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Ae=d.getDepthInformation(ae[0]);Ae&&Ae.isValid&&Ae.texture&&_.init(e,Ae,r.renderState)}}for(let ae=0;ae<x.length;ae++){const ce=S[ae],Ie=x[ae];ce!==null&&Ie!==void 0&&Ie.update(ce,ee,c||o)}se&&se(X,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ke=new bv;ke.setAnimationLoop(Ee),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const dr=new ni,oA=new ut;function aA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Rv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),_(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===an&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===an&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,dr.copy(S),dr.x*=-1,dr.y*=-1,dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===an&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function c(v,x){let S=r[v.id];S===void 0&&(g(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(v,R);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function f(v){const x=d();v.__bindingPointIndex=x;const S=t.createBuffer(),R=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],S=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,A=S.length;T<A;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let V=0,y=P.length;V<y;V++){const E=P[V];if(p(E,T,V,R)===!0){const G=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let j=0;for(let J=0;J<z.length;J++){const U=z[J],Q=_(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,G+j,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,j),j+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,x,S,R){const T=v.value,A=x+"_"+S;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const P=R[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const x=v.uniforms;let S=0;const R=16;for(let A=0,P=x.length;A<P;A++){const V=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,E=V.length;y<E;y++){const G=V[y],z=Array.isArray(G.value)?G.value:[G.value];for(let j=0,J=z.length;j<J;j++){const U=z[j],Q=_(U),L=S%R,$=L%Q.boundary,K=L+$;S+=$,K!==0&&R-K<Q.storage&&(S+=R-K),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=Q.storage}}}const T=S%R;return T>0&&(S+=R-T),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Fv{constructor(e={}){const{canvas:n=KS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bn,this.toneMapping=Ki,this.toneMappingExposure=1;const x=this;let S=!1,R=0,T=0,A=null,P=-1,V=null;const y=new gt,E=new gt;let G=null;const z=new ze(0);let j=0,J=n.width,U=n.height,Q=1,L=null,$=null;const K=new gt(0,0,J,U),se=new gt(0,0,J,U);let Ee=!1;const ke=new fh;let X=!1,ee=!1;const ae=new ut,ce=new ut,Ie=new F,Ae=new gt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function Ge(){return A===null?Q:1}let b=i;function ln(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",he,!1),b===null){const I="webgl2";if(b=ln(I,w),b===null)throw ln(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Be,Xe,Ce,rt,Le,C,M,k,q,te,Y,ye,le,me,$e,ie,ge,Pe,be,_e,He,Ue,nt,D;function de(){Be=new pw(b),Be.init(),Ue=new JT(b,Be),Xe=new lw(b,Be,e,Ue),Ce=new KT(b),Xe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),rt=new _w(b),Le=new NT,C=new QT(b,Be,Ce,Le,Xe,Ue,rt),M=new uw(x),k=new hw(x),q=new wM(b),nt=new ow(b,q),te=new mw(b,q,rt,nt),Y=new xw(b,te,q,rt),be=new vw(b,Xe,C),ie=new cw(Le),ye=new UT(x,M,k,Be,Xe,nt,ie),le=new aA(x,Le),me=new OT,$e=new GT(Be),Pe=new sw(x,M,k,Ce,Y,h,l),ge=new YT(x,Y,Xe),D=new lA(b,rt,Xe,Ce),_e=new aw(b,Be,rt),He=new gw(b,Be,rt),rt.programs=ye.programs,x.capabilities=Xe,x.extensions=Be,x.properties=Le,x.renderLists=me,x.shadowMap=ge,x.state=Ce,x.info=rt}de();const W=new sA(x,b);this.xr=W,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(J,U,!1))},this.getSize=function(w){return w.set(J,U)},this.setSize=function(w,I,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,U=I,n.width=Math.floor(w*Q),n.height=Math.floor(I*Q),B===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(J*Q,U*Q).floor()},this.setDrawingBufferSize=function(w,I,B){J=w,U=I,Q=B,n.width=Math.floor(w*B),n.height=Math.floor(I*B),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,I,B,H){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,I,B,H),Ce.viewport(y.copy(K).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,I,B,H){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,I,B,H),Ce.scissor(E.copy(se).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(w){Ce.setScissorTest(Ee=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,I=!0,B=!0){let H=0;if(w){let N=!1;if(A!==null){const re=A.texture.format;N=re===lh||re===ah||re===oh}if(N){const re=A.texture.type,fe=re===Mi||re===Lr||re===Oo||re===Us||re===rh||re===sh,ve=Pe.getClearColor(),xe=Pe.getClearAlpha(),Te=ve.r,Re=ve.g,Se=ve.b;fe?(p[0]=Te,p[1]=Re,p[2]=Se,p[3]=xe,b.clearBufferuiv(b.COLOR,0,p)):(g[0]=Te,g[1]=Re,g[2]=Se,g[3]=xe,b.clearBufferiv(b.COLOR,0,g))}else H|=b.COLOR_BUFFER_BIT}I&&(H|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(H|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),$e.dispose(),Le.dispose(),M.dispose(),k.dispose(),Y.dispose(),nt.dispose(),D.dispose(),ye.dispose(),W.dispose(),W.removeEventListener("sessionstart",mh),W.removeEventListener("sessionend",gh),sr.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=rt.autoReset,I=ge.enabled,B=ge.autoUpdate,H=ge.needsUpdate,N=ge.type;de(),rt.autoReset=w,ge.enabled=I,ge.autoUpdate=B,ge.needsUpdate=H,ge.type=N}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const I=w.target;I.removeEventListener("dispose",We),xt(I)}function xt(w){Zt(w),Le.remove(w)}function Zt(w){const I=Le.get(w).programs;I!==void 0&&(I.forEach(function(B){ye.releaseProgram(B)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,B,H,N,re){I===null&&(I=Ve);const fe=N.isMesh&&N.matrixWorld.determinant()<0,ve=Gv(w,I,B,H,N);Ce.setMaterial(H,fe);let xe=B.index,Te=1;if(H.wireframe===!0){if(xe=te.getWireframeAttribute(B),xe===void 0)return;Te=2}const Re=B.drawRange,Se=B.attributes.position;let Qe=Re.start*Te,st=(Re.start+Re.count)*Te;re!==null&&(Qe=Math.max(Qe,re.start*Te),st=Math.min(st,(re.start+re.count)*Te)),xe!==null?(Qe=Math.max(Qe,0),st=Math.min(st,xe.count)):Se!=null&&(Qe=Math.max(Qe,0),st=Math.min(st,Se.count));const pt=st-Qe;if(pt<0||pt===1/0)return;nt.setup(N,H,ve,B,xe);let cn,qe=_e;if(xe!==null&&(cn=q.get(xe),qe=He,qe.setIndex(cn)),N.isMesh)H.wireframe===!0?(Ce.setLineWidth(H.wireframeLinewidth*Ge()),qe.setMode(b.LINES)):qe.setMode(b.TRIANGLES);else if(N.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),Ce.setLineWidth(Me*Ge()),N.isLineSegments?qe.setMode(b.LINES):N.isLineLoop?qe.setMode(b.LINE_LOOP):qe.setMode(b.LINE_STRIP)}else N.isPoints?qe.setMode(b.POINTS):N.isSprite&&qe.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Me=N._multiDrawStarts,It=N._multiDrawCounts,Ke=N._multiDrawCount,In=xe?q.get(xe).bytesPerElement:1,kr=Le.get(H).currentProgram.getUniforms();for(let un=0;un<Ke;un++)kr.setValue(b,"_gl_DrawID",un),qe.render(Me[un]/In,It[un])}else if(N.isInstancedMesh)qe.renderInstances(Qe,pt,N.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,It=Math.min(B.instanceCount,Me);qe.renderInstances(Qe,pt,It)}else qe.render(Qe,pt)};function Ye(w,I,B){w.transparent===!0&&w.side===mn&&w.forceSinglePass===!1?(w.side=an,w.needsUpdate=!0,Zo(w,I,B),w.side=Ji,w.needsUpdate=!0,Zo(w,I,B),w.side=mn):Zo(w,I,B)}this.compile=function(w,I,B=null){B===null&&(B=w),m=$e.get(B),m.init(I),v.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const H=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const ve=re[fe];Ye(ve,B,N),H.add(ve)}else Ye(re,B,N),H.add(re)}),v.pop(),m=null,H},this.compileAsync=function(w,I,B=null){const H=this.compile(w,I,B);return new Promise(N=>{function re(){if(H.forEach(function(fe){Le.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){N(w);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Qt=null;function ii(w){Qt&&Qt(w)}function mh(){sr.stop()}function gh(){sr.start()}const sr=new bv;sr.setAnimationLoop(ii),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(w){Qt=w,W.setAnimationLoop(w),w===null?sr.stop():sr.start()},W.addEventListener("sessionstart",mh),W.addEventListener("sessionend",gh),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,I,A),m=$e.get(w,v.length),m.init(I),v.push(m),ce.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ke.setFromProjectionMatrix(ce),ee=this.localClippingEnabled,X=ie.init(this.clippingPlanes,ee),_=me.get(w,u.length),_.init(),u.push(_),W.enabled===!0&&W.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&fc(re,I,-1/0,x.sortObjects)}fc(w,I,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(L,$),et=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,et&&Pe.addToRenderList(_,w),this.info.render.frame++,X===!0&&ie.beginShadows();const B=m.state.shadowsArray;ge.render(B,w,I),X===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(m.setupLights(),I.isArrayCamera){const re=I.cameras;if(N.length>0)for(let fe=0,ve=re.length;fe<ve;fe++){const xe=re[fe];vh(H,N,w,xe)}et&&Pe.render(w);for(let fe=0,ve=re.length;fe<ve;fe++){const xe=re[fe];_h(_,w,xe,xe.viewport)}}else N.length>0&&vh(H,N,w,I),et&&Pe.render(w),_h(_,w,I);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,I),nt.resetDefaultState(),P=-1,V=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&ie.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function fc(w,I,B,H){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){H&&Ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const fe=Y.update(w),ve=w.material;ve.visible&&_.push(w,fe,ve,B,Ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const fe=Y.update(w),ve=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ae.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ae.copy(fe.boundingSphere.center)),Ae.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const xe=fe.groups;for(let Te=0,Re=xe.length;Te<Re;Te++){const Se=xe[Te],Qe=ve[Se.materialIndex];Qe&&Qe.visible&&_.push(w,fe,Qe,B,Ae.z,Se)}}else ve.visible&&_.push(w,fe,ve,B,Ae.z,null)}}const re=w.children;for(let fe=0,ve=re.length;fe<ve;fe++)fc(re[fe],I,B,H)}function _h(w,I,B,H){const N=w.opaque,re=w.transmissive,fe=w.transparent;m.setupLightsView(B),X===!0&&ie.setGlobalState(x.clippingPlanes,B),H&&Ce.viewport(y.copy(H)),N.length>0&&Ko(N,I,B),re.length>0&&Ko(re,I,B),fe.length>0&&Ko(fe,I,B),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function vh(w,I,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new Dr(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Xo:Mi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const re=m.state.transmissionRenderTarget[H.id],fe=H.viewport||y;re.setSize(fe.z,fe.w);const ve=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(z),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),et&&Pe.render(B);const xe=x.toneMapping;x.toneMapping=Ki;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),X===!0&&ie.setGlobalState(x.clippingPlanes,H),Ko(w,B,H),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Se=0,Qe=I.length;Se<Qe;Se++){const st=I[Se],pt=st.object,cn=st.geometry,qe=st.material,Me=st.group;if(qe.side===mn&&pt.layers.test(H.layers)){const It=qe.side;qe.side=an,qe.needsUpdate=!0,xh(pt,B,H,cn,qe,Me),qe.side=It,qe.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}x.setRenderTarget(ve),x.setClearColor(z,j),Te!==void 0&&(H.viewport=Te),x.toneMapping=xe}function Ko(w,I,B){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,re=w.length;N<re;N++){const fe=w[N],ve=fe.object,xe=fe.geometry,Te=H===null?fe.material:H,Re=fe.group;ve.layers.test(B.layers)&&xh(ve,I,B,xe,Te,Re)}}function xh(w,I,B,H,N,re){w.onBeforeRender(x,I,B,H,N,re),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(x,I,B,H,w,re),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=an,N.needsUpdate=!0,x.renderBufferDirect(B,I,H,N,w,re),N.side=Ji,N.needsUpdate=!0,x.renderBufferDirect(B,I,H,N,w,re),N.side=mn):x.renderBufferDirect(B,I,H,N,w,re),w.onAfterRender(x,I,B,H,N,re)}function Zo(w,I,B){I.isScene!==!0&&(I=Ve);const H=Le.get(w),N=m.state.lights,re=m.state.shadowsArray,fe=N.state.version,ve=ye.getParameters(w,N.state,re,I,B),xe=ye.getProgramCacheKey(ve);let Te=H.programs;H.environment=w.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(w.isMeshStandardMaterial?k:M).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Te===void 0&&(w.addEventListener("dispose",We),Te=new Map,H.programs=Te);let Re=Te.get(xe);if(Re!==void 0){if(H.currentProgram===Re&&H.lightsStateVersion===fe)return Sh(w,ve),Re}else ve.uniforms=ye.getUniforms(w),w.onBeforeCompile(ve,x),Re=ye.acquireProgram(ve,xe),Te.set(xe,Re),H.uniforms=ve.uniforms;const Se=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=ie.uniform),Sh(w,ve),H.needsLights=jv(w),H.lightsStateVersion=fe,H.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Re,H.uniformsList=null,Re}function yh(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=al.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Sh(w,I){const B=Le.get(w);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Gv(w,I,B,H,N){I.isScene!==!0&&(I=Ve),C.resetTextureUnits();const re=I.fog,fe=H.isMeshStandardMaterial?I.environment:null,ve=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:rr,xe=(H.isMeshStandardMaterial?k:M).get(H.envMap||fe),Te=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let pt=Ki;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=x.toneMapping);const cn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,qe=cn!==void 0?cn.length:0,Me=Le.get(H),It=m.state.lights;if(X===!0&&(ee===!0||w!==V)){const En=w===V&&H.id===P;ie.setState(H,w,En)}let Ke=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==It.state.version||Me.outputColorSpace!==ve||N.isBatchedMesh&&Me.batching===!1||!N.isBatchedMesh&&Me.batching===!0||N.isBatchedMesh&&Me.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Me.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Me.instancing===!1||!N.isInstancedMesh&&Me.instancing===!0||N.isSkinnedMesh&&Me.skinning===!1||!N.isSkinnedMesh&&Me.skinning===!0||N.isInstancedMesh&&Me.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Me.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Me.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Me.instancingMorph===!1&&N.morphTexture!==null||Me.envMap!==xe||H.fog===!0&&Me.fog!==re||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ie.numPlanes||Me.numIntersection!==ie.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Re||Me.morphTargets!==Se||Me.morphNormals!==Qe||Me.morphColors!==st||Me.toneMapping!==pt||Me.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Me.__version=H.version);let In=Me.currentProgram;Ke===!0&&(In=Zo(H,I,N));let kr=!1,un=!1,dc=!1;const _t=In.getUniforms(),wi=Me.uniforms;if(Ce.useProgram(In.program)&&(kr=!0,un=!0,dc=!0),H.id!==P&&(P=H.id,un=!0),kr||V!==w){Xe.reverseDepthBuffer?(ae.copy(w.projectionMatrix),QS(ae),JS(ae),_t.setValue(b,"projectionMatrix",ae)):_t.setValue(b,"projectionMatrix",w.projectionMatrix),_t.setValue(b,"viewMatrix",w.matrixWorldInverse);const En=_t.map.cameraPosition;En!==void 0&&En.setValue(b,Ie.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&_t.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,un=!0,dc=!0)}if(N.isSkinnedMesh){_t.setOptional(b,N,"bindMatrix"),_t.setOptional(b,N,"bindMatrixInverse");const En=N.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),_t.setValue(b,"boneTexture",En.boneTexture,C))}N.isBatchedMesh&&(_t.setOptional(b,N,"batchingTexture"),_t.setValue(b,"batchingTexture",N._matricesTexture,C),_t.setOptional(b,N,"batchingIdTexture"),_t.setValue(b,"batchingIdTexture",N._indirectTexture,C),_t.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&_t.setValue(b,"batchingColorTexture",N._colorsTexture,C));const hc=B.morphAttributes;if((hc.position!==void 0||hc.normal!==void 0||hc.color!==void 0)&&be.update(N,B,In),(un||Me.receiveShadow!==N.receiveShadow)&&(Me.receiveShadow=N.receiveShadow,_t.setValue(b,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(wi.envMap.value=xe,wi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(wi.envMapIntensity.value=I.environmentIntensity),un&&(_t.setValue(b,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Wv(wi,dc),re&&H.fog===!0&&le.refreshFogUniforms(wi,re),le.refreshMaterialUniforms(wi,H,Q,U,m.state.transmissionRenderTarget[w.id]),al.upload(b,yh(Me),wi,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(al.upload(b,yh(Me),wi,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(b,"center",N.center),_t.setValue(b,"modelViewMatrix",N.modelViewMatrix),_t.setValue(b,"normalMatrix",N.normalMatrix),_t.setValue(b,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const En=H.uniformsGroups;for(let pc=0,Xv=En.length;pc<Xv;pc++){const Mh=En[pc];D.update(Mh,In),D.bind(Mh,In)}}return In}function Wv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function jv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,B){Le.get(w.texture).__webglTexture=I,Le.get(w.depthTexture).__webglTexture=B;const H=Le.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const B=Le.get(w);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,B=0){A=w,R=I,T=B;let H=!0,N=null,re=!1,fe=!1;if(w){const xe=Le.get(w);if(xe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(b.FRAMEBUFFER,null),H=!1;else if(xe.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(xe.__hasExternalTextures)C.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Se=w.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&Le.has(Se)&&(w.width!==Se.image.width||w.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Te=w.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(fe=!0);const Re=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[I])?N=Re[I][B]:N=Re[I],re=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?N=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[B]:N=Re,y.copy(w.viewport),E.copy(w.scissor),G=w.scissorTest}else y.copy(K).multiplyScalar(Q).floor(),E.copy(se).multiplyScalar(Q).floor(),G=Ee;if(Ce.bindFramebuffer(b.FRAMEBUFFER,N)&&H&&Ce.drawBuffers(w,N),Ce.viewport(y),Ce.scissor(E),Ce.setScissorTest(G),re){const xe=Le.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,B)}else if(fe){const xe=Le.get(w.texture),Te=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Te)}P=-1},this.readRenderTargetPixels=function(w,I,B,H,N,re,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Ce.bindFramebuffer(b.FRAMEBUFFER,ve);try{const xe=w.texture,Te=xe.format,Re=xe.type;if(!Xe.textureFormatReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-H&&B>=0&&B<=w.height-N&&b.readPixels(I,B,H,N,Ue.convert(Te),Ue.convert(Re),re)}finally{const xe=A!==null?Le.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(w,I,B,H,N,re,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){const xe=w.texture,Te=xe.format,Re=xe.type;if(!Xe.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-H&&B>=0&&B<=w.height-N){Ce.bindFramebuffer(b.FRAMEBUFFER,ve);const Se=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.bufferData(b.PIXEL_PACK_BUFFER,re.byteLength,b.STREAM_READ),b.readPixels(I,B,H,N,Ue.convert(Te),Ue.convert(Re),0);const Qe=A!==null?Le.get(A).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Qe);const st=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await ZS(b,st,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Se),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,re),b.deleteBuffer(Se),b.deleteSync(st),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,B=0){w.isTexture!==!0&&(ol("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-B),N=Math.floor(w.image.width*H),re=Math.floor(w.image.height*H),fe=I!==null?I.x:0,ve=I!==null?I.y:0;C.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,fe,ve,N,re),Ce.unbindTexture()},this.copyTextureToTexture=function(w,I,B=null,H=null,N=0){w.isTexture!==!0&&(ol("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],I=arguments[2],N=arguments[3]||0,B=null);let re,fe,ve,xe,Te,Re;B!==null?(re=B.max.x-B.min.x,fe=B.max.y-B.min.y,ve=B.min.x,xe=B.min.y):(re=w.image.width,fe=w.image.height,ve=0,xe=0),H!==null?(Te=H.x,Re=H.y):(Te=0,Re=0);const Se=Ue.convert(I.format),Qe=Ue.convert(I.type);C.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const st=b.getParameter(b.UNPACK_ROW_LENGTH),pt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),cn=b.getParameter(b.UNPACK_SKIP_PIXELS),qe=b.getParameter(b.UNPACK_SKIP_ROWS),Me=b.getParameter(b.UNPACK_SKIP_IMAGES),It=w.isCompressedTexture?w.mipmaps[N]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,It.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,It.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,ve),b.pixelStorei(b.UNPACK_SKIP_ROWS,xe),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,N,Te,Re,re,fe,Se,Qe,It.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,N,Te,Re,It.width,It.height,Se,It.data):b.texSubImage2D(b.TEXTURE_2D,N,Te,Re,re,fe,Se,Qe,It),b.pixelStorei(b.UNPACK_ROW_LENGTH,st),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,qe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Me),N===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,I,B=null,H=null,N=0){w.isTexture!==!0&&(ol("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,H=arguments[1]||null,w=arguments[2],I=arguments[3],N=arguments[4]||0);let re,fe,ve,xe,Te,Re,Se,Qe,st;const pt=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(re=B.max.x-B.min.x,fe=B.max.y-B.min.y,ve=B.max.z-B.min.z,xe=B.min.x,Te=B.min.y,Re=B.min.z):(re=pt.width,fe=pt.height,ve=pt.depth,xe=0,Te=0,Re=0),H!==null?(Se=H.x,Qe=H.y,st=H.z):(Se=0,Qe=0,st=0);const cn=Ue.convert(I.format),qe=Ue.convert(I.type);let Me;if(I.isData3DTexture)C.setTexture3D(I,0),Me=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)C.setTexture2DArray(I,0),Me=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const It=b.getParameter(b.UNPACK_ROW_LENGTH),Ke=b.getParameter(b.UNPACK_IMAGE_HEIGHT),In=b.getParameter(b.UNPACK_SKIP_PIXELS),kr=b.getParameter(b.UNPACK_SKIP_ROWS),un=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,pt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,xe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Te),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Re),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Me,N,Se,Qe,st,re,fe,ve,cn,qe,pt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(Me,N,Se,Qe,st,re,fe,ve,cn,pt.data):b.texSubImage3D(Me,N,Se,Qe,st,re,fe,ve,cn,qe,pt),b.pixelStorei(b.UNPACK_ROW_LENGTH,It),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ke),b.pixelStorei(b.UNPACK_SKIP_PIXELS,In),b.pixelStorei(b.UNPACK_SKIP_ROWS,kr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,un),N===0&&I.generateMipmaps&&b.generateMipmap(Me),Ce.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,Ce.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===ch?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===oc?"display-p3":"srgb"}}class Ov extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zo extends Bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zl=new F,Bl=new F,Lm=new ut,no=new lc,Fa=new ac,yu=new F,Dm=new F;class cA extends Dt{constructor(e=new Tt,n=new zo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)zl.fromBufferAttribute(n,r-1),Bl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=zl.distanceTo(Bl);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=s,e.ray.intersectsSphere(Fa)===!1)return;Lm.copy(r).invert(),no.copy(e.ray).applyMatrix4(Lm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=f.getX(_),v=f.getX(_+1),x=Oa(this,e,no,l,u,v);x&&n.push(x)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(p),u=Oa(this,e,no,l,_,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const u=Oa(this,e,no,l,_,_+1);u&&n.push(u)}if(this.isLineLoop){const _=Oa(this,e,no,l,g-1,p);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(zl.fromBufferAttribute(o,r),Bl.fromBufferAttribute(o,s),n.distanceSqToSegment(zl,Bl,yu,Dm)>i)return;yu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(yu);if(!(l<e.near||l>e.far))return{distance:l,point:Dm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Im=new F,Um=new F;class Hl extends cA{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Im.fromBufferAttribute(n,r),Um.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Im.distanceTo(Um);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uA extends Yt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fA extends Bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xv,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kv extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class dA extends kv{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Su=new ut,Nm=new F,Fm=new F;class hA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nm),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),Su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pA extends hA{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Om extends kv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new pA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const km=new ut;class zv{constructor(e,n,i=0,r=1/0){this.ray=new lc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(km),this}intersectObject(e,n=!0,i=[]){return sd(e,this,i,n),i.sort(zm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)sd(e[r],this,i,n);return i.sort(zm),i}}function zm(t,e){return t.distance-e.distance}function sd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)sd(s[o],e,n,!0)}}class Bm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mA extends Or{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);const Hm={type:"change"},ph={type:"start"},Bv={type:"end"},ka=new lc,Vm=new Ui,gA=Math.cos(70*qS.DEG2RAD),Mt=new F,en=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mu=1e-6;class Hv extends mA{constructor(e,n=null){super(e,n),this.state=tt.NONE,this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:ds.ROTATE,TWO:ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Ir,this._lastTargetPosition=new F,this._quat=new Ir().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bm,this._sphericalDelta=new Bm,this._scale=1,this._panOffset=new F,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new F,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vA.bind(this),this._onPointerDown=_A.bind(this),this._onPointerUp=xA.bind(this),this._onContextMenu=AA.bind(this),this._onMouseWheel=MA.bind(this),this._onKeyDown=EA.bind(this),this._onTouchStart=wA.bind(this),this._onTouchMove=TA.bind(this),this._onMouseDown=yA.bind(this),this._onMouseMove=SA.bind(this),this._interceptControlDown=RA.bind(this),this._interceptControlUp=CA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hm),this.update(),this.state=tt.NONE}update(e=null){const n=this.object.position;Mt.copy(n).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),r<-Math.PI?r+=en:r>Math.PI&&(r-=en),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Mt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ka.origin.copy(this.object.position),ka.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ka.direction))<gA?this.object.lookAt(this.target):(Vm.setFromNormalAndCoplanarPoint(this.object.up,this.target),ka.intersectPlane(Vm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mu||this._lastTargetPosition.distanceToSquared(this.target)>Mu?(this.dispatchEvent(Hm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?en/60*this.autoRotateSpeed*e:en/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Mt.setFromMatrixColumn(n,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,n){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(n,1):(Mt.setFromMatrixColumn(n,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Mt.copy(r).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(en*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-en*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(en*this._rotateDelta.x/n.clientHeight),this._rotateUp(en*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new De,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _A(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function vA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function xA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bv),this.state=tt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function yA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=tt.DOLLY;break;case _i.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}break;case _i.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(ph)}function SA(t){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function MA(t){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(t.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Bv))}function EA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function wA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=tt.TOUCH_ROTATE;break;case ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=tt.TOUCH_DOLLY_PAN;break;case ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(ph)}function TA(t){switch(this._trackPointer(t),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=tt.NONE}}function AA(t){this.enabled!==!1&&t.preventDefault()}function RA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function CA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PA(t){const e=new Float32Array(t.triangles.length*9);let n=0;for(const i of t.triangles)for(const r of i.corners){const s=Tr(t,r);e[n++]=s.x,e[n++]=s.y,e[n++]=s.z}return e}function bA(t,e,n,i,r,s){const o=new Float32Array(t.triangles.length*9).fill(1);for(const a of t.triangles){const l=e.metrics[a.id];let c=null;if(l.degenerate3d||l.degenerateUv?c=[.35,.35,.4]:i&&e.overlap[a.id]?c=[1,.55,.05]:n&&l.flipped?c=[1,.25,.35]:s&&r&&r[a.id]!==0&&(c=Vv(r[a.id])),c)for(let f=0;f<3;f++)o[a.id*9+f*3]=c[0],o[a.id*9+f*3+1]=c[1],o[a.id*9+f*3+2]=c[2]}return o}function Vv(t){return t&Ja?[.72,.45,1]:t&Qa?[1,.42,.62]:t&Za?[.45,.68,1]:[1,1,1]}function LA(t,e,n){const i=new Tt,r=[];for(const s of t.triangles)if(e.has(s.faceId))for(let o=0;o<3;o++)r.push(n[s.id*9+o*3],n[s.id*9+o*3+1],n[s.id*9+o*3+2]);return i.setAttribute("position",new Ft(r,3)),i}function DA(t,e){const n={boundary:[],seam:[],nonManifold:[],regular:[]};for(const r of e.edges)for(const{ca:s,cb:o}of r.occurrences){const[a,l]=$n(t,s),[c,f]=$n(t,o);let d;r.nonManifold?d="nonManifold":r.boundary?d="boundary":r.seam?d="seam":d="regular",n[d].push(a,l,0,c,f,0)}const i=r=>{const s=new Tt;return s.setAttribute("position",new Ft(r,3)),s};return{boundary:i(n.boundary),seam:i(n.seam),nonManifold:i(n.nonManifold),regular:i(n.regular)}}function IA(t,e){const n=[];for(const r of t.triangles)if(e.has(r.faceId))for(let s=0;s<3;s++){const[o,a]=$n(t,r.corners[s]);n.push(o,a,0)}const i=new Tt;return i.setAttribute("position",new Ft(n,3)),i}function UA(t,e,n){const i=[],r=[],s=new Int32Array(t.triangles.length).fill(-1);e.islands.forEach(a=>{for(const l of a.triIds)s[l]=a.id});for(const a of t.triangles){const l=e.metrics[a.id];let c;l.degenerate3d||l.degenerateUv?c=[.32,.32,.38]:n.showOverlap&&e.overlap[a.id]?c=[1,.55,.1]:n.showFlipped&&l.flipped?c=[1,.35,.45]:n.showRules&&n.ruleMask&&n.ruleMask[a.id]!==0?c=Vv(n.ruleMask[a.id]):c=NA(s[a.id]);for(let f=0;f<3;f++){const[d,h]=$n(t,a.corners[f]);i.push(d,h,0),r.push(c[0],c[1],c[2])}}const o=new Tt;return o.setAttribute("position",new Ft(i,3)),o.setAttribute("color",new Ft(r,3)),o.computeBoundingBox(),o}function NA(t){const e=t*.61803398875%1,n=new ze().setHSL(e,.45,.72);return[n.r,n.g,n.b]}function FA(t){const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d"),r=256/t;for(let o=0;o<t;o++)for(let a=0;a<t;a++)i.fillStyle=(a+o)%2===0?"#e8e8ee":"#5a5f72",i.fillRect(a*r,o*r,Math.ceil(r),Math.ceil(r));i.strokeStyle="#3a3d49",i.lineWidth=2,i.strokeRect(1,1,254,254);const s=new uA(n);return s.wrapS=Fo,s.wrapT=Fo,s.colorSpace=Bn,s.anisotropy=8,s}function OA(){const{state:t,selectFaces:e,toggleFace:n}=Fr(),i=we.useRef(null),r=we.useRef(null);we.useEffect(()=>{const f=i.current,d=new Fv({antialias:!0});d.setPixelRatio(Math.min(devicePixelRatio,2)),d.setSize(f.clientWidth,f.clientHeight),f.appendChild(d.domElement);const h=new Ov;h.background=new ze("#20222a");const p=new Rn(45,f.clientWidth/f.clientHeight,.01,1e3);p.position.set(2.4,1.8,3.2);const g=new Hv(p,d.domElement);g.enableDamping=!0,h.add(new dA(16777215,3355460,1.2));const _=new Om(16777215,1.6);_.position.set(3,5,4),h.add(_);const m=new Om(11191551,.5);m.position.set(-3,-1,-2),h.add(m);const u=new Tt,v=new fA({vertexColors:!0,side:mn,roughness:.75,metalness:0,flatShading:!0}),x=new _n(u,v);h.add(x);const S=new _n(new Tt,new ko({color:4376575,transparent:!0,opacity:.45,side:mn,depthTest:!1,polygonOffset:!0,polygonOffsetFactor:-2}));S.renderOrder=2,h.add(S);const R=new Hl(new Tt,new zo({color:1776932}));h.add(R);const T=new zv,A=new De,P={renderer:d,scene:h,camera:p,controls:g,mesh:x,overlay:S,wire:R,raycaster:T,pointer:A,positions:null,frame:0,downX:0,downY:0,meshData:null};r.current=P;const V=()=>{P.frame=requestAnimationFrame(V),g.update(),d.render(h,p)};V();const y=()=>{const G=f.clientWidth,z=f.clientHeight;p.aspect=G/z,p.updateProjectionMatrix(),d.setSize(G,z)},E=new ResizeObserver(y);return E.observe(f),()=>{cancelAnimationFrame(P.frame),E.disconnect(),g.dispose(),u.dispose(),v.dispose(),d.dispose(),d.domElement.remove(),r.current=null}},[]);const{mesh:s,stats:o}=t,a=we.useMemo(()=>s&&o?th(s,o,t.rules):null,[s,o,t.rules]),l=we.useRef(null);we.useEffect(()=>{var _;const f=r.current;if(!f||!s||!o)return;const d=PA(s);f.positions=d,f.meshData=s;const h=f.mesh.geometry;h.setAttribute("position",new xn(d,3));const p=f.mesh.material;if((_=p.map)==null||_.dispose(),p.map=null,t.checkerOn){const m=FA(t.checkerScale),u=new Float32Array(d.length/3*2);let v=0;for(const x of s.triangles)for(const S of x.corners){const R=s.corners[S],T=R.vt>=0?R.vt:R.v;u[v++]=s.uvs[T*2],u[v++]=s.uvs[T*2+1]}h.setAttribute("uv",new xn(u,2)),p.map=m,p.color.set(16777215),p.vertexColors=!1,p.needsUpdate=!0}else p.vertexColors=!0,p.needsUpdate=!0;h.computeVertexNormals(),h.computeBoundingSphere(),h.computeBoundingBox();const g=[];for(const m of s.triangles){const u=m.corners.map(v=>{const x=s.corners[v];return[s.positions[x.v*3],s.positions[x.v*3+1],s.positions[x.v*3+2]]});g.push(...u[0],...u[1],...u[1],...u[2],...u[2],...u[0])}if(f.wire.geometry.setAttribute("position",new Ft(g,3)),l.current!==s){l.current=s;const m=h.boundingBox,u=m.getCenter(new F),v=m.getSize(new F).length()/2||1;f.camera.position.copy(u).add(new F(1.6*v,1.1*v,2*v)),f.camera.near=v/100,f.camera.far=v*100,f.camera.updateProjectionMatrix(),f.controls.target.copy(u),f.controls.update()}},[s,o,t.checkerOn,t.checkerScale]),we.useEffect(()=>{const f=r.current;if(!f||!s||!o)return;const d=bA(s,o,t.showFlipped,t.showOverlap,(a==null?void 0:a.triMask)??null,t.showRules);f.mesh.geometry.setAttribute("color",new xn(d,3))},[s,o,t.showFlipped,t.showOverlap,t.showRules,a]),we.useEffect(()=>{const f=r.current;if(!f||!s||!f.positions)return;const d=LA(s,t.selectedFaceIds,f.positions);f.overlay.geometry.dispose(),f.overlay.geometry=d},[t.selectedFaceIds,s]),we.useEffect(()=>{const f=r.current,d=f==null?void 0:f.renderer.domElement;if(!f||!d)return;const h=_=>{const m=d.getBoundingClientRect();f.pointer.x=(_.clientX-m.left)/m.width*2-1,f.pointer.y=-((_.clientY-m.top)/m.height)*2+1},p=_=>{f.downX=_.clientX,f.downY=_.clientY},g=_=>{var S;if(Math.hypot(_.clientX-f.downX,_.clientY-f.downY)>4)return;const m=f.meshData;if(!m)return;h(_),f.raycaster.setFromCamera(f.pointer,f.camera);const u=f.raycaster.intersectObject(f.mesh,!1);if(u.length===0){e(new Set);return}const v=u[0].faceIndex,x=(S=m.triangles[v])==null?void 0:S.faceId;x!==void 0&&(_.shiftKey?n(x):e(new Set([x])))};return d.addEventListener("pointerdown",p),d.addEventListener("pointerup",g),()=>{d.removeEventListener("pointerdown",p),d.removeEventListener("pointerup",g)}},[e,n]);const c=we.useMemo(()=>s?`${s.fileName} · ${s.faces.length} 面 / ${s.triangles.length} 三角 / ${s.vertexCount} 顶点身份`:"未载入模型",[s]);return O.jsx("div",{className:"view view3d",ref:i,children:O.jsxs("div",{className:"view-label",children:["3D 模型 — ",c]})})}function kA(){const{state:t,selectFaces:e,toggleFace:n}=Fr(),i=we.useRef(null),r=we.useRef(null);we.useEffect(()=>{const l=i.current,c=new Fv({antialias:!0});c.setPixelRatio(Math.min(devicePixelRatio,2)),c.setSize(l.clientWidth,l.clientHeight),l.appendChild(c.domElement);const f=new Ov;f.background=new ze("#17181e");const d=l.clientWidth/l.clientHeight,h=2.6,p=new dh(-h*d,h*d,h,-h,-10,10);p.position.set(.5,.5,5),p.lookAt(.5,.5,0),p.zoom=.9,p.updateProjectionMatrix();const g=new Hv(p,c.domElement);g.enableRotate=!1,g.enableDamping=!0,g.target.set(.5,.5,0),g.mouseButtons={LEFT:_i.PAN,MIDDLE:_i.DOLLY,RIGHT:_i.PAN};const _=zA(1,10);f.add(_);const m=new Tt,u=new _n(m,new ko({vertexColors:!0,side:mn,transparent:!0,opacity:.55}));f.add(u);const v=new ps;f.add(v);const x=new _n(new Tt,new ko({color:4376575,transparent:!0,opacity:.5,side:mn,depthTest:!1}));x.renderOrder=3,f.add(x);const S=new zv,R=new De,T=()=>{const E=u.geometry.boundingBox;if(!E||!isFinite(E.min.x))return;const G=(E.min.x+E.max.x)/2,z=(E.min.y+E.max.y)/2,j=Math.max(E.max.x-E.min.x,.2),J=Math.max(E.max.y-E.min.y,.2),U=l.clientWidth/l.clientHeight,Q=Math.min(2*h/(j*1.3),2*h*U/(J*1.3),40);p.zoom=Math.max(.05,Q),g.target.set(G,z,0),p.position.set(G,z,5),p.updateProjectionMatrix(),g.update()},A={renderer:c,scene:f,camera:p,controls:g,fills:u,edgeLayer:v,selection:x,raycaster:S,pointer:R,meshData:null,frame:0,downX:0,downY:0,zoomFit:T,lastFitMesh:null};r.current=A,c.domElement.addEventListener("dblclick",T);const P=()=>{A.frame=requestAnimationFrame(P),g.update(),c.render(f,p)};P();const V=()=>{const E=l.clientWidth,G=l.clientHeight,z=E/G;p.left=-h*z,p.right=h*z,p.top=h,p.bottom=-h,p.updateProjectionMatrix(),c.setSize(E,G)},y=new ResizeObserver(V);return y.observe(l),()=>{cancelAnimationFrame(A.frame),y.disconnect(),c.domElement.removeEventListener("dblclick",T),g.dispose(),c.dispose(),c.domElement.remove(),r.current=null}},[]);const{mesh:s,stats:o}=t,a=we.useMemo(()=>s&&o?th(s,o,t.rules):null,[s,o,t.rules]);return we.useEffect(()=>{const l=r.current;if(!l||!s||!o)return;l.meshData=s;const c=UA(s,o,{showFlipped:t.showFlipped,showOverlap:t.showOverlap,ruleMask:(a==null?void 0:a.triMask)??null,showRules:t.showRules});l.fills.geometry.dispose(),l.fills.geometry=c;const f=l.edgeLayer;f.children.forEach(p=>{var g;(g=p.geometry)==null||g.dispose()}),f.clear();const d=DA(s,o),h=(p,g,_,m)=>{const u=new Hl(p,new zo({color:g,transparent:_<1,opacity:_,depthTest:!1}));u.renderOrder=m,f.add(u)};h(d.regular,3027264,.55,1),h(d.boundary,14672878,.9,2),h(d.seam,16756782,1,2),h(d.nonManifold,16726876,1,3),l.lastFitMesh!==s&&(l.lastFitMesh=s,l.zoomFit())},[s,o,t.showFlipped,t.showOverlap,t.showRules,a]),we.useEffect(()=>{const l=r.current;!l||!s||(l.selection.geometry.dispose(),l.selection.geometry=IA(s,t.selectedFaceIds))},[t.selectedFaceIds,s]),we.useEffect(()=>{const l=r.current,c=l==null?void 0:l.renderer.domElement;if(!l||!c)return;const f=p=>{const g=c.getBoundingClientRect();l.pointer.x=(p.clientX-g.left)/g.width*2-1,l.pointer.y=-((p.clientY-g.top)/g.height)*2+1},d=p=>{l.downX=p.clientX,l.downY=p.clientY},h=p=>{var v;if(Math.hypot(p.clientX-l.downX,p.clientY-l.downY)>4)return;const g=l.meshData;if(!g)return;f(p),l.raycaster.setFromCamera(l.pointer,l.camera);const _=l.raycaster.intersectObject(l.fills,!1);if(_.length===0){e(new Set);return}const m=_[0].faceIndex,u=(v=g.triangles[m])==null?void 0:v.faceId;u!==void 0&&(p.shiftKey?n(u):e(new Set([u])))};return c.addEventListener("pointerdown",d),c.addEventListener("pointerup",h),()=>{c.removeEventListener("pointerdown",d),c.removeEventListener("pointerup",h)}},[e,n]),O.jsx("div",{className:"view view2d",ref:i,children:O.jsx("div",{className:"view-label",children:"2D UV — V 向上（OBJ 原生方向）· 双击自适应 · 拖动平移/滚轮缩放"})})}function zA(t,e){const n=new ps,i=[];for(let o=0;o<=e;o++){const a=o/e*t;i.push(0,a,0,t,a,0),i.push(a,0,0,a,t,0)}const r=new Hl(new Tt().setAttribute("position",new Ft(i,3)),new zo({color:2763830,transparent:!0,opacity:.7})),s=new Hl(new Tt().setAttribute("position",new Ft([0,0,0,t,0,0,t,0,0,t,t,0,t,t,0,0,t,0,0,t,0,0,0,0],3)),new zo({color:5660800}));return n.add(r,s),n}function hn(t,e=3){return t==null||!Number.isFinite(t)?"—":t.toFixed(e)}function BA(t){if(t===null)return"退化";const e=(t-1)*100;return`${e>=0?"+":""}${e.toFixed(0)}%`}function HA(t){const e=t.filter(r=>r.areaRatio!==null);if(e.length===0)return{count:t.length,valid:0,maxRatio:null,maxAngle:null};let n=0,i=0;for(const r of e)n=Math.max(n,r.areaRatio),i=Math.max(i,r.angleDistortion??0);return{count:t.length,valid:e.length,maxRatio:n,maxAngle:i}}const VA={"density-low":"偏稀","density-high":"偏密",angle:"角度"};function Eu({value:t,onCommit:e,step:n,min:i,max:r,testid:s}){const[o,a]=we.useState(String(t)),[l,c]=we.useState(!1);we.useEffect(()=>{l||a(String(t))},[t,l]);const f=d=>{const h=Number(d);d.trim()!==""&&Number.isFinite(h)&&e(h)};return O.jsx("input",{className:"rule-input",type:"number","data-testid":s,value:o,step:n,min:i,max:r,onFocus:()=>c(!0),onChange:d=>{a(d.target.value),f(d.target.value)},onBlur:()=>{c(!1),a(String(t))}})}function GA(){const{state:t,selectFaces:e,setRules:n}=Fr(),{mesh:i,stats:r,selectedFaceIds:s}=t,o=t.rules,a=we.useMemo(()=>i&&r?th(i,r,o):null,[i,r,o]),l=we.useMemo(()=>{if(!i||!r)return null;let u=0,v=0,x=0,S=0,R=1/0,T=-1/0;const A=[];for(const U of r.metrics)U.degenerate3d&&u++,U.degenerateUv&&v++,U.flipped&&x++,U.areaRatio!==null&&(R=Math.min(R,U.areaRatio),T=Math.max(T,U.areaRatio)),U.angleDistortion!==null&&A.push(U.angleDistortion);for(let U=0;U<r.overlap.length;U++)r.overlap[U]&&S++;const P=r.edges.filter(U=>U.boundary).length,V=r.edges.filter(U=>U.seam).length,y=r.edges.filter(U=>U.nonManifold).length,E=r.islands.filter(U=>U.mirrored).length,G=U=>{const Q=new Set;return U.forEach(L=>Q.add(i.triangles[L].faceId)),Q},z=r.metrics.map((U,Q)=>U.flipped?Q:-1).filter(U=>U>=0),j=[...r.overlap].map((U,Q)=>U?Q:-1).filter(U=>U>=0),J=r.metrics.map((U,Q)=>U.degenerate3d||U.degenerateUv?Q:-1).filter(U=>U>=0);return{deg3:u,degUv:v,flipped:x,overlap:S,minR:R===1/0?null:R,maxR:T===-1/0?null:T,maxAngle:A.length?Math.max(...A):null,boundary:P,seam:V,nm:y,mirroredIsl:E,islands:r.islands.length,flippedFaces:G(z),overlapFaces:G(j),degFaces:G(J)}},[i,r]),c=we.useMemo(()=>{if(!i||!r||s.size===0)return null;const u=[];i.faces.forEach(S=>{s.has(S.id)&&i.triangles.forEach(R=>{R.faceId===S.id&&u.push(R.id)})});const v=HA(u.map(S=>r.metrics[S])),x=u.length===1?r.metrics[u[0]]:null;return{agg:v,one:x,triCount:u.length}},[i,r,s]);if(!i||!r||!l||!a)return O.jsx("aside",{className:"panel",children:"尚未载入模型。"});const f=a.rules,d=u=>n(iv({...f,...u})),h=u=>u!==null&&(u<f.minRatio||u>f.maxRatio),p=u=>u!==null&&u>f.maxAngle,g=u=>{u.length&&e(new Set(u))},_=()=>{const u=ky(i,r,a),v=i.fileName.replace(/\.obj$/i,"")||"model";Oy(`${v}_check.json`,JSON.stringify(u,null,2),"application/json;charset=utf-8")},m=u=>u?"bad":"ok";return O.jsxs("aside",{className:"panel",children:[O.jsxs("section",{children:[O.jsx("h3",{children:"拓扑"}),O.jsx(Pt,{k:"顶点身份 (v)",v:i.vertexCount}),O.jsx(Pt,{k:"角点 (corner)",v:i.corners.length,hint:"接缝两侧可为同 v 不同 vt"}),O.jsx(Pt,{k:"原始面 / 三角形",v:`${i.faces.length} / ${i.triangles.length}`}),O.jsx(Pt,{k:"UV 顶点 (vt)",v:i.uvCount}),O.jsx(Pt,{k:"UV 来源",v:i.uvOrigin==="obj"?"OBJ/编辑":"平面回退"})]}),O.jsxs("section",{children:[O.jsx("h3",{children:"边（按顶点身份+空间近邻）"}),O.jsx(Pt,{k:"UV 岛",v:l.islands}),O.jsx(Pt,{k:"边界边",v:l.boundary}),O.jsx(Pt,{k:"共享边接缝",v:l.seam,cls:l.seam?"warn":"ok"}),O.jsx(Pt,{k:"非流形边",v:l.nm,cls:m(l.nm===0),hint:"≥3 个三角形共享的 3D 边"})]}),O.jsxs("section",{children:[O.jsx("h3",{children:"本次检查规则（仅判定，不改 UV）"}),O.jsxs("div",{className:"rule-row",children:[O.jsx("span",{className:"k",children:"面积比率允许区间"}),O.jsxs("span",{className:"rule-range",children:[O.jsx(Eu,{value:f.minRatio,onCommit:u=>d({minRatio:u}),step:.05,min:1e-6,max:1e6,testid:"rule-min-ratio"}),O.jsx("span",{className:"rule-x",children:"× ~"}),O.jsx(Eu,{value:f.maxRatio,onCommit:u=>d({maxRatio:u}),step:.05,min:1e-6,max:1e6,testid:"rule-max-ratio"}),O.jsx("span",{className:"rule-x",children:"×"})]})]}),O.jsxs("div",{className:"rule-row",children:[O.jsx("span",{className:"k",children:"最大角度偏差"}),O.jsxs("span",{className:"rule-range",children:[O.jsx(Eu,{value:f.maxAngle,onCommit:u=>d({maxAngle:u}),step:1,min:0,max:180,testid:"rule-max-angle"}),O.jsx("span",{className:"rule-x",children:"°"})]})]}),O.jsxs("div",{className:"rule-actions",children:[O.jsx("button",{className:"mini","data-testid":"rule-reset",onClick:()=>n(eh),children:"恢复默认 0.5×~2× / 15°"}),O.jsx("button",{className:"mini primary","data-testid":"export-json",onClick:_,children:"导出 JSON 摘要"})]}),O.jsxs("p",{className:"hint",children:["超限面 ",a.problemFaces.length,"（判定用三角形： 密度 ",a.areaTriCount," / 角度 ",a.angleTriCount,"）。 边界取等号不超限；调阈值只改判定，翻转/重叠/退化算法不变。"]})]}),O.jsxs("section",{children:[O.jsx("h3",{children:"UV 健康"}),O.jsx(io,{label:"面积密度超限面",value:a.areaFaceIds.length,bad:a.areaFaceIds.length>0,onLocate:()=>g(a.areaFaceIds),hint:`区间 ${f.minRatio}× ~ ${f.maxRatio}×，含边界`}),O.jsx(io,{label:"角度偏差超限面",value:a.angleFaceIds.length,bad:a.angleFaceIds.length>0,onLocate:()=>g(a.angleFaceIds),hint:`最大允许 ${f.maxAngle}°，含边界`}),O.jsx(io,{label:"翻转三角形 / 镜像岛",value:`${l.flipped} / ${l.mirroredIsl}`,bad:l.flipped>0,onLocate:()=>l.flippedFaces.size&&e(l.flippedFaces)}),O.jsx(io,{label:"岛间重叠三角形",value:l.overlap,bad:l.overlap>0,onLocate:()=>l.overlapFaces.size&&e(l.overlapFaces)}),O.jsx(io,{label:"退化（3D / UV）",value:`${l.deg3} / ${l.degUv}`,bad:l.deg3+l.degUv>0,onLocate:()=>l.degFaces.size&&e(l.degFaces),hint:"退化面不参与比率与角度计算，也不会算成密度超限"}),a.problemFaces.length>0&&O.jsx("ul",{className:"problem-list","data-testid":"problem-list",children:a.problemFaces.map(u=>{const v=s.has(u.faceId);return O.jsx("li",{children:O.jsxs("button",{className:`problem-item${v?" selected":""}`,"data-testid":`problem-face-${u.faceId}`,onClick:()=>e(new Set([u.faceId])),title:"点击在 3D / 2D 双视图定位该面",children:[O.jsxs("span",{className:"pf-id",children:["#",u.faceId+1]}),O.jsx("span",{className:"pf-tags",children:u.issues.map(x=>O.jsx("i",{className:`tag ${x}`,children:VA[x]},x))}),O.jsxs("span",{className:"pf-metric",children:[hn(u.areaMin,2),"–",hn(u.areaMax,2),"×"," · ",hn(u.angleMax,1),"°"]})]})},u.faceId)})})]}),O.jsxs("section",{children:[O.jsx("h3",{children:"面积畸变（纹素密度）"}),O.jsx(Pt,{k:"全局相对尺度",v:hn(r.globalScale,4),hint:"中位 3D/UV 面积比"}),O.jsx(Pt,{k:"最小 / 最大比率",v:`${hn(l.minR)}× / ${hn(l.maxR)}×`,cls:h(l.minR)||h(l.maxR)?"warn":"ok"}),O.jsx("p",{className:"hint",children:"比率 1× = 与中位密度一致；0.5× 偏稀，2× 偏密。 指标数值不随阈值改变。"})]}),O.jsxs("section",{children:[O.jsx("h3",{children:"角度畸变"}),O.jsx(Pt,{k:"全模型最大内角偏差",v:`${hn(l.maxAngle,1)}°`,cls:p(l.maxAngle)?"warn":"ok"}),O.jsx("p",{className:"hint",children:"对应 3D/UV 内角最大差值；0° 为保角映射。"})]}),O.jsxs("section",{children:[O.jsxs("h3",{children:["选中面",s.size>0?`（${s.size} 面 / ${(c==null?void 0:c.triCount)??0} 三角）`:""]}),!c&&O.jsx("p",{className:"hint",children:"在任一视图点选面；Shift+点击加选。"}),(c==null?void 0:c.one)&&O.jsxs(O.Fragment,{children:[O.jsx(Pt,{k:"面积畸变比率",v:c.one.areaRatio===null?"退化":`${hn(c.one.areaRatio)}×`,hint:BA(c.one.areaRatio),cls:h(c.one.areaRatio)?"warn":void 0}),O.jsx(Pt,{k:"角度畸变",v:c.one.angleDistortion===null?"退化":`${hn(c.one.angleDistortion,1)}°`,cls:p(c.one.angleDistortion)?"warn":void 0}),O.jsx(Pt,{k:"3D / UV 面积",v:`${hn(c.one.area3d,5)} / ${hn(c.one.areaUv,5)}`}),O.jsx(Pt,{k:"翻转",v:c.one.flipped?"是":"否",cls:c.one.flipped?"bad":"ok"})]}),c&&!c.one&&O.jsxs(O.Fragment,{children:[O.jsx(Pt,{k:"最大面积比率",v:`${hn(c.agg.maxRatio)}×`}),O.jsx(Pt,{k:"最大角度畸变",v:`${hn(c.agg.maxAngle,1)}°`}),O.jsx("p",{className:"hint",children:"多选显示聚合峰值；点单一面查看个体数值。"})]})]})]})}function Pt({k:t,v:e,cls:n,hint:i}){return O.jsxs("div",{className:`row ${n??""}`,children:[O.jsx("span",{className:"k",children:t}),O.jsx("span",{className:"v",title:i,children:e})]})}function io({label:t,value:e,bad:n,onLocate:i,hint:r}){return O.jsxs("div",{className:`row issue ${n?"bad":"ok"}`,title:r,children:[O.jsx("span",{className:"k",children:t}),O.jsxs("span",{className:"v",children:[e,n&&O.jsx("button",{className:"locate",onClick:i,children:"定位"})]})]})}function WA(){const{state:t,notify:e}=Fr();return we.useEffect(()=>{if(!t.notice)return;const n=setTimeout(()=>e(null),t.notice.kind==="error"?6e3:3500);return()=>clearTimeout(n)},[t.notice,e]),t.notice?O.jsx("div",{className:`notice ${t.notice.kind}`,children:t.notice.text}):null}function jA(){return O.jsxs("div",{className:"legend",children:[O.jsxs("span",{children:[O.jsx("i",{className:"sw boundary"})," 边界"]}),O.jsxs("span",{children:[O.jsx("i",{className:"sw seam"})," 共享边接缝"]}),O.jsxs("span",{children:[O.jsx("i",{className:"sw nonmanifold"})," 非流形边"]}),O.jsxs("span",{children:[O.jsx("i",{className:"sw flipped"})," 翻转"]}),O.jsxs("span",{children:[O.jsx("i",{className:"sw overlap"})," 岛间重叠"]}),O.jsxs("span",{children:[O.jsx("i",{className:"sw rule"})," 规则超限"]}),O.jsxs("span",{children:[O.jsx("i",{className:"sw selected"})," 选中"]})]})}function XA(){const{loadObjText:t}=Fr();return O.jsxs("div",{className:"empty",children:[O.jsx("h2",{children:"本地低模 UV 检查"}),O.jsx("p",{children:"载入一个 OBJ 子集（v / vt / vn / f，支持 n 边形与负索引）， 或从样例开始。顶点身份来自 v 行，接缝两侧角点可共享顶点但带不同 UV， 工具绝不会按空间位置合并顶点。"}),O.jsx("div",{className:"sample-grid",children:sv.map(e=>O.jsxs("button",{onClick:()=>t(e.obj,`${e.id}.obj`),children:[O.jsx("b",{children:e.label}),O.jsx("small",{children:e.description})]},e.id))}),O.jsx("p",{className:"hint",children:"xatlas WASM 自动展开为可选项，失败时原模型与原 UV 原样保留； 工程存于浏览器 IndexedDB，无后端。导出的 OBJ 可在 Blender/Maya 等 标准工具中重新载入验证。"})]})}function $A(){const{state:t}=Fr();return t.mesh?O.jsxs("div",{className:"workspace",children:[O.jsxs("div",{className:"views",children:[O.jsx(OA,{}),O.jsx(kA,{}),O.jsx(jA,{})]}),O.jsx(GA,{})]}):O.jsx(XA,{})}function YA(){return O.jsx(eS,{children:O.jsxs("div",{className:"app",children:[O.jsx(oS,{}),O.jsx($A,{}),O.jsx(WA,{})]})})}wu.createRoot(document.getElementById("root")).render(O.jsx(c0.StrictMode,{children:O.jsx(YA,{})}));export{Hy as _};
