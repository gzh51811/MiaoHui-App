
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    // 公共数据
    state: {
        goodslist: [],
        navs: [{
            name: '首页',
            title: 'Home_main',
            icon1: require('@/assets/image/home.png'),
            icon2: require('@/assets/image/home-selected.png')
        }, {
            name: '妙语连珠',
            title: 'Home_article',
            icon1: require('@/assets/image/sparklingDiscourse.png'),
            icon2: require('@/assets/image/sparklingDiscourse-selected.png')
        }, {
            name: '专题',
            title: 'Home_theme',
            icon1: require('../assets/image/special-topic.png'),
            icon2: require('../assets/image/special-topic-selected.png')
        }, {
            name: '购物车',
            title: 'Home_cart',
            icon1: require('../assets/image/cart.png'),
            icon2: require('../assets/image/cart-selected.png')
        }, {
            name: '个人中心',
            title: 'Home_mine',
            icon1: require('../assets/image/user.png'),
            icon2: require('../assets/image/user-selected.png')
        }],
        cartList: []
    },
    mutations: {
        changeRecommend(state, payload) {
            state.cartList=payload;
            console.log(state.cartList);
        },
        // 删除商品
        removeGoods(state, good_id) {
            for (var i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].good_id === good_id) {
                    break;
                }
            }
            state.cartList.splice(i, 1);
        }
    },
    actions: {
        getCartData(context, payload) {
            let param = { 'user_id': payload };
            this._vm.$axios.post("http://localhost:12580/cart/list", this._vm.$qs.stringify(param))
                .then(response => {
                    // console.log(response);// 后台返回数据
                    let data = response.data.data;
                    // console.log(data)
                    for(let i=0; i<data.length; i++){
                        data[i].img_cover = require('../assets/image/'+data[i].img_cover);
                    }
                    context.commit('changeRecommend',data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
});

export default store;

// {
//     good_id : "8008",
//     user_id : 1,
//     img_cover : require("../assets/image/1402_L_1502706636033.jpg"),
//     good_name : "【对面】Led化妆镜子台灯|公主专属",
//     now_price : "108.40",
//     style : "女生款",
//     adding_time : "1552832990130",
//     nums : 6
// },
// {
//     good_id : "8009",
//     user_id : 1,
//     img_cover : require("../assets/image/1453_thumb_G_1548725455338.jpg"),
//     good_name : "【九猪】USB充电发热蒸汽眼罩|去黑眼圈",
//     now_price : "108.00",
//     style : "女生款",
//     adding_time : "1552832990130",
//     nums : 7
// },
// {
//     good_id : "8010",
//     user_id : 1,
//     img_cover : require("../assets/image/1453_thumb_G_1548725455338.jpg"),
//     good_name : "【九猪】USB充电发热蒸汽眼罩|去黑眼圈",
//     now_price : "108.00",
//     style : "女生款",
//     adding_time : "1552832990130",
//     nums : 7
// },
// {
//     good_id : "8011",
//     user_id : 1,
//     img_cover : require("../assets/image/1453_thumb_G_1548725455338.jpg"),
//     good_name : "【九猪】USB充电发热蒸汽眼罩|去黑眼圈",
//     now_price : "108.00",
//     style : "女生款",
//     adding_time : "1552832990130",
//     nums : 7
// },
// {
//     good_id : "8012",
//     user_id : 1,
//     img_cover : require("../assets/image/1453_thumb_G_1548725455338.jpg"),
//     good_name : "【九猪】USB充电发热蒸汽眼罩|去黑眼圈",
//     now_price : "108.00",
//     style : "女生款",
//     adding_time : "1552832990130",
//     nums : 7
// },
// {
//     good_id : "8013",
//     user_id : 1,
//     img_cover : require("../assets/image/1453_thumb_G_1548725455338.jpg"),
//     good_name : "【九猪】USB充电发热蒸汽眼罩|去黑眼圈",
//     now_price : "108.00",
//     style : "女生款",
//     adding_time : "1552832990130",
//     nums : 7
// }