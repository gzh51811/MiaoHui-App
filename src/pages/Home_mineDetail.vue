<template>
    <div class="main">
        <div class="grzxtou">  
            <img src="../assets/image/touxiang.png" alt="">
            <p>用户ID <span class="s1">M0</span></p>
            <p><span class="s3"><span>0</span> 个妙钻</span><span class="s3"><span>7</span> 张优惠卷</span></p>
            <a href="#"></a>
            <h2 class="s2">购买咨询</h2>
        </div>
        <div class="grzxnr">
            <div class="qbdd">
                <p><span class="dd1">全部订单</span><span class="dd2">查看所以订单</span></p>
            </div>

            <div class="shouhuo">
                <div class="dsh"><p>0</p><span class="sh1">待收货</span></div>
                <div class="sfk"><p>0</p><span class="sh2">代收款</span></div>
                <div class="shoucang"><p>4</p><span class="sh3">我的收藏</span></div>
                <div class="miaozuan"><p>0</p><span class="sh4">我的妙钻</span></div>
            </div>
            
            <div class="youhj guanli">优惠卷<img src="../assets/image/qianjin1.png" alt=""></div>
            <div class="shouhdz guanli">收货地址<img src="../assets/image/qianjin1.png" alt=""></div>
            <div class="wodbs guanli">我的鄙视<img src="../assets/image/qianjin1.png" alt=""></div>
            <div class="zhanghgl guanli">账号管理<img src="../assets/image/qianjin1.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .main{
        padding-bottom: 80px;
        width: 100%;
        // height: 100%;
        .grzxtou{
            display: flex;
            // justify-content: center;
            align-items: center;
            overflow: auto;
            // flex: 1;
            width: 100%;
            height: 30%;
            background: rgba(255, 198, 10, 0.856);
            flex-direction: column;
            position: relative;
            img{
                width: 85px;
                height: 85px;
                margin: 30px 0 10px 0;
            }
            button{
                width: 95%;
                height: 40px;
                background: rgba(26, 25, 25, 0.979);
                color: aliceblue;
                font-size: 16px;
                border: none;
                border-radius:5px;
                margin: 10px;
            }
            a{
                position: absolute;
                right: 0;
                top: 0;
                display: block;
                width: 25px;
                height: 25px;
                // background: rgb(69, 146, 151);
                margin: 12px 15px 0 0;
                background: url(../assets/image/setting.png) no-repeat center;
                background-size: 100% 100%;
            }
            .s1{
                display: inline-block;
                padding: 3px 5px;
                background: #000;
                color: aliceblue;
                border-radius: 5px;
            }
            .s2{
                position: absolute;
                left: 0;
                top: 0;
                font-size: 16px;
                font-weight:900;
                margin: 15px 0 0 15px;
            }
            p{
                margin-top: 10px;
                .s3{
                    display: inline-block;
                    padding: 5px 5px;
                    background: rgb(255, 235, 169);
                    border-radius: 8px;
                    margin-right: 10px;
                }
            }
            
        }
        .grzxnr{
            width: 100%;
            background: rgb(252, 249, 249);
            .qbdd{
                height: 60px;
                background: rgb(255, 255, 255);
                padding: 0 10px;
                border-bottom: 1px solid rgb(238, 236, 236);
                .dd1{
                    float: left;
                    font-size: 16px;
			        line-height: 55px;
                    font-weight:900;
                    color: rgb(105, 105, 105);
                }
                .dd2{
                    float: right;
                    font-size: 14px;
		    	    line-height: 55px;
                    font-weight:900;
                    color: rgb(180, 179, 179);
                    padding-right: 35px;
                    background: url(../assets/image/qianjin1.png)no-repeat center right;
                    background-size: 25%;
                }
            }
            .shouhuo{
                height: 70px;
                justify-content: space-between;
                display: flex;
                // flex: 1;
                border-bottom: 1px solid rgb(238, 236, 236);
                align-items: center;
                background: rgb(255, 255, 255);
                margin-bottom: 30px;
                div{
                    flex: 1;
                    // display: flex;
                    // flex-direction: column;
                    // justify-content: space-around;
                    font-size: 14px;
                    font-weight:900;
		    	    // line-height: 55px;
                    p{
                        font-size: 16px;
                        color: rgb(255, 181, 97);
                    }
                    span{
                        padding-left: 20px;
                    }
                    .sh1{
                        background: url(../assets/image/daishouhuo.png)no-repeat  left center;
                        background-size: 25%;
                    }
                    .sh2{
                        background: url(../assets/image/daifukuan.png)no-repeat  left center;
                        background-size: 25%;
                    }
                    .sh3{
                        background: url(../assets/image/wodeshoucang.png)no-repeat  left center;
                        background-size: 25%;
                    }
                    .sh4{
                        background: url(../assets/image/miaozuan.png)no-repeat  left center;
                        background-size: 25%;
                    }

                }
            }
            .guanli{
                height: 65px;
                background: #fff;
                font-size: 18px;
                font-weight: 900;
                line-height: 65px;
                text-align: left;
                padding-left: 50px;
                color: rgb(90, 90, 90);
                position: relative;
                border-top: 1px solid rgb(238, 236, 236);
                img{
                    position: absolute;
                    right: 3%;
                    top: 25%;
                    height: 30px;
                }
            }
            .youhj{
                background: #fff url(../assets/image/youhuiquan.png)no-repeat  10px center;
                background-size: 8%;
            }
            .shouhdz{
                background: #fff url(../assets/image/dizhi.png)no-repeat  10px center;
                background-size: 8%;
            }
            .wodbs{
                background: #fff url(../assets/image/bishi.png)no-repeat  10px center;
                background-size: 8%;
            }
            .zhanghgl{
                background: #fff url(../assets/image/zhanghao.png)no-repeat  10px center;
                background-size: 8%;
                border-bottom: 1px solid rgb(238, 236, 236);
            }
           
        }

    }




</style>