<template>
<div>
    <div class="hot_goods">
        <ul class="hot_goodslist">
            <li v-for="(goods,index) in hotGoods" :key="index" @click="jumpToDetail(goods.good_id)">
                <img :src="goods.img_cover">
                <h3>{{goods.good_name}}</h3>
                <div class="bottom_price">
                    <span class="now_price">￥{{goods.now_price}}</span>
                    <span class="xing">
                        <img src="../assets/image/like_gray.png" alt="">{{goods.zan}}
                        <img src="../assets/image/dislike_gray.png">{{goods.cai}}
                    </span>
                </div>
            </li>
        </ul>
        <div class="limitBottom" v-show="limitBottom">我是有底线的</div>
        <div class="loadingGif" v-show="loadingGif">
            <img src="../assets/image/loading.gif" alt="">
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            hotGoods:[],
            count:0,
            page:1,
            loading:true,
            loadingGif:false,
            limitBottom:false
        }
    },
    mounted(){
        this.$nextTick(function() {
            window.addEventListener("scroll", this.onScroll);
            //  window.addEventListener("goodslist.timer", this.countdown);
        })
    },
    methods:{

        //点击商品跳转
        jumpToDetail(id){
            let category = '首页'
            this.$router.push({name:'Detail_goods',query:{id,category},params:{id,category}});
        },
         //懒加载
        getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
        },
//     // 获取当前可视范围的高度
        getClientHeight() {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(
            document.body.clientHeight,
            document.documentElement.clientHeight
            );
        } else {
            clientHeight = Math.max(
            document.body.clientHeight,
            document.documentElement.clientHeight
            );
        }
        return clientHeight;
        },

//     // 获取文档完整的高度
        getScrollHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );
        },
//     // 滚动事件触发下拉加载
        async onScroll() {
            if (
                this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <=
                0
            ) {
            if(this.page<this.count){
                this.loadingGif = true;
                this.load = false;
                if (this.loading) {
                let res = await this.$axios.get("/goodslist", {
                        params: {
                            "page": ++this.page,
                            "limit": 5
                        }
                    })
                    .then(res => {
                    // console.log(res)
                    let arr = res.data.data;
                    // console.log(arr)
                    // console.log(this.goodslist)
                    for(let i=0; i<arr.length; i++){
                        arr[i].img_cover = require('../assets/image/'+arr[i].img_cover);
                    }
                    setTimeout(() => {
                        for (var i = 0; i < arr.length; i++) {
                        this.hotGoods.push(arr[i]);
                        }
                        this.loadingGif = false;
                    }, 2000);
                    this.load = true;
                    });
                // console.log(res)
                }
            }else{
                this.limitBottom = true;
            }
        }
    }

    },
    created(){
        this.$axios.get("/goodslist", {
            params: {
                "page": 1,
                "limit": 5
            }
        })
        .then(res => {
            // console.log(res);
            let data = res.data.data;
            for(let i=0; i<data.length; i++){
                data[i].img_cover = require('../assets/image/'+data[i].img_cover);
            }
            this.hotGoods = data;
            this.count = Math.ceil(res.data.count/5);
            // console.log(this.count);
        });
    }
}
</script>

<style lang="scss" scoped>
    .hot_goods{
        padding-bottom: 1.6rem;
        .hot_goodslist{
            width: 100%;
            li{
                width: 100%;
                img{
                    width: 100%;
                }
                h3{
                    line-height: .533333rem;
                    font-size: .426667rem;
                    font-weight: bold;
                    text-align: left;
                    padding-left: .266667rem;
                }
                .bottom_price{
                    height: .666667rem;
                    padding-right: .266667rem;
                    text-align: left;
                    .now_price{
                        padding-left: .266667rem;
                        color: orange;
                        font-size: .48rem;
                        font-weight: bold;
                    }
                    .xing{
                        float: right;
                        img{
                            width: .533333rem;
                            height: .533333rem;
                            vertical-align: middle;
                            margin: 0 .133333rem;
                        }
                    }
                }
            }
        }
        .loadingGif{
            position: fixed;
            width: 2.666667rem;
            height: 2rem;
            border-radius: .16rem;
            overflow: hidden;
            z-index: 12;
            top: 50%;
            left: 50%;
            margin-left: -1.333333rem;
            img{
                width: 2.666667rem;
                height: 2rem;
            }
        }
        .limitBottom{
            height: 2.666667rem;
            width: 100%;
            line-height: 2.666667rem;
            font-size: .426667rem;
        }
    }
</style>
