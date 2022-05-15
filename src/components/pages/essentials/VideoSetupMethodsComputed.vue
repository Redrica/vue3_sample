<template>
  <div class="screen__content">
    <!--      В шаблоне не требуется использовать .value при обращении к значению,
     заданному через ref или computed, за нас это делает Vue -->
    <!--      <div>Capacity: {{ capacity }}</div>-->
    <p>Spaces left: {{ spacesLeft }} out of {{ capacity }}</p>
    <button @click="increaseCapacity">increaseCapacity</button>

    <h3>Attending</h3>
    <ul>
      <li v-for="(item, index) in attending" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<!-- Имеет смысл использовать Composition API в следующих случаях:
- требуется хорошая поддержка TypeScript
- Компоненты очень большие и требуется организовать код
- Нужна возможность переиспользования кода
-->


<script>
import { ref, computed } from 'vue';

export default {
  name: 'VideoSetupMethodsComputed',
  props: {},
  setup() {
    const capacity = ref(3);
    const attending = ref([ 'Tim', 'Bob', 'Jane' ]);

    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });
    // Можно задавать и как function declaration и как function expression

    // function increaseCapacity () {
    //   // мы не можем написать просто capacity++, потому что capacity это не примитив, а объект, Reactive Reference!
    //   capacity.value ++;
    // }
    const increaseCapacity = function () {
      capacity.value++;
    }
    return { capacity, increaseCapacity, attending, spacesLeft };
  },
}
</script>

<style>

</style>
