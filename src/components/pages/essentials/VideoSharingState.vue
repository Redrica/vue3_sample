<template>
    <div class="screen__content">
      <p>Search for <input v-model="searchInput" /></p>
      <p :style="{ color: loading ? 'green' : 'blue' }">Loading: {{ loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import eventApi from '../../../api/event.js';
import usePromise from '../../../use/use-promise';

export default {
  name: 'VideoSharingState',
  setup() {
    const searchInput = ref('');
    const getEvents = usePromise(search => eventApi.getEventCountAsync(search.value));
    // мы передали функцию для вызова, как бы привязали ее

    watch(searchInput, () => {
      if (searchInput.value !=='') {
        getEvents.createPromise(searchInput);
        // вызовет функцию createPromise объекта getEvents,
        // она выполнит привязанную к ней функцию загрузки данных getEventCountAsync
      } else {
        getEvents.results.value = null;
      }
    })

    return { searchInput, ...getEvents };

    // вроде так ↓ лучше, но тогда в шаблоне придется указывать getEvents.loading и т.п.,
    // а если например биндить это – то еще и .value, иначе глючит. С деструктуризацией без багов.
    // НО! Совершенно неочевидно, откуда берутся в шаблоне переменные loading, error и results (а берутся
    // они из деструктуризации).
    // return { searchInput, getEvents };
  }
}
</script>

<style>

</style>
