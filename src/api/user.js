import request from '../utils/request';
const baseURL = 'http://localhost:8090/';


export function login (data) {
    return request({
        url: baseURL + 'login',
        method: 'get',
        params: data
    })
}

export function getUserInfo(data) {
    return request({
        url:  baseURL + 'getUserInfo',
        method: 'post',
        params: data
    })
}
