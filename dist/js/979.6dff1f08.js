"use strict";(self["webpackChunkiris_vue3_project"]=self["webpackChunkiris_vue3_project"]||[]).push([[979],{7979:function(t,e,a){a.r(e),a.d(e,{default:function(){return ft}});var i=a(3396),l=a(7139);const o={class:"text-end"},s={class:"table mt-4"},d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",{width:"120"},"分類"),(0,i._)("th",null,"產品名稱"),(0,i._)("th",{width:"120"},"原價"),(0,i._)("th",{width:"120"},"售價"),(0,i._)("th",{width:"100"},"是否啟用"),(0,i._)("th",{width:"200"},"編輯")])],-1),r={class:"text-right"},n={class:"text-right"},c={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function g(t,e,a,g,_,b){const f=(0,i.up)("LoadingOverlay"),v=(0,i.up)("PaginationBar"),P=(0,i.up)("ProductModal"),y=(0,i.up)("DeleteModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(f,{active:_.isLoading},null,8,["active"]),(0,i._)("div",o,[(0,i._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>b.openModal(!0))},"新增項目")]),(0,i._)("table",s,[d,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(_.productList,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",null,(0,l.zw)(e.category),1),(0,i._)("td",null,(0,l.zw)(e.title),1),(0,i._)("td",r,(0,l.zw)(t.$filters.currency(e.origin_price)),1),(0,i._)("td",n,(0,l.zw)(t.$filters.currency(e.price)),1),(0,i._)("td",null,[1===e.is_enabled?((0,i.wg)(),(0,i.iD)("span",c,"啟用")):((0,i.wg)(),(0,i.iD)("span",u,"未啟用"))]),(0,i._)("td",null,[(0,i._)("div",p,[(0,i._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>b.openModal(!1,e)},"編輯",8,m),(0,i._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>b.deleteModal(e)},"刪除",8,h)])])])))),128))])]),(0,i.Wm)(v,{"pagination-bar":_.pagination,onEmitPage:b.getProductList,onEmitPrevpage:b.getProductList,onEmitNextpage:b.getProductList},null,8,["pagination-bar","onEmitPage","onEmitPrevpage","onEmitNextpage"]),(0,i.Wm)(P,{ref:"productModal",product:_.addProductList,onAddProduct:b.updateProduct},null,8,["product","onAddProduct"]),(0,i.Wm)(y,{ref:"deleteModal","delete-item":_.addProductList,onDeleteProduct:b.deleteProduct},null,8,["delete-item","onDeleteProduct"])],64)}var _=a(9242);const b={"aria-label":"Page navigation example"},f={class:"pagination justify-content-center"},v=(0,i._)("a",{class:"page-link"},"Previous",-1),P=[v],y=["onClick"],L=(0,i._)("a",{class:"page-link"},"Next",-1),w=[L];function x(t,e,a,o,s,d){return(0,i.wg)(),(0,i.iD)("nav",b,[(0,i._)("ul",f,[(0,i._)("li",{class:(0,l.C_)(["page-item",{disabled:!a.paginationBar.has_pre}]),onClick:e[0]||(e[0]=(0,_.iM)((t=>d.prevPage(a.paginationBar.current_page)),["prevent"]))},P,2),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.paginationBar.total_pages,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"page-item",key:t},[(0,i._)("a",{class:(0,l.C_)(["page-link",{active:t===a.paginationBar.current_page}]),href:"#",onClick:(0,_.iM)((e=>d.updatePage(t)),["prevent"])},(0,l.zw)(t),11,y)])))),128)),(0,i._)("li",{class:(0,l.C_)(["page-item",{disabled:!a.paginationBar.has_next}]),onClick:e[1]||(e[1]=(0,_.iM)((t=>d.nextPage(a.paginationBar.current_page)),["prevent"]))},w,2)])])}var k={props:["paginationBar"],data(){return{}},methods:{updatePage(t){this.$emit("emit-page",t)},prevPage(t){t-=1,!1!==this.paginationBar.has_pre&&this.$emit("emit-prevpage",t)},nextPage(t){t+=1,!1!==this.paginationBar.has_next&&this.$emit("emit-nextpage",t)}}},M=a(89);const $=(0,M.Z)(k,[["render",x]]);var C=$;const D={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog modal-xl",role:"document"},B={class:"modal-content border-0"},V=(0,i._)("div",{class:"modal-header bg-dark text-white"},[(0,i._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,i._)("span",null,"新增產品")]),(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),E={class:"modal-body"},j={class:"row"},F={class:"col-sm-4"},N=(0,i._)("div",{class:"mb-3"},[(0,i._)("label",{for:"image",class:"form-label"},"輸入圖片網址"),(0,i._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結"})],-1),z={class:"mb-3"},Z=(0,i._)("label",{for:"customFile",class:"form-label"},[(0,i.Uk)("或 上傳圖片 "),(0,i._)("i",{class:"fas fa-spinner fa-spin"})],-1),W=["src"],H=(0,i.uE)('<div class="mt-5"><div class="mb-3 input-group"><input type="url" class="form-control form-control" placeholder="請輸入連結"><button type="button" class="btn btn-outline-danger"> 移除 </button></div><div><button class="btn btn-outline-primary btn-sm d-block w-100"> 新增圖片 </button></div></div>',1),I={class:"col-sm-8"},Y={class:"mb-3"},A=(0,i._)("label",{for:"title",class:"form-label"},"標題",-1),K={class:"row gx-2"},O={class:"mb-3 col-md-6"},q=(0,i._)("label",{for:"category",class:"form-label"},"分類",-1),G={class:"mb-3 col-md-6"},J=(0,i._)("label",{for:"price",class:"form-label"},"單位",-1),Q={class:"row gx-2"},R={class:"mb-3 col-md-6"},S=(0,i._)("label",{for:"origin_price",class:"form-label"},"原價",-1),T={class:"mb-3 col-md-6"},X=(0,i._)("label",{for:"price",class:"form-label"},"售價",-1),tt=(0,i._)("hr",null,null,-1),et={class:"mb-3"},at=(0,i._)("label",{for:"description",class:"form-label"},"產品描述",-1),it={class:"mb-3"},lt=(0,i._)("label",{for:"content",class:"form-label"},"說明內容",-1),ot={class:"mb-3"},st={class:"form-check"},dt=(0,i._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),rt={class:"modal-footer"},nt=(0,i._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function ct(t,e,a,l,o,s){return(0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("div",U,[(0,i._)("div",B,[V,(0,i._)("div",E,[(0,i._)("div",j,[(0,i._)("div",F,[N,(0,i._)("div",z,[Z,(0,i._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[0]||(e[0]=(...t)=>s.updateFile&&s.updateFile(...t))},null,544)]),(0,i._)("img",{class:"img-fluid",alt:"",src:o.addProductList.imageUrl},null,8,W),H]),(0,i._)("div",I,[(0,i._)("div",Y,[A,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[1]||(e[1]=t=>o.addProductList.title=t)},null,512),[[_.nr,o.addProductList.title]])]),(0,i._)("div",K,[(0,i._)("div",O,[q,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[2]||(e[2]=t=>o.addProductList.category=t)},null,512),[[_.nr,o.addProductList.category]])]),(0,i._)("div",G,[J,(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[3]||(e[3]=t=>o.addProductList.unit=t)},null,512),[[_.nr,o.addProductList.unit]])])]),(0,i._)("div",Q,[(0,i._)("div",R,[S,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[4]||(e[4]=t=>o.addProductList.origin_price=t)},null,512),[[_.nr,o.addProductList.origin_price]])]),(0,i._)("div",T,[X,(0,i.wy)((0,i._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[5]||(e[5]=t=>o.addProductList.price=t)},null,512),[[_.nr,o.addProductList.price]])])]),tt,(0,i._)("div",et,[at,(0,i.wy)((0,i._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[6]||(e[6]=t=>o.addProductList.description=t)},null,512),[[_.nr,o.addProductList.description]])]),(0,i._)("div",it,[lt,(0,i.wy)((0,i._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[7]||(e[7]=t=>o.addProductList.content=t)},null,512),[[_.nr,o.addProductList.content]])]),(0,i._)("div",ot,[(0,i._)("div",st,[(0,i.wy)((0,i._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[8]||(e[8]=t=>o.addProductList.is_enabled=t)},null,512),[[_.e8,o.addProductList.is_enabled]]),dt])])])])]),(0,i._)("div",rt,[nt,(0,i._)("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=e=>t.$emit("add-product",o.addProductList))},"確認")])])])],512)}var ut=a(5741),pt={props:{product:{type:Object,default(){return{}}}},data(){return{modal:{},addProductList:{}}},mixins:[ut.Z],watch:{product(){this.addProductList=this.product}},methods:{updateFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/upload";this.$http.post(a,e).then((t=>{t.data.success&&(this.addProductList.imageUrl=t.data.imageUrl)})),this.$refs.fileInput.value=""}}};const mt=(0,M.Z)(pt,[["render",ct]]);var ht=mt,gt=a(1364),_t={components:{PaginationBar:C,ProductModal:ht,DeleteModal:gt.Z},data(){return{productList:[],pagination:{},addProductList:{},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getProductList(t=1){const e=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.productList=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1}))},openModal(t,e){this.addProductList=t?{}:{...e},this.isNew=t,this.$refs.productModal.showModal()},deleteModal(t){this.addProductList={...t},this.$refs.deleteModal.showModal()},updateProduct(t){console.log(t),this.addProductList=t;let e="https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product/${t.id}`,a="put"),this.$http[a](e,{data:this.addProductList}).then((t=>{t.data.success?(this.getProductList(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}),this.$refs.productModal.hideModal()}))},deleteProduct(){const t=`https://vue3-course-api.hexschool.io/api/iris-lai-api/admin/product/${this.addProductList.id}`;this.$http.delete(t).then((t=>{this.getProductList(),this.$refs.deleteModal.hideModal()}))}},created(){this.getProductList()}};const bt=(0,M.Z)(_t,[["render",g]]);var ft=bt}}]);
//# sourceMappingURL=979.6dff1f08.js.map