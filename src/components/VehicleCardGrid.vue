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
  </div>
</template>

<style scoped>
.vehicle-card-grid {
  display: grid;
  grid-gap: 24px;
  padding: 24px 20px;
  grid-template-columns: 100%;
}

/* @media screen and (min-width: 768px) {
  .vehicle-card-grid {
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  }
} */
</style>
