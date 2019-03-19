<template>
    <div class="main">
        <!-- <p class="mylz">妙语连珠</p>  -->
        <div class="mylz">
            妙语连珠
        </div>
        <div class="wenzhang">
            <div class="wz_1" v-for="good in goodslist" :key="good.gid">
                <img ref="elememt" :src="good.img1" alt="">
                <span class="wz_s1">
                    <a href="#" class="biaoti">{{good.Title}}</a>
                </span>
                <p>冻龄少女</p>
                <p>阅读：<span class="yuedu">{{good.Read}}</span></p>
            </div>
            <!-- <div class="wz_1">
                <img ref="elememt" src="../assets/image/1551165706653559302.jpg" alt="">
                <span class="wz_s1">
                    <a href="#" class="biaoti">冰岛“黑科技”，冰冻时间</a>
                </span>
                <p>冻龄少女</p>
                <p>阅读：<span class="yuedu">104</span></p>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1551165706653559302.jpg" alt="">
                <span class="wz_s1">
                    <a href="#" class="biaoti">冰岛“黑科技”，冰冻时间</a>
                </span>
                <p>冻龄少女</p>
                <p>阅读：<span class="yuedu">104</span></p>
            </div> -->
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goodslist:[]
        };
    },
    created(){
        this.$axios
        .get("http://localhost:12580/mylz", {
            params: {
                "page": 1,
                "limit": 20
            }
        })
        .then(res => {
            console.log(res);
            let data = res.data.data;
            for(var i= 0;i < data.length;i++){
                // console.log(data[i].img_cover)
                data[i].img1 = require('../assets/image/' +data[i].img1);
                // data[i].img_cover = './src/assets/image/' +data[i].img_cover;
            }
            this.goodslist = data;
            console.log(data);
        });
    }
}
</script>

<style lang="scss" scoped>
    .mylz{
        display: flex;
        justify-content: center;
        // text-align:center;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        background: #000;
        color: aliceblue;
        font-weight:900;
    }
    .wenzhang{
        display: flex;
        flex:1;
        // background: #0f0;
        overflow: auto;
        flex-direction: column;
        margin-bottom: 80px;
        .wz_1{
            width: 100%;
            // height: 300px;
            // background: #f50606;
            position: relative;
            border-bottom: 1px solid rgb(197, 197, 197);
            padding-bottom: 5px;
            margin-bottom: 5px;
            img{
                width: 100%;
            }
            .wz_s1{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 121px;
                opacity: 0.5;
                background: #000;
                padding-top: 120px;
                .biaoti{
                    display: block;
                    font-size: 22px;
                    text-decoration:none;
                    color: #fff;
                    font-weight:900;
                }
            }
            p{
                text-align:left;
                padding-left: 5px;
                .yuedu{
                    color:#f5a134;
                    font-weight:900;
                }
            }
        }
    }
</style>
