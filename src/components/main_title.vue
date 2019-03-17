<template>
    <div class="title">
        <div class="title_pic">
            <img src="../assets/image/wheel_miaoyulianzhu.png" alt="">
            <div></div>
        </div>
        <div class="content">
            <ul :style="{top:ul_top+'px'}">
                <li v-for="mes1 in mes1" :key="mes1.id"><span></span>{{mes1.con}}</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            mes1:[
                {con:'虐前男友之：攻心为上',id:1},
                {con:'猪猪侠的时光机',id:2},
                {con:'妈妈再也不用担心电费太多了',id:3},
                {con:'我要跳滑梯，谁也别拦我',id:4},
                {con:'不会发点的足球不是好足球',id:5},
                {con:'平凡的纸巾耍起心机来也能让你欲罢不能',id:6}
            ],
            ul_top:0
        }
    },
    beforeMount(){
        setInterval(move,2000);
        function move() {
            this.ul_top = 65;
        }
        move();
    }
}
</script>


<style lang="scss" scoped>
.title{
    height: 1.733333rem;
    width: 100%;
    display: flex;
    // background: lemonchiffon;
    border-top: 1px solid #ccc;
    .title_pic{
        width: 2.186667rem;
        // background: lightcoral;
        img{
            width: 1.733333rem;
            margin-top: .133333rem;
        }
        div{
            border-right: 1px solid #ccc;
            float: right;
            height: 1.466667rem;
            margin-top: .133333rem;
        }
    }
    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        position: relative;
        ul{
            height: 5.2rem;
            position: absolute;
            left: 0;
            top: 0;
            li{
                line-height: .866667rem;
                text-align: left;
                // list-style: disc;
                margin-left: .533333rem;
                font-weight: bold;
                font-size: .373333rem;
                span{
                    display: inline-block;
                    border-radius: 50%;
                    border: 3px solid orange;
                    margin-right: .4rem;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
