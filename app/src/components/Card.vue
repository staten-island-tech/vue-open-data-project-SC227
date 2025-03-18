<template>
  <div class="card">
    <router-link :to="dataPath" class="card">
      <h2>{{ cod }}</h2>
      <h2>{{ year }}</h2>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cod: String,
  year: String,
})

console.log(props)

const dataPath = computed(() => {
  return `/resource/jb7j-dtam.json?year=${props.year}`
})
</script>

<style scoped>
.card {
  background-color: pink;
  border-radius: 8px;
  border-color: salmon;
}
</style>
