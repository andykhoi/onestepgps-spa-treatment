<template>
  <div class="switcher">
    <div class="switcher-button active">Vehicles</div>
    <div class="switcher-button">Drivers</div>
  </div>
</template>

<style scoped>
.switcher {
  display: none;
  width: 100%;
  height: 60px;
  border: 1px solid #c4c4c4;
  background-color: #ededed;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  margin-top: 20px;
}

.switcher-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  flex-grow: 1;
  border-radius: 16px;
}

.switcher-button.active {
  background-color: #3d3d3d;
  color: white;
}

@media screen and (min-width: 768px) {
  .switcher {
    display: flex;
  }
}
</style>
