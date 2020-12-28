<template>
    <div>hello world</div>
</template>

<script>
import { login } from '../../api/user'

export default {
    data() {
        return {

        }
    },
    created() {
        this.loginInfo()
    },
    methods: {
        loginInfo() {
            console.log(login)
            login({}).then((res) => {
                console.log(res)
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>