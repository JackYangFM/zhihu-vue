import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Scroll from './views/simple-scroll.vue'
import Splash from './views/splash.vue'
// import Scroll from './views/scroll.vue'

import Home from './components/home/Home.vue'
import University from './components/university/University.vue'
import News from './components/news/News.vue'
import Mine from './components/mine/Mine.vue'
import Detail from './components/detail/Detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/splash'
    },
    {
      path: '/splash',
      name: 'splash',
      component: Splash
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'university',
          name: 'university',
          component: University
        },
        {
          path: 'news',
          name: 'news',
          component: News
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        }
      ]
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: Scroll
    }
  ]
})

