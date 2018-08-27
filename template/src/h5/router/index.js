import Vue from 'vue'
import Router from 'vue-router'{{#if vuex}}
import Counter from '@/pages/counter/index'{{/if}}
import Home from '@/pages/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/index/main',
    component: Home,
  }{{#if vuex}}, {
    path: '/counter/main',
    component: Counter,
  }{{/if}}]
})
