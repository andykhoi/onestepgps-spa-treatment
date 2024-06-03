<script setup>
import VehicleDrawer from './components/VehicleDrawer.vue'
import MobileControlPanel from './components/MobileControlPanel.vue'
import DriverCardGrid from './components/DriverCardGrid.vue'
</script>

<template>
  <div class="app">
    <div class="sidepanel"></div>
    <div class="main">
      <MobileControlPanel />
      <DriverCardGrid />
    </div>
    <VehicleDrawer />
  </div>
</template>

<style scoped>
.sidepanel {
  display: none;
}

.app {
  background-color: #f5f5f5;
}
</style>
