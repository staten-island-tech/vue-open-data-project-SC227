<template>
  <div class="container">
    <Card v-for="(cause, index) in cod" :key="cause.name" :id="index + 1">
      <h2>{{ cause.leading_cause }}</h2>
      <h3>{{ cause.deaths }}</h3>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const cod = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  cod.value = data.results
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
