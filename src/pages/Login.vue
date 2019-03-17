<template>
    <div id="login">
        <div class="top">
            
            <a href="">
                <img src="../assets/image/header_back.png" alt="">
            </a>
            <h1>登录</h1>
        </div>
        <div class="login_from">
            <ul class="m-tab">
                <li v-for="page in pages" @click="currentPage=page" :key="page">{{page}}</li>
            </ul>
            <!-- 动态组件 -->
            <keep-alive include="loginGeneral">
                <component :is="currentPage"></component>
            </keep-alive>
        </div>
        <!-- <loginGeneral>普通登录</loginGeneral>
        <loginTel>手机动态验证码登录</loginTel> -->

    </div>
</template>

<script>
import loginTel from "../components/Login_tel.vue";
import loginGeneral from "../components/Login_general.vue";
export default {
    data(){
        return {
            pages:['loginGeneral','loginTel'],
            currentPage:'loginGeneral'
        }
    },
    components:{
        loginGeneral,
        loginTel
    }
}
</script>

<style scoped lang="scss">
    .top{
        height:.986667rem;
        background-color: #232425 !important;
        color: #fff;
        font-weight: 700;
        line-height: .986667rem;
        position: relative;
        h1{
            width: 100%;
            text-align: center;
            font-size: .48rem;
            // float: left;
        }
        a{
            display: block;
            position: absolute;
            // float: left;
            top: .12rem;
            left: .346667rem;
            // margin: .093333rem 0 0 .346667rem;
            height: .986667rem;
            // vertical-align: middle;
            img{
                width: .56rem;
            }
        }
    }
    .login_from{
        .m-tab{
            margin-top: .16rem;
            line-height: 1.6rem;
            font-size: .4rem;
            color: #d1d0d1;
            overflow: hidden;
            border-bottom: 1px solid #dad9da;
            li{
                float: left;
                width: 5rem;
            }
        }
    }
</style>


