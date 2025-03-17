<template>
  <div class="container">
    <Card v-for="(death, index) in cod" :key="death.name" :id="index + 1">
      <h2>{{ death.leading_cause }}</h2>
      <h3>{{ death.year }}</h3>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const death = ref('')
async function getData() {
  let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
  let data = await res.json()
  death.value = data.results
}
onMounted(() => {
  getData()
})
</script>

<style scoped></style>
