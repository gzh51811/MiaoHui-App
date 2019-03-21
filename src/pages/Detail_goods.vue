<template>
    <div class="goods">
        <img :src="require('../assets/image/product_back.png')" class="pageBack ui-link"  @click="mpageBack" />
        <div class="product-share">
            <img :src="require('../assets/image/share_product.png')" @click="share_product" />
        </div>
        <div class="product-add-to-cart">
            <img :src="require('../assets/image/product_add_to_cart.png')" @click="product_to_cart" />
            <div class="C_num">{{goodsQty}}</div>
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
                <li class="pinglun">
                    <a href="javascript:;" @onclick="btnGoCommentPage">
                        <img :src="require('../assets/image/product_comment.png')">
                    </a>
                </li>
                <li class="kefu">
                    <span  href="javascript:;" @click="mechatClick(goodsinfo.good_id)">查看详情</span>
                    <!-- <a href="javascript:;" @onclick="mechatClick">
                        <img :src="require('../assets/image/customer_service.png')">
                    </a> -->
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
            // console.log('watch:',to,from)
            this.getData()
        }
    },
    computed:{
        goodsQty(){
            return this.$store.state.cartList.length;
        }
    },
    methods:{
        async getData(){
            // 如何获取id
            let {id:good_id} = this.$route.params;
            let {data:{data}} = await this.$axios
                .get("/goodslist/details", {
                    params: {
                        good_id
                    }
                })
            var goodsdata = data[0];
            // console.log(goodsdata);
            if(goodsdata.old_price != ''){
                goodsdata.old_price = '￥'+goodsdata.old_price;
            }
            this.goodsinfo = goodsdata;
            var imgs = [];
            for(let i = 1;i < 6;i++){
                let img = 'img'+i;
                imgs.push({img:require('../assets/image/' + goodsdata[img])});
            }
            this.goodsimg = imgs;

        },
         async created(){
  
            let user_id = localStorage.getItem('id');
            await this.$store.dispatch("getCartData",user_id);
        },
        mpageBack(){// 上一页面
                let category = this.title.category;
                if(category == '首页'){
                    history.back();
                }else {
                    
                    this.$router.push({name:'List',query:{category},params:{category}})
                }
        },
        share_product(){ // 分享商品
            let category = this.title.category;
            let id = this.goodsinfo.good_id;
            this.$router.push({name:'Detail_share',query:{id,category},params:{id,category}})
        },
        product_to_cart(){ // 加入购物车
            // 添加购物车
            this.$router.push({name:'Home_cart'})

        },
        mechatClick(id){ // 联系客服
            // let good_id = id;
            // console.log(id);
            let category = this.title.category;
            this.$router.push({name:'View_details',query:{id},params:{id:id,category:category}})
        },
        btnGoCommentPage(){ // 商品评论

        },
        buyNow(){ // 立即购买
            // 添加购物车
            // console.log('立即购买');
            let {id:good_id} = this.$route.params;
            let user_id = localStorage.getItem('id');
            let param = {"good_id":good_id,"user_id":user_id,style:'女生款'};
            this.$axios.post("/cart/addcart", this.$qs.stringify(param))
            .then(response => {
                if(response.data.data.ok == 1){
                    // alert("宝贝成功添加购物车")
                    this.$message({
                        message: '宝贝成功购买',
                        type: 'success'
                    });
                    if(response.data.count == 1000){
                        // 商品不存在，添加购物车
                        this.$store.state.cartList.push({good_id});
                    }else {
                        // 商品已经存在，添加商品数量
                    }
                }
            })
            //失败返回
            .catch(error => {
                // console.log(error);
            })
        },
        btnAddToCart(){ // 加入购物车
            // 添加购物车
            // console.log('加入购物车');
            let {id:good_id} = this.$route.params;
            let user_id = localStorage.getItem('id');
            let param = {"good_id":good_id,"user_id":user_id,style:'女生款'};
            this.$axios.post("/cart/addcart", this.$qs.stringify(param))
            //成功返回
            .then(response => {
                // console.log(response);
                if(response.data.data.ok == 1){
                    // alert("宝贝成功添加购物车")
                    this.$message({
                        message: '宝贝成功添加购物车',
                        type: 'success'
                    });
                    if(response.data.count == 1000){
                        // 商品不存在，添加购物车
                        this.$store.state.cartList.push({good_id});
                    }else {
                        // 商品已经存在，添加商品数量
                    }
                }
            })
            //失败返回
            .catch(error => {
                // console.log(error);
            })
            // list.
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

    a{
        text-decoration: none;
    }
    .goods{
        padding-bottom: 1.066667rem;
        /deep/ .is-active button{
            background-color: #d5342d
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
        .pageBack,.product-share img{
            display: block;
            position: fixed;
            width: 1.28rem;
            height: 1.28rem;
            z-index: 9999;
        }
        .product-add-to-cart{
            position: fixed;
            z-index: 9999;
        }
        .product-add-to-cart img{
            display: block;
            width: 1.28rem;
            height: 1.28rem;
        }
        .pageBack{
            left: .4rem;
            top: .4rem;
        }
        .product-share img{
            right: 2.0rem;
            top: .4rem;
        }
        .product-add-to-cart{
            right: .4rem;
            top: .4rem;
        }
        .product-add-to-cart .C_num{
            width: .5rem;
            height: .5rem;
            position: absolute;
            top: -8px;
            right: 0px;
            border-radius: 50%;
            background-color: #58bc58;
            color: #fff;
            font-weight: 700;
            line-height: .5rem;
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
                // background-color: #333;   
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
                    width: 25% !important;
                    box-sizing: border-box;
                    border-left: 1px solid #ebebeb;
                    background-color: #eee;
                     span{
                        color: #fff;
                        font-size: .44rem;
                        color: #757575;
                    }
                }
                .pinglun{
                    width: 15% !important;
                    background-color: #eee;
                    img{
                        width: .533333rem;
                        height: .533333rem;
                    }
                   
                }
                .goumai{
                    width: 30% !important;
                    background-color: #febe20!important;
                    span{
                        color: #fff;
                        font-size: .44rem;
                    }
                }
                .addCart{
                    width: 30% !important;
                    background-color: #191919!important;
                    span{
                        color: #fff;
                        font-size: .44rem;
                    }
                }
            }
        }
    }
    
    
</style>
