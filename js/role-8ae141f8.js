import{l as e}from"./index-aaaebed5.js";function r(r){return e({url:`/role/getRoleUserList?${r?"roleName=":""}${r||""}`,method:"get"})}function t(r){return e({url:"/role/addRoleUser",method:"post",data:r})}function o(r){return e({url:"/role/updateRoleUser",method:"post",data:r})}export{t as a,r as g,o as u};
