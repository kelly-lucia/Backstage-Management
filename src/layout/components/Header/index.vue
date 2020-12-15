<template>
    <div class="header-content">
        <el-dropdown class="user-dropdown">
            <div class="user-dropdown-toggle">
                <img src="../../../assets/imgs/UserSecret.png"/>
                <span>超级管理员</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
.header-content {
    height: 60px;
    line-height: 60px;
}
.user-dropdown {
    float: right;
    &-toggle {
        img {
            width: 20px;
            vertical-align: middle;
        }
        span {
            color: #fff;
            vertical-align: middle;
            margin-left: 8px;
            font-size: 16px;
        }
        i {
            color: #fff;
            vertical-align: middle;
        }
    }
    
}
</style>