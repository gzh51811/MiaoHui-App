<template>
<div>
    <div class="hot_goods">
        <ul class="hot_goodslist">
            <li v-for="goods in hotGoods" :key="goods.good_id">
                <img :src="goods.img_cover">
                <h3>{{goods.good_name}}</h3>
                <div class="bottom_price">
                    <span class="now_price">￥{{goods.now_price}}</span>
                    <span class="xing">
                        <img src="../assets/image/like_gray.png" alt="">{{goods.zan}}
                        <img src="../assets/image/dislike_gray.png">{{goods.cai}}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            hotGoods:[
                {
                    good_name:'【九猪】USB充电发热蒸汽眼罩|去黑眼圈',
                    good_id:'8800',
                    img_cover:require('../assets/image/1453_L_1551322265385.jpg'),
                    record:874,
                    now_price:'108.00',
                    zan:26,
                    cai:0
                },
                {
                    good_name:'【Totwoo】兔兔智能珠宝-花丝三叶草系列',
                    good_id:'8801',
                    img_cover:require('../assets/image/1524_L_1551322215078.jpg'),
                    record:89,
                    now_price:'1599.00',
                    zan:5,
                    cai:1
                },
                {
                    good_name:'【九猪】USB充电发热蒸汽眼罩|去黑眼圈',
                    good_id:'8802',
                    img_cover:require('../assets/image/1453_L_1551322265385.jpg'),
                    record:874,
                    now_price:'108.00',
                    zan:26,
                    cai:0
                },
                {
                    good_name:'【Totwoo】兔兔智能珠宝-花丝三叶草系列',
                    good_id:'8803',
                    img_cover:require('../assets/image/1524_L_1551322215078.jpg'),
                    record:89,
                    now_price:'1599.00',
                    zan:5,
                    cai:1
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .hot_goods{
        padding-bottom: 1.6rem;
        .hot_goodslist{
            width: 100%;
            li{
                width: 100%;
                img{
                    width: 100%;
                }
                h3{
                    line-height: .533333rem;
                    font-size: .426667rem;
                    font-weight: bold;
                    text-align: left;
                    padding-left: .266667rem;
                }
                .bottom_price{
                    height: .666667rem;
                    padding-right: .266667rem;
                    text-align: left;
                    .now_price{
                        padding-left: .266667rem;
                        color: orange;
                        font-size: .48rem;
                        font-weight: bold;
                    }
                    .xing{
                        float: right;
                        img{
                            width: .533333rem;
                            height: .533333rem;
                            vertical-align: middle;
                            margin: 0 .133333rem;
                        }
                    }
                }
            }
        }
    }
</style>
