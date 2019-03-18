<template>
    <div class="main">
        <div class="zt">
            专题
        </div>
        <div class="wenzhang">
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1551852339555646380.jpg" alt="">
                <div class="wz_s1">
                    <div>
                        <a href="#" class="biaoti">女神节送什么最讨欢心</a>
                        <a href="#" class="yuedu"><span>59</span>次阅读</a>
                    </div>
                </div>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1550029261617596764.jpg" alt="">
                <div class="wz_s1">
                    <div>
                        <a href="#" class="biaoti">女神节送什么最讨欢心</a>
                        <a href="#" class="yuedu"><span>59</span>次阅读</a>
                    </div>
                </div>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1547027585393906073.jpg" alt="">
                <div class="wz_s1">
                    <div>
                        <a href="#" class="biaoti">一次来自墙壁的心疗养</a>
                        <a href="#" class="yuedu"><span>59</span>次阅读</a>
                    </div>
                </div>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1516350354585736994.jpg" alt="">
                <div class="wz_s1">
                    <div>
                        <a href="#" class="biaoti">无限攻心计</a>
                        <a href="#" class="yuedu"><span>59</span>次阅读</a>
                    </div>
                </div>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1515051583887380423.jpg" alt="">
                <div class="wz_s1">
                    <div>
                        <a href="#" class="biaoti">猪猪侠的时光机</a>
                        <a href="#" class="yuedu"><span>59</span>次阅读</a>
                    </div>
                </div>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1483005028699292935.jpg" alt="">
                <div class="wz_s1">
                    <div>
                        <a href="#" class="biaoti">快上车，这些让你相见恨晚的用品</a>
                        <a href="#" class="yuedu"><span>59</span>次阅读</a>
                    </div>
                </div>
            </div>
            

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .zt{
        display: flex;
        justify-content: center;
        // text-align:center;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        background: #000;
        color: aliceblue;
        font-weight:900;
    }
    .wenzhang{
        display: flex;
        flex:1;
        overflow: auto;
        flex-direction: column;
        .wz_1{
            width: 100%;
            position: relative;
            margin-bottom: 15px;
            img{
                width: 100%;
            }
            .wz_s1{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                // width: 100%;
                // height: 168px;
                bottom: 4px;
                right: 0;
                opacity: 0.5;
                background: #000;
                // padding-top: 18%;
                div{
                    position: absolute;
                    transform: translate(-50%,-50%);
                    top: 50%;
                    left: 50%;
                    width: 100%;
                }
                .biaoti{
                    display: block;
                    font-size: 22px;
                    text-decoration:none;
                    color: #fff;
                    font-weight:900;
                    margin-bottom: 15px;
                    width: 100%;
                }
                .yuedu{
                    width: 80px;
                    font-size: 18px;
                    text-decoration:none;
                    color: #fff;
                    border: 1px solid #fff;
                    // font-weight:900;
                }
            }
        }
    }
</style>
