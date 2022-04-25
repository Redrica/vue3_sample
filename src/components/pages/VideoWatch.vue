<template>
  <section class="screen">
    <h2 class="screen__title">Watch и WatchEffect (Video 8)</h2>
    <hr>
    <div class="screen__content">
      <p>Search for <input v-model="searchInput" /></p>
      <p>Number of events: {{ results }}</p>
    </div>
  </section>
</template>

<script>
import { ref, watch, watchEffect } from 'vue';
import eventApi from '../../api/event.js';

export default {
  name: 'VideoWatch',
  setup() {
    const searchInput = ref('');
    const results = ref(0);

    // вызовется один раз при отработке Setup()
    // results.value = eventApi.getEventCount(searchInput.value);

    // запустится один раз при реактивизации зависимостей и потом каждый раз при их изменении
    watchEffect(() => {
      results.value = eventApi.getEventCount(searchInput.value);
    });
    // watchEffect для вызова коллбэка без объявления, какую зависимость отслеживать, синтаксис
    // watchEffect(fn, options?)

    // для остальных случаев watch: watch(source, fn, options?)

    // можно отслеживать определенное реактивное свойство и при его изменении запускать коллбэк
    watch(searchInput, () => {
      console.log('searchInput changed');
    });

   // можно получить и использовать новое и старое значения
    watch(searchInput, (newVal, oldVal) => {
      console.log('searchInput changed, was ', oldVal, ' become ', newVal);
    });

    // если требуется отслеживать несколько свойств и вызывать один и тот же коллбэк –
    // передаём массив свойств и при необходимости массив новых и старых значений

    // watch([searchInput, results], ([newVal1, oldVal1], [newVal2, oldVal2]) => {
    //   console.log(newVal1, newVal2, oldVal1, oldVal2);
    // });



    return { searchInput, results };
  },
}
</script>
