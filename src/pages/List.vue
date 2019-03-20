<template>
    <div class="liebiao">
        <div class="lbtou">
            <span class="houtui" @click="backpages">   </span>
            {{title.category}}
        </div>
        <div class="wenzhang">
            <div class="wz_1" v-for="good in goodslist" :key="good.good_id" @click="goto(good.good_id)">
                <img ref="elememt" :src="good.img_cover" alt="">
                <div class="youshang"><span class="liulan">{{good.record}}</span>次浏览</div>
                <p class="spmc">{{good.good_name}}</p>
                <p>￥<span class="jiage">{{good.now_price}}</span><span class="taoyan">{{good.cai}}</span><span class="xihuan">{{good.zan}}</span></p>
            </div>
            <!-- <div class="wz_1">
                <img ref="elememt" src="../assets/image/1524_L_1551322215078.jpg" alt="">
                <div class="youshang"><span class="liulan">26</span>次浏览</div>
                <p class="spmc">【Robotime若态】手工DIY拼图-花盆款</p>
                <p>￥<span class="jiage">104.00</span><span class="taoyan">0</span><span class="xihuan">3</span></p>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1528_L_1552362608549.jpg" alt="">
                <div class="youshang"><span class="liulan">26</span>次浏览</div>
                <p class="spmc">【Robotime若态】手工DIY拼图-花盆款</p>
                <p>￥<span class="jiage">104.00</span><span class="taoyan">0</span><span class="xihuan">3</span></p>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1488_L_1539065503706.jpg" alt="">
                <div class="youshang"><span class="liulan">26</span>次浏览</div>
                <p class="spmc">【Robotime若态】手工DIY拼图-花盆款</p>
                <p>￥<span class="jiage">104.00</span><span class="taoyan">0</span><span class="xihuan">3</span></p>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1469_L_1520416031419.jpg" alt="">
                <div class="youshang"><span class="liulan">26</span>次浏览</div>
                <p class="spmc">【Robotime若态】手工DIY拼图-花盆款</p>
                <p>￥<span class="jiage">104.00</span><span class="taoyan">0</span><span class="xihuan">3</span></p>
            </div> -->
        </div>
        
        
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodslist:[],
            title:{}
        };
    },
    watch:{
        $route(to,from){
            console.log('watch:',to,from)
            this.getData()
        }
    },
    created(){
        let {category:category} = this.$route.params;
        // console.log(category);
        this.title = {category:category}
        this.$axios
        .get("http://localhost:12580/goodslist", {
            params: {
                "page": 1,
                "limit": 20
            }
        })
        .then(res => {

            let data = res.data.data;
            for(var i= 0;i < data.length;i++){

                data[i].img_cover = require('../assets/image/' +data[i].img_cover);

            }
            this.goodslist = data;

        });
    },
    methods:{
        goto(id){
      // params传参，不支持path跳转
            let category = this.title.category;

            this.$router.push({name:'Detail_goods',query:{id},params:{id:id,category:category}})

      },
      backpages(){
          this.$router.push({name:'Home'})
      }
    }
}
</script>
<style lang="scss" scoped>
    .liebiao{
        display: flex;
        flex-direction: column;
        height: 100%;
        // padding: 0 3px;
        .lbtou{
            display: flex;
            font-weight: 900;
            justify-content: center;
            width: 100%;
            position: relative;
            height: 40px;
            font-size: 16px;
            line-height: 40px;
            background: #000;
            color: aliceblue;
            .houtui{
                margin: 10px 0 0 15px;
                display: block;
                width: 20px;
                height: 20px;
                position: absolute;
                left: 0;
                background:url(../assets/image/header_back.png) no-repeat;
                background-size: 100% 100%;
            }
        }
        .wenzhang{
            display: flex;
            flex:1;
            overflow: auto;
            flex-direction: column;
            .wz_1{
                width: 100%;
                // height: 415px;
                position: relative;
                img{
                    width: 100%;
                }
                .youshang{
                    // width: 60px;
                    height: 18px;
                    padding: 0 2px;
                    font-size: 8px;
                    background: hsla(0, 0%, 0%, 0.664);
                    border: 2px solid rgb(100, 100, 100);
                    color: #fff;
                    border-radius:8px;
                    position: absolute;
                    right: 8px;
                    top: 3px;
                }
                p{
                    text-align:left;
                    padding-left: 5px;
                    color:#f5a134;
                    font-weight:900;
                    font-size: 17px;
                    line-height: 30px;
                    .xihuan{
                        color: #998f8f;
                        float: right;
                        display: block;
                        width: 30px;
                        padding-left: 30px;
                        background: url(../assets/image/like_gray.png) no-repeat left center;
                        background-size: 25px 25px;
                    }
                    .taoyan{
                        color: #998f8f;
                        float: right;
                        display: block;
                        width: 30px;
                        padding-left: 30px;
                        background: url(../assets/image/dislike_gray.png) no-repeat left center;
                        background-size: 25px 25px;
                    }
                }
                .spmc{
                    color: #000;
                    line-height: 40px;
                }
            }
        }
    }


</style>


