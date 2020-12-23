import axios from 'axios';
import qs from 'qs';
import store from '../store/index';

//基础路径
const baseUrl = "/api";
// 请求拦截
axios.interceptors.request.use(config => {
    console.group("本地请求的路径为:", config.url)
    // 从store中取出的user里边的token
    // console.log(store.state.user);
    if (config.url !== baseUrl + '/api/userlogin') {
        config.headers.authorization = store.state.user.token
    }
    return config
})

// 响应拦截
axios.interceptors.response.use(res => {
    console.group("本次响应的路径为:" + res.config.url)
    console.log(res);
    return res
})

// 添加菜单
export const requestAddMenu = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/menuadd',
        data: qs.stringify(data)
    })
}
// 菜单列表
export const requestMenuList = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/menulist',
        params: params
    })
};
//菜单详情
export const requestMenuOne = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/menuinfo',
        params: params
    })
};
// 修改菜单
export const requestUpdateMenu = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/menuedit',
        data: qs.stringify(data)
    })
}
// 删除菜单
export const requestDelMenu = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/menudelete',
        data: data
    })
}
// 添加角色
export const requestAddRole = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/roleadd',
        data: qs.stringify(data)
    })
}
// jues列表
export const requestRoleList = () => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/rolelist'
    })
}
// 角色详情
export const requestRoleOne = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/roleinfo',
        params: params
    })
}
//修改角色
export const requestUpdateRole = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/roleedit',
        data: qs.stringify(data)
    })
}

// 删除角色
export const requestDelRole = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/roledelete',
        data: qs.stringify(data)
    })
}

//添加管理员
export const requestAddManager = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/useradd',
        data: qs.stringify(data)
    })
}
//获取管理员总记录数
export const requestCount = () => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/usercount'
    })
}
// 管理员列表
export const requestManagerList = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/userlist',
        params: params
    })
}
// 管理员详情
export const requestManagerOne = (params) => {
    return axios({
        method: 'get',
        url: baseUrl + '/api/userinfo',
        params: params
    })
}
// 管理员修改
export const requestManagerUpdate = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/useredit',
        data: qs.stringify(data)
    })
}
// 删除管理员
export const requestDelManager = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/userdelete',
        data: qs.stringify(data)
    })
}
// 登录请求
export const requestLogin = (data) => {
    console.log(12);
    return axios({
        method: 'post',
        url: baseUrl + '/api/userlogin',
        data: qs.stringify(data)
    })
}
// 添加商品
export const requestAddCategory = (data) => {
    return axios({
        method: 'post',
        url: baseUrl + '/api/cateadd',
        data: qs.stringify(data)
    })
}