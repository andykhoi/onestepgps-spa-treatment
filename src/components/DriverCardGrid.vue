<script setup>
import DriverCard from './DriverCard.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const drivers = computed(() => store.getters.getDrivers)
</script>

<template>
  <div class="driver-card-grid">
    <DriverCard v-for="driver in drivers" :key="driver.id" :driver="driver" />
  </div>
</template>

<style scoped>
.driver-card-grid {
  display: grid;
  grid-gap: 20px;
  padding: 0px 20px;
  /* padding: 24px 20px; */
  grid-template-columns: 100%;
}

@media screen and (min-width: 768px) {
  .driver-card-grid {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  }
}

@media screen and (min-width: 768px) {
  .driver-card-grid {
    padding: 0px 36px;
  }
}

@media screen and (min-width: 992px) {
  .driver-card-grid {
    padding: 0;
    grid-gap: 16px;
    /* padding-top: 16px; */
  }
}
</style>
