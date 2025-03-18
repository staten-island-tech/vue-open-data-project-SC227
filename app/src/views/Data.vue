<template>
  <div>
    <h2>{{ death.leading_cause }}</h2>
    <h2>{{ death.year }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const death = ref('')
async function getData() {
  let res = await fetch(`https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=150`)
  let data = await res.json()
  death.value = data
  console.log(data)
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
