<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import IranServerLogo from '@/icon/IranServerLogo.svg'
import AngleDown from '@/icon/angle-down.svg'
import Call from '@/icon/Call.svg'
import HamburgerIcon from '@/icon/hamburger.svg'

const menuList = [
  'سرور اختصاصی',
  'سرور مجازی',
  'هاست',
  'ثبت دامنه',
  'خدمات ابری',
  'دیگر خدمات',
  'ارتباط با ما',
  'پایگاه دانش',
]

const isHeaderVisible = ref(true)
const isMobileMenuOpen = ref(false)
let lastScrollY = window.scrollY

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isHeaderVisible.value = false
  } else if (currentScrollY < lastScrollY) {
    isHeaderVisible.value = true
  }
  lastScrollY = currentScrollY
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <div :class="['navigation', { 'navigation--hidden': !isHeaderVisible }]">
    <SharedContainer>
      <div class="d-flex align-items-center justify-content-between py-4">
        <div class="d-flex align-items-center justify-content-between gap-4">
          <HamburgerIcon
            class="hamburger-icon"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          />
          <IranServerLogo />
        </div>

        <transition name="fade">
          <div v-if="isMobileMenuOpen" class="mobile-menu">
            <div
              v-for="(item, index) in menuList"
              :key="index"
              class="menu__item"
            >
              <span class="item-text">{{ item }}</span>
            </div>
          </div>
        </transition>

        <div
          class="menu d-none d-md-flex align-items-center justify-content-start gap-3"
        >
          <div
            v-for="(item, index) in menuList"
            :key="index"
            class="d-flex align-items-center menu__item"
          >
            <span class="item-text">{{ item }}</span>
            <AngleDown />
          </div>
        </div>

        <div
          class="d-flex align-items-center justify-content-end gap-2 left-side"
        >
          <div class="item">EN</div>
          <div class="item">
            <Call />
          </div>
          <button class="btn login-button">ورود | ثبت نام</button>
        </div>
      </div>
    </SharedContainer>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  box-shadow: 0 10px 25px 0 #c6cdda1f;
  position: sticky !important;
  top: 0;
  right: 0;
  background: #ffffff;
  z-index: 10;
  transition: transform 0.3s ease;

  &.navigation--hidden {
    transform: translateY(-100%);
  }

  .hamburger-icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: none;
  }

  .mobile-menu {
    position: absolute;
    top: 88px;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 11;

    .menu__item {
      padding: 0.5rem 0;
      text-align: center;
    }
  }

  .menu {
    &__item {
      cursor: pointer;

      .item-text {
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 1.6875rem;
        letter-spacing: -0.06em;
      }
    }
  }

  .left-side {
    .item {
      background: #2533cc14;
      width: 40px;
      height: 40px;
      padding: 10px;
      border-radius: 5px;
      color: #2533cc;
      text-align: center;
      line-height: 20px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
    }

    .login-button {
      border: none;
      background: #2533cc;
      color: #ffffff;
      font-size: 0.875rem;
      line-height: 1.75rem;
      letter-spacing: -0.01em;
      padding: 6px 24px;
      border-radius: 5px;
    }
  }
}

@media (max-width: 1400px) {
  .menu {
    display: none !important;
  }

  .hamburger-icon {
    display: block !important;
  }

  .mobile-menu {
    width: 100%;
    text-align: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
