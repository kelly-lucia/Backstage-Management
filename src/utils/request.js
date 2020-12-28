// 数据请求

import axios from 'axios'

const service = axios.create({
    baseURL: '',
    withCredentials: true,
    timeout: 5000 
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    request => {
        return request
    },
    error => {
        return Promise.reject(error)
    }
)

/**
 * 接收拦截器
 */
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)
export default service