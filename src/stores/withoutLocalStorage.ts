import { defineStore } from 'pinia'

export const useNoLocalStorageStore = defineStore('noLocalStorage', {
  state: () => ({
    name: 'noLocal'
  }),
  getters: {},
  actions: {}
})
