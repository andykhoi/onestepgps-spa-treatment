<script setup>
import { useStore } from 'vuex'

const store = useStore()

const updateActiveContent = (activeContent) => {
  store.dispatch('updateActiveContent', activeContent)
}
</script>

<template>
  <div class="mobile-switcher">
    <div class="switcher-button" @click="updateActiveContent('vehicles')">
      <div>Vehicles</div>
      <!-- <div class="switcher-underliner"></div> -->
    </div>
    <div class="switcher-button" @click="updateActiveContent('drivers')">
      <div>Drivers</div>
      <!-- <div class="switcher-underliner"></div> -->
    </div>
    <div
      class="switcher-underliner"
      :class="{
        drivers: store.state.activeContent === 'drivers',
        vehicles: store.state.activeContent === 'vehicles'
      }"
    ></div>
  </div>
</template>

<style scoped>
.mobile-switcher {
  display: flex;
  position: relative;
  box-shadow: 0px 0px 0px 0px gray;
  margin-top: 8px;
}

.switcher-button {
  font-size: 18px;
  width: 50%;
  text-align: center;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 4px;
  /* padding: 20px 0px; */
}

.switcher-underliner {
  /* display: absolute; */
  /* display: none; */
  /* width: calc(100% - 40px); */
  width: 88px;
  margin: 0 auto;
  height: 4px;
  position: absolute;
  background-color: black;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /* padding-top: 20px; */
  margin-top: 12px;
  bottom: 0;
  left: 0;
  width: 50%;
  transition: left 0.1s ease;
}

.switcher-underliner.vehicles {
  left: 0;
}

.switcher-underliner.drivers {
  left: 50%;
}

@media screen and (min-width: 768px) {
  .mobile-switcher {
    display: none;
  }
}
</style>
