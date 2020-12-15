const getters = {
    token: state => state.user.token,
    routers: state => state.user.routers,
    userInfo: state => state.user.userInfo
}

export default getters