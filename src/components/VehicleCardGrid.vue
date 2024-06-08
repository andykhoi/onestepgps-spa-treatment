<script setup>
import VehicleCard from './VehicleCard.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const vehicles = computed(() => store.getters.getVehicles)
</script>

<template>
  <div class="vehicle-card-grid">
    <VehicleCard v-for="vehicle in vehicles" :vehicle="vehicle" :key="vehicle.id" />
  </div>
</template>

<style scoped>
.vehicle-card-grid {
  display: grid;
  grid-gap: 20px;
  padding: 0px 20px;
  grid-template-columns: 100%;
}

@media screen and (min-width: 992px) {
  .vehicle-card-grid {
    padding: 0;
    padding-top: 0px;
  }
}
</style>
