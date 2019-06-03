import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import ChosePlayer from '@/views/ChosePlayer.vue'
import Battle from '@/views/Battle.vue'
import Missing from '@/views/Missing.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/player',
      name: 'player',
      component: ChosePlayer
    },
    {
      path: '/battle',
      name: 'battle',
      component: Battle
    },
    {
      path: '/*',
      name: 'missing',
      component: Missing
    }
  ]
})
