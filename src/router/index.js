
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import List from '../pages/List.vue';
import Detail_goods from '../pages/Detail_goods.vue';
import Detail_article from '../pages/Detail_article.vue';
import Login from '../pages/Login.vue'
import Home_main from '../pages/Home_main.vue'
import Home_article from '../pages/Home_article.vue'
import Home_cart from '../pages/Home_cart.vue'
import Home_mine from '../pages/Home_mine.vue'
import Home_theme from '../pages/Home_theme.vue'
import notfound from '../pages/NotFound.vue';
import Detail_share from '../pages/share_goods.vue';
import user_setting from '../pages/user_setting.vue';
import Account from '../pages/account.vue';


import View_details from '../pages/View_details.vue';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[{
        path:'/',
        redirect:'/home',
        meta:{
            keepAlive:true,
            isBack:true,
        }
    },{
        name:'List',
        path:'/list',
        component:List,
        meta:{
            keepAlive:true,
            isBack:true,
        }
    },{
        name:'Detail_goods',
        path:'/detail_goods',
        meta:{
            keepAlive:true,
            isBack:true,
        },
        component:Detail_goods,
    },
    {
        name:'Detail_share',
        path:'/detail_goods/share_goods',
        meta:{
            keepAlive:true,
            isBack:true,
        },
        component:Detail_share
    },
    {
        name:'View_details',
        path:'/detail_goods/view_details',
        meta:{
            keepAlive:true,
            isBack:true,
        },
        component:View_details
    },
    {
        name:'Detail_article',
        path:'/detail_article',
        component:Detail_article
        
    },
    {
        name:'Account',
        path:'/account',
        component:Account,
    },
    {
        name:'user_setting',
        path:'/setting',
        component:user_setting
        
    },
    {
        name:'Login',
        path:'/login',
        component:Login,
        // 单个路由独享
        beforeEnter(to,from,next){
            let username = localStorage.getItem('username')
            if(username){
                next({
                    name:'Home'
                })
            }else{
                next();
            }
        }
    },{
        name:'Home',
        path:'/home',
        redirect:'/home/main',
        component:Home,
        children:[
            {
                name:'Home_main',
                path:'/home/main',
                component:Home_main
            },{
                name:'Home_article',
                path:'/home/article',
                component:Home_article
            },{
                name:'Home_cart',
                path:'/home/cart',
                component:Home_cart,
                // meta: { 
                //     requiresAuth: true 
                // }
            },{
                name:'Home_theme',
                path:'/home/theme',
                component:Home_theme
            },{
                name:'Home_mine',
                path:'/home/mine',
                component:Home_mine
            }
        ]
    },{
        path:'*',
        component:notfound
    }]
});

router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth){
        // 需要登录的模块，判断是否已登录
        let username = localStorage.getItem('username');
        if(username){
            next();
        }else{
            // 重定向到登录页面
            next({
                name:'Login',
                params:{from:to.fullPath}
            })
        }
    }else{
        next();
    }  
});

export default router;