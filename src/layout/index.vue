<template>
    <el-container class="layout">
        <el-header class="layout-header">
            <Header />
        </el-header>
        <el-container class="layout-container">
            <el-aside width="200px" class="layout-container-aside">
                <Aside />
            </el-aside>
            <el-main class="layout-container-main">
                 <el-header class="layout-container-main-header">
                    <Breadcrumb />
                 </el-header>
                  <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Aside from './components/Aside'
import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb'
export default {
    name: 'Layout',
    components: {
        Aside,
        Header,
        Breadcrumb
    }
}
</script>

<style lang="less" scoped>
    .layout {
        width: 100%;
        height: 100%;
        &-header {
            background-color: #67C23A;
        }
        &-container {
            &-aside {
                border-right: 1px solid #dcdfe6;
                background-color: rgb(225, 243, 216);
            }
            &-main {
                padding: 0;
                &-header {
                    border-bottom: 1px solid #dcdfe6;
                }
            }
        }
    }
</style>