<template>
    <div class="main">
        <div class="grzx">  
            <img src="../assets/image/touxiang.png" alt="" @click="seting">
            <span>速来登录，获取全球创意</span>
            <button @click="login">登录/注册</button>
            <a href="#"></a>
        </div>
    </div>
</template>
    
<script>
export default {
    created(){
        console.log(localStorage.getItem('id'))
        let id = localStorage.getItem('id')
        if(id != null){
            // console.log('00');
            this.$router.push({name:'Home_mineDetail'})
        }
        
    },
    methods:{
        seting(){

        },
        login(){
            this.$router.push({name:'Login'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .main{
        padding-bottom: 80px;
        width: 100%;
        // height: 100%;
        /deep/ .grzx{
            display: flex;
            // justify-content: center;
            align-items: center;
            overflow: auto;
            // flex: 1;
            width: 100%;
            height: 35%;
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

                border-radius:5px;
                // margin: 10px;
                background-color: #191919 !important;
                color: #ffffff !important;
                // margin: .5rem .4rem;
                margin-top: 12px;

                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                box-shadow: none !important;
                border: none !important;
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
        }
    }

</style>