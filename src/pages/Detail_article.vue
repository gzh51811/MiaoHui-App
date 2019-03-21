<template>
    <div class="wzxqy">
        <div class="xqtou" >
            <span class="houtui" @click="houtui" >   </span>
            {{goodslist.Title}}
        </div>
        <div class="xqzw">
            <img :src="goodslist.img1" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text1}}</span>
            
            <img :src="goodslist.img2" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text2}}</span>
            
            <img :src="goodslist.img3" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text3}}</span>

            <img :src="goodslist.img4" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text4}}</span>

            <img :src="goodslist.img5" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text5}}</span>

            <img :src="goodslist.img6" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text6}}</span>

            <img :src="goodslist.img7" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text7}}</span>

            <img :src="goodslist.img8" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text8}}</span>

            <img :src="goodslist.img9" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text9}}</span>

            <img :src="goodslist.img10" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text10}}</span>

            <img :src="goodslist.img11" alt="">
            <h2>{{goodslist.Title}}</h2>
            <span>{{goodslist.text11}}</span>
        </div>
        <div class="xqwei">
            <div class="xqwei_1"><img src="../assets/image/article_bottom_menu_zan.png" alt=""> <span class="dianzan">2</span></div>
            <div class="xqwei_1"><img src="../assets/image/article_bottom_menu_comment.png" alt=""> <span class="pinglun">1</span></div>
            <div class="xqwei_1" style="border: none;"><img src="../assets/image/article_bottom_menu_share.png" alt=""> <span class="zhuanfa">0</span></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            goodslist:[]
        }
    },
    created(){
        let {gid} = this.$route.query;
        this.$axios.get("/mylz/single", {
            params: {gid}
        }).then(res => {
            let data = res.data.data;
            for(let i= 1;i < 23;i++){
                var imgurl ="img" + i;
                data[0][imgurl] = require('../assets/image/' + data[0][imgurl]);
            }
            this.goodslist = data[0];
        });
    },
    methods:{
        houtui(){
            history.back();
        }
    }
}
</script>
<style lang="scss" scoped>
    .wzxqy{
        display: flex;
        flex-direction: column;
        height: 100%;
        // padding: 0 3px;
        .xqtou{
            display: flex;
            font-weight: 900;
            justify-content: center;
            width: 100%;
            position: relative;
            height: 40px;
            font-size: 16px;
            line-height: 40px;
            background: #000;
            color: aliceblue;
            .houtui{
                // justify-content: left;
                // text-align:left;
                // flex-direction: column;
                // overflow: auto;
                margin: 10px 0 0 15px;
                display: block;
                width: 20px;
                height: 20px;
                position: absolute;
                left: 0;
                background:url(../assets/image/header_back.png) no-repeat;
                background-size: 100% 100%;
            }
        }
        .xqzw{
            display: flex;
            flex:1;
            overflow: auto;
            flex-direction: column;
            height: 600px;
            img{
                width: 100%;
            }
            h2{
                // display: balock;
                // height: 20px;
                line-height: 60px;
                border-bottom: 1px solid rgba(211, 197, 197, 0.342);
                margin-bottom: 40px;
                color: rgba(60, 58, 58, 0.8);
                font-size: 16px;
            }
            span{
                color: #000;
                text-align:left;
                padding: 6px 9px;
                font-size: 14px;
            }
        }
        .xqwei{
            display: flex;
            height: 60px;
            width: 100%;
            border-top: 1px solid rgba(211, 197, 197, 0.342);
            font-size: 16px;
            line-height: 60px;
            .xqwei_1{
                font-weight: 900;
                flex:1;
                border-right: 1px solid rgba(211, 197, 197, 0.342);
                img{
                    width: 25px;
                    // pdadding: 15px 3px 0 0;
                }
            }
        }
    }
</style>
