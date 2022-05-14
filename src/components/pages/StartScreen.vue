<template>
  <div>
    <h2>Start screen. Welcome to Pinia</h2>
    <hr>
    <p>{{ store.name }}</p>

    <p>Count value in store is {{ count }}</p>
<!--    можно получать доступ через точку, если экспортируется весь стейт -->
    <p>Count value in store is {{ store.count }} – via exported store</p>
    <button @click="increment">Increase count</button>
    <button @click="onButtonClick">Increase count by direct access</button>
    <button @click="resetState">Reset state</button>
    <button @click="storePatch">storePatch</button>
    <button @click="storePatchByFunc">storePatchByFunc</button>
    <button @click="replaceState">replace state</button>
    <h1>We have {{ store.pointsCount }} points here and a magic number – {{ store.magicNumber }}</h1>
    <h1>From getter with argument: {{ store.getPointByAge(store.name) }}</h1>
    <h1>Several stores: {{ store.getValueFromOtherStore }}</h1>
    <button @click="store.randomizeCounter">Make random count</button>
    <button @click="store.actionFromOtherStore">Dispatch action from other store</button>

    <ul>
      <li v-for="(point, index) in pointsArray" :key="`00${index}`">{{ point.name }} – {{ point.age }} y.o.</li>
    </ul>

  </div>
</template>

<script>
import { useMainStore } from '../../stores/mainStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

export default {
  name: 'StartScreen',
  // если используется Options API, то можно использовать хук setup просто чтобы там объявить стейт в компоненте, чтобы к нему потом обращаться.
  // setup() {
  //    const store = useMyStore();
  //    return { store }
  // }
  // computed: {
  //     getSmthFromStore() {
  //         return this.store.SMTH
  //     }
  // }, то есть не требуется использовать mapState. А если использовать – то всё по аналогии с Vuex: ...mapState(useStoreName, ['propName'])
  // и так же можно использовать геттеры, а в методы записывать экшены стора, полученного в setup() и вызывать их потом.
  // Если же нет setup – то также, по аналогии с Vuex, через ...mapActions(useStoreName, ['actionName']) и т.п.

  setup() {
    const store = useMainStore();
    // no destructuring!!! It breaks reactivity. NO → const { count, pointsArray } = store;

    // если нужно взять конкретные свойства из стора, то деструктурировать надо с использованием функции storeToRefs(store),
    // это создаст ссылку на все реактивные свойства
    const { count, pointsArray } = storeToRefs(store);
    // но при этом через деструктуризацию можно брать экшены
    const { increment } = store;

    // можно напрямую изменять стор без экшенов
    const onButtonClick = () => store.count ++;
    // либо вызвать метод $patch, с помощью которого можно произвести сразу несколько изменений
    const storePatch = () => store.$patch({
      count: store.count + 1,
      name: 'Adeline',
    })
    // если нужно произвести какие-то сложные действия, требующие промежуточных операций – их можно сделать функцией,
    // т.е. patch принимает функцию как аргумент
    const storePatchByFunc = () => store.$patch((state) => {
      state.pointsArray.push({
        name: `Point #${state.pointsArray.length + 1}`,
        age: 18 + Math.round(Math.random() * 10),
      })
      state.name = 18 + Math.round(Math.random() * 10)
    })

    // можно вернуть стейт к его начальному состоянию (либо можно напрямую вызывать store.$reset в шаблоне)
    const resetState = () => store.$reset()

    // можно заменить весь стейт вообще другим объектом. При этом resetState всё равно будет возвращать к самому начальному состояниею
    const replaceState = () => store.$state = {
      count: 123456,
      name: 'OMG!',
      pointsArray: [],
    } // то же самое можно сделать через запись pinia.state.value = {...} - можно использовать при SSR для гидрации (хз как )))

    // подписка на изменения стейта,
    // eslint-disable-next-line no-unused-vars
    store.$subscribe((mutation, state) => {
      // имеет доступ к mutation.type – 'direct' | 'patch object' | 'patch function'
      console.log('mutation.type – ', mutation.type);

      // имеет доступ к mutation.storeId – названию стора
      console.log('mutation.storeId – ', mutation.storeId);

      // имеет доступ к mutation.payload – объекту, переданному в store.$patch(), это только в том случае, если mutation type === 'patch object'
      console.log('mutation.payload – ', mutation.payload);

      // что такое mutation.events – массив с действиями, произведеными над стейтом, по штучке на каждую мутацию
      console.log('mutation.events – ', mutation.events);

      // можно записывать весь стейт в localStorage, когда стейт меняется. Прям реально пишет, но именно state, значения из геттеров – нет )))
      localStorage.setItem('main', JSON.stringify(state));
    });

    // по умолчанию подписки привязаны к компоненту и будут убраны, если компонент убрать.
    // Чтобы их оставить – нужно передать дополнительную опцию detached: true
    // store.$subscribe(callback, {detached: true})

    onMounted(() => {
      // экшены могут вызываться напрямую как методы стора, если используется setup()
      store.getPointsData();
    })

    // также, как и с подпиской на изменения стейта, можно подписаться на вызовы экшенов: store.$onAction(({...}) => {}, true/false)
    // переданный коллбэк будет вызван ПЕРЕД вызовом самого экшена и получает в качестве аргументов объект
    // { name – название экшена, store – название стора, args – массив с параметрами, которые переданы в экшен, after – хук для выполнения после успешного завершения экшена, onError – хук для выполнения после неуспешного}
    // true/false – для того чтобы слежение осталось/не осталось после уничтожения компонента, в котором это слежение было добавлено.

    // TODO: разобрать при необходимости, пока выглядит не сильно нужным, возможно для дебага полезно.

    return { store, count, pointsArray, increment, onButtonClick, resetState, storePatch, storePatchByFunc, replaceState };
  },
}
</script>

<style scoped>
  button {
    margin-right: 20px;
  }

</style>
