<template>
    <div class="share">
        <ul class="share_list">
            <li class="weibo  mr-60">
                <a href="http://service.weibo.com/share/share.php?#_loginLayer_1552962583239">
                    <img src="../assets/image/sns_icon_1@2x_b.png" />
                    <span>新浪微博</span>
                </a> 
            </li>
            <li class="kongjian mr-60">
                <a href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey">
                    <img src="../assets/image/sns_icon_6@2x_b.png" />
                    <span>QQ空间</span>
                </a> 
            </li>
            <li class="haoyou">
                <a href="http://service.weibo.com/share/share.php?#_loginLayer_1552962583239">
                    <img src="../assets/image/sns_icon_24@2x_b.png" />
                    <span>QQ好友</span>
                </a> 
            </li>
            <li class="huabang">
                <a href="http://service.weibo.com/share/share.php?#_loginLayer_1552962583239">
                    <img src="../assets/image/sns_icon_5@2x_b.png" />
                    <span>花瓣</span>
                </a> 
            </li>
            <!-- <a class="backpages"  href="http://element.eleme.io/#/zh-CN/component/notification">取消</a> -->
            <!-- <p class="backpages" @click="backpages">取消</p> -->
        </ul>
        <div class="backpages"><a class="backpages" href="javascript:history.go(-1)">取消</a></div>
        <!-- <a class="backpages" href="javascript:history.go(-1)">取消</a> -->
        
    </div>
</template>
<script>
export default {
    // data(){
    //     return {}
    // },
    // methods:{
    //     backpages(){
    //         this.$router.push({name:'Detail_goods'})
    //     }
    // }
}
</script>
<style scoped lang="scss">
    ul{
        height: 5.333333rem;
        padding: 1.333333rem 1.733333rem;
    }
    li{
        height:1.866667rem;
        float: left;
        width: 1.6rem;
        margin-bottom: .8rem;
        a{
            color: #5e5e5e;
            &:hover{
        text-decoration: underline;

            }
        }
    }
    img{
        width: 1.6rem;
        height: 1.6rem;
    }
    .mr-60{
        margin-right: .8rem;
    }
    .backpages{
        color: #5e5e5e;
        display: block;
        width: 100%;
        height: 1.066667rem;
        line-height: 1.066667rem;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999999999;
        background-color: #efefef;
        cursor: pointer;
        font-size: .266667rem;
    }
    .backpages:hover{
        text-decoration: underline;
    }
</style>

