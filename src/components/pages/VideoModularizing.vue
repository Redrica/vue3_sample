<template>
  <section class="screen">
    <h2 class="screen__title">Modularizing (Video 6)</h2>
    <hr>
    <div class="screen__content">
      <p>Spaces left: {{ spacesLeft }} out of {{ capacity }}</p>
      <button @click="increaseCapacity">increaseCapacity</button>

      <h3>Attending</h3>
      <ul>
        <li v-for="(item, index) in attending" :key="index">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
// import { ref, computed } from 'vue';
// ПЕРЕИСПОЛЬЗОВАНИЕ
import useEventSpace from '../../use/event-space';

export default {
  name: 'VideoModularizing',
  props: {

  },
  setup() {
   return useEventSpace();

  // если мы импортируем и используем несколько composition function, то возвращать их надо
  // через деструктуризацию:
  // return { ...useEventSpace(), ...anotherCompositionFunction(), }
  },
}

// мы можем вынести всю логику за пределы и создать composition function
// их может быть сколько угодно
// function useEventSpace() {
//   const capacity = ref(5);
//   const attending = ref([ 'Tim', 'Bob', 'Jane' ]);
//
//   const spacesLeft = computed(() => {
//     return capacity.value - attending.value.length;
//   });
//
//   const increaseCapacity = function () {
//     capacity.value++;
//   }
//   return { capacity, increaseCapacity, attending, spacesLeft };
// }

// ПЕРЕИСПОЛЬЗОВАНИЕ: код composition function может быть выделен в отдельный модуль
// в папку /use (название неважно) и импортироваться из него
</script>
