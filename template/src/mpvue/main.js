{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// mpvue has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from '../App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from '../store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#if vuex}}
import router from 'adapters/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
App.mpType = 'app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.prototype.$router = router{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#if vuex}}
Vue.prototype.$store = store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{/if}}

const app = new Vue(App){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
app.$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
