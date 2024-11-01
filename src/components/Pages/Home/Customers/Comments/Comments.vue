<template>
  <div class="testimonials">
    <swiper
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      class="my-swiper"
      :slides-per-view="slidesPerView"
      :centeredSlides="true"
      :spaceBetween="24"
      :breakpoints="breakpoints"
      :initial-slide="0"
      @snapIndexChange="onSlideChange"
    >
      <swiper-slide
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{ 'active-slide': activeIndex === index }"
      >
        <div
          class="testimonial-card"
          :class="{ active: activeIndex === index }"
        >
          <p class="comment">{{ testimonial.text }}</p>
        </div>
        <div class="reviewer">
          <Comment />
          <span class="person">{{ testimonial.author }}</span>
          <span class="person">●</span>
          <span class="role">{{ testimonial.role }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Comment from '@/icon/Component.svg'
import type { ICommentsProps } from '@/components/Pages/Home/Customers/Comments/Comments.d'

const activeIndex = ref(0)

const props = defineProps<ICommentsProps>()
const testimonials = toRef(props, 'value')

const slidesPerView = ref('auto')
const breakpoints = ref({
  1024: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 1,
  },
  0: {
    slidesPerView: 1,
  },
})

const onSlideChange = swiper => {
  activeIndex.value = swiper.realIndex
}
</script>

<style lang="scss" scoped>
.testimonials {
  .my-swiper {
    .swiper-slide {
      max-width: 648px;
      width: 100%;
      gap: 24px;
      position: relative;

      &:after {
        position: absolute;
        content: '';
        width: 28px;
        height: 28px;
        background-color: #1e40af;
        z-index: 20;
        border-radius: 5px;
        rotate: 45deg;
        right: 48px;
        top: 192px;
        opacity: 0;
      }

      &.active-slide {
        &:after {
          opacity: 1;
        }
      }

      .reviewer {
        display: flex;
        gap: 8px;
        align-items: center;
        padding: 47px 40px 0 0;

        .person {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.5rem;
          letter-spacing: -0.024em;
          color: #3d4b70;
        }

        .role {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5rem;
          letter-spacing: -0.024em;
          color: #364163;
        }
      }
    }

    .testimonial-card {
      width: 100%;
      height: 208px;
      border-radius: 5px;
      text-align: right;
      padding: 40px;
      transition: all 0.2s ease-in-out;
      background: #f6f7f9;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        height: 208px;
        left: 0;
        top: 0;
        width: 100%;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          #ffffff 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transition: opacity 0.2s ease-in-out;
        opacity: 1;
      }

      &.active {
        background: #1e40af;
        color: white;

        &:before {
          opacity: 0;
        }

        .comment {
          color: #ffffff;
        }
      }

      .comment {
        font-size: 1rem;
        font-weight: 300;
        line-height: 2rem;
        letter-spacing: -0.023em;
        transition: all 0.2s ease-in-out;
        color: #3d4b70;
      }
    }
  }
}
</style>
