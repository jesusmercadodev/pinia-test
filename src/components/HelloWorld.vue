<template>
  <h1>Clientes</h1>
  <input type="text" v-model="clientStore.search">
  {{ clientStore.search }}
  <ul>
    <li v-for="(item) in clientStore.clientList" :key="item.cca2">
      {{ item.name.official}}
      </li>
  </ul>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {useClientStore} from '../stores/clients/clientStore'

const clientStore = useClientStore();

onMounted(()=>{
 clientStore.fetchClient()
})
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>

../stores/clients/clientStore