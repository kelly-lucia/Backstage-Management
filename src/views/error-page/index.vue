<template>
    <div class="error-box">
        <div class="error-box-info">
            <img src="../../assets/error-page/icon-test.svg"/>
            <p>您寻找的页面已失去联系……</p>
        </div>
    </div>
</template>

<style lang="less" scoped>

.error-box {
    height: 100%;
    margin: 0 auto;
    background-color:rgb(103, 194, 58);
    &-info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            width: 500px;
        }
        p {
            color: #fff;
            font-size: 24px;
            padding: 30px 0;
            text-align: center;
        }
    }
    
}

</style>