(self["webpackChunkiris_vue3_project"]=self["webpackChunkiris_vue3_project"]||[]).push([[757],{7972:function(t,e,i){
/*!
  * Bootstrap modal.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(1884),i(4130),i(7317),i(632),i(9069),i(5160),i(1437),i(7547))})(0,(function(t,e,i,s,a,n,o,l){"use strict";const d="modal",r="bs.modal",c=`.${r}`,u=".data-api",h="Escape",m=`hide${c}`,p=`hidePrevented${c}`,_=`hidden${c}`,g=`show${c}`,b=`shown${c}`,f=`resize${c}`,v=`click.dismiss${c}`,y=`mousedown.dismiss${c}`,w=`keydown.dismiss${c}`,k=`click${c}${u}`,P="modal-open",L="fade",x="show",A="modal-static",E=".modal.show",$=".modal-dialog",M=".modal-body",C='[data-bs-toggle="modal"]',D={backdrop:!0,focus:!0,keyboard:!0},T={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class B extends t{constructor(t,e){super(t,e),this._dialog=i.findOne($,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new l,this._addEventListeners()}static get Default(){return D}static get DefaultType(){return T}static get NAME(){return d}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const i=e.trigger(this._element,g,{relatedTarget:t});i.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(P),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,m);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(x),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){e.off(window,c),e.off(this._dialog,c),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new s({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new n({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=i.findOne(M,this._dialog);s&&(s.scrollTop=0),o.reflow(this._element),this._element.classList.add(x);const a=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,b,{relatedTarget:t})};this._queueCallback(a,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,w,(t=>{t.key===h&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),e.on(window,f,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),e.on(this._element,y,(t=>{e.one(this._element,v,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(P),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,_)}))}_isAnimated(){return this._element.classList.contains(L)}_triggerBackdropTransition(){const t=e.trigger(this._element,p);if(t.defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;"hidden"===s||this._element.classList.contains(A)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(A),this._queueCallback((()=>{this._element.classList.remove(A),this._queueCallback((()=>{this._element.style.overflowY=s}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=o.isRTL()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=o.isRTL()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=B.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return e.on(document,k,C,(function(t){const s=i.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),e.one(s,g,(t=>{t.defaultPrevented||e.one(s,_,(()=>{o.isVisible(this)&&this.focus()}))}));const a=i.findOne(E);a&&B.getInstance(a).hide();const n=B.getOrCreateInstance(s);n.toggle(this)})),a.enableDismissTrigger(B),o.defineJQueryPlugin(B),B}))},632:function(t,e,i){
/*!
  * Bootstrap backdrop.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4130),i(2166),i(1437))})(0,(function(t,e,i){"use strict";const s="backdrop",a="fade",n="show",o=`mousedown.bs.${s}`,l={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},d={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class r extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return l}static get DefaultType(){return d}static get NAME(){return s}show(t){if(!this._config.isVisible)return void i.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&i.reflow(e),e.classList.add(n),this._emulateAnimation((()=>{i.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(n),this._emulateAnimation((()=>{this.dispose(),i.execute(t)}))):i.execute(t)}dispose(){this._isAppended&&(t.off(this._element,o),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(a),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=i.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,o,(()=>{i.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){i.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return r}))},5160:function(t,e,i){
/*!
  * Bootstrap focustrap.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(4130),i(7317),i(2166))})(0,(function(t,e,i){"use strict";const s="focustrap",a="bs.focustrap",n=`.${a}`,o=`focusin${n}`,l=`keydown.tab${n}`,d="Tab",r="forward",c="backward",u={autofocus:!0,trapElement:null},h={autofocus:"boolean",trapElement:"element"};class m extends i{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return u}static get DefaultType(){return h}static get NAME(){return s}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,n),t.on(document,o,(t=>this._handleFocusin(t))),t.on(document,l,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,n))}_handleFocusin(t){const{trapElement:i}=this._config;if(t.target===document||t.target===i||i.contains(t.target))return;const s=e.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===c?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===d&&(this._lastTabNavDirection=t.shiftKey?c:r)}}return m}))},7547:function(t,e,i){
/*!
  * Bootstrap scrollbar.js v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(6221),i(7317),i(1437))})(0,(function(t,e,i){"use strict";const s=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",a=".sticky-top",n="padding-right",o="margin-right";class l{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,n,(e=>e+t)),this._setElementAttributes(s,n,(e=>e+t)),this._setElementAttributes(a,o,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,n),this._resetElementAttributes(s,n),this._resetElementAttributes(a,o)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),a=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const a=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(a))}px`)};this._applyManipulationCallback(t,a)}_saveInitialAttribute(e,i){const s=e.style.getPropertyValue(i);s&&t.setDataAttribute(e,i,s)}_resetElementAttributes(e,i){const s=e=>{const s=t.getDataAttribute(e,i);null!==s?(t.removeDataAttribute(e,i),e.style.setProperty(i,s)):e.style.removeProperty(i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(t,s){if(i.isElement(t))s(t);else for(const i of e.find(t,this._element))s(i)}}return l}))},8757:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return Dt}});var s=i(3396),a=i(7139);const n={class:"text-end"},o={class:"table mt-4"},l=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"120"},"分類"),(0,s._)("th",null,"產品名稱"),(0,s._)("th",{width:"120"},"原價"),(0,s._)("th",{width:"120"},"售價"),(0,s._)("th",{width:"100"},"是否啟用"),(0,s._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},r={class:"text-right"},c={class:"btn-group"},u=["onClick"],h=["onClick"];function m(t,e,i,m,p,_){const g=(0,s.up)("LoadingOverlay"),b=(0,s.up)("PaginationBar"),f=(0,s.up)("ProductModal"),v=(0,s.up)("DeleteModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(g,{active:p.isLoading},null,8,["active"]),(0,s._)("div",n,[(0,s._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>_.openModal(!0))},"新增項目")]),(0,s._)("table",o,[l,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(p.productList,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,a.zw)(e.category),1),(0,s._)("td",null,(0,a.zw)(e.title),1),(0,s._)("td",d,(0,a.zw)(t.$filters.currency(e.origin_price)),1),(0,s._)("td",r,(0,a.zw)(t.$filters.currency(e.price)),1),(0,s._)("td",null,[(0,s._)("span",{class:(0,a.C_)(["text-success",{"text-muted":void 0===e.is_enabled|0}])},(0,a.zw)(1===e.is_enabled?"啟用":"未啟用 "),3)]),(0,s._)("td",null,[(0,s._)("div",c,[(0,s._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>_.openModal(!1,e)},"編輯",8,u),(0,s._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>_.deleteModal(e)},"刪除",8,h)])])])))),128))])]),(0,s.Wm)(b,{"pagination-bar":p.pagination,onEmitPage:_.getProductList,onEmitPrevpage:_.getProductList,onEmitNextpage:_.getProductList},null,8,["pagination-bar","onEmitPage","onEmitPrevpage","onEmitNextpage"]),(0,s.Wm)(f,{ref:"productModal",product:p.addProductList,onAddProduct:_.updateProduct},null,8,["product","onAddProduct"]),(0,s.Wm)(v,{ref:"deleteModal","delete-item":p.addProductList,onDeleteProduct:_.deleteProduct},null,8,["delete-item","onDeleteProduct"])],64)}var p=i(9242);const _={"aria-label":"Page navigation example"},g={class:"pagination justify-content-center"},b=(0,s._)("a",{class:"page-link"},"Previous",-1),f=[b],v=["onClick"],y=(0,s._)("a",{class:"page-link"},"Next",-1),w=[y];function k(t,e,i,n,o,l){return(0,s.wg)(),(0,s.iD)("nav",_,[(0,s._)("ul",g,[(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!i.paginationBar.has_pre}]),onClick:e[0]||(e[0]=(0,p.iM)((t=>l.prevPage(i.paginationBar.current_page)),["prevent"]))},f,2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.paginationBar.total_pages,(t=>((0,s.wg)(),(0,s.iD)("li",{class:"page-item",key:t},[(0,s._)("a",{class:(0,a.C_)(["page-link",{active:t===i.paginationBar.current_page}]),href:"#",onClick:(0,p.iM)((e=>l.updatePage(t)),["prevent"])},(0,a.zw)(t),11,v)])))),128)),(0,s._)("li",{class:(0,a.C_)(["page-item",{disabled:!i.paginationBar.has_next}]),onClick:e[1]||(e[1]=(0,p.iM)((t=>l.nextPage(i.paginationBar.current_page)),["prevent"]))},w,2)])])}var P={props:["paginationBar"],data(){return{}},methods:{updatePage(t){this.$emit("emit-page",t)},prevPage(t){t-=1,!1!==this.paginationBar.has_pre&&this.$emit("emit-prevpage",t)},nextPage(t){t+=1,!1!==this.paginationBar.has_next&&this.$emit("emit-nextpage",t)}}},L=i(89);const x=(0,L.Z)(P,[["render",k]]);var A=x;const E={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},$={class:"modal-dialog modal-xl",role:"document"},M={class:"modal-content border-0"},C=(0,s._)("div",{class:"modal-header bg-dark text-white"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"新增產品")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},T={class:"row"},B={class:"col-sm-4"},N=(0,s._)("div",{class:"mb-3"},[(0,s._)("label",{for:"image",class:"form-label"},"輸入圖片網址"),(0,s._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1),V={class:"mb-3"},U=(0,s._)("label",{for:"customFile",class:"form-label"},[(0,s.Uk)("或 上傳圖片 "),(0,s._)("i",{class:"fas fa-spinner fa-spin"})],-1),F=["src"],j=(0,s.uE)('<div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',1),z={class:"col-sm-8"},I={class:"mb-3"},W=(0,s._)("label",{for:"title",class:"form-label"},"標題",-1),O={class:"row gx-2"},S={class:"mb-3 col-md-6"},H=(0,s._)("label",{for:"category",class:"form-label"},"分類",-1),R={class:"mb-3 col-md-6"},Y=(0,s._)("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row gx-2"},q={class:"mb-3 col-md-6"},Z=(0,s._)("label",{for:"origin_price",class:"form-label"},"原價",-1),Q={class:"mb-3 col-md-6"},J=(0,s._)("label",{for:"price",class:"form-label"},"售價",-1),G=(0,s._)("hr",null,null,-1),X={class:"mb-3"},tt=(0,s._)("label",{for:"description",class:"form-label"},"產品描述",-1),et={class:"mb-3"},it=(0,s._)("label",{for:"content",class:"form-label"},"說明內容",-1),st={class:"mb-3"},at={class:"form-check"},nt=(0,s._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ot={class:"modal-footer"},lt=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function dt(t,e,i,a,n,o){return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",$,[(0,s._)("div",M,[C,(0,s._)("div",D,[(0,s._)("div",T,[(0,s._)("div",B,[N,(0,s._)("div",V,[U,(0,s._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[0]||(e[0]=(...t)=>o.updateFile&&o.updateFile(...t))},null,544)]),(0,s._)("img",{class:"img-fluid",alt:"",src:n.addProductList.imageUrl},null,8,F),j]),(0,s._)("div",z,[(0,s._)("div",I,[W,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[1]||(e[1]=t=>n.addProductList.title=t)},null,512),[[p.nr,n.addProductList.title]])]),(0,s._)("div",O,[(0,s._)("div",S,[H,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[2]||(e[2]=t=>n.addProductList.category=t)},null,512),[[p.nr,n.addProductList.category]])]),(0,s._)("div",R,[Y,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[3]||(e[3]=t=>n.addProductList.unit=t)},null,512),[[p.nr,n.addProductList.unit]])])]),(0,s._)("div",K,[(0,s._)("div",q,[Z,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[4]||(e[4]=t=>n.addProductList.origin_price=t)},null,512),[[p.nr,n.addProductList.origin_price]])]),(0,s._)("div",Q,[J,(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[5]||(e[5]=t=>n.addProductList.price=t)},null,512),[[p.nr,n.addProductList.price]])])]),G,(0,s._)("div",X,[tt,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[6]||(e[6]=t=>n.addProductList.description=t)},null,512),[[p.nr,n.addProductList.description]])]),(0,s._)("div",et,[it,(0,s.wy)((0,s._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[7]||(e[7]=t=>n.addProductList.content=t)},null,512),[[p.nr,n.addProductList.content]])]),(0,s._)("div",st,[(0,s._)("div",at,[(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[8]||(e[8]=t=>n.addProductList.is_enabled=t)},null,512),[[p.e8,n.addProductList.is_enabled]]),nt])])])])]),(0,s._)("div",ot,[lt,(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=e=>t.$emit("add-product",n.addProductList))},"確認")])])])],512)}var rt=i(7972),ct=i.n(rt),ut={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(ct())(this.$refs.modal)}},ht={props:{product:{type:Object,default(){return{}}}},data(){return{modal:{},addProductList:{}}},mixins:[ut],watch:{product(){this.addProductList=this.product}},methods:{updateFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const i="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/upload";this.$http.post(i,e).then((t=>{t.data.success&&(this.addProductList.imageUrl=t.data.imageUrl)})),this.$refs.fileInput.value=""}}};const mt=(0,L.Z)(ht,[["render",dt]]);var pt=mt;const _t={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},gt={class:"modal-dialog",role:"document"},bt={class:"modal-content border-0"},ft={class:"modal-header bg-danger text-white"},vt={class:"modal-title"},yt=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),wt={class:"modal-body"},kt={class:"text-danger"},Pt={class:"modal-footer"},Lt=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function xt(t,e,i,n,o,l){return(0,s.wg)(),(0,s.iD)("div",_t,[(0,s._)("div",gt,[(0,s._)("div",bt,[(0,s._)("div",ft,[(0,s._)("h5",vt,[(0,s._)("span",null,"刪除 "+(0,a.zw)(i.deleteItem.title),1)]),yt]),(0,s._)("div",wt,[(0,s.Uk)(" 是否刪除 "),(0,s._)("strong",kt,(0,a.zw)(i.deleteItem.title),1),(0,s.Uk)(" (刪除後將無法恢復)。 ")]),(0,s._)("div",Pt,[Lt,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("delete-product"))},"確認刪除 ")])])])],512)}var At={props:{deleteItem:{}},data(){return{modal:{}}},mixins:[ut]};const Et=(0,L.Z)(At,[["render",xt]]);var $t=Et,Mt={components:{PaginationBar:A,ProductModal:pt,DeleteModal:$t},data(){return{productList:[],pagination:{},addProductList:{},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getProductList(t){const e=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.productList=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1}))},openModal(t,e){this.addProductList=t?{}:{...e},this.isNew=t,this.$refs.productModal.showModal()},deleteModal(t){this.addProductList={...t},this.$refs.deleteModal.showModal()},updateProduct(t){console.log(t),this.addProductList=t;let e="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product",i="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product/${t.id}`,i="put"),this.$http[i](e,{data:this.addProductList}).then((t=>{t.data.success?(this.getProductList(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}),this.$refs.productModal.hideModal()}))},deleteProduct(t){const e=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product/${this.addProductList.id}`;this.$http.delete(e).then((t=>{this.getProductList(),this.$refs.deleteModal.hideModal()}))}},created(){this.getProductList()}};const Ct=(0,L.Z)(Mt,[["render",m]]);var Dt=Ct}}]);
//# sourceMappingURL=757.2476e833.js.map