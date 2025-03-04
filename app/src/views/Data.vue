<template>
  <div>
    <h2>{{ cod.name }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const cod = ref('')
async function getData() {
  let res = await fetch(
    `https://data.cityofnewyork.us/resource/jb7j-dtam.json?year=${route.params.id}`,
  )
  let data = await res.json()
  cod.value = data
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
