(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8471)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return s},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return c},ACTION_FAST_REFRESH:function(){return l},ACTION_SERVER_ACTION:function(){return u}});let i="refresh",o="navigate",s="restore",a="server-patch",c="prefetch",l="fast-refresh",u="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let r=n(8754),i=r._(n(7294)),o=n(4532),s=n(3353),a=n(1410),c=n(9064),l=n(370),u=n(9955),d=n(4224),h=n(508),f=n(1516),_=n(4266),m=n(3991),p=new Set;function v(e,t,n,r,i,o){if(!o&&!(0,s.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,o=t+"%"+n+"%"+i;if(p.has(o))return;p.add(o)}let a=o?e.prefetch(t,i):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function x(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=i.default.forwardRef(function(e,t){let n,r;let{href:a,as:p,children:g,prefetch:j=null,passHref:y,replace:b,shallow:N,scroll:C,locale:w,onClick:M,onMouseEnter:E,onTouchStart:O,legacyBehavior:k=!1,...P}=e;n=g,k&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let R=!1!==j,T=null===j?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,L=i.default.useContext(u.RouterContext),S=i.default.useContext(d.AppRouterContext),I=null!=L?L:S,F=!L,{href:A,as:z}=i.default.useMemo(()=>{if(!L){let e=x(a);return{href:e,as:p?x(p):e}}let[e,t]=(0,o.resolveHref)(L,a,!0);return{href:e,as:p?(0,o.resolveHref)(L,p):t||e}},[L,a,p]),H=i.default.useRef(A),V=i.default.useRef(z);k&&(r=i.default.Children.only(n));let D=k?r&&"object"==typeof r&&r.ref:t,[B,q,U]=(0,h.useIntersection)({rootMargin:"200px"}),G=i.default.useCallback(e=>{(V.current!==z||H.current!==A)&&(U(),V.current=z,H.current=A),B(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[z,D,A,U,B]);i.default.useEffect(()=>{I&&q&&R&&v(I,A,z,{locale:w},{kind:T},F)},[z,A,q,w,R,null==L?void 0:L.locale,I,F,T]);let W={ref:G,onClick(e){k||"function"!=typeof M||M(e),k&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,o,a,c,l,u,d){let{nodeName:h}=e.currentTarget,f="A"===h.toUpperCase();if(f&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(n)))return;e.preventDefault();let _=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!d})};u?i.default.startTransition(_):_()}(e,I,A,z,b,N,C,w,F,R)},onMouseEnter(e){k||"function"!=typeof E||E(e),k&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(R||!F)&&v(I,A,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:T},F)},onTouchStart(e){k||"function"!=typeof O||O(e),k&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(R||!F)&&v(I,A,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:T},F)}};if((0,c.isAbsoluteUrl)(z))W.href=z;else if(!k||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,f.getDomainLocale)(z,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);W.href=t||(0,_.addBasePath)((0,l.addLocale)(z,e,null==L?void 0:L.defaultLocale))}return k?i.default.cloneElement(r,W):i.default.createElement("a",{...P,...W},n)}),j=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let r=n(7294),i=n(29),o="function"==typeof IntersectionObserver,s=new Map,a=[];function c(e){let{rootRef:t,rootMargin:n,disabled:c}=e,l=c||!o,[u,d]=(0,r.useState)(!1),h=(0,r.useRef)(null),f=(0,r.useCallback)(e=>{h.current=e},[]);(0,r.useEffect)(()=>{if(o){if(l||u)return;let e=h.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:o,elements:i},a.push(n),s.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=(0,i.requestIdleCallback)(()=>d(!0));return()=>(0,i.cancelIdleCallback)(e)}},[l,n,t,u,h.current]);let _=(0,r.useCallback)(()=>{d(!1)},[]);return[f,u,_]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8471:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(7294),o=n(1664),s=n.n(o),a=n(1584),c=n.n(a),l=n(8193),u=n(8357);function d(e){return(0,u.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}let h=()=>{let[e,t]=(0,i.useState)(!1),[n,o]=(0,i.useState)(!1);return(0,r.jsx)("div",{children:(0,r.jsx)("header",{className:c().header,children:(0,r.jsx)("div",{className:c().container,children:(0,r.jsxs)("div",{className:c().header_main,children:[(0,r.jsx)("div",{className:c().logo,children:(0,r.jsx)(s(),{href:"/",children:(0,r.jsx)("img",{className:c().vlogo,src:"https://res.cloudinary.com/dqlx1vyne/image/upload/v1685606216/Vertecdigi/Vertechlogo_yneios.png",alt:""})})}),(0,r.jsx)("div",{className:c().open_nav_menu,onClick:()=>t(!e),children:(0,r.jsxs)("span",{children:[" ",(0,r.jsx)(l.qTj,{size:25})]})}),(0,r.jsx)("div",{className:e?"".concat(c().menu_overlay," ").concat(c().active):"".concat(c().menu_overlay),onClick:()=>t(!e)}),(0,r.jsxs)("nav",{className:e?"".concat(c().nav_menu," ").concat(c().open):"".concat(c().nav_menu),children:[(0,r.jsx)("div",{className:c().close_nav_menu,onClick:()=>t(!e),children:(0,r.jsx)(d,{size:20})}),(0,r.jsxs)("ul",{className:c().menu,children:[(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/",onClick:()=>t(!e),children:"Home"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/about",onClick:()=>t(!e),children:"About"})}),(0,r.jsxs)("li",{className:"".concat(c().menu_item," ").concat(c().menu_item_has_children),onClick:()=>{o(!n)},children:[(0,r.jsxs)(s(),{href:"/",children:["Products",(0,r.jsx)(l.i0B,{className:c().downarrow})]}),(0,r.jsxs)("ul",{className:n?"".concat(c().sub_menu," ").concat(c().active):"".concat(c().sub_menu),children:[(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/laptop",onClick:()=>t(!e),children:"Laptop"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/desktop",onClick:()=>t(!e),children:"Desktop"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/smartphones",onClick:()=>t(!e),children:"Smart Phones"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/network",onClick:()=>t(!e),children:"Network infrastructure"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/software",onClick:()=>t(!e),children:"Software Solutions"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/microphones",onClick:()=>t(!e),children:"Audio Video solutions"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/serverstorage",onClick:()=>t(!e),children:"Servers & Storage"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/printerscanners",onClick:()=>t(!e),children:"Printer & Scanners"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/accessories",onClick:()=>t(!e),children:"Accessories & peripherals"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/products/ups",onClick:()=>t(!e),children:"UPS"})})]})]}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/blogs",onClick:()=>t(!e),children:"Blog"})}),(0,r.jsx)("li",{className:c().menu_item,children:(0,r.jsx)(s(),{href:"/contact",onClick:()=>t(!e),children:"Contact Us"})})]})]})]})})})})};var f=n(2873),_=n.n(f);let m=()=>((0,i.useEffect)(()=>{!function(){var e,t,n,r,i,o;function s(e,t){this.anchorX=e,this.anchorY=t,this.x=Math.random()*(e-(e-550))+(e-550),this.y=Math.random()*(t-(t-550))+(t-550),this.vx=2*Math.random()-1,this.vy=2*Math.random()-1,this.energy=10*Math.random(),this.radius=Math.random(),this.siblings=[],this.brightness=1}function a(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function c(){e.width=window.innerWidth,e.height=window.innerHeight}o=0,n=1*Math.PI,r=[],e=document.querySelector("canvas"),c(),i={x:e.width/2,y:e.height/0},(t=e.getContext("2d"))||alert("Ooops! Your browser does not support canvas :'("),s.prototype.drawNode=function(){t.beginPath(),t.arc(this.x,this.y,2*this.radius+.5*this.siblings.length/100,0,n),t.fillStyle="#e6e4e480",t.fill()},s.prototype.drawConnections=function(){for(var e=0;e<this.siblings.length;e++)t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.siblings[e].x,this.siblings[e].y),t.lineWidth=1-a(this,this.siblings[e])/100,t.strokeStyle="#e6e4e480",t.stroke()},s.prototype.moveNode=function(){this.energy-=1,this.energy<1&&(this.energy=80*Math.random(),this.x-this.anchorX<-550?this.vx=2*Math.random():this.x-this.anchorX>550?this.vx=-2*Math.random():this.vx=4*Math.random()-2,this.y-this.anchorY<-550?this.vy=2*Math.random():this.y-this.anchorY>550?this.vy=-2*Math.random():this.vy=4*Math.random()-2),this.x+=this.vx*this.energy/100,this.y+=this.vy*this.energy/100},document.addEventListener("resize",c,!1),e.addEventListener("mousemove",function(e){i.x=e.clientX,i.y=e.clientY},!1),function(){t.clearRect(0,0,e.width,e.height),r=[];for(var n=50;n<e.width;n+=50)for(var i=50;i<e.height;i+=50)r.push(new s(n,i)),o++}(),function n(){var s,l,u;for(c(),t.clearRect(0,0,e.width,e.height),function(){for(var e,t,n,i=0;i<o;i++){(e=r[i]).siblings=[];for(var s=0;s<o;s++)if(e!==(t=r[s])&&(n=a(e,t))<100){if(e.siblings.length<100)e.siblings.push(t);else{for(var c,l=0,u=0,d=0;d<100;d++)(l=a(e,e.siblings[d]))>u&&(u=l,c=d);n<u&&(e.siblings.splice(c,1),e.siblings.push(t))}}}}(),s=0;s<o;s++)l=r[s],(u=a({x:i.x,y:i.y},l))<300?l.brightness=.5-u/300:l.brightness=0;for(s=0;s<o;s++)(l=r[s]).brightness&&(l.drawNode(),l.drawConnections()),l.moveNode();requestAnimationFrame(n)}()}()}),(0,r.jsxs)("footer",{className:_().footer,children:[(0,r.jsx)("canvas",{style:{height:"400px"},className:_().canvas}),(0,r.jsxs)("div",{className:_().container,children:[(0,r.jsxs)("div",{className:_().footerLeft,children:[(0,r.jsx)("h1",{children:"Vertech Digicom"}),(0,r.jsxs)("p",{children:[" ","Vertech Digicom is a Gurgaon based company with a highly dedicated sales and support team. We specialize in helping enterprises across multiple industries manage and leverage IT to improve their business performance."]})]}),(0,r.jsx)("div",{className:_().footerCenter}),(0,r.jsxs)("div",{className:_().footerRight,children:[(0,r.jsxs)("div",{className:_().footerFirstRight,children:[(0,r.jsxs)("div",{className:_().footerCall,children:[(0,r.jsx)("h2",{children:"CALL"}),(0,r.jsx)("div",{className:_().footerDetails,children:(0,r.jsx)("span",{children:"+91-9910992507"})})]}),(0,r.jsxs)("div",{className:_().footerWrite,children:[(0,r.jsx)("h2",{children:"WRITE"}),(0,r.jsx)("div",{className:_().footerDetails,children:(0,r.jsx)("span",{children:"sales@vertechdigi.com"})})]}),(0,r.jsxs)("div",{className:_().footerVisit,children:[(0,r.jsx)("h2",{children:"VISIT"}),(0,r.jsx)("div",{className:_().footerDetails,children:(0,r.jsxs)("span",{children:["941, Sector 47, Gurugram,",(0,r.jsx)("br",{})," Haryana 122001"]})})]})]}),(0,r.jsx)("div",{className:_().miniMenu,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/about",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/products/laptop",children:"Products"})}),(0,r.jsx)("li",{children:(0,r.jsx)(s(),{href:"/blogs",children:"Blog"})})]})}),(0,r.jsx)("div",{className:_().copyright,children:(0,r.jsx)("p",{children:"\xa9VERTECH DIGICOM 2023. ALL RIGHTS RESERVED."})})]})]})]})),p=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),t,(0,r.jsx)(m,{})]})};function v(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(p,{children:(0,r.jsx)(t,{...n})})}n(3814)},3814:function(){},2873:function(e){e.exports={footer:"Footer_footer__Tl1eP",canvas:"Footer_canvas__plwZi",container:"Footer_container__iN3aW",footerLeft:"Footer_footerLeft__0LOiI",footerCenter:"Footer_footerCenter__ga8Tw",footerRight:"Footer_footerRight__rF0Vq",footerFirstRight:"Footer_footerFirstRight__eT4_u",footerCall:"Footer_footerCall__dtZJL",footerWrite:"Footer_footerWrite__1TGRp",footerVisit:"Footer_footerVisit__fzIBr",footerDetails:"Footer_footerDetails__Y4ZnS",copyright:"Footer_copyright__0_Me0",miniMenu:"Footer_miniMenu__EfEFj"}},1584:function(e){e.exports={header:"Navbar_header__VcZdC",container:"Navbar_container__rxFeS",header_main:"Navbar_header_main__IhcBQ",menu:"Navbar_menu__66zmq",menu_item:"Navbar_menu_item__RBqNE",logo:"Navbar_logo__E_Sw_",nav_menu:"Navbar_nav_menu__8Bu1D",downarrow:"Navbar_downarrow__ipe0b",sub_menu:"Navbar_sub_menu__yL8gh",menu_item_has_children:"Navbar_menu_item_has_children__SZ9aC",open_nav_menu:"Navbar_open_nav_menu__Asu_Y","open-nav-menu":"Navbar_open-nav-menu__j7HFG",close_nav_menu:"Navbar_close_nav_menu__dqVRI",menu_overlay:"Navbar_menu_overlay__INN86",open:"Navbar_open__TzCF6",plus:"Navbar_plus__3bgMz",active:"Navbar_active__8GnRs"}},1664:function(e,t,n){e.exports=n(5569)},8193:function(e,t,n){"use strict";n.d(t,{Dme:function(){return a},i0B:function(){return i},kyg:function(){return o},mGl:function(){return s},qTj:function(){return c}});var r=n(8357);function i(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"}}]})(e)}function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(e)}function s(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"}}]})(e)}function a(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function c(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function c(e){return function(t){return r.createElement(l,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,s({key:n},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var n,i=e.attr,o=e.size,c=e.title,l=a(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(i)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(6885)}),_N_E=e.O()}]);