"use strict";(self["webpackChunkiris_vue3_project"]=self["webpackChunkiris_vue3_project"]||[]).push([[319],{4319:function(s,e,r){r.r(e),r.d(e,{default:function(){return _}});var t=r(3396),a=r(9242);const n={class:"container mt-5"},o={class:"col-md-6"},i=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),u={class:"mb-2"},l=(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},c=(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,t._)("div",{class:"text-end mt-4"},[(0,t._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(s,e,r,m,h,w){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,a.iM)(((...s)=>w.signIn&&w.signIn(...s)),["prevent"]))},[(0,t._)("div",o,[i,(0,t._)("div",u,[l,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[a.nr,h.user.username]])]),(0,t._)("div",d,[c,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[a.nr,h.user.password]])]),p])],32)])}r(7658);var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{const{token:e,expired:r}=s.data;document.cookie=`hexToken=${e};${r}`,this.user.username="",this.user.password="",s.data.success?this.$router.push("/dashboardView/products"):alert(s.data.message)}))}}},w=r(89);const b=(0,w.Z)(h,[["render",m]]);var _=b}}]);
//# sourceMappingURL=319.cf1c9e8e.js.map