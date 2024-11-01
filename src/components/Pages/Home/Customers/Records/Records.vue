<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import type { IRecordProps } from '@/components/Pages/Home/Customers/Records/Records.d'

const props = defineProps<IRecordProps>()

const items = computed(() => props.value)

const animatedCounts = ref(items.value.map(() => 0))
const isVisible = ref(false)
let observer: IntersectionObserver

const startCounting = () => {
  const duration = 2000
  const incrementTime = 50
  const totalSteps = Math.floor(duration / incrementTime)

  items.value.forEach((item, index) => {
    const targetCount = item.count
    const increment = targetCount / totalSteps
    let currentCount = 0

    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += increment
        if (currentCount > targetCount) {
          currentCount = targetCount
        }
        animatedCounts.value[index] = Math.round(currentCount)
      } else {
        clearInterval(interval)
      }
    }, incrementTime)
  })
}

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isVisible.value) {
      isVisible.value = true
      startCounting()
      observer.disconnect()
    }
  })
}

onMounted(() => {
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 1,
  })

  const section = document.querySelector('.card-container')
  if (section) {
    observer.observe(section)
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div class="card-container">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item-card d-flex flex-1 flex-column"
    >
      <span class="number">{{ animatedCounts[index] }}+</span>
      <span class="text">{{ item.description }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: grid;
  gap: 30px;
  width: 100%;

  .item-card {
    background: #ffffff;
    padding: 48px 24px;
    border-radius: 5px;
    text-align: center;
    color: #364163;
    width: 100%;

    .number {
      font-size: 3.75rem;
      font-weight: 600;
      line-height: 5.625rem;
      letter-spacing: -0.03em;
      color: #2533cc;
    }

    .text {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6875rem;
      letter-spacing: -0.03em;
    }
  }

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
