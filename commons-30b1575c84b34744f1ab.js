/*! For license information please see commons-30b1575c84b34744f1ab.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},9712:function(e,t){},4097:function(e,t,n){"use strict";n.d(t,{Z:function(){return Qt}});var r=n(7294),o=n(1883),a=n(4184),s=n.n(a);n(4391);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n(1143);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(n,o){var a,s=n,d=s[c(o)],f=s[o],p=l(s,[c(o),o].map(u)),v=t[o],m=function(e,t,n){var o=(0,r.useRef)(void 0!==e),a=(0,r.useState)(t),s=a[0],i=a[1],l=void 0!==e,c=o.current;return o.current=l,!l&&c&&s!==t&&i(t),[l?e:s,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(f,d,e[v]),h=m[0],g=m[1];return i({},p,((a={})[o]=h,a[v]=g,a))}),e)}n(9712);var f=Function.prototype.bind.call(Function.prototype.call,[].slice);function p(e,t){return f(e.querySelectorAll(t))}var v=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var m=function(e,t){return(0,r.useMemo)((function(){return function(e,t){var n=v(e),r=v(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};const h=r.createContext(null);h.displayName="NavContext";var g=h;const x=(e,t=null)=>null!=e?String(e):t||null;var b=r.createContext(null);var E=r.createContext(null);function y(e){return`data-rr-ui-${e}`}var C=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function w(e){var t=C(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var N=n(5893);const k=["as","disabled"];function O({tagName:e,disabled:t,href:n,target:r,rel:o,role:a,onClick:s,tabIndex:i=0,type:l}){e||(e=null!=n||null!=r||null!=o?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=r=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(n))&&r.preventDefault(),t?r.stopPropagation():null==s||s(r)};return"a"===e&&(n||(n="#"),t&&(n=void 0)),[{role:null!=a?a:"button",disabled:void 0,tabIndex:t?void 0:i,href:n,target:"a"===e?r:void 0,"aria-disabled":t||void 0,rel:"a"===e?o:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const j=r.forwardRef(((e,t)=>{let{as:n,disabled:r}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,k);const[a,{tagName:s}]=O(Object.assign({tagName:n,disabled:r},o));return(0,N.jsx)(s,Object.assign({},o,a,{ref:t}))}));j.displayName="Button";var R=j;const S=["as","active","eventKey"];function T({key:e,onClick:t,active:n,id:o,role:a,disabled:s}){const i=(0,r.useContext)(b),l=(0,r.useContext)(g),c=(0,r.useContext)(E);let u=n;const d={role:a};if(l){a||"tablist"!==l.role||(d.role="tab");const t=l.getControllerId(null!=e?e:null),r=l.getControlledId(null!=e?e:null);d[y("event-key")]=e,d.id=t||o,u=null==n&&null!=e?l.activeKey===e:n,!u&&(null!=c&&c.unmountOnExit||null!=c&&c.mountOnEnter)||(d["aria-controls"]=r)}return"tab"===d.role&&(d["aria-selected"]=u,u||(d.tabIndex=-1),s&&(d.tabIndex=-1,d["aria-disabled"]=!0)),d.onClick=w((n=>{s||(null==t||t(n),null!=e&&i&&!n.isPropagationStopped()&&i(e,n))})),[d,{isActive:u}]}const P=r.forwardRef(((e,t)=>{let{as:n=R,active:r,eventKey:o}=e,a=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,S);const[s,i]=T(Object.assign({key:x(o,a.href),active:r},a));return s[y("active")]=i.isActive,(0,N.jsx)(n,Object.assign({},a,s,{ref:t}))}));P.displayName="NavItem";var L=P;const D=["as","onSelect","activeKey","role","onKeyDown"];const $=()=>{},M=y("event-key"),A=r.forwardRef(((e,t)=>{let{as:n="div",onSelect:o,activeKey:a,role:s,onKeyDown:i}=e,l=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,D);const c=(0,r.useReducer)((function(e){return!e}),!1)[1],u=(0,r.useRef)(!1),d=(0,r.useContext)(b),f=(0,r.useContext)(E);let v,h;f&&(s=s||"tablist",a=f.activeKey,v=f.getControlledId,h=f.getControllerId);const y=(0,r.useRef)(null),C=e=>{const t=y.current;if(!t)return null;const n=p(t,`[${M}]:not([aria-disabled=true])`),r=t.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const o=n.indexOf(r);if(-1===o)return null;let a=o+e;return a>=n.length&&(a=0),a<0&&(a=n.length-1),n[a]},w=(e,t)=>{null!=e&&(null==o||o(e,t),null==d||d(e,t))};(0,r.useEffect)((()=>{if(y.current&&u.current){const e=y.current.querySelector(`[${M}][aria-selected=true]`);null==e||e.focus()}u.current=!1}));const k=m(t,y);return(0,N.jsx)(b.Provider,{value:w,children:(0,N.jsx)(g.Provider,{value:{role:s,activeKey:x(a),getControlledId:v||$,getControllerId:h||$},children:(0,N.jsx)(n,Object.assign({},l,{onKeyDown:e=>{if(null==i||i(e),!f)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}var n;t&&(e.preventDefault(),w(t.dataset[(n="EventKey",`rrUi${n}`)]||null,e),u.current=!0,c())},ref:k,role:s}))})})}));A.displayName="Nav";var F=Object.assign(A,{Item:L});const B=["xxl","xl","lg","md","sm","xs"],K=r.createContext({prefixes:{},breakpoints:B,minBreakpoint:"xs"}),{Consumer:I,Provider:_}=K;function H(e,t){const{prefixes:n}=(0,r.useContext)(K);return e||n[t]||t}const W=r.createContext(null);W.displayName="NavbarContext";var U=W;const V=r.createContext(null);V.displayName="CardHeaderContext";var q=V,X=/-(.)/g;const Z=e=>{return e[0].toUpperCase()+(t=e,t.replace(X,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function Y(e,{displayName:t=Z(e),Component:n,defaultProps:o}={}){const a=r.forwardRef((({className:t,bsPrefix:r,as:o=n||"div",...a},i)=>{const l=H(r,e);return(0,N.jsx)(o,{ref:i,className:s()(t,l),...a})}));return a.defaultProps=o,a.displayName=t,a}var G=Y("nav-item");var z=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,J="undefined"!=typeof document||z?r.useLayoutEffect:r.useEffect;new WeakMap;const Q=["onKeyDown"];const ee=r.forwardRef(((e,t)=>{let{onKeyDown:n}=e,r=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Q);const[o]=O(Object.assign({tagName:"a"},r)),a=w((e=>{o.onKeyDown(e),null==n||n(e)}));return(s=r.href)&&"#"!==s.trim()&&"button"!==r.role?(0,N.jsx)("a",Object.assign({ref:t},r,{onKeyDown:n})):(0,N.jsx)("a",Object.assign({ref:t},r,o,{onKeyDown:a}));var s}));ee.displayName="Anchor";var te=ee;const ne=r.forwardRef((({bsPrefix:e,className:t,as:n=te,active:r,eventKey:o,...a},i)=>{e=H(e,"nav-link");const[l,c]=T({key:x(o,a.href),active:r,...a});return(0,N.jsx)(n,{...a,...l,ref:i,className:s()(t,e,a.disabled&&"disabled",c.isActive&&"active")})}));ne.displayName="NavLink",ne.defaultProps={disabled:!1};var re=ne;const oe=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:o,variant:a,fill:i,justify:l,navbar:c,navbarScroll:u,className:f,activeKey:p,...v}=d(e,{activeKey:"onSelect"}),m=H(o,"nav");let h,g,x=!1;const b=(0,r.useContext)(U),E=(0,r.useContext)(q);return b?(h=b.bsPrefix,x=null==c||c):E&&({cardHeaderBsPrefix:g}=E),(0,N.jsx)(F,{as:n,ref:t,activeKey:p,className:s()(f,{[m]:!x,[`${h}-nav`]:x,[`${h}-nav-scroll`]:x&&u,[`${g}-${a}`]:!!g,[`${m}-${a}`]:!!a,[`${m}-fill`]:i,[`${m}-justified`]:l}),...v})}));oe.displayName="Nav",oe.defaultProps={justify:!1,fill:!1};var ae=Object.assign(oe,{Item:G,Link:re});const se=r.forwardRef((({bsPrefix:e,className:t,as:n,...r},o)=>{e=H(e,"navbar-brand");const a=n||(r.href?"a":"span");return(0,N.jsx)(a,{...r,ref:o,className:s()(t,e)})}));se.displayName="NavbarBrand";var ie=se;function le(e){return e&&e.ownerDocument||document}function ce(e,t){return function(e){var t=le(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var ue=/([A-Z])/g;var de=/^ms-/;function fe(e){return function(e){return e.replace(ue,"-$1").toLowerCase()}(e).replace(de,"-ms-")}var pe=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var ve=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(fe(t))||ce(e).getPropertyValue(fe(t));Object.keys(t).forEach((function(o){var a=t[o];a||0===a?!function(e){return!(!e||!pe.test(e))}(o)?n+=fe(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(fe(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},me=n(4578),he=n(3935),ge=!1,xe=r.createContext(null),be="unmounted",Ee="exited",ye="entering",Ce="entered",we="exiting",Ne=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=Ee,r.appearStatus=ye):o=Ce:o=t.unmountOnExit||t.mountOnEnter?be:Ee,r.state={status:o},r.nextCallback=null,r}(0,me.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===be?{status:Ee}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==ye&&n!==Ce&&(t=ye):n!==ye&&n!==Ce||(t=we)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===ye){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:he.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Ee&&this.setState({status:be})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[he.findDOMNode(this),r],a=o[0],s=o[1],i=this.getTimeouts(),l=r?i.appear:i.enter;!e&&!n||ge?this.safeSetState({status:Ce},(function(){t.props.onEntered(a)})):(this.props.onEnter(a,s),this.safeSetState({status:ye},(function(){t.props.onEntering(a,s),t.onTransitionEnd(l,(function(){t.safeSetState({status:Ce},(function(){t.props.onEntered(a,s)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:he.findDOMNode(this);t&&!ge?(this.props.onExit(r),this.safeSetState({status:we},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Ee},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Ee},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:he.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],s=o[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===be)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,l(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(xe.Provider,{value:null},"function"==typeof n?n(e,o):r.cloneElement(r.Children.only(n),o))},t}(r.Component);function ke(){}Ne.contextType=xe,Ne.propTypes={},Ne.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ke,onEntering:ke,onEntered:ke,onExit:ke,onExiting:ke,onExited:ke},Ne.UNMOUNTED=be,Ne.EXITED=Ee,Ne.ENTERING=ye,Ne.ENTERED=Ce,Ne.EXITING=we;var Oe=Ne,je=!("undefined"==typeof window||!window.document||!window.document.createElement),Re=!1,Se=!1;try{var Te={get passive(){return Re=!0},get once(){return Se=Re=!0}};je&&(window.addEventListener("test",Te,Te),window.removeEventListener("test",Te,!0))}catch(en){}var Pe=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!Se){var o=r.once,a=r.capture,s=n;!Se&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,a),n.call(this,r)},n.__once=s),e.addEventListener(t,s,Re?r:a)}e.addEventListener(t,n,r)};var Le=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};var De=function(e,t,n,r){return Pe(e,t,n,r),function(){Le(e,t,n,r)}};function $e(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),a=De(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function Me(e,t,n,r){var o,a;null==n&&(o=ve(e,"transitionDuration")||"",a=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*a||0);var s=$e(e,n,r),i=De(e,"transitionend",t);return function(){s(),i()}}function Ae(e,t){const n=ve(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function Fe(e,t){const n=Ae(e,"transitionDuration"),r=Ae(e,"transitionDelay"),o=Me(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var Be=function(...e){return e.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}}),null)};function Ke(e){e.offsetHeight}var Ie=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,onExited:s,addEndListener:i,children:l,childRef:c,...u},d)=>{const f=(0,r.useRef)(null),p=m(f,c),v=e=>{var t;p((t=e)&&"setState"in t?he.findDOMNode(t):null!=t?t:null)},h=e=>t=>{e&&f.current&&e(f.current,t)},g=(0,r.useCallback)(h(e),[e]),x=(0,r.useCallback)(h(t),[t]),b=(0,r.useCallback)(h(n),[n]),E=(0,r.useCallback)(h(o),[o]),y=(0,r.useCallback)(h(a),[a]),C=(0,r.useCallback)(h(s),[s]),w=(0,r.useCallback)(h(i),[i]);return(0,N.jsx)(Oe,{ref:d,...u,onEnter:g,onEntered:b,onEntering:x,onExit:E,onExited:C,onExiting:y,addEndListener:w,nodeRef:f,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:v}):r.cloneElement(l,{ref:v})})}));const _e={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function He(e,t){const n=t[`offset${e[0].toUpperCase()}${e.slice(1)}`],r=_e[e];return n+parseInt(ve(t,r[0]),10)+parseInt(ve(t,r[1]),10)}const We={[Ee]:"collapse",[we]:"collapsing",[ye]:"collapsing",[Ce]:"collapse show"},Ue={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:He},Ve=r.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:a,className:i,children:l,dimension:c="height",getDimensionValue:u=He,...d},f)=>{const p="function"==typeof c?c():c,v=(0,r.useMemo)((()=>Be((e=>{e.style[p]="0"}),e)),[p,e]),m=(0,r.useMemo)((()=>Be((e=>{const t=`scroll${p[0].toUpperCase()}${p.slice(1)}`;e.style[p]=`${e[t]}px`}),t)),[p,t]),h=(0,r.useMemo)((()=>Be((e=>{e.style[p]=null}),n)),[p,n]),g=(0,r.useMemo)((()=>Be((e=>{e.style[p]=`${u(p,e)}px`,Ke(e)}),o)),[o,u,p]),x=(0,r.useMemo)((()=>Be((e=>{e.style[p]=null}),a)),[p,a]);return(0,N.jsx)(Ie,{ref:f,addEndListener:Fe,...d,"aria-expanded":d.role?d.in:null,onEnter:v,onEntering:m,onEntered:h,onExit:g,onExiting:x,childRef:l.ref,children:(e,t)=>r.cloneElement(l,{...t,className:s()(i,l.props.className,We[e],"width"===p&&"collapse-horizontal")})})}));Ve.defaultProps=Ue;var qe=Ve;const Xe=r.forwardRef((({children:e,bsPrefix:t,...n},o)=>{t=H(t,"navbar-collapse");const a=(0,r.useContext)(U);return(0,N.jsx)(qe,{in:!(!a||!a.expanded),...n,children:(0,N.jsx)("div",{ref:o,className:t,children:e})})}));Xe.displayName="NavbarCollapse";var Ze=Xe;const Ye=r.forwardRef((({bsPrefix:e,className:t,children:n,label:o,as:a="button",onClick:i,...l},c)=>{e=H(e,"navbar-toggler");const{onToggle:u,expanded:d}=(0,r.useContext)(U)||{},f=w((e=>{i&&i(e),u&&u()}));return"button"===a&&(l.type="button"),(0,N.jsx)(a,{...l,ref:c,onClick:f,"aria-label":o,className:s()(t,e,!d&&"collapsed"),children:n||(0,N.jsx)("span",{className:`${e}-icon`})})}));Ye.displayName="NavbarToggle",Ye.defaultProps={label:"Toggle navigation"};var Ge=Ye,ze=new WeakMap,Je=function(e,t){if(e&&t){var n=ze.get(t)||new Map;ze.set(t,n);var r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r}};function Qe(e,t){void 0===t&&(t="undefined"==typeof window?void 0:window);var n=Je(e,t),o=(0,r.useState)((function(){return!!n&&n.matches})),a=o[0],s=o[1];return J((function(){var n=Je(e,t);if(!n)return s(!1);var r=ze.get(t),o=function(){s(n.matches)};return n.refCount++,n.addListener(o),o(),function(){n.removeListener(o),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}}),[e]),a}var et=function(e){var t=Object.keys(e);function n(e,t){return e===t?t:e?e+" and "+t:t}function o(n){var r=function(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}(n),o=e[r];return"(max-width: "+(o="number"==typeof o?o-.2+"px":"calc("+o+" - 0.2px)")+")"}return function(t,a,s){var i,l;"object"==typeof t?(i=t,s=a,a=!0):((l={})[t]=a=a||!0,i=l);var c=(0,r.useMemo)((function(){return Object.entries(i).reduce((function(t,r){var a,s=r[0],i=r[1];return"up"!==i&&!0!==i||(t=n(t,("number"==typeof(a=e[s])&&(a+="px"),"(min-width: "+a+")"))),"down"!==i&&!0!==i||(t=n(t,o(s))),t}),"")}),[JSON.stringify(i)]);return Qe(c,s)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function tt(e){void 0===e&&(e=le());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(en){return e.body}}function nt(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function rt(e){var t,n,o=(t=e,(n=(0,r.useRef)(t)).current=t,n);(0,r.useEffect)((function(){return function(){return o.current()}}),[])}const ot=y("modal-open");var at=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(ve(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(ot,""),ve(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(ot),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const st=(0,r.createContext)(je?window:void 0);st.Provider;function it(){return(0,r.useContext)(st)}const lt=(e,t)=>je?null==e?(t||le()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;const ct=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let ut;function dt(e){const t=it(),n=e||function(e){return ut||(ut=new at({ownerDocument:null==e?void 0:e.document})),ut}(t),o=(0,r.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:()=>n.add(o.current),remove:()=>n.remove(o.current),isTopModal:()=>n.isTopModal(o.current),setDialogRef:(0,r.useCallback)((e=>{o.current.dialog=e}),[]),setBackdropRef:(0,r.useCallback)((e=>{o.current.backdrop=e}),[])})}const ft=(0,r.forwardRef)(((e,t)=>{let{show:n=!1,role:o="dialog",className:a,style:s,children:i,backdrop:l=!0,keyboard:c=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,backdropTransition:p,autoFocus:v=!0,enforceFocus:m=!0,restoreFocus:h=!0,restoreFocusOptions:g,renderDialog:x,renderBackdrop:b=(e=>(0,N.jsx)("div",Object.assign({},e))),manager:E,container:y,onShow:C,onHide:k=(()=>{}),onExit:O,onExited:j,onExiting:R,onEnter:S,onEntering:T,onEntered:P}=e,L=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,ct);const D=function(e,t){const n=it(),[o,a]=(0,r.useState)((()=>lt(e,null==n?void 0:n.document)));if(!o){const t=lt(e);t&&a(t)}return(0,r.useEffect)((()=>{t&&o&&t(o)}),[t,o]),(0,r.useEffect)((()=>{const t=lt(e);t!==o&&a(t)}),[e,o]),o}(y),$=dt(E),M=function(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),A=function(e){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){t.current=e})),t.current}(n),[F,B]=(0,r.useState)(!n),K=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>$),[$]),je&&!A&&n&&(K.current=tt()),f||n||F?n&&F&&B(!1):B(!0);const I=w((()=>{if($.add(),q.current=De(document,"keydown",U),V.current=De(document,"focus",(()=>setTimeout(H)),!0),C&&C(),v){const e=tt(document);$.dialog&&e&&!nt($.dialog,e)&&(K.current=e,$.dialog.focus())}})),_=w((()=>{var e;($.remove(),null==q.current||q.current(),null==V.current||V.current(),h)&&(null==(e=K.current)||null==e.focus||e.focus(g),K.current=null)}));(0,r.useEffect)((()=>{n&&D&&I()}),[n,D,I]),(0,r.useEffect)((()=>{F&&_()}),[F,_]),rt((()=>{_()}));const H=w((()=>{if(!m||!M()||!$.isTopModal())return;const e=tt();$.dialog&&e&&!nt($.dialog,e)&&$.dialog.focus()})),W=w((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===l&&k())})),U=w((e=>{c&&27===e.keyCode&&$.isTopModal()&&(null==d||d(e),e.defaultPrevented||k())})),V=(0,r.useRef)(),q=(0,r.useRef)(),X=(...e)=>{B(!0),null==j||j(...e)},Z=f;if(!D||!(n||Z&&!F))return null;const Y=Object.assign({role:o,ref:$.setDialogRef,"aria-modal":"dialog"===o||void 0},L,{style:s,className:a,tabIndex:-1});let G=x?x(Y):(0,N.jsx)("div",Object.assign({},Y,{children:r.cloneElement(i,{role:"document"})}));Z&&(G=(0,N.jsx)(Z,{appear:!0,unmountOnExit:!0,in:!!n,onExit:O,onExiting:R,onExited:X,onEnter:S,onEntering:T,onEntered:P,children:G}));let z=null;if(l){const e=p;z=b({ref:$.setBackdropRef,onClick:W}),e&&(z=(0,N.jsx)(e,{appear:!0,in:!!n,children:z}))}return(0,N.jsx)(N.Fragment,{children:he.createPortal((0,N.jsxs)(N.Fragment,{children:[z,G]}),D)})}));ft.displayName="Modal";var pt=Object.assign(ft,{Manager:at});const vt={[ye]:"show",[Ce]:"show"},mt=r.forwardRef((({className:e,children:t,transitionClasses:n={},...o},a)=>{const i=(0,r.useCallback)(((e,t)=>{Ke(e),null==o.onEnter||o.onEnter(e,t)}),[o]);return(0,N.jsx)(Ie,{ref:a,addEndListener:Fe,...o,onEnter:i,childRef:t.ref,children:(o,a)=>r.cloneElement(t,{...a,className:s()("fade",e,t.props.className,vt[o],n[o])})})}));mt.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},mt.displayName="Fade";var ht=mt,gt=Y("offcanvas-body");const xt={[ye]:"show",[Ce]:"show"},bt=r.forwardRef((({bsPrefix:e,className:t,children:n,...o},a)=>(e=H(e,"offcanvas"),(0,N.jsx)(Ie,{ref:a,addEndListener:Fe,...o,childRef:n.ref,children:(o,a)=>r.cloneElement(n,{...a,className:s()(t,n.props.className,(o===ye||o===we)&&`${e}-toggling`,xt[o])})}))));bt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},bt.displayName="OffcanvasToggling";var Et=bt;var yt=r.createContext({onHide(){}}),Ct=n(5697),wt=n.n(Ct);const Nt={"aria-label":wt().string,onClick:wt().func,variant:wt().oneOf(["white"])},kt=r.forwardRef((({className:e,variant:t,...n},r)=>(0,N.jsx)("button",{ref:r,type:"button",className:s()("btn-close",t&&`btn-close-${t}`,e),...n})));kt.displayName="CloseButton",kt.propTypes=Nt,kt.defaultProps={"aria-label":"Close"};var Ot=kt;const jt=r.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:o,children:a,...s},i)=>{const l=(0,r.useContext)(yt),c=w((()=>{null==l||l.onHide(),null==o||o()}));return(0,N.jsxs)("div",{ref:i,...s,children:[a,n&&(0,N.jsx)(Ot,{"aria-label":e,variant:t,onClick:c})]})}));jt.defaultProps={closeLabel:"Close",closeButton:!1};var Rt=jt;const St=r.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=H(e,"offcanvas-header"),(0,N.jsx)(Rt,{ref:r,...n,className:s()(t,e)}))));St.displayName="OffcanvasHeader",St.defaultProps={closeLabel:"Close",closeButton:!1};var Tt=St;var Pt,Lt=Y("offcanvas-title",{Component:(Pt="h5",r.forwardRef(((e,t)=>(0,N.jsx)("div",{...e,ref:t,className:s()(e.className,Pt)}))))});function Dt(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const $t=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Mt=".sticky-top",At=".navbar-toggler";class Ft extends at{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,ve(t,{[e]:`${parseFloat(ve(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],ve(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();if(function(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}(t,"modal-open"),!e.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";p(t,$t).forEach((t=>this.adjustAndStore(n,t,e.scrollBarWidth))),p(t,Mt).forEach((t=>this.adjustAndStore(r,t,-e.scrollBarWidth))),p(t,At).forEach((t=>this.adjustAndStore(r,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();!function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=Dt(e.className,t):e.setAttribute("class",Dt(e.className&&e.className.baseVal||"",t))}(t,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";p(t,$t).forEach((e=>this.restore(n,e))),p(t,Mt).forEach((e=>this.restore(r,e))),p(t,At).forEach((e=>this.restore(r,e)))}}let Bt;var Kt=Ft;function It(e){return(0,N.jsx)(Et,{...e})}function _t(e){return(0,N.jsx)(ht,{...e})}const Ht=r.forwardRef((({bsPrefix:e,className:t,children:n,"aria-labelledby":o,placement:a,responsive:i,show:l,backdrop:c,keyboard:u,scroll:d,onEscapeKeyDown:f,onShow:p,onHide:v,container:m,autoFocus:h,enforceFocus:g,restoreFocus:x,restoreFocusOptions:b,onEntered:E,onExit:y,onExiting:C,onEnter:k,onEntering:O,onExited:j,backdropClassName:R,manager:S,renderStaticNode:T,...P},L)=>{const D=(0,r.useRef)();e=H(e,"offcanvas");const{onToggle:$}=(0,r.useContext)(U)||{},[M,A]=(0,r.useState)(!1),F=et(i||"xs","up");(0,r.useEffect)((()=>{A(i?l&&!F:l)}),[l,i,F]);const B=w((()=>{null==$||$(),null==v||v()})),K=(0,r.useMemo)((()=>({onHide:B})),[B]);const I=(0,r.useCallback)((t=>(0,N.jsx)("div",{...t,className:s()(`${e}-backdrop`,R)})),[R,e]),_=r=>(0,N.jsx)("div",{...r,...P,className:s()(t,i?`${e}-${i}`:e,`${e}-${a}`),"aria-labelledby":o,children:n});return(0,N.jsxs)(N.Fragment,{children:[!M&&(i||T)&&_({}),(0,N.jsx)(yt.Provider,{value:K,children:(0,N.jsx)(pt,{show:M,ref:L,backdrop:c,container:m,keyboard:u,autoFocus:h,enforceFocus:g&&!d,restoreFocus:x,restoreFocusOptions:b,onEscapeKeyDown:f,onShow:p,onHide:B,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==k||k(e,...t)},onEntering:O,onEntered:E,onExit:y,onExiting:C,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==j||j(...t)},manager:S||(d?(D.current||(D.current=new Kt({handleContainerOverflow:!1})),D.current):function(e){return Bt||(Bt=new Ft(e)),Bt}()),transition:It,backdropTransition:_t,renderBackdrop:I,renderDialog:_})})]})}));Ht.displayName="Offcanvas",Ht.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var Wt=Object.assign(Ht,{Body:gt,Header:Tt,Title:Lt});const Ut=r.forwardRef(((e,t)=>{const n=(0,r.useContext)(U);return(0,N.jsx)(Wt,{ref:t,show:!(null==n||!n.expanded),...e,renderStaticNode:!0})}));Ut.displayName="NavbarOffcanvas";var Vt=Ut;const qt=Y("navbar-text",{Component:"span"}),Xt=r.forwardRef(((e,t)=>{const{bsPrefix:n,expand:o,variant:a,bg:i,fixed:l,sticky:c,className:u,as:f="nav",expanded:p,onToggle:v,onSelect:m,collapseOnSelect:h,...g}=d(e,{expanded:"onToggle"}),x=H(n,"navbar"),E=(0,r.useCallback)(((...e)=>{null==m||m(...e),h&&p&&(null==v||v(!1))}),[m,h,p,v]);void 0===g.role&&"nav"!==f&&(g.role="navigation");let y=`${x}-expand`;"string"==typeof o&&(y=`${y}-${o}`);const C=(0,r.useMemo)((()=>({onToggle:()=>null==v?void 0:v(!p),bsPrefix:x,expanded:!!p,expand:o})),[x,p,o,v]);return(0,N.jsx)(U.Provider,{value:C,children:(0,N.jsx)(b.Provider,{value:E,children:(0,N.jsx)(f,{ref:t,...g,className:s()(u,x,o&&y,a&&`${x}-${a}`,i&&`bg-${i}`,c&&`sticky-${c}`,l&&`fixed-${l}`)})})})}));Xt.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Xt.displayName="Navbar";var Zt=Object.assign(Xt,{Brand:ie,Collapse:Ze,Offcanvas:Vt,Text:qt,Toggle:Ge});const Yt=r.forwardRef((({bsPrefix:e,fluid:t,as:n="div",className:r,...o},a)=>{const i=H(e,"container"),l="string"==typeof t?`-${t}`:"-fluid";return(0,N.jsx)(n,{ref:a,...o,className:s()(r,t?`${i}${l}`:i)})}));Yt.displayName="Container",Yt.defaultProps={fluid:!1};var Gt=Yt;var zt=()=>{var e;const t=null===(e=(0,o.useStaticQuery)("426988268").site.siteMetadata)||void 0===e?void 0:e.title;return r.createElement(Zt,{bg:"light",expand:"md",className:"mb-5"},r.createElement(Gt,null,r.createElement(o.Link,{to:"/",className:"navbar-brand"},t),r.createElement(Zt.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.createElement(Zt.Collapse,{id:"responsive-navbar-nav"},r.createElement(ae,{className:"ms-auto"},r.createElement(ae.Item,null,r.createElement(o.Link,{to:"/about",className:"nav-link"},"About"))))))};var Jt=()=>r.createElement("footer",{bg:"light",class:"footer",expand:"lg",className:"mb-5"},r.createElement("div",{class:"container"},r.createElement("div",{class:"text-muted"},"© ",(new Date).getFullYear()," hirame's memopad"))),Qt=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(zt,null),r.createElement(Gt,null,t),r.createElement(Jt,null))}},4391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=null;return t.forEach((function(e){if(null==o){var t=e.apply(void 0,n);null!=t&&(o=t)}})),o}return(0,a.default)(r)};var r,o=n(2613),a=(r=o)&&r.__esModule?r:{default:r};e.exports=t.default},2613:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,o,a,s){var i=o||"<<anonymous>>",l=s||r;if(null==n[r])return t?new Error("Required "+a+" `"+l+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[n,r,i,a,l].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default}}]);
//# sourceMappingURL=commons-30b1575c84b34744f1ab.js.map