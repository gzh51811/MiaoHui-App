<template>
    <div class="account">
        <div class="top">
            <a href="javascript:;">
                <img src="../assets/image/header_back.png" alt="" @click="backpages">
            </a>
            <h1>账号管理</h1>
        </div>
        <div class="content">
            <ul>
                <li>
                    <span class="label-left">头像</span>
                    <img  class="label-right" src="../assets/image/user-avatar.png" alt="">
                </li>
                <li>
                    <span class="label-left">昵称</span>
                    <span class="label-right">{{username}}</span>
                </li>
                <li>
                    <span class="label-left">性别</span>
                    <span class="label-right">保密</span>
                </li>
                <li>
                    <span class="label-left">生日</span>
                    <span class="label-right">0000-00-00</span>
                </li>
                <li>
                    <span class="label-left">手机号</span>
                    <span class="label-right">绑定</span>
                </li>
                <li>
                    <span class="label-left">邮箱</span>
                    <span class="label-right">绑定</span>
                </li>
                <li>
                    <span class="label-left">密码</span>
                    <span class="label-right">******</span>
                </li>
            </ul>
            <button class="button" @click="quit">退出登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            username:''
        }
    },
    created(){
        this.username = (localStorage.getItem('username')).slice(1,-1)
    },
    methods:{
        backpages(){
            this.$router.push({name:'Home_mine'})
        },
        quit(){
            localStorage.removeItem('username');
            localStorage.removeItem('id');
            this.$router.push({name:'Login'})
        }
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
            font-size: .40rem;
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
    .content{
        margin-top: .266667rem;
        ul{
            padding: 0 .4rem;//10
            display: flex;
            flex-direction: column;

            img{
                width: 1.28rem;
                height: 1.28rem;
            }
            li{
                // float: left;
                border-bottom: 1px solid #ccc;
                padding: 0 .266667rem;
                line-height: 1.6rem;
                font-size: .45rem;
                .label-left{
                    float: left;
                }
                .label-right{
                    float: right;
                }
                .label-right::after{
                    content:'>';
                    margin-left: .133333rem;
                    width: .133333rem;
                    height: .133333rem;
                }
                &:nth-child(1)::after{
                    content: '';
                }
            }
        }
        .button{
            background-color: red;
            margin-top: .533333rem;
            height: 1.066667rem;//80
            width: 92%;
            border-radius: .08rem;
            border: none !important;
            color: #fff;
            font-weight: 700;
            line-height: 1.066667rem;
            font-size: .4rem;
        }
    }
</style>
