<template>
  <div class="page">
    <div class="page__inner">
      <h1 class="page__title">{{ msg }}</h1>
      <div class="page__content">
        <div class="page__special">
          <p>Count from store is {{ store.count }}</p>
          <button @click="store.increment">Increase count</button>
        </div>
        <ul class="page__nav navigation">
          <li class="navigation__item" v-for="(item, index) in routes" :key="index">
            <router-link class="navigation__link link" :to="item.path">{{ item.title }}</router-link>
          </li>
        </ul>
        <router-view class="page__content"/>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '../../router';
import { useMainStore } from '../stores/mainStore';

export default {
  name: 'MainPage',
  props: {
    msg: String
  },

  data() {
    return {
      routes,
    };
  },

  setup() {
    const store = useMainStore();

    return { store };
  }
}
</script>

<style>

</style>
