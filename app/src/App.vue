<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink class="home-link" to="/">Home</RouterLink>
      <RouterLink class="bar-link" to="/bar">Death Count</RouterLink>
      <RouterLink class="pie-link" to="/pie">Cause of Deaths</RouterLink>
    </nav>
  </div>
</template>

<style scoped></style>
