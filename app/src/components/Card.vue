<template>
  <div class="container">
    <div class="card card-side bg-base-100 shadow-xl">
      <h2>{{ cause }}</h2>
      <h2>{{ gender }}</h2>
      <h2>{{ race }}</h2>
      <h2>{{ death_rate }}</h2>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cause: Object,
  gender: Object,
  race: Object,
  death_rate: Number,
})

console.log(props)
</script>

<style scoped>
.card {
  background-color: rgb(208, 34, 63);
  border-radius: 8px;
  border-color: salmon;
  text-align: center;
}
</style>
