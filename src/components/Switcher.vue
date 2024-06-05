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
  border: 1px solid #bfbfbf;
  background-color: #ededed;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-top: 16px;
}

.switcher-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 500;
  flex-grow: 1;
  border-radius: 8px;
}

.switcher-button.active {
  background-color: hsl(0 0% 20% / 1);
  color: white;
}

@media screen and (min-width: 768px) {
  .switcher {
    display: flex;
  }
}
</style>
