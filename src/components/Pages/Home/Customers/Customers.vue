<script setup lang="ts">
import { ref, onMounted } from 'vue'

const testimonials = ref([])
const records = ref([])
const error = ref(null)

const fetchTestimonials = async () => {
  try {
    const res = await fetch('http://localhost:3000/testimonials')
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    testimonials.value = await res.json()
  } catch (err) {
    error.value = `Error fetching testimonials: ${err.message}`
  }
}

const fetchRecords = async () => {
  try {
    const res = await fetch('http://localhost:3000/records')
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    records.value = await res.json()
  } catch (err) {
    error.value = `Error fetching records: ${err.message}`
  }
}

onMounted(async () => {
  await fetchTestimonials()
  await fetchRecords()
})
</script>

<template>
  <div class="main-container">
    <SharedContainer>
      <CoreHeader>
        <template #title> به دنبال میزبانی حرفه ای و مطمئن هستید؟</template>
        <template #subtitle>
          با سرویس های میزبانی ایران سرور با خیال راحت به توسعه کسب و کارتان
          بپردازید
        </template>
      </CoreHeader>
      <PagesHomeCustomersRecords
        class="records"
        v-if="records?.length"
        :value="records"
      />
      <PagesHomeCustomersComments class="logo" :value="testimonials" />
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
