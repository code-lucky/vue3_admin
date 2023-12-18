import Mock from "mockjs"

export default [
    {
        type: 'post',
        url: '/user/userLogin',
        response: data => {
            const { userName, password } = data.body
            if (userName == 'admin' && password == '123456') {
                const data = {
                    code: 200,
                    message: "登陆成功",
                    data: {
                        userInfo: {
                            id: 1,
                            userName: 'admin',
                            headPic: '',
                            phoneNumber: '13111111111',
                            email: '13111111111@gmail.com'
                        },
                        accessToken: '@String(30)',
                        refreshToken: '@String(30)'
                    }
                }
                return Mock.mock(data);
            } else {
                return Mock.mock({
                    code: 500,
                    data: "账号密码有误",
                });
            }
        }
    }, {
        type: 'post',
        url: '/user/logOut',
        response: data => {
            return Mock.mock({
                code: 200,
                message: "登出成功",
            });
        }
    }, {
        type: 'get',
        url: '/menu/getMenuList',
        response: data => {
            const result = {
                "code": 200,
                "message": "success",
                "data": [
                    {
                        "id": 2,
                        "pid": 0,
                        "name": "权限管理",
                        "icon": "Unlock",
                        "perms": null,
                        "component": "/role",
                        "menuType": 0,
                        "sort": 0,
                        "isShow": 0,
                        "isDelete": 0,
                        "createTime": "2023-12-07T09:04:02.632Z",
                        "updateTime": "2023-12-12T09:13:22.000Z"
                    },
                    {
                        "id": 3,
                        "pid": 2,
                        "name": "用户管理",
                        "icon": "",
                        "perms": null,
                        "component": "/role/user",
                        "menuType": 1,
                        "sort": 1,
                        "isShow": 0,
                        "isDelete": 0,
                        "createTime": "2023-12-07T10:49:24.530Z",
                        "updateTime": "2023-12-12T14:43:29.000Z"
                    },
                    {
                        "id": 4,
                        "pid": 2,
                        "name": "权限管理",
                        "icon": "",
                        "perms": null,
                        "component": "/role/menu",
                        "menuType": 1,
                        "sort": 0,
                        "isShow": 0,
                        "isDelete": 0,
                        "createTime": "2023-12-07T10:59:11.624Z",
                        "updateTime": "2023-12-07T16:11:58.000Z"
                    },
                    {
                        "id": 5,
                        "pid": 2,
                        "name": "角色管理",
                        "icon": "",
                        "perms": null,
                        "component": "/role/role",
                        "menuType": 1,
                        "sort": 1,
                        "isShow": 0,
                        "isDelete": 0,
                        "createTime": "2023-12-07T15:15:29.838Z",
                        "updateTime": "2023-12-12T07:35:39.000Z"
                    }
                ]
            }
            return Mock.mock(result);
        }
    }, {
        type: 'get',
        url: '/user/getUserList',
        response: data => {
            const result = {
                "code": 200,
                "message": "success",
                "data": {
                    "userList": [
                        {
                            "id": 1,
                            "roleId": 1,
                            "userName": "admin",
                            "roleName": "超级管理员",
                            "status": 0,
                            "createTime": "2023-11-27T15:10:44.928Z",
                            "updateTime": "2023-11-27T15:10:44.928Z"
                        }
                    ]
                }
            }
            return Mock.mock(result);
        }
    }, {
        type: 'get',
        url: '/role/getRoleUserList',
        response: data => {
            const result = {
                "code": 200,
                "message": "success",
                "data": [
                    {
                        "id": 1,
                        "roleName": "超级管理员",
                        "level": 0,
                        "status": 0,
                        "createTime": "2023-12-02T14:37:32.549Z",
                        "updateTime": "2023-12-02T14:38:55.583Z"
                    }
                ]
            }
            return Mock.mock(result);
        }
    }, {
        type: 'get',
        url: '/menu/getMenuTree',
        response: data => {
            const result = {
                "code": 200,
                "message": "success",
                "data": [
                    {
                        "id": 2,
                        "pid": 0,
                        "name": "权限管理",
                        "icon": "Unlock",
                        "perms": null,
                        "component": "/role",
                        "menuType": 0,
                        "sort": 0,
                        "isShow": 0,
                        "isDelete": 0,
                        "createTime": "2023-12-07T09:04:02.632Z",
                        "updateTime": "2023-12-12T09:13:22.000Z",
                        "children": [
                            {
                                "id": 3,
                                "pid": 2,
                                "name": "用户管理",
                                "icon": "",
                                "perms": null,
                                "component": "/role/user",
                                "menuType": 1,
                                "sort": 1,
                                "isShow": 0,
                                "isDelete": 0,
                                "createTime": "2023-12-07T10:49:24.530Z",
                                "updateTime": "2023-12-12T14:43:29.000Z",
                                "label": "用户管理",
                                "value": 3
                            },
                            {
                                "id": 4,
                                "pid": 2,
                                "name": "权限管理",
                                "icon": "",
                                "perms": null,
                                "component": "/role/menu",
                                "menuType": 1,
                                "sort": 0,
                                "isShow": 0,
                                "isDelete": 0,
                                "createTime": "2023-12-07T10:59:11.624Z",
                                "updateTime": "2023-12-07T16:11:58.000Z",
                                "label": "权限管理",
                                "value": 4
                            },
                            {
                                "id": 5,
                                "pid": 2,
                                "name": "角色管理",
                                "icon": "",
                                "perms": null,
                                "component": "/role/role",
                                "menuType": 1,
                                "sort": 1,
                                "isShow": 0,
                                "isDelete": 0,
                                "createTime": "2023-12-07T15:15:29.838Z",
                                "updateTime": "2023-12-12T07:35:39.000Z",
                                "children": [],
                                "label": "角色管理",
                                "value": 5
                            }
                        ],
                        "label": "权限管理",
                        "value": 2
                    }
                ]
            }
            return Mock.mock(result);
        }
    }]