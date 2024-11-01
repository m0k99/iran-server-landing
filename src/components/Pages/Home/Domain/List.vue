<template>
  <Swiper :slides-per-view="slidesPerView" :loop="true" class="swiper">
    <SwiperSlide v-for="(item, index) in domains" :key="index" class="slide">
      <span class="domain">
        {{ item.label }}
      </span>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const domains = [
  { label: '.com ۱۱۵,۰۰۰' },
  { label: '.org ۱۱۵,۰۰۰' },
  { label: '.shop ۱۱۵,۰۰۰' },
  { label: '.info ۱۱۵,۰۰۰' },
  { label: '.org ۱۱۵,۰۰۰' },
  { label: '.shop ۱۱۵,۰۰۰' },
  { label: '.info ۱۱۵,۰۰۰' },
]

const slidesPerView = computed(() => {
  if (window.innerWidth < 450) {
    return 2
  } else if (window.innerWidth < 700) {
    return 3
  } else if (window.innerWidth < 1024) {
    return 3.5
  } else {
    return 4.4
  }
})
</script>
<style scoped lang="scss">
.slide {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 2px;
    transform: translateY(-50%);
    height: 16px;
    background: #e9ebef;
  }
}
</style>
