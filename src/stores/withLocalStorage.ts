import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useLocalStorageStore = defineStore('localStorage', {
  state: () =>
    useLocalStorage('state', {
      name: 'local'
    }),
  getters: {},
  actions: {}
})
