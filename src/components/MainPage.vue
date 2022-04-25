<template>
  <div class="page">
    <h1 class="page__title">{{ msg }}</h1>
      <ul class="page__nav navigation">
        <li class="navigation__item" v-for="(item, index) in routes" :key="index">
          <router-link class="navigation__link link" :to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    <router-view class="page__content"/>
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
