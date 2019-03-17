<template>
    <div class="title">
        <div class="title_pic">
            <img src="../assets/image/wheel_miaoyulianzhu.png" alt="">
            <div></div>
        </div>
        <div class="content">
            <ul :style="{top:-ul_top+'rem'}">
                <li v-for="(m,index) in mes" :key="index"><span></span>{{m.con}}</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            mes:[
                {con:'虐前男友之：攻心为上'},
                {con:'猪猪侠的时光机'},
                {con:'妈妈再也不用担心电费太多了'},
                {con:'我要跳滑梯，谁也别拦我'},
                {con:'不会发点的足球不是好足球'},
                {con:'平凡的纸巾耍起心机来也能让你欲罢不能'},
                {con:'女神节送什么最讨欢心'},
                {con:'冰岛“黑科技”，冰冻时间'},
                {con:'活久见：只服务于国王和上帝的蜡烛'},
                {con:'这是我见过最完美的情人节礼物'},
                {con:'一次来自墙壁的心灵疗养'},
                {con:'无限攻心计'}
            ],
            ul_top:0
        }
    },
    created(){
        this.moveTop(this.ul_top);
    },
    methods:{
        moveTop:function(num){
            // this.mes.push(this.mes[0]);
            var max = this.mes.length/3;
            var that = this;
            let mesTimer = setInterval(function(){
                num++;
                if(num>=max){
                    num = 0;
                }
                that.ul_top = num*1.76;
            },3000);
        }
    }
}
</script>


<style lang="scss" scoped>
.title{
    height: 1.76rem;
    width: 100%;
    display: flex;
    // background: lemonchiffon;
    border-top: 1px solid #ccc;
    .title_pic{
        width: 2.186667rem;
        // background: lightcoral;
        img{
            width: 1.76rem;
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
            transition: top .5s;
            li{
                line-height: .586667rem;
                height: .586667rem;
                text-align: left;
                // list-style: disc;
                margin-left: .533333rem;
                font-weight: bold;
                font-size: .32rem;
                color: #666;
                span{
                    display: inline-block;
                    border-radius: 50%;
                    border: 3px solid orange;
                    margin-right: .4rem;
                    vertical-align: middle;
                }
            }
        }
        .anima{transition: top .5s;}
    }
}
</style>
