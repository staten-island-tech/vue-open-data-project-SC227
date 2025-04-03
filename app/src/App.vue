<template>
  <div class="box">
    <nav>
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/bar" class="link">Death Count</RouterLink>
      <RouterLink to="/pie" class="link">Cause of Deaths</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.link {
  padding: 40px;
}
</style>
