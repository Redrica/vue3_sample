<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Navigation</h3>
    <ul class="navigation">
      <li v-for="(item, index) in routes" :key="index">
        <router-link :to="item.path">{{ item.title }}</router-link></li>
    </ul>

    <router-view />
  </div>
</template>

<script>
import { routes } from '../../router';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      routes,
    };
  }
}
</script>

<style>

</style>
