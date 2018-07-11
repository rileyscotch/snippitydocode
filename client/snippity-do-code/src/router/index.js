import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Snips from '@/components/Snips'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/snips',
      name: 'Snips',
      component: Snips,
    }
  ]
})
