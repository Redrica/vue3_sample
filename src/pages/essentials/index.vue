<template>
  <section class="essentials">
    <div class="essentials__content">
      <ul class="essentials__nav navigation">
        <li class="navigation__item" v-for="(item, index) in innerRoutes" :key="index">
          <router-link class="navigation__link link" :to="`/essentials/${item.path}`">{{
              item.title
            }}
          </router-link>
        </li>
      </ul>
      <router-view class="page__route route"/>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue';
import { routes } from '../../router';

export default {
  name: 'index',

  setup() {
    const innerRoutes = computed(() => routes.find((item) => item.name === 'essentials').children);

    return { innerRoutes }
  },
}
</script>

<style lang="scss">
  @import "src/assets/scss/variables";

  .essentials {
    display: flex;
    flex-direction: column;


    &__content {
      display: flex;
      flex-grow: 1;
    }

    &__nav {
      max-width: 200px;
      margin: 0;
      padding: 25px 0 0 25px;
      border-right: 2px solid #4f988b;
    }
  }
</style>
