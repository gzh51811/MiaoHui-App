<template>
<div style="height:100%">
    <div class="box">
        <keep-alive include="Home_main">
        <router-view></router-view>
        </keep-alive>
        <div class="footer">
            <ul>
                <li v-for="nav in navs" :key="nav.name" @click="changepage(nav.title)">
                    <div class="active" v-if="nowRouter === 'Home_main' && nav.name === '首页'">
                        <img :src="nav.icon2">
                        <p>{{nav.name}}</p>
                    </div>
                    <div class="active" v-else-if="nowRouter === 'Home_article' && nav.name === '妙语连珠'">
                        <img :src="nav.icon2">
                        <p>{{nav.name}}</p>
                    </div>
                    <div class="active" v-else-if="nowRouter === 'Home_theme' && nav.name === '专题'">
                        <img :src="nav.icon2">
                        <p>{{nav.name}}</p>
                    </div>
                    <div class="active" v-else-if="nowRouter === 'Home_cart' && nav.name === '购物车'">
                        <img :src="nav.icon2">
                        <p>{{nav.name}}</p>
                        <div class="C_num" v-if="nav.name === '购物车'">{{goodsQty}}</div>
                    </div>
                    <div class="active" v-else-if="nowRouter === 'Home_mine' && nav.name === '个人中心'">
                        <img :src="nav.icon2">
                        <p>{{nav.name}}</p>
                    </div>
                    <div v-else>
                        <img :src="nav.icon1">
                        <p>{{nav.name}}</p>
                        <div class="C_num" v-if="nav.name === '购物车'">{{goodsQty}}</div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>

export default {
    data(){
        return {
            //底部导航栏数据
            navs:[],
            //当前路由
            nowRouter:'',
            Cnum:0
        }
    },
    methods:{
        //点击跳转路由
        changepage(name_nav){
            this.$router.push({name:name_nav});
        },

        //初始化获取路由信息
        getRouter(){
            this.nowRouter = this.$route.name;
        },
        //获取购物车数量
        getCartNum(){
            this.Cnum = this.$store.state.cartList.length;
        }
    },
    watch:{
        //监听路由跳转，改变nowRouter
        $route(to){
            // console.log('watch:',to,from)
            this.nowRouter = to.name;
            
            // console.log(this.nowRouter);
        }
    },
    mounted(){
        // console.log(this)
        // this.Cnum =  this.$store.state.cartList.length;
    },
    computed:{
        goodsQty(){
            return this.$store.state.cartList.length;
        }
    },
    async created(){
        this.navs = this.$store.state.navs;
        // console.log(this.navs);
        this.getRouter();
        // this.Cnum = this.$store.state.cartList.length;
        let user_id = localStorage.getItem('id');
        await this.$store.dispatch("getCartData",user_id);
    }
}
</script>

<style lang="scss">
    .box{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    }
    
    .main{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.footer{
    height: 1.6rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #353638;
    color: rgb(201, 200, 200);
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        li{
            width: 25%;
            display: flex;
            justify-content: center;
            font-weight: bold;
            font-size: .373333rem;
            position: relative;
            div{
                width: 100%;
                height: 100%; 
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img{
                    width: .533333rem;
                    height: .533333rem;
                }
                p{
                    margin-top: .04rem;
                }
                .C_num{
                    position: absolute;
                    top: .053333rem;
                    right: .24rem;
                    width: .533333rem;
                    height: .533333rem;
                    background: #ffbd1f;
                    color: #fff;
                    border-radius: 50%;
                }
            }
            .active{background: #20210f;}
            .active p{
                color: rgb(207, 142, 20);
            }
        }
    }
}
</style>
