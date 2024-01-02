import{d as e,r as l,a,o as u,g as t,h as s,c as r,f as d,w as o,F as i,p as m,i as n,B as p,A as v,j as c,e as f,z as b,E as g}from"./index-ec7e6dc7.js";import{f as _}from"./index-4742ef83.js";import{g as y,c as V,u as w}from"./user-6ed4ffac.js";import{g as h}from"./role-7b547b0c.js";const k={class:"continer"},U=c("新增"),I=c("取消"),C=c("更新"),N=c("取消"),L=e({__name:"user-module",props:{status:{type:String,default:""},roleList:{type:Object,default:[]},userInfo:{type:Object,default:{}}},emits:["addUser","cancel","editUser"],setup(e,{emit:c}){const f=e,b=l(),g=l({userName:"",password:"",roleId:"",email:"",status:0}),_=a({userName:[{required:!0,message:"用户账号不能为空",trigger:"blur"},{min:3,message:"用户账户不能小于3位数",trigger:"blur"}],password:[{required:!0,message:"用户密码不能为空",trigger:"blur"},{min:6,message:"用户密码不能小于6位数",trigger:"blur"}],roleId:[{required:!0,message:"请选择用户权限",trigger:"blur"}],email:[{required:!0,message:"用户邮箱不能为空",trigger:"blur"},{type:"email",message:"请输入正确的用户邮箱",trigger:"blur"}],status:[{required:!0,message:"请选择用户状态",trigger:"blur"}]}),y=f.roleList,V=()=>{c("cancel")},w=()=>{var e;null==(e=b.value)||e.validate((e=>{e&&c("addUser",g.value)}))},h=()=>{var e;null==(e=b.value)||e.validate((e=>{e&&(g.value.id=f.userInfo.id,c("editUser",g.value))}))};return u((()=>{(()=>{if("edit"===f.status){const{userName:e,roleId:l,email:a,status:u}=f.userInfo;g.value.userName=e,g.value.roleId=l,g.value.email=a,g.value.status=u}})()})),(l,a)=>{const u=t("el-input"),c=t("el-form-item"),f=t("el-option"),L=t("el-select"),j=t("el-switch"),q=t("el-button"),x=t("el-form");return s(),r("div",k,[d(x,{ref_key:"ruleFormRef",ref:b,"status-icon":"",model:g.value,rules:_,"label-width":"120px"},{default:o((()=>[d(c,{label:"用户账号",prop:"userName"},{default:o((()=>[d(u,{modelValue:g.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>g.value.userName=e),placeholder:"请输入用户账号"},null,8,["modelValue"])])),_:1}),d(c,{label:"用户密码",prop:"password"},{default:o((()=>[d(u,{modelValue:g.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>g.value.password=e),placeholder:"请输入用户密码"},null,8,["modelValue"])])),_:1}),d(c,{label:"用户身份",prop:"roleId"},{default:o((()=>[d(L,{modelValue:g.value.roleId,"onUpdate:modelValue":a[2]||(a[2]=e=>g.value.roleId=e),class:"m-2",placeholder:"Select",size:"large"},{default:o((()=>[(s(!0),r(i,null,m(p(y),(e=>(s(),n(f,{key:e.id,label:e.roleName,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),d(c,{label:"用户邮箱",prop:"email"},{default:o((()=>[d(u,{modelValue:g.value.email,"onUpdate:modelValue":a[3]||(a[3]=e=>g.value.email=e),placeholder:"用户账户邮箱"},null,8,["modelValue"])])),_:1}),d(c,{label:"状态",prop:"status"},{default:o((()=>[d(j,{modelValue:g.value.status,"onUpdate:modelValue":a[4]||(a[4]=e=>g.value.status=e),class:"ml-2","active-value":0,"inactive-value":1},null,8,["modelValue"])])),_:1}),d(c,null,{default:o((()=>["add"===e.status?(s(),r(i,{key:0},[d(q,{type:"primary",onClick:w},{default:o((()=>[U])),_:1}),d(q,{onClick:V},{default:o((()=>[I])),_:1})],64)):v("",!0),"edit"===e.status?(s(),r(i,{key:1},[d(q,{type:"primary",onClick:h},{default:o((()=>[C])),_:1}),d(q,{onClick:V},{default:o((()=>[N])),_:1})],64)):v("",!0)])),_:1})])),_:1},8,["model","rules"])])}}}),j={class:"app-container"},q={class:"flex mb-20"},x=c("查询"),T=c("添加管理员"),z=c("编辑"),A=e({__name:"user",setup(e){const i=a(["开启","关闭"]),m=l(""),k=l([]),U=l(!1),I=l([]),C=l("add"),N=l({}),A=()=>{y(void 0).then((e=>{k.value=e.data.userList}))},E=()=>{y(m.value).then((e=>{k.value=e.data.userList}))},F=()=>{U.value=!1},O=()=>{U.value=!0,C.value="add"},S=e=>{V(e).then((e=>{"添加成功"===e.data&&(g.success(e.data),U.value=!1,A())}))},B=e=>{w(e).then((e=>{"更新成功"===e.data&&(g.success(e.data),U.value=!1,A())}))};return u((()=>{A(),h(void 0).then((e=>{I.value=e.data}))})),(e,l)=>{const a=t("el-input"),u=t("el-button"),g=t("el-table-column"),y=t("el-tag"),V=t("el-table"),w=t("el-dialog");return s(),r("div",j,[f("div",q,[d(a,{modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e),placeholder:"请输入用户名称",clearable:"",class:"w-300"},null,8,["modelValue"]),d(u,{class:"ml-10",type:"primary",plain:"",onClick:E},{default:o((()=>[x])),_:1})]),d(u,{type:"primary",class:"mb-20",onClick:O},{default:o((()=>[T])),_:1}),d(V,{data:k.value,border:"",style:{width:"100%"}},{default:o((()=>[d(g,{prop:"id",label:"用户编号"}),d(g,{prop:"userName",label:"用户昵称"}),d(g,{prop:"roleName",label:"用户身份"}),d(g,{prop:"email",label:"用户邮箱"}),d(g,{prop:"status",label:"状态"},{default:o((e=>[d(y,{type:0==e.row.status?"success":"danger"},{default:o((()=>[c(b(i[e.row.status]),1)])),_:2},1032,["type"])])),_:1}),d(g,{prop:"createTime",label:"创建时间"},{default:o((e=>[c(b(p(_)(e.row.createTime)),1)])),_:1}),d(g,{prop:"updateTime",label:"更新时间"},{default:o((e=>[c(b(p(_)(e.row.updateTime)),1)])),_:1}),d(g,{prop:"edit",label:"编辑"},{default:o((e=>[d(u,{link:"",type:"primary",size:"small",onClick:l=>{return a=e.row,N.value=a,U.value=!0,void(C.value="edit");var a}},{default:o((()=>[z])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),d(w,{modelValue:U.value,"onUpdate:modelValue":l[1]||(l[1]=e=>U.value=e),title:"add"===C.value?"新增管理员":"修改管理员",width:"40%"},{default:o((()=>["add"===C.value&&U.value?(s(),n(L,{key:0,status:C.value,roleList:I.value,onAddUser:S,onCancel:F},null,8,["status","roleList"])):v("",!0),"edit"===C.value&&U.value?(s(),n(L,{key:1,status:C.value,roleList:I.value,onEditUser:B,onCancel:F,userInfo:N.value},null,8,["status","roleList","userInfo"])):v("",!0)])),_:1},8,["modelValue","title"])])}}});export{A as default};
