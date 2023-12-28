import{d as e,r as l,o as a,g as t,h as u,c as s,f as o,w as d,F as r,q as i,i as n,A as p,z as m,j as v,a as c,e as f,y as b,E as _}from"./index-809772d8.js";import{f as y}from"./index-4742ef83.js";import{g as V,c as w}from"./user-b7eef76a.js";import{g as h}from"./role-262d7406.js";const k={class:"continer"},U=v("新增"),C=v("取消"),I=v("更新"),g=v("取消"),N=e({__name:"user-module",props:{status:{type:String,default:""},roleList:{type:Object,default:[]},userInfo:{type:Object,default:{}}},emits:["addUser","cancel","editUser"],setup(e,{emit:v}){const c=e,f=l({userName:"",password:"",roleId:"",email:"",status:0}),b=c.roleList,_=()=>{v("cancel")},y=()=>{v("addUser",f.value)},V=()=>{v("editUser",f.value)};return a((()=>{(()=>{if("edit"===c.status){const{userName:e,roleId:l,email:a,status:t}=c.userInfo;f.value.userName=e,f.value.roleId=l,f.value.email=a,f.value.status=t}})()})),(l,a)=>{const v=t("el-input"),c=t("el-form-item"),w=t("el-option"),h=t("el-select"),N=t("el-switch"),L=t("el-button"),j=t("el-form");return u(),s("div",k,[o(j,{model:f.value,"label-width":"120px"},{default:d((()=>[o(c,{label:"用户账号",prop:"userName"},{default:d((()=>[o(v,{modelValue:f.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value.userName=e),placeholder:"请输入用户账号"},null,8,["modelValue"])])),_:1}),o(c,{label:"用户密码",prop:"password"},{default:d((()=>[o(v,{modelValue:f.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value.password=e),placeholder:"请输入用户密码"},null,8,["modelValue"])])),_:1}),o(c,{label:"用户身份",prop:"roleId"},{default:d((()=>[o(h,{modelValue:f.value.roleId,"onUpdate:modelValue":a[2]||(a[2]=e=>f.value.roleId=e),class:"m-2",placeholder:"Select",size:"large"},{default:d((()=>[(u(!0),s(r,null,i(p(b),(e=>(u(),n(w,{key:e.id,label:e.roleName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(c,{label:"用户邮箱",prop:"email"},{default:d((()=>[o(v,{modelValue:f.value.email,"onUpdate:modelValue":a[3]||(a[3]=e=>f.value.email=e),placeholder:"用户账户邮箱"},null,8,["modelValue"])])),_:1}),o(c,{label:"状态",prop:"status"},{default:d((()=>[o(N,{modelValue:f.value.status,"onUpdate:modelValue":a[4]||(a[4]=e=>f.value.status=e),class:"ml-2","active-value":0,"inactive-value":1},null,8,["modelValue"])])),_:1}),o(c,null,{default:d((()=>["add"===e.status?(u(),s(r,{key:0},[o(L,{type:"primary",onClick:y},{default:d((()=>[U])),_:1}),o(L,{onClick:_},{default:d((()=>[C])),_:1})],64)):m("",!0),"edit"===e.status?(u(),s(r,{key:1},[o(L,{type:"primary",onClick:V},{default:d((()=>[I])),_:1}),o(L,{onClick:_},{default:d((()=>[g])),_:1})],64)):m("",!0)])),_:1})])),_:1},8,["model"])])}}}),L={class:"app-container"},j={class:"flex mb-20"},x=v("查询"),T=v("添加管理员"),z=v("编辑"),A=e({__name:"user",setup(e){const r=c(["开启","关闭"]);c(["是","否"]);const i=l(""),k=l([]),U=l(!1),C=l([]),I=l("add"),g=l({}),A=()=>{V(i.value).then((e=>{k.value=e.data.userList}))},E=()=>{U.value=!1},O=()=>{U.value=!0,I.value="add"},S=e=>{w(e).then((e=>{"添加成功"===e.data&&(_.success(e.data),U.value=!1,window.location.reload())}))},q=e=>{console.log(e)};return a((()=>{V(void 0).then((e=>{k.value=e.data.userList})),h(void 0).then((e=>{C.value=e.data}))})),(e,l)=>{const a=t("el-input"),c=t("el-button"),_=t("el-table-column"),V=t("el-tag"),w=t("el-table"),h=t("el-dialog");return u(),s("div",L,[f("div",j,[o(a,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e),placeholder:"请输入用户名称",clearable:"",class:"w-300"},null,8,["modelValue"]),o(c,{class:"ml-10",type:"primary",plain:"",onClick:A},{default:d((()=>[x])),_:1})]),o(c,{type:"primary",class:"mb-20",onClick:O},{default:d((()=>[T])),_:1}),o(w,{data:k.value,border:"",style:{width:"100%"}},{default:d((()=>[o(_,{prop:"id",label:"用户编号"}),o(_,{prop:"userName",label:"用户昵称"}),o(_,{prop:"roleName",label:"用户身份"}),o(_,{prop:"email",label:"用户邮箱"}),o(_,{prop:"status",label:"状态"},{default:d((e=>[o(V,{type:0==e.row.status?"success":"danger"},{default:d((()=>[v(b(r[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),o(_,{prop:"createTime",label:"创建时间"},{default:d((e=>[v(b(p(y)(e.row.createTime)),1)])),_:1}),o(_,{prop:"updateTime",label:"更新时间"},{default:d((e=>[v(b(p(y)(e.row.updateTime)),1)])),_:1}),o(_,{prop:"edit",label:"编辑"},{default:d((e=>[o(c,{link:"",type:"primary",size:"small",onClick:l=>{return a=e.row,g.value=a,U.value=!0,void(I.value="edit");var a}},{default:d((()=>[z])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o(h,{modelValue:U.value,"onUpdate:modelValue":l[1]||(l[1]=e=>U.value=e),title:"add"===I.value?"新增管理员":"修改管理员",width:"40%"},{default:d((()=>["add"===I.value&&U.value?(u(),n(N,{key:0,status:I.value,roleList:C.value,onAddUser:S,onCancel:E},null,8,["status","roleList"])):m("",!0),"edit"===I.value&&U.value?(u(),n(N,{key:1,status:I.value,roleList:C.value,onEditUser:q,onCancel:E,userInfo:g.value},null,8,["status","roleList","userInfo"])):m("",!0)])),_:1},8,["modelValue","title"])])}}});export{A as default};
