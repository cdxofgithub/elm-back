import axios from 'axios'
import { baseUrl } from '../config/env'

export const login = params => {return axios.post(baseUrl + '/admin/login', params).then(res => res.data)}
export const getAdminInfo = () => {return axios.get(baseUrl + '/admin/info').then(res => res.data)}
export const signout = () => {return axios.get(baseUrl + '/admin/signout').then(res => res.data)}
