<template>
    <div>
        <div class="icon_box">
            <ul class="icon_ul">
                <li v-for="item in icons" :key="item.title" @click="goto(item.title)">
                    <img :src="item.url">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        <!-- <p class="icon_light">
            <span class="active"></span>
            <span></span>
        </p> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            //分类商标
            icons:[{
                url:require('../assets/image/1456135168917951218.png'),
                title:'新品'
            },{
                url:require('../assets/image/1463561815692290862.png'),
                title:'品牌妙杀'
            },{
                url:require('../assets/image/1454554248627513757.png'),
                title:'热卖'
            },{
                url:require('../assets/image/1456135199173044708.png'),
                title:'经济之选'
            },{
                url:require('../assets/image/1454554192327651589.png'),
                title:'新奇数码'
            },{
                url:require('../assets/image/1454554204692443042.png'),
                title:'生活改良'
            },{
                url:require('../assets/image/1454554222150219314.png'),
                title:'户外运动'
            },{
                url:require('../assets/image/1454554236223560927.png'),
                title:'妙女败物'
            },{
                url:require('../assets/image/1454554248627513757.png'),
                title:'创意礼品'
            },{
                url:require('../assets/image/all_goods.png'),
                title:'所有商品'
            }],
            left:0
        }
    },
    methods:{
         goto(category){

        // params传参，不支持path跳转
            this.$router.push({name:'List',query:{'category':category},params:{'category':category}})

      }
    }
}
</script>

<style lang="scss" scoped>
.icon_box{
    width: 100%;
    // background: lightblue;
    overflow: auto;
    &::-webkit-scrollbar {display:none}
    }
.icon_ul{
    height: 2.546667rem;
    display: flex;
    width: 20rem;
    // overflow-x: auto;
    li{
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 1.333333rem;
            height: 1.333333rem;
        }
    }
}
.icon_light{
    height: .666667rem;
    width: 100%;
    display: flex;
    justify-content: center;
    span{
        display: block;
        width: .32rem;
        height: .32rem;
        border-radius: 50%;
        background: #ccc;
        margin: 0 .266667rem;
    }
    .active{
        background: orange;
    }
}
</style>

