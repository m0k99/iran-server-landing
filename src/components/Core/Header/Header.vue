<template>
  <header
    ref="element"
    class="header-animated"
    :class="{ 'header-animated-visible': isIntersecting }"
  >
    <div class="container">
      <h1 class="title" v-if="$slots.title">
        <slot name="title"></slot>
      </h1>
      <p class="subtitle" v-if="$slots.subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>
  </header>
</template>

<script setup>
import { useIntersectionObserver } from '@/composables/useIntersectionObserver.ts'

const { isIntersecting, element } = useIntersectionObserver({
  root: null,
  threshold: 0.1,
})
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 3.375rem;
  letter-spacing: -0.03em;
  text-align: center;
  color: #364163;
  user-select: none;
  margin-bottom: 0;
}

.subtitle {
  margin-top: 4px;
  font-size: 1rem;
  font-weight: 300;
  line-height: 2rem;
  letter-spacing: -0.01em;
  text-align: center;
  color: #364163;
  user-select: none;
  margin-bottom: 0;
}
</style>
