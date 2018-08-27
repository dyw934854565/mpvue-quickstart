<template>
  <div class="counter-warp">
    <p>Vuex counter：\{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <span @click="() => this.$router.push('/index/main')" class="home">去往首页</span>
  </div>
</template>

<script>
// Use Vuex
import {mapGetters, mapMutations} from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  computed: {
    ...mapGetters([
      'count'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    ]){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
