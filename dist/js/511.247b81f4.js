(self["webpackChunkiris_vue3_project"]=self["webpackChunkiris_vue3_project"]||[]).push([[511],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(1884),s(4130),s(9069),s(1437))})(0,(function(t,e,s,n){"use strict";const i="toast",o="bs.toast",a=`.${o}`,r=`mouseover${a}`,c=`mouseout${a}`,l=`focusin${a}`,u=`focusout${a}`,h=`hide${a}`,d=`hidden${a}`,m=`show${a}`,_=`shown${a}`,g="fade",p="hide",f="show",v="showing",b={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class y extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return b}static get NAME(){return i}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const s=()=>{this._element.classList.remove(v),e.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(p),n.reflow(this._element),this._element.classList.add(f,v),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,h);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(p),this._element.classList.remove(v,f),e.trigger(this._element,d)};this._element.classList.add(v),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(f),super.dispose()}isShown(){return this._element.classList.contains(f)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,c,(t=>this._onInteraction(t,!1))),e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=y.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(y),n.defineJQueryPlugin(y),y}))},8557:function(t,e,s){"use strict";s.d(e,{Z:function(){return o}});s(7658);function n(t){return{all:t=t||new Map,on:function(e,s){var n=t.get(e);n?n.push(s):t.set(e,[s])},off:function(e,s){var n=t.get(e);n&&(s?n.splice(n.indexOf(s)>>>0,1):t.set(e,[]))},emit:function(e,s){var n=t.get(e);n&&n.slice().map((function(t){t(s)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,s)}))}}}const i=n();var o=i},9181:function(t,e,s){"use strict";s.d(e,{Z:function(){return y}});var n=s(3396);const i={class:"toast-container position-absolute pe-3 top-0 end-0"};function o(t,e,s,o,a,r){const c=(0,n.up)("ToastItem");return(0,n.wg)(),(0,n.iD)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(c,{key:e,msg:t},null,8,["msg"])))),128))])}s(7658);var a=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header"},l={class:"me-auto"},u=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(t,e,s,i,o,d){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",c,[(0,n._)("span",{class:(0,a.C_)(["p-2 rounded me-2 d-inline-block",`bg-${s.msg.style}`])},null,2),(0,n._)("strong",l,(0,a.zw)(s.msg.title),1),u]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",h,(0,a.zw)(s.msg.content),1)):(0,n.kq)("",!0)],512)}var m=s(8803),_=s.n(m),g={name:"ToastItem",props:["msg"],mounted(){const t=this.$refs.toast,e=new(_())(t,{delay:4e3});e.show()}},p=s(89);const f=(0,p.Z)(g,[["render",d]]);var v=f,b={components:{ToastItem:v},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const w=(0,p.Z)(b,[["render",o]]);var y=w},5511:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return C}});var n=s(3396);const i={class:"container-fluid mt-3 position-relative"};function o(t,e,s,o,a,r){const c=(0,n.up)("NavBarDashboard"),l=(0,n.up)("ToastMessages"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n._)("div",i,[(0,n.Wm)(l),(0,n.Wm)(u)])],64)}s(7658);var a=s(8557),r=s(9242);const c={class:"navbar navbar-expand-lg bg-body-tertiary"},l={class:"container-fluid"},u=(0,n._)("a",{class:"navbar-brand",href:"#"},"Navbar",-1),h=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},m={class:"navbar-nav me-auto mb-2 mb-lg-0"},_={class:"nav-item"},g={class:"nav-item"},p={class:"nav-item"},f={class:"nav-item"},v={class:"d-flex",role:"search"};function b(t,e,s,i,o,a){const b=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",c,[(0,n._)("div",l,[u,h,(0,n._)("div",d,[(0,n._)("ul",m,[(0,n._)("li",_,[(0,n.Wm)(b,{to:"/",class:"nav-link active"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})]),(0,n._)("li",g,[(0,n.Wm)(b,{to:"/dashboardView/products",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("產品列表")])),_:1})]),(0,n._)("li",p,[(0,n.Wm)(b,{to:"/dashboardView/orders",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("訂單列表")])),_:1})]),(0,n._)("li",f,[(0,n.Wm)(b,{to:"/dashboardView/cupon",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("優惠卷")])),_:1})])]),(0,n._)("form",v,[(0,n.Wm)(b,{to:"/loginView",class:"btn btn-outline-success me-2"},{default:(0,n.w5)((()=>[(0,n.Uk)("登入")])),_:1}),(0,n._)("button",{class:"btn btn-outline-success",type:"button",onClick:e[0]||(e[0]=(0,r.iM)(((...t)=>a.logout&&a.logout(...t)),["prevent"]))},"登出")])])])])}var w={data(){return{isLogin:!1}},methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.$http.post(t,this.user).then((t=>{console.log(t),this.isLogin=!1,this.$router.push("/loginView")}))}},created(){}},y=s(89);const k=(0,y.Z)(w,[["render",b]]);var $=k,T=s(9181),I={components:{NavBarDashboard:$,ToastMessages:T.Z},provide(){return{emitter:a.Z}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e).then((t=>{t.data.success||this.$router.push("/loginView")}))}};const L=(0,y.Z)(I,[["render",o]]);var C=L}}]);
//# sourceMappingURL=511.247b81f4.js.map