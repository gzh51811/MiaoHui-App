<template>
    <div class="goods">
        <img :src="require('../assets/image/product_back.png')" class="pageBack ui-link"  href="javascript:history.go(-1)" @click="mpageBack" />
        <div class="product-share">
            <img :src="require('../assets/image/share_product.png')" @click="share_product" />
        </div>
        <div class="product-add-to-cart">
            <img :src="require('../assets/image/product_add_to_cart.png')" @click="product_to_cart" />
        </div>
        <div class="block">
            <el-carousel trigger="click" height="492px">
                <el-carousel-item v-for="imgurl in goodsimg" :key="imgurl.img">
                    <img :src="imgurl.img" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="productInfo">
            <p class="good_name">{{goodsinfo.good_name}}</p>
            <p class="good_description">{{goodsinfo.good_description}}</p>
            <div class="price">
                <span>￥{{goodsinfo.now_price}}</span>&nbsp;&nbsp;
                <del>{{goodsinfo.old_price}}</del>
                <!-- <del>￥899</del> -->

            </div>
        </div>
        <div class="ui-navbar">
            <ul class="nav">
                <li class="kefu">
                    <a href="" @onclick="mechatClick">
                        <img :src="require('../assets/image/customer_service.png')">
                    </a>
                </li>
                <li class="pinglun">
                    <a href="" @onclick="btnGoCommentPage">
                        <img :src="require('../assets/image/product_comment.png')">
                    </a>
                </li>
                <li class="goumai">
                    <a href="" class="buyNow" @onclick="buyNow">立即购买</a>
                </li>
                <li class="addCart">
                    <a href="" @onclick="product_to_cart">加入购物车</a>
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
             goodsinfo:{},
             goodsimg:[]
        }
    },
    watch:{
        
        $route(to,from){
            console.log('watch:',to,from)
            this.getData()
        }
    },
    methods:{
        async getData(){
            // 如何获取id
            // let {id:goods_id} = this.$route.params;

            let good_id = "8001";
            let {data:{data}} = await this.$axios
                .get("http://localhost:12580/goodslist/details", {
                    params: {
                        "good_id": good_id
                    }
                })
            console.log(data[0]);
            var goodsdata = data[0];

            this.goodsinfo = goodsdata;
            var imgs = [];
            for(let i = 1;i < 6;i++){
                let img = 'img'+i;
                imgs.push({img:require('../assets/image/' + goodsdata[img])});
            }
            this.goodsimg = imgs;
                // console.log(imgs);

        },
        mpageBack(){// 上一页面

        },
        share_product(){ // 分享商品
            this.$router.push({name:'Detail_share'})
            // this.$router.push({path:'/detail_goods/share_goods'})
        },
        product_to_cart(){ // 加入购物车
            // 添加购物车
            let param = {"good_id":"商品id","user_id":"用户id",style:'女生款'};
            this.$ajax.post("http://localhost:12580/cart/addcart", this.$qs.stringify(param))
            //成功返回
            .then(response => {
                console.log(response);// 后台返回数据
            })
            //失败返回
            .catch(error => {
                console.log(error);
            })
        },
        mechatClick(){ // 联系客服

        },
        btnGoCommentPage(){ // 商品评论

        },
        buyNow(){ // 立即购买

        },
        // btnAddToCart(){ // 加入购物车

        // }
    },
     mounted(){
        this.getData()

        // this.timer = setInterval(()=>{
        //     console.log('interval')
        // },2000);
    },
}
</script>

<style scoped lang="scss">
    // body{
    //     font-size: 1em;
    //     line-height: 1.3;
    //     font-family: sans-serif;
    // }
   
    .goods{
        // el-carousel__indicator is-active
        /deep/ .is-active button{
            background-color: #d5342d
            // padding: 0;
            // width: .16rem;
            // height: .16rem;
            // border-radius: 50%;
        }
        /deep/ .el-carousel__indicator{
            padding: 20px 10px;
        }
        /deep/ .el-carousel__button{
             width: .4rem;
            height: .4rem;
            border-radius: 50%;
            background-color: #333;
        }
        .pageBack,.product-share img,.product-add-to-cart img{
            display: block;
            position: fixed;
            width: 1.28rem;
            height: 1.28rem;
            z-index: 9999;
        }
        .pageBack{
            left: .4rem;
            top: .4rem;
        }
        .product-share img{
            right: 2.0rem;
            top: .4rem;
        }
        .product-add-to-cart img{
            right: .4rem;
            top: .4rem;
        }
        .el-carousel__item{
            overflow: hidden;
            height: 13.12rem;
        }
        .el-carousel__item img {
            margin: 0;
            width: 10rem;
        }
        .productInfo{
            margin: .32rem 0;
            padding: 0 .32rem;
            text-align: left;
            .good_name{
                font-size: .4rem;
                color: #333;
                margin:0 0 .32rem 0;
                font-weight: 700;
            }
            .good_description{
                color: #b2b2b2;
                 margin:0 0 .32rem 0;
            }
            .price{
                span{
                    color: orange;
                    font-size: .44rem;
                }
                del{
                    color: #333;
                    font-size: .38rem;
                }
            }
        }
        .ui-navbar{
            
            overflow: hidden;
            margin: 0;
            ul{
                margin: 0;
                height: 1.066667rem;
                background-color: #333;
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 9999;
                border: none!important;
                li{
                    float: left;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 1.066667rem;
                }
                a{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    font-weight: 700;
                    margin: 0;
                    padding: 0;
                }
                .kefu{
                    width: 20% !important;
                    // height: 1.173333rem;
                    background-color: #0e0e0e;
                    img{
                        width: .533333rem;
                        height: .533333rem;
                        // line-height: 1.173333rem;
 
                    }
                }
                .pinglun{
                    width: 20% !important;
                    // height: 1.173333rem;
                    background-color: #1a1a1a;
                    img{
                        width: .533333rem;
                        height: .533333rem;

                    }
                }
                .goumai{
                    width: 30% !important;
                    background-color: #d5342d!important;
                    a{
                        color: #fff;
                        font-size: .44rem;

                    }
                }
                .addCart{
                    width: 30% !important;
                    background-color: #ffbe1f!important;
                    a{
                        color: #fff;
                        font-size: .44rem;

                    }
                }
            }
        }
    }
    
    
</style>
