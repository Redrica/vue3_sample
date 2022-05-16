//const pointsArray = [{name: 'Point #1', age: 22}, {name: 'Point #2', age: 25}, {name: 'Point #3', age: 19}, {name: 'Point #4', age: 31}, {name: 'Point #5', age: 27}];
// import pointsArray from '../mockData/points.json'

import { defineStore } from 'pinia';
// we can import a .json file here and then use in state

import { useSecondaryStore } from './secondaryStore';

// takes two arguments, first is id - it can be any string that is easy to identify. Must be unique! For example - filename.
// second is an options object where we can define our state, actions, getters. But no more mutations, they are not exist in Pinia anymore.
export const useMainStore = defineStore('mainStore', { // it is a convention to start store name with prefix 'USE'

  // Можно установить слежение за всеми изменениями стора через watch, но для этого нужно делать стор через setup (??)
  // непонятно пока, зачем это может понадобиться
  // defineStore('id', () => {
  //   const state = ref();

  //   watch(state, doStuff, { deep: true });

  //   function doStuff() {
  //     // ...
  //   }
  //
  //   // expose anything you need
  //   return { state }
  // })

  // определяется как функция, возвращающая объект стейта, это позволяет работать и на сервере и на клиенте (как связано? Оо)
  state: () => {
    return {
      name: 'Pipipinia',
      count: 0,
      // pointsArray: pointsArray,
      pointsArray: [],
    }
  },
  actions: {
    increment() {
      this.count ++;
    },
    randomizeCounter() {
      this.count = Math.round(Math.random() * 100);
    },
    async getPointsData() {
      // имитируем задержку получения данных
      setTimeout(async () => {
        this.pointsArray = (await import('../mockData/points.json')).default;
      }, 3000);

      // можно без стрелочной функции, но тогда надо биндить контекст
      // setTimeout(async function () {
      //   this.pointsArray = (await import('../mockData/points.json')).default;
      // }.bind(this), 3000);
    },

    // по аналогии с геттерами экшены могут быть получены напрямую из другого стора
    actionFromOtherStore() {
      const secSt = useSecondaryStore();
      return secSt.secondaryAction();
    },
  },
  // геттеры – аналоги computed для компонентов, можно записывать через стрелочную функцию, котоая будет принимать первым аргументом state,
  // либо через обычную функцию и тогда доступ через this
  getters: {
    pointsCount: (state) => state.pointsArray.length,
    // если используется TypeScript, то при обращении к this return type like number ot smth else MUST be defined explicitly
    // – magicNumber(): number {…}. Для стрелочных функций или без использования this type defining is unnecessary
    magicNumber() {
      return this.count + this.pointsCount;
    },
    // таким образом можно передавать в геттер аргумент, для этого геттер должен возвращать функцию, этот аргумент принимающую
    getPointByAge: (state) => {
      return (age) => state.pointsArray.find((point) => point.age === age)?.name || 'nop';
      // важно: при этом геттеры уже не кешируются, а являются просто вызываемыми функциями
      // можно попробовать вручную кешировать какой-то промежуточный результат (см. документацию при необходимости)
    },
    // таким образом можно подключать другой стор и обращаться к нему
    getValueFromOtherStore() {
      const otherStore = useSecondaryStore();
      return `We took it from another store – ${otherStore.secStoreValue}`;
    }
  },
});


