<template>
    <div class="main">
        <div class="cart_title">
            购物车
            <a href="javascript:;" v-if="edit" @click="editIsok">编辑</a>
            <a href="javascript:;" v-else @click="editIsok">完成</a>
        </div>
        <div class="cart_list">
            <div v-if="!cartNum" class="cartNone">
                <img src="../assets/image/empty_cart.png" alt="">
                <p>并没有发现东西</p>
                <button @click="toHome">快去逛逛</button>
            </div>
            <div v-else class="cart_goods">
                <ul>
                    <li v-for="(list,index) in cartList" :key="list.good_id">
                        <div class="checkbox">
                            <input type="checkbox" v-model="selected" :value="list.good_id" @click="select(list.good_id)"><label for=""></label>
                        </div>
                        <div class="imgbox"><img :src="list.img_cover" alt=""></div>
                        <div class="messbox">
                            <div class="mess_name">{{list.good_name}}</div>
                            <div class="mess_style">{{list.style}}</div>
                            <div class="mess_price">￥{{list.now_price}}</div>
                            <div class="mess_num">
                                <span @click="cutnum(index)">-</span>
                                <span>{{list.nums}}</span>
                                <span @click="addnum(index)">+</span>
                                <span><img src="../assets/image/delete_cart.png" @click="deleteOne(list.good_id)"></span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="cart_bottom">
                <!-- `checked` 为 true 或 false -->
                <div class="checkbox">
                    <input type="checkbox" v-model="checkAll"><label for=""></label>
                </div>
                <div class="total_price" v-if="edit">总价：￥{{price}}</div>
                <div class="pay" v-if="edit" :class="{payActive:selected.length>0}">去结算({{selected.length}})</div>
                <div v-else>
                    <!-- <div class="collect bom">移入收藏</div> -->
                    <div class="deleteCheck bom" @click="deleteSelected">删除</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cartNum:1,
            cartList:[],
            edit:true,
            selected:[],
            price:0,
        }
    },
    created(){
        // this.$store.dispatch("getCartData","3d");
        //购物车数据
        let user_id = localStorage.getItem('id');
        let param = { 'user_id': user_id };
        this.$axios.post("http://localhost:12580/cart/list", this.$qs.stringify(param))
        .then(response => {
            // console.log(response);// 后台返回数据
            let data = response.data.data;
            // console.log(data)
            for(let i=0; i<data.length; i++){
                data[i].img_cover = require('../assets/image/'+data[i].img_cover);
            }
            this.cartList = data;
            this.cartNum = data.length;
        });

        this.cartList = this.$store.state.cartList;
        // console.log(this.cartList);
        this.totalPrice();
    },
    computed:{
        checkAll:{
            get(){
                return this.cartList.every((list)=>this.selected.includes(list.good_id)) && this.cartList.length>0;
            },
            set(checked){
                this.selected = checked ? this.cartList.map((list)=>list.good_id) : [];
                this.totalPrice();
            }
            
            
        }
    },
    methods:{
        //回到首页
        toHome(){
            this.$router.push({name:"Home_main"});
        },
        //编辑完成切换
        editIsok(){
            this.edit = !this.edit;
        },
        //数量减少
        cutnum(idx){
            if(this.cartList[idx].nums>1){
                this.cartList[idx].nums--;
                //axios
                let param = {"good_id":this.cartList[idx].good_id,"user_id":this.cartList[idx].user_id};
                this.$axios.post("http://localhost:12580/cart/reduce", this.$qs.stringify(param))
                //成功返回
                .then(response => {
                    console.log(response);// 后台返回数据
                })
                //失败返回
                .catch(error => {
                    console.log(error);
                })
                this.totalPrice();
            }
        },
        //数量增加
        addnum(idx){
            this.cartList[idx].nums++;
            this.totalPrice();
            let param = {"good_id":this.cartList[idx].good_id,"user_id":this.cartList[idx].user_id};
            this.$axios.post("http://localhost:12580/cart/add", this.$qs.stringify(param))
            //成功返回
            .then(response => {
                console.log(response);// 后台返回数据
            })
            //失败返回
            .catch(error => {
                console.log(error);
            })
        },
        //勾选
        select(id){
            let index = this.selected.indexOf(id);
            if(index>=0){
                this.selected.splice(index,1);
            }else{
                this.selected.push(id);
            }
            this.totalPrice();
        },
        //删除单项
        deleteOne(id){
            // this.$messagebox.confirm('确认删除好货吗').then(action=>{
                // let good_id = this.cartList[id].good_id;
                // console.log(good_id);
                for(var i=0;i<this.cartList.length;i++){
                    if(this.cartList[i].good_id === id){
                        break;
                    }
                }
                
                //axios
                let param = {"good_id":id,"user_id":this.cartList[i].user_id};
                this.$axios.post("http://localhost:12580/cart/delete", this.$qs.stringify(param))
                //成功返回
                .then(response => {
                    console.log(response);// 后台返回数据
                })
                //失败返回
                .catch(error => {
                    console.log(error);
                })

                this.cartNum--;
                this.cartList.splice(i,1);

                let index = this.selected.indexOf(id);
                if(index>=0){
                    this.selected.splice(index,1);
                }
                this.totalPrice();

                this.$store.commit('removeGoods',id);
                this.$forceUpdate();
            // }   
        },

        //删除选中
        deleteSelected(){
            this.selected.map((item)=>{
                // totalprice += this.cartList[item].now_price * this.cartList[item].nums;
                for(var i=0;i<this.cartList.length;i++){
                    if(this.cartList[i].good_id === item){
                        break;
                    }
                }
                this.$store.commit('removeGoods',this.cartList[i].good_id);
                let param = {"good_id":this.cartList[i].good_id,"user_id":this.cartList[i].user_id};
                this.$axios.post("http://localhost:12580/cart/delete", this.$qs.stringify(param))
                //成功返回
                .then(response => {
                    console.log(response);// 后台返回数据
                })
                this.cartList.splice(i,1);
                
            });
            this.selected = [];
            this.totalPrice();
        },
        //计算价格
        totalPrice(){
            let totalprice = 0;
            this.selected.map((item)=>{
                // totalprice += this.cartList[item].now_price * this.cartList[item].nums;
                for(var i=0;i<this.cartList.length;i++){
                    if(this.cartList[i].good_id === item){
                        break;
                    }
                }
                totalprice += this.cartList[i].now_price * this.cartList[i].nums;
            });
            totalprice = totalprice.toFixed(2);
            // console.log(totalprice);
            this.price = totalprice;
        }
    }
}
</script>

<style lang="scss" scoped>
.cart_title{
    height: 1.16rem;
    background: #000;
    color: #fff;
    font-weight: bold;
    font-size: .426667rem;
    line-height: 1.16rem;
    position: relative;
    a{
        color: #fff;
        font-size: .426667rem;
        font-weight: normal;
        position: absolute;
        right: .426667rem;
        text-decoration: none;
    }
}
.cart_list{
    display: flex;
    flex: 1;
    // background: lemonchiffon;
    padding-bottom: 2.933333rem;
    // overflow: auto;
    color: #666;
    .cartNone{
        display: flex;
        width: 100%;
        height: 12.466667rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img{
            width: 3.2rem;
        }
        p{
            font-size: .426667rem;
            line-height: .533333rem;
            margin: .426667rem 0;
            
        }
        button{
            border: none;
            width: 2.453333rem;
            height: 1.013333rem;
            background: #ffbd1f;
            color: #fff;
            border-radius: .16rem;
        }
    }
    .cart_goods{
        width: 100%;
        height: 100%;
        overflow: auto;
        ul{
            width: 100%;
            li{
                width: 100%;
                height: 3.2rem;
                box-sizing: border-box;
                border-bottom: 1px solid #ccc;
                padding: .266667rem 0;
                display: flex;
                align-items: center;
                
                .imgbox{
                    height: 2.666667rem;
                    width: 2.666667rem;
                    box-sizing: border-box;
                    border: 1px solid #eee;
                    img{
                        height: 2.613333rem;
                        width: 2.613333rem;
                    }
                }
                .messbox{
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    // background: #ffbd1f;
                    height: 100%;
                    box-sizing: border-box;
                    padding: 0 .266667rem;
                    text-align: left;
                    .mess_name{
                        width: 5.6rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #333;
                        font-size: .373333rem;
                        line-height: .586667rem;
                    }
                    .mess_style{
                        font-size: .373333rem;
                        color: #aaa;
                        line-height: .586667rem;
                    }
                    .mess_price{
                        font-size: .48rem;
                        color: #ffbd1f;
                        font-weight: bold;
                        line-height: .64rem;
                    }
                    .mess_num{
                        width: 100%;
                        position: relative;
                        span{
                            display: inline-block;
                            width: 1.066667rem;
                            height: .8rem;
                            border: 1px solid #ccc;
                            text-align: center;
                            line-height: .8rem;
                            vertical-align: top;
                        }
                        span:nth-child(1){
                            border-top-left-radius: .133333rem;
                            border-bottom-left-radius: .133333rem;
                            font-size: .746667rem;
                        }
                        span:nth-child(2){
                            border-left: none;
                            border-right: none;
                        }
                        span:nth-child(3){
                            border-top-right-radius: .133333rem;
                            border-bottom-right-radius: .133333rem;
                            font-size: .746667rem;
                        }
                        span:nth-child(4){
                            position: absolute;
                            right: .133333rem;
                            top: 0;
                            border: none;
                            img{
                                height: .746667rem;
                            }
                        }
                    }
                }
            }
        }
    }
    .cart_bottom{
        height: 1.333333rem;
        background: #000;
        width: 100%;
        position: absolute;
        bottom: 1.6rem;
        border-bottom: 1px solid #ccc;
        display: flex;
        line-height: 1.333333rem;
        padding: 0 .4rem;
        color: #fff;
        box-sizing: border-box;
        .pay{
            height: .906667rem;
            width: 2.4rem;
            background: #666;
            position: absolute;
            top: .213333rem;
            right: .4rem;
            border-radius: .16rem;
            line-height: .906667rem;
        }
        .payActive{
            background: #ffbd1f;
        }
        .bom{
            position: absolute;
            width: 2.4rem;
            height: .906667rem;
            line-height: .906667rem;
            top: .213333rem;
            background: #ffbd1f;
            border-radius: .16rem;
        }
        .collect{
            right: 3.2rem;
        }
        .deleteCheck{
            right: .4rem;
        }
    }
}

.checkbox{
    height: 100%;
    width: 1.2rem;
    line-height: 2.666667rem;
    position: relative;
    input{
        width: .4rem;
        height: .4rem;
        // visibility: hidden;
        opacity: 0;
        position: relative;
        z-index: 3;
    }
    input+label{
        display: block;
        width: .4rem;
        height: .4rem;
        // background: #ffbd1f;
        border: 1px solid #ffbd1f;
        position: absolute;
        top: 1.04rem;
        left: .4rem;
        border-radius: 50%;
    }
    input:checked + label::before{
        display: block;
        content: " ";
        text-align: center;
        height: .4rem;
        font-size: 16px;
        border-radius: 50%;
        // color: white;
        background: #ffbd1f;
    }
}
.cart_bottom .checkbox input{
    top: -0.613333rem;
    left: -0.4rem;
}
.cart_bottom .checkbox input+label{
    top: .4rem;
    left: 0;
}
</style>
