<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <SharedNavigation />

    <RouterView />

    <SharedFooter />
  </div>
</template>
