<template>
    <div class="box">
        <router-view></router-view>
        <div class="footer">
            <ul>
                <li v-for="nav in navs" :key="nav.name">
                    <span v-if="nav.name === '首页'"><img :src="nav.icon2"></span>
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
            navs:[{
                name:'首页',
                icon1:'../assets/image/home.png',
                icon2:'../assets/image/home-selected.png'
            },{
                name:'妙语连珠',
                icon1:'../assets/image/sparklingDiscourse.png',
                icon2:'../assets/image/sparklingDiscourse-selected.png'
            },{
                name:'专题',
                icon1:'../assets/image/special-topic.png',
                icon2:'../assets/image/special-topic-selected.png'
            },{
                name:'购物车',
                icon1:'../assets/image/cart.png',
                icon2:'../assets/image/cart-selected.png'
            },{
                name:'个人中心',
                icon1:'../assets/image/user-selected.png',
                icon2:'../assets/image/user-selected.png'
            }]
        }
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
    height: 50px;
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
                width: 20px;
                height: 20px;
            }
        }
    }
}
</style>
