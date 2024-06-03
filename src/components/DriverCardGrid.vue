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
  grid-gap: 20px;
  padding: 0px 20px;
}
</style>
