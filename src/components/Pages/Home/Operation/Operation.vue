<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <div class="image-container">
      <img class="image" src="/Images/operation.png" alt="" />
    </div>
    <div
      class="text-container d-flex flex-column justify-content-center align-items-center"
    >
      <span class="text">مرکز عملیات</span>
      <span class="text">کلود هاستینگــ</span>
      <span class="text english">C.O.C</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-container {
  position: relative;

  .image-container {
    width: 100%;
    height: 484px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #3d4b70cc;
      left: 0;
      top: 0;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .text-container {
    position: absolute;
    width: 308px;
    height: 308px;
    background: #2533cc;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 6px 0;

    .text {
      color: #ffffff;
      font-size: 2.25rem;
      line-height: 3.125rem;
      text-align: left;

      &.english {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 700;
      }
    }
  }
}
</style>
