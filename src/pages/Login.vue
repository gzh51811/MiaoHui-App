<template>
    <div id="login">
        <div class="top">
            
            <a href="javascript:;">
                <img src="../assets/image/header_back.png" alt="" @click="backpages">
            </a>
            <h1>登录</h1>
        </div>
        <div class="login_from">
            <!-- <ul class="m-tab">
                <li v-for="page in pages" @click="currentPage=page.component" :key="page.title">{{page.title}}</li>
            </ul> -->
            <!-- 动态组件 -->
            <!-- <keep-alive include="loginGeneral">
                <component :is="currentPage"></component>
            </keep-alive> -->
            <el-tabs v-model="activeName"                       @tab-click="handleClick">
                <el-tab-pane label="账号登录" name="loginGeneral">
                    <loginGeneral />
                </el-tab-pane>
                <el-tab-pane label="新用户注册" name="loginTel">
                    <loginTel />
                </el-tab-pane>
            </el-tabs>
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
            activeName: 'loginGeneral',
            pages:[
                {
                    title:'账号登录',
                    component:'loginGeneral'
                },
                {
                    title:'新用户注册',
                    component:'loginTel'
                },
            ],
            currentPage:'loginGeneral'
        }
    },
    components:{
        loginGeneral,
        loginTel
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        },
        backpages(){
            this.$router.push({name:'Home_mine'})
        }
    }
}
</script>

<style scoped lang="scss">
    #login{
        /deep/ .el-tabs__nav{
            // width: 100% !important;
            // position: absolute;
            transform:translate(-50%,0) !important;
            left: 50%;
            right: 50%;
        }
        /deep/ .el-tabs__item:hover,/deep/ .el-tabs__item.is-active {
            color: #E6A23C;
        }
        /deep/ .el-tabs__active-bar {
            background-color: #E6A23C;
        }
        
    }
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


