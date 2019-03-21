<template>
    <div class="main">
        <div class="zt">
            专题
        </div>
        <div class="wenzhang">
            <div class="wz_1" v-for="good in goodslist" :key="good._id">
                <img ref="elememt" :src="good.img" alt="" >
                <div class="wz_s1" @click="tiaozhuan(good.uid)">
                    <div>
                        <a href="javascript:;" class="biaoti">{{good.special}}</a>
                        <a href="javascript:;" class="yuedu"><span>{{good.Read}}</span>次阅读</a>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            goodslist:[]
        }
    },
    created(){
        this.$axios
        .get("/zhuanti", {
            params: {
                "page": 1,
                "limit": 20
            }
        })
        .then(res => {
            let data = res.data.data;
            for(var i= 0;i < data.length;i++){
                data[i].img = require('../assets/image/' +data[i].img);
            }
            this.goodslist = data;
            // console.log(data);
        });
    },
    methods:{
        tiaozhuan(index){
            this.$router.push({name:'Detail_article',query:{gid:index},params:{gid:index}});
        }
    }
}
</script>
<style lang="scss" scoped>
    .zt{
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
        overflow: auto;
        flex-direction: column;
        padding-bottom: 80px;
        .wz_1{
            width: 100%;
            position: relative;
            margin-bottom: 15px;
            img{
                width: 100%;
            }
            .wz_s1{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                // width: 100%;
                // height: 168px;
                bottom: 4px;
                right: 0;
                opacity: 0.5;
                background: #000;
                // padding-top: 18%;
                div{
                    position: absolute;
                    transform: translate(-50%,-50%);
                    top: 50%;
                    left: 50%;
                    width: 100%;
                }
                .biaoti{
                    display: block;
                    font-size: 22px;
                    text-decoration:none;
                    color: #fff;
                    font-weight:900;
                    margin-bottom: 15px;
                    width: 100%;
                }
                .yuedu{
                    width: 80px;
                    font-size: 18px;
                    text-decoration:none;
                    color: #fff;
                    border: 1px solid #fff;
                    // font-weight:900;
                }
            }
        }
    }
</style>
