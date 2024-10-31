<script setup lang="ts">
import Server from '@/icon/server.svg'
import Host from '@/icon/host.svg'
</script>

<template>
  <div class="host-container">
    <SharedContainer>
      <CoreHeader>
        <template #title> به دنبال میزبانی حرفه ای و مطمئن هستید؟ </template>
        <template #subtitle>
          با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و کارتان
          بپردازید
        </template>
      </CoreHeader>
      <div class="hosts-container">
        <div class="item d-flex align-items-center flex-column">
          <Server />
          <div class="type-container d-flex flex-column gap-2">
            <h4 class="title">سرور اختصاصی</h4>
            <h5 class="subtitle">DEDICATED SERVER</h5>
          </div>
          <div
            class="details-container d-flex align-items-center justify-content-center gap-4 flex-column"
          >
            <span class="title">منابع اختصاصی، حداکثر قدرت</span>
            <span class="subtitle">
              بدون محدودیت در دسترسی
              <br />
              نصب نرم افزارهای خاص
            </span>
          </div>
          <button class="see-plan-btn">مشاهده پلن ها</button>
        </div>
        <div class="item d-flex align-items-center flex-column">
          <Host />
          <div class="type-container d-flex flex-column gap-2">
            <h4 class="title">هاست اشتراکی</h4>
            <h5 class="subtitle">SHARED HOSTING</h5>
          </div>
          <div
            class="details-container d-flex align-items-center justify-content-center gap-4 flex-column"
          >
            <span class="title">چابکی، سادگی و پایداری</span>
            <span class="subtitle">
              نصب رایگان سیستم مدیریت سایت برای اطمینان بیشتر RAID سیستم
              کنترل‌پنل
            </span>
          </div>
          <button class="see-plan-btn">مشاهده پلن ها</button>
        </div>
        <div class="item d-flex align-items-center flex-column">
          <Server />
          <div class="type-container d-flex flex-column gap-2">
            <h4 class="title">سرور مجازی</h4>
            <h5 class="subtitle">VPS</h5>
          </div>
          <div
            class="details-container d-flex align-items-center justify-content-center gap-4 flex-column"
          >
            <span class="title">سریع، قابل سفارشی سازی</span>
            <span class="subtitle">
              منابع اختصاصی <br />امکان افزایش منابع
            </span>
          </div>
          <button class="see-plan-btn">مشاهده پلن ها</button>
        </div>
      </div>
    </SharedContainer>
  </div>
</template>

<style scoped lang="scss">
.host-container {
  background: #f0f1f4;
  padding: 88px 0;

  .hosts-container {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 30px;
    margin-top: 48px;
    height: 640px;

    .item {
      background: #ffffff;
      border-radius: 5px;
      flex: 1;
      padding: 64px 64px;
      row-gap: 40px;
      transition: all 0.3s ease-in-out;

      .type-container {
        .title {
          font-size: 2rem;
          font-weight: 700;
          line-height: 3rem;
          letter-spacing: -0.03em;
          text-align: center;
          margin-bottom: 0;
        }

        .subtitle {
          font-family: 'Titillium Web', sans-serif;
          margin: 0;
          font-size: 1rem;
          font-weight: 400;
          line-height: 2rem;
          letter-spacing: -0.01em;
          text-align: center;
        }
      }

      .details-container {
        .title {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 2.25rem;
          letter-spacing: -0.03em;
          text-align: center;
          color: #364163;
        }

        .subtitle {
          font-size: 1rem;
          font-weight: 400;
          line-height: 2rem;
          letter-spacing: -0.01em;
          text-align: center;
          color: #364163;
        }
      }

      .see-plan-btn {
        height: 56px;
        padding: 10px 40px;
        border-radius: 5px;
        background: #2533cc14;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 2.25rem;
        letter-spacing: -0.01em;
        color: #2533cc;
        border: none;
      }

      &:hover {
        padding: 88px 64px;

        .type-container {
          .title {
            font-size: 2.625rem;
            font-weight: 700;
            line-height: 3.9375rem;
            color: #fb9d04;
          }

          .subtitle {
            font-size: 1rem;
            line-height: 2rem;
            color: #fb9d05;
          }
        }

        .see-plan-btn {
          background: #2533cc;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
