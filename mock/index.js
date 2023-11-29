import Mock from "mockjs"

export default [
{
    type:'post',
    url:'/user/login',
    response: data => {
        const {userName,password} = data.query
        if(userName=='admin'&&password=='123456'){
            return Mock.mock({
                code: 200,
                message: "登陆成功",
                token:'@String(30)'
            });
        }else{
            return Mock.mock({
                code: 500,
                message: "账号密码有误",
            });
        }
    }
},{
    type:'post',
    url:'/user/logOut',
    response: data => {
        return Mock.mock({
            code: 200,
            message: "登出成功",
        });
    }
}]