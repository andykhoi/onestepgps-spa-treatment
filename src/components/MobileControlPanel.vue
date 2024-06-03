<script setup>
import MobileAddTos from './MobileAddTos.vue'
import ProfileButton from './ProfileButton.vue'
import MobileSwitcher from './MobileSwitcher.vue'
</script>

<template>
  <div class="mobile-control-panel">
    <div class="add-tos-profile-wrapper">
      <div class="mobile-add-tos-wrapper">
        <MobileAddTos />
      </div>
      <ProfileButton />
    </div>
    <MobileSwitcher />
  </div>
</template>

<style scoped>
.add-tos-profile-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.mobile-add-tos-wrapper {
  min-width: 217px;
  width: 80%;
}

.mobile-control-panel {
  padding: 24px 20px 0px 20px;
  border-bottom: 1px solid #d9d9d9;
  position: sticky;
  top: 0;
  background-color: #f5f5f5;
  z-index: 10;
}
</style>
