<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const items = [
  {
    text: 'دیتاسنتر در سراسر جهان',
    count: 70,
  },
  {
    text: 'مشتری از سراسر ایران',
    count: 167000,
  },
  {
    text: 'خدمات ارائه شده',
    count: 600000,
  },
  {
    text: 'سال‌ حضور در مارکت',
    count: 18,
  },
];

const animatedCounts = ref(items.map(() => 0));
const isVisible = ref(false);
let observer: IntersectionObserver;

const startCounting = () => {
  const duration = 2000; // Total duration of counting
  const incrementTime = 50; // Time interval for increments
  const totalSteps = Math.floor(duration / incrementTime); // Total number of increments

  items.forEach((item, index) => {
    const targetCount = item.count;
    const increment = targetCount / totalSteps; // Increment value for each step
    let currentCount = 0;

    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += increment;
        if (currentCount > targetCount) {
          currentCount = targetCount;
        }
        animatedCounts.value[index] = Math.round(currentCount); // Update the displayed count
      } else {
        clearInterval(interval); // Stop the interval when target is reached
      }
    }, incrementTime);
  });
};

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isVisible.value) {
      isVisible.value = true;
      startCounting(); // Start counting when the section is visible
      observer.disconnect(); // Disconnect the observer after starting counting
    }
  });
};

onMounted(() => {
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1, // Start counting when 10% of the section is visible
  });

  const section = document.querySelector('.card-container');
  if (section) {
    observer.observe(section); // Observe the section for intersection events
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect(); // Clean up the observer
  }
});
</script>

<template>
  <div class="card-container">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item-card d-flex flex-1 flex-column"
    >
      <span class="number">{{ animatedCounts[index] }}+</span>
      <span class="text">{{ item.text }}</span>
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
