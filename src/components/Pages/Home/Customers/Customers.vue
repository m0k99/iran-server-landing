<script setup lang="ts"></script>

<template>
  <div class="main-container">
    <SharedContainer>
      <CoreHeader>
        <template #title> به دنبال میزبانی حرفه ای و مطمئن هستید؟ </template>
        <template #subtitle>
          با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و کارتان
          بپردازید
        </template>
      </CoreHeader>
      <PagesHomeCustomersRecords class="records" />
      <PagesHomeCustomersLogo class="logo" />
    </SharedContainer>
  </div>
</template>

<style scoped lang="scss">
.main-container {
  text-align: center;
  padding: 88px 0;
  background: #f0f1f4;

  .records {
    margin-top: 48px;
  }

  .logo {
    margin-top: 58px;
  }
}
</style>
