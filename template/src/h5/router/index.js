import Vue from 'vue'
import Router from 'vue-router'{{#if vuex}}
import Counter from '@/pages/counter/index'{{/if}}
import Home from '@/pages/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/index/main'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }, {
    path: '/index/main',
    component: Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if vuex}}, {
    path: '/counter/main',
    component: Counter{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{/if}}]
})
