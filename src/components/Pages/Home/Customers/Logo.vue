<script setup lang="ts">
import { ref } from 'vue'
import ArrowDownDouble from '@/icon/arrows-down-double.svg'

const mainLogos = ref(
  Array.from({ length: 18 }, (_, i) => `/logo/logo-${i + 1}.png`),
)

const additionalLogos = ref<string[]>([])

const showMore = ref(false)

const toggleShowMore = () => {
  if (!showMore.value && additionalLogos.value.length === 0) {
    const newLogos = Array.from(
      { length: 36 },
      () => `/logo/logo-${Math.floor(Math.random() * 18) + 1}.png`,
    )
    additionalLogos.value.push(...newLogos)
  }
  showMore.value = !showMore.value
}
</script>

<template>
  <div>
    <div class="logo-container">
      <transition-group name="logo" tag="div" class="logo-grid">
        <img
          class="logo"
          v-for="(logo, index) in mainLogos"
          :key="index"
          :src="logo"
          alt=""
        />
      </transition-group>

      <transition-group name="logo" tag="div" class="logo-grid" v-if="showMore">
        <img
          class="logo"
          v-for="(logo, index) in additionalLogos"
          :key="index"
          :src="logo"
          :style="{ animationDelay: `${index * 0.1}s` }"
          alt=""
        />
      </transition-group>
    </div>

    <button
      class="arrow-down-icon"
      :class="{ 'arrow-active': showMore }"
      @click="toggleShowMore"
    >
      <ArrowDownDouble />
    </button>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .logo-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 18px 30px;
    justify-content: space-evenly;
    align-items: center;

    // Responsive adjustments
    @media (max-width: 1200px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .logo {
    max-width: 127px;
    max-height: 72px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 0.5s forwards;
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.arrow-down-icon {
  display: block;
  margin: 58px auto 0;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease;
  animation: bounce 1s infinite alternate;
  border: none;

  // Responsive adjustments for the arrow icon
  @media (max-width: 576px) {
    width: 30px;
    height: 30px;
  }

  &.arrow-active {
    rotate: 180deg;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
