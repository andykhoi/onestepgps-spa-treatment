<script setup>
import { useStore } from 'vuex'

const store = useStore()

const updateActiveContent = (activeContent) => {
  store.dispatch('updateActiveContent', activeContent)
}
</script>

<template>
  <div class="switcher">
    <div
      class="switcher-background"
      :class="{
        vehicles: store.state.activeContent === 'vehicles',
        drivers: store.state.activeContent === 'drivers'
      }"
    />
    <div
      class="switcher-button"
      :class="{ active: store.state.activeContent === 'vehicles' }"
      @click="updateActiveContent('vehicles')"
    >
      Vehicles
    </div>
    <div
      class="switcher-button"
      :class="{ active: store.state.activeContent === 'drivers' }"
      @click="updateActiveContent('drivers')"
    >
      Drivers
    </div>
  </div>
</template>

<style scoped>
.switcher {
  display: none;
  width: 100%;
  height: 60px;
  border: 1px solid #bfbfbf;
  background-color: #ededed;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-top: 16px;
  position: relative;
  z-index: 0;
}

.switcher-background {
  position: absolute;
  left: 0px; /* Set initial left position */
  /* right: auto; */
  z-index: 1;
  border-radius: 9px;
  width: 50%;
  height: 100%;
  background-color: hsl(0 0% 20% / 1);
  transition:
    /* right 0.1s ease, */ left 100ms ease;
  /* margin 0.1s ease; */
}

.switcher-background.drivers {
  /* transition: right 0.1s ease; */
  /* margin-left: auto; */
  /* right: 0px; */
  left: 50%;
}

.switcher-background.vehicles {
  left: 0px;
  /* right: auto; */
  /* margin-right: auto; */
}

.switcher-button {
  width: 50%;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  flex-grow: 1;
  border-radius: 8px;
  transition: color 100ms ease;
  cursor: pointer;
}

.switcher-button:hover {
  background-color: #e8e8e8;
}

.switcher-button.active:hover {
  background-color: transparent;
}

.switcher-button.active {
  /* background-color: hsl(0 0% 20% / 1); */
  color: white;
}

@media screen and (min-width: 768px) {
  .switcher {
    display: flex;
  }
}
</style>
