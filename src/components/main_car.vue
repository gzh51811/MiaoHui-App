<template>
    <div class="block">
        <el-carousel trigger="click" height="4.666667rem" arrow="never">
            <el-carousel-item v-for="item in loops" :key="item.id">
                <img :src="item.url">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loops:[{
                url:require('../assets/image/1550028644755551149.jpg'),
                id:1
            },{
                url:require('../assets/image/1543394297195493772.jpg'),
                id:2
            },{
                url:require('../assets/image/1552025999553570741.jpg'),
                id:3
            },{
                url:require('../assets/image/1552298486865255196.jpg'),
                id:4
            }]
        }
    }
}
</script>

<style lang="scss" scoped>
.block{
    img{
        width: 100%;
    }
}
</style>
