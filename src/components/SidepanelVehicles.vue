<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import ActiveVehicle from './ActiveVehicle.vue'

const store = useStore()

const activeVehicles = computed(() => store.getters.getActiveVehicles)
</script>

<template>
  <div class="active-vehicle-list">
    <div :key="vehicle.vin" v-for="vehicle in activeVehicles">
      <ActiveVehicle
        :title="vehicle.title"
        :driverId="vehicle.driverId"
        :location="vehicle.status.location"
        :speed="vehicle.status.speed"
      />
    </div>
  </div>
</template>

<style scoped>
.active-vehicle-list {
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  gap: 24px;
}
</style>
