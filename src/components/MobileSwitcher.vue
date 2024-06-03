<template>
  <div class="mobile-switcher">
    <div class="switcher-button">
      <div>Vehicles</div>
      <div class="switcher-underliner"></div>
    </div>
    <div class="switcher-button">
      <div>Drivers</div>
      <div class="switcher-underliner"></div>
    </div>
  </div>
</template>

<style scoped>
.mobile-switcher {
  display: flex;
}

.switcher-button {
  font-size: 18px;
  width: 50%;
  text-align: center;
  position: relative;
  padding-top: 20px;
  margin-top: 8px;
  /* padding: 20px 0px; */
}

.switcher-underliner {
  /* display: absolute; */
  /* display: none; */
  /* width: calc(100% - 40px); */
  width: 88px;
  margin: 0 auto;
  height: 4px;
  background-color: black;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /* padding-top: 20px; */
  margin-top: 12px;
}
</style>
