
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    // 公共数据
    state:{
        goodslist:[],
        navs:[{
            name:'首页',
            title:'Home_main',
            icon1:require('@/assets/image/home.png'),
            icon2:require('@/assets/image/home-selected.png')
        },{
            name:'妙语连珠',
            title:'Home_article',
            icon1:require('@/assets/image/sparklingDiscourse.png'),
            icon2:require('@/assets/image/sparklingDiscourse-selected.png')
        },{
            name:'专题',
            title:'Home_theme',
            icon1:require('../assets/image/special-topic.png'),
            icon2:require('../assets/image/special-topic-selected.png')
        },{
            name:'购物车',
            title:'Home_cart',
            icon1:require('../assets/image/cart.png'),
            icon2:require('../assets/image/cart-selected.png')
        },{
            name:'个人中心',
            title:'Home_mine',
            icon1:require('../assets/image/user.png'),
            icon2:require('../assets/image/user-selected.png')
        }]
        
    },
    mutations:{
        jump(){
            
        }
    }
});

export default store;