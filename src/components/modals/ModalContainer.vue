<script setup>
import DriverModal from './DriverModal.vue'
import UserModal from './UserModal.vue'
import VehicleModal from './VehicleModal.vue'
import LocationModal from './LocationModal.vue'
import ErrorModal from './ErrorModal.vue'

import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const activeModal = computed(() => store.getters.getModal)

watch(activeModal, () => {
  //   console.log(activeModal.value)
  if (activeModal.value.modalName !== '') {
    document.body.classList.add('lock')
  } else {
    document.body.classList.remove('lock')
  }
})

const closeModal = () => {
  store.dispatch('closeModal')
}
</script>

<template>
  <div class="modal" v-if="activeModal.modalName !== ''" @click="closeModal">
    <div class="modal-wrapper" @click="(e) => e.stopPropagation()">
      <DriverModal v-if="activeModal.modalName === 'driverModal'" />
      <VehicleModal v-if="activeModal.modalName === 'vehicleModal'" />
      <UserModal v-if="activeModal.modalName === 'userModal'" />
      <LocationModal v-if="activeModal.modalName === 'locationModal'" />
      <ErrorModal v-if="activeModal.modalName === 'errorModal'" />
    </div>
  </div>
</template>

<style scoped>
.modal {
  top: 0;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
  position: relative;
}

@media screen and (min-width: 768px) {
  .modal {
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-wrapper {
    /* height: 740px; */
    height: auto;
    width: 640px;
    border-radius: 12px;
    overflow: hidden;
  }
}
</style>
