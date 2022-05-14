import { defineStore } from 'pinia';

export const useSecondaryStore = defineStore('secondaryStore', {
  state: () => {
    return {
      secStoreValue: 'I am from secondary store',
    }
  },
  actions: {
    secondaryAction() {
      this.secStoreValue = 'I am after action from secondary store'
    }
  }
})
