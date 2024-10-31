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
  const duration = 2000;
  const incrementTime = 50;
  const totalSteps = Math.floor(duration / incrementTime);

  items.forEach((item, index) => {
    const targetCount = item.count;
    const increment = targetCount / totalSteps;
    let currentCount = 0;

    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += increment;
        if (currentCount > targetCount) {
          currentCount = targetCount;
        }
        animatedCounts.value[index] = Math.round(currentCount);
      } else {
        clearInterval(interval);
      }
    }, incrementTime);
  });
};

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible.value) {
        isVisible.value = true;
        startCounting();
        observer.disconnect();
      }
    });
  }, {
    threshold: 1.0,
  });

  const section = document.querySelector('.card-container');
  if (section) {
    observer.observe(section);
  }
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <div class="card-container d-flex align-items-center justify-content-start">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item-card d-flex flex-column"
    >
      <span class="number">{{ animatedCounts[index] }}+</span>
      <span class="text">{{ item.text }}</span>
    </div>
  </div>
</template>




<style scoped lang="scss">
.card-container {
  gap: 30px;

  .item-card {
    background: #ffffff;
    padding: 48px 24px;
    border-radius: 5px;
    flex: 1;

    .number {
      font-size: 3.75rem;
      font-weight: 600;
      line-height: 5.625rem;
      letter-spacing: -0.03em;
      text-align: center;
      color: #2533cc;
    }

    .text {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6875rem;
      letter-spacing: -0.03em;
      text-align: center;
      color: #364163;
    }
  }
}
</style>
