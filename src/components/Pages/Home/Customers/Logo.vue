<script setup lang="ts">
const logos = Array.from({ length: 18 }, (_, i) => `/logo/logo-${i + 1}.png`)
</script>

<template>
  <div class="logo-container">
    <img
      class="logo"
      v-for="(logo, index) in logos"
      :key="index"
      :src="logo"
      alt=""
    />
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  justify-content: space-evenly;

  .logo {
    margin: 0 auto;
    display: block;
    max-width: 120px;
    max-height: 80px;
    object-fit: contain;
  }
}
</style>
