<template>
    <div class="box">
        <router-view></router-view>
        <div class="footer">
            <ul>
                <li v-for="nav in navs" :key="nav.name" @click="changepage(nav.title)">
                    <span class="active" v-if="nowRouter === 'Home_main' && nav.name === '首页'"><img :src="nav.icon2"></span>
                    <span class="active" v-else-if="nowRouter === 'Home_article' && nav.name === '妙语连珠'"><img :src="nav.icon2" class="active"></span>
                    <span class="active" v-else-if="nowRouter === 'Home_theme' && nav.name === '专题'"><img :src="nav.icon2" class="active"></span>
                    <span class="active" v-else-if="nowRouter === 'Home_cart' && nav.name === '购物车'"><img :src="nav.icon2" class="active"></span>
                    <span class="active" v-else-if="nowRouter === 'Home_mine' && nav.name === '个人中心'"><img :src="nav.icon2" class="active"></span>
                    <span v-else><img :src="nav.icon1"></span>
                    <p>{{nav.name}}</p>
                </li>
            </ul>
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
            nowRouter:''
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
        }
    },
    watch:{
        //监听路由跳转，改变nowRouter
        $route(to,from){
            // console.log('watch:',to,from)
            this.nowRouter = to.name;
            console.log(this.nowRouter);
        }
    },
    mounted(){
        // console.log(this)
    },
    created(){
        this.navs = this.$store.state.navs;
        // console.log(this.navs);
        this.getRouter();

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
    height: 1.333333rem;
    width: 100%;
    background: #444;
    color: #aaa;
    ul{
        height: 100%;
        width: 100%;
        display: flex;
        li{
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            img{
                width: .533333rem;
                height: .533333rem;
            }
            .active~p{
                color: rgb(190, 131, 20);
            }
        }
    }
}
</style>
