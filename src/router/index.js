import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/page/Login.vue'
import IndexPage from '@/views/page/index.vue'
import Register from '@/views/page/Register.vue'
import ShopPage from '@/views/page/shop-page.vue'
import pane1 from '@/components/assembly/pane1.vue'
import pane2 from '@/components/assembly/pane2.vue'
import cart from '@/views/page/cart.vue'
import Campus from '@/views/page/campus.vue'
import checkout from '@/views/page/checkout.vue'
import updataShop from '@/views/page/updataShop.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/indexPage' },
  { path: '/loginPage', name: 'loginPage', component: LoginPage },
  { path: '/indexPage', name: 'indexPage', component: IndexPage },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/shopPage',
    component: ShopPage,
    children: [
      { path: '', component: pane1 },
      { path: 'pane2', component: pane2 }
    ]
  },
  { path: '/cart', name: 'cart', component: cart },
  { path: '/campus', name: 'campus', component: Campus },
  { path: '/checkout', name: 'checkout', component: checkout },
  {
    path: '/updataShop',
    name: 'updataShop',
    component: updataShop
  }
]

const router = new VueRouter({
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
export default router
