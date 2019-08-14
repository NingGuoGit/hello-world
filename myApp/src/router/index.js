import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import Singer from '@/components/main/Singer'
import List from '@/components/main/List'
import Search from '@/components/small/Search'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
