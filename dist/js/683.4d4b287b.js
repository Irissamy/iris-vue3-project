"use strict";(self["webpackChunkiris_vue3_project"]=self["webpackChunkiris_vue3_project"]||[]).push([[683],{8691:function(t,i,a){a.r(i),a.d(i,{default:function(){return f}});var e=a(3396),r=a(7139);const c={class:"container"},d={"aria-label":"breadcrumb"},s={class:"breadcrumb"},l={class:"breadcrumb-item"},o={class:"breadcrumb-item active","aria-current":"page"},u={class:"row justify-content-center"},n={class:"col-8"},p=["src"],h={class:"col-4"},g={key:0,class:"h5"},_={key:1,class:"h6"},D={key:2,class:"h5"},m=(0,e._)("hr",null,null,-1);function v(t,i,a,v,b,w){const k=(0,e.up)("LoadingOverlay"),f=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(k,{active:b.isLoading},null,8,["active"]),(0,e._)("div",c,[(0,e._)("nav",d,[(0,e._)("ol",s,[(0,e._)("li",l,[(0,e.Wm)(f,{to:"/userDashboard/userCart"},{default:(0,e.w5)((()=>[(0,e.Uk)("購物車")])),_:1})]),(0,e._)("li",o,(0,r.zw)(b.productDetail.title),1)])]),(0,e._)("div",u,[(0,e._)("article",n,[(0,e._)("h2",null,(0,r.zw)(b.productDetail.title),1),(0,e._)("div",null,(0,r.zw)(b.productDetail.description),1),(0,e._)("div",null,(0,r.zw)(b.productDetail.content),1),(0,e._)("img",{src:b.productDetail.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,p)]),(0,e._)("div",h,[b.productDetail.price?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("div",g,(0,r.zw)(b.productDetail.origin_price)+"元",1)),b.productDetail.price?((0,e.wg)(),(0,e.iD)("del",_,"原價 "+(0,r.zw)(b.productDetail.origin_price)+" 元",1)):(0,e.kq)("",!0),b.productDetail.price?((0,e.wg)(),(0,e.iD)("div",D,"現在只要 "+(0,r.zw)(b.productDetail.price)+" 元",1)):(0,e.kq)("",!0),m,(0,e._)("button",{type:"button",class:"btn btn-outline-danger",onEmitAddcart:i[0]||(i[0]=(...t)=>w.addToCart&&w.addToCart(...t))}," 加到購物車 ",32)])])])],64)}var b={data(){return{productDetail:{},productId:"",isLoading:!1}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/iris-lai-api/product/${this.productId}`;this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success?(this.productDetail=t.data.product,this.isLoading=!1):console.log(t.data.message)}))},addToCart(){this.$emit("emit-addcart",this.productDetail.id)}},created(){this.productId=this.$route.params.productId,this.getProduct()}},w=a(89);const k=(0,w.Z)(b,[["render",v]]);var f=k}}]);
//# sourceMappingURL=683.4d4b287b.js.map