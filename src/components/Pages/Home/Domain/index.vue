<script setup lang="ts">
import Search from '@/icon/Search.svg'
import Discount from '@/icon/discount.svg'
import Fire from '@/icon/fire.svg'
</script>

<template>
  <SharedContainer class="domain-container">
    <h1 class="title">با پشتیبانی حرفه ای نزدیک به دو دهه در کنار شما هستیم</h1>
    <div class="domain-container__advertise d-flex flex-column gap-4">
      <h3 class="title">کسب و کار آنلاینتان را با ثبت یک دامنه شروع کنید</h3>
      <form @submit.prevent="" class="input-container">
        <button
          class="submit d-flex align-items-center justify-content-center"
          type="submit"
        >
          <Search class="search" />
        </button>
        <input
          class="input"
          type="text"
          placeholder="نام دامنه را برای ثبت یا انتقال وارد کنید"
        />
      </form>
      <div class="d-flex flex-column gap-3">
        <div
          class="suffix-container d-flex align-items-center justify-content-start"
        >
          <div
            class="fire d-flex align-items-center justify-content-start gap-2"
          >
            <Fire />
            <span class="text"> داغ ترین پسوندها</span>
          </div>
          <PagesHomeDomainList />
        </div>
        <div
          class="discount-container d-flex gap-2 align-items-center justify-content-center"
        >
          <Discount />
          <a href="/" class="text"> مشاهده پسوند های تخفیف دار </a>
        </div>
      </div>
    </div>
    <div class="image-container">
      <img class="image" src="/Images/ill_pck_index_search.png" alt="" />
    </div>
  </SharedContainer>
</template>

<style scoped lang="scss">
.domain-container {
  padding: 59px 12px 117px;

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 3.75rem;
    letter-spacing: -0.06em;
    text-align: center;
    color: #364163;
    margin-bottom: 0;
  }

  &__advertise {
    margin: 72px auto 0;
    text-align: center;
    max-width: 642px;

    .input-container {
      position: relative;
      height: 64px;
      border-radius: 5px;
      border: 1.5px solid #f2f3f5;

      .submit {
        background: #2533cc14;
        width: 48px;
        height: 48px;
        border-radius: 5px;
        position: absolute;
        top: 8px;
        border: none;
        outline: none;
        inset-inline-start: 8px;
        transition: all ease-in-out 0.3s;

        .search {
          fill: #2533cc;
          transition: all ease-in-out 0.3s;
        }

        &:hover {
          background: #2533cc;

          .search {
            fill: #ffffff;
          }
        }
      }

      .input {
        width: 100%;
        border: none;
        outline: none;
        height: 100%;
        text-align: center;
      }
    }

    .title {
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 2.25rem;
      letter-spacing: -0.01em;
      color: #4c5c84;
    }

    .suffix-container {
      gap: 28px;
      position: relative;

      &:after {
        height: 100%;
        width: 40px;
        background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            #ffffff 50%,
            rgba(255, 255, 255, 0) 100%
        );
        content: '';
        position: absolute;
        right: 135px;
        top: 0;
        z-index: 10;
      }

      .fire {
        min-width: 127px;
      }

      .text {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.06em;
        text-align: center;
        color: #2b3149;
      }
    }

    .discount-container {
      .text {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        letter-spacing: -0.06rem;
        text-align: center;
        color: #2533cc;
        text-decoration: none;
      }
    }
  }

  .image-container {
    .image {
      max-width: 1192px;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: block;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    .image-container {
      display: none;
    }
  }
}
</style>

