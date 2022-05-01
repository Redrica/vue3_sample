<template>
  <div class="screen">
    <h2 class="screen__title">Video №10 – Suspense</h2>
    <hr>

    <div v-if="error">Uh oh damn ... {{ error }}</div>
    <Suspense v-else>
      <template #default>
        <div>
          <AsyncSetupComponent/>
          <AsyncSetupComponent/>
          <AsyncSetupComponent/>
        </div>
      </template>
      <template #fallback>
        Wait, wait, I'm loading from the deep of my heart!
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onErrorCaptured } from 'vue';
import AsyncSetupComponent from '../AsyncSetupComponent';

export default {
  name: 'VideoSuspense',
  components: { AsyncSetupComponent },
  setup() {
    const error = ref(null);
    onErrorCaptured((e) => {
      error.value = e;
      // ↓ prevents the error from propagation and appearing in browser
      return true;
    });
    return { error };
  },
}
</script>

<style>

</style>
