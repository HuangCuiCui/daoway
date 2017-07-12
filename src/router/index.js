/**
 * Created by HCC on 2017/7/12.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../components/home/home.vue"
import seller from '../components/seller/seller.vue'
import downloadApp from "../components/downloadAPP/downloadApp.vue"
import sellerTerm from "../components/sellerTerm/sellerTerm.vue"
import loginUser from "../components/loginUser/loginUser.vue"
import information from "../components/information/information.vue"
import registerUser from "../components/registerUser/registerUser.vue"

Vue.use(VueRouter)
/*路由器模块*/
export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {
      path:'/',
      component: home
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/seller',
      component:seller
    },
    {
      path:'/downloadApp',
      component:downloadApp
    },
    {
      path:'/sellerTerm',
      component:sellerTerm
    },
    {
      path:'/loginUser',
      component:loginUser
    },
    {
      path:'/information',
      component:information
    },
    {
      path:'/registerUser',
      component:registerUser
    }
  ]
})
