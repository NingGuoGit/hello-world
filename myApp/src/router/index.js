import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Singer from '@/components/Singer'
import List from '@/components/List'
import Head from '@/components/zujian/Head'
import Search from '@/components/zujian/Search'

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
      path: '/head',
      name: 'Head',
      component: Head
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
