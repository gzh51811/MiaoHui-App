<template>
    <div class="goods">
        <img :src="require('../assets/image/product_back.png')" class="pageBack ui-link"  @click="mpageBack" />
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
                    <a href="javascript:;" @onclick="mechatClick">
                        <img :src="require('../assets/image/customer_service.png')">
                    </a>
                </li>
                <li class="pinglun">
                    <a href="javascript:;" @onclick="btnGoCommentPage">
                        <img :src="require('../assets/image/product_comment.png')">
                    </a>
                </li>
                <li class="goumai">
                    <span href="javascript:;" class="buyNow" @click="buyNow">立即购买</span>
                </li>
                <li class="addCart">
                    <span  href="javascript:;" @click="btnAddToCart">加入购物车</span>
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
            goodsimg:[],
            title:{}
        }
    },
    watch:{
        
        $route(to,from){
            this.getData()
        }
    },
    methods:{
        async getData(){
            // 如何获取id
            let {id:good_id} = this.$route.params;
            let {data:{data}} = await this.$axios
                .get("http://localhost:12580/goodslist/details", {
                    params: {
                        good_id
                    }
                })
            var goodsdata = data[0];

            this.goodsinfo = goodsdata;
            var imgs = [];
            for(let i = 1;i < 6;i++){
                let img = 'img'+i;
                imgs.push({img:require('../assets/image/' + goodsdata[img])});
            }
            this.goodsimg = imgs;

        },
        mpageBack(){// 上一页面
                let category = this.title.category;
                this.$router.push({name:'List',query:{category},params:{category}})
        },
        share_product(){ // 分享商品
            let id = this.goodsinfo.good_id;
            this.$router.push({name:'Detail_share',query:{id},params:{id}})
        },
        product_to_cart(){ // 加入购物车
            // 添加购物车
            this.$router.push({name:'Home_cart'})
            // let {id:good_id} = this.$route.params;
            // let user_id = localStorage.getItem('id');
            // let param = {"good_id":good_id,"user_id":user_id,style:'女生款'};
            // this.$axios.post("http://localhost:12580/cart/addcart", this.$qs.stringify(param))
            // .then(response => {
            //     if(response.data.data.ok == 1){
            //         alert("宝贝成功添加购物车")
            //     }
            // })
            // .catch(error => {
            //     console.log(error);
            // })
        },
        mechatClick(){ // 联系客服

        },
        btnGoCommentPage(){ // 商品评论

        },
        buyNow(){ // 立即购买
            // 添加购物车
            console.log('立即购买');
            let {id:good_id} = this.$route.params;
            let user_id = localStorage.getItem('id');
            let param = {"good_id":good_id,"user_id":user_id,style:'女生款'};
            this.$axios.post("http://localhost:12580/cart/addcart", this.$qs.stringify(param))
            .then(response => {
                if(response.data.data.ok == 1){
                    alert("宝贝成功添加购物车")
                }
            })
            //失败返回
            .catch(error => {
                console.log(error);
            })
        },
        btnAddToCart(){ // 加入购物车
            // 添加购物车
            console.log('加入购物车');
            let {id:good_id} = this.$route.params;
            let user_id = localStorage.getItem('id');
            let param = {"good_id":good_id,"user_id":user_id,style:'女生款'};
            this.$axios.post("http://localhost:12580/cart/addcart", this.$qs.stringify(param))
            //成功返回
            .then(response => {
                if(response.data.data.ok == 1){
                    // alert("宝贝成功添加购物车")
                    this.$message({
                        message: '宝贝成功添加购物车',
                        type: 'success'
                    });
                }
            })
            //失败返回
            .catch(error => {
                console.log(error);
            })
        }
    },
    created(){
        let {category:category} = this.$route.params;
        this.title = {category:category};

    },
    mounted(){
        this.getData()
    },
}
</script>

<style scoped lang="scss">
    // body{
    //     font-size: 1em;
    //     line-height: 1.3;
    //     font-family: sans-serif;
    // }
    /deep/ .el-message.el-message--success{
        width:auto !important;
        top:80% !important;
    }
    a{
        text-decoration: none;
    }
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
            position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 9999;
                 border: none!important;
            ul{
                margin: 0;
                height: 1.066667rem;
                background-color: #333;
                
               
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
                span{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    font-weight: 700;
                    margin: 0;
                    padding: 0;
                    user-select: none;
                    cursor: pointer;
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
                    span{
                        color: #fff;
                        font-size: .44rem;

                    }
                }
                .addCart{
                    width: 30% !important;
                    background-color: #ffbe1f!important;
                    span{
                        color: #fff;
                        font-size: .44rem;

                    }
                }
            }
        }
    }
    
    
</style>
