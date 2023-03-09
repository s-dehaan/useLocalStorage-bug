<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useLocalStorageStore } from '@/stores/withLocalStorage'
import { useNoLocalStorageStore } from '@/stores/withoutLocalStorage'

import InputText from './InputText.vue'

const localStore = useLocalStorageStore()
const noLocalStore = useNoLocalStorageStore()
</script>

<template>
  <p>With local storage</p>
  <InputText v-model="localStore.name" />
  <p>Store state:</p>
  <pre>{{ localStore.name }}</pre>
  <hr />
  <p>Without local storage</p>
  <InputText v-model="noLocalStore.name" />
  <p>Store state:</p>
  <pre>{{ noLocalStore.name }}</pre>
</template>
