<template>
    <div class="View_details">
        <img :src="require('../assets/image/product_back.png')" class="pageBack ui-link" style="display: block;
            position: fixed;
            width: 1.28rem;
            height: 1.28rem;
            z-index: 9999; left: .4rem;
            top: .4rem;"  @click="mpageBack" />
        <div class="product-add-to-cart">
            <img :src="require('../assets/image/product_add_to_cart.png')" @click="product_to_cart" style="display: block;
            position: fixed;
            width: 1.28rem;
            height: 1.28rem;
            z-index: 9999; right: .4rem;
            top: .4rem;" />
            <div class="C_num">{{goodsQty}}</div>
        </div>
        <div class="block">
            <el-carousel trigger="click">
                <el-carousel-item v-for="imgurl in goodsimg" :key="imgurl.img">
                    <img :src="imgurl.img" />
                </el-carousel-item>
            </el-carousel>
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
            console.log('watch:',to,from)
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
            // console.log(imgs);

        },
        mpageBack(){// 上一页面
            let id = this.goodsinfo.good_id;
            let category = this.title.category;
            this.$router.push({name:'Detail_goods',query:{category,id},params:{category,id}})
            // history.back();
        },
         async created(){
  
            let user_id = localStorage.getItem('id');
            await this.$store.dispatch("getCartData",user_id);
        },
        product_to_cart(){ // 加入购物车
            // 添加购物车
            // console.log('加入购物车');
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
    html,body,#app,.View_details,{
        height: 100%;
        /deep/ .block,.el-carousel,.el-carousel__container,.el-carousel__item,img{
            height: 100%;
        }
        /deep/ .el-carousel__container{
            position: relative;
            height: 100%;
        }
    }
    a{
        text-decoration: none;
    }
    .View_details{
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
       
        /deep/ .el-carousel__item img {
            margin: 0;
            width: 10rem;
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
            z-index: 9999;
        }
    }
</style>
