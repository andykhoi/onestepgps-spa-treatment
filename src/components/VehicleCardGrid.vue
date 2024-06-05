<script setup>
import VehicleCard from './VehicleCard.vue'
</script>

<template>
  <!-- <div></div> -->
  <div class="vehicle-card-grid">
    <VehicleCard />
    <VehicleCard />
    <VehicleCard />
    <VehicleCard />
    <VehicleCard />
    <VehicleCard />
    <VehicleCard />
  </div>
</template>

<style scoped>
.vehicle-card-grid {
  display: grid;
  grid-gap: 20px;
  padding: 24px 20px;
  grid-template-columns: 100%;
}

@media screen and (min-width: 992px) {
  .vehicle-card-grid {
    padding: 0;
    padding-top: 20px;
  }
}
</style>
