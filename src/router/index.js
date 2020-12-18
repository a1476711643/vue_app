import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Shopcar from '../components/tabbar/Shopcar.vue'
import Search from '../components/tabbar/Search.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/member', component: Member },
  { path: '/shopcar', component: Shopcar },
  { path: '/search', component: Search },
  { path: '/home/newslist', component: NewsList },
  { path: '/home/newsinfo/:id', component: NewsInfo }

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active' //覆盖路由默认高亮类 (link-active-class)
})


export default router
