<template>
  <section class="screen">
    <h2 class="screen__title">{{ pageTitle }}</h2>
    <component v-if="currentPage" class="screen__content" :is="currentPage" />
    <div v-else class="screen__content">Please select from left menu…</div>
  </section>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import VideoWatch from './VideoWatch';
import VideoModularizing from './VideoModularizing';
import VideoReactiveSyntax from './VideoReactiveSyntax';
import VideoSetupMethodsComputed from './VideoSetupMethodsComputed';
import VideoSharingState from './VideoSharingState';
import VideoSuspense from './VideoSuspense';
import VideoTeleport from './VideoTeleport';

export default {
  name: 'EssentialPage',
  components: {
    VideoTeleport,
    VideoSuspense,
    VideoSharingState,
    VideoModularizing,
    VideoWatch,
    VideoSetupMethodsComputed,
    VideoReactiveSyntax,
  },
  setup() {
    const route = useRoute();
    let currentPage = ref('');
    const pageTitle = ref('');

    const getCurrentPage = () => {
      switch (route.name) {
        case 'setup':
          pageTitle.value = 'Setup & Reactive References, Methods & Computed (Video 2, 3, 4)';
          currentPage.value = 'VideoSetupMethodsComputed';
          break
        case 'reactive-syntax':
          pageTitle.value = 'The Reactive Syntax (Video 5)';
          currentPage.value = 'VideoReactiveSyntax';
          break
        case 'modularizing':
          pageTitle.value = 'Modularizing (Video 6)';
          currentPage.value = 'VideoModularizing';
          break
        case 'watch':
          pageTitle.value = 'Watch и WatchEffect (Video 8)';
          currentPage.value = 'VideoWatch';
          break
        case 'sharing-state':
          pageTitle.value = 'Video №9 – Sharing State';
          currentPage.value = 'VideoSharingState';
          break
        case 'suspense':
          pageTitle.value = 'Video №10 – Suspense';
          currentPage.value = 'VideoSuspense';
          break
        case 'teleport':
          pageTitle.value = 'Video №11 – Teleport';
          currentPage.value = 'VideoTeleport';
          break
        default:
          pageTitle.value = 'Video course of essential parts Vue 3 Composition API';
          currentPage.value = '';
      }
    };

    onMounted(() => getCurrentPage());
    watch(() => route.name, getCurrentPage);

    return { pageTitle, currentPage };
  }
}
</script>

<style >

</style>
