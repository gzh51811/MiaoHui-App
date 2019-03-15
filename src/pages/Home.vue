<template>
    <div>
        <div class="footer">
            <ul>
                <li v-for="nav in navs" :key="nav.name">
                    <!-- <img src="" alt=""> -->
                    <p>{{nav.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            navs:[{
                name:'首页',
                icon:''
            },{
                name:'妙语连珠',
                icon:''
            },{
                name:'专题',
                icon:''
            },{
                name:'购物车',
                icon:''
            },{
                name:'个人中心',
                icon:''
            }]
        }
    }
}
</script>

<style scoped lang="scss">
    .footer{
        position: fixed;
        bottom: 0;
        height: 40px;
        width: 100%;
        background: #444;
        color: #aaa;
        ul{
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }
</style>
