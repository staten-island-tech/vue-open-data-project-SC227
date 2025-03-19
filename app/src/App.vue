<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/bar">Death Count</RouterLink>
      <RouterLink to="/pie">Cause of Deaths</RouterLink>
    </nav>
  </div>
  <RouterView />
</template>

<style scoped></style>
