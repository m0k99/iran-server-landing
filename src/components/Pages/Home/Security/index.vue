<script setup lang="ts">
import Secure from '@/icon/secure.svg'
import Check from '@/icon/check.svg'
</script>

<template>
  <div class="security-container">
    <SharedContainer class="position-relative">
      <div class="image-container">
        <img class="image" src="/Images/security.png" alt="" />
      </div>
      <div class="content-container position-relative">
        <div class="d-flex align-items-center justify-content-start gap-3">
          <Secure />
          <div class="flex-column d-flex gap-2">
            <h1 class="main-title">نگران امنیت وب‌سایت‌تان باشید!</h1>
            <h3 class="main-subtitle">
              ایران سرور با ابزارهای روزآمد؛ سیاست‌های امنیتی استاندارد؛
              سخت‌افزارهای امنیتی برتر؛ حداکثر امنیت را برای شما به ارمغان
              می‌آورد.
            </h3>
          </div>
        </div>
        <div class="items-container">
          <div class="item d-flex align-items-center gap-3">
            <Check />
            <span class="text">
              سرویس های Anti DDos سخت افزاری و نرم افزاری
            </span>
          </div>
          <div class="item d-flex align-items-center gap-3">
            <Check />
            <span class="text">
             لایسنس های امنیتی اورجینال شامل SSL و آنتی شل
            </span>
          </div>
          <div class="item d-flex align-items-center gap-3">
            <Check />
            <span class="text">
              کانفیگ های امنیتی برای تشخیص و جلوگیری از حملات
            </span>
          </div>
          <div class="item d-flex align-items-center gap-3">
            <Check />
            <span class="text">
              مشــــاوره جـهت مدیریت ریسک و امنیت سرورها
            </span>
          </div>
        </div>
      </div>
    </SharedContainer>
  </div>
</template>

<style scoped lang="scss">
.security-container {
  background: #f0f1f4;

  .content-container {
    max-width: 874px;
    width: 100%;
    padding: 118px 0;

    .main-title {
      margin-bottom: 0;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 3.375rem;
      letter-spacing: -0.03em;
    }

    .main-subtitle {
      margin-bottom: 0;
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.75rem;
      letter-spacing: -0.01em;
      text-align: right;
    }

    .items-container {
      margin-top: 48px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 30px;
      width: 100%;

      .item {
        background: #ffffff;
        padding: 24px;
        border-radius: 5px;

        .text {
          color: #364163;
          font-size: 1.125rem;
          font-weight: 700;
          line-height: 1.6875rem;
          letter-spacing: -0.03em;
        }
      }
    }
  }

  .image-container {
    position: absolute;
    inset-inline-end: 8px;
    top: 50%;
    transform: translateY(-50%);

    .image {
      width: 477.14px;
      height: 410.71px;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
