<script setup lang="ts">
import IranServerLogo from '@/icon/IranServerLogo.svg'
import AngleDown from '@/icon/angle-down.svg'
import Call from '@/icon/Call.svg'

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
</script>

<template>
  <div class="navigation">
    <SharedContainer>
      <div class="d-flex align-items-center justify-content-between py-4">
        <IranServerLogo />
        <div class="menu d-flex align-items-center justify-content-start gap-3">
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
            <Call></Call>
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
      border-radius: 05px;
    }
  }
}
</style>
