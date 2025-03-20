<template>
  <div class="container">
    <Card v-for="death in deaths" :key="death.id" :cod="death.leading_cause" :year="death.year">
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Card from '../components/Card.vue'
const deaths = ref('')
async function getData() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json?$limit=150')
    if (res.status != 200) {
      throw new Error(response)
    }
    let data = await res.json()
    deaths.value = data
    console.log(data)
  } catch (error) {
    console.log(error)
    alert(error)
  }
}

onMounted(() => {
  getData()
})
</script>

<style scoped></style>
