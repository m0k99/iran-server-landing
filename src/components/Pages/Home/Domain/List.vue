<template>
  <Swiper
    :slides-per-view="slidesPerView"
    :space-between="20"
    :loop="true"
    class="swiper"
  >
    <SwiperSlide
      v-for="(item, index) in domains"
      :key="index"
      :class="{ hot: item.isHot }"
    >
      {{ item.label }}
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
  if (window.innerWidth < 640) {
    return 2;
  } else if (window.innerWidth < 1024) {
    return 3;
  } else {
    return 4.5;
  }
})
</script>
