<template>
    <div class="main">
        <div class="header">
            <img src="../assets/image/touxiang.png" alt="">
            <input type="search" placeholder="搜素妙汇创意商品">
        </div>
        <!-- 轮播图 -->
        <mainCar></mainCar>
        <!-- 分类图标 -->
        <mainIcon></mainIcon>

        <mainTitle></mainTitle>
    </div>
</template>

<script>

import mainCar from '../components/main_car.vue';
import mainIcon from '../components/main_icon.vue';
import mainTitle from '../components/main_title.vue';
export default {
    data(){
        return {
            
        }
    },
    components:{
        mainCar,
        mainIcon,
        mainTitle
    }
}
</script>
<style lang="scss" scoped>
    .header{
        display: flex;
        align-items: center;
        background: #232426;
        height: 1.333333rem;
        padding: 0 .533333rem;
        img{
            width: .746667rem;
            height: .746667rem;
        }
        input{
            display: flex;
            flex: 1;
            margin-left: .4rem;
            height: .72rem;
            padding: 0 .266667rem;
            border-radius: .133333rem;
            background: #ffbb21;
            border: none;
            text-align: center;
            background-image: url(../assets/image/home_search.png);
            background-repeat: no-repeat;
            background-size: .533333rem;
            background-position: center right;
        }
    }
    
</style>
