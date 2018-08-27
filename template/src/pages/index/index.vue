<template>
  <div class="container">

    <img class="vue-logo" @click="clickHandle('test click', $event)" src="/images/logo.png" />

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    {{#if vuex}}
    <a @click="gotoVuex" class="counter">去往Vuex示例页面</a>
    {{/if}}
  </div>
</template>

<script>
import card from '@/components/card'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      motto: 'Hello World'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },

  components: {
    card{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  methods: {
    {{#if vuex}}gotoVuex{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      this.$router.push('/counter/main'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    {{/if}}getUserInfo{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      // 调用登录接口 各端不一样可以写adapter
    },
    clickHandle{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(msg, ev) {
      console.log('clickHandle:', msg, ev){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },

  created{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style scoped>
.vue-logo {
  width: 100px;
  height: 100px;
}

.usermotto {
  margin-top: 50px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

{{#if vuex}}
.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
{{/if}}
</style>
