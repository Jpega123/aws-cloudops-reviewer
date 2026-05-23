var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function te(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ne(e,t){return te(e.type,t,e.props)}function T(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function se(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,se(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ae(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(ie,`$&/`)+`/`),se(o,r,i,``,function(e){return e})):o!=null&&(T(o)&&(o=ne(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ae(a,u),c+=se(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ae(a,u++),c+=se(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return se(oe(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return se(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},D={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!T(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=D,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return te(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return te(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=T,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,E)}catch(e){E(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,T());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}var S=!1,C=-1,w=5,ee=-1;function te(){return g?!0:!(e.unstable_now()-ee<w)}function ne(){if(g=!1,S){var t=e.unstable_now();ee=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&te());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?T():S=!1}}}var T;if(typeof y==`function`)T=function(){y(ne)};else if(typeof MessageChannel<`u`){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=ne,T=function(){ie.postMessage(null)}}else T=function(){_(ne,0)};function ae(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,T()))),r},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),ee=Symbol.for(`react.suspense`),te=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),T=Symbol.for(`react.lazy`),re=Symbol.for(`react.activity`),ie=Symbol.for(`react.memo_cache_sentinel`),ae=Symbol.iterator;function oe(e){return typeof e!=`object`||!e?null:(e=ae&&e[ae]||e[`@@iterator`],typeof e==`function`?e:null)}var se=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ee:return`Suspense`;case te:return`SuspenseList`;case re:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case T:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,E=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue={pending:!1,data:null,method:null,action:null},de=[],fe=-1;function pe(e){return{current:e}}function O(e){0>fe||(e.current=de[fe],de[fe]=null,fe--)}function k(e,t){fe++,de[fe]=e.current,e.current=t}var me=pe(null),he=pe(null),ge=pe(null),_e=pe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}O(me),k(me,e)}function ye(){O(me),O(he),O(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(O(me),O(he)),_e.current===e&&(O(_e),Qf._currentValue=ue)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function Ge(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,Ze=262144,Qe=4194304;function $e(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function et(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=$e(n))):i=$e(o):i=$e(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=$e(n))):i=$e(o)):i=$e(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Qe;return Qe<<=1,!(Qe&62914560)&&(Qe=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=D.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function pt(e,t){var n=D.p;try{return D.p=e,t()}finally{D.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt;function Ct(e){delete e[ht],delete e[gt],delete e[vt],delete e[yt],delete e[bt]}function wt(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ht])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ot(e){e[St]=!0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}function Lt(e,t,n){if(It(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Rt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Bt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Vt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ht(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ut(e){if(!e._valueTracker){var t=Vt(e)?`checked`:`value`;e._valueTracker=Ht(e,t,``+e[t])}}function Wt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Vt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Gt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Kt=/[\n"\\]/g;function qt(e){return e.replace(Kt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Jt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Bt(t)):e.value!==``+Bt(t)&&(e.value=``+Bt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Xt(e,o,Bt(n)):Xt(e,o,Bt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Bt(s):e.removeAttribute(`name`)}function Yt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ut(e);return}n=n==null?``:``+Bt(n),t=t==null?n:``+Bt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ut(e)}function Xt(e,t,n){t===`number`&&Gt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Zt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qt(e,t,n){if(t!=null&&(t=``+Bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Bt(n)}function $t(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ut(e)}function en(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function nn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||tn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function rn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&nn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&nn(e,o,t[o])}function an(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var on=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cn(e){return sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function ln(){}var un=null;function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Jt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Jt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Wt(r)}break a;case`textarea`:Qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function vr(e){if(Wt(Et(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(vn){var xr;if(vn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,dn(e)),gn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gt(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=vn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Gt(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&Mr(Vr,r)||(Vr=r,r=Ed(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};vn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},oi=[],si=0,ci=0;function li(){for(var e=si,t=ci=si=0;t<e;){var n=oi[t];oi[t++]=null;var r=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&pi(n,i,a)}}function ui(e,t,n,r){oi[si++]=e,oi[si++]=t,oi[si++]=n,oi[si++]=r,ci|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function di(e,t,n,r){return ui(e,t,n,r),mi(e)}function fi(e,t){return ui(e,null,null,t),mi(e)}function pi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function mi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var hi={};function gi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(e,t,n,r){return new gi(e,t,n,r)}function vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yi(e,t){var n=e.alternate;return n===null?(n=_i(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)vi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case re:return e=_i(31,n,t,a),e.elementType=re,e.lanes=o,e;case y:return Si(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=_i(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ee:return e=_i(13,n,t,a),e.elementType=ee,e.lanes=o,e;case te:return e=_i(19,n,t,a),e.elementType=te,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case ne:s=14;break a;case T:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=_i(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Si(e,t,n,r){return e=_i(7,e,r,t),e.lanes=n,e}function Ci(e,t,n){return e=_i(6,e,null,t),e.lanes=n,e}function wi(e){var t=_i(18,null,null,0);return t.stateNode=e,t}function Ti(e,t,n){return t=_i(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ei=new WeakMap;function Di(e,t){if(typeof e==`object`&&e){var n=Ei.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ei.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Oi=[],ki=0,Ai=null,ji=0,Mi=[],Ni=0,Pi=null,Fi=1,Ii=``;function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Ai,Ai=e,ji=t}function Ri(e,t,n){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Pi=e;var r=Fi;e=Ii;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fi=1<<32-Ke(t)+i|n<<i|r,Ii=a+e}else Fi=1<<a|n<<i|r,Ii=e}function zi(e){e.return!==null&&(Li(e,1),Ri(e,1,0))}function Bi(e){for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null;for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Ii=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null}function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Ii,Mi[Ni++]=Pi,Fi=t.id,Ii=t.overflow,Pi=e}var Hi=null,A=null,j=!1,Ui=null,Wi=!1,Gi=Error(i(519));function Ki(e){throw Qi(Di(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Gi}function qi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),$t(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=ln),t=!0):t=!1,t||Ki(e,!0)}function Ji(e){for(Hi=e.return;Hi;)switch(Hi.tag){case 5:case 31:case 13:Wi=!1;return;case 27:case 3:Wi=!0;return;default:Hi=Hi.return}}function Yi(e){if(e!==Hi)return!1;if(!j)return Ji(e),j=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&A&&Ki(e),Ji(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));A=uf(e)}else t===27?(t=A,Zd(e.type)?(e=lf,lf=null,A=e):A=t):A=Hi?cf(e.stateNode.nextSibling):null;return!0}function Xi(){A=Hi=null,j=!1}function Zi(){var e=Ui;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Ui=null),e}function Qi(e){Ui===null?Ui=[e]:Ui.push(e)}var $i=pe(null),ea=null,ta=null;function na(e,t,n){k($i,t._currentValue),t._currentValue=n}function ra(e){e._currentValue=$i.current,O($i)}function ia(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function aa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ia(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ia(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&aa(t,e,n,r),t.flags|=262144}function sa(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ca(e){ea=e,ta=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function la(e){return da(ea,e)}function ua(e,t){return ea===null&&ca(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ta===null){if(e===null)throw Error(i(308));ta=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ta=ta.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=E.S;E.S=function(e,t){tu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=pe(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?k(Ta,Ta.current):k(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(i(460)),Aa=Error(i(474)),ja=Error(i(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ln,ln),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(ln,ln);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(i(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(i(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=yi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===T&&Fa(i)===t.type)?(t=a(t,n.props),Ha(t,n),t.return=e,t):(t=xi(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ti(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Si(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ci(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=xi(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ti(t,e.mode,n),t.return=e,t;case T:return t=Fa(t),f(e,t,n)}if(le(t)||oe(t))return t=Si(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===C)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case T:return n=Fa(n),p(e,t,n,r)}if(le(n)||oe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===C)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case T:return r=Fa(r),m(e,t,n,r,i)}if(le(r)||oe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===C)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),j&&Li(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return j&&Li(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),j&&Li(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),j&&Li(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return j&&Li(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),j&&Li(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===T&&Fa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ha(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=Si(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=xi(o.type,o.key,o.props,null,e.mode,c),Ha(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ti(o,e.mode,c),c.return=e,e=c}return s(e);case T:return o=Fa(o),b(e,r,o,c)}if(le(o))return h(e,r,o,c);if(oe(o)){if(l=oe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Va(o),c);if(o.$$typeof===C)return b(e,r,ua(e,o),c);Ua(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ci(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=_i(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=mi(e),pi(e,null,n),t}return ui(e,r,t,n),mi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=pe(null),oo=pe(0);function so(e,t){e=Gl,k(oo,e),k(ao,t),Gl=e|t.baseLanes}function co(){k(oo,Gl),k(ao,ao.current)}function lo(){Gl=oo.current,O(ao),O(oo)}var uo=pe(null),fo=null;function po(e){var t=e.alternate;k(N,N.current&1),k(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){k(N,N.current),k(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(k(N,N.current),k(uo,e),fo===null&&(fo=e)):go(e)}function go(){k(N,N.current),k(uo,uo.current)}function _o(e){O(uo),fo===e&&(fo=null),O(N)}var N=pe(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(i(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){E.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(i(300));e===null||z||(e=e.dependencies,e!==null&&sa(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,I=F=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}E.H=Ks,o=t(n,r)}while(xo);return o}function jo(){var e=E.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(i(467)):Error(i(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===C)return la(e)}throw Error(i(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(z=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wo(e,t,n){var r=P,a=R(),o=j;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((F||a).memoizedState,n);if(s&&(a.memoizedState=n,z=!0),a=a.queue,hs(qo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function Yo(e){var t=fi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){Ge(!0);try{n()}finally{Ge(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,a){if(Bs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};E.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,$o(t,o)):(o.next=n.next,t.pending=n.next=o)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=E.T,o={};E.T=o;try{var s=n(i,r),c=E.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),E.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(j){var n=G.formState;if(n!==null){a:{var r=P;if(j){if(A){b:{for(var i=A,a=Wi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){A=cf(i.nextSibling),r=i.data===`F!`;break a}}Ki(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return jr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),jr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=D.p;D.p=a!==0&&8>a?a:8;var o=E.T,s={};E.T=s,zs(e,!1,t,n);try{var c=i(),l=E.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{D.p=a,o!==null&&s.types!==null&&(o.types=s.types),E.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=As(e).queue;Ds(e,a,t,ue,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ue,baseState:ue,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:ue},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return la(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=di(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return ui(e,t,i,0),G===null&&li(),!1}catch{}if(n=di(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(i(479))}else t=di(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var Us={readContext:la,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:la,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:la,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){Ge(!0);try{e()}finally{Ge(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){Ge(!0);try{n(t)}finally{Ge(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,a=Fo();if(j){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Go(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ms(qo.bind(null,r,o,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,o,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(j){var n=Ii,r=Fi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:la,use:Ro,useCallback:Cs,useContext:la,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){ai(e)}function $s(e){console.error(e)}function ec(e){ai(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&oa(t,n,a,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(j)return t=uo.current,t===null?(r!==Gi&&(t=Error(i(423),{cause:r}),Qi(Di(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Di(r,n),a=rc(e.stateNode,r,a),$a(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Gi&&(e=Error(i(422),{cause:r}),Qi(Di(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Di(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Di(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=ic(a),ac(a,e,n,r),$a(n,a),!1}n=n.return}while(n!==null);return!1}var sc=Error(i(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ca(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&s&&zi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!vi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=xi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=yi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&oa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(j){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return t.lanes=536870912,null}return hc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(mo(t),a)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(z||oa(e,t,n,!1),a=(n&e.childLanes)!==0,z||a){if(r=G,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,fi(e,s),hu(r,e,s),sc;Du(),t=gc(e,t,n)}else e=o.treeContext,A=cf(s.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=yi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return ca(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return ca(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(j&&r&&zi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(ca(t),t.stateNode===null){var a=hi,o=n.contextType;typeof o==`object`&&o&&(a=la(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?la(o):hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=hi,typeof u==`object`&&u&&(o=la(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=hi,typeof l==`object`&&l&&(c=la(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&sa(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Xi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(j){if(a?po(t):go(t),(e=A)?(e=rf(e,Wi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pi===null?null:{id:Fi,overflow:Ii},retryLane:536870912,hydrationErrors:null},n=wi(e),n.return=t,t.child=n,Hi=t,A=null)):e=null,e===null)throw Ki(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(go(t),a=t.mode,c=Oc({mode:`hidden`,children:c},a),r=Si(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,a=t.mode,r=Oc({mode:`visible`,children:r.children},a),c=Si(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,s,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Qi({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||oa(e,t,n,!1),s=(n&e.childLanes)!==0,z||s){if(s=G,s!==null&&(r=lt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,fi(e,r),hu(s,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,A=cf(c.nextSibling),Hi=t,j=!0,Ui=null,Wi=!1,e!==null&&Vi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return a?(go(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=yi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Si(c,a,n,null),c.flags|=2):c=yi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(a=c.cachePool,a===null?a=Oa():(l=M._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Tc(e,s,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=yi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=_i(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ia(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(N,o),cc(e,t,r,n),r=j?ji:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(oa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=yi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=yi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&sa(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),na(t,M,e.memoizedState.cache),Xi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(oa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:na(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,j&&t.flags&1048576&&Ri(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)vi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=lc(null,t,e,r,n);break a}else if(a===ne){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Zs(r,t.pendingProps),xc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ya(e,t),no(t,r,null,n);var s=t.memoizedState;if(r=s.cache,na(t,M,r),r!==o.cache&&aa(t,[M],n,!0),to(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==a){a=Di(Error(i(424)),t),Qi(a),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(A=cf(e.firstChild),Hi=t,j=!0,Ui=null,Wi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xi(),r===a){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:j||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[ht]=t,r[gt]=e,Pd(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&j&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Hi=t,Wi=!0,a=A,Zd(t.type)?(lf=a,A=cf(r.firstChild)):A=a),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((a=r=A)&&(r=tf(r,t.type,t.pendingProps,Wi),r===null?a=!1:(t.stateNode=r,Hi=t,A=cf(r.firstChild),Wi=!1,a=!0)),a||Ki(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Oo(e,t,jo,null,null,n),Qf._currentValue=a),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&j&&((e=n=A)&&(n=nf(n,t.pendingProps,Wi),n===null?e=!1:(t.stateNode=n,Hi=t,A=null,e=!0)),e||Ki(t)),null;case 13:return Ec(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,na(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ca(t),a=la(a),r=r(a),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return ca(t),r=la(M),e===null?(a=Ea(),a===null&&(a=G,o=ha(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ja(t),na(t,M,a)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,na(t,M,r),r!==a.cache&&aa(t,[M],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),na(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!j)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Bi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ra(M),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Zi())),B(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Lc(t),o===null?(B(t),Rc(t,a,null,r,n)):(B(t),zc(t,o))):o?o===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,o)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}e=me.current,Yi(t)?qi(t,e):(e=ff(a,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return B(t),null}if(o=me.current,Yi(t))qi(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Yi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Hi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Ki(t,!0)}else e=Bd(e).createTextNode(r),e[ht]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Yi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(i(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Yi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else Xi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),a=!1}else a=Zi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ra(t.type),B(t),null;case 19:if(O(N),r=t.memoizedState,r===null)return B(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=vo(e),o!==null){for(t.flags|=128,Vc(r,!1),e=o.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)bi(n,e),n=n.sibling;return k(N,N.current&1|2),j&&Li(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>nu&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304)}else{if(!a)if(e=vo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!j)return B(t),null}else 2*Pe()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=N.current,k(N,a?n&1|2:n&1),j&&Li(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&O(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ra(M),B(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Uc(e,t){switch(Bi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra(M),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Xi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(N),null;case 4:return ye(),null;case 10:return ra(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&O(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Bi(t),t.tag){case 3:ra(M),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:O(N);break;case 10:ra(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&O(Ta);break;case 24:ra(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[gt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ln));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ht]=e,t[gt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Ir(e),Lr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Zs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[St]||o[ht]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ht]=e,Ot(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ht]=e,Ot(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){a=e.stateNode;try{en(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||a,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;nl(e,el(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(en(o,``),n.flags&=-33),nl(e,el(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;tl(e,el(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=la(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return la(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:E.T===null?ft():dd()}function mu(){if(Yl===0)if(!(q&536870912)||j){var e=Ze;Ze<<=1,!(Ze&3932160)&&(Ze=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),at(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||tt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Pe(),10<a)){if(yu(r,t,Yl,!Hl),et(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ln},Nl(t,a,d);var m=(a&62914560)===a?eu-Pe():(a&4194048)===a?tu-Pe():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ta=ea=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=yi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=tt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ke(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,li(),n}function Cu(e,t){P=null,E.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Di(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=E.H;return E.H=Us,e===null?Us:e}function Eu(){var e=E.A;return E.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ta=ea=null,W=r,E.H=i,E.A=a,K===null&&(G=null,q=0,li()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Pe()+500,Su(e,t)):Ul=tt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Na(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ta=ea=null,E.H=r,E.A=a,W=n,K===null?(G=null,q=0,li(),Y):0}function ju(){for(;K!==null&&!Me();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=bi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ta=ea=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Di(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Di(n,e.current)),K=null;return}t.flags&32768?(j||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ci,ot(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=E.T,E.T=null,a=D.p,D.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,D.p=a,E.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Ir(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,D.p=r,E.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=E.T,E.T=null;var r=D.p;D.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,D.p=r,E.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Ne();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),dt(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=E.T,i=D.p,D.p=2,E.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{E.T=t,D.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=dt(su),r=E.T,a=D.p;try{D.p=32>n?32:n,E.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{D.p=a,E.T=r,Vu(e,t)}}function Wu(e,t,n){t=Di(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(at(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Di(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),at(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Pe()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=rt()),e=fi(e,t),e!==null&&(at(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Ae(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=et(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Pe(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=et(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),dt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=et(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Ae(Ie,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:cn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ri.length;hd++){var gd=ri[hd];ii(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ai(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,kt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=dn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==un&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[_t]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?wt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Et(l),h=u==null?c:Et(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=yr;else if(pr(c))if(br)v=kr;else{v=Dr;var y=Er}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&an(r.elementType)&&(v=yr):v=Or;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Xt(c,`number`,c.value)}switch(y=r?Et(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(zr=y,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||en(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&en(e,``+r);break;case`className`:Rt(e,`class`,r);break;case`tabIndex`:Rt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Rt(e,n,r);break;case`style`:rn(e,r,o);break;case`data`:if(t!==`object`){Rt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=cn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=cn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Lt(e,`popover`,r);break;case`xlinkActuate`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Lt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=on.get(n)||n,Lt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:rn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?en(e,r):(typeof r==`number`||typeof r==`bigint`)&&en(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=ln);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[gt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Lt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Yt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Zt(e,!!r,n,!0):Zt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}$t(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(an(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Jt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Zt(e,!!n,n?[]:``,!1):Zt(e,!!n,t,!0)):Zt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(an(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=D.d;D.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+qt(n.imageSizes)+`"]`)):i+=`[href="`+qt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Ot(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+qt(r)+`"][href="`+qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Ot(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Dt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Ot(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Dt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Ot(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Dt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Dt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+qt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Ot(t),e.head.appendChild(t))}function Pf(e){return`[src="`+qt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+qt(n.href)+`"]`);if(r)return t.instance=r,Ot(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ot(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Ot(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Ot(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Ot(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ot(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ot(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Ot(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ue,_currentValue2:ue,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=_i(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=hi,e):hi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=fi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ut(t);var n=fi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=2,up(e,t,n,r)}finally{D.p=a,E.T=i}}function lp(e,t,n,r){var i=E.T;E.T=null;var a=D.p;try{D.p=8,up(e,t,n,r)}finally{D.p=a,E.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=$e(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Pe()+500,id(0,!1))}}break;case 31:case 13:s=fi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=dn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);un=r,n.target.dispatchEvent(r),un=null}else return t=Tt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[_t]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));D.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:E,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ue=zp.inject(Rp),We=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Qs,s=$s,c=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[_t]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=c(g(),1),y=`# AWS Certified CloudOps Engineer Associate (SOA-C03) – Complete Study Guide

> **Source:** Stephane Maarek's AWS CloudOps Engineer Associate Course (v4.0)
> **Exam Code:** SOA-C03 | **Prepared for:** 2026 Exam
> **Purpose:** Feed this markdown to Claude Code to build a React-based interactive reviewer.

---

## INSTRUCTIONS FOR CLAUDE CODE

Build a React-based AWS SOA-C03 exam reviewer with the following features:

1. **Topic Browser** – Sidebar or tabbed navigation through all 20 major sections
2. **Flashcard Mode** – Show slide title/concept as front, content as back; flip on click
3. **Quiz Mode** – AI-generated MCQs based on content (4 options, explanation on answer)
4. **Search** – Full-text search across all topics
5. **Progress Tracker** – Mark topics as studied; persist in localStorage
6. **Quick Reference** – Key facts, limits, and numbers highlighted for quick review

Use Tailwind CSS for styling. Make it look professional with an AWS-inspired color scheme (orange #FF9900, dark navy #232F3E).
The content below is organized by section. Each \`###\` heading is a topic/slide title.

---

## Table of Contents

- [1. Amazon EC2 for CloudOps](#1-amazon-ec2-for-cloudops)
- [2. Amazon Machine Image (AMI)](#2-amazon-machine-image-ami)
- [3. AWS Systems Manager (SSM)](#3-aws-systems-manager-ssm)
- [4. High Availability & Scalability](#4-high-availability--scalability)
- [5. AWS CloudFormation](#5-aws-cloudformation)
- [6. AWS Lambda](#6-aws-lambda)
- [7. EC2 Storage & Data Management](#7-ec2-storage--data-management)
- [8. Amazon S3](#8-amazon-s3)
- [9. Amazon S3 – Advanced & Security](#9-amazon-s3--advanced--security)
- [10. Advanced Storage Solutions](#10-advanced-storage-solutions)
- [11. Amazon CloudFront](#11-amazon-cloudfront)
- [12. Databases in AWS](#12-databases-in-aws)
- [13. AWS Monitoring, Audit & Performance](#13-aws-monitoring-audit--performance)
- [14. AWS Account Management](#14-aws-account-management)
- [15. Disaster Recovery](#15-disaster-recovery)
- [16. Security & Compliance](#16-security--compliance)
- [17. Identity](#17-identity)
- [18. Amazon Route 53](#18-amazon-route-53)
- [19. Amazon VPC](#19-amazon-vpc)
- [20. Other Services](#20-other-services)
- [21. Exam Preparation](#21-exam-preparation)

---

## 1. Amazon EC2 for CloudOps

### Amazon EC2 for CloudOps

Rocking EC2 from a CloudOps perspective

### EC2 Changing Instance Type

t2.micro
t2.small
- This only works for EBS backed instances
- Stop the instance
- Instance Settings => Change Instance Type
- Start Instance

### Placement Groups

- Sometimes you want control over the EC2 Instance placement strategy
- That strategy can be defined using placement groups
- When you create a placement group, you specify one of the following
strategies for the group:
- Cluster—clusters instances into a low-latency group in a single Availability Zone
- Spread—spreads instances across underlying hardware (max 7 instances per
group per AZ) – critical applications
- Partition—spreads instances across many different partitions (which rely on
different sets of racks) within an AZ. Scales to 100s of EC2 instances per group
(Hadoop, Cassandra, Kafka)

### Cluster

Same AZ
Placement group
Cluster
Low latency
10 Gbps network
- Pros: Great network (10 Gbps bandwidth between instances with Enhanced
Networking enabled - recommended)
- Cons: If the AZ fails, all instances fails at the same time
- Use case:
- Big Data job that needs to complete fast
- Application that needs extremely low latency and high network throughput
Placement Groups

### Spread

- Pros:
- Can span across Availability
Zones (AZ)
- Reduced risk is simultaneous
failure
- EC2 Instances are on different
physical hardware
- Cons:
- Limited to 7 instances per AZ
per placement group
- Use case:
- Application that needs to
maximize high availability
- Critical Applications where
each instance must be isolated
from failure from each other
Placement Groups

### Partition

- Up to 7 partitions per AZ
- Can span across multiple AZs in the
same region
- Up to 100s of EC2 instances
- The instances in a partition do not
share racks with the instances in the
other partitions
- A partition failure can affect many
EC2 but won’t affect other partitions
- EC2 instances get access to the
partition information as metadata
- Use cases: HDFS, HBase, Cassandra,
Kafka
Placements Groups

### EC2 SSH troubleshooting

- Make sure the private key (pem file) on your linux machine has 400
permissions, else you will get “Unprotected private key file” error
- Make sure the username for the OS is given correctly when logging via SSH,
else you will get “Host key not found”, “Permission denied”, or “Connection
closed by [instance] port 22” error
- Possible reasons for “Connection timed out” to EC2 instance via SSH:
- SG is not configured correctly
- NACL is not configured correctly
- Check the route table for the subnet (routes traffic destined outside VPC to IGW)
- Instance doesn’t have a public IPv4
- CPU load of the instance is high

### SSH vs. EC2 Instance Connect

Connect using SSH
Connect using EC2 Instance Connect
Inbound Rules
Inbound Rules
Type
Protocol
Port
Source
SSH
TCP
Allows AWS IP Range
Type
Protocol
Port
Source
SSH
TCP
Security Group
User
EC2 Instance
Connect API
(IPv4: 1.2.3.4)
blocked
User
Security Group
EC2 Instance
EC2 Instance
EC2 Console,
EC2 Instance Connect CLI
(IPv4: 5.6.7.8)
User
(IPv4: 1.2.3.4)
push one-time
SSH public key
(valid for 60 secs)
"ip_prefix": "18.206.107.24/29",
"region": "us-east-1",
"service": "EC2_INSTANCE_CONNECT",
"network_border_group": "us-east-1"

### EC2 Instance Connect (EIC) Endpoint

- Allows you to connect securely to
your private EC2 instances
- No Internet Gateway, no NAT
Gateway, No Internet required
- EIC Endpoint Security Group: must
allow outbound SSH traffic to target
instances
- EC2 Instance Security Group: must
allow inbound SSH traffic from EIC
Endpoint Security Group
Administrator
Region
EC2 Instance Connect
Endpoint Service
VPC
Private Subnet
Private Subnet
EC2 Instance
Connect Endpoint
Instance
Instance

### CloudWatch Metrics for EC2

- AWS Provided metrics (AWS pushes them):
- Basic Monitoring (default): metrics are collected at a 5 minute internal
- Detailed Monitoring (paid): metrics are collected at a 1 minute interval
- Includes CPU, Network, Disk and Status Check Metrics
- Custom metric (yours to push):
- Basic Resolution: 1 minute resolution
- High Resolution: all the way to 1 second resolution
- Include RAM, application level metrics
- Make sure the IAM permissions on the EC2 instance role are correct !

### EC2 included metrics

- CPU: CPU Utilization + Credit Usage / Balance
- Network: Network In / Out
- Status Check:
- Instance status = check the EC2 VM
- System status = check the underlying hardware
- Attached EBS status = check attached EBS volumes
- Disk: Read / Write for Ops / Bytes (only for instance store)
- RAM is NOT included in the AWS EC2 metrics

### Unified CloudWatch Agent

- For virtual servers (EC2 instances, on-premises servers,
- Collect additional system-level metrics such as RAM,
processes, used disk space, etc.
- Collect logs to send to CloudWatch Logs
CloudWatch
push logs
- No logs from inside your EC2 instance will be sent to
CloudWatch Logs without using an agent
- Centralized configuration using SSM Parameter Store
- Make sure IAM permissions are correct
push metrics
Corporate Data Center
- Default namespace for metrics collected by the Unified
CloudWatch agent is CWAgent (can be
configured/changed)
EC2 Instance with
Unified CW Agent
Server with
Unified CW Agent

### Unified CloudWatch Agent – procstat Plugin

- Collect metrics and monitor system utilization of individual processes
- Supports both Linux and Windows servers
- Example: amount of time the process uses CPU, amount of memory the
process uses, …
- Select which processes to monitor by
- pid_file: name of process identification number (PID) files they create
- exe: process name that match string you specify (RegEx)
- pattern: command lines used to start the processes (RegEx)
- Metrics collected by procstat plugin begins with “procstat” prefix (e.g.,
procstat_cpu_time, procstat_cpu_usage, …)

### Status Checks

Hardware failure
- Automated checks to identify hardware and software issues
- System Status Checks
- Monitors problems with AWS systems (software/hardware
issues on the physical host, loss of system power, …)
- Check Personal Health Dashboard for any scheduled critical
maintenance by AWS to your instance’s host
- Resolution: stop and start the instance (instance migrated to a
new host)
Stop & Start
User
Host 1
- Instance Status Checks
migrate
- Monitors software/network configuration of your instance
(invalid network configuration, exhausted memory, …)
- Resolution: reboot the instance or change instance configuration
- Attached EBS Status Checks
- Monitors EBS volumes attached to your instance (reachable &
complete I/O Operations)
- Resolution: reboot the instance or replace affected EBS volumes
Host 2

### Status Checks - CW Metrics & Recovery

- CloudWatch Metrics (1 minute interval)
- StatusCheckFailed_System
- StatusCheckFailed_Instance
- StatusCheckFailed_AttachedEBS
- StatusCheckFailed (for any)
- Option 1: CloudWatch Alarm
EC2 Instance
Action:
recover
monitor
(StatusCheckFailed_System)
- Recover EC2 instance with the same private/public IP, EIP,
metadata, and Placement Group
- Send notifications using SNS
- Option 2: Auto Scaling Group
- Set min/max/desired 1 to recover an instance but won't keep the
same private and elastic IP
trigger
CloudWatch Alarm
send notification
Auto Scaling group
launch new instance
Amazon SNS
CloudWatch

### EC2 Hibernate

- We know we can stop, terminate instances
- Stop – s the data on disk (EBS) is kept intact in the next start
- Terminate – any EBS volumes (root) also set-up to be destroyed is lost
- On start, the following happens:
- First start: the OS boots & the EC2 User Data script is run
- Following starts: the OS boots up
- Then your application starts, caches get warmed up, and that can take time!

EC2 Instance
Running
- Introducing EC2 Hibernate:
- The in-memory (RAM) state is preserved
- The instance boot is much faster!
(the OS is not stopped / restarted)
- Under the hood: the RAM state is written
to a file in the root EBS volume
- The root EBS volume must be encrypted
- Use cases:
- Long-running processing
- Saving the RAM state
- Services that take time to initialize
RAM
Root EBS Volume
(Encrypted)
Hibernate
Stopping
RAM
RAM
Hibernation
Shutdown
Stopped
Start
Running
RAM
EC2 Hibernate

### EC2 Hibernate – Good to know

- Supported Instance Families – C3, C4, C5, I3, M3, M4, R3, R4, T2, T3, …
- Instance RAM Size – must be less than 150 GB.
- Instance Size – not supported for bare metal instances.
- AMI – Amazon Linux 2, Linux AMI, Ubuntu, RHEL, CentOS & Windows…
- Root Volume – must be EBS, encrypted, not instance store, and large
- Available for On-Demand, Reserved and Spot Instances
- An instance can NOT be hibernated more than 60 days

### Instance Scheduler on AWS

- AWS solution deployed through CloudFormation
(not a service)
- Automatically start/stop your AWS services to reduce
costs (up to 70%)
- Example: stop company’s EC2 instances outside
business hours
- Supports EC2 instances, EC2 Auto Scaling Groups,
and RDS instances
- Schedules are managed in a DynamoDB table
- Uses resources’ tags and Lambda to stop/start
instances
- Supports cross-account and cross-region resources
- tance-scheduler-on-aws/

## 2. Amazon Machine Image (AMI)

### AMI Overview

- AMI = Amazon Machine Image
- AMI are a customization of an EC2 instance
- You add your own software, configuration, operating system, monitoring…
- Faster boot / configuration time because all your software is pre-packaged
- AMI are built for a specific region (and can be copied across regions)
- You can launch EC2 instances from:
- A Public AMI: AWS provided
- Your own AMI: you make and maintain them yourself
- An AWS Marketplace AMI: an AMI someone else made (and potentially sells)

### AMI Process (from an EC2 instance)

- Start an EC2 instance and customize it
- Stop the instance (for data integrity)
- Build an AMI – this will also create EBS snapshots
- Launch instances from other AMIs
Custom AMI
US-EAST-1A
Create AMI
Launch
from AMI
US-EAST-1B

### AMI No-Reboot Option

- Enables you to create an AMI without shutting down your instance
- By default, it’s not selected (AWS will shut down the instance before
creating an AMI to maintain the file system integrity)
With No-Reboot Disabled (default)
With No-Reboot Enabled
EC2 Instance
(running)
EC2 Instance
(stopped)
EC2 Instance
(running)
shut down
snapshot
Attached
EBS Volume
Attached
EBS Volume
create
image
EBS Snapshot
Note: OS Buffers are not flushed to
disk before the snapshot is created
snapshot
AMI
Attached
EBS Volume
create
image
EBS Snapshot
AMI

### AWS Backup Plans to create AMI

- AWS Backup doesn't reboot
the instances while taking EBS
snapshots (no-reboot behavior)
- This won't help you to create an
AMI that guarantees file system
integrity since you need to reboot
the instance
- To maintain integrity you need to
provide the reboot parameter
while taking images (EventBridge
+ Lambda + CreateImage API
with reboot)
Create AMI
--no-reboot
AWS Backup
invoke
EventBridge
Rule (schedule)
Amazon EC2
Lambda Function
Create AMI
--reboot
Amazon EC2
(rebooting)
AMI
AMI

### EC2 Instance Migration between AZ

EC2 Instance
EC2 Instance
create image
launch/restore
AMI
EBS Volume
EBS Volume

### Cross-Account AMI Sharing

- You can share an AMI with another AWS
account
- Sharing an AMI does not affect the ownership of
the AMI
- You can only share AMIs that have unencrypted
volumes and volumes that are encrypted with a
customer managed key
- If you share an AMI with encrypted volumes,
you must also share any customer managed keys
used to encrypt them.
Account A
Source AMI
Share with
Account B
Account B
EC2 Instance
(AMI: Source AMI)

### AMI Sharing with KMS Encryption

Target
Source
Account A
Account B
Custom AMI
EBS Snapshot
(encrypted)
share
IAM Permissions
CMK - A
kms:DescribeKey
kms:CreateGrant
kms:Decrypt
kms:GenerateDataKey
kms:ReEncrypt
EC2 Instance
(AMI: Custom AMI)

### Cross-Account AMI Copy

- If you copy an AMI that has been shared with
your account, you are the owner of the target
AMI in your account
- The owner of the source AMI must grant you
read permissions for the storage that backs the
AMI (EBS Snapshot)
- If the shared AMI has encrypted snapshots, the
owner must share the key or keys with you as
well
- Can encrypt the AMI with your own CMK while
copying
Account A
Source AMI
EBS Snapshot
copy image
IAM Permissions
(read snapshot)
Account B
Copy of Source AMI
EBS Snapshot

### AMI Copy with KMS Encryption

Cross-Region / Cross-Account Encrypted AMI Copy
Source
Target
Account A
Account B
copy to
Custom AMI
EBS Snapshot
(encrypted)
share
Decrypt: CMK – A
Encrypt: CMK – B
Custom AMI
EBS Snapshot
(encrypted)
IAM Permissions
CMK - A
kms:DescribeKey
kms:CreateGrant
kms:Decrypt
CMK - B

### EC2 Image Builder

- Used to automate the creation of Virtual Machines or container images
- => Automate the creation, maintain, validate and test EC2 AMIs
- Can be run on a schedule (weekly, whenever packages are updated, etc…)
- Free service (only pay for the underlying resources)
Build Components applied
(customize software on instance)
create
EC2 Image Builder
Test suite is run
(is the AMI working, secure?)
create
Builder EC2 Instance
AMI is distributed
(can be multiple regions)
New AMI
Test EC2 Instance

### AMI in Production

Tags
- You can force users to only launch EC2
instances from pre-approved AMIs (AMIs
tagged with specific tags) using IAM policies
- Combine with AWS Config to find noncompliant EC2 instance (instances launched
with non-approved AMIs)
launch
AMI
(not approved)
Prod
AMI
(approved)
COMPLIANT
AWS Config
EC2 Instance
Environment
IAM Permissions
monitor
EC2 Instance
Value
launch
NON_COMPLIANT
launch
AMI
(approved)
AMI
(not approved)
Key
"Condition": {
"StringEquals": {
"ec2:ResourceTag/Environment": "Prod"

### Management of EC2 at Scale

Systems Manager

### AWS Systems Manager Overview

- Helps you manage your EC2 and On-Premises systems at scale
- Get operational insights about the state of your infrastructure
- Easily detect problems
- Patching automation for enhanced compliance
- Works for both Windows and Linux OS
- Integrated with CloudWatch metrics / dashboards
- Integrated with AWS Config
- Free service

---

## 3. AWS Systems Manager (SSM)

### AWS Systems Manager Features

- Node Tools
- Fleet Manager
- Compliance
- Inventory
- Hybrid Activations
- Session Manager
- Run Command
- State Manager
- Patch Manager
- Distributer
- Change Management
- Automation
- Change Calendar
- Maintenance Windows
- Documents
- Quick Setup
- Application Tools
- Application Manager
- AppConfig
- Parameter Store
- Resource Groups
- Operations Tools
- Explorer
- OpsCenter
- CloudWatch
Dashboard

### How Systems Manager works

- We need to install the SSM agent onto
the systems we control
- Installed by default on Amazon Linux 2
AMI & some Ubuntu AMI
- If an instance can’t be controlled with
SSM, it’s probably an issue with the SSM
agent!
- Make sure the EC2 instances have a
proper IAM role to allow SSM actions
AWS Systems Manager
IAM Permissions
EC2 Instance EC2 Instance On-premise
(SSM Agent)
(SSM Agent) Server/VM
(SSM Agent)

### AWS Tags

- You can add text key-value pairs called Tags to many AWS resources
- Commonly used in EC2
- Free naming, common tags are Name, Environment, Team …
- They’re used for
- Resource grouping
- Automation
- Cost allocation
- Better to have too many tags than too few!

### Resource Groups

- Create, view or manage logical group of resources
thanks to tags
- Allows creation of logical groups of resources such
- Applications
- Different layers of an application stack
- Production versus development environments
- Regional service
- Works with EC2, S3, DynamoDB, Lambda, etc…
Resource Group
Environment = Dev
EC2 Instances
Key
Value
Environment
Dev
Key
Value
Environment
Dev
Key
Value
Environment
Prod

### SSM – Documents

- Documents can be in JSON or YAML
- You define parameters
- You define actions
- Many documents already exist in AWS
Run Command
Documents
State Manager
Patch Manager
Automation
Parameter
Store

### SSM – Run Command

Amazon SNS
Amazon S3
t io
ica
t if
- Execute a document (= script) or just run a
command
- Run command across multiple instances (using
resource groups)
- Rate Control / Error Control
- Integrated with IAM & CloudTrail
- No need for SSH
- Command Output can be shown in the Console,
sent to S3 bucket or CloudWatch Logs
- Send notifications to SNS about command
statues (In progress, Success, Failed, …)
- Can be invoked using EventBridge
Event
EventBridge
trigger
output
Run Command
CloudWatch
Logs

### SSM - Automation

- Simplifies common maintenance and deployment
tasks of EC2 instances and other AWS resources
- Example: restart instances, create an AMI, EBS
snapshot
- Automation Runbook
- SSM Documents of type Automation
- Defines actions performed on your EC2 instances or
AWS resources
- Pre-defined runbooks (AWS) or create custom runbooks
- Can be triggered
- Manually using AWS Console, AWS CLI or SDK
- By Amazon EventBridge
- On a schedule using Maintenance Windows
- By AWS Config for rules remediations
AWS Console
AWS SDK Maintenance Amazon
AWS Config
Windows EventBridge Remediation
execute automation
(AWS-RestartEC2Instance)
Runbooks
(automation
documents)
execute
AWS Resources
EC2 Instances
SSM Automation
EBS
AMI
RDS

### SSM – Automation – Patch AMIs & Update ASG

IAM Role
(permissions)
Automation
orchestrate
Run Command
6. run script
5. terminate instance
2. install patches
AWS-RunPatchBaseline
1. launch
Source AMI
Launch
Template (new)
3. stop
EC2 Instance
8. EC2 instance refresh
4. create image
EC2 Instance
(stopped)
7. update
Patched AMI
Python Script
Auto Scaling
Group

### SSM Parameter Store

- Secure storage for configuration and secrets
- Optional Seamless Encryption using KMS
- Serverless, scalable, durable, easy SDK
- Version tracking of configurations / secrets
- Security through IAM
- Notifications with Amazon EventBridge
- Integration with CloudFormation
Applications
Plaintext
configuration
Check IAM
permissions
Encrypted
configuration
SSM Parameter
Store
Decryption
Service
AWS KMS

### SSM Parameter Store Hierarchy

- /my-department/
- my-app/
- dev/
- db-url
- db-password
- prod/
- db-url
- db-password
- other-app/
GetParameters or
GetParametersByPath API
Dev Lambda
Function
Prod Lambda
Function
- /other-department/
- /aws/reference/secretsmanager/secret_ID_in_Secrets_Manager
- /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2 (public)

### Standard and advanced parameter tiers

Standard
Advanced
Total number of parameters
allowed
(per AWS account and
Region)
10,000
100,000
Maximum size of a
parameter value
4 KB
8 KB
Parameter policies available
Yes
Cost
No additional charge
Charges apply
Storage Pricing
Free
$0.05 per advanced parameter per
month

### Parameters Policies (for advanced parameters)

- Allow to assign a TTL to a parameter (expiration date) to force
updating or deleting sensitive data such as passwords
- Can assign multiple policies at a time
Expiration (to delete a parameter)
ExpirationNotification (EventBridge)
NoChangeNotification (EventBridge)

### SSM – Fleet Manager

- Centrally & remotely manage your nodes running
on AWS or on-premises
- Including EC2 instances, on-premises servers / VMs,
edge devices, IoT devices
- Supports different OS (Windows, Linux)
- All nodes must be have the SSM agent installed
- AmazonSSMManagedInstanceCore permissions
necessary for the EC2 instance role, or use Default
Host Management Configuration feature
- Use cases:
- Track node’s status, health, performance
- Perform troubleshooting and management tasks
- Perform windows RDP or use Session Manager for CLI
Fleet Manager
Edge & IoT
Devices
EC2 Instance
(SSM Agent)
Virtual Machine
On-Premises
Server
(SSM Agent)
(SSM Agent)
(SSM Agent)

### SSM IAM Permissions

- AmazonSSMManagedInstanceCore policy provides the necessary
permissions for:
- Registering the instance with Systems Manager
- Accessing Session Manager, SSM Documents, SSM Parameters
- Receiving commands (Run Command)
- Allow Patching operations (Patch Manager)
- Report its data to Inventory, Compliance, and config status to SSM
- Sending heartbeat signals

### Default Host Management Configuration

- When enabled, it automatically configure your EC2
instances as managed instances without the use of EC2
Instance Profile
- Instance Identity Role – a type of IAM Role with no
permissions beyond identifying the EC2 instance to
AWS Services (e.g., Systems Manager)
- EC2 instances must have IMDSv2 enabled and SSM
Agent installed (doesn’t support IMDSv1)
- Automatically enables Session Manager, Patch Manager,
and Inventory
- Automatically keeps the SSM Agent up to date
- Must be enabled per AWS Region
Systems Manager
(DHMC enabled)
identify
pass IAM Role
AWSSystemsManagerDefault
EC2InstanceManagementRole
Instance
Identity Role
EC2 Instance
Systems Manager

### SSM – Inventory

- Collect metadata from your managed instances (EC2/On-premises)
- Metadata includes installed software, OS drivers, configurations, installed
updates, running services …
- View data in AWS Console or store in S3 and query and analyze using
Athena and QuickSight
- Specify metadata collection interval (minutes, hours, days)
- Query data from multiple AWS accounts and regions
- Create Custom Inventory for your custom metadata (e.g., rack location
of each managed instance)

### SSM – State Manager

- Automate the process of keeping your managed instances (EC2/Onpremises) in a state that you define
- Use cases: bootstrap instances with software, patch OS/software
updates on a schedule …
- State Manager Association:
- Defines the state that you want to maintain to your managed instances
- Example: port 22 must be closed, antivirus must be installed …
- Specify a schedule when this configuration is applied
- Uses SSM Documents to create an Association (e.g., SSM Document to
configure CW Agent)

### SSM – Patch Manager

- Automates the process of patching managed instances
- OS updates, applications updates, security updates, …
- Supports both EC2 instances and on-premises servers
- Supports Linux, macOS, and Windows
- Patch on-demand or on a schedule using Maintenance Windows
- Scan instances and generate patch compliance report (missing patches)
- Patch compliance report can be sent to S3

### SSM – Patch Manager

- Patch Baseline
- Defines which patches should and shouldn’t be installed on your instances
- Ability to create custom Patch Baselines (specify approved/rejected patches)
- Patches can be auto-approved within days of their release
- By default, install only critical patches and patches related to security
- Patch Group
- Associate a set of instances with a specific Patch Baseline
- Example: create Patch Groups for different environments (dev, test, prod)
- Instances should be defined with the tag key Patch Group
- An instance can only be in one Patch Group
- Patch Group can be registered with only one Patch Baseline

### SSM – Patch Manager Patch Baselines

- Pre-Defined Patch Baseline
- Managed by AWS for different Operating Systems (can’t be modified)
- AWS-RunPatchBaseline (SSM Document) – apply both operating system and
application patches (Linux, macOS, Windows Server)
- Custom Patch Baseline
- Create your own Patch Baseline and choose which patches to auto-approve
- Operating System, allowed patches, rejected patches, …
- Ability to specify custom and alternative patch repositories

Tags
Key
Value
Windows
Patch Group
Dev
pb-9876543210abcdef0
EC2 Instances
(with SSM Agent)
AWS Console
run Document
AWS-RunPatchBaseline
AWS SDK
Maintenance
Windows
Key
Value
Windows
SSM Agent query
for Batch Baselines
pb-0123456789abcdef0
Run Command
When using Maintenance Windows,
use Rate Control to specify the
max. number/percentage of
targets allowed to run in parallel
EC2 Instances
(with SSM Agent)
Patch Manager
Tags
Key
Value
Windows
Patch Group
Prod
pb-0123456789abcdef0
EC2 Instances
(with SSM Agent)
Tags
SSM – Patch Manager
Patch Baselines
Patch Baseline ID
Patch Group
Default
pb-0123456789abcdef0
Default
Yes
pb-9876543210abcdef0
Dev

### SSM – Maintenance Windows

- Defines a schedule for when to perform actions on your instances
- Example: OS patching, updating drivers, installing software, …
- Maintenance Window contains
- Schedule
- Duration
- Set of registered instances
- Set of registered tasks

### SSM – Session Manager

- Allows you to start a secure shell on your EC2 and onpremises servers
- Access through AWS Console, AWS CLI, or Session
Manager SDK
- Does not need SSH access, bastion hosts, or SSH keys
- Supports Linux, macOS, and Windows
- Log connections to your instances and executed
commands
- Session log data can be sent to S3 or CloudWatch Logs
- CloudTrail can intercept StartSession events
EC2 Instance
(SSM Agent)
Execute
commands
Session
Manager
IAM
Permissions
User

### SSM – Session Manager

- IAM Permissions
- Control which users/groups can
access Session Manager and which
instances
- Use tags to restrict access to only
specific EC2 instances
- Access SSM + write to S3 + write to
CloudWatch
- Optionally, you can restrict
commands a user can run in a
session

### (SSM Agent)

Connect using SSH
Inbound Rules
Type
Protocol
Port
Source
SSH
TCP
Connect using SSM Session Manager
Inbound Rules
CloudWatch
Logs
Amazon S3
Security Group
Type
Protocol
Port
Security Group
session log data
IAM Instance Profile
Source
SSH vs. SSM Session Manager
AmazonSSMManagedInstanceCore
User
(IPv4: 1.2.3.4)
EC2 Instance
Session
Manager
AWS Console,
AWS CLI,
or Session Manager SDK
User
EC2 Instance
IAM
Permissions

### SSM – Distributor

- Package and deploy software to your managed instances
- You create a Distributor Package (SSM Document) and
deploy to different platforms (Windows, Linux)
- Distributor Package
- Contents stored in S3
- Zip file per target OS platform (install script, uninstall script,
executable file)
- JSON manifest file that describes the package content
- Use AWS-provided packages, 3rd party packages, or create
your own package
- Install the package:
- One-time – using Run Command
- On a schedule – using State Manager (Document: AWSConfigureAWSPackage)
Distributor
Package
Run Command
State Manager
install
EC2 Instance

### Systems Manager – OpsCenter

- Allows you to view, investigate, and remediate issues in one place (no
need to navigate across different AWS services)
- Security issues (Security Hub), performance issues (DynamoDB
throttle), failures (ASG failed launch instance)...
- Reduce meantime to resolve issues
- OpsItems
- Operational issue or interruption that needs investigation and remediation
- Event, resource, AWS Config changes, CloudTrail logs, EventBridge...
- Provides recommended Runbooks to resolve the issue
- Supports both EC2 instances and on-premises managed nodes

### Systems Manager – OpsCenter

CloudWatch
& Application Insights
SSM Incident
Manager
trigger
EventBridge
DevOps Guru
Config
Security Hub
OpsCenter
SNS

### Costs by Deleting Orphaned EBS Volumes

invoke
Lambda Function
list EBS volumes
& search for
aged EBS volumes
Amazon EC2
AWS-CreateSnapshot
or Delete Snapshot
(EBS Volumes older than 45 days)
(periodically)
EventBridge
Run Document
create OpsItems
OpsCenter
Automation
Systems Manager – OpsCenter – Reduce

### High Availability & Scalability

Load Balancer and Auto Scaling Groups

---

## 4. High Availability & Scalability

### Scalability and High Availability Section

- Load Balancers:
- Troubleshooting
- Advanced options and logging
- CloudWatch integrations
- Auto Scaling
- Troubleshooting
- Advanced options and logging
- CloudWatch integrations

### Scalability & High Availability

- Scalability means that an application / system can handle greater loads
by adapting.
- There are two kinds of scalability:
- Vertical Scalability
- Horizontal Scalability (= elasticity)
- Scalability is linked but different to High Availability
- Let’s deep dive into the distinction, using a call center as an example

### Vertical Scalability

- Vertically scalability means increasing the size
of the instance
- For example, your application runs on a
t2.micro
- Scaling that application vertically means
running it on a t2.large
- Vertical scalability is very common for non
distributed systems, such as a database.
- RDS, ElastiCache are services that can scale
vertically.
- There’s usually a limit to how much you can
vertically scale (hardware limit)
junior operator
senior operator

### Horizontal Scalability

operator
operator
operator
operator
operator
operator
- Horizontal Scalability means increasing the
number of instances / systems for your
application
- Horizontal scaling implies distributed systems.
- This is very common for web applications /
modern applications
- It’s easy to horizontally scale thanks the cloud
offerings such as Amazon EC2

### High Availability

- High Availability usually goes hand in
hand with horizontal scaling
- High availability means running your
application / system in at least 2 data
centers (== Availability Zones)
- The goal of high availability is to survive
a data center loss
- The high availability can be passive (for
RDS Multi AZ for example)
- The high availability can be active (for
horizontal scaling)
first building in New York
second building in San Francisco

### High Availability & Scalability For EC2

- Vertical Scaling: Increase instance size (= scale up / down)
- From: t2.nano - 0.5G of RAM, 1 vCPU
- To: u-12tb1.metal – 12.3 TB of RAM, 448 vCPUs
- Horizontal Scaling: Increase number of instances (= scale out / in)
- Auto Scaling Group
- Load Balancer
- High Availability: Run instances for the same application across multi-AZ
- Auto Scaling Group multi-AZ
- Load Balancer multi-AZ

### What is load balancing?

- Load Balances are servers that forward traffic to multiple
servers (e.g., EC2 instances) downstream
Elastic Load Balancer
EC2 Instance
EC2 Instance
EC2 Instance

### Why use a load balancer?

- Spread load across multiple downstream instances
- Expose a single point of access (DNS) to your application
- Seamlessly handle failures of downstream instances
- Do regular health checks to your instances
- Provide SSL termination (HTTPS) for your websites
- Enforce stickiness with cookies
- High availability across zones
- Separate public traffic from private traffic

### Why use an Elastic Load Balancer?

- An Elastic Load Balancer is a managed load balancer
- AWS guarantees that it will be working
- AWS takes care of upgrades, maintenance, high availability
- AWS provides only a few configuration knobs
- It costs less to setup your own load balancer but it will be a lot more effort
on your end
- It is integrated with many AWS offerings / services
- EC2, EC2 Auto Scaling Groups, Amazon ECS
- AWS Certificate Manager (ACM), CloudWatch
- Route 53, AWS WAF, AWS Global Accelerator

### Health Checks

- Health Checks are crucial for Load Balancers
- They enable the load balancer to know if instances it forwards traffic to
are available to reply to requests
- The health check is done on a port and a route (/health is common)
- If the response is not 200 (OK), then the instance is unhealthy
Health Checks
Elastic Load Balancer
Protocol: HTTP
Port: 4567
Endpoint: /health
EC2 Instance

### Types of load balancer on AWS

- AWS has 4 kinds of managed Load Balancers
- Classic Load Balancer (v1 - old generation) – 2009 – CLB
- HTTP, HTTPS, TCP, SSL (secure TCP)
- Application Load Balancer (v2 - new generation) – 2016 – ALB
- HTTP, HTTPS, WebSocket
- Network Load Balancer (v2 - new generation) – 2017 – NLB
- TCP, TLS (secure TCP), UDP
- Gateway Load Balancer – 2020 – GWLB
- Operates at layer 3 (Network layer) – IP Protocol
- Overall, it is recommended to use the newer generation load balancers as they
provide more features
- Some load balancers can be setup as internal (private) or external (public) ELBs

### Load Balancer Security Groups

Users
HTTPS / HTTP
From anywhere
LOAD BALANCER
Load Balancer Security Group:
Application Security Group: Allow traffic only from Load Balancer
HTTP Restricted
to Load balancer

### Classic Load Balancers (v1)

- Supports TCP (Layer 4), HTTP &
HTTPS (Layer 7)
- Health checks are TCP or HTTP
based
- Fixed hostname
XXX.region.elb.amazonaws.com
listener
Client
internal
CLB

### Application Load Balancer (v2)

- Application load balancers is Layer 7 (HTTP)
- Load balancing to multiple HTTP applications across machines
(target groups)
- Load balancing to multiple applications on the same machine
(ex: containers)
- Support for HTTP/2 and WebSocket
- Support redirects (from HTTP to HTTPS for example)

### Application Load Balancer (v2)

- Routing tables to different target groups:
- Routing based on path in URL (example.com/users & example.com/posts)
- Routing based on hostname in URL (one.example.com & other.example.com)
- Routing based on Query String, Headers
(example.com/users?id=123&order=false)
- ALB are a great fit for micro services & container-based application
(example: Docker & Amazon ECS)
- Has a port mapping feature to redirect to a dynamic port in ECS
- In comparison, we’d need multiple Classic Load Balancer per application

### HTTP Based Traffic

WWW
Route /search
HTTP
Health Check
External
Application
Load Balancer
(v2)
Health Check
HTTP
Target Group
for Users
application
Route /user
Target Group
for Search
application
WWW
Application Load Balancer (v2)

### Target Groups

- EC2 instances (can be managed by an Auto Scaling Group) – HTTP
- ECS tasks (managed by ECS itself) – HTTP
- Lambda functions – HTTP request is translated into a JSON event
- IP Addresses – must be private IPs
- ALB can route to multiple target groups
- Health checks are at the target group level
Application Load Balancer (v2)

### Query Strings/Parameters Routing

WWW
Requests
?Platform=Mobile
Target Group 1
AWS – EC2 based
?Platform=Desktop
Target Group 2
On-premises – Private IP routing
External
Application
Load Balancer
(v2)
Application Load Balancer (v2)

### Good to Know

- Fixed hostname (XXX.region.elb.amazonaws.com)
- The application servers don’t see the IP of the client directly
- The true IP of the client is inserted in the header X-Forwarded-For
- We can also get Port (X-Forwarded-Port) and proto (X-Forwarded-Proto)
Client IP
Load Balancer IP
(Private IP)
Connection termination
Instance
Application Load Balancer (v2)

### Network Load Balancer (v2)

- Network load balancers (Layer 4) allow to:
- Forward TCP & UDP traffic to your instances
- Handle millions of request per seconds
- Ultra-low latency
- NLB has one static IP per AZ, and supports assigning Elastic IP
(helpful for whitelisting specific IP)
- NLB are used for extreme performance, TCP or UDP traffic

### TCP (Layer 4) Based Traffic

WWW
TCP + Rules
HTTP
Health Check
External
Network Load
Balancer (v2)
Health Check
TCP
Target Group
for Users
application
TCP + Rules
Target Group
for Search
application
WWW
Network Load Balancer (v2)

### Network Load Balancer – Target Groups

- EC2 instances
- IP Addresses – must be private IPs
- Application Load Balancer
- Health Checks support the TCP, HTTP and HTTPS Protocols
Network
Load Balancer
i-1234567890abcdef0
i-1234567890abcdef0
Target Group
(EC2 Instances)
Network
Load Balancer
Target Group
(IP Addresses)
Network
Load Balancer
Target Group
(Application Load Balancer)

### Gateway Load Balancer

- Deploy, scale, and manage a fleet of 3rd party
network virtual appliances in AWS
- Example: Firewalls, Intrusion Detection and
Prevention Systems, Deep Packet Inspection
Systems, payload manipulation, …
- Operates at Layer 3 (Network Layer) – IP
Packets
- Combines the following functions:
- Transparent Network Gateway – single entry/exit
for all traffic
- Load Balancer – distributes traffic to your virtual
appliances
Route
Table
Application
Users
(destination)
(source)
traffic
traffic
Gateway
Load Balancer
Target Group
- Uses the GENEVE protocol on port 6081
3rd Party Security
Virtual Appliances

### Gateway Load Balancer – Target Groups

- EC2 instances
- IP Addresses – must be private IPs
Gateway
Load Balancer
i-1234567890abcdef0
i-1234567890abcdef0
Target Group
(EC2 Instances)
Gateway
Load Balancer
Target Group
(IP Addresses)

### Sticky Sessions (Session Affinity)

- It is possible to implement stickiness so that the
same client is always redirected to the same
instance behind a load balancer
- This works for Classic Load Balancer, Application
Load Balancer, and Network Load Balancer
- For both CLB & ALB, the “cookie” used for
stickiness has an expiration date you control
- Use case: make sure the user doesn’t lose his
session data
- Enabling stickiness may bring imbalance to the
load over the backend EC2 instances
Client 1
EC2 Instance
Client 2
Client 3
EC2 Instance

### Sticky Sessions – Cookie Names

- Application-based Cookies
- Custom cookie
- Generated by the target
- Can include any custom attributes required by the application
- Cookie name must be specified individually for each target group
- Don’t use AWSALB, AWSALBAPP, or AWSALBTG (reserved for use by the ELB)
- Application cookie
- Generated by the load balancer
- Cookie name is AWSALBAPP
- Duration-based Cookies
- Cookie generated by the load balancer
- Cookie name is AWSALB for ALB, AWSELB for CLB

### Cross-Zone Load Balancing

With Cross Zone Load Balancing:
each load balancer instance distributes evenly
across all registered instances in all AZ
Availability Zone 1
Without Cross Zone Load Balancing:
Requests are distributed in the instances of the
node of the Elastic Load Balancer
Availability Zone 2
Availability Zone 1
6.25
6.25
6.25
6.25
6.25
6.25
6.25
6.25
Availability Zone 2

### Cross-Zone Load Balancing

- Application Load Balancer
- Enabled by default (can be disabled at the Target Group level)
- No charges for inter AZ data
- Network Load Balancer & Gateway Load Balancer
- Disabled by default
- You pay charges ($) for inter AZ data if enabled
- Classic Load Balancer
- Disabled by default
- No charges for inter AZ data if enabled

### SSL/TLS - Basics

- An SSL Certificate allows traffic between your clients and your load balancer
to be encrypted in transit (in-flight encryption)
- SSL refers to Secure Sockets Layer, used to encrypt connections
- TLS refers to Transport Layer Security, which is a newer version
- Nowadays, TLS certificates are mainly used, but people still refer as SSL
- Public SSL certificates are issued by Certificate Authorities (CA)
- Comodo, Symantec, GoDaddy, GlobalSign, Digicert, Letsencrypt, etc…
- SSL certificates have an expiration date (you set) and must be renewed

### Load Balancer - SSL Certificates

Users
HTTPS (encrypted)
Over www
LOAD BALANCER
HTTP
Over private VPC
Instance
- The load balancer uses an X.509 certificate (SSL/TLS server certificate)
- You can manage certificates using ACM (AWS Certificate Manager)
- You can create upload your own certificates alternatively
- HTTPS listener:
- You must specify a default certificate
- You can add an optional list of certs to support multiple domains
- Clients can use SNI (Server Name Indication) to specify the hostname they reach
- Ability to specify a security policy to support older versions of SSL / TLS (legacy clients)

### SSL – Server Name Indication (SNI)

- SNI solves the problem of loading multiple SSL
certificates onto one web server (to serve
multiple websites)
- It’s a “newer” protocol, and requires the client
to indicate the hostname of the target server
in the initial SSL handshake
- The server will then find the correct
certificate, or return the default one
Note:
- Only works for ALB & NLB (newer
generation), CloudFront
- Does not work for CLB (older gen)
Target group for
www.mycorp.com
Target group for
Domain1.example.com
I would like
www.mycorp.com
ALB
Client
SSL Cert:
Domain1.example.com
Use the correct
SSL cert
SSL Cert:
www.mycorp.com

### Elastic Load Balancers – SSL Certificates

- Classic Load Balancer (v1)
- Support only one SSL certificate
- Must use multiple CLB for multiple hostname with multiple SSL certificates
- Application Load Balancer (v2)
- Supports multiple listeners with multiple SSL certificates
- Uses Server Name Indication (SNI) to make it work
- Network Load Balancer (v2)
- Supports multiple listeners with multiple SSL certificates
- Uses Server Name Indication (SNI) to make it work

### Connection Draining

- Feature naming
- Connection Draining – for CLB
- Deregistration Delay – for ALB & NLB
- Time to complete “in-flight requests” while the
instance is de-registering or unhealthy
- Stops sending new requests to the EC2
instance which is de-registering
- Between 1 to 3600 seconds (default: 300
seconds)
- Can be disabled (set value to 0)
- Set to a low value if your requests are short
waiting for existing
connections to complete
EC2 Instance
DRAINING
Users
ELB
new connections
established to all other instances
EC2 Instance
EC2 Instance

### ELB Health Checks

Application
Load Balancer
- Target Health Status
- Initial: registering the target
- Healthy
- Unhealthy
- Unused: target is not registered
- Draining: de-registering the target
- Unavailable: health checks disabled
- If a target group contains only
unhealthy targets, ELB routes
requests across its unhealthy
targets
Health Check
Setting
Value
Description
HealthCheckProtocol
HTTP
Protocol used to perform health checks
HealthCheckPort
Port used to perform health checks
HealthCheckPath
Destination for health checks on targets
HealthCheckTimeoutSeconds
Consider the health check failed if no
response after 5 seconds
HealthCheckIntervalSeconds
Send health check every 30 seconds
HealthyThresholdCount
Consider the target healthy after 3
successful health checks
UnhealthyThresholdCount
Consider the target unhealthy after 5
failed health checks
Target Group

### Load Balancer Error codes

- Successful request : Code 200.
- Unsuccessful at client side : 4XX code.
- Error 400 : Bad Request
- Error 401 : Unauthorized
- Error 403 : Forbidden
- Error 460 : Client closed connection.
- Error 463 : X-Forwarded For header with >30 IP (Similar to malformed request).
- Unsuccessful at server side : 5xx code.
- An error 500 / Internal server error would mean some error on the ELB itself.
- Error 502 : Bad Gateway
- An error 503 / Service Unavailable
- Error 504 / Gateway timeout : probably an issue within the server.
- Error 561 : Unauthorized

### Load Balancers Monitoring

- All Load Balancer metrics are directly pushed to CloudWatch metrics
- BackendConnectionErrors
- Latency
- HealthyHostCount /
- RequestCount
UnHealthyHostCount
- RequestCountPerTarget
- HTTPCode_Backend_2XX: • SurgeQueueLength: The total
Successful request.
number of requests (HTTP
- HTTPCode_Backend_3XX,
listener) or connections (TCP
redirected request
listener) that are pending
to a healthy instance.
- HTTPCode_ELB_4XX: Client routing
Help to scale out ASG. Max
error codes
value is 1024
- HTTPCode_ELB_5XX: Server• SpilloverCount: The total
error codes generated by the number of requests that were
load balancer.
rejected because the surge
queue is full.
Application
Load Balancer
HealthyHostCount: 4
UnHealthyHostCount: 2
Health Checks
Target Group 1
Target Group 2

### Load Balancer troubleshooting using metrics

- HTTP 400: BAD_REQUEST => The client sent a malformed request that
does not meet HTTP specifications.
- HTTP 503: Service Unavailable => Ensure that you have healthy instances in
every Availability Zone that your load balancer is configured to respond in.
Look for HealthyHostCount in CloudWatch
- HTTP 504: Gateway Timeout => Check if keep-alive settings on your EC2
instances are enabled and make sure that the keep-alive timeout is greater
than the idle timeout settings of load balancer.
- Set alarms & look at the documentation for troubleshooting:

### Load Balancers Access Logs

- Access logs from Load Balancers can be stored in S3 and contain:
- Time
- Client IP address
- Latencies
- Request paths
- Server response
- Trace Id
- Only pay for the S3 storage
- Helpful for compliance reason
- Helpful for keeping access data even after ELB or EC2 instances are
terminated
- Access Logs are already encrypted

### Application Load Balancer Request Tracing

- Request tracing – Each HTTP request has an added custom header
‘X-Amzn-Trace-Id’
- Example:
X-Amzn-Trace-Id: Root=1-67891233-abcdef012345678912345678
- This is useful in logs / distributed tracing platform to track a single request
- Application Load Balancer is not (yet) integrated with X-Ray

### Target Groups Settings

- deregisteration_delay.timeout_seconds: time the load balancer waits before
deregistering a target
- slow_start.duration_seconds: (see next slide)
- load_balancing.algorithm.type: how the load balancer selects targets when
routing requests (Round Robin, Least Outstanding Requests)
- stickiness.enabled
- stickiness.type: application-based or duration-based cookie
- stickiness.app_cookie.cookie_name: name of the application cookie
- stickiness.app_cookie.duration_seconds: application-based cookie expiration
period
- stickiness.lb_cookie.duration_seconds: duration-based cookie expiration
period

### Slow Start Mode

- By default, a target receives its full share of
requests once it’s registered with the target group
- Slow Start Mode gives healthy targets time to
warm-up before the load balancer sends them a
full share of requests
- The load balancer linearly increases the number
of requests that it sends to the target
- A target exits Slow Start Mode when:
- The duration period elapses
- The target becomes unhealthy
Client
Slow Start
duration
ALB
without Slow
Start mode
with Slow
Start mode
- To disable, set Slow start duration value to 0
EC2 Instance
EC2 Instance
Target Group

### Outstanding Requests

- The next instance to receive the request is the instance that has the lowest number
of pending/unfinished requests
- Works with Application Load Balancer and Classic Load Balancer (HTTP/HTTPS)
EC2 Instance
ALB
EC2 Instance
CLB
(HTTP/HTTPS Listener)
EC2 Instance
Registered Instances
Request Routing Algorithms – Least

### Request Routing Algorithms – Round Robin

- Equally choose the targets from the target group
- Works with Application Load Balancer and Classic Load Balancer (TCP)
ALB
--- OR ---
CLB (TCP Listener)
EC2 Instance
EC2 Instance
EC2 Instance
Target Group (ALB) /
Registered Instances (CLB)

### Request Routing Algorithms – Flow Hash

- Selects a target based on the protocol, source/destination IP address,
source/destination port, and TCP sequence number
- Each TCP/UDP connection is routed to a single target for the life of the connection
- Works with Network Load Balancer
Protocol
Source & destination IP
Source & destination Port
TCP sequence no.
EC2 Instance
Flow Hash
Algorithm
Hash
8743b…
EC2 Instance
Network Load Balancer
EC2 Instance
Target Group

### ALB – Listener Rules

Application
Load Balancer
- Processed in order (with Default Rule)
- Supported Actions (forward, redirect,
fixed-response)
- Rule Conditions:
- host-header
- http-request-method
- path-pattern
- source-ip
- http-header
- query-string
Listener
Rule #1
Rule #2
Rule (Default)
Target
Target Group 1
Target
Target Group 2
Target
Target Group 3

### Target Group Weighting

- Specify weight for each Target Group on a single Rule
- Example: multiple versions of your app, blue/green deployment
- Allows you to control the distribution of the traffic to your applications
Users
Target Group
Weight
Target Group 1
Target Group 2
Application
Load Balancer
Target Group 1 (Blue)
80%
20%
Target Group 2 (Green)

### What’s an Auto Scaling Group?

- In real-life, the load on your websites and application can change
- In the cloud, you can create and get rid of servers very quickly
- The goal of an Auto Scaling Group (ASG) is to:
- Scale out (add EC2 instances) to match an increased load
- Scale in (remove EC2 instances) to match a decreased load
- Ensure we have a minimum and a maximum number of EC2 instances running
- Automatically register new instances to a load balancer
- Re-create an EC2 instance in case a previous one is terminated (ex: if unhealthy)
- ASG are free (you only pay for the underlying EC2 instances)

### Auto Scaling Group in AWS

Auto Scaling Group
Instance
Instance
Instance
Instance
Minimum Capacity
Instance
Instance
Scale Out as Needed
Desired Capacity
Maximum Capacity
Instance

### Auto Scaling Group in AWS With Load Balancer

Users
Elastic Load Balancer
ELB can check the health of your EC2 instances!
Auto Scaling Group
Instance
Instance
Instance
Instance
Instance
Instance
Instance

### Auto Scaling Group Attributes

- A Launch Template (older “Launch Configurations” are deprecated)
- AMI + Instance Type
- EC2 User Data
- EBS Volumes
- Security Groups
- SSH Key Pair
- IAM Roles for your EC2 Instances
- Network + Subnets Information
- Load Balancer Information
- Min Size / Max Size / Initial Capacity
- Scaling Policies
ASG Launch Template
AMI
Security
Groups
Instance
Type
EBS Volumes
SSH Key Pair
IAM Role
VPC + Subnets
Load
Balancer

### Auto Scaling - CloudWatch Alarms & Scaling

- It is possible to scale an ASG based on CloudWatch alarms
- An alarm monitors a metric (such as Average CPU, or a custom metric)
- Metrics such as Average CPU are computed for the overall ASG instances
- Based on the alarm:
- We can create scale-out policies (increase the number of instances)
- We can create scale-in policies (decrease the number of instances)
Auto Scaling Group
Instance
Instance
Instance
trigger Scaling
Instance
Instance
CloudWatch
Alarm

### Auto Scaling Groups – Scaling Policies

- Dynamic Scaling
- Target Tracking Scaling
- Simple to set-up
- Example: I want the average ASG CPU to stay at around 40%
- Simple / Step Scaling
- When a CloudWatch alarm is triggered (example CPU > 70%), then add 2 units
- When a CloudWatch alarm is triggered (example CPU < 30%), then remove 1
- Scheduled Scaling
- Anticipate a scaling based on known usage patterns
- Example: increase the min capacity to 10 at 5 pm on Fridays

### Auto Scaling Groups – Scaling Policies

- Predictive scaling: continuously forecast load and schedule scaling ahead

### Good metrics to scale on

- CPUUtilization: Average CPU
utilization across your instances
- RequestCountPerTarget: to make sure
the number of requests per EC2
instances is stable
- Average Network In / Out (if you’re
application is network bound)
- Any custom metric (that you push
using CloudWatch)
Users
Application
Load Balancer
RequestCountPerTarget
Target Value: 3
Auto Scaling group

### Auto Scaling Groups - Scaling Cooldowns

- After a scaling activity happens, you are in
the cooldown period (default 300
seconds)
- During the cooldown period, the ASG will
not launch or terminate additional
instances (to allow for metrics to stabilize)
- Advice: Use a ready-to-use AMI to reduce
configuration time in order to be serving
request fasters and reduce the cooldown
period
Scaling Action
Occurs
Launch or
Teminate Instance
Default
Cooldown
in effect?
Yes
Ignore Action

### Auto Scaling – Instance Refresh

- Goal: update launch template
and then re-creating all EC2
instances
- For this we can use the native
feature of Instance Refresh
- Setting of minimum healthy
percentage
- Specify warm-up time (how long
until the instance is ready to use)
User
New Launch Template
(Updated AMI)
Min. Healthy Percentage: 60 %
Auto Scaling Group
New Launch
Template
Old Launch
Template
StartInstanceRefresh

### ASG – Scale-out Latency Problem

- When an ASG scales out, it tries to launch instances as fast as possible
- Some applications contain a lengthy unavoidable latency that exists at the
application initialization/bootstrap layer (several minutes or more)
- Processes that can only happen at initial boot: applying updates, data or
state hydration, running configuration scripts…
- Solution was to over-provision compute resources to absorb unexpected
demand increases (increased cost) or use Golden Images to try to
reduce boot time
- New solution: ASG Warm Pools !!

### (Pre-initialized)

- Reduces scale-out latency by maintaining a pool of preinitialized instances
- In a scale-out event, ASG uses the pre-initialized instances
from the Warm Pool instead of launching new instances
- Warm Pool Size Settings
scale-out
Max. Capacity = 6
Desired Capacity = 3
Auto Scaling Group
- Minimum warm pool size (always in the warm pool)
- Max prepared capacity = Max capacity of ASG (default)
- OR Max prepared capacity = Set number of instances
- Warm Pool Instance State – what state to keep your
Warm Pool instances in after initialization
(Running, Stopped, Hibernated)
- Warm Pools instances don’t contribute to ASG metrics
that affect Scaling Policies
ASG – Warm Pools
Warm Pools
(Size = 3)
EC2 Instances

- By default, as soon as an instance is
launched in an ASG it’s in service
- You can perform extra steps before
the instance goes in service (Pending
state)
- Define a script to run on the instances as
they start
- You can perform some actions before
the instance is terminated
(Terminating state)
scale out
Lifecycle Hook
(EC2_Instance_Terminating)
InService
Terminating:Wait
Terminating:Proceed
scale in
Pending:Wait
Pending:Proceed
Terminating
Terminated
- Pause the instances before they’re
terminated for troubleshooting
- Use cases: cleanup, log extraction,
special health checks
- Integration with EventBridge, SNS, and
SQS
Lifecycle Hook
(EC2_Instance_Launching)
Pending
EventBridge
invoke
lifecycle event
trigger
ASG
ASG – Lifecycle Hooks
ASG
Lambda
SNS

### Launch Configuration vs. Launch Template

- Both:
- ID of the Amazon Machine Image (AMI), the instance type, a key pair, security groups, and the other
parameters that you use to launch EC2 instances (tags, EC2 user-data...)
- You can’t edit both Launch Configurations and Launch Templates
- Launch Configuration (legacy):
- Must be re-created every time
- Launch Template (newer):
- Can have multiple versions
- Create parameters subsets (partial configuration for re-use and inheritance)
- Provision using both On-Demand and Spot instances (or a mix)
- Supports Placement Groups, Capacity Reservations, Dedicated hosts, multiple instance types
- Can use T2 unlimited burst feature
- Recommended by AWS going forward

### SQS with Auto Scaling Group (ASG)

Poll for messages
EC2 Instances
SQS Queue
Auto Scaling Group
scale
Alarm for breach
CloudWatch Metric – Queue Length
ApproximateNumberOfMessages
CloudWatch Alarm

### ASG Health Checks

- To make sure you have high availability, means you have least 2 instances
running across 2 AZ in your ASG (must configure multi-AZ ASG)
- Health checks available:
- EC2 Status Checks
- ELB Health Checks
- Custom Health Checks: send instance’s health to ASG using AWS CLI or AWS SDK
- ASG will launch a new instance after terminating an unhealthy one
- ASG will not reboot unhealthy hosts for you
- Good to know CLI:
- set-instance-health (use with Custom Health Checks)
- terminate-instance-in-auto-scaling-group

### Troubleshooting ASG issues

- <number of instances> instance(s) are already running. Launching EC2
instance failed.
- The Auto Scaling group has reached the limit set by the MaximumCapacity
parameter. Update your Auto Scaling group by providing a new value for the
maximum capacity.
- Launching EC2 instances is failing:
- The security group does not exist. SG might have been deleted
- The key pair does not exist. The key pair might have been deleted
- If the ASG fails to launch an instance for over 24 hours, it will
automatically suspend the processes (administration suspension)

### CloudWatch Metrics for ASG

- Metrics are collected every 1 minute
- ASG-level metrics: (opt-in)
- GroupMinSize, GroupMaxSize, GroupDesiredCapacity
- GroupInServiceInstances, GroupPendingInstances, GroupStandbyInstances
- GroupTerminatingInstances, GroupTotalInstances
- You should enable metric collection to see these metrics
- EC2-level metrics (enabled): CPU Utilization, etc…
- Basic monitoring: 5 minutes granularity
- Detailed monitoring: 1 minute granularity

### AWS Auto Scaling

- Backbone service of auto scaling for scalable resources in AWS:
- Amazon EC2 Auto Scaling groups: Launch or terminate EC2 instances
- Amazon EC2 Spot Fleet requests: Launch or terminate instances from a
Spot Fleet request, or automatically replace instances that get
interrupted for price or capacity reasons.
- Amazon ECS: Adjust the ECS service desired count up or down
- Amazon DynamoDB (table or global secondary index): WCU & RCU
- Amazon Aurora: Dynamic Read Replicas Auto Scaling

### AWS Auto Scaling – Scaling Plans

- Dynamic scaling: creates a target tracking
scaling policy
- Optimize for availability => 40% of resource
utilization
- Balance availability and cost => 50% of resource
utilization
- Optimize for cost => 70% of resource utilization
- Custom => choose own metric and target value
- Options: Disable scale-in, cooldown period, warmup
time (for ASG)
- Predictive scaling: continuously forecast load
and schedule scaling ahead

---

## 5. AWS CloudFormation

### AWS CloudFormation

Managing your infrastructure as code

### AWS CloudFormation

- CloudFormation is a declarative way of outlining your AWS
Infrastructure, for any resources (most of them are supported)
- For example, within a CloudFormation template, you say:
- I want a security group
- I want two EC2 instances using this security group
- I want two Elastic IPs for these EC2 instances
- I want an S3 bucket
- I want a load balancer (ELB) in front of these EC2 instances
- Then CloudFormation creates those for you, in the right order, with the
exact configuration that you specify

### CloudFormation – Template Example

Infrastructure Composer

### Benefits of AWS CloudFormation (1/2)

- Infrastructure as code
- No resources are manually created, which is excellent for control
- The code can be version controlled for example using Git
- Changes to the infrastructure are reviewed through code
- Cost
- Each resources within the stack is tagged with an identifier so you can easily see how
much a stack costs you
- You can estimate the costs of your resources using the CloudFormation template
- Savings strategy: In Dev, you could automation deletion of templates at 5 PM and
recreated at 8 AM, safely

### Benefits of AWS CloudFormation (2/2)

- Productivity
- Ability to destroy and re-create an infrastructure on the cloud on the fly
- Automated generation of Diagram for your templates!
- Declarative programming (no need to figure out ordering and orchestration)
- Separation of concern: create many stacks for many apps, and many layers. Ex:
- VPC stacks
- Network stacks
- App stacks
- Don’t re-invent the wheel
- Leverage existing templates on the web!
- Leverage the documentation

### How CloudFormation Works

- Templates must be uploaded in S3 and then referenced in
CloudFormation
- To update a template, we can’t edit previous ones. We have to reupload a new version of the template to AWS
- Stacks are identified by a name
- Deleting a stack deletes every single artifact that was created by
CloudFormation.
upload
Template
reference
S3 bucket
Create
create
AWS CloudFormation
Stack
AWS Resources

### CloudFormation

- Manual way
- Editing templates in Infrastructure Composer or code editor
- Using the console to input parameters, etc…
- We’ll mostly do this way in the course for learning
purposes
- Automated way
- Editing templates in a YAML file
- Using the AWS CLI (Command Line Interface) to deploy
the templates, or using a Continuous Delivery (CD) tool
- Recommended way when you fully want to automate
your flow
Template
Infrastructure
Composer / Code
Editor
Stack
CloudFormation Console
create-stack
AWS CLI
Template
create
Deploying CloudFormation Templates

### CloudFormation – Building Blocks

- Template’s Components
- AWSTemplateFormatVersion – identifies the capabilities of the template “2010-09-09”
- Description – comments about the template
- Resources (MANDATORY) – your AWS resources declared in the template
- Parameters – the dynamic inputs for your template
- Mappings – the static variables for your template
- Outputs – references to what has been created
- Conditionals – list of conditions to perform resource creation
- Template’s Helpers
- References
- Functions

### Introductory Example

- We’re going to create a simple EC2 instance
- And we’re going to add security group to it
- For now, forget about the code syntax
- We’ll look at the structure of the files later
Port: 22
Port: 80
WebServer
WebServerSecurityGroup
- We’ll see how in no-time, we are able to get started
with CloudFormation!

### YAML Crash Course

- YAML and JSON are the languages you can
use for CloudFormation
- JSON is horrible for CF
- YAML is great in so many ways
- Let’s learn a bit about it!
- Key value Pairs
- Nested objects
- Support Arrays
- Multi line strings
- Can include comments!

### CloudFormation – Resources

- Resources are the core of your CloudFormation template (MANDATORY)
- They represent the different AWS Components that will be created and
configured
- Resources are declared and can reference each other
- AWS figures out creation, updates and deletes of resources for us
- There are over 700 types of resources (!)
- Resource types identifiers are of the form:
service-provider::service-name::data-type-name

### Resources documentation?

- I can’t teach you all the 700+ resources, but I can teach you how to
learn how to use them
- All the resources can be found here:
ws-template-resource-type-ref.html
- Then, we just read the docs J
- Example here (for an EC2 instance):
ws-resource-ec2-instance.html
How do I find

### Analysis of CloudFormation Template

- Going back to the example of the introductory lecture, let’s learn why it
was written this way.
- Relevant documentation can be found here:
- • •

### CloudFormation – Resources FAQ

- Can I create a dynamic number of resources?
ØYes, you can by using CloudFormation Macros and Transform
ØIt is not in the scope of this course
- Is every AWS Service supported?
ØAlmost. Only a select few niches are not there yet
ØYou can work around that using CloudFormation Custom Resources

### CloudFormation – Parameters

User
- Parameters are a way to provide inputs to your
AWS CloudFormation template
- They’re important to know about if:
- You want to reuse your templates across the company
- Some inputs can not be determined ahead of time
- Parameters are extremely powerful, controlled,
and can prevent errors from happening in your
templates, thanks to types
upload template
provide parameter values
Parameter1: value1
Parameter2: value2
CF template
Parameters
create stack
AWS CloudFormation

### When should you use a Parameter?

- Ask yourself this:
- Is this CloudFormation resource configuration likely to change in the future?
- If so, make it a parameter
- You won’t have to re-upload a template to change its content J

### CloudFormation – Parameters Settings

- Parameters can be controlled by all these settings:
- Type:
- String
- Number
- CommaDelimitedList
- List<Number>
- AWS-Specific Parameter (to help
catch invalid values – match
against existing values in the AWS
account)
- List<AWS-Specific Parameter>
- SSM Parameter (get parameter
value from SSM Parameter store)
- Description
- ConstraintDescription (String)
- Min/MaxLength
- Min/MaxValue
- Default
- AllowedValues (array)
- AllowedPattern (regex)
- NoEcho (Boolean)

### CloudFormation – Parameters Example

AllowedValues
NoEcho

### How to Reference a Parameter?

- The Fn::Ref function can be leveraged to reference parameters
- Parameters can be used anywhere in a template
- The shorthand for this in YAML is !Ref
- The function can also reference other elements within the template

### CloudFormation – Pseudo Parameters

- AWS offers us Pseudo Parameters in any CloudFormation template
- These can be used at any time and are enabled by default
- Important pseudo parameters:
Reference Value
Example Returned Value
AWS::AccountId
123456789012
AWS::Region
AWS::StackId
arn:aws:cloudformation:us-east-1:123456789012:stack/MyStack/1c2fa620-982a11e3-aff7-50e2416294e0
AWS::StackName
MyStack
AWS::NotificationARNs
[arn:aws:sns:us-east-1:123456789012:MyTopic]
AWS::NoValue
Doesn’t return a value

### CloudFormation – Mappings

- Mappings are fixed variables within your CloudFormation template
- They’re very handy to differentiate between different environments
(dev vs prod), regions (AWS regions), AMI types…
- All the values are hardcoded within the template

### Accessing Mapping Values (Fn::FindInMap)

- We use Fn::FindInMap to return a named value from a specific key
- !FindInMap [ MapName, TopLevelKey, SecondLevelKey ]
Mappings work great for AMIs
Because AMIs are region-specific!

### When would you use Mappings vs. Parameters?

- Mappings are great when you know in advance all the values that can be
taken and that they can be deduced from variables such as
- Region
- Availability Zone
- AWS Account
- Environment (dev vs prod)
- etc…
- They allow safer control over the template
- Use parameters when the values are really user specific

### CloudFormation – Outputs

- The Outputs section declares optional outputs values
that we can import into other stacks (if you export
them first)!
- You can also view the outputs in the AWS Console
or in using the AWS CLI
- They’re very useful for example if you define a
network CloudFormation, and output the variables
such as VPC ID and your Subnet IDs
- It’s the best way to perform some collaboration cross
stack, as you let expert handle their own part of the
stack
Network Stack
Exported Output
VPC ID: vpc-2f09a348
reference
Application Stack

### CloudFormation – Outputs

- Creating a SSH Security Group as part of one template
- We create an output that references that security group

### Reference

- We then create a second template that leverages that security group
- For this, we use the Fn::ImportValue function
- You can’t delete the underlying stack until all the references are deleted
CloudFormation – Outputs Cross-Stack

### CloudFormation – Conditions

- Conditions are used to control the creation of
resources or outputs based on a condition
- Conditions can be whatever you want them to
be, but common ones are:
- Environment (dev / test / prod)
- AWS Region
- Any parameter value
User
Parameters
Parameters
Environment:
dev
Environment:
prod
template
Development
Production
- Each condition can reference another condition,
parameter value or mapping
EC2 Instance
EC2 Instance
EBS Volume
Dev Stack
Prod Stack

### How to define a Condition

- The logical ID is for you to choose. It’s how you name condition
- The intrinsic function (logical) can be any of the following:
- Fn::And
- Fn::Equals
- Fn::If
- Fn::Not
- Fn::Or

### How to use a Condition

- Conditions can be applied to resources / outputs / etc…

### CloudFormation – Intrinsic Functions

- Ref
- Fn::Base64
- Fn::GetAtt
- Fn::Cidr
- Fn::FindInMap
- Fn::GetAZs
- Fn::ImportValue
- Fn::Select
- Fn::Join
- Fn::Split
- Fn::Sub
- Fn::Transform
- Fn::ForEach
- Fn::Length
- Fn::ToJsonString
- Condition Functions (Fn::If, Fn::Not, Fn::Equals, etc…)
Blue = must know

### Intrinsic Functions – Fn::Ref

- The Fn::Ref function can be leveraged to reference
- Parameters – returns the value of the parameter
- Resources – returns the physical ID of the underlying resource (e.g., EC2 ID)
- The shorthand for this in YAML is !Ref

### Intrinsic Functions – Fn::GetAtt

- Attributes are attached to any resources you create
- To know the attributes of your resources, the best place to look at is
the documentation
- Example: the AZ of an EC2 instance!

### Intrinsic Functions – Fn::FindInMap

- We use Fn::FindInMap to return a named value from a specific key
- !FindInMap [ MapName, TopLevelKey, SecondLevelKey ]

### Intrinsic Functions – Fn::ImportValue

- Import values that are exported in other stacks
- For this, we use the Fn::ImportValue function

### Intrinsic Functions – Fn::Base64

- Convert String to it’s Base64 representation
- Example: pass encoded data to EC2 Instance’s UserData property

### Intrinsic Functions – Condition Functions

- The logical ID is for you to choose. It’s how you name condition
- The intrinsic function (logical) can be any of the following:
- Fn::And
- Fn::Equals
- Fn::If
- Fn::Not
- Fn::Or

### CloudFormation – Rollbacks

- Stack Creation Fails:
- Default: everything rolls back (gets deleted). We can look at the log
- Option to disable rollback and troubleshoot what happened
- Stack Update Fails:
- The stack automatically rolls back to the previous known working state
- Ability to see in the log what happened and error messages
- Rollback Failure? Fix resources manually then issue
ContinueUpdateRollback API from Console
- Or from the CLI using continue-update-rollback API call

### CloudFormation – Service Role

- IAM role that allows CloudFormation to
create/update/delete stack resources on your
behalf
- Give ability to users to create/update/delete the
stack resources even if they don’t have
permissions to work with the resources in the
stack
- Use cases:
Permissions
- cloudformation:*
- iam:PassRole
User
Template
Service Role
- s3:*Bucket
CloudFormation
- You want to achieve the least privilege principle
- But you don’t want to give the user all the required
permissions to create the stack resources
- User must have iam:PassRole permissions
S3 bucket
Stack

### CloudFormation Capabilities

- CAPABILITY_NAMED_IAM and CAPABILITY_IAM
- Necessary to enable when you CloudFormation template is creating or updating IAM
resources (IAM User, Role, Group, Policy, Access Keys, Instance Profile…)
- Specify CAPABILITY_NAMED_IAM if the resources are named
- CAPABILITY_AUTO_EXPAND
- Necessary when your CloudFormation template includes Macros or Nested Stacks
(stacks within stacks) to perform dynamic transformations
- You’re acknowledging that your template may change before deploying
- InsufficientCapabilitiesException
- Exception that will be thrown by CloudFormation if the capabilities haven’t been
acknowledged when deploying a template (security measure)

### CloudFormation – DeletionPolicy Delete

- DeletionPolicy:
- Control what happens when the
CloudFormation template is
deleted or when a resource is
removed from a CloudFormation
template
- Extra safety measure to preserve
and backup resources
- Default DeletionPolicy=Delete
- ⚠ Delete won’t work on an S3
bucket if the bucket is not empty

### CloudFormation – DeletionPolicy Retain

- DeletionPolicy=Retain:
- Specify on resources to preserve
in case of CloudFormation
deletes
- Works with any resources

### CloudFormation – DeletionPolicy Snapshot

- DeletionPolicy=Snapshot
- Create one final snapshot before
deleting the resource
- Examples of supported resources:
- EBS Volume, ElastiCache Cluster,
ElastiCache ReplicationGroup
- RDS DBInstance, RDS DBCluster,
Redshift Cluster, Neptune DBCluster,
DocumentDB DBCluster

### CloudFormation – UpdateReplacePolicy

- Controls what happens to a resource if you update a property whose update
behavior is Replacement
- For example, updating RDS DBInstance’s AvailabilityZone property
- UpdateReplacePolicy=Delete (default)
- CloudFormation deletes the old resource and creates a new one with a new physical ID
- UpdateReplacePolicy=Retain
- Keeps the resource (it is removed from CloudFormation’s scope)
- UpdateReplacePolicy=Snapshot
- EBS Volume, ElastiCache Cluster, ElastiCache ReplicationGroup
- RDS DBInstance, RDS DBCluster, Redshift Cluster, Neptune DBCluster
- The snapshot doesn’t exist in CloudFormation’s scope

### UpdateReplacePolicy vs. DeletionPolicy

- UpdateReplacePolicy only applies to resources replaced during stack updates
- DeletionPolicy
- Applies to resources deleted when a stack is deleted
- Applies when a resource definition deleted from the template as part of stack update

### CloudFormation – Stack Policies

- During a CloudFormation Stack update, all
update actions are allowed on all resources
(default)
- A Stack Policy is a JSON document that
defines the update actions that are allowed
on specific resources during Stack updates
- Protect resources from unintentional updates
- When you set a Stack Policy, all resources in
the Stack are protected by default
- Specify an explicit ALLOW for the resources
you want to be allowed to be updated
Allow updates on all resources
except the ProducKonDatabase

### CloudFormation – Termination Protection

- To prevent accidental deletes of CloudFormation Stacks, use
TerminationProtection

### CloudFormation – Custom Resources

- Used to
- define resources not yet supported by CloudFormation
- define custom provisioning logic for resources can that be outside of
CloudFormation (on-premises resources, 3rd party resources…)
- have custom scripts run during create / update / delete through Lambda
functions (running a Lambda function to empty an S3 bucket before being
deleted)
- Defined in the template using AWS::CloudFormation::CustomResource
or Custom::MyCustomResourceTypeName (recommended)
- Backed by a Lambda function (most common) or an SNS topic

### How to define a Custom Resource?

- ServiceToken specifies where CloudFormation sends requests to, such
as Lambda ARN or SNS ARN (required & must be in the same region)
- Input data parameters (optional)

### Use Case – Delete content from an S3 bucket

- You can’t delete a non-empty
S3 bucket
- To delete a non-empty S3
bucket, you must first delete all
the objects inside it
- We can use a custom resource
to empty an S3 bucket before
it gets deleted by
CloudFormation
User
delete stack
CloudFormation
Stack
Custom resource
Lambda function
empty bucket
S3 bucket

### CloudFormation – Dynamic References

- Reference external values stored in Systems Manager
create/update
Parameter Store and Secrets Manager within
CloudFormation templates
CloudFormation
- CloudFormation retrieves the value of the specified
reference during create/update/delete operations
result
- For example: retrieve RDS DB Instance master password
from Secrets Manager
- Supports
- ssm – for plaintext values stored in SSM Parameter Store
- ssm-secure – for secure strings stored in SSM Parameter Store
- secretsmanager – for secret values stored in Secrets Manager
Template
get value
(reference-key)
SSM Parameter Store
‘{{resolve:service-name:reference-key}}’
Secrets Manager

### CloudFormation – Dynamic References

SSM
SSM Secure
{{resolve:ssm:parameter-name:version}}
{{resolve:ssm-secure:parameter-name:version}}
Secrets Manager
{{resolve:secretsmanager:secret-id:secret-string:json-key:version-stage:version-id}}

### Option 1 – ManageMasterUserPassword

- ManageMasterUserPassword – creates admin secret implicitly
- RDS, Aurora will manage the secret in Secrets Manager and its rotation
create Secret
create Stack
User
CloudFormation
create DB and
configure
Username/Password
Secrets
Manager
RDS
CloudFormation, Secrets Manager & RDS

### Option 2 – Dynamic Reference

1. secret is generated
3. link the secret to
RDS DB instance (for rotajon)
2. Reference secret in
RDS DB instance
CloudFormation, Secrets Manager & RDS

### User Data in EC2 for CloudFormation

- We can have user data at EC2 instance launch through the console
- Let’s learn how to write the same EC2 user-data script in our
CloudFormation template
- The important thing to pass is the entire script through the function
Fn::Base64
- Good to know, user data script log is in /var/log/cloud-init-output.log
- Let’s see how to do this in CloudFormation!

### The Problems with EC2 User Data

- What if we want to have a very large instance configuration?
- What if we want to evolve the state of the EC2 instance without terminating
it and creating a new one?
- How do we make EC2 user-data more readable?
- How do we know or signal that our EC2 user-data script completed
successfully?
- Enter CloudFormation Helper Scripts!
- Python scripts, that come directly on Amazon Linux AMIs, or can be installed using yum
or dnf on non-Amazon Linux AMIs
- cfn-init, cfn-signal, cfn-get-metadata, cfn-hup

### AWS::CloudFormation::Init

- A config contains the following and is executed in
that order
- Packages: used to download and install pre-packaged
apps and components on Linux/Windows (ex. MySQL,
PHP, etc…)
- Groups: define user groups
- Users: define users, and which group they belong to
- Sources: download files and archives and place them on
the EC2 instance
- Files: create files on the EC2 instance, using inline or can
be pulled from a URL
- Commands: run a series of commands
- Services: launch a list of sysvinit

### CloudFormation – cfn-init

retrieve init data
- Used to retrieve and interpret the resource
metadata, installing packages, creating files and
starting services
- With the cfn-init script, it helps make complex
EC2 configurations readable
- The EC2 instance will query the CloudFormation
service to get init data
- AWS::CloudFormation::Init must be in the
Metadata of a resource
- Logs go to /var/log/cfn-init.log
launch
CloudFormation
EC2 Instance
run cfn-init

### run cfn-init

- Block the template until it receives a signal from cfn-signal
- We attach a CreationPolicy (also works on EC2, ASG)
- We can define a Count > 1 (in case you need more than 1 signal)
signal from
cfn-signal
- We need to define WaitCondition:
retrieve init data
- We run cfn-signal right after cfn-init
- Tell CloudFormation service that the resource creation success/fail
to keep on going or fail
Wait Condition
launch
- We still don’t know how to tell CloudFormation that the
EC2 instance got properly configured after a cfn-init
- For this, we can use the cfn-signal script!
CloudFormation
EC2 Instance
CloudFormation – cfn-signal & Wait Conditions

### Number of Signals from an Amazon EC2 Instance

- Ensure that the AMI you're using has the AWS CloudFormation helper scripts
installed. If the AMI doesn't include the helper scripts, you can also download them
to your instance
- Verify that the cfn-init & cfn-signal command was successfully run on the instance.
You can view logs, such as /var/log/cloud-init.log or /var/log/cfn-init.log, to help you
debug the instance launch
- You can retrieve the logs by logging in to your instance, but you must disable
rollback on failure or else AWS CloudFormation deletes the instance after your
stack fails to create
- Verify that the instance has a connection to the Internet. If the instance is in a VPC,
the instance should be able to connect to the Internet through a NAT device if it's is
in a private subnet or through an Internet gateway if it's in a public subnet
- For example, run: curl -I
Wait Condition Didn't Receive the Required

### CloudFormation – Nested Stacks

Stack A (root)
- Nested stacks are stacks as part of other stacks
- They allow you to isolate repeated patterns /
common components in separate stacks and call
them from other stacks
- Example:
- Load Balancer configuration that is re-used
- Security Group that is re-used
- Nested stacks are considered best practice
- To update a nested stack, always update the parent
(root stack)
- Nested stacks can have nested stacks themselves!
Stack B
Stack D
Stack C
Stack E
Stack F

### Cross Stacks vs. Nested Stacks

App 1 Stack
- Cross Stacks
- Helpful when stacks have different lifecycles
- Use Outputs Export and Fn::ImportValue
- When you need to pass export values to
many stacks (VPC Id…)
App 2 Stack
VPC Stack
App 3 Stack
- Nested Stacks
- Helpful when components must be re-used
- Example: re-use how to properly configure
an Application Load Balancer
- The nested stack only is important to the
higher-level stack (it’s not shared)
RDS Stack
ASG Stack
ELB Stack
App 1 Stack
RDS Stack
ASG Stack
ELB Stack
App 2 Stack

### CloudFormation – DependsOn

- Specify that the creation of a specific resource
follows another
- When added to a resource, that resource is
created only after the creation of the resource
specified in the DependsOn attribute
- Applied automatically when using !Ref and
!GetAtt
- Use with any resource

### CloudFormation – StackSets

- Create, update, or delete stacks across
multiple accounts and regions with a
single operation/template
- Administrator account to create
StackSets
- Target accounts to create, update,
delete stack instances from StackSets
- When you update a stack
set, all associated stack instances are
updated throughout all accounts and
regions
- Can be applied into all accounts of an
AWS organizations
Administrator account
Create StackSet
Template
StackSet
Target account A
Target account B
Target account A
Target account C
Stack Instance
Stack Instance
Stack Instance
Stack Instance

### CloudFormation – StackSets Permission Models

Administrator account
- Self-managed Permissions
- Create the IAM roles (with established trusted
relationship) in both administrator and target accounts
- Deploy to any target account in which you have
permissions to create IAM role
- Service-managed Permissions
- Deploy to accounts managed by AWS Organizations
- StackSets create the IAM roles on your behalf (enable
trusted access with AWS Organizations)
- Must enable all features in AWS Organizations
- Ability to deploy to accounts added to your
organization in the future (Automatic Deployments)
AWSCloudFormationStackSetAdministrationRole
Trust relationship
Target accounts
AWSCloudFormationStackSetExecutionRole
Management account
Target
accounts
AWS Organizations

### StackSets with AWS Organizations

- Ability to automatically deploy Stack instances to new Accounts in an
Organization
- Can delegate StackSets administration to member accounts in AWS
Organization
- Trusted access with AWS Organizations must be enabled before
delegated administrators can deploy to accounts managed by
Organizations

### StackSets with AWS Organizations

AWS Organization
(Delegated) Administrator Account
StackSet
manage
OU (Dev)
OU (Prod)
Member Account - A
Member Account - B
Member Account - C
New Account
Stack Instance
Stack Instance
Stack Instance
Stack Instance

### Hands-On: StackSets

- We’ll use StackSets to enable AWS
Config across AWS regions with a single
click
Administrator/Target account
Create StackSet
StackSet
Template
enable
- Let’s see how this works!
AWS Config
AWS Conﬁg
AWS Config

### CloudFormation – Drift

- CloudFormation allows you to create
infrastructure
- But it doesn’t protect you against manual
configuration changes
- How do we know if our resources have drifted?
- We can use CloudFormation Drift!
- Detect drift on an entire stack or on individual
resources within a stack
SSHSecurityGroup
Protocol/Port
Source
SSH
TCP/22
EC odif
2C yu
on s i n
so g
Stack
Type
Protocol/Port
Source
SSH
TCP/22
Compare
Template
Type
CloudFormation Drift
Drifted!

### StackSet Drift Detection

- Performs drift detection on the stack associated with
each stack instance in the StackSet
- If the current state of a resource in a stack varies from
the expected state:
- The stack considered drifted
- And the stack instance that the stack associated with
considered drifted
- And the StackSet is considered drifted
- Drift detection identifies unmanaged changes (outside
CloudFormation)
- Changes made through CloudFormation to a stack
directly (not at the StackSet level), aren’t considered
drifted
modify through
EC2 console
- You can stop drift detection on a StackSet
User
Administrator account
StackSet
Target account
Stack Instance
Stack
EC2 instance

### CloudFormation – Troubleshooting

- DELETE_FAILED
- Some resources must be emptied before deleting, such as S3 buckets
- Use Custom Resources with Lambda functions to automate some actions
- Security Groups cannot be deleted until all EC2 instances in the group are gone
- Think about using DeletionPolicy=Retain to skip deletions
- UPDATE_ROLLBACK_FAILED
- Can be caused by resources changed outside of CloudFormation, insufficient
permissions, Auto Scaling Group that doesn’t receive enough signals…
- Manually fix the error and then ContinueUpdateRollback

### CloudFormation – StackSet Troubleshooting

- A stack operation failed, and the stack instance status is OUTDATED.
- Insufficient permissions in a target account for creating resources that are
specified in your template.
- The template could be trying to create global resources that must be unique but
aren't, such as S3 buckets
- The administrator account does not have a trust relationship with the target
account
- Reached a limit or a quota in the target account (too many resources)

### CloudFormation – Troubleshooting

- You can’t set EC2 instance private DNS name in a CloudFormation
template (there’s no PrivateDnsName attribute)
- Or anything else you wouldn’t be able to set through the AWS Console
- If your CloudFormation template works in one Region and doesn’t work in
another Region:
- Check if AWS services in the template are available in this Region
- Check AMI IDs (AMIs are regional)
- Check hardcoded region-specific values (e.g., ARNs)
- Check unique names for resources that require it (e.g., S3 bucket names are globally
unique)

### CloudFormation – Stack Failures

- You can specify the rollback behavior when creating a stack fails:
- OnFailure=ROLLBACK (default) – delete resources that were created so far
- OnFailure=DO_NOTHING – keep all created resources, stack becomes in
CREATE_FAILED status
- OnFailure=DELETE – delete all resources and the stack
aws cloudformation create-stack --stack-name MyTestStack \\
--template-body file://template.yaml --on-failure DO_NOTHING

### CloudFormation – Stack-Level Tags

- Tags associated with a CloudFormation Stack
- Automatically propagated to the supported resources in the Stack
Using CloudForma\\on Console
Using AWS CLI
aws cloudformation create-stack \\
--stack-name DemoStack \\
--template-body file://demo-template.yaml \\
--tags Key=Environment,Value=Development \\
Key=Project,Value=MyProject

### AutoScalingRollingUpdate

- Specify whether CloudFormation updates instances that are in an ASG
in batches or all at once

### AutoScalingReplacingUpdate

- Create a new ASG as a replacement to the old one
- Make sure you have enough EC2 capacity for two ASGs
- If update fails, the new ASG is deleted and the old ASG is kept intact

### AWS Lambda

It’s a Serverless world

### Why AWS Lambda

Amazon EC2
Amazon Lambda
- Virtual Servers in the Cloud
- Limited by RAM and CPU
- Continuously running
- Scaling means intervention to add / remove servers
- Virtual functions – no servers to manage!
- Limited by time - short executions
- Run on-demand
- Scaling is automated!

---

## 6. AWS Lambda

### Benefits of AWS Lambda

- Easy Pricing:
- Pay per request and compute time
- Free tier of 1,000,000 AWS Lambda requests and 400,000 GBs of compute time
- Integrated with the whole AWS suite of services
- Integrated with many programming languages
- Easy monitoring through AWS CloudWatch
- Easy to get more resources per functions (up to 10GB of RAM!)
- Increasing RAM will also improve CPU and network!

### AWS Lambda language support

- Node.js (JavaScript)
- Python
- Java
- C# (.NET Core) / Powershell
- Ruby
- Custom Runtime API (community supported, example Rust or Golang)
- Lambda Container Image
- The container image must implement the Lambda Runtime API
- ECS / Fargate is preferred for running arbitrary Docker images

### Main ones

API Gateway
Kinesis
DynamoDB
CloudFront
CloudWatch Events
EventBridge
CloudWatch Logs
SNS
SQS
Cognito
AWS Lambda Integrations

### Example: Serverless Thumbnail creation

New thumbnail in S3
trigger
AWS Lambda Function
Creates a Thumbnail
New image in S3
Image name
Image size
Creation date
etc…
Metadata in DynamoDB

### Example: Serverless CRON Job

Trigger
Every 1 hour
CloudWatch Events
EventBridge
AWS Lambda Function
Perform a task

### AWS Lambda Pricing: example

- You can find overall pricing information here:
- Pay per calls:
- First 1,000,000 requests are free
- $0.20 per 1 million requests thereafter ($0.0000002 per request)
- Pay per duration: (in increment of 1 ms)
- 400,000 GB-seconds of compute time per month for FREE
- == 400,000 seconds if function is 1GB RAM
- == 3,200,000 seconds if function is 128 MB RAM
- After that $1.00 for 600,000 GB-seconds
- It is usually very cheap to run AWS Lambda so it’s very popular

### CloudWatch Events / EventBridge

CRON or Rate
EventBridge Rule
Trigger
Every 1 hour
AWS Lambda Function
Perform a task
CodePipeline
EventBridge Rule
Trigger on
State Changes
AWS Lambda Function
Perform a task

### S3 Events Notifications

SQS
- S3:ObjectCreated, S3:ObjectRemoved,
S3:ObjectRestore, S3:Replication…
- Object name filtering possible (*.jpg)
- Use case: generate thumbnails of images
uploaded to S3
SNS
events
- S3 event notifications typically deliver events
in seconds but can sometimes take a minute
or longer
- If two writes are made to a single nonversioned object at the same time, it is
possible that only a single event notification
will be sent
- If you want to ensure that an event
notification is sent for every successful write,
you can enable versioning on your bucket.
SQS
Amazon S3
Lambda Function
async
Lambda Function
DLQ
SQS

### Simple S3 Event Pattern – Metadata Sync

Table in RDS
New file event
S3 bucket
Update metadata table
DynamoDB Table

### Management

EBS, Instance Store & EFS
Amazon EC2 Storage & Data

### What’s an EBS Volume?

- An EBS (Elastic Block Store) Volume is a network drive you can attach
to your instances while they run
- It allows your instances to persist data, even after their termination
- They can only be mounted to one instance at a time (at the CCP level)
- They are bound to a specific availability zone
- Analogy: Think of them as a “network USB stick”

### EBS Volume

- It’s a network drive (i.e. not a physical drive)
- It uses the network to communicate the instance, which means there might be a bit of
latency
- It can be detached from an EC2 instance and attached to another one quickly
- It’s locked to an Availability Zone (AZ)
- An EBS Volume in us-east-1a cannot be attached to us-east-1b
- To move a volume across, you first need to snapshot it
- Have a provisioned capacity (size in GBs, and IOPS)
- You get billed for all the provisioned capacity
- You can increase the capacity of the drive over time

---

## 7. EC2 Storage & Data Management

### EBS Volume - Example

US-EAST-1A
EBS
(10 GB)
EBS
(100 GB)
US-EAST-1B
EBS
(50 GB)
EBS
(50 GB)
EBS
(10 GB)
unattached

### EBS Volume Types

- EBS Volumes come in 6 types
- gp2 / gp3 (SSD): General purpose SSD volume that balances price and performance for
a wide variety of workloads
- io1 / io2 Block Express (SSD): Highest-performance SSD volume for mission-critical
low-latency or high-throughput workloads
- st1 (HDD): Low cost HDD volume designed for frequently accessed, throughputintensive workloads
- sc1 (HDD): Lowest cost HDD volume designed for less frequently accessed workloads
- EBS Volumes are characterized in Size | Throughput | IOPS (I/O Ops Per Sec)
- When in doubt always consult the AWS documentation – it’s good!
- Only gp2/gp3 and io1/io2 Block Express can be used as boot volumes

### General Purpose SSD

- Cost effective storage, low-latency
- System boot volumes, Virtual desktops, Development and test environments
- 1 GiB - 16 TiB
- gp3:
- Baseline of 3,000 IOPS and throughput of 125 MiB/s
- Can increase IOPS up to 16,000 and throughput up to 1000 MiB/s independently
- gp2:
- Small gp2 volumes can burst IOPS to 3,000
- Size of the volume and IOPS are linked, max IOPS is 16,000
- 3 IOPS per GiB, means at 5,334 GiB we are at the max IOPS
EBS Volume Types Use cases

### Provisioned IOPS (PIOPS) SSD

- Critical business applications with sustained IOPS performance
- Or applications that need more than 16,000 IOPS
- Great for databases workloads (sensitive to storage perf and consistency)
- io1 (4 GiB - 16 TiB):
- Max PIOPS: 64,000 for Nitro EC2 instances & 32,000 for other
- Can increase PIOPS independently from storage size
- io2 Block Express (4 GiB – 64 TiB):
- Sub-millisecond latency
- Max PIOPS: 256,000 with an IOPS:GiB ratio of 1,000:1
- Supports EBS Multi-attach
EBS Volume Types Use cases

### Hard Disk Drives (HDD)

- Cannot be a boot volume
- 125 GiB to 16 TiB
- Throughput Optimized HDD (st1)
- Big Data, Data Warehouses, Log Processing
- Max throughput 500 MiB/s – max IOPS 500
- Cold HDD (sc1):
- For data that is infrequently accessed
- Scenarios where lowest cost is important
- Max throughput 250 MiB/s – max IOPS 250
EBS Volume Types Use cases

### EBS – Volume Types Summary

haps://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html#solid-state-drives

### EBS Snapshots

- Make a backup (snapshot) of your EBS volume at a point in time
- Not necessary to detach volume to do snapshot, but recommended
- Can copy snapshots across AZ or Region
US-EAST-1A
US-EAST-1B
EBS Snapshot
EBS
(50 GB)
snapshot
restore
EBS
(50 GB)

### Amazon Data Lifecycle Manager

- Automate the creation, retention, and deletion
of EBS snapshots and EBS-backed AMIs
- Schedule backups, cross-account snapshot
copies, delete outdated backups, …
- Uses resource tags to identify the resources
(EC2 instances, EBS volumes)
- Can’t be used to manage snapshots/AMIs
created outside DLM
- Can’t be used to manage instance-store backed
AMIs
Tags
Tags
Key
Value
Environment
Prod
Value
Environment
Prod
EC2 Instance
EBS Volume
EBS Volumes
Amazon Data
Lifecycle Manager
Snapshots
Key
AMI

### EBS Snapshots – Fast Snapshot Restore (FSR)

- EBS Snapshots stored in S3
- By default, there’s a latency of I/O operations the
first time each block is accessed (block must be
pulled from S3)
- Solution: force the initialization of the entire
volume (using the dd or fio command), or you can
enable FSR
- FSR helps you to create a volume from a snapshot
that is fully initialized at creation (no I/O latency)
- Enabled for a snapshot in a particular AZ (billed
per minute – very expensive $$$)
- Can be enabled on snapshots created by Data
Lifecycle Manager
Amazon S3
EBS Snapshot
(FSR enabled)
EBS Snapshot
storage
blocks
EBS Volume
restore
EBS Volume

### EBS Snapshots Features

- EBS Snapshot Archive
- Move a Snapshot to an ”archive tier” that is
75% cheaper
- Takes within 24 to 72 hours for restoring
the archive
- Recycle Bin for EBS Snapshots
- Setup rules to retain deleted snapshots so
you can recover them after an accidental
deletion
- Specify retention (from 1 day to 1 year)
EBS Snapshot
Archive
EBS Snapshot
archive
EBS Snapshot
Recycle Bin
delete

### Amazon EFS – Elastic File System

- Managed NFS (network file system) that can be mounted on many EC2
- EFS works with EC2 instances in multi-AZ
- Highly available, scalable, expensive (3x gp2), pay per use
EC2 Instances
EC2 Instances
EC2 Instances
Security Group
EFS FileSystem

### Amazon EFS – Elastic File System

- Use cases: content management, web serving, data sharing, Wordpress
- Uses NFSv4.1 protocol
- Uses security group to control access to EFS
- Compatible with Linux based AMI (not Windows)
- Encryption at rest using KMS
- POSIX file system (~Linux) that has a standard file API
- File system scales automatically, pay-per-use, no capacity planning!

### EFS – Performance & Storage Classes

- EFS Scale
- 1000s of concurrent NFS clients, 10 GB+ /s throughput
- Grow to Petabyte-scale network file system, automatically
- Performance Mode (set at EFS creation time)
- General Purpose (default) – latency-sensitive use cases (web server, CMS, etc…)
- Max I/O – higher latency, throughput, highly parallel (big data, media processing)
- Throughput Mode
- Bursting – 1 TB = 50MiB/s + burst of up to 100MiB/s
- Provisioned – set your throughput regardless of storage size, ex: 1 GiB/s for 1 TB storage
- Elastic – automatically scales throughput up or down based on your workloads
- Up to 3GiB/s for reads and 1GiB/s for writes
- Used for unpredictable workloads

### EFS – Storage Classes

- Storage Tiers (lifecycle management feature – move
file after N days)
- Standard: for frequently accessed files
- Infrequent access (EFS-IA): cost to retrieve files, lower price
to store.
- Archive: rarely accessed data (few times each year), 50%
cheaper
- Implement lifecycle policies to move files between storage
tiers
- Availability and durability
no access
for 60 days
EFS Standard
move
Lifecycle Policy
- Standard: Multi-AZ, great for prod
- One Zone: One AZ, great for dev, backup enabled by
default, compatible with IA (EFS One Zone-IA)
- Over 90% in cost savings
EFS IA
Amazon EFS File System

### EBS vs EFS – Elastic Block Storage

- EBS volumes…
- one instance (except multi-attach io1/io2)
- are locked at the Availability Zone (AZ) level
- gp2: IO increases if the disk size increases
- gp3 & io1: can increase IO independently
Availability Zone 1
Availability Zone 2
- To migrate an EBS volume across AZ
- Take a snapshot
- Restore the snapshot to another AZ
- EBS backups use IO and you shouldn’t run
them while your application is handling a lot
of traffic
- Root EBS Volumes of instances get
terminated by default if the EC2 instance
gets terminated. (you can disable that)
EBS
snapshot
restore
EBS Snapshot
EBS

### EBS vs EFS – Elastic File System

- Mounting 100s of instances across AZ
- EFS share website files (WordPress)
- Only for Linux Instances (POSIX)
- EFS has a higher price point than EBS
- Can leverage Storage Tiers for cost savings
Availability Zone 1
Availability Zone 2
Linux
Linux
EFS
Mount
Target
EFS
Mount
Target
- Remember: EFS vs EBS vs Instance Store
EFS

### Section introduction

- Amazon S3 is one of the main building blocks of AWS
- It’s advertised as ”infinitely scaling” storage
- Many websites use Amazon S3 as a backbone
- Many AWS services use Amazon S3 as an integration as well
- We’ll have a step-by-step approach to S3

### Amazon S3 Use cases

- Backup and storage
- Disaster Recovery
- Archive
- Hybrid Cloud storage
- Application hosting
- Media hosting
- Data lakes & big data analytics
- Software delivery
- Static website
Nasdaq stores 7 years of
data into S3 Glacier
Sysco runs analytics on
its data and gain business
insights

---

## 8. Amazon S3

### Amazon S3 - Buckets

- Amazon S3 allows people to store objects (files) in “buckets” (directories)
- Buckets must have a globally unique name (across all regions all accounts)
- Buckets are defined at the region level
- S3 looks like a global service but buckets are created in a region
- Naming convention
- No uppercase, No underscore
- 3-63 characters long
- Not an IP
- Must start with lowercase letter or number
- Must NOT start with the prefix xn-• Must NOT end with the suffix -s3alias
S3 Bucket

### Amazon S3 - Objects

- Objects (files) have a Key
- The key is the FULL path:
- s3://my-bucket/my_file.txt
- s3://my-bucket/my_folder1/another_folder/my_file.txt
- The key is composed of prefix + object name
Object
- s3://my-bucket/my_folder1/another_folder/my_file.txt
- There’s no concept of “directories” within buckets
(although the UI will trick you to think otherwise)
- Just keys with very long names that contain slashes (“/”)
S3 Bucket
with Objects

### Amazon S3 – Objects (cont.)

- Object values are the content of the body:
- Max. Object Size is 5TB (5000GB)
- If uploading more than 5GB, must use “multi-part upload”
- Metadata (list of text key / value pairs – system or user metadata)
- Tags (Unicode key / value pair – up to 10) – useful for security / lifecycle
- Version ID (if versioning is enabled)

### Amazon S3 – Security

- User-Based
- IAM Policies – which API calls should be allowed for a specific user from IAM
- Resource-Based
- Bucket Policies – bucket wide rules from the S3 console - allows cross account
- Object Access Control List (ACL) – finer grain (can be disabled)
- Bucket Access Control List (ACL) – less common (can be disabled)
- Note: an IAM principal can access an S3 object if
- The user IAM permissions ALLOW it OR the resource policy ALLOWS it
- AND there’s no explicit DENY
- Encryption: encrypt objects in Amazon S3 using encryption keys

### S3 Bucket Policies

- JSON based policies
- Resources: buckets and objects
- Effect: Allow / Deny
- Actions: Set of API to Allow or Deny
- Principal: The account or user to apply the
policy to
- Use S3 bucket for policy to:
- Grant public access to the bucket
- Force objects to be encrypted at upload
- Grant access to another account (Cross
Account)

### Example: Public Access - Use Bucket Policy

S3 Bucket Policy
Allows Public Access
Anonymous www website visitor
S3 Bucket

### Example: User Access to S3 – IAM permissions

IAM Policy
IAM User
S3 Bucket

### Example: EC2 instance access - Use IAM Roles

EC2 Instance Role
IAM permissions
EC2 Instance
S3 Bucket

### Use Bucket Policy

S3 Bucket Policy
Allows Cross-Account
IAM User
Other AWS account
S3 Bucket
Advanced: Cross-Account Access –

### Bucket settings for Block Public Access

- These settings were created to prevent company data leaks
- If you know your bucket should never be public, leave these on
- Can be set at the account level

### S3 Bucket Policies

- Use S3 bucket for policy to:
- Grant public access to the bucket
- Force objects to be encrypted at upload
- Grant access to another account (Cross Account)
- Optional Conditions on:
- Public IP or Elastic IP (not on Private IP)
- Source VPC or Source VPC Endpoint – only works with VPC Endpoints
- CloudFront Origin Identity
- MFA
- Examples here:

### Bucket Policies – Advanced Examples

- Restrict access to only principals from AWS
accounts inside an AWS Organization using
aws:PrincipalOrgID condition key
- Prevent uploads of unencrypted objects to an
S3 bucket using s3:x-amz-server-side-encryption
condition key

### Bucket Policies – Advanced Examples

- Restrict access to specific IP addresses using
NotIpAddress condition key

### Bucket Policies – Advanced Examples

- Grant user access to list and download all
objects in an S3 bucket
- Restrict access to users authenticated using MFA
using MultiFactorAuthPresent condition key

### Amazon S3 - Versioning

- You can version your files in Amazon S3
- It is enabled at the bucket level
- Same key overwrite will change the “version”: 1, 2, 3….
- It is best practice to version your buckets
- Protect against unintended deletes (ability to restore a version)
- Easy roll back to previous version
- Notes:
- Any file that is not versioned prior to enabling versioning will
have version “null”
- Suspending versioning does not delete the previous versions
User
upload
S3 Bucket
(my-bucket)
Version 1
Version 2
Version 3
s3://my-bucket/my-file.docx

### Amazon S3 – Versioning – Troubleshooting

- When you enable Versioning for the first time, you have to wait at least
15 minutes to be fully propagated
- After enable Versioning, HTTP 404 NoSuchKey error when trying to get
Objects created or updated
- Wait 15 minutes after enable Versioning before issuing write operations
- 

### Amazon S3 – Replication (CRR & SRR)

- Must enable Versioning in source and destination buckets
- Cross-Region Replication (CRR)
- Same-Region Replication (SRR)
- Buckets can be in different AWS accounts
- Copying is asynchronous
- Must give proper IAM permissions to S3
S3 Bucket
(eu-west-1)
asynchronous
replication
- Use cases:
- CRR – compliance, lower latency access, replication across accounts
- SRR – log aggregation, live replication between production and test
accounts
S3 Bucket
(us-east-2)

### Amazon S3 – Replication (Notes)

- After you enable Replication, only new objects are replicated
- Optionally, you can replicate existing objects using S3 Batch Replication
- Replicates existing objects and objects that failed replication
- For DELETE operations
- Can replicate delete markers from source to target (optional setting)
- Deletions with a version ID are not replicated (to avoid malicious deletes)
- There is no “chaining” of replication
- If bucket 1 has replication into bucket 2, which has replication into bucket 3
- Then objects created in bucket 1 are not replicated to bucket 3

### Amazon S3 – Cross-account S3 Replication

Account A (111122223333)
Source Bucket
(source-bucket)
IAM Role
(account-a-iam-role)
Account B (444455556666)
Destination Bucket
(dest-bucket)
Bucket Policy

### Amazon S3 – Cross-account S3 Replication

- By default, the owner of the source object
(source bucket) is the owner of the replica object
(destination bucket)
- To change the replica object owner to the
destination account:
- Add the owner override option to the replication rule
config
- In source account, grant Amazon S3 permission to
change replica ownership
(s3:ObjectOwnerOverrideToBucketOwner in the IAM
role)
- In destination account, update the destination bucket
policy to add the permission to allow change replica
ownership (s3:ObjectOwnerOverrideToBucketOwner)
Source IAM Role
Destination Bucket Policy

### Amazon S3 – Replication Time Control (RTC)

- Feature of Amazon S3 Replication that guarantees replication speed
- 99.99% of new objects replicated within 15 minutes
- Provides predictable, auditable replication time
- Publishes CloudWatch metrics to monitoring
S3 RTC
- Alerts you if replication falls behind
- Can replicate to same or different AWS Region
- Helps you meet compliance or business requirements
- Extra cost per GB for the replication

### Amazon S3 – Moving between Storage Classes

- You can transition objects between
storage classes
- For infrequently accessed object,
move them to Standard IA
- For archive objects that you don’t
need fast access to, move them to
Glacier or Glacier Deep Archive
- Moving objects can be automated
using a Lifecycle Rules
Standard
Standard IA
Intelligent Tiering
One-Zone IA
Glacier Instant Retrieval
Glacier Flexible Retrieval
Glacier Deep Archive

### Amazon S3 – Lifecycle Rules

- Transition Actions – configure objects to transition to another storage class
- Move objects to Standard IA class 60 days after creation
- Move to Glacier for archiving after 6 months
- Expiration actions – configure objects to expire (delete) after some time
- Access log files can be set to delete after a 365 days
- Can be used to delete old versions of files (if versioning is enabled)
- Can be used to delete incomplete Multi-Part uploads
- Rules can be created for a certain prefix (example: s3://mybucket/mp3/*)
- Rules can be created for certain objects Tags (example: Department: Finance)

### Amazon S3 – Lifecycle Rules (Scenario 1)

- Your application on EC2 creates images thumbnails after profile photos
are uploaded to Amazon S3. These thumbnails can be easily recreated,
and only need to be kept for 60 days. The source images should be able
to be immediately retrieved for these 60 days, and afterwards, the user
can wait up to 6 hours. How would you design this?
- S3 source images can be on Standard, with a lifecycle configuration to
transition them to Glacier after 60 days
- S3 thumbnails can be on One-Zone IA, with a lifecycle configuration to
expire them (delete them) after 60 days

### Amazon S3 – Lifecycle Rules (Scenario 2)

- A rule in your company states that you should be able to recover your
deleted S3 objects immediately for 30 days, although this may happen
rarely. After this time, and for up to 365 days, deleted objects should be
recoverable within 48 hours.
- Enable S3 Versioning in order to have object versions, so that “deleted
objects” are in fact hidden by a “delete marker” and can be recovered
- Transition the “noncurrent versions” of the object to Standard IA
- Transition afterwards the “noncurrent versions” to Glacier Deep Archive

### Amazon S3 Analytics – Storage Class Analysis

- Help you decide when to transition objects to
the right storage class
- Recommendations for Standard and Standard IA
S3 Bucket
- Does NOT work for One-Zone IA or Glacier
- Report is updated daily
- 24 to 48 hours to start seeing data analysis
S3 Analytics
.csv report
- Good first step to put together Lifecycle Rules
(or improve them)!
Date
StorageClass
ObjectAge
8/22/2022
STANDARD
000-014
8/25/2022
STANDARD
030-044
9/6/2022
STANDARD
120-149

### S3 Event Notifications

- S3:ObjectCreated, S3:ObjectRemoved,
S3:ObjectRestore, S3:Replication…
- Object name filtering possible (*.jpg)
- Use case: generate thumbnails of images
uploaded to S3
- Can create as many “S3 events” as desired
SNS
events
Amazon S3
- S3 event notifications typically deliver events
in seconds but can sometimes take a minute
or longer
SQS
Lambda Function

### S3 Event Notifications – IAM Permissions

SNS
SNS Resource (Access) Policy
events
Amazon S3
SQS
SQS Resource (Access) Policy
Lambda Function
Lambda Resource Policy

### with Amazon EventBridge

events
All events
Amazon S3
bucket
rules
Amazon
EventBridge
Over 18
AWS services
as destinations
- Advanced filtering options with JSON rules (metadata, object size, name...)
- Multiple Destinations – ex Step Functions, Kinesis Streams / Firehose…
- EventBridge Capabilities – Archive, Replay Events, Reliable delivery
S3 Event Notifications

### S3 – Baseline Performance

- Amazon S3 automatically scales to high request rates, latency 100-200 ms
- Your application can achieve at least 3,500 PUT/COPY/POST/DELETE or
5,500 GET/HEAD requests per second per prefix in a bucket.
- There are no limits to the number of prefixes in a bucket.
- Example (object path => prefix):
- bucket/folder1/sub1/file => /folder1/sub1/
- bucket/folder1/sub2/file => /folder1/sub2/
- bucket/1/file
=> /1/
- bucket/2/file
=> /2/
- If you spread reads across all four prefixes evenly, you can achieve 22,000
requests per second for GET and HEAD

### S3 Performance

- Multi-Part upload:
- S3 Transfer Acceleration
- recommended for files > 100MB,
must use for files > 5GB
- Can help parallelize uploads (speed
up transfers)
Divide
In parts
- Increase transfer speed by transferring
file to an AWS edge location which will
forward the data to the S3 bucket in the
target region
- Compatible with multi-part upload
Parallel uploads
Fast
(public www)
BIG file
Amazon S3
File in USA
Fast
(private AWS)
Edge Location
USA
S3 Bucket
Australia

### S3 Performance – S3 Byte-Range Fetches

- Parallelize GETs by requesting specific
byte ranges
- Better resilience in case of failures
Can be used to speed up downloads
Can be used to retrieve only partial
data (for example the head of a file)
File in S3
File in S3
Byte-range request for header
(first XX bytes)
Part 1
Part 2
Part N
Requests in parallel
header

---

## 9. Amazon S3 – Advanced & Security

### S3 Batch Operations

S3 Inventory
- Perform bulk operations on existing S3 objects with a
single request, example:
- Modify object metadata & properties
- Copy objects between S3 buckets
- Encrypt un-encrypted objects
- Modify ACLs, tags
- Restore objects from S3 Glacier
- Invoke Lambda function to perform custom action on
each object
- A job consists of a list of objects, the action to
perform, and optional parameters
- S3 Batch Operations manages retries, tracks progress,
sends completion notifications, generate reports …
- You can use S3 Inventory to get object list and use
Athena to query and filter your objects
Objects List Report
Athena
operation
parameters
User
filter
filtered list
S3 Batch
Operations
Processed Objects

### S3 Inventory

- List objects and their corresponding metadata (alternative to S3 List API
operation)
- Usage examples:
- Audit and report on the replication and encryption status of your objects
- Get the number of objects in an S3 bucket
- Identify the total storage of previous object versions
- Generate daily or weekly reports
- Output files: CSV, ORC, or Apache Parquet
- You can query all the data using Amazon Athena, Redshift, Presto, Hive,
Spark…
- Use cases: Business, Compliance, Regulatory needs, …

### S3 Multi Part Upload – Deep Dive

- Upload large objects in parts (any order)
- Recommended for files > 100MB, must use for
files > 5GB
- Can help parallelize uploads (speed up
transfers)
- Max. parts: 10,000
- Failures: restart uploading ONLY failed parts
(improves performance)
- Use Lifecycle Policy to automate old parts
deletion of unfinished upload after x days (e.g.,
network outage)
- Upload using AWS CLI or AWS SDK
BIG file
parts
(max. 10,000)
parallel
uploads
Amazon S3
Concatenating parts
(COMPLETE request)

### Amazon Athena

- Serverless query service to analyze data stored in Amazon S3
- Uses standard SQL language to query the files (built on Presto)
- Supports CSV, JSON, ORC, Avro, and Parquet
- Pricing: $5.00 per TB of data scanned
- Commonly used with Amazon Quicksight for
reporting/dashboards
- Use cases: Business intelligence / analytics / reporting, analyze &
query VPC Flow Logs, ELB Logs, CloudTrail trails, etc...
- Exam Tip: analyze data in S3 using serverless SQL, use Athena
load data
S3 Bucket
Query & Analyze
Amazon
Athena
Reporting & Dashboards
Amazon
QuickSight

### Amazon Athena – Performance Improvement

- Use columnar data for cost-savings (less scan)
- Apache Parquet or ORC is recommended
- Huge performance improvement
- Use Glue to convert your data to Parquet or ORC
- Compress data for smaller retrievals (bzip2, gzip, lz4, snappy, zlip, zstd…)
- Partition datasets in S3 for easy querying on virtual columns
- s3://yourBucket/pathToTable
/<PARTITION_COLUMN_NAME>=<VALUE>
/<PARTITION_COLUMN_NAME>=<VALUE>
/<PARTITION_COLUMN_NAME>=<VALUE>
/etc…
- Example: s3://athena-examples/flight/parquet/year=1991/month=1/day=1/
- Use larger files (> 128 MB) to minimize overhead

### Amazon Athena – Federated Query

- Allows you to run SQL queries across
data stored in relational, non-relational,
object, and custom data sources (AWS
or on-premises)
- Uses Data Source Connectors that run
on AWS Lambda to run Federated
Queries (e.g., CloudWatch Logs,
DynamoDB, RDS, …)
- Store the results back in Amazon S3
Amazon
Athena
S3 Bucket
Lambda
ElastiCache
DocumentDB
HBase in EMR
DynamoDB
Redshift
(Data Source
Connector)
Database
(On-Premises)
Aurora
SQL Server
MySQL

### Amazon S3 – MFA Delete

- MFA (Multi-Factor Authentication) – force users to generate a code on a
device (usually a mobile phone or hardware) before doing important
operations on S3
- MFA will be required to:
- Permanently delete an object version
- Suspend Versioning on the bucket
Google Authenticator
- MFA won’t be required to:
- Enable Versioning
- List deleted versions
MFA Hardware Device
- To use MFA Delete, Versioning must be enabled on the bucket
- Only the bucket owner (root account) can enable/disable MFA Delete

### S3 Access Logs

- For audit purpose, you may want to log all access to S3 buckets
- Any request made to S3, from any account, authorized or denied,
will be logged into another S3 bucket
- That data can be analyzed using data analysis tools…
- The target logging bucket must be in the same AWS region
- The log format is at:
requests
My-bucket
Log all
requests
Logging Bucket

### S3 Access Logs: Warning

- Do not set your logging bucket to be the monitored bucket
- It will create a logging loop, and your bucket will grow exponentially
Logging loop
PutObject
App Bucket &
Logging Bucket
Do not try this at home J

### S3 Glacier Vault Lock

- Adopt a WORM (Write Once Read
Many) model
- Create a Vault Lock Policy
- Lock the policy for future edits
(can no longer be changed or deleted)
- Helpful for compliance and data
retention
Object
Vault Lock Policy
Object can’t be deleted

### S3 Object Lock (versioning must be enabled)

- Adopt a WORM (Write Once Read Many) model
- Block an object version deletion for a specified amount of time
- Retention mode - Compliance:
- Object versions can't be overwritten or deleted by any user, including the root user
- Objects retention modes can't be changed, and retention periods can't be shortened
- Retention mode - Governance:
- Most users can't overwrite or delete an object version or alter its lock settings
- Some users have special permissions to change the retention or delete the object
- Retention Period: protect the object for a fixed period, it can be extended
- Legal Hold:
- protect the object indefinitely, independent from retention period
- can be freely placed and removed using the s3:PutObjectLegalHold IAM permission

### VPC Gateway Endpoint for Amazon S3

- No cost
- Only accessed by resources in the VPC
where it’s created
- Make sure “DNS Support” is Enabled
- Keep on using the public DNS of Amazon S3
- Make sure Outbound rules of SG of EC2
instance allows traffic to S3
Amazon S3
VPC
(DNS Support: Enabled)
VPC Gateway
Endpoint for S3
Private Subnet
Security Group
(Allow Outbound)
EC2 Instance
Route
Table

### VPC Interface Endpoint for S3

- ENI(s) are deployed in your Subnets
(Security Groups can be attached to
ENIs)
- Can access from on-premises (VPN or
Direct Connect)
- Costs $0.01 per hour per AZ
- Both VPC settings “Enable DNS
hostnames” and “Enable DNS Support”
must be 'true’
s3.us-west-1.amazonaws.com
(Public DNS Name)
Amazon S3
Availability Zone 1
VPC
(DNS Support: Enabled)
(DNS Hostnames: Enabled)
Private Subnet
Availability Zone 2
VPC Interface
Endpoint for S3
Private Subnet
Security Group
Security Group
ENI
ENI
Private Subnet
Private Subnet

### IAM Access Analyzer for S3

- Ensures that only intended people have access to your S3 buckets
- Example: publicly accessible bucket, bucket shared with other AWS account…
- Evaluates S3 Bucket Policies, S3 ACLs, S3 Access Point Policies
- Powered by IAM Access Analyzer

## 10. Advanced Storage Solutions

### Amazon FSx – Overview

- Launch 3rd party high-performance file systems on AWS
- Fully managed service
FSx for Lustre
FSx for
NetApp ONTAP
FSx for Windows
File Server
FSx for
OpenZFS

### Amazon FSx for Windows (File Server)

- FSx for Windows is a fully managed Windows file system share drive
- Supports SMB protocol & Windows NTFS
- Microsoft Active Directory integration, ACLs, user quotas
- Can be mounted on Linux EC2 instances
- Supports Microsoft's Distributed File System (DFS) Namespaces (group files across multiple FS)
- Scale up to 10s of GB/s, millions of IOPS, 100s PB of data
- Storage Options:
- SSD – latency sensitive workloads (databases, media processing, data analytics, …)
- HDD – broad spectrum of workloads (home directory, CMS, …)
- Can be accessed from your on-premises infrastructure (VPN or Direct Connect)
- Can be configured to be Multi-AZ (high availability)
- Data is backed-up daily to S3

### Amazon FSx for Lustre

- Lustre is a type of parallel distributed file system, for large-scale computing
- The name Lustre is derived from “Linux” and “cluster
- Machine Learning, High Performance Computing (HPC)
- Video Processing, Financial Modeling, Electronic Design Automation
- Scales up to 100s GB/s, millions of IOPS, sub-ms latencies
- Storage Options:
- SSD – low-latency, IOPS intensive workloads, small & random file operations
- HDD – throughput-intensive workloads, large & sequential file operations
- Seamless integration with S3
- Can “read S3” as a file system (through FSx)
- Can write the output of the computations back to S3 (through FSx)
- Can be used from on-premises servers (VPN or Direct Connect)

### FSx Lustre - File System Deployment Options

- Scratch File System
- Temporary storage
- Data is not replicated (doesn’t persist if file
server fails)
- High burst (6x faster, 200MBps per TiB)
- Usage: short-term processing, optimize
costs
- Persistent File System
- Long-term storage
- Data is replicated within same AZ
- Replace failed files within minutes
- Usage: long-term processing, sensitive data
Region
Availability Zone 1
Compute
instances
ENI
FSx For Lustre
(Scratch file system)
Availability Zone 2
Compute
instances
S3 bucket
(optional data repository)
Region
Availability Zone 1
Compute
instances
FSx For Lustre
(Persistent file system)
ENI
Availability Zone 2
Compute
instances
S3 bucket
(optional data repository)

### Amazon FSx for NetApp ONTAP

- Managed NetApp ONTAP on AWS
- File System compatible with NFS, SMB, iSCSI protocol
- Move workloads running on ONTAP or NAS to AWS
- Works with:
- 
- 
- 
- 
- 
- 
Linux
Windows
MacOS
VMware Cloud on AWS
Amazon Workspaces & AppStream 2.0
Amazon EC2, ECS and EKS
- Storage shrinks or grows automatically
- Snapshots, replication, low-cost, compression and data
de-duplication
- Point-in-time instantaneous cloning (helpful for testing
new workloads)
Amazon FSx for
NetApp ONTAP FS
NFS, SMB, iSCSI
ECS
VMware Cloud
on AWS
Amazon
AppStream 2.0
EKS
Amazon
On-premises
WorkSpaces
Server

### Amazon FSx for OpenZFS

- Managed OpenZFS file system on AWS
- File System compatible with NFS (v3, v4, v4.1, v4.2)
- Move workloads running on ZFS to AWS
- Works with:
Amazon FSx
for OpenZFS
- Linux
- Windows
- MacOS
- VMware Cloud on AWS
- Amazon Workspaces & AppStream 2.0
- Amazon EC2, ECS and EKS
- Up to 1,000,000 IOPS with < 0.5ms latency
- Snapshots, compression and low-cost
- Point-in-time instantaneous cloning (helpful for
testing new workloads)
NFS (v3, v4, v4.1, v4.2)
ECS
VMware Cloud
on AWS
Amazon
AppStream 2.0
EKS
Amazon
On-premises
WorkSpaces
Server

### FSx for SysOps

- FSx for Windows – Single-AZ
- Automatically replicates data within an
- Two generations: Single-AZ 1 (SSD),
Single-AZ 2 (SSD & HDD)
- FSx for Windows – Multi-AZ
- Automatically replicates data across
AZs (synchronous)
- Standby file server in a different AZ
(automatic failover)
synchronous
replication
File System
File System
failover
File System
(standby)

### Hybrid Cloud for Storage

- AWS is pushing for ”hybrid cloud”
- Part of your infrastructure is on the cloud
- Part of your infrastructure is on-premises
- This can be due to
- Long cloud migrations
- Security requirements
- Compliance requirements
- IT strategy
- S3 is a proprietary storage technology (unlike EFS / NFS), so how do
you expose the S3 data on-premises?
- AWS Storage Gateway!

### AWS Storage Cloud Native Options

Block
Amazon EBS
EC2 Instance
Store
File
Amazon EFS
Object
Amazon FSx
Amazon S3
Amazon Glacier

### AWS Storage Gateway

- Bridge between on-premises data and cloud data
- Use cases:
- disaster recovery
- backup & restore
- tiered storage
- on-premises cache & low-latency files access
- Types of Storage Gateway:
- S3 File Gateway
- Volume Gateway
- Tape Gateway
Storage Gateway

### Amazon S3 File Gateway

- Configured S3 buckets are accessible using the NFS and SMB protocol
- Most recently used data is cached in the file gateway
- Supports S3 Standard, S3 Standard IA, S3 One Zone A, S3 Intelligent Tiering
- Transition to S3 Glacier using a Lifecycle Policy
- Bucket access using IAM roles for each File Gateway
- SMB Protocol has integration with Active Directory (AD) for user authentication
AWS Cloud
Corporate
Data Center
HTTPS
NFS or SMB
Application
Server
S3 File
Gateway
S3 Standard
S3 Standard-IA
S3 One Zone-IA
S3 Intelligent-Tiering
Lifecycle
policy
S3 Glacier

### Volume Gateway

- Block storage using iSCSI protocol backed by S3
- Backed by EBS snapshots which can help restore on-premises volumes!
- Cached volumes: low latency access to most recent data
- Stored volumes: entire dataset is on premise, scheduled backups to S3
Corporate
Data Center
AWS Cloud
Region
HTTPS
iSCSI
Application
Server
Volume Gateway
S3 Bucket
Amazon EBS
Snapshots

### Tape Gateway

- Some companies have backup processes using physical tapes (!)
- With Tape Gateway, companies use the same processes but, in the cloud
- Virtual Tape Library (VTL) backed by Amazon S3 and Glacier
- Back up data using existing tape-based processes (and iSCSI interface)
- Works with leading backup software vendors
Corporate
Data Center
iSCSI
Backup
Server
AWS Cloud
Region
Media
Changer
Tape
Drive
HTTPS
Tape
Gateway
Virtual Tapes
stored in
Amazon S3
Archived Tapes
stored in
Amazon Glacier

### AWS Storage Gateway

On-Premises
AWS Cloud
NFS/SMB
File Gateway
User/group file shares
local cache
iSCSI
Any S3 Storage Class
Including Glacier
Amazon S3
AWS EBS
Encryption in Transit
Internet or Direct Connect
Volume Gateway
Application Server
Amazon S3
excluding Glacier &
Glacier Deep Archive
local cache
Storage Gateway
Eject from backup application
iSCSI VTL
Backup Application
Tape Gateway
local cache
Gateway Deployment Options
VM(VMware, Hyper-V, KVM)
Amazon S3
Tape Library
Tape Archive
Glacier &
Glacier Deep Archive

### Storage Gateway – SysOps

- File Gateway is POSIX compliant (Linux file system)
- POSIX metadata ownership, permissions, and timestamps stored in the object’s
metadata in S3
- Reboot Storage Gateway VM: (e.g., maintenance)
- File Gateway: simply restart the Storage Gateway VM
- Volume and Tape Gateway:
- Stop Storage Gateway Service (AWS Console, VM local Console, Storage Gateway API)
- Reboot the Storage Gateway VM
- Start Storage Gateway Service (AWS Console, VM local Console, Storage Gateway API)

### Storage Gateway – Activations

- Two ways to get Activation Key:
- Using the Gateway VM CLI
- Make a web request to the Gateway VM (Port
80)
- Troubleshooting Activation Failures:
- Make sure the Gateway VM has port 80
opened
- Check that the Gateway VM has the correct
time and synchronizing its time automatically to
a Network Time Protocol (NTP) server
curl
‘vm_ip_address/?activationRegion=
activation_region&no_redirect’
F9KRH-….
AWS Console
User
F9KRH-….
Corporate Data Center
Port 80
sync
File
Gateway
NTP Server

### Storage Gateway – Volume Gateway Cache

- Cached mode: only the most recent data
is stored
- Looking at cache efficiency
- Look at the CacheHitPercent metric (you
want it to be high)
- Look at the CachePercentUsed (you don’t
want it to be too high)
- Create a larger cache disk
- Use the cached volume to clone a new
volume of a larger size
- Select the new disk as the cached volume
AWS Cloud
Cache Miss
S3 Bucket
CacheHitPercent: 30%
Corporate Data Center
Cache
Cached Volume
Hit
Gateway
iSCSI
Server
Client

## 11. Amazon CloudFront

### Amazon CloudFront

- Content Delivery Network (CDN)
- Improves read performance, content
is cached at the edge
- Improves users experience
- Hundreds of Points of Presence
globally (edge locations, caches)
- DDoS protection (because
worldwide), integration with Shield, Source: AWS Web Application Firewall

### CloudFront – Origins

- S3 bucket
- For distributing files and caching them at the edge
- For uploading files to S3 through CloudFront
- Secured using Origin Access Control (OAC)
- VPC Origin
- For applications hosted in VPC private subnets
- Private Application Load Balancer / Network Load Balancer / EC2 Instances
- Custom Origin (HTTP)
- S3 website (must first enable the bucket as a static S3 website)
- Any public HTTP backend you want (example: Public ALB)

---

### CloudFront at a high level

GET /beach.jpg?size=300x300 HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.example.com
Accept-Encoding: gzip, deflate
Forward Request
to your Origin
Client
CloudFront Edge Location
Origin
HTTP
Local Cache

### CloudFront – S3 as an Origin

AWS Cloud
Public www
Private AWS
Edge
Los Angeles
Private AWS
Edge
Mumbai
Private AWS
Private AWS
Origin (S3 bucket)
OAC
Public www
Edge
Melbourne
Edge
São Paulo
Origin Access Control
+ S3 bucket policy

### CloudFront vs S3 Cross Region Replication

- CloudFront:
- Global Edge network
- Files are cached for a TTL (maybe a day)
- Great for static content that must be available everywhere
- S3 Cross Region Replication:
- Must be setup for each region you want replication to happen
- Files are updated in near real-time
- Read only
- Great for dynamic content that needs to be available at low-latency in few
regions

### CloudFront Caching

- The cache lives at each CloudFront Edge
Location
- CloudFront identifies each object in the cache
using the Cache Key
Client
request
Origin
- A unique identifier for each object in the cache
- You want to maximize the Cache Hit ratio to
minimize requests to the origin
- You can invalidate part of the cache using the
CreateInvalidation API
forward
Edge Location
check/update cached objects
expires based on TTL

### CloudFront Caching – Cache Policy

Cache Policy using
HTTP Headers
- Cache based on:
- HTTP Headers: None – Whitelist
- Cookies: None – Whitelist – Include All Except – All
- Query Strings: None – Whitelist – Include
All-Except – All
- Control the TTL (0 seconds to 1 year),
can be set by the origin using the CacheControl header, Expires header…
- Create your own policy or use Predefined
Managed Policies
GET /blogs/myblog.html HTTP/1.1
Host: mywebsite.com
User-Agent: Mozilla/5.0 (Mac OS X 10_15_2….)
Date: Tue, 28 Jan 2021 17:01:57 GMT
Authorization: SAPISIDHASH fdd00ecee39fe….
Keep-Alive: 300
Language: fr-fr
request
Client
CloudFront

### CloudFront – Cache Invalidations

- In case you update the back-end
origin, CloudFront doesn’t know
about it and will only get the
refreshed content after the TTL has
expired
- However, you can force an entire or
partial cache refresh (thus bypassing
the TTL) by performing a CloudFront
Invalidation
- You can invalidate all files (*) or a
special path (/images/*)
GET /index.html
CloudFront
invalidate
Edge Location
Edge Location
Cache
Cache
index.html
update files
Invalidate
- /index.html
- /images/*
/images/
S3 Bucket
(origin)
index.html
/images/

### CloudFront – without Origin Shield

- CloudFront distributions are
accessed through multiple
Edge Locations
- These Edge Locations may
perform the same requests to
the Origin
- Your Origin can be overload
and its costs increase
Edge
Edge
Edge
Location Location Location
Same file
(multiple copies cached)
Amazon S3

### CloudFront – with Origin Shield

- Origin Shield – extra caching
layer that helps minimize your
origin’s load and improve its
availability
- Resides between Regional
Edge Location and your Origin
- Combine multiple requests for
the same object into a single
request (reduce origin load)
Edge
Edge
Edge
Location Location Location
Origin Shield
Amazon S3

### Using VPC Origins

- Allows you to deliver content from your applications hosted in your
VPC private subnets (no need to expose them on the Internet)
- Deliver traffic to private:
- Application Load Balancer
- Network Load Balancer
- EC2 Instances
VPC
Private Subnet
Application Load Balancer
Users
CloudFront
VPC
Origin
Network Load Balancer
EC2 Instance
Edge Location
CloudFront – ALB or EC2 as an origin

### Using Public Network

Security group
Allow Public IP of Edge Locations
EC2 Instances
Must be Public
Edge Location
Allow Public IP of
Edge Locations
Edge Location
Public IPs
Security group
Application Load Balancer
Must be Public
Allow Security Group
of Load Balancer
Security group
EC2 Instances
Can be Private
CloudFront – ALB or EC2 as an origin

### CloudFront Geo Restriction

- You can restrict who can access your distribution
- Allowlist: Allow your users to access your content only if they're in one of the
countries on a list of approved countries.
- Blocklist: Prevent your users from accessing your content if they're in one of the
countries on a list of banned countries.
- The “country” is determined using a 3rd party Geo-IP database
- Use case: Copyright Laws to control access to content

### CloudFront Access Logs

- Logs every request made to CloudFront into a logging S3 bucket
- Can send logs to CloudWatch Logs and Kinesis Data Firehose
Edge Location
Edge Location
data about requests
Website A
Amazon S3
Log File
(Distribution A)
Origin Bucket
Website B
Edge Location
Users
Edge Location
Log File
(Distribution B)
Logs Bucket

### CloudFront Reports

- It’s possible to generate reports on:
- Cache Statistics Report
- Popular Objects Report
- Top Referrers Report
- Usage Reports
- Viewers Report
- These reports are based on the data from the Access Logs.

### CloudFront troubleshooting

- CloudFront caches HTTP 4xx and 5xx status codes returned by S3 ( or
the origin server)
- 4xx error code indicates that user doesn’t have access to the underlying
bucket (403) or the object user is requesting is not found (404)
- 5xx error codes indicates Gateway issues

### CloudFront with ALB sticky sessions

- Must forward / whitelist the cookie that controls the session affinity to
the origin to allow the session affinity to work
- Set a TTL to a value lesser than when the authentication cookie expires
Whitelisting on
AWSALB cookie
GET /orders/all HTTP/1.1
Cookie: AWSALB=…
CloudFront
forward cookies
requests
AWSALB
GET /orders/all HTTP/1.1
Cookie: AWSALB=…
AWSALB
Application
Load Balancer
Edge Location
Target Group

### AWS Global Accelerator

- Leverage the AWS internal
network to route to your
application
- 2 Anycast IP are created for your
application
- The Anycast IP send traffic directly
to Edge Locations
- The Edge locations send the traffic
to your application
America
Edge location
Europe
Private AWS
Australia
Public ALB
India

### AWS Global Accelerator

- Works with Elastic IP, EC2 instances, ALB, NLB, public or private
- Consistent Performance
- Intelligent routing to lowest latency and fast regional failover
- No issue with client cache (because the IP doesn’t change)
- Internal AWS network
- Health Checks
- Global Accelerator performs a health check of your applications
- Helps make your application global (failover less than 1 minute for unhealthy)
- Great for disaster recovery (thanks to the health checks)
- Security
- only 2 external IP need to be whitelisted
- DDoS protection thanks to AWS Shield

### AWS Global Accelerator vs CloudFront

- They both use the AWS global network and its edge locations around the world
- Both services integrate with AWS Shield for DDoS protection.
- CloudFront
- Improves performance for both cacheable content (such as images and videos)
- Dynamic content (such as API acceleration and dynamic site delivery)
- Content is served at the edge
- Global Accelerator
- Improves performance for a wide range of applications over TCP or UDP
- Proxying packets at the edge to applications running in one or more AWS Regions.
- Good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP
- Good for HTTP use cases that require static IP addresses
- Good for HTTP use cases that required deterministic, fast regional failover

---

## 12. Databases in AWS

### Amazon RDS Overview

- RDS stands for Relational Database Service
- It’s a managed DB service for DB use SQL as a query language.
- It allows you to create databases in the cloud that are managed by AWS
- Postgres
- MySQL
- MariaDB
- Oracle
- Microsoft SQL Server
- IBM DB2
- Aurora (AWS Proprietary database)

### DB on EC2

- RDS is a managed service:
- Automated provisioning, OS patching
- Continuous backups and restore to specific timestamp (Point in Time Restore)!
- Monitoring dashboards
- Read replicas for improved read performance
- Multi AZ setup for DR (Disaster Recovery)
- Maintenance windows for upgrades
- Scaling capability (vertical and horizontal)
- Storage backed by EBS
- BUT you can’t SSH into your instances
Advantage over using RDS versus deploying

### RDS – Storage Auto Scaling

- Helps you increase storage on your RDS DB instance
dynamically
- When RDS detects you are running out of free database
storage, it scales automatically
- Avoid manually scaling your database storage
- You have to set Maximum Storage Threshold (maximum limit
for DB storage)
- Automatically modify storage if:
- Free storage is less than 10% of allocated storage
- Low-storage lasts at least 5 minutes
- 6 hours have passed since last modification
- Useful for applications with unpredictable workloads
- Supports all RDS database engines
Application
Read/Write
Storage

### RDS Read Replicas for read scalability

- Up to 15 Read Replicas
- Within AZ, Cross AZ or
Cross Region
- Replication is ASYNC,
so reads are eventually
consistent
- Replicas can be
promoted to their own
- Applications must
update the connection
string to leverage read
replicas
Application
reads
RDS DB
instance read
replica
writes
reads
reads
ASYNC
replication
ASYNC
replication
RDS DB
instance
RDS DB
instance read
replica

### RDS Read Replicas – Use Cases

- You have a production database
that is taking on normal load
- You want to run a reporting
application to run some analytics
- You create a Read Replica to run
the new workload there
- The production application is
unaffected
- Read replicas are used for SELECT
(=read) only kind of statements
(not INSERT, UPDATE, DELETE)
Production
Application
reads
reads
ASYNC
replication
RDS DB
instance
Reporting
Application
RDS DB
instance read
replica

### RDS Read Replicas – Network Cost

- In AWS there’s a network cost when data goes from one AZ to another
- For RDS Read Replicas within the same region, you don’t pay that fee
Same Region / Different AZ
ASYNC
Replication
RDS DB
instance
Same Region
Free
Region/AZ
RDS DB
instance read
replica
Region/AZ
ASYNC
Replication
RDS DB
instance
Cross-Region
$$$
RDS DB
instance read
replica

### RDS Multi AZ (Disaster Recovery)

- SYNC replication
- One DNS name – automatic app
failover to standby
- Increase availability
- Failover in case of loss of AZ, loss of
network, instance or storage failure
- No manual intervention in apps
- Not used for scaling
- Note: The Read Replicas be setup as
Multi AZ for Disaster Recovery (DR)
Application
writes
reads
One DNS name – automatic failover
RDS DB
instance standby
(AZ B)
SYNC
replication
RDS Master DB
instance (AZ A)

### RDS – From Single-AZ to Multi-AZ

- Zero downtime operation (no
need to stop the DB)
- Just click on “modify” for the
database
- The following happens internally:
- A snapshot is taken
- A new DB is restored from the
snapshot in a new AZ
- Synchronization is established
between the two databases
RDS DB
instance
Standby DB
SYNC
Replication
restore
snapshot
DB snapshot

### RDS Multi AZ – Failover Conditions

- The primary DB instance
- Failed
- OS is undergoing software patches
- Unreachable due to loss of network connectivity
- Modified (e.g., DB instance type changed)
- Busy and unresponsive
- Underlying storage failure
- An Availability Zone outage
- A manual failover of the DB instance was initiated using Reboot with failover

### RDS Backup vs. Snapshots

Backups
Snapshots
- Backups are “continuous” and allow point in
time recovery
- Snapshots takes IO operations and can stop the
database from seconds to minutes
- Backups happen during maintenance windows
- Snapshots taken on Multi AZ DB don’t impact
the master – just the standby
- When you delete a DB instance, you can retain
automated backups
- Backups have a retention period you set
between 0 and 35 days
- To disable backups, set retention period to 0
- Snapshots are incremental after the first
snapshot (which is full)
- You can copy & share DB Snapshots
- Manual Snapshots don’t expire
- You can take a “final snapshot” when you delete
your DB
Restoring from Automated Backups or DB Snapshots creates a new DB Instance

### RDS Snapshots Sharing

- Manual snapshots: can be shared with AWS accounts
- Automated snapshots: can’t be shared, copy first
- You can only share unencrypted snapshots and
snapshots encrypted with a customer managed key
- If you share an encrypted snapshots, you must also
share any customer managed keys used to encrypt
them
Account A
Snapshot: mydbsnapshot
RDS DB
Snapshot
Share with
Account B
Account B
DB Instance
(Snapshot: mydbsnapshot)

### RDS Snapshots Sharing with KMS Encryption

Target
Source
Account A
Account B
Snapshot: mydbsnapshot
RDS DB
Snapshot
(encrypted)
share
IAM Permissions
CMK - A
kms:DescribeKey
kms:CreateGrant
kms:Encrypt
kms:Decrypt
kms:GenerateDataKey
kms:ReEncrypt
DB Instance
(Snapshot: mydbsnapshot)

### RDS Events & Event Subscriptions

- RDS keeps record of events related to:
DB Instance
(backup event)
- DB instances
- Snapshots
- Parameter groups, security groups …
- Example: DB state changed from pending to
running
- RDS Event Subscriptions
- Subscribe to events to be notified when an event
occurs using SNS
- Specify the Event Source (instances, SGs, …) and
the Event Category (creation, failover, …)
- RDS delivers events to EventBridge
event
notification
SNS
RDS Events
trigger
EventBridge

### RDS Database Log Files

CloudWatch
Metric Filter: Error
Alert
DB Instance
Store Logs:
- General
- Audit
- Error
- Slow Query
CW Logs
CW Alarm
notification
Amazon SNS
DB Admin

### RDS with CloudWatch

- CloudWatch metrics associated with RDS (gathered from the hypervisor):
- DatabaseConnections
- SwapUsage
- ReadIOPS / WriteIOPS
- ReadLatency / WriteLatency
- ReadThroughPut / WriteThroughPut
- DiskQueueDepth
- FreeStorageSpace
- Enhanced Monitoring (gathered from an agent on the DB instance)
- Useful when you need to see how different processes or threads use the CPU
- Access to over 50 new CPU, memory, file system, and disk I/O metrics

### RDS Performance Insights

- Visualize your database performance and analyze any issues that affect it
- With the Performance Insights dashboard, you can visualize the database
load and filter the load:
- By Waits => find the resource that is the bottleneck (CPU, IO, lock, etc…)
- By SQL statements => find the SQL statement that is the problem
- By Hosts => find the server that is using the most our DB
- By Users => find the user that is using the most our DB
- DBLoad = the number of active sessions for the DB engine
- You can view the SQL queries that are putting load on your database
- Generates Proactive Recommendation to help you prevent future
database performance impact (Paid Tier)

### From:

Performance Insights Screenshots
DB Waits

### From:

Performance Insights Screenshots
SQL

### From:

Performance Insights Screenshots
Users

### Amazon Aurora

- Aurora is a proprietary technology from AWS (not open sourced)
- Postgres and MySQL are both supported as Aurora DB (that means your
drivers will work as if Aurora was a Postgres or MySQL database)
- Aurora is “AWS cloud optimized” and claims 5x performance improvement
over MySQL on RDS, over 3x the performance of Postgres on RDS
- Aurora storage automatically grows in increments of 10GB, up to 256 TB.
- Aurora can have up to 15 replicas and the replication process is faster than
MySQL (sub 10 ms replica lag)
- Failover in Aurora is instantaneous. It’s HA (High Availability) native.
- Aurora costs more than RDS (20% more) – but is more efficient

### Aurora High Availability and Read Scaling

- 6 copies of your data across 3 AZ:
- 4 copies out of 6 needed for writes
- 3 copies out of 6 need for reads
- Self healing with peer-to-peer replication
- Storage is striped across 100s of volumes
- One Aurora Instance takes writes (master)
- Automated failover for master in less than
30 seconds
- Master + up to 15 Aurora Read Replicas
serve reads
- Support for Cross Region Replication
Shared storage Volume
Replication + Self Healing + Auto Expanding

### Aurora DB Cluster

client
Writer Endpoint
Pointing to the master
Reader Endpoint
Connection Load Balancing
Auto Scaling
Shared storage Volume
Auto Expanding from 10G to 128 TB

### Features of Aurora

- Automatic fail-over
- Backup and Recovery
- Isolation and security
- Industry compliance
- Push-button scaling
- Automated Patching with Zero Downtime
- Advanced Monitoring
- Routine Maintenance
- Backtrack: restore data at any point of time without using backups

### Backups, Backtracking & Restores in Aurora

- Automatic Backups
- Retention period 1-35 days (can’t be disabled)
- PITR, restore your DB cluster within 5 minutes of the current time
- Restore to a new DB cluster
- Aurora Backtracking
- Rewind the DB cluster back and forth in time (up to 72 hours)
- Doesn’t create a new DB cluster (in-place restore)
- Supports Aurora MySQL only
- Aurora Database Cloning
- Creates a new DB cluster that uses the same DB cluster volume as the original cluster
- Uses copy-on-write protocol (use the original/single copy of the data and allocate storage
only when changes made to the data)
- Example: create a test environment using your production data

### Aurora Serverless

- Automated database
instantiation and autoscaling based on actual
usage
- Good for infrequent,
intermittent or
unpredictable workloads
- No capacity planning
needed
- Pay per second, can be
more cost-effective
Client
Proxy Fleet
(managed by Aurora)
Shared storage Volume

### Aurora Global Database

- 1 Primary Region (read / write)
- Up to 10 secondary (read-only) regions, replication
lag is less than 1 second
- Up to 16 Read Replicas per secondary region
- Helps for decreasing latency
- Promoting another region (for disaster recovery)
has an RTO of < 1 minute
- Typical cross-region replication takes less than 1
second
us-east-1 - PRIMARY region
Applications
Read / Write
replication
eu-west-1 - SECONDARY region
Applications
Read Only

### Aurora: CloudWatch metrics

- AuroraReplicaLag: amount of lag when replicating
updates from the primary instance
- AuroraReplicaLagMaximum: max. amount of lag
across all DB instances in the cluster
- AuroraReplicaLagMinimum: min. amount of lag
across all DB instances in the cluster
- If replica lag is high, that means the users will
have a different experience based on which
replica they get the data from (eventual
consistency)
- DatabaseConnections: current number of
connections to a DB instance
- InsertLatency: average duration of insert
operations
High
Replica Lag
write
read
read
Shared storage Volume
Replication

### Amazon RDS Proxy

- Fully managed database proxy for RDS
- Allows apps to pool and share DB connections
established with the database
- Improving database efficiency by reducing the stress
on database resources (e.g., CPU, RAM) and
minimize open connections (and timeouts)
- Serverless, autoscaling, highly available (multi-AZ)
- Reduced RDS & Aurora failover time by up 66%
- Supports RDS (MySQL, PostgreSQL, MariaDB, MS
SQL Server) and Aurora (MySQL, PostgreSQL)
- No code changes required for most apps
- Enforce IAM Authentication for DB, and securely
store credentials in AWS Secrets Manager
- RDS Proxy is never publicly accessible (must be
accessed from VPC)
VPC
Lambda functions
IAM
Authentication
Private subnet
RDS Proxy
RDS DB
Instance

### Amazon ElastiCache Overview

- The same way RDS is to get managed Relational Databases…
- ElastiCache is to get managed Redis or Memcached
- Caches are in-memory databases with really high performance, low
latency
- Helps reduce load off of databases for read intensive workloads
- Helps make your application stateless
- AWS takes care of OS maintenance / patching, optimizations, setup,
configuration, monitoring, failure recovery and backups
- Using ElastiCache involves heavy application code changes

### Solution Architecture - DB Cache

- Applications queries
ElastiCache, if not
available, get from RDS
and store in ElastiCache.
- Helps relieve load in RDS
- Cache must have an
invalidation strategy to
make sure only the most
current data is used in
there.
Amazon
ElastiCache
Cache hit
application
Cache miss
Read from DB
Write to cache
Amazon
RDS
ElastiCache

### Solution Architecture – User Session Store

Write session
application
Amazon
ElastiCache
User
- User logs into any of the
application
- The application writes
the session data into
ElastiCache
- The user hits another
instance of our
application
- The instance retrieves the
data and the user is
already logged in
Retrieve session
application
application
ElastiCache

### ElastiCache – Redis vs Memcached

REDIS
- Multi AZ with Auto-Failover
- Read Replicas to scale reads and
have high availability
- Data Durability using AOF
persistence
- Backup and restore features
- Supports Sets and Sorted Sets
Replication
MEMCACHED
- Multi-node for partitioning of
data (sharding)
- No high availability (replication)
- Non persistent
- Backup and restore (Serverless)
- Multi-threaded architecture
sharding

### Redis Scaling – Cluster Mode Disabled

- Horizontal:
- Scale out/in by adding/removing read replicas (max. 5 replicas)
- Vertical:
- Scale up/down to larger/smaller node type
- ElastiCache will internally create a new node group, then data replication and DNS update
Old Node Group
New Node Group
Replication
Primary Node
Primary Node
0-5 Replica Nodes
0-5 Replica Nodes
DNS update

### Redis Scaling – Cluster Mode Enabled

- Two Modes:
- Online Scaling: continue serving requests during the scaling process (no downtime,
some degradation in performance)
- Offline Scaling: unable to serve requests during the scaling process (backup and restore).
Additional configurations supported (change node type, upgrade engine version, …)
- Horizontal: (Resharding and Shard Rebalancing)
- Resharding: scale out/in by adding/removing shards
- Shard Rebalancing: equally distribute the keyspaces among the shards as possible
- Supports Online and Offline Scaling
- Vertical: (change read/write capacity)
- Scale up/down to larger/smaller node type
- Supports Online Scaling

### Redis Metrics to Monitor

- Evictions: the number of non-expired items the cache evicted to allow
space for new writes (memory is overfilled). Solution:
- Choose an eviction policy to evict expired items (e.g., evict least recently used
(LRU) items)
- Scale up to larger node type (more memory) or scale out by adding more
nodes
- CPUUtilization: monitor CPU utilization for the entire host
- Solution: scale up to larger node type (more memory) or scale out by adding
more nodes
- SwapUsage: should not exceed 50 MB
- Solution: verify that you have configured enough reserved memory

### Redis Metrics to Monitor

- CurrConnections: the number of concurrent and active connections
- Solution: investigate application behavior to address the issue
- DatabaseMemoryUsagePercentage: the percentage of memory utilization
- NetworkBytesIn/Out & NetworkPacketsIn/Out
- ReplicationBytes: the volume of data being replicated
- ReplicationLag: how far behind the replica is from the primary node

### Horizontal Scaling

Memcached Scaling
Memcached Cluster
- Memcached Clusters can have 1-40
nodes (soft limit)
- Horizontal:
Cache
Node
Memcached Cluster (Old)
- Scale up/down to larger/smaller node type
- Scale up process:
Cache
Node
Vertical Scaling
- Vertical:
- Memcached clusters/nodes start out empty
Cache
Node
auto-discovery
- Add/remove nodes from the cluster
- Auto-discovery allow your app to find nodes
- Create a new cluster with the new node type
- Update your application to use the new
cluster’s endpoints
- Delete the old cluster
Cache
Node
update
endpoints
Application
populate
data
Memcached Cluster (New)

### Memcached Auto Discovery

- Typically you need to manually
connect to individual cache nodes in
the cluster using its DNS endpoints
- Auto Discovery automatically
identifies all of the nodes
- All the cache nodes in the cluster
maintain a list of metadata about all
other nodes
- This is seamless from a client
perspective
Client
connect
Nodes’ metadata:
Node 1: 12.28.33.24
Node 2: 43.52.61.27
Cache Node 1
(IP address)
connect to
configuration
endpoint
Memcached Cluster
Cache
Node 1
Cache
Node 2
Cache
Node 3
Cache
Node 4

### Memcached Metrics to Monitor

- Evictions: the number of non-expired items the cache evicted to allow space
for new writes (memory is overfilled). Solution:
- Choose an eviction policy to evict expired items (e.g., LRU items)
- Scale up to larger node type (more memory) or scale out by adding more nodes
- CPUUtilization
- Solution: scale up to larger node type or scale out by adding more nodes
- SwapUsage: should not exceed 50 MB
- CurrConnections: the number of concurrent and active connections
- Solution: investigate application behavior to address the issue
- FreeableMemory: amount of free memory on the host

### Performance

CloudWatch, CloudTrail & AWS Config
AWS Monitoring, Audit &

### AWS CloudWatch Metrics

- CloudWatch provides metrics for every services in AWS
- Metric is a variable to monitor (CPUUtilization, NetworkIn…)
- Metrics belong to namespaces
- Dimension is an attribute of a metric (instance id, environment, etc…).
- Up to 30 dimensions per metric
- Metrics have timestamps
- Can create CloudWatch dashboards of metrics

### EC2 Detailed monitoring

- EC2 instance metrics have metrics “every 5 minutes”
- With detailed monitoring (for a cost), you get data “every 1 minute”
- Use detailed monitoring if you want to scale faster for your ASG!
- The AWS Free Tier allows us to have 10 detailed monitoring metrics
- Note: EC2 Memory usage is by default not pushed (must be pushed
from inside the instance as a custom metric)

---

## 13. AWS Monitoring, Audit & Performance

### CloudWatch Custom Metrics

- Possibility to define and send your own custom metrics to CloudWatch
- Example: memory (RAM) usage, disk space, number of logged in users …
- Use API call PutMetricData
- Ability to use dimensions (attributes) to segment metrics
- Instance.id
- Environment.name
- Metric resolution (StorageResolution API parameter – two possible value):
- Standard: 1 minute (60 seconds)
- High Resolution: 1/5/10/30 second(s) – Higher cost
- Important: Accepts metric data points two weeks in the past and two hours in the
future (make sure to configure your EC2 instance time correctly)

### CloudWatch Anomaly Detection

- Also called CloudWatch outlier detection
- Continuously analyze metrics to determine
normal baselines and surface anomalies using
ML algorithms
- It creates a model of the metric’s expected
values (based on metric’s past data)
- Shows you which values in the graph are out
of the normal range
- Allows you to create Alarms based on metric’s
expected value (instead of Static Threshold)
- Ability to exclude specified time periods or
events from being trained
monitoring/CloudWatch_Anomaly_Detection.html

### CloudWatch Dashboards

- Great way to setup custom dashboards for quick access to key metrics and alarms
- Dashboards are global
- Dashboards can include graphs from different AWS accounts and regions
- You can change the time zone & time range of the dashboards
- You can setup automatic refresh (10s, 1m, 2m, 5m, 15m)
- Dashboards can be shared with people who don’t have an AWS account (public,
email address, 3rd party SSO provider through Amazon Cognito)
- Pricing:
- 3 dashboards (up to 50 metrics) for free
- $3/dashboard/month afterwards

### CloudWatch Logs

- Log groups: arbitrary name, usually representing an application
- Log stream: instances within application / log files / containers
- Can define log expiration policies (never expire, 1 day to 10 years…)
- CloudWatch Logs can send logs to:
- Amazon S3 (exports)
- Kinesis Data Streams
- Kinesis Data Firehose
- AWS Lambda
- OpenSearch
- Logs are encrypted by default
- Can setup KMS-based encryption with your own keys

### CloudWatch Logs - Sources

- SDK, CloudWatch Logs Agent, CloudWatch Unified Agent
- Elastic Beanstalk: collection of logs from application
- ECS: collection from containers
- AWS Lambda: collection from function logs
- VPC Flow Logs: VPC specific logs
- API Gateway
- CloudTrail based on filter
- Route53: Log DNS queries

### CloudWatch Logs Insights

- Search and analyze log data stored in CloudWatch Logs
- Example: find a specific IP inside a log, count occurrences of
“ERROR” in your logs…
- Provides a purpose-built query language
- Automatically discovers fields from AWS services and JSON log
events
- Fetch desired event fields, filter based on conditions, calculate
aggregate statistics, sort events, limit number of events…
- Can save queries and add them to CloudWatch Dashboards
- Can query multiple Log Groups in different AWS accounts
- It’s a query engine, not a real-time engine

### CloudWatch Logs – S3 Export

- Log data can take up to 12 hours to
become available for export
- The API call is CreateExportTask
CloudWatch Logs
Amazon S3
- Not near-real time or real-time… use
Logs Subscriptions instead

### CloudWatch Logs Subscriptions

- Get a real-time log events from CloudWatch Logs for processing and analysis
- Send to Kinesis Data Streams, Kinesis Data Firehose, or Lambda
- Subscription Filter – filter which logs are events delivered to your destination
OpenSearch
Service
real-time
Lambda
logs
CloudWatch Logs
Subscription Filter
near
real-time
Kinesis Data Firehose
Kinesis Data Streams
KDF
KDA
EC2 Lambda

### Multi-Account & Multi Region

ACCOUNT A
REGION 1
CloudWatch Logs
Subscription Filter
ACCOUNT B
REGION 2
CloudWatch Logs
Near
Real Time
Subscription Filter
ACCOUNT B
REGION 3
CloudWatch Logs
Subscription Filter
Kinesis Data Streams Kinesis Data Firehose
Amazon S3
CloudWatch Logs Aggregation

### CloudWatch Logs Subscriptions

- Cross-Account Subscription – send log events to resources in a different AWS
account (KDS, KDF)
IAM Role
(Cross-Account)
Account – Sender
Account – Recipient
(111111111111)
logs
CloudWatch
Logs
logs
Subscription
Filter
Can be assumed
(999999999999)
Subscription
Destination
Kinesis Data Streams
(RecipientStream)
Destination
Access Policy
Destination
Access Policy
IAM Role
allow PutRecord

### CloudWatch Logs Data Protection

- Detect and mask sensitive log data ingested into
CloudWatch Logs (at-rest and in transit)
- Uses ML to detect and protect sensitive log
- Data Protection Policy
- Specify the Data Identifier(s) (e.g., email address)
- 100+ Data Identifiers of common sensitive data patterns
(e.g., emails, passwords, credit card details, social security
number…)
- Can create a Custom Data Identifier
- Can send Data Protection audit reports to another
CloudWatch Log Group, Amazon S3, and Kinesis
Data Firehose
Lambda Function
send logs
[88140ce4-5bfc-4b54-86e4-de18f1a2dee8]
INFO : User has signed in with
email address: foobar@example.com
Data Protection
Policy (Email)
CloudWatch
Log Group
[88140ce4-5bfc-4b54-86e4-de18f1a2dee8]
INFO : User has signed in with
email address: ********************

### CloudWatch Logs Data Protection

- You can get notified when sensitive data is
detected using metric LogEventsWithFindings
- Sensitive data is masked at:
CloudWatch
Log Group
Data Protection
Policy (Email)
Metric Filter
- CloudWatch Logs Insights
- Metric Filters
- CloudWatch Logs Subscription Filters
- Only users with logs:Unmask permissions can
view unmasked data
LogEventsWithFindings
CloudWatch
Alarm
Alert
Amazon SNS

### CloudWatch Alarms

- Alarms are used to trigger notifications for any metric
- Various options (sampling, %, max, min, etc…)
- Alarm States:
- OK
- INSUFFICIENT_DATA
- ALARM
- Period:
- Length of time in seconds to evaluate the metric
- High resolution custom metrics: 10 sec, 30 sec or multiples of 60 sec

### CloudWatch Alarm Targets

- Stop, Terminate, Reboot, or Recover an EC2 Instance
- Trigger Auto Scaling Action
- Send notification to SNS (from which you can do pretty much anything)
Amazon EC2
EC2 Auto Scaling
Amazon SNS

### CloudWatch Alarms – Composite Alarms

- CloudWatch Alarms are on a single metric
- Composite Alarms are monitoring the states of multiple other alarms
- AND and OR conditions
- Helpful to reduce “alarm noise” by creating complex composite alarms
Composite Alarm
ALARM
monitor CPU
CW Alarm - A
EC2 Instance
monitor IOPS
ALARM
CW Alarm - B
trigger
Amazon SNS

### EC2 Instance Recovery

- Status Check:
- Instance status = check the EC2 VM
- System status = check the underlying hardware
- Attached EBS status = check attached EBS volumes
monitor
EC2 Instance
alert
CloudWatch Alarm
StatusCheckFailed_System
SNS Topic
EC2 Instance Recovery
- Recovery: Same Private, Public, Elastic IP, metadata, placement group

### CloudWatch Alarm: good to know

- Alarms can be created based on CloudWatch Logs Metrics Filters
CloudWatch
Metric Filter
Alert
CW Logs
CW Alarm
Amazon SNS
- To test alarms and notifications, set the alarm state to Alarm using CLI
aws cloudwatch set-alarm-state --alarm-name "myalarm" --state-value
ALARM --state-reason "testing purposes"

### CloudWatch Synthetics Canary

- Configurable script that monitor your APIs, URLs,
Websites, …
- Reproduce what your customers do
programmatically to find issues before customers
are impacted
- Checks the availability and latency of your
endpoints and can store load time data and
screenshots of the UI
- Integration with CloudWatch Alarms
- Scripts written in Node.js or Python
- Programmatic access to a headless Google Chrome
browser
- Can run once or on a regular schedule
Users
Route 53
monitor
update
DNS record
invoke
Lambda
Function
trigger
CloudWatch
Alarm
CloudWatch
Synthetics Canary
us-west-2

### CloudWatch Synthetics Canary Blueprints

- Heartbeat Monitor – load URL, store screenshot and an HTTP archive file
- API Canary – test basic read and write functions of REST APIs
- Broken Link Checker – check all links inside the URL that you are testing
- Visual Monitoring – compare a screenshot taken during a canary run with a baseline
screenshot
- Canary Recorder – used with CloudWatch Synthetics Recorder (record your
actions on a website and automatically generates a script for that)
- GUI Workflow Builder – verifies that actions can be taken on your webpage (e.g.,
test a webpage with a login form)

### CloudWatch Synthetics Canary in a VPC

- You can setup canaries on endpoints in a VPC
- Must have DNS Resolution and DNS Hostnames enabled in the VPC
Traffic Goes through Public Internet
Traffic Goes internally within AWS
AWS Cloud
VPC
Synthetics
Canary
VPC
send metrics
CloudWatch
send metrics
NAT Gateway
monitor
CloudWatch
VPC Endpoint
(CloudWatch)
Private Subnet
monitor
Private Subnet
Gateway Endpoint
(S3)
Synthetics
Canary

### CloudWatch Container Insights

- Collects, aggregates, summarizes container
metrics and logs from your containerized
apps and microservices
- Supports ECS, Fargate, EKS, and Redhat
OpenShift on AWS (ROSA)
- CPU, memory, tasks, services, network
utilization, disk usage…
- No need to use sidecars to monitor your
containers
- Can be enabled at account level or when
creating a Cluster (cluster–level)
Container Insights (enabled)
ECS
EKS
OpenShift
Fargate on AWS
CPU, memory, logs…
CloudWatch
Metrics
Logs

### CloudWatch Container Insights

- By default, Container Insights provide metrics at cluster and service level
- Enhanced Visibility – provides metrics at task and container level
- Use cases: high resource usage, throttling issues, performance issues…

### CloudWatch Internet Monitor

- Monitor and detects how internet issues impact
your apps hosted on AWS and end users (citynetworks, ASNs, client-locations…)
- Uses Internet data that AWS captures using its
global network footprint
- Global view of traffic patterns and health events
- Suggests recommendations to improve endusers experience (e.g., latency)
- Publishes data to CloudWatch Logs & Metrics
- Sends global health events to EventBridge
introducing-amazon-cloudwatch-internet-monitor/

### CloudWatch Network Synthetic Monitor

- Monitor and detects network issues between
your apps hosted on AWS and your onpremises data center
- Identify any network performance
degradation (e.g., packet loss, latency, jitter…)
- No agents required to be installed
- Tests ICMP or TCP traffic to IPv4/IPv4 onpremises destinations through Direct
Connect or S2S VPN connections
- Publishes data to CloudWatch Metrics
AWS Cloud
Private Subnet
EC2 instance
CloudWatch
Metrics
DX Connection
VPN Connection
Corporate Data Center
Server

### (formerly CloudWatch Events)

- Schedule: Cron jobs (scheduled scripts)
Schedule Every hour
Trigger script on Lambda function
- Event Pattern: Event rules to react to a service doing something
IAM Root User Sign in Event
SNS Topic with Email Notification
- Trigger Lambda functions, send SQS/SNS messages…
Amazon EventBridge

### Amazon EventBridge Rules

EC2 Instance
(ex: Start Instance)
CodeBuild
(ex: failed build)
Filter events
(optional)
S3 Event
(ex: upload object)
CloudTrail
(any API call)
Trusted Advisor
(ex: new Finding)
Schedule or Cron
(ex: every 4 hours)
"version": "0",
"id": "6a7e8feb-b491",
"detail-type": "EC2 Instance
State-change Notification",
Amazon
EventBridge
Integration
JSON
Maintenance Orchestration
Example Source
Compute
Example Destinations
Lambda
AWS Batch
ECS Task
SQS
SNS
Kinesis Data
Streams
Step
Functions
CodePipeline
CodeBuild
SSM
EC2 Actions

### Amazon EventBridge

AWS Services
Default
Event Bus
AWS SaaS
Partners
Partner
Event Bus
Custom
Apps
Custom
Event Bus
- Event buses can be accessed by other AWS accounts using Resource-based Policies
- You can archive events (all/filter) sent to an event bus (indefinitely or set period)
- Ability to replay archived events

### Amazon EventBridge – Schema Registry

- EventBridge can analyze the events in
your bus and infer the schema
- The Schema Registry allows you to
generate code for your application, that
will know in advance how data is
structured in the event bus
- Schema can be versioned

### Amazon EventBridge – Resource-based Policy

- Manage permissions for a specific Event Bus
- Example: allow/deny events from another AWS account or AWS region
- Use case: aggregate all events from your AWS Organization in a single AWS
account or AWS region
AWS Account
(123456789012)
AWS Account
(111122223333)
PutEvents
EventBridge Bus
(central-event-bus)
Allow events from another AWS account
Lambda function

### Amazon EventBridge – Pipes

Source
Target
DynamoDB
Stream
Kinesis
Stream
MSK
SQS
Apache
Kafka
EventBridge Pipe
Events
Filter
Enrichment
Lambda
API
Step
EventBridge
Function Gateway API Destination
Kinesis
Firehose
Kinesis
Stream
EventBridge
Bus
Redshift
SQS
SNS
API GW
ECS Task

### Amazon EventBridge – Pipes

- Out-of-the box integration between data sources and targets in AWS
- No-code solution
- Filtering – filter selected subset of events
- Enrichment – process & enhance data before sending events to the target
- You can process events using:
- Lambda
- Step Functions
- API Gateway
- EventBridge API Destination

### Amazon EventBridge – Retries & DLQs

- Sometimes events can’t be delivered to
a target due to:
Event
- Target not being available
- Network issues
undelivered
event
- You define a Retry Policy by configuring:
- Length of Time (default: 24 hours)
- Retry Attempts (default: 185)
- You can send undelivered events to
Dead Letter Queue (DLQ) using SQS
for later processing
EventBridge
SQS Queue
Dead Letter Queue
retry 185 times
network issues
Target

### Amazon EventBridge – Trigger SSM Automation

- You can specify SSM Automations as a target of EventBridge event
- Use on a schedule or when a specific event occurs
event
EC2 Instance State-change
invoke
start
User
EC2 Instance
EventBridge
install software
SSM Automation
(BootstrapInstance)

### Amazon EventBridge – Cross-account Targets

EventBridge Bus as Target
Source Account
Destination Account
EventBridge Bus
EventBridge Bus
(111122223333)
Resource-based Policy
(444455556666)
(my-event-bus)
Resource-based Policy

### Amazon EventBridge – Cross-account Targets

Other Services as Targets
Source Account
(111122223333)
Execution IAM Role
EventBridge Bus
Destination Account
(444455556666)
SQS Queue
(my-event-bus)
Resource-based Policy
Supported Targets: SQS, SNS, Lambda, API Gateway,
Kinesis Data Streams

### Service Quotas CloudWatch Alarms

- Notify you when you’re close to a service quota value threshold
- Create CloudWatch Alarms on the Service Quotas console
- Example: Lambda concurrent executions
- Helps you know if you need to request a quota increase or shutdown resources before limit is reached
AWS Lambda Quota
monitor
AWS Service
Quotas
trigger
CW Alarm

### Alternative: Trusted Advisor + CW Alarms

- Limited number of Service Limits checks in Trusted Advisor (~50)
- Trusted Advisor publishes its check results to CloudWatch
- You can create CloudWatch Alarms on service quota usage (Service Limits)
Lambda Concurrent Executions: 1000
trigger
Service Limits
AWS Trusted Advisor
CloudWatch
CW Alarm

### AWS CloudTrail

- Provides governance, compliance and audit for your AWS Account
- CloudTrail is enabled by default!
- Get an history of events / API calls made within your AWS Account by:
- Console
- SDK
- CLI
- AWS Services
- Can put logs from CloudTrail into CloudWatch Logs or S3
- A trail can be applied to All Regions (default) or a single Region.
- If a resource is deleted in AWS, investigate CloudTrail first!

### CloudTrail Diagram

SDK
CloudTrail Console
CloudWatch Logs
CLI
Console
IAM Users &
IAM Roles
Inspect & Audit
S3 Bucket

### CloudTrail Events

- Management Events:
- Operations that are performed on resources in your AWS account
- Examples:
- Configuring security (IAM AttachRolePolicy)
- Configuring rules for routing data (Amazon EC2 CreateSubnet)
- Setting up logging (AWS CloudTrail CreateTrail)
- By default, trails are configured to log management events.
- Can separate Read Events (that don’t modify resources) from Write Events (that may modify resources)
- Data Events:
- By default, data events are not logged (because high volume operations)
- Amazon S3 object-level activity (ex: GetObject, DeleteObject, PutObject): can separate Read and Write Events
- AWS Lambda function execution activity (the Invoke API)
- CloudTrail Insights Events:
- See next slide J

### CloudTrail Insights

- Enable CloudTrail Insights to detect unusual activity in your account:
- inaccurate resource provisioning
- hitting service limits
- Bursts of AWS IAM actions
- Gaps in periodic maintenance activity
- CloudTrail Insights analyzes normal management events to create a baseline
- And then continuously analyzes write events to detect unusual patterns
- Anomalies appear in the CloudTrail console
- Event is sent to Amazon S3
- An EventBridge event is generated (for automation needs)
Management Events
Continous analysis
generate
CloudTrail Insights
Insights Events
CloudTrail Console
S3 Bucket
EventBridge event

### CloudTrail Events Retention

- Events are stored for 90 days in CloudTrail
- To keep events beyond this period, log them to S3 and use Athena
Management Events
CloudTrail
log
Data Events
Insights Events
Athena
90 days
retention
analyze
S3 Bucket
Long-term retention

### Amazon EventBridge – Intercept API Calls

User
DeleteTable API Call 💥
Log API call
DynamoDB
alert
event
CloudTrail
(any API call)
Amazon
EventBridge
SNS

### Amazon EventBridge + CloudTrail

API Call logs
User
IAM
AssumeRole
event
CloudTrail
AuthorizeSecurityGroupIngress
SNS
EventBridge
SNS
IAM Role
API Call logs
User
EventBridge
edit SG
Inbound Rules
Security Group
event
CloudTrail

### CloudTrail – Log File Integrity Validation

start instance
- Digest Files:
- References the log files for the last hour and contains a
hash of each
- Stored in the same S3 bucket as log files (different folder)
- Helps you determine whether a log file was
modified/deleted after CloudTrail delivered it
- Hashing using SHA-256, Digital Signing using SHA256 with RSA
- Protect the S3 bucket using bucket policy, versioning,
MFA Delete protection, encryption, object lock
- Protect CloudTrail using IAM
API calls
CloudTrail
Amazon EC2
logs
Log Files (1 hour)
reference
contains a hash
of each log file
Digest File

### CloudTrail – Integration with EventBridge

Lambda
SNS
trigger
AWS CloudTrail
Amazon EventBridge
SQS
- Used to react to any API call being made in your account
- CloudTrail is not “real-time”:
- Delivers an event within 15 minutes of an API call
- Delivers log files to an S3 bucket every 5 minutes

### CloudTrail – Organizations Trails

- A trail that will log all events for all AWS accounts in an AWS Organization
- Log events for management and member accounts
- Trail with the same name will be created in every AWS account (IAM permissions)
- Member accounts can’t remove or modify the organization trail (view only)
AWS Organization
(o-exampleorgid)
S3 Bucket
(my-organization-bucket)
create
Management Account
(111111111111)
Member Account
(222222222222)
Member Account
(333333333333)
AWS CloudTrail
(MyOrganizationTrail)
Member Account
(444444444444)
/AWSLogs/o-exampleorgid/111111111111
/AWSLogs/o-exampleorgid/222222222222
/AWSLogs/o-exampleorgid/333333333333
/AWSLogs/o-exampleorgid/444444444444

### AWS Config

- Helps with auditing and recording compliance of your AWS resources
- Helps record configurations and changes over time
- Questions that can be solved by AWS Config:
- Is there unrestricted SSH access to my security groups?
- Do my buckets have any public access?
- How has my ALB configuration changed over time?
- You can receive alerts (SNS notifications) for any changes
- AWS Config is a per-region service
- Can be aggregated across regions and accounts
- Possibility of storing the configuration data into S3 (analyzed by Athena)

### Config Rules

- Can use AWS managed config rules (over 75)
- Can make custom config rules (must be defined in AWS Lambda)
- Ex: evaluate if each EBS disk is of type gp2
- Ex: evaluate if each EC2 instance is t2.micro
- Rules can be evaluated / triggered:
- For each config change
- And / or: at regular time intervals
- AWS Config Rules does not prevent actions from happening (no deny)
- Pricing: no free tier, $0.003 per configuration item recorded per region,
$0.001 per config rule evaluation per region

### AWS Config Resource

- View compliance of a resource over time
- View configuration of a resource over time
- View CloudTrail API calls of a resource over time

### Config Rules – Remediations

- Automate remediation of non-compliant resources using SSM Automation
Documents
- Use AWS-Managed Automation Documents or create custom Automation
Documents
- Tip: you can create custom Automation Documents that invokes Lambda function
- You can set Remediation Retries if the resource is still non-compliant after autoremediation
expired
IAM Access Key
(NON_COMPLIANT)
monitor
trigger
AWS Config
deactivate
Auto-Remediation Action
(SSM Document: AWSConfigRemediationRevokeUnusedIAMUserCredentials)
Retries: 5

### Config Rules – Notifications

- Use EventBridge to trigger notifications when AWS resources are noncompliant
monitor
AWS Resources
Security group
trigger
NON_COMPLIANT
Lambda
AWS Config
EventBridge
SNS
SQS
- Ability to send configuration changes and compliance state notifications
to SNS (all events – use SNS Filtering or filter at client-side)
monitor
AWS Resources
Security group
notification
trigger
All events
(configuration changes,
compliance state…)
AWS Config
SNS
Admin

### AWS Config – Aggregators

AWS Account – A (Source)
authorize Aggregator
to collect data
AWS Account (Aggregator)
Authorization
collect data
AWS Account – B (Source)
Authorization
Aggregator
Aggregated View
(compliant & non-compliant resources)
- The aggregator is created in one central aggregator account
- Aggregates rules, resources, etc… across multiple accounts & regions
- If using AWS Organizations, no need for individual Authorization
- Rules are created in each individual source AWS account
- Can deploy rules to multiple target accounts using CloudFormation StackSets

### AWS Config – Remediation Examples

NON_COMPLIANT
Disabling Incoming
SSH Traffic
SSH
Port: 22
Security Group
trigger
monitor
EC2 Instance
Config
SSM Automation
(AWS-DisableIncomingSSHOnPort22)
disable port
Enable Logging on
S3 Bucket
NON_COMPLIANT
monitor
S3 Bucket
trigger
Config
enable logging
SSM Automation
(AWS-ConfigureS3BucketLogging)

### CloudWatch vs CloudTrail vs Config

- CloudWatch
- Performance monitoring (metrics, CPU, network, etc…) & dashboards
- Events & Alerting
- Log Aggregation & Analysis
- CloudTrail
- Record API calls made within your Account by everyone
- Can define trails for specific resources
- Global Service
- Config
- Record configuration changes
- Evaluate resources against compliance rules
- Get timeline of changes and compliance

### For an Elastic Load Balancer

- CloudWatch:
- Monitoring Incoming connections metric
- Visualize error codes as a % over time
- Make a dashboard to get an idea of your load balancer performance
- Config:
- Track security group rules for the Load Balancer
- Track configuration changes for the Load Balancer
- Ensure an SSL certificate is always assigned to the Load Balancer (compliance)
- CloudTrail:
- Track who made any changes to the Load Balancer with API calls

### AWS Account Management

Health Dashboards, AWS Organizations and Billing Console

### AWS Health Dashboard - Service History

- Shows all regions, all services
health
- Shows historical information
for each day
- Has an RSS feed you can
subscribe to
- Previously called AWS Service
Health Dashboard

---

## 14. AWS Account Management

### AWS Health Dashboard – Your Account

- Previously called AWS Personal Health Dashboard (PHD)
- AWS Account Health Dashboard provides alerts and remediation
guidance when AWS is experiencing events that may impact you.
- While the Service Health Dashboard displays the general status of AWS
services, Account Health Dashboard gives you a personalized view into
the performance and availability of the AWS services underlying your
AWS resources.
- The dashboard displays relevant and timely information to help you
manage events in progress and provides proactive notification to help
you plan for scheduled activities.
- Can aggregate data from an entire AWS Organization

### AWS Health Dashboard – Your Account

- Global service
- Shows how AWS outages directly impact you &
your AWS resources
- Alert, remediation, proactive, scheduled activities

### Health Event Notifications

- Use EventBridge to react to changes for AWS
Health events in your AWS account
- Example: receive email notifications when
EC2 instances in your AWS account are
scheduled for updates
- This is possible for Account events (resources
that are affected in your account) and Public
Events (Regional availability of a service)
- Use cases: send notifications, capture event
information, take corrective action...
AWS Health
Dashboard
trigger
EventBridge
invoke
Lambda
SNS
SQS
Kinesis
Data
Streams

### AWS Health Dashboard – Examples

Remediating Exposed
IAM Access Keys
event
Exposed Access Keys
AWS Health Dashboard
EventBridge
event
Instance Scheduled
for Retirement
Restarting Instances That
are Scheduled for
Retirement
AWS Health Dashboard
Delete Access Keys
invoke
Lambda
IAM
Restart Instance
EventBridge

### AWS Organizations

- Global service
- Allows to manage multiple AWS accounts
- The main account is the management account
- Other accounts are member accounts
- Member accounts can only be part of one organization
- Consolidated Billing across all accounts - single payment method
- Pricing benefits from aggregated usage (volume discount for EC2, S3…)
- Shared reserved instances and Savings Plans discounts across accounts
- API is available to automate AWS account creation

### AWS Organizations

Root Organizational Unit (OU)
Management Account
OU (Dev)
OU (Prod)
OU (HR)
Member Accounts
OU (Finance)

### Organizational Units (OU) - Examples

Business Unit
Sales OU
Management
Account
Retail OU
Sales
Account 1
Prod OU
Sales
Account 2
Retail
Account 1
Retail
Account 2
Finance
Environmental Lifecycle
Finance
Account 1
Finance
Account 2
Management
Account
Dev OU
Prod
Account 1
Project 1
Prod
Account 2
Dev
Account 1
Dev
Account 2
Test OU
Project-Based
Test
Account 1
Test
Account 2
Management
Account
Project 2
Project 3
Project 1
Account 1
Project 1
Account 2
Project 2
Account 1
Project 2
Account 2
Project 3
Account 1
Project 3
Account 2

### AWS Organizations

- Advantages
- Multi Account vs One Account Multi VPC
- Use tagging standards for billing purposes
- Enable CloudTrail on all accounts, send logs to central S3 account
- Send CloudWatch Logs to central logging account
- Establish Cross Account Roles for Admin purposes
- Security: Service Control Policies (SCP)
- IAM policies applied to OU or Accounts to restrict Users and Roles
- They do not apply to the management account (full admin power)
- Must have an explicit allow from the root through each OU in the direct path
to the target account (does not allow anything by default – like IAM)

### SCP Hierarchy

OU (Root)
FullAWSAccess
- Management Account
- Can do anything (no SCP apply)
Deny Athena
- Account A
Management Account
FullAWSAccess
FullAWSAccess + Deny S3
Allow EC2
FullAWSAccess + Deny EC2
OU (Sandbox)
OU (Workloads)
- Account B & C
Account A
OU (Test)
Account D
Account B
FullAWSAccess
Account C
OU (Prod)
Account E
Account F
- Can do anything
- EXCEPT S3 (explicit Deny from
Sandbox OU)
- EXCEPT EC2 (explicit Deny)
- Can do anything
- EXCEPT S3 (explicit Deny from
Sandbox OU)
- Account D
- Can access EC2
- Prod OU & Account E & F
- Can do anything

### Blocklist and Allowlist strategies

More examples:
SCP Examples

### AWS Organizations – Reserved Instances

- For billing purposes, the consolidated billing feature of AWS Organizations
treats all the accounts in the organization as one account.
- This means that all accounts in the organization can receive the hourly cost
benefit of Reserved Instances that are purchased by any other account.
- The payer account (master account) of an organization can turn off Reserved
Instance (RI) discount and Savings Plans discount sharing for any accounts in
that organization, including the payer account
- This means that RIs and Savings Plans discounts aren't shared between any
accounts that have sharing turned off.
- To share an RI or Savings Plans discount with an account, both accounts must
have sharing turned on.

### AWS Organizations – IAM Policies

- Use aws:PrincipalOrgID condition key in your resource-based policies to
restrict access to IAM principals from accounts in an AWS Organization
AWS Organization
(o-exampleorgid)
Management Account
(111111111111)
S3 Bucket
(financial-data-2021)
Use the aws:PrincipalOrgID condition
IAM User
(Olivia)
IAM User
(stephane)
Member Account
(222222222222)
Member Account
(123456789012)

### AWS Organizations – Tag Policies

- Helps you standardize tags across resources in an
AWS Organization
- Ensure consistent tags, audit tagged resources,
maintain proper resources categorization, …
- You define tag keys and their allowed values
- Helps with AWS Cost Allocation Tags and Attributebased Access Control
- Prevent any non-compliant tagging operations on
specified services and resources (has no effect on
resources without tags)
- Generate a report that lists all tagged/non-compliant
resources
- Use CloudWatch Events to monitor non-compliant
tags

### AWS Organizations – SCP Examples

Deny Run Instances
If Department Tag is missing
Deny Run Instances
If BusinessUnit Tag doesn’t
start with ”infra-*”
Deny Run Instances
If DeploymentType Tag isn’t
set to either ”In-region” or “Edge”

### AWS Organizations – SCP Examples

Allow only actions in specific Regions
“eu-central-1” and “eu-west-1”

### AWS Control Tower

- Easy way to set up and govern a secure and compliant multi-account
AWS environment based on best practices
- Benefits:
- Automate the set up of your environment in a few clicks
- Automate ongoing policy management using guardrails
- Detect policy violations and remediate them
- Monitor compliance through an interactive dashboard
- AWS Control Tower runs on top of AWS Organizations:
- It automatically sets up AWS Organizations to organize accounts and implement
SCPs (Service Control Policies)

### AWS Service Catalog

- Users that are new to AWS have too many options, and may create
stacks that are not compliant / in line with the rest of the organization
- Some users just want a quick self-service portal to launch a set of
authorized products pre-defined by admins
- Includes: virtual machines, databases, storage options, etc…
- Enter AWS Service Catalog!

### Service Catalog diagram

ADMIN TASKS
USER TASKS
Product
Portfolio
Control
CloudFormation
Templates
Collection of Products
IAM Permissions to
Access Portfolios
Provisioned Products
Product List
launch
Authorized by IAM
Ready to use
Properly Configured
Properly Tagged

### AWS Service Catalog – Sharing Catalogs

- Share portfolios with individual AWS
accounts or AWS Organizations
- Sharing options:
- Share a reference of the portfolio, then
import the shared portfolio in the recipient
account (stays in-sync with the original
portfolio)
- Deploy a copy of the portfolio into the
recipient account (must re-deploy any
updates)
- Ability to add products from the
imported portfolio to the local portfolio
Account A
Portfolio A
(port-xxxxxxxxxx)
Product 1 Product 2 Product 3
copy
(re-deploy updates)
Account B
Admin
Portfolio A - Copy
(port-yyyyyyyyyy)
share
(in-sync)
import portfolio &
launch products
Launched
Products

### AWS Service Catalog – TagOptions Library

- Easily manage tags on provisioned products
- TagOption:
- Key-value pair managed in AWS Service Catalog
- Used to create an AWS Tag
- Can be associated with Portfolios and
Products
- Use cases: proper resources tagging, defined
allowed tags, …
- Can be shared with other AWS accounts and
AWS Organizations
TagOption
Key
Value
Environment
Prod
Portfolio A
(port-xxxxxxxxxx)
Product 1 Product 2
Product 3
Tags
launch
Key
Value
Environment
Prod
Stack 1
Tags
Key
Value
Environment
Prod

### AWS Billing Alarms

- Billing data metric is stored in CloudWatch us-east-1
- Billing data are for overall worldwide AWS costs
- It’s for actual cost, not for project costs
- Let’s create a billing alarm together!

### Cost Explorer

- Visualize, understand, and manage your AWS costs and usage over time
- Create custom reports that analyze cost and usage data.
- Analyze your data at a high level: total costs and usage across all accounts
- Or Monthly, hourly, resource level granularity
- Choose an optimal Savings Plan (to lower prices on your bill)
- Forecast usage up to 18 months based on previous usage

Cost Explorer – Monthly Cost by AWS Service

Cost Explorer– Hourly & Resource Level

### Alternative to Reserved Instances

Cost Explorer – Savings Plan

### AWS Budgets

- Create budget and send alarms when costs exceeds the budget
- 4 types of budgets: Usage, Cost, Reservation, Savings Plans
- For Reserved Instances (RI)
- Track utilization
- Supports EC2, ElastiCache, RDS, Redshift
- Up to 5 SNS notifications per budget
- Can filter by: Service, Linked Account, Tag, Purchase Option, Instance
Type, Region, Availability Zone, API Operation, etc…
- Same options as AWS Cost Explorer!
- 2 budgets are free, then $0.02/day/budget

### Cost Allocation Tags

- Use cost allocation tags to track your AWS costs on a detailed level
- AWS generated tags
- Automatically applied to the resource you create
- Starts with Prefix aws: (e.g. aws: createdBy)
- User-defined tags
- Defined by the user
- Starts with Prefix user:

### Cost and Usage Reports

- Dive deeper into your AWS costs and usage
- The AWS Cost & Usage Report contains the most comprehensive
set of AWS cost and usage data available
- Includes additional metadata about AWS services, pricing, and
reservations (e.g., Amazon EC2 Reserved Instances (RIs))
- The AWS Cost & Usage Report lists AWS usage for each:
daily
AWS Cost &
Usage Report
report
- service category used by an account
- in hourly or daily line items
- any tags that you have activated for cost allocation purposes
- Can be configured for daily exports to S3
- Can be integrated with Athena, Redshift or QuickSight
S3 Bucket

### AWS Compute Optimizer

- Reduce costs and improve performance by
recommending optimal AWS resources for your
workloads
- Helps you choose optimal configurations and rightsize your workloads (over/under provisioned)
- Uses Machine Learning to analyze your resources’
configurations and their utilization CloudWatch
metrics
- Supported resources
- EC2 instances, EC2 Auto Scaling Groups
- EBS volumes, Lambda functions
- ECS on Fargate, Aurora & RDS databases
- Commercial software licenses
- Lower your costs by up to 25%
- Recommendations can be exported to S3

### AWS Compute Optimizer for CloudOps

- To view AWS Compute Optimizer, users need access to the IAM AWSmanaged policy ComputeOptimizerReadOnlyAccess
- Issue: your EC2 instance does NOT appear in Compute Optimizer
- Your EC2 instance is new and has insufficient metrics data
- Solution: keep the instance running for at least 30 hours to allow Compute
Optimizer to collect enough metrics data and generate recommendations

### AWS Billing Conductor

- Service for customizing and presenting AWS billing data
- Group accounts, apply markups/discounts, and generate pro forma bills
- Does not affect your actual AWS bill — only how it’s displayed and
allocated
- Common Use Cases
- Enterprises: split bill by department or cost center
- MSPs: apply custom pricing per customer
- Finance teams: build chargeback/showback models
- Subsidiaries: create transparent internal invoices
- Helpful for big organizations with big accounting needs

---

## 15. Disaster Recovery

### AWS DataSync

- Move large amount of data to and from
- On-premises / other cloud to AWS (NFS, SMB, HDFS, S3 API…) – needs agent
- AWS to AWS (different storage services) – no agent needed
- Can synchronize to:
- Amazon S3 (any storage classes – including Glacier)
- Amazon EFS
- Amazon FSx (Windows, Lustre, NetApp, OpenZFS...)
- Replication tasks can be scheduled hourly, daily, weekly
- File permissions and metadata are preserved (NFS POSIX, SMB…)
- One agent task can use 10 Gbps, can setup a bandwidth limit

### NFS / SMB to AWS (S3, EFS, FSx…)

Region
On-Premises
AWS Storage Resources
NFS or SMB
NFS or SMB
Server
TLS
AWS DataSync
Agent
AWS Snowcone
(agent pre-installed)
AWS
DataSync
S3 Standard
S3 IntelligentTiering
S3 Standard-IA
S3 One
Zone-IA
S3 Glacier
S3 Glacier
Deep Archive
AWS EFS
Amazon FSx
AWS DataSync

### Transfer between AWS storage services

Amazon S3
Amazon S3
Amazon EFS
Amazon EFS
AWS DataSync
copy data and metadata
between AWS Storage Services
Amazon FSx
Amazon FSx
AWS DataSync

### AWS Backup

- Fully managed service
- Centrally manage and automate backups across AWS services
- No need to create custom scripts and manual processes
- Supported services:
- Amazon EC2 / Amazon EBS
- Amazon S3
- Amazon RDS (all DBs engines) / Amazon Aurora / Amazon DynamoDB
- Amazon DocumentDB / Amazon Neptune
- Amazon EFS / Amazon FSx (Lustre & Windows File Server)
- AWS Storage Gateway (Volume Gateway)
- Supports cross-region backups
- Supports cross-account backups

### AWS Backup

- Supports PITR for supported services
- On-Demand and Scheduled backups
- Tag-based backup policies
- You create backup policies known as Backup Plans
- Backup frequency (every 12 hours, daily, weekly, monthly, cron expression)
- Backup window
- Transition to Cold Storage (Never, Days, Weeks, Months, Years)
- Retention Period (Always, Days, Weeks, Months, Years)

### AWS Backup

Assign AWS Resources
Create Backup Plan
(frequency, retention
policy)
RDS
EBS
DynamoDB DocumentDB
AWS Backup
Automatically
backed up to
Amazon S3
EFS
Aurora
FSx
Storage
Gateway
Neptune

### AWS Backup Vault Lock

- Enforce a WORM (Write Once Read Many)
state for all the backups that you store in
your AWS Backup Vault
backup
- Additional layer of defense to protect your
backups against:
- Inadvertent or malicious delete operations
- Updates that shorten or alter retention periods
- Even the root user cannot delete backups
when enabled
Backup Vault Lock Policy
Backups can’t be deleted

### AWS WAF – Web Application Firewall

- Protects your web applications from common web exploits (Layer 7)
- Layer 7 is HTTP (vs Layer 4 is TCP/UDP)
- Deploy on
- Application Load Balancer
- API Gateway
- CloudFront
- AppSync GraphQL API
- Cognito User Pool

---

## 16. Security & Compliance

### AWS WAF – Web Application Firewall

- Define Web ACL (Web Access Control List) Rules:
- IP Set: up to 10,000 IP addresses – use multiple Rules for more IPs
- HTTP headers, HTTP body, or URI strings Protects from common attack - SQL
injection and Cross-Site Scripting (XSS)
- Size constraints, geo-match (block countries)
- Rate-based rules (to count occurrences of events) – for DDoS protection
- Web ACL are Regional except for CloudFront
- A rule group is a reusable set of rules that you can add to a web ACL

### Balancer

- WAF does not support the Network Load Balancer (Layer 4)
- We can use Global Accelerator for fixed IP and WAF on the ALB
Application Load
Balancer
Users
Global Accelerator
Fixed IPv4: 1.2.3.4
EC2 Instances
attached
WebACL
AWS WAF
WebACL must be in the same
AWS Region as ALB
WAF – Fixed IP while using WAF with a Load

### AWS Shield: protect from DDoS attack

- DDoS: Distributed Denial of Service – many requests at the same time
- AWS Shield Standard:
- Free service that is activated for every AWS customer
- Provides protection from attacks such as SYN/UDP Floods, Reflection attacks and other
layer 3/layer 4 attacks
- AWS Shield Advanced:
- Optional DDoS mitigation service ($3,000 per month per organization)
- Protect against more sophisticated attack on Amazon EC2, Elastic Load Balancing (ELB),
Amazon CloudFront, AWS Global Accelerator, and Route 53
- 24/7 access to AWS DDoS response team (DRP)
- Protect against higher fees during usage spikes due to DDoS
- Shield Advanced automatic application layer DDoS mitigation automatically creates,
evaluates and deploys AWS WAF rules to mitigate layer 7 attacks

### AWS Firewall Manager

- Manage rules in all accounts of an AWS Organization
- Security policy: common set of security rules
- WAF rules (Application Load Balancer, API Gateways, CloudFront)
- AWS Shield Advanced (ALB, CLB, NLB, Elastic IP, CloudFront)
- Security Groups for EC2, Application Load BAlancer and ENI resources in VPC
- AWS Network Firewall (VPC Level)
- Amazon Route 53 Resolver DNS Firewall
- Policies are created at the region level
- Rules are applied to new resources as they are created (good for
compliance) across all and future accounts in your Organization

### WAF vs. Firewall Manager vs. Shield

AWS WAF
AWS Firewall Manager
AWS Shield
- WAF, Shield and Firewall Manager are used together for comprehensive protection
- Define your Web ACL rules in WAF
- For granular protection of your resources, WAF alone is the correct choice
- If you want to use AWS WAF across accounts, accelerate WAF configuration,
automate the protection of new resources, use Firewall Manager with AWS WAF
- Shield Advanced adds additional features on top of AWS WAF, such as dedicated
support from the Shield Response Team (SRT) and advanced reporting.
- If you’re prone to frequent DDoS attacks, consider purchasing Shield Advanced

### EventBridge

- Automated Security Assessments
SSM Agent
Lambda
Function
- For EC2 instances
- Leveraging the AWS System Manager (SSM) agent
- Analyze against unintended network accessibility
- Analyze the running OS against known vulnerabilities
- For Container Images push to Amazon ECR
- Assessment of Container Images as they are pushed
Amazon
Inspector
Amazon ECR
Container Image
- For Lambda Functions
- Identifies software vulnerabilities in function code and package
dependencies
- Assessment of functions as they are deployed
assessment run state
& findings
- Reporting & integration with AWS Security Hub
- Send findings to Amazon Event Bridge
Security Hub
Amazon Inspector

### What does Amazon Inspector evaluate?

- Remember: only for EC2 instances, Container Images & Lambda functions
- Continuous scanning of the infrastructure, only when needed
- Package vulnerabilities (EC2, ECR & Lambda) – database of CVE
- Network reachability (EC2)
- A risk score is associated with all vulnerabilities for prioritization

### Logging in AWS for security and compliance

- To help compliance requirements, AWS provides many service-specific security and audit logs
- Service Logs include:
- 
- 
- 
- 
- 
- 
- 
CloudTrail trails - trace all API calls
Config Rules - for config & compliance over time
CloudWatch Logs - for full data retention
VPC Flow Logs - IP traffic within your VPC
ELB Access Logs - metadata of requests made to your load balancers
CloudFront Logs - web distribution access logs
WAF Logs - full logging of all requests analyzed by the service
- Logs can be analyzed using AWS Athena if they’re stored in S3
- You should encrypt logs in S3, control access using IAM & Bucket Policies, MFA
- Move Logs to Glacier for cost savings
- Read whitepaper if interested at:
aper.pdf

### Amazon GuardDuty

- Intelligent Threat discovery to protect your AWS Account
- Uses Machine Learning algorithms, anomaly detection, 3rd party data
- One click to enable (30 days trial), no need to install software
- Input data includes:
- CloudTrail Events Logs – unusual API calls, unauthorized deployments
- CloudTrail Management Events – create VPC subnet, create trail, …
- CloudTrail S3 Data Events – get object, list objects, delete object, …
- VPC Flow Logs – unusual internal traffic, unusual IP address
- DNS Logs – compromised EC2 instances sending encoded data within DNS queries
- Optional Feature – EKS Audit Logs, RDS & Aurora, EBS, Lambda, S3 Data Events…
- Can setup EventBridge rules to be notified in case of findings
- EventBridge rules can target AWS Lambda or SNS
- Can protect against CryptoCurrency attacks (has a dedicated “finding” for it)

### Amazon GuardDuty

VPC Flow Logs
CloudTrail Logs
DNS Logs (AWS DNS)
SNS
GuardDuty
Optional Features
S3 Logs
EBS Volumes
EventBridge
Lambda Network
Activity
RDS & Aurora
Login Activity
EKS Audit Logs &
Runtime Monitoring
Lambda

### AWS Macie

- Amazon Macie is a fully managed data security and data privacy service
that uses machine learning and pattern matching to discover and
protect your sensitive data in AWS.
- Macie helps identify and alert you to sensitive data, such as personally
identifiable information (PII)
analyze
S3 Buckets
notify
Macie
Discover Sensitive Data (PII)
integrations
Amazon
EventBridge

### Trusted Advisor

- No need to install anything – high level AWS account
assessment
- Analyze your AWS accounts and provides
recommendation on 6 categories:
- Cost optimization
- Performance
- Security
- Fault tolerance
- Service limits
- Operational Excellence
- Business & Enterprise Support plan
- Full Set of Checks
- Programmatic Access using AWS Support API
- Integrated with Security Hub, Config, Compute Optimizer
Security Hub
Config
Compute
Optimizer
Trusted Advisor

### Trusted Advisor – Automate Notifications

Metric
ServiceLimitUsage
trigger
Trusted Advisor
email
invoke
CloudWatch
Alarms
SNS
Administrator

### Trusted Advisor – Organizational View

- You can view all Trusted Advisor checks
across all accounts in an AWS Organization
- Organization must have all Features
enabled and have Business, Enterprise OnRamp, or Enterprise Support Plan
- In Trusted Advisor, enable Trusted Access
with AWS Organization in the
Management account (or Delegated
Administrator account)
AWS Organization
Management Account
Member
Account
Member
Account
Member
Account

### AWS Security Hub

- Central security tool to manage security across several AWS accounts and automate
security checks
- Integrated dashboards showing current security and compliance status to quickly take
actions
- Automatically aggregates alerts in predefined or personal findings formats from various
AWS services & AWS partner tools:
- Config
- GuardDuty
- Inspector
- Macie
- IAM Access Analyzer
- AWS Systems Manager
- AWS Firewall Manager
- AWS Health
- AWS Partner Network Solutions
- Must first enable the AWS Config Service

### AWS Security Hub

Multi
account
Security Hub
Macie
GuardDuty
Inspector
Config
Firewall
Manager
IAM Access
Analyzer
Systems Manager
Health
Collect potential issues & findings
rat
Automated checks
EventBridge event
Security Hub
Findings
inv
est
iga
Amazon Detective

### Security Hub – Managing Multiple Accounts

- Integrate Security Hub with AWS Organizations
- You can manage Security Hub in all your member
accounts from an Administrator Account
- You designate a Security Hub Delegated
Administrator & Security Hub is automatically
enabled
- Manage Security Hub with centralized config
- Example: run CIS AWS Benchmark to scan all
accounts and monitor from a central Security Hub
AWS Organizations
Delegated Administrator
Account
findings
Member
Account
Member
Account
Member
Account

### AWS Audit Manager

- Assess risk and compliance of your AWS workloads
- Continuously audit AWS services usage and prepare audits
- Prebuilt frameworks include:
- CIS AWS Foundations Benchmark 1.2.0 & 1.3.0
- General Data Protection Regulation (GDPR),
- Health Insurance Portability and Accountability Act (HIPAA)
- Payment Card Industry Data Security Standard (PCI DSS) v3.2.1
- Service Organization Control 2 (SOC 2)
- Generates reports of compliance alongside evidence folders

### AWS Audit Manager

AWS Audit Manager
continuously audit your
AWS usage to simplify
how you assess risk
and compliance
activate the assessment
to continuously
gather evidence
Select Framework
choose a prebuilt framework
with included controls,
or create your own
custom framework
Define the Scope
Audit Manager conducts
Automated Evidence
Collection
specify the in-scope
accounts and services in
a region for your assessment
filter and group your data
to deep dive into causes
of non-compliance
conduct control reviews, or
delegate to resource owners
to validate
Identify Root Causes
Generate Reports
create auti-ready assessment
reports with links to evidence

### AWS KMS (Key Management Service)

- Anytime you hear “encryption” for an AWS service, it’s most likely KMS
- AWS manages encryption keys for us
- Fully integrated with IAM for authorization
- Easy way to control access to your data
- Able to audit KMS Key usage using CloudTrail
- Seamlessly integrated into most AWS services (EBS, S3, RDS, SSM…)
- Never ever store your secrets in plaintext, especially in your code!
- KMS Key Encryption also available through API calls (SDK, CLI)
- Encrypted secrets can be stored in the code / environment variables

### KMS Keys Types

- KMS Keys is the new name of KMS Customer Master Key
- Symmetric (AES-256 keys)
- Single encryption key that is used to Encrypt and Decrypt
- AWS services that are integrated with KMS use Symmetric CMKs
- You never get access to the KMS Key unencrypted (must call KMS API to use)
- Asymmetric (RSA & ECC key pairs)
- Public (Encrypt) and Private Key (Decrypt) pair
- Used for Encrypt/Decrypt, or Sign/Verify operations
- The public key is downloadable, but you can’t access the Private Key unencrypted
- Use case: encryption outside of AWS by users who can’t call the KMS API

### AWS KMS (Key Management Service)

- Types of KMS Keys:
- AWS Owned Keys (free): SSE-S3, SSE-SQS, SSE-DDB (default key)
- AWS Managed Key: free (aws/service-name, example: aws/rds or aws/ebs)
- Customer managed keys created in KMS: $1 / month
- Customer managed keys imported: $1 / month
- + pay for API call to KMS ($0.03 / 10000 calls)
- Automatic Key rotation:
- AWS-managed KMS Key: automatic every 1 year
- Customer-managed KMS Key: (must be enabled) automatic & on-demand
- Imported KMS Key: only manual rotation possible using alias

### Copying Snapshots across regions

Region eu-west-2
EBS Volume
Encrypted
With KMS
EBS Snapshot
Encrypted
With KMS
Region ap-southeast-2
KMS Key A
EBS Volume
Encrypted
With KMS
KMS Key B
KMS Key A
EBS Snapshot
Encrypted
With KMS
KMS Key B
KMS ReEncrypt with KMS Key B

### KMS Key Policies

- Control access to KMS keys, “similar” to S3 bucket policies
- Difference: you cannot control access without them
- Default KMS Key Policy:
- Created if you don’t provide a specific KMS Key Policy
- Complete access to the key to the root user = entire AWS account
- Custom KMS Key Policy:
- Define users, roles that can access the KMS key
- Define who can administer the key
- Useful for cross-account access of your KMS key

### Copying Snapshots across accounts

1. Create a Snapshot, encrypted with
your own KMS Key (Customer
Managed Key)
2. Attach a KMS Key Policy to
authorize cross-account access
3. Share the encrypted snapshot
4. (in target) Create a copy of the
Snapshot, encrypt it with a CMK in
your account
5. Create a volume from the snapshot
KMS Key Policy

### KMS Automatic Key Rotation

- AWS-managed KMS Keys: automatically rotated every 1 year
- For Customer-Managed Symmetric KMS Key
- Automatic key rotation is optionally enabled
- Customize Rotation Period between 90 and 2560 days (default: 365 days)
- Previous key is kept active so you can decrypt old data
- New Key has the same KMS Key ID (only the backing key is changed)
Backing Key
111122223333
Automatic Key rotation
KMS Key ID = 1234abcd-12ab-34cd-56ef-1234567890ab
Backing Key
Saved Backing Key
444455556666
111122223333
KMS Key ID = 1234abcd-12ab-34cd-56ef-1234567890ab

### KMS On-Demand Key Rotation

- For Customer-Managed Symmetric KMS Key (not AWS managed CMK)
- Does NOT require Automatic Key Rotation to be enabled
- Does NOT change existing Automatic Rotation schedules
- Limit to how many times you can trigger an on-demand key rotation
Backing Key
111122223333
On Demand Key rotation
KMS Key ID = 1234abcd-12ab-34cd-56ef-1234567890ab
Backing Key
Saved Backing Key
444455556666
111122223333
KMS Key ID = 1234abcd-12ab-34cd-56ef-1234567890ab

### (Customer-Managed Symmetric KMS Key & Imports)

- When you want to rotate key (example: every month)
- New Key has a different KMS Key ID
- Keep the previous key active so you can decrypt old data
- Better to use aliases in this case (to hide the change of key for the application)
- Good solution to rotate KMS Key that are not eligible for automatic rotation (like asymmetric KMS Key)
Rotate Key Manually
Client
111122223333
Alias = MyCustomKey
KMS Key ID = 1234abcd-12ab-34cd-56ef-1234567890ab
Client
111122223333
444455556666
Alias = MyCustomKey
KMS Key ID = 1234abcd-12ab-34cd-56ef-1234567890ab KMS Key ID = 0978dcba-09fe-65ba-ab0987654321
KMS Manual Key Rotation

### KMS Alias Updating

- Better to use aliases in this case (to hide the change of key for the
application)
Application
Key Alias = MyAppKey
UpdateAlias API
OLD KEY
KMS Key ID = eba96e8f-7f66-4d5a-aeb6-f32ae8d65d85
NEW KEY
KMS Key ID = 881cd7f5-b3eb-43e2-82fc-d6f5bda81e00

### Volume

- You can’t change the encryption keys used by an EBS volume
- Create an EBS snapshot and create a new EBS volume and specify the
new KMS key
create snapshot
create volume
EBS Volume
(encrypted)
EBS Snapshot
(encrypted)
EBS Volume
(encrypted)
CMK - A
CMK - A
CMK - B
Changing The KMS Key For An Encrypted EBS

### Sharing KMS Encrypted RDS DB Snapshots

- You can share RDS DB snapshots encrypted with KMS CMK with other
accounts, but must first share the KMS CMK with the target account
using Key Policy
Account A (111122223333)
Account B (444455556666)
Snapshot: mydbsnapshot
RDS DB
Snapshot
(encrypted)
Key
Policy
CMK - A
share
access through
CMK Key Policy
DB Instance
(Snapshot: mydbsnapshot)

### KMS Key Deletion Considerations

- Schedule CMK for deletion with a waiting period of 7 to 30 days
- CMK’s status is “Pending deletion” during the waiting period
- During the CMK’s deletion waiting period:
- The CMK can’t be used for cryptographic operations (e.g., can’t decrypt KMSencrypted objects in S3 – SSE-KMS)
- The key is not rotated even if planned
- You can cancel the key deletion during the waiting period
- Consider disabling your key instead of deleting it if you’re not sure!

### KMS Key Deletion – CloudWatch Alarm

- Use CloudTrail, CloudWatch Logs, CloudWatch Alarms and SNS to be
notified when someone tries to use a CMK that’s ”Pending deletion” in
a cryptographic operation (Encrypt, Decrypt, …)
CloudWatch
AWS KMS
cryptographic
operation
CMK
(Pending deletion)
Metric Filter:
“* is pending deletion”
log
API calls
(DENIED)
Alert
logs
CloudTrail
CW Logs
CW Alarm
Amazon SNS

### KMS Multi-Region Keys

AWS KMS
us-west-2
multi-Region Replica key
arn:aws:kms:us-west-2:111122223333:
key/mrk-1234abcd12ab34cd56ef1234567890ab
sync
multi-Region Primary key
multi-Region Replica key
arn:aws:kms:us-east-1:111122223333:
key/mrk-1234abcd12ab34cd56ef1234567890ab
arn:aws:kms:eu-west-1:111122223333:
key/mrk-1234abcd12ab34cd56ef1234567890ab
ap-southeast-2
multi-Region Replica key
arn:aws:kms:ap-southeast-2:111122223333:
key/mrk-1234abcd12ab34cd56ef1234567890ab

### KMS Multi-Region Keys

- Identical KMS keys in different AWS Regions that can be used interchangeably
- Multi-Region keys have the same key ID, key material, automatic rotation…
- Encrypt in one Region and decrypt in other Regions
- No need to re-encrypt or making cross-Region API calls
- KMS Multi-Region are NOT global (Primary + Replicas)
- Each Multi-Region key is managed independently
- Use cases: global client-side encryption, encryption on Global DynamoDB, Global Aurora

### AWS Certificate Manager (ACM)

- Easily provision, manage, and deploy TLS Certificates
- Provide in-flight encryption for websites (HTTPS)
HTTPS
- Supports both public and private TLS certificates
provision and
- Free of charge for public TLS certificates
maintain TLS certs
- Automatic TLS certificate renewal
AWS Certificate Manager
- Integrations with (load TLS certificates on)
- Elastic Load Balancers (CLB, ALB, NLB)
- CloudFront Distributions
- APIs on API Gateway
- Cannot use ACM with EC2 (can’t be extracted)
HTTP
Auto Scaling group
EC2 Instance
Application
Load
Balancer
EC2 Instance

### ACM – Requesting Public Certificates

List domain names to be included in the certificate
- Fully Qualified Domain Name (FQDN): corp.example.com
- Wildcard Domain: *.example.com
Select Validation Method: DNS Validation or Email validation
- DNS Validation is preferred for automation purposes
- Email validation will send emails to contact addresses in the WHOIS database
- DNS Validation will leverage a CNAME record to DNS config (ex: Route 53)
It will take a few hours to get verified
The Public Certificate will be enrolled for automatic renewal
- ACM automatically renews ACM-generated certificates 60 days before expiry

### ACM – Importing Public Certificates

- Option to generate the certificate
outside of ACM and then import it
- No automatic renewal, must import a
new certificate before expiry
- ACM sends daily expiration events
starting 45 days prior to expiration
- The # of days can be configured
- Events are appearing in EventBridge
- AWS Config has a managed rule
named acm-certificate-expiration-check
to check for expiring certificates
(configurable number of days)
ACM
ACM Events:
Daily Certificate Expiry
Lambda
Rule check
EventBridge
Rule events:
Non-compliance
AWS Config
SNS
SQS

### ACM – Integration with ALB

Application Load Balancer
With HTTP -> HTTPS redirect rule
HTTP
Auto Scaling group
Redirect to HTTPS
HTTPS
provision and
maintain TLS certs
AWS Certificate Manager
EC2 Instance
EC2 Instance

### API Gateway - Endpoint Types

- Edge-Optimized (default): For global clients
- Requests are routed through the CloudFront Edge locations (improves latency)
- The API Gateway still lives in only one region
- Regional:
- For clients within the same region
- Could manually combine with CloudFront (more control over the caching
strategies and the distribution)
- Private:
- Can only be accessed from your VPC using an interface VPC endpoint (ENI)
- Use a resource policy to define access

### ACM – Integration with API Gateway

- Create a Custom Domain Name in API Gateway
- Edge-Optimized (default): For global clients
- Requests are routed through the CloudFront Edge locations
(improves latency)
- The API Gateway still lives in only one region
- The TLS Certificate must be in the same region as
CloudFront, in us-east-1
- Then setup CNAME or (better) A-Alias record in Route 53
linked
certificate
CloudFront
ACM
API Gateway
Edge-Optimized
- Regional:
- For clients within the same region
- The TLS Certificate must be imported on API Gateway, in
the same region as the API Stage
- Then setup CNAME or (better) A-Alias record in Route 53
ap-southeast-2
linked
certificate
API Gateway
Regional
ACM

### AWS Secrets Manager

- Newer service, meant for storing secrets
- Capability to force rotation of secrets every X days
- Automate generation of secrets on rotation (uses Lambda)
- Integration with Amazon RDS (MySQL, PostgreSQL, Aurora)
- Secrets are encrypted using KMS
- Mostly meant for RDS integration

### AWS Secrets Manager – Multi-Region Secrets

- Replicate Secrets across multiple AWS Regions
- Secrets Manager keeps read replicas in sync with the primary Secret
- Ability to promote a read replica Secret to a standalone Secret
- Use cases: multi-region apps, disaster recovery strategies, multi-region DB…
us-east-1 (Primary)
Secrets
Manager
replicate
MySecret-A
(primary)
us-west-2 (Secondary)
MySecret-A
(replica)
Secrets
Manager

### SSM Parameter Store vs Secrets Manager

- Secrets Manager ($$$):
- Automatic rotation of secrets with AWS Lambda
- Lambda function is provided for RDS, Redshift, DocumentDB
- KMS encryption is mandatory
- Can integration with CloudFormation
- SSM Parameter Store ($):
- Simple API
- No secret rotation (can enable rotation using Lambda triggered by EventBridge)
- KMS encryption is optional
- Can integration with CloudFormation
- Can pull a Secrets Manager secret using the SSM Parameter Store API

### Rotation

AWS Secrets Manager
every 30 days
SSM Parameter Store
every 30 days
invoke
AWS Secrets Manager
invoke
Lambda Function
(can be provided)
Lambda Function
EventBridge
change password
change
password
Amazon RDS
Amazon RDS
change
value
SSM Parameter Store
SSM Parameter Store vs. Secrets Manager

### Secrets Manager – Monitoring

- CloudTrail captures API calls to the Secrets Manager API
- CloudTrail captures other related events that might have a
security or compliance impact on your AWS account or
might help you troubleshoot operational problems.
- CloudTrail records these events as non-API service events.
- RotationStarted event
- RotationSucceeded event
- RotationFailed event
- RotationAbandoned event – a manual change to a secret instead
of automated rotation
- StartSecretVersionDelete event
- CancelSecretVersionDelete event
- EndSecretVersionDelete event
- Combine with CloudWatch Logs and CloudWatch alarms
for automations
Secrets Manager
API calls
& Non-API events
CloudTrail
store
Amazon CloudWatch
Metric Filter
CW Logs
CW Alarm

### Secrets Manager – Troubleshooting Rotation

API calls
& Non-API events
CloudTrail
Error
invoke
AWS Secrets Manager
logs
Lambda Function
change password
Amazon RDS
debug issues
CloudWatch Logs
Administrator

### IAM Permission Boundaries

- IAM Permission Boundaries are supported for users and roles (not groups)
- Advanced feature to use a managed policy to set the maximum permissions
an IAM entity can get.
IAM Permission Boundary
Example:
IAM Permissions
Through IAM Policy
No Permissions

---

## 17. Identity

### IAM Permission Boundaries

- Can be used in combinations of
AWS Organizations SCP
Use cases
- Delegate responsibilities to non
administrators within their permission
boundaries, for example create new IAM
users
- Allow developers to self-assign policies
and manage their own permissions, while
making sure they can’t “escalate” their
privileges (= make themselves admin)
- Useful to restrict one specific user
(instead of a whole account using
Organizations & SCP)

### IAM Security Tools

- IAM Credentials Report (account-level)
- a report that lists all your account's users and the status of their various
credentials
- IAM Access Advisor (user-level)
- Access advisor shows the service permissions granted to a user and when those
services were last accessed.
- You can use this information to revise your policies.

### IAM Access Analyzer

- Find out which resources are shared
externally
- S3 Buckets
- IAM Roles
- KMS Keys
- Lambda Functions and Layers
- SQS queues
- Secrets Manager Secrets
- Define Zone of Trust = AWS Account or
AWS Organization
- Access outside zone of trusts => findings
Zone of trust
Role
User
Account
S3 Bucket
VPC
Endpoints
External
Client

### What’s Identity Federation?

user
login
- Federation lets users outside of AWS to assume
temporary role for accessing AWS resources.
- These users assume identity provided access role.
- Federation assumes a form of 3rd party
authentication
- LDAP
- Microsoft Active Directory (~= SAML)
- Single Sign On
- Open ID
- Cognito
Gives
credentials
Access AWS
- Using federation, you don’t need to create IAM users
(user management is outside of AWS)
3rd party
Trust

### For Enterprises

- To integrate Active Directory / ADFS with AWS (or any SAML 2.0)
- Provides access to AWS Console or CLI (through temporary creds)
- No need to create an IAM user for each of your employees
SAML Federation

### For Enterprises

- Use only if identity provider is not compatible with SAML 2.0
- The identity broker must determine the appropriate IAM policy
common-scenarios_federated-users.html
Custom Identity Broker Application

### Twitter

- Goal:
- Provide direct access to AWS Resources from
the Client Side
CUP
- How:
- Log in to federated identity provider – or
remain anonymous
- Get temporary AWS credentials back from the
Federated Identity Pool
- These credentials come with a pre-defined IAM
policy stating their permissions
- Example:
- provide (temporary) access to write to S3
bucket using Facebook Login
login
token
verify token
Authenticate to FIP
App
call
temp AWS credentials
Federated
Identity
Get credentials
- Note:
- Web Identity Federation is an alternative to
using Cognito but AWS recommends against it
Google Facebook
SAML
OpenID
Amazon S3
bucket
AWS Cognito - Federated Identity Pools
Identity Provider
For Public Applications

### AWS STS – Security Token Service

- Allows to grant limited and temporary access to AWS resources.
- Token is valid for up to one hour (must be refreshed)
- AssumeRole
- Within your own account: for enhanced security
- Cross Account Access: assume role in target account to perform actions there
- AssumeRoleWithSAML
- return credentials for users logged with SAML
- AssumeRoleWithWebIdentity
- return creds for users logged with an IdP (Facebook Login, Google Login, OIDC compatible…)
- AWS recommends against using this, and using Cognito instead
- GetSessionToken
- for MFA, from a user or AWS account root user

### Using STS to Assume a Role

- Define an IAM Role within your
account or cross-account
- Define which principals can access
this IAM Role
- Use AWS STS (Security Token
Service) to retrieve credentials and
impersonate the IAM Role you
have access to (AssumeRole API)
- Temporary credentials can be valid
between 15 minutes to 1 hour
AssumeRole API
AWS STS
user
permissions
Role (same or
other account)
temporary
security
credential
IAM

### Cross-Account Access with STS

Production Account
Development Account
1. Admin creates an IAM role that
grants the Development account
access to productionapp S3 bucket
2. Admin grants members Developers
IAM Group permission to assume
UpdateApp IAM Role
IAM Role
3. AssumeRole
(UpdateApp)
4. STS Role Credentials
S3 Bucket
(productionapp)
e s s Bu
IAM Group
(Developers)
cket
IAM Group
(Testers)

### IAM Policy Simulator

- Allows you to test and troubleshoot IAM policies before applying them in an
AWS environment
- Helps you understand what permissions a user, group, or role has
- Example: test if a user can perform action s3:PutObject on S3 bucket
- Works with Identity-based Policies, Resource-based Policies, Permission
Boundaries, SCPs
- Use Cases:
- Test Identity-based Policies attached to IAM Users, Groups, or Roles
- Test all policies or select one or more policies attached to a User
- Test the effect of Resource-based Policy on an IAM User
- Test the impact of SCP on your Identity-based Policies

### What is DNS?

- Domain Name System which translates the human friendly hostnames
into the machine IP addresses
- www.google.com => 172.217.18.36
- DNS is the backbone of the Internet
- DNS uses hierarchical naming structure
.com
example.com
www.example.com
api.example.com

---

## 18. Amazon Route 53

### DNS Terminologies

- Domain Registrar: Amazon Route 53, GoDaddy, …
- DNS Records: A, AAAA, CNAME, NS, …
- Zone File: contains DNS records
- Name Server: resolves DNS queries (Authoritative or Non-Authoritative)
- Top Level Domain (TLD): .com, .us, .in, .gov, .org, …
- Second Level Domain (SLD): amazon.com, google.com, …
URL
TLD
Protocol
SLD
Sub Domain
FQDN (Fully Qualified Domain Name)
Root

### How DNS Works

Web Server
(example.com)
(IP: 9.10.11.12)
exam
NS 1
example.com?
TTL
Web Browser
You want to access
example.com
Managed by ICANN
e.com
Root DNS Server
.3.4
example.com?
TTL
example.com NS 5.6.7.8
Local DNS Server
Assigned and Managed by
your company or assigned by
your ISP dynamically
Managed by IANA
(Branch of ICANN)
exam
exam
le.co
m IP
TLD DNS Server
(.com)
le.co
9.10
.11.
Managed by Domain Registrar
(e.g., Amazon Registrar, Inc.)
SLD DNS Server
(example.com)

### Amazon Route 53

- A highly available, scalable, fully
managed and Authoritative DNS
- Authoritative = the customer (you)
can update the DNS records
- Route 53 is also a Domain Registrar
- Ability to check the health of your
resources
- The only AWS service which
provides 100% availability SLA
- Why Route 53? 53 is a reference to
the traditional DNS port
example.com?
Client
AWS Cloud
Public IP
EC2 Instance
Amazon
Route 53

### Route 53 – Records

- How you want to route traffic for a domain
- Each record contains:
- Domain/subdomain Name – e.g., example.com
- Record Type – e.g., A or AAAA
- Value – e.g., 12.34.56.78
- Routing Policy – how Route 53 responds to queries
- TTL – amount of time the record cached at DNS Resolvers
- Route 53 supports the following DNS record types:
- (must know) A / AAAA / CNAME / NS
- (advanced) CAA / DS / MX / NAPTR / PTR / SOA / TXT / SPF / SRV

### Route 53 – Record Types

- A – maps a hostname to IPv4
- AAAA – maps a hostname to IPv6
- CNAME – maps a hostname to another hostname
- The target is a domain name which must have an A or AAAA record
- Can’t create a CNAME record for the top node of a DNS namespace (Zone
Apex)
- Example: you can’t create for example.com, but you can create for
www.example.com
- NS – Name Servers for the Hosted Zone
- Control how traffic is routed for a domain

### Route 53 – Hosted Zones

- A container for records that define how to route traffic to a domain and
its subdomains
- Public Hosted Zones – contains records that specify how to route
traffic on the Internet (public domain names)
application1.mypublicdomain.com
- Private Hosted Zones – contain records that specify how you route
traffic within one or more VPCs (private domain names)
application1.company.internal
- You pay $0.50 per month per hosted zone

### Route 53 – Public vs. Private Hosted Zones

Public Hosted Zone
Private Hosted Zone
example.com?
VPC
S3 Bucket
EC2 Instance
Amazon
(Public IP)
CloudFront
Application
Load Balancer
EC2 Instance
.10
.0.
.int
ern
i.ex
pl e
VPC
db.example.internal?
Private Hosted Zone
Public Hosted Zone
al?
Client
EC2 Instance
(webapp.example.internal) (api.example.internal)
(Private IP)
(Private IP)
DB Instance
(db.example.internal)
(Private IP)

### Common DNS Record Types for Email

Record
Purpose
Example
Mail Exchange – tells where to deliver
inbound mail
10 inbound-smtp.us-east-1.amazonaws.com
TXT (SPF)
Sender Policy Framework – authorizes
servers allowed to send mail
v=spf1 include:amazonses.com ~all
TXT (DKIM)
DomainKeys Identified Mail – cryptographic
signature verifying message integrity
abcdefg12345._domainkey.example.com
TXT (DMARC)
Defines handling policy for messages failing
SPF/DKIM
v=DMARC1; p=quarantine;
rua=mailto:dmarc@example.com

### Amazon SES Integration Flow in Route 53

1. Verify your domain in Amazon SES
→ SES provides TXT record for verification.
2. Set up DKIM (recommended)
→ SES provides 3 CNAME records for DKIM signatures.
3. Update Route 53 hosted zone
→ Add SES verification + DKIM + SPF records.
4. Optional: Add MX record if receiving mail through SES.
5. Wait for propagation → SES status changes to “verified.”
Use the “Create Record in Route 53” button directly from SES → auto-creates
verification, DKIM, and SPF records.

### Route 53 – Records TTL (Time To Live)

- High TTL – e.g., 24 hr
- Less traffic on Route 53
- Possibly outdated records
equest
D NS R
le.com
myapp
- Low TTL – e.g., 60 sec.
- More traffic on Route 53 ($$)
- Records are outdated for less
time
- Easy to change records
- Except for Alias records, TTL
is mandatory for each DNS
record
4.56.7
TL)
(with T
TTL
Client
Will cache the result for
The TTL of the record
HT T
HT T
P Re
P Re
Amazon
Route 53
ques
spon
Web Server

### CNAME vs Alias

- AWS Resources (Load Balancer, CloudFront...) expose an AWS hostname:
- lb1-1234.us-east-2.elb.amazonaws.com and you want myapp.mydomain.com
- CNAME:
- Points a hostname to any other hostname. (app.mydomain.com => blabla.anything.com)
- ONLY FOR NON ROOT DOMAIN (aka. something.mydomain.com)
- Alias:
- Points a hostname to an AWS Resource (app.mydomain.com => blabla.amazonaws.com)
- Works for ROOT DOMAIN and NON ROOT DOMAIN (aka mydomain.com)
- Free of charge
- Native health check

### Load Balancer

Amazon
Route 53
Route 53 – Alias Records
- Maps a hostname to an AWS resource
- An extension to DNS functionality
Alias Record (Enabled)
- Automatically recognizes changes in the
Record Name Type
Value
resource’s IP addresses
example.com A
MyALB-123456789.useast• Unlike CNAME, it can be used for the top node
1.elb.amazonaws.com
of a DNS namespace (Zone Apex), e.g.:
example.com
- Alias Record is always of type A/AAAA for
MyALB-123456789.us-east-1.elb.amazonaws.com
AWS resources (IPv4 / IPv6)
AWS-Managed
(IP Addresses might change)
- You can’t set the TTL
Application

### Route 53 – Alias Records Targets

- Elastic Load Balancers
- CloudFront Distributions
Elastic
Load Balancer
- API Gateway
- Elastic Beanstalk environments
- S3 Websites
Elastic Beanstalk
- VPC Interface Endpoints
- Global Accelerator accelerator
- Route 53 record in the same hosted zone
Amazon
CloudFront
Amazon
API Gateway
S3 Websites
VPC Interface
Endpoints
Global Accelerator
- You cannot set an ALIAS record for an EC2 DNS name
Route 53 Record
(same Hosted Zone)

### Route 53 – Routing Policies

- Define how Route 53 responds to DNS queries
- Don’t get confused by the word “Routing”
- It’s not the same as Load balancer routing which routes the traffic
- DNS does not route any traffic, it only responds to the DNS queries
- Route 53 Supports the following Routing Policies
- Simple
- Weighted
- Failover
- Latency based
- Geolocation
- Multi-Value Answer
- Geoproximity (using Route 53 Traffic Flow feature)

### Routing Policies – Simple

- Typically, route traffic to a single
resource
- Can specify multiple values in the
same record
- If multiple values are returned, a
random one is chosen by the client
- When Alias enabled, specify only
one AWS resource
- Can’t be associated with Health
Checks
Single Value
foo.example.com
A 11.22.33.44
Client
Multiple Value
foo.example.com
Client
chooses
a random value
Amazon
Route 53
A 11.22.33.44
A 55.66.77.88
A 99.11.22.33
Amazon
Route 53

### Routing Policies – Weighted

- Control the % of the requests that go to each
specific resource
- Assign each record a relative weight:
- 𝑡𝑟𝑎𝑓𝑓𝑖𝑐 (%) =
Weight: 70
!"#$%& ()* + ,-".#(#. *".)*/
012 )( +33 &%" 4"#$%&, ()* +33 *".)*/,
- Weights don’t need to sum up to 100
- DNS records must have the same name and type
- Can be associated with Health Checks
- Use cases: load balancing between regions, testing
new application versions…
- Assign a weight of 0 to a record to stop sending
traffic to a resource
- If all records have weight of 0, then all records will
be returned equally
20%
Amazon
Route 53
Weight: 20
Weight: 10

### Routing Policies – Latency-based

- Redirect to the resource that
has the least latency close to us
- Super helpful when latency for
users is a priority
- Latency is based on traffic
between users and AWS
Regions
- Germany users may be
directed to the US (if that’s the
lowest latency)
- Can be associated with Health
Checks (has a failover
capability)
ALB
(us-east-1)
ALB
(ap-southeast-1)

### EC2 Instance

- HTTP Health Checks are only for public
resources
- Health Check => Automated DNS Failover:
1. Health checks that monitor an endpoint
(application, server, other AWS resource)
2. Health checks that monitor other health
checks (Calculated Health Checks)
3. Health checks that monitor CloudWatch
Alarms (full control !!) – e.g., throttles of
DynamoDB, alarms on RDS, custom metrics,
… (helpful for private resources)
- Health Checks are integrated with CW
metrics
Amazon Route 53
Route 53 – Health Checks
DNS Record
(latency, geoproximity, …)
Health Check
Health Check
ALB
ALB
Auto Scaling group
Auto Scaling group
EC2 Instance

### Health Checks – Monitor an Endpoint

- About 15 global health checkers will check the
endpoint health
Health Checker
(sa-east-1)
req
TP lth
HT /hea
Health Checker
(us-west-1)
- Health Checks pass only when the endpoint
responds with the 2xx and 3xx status codes
- Health Checks can be setup to pass / fail based on
the text in the first 5120 bytes of the response
- Configure you router/firewall to allow incoming
requests from Route 53 Health Checkers
- Healthy/Unhealthy Threshold – 3 (default)
- Interval – 30 sec (can set to 10 sec – higher cost)
- Supported protocol: HTTP, HTTPS and TCP
- If > 18% of health checkers report the endpoint is
healthy, Route 53 considers it Healthy. Otherwise, it’s
Unhealthy
- Ability to choose which locations you want Route 53 to
use
Health Checker
(us-east-1)
ALB
Must allow incoming
requests from Route 53
Health Checkers IP
address range
Auto Scaling group
EC2 Instance

### Route 53 – Calculated Health Checks

- Combine the results of multiple Health
Checks into a single Health Check
- You can use OR, AND, or NOT
- Can monitor up to 256 Child Health Checks
- Specify how many of the health checks need
to pass to make the parent pass
- Usage: perform maintenance to your website
without causing all health checks to fail
Amazon Route 53
Health Check
(Parent)
Health Check Health Check Health Check
(Child)
(Child)
(Child)
monitor
EC2 Instance
monitor
EC2 Instance
monitor
EC2 Instance

### Health Checks – Private Hosted Zones

- Route 53 health checkers are outside the
VPC
- They can’t access private endpoints
(private VPC or on-premises resource)
- You can create a CloudWatch Metric and
associate a CloudWatch Alarm, then
create a Health Check that checks the
alarm itself
VPC
Private subnet
Health Checker
(us-east-1)
monitor
monitor
CloudWatch
Alarm

### Routing Policies – Failover (Active-Passive)

Health Check
(mandatory)
DNS Requests
EC2 Instance
(Primary)
Failover
Client
Amazon
Route 53
EC2 Instance
(Secondary – Disaster Recovery)

### Routing Policies – Geolocation

A 11.22.33.44
- Different from Latency-based!
- This routing is based on user location
- Specify location by Continent, Country
or by US State (if there’s overlapping,
most precise location selected)
- Should create a “Default” record (in
case there’s no match on location)
- Use cases: website localization, restrict
content distribution, load balancing, …
- Can be associated with Health Checks
Default
A 99.11.22.33
A 55.66.77.88

### Routing Policies – Geoproximity

- Route traffic to your resources based on the geographic location of users and
resources
- Ability to shift more traffic to resources based on the defined bias
- To change the size of the geographic region, specify bias values:
- To expand (1 to 99) – more traffic to the resource
- To shrink (-1 to -99) – less traffic to the resource
- Resources can be:
- AWS resources (specify AWS region)
- Non-AWS resources (specify Latitude and Longitude)
- You must use Route 53 Traffic Flow to use this feature

### Routing Policies – Geoproximity

us-west-1
Bias: 0
Bias: 0

### Routing Policies – Geoproximity

us-west-1
Bias: 0
Bias: 50
Higher bias in us-east-1

### Route 53 – Traffic flow

- Simplify the process of creating and
maintaining records in large and
complex configurations
- Visual editor to manage complex
routing decision trees
- Configurations can be saved as
Traffic Flow Policy
- Can be applied to different Route 53
Hosted Zones (different domain
names)
- Supports versioning

### (1.2.3.4)

- Routing is based on clients’ IP addresses
- You provide a list of CIDRs for your clients
and the corresponding endpoints/locations
(user-IP-to-endpoint mappings)
- Use cases: Optimize performance, reduce
network costs…
- Example: route end users from a particular
ISP to a specific endpoint
User B
(200.5.4.100)
(203.0.113.56)
Route 53
CIDR Collection
Locations
CIDR blocks
location-1
location-2
Records
Record Name
Value
IP-based
example.com
location-1
example.com
location-2
EC2 Instance
(5.6.7.8)
User A
Routing Policies – IP-based Routing
EC2 Instance

### Routing Policies – Multi-Value

- Use when routing traffic to multiple resources
- Route 53 return multiple values/resources
- Can be associated with Health Checks (return only values for healthy resources)
- Up to 8 healthy records are returned for each Multi-Value query
- Multi-Value is not a substitute for having an ELB

### Domain Registar vs. DNS Service

- You buy or register your domain name with a Domain Registrar typically by
paying annual charges (e.g., GoDaddy, Amazon Registrar Inc., …)
- The Domain Registrar usually provides you with a DNS service to manage
your DNS records
- But you can use another DNS service to manage your DNS records
- Example: purchase the domain from GoDaddy and use Route 53 to manage
your DNS records
purchase
example.com
manage DNS records
User
Amazon
Route 53

### GoDaddy as Registrar & Route 53 as DNS Service

Amazon
Route 53
Public Hosted Zone
stephanetheteacher.com

### 3rd Party Registrar with Amazon Route 53

- If you buy your domain on a 3rd party registrar, you can still use Route
53 as the DNS Service provider
1. Create a Hosted Zone in Route 53
2. Update NS Records on 3rd party website to use Route 53 Name
Servers
- Domain Registrar != DNS Service
- But every Domain Registrar usually comes with some DNS features

### (acme.example.com)

Users
For acme.example.com:
- Create an S3 bucket with the same name
as the target record (acme.example.com)
- Enable S3 website on the bucket (and
enable S3 bucket public settings)
- Create a Route 53 Alias record to the S3
website endpoint or type A – IPv4
address
- This only works for HTTP traffic (for
HTTPS, use CloudFront)
Alias Record
Record name
acme.example.com
Type
Value
s3-website.eu-central1.amazonaws.com
S3 Website with Route 53
Amazon
Route 53
S3 Bucket Static Website Hosting Enabled

### Route 53 – Hybrid DNS

- By default, Route 53 Resolver
automatically answers DNS queries for:
- Local domain names for EC2 instances
- Records in Private Hosted Zones
- Records in public Name Servers
- Hybrid DNS – resolving DNS queries
between VPC (Route 53 Resolver) and
your networks (other DNS Resolvers)
- Networks can be:
- VPC itself / Peered VPC
- On-premises Network (connected through
Direct Connect or AWS VPN)
Public Name Server
Region
VPC
Private Hosted Zone
Route 53
Resolver
EC2 Instance
(ec2-192-0-2-44.compute-1.amazonaws.com)

### Route 53 – Resolver Endpoints

- Inbound Endpoint – allows your DNS Resolvers to resolve domain names for
AWS resources (e.g., EC2 instances) and records in Private Hosted Zones
On-Premises Data Center
Private Hosted Zone
(aws.private)
VPC
look
DNS Query
rivate?
app.aws.p
Private Subnet
DNS Resolvers
Route 53
Resolver
EC2 Instance
(onpremise.private)
Resolver
Inbound Endpoint
DNS Query
app.aws.private?
(app.aws.private)
VPN or DX connection
Server
(web.onpremise.private)

### Route 53 – Resolver Endpoints

- Outbound Endpoint
- Route 53 Resolver forwards DNS queries to your DNS Resolvers
VPC
Private Subnet
uer y
ivate?
nprem
Route 53
Resolver
On-Premises Data Center
Private Hosted Zone
(aws.private)
EC2 Instance
(app.aws.private)
uer y
DNS Q .private?
i se
nprem
DNS Resolvers
(onpremise.private)
Resolver
Outbound Endpoint
VPN or DX connection
Server
(web.onpremise.private)

### Route 53 – DNS Query Logging

- Log information about public DNS queries Route 53 Resolver receives
- Only for Public Hosted Zones
- Can send logs to CloudWatch Logs (can export to S3)
Log Format
Version
Hosted Zone ID
Query Timestamp
Query
Type
Query Name
Query
Protocol
Response
Code
Edge
Location
Resolver
IP Address
EDNS
Clinet Subnet

### Route 53 – Resolver Query Logging

- Logs all DNS queries made by resources
within a VPC
- Private Hosted Zones
- Resolver Inbound & Outbound Endpoints
- Resolver DNS Firewall
- Can send logs to CloudWatch Logs, S3
bucket, or Kinesis Data Firehose
- Configurations can be shared with other
AWS Accounts using AWS Resource
Access Manager (AWS RAM)
VPC
example.com?
Route 53
Resolver
example.com?
Resolver Query Logging
send logs
S3 Bucket
EC2 Instance
CloudWatch
Logs
Kinesis Data
Firehose

Route 53 – Resolver Query Logging

### Route 53 – Resolver DNS Firewall

- A managed firewall enables you to filter
Region
outbound DNS requests going out through
Private Hosted Zone
Route 53 Resolver
(awscloud.private)
- Blacklist malicious domains or Whitelist
VPC
trusted domains
exa
- Example: prevent a compromised application
Route 53
le.c
within your VPC to send data out through
Resolver (NO lock
DNS to a malicious domain (DNS
exfiltration)
Block
example.com?
(NODATA)
- Can be managed/configured from AWS
EC2 Instance
Firewall Manager
- Send logs to CloudWatch Logs and Route 53
Resolver Query Logs
Resolver
DNS Firewall

### Route 53 – Application Recovery Controller

- Automate and orchestrate application recovery across AZs and Regions
- Mission-critical applications needing high availability and minimal downtime
- Multi-Region active/standby or active/active setups
- Environments with regulatory or business continuity requirements
- Readiness checks – continuously validate standby/replica infra is ready
- Routing controls + DNS integration – turn “traffic switches” on/off to
reroute users between AZs/Regions via DNS & health-checks
- Zonal Shift / Region Switch – shift traffic away from impaired AZs or
orchestrate full Region-level failover

### Route 53 – Application Recovery Controller

Route 53
Recovery Group
Cell 1 (Active)
Region
(us-east-1)
Resource Set
for ALB
Resource Set
for DynamoDB
Region
(eu-west-2)
Application Load
Balancer
Resource Set
for EC2 Instances
Cell 2 (Standby)
EC2 Instances
EC2 Instances
DynamoDB
Application Load
Balancer
EC2 Instances
Readiness
Check
EC2 Instances
DynamoDB
Readiness
Check
Readiness
Check

### Route 53 – Profiles

- Centrally manage Route 53 configuration across many VPCs and AWS
accounts
- Helps you standardize DNS configuration across your VPCs
- Supports resources:
- Private Hosted Zones
- Route 53 Resolver Rules
- Resolver DNS Firewall Rule Groups
- VPC Interface Endpoints
- Route 53 Profiles can be shared across account using AWS RAM

### Zone

- You can associate Private Hosted Zone with a VPC in another Account
Account - A
Account - B
associate
Hosted Zone
VPC
1. Create VPC Association Authorization
2. Create the VPC Association
Private
Route 53 – Cross-Account Private Hosted

### VPC Components Diagram

VPC Flow Logs
Region
NACL
VPC
Internet
www
NACL
Public Subnet
Internet
Gateway
Amazon
DynamoDB
Corporate
Data Center
Private Subnet
Router
Security Group
CloudWatch
Private EC2 Instance
NAT Gateway
Transit
Gateway
VPC Peering
Connections
VPN
Route
Table
Route
Table
Security Group
Public EC2 Instance
Availability Zone
Security Group
Private EC2 Instance
VPC
Endpoint
VPN
Gateway
Customer
Gateway
Server
S2S VPN
Connection
Direct Connect
Connection
DX Location

---

## 19. Amazon VPC

### Understanding CIDR – IPv4

- Classless Inter-Domain Routing – a method for allocating IP addresses
- Used in Security Groups rules and AWS networking in general
- They help to define an IP address range:
- We’ve seen WW.XX.YY.ZZ/32 => one IP
- We’ve seen 0.0.0.0/0 => all IPs
- But we can define:192.168.0.0/26 =>192.168.0.0 – 192.168.0.63 (64 IP addresses)

### Understanding CIDR – IPv4

- A CIDR consists of two components
- Base IP
- Represents an IP contained in the range (XX.XX.XX.XX)
- Example: 10.0.0.0, 192.168.0.0, …
- Subnet Mask
- Defines how many bits can change in the IP
- Example: /0, /24, /32
- Can take two forms:
- /8 ó 255.0.0.0
- /16 ó 255.255.0.0
- /24 ó 255.255.255.0
- /32 ó 255.255.255.255

### Understanding CIDR – Subnet Mask

- The Subnet Mask basically allows part of the underlying IP to get
additional next values from the base IP
. 168 .
192 . 168 .
192 . 168 .
192 . 168 .
192 . 168 .
192 . 168 .
192 . 168 .
192 . 168 .
192 . 168 .
192
. 168 .
192
/32 => allows for 1 IP (2!)
/31 => allows for 2 IP (2")
/30 => allows for 4 IP (2#)
/29 => allows for 8 IP (2$)
/28 => allows for 16 IP (2%)
/27 => allows for 32 IP (2&)
/26 => allows for 64 IP (2')
/25 => allows for 128 IP (2()
/24 => allows for 256 IP (2))
192.168.0.0 -> 192.168.0.1
192.168.0.0 -> 192.168.0.3
192.168.0.0 -> 192.168.0.7
192.168.0.0 -> 192.168.0.15
192.168.0.0 -> 192.168.0.31
192.168.0.0 -> 192.168.0.63
192.168.0.0 -> 192.168.0.127
192.168.0.0 -> 192.168.0.255
/16 => allows for 65,536 IP (2"')
192.168.0.0 -> 192.168.255.255
/0 => allows for All IPs
0.0.0.0 -> 255.255.255.255
Quick Memo
1*+
- 
- 
- 
- 
- 
Octets
2,-
3.-
4+/
/32 – no octet can change
/24 – last octet can change
/16 – last 2 octets can change
/8 – last 3 octets can change
/0 – all octets can change

### Understanding CIDR – Little Exercise

- 192.168.0.0/24 = … ?
- 192.168.0.0 – 192.168.0.255 (256 IPs)
- 192.168.0.0/16 = … ?
- 192.168.0.0 – 192.168.255.255 (65,536 IPs)
- 134.56.78.123/32 = … ?
- Just 134.56.78.123
- 0.0.0.0/0
- All IPs!
- When in doubt, use this website

### Public vs. Private IP (IPv4)

- The Internet Assigned Numbers Authority (IANA) established certain
blocks of IPv4 addresses for the use of private (LAN) and public
(Internet) addresses
- Private IP can only allow certain values:
- 10.0.0.0 – 10.255.255.255 (10.0.0.0/8) ç in big networks
- 172.16.0.0 – 172.31.255.255 (172.16.0.0/12) ç AWS default VPC in that range
- 192.168.0.0 – 192.168.255.255 (192.168.0.0/16) ç e.g., home networks
- All the rest of the IP addresses on the Internet are Public

### Default VPC Walkthrough

- All new AWS accounts have a default VPC
- New EC2 instances are launched into the default VPC if no subnet is
specified
- Default VPC has Internet connectivity and all EC2 instances inside it
have public IPv4 addresses
- We also get a public and a private IPv4 DNS names

### VPC in AWS – IPv4

- VPC = Virtual Private Cloud
- You can have multiple VPCs in an AWS region (max. 5 per region – soft limit)
- Max. CIDR per VPC is 5, for each CIDR:
- Min. size is /28 (16 IP addresses)
- Max. size is /16 (65536 IP addresses)
- Because VPC is private, only the Private IPv4 ranges are allowed:
- 10.0.0.0 – 10.255.255.255 (10.0.0.0/8)
- 172.16.0.0 – 172.31.255.255 (172.16.0.0/12)
- 192.168.0.0 – 192.168.255.255 (192.168.0.0/16)
- Your VPC CIDR should NOT overlap with your other networks (e.g., corporate)

### Adding Subnets

Region
VPC
Public Subnet
Private Subnet
Availability Zone

### VPC – Subnet (IPv4)

- AWS reserves 5 IP addresses (first 4 & last 1) in each subnet
- These 5 IP addresses are not available for use and can’t be assigned to an
EC2 instance
- Example: if CIDR block 10.0.0.0/24, then reserved IP addresses are:
- 10.0.0.0 – Network Address
- 10.0.0.1 – reserved by AWS for the VPC router
- 10.0.0.2 – reserved by AWS for mapping to Amazon-provided DNS
- 10.0.0.3 – reserved by AWS for future use
- 10.0.0.255 – Network Broadcast Address. AWS does not support broadcast in a VPC,
therefore the address is reserved
- Exam Tip, if you need 29 IP addresses for EC2 instances:
- You can’t choose a subnet of size /27 (32 IP addresses, 32 – 5 = 27 < 29)
- You need to choose a subnet of size /26 (64 IP addresses, 64 – 5 = 59 > 29)

### VPC Troubleshooting

- You can NOT change or modify the IPv4 CIDR block of an existing VPC
- Remove and add a new IPv4 CIDR block
- Add a secondary IPv4 CIDR block
- Create a new VPC with a different IPv4 CIDR block
- Example: if your VPC CIDR conflicts with another VPC or on-premises CIDR block
- You can NOT change or modify the IPv4 CIDR block of an existing Subnet
- Create a new Subnet with a new IPv4 CIDR block
- Example: you don’t have enough IPv4 addresses in your Subnet, must create a new
Subnet with larger CIDR block

### VPC IP Address Manager (IPAM)

- Centrally plan, track, and monitor your IP address spaces
- Single source-of-truth for all IP address information
- Automate IP address allocations across 100s of accounts and VPCs
- IPAM Scope – top-level container that encapsulates the IP address space
(two default scopes public & private)
- IP Pool – collection of IP address ranges (CIDRs) that can be divided into
sub-pools for Regional IP Pools
- Monitor your IP addresses and provides alerts when it detects potential
issues (e.g., overlapping IP addresses)
- Use cases: audit public IP usage, identify unused IP addresses, monitor CIDR
allocations, reclaim unused IP addresses…

### VPC IP Address Manager (IPAM)

VPC IPAM
IPAM Scope
IPAM Pool
(Parent IP Pool)
Region - A
VPC – A
Region - B
IPAM Pool
(Child IP Pool)
VPC – B
VPC – C
VPC – D
VPC – A
IPAM Pool
(Child IP Pool)
VPC – B
VPC – C

### Internet Gateway (IGW)

- Allows resources (e.g., EC2 instances) in a VPC connect to the Internet
- It scales horizontally and is highly available and redundant
- Must be created separately from a VPC
- One VPC can only be attached to one IGW and vice versa
- Internet Gateways on their own do not allow Internet access…
- Route tables must also be edited!

### Adding Internet Gateway

Region
VPC
Public Subnet
Private Subnet
Internet
Gateway
Availability Zone

### Editing Route Tables

Region
VPC
Internet
www
Public Subnet
Internet
Gateway
Private Subnet
Router
Route
Table
Security Group
Public EC2 Instance
Availability Zone

### Bastion Hosts

- We can use a Bastion Host to SSH into
our private EC2 instances
- The bastion is in the public subnet which is
then connected to all other private subnets
- Bastion Host security group must allow
inbound from the internet on port 22 from
restricted CIDR, for example the public
CIDR of your corporation
- Security Group of the EC2 Instances must
allow the Security Group of the Bastion
Host, or the private IP of the Bastion host
Users
SSH
VPC
Public Subnet
Security Group (BastionHost-SG)
EC2 Instance
(Bastion Host)
Private Subnet
SSH
Security Group (LinuxInstance-SG)

### NAT Instance (outdated, but still at the exam)

- NAT = Network Address Translation
- Allows EC2 instances in private subnets to
connect to the Internet
- Must be launched in a public subnet
- Must disable EC2 setting: Source /
destination Check
- Must have Elastic IP attached to it
- Route Tables must be configured to route
traffic from private subnets to the NAT
Instance
Server
(IP: 50.60.4.10)
Src.: 50.60.4.10
Dest.: 12.34.56.78
Dest.: 50.60.4.10
VPC
Src.: 12.34.56.78
Public Subnet
Security Group (NATInstance-SG)
EIP
(IP: 12.34.56.78)
Dest.: 50.60.4.10
Src.: 50.60.4.10
Src.: 10.0.0.20
Dest.: 10.0.0.20
Private Subnet
IP: 10.0.0.10
NAT Instance
IP: 10.0.0.20

### NAT Instance

Region
VPC
Internet
www
Public Subnet
Internet
Gateway
Router
Private Subnet
Security Group
Security Group
NAT Instance
Private EC2 Instance
EIP
Route
Table
Route
Table
Security Group
Public EC2 Instance
Availability Zone

### NAT Instance – Comments

- Pre-configured Amazon Linux AMI is available
- Reached the end of standard support on December 31, 2020
- Not highly available / resilient setup out of the box
- You need to create an ASG in multi-AZ + resilient user-data script
- Internet traffic bandwidth depends on EC2 instance type
- You must manage Security Groups & rules:
- Inbound:
- Allow HTTP / HTTPS traffic coming from Private Subnets
- Allow SSH from your home network (access is provided through Internet Gateway)
- Outbound:
- Allow HTTP / HTTPS traffic to the Internet

### NAT Gateway

- AWS-managed NAT, higher bandwidth, high availability, no administration
- Pay per hour for usage and bandwidth
- NATGW is created in a specific Availability Zone, uses an Elastic IP
- Can’t be used by EC2 instance in the same subnet (only from other
subnets)
- Requires an IGW (Private Subnet => NATGW => IGW)
- 5 Gbps of bandwidth with automatic scaling up to 100 Gbps
- No Security Groups to manage / required

### NAT Gateway

Region
VPC
Internet
www
Public Subnet
Internet
Gateway
Private Subnet
Security Group
Router
NAT Gateway
Private EC2 Instance
Route
Table
Route
Table
Security Group
Public EC2 Instance
Availability Zone

### NAT Gateway with High Availability

Internet
- NAT Gateway is resilient within a
single Availability Zone
www
Region
Internet
Gateway
VPC
- Must create multiple NAT
Gateways in multiple AZs for
fault-tolerance
- There is no cross-AZ failover
needed because if an AZ goes
down it doesn't need NAT
Public Subnet
Router
Public Subnet
NAT Gateway
NAT Gateway
Private Subnet
Private Subnet
EC2 Instance
EC2 Instance
AZ - A
AZ - B

### NAT Gateway vs. NAT Instance

NAT Gateway
NAT Instance
Availability
Highly available within AZ (create in another AZ)
Use a script to manage failover between instances
Bandwidth
Up to 100 Gbps
Depends on EC2 instance type
Maintenance
Managed by AWS
Managed by you (e.g., software, OS patches, …)
Cost
Per hour & amount of data transferred
Per hour, EC2 instance type and size, + network $
Public IPv4
Private IPv4
Security Groups
Use as Bastion Host?
More at:

### DNS Resolution in VPC

- DNS Resolution (enableDnsSupport)
- Decides if DNS resolution from Route 53 Resolver server is supported for the VPC
- True (default): it queries the Amazon Provider DNS Server at 169.254.169.253 or the
reserved IP address at the base of the VPC IPv4 network range plus two (.2)
Internet
Internet
DNS Support
VPC
DNS Support
DNS Hostnames
VPC
Public subnet
Public subnet
www.google.com?
A 142.251.37.36
EC2 Instance
DNS Hostnames
www.google.com?
A 142.251.37.36
IP: 169.254.169.253
IP: xx.xx.xx.2
Route 53
Resolver
EC2 Instance
Custom DNS Server

### DNS Resolution in VPC

- DNS Hostnames (enableDnsHostnames)
- By default,
- True => default VPC
- False => newly created VPCs
- Won’t do anything unless enableDnsSupport=true
- If True, assigns public hostname to EC2 instance if it has a public IPv4
DNS Support
VPC
DNS Hostnames
Public subnet
VPC
DNS Hostnames
Public subnet
EC2 Instance
(Private DNS: ip-private-ipv4-address.ec2.internal)
DNS Support
EC2 Instance
(Private DNS: ip-private-ipv4-address.ec2.internal)
(Public DNS: ec2-public-ipv4-address.compute-1.amazonaws.com

### DNS Resolution in VPC

- If you use custom DNS domain names in a Private Hosted Zone in
Route 53, you must set both these attributes (enableDnsSupport &
enableDnsHostname) to true
DNS Support
VPC
DNS Hostnames
Public subnet
te?
ir va
y.p
om 0.0.
EC2 Instance
IP: 169.254.169.253
IP: xx.xx.xx.2
Route 53
Resolver
Private
Hosted Zone
Record Name
web.mycompany.private
Private subnet
EC2 Instance
(DNS Name: web.mycompany.private)
(IPv4: 10.0.0.10)
Type
Value

### Security Groups & NACLs

Outgoing Request
Incoming Request
Subnet
Subnet
NACL Outbound
Rules (Stateless)
Outbound Allowed
(Stateful)
Security Group
NACL Outbound
Rules
SG Outbound
Rules
Security Group
NACL
SG Inbound
Rules
NACL
NACL Inbound
Rules
EC2 Instance
NACL Inbound
Rules (Stateless)
Inbound Allowed
(Stateful)
EC2 Instance

### Network Access Control List (NACL)

- NACL are like a firewall which control traffic from and to subnets
- One NACL per subnet, new subnets are assigned the Default NACL
- You define NACL Rules:
- Rules have a number (1-32766), higher precedence with a lower number
- First rule match will drive the decision
- Example: if you define #100 ALLOW 10.0.0.10/32 and #200 DENY 10.0.0.10/32, the IP
address will be allowed because 100 has a higher precedence over 200
- The last rule is an asterisk (*) and denies a request in case of no rule match
- AWS recommends adding rules by increment of 100
- Newly created NACLs will deny everything
- NACL are a great way of blocking a specific IP address at the subnet level

### NACLs

Region
NACL
VPC
Internet
www
NACL
Public Subnet
Internet
Gateway
Private Subnet
Security Group
Router
NAT Gateway
Private EC2 Instance
Route
Table
Route
Table
Security Group
Public EC2 Instance
Availability Zone

### Default NACL

- Accepts everything inbound/outbound with the subnets it’s associated with
- Do NOT modify the Default NACL, instead create custom NACLs
Default NACL for a VPC that supports IPv4
Inbound Rules
Rule #
Type
Protocol
Port Range
Source
Allow/Deny
100
All IPv4 Traffic
All
All
ALLOW
All IPv4 Traffic
All
All
DENY
Rule #
Type
Protocol
Port Range
Destination
Allow/Deny
100
All IPv4 Traffic
All
All
ALLOW
All IPv4 Traffic
All
All
DENY
Outbound Rules

### Ephemeral Ports

- For any two endpoints to establish a connection, they must use ports
- Clients connect to a defined port, and expect a response on an ephemeral port
- Different Operating Systems use different port ranges, examples:
- IANA & MS Windows 10 è 49152 – 65535
- Many Linux Kernels è 32768 – 60999
Request
Client
IP: 11.22.33.44
Ephemeral Port: 50105
Src. IP
Src. Port
50105
Dest. IP
Dest. Port
443
Payload …
Payload …
Dest. IP
Dest. Port
50105
Src. IP
Src. Port
443
Response
Web Server
IP: 55.66.77.88
Fixed Port: 443

### NACL with Ephemeral Ports

VPC
Database Tier
Web Subnet (Public)
DB Subnet (Private)
Web-NACL
Client
Ephemeral
Port
Allow Outbound TCP
On port 3306
To DB Subnet CIDR
Allow Inbound TCP
On port 3306
From Web Subnet CIDR
Allow Inbound TCP
On port 1024-65535
From DB Subnet CIDR
Allow Outbound TCP
On port 1024-65535
To Web Subnet CIDR
DB-NACL
Web Tier
DB Instance
Port 3306

### target subnets CIDR

VPC
Database Tier
Web Subnet - A (Public)
DB Subnet – A (Private)
Web-NACL
Web Subnet - B (Public)
DB-NACL
Web Tier
DB Instance
DB Subnet – B (Private)
DB Instance
Create NACL rules for each

### Security Group vs. NACLs

Security Group
NACL
Operates at the instance level
Operates at the subnet level
Supports allow rules only
Supports allow rules and deny rules
Stateful: return traffic is automatically allowed,
regardless of any rules
Stateless: return traffic must be explicitly allowed by
rules (think of ephemeral ports)
All rules are evaluated before deciding whether to
allow traffic
Rules are evaluated in order (lowest to highest) when
deciding whether to allow traffic, first match wins
Applies to an EC2 instance when specified by
someone
Automatically applies to all EC2 instances in the
subnet that it’s associated with
NACL Examples:

### Managed Prefix List

Account A
- A set of one or more CIDR blocks
- Makes it easier to configure and maintain
Security Groups and Route Tables
- Customer-Managed Prefix List
- Set of CIDRs that you define and managed by you
- Can be shared with other AWS accounts or AWS
Organization
- Modify to update many Security Groups at once
Prefix List - A
CIDR 1 – 10.0.0.0/16
CIDR 2 – 192.168.0.0/24
CIDR 3 – 192.134.1.62/32
share
Account B
- AWS-Managed Prefix List
- Set of CIDRs for AWS services
- You can’t create, modify, share, or delete them
- S3, CloudFront, DynamoDB, Ground Station…
Security Group
Inbound Rules
Protocol
Port
Source
SSH
Prefix List - A

### VPC – Reachability Analyzer

- Reachable – it produces hop-by-hop details of the
virtual network path
- Not reachable – it identifies the blocking
component(s) (e.g., configuration issues in SGs,
NACLs, Route Tables, …)
- Use cases: troubleshoot connectivity issues,
ensure network configuration is as intended, …
Instance - A
Reachable
ENI - A
SG - A
SG - B
ENI - B
Instance - B
Instance - A
Not reachable
- A network diagnostics tool that troubleshoots
network connectivity between two endpoints
in your VPC(s)
- It builds a model of the network configuration,
then checks the reachability based on these
configurations (it doesn’t send packets)
- When the destination is
ENI - A
SG - A
SG - B
Security Group - A
EC2 Instance - A
ENI - A
Security Group - B
ENI - B
EC2 Instance - B
Security Group - A
EC2 Instance - A
ENI - A
Security Group - B
ENI - B
EC2 Instance - B

### VPC Block Public Access (BPA)

- Centrally block ingress/egress Internet access to VPCs & Subnets
- Helps you ensure compliance and security requirements
- Two Modes:
- Bidirectional – block all Internet traffic to/from VPCs
- Ingress-Only – block all Internet traffic to/from VPCs except for NAT
Gateways and Egress-only Internet Gateways
- Ability to exclude single VPCs and Subnets, with two Exclusion
modes:
- Bidirectional – allow all Internet traffic to/from excluded VPCs & Subnets
- Egress-Only – allow only outbound Internet from excluded VPCs &
Subnets
- Can be enabled per AWS Region
- Verify if traffic blocked using VPC Reachability Analyzer
Internet
ingress
AWS Region
(BPA enabled)
VPC - A
egress
VPC - B

### VPC Peering

- Privately connect two VPCs using AWS’
network
- Make them behave as if they were in the
same network
- Must not have overlapping CIDRs
- VPC Peering connection is NOT transitive
(must be established for each VPC that
need to communicate with one another)
- You must update route tables in each VPC’s
subnets to ensure EC2 instances can
communicate with each other
VPC - A
VPC Peering
(A – B)
VPC Peering
(A – C)
VPC - B
VPC Peering
(B – C)
VPC - C

### VPC Peering – Good to know

- You can create VPC Peering connection between VPCs in different AWS
accounts/regions
- You can reference a security group in a peered VPC (works cross
accounts – same region)
Account ID

### VPC Peering

Region
NACL
VPC
Internet
www
NACL
Public Subnet
Internet
Gateway
Private Subnet
Security Group
Router
NAT Gateway
Private EC2 Instance
Route
Table
VPC Peering
Connections
Route
Table
Security Group
Public EC2 Instance
Availability Zone

### VPC Endpoints

Amazon
DynamoDB
Region
NACL
VPC
Internet
www
NACL
Public Subnet
Internet
Gateway
Private Subnet
Router
Security Group
CloudWatch
Private EC2 Instance
NAT Gateway
Route
Table
VPC Peering
Connections
Route
Table
Security Group
Public EC2 Instance
Availability Zone
VPC
Endpoint

### VPC Endpoints (AWS PrivateLink)

- Every AWS service is publicly exposed
(public URL)
- VPC Endpoints (powered by AWS
PrivateLink) allows you to connect to AWS
services using a private network instead of
using the public Internet
- They’re redundant and scale horizontally
- They remove the need of IGW, NATGW, …
to access AWS Services
- In case of issues:
Amazon SNS
www
Region
VPC
Internet
Gateway
Public Subnet
NAT
Gateway
EC2 Instance
Private Subnet
EC2 Instance
Option 1
Option 2
VPC Endpoint
- Check DNS Setting Resolution in your VPC
- Check Route Tables
Amazon SNS

### Types of Endpoints

- Interface Endpoints (powered by PrivateLink)
- Provisions an ENI (private IP address) as an entry
point (must attach a Security Group)
- Supports most AWS services
- $ per hour + $ per GB of data processed
Region
VPC
Private Subnet
VPC Endpoint
(Interface)
EC2 Instance
ENI (PrivateLink)
Amazon SNS
- Gateway Endpoints
- Provisions a gateway and must be used as a
target in a route table (does not use security
groups)
- Supports both S3 and DynamoDB
- Free
Region
VPC
Private Subnet
Amazon S3
VPC Endpoint
EC2 Instance
(Gateway)
Amazon
DynamoDB

### Gateway or Interface Endpoint for S3?

- Gateway is most likely going to be
preferred all the time at the exam
- Cost: free for Gateway, $ for
interface endpoint
- Interface Endpoint is preferred
access is required from onpremises (Site to Site VPN or
Direct Connect), a different VPC
or a different region
Users
AWS Cloud
S2S VPN
Region
VPC
Interface
Endpoint
In-VPC
Apps
Gateway
Endpoint
PrivateLink
Direct Connect
Amazon S3

### Lambda in VPC accessing DynamoDB

- DynamoDB is a public service
from AWS
- Option 1: Access from the public
internet
- Because Lambda is in a VPC, it
needs a NAT Gateway in a public
subnet and an internet gateway
- Option 2 (better & free): Access
from the private VPC network
- Deploy a VPC Gateway endpoint
for DynamoDB
- Change the Route Tables
AWS Cloud
Public subnet
NAT
IGW
DynamoDB
Private subnet
VPC Gateway Endpoint
For DynamoDB

### VPC Flow Logs

- Capture information about IP traffic going into your interfaces:
- VPC Flow Logs
- Subnet Flow Logs
- Elastic Network Interface (ENI) Flow Logs
- Helps to monitor & troubleshoot connectivity issues
- Flow logs data can go to S3, CloudWatch Logs, and Kinesis Data Firehose
- Captures network information from AWS managed interfaces too: ELB,
RDS, ElastiCache, Redshift, WorkSpaces, NATGW, Transit Gateway…

### VPC Flow Logs

VPC Flow Logs
Region
NACL
VPC
Internet
www
NACL
Public Subnet
Internet
Gateway
Router
Route
Table
Route
Table
Security Group
Public EC2 Instance
Availability Zone
Security Group
CloudWatch
Private EC2 Instance
NAT Gateway
Amazon
DynamoDB
VPC Peering
Connections
Private Subnet
VPC
Endpoint

### VPC Flow Logs Syntax

version
account-id
interface-id
dstaddr
srcaddr
dstport packets
srcport protocol bytes
start
action
end
log-status
- srcaddr & dstaddr – help identify problematic IP
- srcport & dstport – help identity problematic ports
- Action – success or failure of the request due to Security Group / NACL
- Can be used for analytics on usage patterns, or malicious behavior
- Query VPC flow logs using Athena on S3 or CloudWatch Logs Insights
- Flow Logs examples:

### VPC Flow Logs – Troubleshoot SG & NACL issues

Look at the “ACTION” field
Incoming Requests
Outgoing Requests
- Inbound REJECT => NACL or SG
- Outbound REJECT => NACL or SG
- Inbound ACCEPT, Outbound REJECT =>
NACL
- Outbound ACCEPT, Inbound REJECT =>
NACL
Subnet
Subnet
NACL Inbound
Rules
Security Group
NACL Outbound
Rules
NACL
NACL Outbound
Rules (Stateless)
SG Outbound
Rules
Security Group
Inbound Allowed
(Stateful)
EC2 Instance
NACL
SG Inbound
Rules
Outbound Allowed
(Stateful)
EC2 Instance
NACL Inbound
Rules (Stateless)

### VPC Flow Logs – Architectures

Top-10 IP addresses
VPC Flow Logs
CloudWatch
Contributor Insights
CloudWatch Logs
Alert
Metric Filter
SSH, RDP…
VPC Flow Logs
CloudWatch Logs
CW Alarm
Amazon SNS
VPC Flow Logs
S3 Bucket
Amazon
Athena
Amazon
QuickSight

### VPC Flow Logs – CloudWatch Permissions

- IAM Service Role associated with VPC Flow Logs must have the required
permissions to publish logs to CloudWatch Logs
- logs:CreateLogGroup, logs:CreateLogStream, or logs:PutLogEvents
IAM Service Role
logs
VPC Flow Logs
CloudWatch Logs

### AWS Site-to-Site VPN

VPC Flow Logs
Region
NACL
VPC
Internet
www
NACL
Public Subnet
Internet
Gateway
Private Subnet
Router
Route
Table
Route
Table
Security Group
Public EC2 Instance
Availability Zone
Security Group
CloudWatch
Private EC2 Instance
NAT Gateway
Amazon
DynamoDB
VPC Peering
Connections
Corporate
Data Center
Security Group
Private EC2 Instance
VPC
Endpoints
VPN
Gateway
Customer
Gateway
S2S VPN
Connection
Server

### AWS Site-to-Site VPN

- Virtual Private Gateway (VGW)
- VPN concentrator on the AWS side of the VPN connection
- VGW is created and attached to the VPC from which you want to create the
Site-to-Site VPN connection
- Possibility to customize the ASN (Autonomous System Number)
- Customer Gateway (CGW)
- Software application or physical device on customer side of the VPN connection
- 

### Site-to-Site VPN Connections

Route Table
VPC
(Route Propagation enabled)
Private Subnet
- Customer Gateway Device (On-premises)
Security Group
- What IP address to use?
- Public Internet-routable IP address for your Customer
Gateway device
- If it’s behind a NAT device that’s enabled for NAT
traversal (NAT-T), use the public IP address of the NAT
device
- Important step: enable Route Propagation for
the Virtual Private Gateway in the route table
that is associated with your subnets
- If you need to ping your EC2 instances from
on-premises, make sure you add the ICMP
protocol on the inbound of your security
groups
Virtual Private
Gateway
Customer
Gateway
(Public IP)
NAT Device
(Public IP)
Corporate Data Center
Customer
Gateway
(Private IP)
Server

### AWS VPN CloudHub

- Provide secure communication between
multiple sites, if you have multiple VPN
connections
Customer Network
VPC
Availability Zone
- Low-cost hub-and-spoke model for
primary or secondary network connectivity
between different locations (VPN only)
- It’s a VPN connection so it goes over the
public Internet
- To set it up, connect multiple VPN
connections on the same VGW, setup
dynamic routing and configure route tables
Customer
Gateway
Private Subnet 1
Customer Network
EC2 Instances
Availability Zone
Private Subnet 2
Virtual
Private
Gateway
(VGW)
Customer
Gateway
Customer Network
EC2 Instances
Customer
Gateway

### AWS Client VPN

- Connect from your computer using OpenVPN to your private network
in AWS and on-premises
- Allow you to connect to your EC2 instances over a private IP (just as if
you were in the private VPC network)
- Goes over public Internet
Computer with
AWS Client VPN (OpenVPN)
Site-to-Site VPN
Internet WWW
AWS VPC
On-Premises
Data Center

### Direct Connect (DX)

- Provides a dedicated private connection from a remote network to your VPC
- Dedicated connection must be setup between your DC and AWS Direct
Connect locations
- You need to setup a Virtual Private Gateway on your VPC
- Access public resources (S3) and private (EC2) on same connection
- Use Cases:
- Increase bandwidth throughput - working with large data sets – lower cost
- More consistent network experience - applications using real-time data feeds
- Hybrid Environments (on prem + cloud)
- Supports both IPv4 and IPv6

### Direct Connect Diagram

Region
(us-east-1)
Corporate
data center
VPC
Private Subnet
VLAN 1
VLAN 2
Virtual Private Gateway
EC2 Instances
AWS Direct
Connect Endpoint
Customer or
partner router
AWS Cage
Customer or
partner cage
AWS Direct Connect Location
Amazon Glacier
Amazon S3
Private virtual interface
Public virtual interface
Customer
router/firewall
Customer Network

### Direct Connect Gateway

- If you want to setup a Direct Connect to one or more VPC in many
different regions (same account), you must use a Direct Connect Gateway
Region
(us-east-1)
Region
(us-west-1)
VPC
VPC
Customer network
Private virtual
interface
Private virtual
interface
Private virtual
interface
Direct Connect Gateway
AWS Direct
Connect
connection

### Direct Connect – Connection Types

- Dedicated Connections: 1Gbps,10 Gbps and 100 Gbps capacity
- Physical ethernet port dedicated to a customer
- Request made to AWS first, then completed by AWS Direct Connect Partners
- Hosted Connections: 50Mbps, 500 Mbps, to 10 Gbps
- Connection requests are made via AWS Direct Connect Partners
- Capacity can be added or removed on demand
- 1, 2, 5, 10 Gbps available at select AWS Direct Connect Partners
- Lead times are often longer than 1 month to establish a new connection

### Direct Connect – Encryption

- Data in transit is not encrypted but is
private
- AWS Direct Connect + VPN
provides an IPsec-encrypted private
connection
- Good for an extra level of security,
but slightly more complex to put in
place
Region
(us-east-1)
VPC
Availability Zone
(us-east-1a)
Private Subnet 1
Client
Client
EC2 Instances
Availability Zone
(us-east-1b)
AWS Direct
VPN
Connect Endpoint Connection
Customer
router/firewall
Private Subnet 2
AWS Direct
Connect Location
EC2 Instances
Corporate
data center
Customer Network

### Direct Connect - Resiliency

High Resiliency for Critical Workloads
Maximum Resiliency for Critical Workloads
Corporate
data center
Region
AWS Direct
Connect Location - 1
Corporate
data center
Region
AWS Direct
Connect Location - 1
Corporate
data center
Corporate
data center
AWS Direct
Connect Location - 2
AWS Direct
Connect Location - 2
One connection at multiple locations
Maximum resilience is achieved by separate connections
terminating on separate devices in more than one location.

### Site-to-Site VPN connection as a backup

- In case Direct Connect fails, you can set up a backup Direct Connect
connection (expensive), or a Site-to-Site VPN connection
AWS Cloud
Direct Connect
Primary Connection
VPC
Corporate DC
Site-to-Site VPN
Backup Connection

### Exposing services in your VPC to other VPC

- Option 1: make it public
- Goes through the public www
- Tough to manage access
Service VPC
- Option 2: VPC peering
- Must create many peering relations
- Opens the whole network
Service VPC
Peering connection
Public internet
Application
service
Application
service
Customer VPC
With IGW
Customer VPC

### AWS PrivateLink (VPC Endpoint Services)

- Most secure & scalable way to expose a service to 1000s of VPC (own or other accounts)
- Does not require VPC peering, internet gateway, NAT, route tables…
- Requires a network load balancer (Service VPC) and ENI (Customer VPC) or GWLB
- If the NLB is in multiple AZ, and the ENIs in multiple AZ, the solution is fault tolerant!
Service VPC
Customer VPC
AWS Private Link
AWS
private
Application
service
Network
Load Balancer
Elastic Network
Interface (ENI)
Consumer
Application

### AWS Private Link & ECS

Direct
Connect
VPC
Private subnet
Corporate
data center
Customer Gateway
Amazon ECS service
Task 1
Task 2
Private subnet
Task 3
VPN
Connection
Application
Load Balancer
Network AWS PrivateLink
Load Balancer
Virtual
Private
Gateway
Customer Network
VPC
Task 4
ENI

### EC2-Classic & AWS ClassicLink (deprecated)

- EC2-Classic: instances run in a single network shared with other customers
- Amazon VPC: your instances run logically isolated to your AWS account
- ClassicLink allows you to link EC2-Classic instances to a VPC in your account
- Must associate a security group
- Enables communication using private IPv4 addresses
- Removes the need to make use of public IPv4 addresses or Elastic IP addresses
- Likely to be distractors at the exam

### Network topologies can become complicated

VPC Peering
Connection
VPN Connection
Customer Gateway
Amazon VPC
Amazon VPC
VPN Connection
VPC Peering
Connection
VPC Peering
Connection
VPC Peering
Connection
Direct Connect
Gateway
VPN Connection
Amazon VPC
VPC Peering
Connection
Amazon VPC

### Transit Gateway

- For having transitive peering between thousands of VPC and
on-premises, hub-and-spoke (star) connection
AWS Direct
Connect Gateway
- Regional resource, can work cross-region
- Share cross-account using Resource Access Manager (RAM)
- You can peer Transit Gateways across regions
- Route Tables: limit which VPC can talk with other VPC
Amazon VPC
- Works with Direct Connect Gateway, VPN connections
- Supports IP Multicast (not supported by any other AWS
service)
Amazon VPC
Transit
Gateway
Amazon VPC
Amazon VPC
VPN Connection
Customer Gateway

### Transit Gateway: Site-to-Site VPN ECMP

VPC
VPC
attac
tach
VPC
VPN attachment
ent
ent
VPC
VPC
- ECMP = Equal-cost multi-path
routing
- Routing strategy to allow to
forward a packet over multiple
best path
- Use case: create multiple Siteto-Site VPN connections to
increase the bandwidth of your
connection to AWS
VPC
AWS Transit Gateway
Corporate data center

### Transit Gateway: throughput with ECMP

VPN to transit gateway
VPN to virtual private gateway
= 1x
= 1.25 Gbps
VPN connection
(2 tunnels)
VPC
VPC
VPC
VPC
VPC
= 1x
= 2.5 Gbps (ECMP) – 2 tunnels used
= 5.0 Gbps (ECMP)
= 7.5 Gbps (ECMP)
per GB of TGW
processed data

### between multiple accounts

AWS Cloud
Corporate
data center
Region
Account 1
Clients
VPC
VLAN
Transit VIF
Account 2
Transit
Gateway
Direct
Connect
Gateway
Clients
AWS Direct
Connect endpoint
Customer
router/firewall
AWS Direct
Connect Location
Servers
VPC
You can use AWS Resource Access Manager to share Transit
Gateway with other accounts.
Transit Gateway – Share Direct Connect

### Transit Gateway – Inter-Region Communication

Region - A
VPC - A
VPC - B
Region - B
Transit Gateway
Peering
Transit
Gateway
VPC - C
Transit
Gateway
Transit
Gateway
Region - C
VPC - E
VPC - F
VPC - D

### Transit Gateway – Security Group Referencing

- You can reference a Security Group in another VPC connected using
Transit Gateway
- Must enable the setting Security Group Referencing Support when
creating the Transit Gateway Attachment
Inbound Rules
VPC - A
Type
Protocol
Port
Source
MySQL
TCP
3306
sg-prod-instance
Security Group
(sg-prod-dbinstance)
DB Instance
VPC - B
Security Group
(sg-prod-instance)
Transit Gateway
Peering
Web Server

### VPC – Traffic Mirroring

- Allows you to capture and inspect network
traffic in your VPC
- Route the traffic to security appliances that
you manage
- Capture the traffic
- From (Source) – ENIs
- To (Targets) – an ENI or a Network Load Balancer
- Capture all packets or capture the packets of
your interest (optionally, truncate packets)
- Source and Target can be in the same VPC or
different VPCs (VPC Peering)
- Use cases: content inspection, threat
monitoring, troubleshooting, …
Source A
Source B
Inbound &
Outbound traffic
Inbound &
Outbound
traffic
Traffic Mirroring
(filter traffic, optional)
Network Load
Balancer
Auto Scaling group
EC2 instances with Security Appliances

### What is IPv6?

- IPv4 designed to provide 4.3 Billion addresses (they’ll be exhausted soon)
- IPv6 is the successor of IPv4
- IPv6 is designed to provide 3.4 × 10,- unique IP addresses
- Every IPv6 address in AWS is public and Internet-routable (no private range)
- Format è x.x.x.x.x.x.x.x (x is hexadecimal, range can be from 0000 to ffff)
- Examples:
- 2001:db8:3333:4444:5555:6666:7777:8888
- 2001:db8:3333:4444:cccc:dddd:eeee:ffff
- :: è all 8 segments are zero
- 2001:db8:: è the last 6 segments are zero
- ::1234:5678 è the first 6 segments are zero
- 2001:db8::1234:5678 è the middle 4 segments are zero

### IPv6 in VPC

Internet
- IPv4 cannot be disabled for your VPC and
subnets
- You can enable IPv6 (they’re public IP addresses)
to operate in dual-stack mode
VPC
- Your EC2 instances will get at least a private
internal IPv4 and a public IPv6
- They can communicate using either IPv4 or IPv6
to the internet through an Internet Gateway
Internet
Gateway
IPv4 & IPv6
EC2 Instance
(Private IP: 10.0.0.5)
(IPv6: 2001:db8::ff00:42:8329)

### IPv4 Troubleshooting

- IPv4 cannot be disabled for your VPC
and subnets
- So, if you cannot launch an EC2 instance
in your subnet
- It’s not because it cannot acquire an IPv6
(the space is very large)
- It’s because there are no available IPv4 in
your subnet
- Solution: create a new IPv4 CIDR in
your subnet
User
create
VPC
(IPv4: 192.168.0.0/24)
(IPv4: 10.0.0.0/24)
(IPv6: 2001:db8:1234:5678::/56)

### IPv6: 2001:db8::e1c3

- Used for IPv6 only
- (similar to a NAT Gateway but for IPv6)
- Allows instances in your VPC outbound
connections over IPv6 while preventing
the internet to initiate an IPv6 connection
to your instances
- You must update the Route Tables
Internet
initiate connections
from both sides
VPC
Internet
Gateway
Egress-only Internet Gateway
can’t initiate
connections from
Internet
Egress-only
Internet Gateway
Public Subnet
Private Subnet
IPv6: 2001:db8::b1c2

### IPv6 Routing

Route Table
(Public Subnet)
Region
VPC
(IPv4: 10.0.0.0/16)
(IPv6: 2001:db8:1234:1a00::/56)
NAT Gateway
(IPv4)
Public Subnet
(IPv4: 10.0.0.0/24)
(IPv6: 2001:db8:1234:1a00::/64)
Private IPv4: 10.0.0.5
EIP: 198.51.100.1
IPv6: 2001:db8:1234:1a00::123
Target
local
2001:db8:1234:1a00::/56
local
igw-id
::/0
igw-id
EIP: 198.51.100.1
Web server
Private Subnet
(IPv4: 10.0.1.0/24)
(IPv6: 2001:db8:1234:1a02::/64)
Internet
Gateway
(IPv4 & IPv6)
Internet
Route Table
Egress-only
Internet Gateway
(IPv6)
Private IPv4: 10.0.1.5
IPv6: 2001:db8:1234:1a02::456
Server
Destination
(Private Subnet)
Destination
Target
local
2001:db8:1234:1a00::/56
local
nat-gateway-id
::/0
eigw-id

---

## 20. Other Services

### Network Protection on AWS

- To protect network on AWS, we’ve seen
- Network Access Control Lists (NACLs)
- Amazon VPC security groups
- AWS WAF (protect against malicious requests)
- AWS Shield & AWS Shield Advanced
- AWS Firewall Manager (to manage them across accounts)
- But what if we want to protect in a sophisticated way our entire VPC?

### AWS Network Firewall

internet
- Protect your entire Amazon VPC
AWS Network Firewall
- From Layer 3 to Layer 7 protection
- Any direction, you can inspect
- VPC to VPC traffic
- Outbound to internet
- Inbound from internet
- To / from Direct Connect & Site-to-Site VPN
VPC
Direct Connect
Private subnet
Corporate DC
- Internally, the AWS Network Firewall uses
the AWS Gateway Load Balancer
- Rules can be centrally managed crossaccount by AWS Firewall Manager to apply
to many VPCs
VPN connection
Peered VPC

### Network Firewall – Fine Grained Controls

- Supports 1000s of rules
- IP & port - example: 10,000s of IPs filtering
- Protocol – example: block the SMB protocol for outbound communications
- Stateful domain list rule groups: only allow outbound traffic to *.mycorp.com or third-party
software repo
- General pattern matching using regex
- Traffic filtering: Allow, drop, or alert for the traffic that matches the rules
- Active flow inspection to protect against network threats with intrusion-prevention
capabilities (like Gateway Load Balancer, but all managed by AWS)
- Send logs of rule matches to Amazon S3, CloudWatch Logs, Kinesis Data Firehose

### What’s a queue?

Consumer
Producer
Consumer
Producer
Send messages
Poll messages
Consumer
Producer
SQS Queue
Consumer
Amazon SQS

### Amazon SQS – Standard Queue

- Oldest offering (over 10 years old)
- Fully managed service, used to decouple applications
- Attributes:
- Unlimited throughput, unlimited number of messages in queue
- Default retention of messages: 4 days, maximum of 14 days
- Low latency (<10 ms on publish and receive)
- Limitation of 256KB per message sent
- Can have duplicate messages (at least once delivery, occasionally)
- Can have out of order messages (best effort ordering)

### SQS – Producing Messages

- Produced to SQS using the SDK (SendMessage API)
- The message is persisted in SQS until a consumer deletes it
- Message retention: default 4 days, up to 14 days
- Example: send an order to be processed
- Order id
- Customer id
- Any attributes you want
- SQS standard: unlimited throughput
Sent to SQS
Message
Up to 256 kb

### SQS – Consuming Messages

- Consumers (running on EC2 instances, servers, or AWS Lambda)…
- Poll SQS for messages (receive up to 10 messages at a time)
- Process the messages (example: insert the message into an RDS database)
- Delete the messages using the DeleteMessage API
Poll / Receive
messages
DeleteMessage
Consumer
insert

### SQS – Multiple EC2 Instances Consumers

SQS Queue
poll
- Consumers receive and process
messages in parallel
- At least once delivery
- Best-effort message ordering
- Consumers delete messages
after processing them
- We can scale consumers
horizontally to improve
throughput of processing

### SQS with Auto Scaling Group (ASG)

Poll for messages
EC2 Instances
SQS Queue
Auto Scaling Group
scale
Alarm for breach
CloudWatch Metric – Queue Length
ApproximateNumberOfMessages
CloudWatch Alarm

### SQS to decouple between application tiers

Back-end processing
Application
(video processing)
Front-end web app
requests
SendMessage
ReceiveMessages
insert
SQS Queue
Auto-Scaling
Auto-Scaling

### Amazon SQS - Security

- Encryption:
- In-flight encryption using HTTPS API
- At-rest encryption using KMS keys
- Client-side encryption if the client wants to perform encryption/decryption itself
- Access Controls: IAM policies to regulate access to the SQS API
- SQS Access Policies (similar to S3 bucket policies)
- Useful for cross-account access to SQS queues
- Useful for allowing other services (SNS, S3…) to write to an SQS queue

### Amazon SQS for CloudOps

- Message Visibility Timeout – after a message is polled by a consumer, it
becomes invisible to other consumers (default: 30 seconds)
- Dead Letter Queue (DLQ) – if the consumer fails to process the message
for MaximumReceives threshold, it goes to the DLQ
- Message Retention Period – SQS automatically deletes messages from the
Queue after that time, can be set from 1 minute to 14 days
(default: 4 days)
- SQS Access Policy – is a Resource-based Policy which you can define
permissions to access this Queue (similar to S3 Bucket Policy)

### SQS – Prioritization Pattern

push messages
1. Poll messages from high priority queue
SQS Queue
(high Priority)
Producer
Consumers
2. Poll messages from low priority queue
SQS Queue
(low Priority)

### Amazon SNS

- What if you want to send one message to many receivers?
Direct
integration
Buying
Service
Email
notification
Fraud
Service
Shipping
Service
SQS Queue
Pub / Sub
Email
notification
Fraud
Service
Buying
Service
SNS Topic
Shipping
Service
SQS Queue

### Amazon SNS

- The “event producer” only sends message to one SNS topic
- As many “event receivers” (subscriptions) as we want to listen to the SNS topic notifications
- Each subscriber to the topic will get all the messages (note: new feature to filter messages)
- Up to 12,500,000 subscriptions per topic
- 100,000 topics limit
Subscribers
publish
SQS
Lambda
Kinesis Data
Firehose
HTTP(S)
Endpoints
SMS &
Mobile Notifications
Emails
SNS

### SNS integrates with a lot of AWS services

- Many AWS services can send data directly to SNS for notifications
CloudWatch Alarms AWS Budgets
Lambda
Auto Scaling Group
(Notifications)
S3 Bucket
(Events)
DynamoDB
CloudFormation
(State Changes)
AWS DMS
(New Replic)
publish
RDS Events
SNS

### Amazon SNS – How to publish

- Topic Publish (using the SDK)
- Create a topic
- Create a subscription (or many)
- Publish to the topic
- Direct Publish (for mobile apps SDK)
- Create a platform application
- Create a platform endpoint
- Publish to the platform endpoint
- Works with Google GCM, Apple APNS, Amazon ADM…

### Amazon SNS – Security

- Encryption:
- In-flight encryption using HTTPS API
- At-rest encryption using KMS keys
- Client-side encryption if the client wants to perform encryption/decryption itself
- Access Controls: IAM policies to regulate access to the SNS API
- SNS Access Policies (similar to S3 bucket policies)
- Useful for cross-account access to SNS topics
- Useful for allowing other services ( S3…) to write to an SNS topic

### Amazon SNS – Filtering Messages

SNS Message
- By default, SNS Topic Subscriber receives
every message published
- You can filter messages sent to the
subscribers using a Filter Policy
- Filter Policy – JSON object that defines
which messages the subscriber receives
- attached to the Subscriber
Filter Policy (accept)
Filter Policy (deny)

### Amazon SNS – Cross-Region Subscriber

- SNS can deliver notifications to subscribers in different regions (SQS Queues
& Lambda functions only)
- Subscribers must have the required permissions to get notifications from SNS
notification
SNS Topic
(my-topic)
SQS Queue
(my-queue)
SQS Queue
Resource-based Policy

### Amazon ECS - EC2 Launch Type

- ECS = Elastic Container Service
- Launch Docker containers on AWS =
Launch ECS Tasks on ECS Clusters
- EC2 Launch Type: you must provision
& maintain the infrastructure (the EC2
instances)
- Each EC2 Instance must run the ECS
Agent to register in the ECS Cluster
- AWS takes care of starting / stopping
containers
Amazon ECS / ECS Cluster
New Docker
Container
EC2 Instance
EC2 Instance
EC2 Instance
ECS Agent
ECS Agent
ECS Agent

### Amazon ECS – Fargate Launch Type

- Launch Docker containers on AWS
- You do not provision the infrastructure
(no EC2 instances to manage)
- It’s all Serverless!
- You just create task definitions
- AWS just runs ECS Tasks for you based
on the CPU / RAM you need
- To scale, just increase the number of
tasks. Simple - no more EC2 instances
New Docker
Container
AWS Fargate / ECS Cluster

### DynamoDB

EC2 Instance Profile
- EC2 Instance Profile (EC2 Launch Type only):
- Used by the ECS agent
- Makes API calls to ECS service
- Send container logs to CloudWatch Logs
- Pull Docker image from ECR
- Reference sensitive data in Secrets Manager or
SSM Parameter Store
- ECS Task Role:
- Allows each task to have a specific role
- Use different roles for the different ECS Services
you run
- Task Role is defined in the task definition
ECS
EC2 Instance
ECR
ECS Agent
CloudWatch
Logs
ECS Task A Role
Task A
ECS Task B Role
Task B
Amazon ECS – IAM Roles for ECS

### Amazon ECS – Load Balancer Integrations

- Application Load Balancer supported
and works for most use cases
- Network Load Balancer recommended
only for high throughput / high
performance use cases, or to pair it with
AWS Private Link
- Classic Load Balancer supported but
not recommended (no advanced
features – no Fargate)
EC2 Instance
ECS Task
ECS Task
80/443
Users
EC2 Instance
Application
Load Balancer
ECS Task
ECS Task
ECS Cluster

### Amazon ECS – Data Volumes (EFS)

- Mount EFS file systems onto ECS tasks
- Works for both EC2 and Fargate launch types
- Tasks running in any AZ will share the same data
in the EFS file system
- Fargate + EFS = Serverless
- Use cases: persistent multi-AZ shared storage for
your containers
- Note:
- Amazon S3 cannot be mounted as a file system
EC2 Instance
mount
mount
ECS Cluster
Amazon EFS
File System
Fargate

### ECS Service Auto Scaling

- Automatically increase/decrease the desired number of ECS tasks
- Amazon ECS Auto Scaling uses AWS Application Auto Scaling
- ECS Service Average CPU Utilization
- ECS Service Average Memory Utilization - Scale on RAM
- ALB Request Count Per Target – metric coming from the ALB
- Target Tracking – scale based on target value for a specific CloudWatch metric
- Step Scaling – scale based on a specified CloudWatch Alarm
- Scheduled Scaling – scale based on a specified date/time (predictable changes)
- ECS Service Auto Scaling (task level) ≠ EC2 Auto Scaling (EC2 instance level)
- Fargate Auto Scaling is much easier to setup (because Serverless)

### EC2 Launch Type – Auto Scaling EC2 Instances

- Accommodate ECS Service Scaling by adding underlying EC2 Instances
- Auto Scaling Group Scaling
- Scale your ASG based on CPU Utilization
- Add EC2 instances over time
- ECS Cluster Capacity Provider
- Used to automatically provision and scale the infrastructure for your ECS Tasks
- Capacity Provider paired with an Auto Scaling Group
- Add EC2 Instances when you’re missing capacity (CPU, RAM…)

### ECS Scaling – Service CPU Usage Example

CPU
Usage
Task 1
Task 3
(new)
Task 2
Service A
Auto Scaling
Auto Scaling Group
CloudWatch Metric
(ECS Service CPU Usage)
Trigger
CloudWatch Alarm
Scale ECS Capacity Providers
(optional)

### ECS Rolling Updates

ECS Service update screen
- When updating from v1 to v2, we can
control how many tasks can be started
and stopped, and in which order
Actual Running Capacity (100%)
Minimum Healthy Percent (0-100%)
Allowed to terminate tasks
Allowed to create tasks
Maximum Percent (100-200%)

### ECS Rolling Update – Min 50%, Max 100%

- Starting number of tasks: 4

### ECS Rolling Update – Min 100%, Max 150%

- Starting number of tasks: 4

### Amazon ECS for CloudOps

- Ephemeral Storage for Fargate Tasks
- Fargate Tasks has ephemeral storage that can be shared among other Tasks
- Configurable from 20 GB to max. of 200 GB
- Encrypted using AES-256 encryption
- Send ECS Tasks Logs to CloudWatch or AWS Partner
- Add the FireLens (Fluent Bit / Fluentd) container to your ECS Task Definition
- Runs as a sidecar container & acts as a log router
- Forwards logs to CloudWatch or 3rd party services

### Amazon EKS Overview

- Amazon EKS = Amazon Elastic Kubernetes Service
- It is a way to launch managed Kubernetes clusters on AWS
- Kubernetes is an open-source system for automatic deployment, scaling and
management of containerized (usually Docker) application
- It’s an alternative to ECS, similar goal but different API
- EKS supports EC2 if you want to deploy worker nodes or Fargate to deploy
serverless containers
- Use case: if your company is already using Kubernetes on-premises or in
another cloud, and wants to migrate to AWS using Kubernetes
- Kubernetes is cloud-agnostic (can be used in any cloud – Azure, GCP…)
- For multiple regions, deploy one EKS cluster per region
- Collect logs and metrics using CloudWatch Container Insights

### Amazon EKS - Diagram

AWS Cloud
Availability Zone 1
VPC
Availability Zone 2
Public subnet 1
ELB
Public subnet 2
NGW
EKS
Public
Service LB
Public subnet 3
NGW
ELB
Private subnet 2
Private subnet 1
EKS node
Availability Zone 3
ELB
Private subnet 3 EKS
Private
Service LB
EKS node
EKS node
EKS Pods
EKS Pods
Auto Scaling Group
EKS Pods
EKS Worker Nodes
NGW
ELB

### Amazon EKS – Node Types

- Managed Node Groups
- Creates and manages Nodes (EC2 instances) for you
- Nodes are part of an ASG managed by EKS
- Supports On-Demand or Spot Instances
- Self-Managed Nodes
- Nodes created by you and registered to the EKS cluster and managed by an ASG
- You can use prebuilt AMI - Amazon EKS Optimized AMI
- Supports On-Demand or Spot Instances
- AWS Fargate
- No maintenance required; no nodes managed

### Amazon EKS – Data Volumes

- Need to specify StorageClass manifest on your EKS cluster
- Leverages a Container Storage Interface (CSI) compliant driver
- Support for…
- Amazon EBS
- Amazon EFS (works with Fargate)
- Amazon FSx for Lustre
- Amazon FSx for NetApp ONTAP

### Amazon EKS – Control Plane Logging

- Send EKS Control Plane audit and diagnostic logs
to CloudWatch Logs
- EKS Control Plane Log Types
- API Server (api)
- Audit (audit)
- Authenticator (authenticator)
- Controller Manager (controllerManager)
- Scheduler (scheduler)
- Ability to select the exact log types to send to
CloudWatch Logs
Amazon EKS
Control Plane Logs
(e.g., Audit)
CloudWatch Logs

### Amazon EKS – Nodes & Containers Logging

- You can capture node, pod, and containers logs
and send them to CloudWatch Logs
- Use CloudWatch Agent to send metrics to
CloudWatch
- Use the Fluent Bit, or Fluentd log drivers to
send logs to CloudWatch Logs
- Container logs are stored on a Node directory
/var/log/containers
- Use CloudWatch Container Insights to get a
dashboarding monitoring solution for nodes,
pods, tasks, and services
EKS Cluster
EKS Node
Containers
logs
/var/log/containers
Fluent Bin
Fluentd
logs
CloudWatch Logs

### Amazon EKS for CloudOps

- EKS Cluster Insights – detect issues and provide recommendations
- Configuration Insights – identifies misconfiguration in your ECS Cluster (hybrid)
- Upgrade Insights – identifies issues that could impact your ability to upgrade to
new Kubernetes version
- To upgrade your EKS Cluster:
1. Review Upgrade Insights in EKS Cluster Insights to identify any issues might
occur while upgrading
2. Update Cluster Control Plane
3. Update Cluster Components (e.g. Nodes)

### Amazon EKS – AutoScaling Modes

- Cluster AutoScaler – automatically adjusts the number
of nodes (same size) in your cluster (uses Auto Scaling
Groups)
AutoScaler
EKS Cluster
Auto Scaling Group
- Karpenter – launching right-sized compute resources
(EC2 instances, Fargate) in response to load changes in
under a minute
Karpenter
- EKS Auto Mode (AWS-managed Karpenter) –
automatically scales cluster compute resources with
ability to consolidate workloads and delete nodes
EKS Cluster

### AWS X-Ray

- Debugging in Production, the good old way:
- Test locally
- Add log statements everywhere
- Re-deploy in production
- Log formats differ across applications and log analysis is hard.
- Debugging: one big monolith “easy”, distributed services “hard”
- No common views of your entire architecture
- Enter… AWS X-Ray!

### Visual analysis of our applications

AWS X-Ray

### AWS X-Ray advantages

- Troubleshooting performance (bottlenecks)
- Understand dependencies in a microservice architecture
- Pinpoint service issues
- Review request behavior
- Find errors and exceptions
- Are we meeting time SLA?
- Where I am throttled?
- Identify users that are impacted

ECS Cluster
ECS Cluster
Fargate Cluster
X-Ray Container as a Daemon
X-Ray Container as a “Side Car”
X-Ray Container as a “Side Car”
App
Container
App
Container
App
Container
App
Container
Fargate Task
Fargate Task
X-Ray
Sidecar
X-Ray
Sidecar
App
Container
App
Container
App
Container
App
Container
X-Ray
Sidecar
X-Ray
Sidecar
X-Ray
Sidecar
X-Ray
Sidecar
App
Container
X-Ray
Daemon
Container
App
Container
X-Ray
Daemon
Container
ECS Cluster
ECS + X-Ray integration options

ECS + X-Ray: Example Task Definition

Amazon Managed Service for Grafana

### Amazon Managed Service for Grafana

- Fully managed Grafana service that lets you create
dashboards and visualize metrics, logs, and traces
- You create Workspaces in which you build your
Grafana dashboards
- AWS handles provisioning, scaling, and
maintenance
- Integrates with CloudWatch, Amazon Managed
Service for Prometheus, X-Ray, OpenSearch…
- Supports many third-party and open-source data
sources (e.g., Prometheus, Datadog…)
Prometheus
Datadog
CloudWatch OpenSearch
X-Ray
Amazon
Managed
Grafana
Dashboards

### Amazon Managed Service for Prometheus

- Serverless, Prometheus-compatible service for monitoring container metrics
- Automatically scales ingestion, storage, query operations
- Data is replicated across 3 Availability Zones (highly available)
- Same open-source Prometheus data model and PromQL Query language
- PromQL – a query language used to filter and aggregate metrics
- Works with Amazon EKS and self-managed Kubernetes clusters
- Metrics can be stored up to 3 years (default: 150 days Retention Period)

### Amazon Managed Service for Prometheus

Amazon EKS
ingest metrics
AWS Distro for
OpenTelemetry
Dashboards
Query metrics
Kubernetes
Cluster
Prometheus Server
OpenTelemetry
Managed Service
for Prometheus
Amazon Managed
Grafana

### AWS Resource Access Manager (RAM)

- Share AWS resources that you own with other AWS accounts
- Share with any account or within your Organization
- Avoid resource duplication!
- VPC Subnets:
- allow to have all the resources launched in the same subnets
- must be from the same AWS Organizations.
- Cannot share security groups and default VPC
- Participants can manage their own resources in there
- Participants can't view, modify, delete resources that belong to other participants or the owner
- AWS Transit Gateway
- Route53 Resolver Rules
- License Manager Configurations

### Resource Access Manager – VPC example

- Each account…
AWS Cloud – VPC Owner
- is responsible for its own
resources
- cannot view, modify or delete
other resources in other
accounts
VPC
Private subnet
- Network is shared so…
Account 2
Account 1
ALB
- Anything deployed in the VPC
can talk to other resources in
the VPC
- Applications are accessed easily
across accounts, using private IP!
- Security groups from other
accounts can be referenced for
maximum security

---

## 21. Exam Preparation

### State of learning checkpoint

- Let’s look how far we’ve gone on our learning journey
- 

### AWS Certified SysOps Exam Labs

- Starting with SOA-C02, the exam will contain 3 labs
- Each exam lab consists of several different tasks
- AWS recommends to allocate 20 minutes for each exam lab
- First, you’ll need to answer the multiple-choice/multiple-responses
questions (you can’t go back once you have completed this section)
- Second, you’ll need to answer the exam labs
- You must complete all the work on the exam lab, before you move to
the next one (you won’t be able to go back to a lab once you have
completed it)

### AWS Certified SysOps Exam Sample Lab

- A company is deploying a new web application.
Configure a highly available MySQL 8.0 database
with the following:
1. Create a custom DB parametergroup and set
theevent_schedulerparameter to trueand use
thisparameter during DBinstance creation.
2. Create a custom AWS Key Management
Service (AWS KMS) key and use this key
during DBinstance creation.
3. Create a VPC security group that allows
TCPport 3306 from the CIDR block
192.168.1.0/24.Use this security group during
DB instance creation.
4. Launch the Amazon RDS DB instance.
5. After launch, take a manual RDS DB snapshot.

### Your AWS Certification journey

Foundational
Professional
Associate
Specialty
Knowledge-based certification for
foundational understanding of AWS Cloud.
No prior experience needed.
Role-based certifications that showcase your knowledge
and skills on AWS and build your credibility as an AWS Cloud professional.
Prior cloud and/or strong on-premises IT experience recommended.
Role-based ceroﬁcaoons that validate advanced skills
and knowledge required to design secure, opomized,
and modernized applicaoons and to automate processes on AWS.
2 years of prior AWS Cloud experience recommended.
Dive deeper and position yourself as a trusted advisor to your
stakeholders and/or customers in these strategic areas.
Refer to the exam guides on the exam pages for recommended experience.

### AWS Certification Paths – Architecture

Architecture
Solutions Architect
Design, develop, and manage
cloud infrastructure and assets,
work with DevOps to migrate
applications to the cloud
optional for IT/
cloud professionals
recommended for IT/cloud
professionals to leverage AI
Dive Deep
Architecture
Application Architect
Design significant aspects of
application architecture including
user interface, middleware, and
infrastructure, and ensure
enterprise-wide scalable, reliable,
and manageable systems
optional for IT/
cloud professionals
recommended for IT/cloud
professionals to leverage AI
Dive Deep

### AWS Certification Paths – Operations

Operations
Systems Administrator
Install, upgrade, and maintain
computer components and
software, and integrate
automation processes
optional for IT/
cloud professionals
Dive Deep
Operations
Cloud Engineer
Implement and operate an
organization’s networked computing
infrastructure and Implement
security systems to maintain
data safety
optional for IT/
cloud professionals
Dive Deep

### AWS Certification Paths – DevOps

DevOps
Test Engineer
Embed testing and quality
best practices for software
development from design to release,
throughout the product life cycle
DevOps
opRonal for IT/
cloud professionals
Cloud DevOps Engineer
Design, deployment, and operations
of large-scale global hybrid
cloud computing environment,
advocating for end-to-end
automated CI/CD DevOps pipelines
DevOps
optional for IT/
cloud professionals
Optional
DevSecOps Engineer
Accelerate enterprise cloud adoption
while enabling rapid and stable delivery
of capabilities using CI/CD principles,
methodologies, and technologies
optional for IT/
cloud professionals
recommended for IT/cloud
professionals working on
AI/ML projects
recommended for IT/cloud
professionals working on
AI/ML projects
Dive Deep

### AWS Certification Paths – Security

Security
Cloud Security Engineer
Design computer security architecture
and develop detailed cyber security designs.
Develop, execute, and track performance
of security measures to protect informauon
optional for IT/
cloud professionals
recommended for IT/cloud
professionals to secure
AI/ML systems
Dive Deep
Security
Cloud Security Architect
Design and implement enterprise cloud
solutions applying governance to identify,
communicate, and minimize business and
technical risks
optional for IT/
cloud professionals
recommended for IT/cloud
professionals to secure
AI/ML systems
Dive Deep

### Networking

Development
Software Development Engineer
Develop, construct, and maintain
software across platforms and devices
optional for IT/
cloud professionals
recommended for IT/cloud
professionals to leverage AI
Networking
Network Engineer
Design and implement computer
and information networks, such as
local area networks (LAN),
wide area networks (WAN),
intranets, extranets, etc.
opRonal for IT/
cloud professionals
Dive Deep
AWS Certification Paths – Development &

### AI/ML

Data Analytics
Cloud Data Engineer
Automate collection and processing
of structured/semi-structured data
and monitor data pipeline performance
optional for IT/
cloud professionals
recommended for IT/cloud
professionals working on
AI/ML projects
Dive Deep
AI/ML
Machine Learning Engineer
Research, build, and design aruﬁcial
intelligence (AI) systems to automate
predicuve models, and design machine
learning systems, models, and schemes
optional for IT/
cloud professionals
optional for AI/ML
professionals
Dive Deep
AWS Certification Paths – Data Analytics &

### AWS Certification Paths – AI/ML

AI/ML
Prompt Engineer
Design, test, and refine text
prompts to optimize the
performance of AI language models
AI/ML
Dive Deep
optional for IT/
cloud professionals
Machine Learning Ops Engineer
Build and maintain AI and ML plaworms
and infrastructure. Design, implement,
and operauonally support AI/ML model
acuvity and deployment infrastructure
AI/ML
optional for IT/
cloud professionals
optional for AI/ML
professionals
Data Scientist
Develop and maintain AI/ML models
to solve business problems. Train and
fine tune models and evaluate
their performance
optional for IT/
cloud professionals
optional for AI/ML
professionals

### Congratulations!

- Congrats on finishing the course!
- I hope you will pass the exam without a hitch J
- If you haven’t done so yet, I’d love a review from you!
- If you passed, I’ll be more than happy to know I’ve helped
- Post it in the Q&A to help & motivate other students. Share your tips!
- Post it on LinkedIn and tag me!
- Overall, I hope you learned how to use AWS and that you will be a
tremendously good AWS SysOps

---
`;function b(e){let t=e.split(`
`),n=[],r=null,i=null,a=[];function o(){i&&r&&(i.content=a.join(`
`).trim(),r.slides.push(i)),a=[],i=null}function s(){o(),r&&n.push(r),r=null}let c=!1;for(let e=0;e<t.length;e++){let l=t[e];if(/^## \d+\./.test(l)||/^## /.test(l)){let e=l.replace(/^## /,``).trim();if(e===`Table of Contents`||e===`INSTRUCTIONS FOR CLAUDE CODE`){c=!1,s();continue}/^\d+\./.test(e)?(c=!0,s(),r={id:n.length,title:e,slides:[]}):(s(),c=!1);continue}if(c){if(/^### /.test(l)){o();let e=l.replace(/^### /,``).trim();r&&(i={id:`${r.id}-${r.slides.length}`,sectionId:r.id,slideIndex:r.slides.length,title:e,content:``});continue}/^---+$/.test(l.trim())||i&&a.push(l)}}o(),r&&n.push(r);let l=[];return n.forEach(e=>{e.slides.forEach(t=>{t.sectionTitle=e.title,l.push(t)})}),{sections:n,allSlides:l}}var{sections:x,allSlides:S}=b(y),C=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),w=o(((e,t)=>{t.exports=C()}))();function ee({value:e,max:t,className:n=``,showLabel:r=!1,dark:i=!1}){let a=t===0?0:Math.round(e/t*100);return(0,w.jsxs)(`div`,{className:`${n}`,children:[r&&(0,w.jsxs)(`span`,{className:`text-xs text-gray-500 mr-2`,children:[e,`/`,t]}),(0,w.jsx)(`div`,{className:`flex-1 rounded-full h-1.5 overflow-hidden`,style:{backgroundColor:i?`#1a2535`:`#e5e7eb`},children:(0,w.jsx)(`div`,{className:`h-full rounded-full transition-all duration-300`,style:{width:`${a}%`,backgroundColor:a===100?`#22c55e`:`#FF9900`}})}),r&&(0,w.jsxs)(`span`,{className:`text-xs text-gray-500 ml-2`,children:[a,`%`]})]})}function te({sections:e,progress:t,activeSection:n,activeSlide:r,onSectionSelect:i,collapsed:a,onToggle:o}){let[s,c]=(0,_.useState)(new Set),l=e=>{c(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},u=e=>({studied:e.slides.filter(e=>t.has(e.id)).length,total:e.slides.length});return(0,w.jsxs)(`aside`,{className:`flex flex-col bg-aws-navy text-white transition-all duration-300 ${a?`w-14`:`w-72`} min-h-screen`,children:[(0,w.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-4 border-b border-aws-lightnavy`,children:[!a&&(0,w.jsx)(`span`,{className:`font-bold text-aws-orange text-sm truncate`,children:`SOA-C03 Sections`}),(0,w.jsx)(`button`,{onClick:o,className:`text-gray-400 hover:text-white transition-colors p-1 rounded ml-auto`,title:a?`Expand sidebar`:`Collapse sidebar`,children:(0,w.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:a?(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13 5l7 7-7 7M5 5l7 7-7 7`}):(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M11 19l-7-7 7-7M19 19l-7-7 7-7`})})})]}),(0,w.jsx)(`div`,{className:`flex-1 overflow-y-auto py-2 scrollbar-dark`,children:e.map(e=>{let{studied:o,total:c}=u(e),d=n===e.id,f=s.has(e.id);return(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`button`,{onClick:()=>{i(e.id),a||l(e.id)},className:`w-full text-left px-4 py-2 flex items-center gap-2 transition-colors border-l-4 ${d?`bg-[#1e3a5f] border-aws-orange text-white`:`border-transparent hover:bg-aws-lightnavy hover:border-aws-lightnavy text-gray-300 hover:text-white`}`,title:e.title,children:a?(0,w.jsx)(`span`,{className:`text-aws-orange font-bold text-xs w-6 text-center`,children:e.id+1}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`span`,{className:`text-aws-orange font-bold text-xs w-5 shrink-0`,children:e.id+1}),(0,w.jsx)(`span`,{className:`text-sm flex-1 text-left truncate leading-tight`,children:e.title.replace(/^\d+\.\s*/,``)}),(0,w.jsxs)(`div`,{className:`flex items-center gap-1 shrink-0`,children:[o===c&&c>0?(0,w.jsx)(`svg`,{className:`w-4 h-4 text-green-400`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z`,clipRule:`evenodd`})}):(0,w.jsxs)(`span`,{className:`text-xs text-gray-400`,children:[o,`/`,c]}),(0,w.jsx)(`svg`,{className:`w-3 h-3 text-gray-400 transition-transform ${f?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})]})}),!a&&(0,w.jsx)(`div`,{className:`px-4 pb-1`,children:(0,w.jsx)(ee,{value:o,max:c,className:`flex items-center`,dark:!0})}),!a&&f&&(0,w.jsx)(`div`,{className:`pl-6 pr-2 pb-2 bg-black bg-opacity-20`,children:e.slides.map(n=>(0,w.jsxs)(`button`,{onClick:()=>i(e.id,n.id),className:`w-full text-left py-1.5 px-2 text-xs flex items-center gap-1.5 rounded transition-colors border-l-2 ${r===n.id?`bg-aws-orange bg-opacity-20 border-aws-orange text-white font-medium`:`border-transparent text-gray-400 hover:text-white hover:bg-aws-lightnavy`}`,children:[t.has(n.id)?(0,w.jsx)(`svg`,{className:`w-3 h-3 text-green-400 shrink-0`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z`,clipRule:`evenodd`})}):(0,w.jsx)(`span`,{className:`w-3 shrink-0`}),(0,w.jsx)(`span`,{className:`truncate`,children:n.title})]},n.id))})]},e.id)})})]})}var ne=/(\d+[\s,]*(?:GB|TB|MB|ms|Gbps|instances|partitions|rules|targets|%|seconds|minutes|hours|days|months|years|KB|IOPS|vCPUs|AZ|Availability Zone)s?)/gi,T=/\b(NOTE:|IMPORTANT:|EXAM TIP:?|Key fact:|Remember:)/gi;function re(e){let t=RegExp(`(${ne.source}|${T.source})`,`gi`),n=[],r=0,i;for(t.lastIndex=0;(i=t.exec(e))!==null;){i.index>r&&n.push(e.slice(r,i.index));let a=T.test(i[0]);T.lastIndex=0,n.push((0,w.jsx)(`mark`,{className:a?`bg-red-100 text-red-700 font-bold px-0.5 rounded not-italic`:`bg-yellow-100 text-yellow-800 font-semibold px-0.5 rounded`,children:i[0]},i.index)),r=t.lastIndex}return r<e.length&&n.push(e.slice(r)),n.length>0?n:e}function ie(e){let t=e.split(/(\*\*[^*]+\*\*)/g);if(t.length>1)return t.map((e,t)=>e.startsWith(`**`)&&e.endsWith(`**`)?(0,w.jsx)(`strong`,{children:re(e.slice(2,-2))},t):(0,w.jsx)(`span`,{children:re(e)},t));let n=e.split(/(`[^`]+`)/g);return n.length>1?n.map((e,t)=>e.startsWith("`")&&e.endsWith("`")?(0,w.jsx)(`code`,{className:`bg-gray-100 text-aws-navy text-xs px-1 py-0.5 rounded font-mono`,children:e.slice(1,-1)},t):(0,w.jsx)(`span`,{children:re(e)},t)):re(e)}function ae(e){if(!e)return null;let t=e.split(`
`),n=[],r=0;for(;r<t.length;){let e=t[r],i=e.trim();if(!i){r++;continue}if(/^[-*•]\s+/.test(i)){let e=[];for(;r<t.length&&/^[-*•]\s+/.test(t[r].trim());)e.push(t[r].trim().replace(/^[-*•]\s+/,``)),r++;n.push((0,w.jsx)(`ul`,{className:`space-y-1 my-1`,children:e.map((e,t)=>(0,w.jsxs)(`li`,{className:`flex gap-2 items-start`,children:[(0,w.jsx)(`span`,{className:`text-aws-orange mt-0.5 shrink-0`,children:`›`}),(0,w.jsx)(`span`,{children:ie(e)})]},t))},`ul-${n.length}`));continue}if(/^\d+\.\s+/.test(i)){let e=[];for(;r<t.length&&/^\d+\.\s+/.test(t[r].trim());)e.push(t[r].trim().replace(/^\d+\.\s+/,``)),r++;n.push((0,w.jsx)(`ol`,{className:`space-y-1 my-1 list-decimal list-inside`,children:e.map((e,t)=>(0,w.jsx)(`li`,{className:`pl-1`,children:ie(e)},t))},`ol-${n.length}`));continue}if(/^\s{2,}[-*]\s+/.test(e)){let e=[];for(;r<t.length&&/^\s{2,}[-*]\s+/.test(t[r]);)e.push(t[r].trim().replace(/^[-*]\s+/,``)),r++;n.push((0,w.jsx)(`ul`,{className:`space-y-0.5 ml-5 my-0.5`,children:e.map((e,t)=>(0,w.jsxs)(`li`,{className:`flex gap-2 items-start text-gray-600`,children:[(0,w.jsx)(`span`,{className:`text-gray-400 mt-0.5 shrink-0`,children:`–`}),(0,w.jsx)(`span`,{children:ie(e)})]},t))},`sub-${n.length}`));continue}n.push((0,w.jsx)(`p`,{className:`my-0.5 leading-relaxed`,children:ie(i)},`p-${n.length}`)),r++}return n}function oe({slide:e,studied:t,onToggleStudied:n,highlighted:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{r&&i.current&&i.current.scrollIntoView({behavior:`smooth`,block:`center`})},[r]),(0,w.jsxs)(`div`,{ref:i,id:`slide-${e.id}`,className:`bg-white rounded-xl shadow-sm border transition-all duration-200 ${r?`border-aws-orange shadow-md ring-2 ring-aws-orange ring-opacity-50`:`border-gray-200 hover:shadow-md`} ${t?`border-l-4 border-l-green-500`:``}`,children:[(0,w.jsxs)(`div`,{className:`flex items-start justify-between p-4 pb-2`,children:[(0,w.jsx)(`div`,{className:`flex-1`,children:(0,w.jsx)(`h3`,{className:`font-semibold text-aws-navy text-base leading-tight`,children:e.title})}),(0,w.jsx)(`button`,{onClick:()=>n(e.id),className:`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium transition-colors shrink-0 ml-3 ${t?`bg-green-100 text-green-700 hover:bg-green-200`:`bg-gray-100 text-gray-500 hover:bg-gray-200`}`,title:t?`Mark as not studied`:`Mark as studied`,children:t?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z`,clipRule:`evenodd`})}),`Studied`]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z`})}),`Mark Studied`]})})]}),(0,w.jsx)(`div`,{className:`px-4 pb-4`,children:(0,w.jsx)(`div`,{className:`text-sm text-gray-700 bg-gray-50 rounded-lg p-3 max-h-72 overflow-y-auto border border-gray-100 space-y-0.5 scrollbar-thin`,children:ae(e.content)})})]})}function se({sections:e,activeSection:t,highlightedSlide:n,progress:r,onToggleStudied:i}){let a=e[t];if(!a)return(0,w.jsx)(`div`,{className:`p-8 text-gray-500`,children:`Select a section from the sidebar.`});let o=a.slides.filter(e=>r.has(e.id)).length;return(0,w.jsxs)(`div`,{className:`p-6 max-w-4xl mx-auto`,children:[(0,w.jsxs)(`div`,{className:`mb-6`,children:[(0,w.jsx)(`h2`,{className:`text-2xl font-bold text-aws-navy mb-1`,children:a.title}),(0,w.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[o,` of `,a.slides.length,` topics studied`]}),(0,w.jsx)(`div`,{className:`mt-2 w-full bg-gray-200 rounded-full h-2`,children:(0,w.jsx)(`div`,{className:`h-2 rounded-full transition-all duration-300`,style:{width:`${a.slides.length===0?0:o/a.slides.length*100}%`,backgroundColor:o===a.slides.length&&a.slides.length>0?`#22c55e`:`#FF9900`}})})]}),a.slides.length===0?(0,w.jsx)(`div`,{className:`bg-white rounded-xl p-8 text-center text-gray-400 border border-gray-200`,children:`No slides available for this section yet.`}):(0,w.jsx)(`div`,{className:`space-y-4`,children:a.slides.map(e=>(0,w.jsx)(oe,{slide:e,studied:r.has(e.id),onToggleStudied:i,highlighted:e.id===n},e.id))})]})}function ce({allSlides:e,sections:t,progress:n,onToggleStudied:r}){let[i,a]=(0,_.useState)(0),[o,s]=(0,_.useState)(!1);if((0,_.useEffect)(()=>{s(!1)},[i]),!e||e.length===0)return(0,w.jsx)(`div`,{className:`p-8 text-gray-500`,children:`No slides available.`});let c=e[i],l=t[c.sectionId],u=n.has(c.id),d=e.length;return(0,w.jsxs)(`div`,{className:`p-6 flex flex-col items-center min-h-full`,children:[(0,w.jsxs)(`div`,{className:`w-full max-w-2xl mb-4 flex items-center justify-between`,children:[(0,w.jsxs)(`span`,{className:`text-sm text-gray-500 font-medium`,children:[`Card `,(0,w.jsx)(`span`,{className:`text-aws-navy font-bold`,children:i+1}),` of `,d]}),(0,w.jsxs)(`div`,{className:`flex gap-2`,children:[(0,w.jsxs)(`button`,{onClick:()=>{a(Math.floor(Math.random()*d))},className:`flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors`,children:[(0,w.jsx)(`svg`,{className:`w-3.5 h-3.5`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15`})}),`Random`]}),(0,w.jsx)(`button`,{onClick:()=>r(c.id),className:`flex items-center gap-1 text-xs px-3 py-1.5 rounded-full transition-colors ${u?`bg-green-100 text-green-700 hover:bg-green-200`:`bg-gray-100 text-gray-500 hover:bg-gray-200`}`,children:u?`Studied ✓`:`Mark Studied`})]})]}),(0,w.jsx)(`div`,{className:`w-full max-w-2xl mb-6`,children:(0,w.jsx)(`div`,{className:`bg-gray-200 rounded-full h-1.5`,children:(0,w.jsx)(`div`,{className:`bg-aws-orange h-1.5 rounded-full transition-all duration-300`,style:{width:`${(i+1)/d*100}%`}})})}),(0,w.jsx)(`div`,{className:`w-full max-w-2xl card-flip-container`,style:{height:`420px`},children:(0,w.jsxs)(`div`,{className:`card-flip-inner cursor-pointer ${o?`flipped`:``}`,onClick:()=>s(!o),style:{height:`100%`},children:[(0,w.jsxs)(`div`,{className:`card-front bg-aws-navy flex flex-col items-center justify-center p-8 shadow-xl`,children:[(0,w.jsx)(`div`,{className:`text-aws-orange text-xs font-bold uppercase tracking-wider mb-4`,children:l?.title||`Section`}),(0,w.jsx)(`h2`,{className:`text-white text-2xl font-bold text-center leading-tight mb-6`,children:c.title}),(0,w.jsxs)(`div`,{className:`flex items-center gap-2 text-gray-400 text-sm mt-auto`,children:[(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5`})}),`Click to reveal`]})]}),(0,w.jsxs)(`div`,{className:`card-back bg-white flex flex-col p-6 shadow-xl overflow-hidden`,children:[(0,w.jsx)(`div`,{className:`text-aws-orange text-xs font-bold uppercase tracking-wider mb-2`,children:l?.title||`Section`}),(0,w.jsx)(`h3`,{className:`text-aws-navy font-semibold text-lg mb-3`,children:c.title}),(0,w.jsx)(`div`,{className:`flex-1 overflow-y-auto text-sm text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-100 space-y-0.5 scrollbar-thin`,children:ae(c.content)||(0,w.jsx)(`span`,{className:`text-gray-400`,children:`No content available.`})}),(0,w.jsx)(`div`,{className:`mt-3 text-center text-gray-400 text-xs`,children:`Click to flip back`})]})]})}),(0,w.jsxs)(`div`,{className:`flex items-center gap-6 mt-8`,children:[(0,w.jsxs)(`button`,{onClick:()=>{a(e=>(e-1+d)%d)},className:`flex items-center gap-2 bg-aws-navy text-white px-6 py-2.5 rounded-lg hover:bg-aws-lightnavy transition-colors font-medium`,children:[(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 19l-7-7 7-7`})}),`Prev`]}),(0,w.jsxs)(`span`,{className:`text-sm text-gray-400 font-mono`,children:[i+1,` / `,d]}),(0,w.jsxs)(`button`,{onClick:()=>{a(e=>(e+1)%d)},className:`flex items-center gap-2 bg-aws-navy text-white px-6 py-2.5 rounded-lg hover:bg-aws-lightnavy transition-colors font-medium`,children:[`Next`,(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})]}),(0,w.jsx)(`p`,{className:`mt-4 text-xs text-gray-400`,children:`Tip: Click the card to flip • Use arrows to navigate`})]})}var le=[{sectionId:0,question:`Which EC2 placement group provides the lowest latency between instances?`,options:[`Spread`,`Partition`,`Cluster`,`Dedicated Host`],correctIndex:2,explanation:`Cluster placement groups put instances in the same AZ with 10Gbps Enhanced Networking for lowest latency. Best for HPC and big data jobs.`},{sectionId:0,question:`What is the maximum number of instances per AZ in a Spread placement group?`,options:[`3`,`5`,`7`,`10`],correctIndex:2,explanation:`Spread placement groups are limited to 7 instances per AZ per placement group. They isolate each instance on distinct hardware to reduce simultaneous failure risk.`},{sectionId:0,question:`Which placement group type supports up to 100s of EC2 instances and is best for Hadoop, Cassandra, and Kafka?`,options:[`Cluster`,`Spread`,`Partition`,`Dedicated`],correctIndex:2,explanation:`Partition placement groups spread instances across many partitions (up to 7 per AZ), each on distinct rack sets. It scales to 100s of EC2 instances and is used by HDFS, HBase, Cassandra, Kafka.`},{sectionId:0,question:`Which CloudWatch metric is NOT included by default in EC2 monitoring?`,options:[`CPU Utilization`,`Network In/Out`,`RAM Usage`,`Disk Read/Write`],correctIndex:2,explanation:`RAM (memory) usage is NOT included in default AWS EC2 metrics. You must push it as a custom metric using the Unified CloudWatch Agent.`},{sectionId:0,question:`What must be true about an EC2 instance's root EBS volume to use Hibernate?`,options:[`It must be unencrypted`,`It must be encrypted`,`It must be an instance store`,`It must be at least 1TB`],correctIndex:1,explanation:`For EC2 Hibernate, the root EBS volume must be encrypted. Hibernate writes the in-memory RAM state to the root EBS volume, so encryption protects that data.`},{sectionId:0,question:`What is the maximum duration an EC2 instance can remain hibernated?`,options:[`7 days`,`30 days`,`60 days`,`90 days`],correctIndex:2,explanation:`An EC2 instance cannot be hibernated for more than 60 days.`},{sectionId:1,question:`What does enabling the AMI 'No-Reboot' option mean?`,options:[`AWS will shut down the instance before creating an AMI`,`The AMI is created without shutting down the instance, but OS buffers may not be flushed`,`The instance cannot be rebooted after AMI creation`,`The AMI will only work on stopped instances`],correctIndex:1,explanation:`With No-Reboot enabled, AWS creates an AMI without shutting down the instance. This means OS buffers are not flushed to disk before the snapshot, which may affect file system integrity.`},{sectionId:1,question:`When sharing an AMI with encrypted volumes to another account, what must also be shared?`,options:[`The EC2 instance`,`The S3 bucket`,`The customer managed KMS keys used to encrypt`,`The IAM role`],correctIndex:2,explanation:`When sharing an AMI with encrypted volumes, you must also share the customer managed keys (CMKs) used to encrypt them. AWS managed keys cannot be shared.`},{sectionId:1,question:`Which service automates the creation, maintenance, validation and testing of EC2 AMIs on a schedule?`,options:[`AWS Backup`,`AWS CodeBuild`,`EC2 Image Builder`,`AWS CloudFormation`],correctIndex:2,explanation:`EC2 Image Builder automates the creation, maintenance, validation, and testing of EC2 AMIs. It's a free service—you only pay for the underlying resources used.`},{sectionId:1,question:`To copy an AMI that was shared with your account, what permission must the AMI owner grant you?`,options:[`iam:PassRole permission`,`Read permissions for the EBS snapshot backing the AMI`,`Write access to the source S3 bucket`,`Access to the source EC2 instance`],correctIndex:1,explanation:`To copy a shared AMI, the owner must grant you read permissions for the EBS snapshot that backs the AMI. If it's encrypted, they must also share the encryption keys.`},{sectionId:2,question:`Which SSM feature allows you to run scripts across multiple EC2 instances without SSH access?`,options:[`Session Manager`,`Run Command`,`State Manager`,`Patch Manager`],correctIndex:1,explanation:`SSM Run Command executes scripts or commands across multiple instances using resource groups, with no SSH required. Output can go to S3 or CloudWatch Logs.`},{sectionId:2,question:`In SSM Parameter Store, what is the maximum size of a parameter value in the Standard tier?`,options:[`1 KB`,`4 KB`,`8 KB`,`16 KB`],correctIndex:1,explanation:`In the Standard tier, SSM Parameter Store allows a maximum parameter value size of 4 KB. The Advanced tier allows up to 8 KB.`},{sectionId:2,question:`How many parameters are allowed in SSM Parameter Store Standard tier per account per region?`,options:[`1,000`,`5,000`,`10,000`,`100,000`],correctIndex:2,explanation:`SSM Parameter Store Standard tier allows up to 10,000 parameters per AWS account per region. Advanced tier allows up to 100,000.`},{sectionId:2,question:`Which SSM feature automates patching of managed instances and can generate compliance reports?`,options:[`Run Command`,`State Manager`,`Patch Manager`,`Distributor`],correctIndex:2,explanation:`SSM Patch Manager automates the patching process, supports on-demand or scheduled patching via Maintenance Windows, and can generate patch compliance reports sent to S3.`},{sectionId:2,question:`Which SSM feature provides secure shell access to EC2 instances without requiring SSH keys or open port 22?`,options:[`Fleet Manager`,`Run Command`,`Session Manager`,`Automation`],correctIndex:2,explanation:`SSM Session Manager provides secure shell access without SSH keys, bastion hosts, or open port 22. Sessions can be logged to S3 or CloudWatch Logs.`},{sectionId:3,question:`Which Load Balancer type operates at Layer 7 and supports path-based routing?`,options:[`Classic Load Balancer`,`Network Load Balancer`,`Application Load Balancer`,`Gateway Load Balancer`],correctIndex:2,explanation:`Application Load Balancer (ALB) operates at Layer 7 (HTTP) and supports routing based on URL path, hostname, query strings, and headers.`},{sectionId:3,question:`Which Load Balancer type uses the GENEVE protocol on port 6081?`,options:[`Application Load Balancer`,`Network Load Balancer`,`Classic Load Balancer`,`Gateway Load Balancer`],correctIndex:3,explanation:`Gateway Load Balancer uses the GENEVE protocol on port 6081. It operates at Layer 3 and is used to deploy, scale, and manage third-party network virtual appliances.`},{sectionId:3,question:`What is the default ASG scaling cooldown period after a scaling activity?`,options:[`60 seconds`,`180 seconds`,`300 seconds`,`600 seconds`],correctIndex:2,explanation:`The default cooldown period for Auto Scaling Groups is 300 seconds (5 minutes). During this time, the ASG will not launch or terminate additional instances to allow metrics to stabilize.`},{sectionId:3,question:`Which ALB cookie name is used for duration-based sticky sessions?`,options:[`AWSALBTG`,`AWSALBAPP`,`AWSALB`,`AWSELB`],correctIndex:2,explanation:`For ALB duration-based sticky sessions, the cookie name is AWSALB. For CLB, the cookie name is AWSELB. AWSALBAPP is for application-based stickiness.`},{sectionId:3,question:`What connection draining time range is available for ALB/NLB deregistration delay?`,options:[`0 to 600 seconds`,`1 to 3600 seconds`,`60 to 1800 seconds`,`0 to 86400 seconds`],correctIndex:1,explanation:`Connection Draining (CLB) or Deregistration Delay (ALB/NLB) can be set between 1 to 3600 seconds. The default is 300 seconds. Setting it to 0 disables the feature.`},{sectionId:4,question:`What happens when a CloudFormation stack deletion fails because an S3 bucket is not empty?`,options:[`CloudFormation automatically empties the bucket`,`The deletion fails with DELETE_FAILED status`,`The bucket is archived to Glacier`,`CloudFormation retries deletion for 24 hours`],correctIndex:1,explanation:`DELETE_FAILED occurs when S3 buckets aren't empty before deletion. You can use DeletionPolicy=Retain to skip the deletion, or use a Custom Resource with Lambda to empty the bucket first.`},{sectionId:4,question:`Which CloudFormation DeletionPolicy creates a final snapshot before deleting the resource?`,options:[`Delete`,`Retain`,`Snapshot`,`Archive`],correctIndex:2,explanation:`DeletionPolicy=Snapshot creates a final snapshot before deleting resources like EBS Volumes, RDS instances, ElastiCache clusters, Redshift clusters, etc.`},{sectionId:4,question:`What is CloudFormation Drift detection used for?`,options:[`Detecting network latency in CloudFormation deployments`,`Identifying manual configuration changes made outside CloudFormation`,`Monitoring CloudFormation stack costs`,`Detecting security vulnerabilities in templates`],correctIndex:1,explanation:`CloudFormation Drift detection identifies resources that have been manually changed outside of CloudFormation, showing differences between the expected and actual configuration.`},{sectionId:4,question:`What capability is required when a CloudFormation template creates named IAM resources?`,options:[`CAPABILITY_IAM`,`CAPABILITY_NAMED_IAM`,`CAPABILITY_AUTO_EXPAND`,`CAPABILITY_RESOURCE_POLICY`],correctIndex:1,explanation:`CAPABILITY_NAMED_IAM is required when your template creates or updates named IAM resources (Users, Roles, Groups, Policies). CAPABILITY_IAM is for unnamed IAM resources.`},{sectionId:4,question:`What is the difference between CloudFormation Cross Stacks and Nested Stacks?`,options:[`Cross Stacks use Fn::Import; Nested Stacks use Fn::GetAtt`,`Cross Stacks use Outputs Export/ImportValue for shared resources with different lifecycles; Nested Stacks reuse components in a single hierarchy`,`Cross Stacks require StackSets; Nested Stacks don't`,`They are identical—the terms are interchangeable`],correctIndex:1,explanation:`Cross Stacks use Outputs Export and Fn::ImportValue to share resources between stacks with different lifecycles. Nested Stacks embed reusable components within a parent stack hierarchy.`},{sectionId:5,question:`What is the maximum memory (RAM) you can allocate to an AWS Lambda function?`,options:[`1 GB`,`3 GB`,`6 GB`,`10 GB`],correctIndex:3,explanation:`AWS Lambda supports up to 10 GB of RAM per function. Increasing RAM also improves CPU and network performance proportionally.`},{sectionId:5,question:`What is the Lambda free tier for compute time per month?`,options:[`100,000 GB-seconds`,`400,000 GB-seconds`,`1,000,000 GB-seconds`,`10,000,000 GB-seconds`],correctIndex:1,explanation:`Lambda's free tier includes 400,000 GB-seconds of compute time per month. For a 1GB function, that's 400,000 seconds. For a 128MB function, it's 3,200,000 seconds.`},{sectionId:5,question:`What is the free tier for Lambda request count per month?`,options:[`100,000 requests`,`500,000 requests`,`1,000,000 requests`,`10,000,000 requests`],correctIndex:2,explanation:`Lambda's free tier includes 1,000,000 requests per month. Beyond the free tier, it's $0.20 per 1 million requests ($0.0000002 per request).`},{sectionId:6,question:`What is the maximum IOPS for an io2 Block Express EBS volume?`,options:[`32,000 IOPS`,`64,000 IOPS`,`256,000 IOPS`,`1,000,000 IOPS`],correctIndex:2,explanation:`io2 Block Express EBS volumes support up to 256,000 IOPS with an IOPS:GiB ratio of 1,000:1 and sub-millisecond latency.`},{sectionId:6,question:`Which EBS volume type provides a baseline of 3,000 IOPS and allows independent scaling of IOPS up to 16,000?`,options:[`gp2`,`gp3`,`io1`,`st1`],correctIndex:1,explanation:`gp3 provides a baseline of 3,000 IOPS and 125 MiB/s throughput, with the ability to independently scale IOPS up to 16,000 and throughput up to 1,000 MiB/s.`},{sectionId:6,question:`What is the retention period for deleted EBS snapshots in the Recycle Bin?`,options:[`1 hour to 7 days`,`1 day to 1 year`,`7 days to 30 days`,`30 days to 1 year`],correctIndex:1,explanation:`The EBS Snapshot Recycle Bin allows you to specify a retention period from 1 day to 1 year for recovering accidentally deleted snapshots.`},{sectionId:6,question:`Which EFS throughput mode automatically scales throughput up and down based on workloads?`,options:[`Bursting`,`Provisioned`,`Elastic`,`Adaptive`],correctIndex:2,explanation:`EFS Elastic throughput mode automatically scales throughput up to 3 GiB/s for reads and 1 GiB/s for writes based on workload. Best for unpredictable workloads.`},{sectionId:6,question:`How much cost savings does EFS One Zone-IA offer compared to standard storage?`,options:[`50% cheaper`,`75% cheaper`,`Over 90% cheaper`,`30% cheaper`],correctIndex:2,explanation:`EFS One Zone with Infrequent Access (EFS One Zone-IA) offers over 90% in cost savings. The Archive tier is about 50% cheaper than standard EFS.`},{sectionId:7,question:`What is the maximum object size in Amazon S3?`,options:[`1 TB`,`5 TB`,`10 TB`,`Unlimited`],correctIndex:1,explanation:`The maximum object size in Amazon S3 is 5 TB (5,000 GB). For objects larger than 5 GB, you must use multi-part upload.`},{sectionId:7,question:`What is the baseline S3 performance for PUT/COPY/POST/DELETE requests per second per prefix?`,options:[`1,000`,`3,500`,`5,500`,`10,000`],correctIndex:1,explanation:`S3 automatically scales to at least 3,500 PUT/COPY/POST/DELETE requests per second per prefix, and 5,500 GET/HEAD requests per second per prefix.`},{sectionId:7,question:`For S3 Cross-Region Replication (CRR), what must be enabled on both source and destination buckets?`,options:[`Encryption`,`Versioning`,`Lifecycle rules`,`Event notifications`],correctIndex:1,explanation:`S3 Replication (both CRR and SRR) requires Versioning to be enabled on both the source and destination buckets.`},{sectionId:7,question:`How long does S3 Replication Time Control (RTC) guarantee replication of 99.99% of objects?`,options:[`5 minutes`,`15 minutes`,`30 minutes`,`1 hour`],correctIndex:1,explanation:`S3 Replication Time Control (RTC) guarantees that 99.99% of new objects are replicated within 15 minutes, providing predictable and auditable replication times.`},{sectionId:8,question:`What is the maximum number of parts for S3 Multi-Part Upload?`,options:[`1,000`,`5,000`,`10,000`,`50,000`],correctIndex:2,explanation:`S3 Multi-Part Upload supports a maximum of 10,000 parts. It is recommended for files >100MB and required for files >5GB.`},{sectionId:8,question:`What is the pricing for Amazon Athena?`,options:[`$1.00 per TB scanned`,`$5.00 per TB scanned`,`$10.00 per TB scanned`,`$0.25 per query`],correctIndex:1,explanation:`Amazon Athena charges $5.00 per TB of data scanned. You can reduce costs by using columnar data formats (Parquet, ORC), compressing data, and partitioning datasets.`},{sectionId:8,question:`Which S3 Object Lock mode prevents deletion by ANY user including root, and cannot be shortened?`,options:[`Governance mode`,`Compliance mode`,`Legal Hold`,`WORM mode`],correctIndex:1,explanation:`S3 Object Lock Compliance mode prevents any user, including root, from overwriting or deleting object versions. Retention periods cannot be shortened or changed.`},{sectionId:8,question:`Who is the only person who can enable/disable S3 MFA Delete?`,options:[`Any IAM admin user`,`The bucket owner (root account only)`,`Any user with s3:PutBucketVersioning permission`,`AWS Support`],correctIndex:1,explanation:`Only the bucket owner (root account) can enable or disable MFA Delete on an S3 bucket. MFA Delete requires Versioning to be enabled.`},{sectionId:9,question:`Which FSx file system is optimized for Windows workloads and supports SMB and NTFS?`,options:[`FSx for Lustre`,`FSx for OpenZFS`,`FSx for Windows File Server`,`FSx for NetApp ONTAP`],correctIndex:2,explanation:`Amazon FSx for Windows File Server is a fully managed Windows file system supporting SMB protocol, Windows NTFS, Microsoft Active Directory integration, and DFS Namespaces.`},{sectionId:9,question:`What is the maximum IOPS for Amazon FSx for OpenZFS?`,options:[`100,000 IOPS`,`500,000 IOPS`,`1,000,000 IOPS`,`10,000,000 IOPS`],correctIndex:2,explanation:`Amazon FSx for OpenZFS supports up to 1,000,000 IOPS with less than 0.5ms latency. It is compatible with NFS v3, v4, v4.1, and v4.2.`},{sectionId:9,question:`Which AWS Storage Gateway type uses iSCSI protocol and is backed by EBS snapshots?`,options:[`S3 File Gateway`,`Volume Gateway`,`Tape Gateway`,`FSx File Gateway`],correctIndex:1,explanation:`Volume Gateway uses iSCSI protocol and is backed by EBS snapshots. It has two modes: Cached volumes (low latency for recent data) and Stored volumes (entire dataset on-premises).`},{sectionId:9,question:`What is the bandwidth of a single AWS DataSync agent task?`,options:[`1 Gbps`,`5 Gbps`,`10 Gbps`,`100 Gbps`],correctIndex:2,explanation:`One AWS DataSync agent task can use up to 10 Gbps. You can set a bandwidth limit and schedule replication tasks hourly, daily, or weekly.`},{sectionId:10,question:`What does CloudFront Origin Shield do?`,options:[`Encrypts traffic between edge locations and the origin`,`Adds an extra caching layer between regional edge locations and the origin to minimize origin load`,`Provides DDoS protection for the origin`,`Restricts access to the origin by geo-blocking`],correctIndex:1,explanation:`CloudFront Origin Shield is an additional caching layer between regional edge locations and your origin. It combines multiple requests for the same object into a single request, reducing origin load and costs.`},{sectionId:10,question:`Which AWS service provides two Anycast static IPs for global routing and faster failover?`,options:[`CloudFront`,`Route 53`,`AWS Global Accelerator`,`AWS Transit Gateway`],correctIndex:2,explanation:`AWS Global Accelerator provides 2 Anycast IP addresses that send traffic directly to AWS edge locations, then routes via the private AWS network to your application for lower latency and fast failover (<1 minute).`},{sectionId:10,question:`Which CloudFront feature allows you to invalidate cached content before the TTL expires?`,options:[`Cache Reset`,`Cache Busting`,`CreateInvalidation API`,`PurgeCache API`],correctIndex:2,explanation:`You can use the CreateInvalidation API to force CloudFront to fetch fresh content from the origin before the TTL expires. You can invalidate all files (*) or specific paths (/images/*).`},{sectionId:10,question:`What does SNI (Server Name Indication) enable on ALB and NLB?`,options:[`It allows multiple EC2 instances behind one load balancer`,`It allows multiple SSL certificates on one listener for different domains`,`It enables HTTP/2 support`,`It provides end-to-end encryption between clients and EC2`],correctIndex:1,explanation:`SNI solves the problem of loading multiple SSL certificates onto one web server. Clients indicate the target hostname in the SSL handshake. SNI works with ALB, NLB, and CloudFront—not CLB.`},{sectionId:11,question:`What is the maximum number of Read Replicas supported by Amazon RDS?`,options:[`5`,`10`,`15`,`20`],correctIndex:2,explanation:`Amazon RDS supports up to 15 Read Replicas within AZ, cross-AZ, or cross-region. Replication is asynchronous (ASYNC), meaning reads are eventually consistent.`},{sectionId:11,question:`What storage auto-scaling trigger requires for RDS to scale automatically?`,options:[`Storage is less than 20% free`,`Free storage < 10%, low storage for 5+ minutes, 6 hours since last modification`,`Any manual scaling request from CloudWatch`,`CPU exceeds 80% for 10 minutes`],correctIndex:1,explanation:`RDS Storage Auto Scaling triggers when: free storage < 10% of allocated storage, low-storage lasts at least 5 minutes, AND 6 hours have passed since the last modification.`},{sectionId:11,question:`How many copies of Aurora data are stored across how many AZs?`,options:[`3 copies across 2 AZs`,`4 copies across 2 AZs`,`6 copies across 3 AZs`,`9 copies across 3 AZs`],correctIndex:2,explanation:`Aurora stores 6 copies of your data across 3 AZs. It needs 4 copies out of 6 for writes and 3 copies out of 6 for reads. Storage is striped across 100s of volumes.`},{sectionId:11,question:`What is Aurora Backtracking and what is its maximum rewind time?`,options:[`Restores to a new cluster; up to 35 days`,`In-place rewind of the DB cluster; up to 72 hours`,`Creates a point-in-time snapshot; unlimited`,`Clones the database; up to 7 days`],correctIndex:1,explanation:`Aurora Backtracking rewinds the DB cluster back and forth in time without creating a new DB cluster (in-place restore). It supports up to 72 hours of rewind and is available for Aurora MySQL only.`},{sectionId:11,question:`By how much does Amazon RDS Proxy reduce RDS and Aurora failover time?`,options:[`Up to 25%`,`Up to 50%`,`Up to 66%`,`Up to 90%`],correctIndex:2,explanation:`Amazon RDS Proxy reduces RDS and Aurora failover time by up to 66% by maintaining a pool of database connections, so applications don't need to reconnect from scratch.`},{sectionId:12,question:`How long does CloudTrail retain events by default?`,options:[`30 days`,`60 days`,`90 days`,`365 days`],correctIndex:2,explanation:`CloudTrail retains events for 90 days by default. To retain events longer, you must log them to S3 and can analyze them with Athena.`},{sectionId:12,question:`What is the maximum number of dimensions per CloudWatch metric?`,options:[`10`,`20`,`30`,`50`],correctIndex:2,explanation:`CloudWatch supports up to 30 dimensions per metric. Dimensions are attributes used to segment and filter metrics (e.g., instance ID, environment).`},{sectionId:12,question:`CloudWatch Log exports to S3 using CreateExportTask can take up to how long?`,options:[`1 hour`,`6 hours`,`12 hours`,`24 hours`],correctIndex:2,explanation:`CloudWatch Logs data can take up to 12 hours to become available for export using CreateExportTask. For near-real-time delivery, use CloudWatch Logs Subscriptions instead.`},{sectionId:12,question:`Which AWS Config pricing model applies?`,options:[`Free tier: 10 rules, then $0.01/rule/month`,`No free tier: $0.003 per configuration item recorded, $0.001 per config rule evaluation`,`Flat $5/month per region`,`Pay per compliance check only`],correctIndex:1,explanation:`AWS Config has no free tier. Pricing is $0.003 per configuration item recorded per region and $0.001 per config rule evaluation per region.`},{sectionId:12,question:`Within how many minutes of an API call does CloudTrail deliver an event to S3?`,options:[`2 minutes`,`5 minutes`,`15 minutes`,`30 minutes`],correctIndex:2,explanation:`CloudTrail delivers events to S3 every 5 minutes and delivers log entries within 15 minutes of an API call. CloudTrail is not real-time.`},{sectionId:13,question:`What is the maximum number of VPCs per AWS region (soft limit)?`,options:[`3`,`5`,`10`,`20`],correctIndex:1,explanation:`By default, you can have up to 5 VPCs per AWS region (soft limit). This can be increased by contacting AWS Support.`},{sectionId:13,question:`AWS Service Control Policies (SCPs) apply to which entities?`,options:[`Only IAM users`,`Only IAM roles`,`IAM users and roles in member accounts (not the management account)`,`All AWS resources including services`],correctIndex:2,explanation:`SCPs apply to IAM users and roles in member accounts. They do NOT apply to the management account (which has full admin power) and do NOT grant permissions—they only restrict them.`},{sectionId:13,question:`Which AWS service provides a one-stop view of Trusted Advisor checks across all accounts in an AWS Organization?`,options:[`AWS Config Aggregator`,`AWS Security Hub`,`Trusted Advisor Organizational View`,`AWS Control Tower`],correctIndex:2,explanation:`Trusted Advisor Organizational View lets you view all Trusted Advisor checks across all accounts in an AWS Organization. It requires Business, Enterprise On-Ramp, or Enterprise Support plans.`},{sectionId:13,question:`What is the cost of AWS Budgets after the free tier?`,options:[`$0.01/day/budget`,`$0.02/day/budget`,`$0.10/day/budget`,`$1.00/month/budget`],correctIndex:1,explanation:`The first 2 budgets in AWS Budgets are free. After that, it costs $0.02/day per budget. You can create up to 5 SNS notifications per budget.`},{sectionId:14,question:`Which AWS Backup feature enforces WORM (Write Once Read Many) and prevents even root from deleting backups?`,options:[`Backup Lock`,`Backup Vault Lock`,`Backup Protection`,`Backup Shield`],correctIndex:1,explanation:`AWS Backup Vault Lock enforces a WORM state for all backups in an AWS Backup Vault. Even the root user cannot delete backups when Vault Lock is enabled.`},{sectionId:14,question:`What is the recovery time objective (RTO) for promoting an Aurora Global Database secondary region to primary for disaster recovery?`,options:[`< 30 seconds`,`< 1 minute`,`< 5 minutes`,`< 15 minutes`],correctIndex:1,explanation:`Promoting an Aurora Global Database secondary region for disaster recovery has an RTO of less than 1 minute. Typical cross-region replication takes less than 1 second.`},{sectionId:14,question:`What types of backups does AWS Backup support for RDS?`,options:[`Only manual snapshots`,`Only automated backups`,`All DB engines, including Aurora, with PITR support`,`Only MySQL and PostgreSQL`],correctIndex:2,explanation:`AWS Backup supports all RDS database engines (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, IBM DB2) and Aurora. It supports PITR (Point-In-Time Recovery) for supported services.`},{sectionId:15,question:`What is the cost of AWS Shield Advanced per month per organization?`,options:[`$500/month`,`$1,000/month`,`$3,000/month`,`$10,000/month`],correctIndex:2,explanation:`AWS Shield Advanced costs $3,000 per month per organization. It provides 24/7 access to the AWS DDoS Response Team (DRP) and protects against higher fees during DDoS-driven usage spikes.`},{sectionId:15,question:`Which service automatically rotates secrets and integrates natively with RDS?`,options:[`SSM Parameter Store`,`AWS KMS`,`AWS Secrets Manager`,`AWS Certificate Manager`],correctIndex:2,explanation:`AWS Secrets Manager can automatically rotate secrets on a schedule using Lambda functions. It has native integration with RDS, Redshift, and DocumentDB for automated credential rotation.`},{sectionId:15,question:`What is the waiting period range for KMS Customer Managed Key deletion scheduling?`,options:[`1 to 7 days`,`7 to 30 days`,`30 to 90 days`,`1 to 365 days`],correctIndex:1,explanation:`You can schedule CMK deletion with a waiting period of 7 to 30 days. During this period, the key cannot perform cryptographic operations. You can cancel the deletion during this window.`},{sectionId:15,question:`What is the rotation period range for Customer-Managed Symmetric KMS key automatic rotation?`,options:[`30 to 365 days`,`90 to 2560 days`,`365 to 1825 days`,`1 to 90 days`],correctIndex:1,explanation:`For Customer-Managed Symmetric KMS Keys, automatic rotation can be customized between 90 and 2560 days (default: 365 days). AWS-managed KMS Keys auto-rotate every 1 year.`},{sectionId:15,question:`Amazon GuardDuty provides which type of threat detection for cryptocurrency attacks?`,options:[`It has no specific cryptocurrency detection`,`It has a dedicated finding for CryptoCurrency attacks`,`It uses AWS WAF rules for crypto detection`,`It requires manual configuration for crypto detection`],correctIndex:1,explanation:`Amazon GuardDuty can protect against CryptoCurrency attacks and has a dedicated 'finding' for it. GuardDuty uses ML algorithms, anomaly detection, and 3rd party data for intelligent threat discovery.`},{sectionId:16,question:`How long are temporary credentials from AWS STS valid?`,options:[`5 minutes to 30 minutes`,`15 minutes to 1 hour`,`1 hour to 12 hours`,`1 hour to 36 hours`],correctIndex:1,explanation:`Temporary security credentials from AWS STS are valid for between 15 minutes and 1 hour. They must be refreshed after expiration.`},{sectionId:16,question:`Which IAM Security Tool shows the service permissions granted to a user and when those services were last accessed?`,options:[`IAM Credentials Report`,`IAM Access Advisor`,`IAM Policy Simulator`,`IAM Access Analyzer`],correctIndex:1,explanation:`IAM Access Advisor (user-level) shows the service permissions granted to a user and when those services were last accessed. This helps you implement least-privilege by identifying unused permissions.`},{sectionId:16,question:`IAM Permission Boundaries can be applied to which IAM entities?`,options:[`Users and groups`,`Groups and roles`,`Users and roles (not groups)`,`All IAM entities including groups`],correctIndex:2,explanation:`IAM Permission Boundaries are supported for IAM users and roles only—not groups. They set the maximum permissions an IAM entity can get, regardless of attached policies.`},{sectionId:17,question:`What is the only AWS service with a 100% availability SLA?`,options:[`Amazon S3`,`Amazon CloudFront`,`Amazon Route 53`,`Amazon RDS Multi-AZ`],correctIndex:2,explanation:`Amazon Route 53 is the only AWS service that provides a 100% availability SLA. The name '53' refers to the traditional DNS port number.`},{sectionId:17,question:`Which Route 53 routing policy routes traffic based on the geographic location of users, not latency?`,options:[`Latency-based`,`Geoproximity`,`Geolocation`,`IP-based`],correctIndex:2,explanation:`Geolocation routing is based on user location (continent, country, or US state). This differs from Latency-based routing which routes based on lowest latency, and Geoproximity which uses bias values.`},{sectionId:17,question:`What is the monthly cost for a Route 53 hosted zone?`,options:[`Free`,`$0.10/month`,`$0.50/month`,`$1.00/month`],correctIndex:2,explanation:`Route 53 charges $0.50 per hosted zone per month for the first 25 hosted zones, and $0.10 per hosted zone per month for additional zones.`},{sectionId:17,question:`Route 53 Geoproximity routing requires which feature to shift traffic based on bias values?`,options:[`Route 53 Health Checks`,`Route 53 Traffic Flow`,`Route 53 Resolver`,`Route 53 Alias records`],correctIndex:1,explanation:`Route 53 Geoproximity routing requires Route 53 Traffic Flow to use bias values (-99 to 99) to expand or shrink the geographic region for routing traffic.`},{sectionId:18,question:`How many IP addresses does AWS reserve in each VPC subnet?`,options:[`2`,`3`,`5`,`8`],correctIndex:2,explanation:`AWS reserves 5 IP addresses in each subnet: Network Address, VPC Router, Amazon DNS, future use, and Network Broadcast Address. These cannot be assigned to EC2 instances.`},{sectionId:18,question:`What is the bandwidth of a NAT Gateway with automatic scaling?`,options:[`1 Gbps to 10 Gbps`,`5 Gbps to 45 Gbps`,`5 Gbps to 100 Gbps`,`10 Gbps to 100 Gbps`],correctIndex:2,explanation:`A NAT Gateway starts with 5 Gbps of bandwidth and automatically scales up to 100 Gbps. Unlike NAT Instances, NAT Gateways are highly available within a single AZ.`},{sectionId:18,question:`What does a VPC Peering connection NOT support?`,options:[`Cross-account connections`,`Cross-region connections`,`Transitive routing through a third VPC`,`Security group references in peered VPCs`],correctIndex:2,explanation:`VPC Peering is NOT transitive. If VPC-A is peered with VPC-B, and VPC-B is peered with VPC-C, traffic from VPC-A cannot reach VPC-C through VPC-B. You must establish direct peering for each pair.`},{sectionId:18,question:`Which VPC endpoint type is free and only supports Amazon S3 and DynamoDB?`,options:[`Interface Endpoint`,`Gateway Endpoint`,`PrivateLink Endpoint`,`Service Endpoint`],correctIndex:1,explanation:`Gateway Endpoints are free and only support Amazon S3 and DynamoDB. They are provisioned as a gateway in route tables. Interface Endpoints (powered by PrivateLink) cost per hour and per GB.`},{sectionId:18,question:`What is the bandwidth per tunnel for an AWS Site-to-Site VPN connection?`,options:[`100 Mbps`,`500 Mbps`,`1.25 Gbps`,`10 Gbps`],correctIndex:2,explanation:`Each AWS Site-to-Site VPN connection provides 1.25 Gbps per tunnel (with 2 tunnels = 2.5 Gbps with ECMP). Using Transit Gateway with ECMP can combine multiple VPN connections for higher throughput.`},{sectionId:19,question:`What is the default message retention period in Amazon SQS?`,options:[`1 day`,`4 days`,`7 days`,`14 days`],correctIndex:1,explanation:`The default SQS message retention period is 4 days. It can be set from 1 minute to 14 days. Messages are automatically deleted after the retention period expires.`},{sectionId:19,question:`What is the maximum number of SNS subscriptions per topic?`,options:[`100,000`,`1,000,000`,`12,500,000`,`Unlimited`],correctIndex:2,explanation:`Amazon SNS supports up to 12,500,000 subscriptions per topic, and up to 100,000 topics per account.`},{sectionId:19,question:`What is the maximum SQS message size?`,options:[`64 KB`,`256 KB`,`1 MB`,`10 MB`],correctIndex:1,explanation:`Amazon SQS has a maximum message size of 256 KB. For larger messages, you can use the SQS Extended Client Library which stores the message payload in S3.`},{sectionId:19,question:`Which Amazon ECS launch type requires you to provision and maintain EC2 instances?`,options:[`Fargate`,`EC2 Launch Type`,`Lambda Launch Type`,`Serverless Launch Type`],correctIndex:1,explanation:`EC2 Launch Type requires you to provision and maintain EC2 instances in your cluster. Each instance must run the ECS Agent. Fargate is serverless—AWS manages the underlying infrastructure.`},{sectionId:19,question:`Amazon Managed Service for Prometheus retains metrics for how long by default?`,options:[`30 days`,`90 days`,`150 days`,`3 years`],correctIndex:2,explanation:`Amazon Managed Service for Prometheus has a default retention period of 150 days, but metrics can be stored for up to 3 years. Data is replicated across 3 AZs for high availability.`},{sectionId:12,question:`Which CloudWatch feature uses ML algorithms to detect unusual activity and surface anomalies?`,options:[`CloudWatch Insights`,`CloudWatch Anomaly Detection`,`CloudWatch Synthetics`,`CloudWatch Container Insights`],correctIndex:1,explanation:`CloudWatch Anomaly Detection (also called outlier detection) continuously analyzes metrics using ML algorithms to determine normal baselines, surface anomalies, and create alarms based on expected values.`},{sectionId:12,question:`What is the maximum number of EventBridge retry attempts for undeliverable events?`,options:[`50`,`100`,`185`,`500`],correctIndex:2,explanation:`EventBridge has a default retry policy of 185 retry attempts over 24 hours. Undelivered events can be sent to a Dead Letter Queue (DLQ) using SQS.`}];function E({sections:e}){let[t,n]=(0,_.useState)(`all`),[r,i]=(0,_.useState)(0),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(0),[d,f]=(0,_.useState)(0),[p,m]=(0,_.useState)([]),[h,g]=(0,_.useState)(!1),v=(0,_.useMemo)(()=>{if(t===`all`)return le;let e=parseInt(t);return le.filter(t=>t.sectionId===e)},[t]),[y,b]=(0,_.useState)(()=>[...le].sort(()=>Math.random()-.5)),x=t===`all`?y:v,S=x[r],C=S?e[S.sectionId]?.title||`Section ${S.sectionId+1}`:``,ee=e=>{n(e),i(0),o(null),c(!1),u(0),f(0),m([]),g(!1),b([...le].sort(()=>Math.random()-.5))},te=e=>{if(a!==null)return;o(e),c(!0);let t=e===S.correctIndex;t&&u(e=>e+1),f(e=>e+1),m(n=>[...n,{question:S.question,correct:t,selected:e,correctIndex:S.correctIndex}])},ne=()=>{r+1>=x.length?g(!0):(i(e=>e+1),o(null),c(!1))},T=()=>{i(0),o(null),c(!1),u(0),f(0),m([]),g(!1),b([...le].sort(()=>Math.random()-.5))};if(h){let e=Math.round(l/d*100);return(0,w.jsx)(`div`,{className:`p-6 max-w-2xl mx-auto`,children:(0,w.jsxs)(`div`,{className:`bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center`,children:[(0,w.jsx)(`div`,{className:`text-6xl mb-4 ${e>=70?`🎉`:`📚`}`,children:e>=70?`🎉`:`📚`}),(0,w.jsx)(`h2`,{className:`text-2xl font-bold text-aws-navy mb-2`,children:`Quiz Complete!`}),(0,w.jsxs)(`p`,{className:`text-gray-500 mb-6`,children:[`You scored `,(0,w.jsx)(`span`,{className:`font-bold text-aws-orange`,children:l}),` out of`,` `,(0,w.jsx)(`span`,{className:`font-bold`,children:d}),` questions`]}),(0,w.jsx)(`div`,{className:`w-full bg-gray-200 rounded-full h-4 mb-6`,children:(0,w.jsx)(`div`,{className:`h-4 rounded-full transition-all duration-500`,style:{width:`${e}%`,backgroundColor:e>=80?`#22c55e`:e>=60?`#FF9900`:`#ef4444`}})}),(0,w.jsxs)(`p`,{className:`text-2xl font-bold mb-6 ${e>=80?`text-green-600`:e>=60?`text-aws-orange`:`text-red-600`}`,children:[e,`%`,` `,e>=80?`— Excellent!`:e>=60?`— Good job!`:`— Keep studying!`]}),(0,w.jsx)(`div`,{className:`text-left mb-6 max-h-64 overflow-y-auto`,children:p.map((e,t)=>(0,w.jsxs)(`div`,{className:`flex items-start gap-2 py-1.5 border-b border-gray-100 text-sm ${e.correct?`text-green-700`:`text-red-700`}`,children:[(0,w.jsx)(`span`,{className:`shrink-0`,children:e.correct?`✓`:`✗`}),(0,w.jsx)(`span`,{className:`truncate`,children:e.question})]},t))}),(0,w.jsx)(`button`,{onClick:T,className:`bg-aws-orange text-white px-8 py-3 rounded-lg hover:bg-orange-500 transition-colors font-semibold`,children:`Try Again`})]})})}if(!S)return(0,w.jsx)(`div`,{className:`p-6 max-w-2xl mx-auto text-center text-gray-400`,children:`No questions available for this section.`});let re=[`A`,`B`,`C`,`D`];return(0,w.jsxs)(`div`,{className:`p-6 max-w-2xl mx-auto`,children:[(0,w.jsxs)(`div`,{className:`mb-4 flex items-center gap-3 flex-wrap`,children:[(0,w.jsx)(`label`,{className:`text-sm font-medium text-gray-600`,children:`Filter by section:`}),(0,w.jsxs)(`select`,{value:t,onChange:e=>ee(e.target.value),className:`text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-aws-orange focus:border-transparent`,children:[(0,w.jsxs)(`option`,{value:`all`,children:[`All Sections (`,le.length,` questions)`]}),e.map((e,t)=>{let n=le.filter(e=>e.sectionId===t).length;return n===0?null:(0,w.jsxs)(`option`,{value:t,children:[e.title.replace(/^\d+\.\s*/,``),` (`,n,`)`]},t)})]})]}),(0,w.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,w.jsxs)(`span`,{className:`text-sm text-gray-500`,children:[`Question `,(0,w.jsx)(`strong`,{children:r+1}),` of `,x.length]}),(0,w.jsxs)(`span`,{className:`text-sm font-medium text-aws-orange`,children:[`Score: `,l,`/`,d]})]}),(0,w.jsx)(`div`,{className:`w-full bg-gray-200 rounded-full h-1.5 mb-6`,children:(0,w.jsx)(`div`,{className:`bg-aws-orange h-1.5 rounded-full transition-all duration-300`,style:{width:`${(r+1)/x.length*100}%`}})}),(0,w.jsxs)(`div`,{className:`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden`,children:[(0,w.jsx)(`div`,{className:`bg-aws-navy px-5 py-3`,children:(0,w.jsx)(`span`,{className:`text-aws-orange text-xs font-bold uppercase tracking-wider`,children:C.replace(/^\d+\.\s*/,``)})}),(0,w.jsxs)(`div`,{className:`p-5`,children:[(0,w.jsx)(`p`,{className:`text-aws-navy font-semibold text-base leading-snug mb-5`,children:S.question}),(0,w.jsx)(`div`,{className:`space-y-2.5`,children:S.options.map((e,t)=>{let n=`border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-700`;return a!==null&&(n=t===S.correctIndex?`border-2 border-green-500 bg-green-50 text-green-800`:t===a&&t!==S.correctIndex?`border-2 border-red-400 bg-red-50 text-red-700`:`border-2 border-gray-100 bg-gray-50 text-gray-400`),(0,w.jsxs)(`button`,{onClick:()=>te(t),disabled:a!==null,className:`w-full text-left rounded-lg px-4 py-3 text-sm font-medium transition-all ${n} flex items-start gap-3`,children:[(0,w.jsx)(`span`,{className:`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border
                    ${a!==null&&t===S.correctIndex?`border-green-500 bg-green-500 text-white`:a!==null&&t===a&&t!==S.correctIndex?`border-red-400 bg-red-400 text-white`:`border-current`}`,children:re[t]}),(0,w.jsx)(`span`,{className:`flex-1`,children:e}),a!==null&&t===S.correctIndex&&(0,w.jsx)(`svg`,{className:`w-4 h-4 text-green-600 shrink-0 mt-0.5`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z`,clipRule:`evenodd`})}),a!==null&&t===a&&t!==S.correctIndex&&(0,w.jsx)(`svg`,{className:`w-4 h-4 text-red-500 shrink-0 mt-0.5`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z`,clipRule:`evenodd`})})]},t)})}),s&&(0,w.jsxs)(`div`,{className:`mt-4 p-4 rounded-lg text-sm ${a===S.correctIndex?`bg-green-50 border border-green-200 text-green-800`:`bg-red-50 border border-red-200 text-red-800`}`,children:[(0,w.jsx)(`div`,{className:`flex items-center gap-2 font-semibold mb-1`,children:a===S.correctIndex?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`svg`,{className:`w-4 h-4 text-green-600`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z`,clipRule:`evenodd`})}),`Correct!`]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(`svg`,{className:`w-4 h-4 text-red-600`,fill:`currentColor`,viewBox:`0 0 20 20`,children:(0,w.jsx)(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z`,clipRule:`evenodd`})}),`Incorrect — Correct answer: `,re[S.correctIndex]]})}),(0,w.jsx)(`p`,{children:S.explanation})]})]}),a!==null&&(0,w.jsx)(`div`,{className:`px-5 pb-5`,children:(0,w.jsx)(`button`,{onClick:ne,className:`w-full bg-aws-orange text-white py-2.5 rounded-lg hover:bg-orange-500 transition-colors font-semibold`,children:r+1>=x.length?`View Results`:`Next Question →`})})]})]})}function D(e,t){if(!t)return e;let n=RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)})`,`gi`);return e.split(n).map((e,t)=>n.test(e)?(0,w.jsx)(`mark`,{className:`bg-yellow-200 text-yellow-900 rounded px-0.5`,children:e},t):e)}function ue(e,t,n=200){if(!t)return e.slice(0,n)+(e.length>n?`...`:``);let r=e.toLowerCase().indexOf(t.toLowerCase());if(r===-1)return e.slice(0,n)+(e.length>n?`...`:``);let i=Math.max(0,r-80),a=Math.min(e.length,r+n-80),o=e.slice(i,a);return(i>0?`...`:``)+o+(a<e.length?`...`:``)}function de({allSlides:e,sections:t,onNavigateTo:n}){let[r,i]=(0,_.useState)(``),a=(0,_.useMemo)(()=>{if(!r.trim())return[];let t=r.trim().toLowerCase();return e.filter(e=>e.title.toLowerCase().includes(t)||e.content.toLowerCase().includes(t)).slice(0,50)},[r,e]);return(0,w.jsxs)(`div`,{className:`p-6 max-w-3xl mx-auto`,children:[(0,w.jsx)(`h2`,{className:`text-xl font-bold text-aws-navy mb-4`,children:`Full-Text Search`}),(0,w.jsxs)(`div`,{className:`relative mb-6`,children:[(0,w.jsx)(`input`,{type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Search topics, concepts, limits...`,autoFocus:!0,className:`w-full pl-10 pr-4 py-3 text-base border-2 border-gray-200 rounded-xl focus:outline-none focus:border-aws-orange transition-colors shadow-sm`}),(0,w.jsx)(`svg`,{className:`w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),r&&(0,w.jsx)(`button`,{onClick:()=>i(``),className:`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600`,children:(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})})]}),r&&(0,w.jsxs)(`p`,{className:`text-sm text-gray-500 mb-4`,children:[a.length===0?`No results found.`:`Found ${a.length} result${a.length===1?``:`s`} for "${r}"`,a.length===50&&` (showing first 50)`]}),(0,w.jsx)(`div`,{className:`space-y-3`,children:a.map(e=>{let i=t[e.sectionId],a=ue(e.content,r);return(0,w.jsx)(`button`,{onClick:()=>n(e.sectionId,e.id),className:`w-full text-left bg-white border border-gray-200 rounded-xl p-4 hover:border-aws-orange hover:shadow-sm transition-all group`,children:(0,w.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,w.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,w.jsx)(`div`,{className:`flex items-center gap-2 mb-1`,children:(0,w.jsx)(`span`,{className:`text-aws-orange text-xs font-bold uppercase tracking-wider`,children:i?.title?.replace(/^\d+\.\s*/,``)||`Unknown Section`})}),(0,w.jsx)(`h3`,{className:`font-semibold text-aws-navy text-sm mb-1.5 group-hover:text-aws-orange transition-colors`,children:D(e.title,r)}),a&&(0,w.jsx)(`p`,{className:`text-gray-500 text-xs leading-relaxed line-clamp-3`,children:D(a.replace(/^[-*•]\s+/gm,``).replace(/\*\*/g,``),r)})]}),(0,w.jsx)(`svg`,{className:`w-4 h-4 text-gray-300 group-hover:text-aws-orange transition-colors shrink-0 mt-1`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})]})},e.id)})}),!r&&(0,w.jsxs)(`div`,{className:`text-center py-16 text-gray-400`,children:[(0,w.jsx)(`svg`,{className:`w-12 h-12 mx-auto mb-3 opacity-40`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.5,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})}),(0,w.jsxs)(`p`,{className:`font-medium`,children:[`Start typing to search across all `,e.length,` topics`]}),(0,w.jsx)(`p`,{className:`text-sm mt-1`,children:`Try: "EC2 hibernate", "S3 replication", "placement group"`})]})]})}var fe=/\d+[\s,]*(?:GB|TB|MB|ms|Gbps|instances|partitions|rules|targets|%|seconds|minutes|hours|days|months|years|KB|IOPS|vCPUs)/gi,pe=/\b(?:NOTE:|IMPORTANT:|EXAM TIP:?)\b/gi;function O(e){return fe.test(e.content)||pe.test(e.content)}function k({allSlides:e,sections:t}){let[n,r]=(0,_.useState)(`all`),[i,a]=(0,_.useState)(`all`),o=(0,_.useMemo)(()=>{let t=e.filter(e=>n===`limits`?fe.test(e.content):n===`tips`?pe.test(e.content):O(e));if(i!==`all`){let e=parseInt(i);t=t.filter(t=>t.sectionId===e)}return t},[e,n,i]);return(0,w.jsxs)(`div`,{className:`p-6 max-w-4xl mx-auto`,children:[(0,w.jsx)(`h2`,{className:`text-2xl font-bold text-aws-navy mb-1`,children:`Quick Reference`}),(0,w.jsx)(`p`,{className:`text-sm text-gray-500 mb-5`,children:`Slides containing key numbers, limits, and exam tips — highlighted for fast review.`}),(0,w.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 mb-5`,children:[(0,w.jsx)(`div`,{className:`flex rounded-lg overflow-hidden border border-gray-200`,children:[{value:`all`,label:`All`},{value:`limits`,label:`Numbers & Limits`},{value:`tips`,label:`Exam Tips`}].map(({value:e,label:t})=>(0,w.jsx)(`button`,{onClick:()=>r(e),className:`px-3 py-1.5 text-sm font-medium transition-colors ${n===e?`bg-aws-orange text-white`:`bg-white text-gray-600 hover:bg-gray-50`}`,children:t},e))}),(0,w.jsxs)(`select`,{value:i,onChange:e=>a(e.target.value),className:`text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:ring-2 focus:ring-aws-orange focus:border-transparent`,children:[(0,w.jsx)(`option`,{value:`all`,children:`All Sections`}),t.map((e,t)=>(0,w.jsx)(`option`,{value:t,children:e.title.replace(/^\d+\.\s*/,``)},t))]}),(0,w.jsxs)(`span`,{className:`text-sm text-gray-400 ml-auto`,children:[o.length,` slide`,o.length===1?``:`s`]})]}),o.length===0?(0,w.jsx)(`div`,{className:`text-center py-16 text-gray-400`,children:(0,w.jsx)(`p`,{className:`font-medium`,children:`No slides match the current filter.`})}):(0,w.jsx)(`div`,{className:`space-y-3`,children:o.map(e=>{let n=t[e.sectionId];return(0,w.jsxs)(`div`,{className:`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow`,children:[(0,w.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,w.jsx)(`span`,{className:`text-aws-orange text-xs font-bold uppercase tracking-wider shrink-0`,children:n?.title?.replace(/^\d+\.\s*/,``)||`Unknown`}),(0,w.jsx)(`span`,{className:`text-gray-300 text-xs`,children:`›`}),(0,w.jsx)(`span`,{className:`text-aws-navy text-sm font-semibold truncate`,children:e.title})]}),(0,w.jsxs)(`div`,{className:`flex gap-1 shrink-0 ml-3`,children:[fe.test(e.content)&&(0,w.jsx)(`span`,{className:`bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full font-medium`,children:`Limits`}),pe.test(e.content)&&(0,w.jsx)(`span`,{className:`bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium`,children:`Tip`})]})]}),(0,w.jsx)(`div`,{className:`px-4 py-3 text-sm text-gray-700 bg-white max-h-56 overflow-y-auto space-y-0.5 scrollbar-thin`,children:ae(e.content)})]},e.id)})})]})}var me=`aws-soa-c03-progress`,he=[{id:`browse`,label:`Browse`,icon:(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 6h16M4 10h16M4 14h16M4 18h16`})})},{id:`flashcards`,label:`Flashcards`,icon:(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10`})})},{id:`quiz`,label:`Quiz`,icon:(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01`})})},{id:`search`,label:`Search`,icon:(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z`})})},{id:`quickref`,label:`Quick Ref`,icon:(0,w.jsx)(`svg`,{className:`w-4 h-4`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M13 10V3L4 14h7v7l9-11h-7z`})})}];function ge(){try{let e=localStorage.getItem(me);if(e)return new Set(JSON.parse(e))}catch{}return new Set}function _e(e){try{localStorage.setItem(me,JSON.stringify([...e]))}catch{}}function ve(){let[e,t]=(0,_.useState)(`browse`),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(()=>ge());(0,_.useEffect)(()=>{_e(c)},[c]);let u=(0,_.useCallback)(e=>{l(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),d=(0,_.useCallback)((e,n=null)=>{r(e),a(n),t(`browse`)},[]),f=(0,_.useCallback)((e,n)=>{r(e),a(n),t(`browse`)},[]),p=e=>{t(e),e!==`browse`&&a(null)},m=c.size,h=S.length,g=h>0?Math.round(m/h*100):0;return(0,w.jsxs)(`div`,{className:`flex h-screen bg-gray-50 overflow-hidden`,children:[e===`browse`&&(0,w.jsx)(te,{sections:x,progress:c,activeSection:n,activeSlide:i,onSectionSelect:d,collapsed:o,onToggle:()=>s(e=>!e)}),(0,w.jsxs)(`div`,{className:`flex flex-col flex-1 min-w-0 overflow-hidden`,children:[(0,w.jsx)(`header`,{className:`bg-aws-navy text-white shrink-0 shadow-md z-10`,children:(0,w.jsxs)(`div`,{className:`flex items-center gap-4 px-4 py-2.5`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2 mr-4 shrink-0`,children:[(0,w.jsx)(`div`,{className:`w-7 h-7 bg-aws-orange rounded-md flex items-center justify-center`,children:(0,w.jsx)(`svg`,{className:`w-4 h-4 text-white`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,w.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18`})})}),(0,w.jsxs)(`div`,{className:`hidden sm:block`,children:[(0,w.jsx)(`div`,{className:`text-xs font-bold text-aws-orange leading-none`,children:`AWS SOA-C03`}),(0,w.jsx)(`div`,{className:`text-xs text-gray-400 leading-none`,children:`Exam Reviewer`})]})]}),(0,w.jsx)(`nav`,{className:`flex items-center gap-1 flex-1`,children:he.map(t=>(0,w.jsxs)(`button`,{onClick:()=>p(t.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${e===t.id?`bg-aws-orange text-white`:`text-gray-300 hover:bg-aws-lightnavy hover:text-white`}`,children:[t.icon,(0,w.jsx)(`span`,{className:`hidden md:inline`,children:t.label})]},t.id))}),(0,w.jsxs)(`div`,{className:`shrink-0 flex items-center gap-2`,children:[(0,w.jsxs)(`div`,{className:`hidden sm:block text-right`,children:[(0,w.jsx)(`div`,{className:`text-xs text-gray-400 leading-none`,children:`Progress`}),(0,w.jsxs)(`div`,{className:`text-xs font-bold text-aws-orange leading-none mt-0.5`,children:[m,`/`,h]})]}),(0,w.jsx)(`div`,{className:`w-16 bg-aws-lightnavy rounded-full h-2`,children:(0,w.jsx)(`div`,{className:`h-2 rounded-full transition-all duration-500`,style:{width:`${g}%`,backgroundColor:g===100?`#22c55e`:`#FF9900`}})}),(0,w.jsxs)(`span`,{className:`text-xs text-gray-300 w-8 text-right`,children:[g,`%`]})]})]})}),(0,w.jsxs)(`main`,{className:`flex-1 overflow-y-auto`,children:[e===`browse`&&(0,w.jsx)(se,{sections:x,activeSection:n,highlightedSlide:i,progress:c,onToggleStudied:u}),e===`flashcards`&&(0,w.jsx)(ce,{allSlides:S,sections:x,progress:c,onToggleStudied:u}),e===`quiz`&&(0,w.jsx)(E,{sections:x}),e===`search`&&(0,w.jsx)(de,{allSlides:S,sections:x,onNavigateTo:f}),e===`quickref`&&(0,w.jsx)(k,{allSlides:S,sections:x})]})]})]})}v.createRoot(document.getElementById(`root`)).render((0,w.jsx)(_.StrictMode,{children:(0,w.jsx)(ve,{})}));