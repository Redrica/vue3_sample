// потребуется импортировать Мгу функции, чтобы использовать их

import { ref, computed } from 'vue';

export default function useEventSpace () {
  const capacity = ref(8);
  const attending = ref([ 'Tim', 'Bob', 'Jane' ]);

  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
  });

  const increaseCapacity = function () {
    capacity.value++;
  }
  return { capacity, increaseCapacity, attending, spacesLeft };
}
