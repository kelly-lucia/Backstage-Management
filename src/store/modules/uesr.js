import { login, getUserInfo } from '../../api/user'
import { getToken, setToken } from '../../utils/cookies'

const defaultState =  {
    token: getToken(),  // token
    userInfo: {},  // 用户信息
    roleList: []  // 用户角色
};

const mutations = {

    // 设置token
    SET_TOKEN: (state, token) => {
        state.token = token;
    },

    // 设置userinfo
    SET_USERINFO: (state, userInfo) => {
        state.userInfo = userInfo;
    },

    // 设置角色
    SET_ROLE: (state, roleList) => {
        state.roleList = roleList;
    }
}

const actions = {

    /**
     * 登录
     * @param {*} commit 
     * @param {*} loginForm 参数
     */
    doLogin({ commit }, loginForm) {
        return new Promise((resolve, reject) => {
            login(loginForm).then(res => {
                commit('SET_TOKEN', res.data.token);
                setToken(res.data.token);
                resolve(res.data)
            }).catch(error => {
                reject(error);
            })
        })
    },

    /**
     * 获取用户信息
     * @param {*} param0 
     * @param {*} loginForm 
     */
    getUserInfo({ commit }, loginForm) {
        return new Promise((resolve, reject) => {
            getUserInfo(loginForm).then(res => {
                commit('SET_USERINFO', res.data.userInfo);
                commit('SET_ROLE', res.data.roleList);
                resolve(res.data)
            }).catch(error => {
                reject(error);
            });
        })
    }
}

export default {
    defaultState,
    mutations,
    actions
}