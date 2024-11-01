<script setup lang="ts">
import Support from '@/icon/support.svg'
</script>

<template>
  <div class="footer">
    <shared-container>
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-lg-2 row-gap-5 p-0">
          <div
            class="col p-0 d-flex align-items-center justify-content-start gap-3"
          >
            <Support />
            <div class="d-flex flex-column">
              <span class="title">در هر قدم کنار شما هستیم</span>
              <span class="subtitle">
                به توسعه کسب و کار آنلاین خود بیاندیشید؛ دلسوزانه از آن محافظت
                خواهیم کرد.
              </span>
            </div>
          </div>
          <div
            class="col p-0 contact d-flex align-items-center justify-content-start justify-content-lg-end gap-3"
          >
            <div class="line d-lg-none"></div>
            <div class="d-flex flex-column">
              <span class="title text-lg-end">۰۵۱۳۱۷۷۶ - ۰۲۱۵۸۹۸۳۰۰۰ </span>
              <span class="subtitle text-lg-end">هفت روز هفته و ۲۴ ساعته</span>
            </div>
            <div class="line d-none d-lg-block"></div>
          </div>
        </div>
      </div>
    </shared-container>
    <div class="divider"></div>
    <shared-container>
      <div class="about px-2">
        <div class="content">
          <h1 class="title">رسالت ایران سرور</h1>
          <h3 class="subtitle">
            هدف ما، تبدیل میزبانی وب به یک تجربه لذتبخش برای شما است. به صورت ۲۴
            ساعته و در تمامی لحظات، توان و تلاشمان را در جهت حفاظت از دارایی
            آنلاینتان بکار می گیریم تا خیال شما همواره آسوده باشد. اطمینان داریم
            با هنر کار تیمی و قدرت تیم حرفه ای متخصصان ایران سرور، می توانیم به
            رویاهای شما رنگ واقعیت ببخشیم و در تمامی بلندپروازی هایتان، حامی کسب
            و کار آنلاین شما بمانیم.
          </h3>
        </div>
        <img class="enamad" src="/Images/enamad.png" alt="" />
      </div>
    </shared-container>
    <div class="divider"></div>
    <shared-container>
      <div>asd</div>
    </shared-container>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #364163;
  padding: 72px 0;

  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: -0.03em;
    color: #ffffff;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2rem;
    color: #c6cdda;
  }

  .contact {
    .line {
      width: 8px;
      height: 100%;
      background: rgba(128, 141, 166, 0.18);
    }
  }

  .about {
    display: flex;
    column-gap: 56px;

    .content {
      display: flex;
      flex-direction: column;
      row-gap: 21px;
      max-width: 753px;

      .title {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 2.325rem;
        color: #ffffff;
        margin-bottom: 0;
      }

      .subtitle {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.75rem;
        letter-spacing: -0.024em;
        color: #c6cdda;
        margin-bottom: 0;
      }
    }

    .enamad {
      width: 152px;
      height: 200px;
      object-fit: cover;
      object-position: center;
    }
  }

  .divider {
    border: 1px solid rgba(163, 173, 192, 0.05);
    margin: 56px 0;
  }
}
</style>
