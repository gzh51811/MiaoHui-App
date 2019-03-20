<template>
    <div class="main">
        <div class="sztou" >
            <span class="houtui" @click="houtui" >   </span>
            设置
        </div>
        <div class="szlogo">  
            <img src="../assets/image/round_logo.png" alt="">
            <span>当前版本号:2.7.5</span>
        </div>
        <div class="grzxnr">
            <div class="youhj guanli">分享秒汇应用给好友<img src="../assets/image/qianjin1.png" alt=""></div>
            <div class="shouhdz guanli">商务合作<img src="../assets/image/qianjin1.png" alt=""></div>
            <div class="wodbs guanli">免责声明<img src="../assets/image/qianjin1.png" alt=""></div>
            <div class="zhanghgl guanli">服务条款和隐私保护<img src="../assets/image/qianjin1.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        houtui(){
            this.$router.push({name:"Home_mine"});
        }
    }
}
</script>
<style lang="scss" scoped>
    .main{
        padding-bottom: 80px;
        width: 100%;
        .sztou{
            display: flex;
            font-weight: 900;
            justify-content: center;
            width: 100%;
            position: relative;
            height: 50px;
            font-size: 18px;
            line-height: 50px;
            background: #000;
            color: aliceblue;
            .houtui{
                margin: 15px 0 0 15px;
                display: block;
                width: 20px;
                height: 20px;
                position: absolute;
                left: 0;
                background:url(../assets/image/header_back.png) no-repeat left center;
                background-size: 100% 100%;
            }
        }
        .szlogo{
            display: flex;
            align-items: center;
            overflow: auto;
            width: 100%;
            height: 30%;
            flex-direction: column;
            position: relative;
            height: 30%;
            margin: 30px 0 40px 0;
            span{
                font-size: 18px;
                color: rgb(199, 186, 186);
                margin-top: 20px;
            }
        }
        .grzxnr{
            width: 100%;
            background: rgb(252, 249, 249);
            .guanli{
                height: 45px;
                background: #fff;
                font-size: 18px;
                font-weight: 900;
                line-height: 45px;
                text-align: left;
                padding-left: 20px;
                color: rgb(80, 80, 80);
                position: relative;
                border-top: 1px solid rgb(238, 236, 236);
                img{
                    position: absolute;
                    right: 3%;
                    top: 25%;
                    height: 30px;
                }
            }
        }

    }

</style>