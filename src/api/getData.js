import axios from 'axios'
import { baseUrl } from '../config/env'

axios.defaults.withCredentials = true
axios.defaults.baseURL = baseUrl


// 登录
export const login = params => {return axios.post('/admin/login', params).then(res => res.data)}

// 获取用户信息
export const getAdminInfo = () => {return axios.get('/admin/info').then(res => res.data)}

// 退出登录
export const signout = () => {return axios.get('/admin/signout').then(res => res.data)}

// 用户注册量
export const userCount = data => {return axios.get('/statis/user/' + data + '/count').then(res => res.data)}
