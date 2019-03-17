<template>
    <div class="main">
        <!-- <p class="mylz">妙语连珠</p>  -->
        <div class="mylz">
            妙语连珠
        </div>
        <div class="wenzhang">
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1551165706653559302.jpg" alt="">
                <span class="wz_s1">
                    <a href="#" class="biaoti">冰岛“黑科技”，冰冻时间</a>
                </span>
                <p>冻龄少女</p>
                <p>阅读：<span class="yuedu">104</span></p>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1551165706653559302.jpg" alt="">
                <span class="wz_s1">
                    <a href="#" class="biaoti">冰岛“黑科技”，冰冻时间</a>
                </span>
                <p>冻龄少女</p>
                <p>阅读：<span class="yuedu">104</span></p>
            </div>
            <div class="wz_1">
                <img ref="elememt" src="../assets/image/1551165706653559302.jpg" alt="">
                <span class="wz_s1">
                    <a href="#" class="biaoti">冰岛“黑科技”，冰冻时间</a>
                </span>
                <p>冻龄少女</p>
                <p>阅读：<span class="yuedu">104</span></p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    // data(){
    //     return {
    //         imgHeight:""
    //     }
    // },
    // created(){
    //     var height= this.$refs.offsetHeight;
    //     this.imgHeight=height;
    //     console.log(this.imgHeight)
    // }
}
</script>

<style lang="scss" scoped>
    .mylz{
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
        // background: #0f0;
        overflow: auto;
        flex-direction: column;
        .wz_1{
            width: 100%;
            height: 300px;
            // background: #f50606;
            position: relative;
            border-bottom: 1px solid #000;
            img{
                width: 100%;
            }
            .wz_s1{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 121px;
                opacity: 0.5;
                background: #000;
                padding-top: 120px;
                .biaoti{
                    display: block;
                    font-size: 22px;
                    text-decoration:none;
                    color: #fff;
                    font-weight:900;
                }
            }
            p{
                text-align:left;
                padding-left: 5px;
                .yuedu{
                    color:#f5a134;
                    font-weight:900;
                }
            }
        }
    }
</style>
