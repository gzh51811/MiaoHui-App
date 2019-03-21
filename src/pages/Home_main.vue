<template>
<div style="height:100%">
    <div class="main_con">
        <div class="header">
            <img src="../assets/image/touxiang.png" alt="">
            <input type="search" placeholder="搜素妙汇创意商品">
        </div>
        <div class="main" style="padding-top:1.333333rem">
            
            <!-- 轮播图 -->
            <mainCar></mainCar>
            <!-- 分类图标 -->
            <mainIcon></mainIcon>
            <!-- 滚动公告 -->
            <mainTitle></mainTitle>
            <!-- 热卖新品 -->
            <mainHotGoods></mainHotGoods>
            
        </div>
    </div>
</div>
</template>

<script>

import mainCar from '../components/main_car.vue';
import mainIcon from '../components/main_icon.vue';
import mainTitle from '../components/main_title.vue';
import mainHotGoods from '../components/main_hotgoods.vue';
export default {
    data(){
        return {
            
        }
    },
    components:{
        mainCar,
        mainIcon,
        mainTitle,
        mainHotGoods
    }
}
</script>
<style lang="scss" scoped>
.main_con{
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
    .header{
        display: flex;
        align-items: center;
        background: #232426;
        height: 1.333333rem;
        padding: 0 .533333rem;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        z-index: 10;
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
