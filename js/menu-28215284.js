import{_ as e,d as l,r as a,s as u,o as t,t as o,g as n,h as d,c as s,f as i,w as c,F as m,n as r,i as p,e as v,v as f,x as _,a as h,k as V,y as b,z as y,A as w,E as k,B as C,C as U,D as g,G as T}from"./index-84c95109.js";import{f as I}from"./index-4742ef83.js";const S={class:"icon-continer"},x=["onClick"],M={class:"icon-item-typeface"};var L=e(l({__name:"icon-menu",emits:["getIconKey"],setup(e,{emit:l}){const h=a([]),V=a(""),b=a([]);u(V,((e,l)=>{b.value=[],e?h.value.forEach(((l,a)=>{l.indexOf(e)>-1&&b.value.push(l)})):b.value=h.value}));return t((()=>{for(const[e]of Object.entries(o))h.value.push(e);b.value=h.value})),(e,a)=>{const u=n("el-input"),t=n("el-icon"),o=n("el-col"),h=n("el-row");return d(),s("div",S,[i(u,{placeholder:"请输入关键字",class:"icon-continer-input",modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e)},null,8,["modelValue"]),i(h,null,{default:c((()=>[(d(!0),s(m,null,r(b.value,((e,a)=>(d(),p(o,{span:4,key:a},{default:c((()=>[v("div",{class:"icon-item",onClick:a=>(e=>{l("getIconKey",e)})(e)},[i(t,{size:28},{default:c((()=>[(d(),p(f(e)))])),_:2},1024),v("div",M,_(e),1)],8,x)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-3ad5e557"]]);const j=V("新增"),z=V("取消"),O=V("更新"),K=V("取消"),A=l({__name:"menu-model",props:{status:{type:String,default:"add"},treeList:{type:[Object],default:[{value:0,label:"主目录",children:[]}]},menuItem:{type:Object,defalut:{}}},emits:["cancel","addMenu","updateMenu"],setup(e,{emit:l}){const u=e,o=a(!1);a([]);const v=h(["目录","菜单","按钮"]),f=h(["显示","隐藏"]),y=a({pid:0,menuType:0,icon:"",name:"",sort:0,component:"",isShow:0}),w=a(""),k=()=>{},C=()=>{l("cancel")},U=()=>{l("addMenu",y.value)},g=e=>{y.value.icon=e,o.value=!1};return t((()=>{(()=>{if(u.menuItem){const{id:e,pid:l,menuType:a,icon:t,name:o,sort:n,component:d,isShow:s}=u.menuItem;y.value={pid:l,menuType:a,icon:t,name:o,sort:n,component:d,isShow:s},w.value=e}})()})),(a,u)=>{const t=n("el-tree-select"),h=n("el-form-item"),T=n("el-radio"),I=n("el-radio-group"),S=n("CirclePlus"),x=n("el-icon"),M=n("el-input"),A=n("el-input-number"),E=n("el-button"),G=n("el-form"),B=n("el-dialog");return d(),s(m,null,[i(G,{inline:!0},{default:c((()=>[i(h,{label:"上级菜单",class:"w-hundred"},{default:c((()=>[i(t,{modelValue:y.value.pid,"onUpdate:modelValue":u[0]||(u[0]=e=>y.value.pid=e),data:e.treeList,"check-strictly":"","render-after-expand":!1,class:"w-hundred"},null,8,["modelValue","data"])])),_:1}),i(h,{label:"菜单类型",class:"w-hundred"},{default:c((()=>[i(I,{modelValue:y.value.menuType,"onUpdate:modelValue":u[1]||(u[1]=e=>y.value.menuType=e),class:"w-hundred"},{default:c((()=>[(d(!0),s(m,null,r(v,((e,l)=>(d(),p(T,{label:l,key:l},{default:c((()=>[V(_(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(h,{label:"菜单图标",class:"w-hundred"},{default:c((()=>[i(M,{placeholder:"请选择菜单图标",modelValue:y.value.icon,"onUpdate:modelValue":u[3]||(u[3]=e=>y.value.icon=e),class:"w-hundred"},{append:c((()=>[i(x,{onClick:u[2]||(u[2]=e=>o.value=!0)},{default:c((()=>[i(S)])),_:1})])),_:1},8,["modelValue"])])),_:1}),i(h,{label:"菜单名称"},{default:c((()=>[i(M,{placeholder:"请输入菜单名称",modelValue:y.value.name,"onUpdate:modelValue":u[4]||(u[4]=e=>y.value.name=e)},null,8,["modelValue"])])),_:1}),i(h,{label:"显示排序"},{default:c((()=>[i(A,{modelValue:y.value.sort,"onUpdate:modelValue":u[5]||(u[5]=e=>y.value.sort=e),min:0,max:1e3,"controls-position":"right",onChange:k},null,8,["modelValue"])])),_:1}),i(h,{label:"路径组件"},{default:c((()=>[i(M,{placeholder:"请输入组件路径",modelValue:y.value.component,"onUpdate:modelValue":u[6]||(u[6]=e=>y.value.component=e)},null,8,["modelValue"])])),_:1}),i(h,{label:"显示状态"},{default:c((()=>[i(I,{modelValue:y.value.isShow,"onUpdate:modelValue":u[7]||(u[7]=e=>y.value.isShow=e)},{default:c((()=>[(d(!0),s(m,null,r(f,((e,l)=>(d(),p(T,{label:l,key:l},{default:c((()=>[V(_(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(h,{align:"center"},{default:c((()=>["add"===e.status?(d(),s(m,{key:0},[i(E,{type:"primary",onClick:U},{default:c((()=>[j])),_:1}),i(E,{onClick:C},{default:c((()=>[z])),_:1})],64)):b("",!0),"edit"===e.status?(d(),s(m,{key:1},[i(E,{type:"primary",onClick:u[8]||(u[8]=e=>(()=>{const{pid:e,menuType:a,icon:u,name:t,sort:o,component:n,isShow:d}=y.value,s={pid:e,menuType:a,icon:u,name:t,sort:o,component:n,isShow:d,id:w.value};l("updateMenu",s)})())},{default:c((()=>[O])),_:1}),i(E,{onClick:C},{default:c((()=>[K])),_:1})],64)):b("",!0)])),_:1})])),_:1}),i(B,{modelValue:o.value,"onUpdate:modelValue":u[9]||(u[9]=e=>o.value=e),title:"菜单图标"},{default:c((()=>[i(L,{onGetIconKey:g})])),_:1},8,["modelValue"])],64)}}}),E={class:"flex mb-20"},G=V("查询"),B=V("新增"),D=V("编辑"),F=l({__name:"menu",setup(e){const l=a(!1),u=a(!1),o=a(""),r=a([]),b=h(["显示","隐藏"]),S=a([]),x=a({}),M=()=>{l.value=!1,u.value=!1},L=e=>{w(e).then((e=>{k.success(e.data),l.value=!1,window.location.reload()}))},j=e=>{C(e).then((e=>{"更新成功"===e.data&&(k.success(e.data),u.value=!1,window.location.reload())}))};return t((()=>{g().then((e=>{})),T().then((e=>{r.value=e.data;const l=[{value:0,label:"主目录",children:e.data}];S.value=l}))})),(e,a)=>{const t=n("el-input"),h=n("el-button"),w=n("el-table-column"),k=n("el-icon"),C=n("el-tag"),g=n("el-table"),T=n("el-dialog"),z=n("IconModel");return d(),s(m,null,[v("div",E,[i(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),placeholder:"请输入菜单名称",clearable:"",class:"w-300"},null,8,["modelValue"]),i(h,{class:"ml-10",type:"primary",plain:""},{default:c((()=>[G])),_:1})]),i(h,{type:"primary",class:"mb-20",onClick:a[1]||(a[1]=e=>l.value=!0)},{default:c((()=>[B])),_:1}),i(g,{data:r.value,border:"",style:{width:"100%"},"row-key":"id"},{default:c((()=>[i(w,{prop:"name",label:"菜单名称"}),i(w,{prop:"icon",label:"图标"},{default:c((e=>[i(k,{size:20},{default:c((()=>[(d(),p(f(e.row.icon)))])),_:2},1024)])),_:1}),i(w,{prop:"sort",label:"排序"}),i(w,{prop:"perms",label:"权限标识"}),i(w,{prop:"component",label:"组件路径"}),i(w,{prop:"isShow",label:"状态"},{default:c((e=>[i(C,null,{default:c((()=>[V(_(b[e.row.isShow]),1)])),_:2},1024)])),_:1}),i(w,{prop:"createTime",label:"创建时间"},{default:c((e=>[V(_(y(I)(e.row.createTime)),1)])),_:1}),i(w,{prop:"updateTime",label:"更新时间"},{default:c((e=>[V(_(y(I)(e.row.updateTime)),1)])),_:1}),i(w,{prop:"edit",label:"编辑"},{default:c((e=>[i(h,{link:"",type:"primary",size:"small",onClick:l=>{return a=e.row.id,void U(a).then((e=>{x.value=e.data[0],u.value=!0}));var a}},{default:c((()=>[D])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i(T,{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=e=>l.value=e),title:"新增菜单",width:"40%"},{default:c((()=>[i(A,{onCancel:M,onAddMenu:L,treeList:S.value},null,8,["treeList"])])),_:1},8,["modelValue"]),i(T,{modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e),title:"编辑菜单",width:"40%"},{default:c((()=>[i(A,{onCancel:M,onUpdateMenu:j,menuItem:x.value,treeList:S.value,status:"edit"},null,8,["menuItem","treeList"])])),_:1},8,["modelValue"]),i(z)],64)}}});export{F as default};
