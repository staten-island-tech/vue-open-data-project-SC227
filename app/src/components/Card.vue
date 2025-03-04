<template>
  <div>
    <router-link :to="dataPath" class="card">
      <h2>{{ cod.name }}</h2>
      <h3>{{ year }}</h3>
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  cod: Object,
  id: Number,
})

const dataPath = computed(() => {
  return `/resource/jb7j-dtam.json?year=${props.id}`
})
</script>

<style scoped></style>
