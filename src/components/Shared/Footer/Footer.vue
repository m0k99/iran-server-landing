<script setup lang="ts">
import Support from '@/icon/support.svg'
import Aparat from '@/icon/ico_pack_social_media_aparat.svg'
import Facebook from '@/icon/ico_pack_social_media_facebook.svg'
import Twitter from '@/icon/ico_pack_social_media_twitter.svg'
import Linkedin from '@/icon/ico_pack_social_media_linkedin.svg'
import Instagram from '@/icon/ico_pack_social_media_instagram.svg'
import Telegram from '@/icon/ico_pack_social_media_telegram.svg'
</script>

<template>
  <div class="footer">
    <SharedContainer>
      <div class="container-fluid">
        <div class="row row-cols-1 row-cols-lg-2 row-gap-5 p-0">
          <div
            class="col p-0 d-flex align-items-center justify-content-start gap-3"
          >
            <Support class="support-icon" />
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
    </SharedContainer>
    <div class="divider"></div>
    <SharedContainer>
      <div class="about px-lg-2">
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
        <div>
          <ul class="list-container">
            <li class="item">شرایط استفاده از خدمات ایران سرور</li>
            <li class="item">خط مشی سیستم مدیریت امنیت اطلاعات</li>
          </ul>
          <div class="icons-container">
            <a href="/">
              <Aparat class="icon" />
            </a>
            <a href="/">
              <Facebook class="icon" />
            </a>
            <a href="/">
              <Twitter class="icon" />
            </a>
            <a href="/">
              <Linkedin class="icon" />
            </a>
            <a href="/">
              <Instagram class="icon" />
            </a>
            <a href="/">
              <Telegram class="icon" />
            </a>
          </div>
        </div>
      </div>
    </SharedContainer>
    <div class="divider"></div>
    <SharedContainer>
      <div
        class="d-flex flex-wrap gap-3 justify-content-between align-items-center"
      >
        <div class="green-web">طراحی سایت توسط هلدینگ دانش بنیان گرین وب</div>
        <div class="green-web d-flex align-items-center gap-3">
          <a href="/"> درباره ما </a>
          <span>|</span>
          <a href="/"> قوانین استفاده از ایران سرور </a>
          <span>|</span>
          <span> Copyright 2002-2020 </span>
          <span class="copy-right">&#169;</span>
        </div>
      </div>
    </SharedContainer>
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

  .support-icon {
    min-width: 65.21px;
    min-height: 55.43px;
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
    align-items: center;
    flex-wrap: wrap;
    row-gap: 20px;

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

    .list-container {
      .item {
        margin-bottom: 8px;
        font-size: 1rem;
        font-weight: 400;
        line-height: 2rem;
        letter-spacing: -0.024em;
        color: #ffffff;

        &::marker {
          color: #fb8d04;
        }
      }
    }

    .icons-container {
      margin-top: 28px;
      display: flex;
      gap: 10px;
    }
  }

  .green-web {
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.75rem;
    letter-spacing: -0.023em;
    color: #c6cdda;

    a {
      text-decoration: none;
      color: #c6cdda;

      &:hover {
        color: #ffffff;
      }
    }

    .copy-right {
      font-family: 'Titillium Web', sans-serif;
      font-size: 1.375rem;
      font-weight: 400;
      line-height: 2.125rem;
    }
  }

  .divider {
    border: 1px solid rgba(163, 173, 192, 0.05);
    margin: 56px 0;
  }
}

@media (max-width: 960px) {
  .footer {
    padding: 24px 0;
  }
}
</style>
