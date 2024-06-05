<script setup>
import VehicleDrawer from './components/VehicleDrawer.vue'
import MobileControlPanel from './components/MobileControlPanel.vue'
import DriverCardGrid from './components/DriverCardGrid.vue'
import VehicleCardGrid from './components/VehicleCardGrid.vue'
import SidepanelTitle from './components/SidepanelTitle.vue'
import SidepanelVehicles from './components/SidepanelVehicles.vue'
import DriverSearch from './components/DriverSearch.vue'
</script>

<template>
  <div class="main">
    <div class="sidepanel">
      <SidepanelTitle />
      <div class="sidepanel-vehicles-wrapper">
        <SidepanelVehicles />
      </div>
    </div>
    <div class="content">
      <MobileControlPanel />
      <!-- <div>
        <VehicleCardGrid />
      </div> -->
      <div class="driver-content">
        <DriverSearch />
        <DriverCardGrid />
      </div>
    </div>
    <VehicleDrawer />
  </div>
</template>

<style scoped>
.sidepanel {
  display: none;
  /* overflow-y: scroll; */
}

.driver-content {
  padding-top: 24px;
}

@media screen and (min-width: 768px) {
  .driver-content {
    padding-top: 8px;
  }
}

@media screen and (min-width: 992px) {
  .main {
    display: flex;
    height: 100%;
  }
  .sidepanel {
    display: block;
    min-width: 420px;
    max-width: 420px;
    border-right: 1px solid #d4d4d4;
    /* padding: 0px 40px; */
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sidepanel-vehicles-wrapper {
    flex-grow: 2;
    overflow-y: scroll;
    padding: 0px 36px 40px 40px;
    /* padding-bottom: 40px; */
    border-right: 4px solid transparent;
  }
  .sidepanel-vehicles-wrapper::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }

  .sidepanel-vehicles-wrapper::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.192);
  }
  .content {
    width: 100%;
    padding: 0px 40px;
    height: 100%;
    overflow-y: scroll;
  }
}

/* .app {
  background-color: #f5f5f5;
} */
</style>
