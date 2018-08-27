// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppTemplate from './App'
import App from '../App'
import router from './router'{{#if vuex}}
import store from '../store'{{/if}}

App.render = AppTemplate.render

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,{{#if vuex}}
  store,{{/if}}
  components: { App },
  template: '<App/>'
})
