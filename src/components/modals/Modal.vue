<script setup>
import DriverModal from './DriverModal.vue'
import UserModal from './UserModal.vue'
import VehicleModal from './VehicleModal.vue'

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

// const showModal = ({ modalName, id }) => {
//   store.dispatch('showModal', { modalName, id })
// }
</script>

<template>
  <div class="modal" v-if="activeModal.modalName !== ''">
    <div class="modal-wrapper">
      <DriverModal v-if="activeModal.modalName === 'driverModal'" />
      <VehicleModal v-if="activeModal.modalName === 'vehicleModal'" />
      <UserModal v-if="activeModal.modalName === 'userModal'" />
    </div>
    <!-- <button @click="showModal({ modalName: 'driverModal', id: null })">show driver modal</button>
    <button @click="showModal({ modalName: 'vehicleModal', id: null })">show vehicle modal</button>
    <button @click="showModal({ modalName: 'userModal', id: null })">show user modal</button> -->
  </div>
</template>

<style scoped>
.modal {
  top: 0;
  z-index: 1000;
  /* background: rgba(0, 0, 0, 0.6); */
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
    width: 696px;
    border-radius: 12px;
    overflow: hidden;
  }
}
</style>
