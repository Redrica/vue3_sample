<template>
  <section class="screen">
    <h2 class="screen__title">The Reactive Syntax (Video 5)</h2>
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
import { reactive, computed, toRefs } from 'vue';
export default {
  name: 'VideoReactiveSyntax',
  props: {

  },
  setup() {
    // таким образом мы сразу создаём объект с реактивными свойствами, в нем же можно задать
    // вычисляемое свойство. После чего уже не понядобится брать value каждого свойства, тк
    // всё лежит внутри одного реактивного объекта
    const event = reactive({
      capacity: 4,
      attending: ['Tim', 'Bob', 'Jane'],
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      })
    })

    const increaseCapacity = function () {
      event.capacity ++;
    }
    // в случае использования реактивного объекта экспортируется весь он
    // return { event, increaseCapacity, };

    // проблема: если экспортировать напрямую, то в шаблоне придется обращаться через точку.
    // если деструктурировать или же экспортировать "поштучно" – теряется реактивность.
    // поэтому пользуемся функцией toRefs, которая превращает реактивный объект
    // в объект с реактивными свойствами (где каждое свойство - ссылка на оригинальный реактивный оъект)
    // – и его уже можно деструктурировать.
    return { ...toRefs(event), increaseCapacity, };

    // если бы требовалось вернуть только данные, то можно было бы записать так:
    // return toRefs(event);
  },
}
</script>
