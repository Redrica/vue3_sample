<template>
  <div class="page">
    <div class="page__inner">
      <div class="page__content">
        <ul class="page__nav main-nav">
          <li class="main-nav__item" v-for="(item, index) in routes" :key="index">
            <router-link class="main-nav__link" :to="item.path">{{ item.title }}</router-link>
          </li>
        </ul>
<!--        <div class="page__special">-->
<!--          <p>Count from store is {{ store.count }}</p>-->
<!--          <button @click="store.increment">Increase count</button>-->
<!--        </div>-->

        <router-view class="page__route route"/>
      </div>
    </div>
  </div>
</template>

<script>
import { routes } from '../router';
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
