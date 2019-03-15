
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    // 公共数据
    state:{
        goodslist:[],
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
    },
    mutations:{
        
    }
});

export default store;