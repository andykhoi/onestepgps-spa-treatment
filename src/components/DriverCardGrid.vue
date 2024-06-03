<script setup>
import DriverCard from './DriverCard.vue'
</script>

<template>
  <!-- <div></div> -->
  <div class="driver-card-grid">
    <DriverCard />
    <DriverCard />
    <DriverCard />
    <DriverCard />
    <DriverCard />
  </div>
</template>

<style scoped>
.driver-card-grid {
  display: grid;
  grid-gap: 24px;
  padding: 24px 20px;
  grid-template-columns: 100%;
}

@media screen and (min-width: 768px) {
  .driver-card-grid {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  }
}
</style>
