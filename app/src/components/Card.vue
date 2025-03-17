<template>
  <div>
    <router-link :to="dataPath" class="card">
      <h2>{{ death.leading_cause }}</h2>
      <h2>{{ death.year }}</h2>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cod: Object,
  year: Number,
  id: Number,
})

const dataPath = computed(() => {
  return `/resource/jb7j-dtam.json?year=${props.year}`
})
</script>

<style scoped></style>
