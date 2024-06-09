<script setup>
import ModalHeader from './modal-components/ModalHeader.vue'
import UserForm from './modal-components/UserForm.vue'

// import { v4 as uuidv4 } from 'uuid'

// import { computed, ref } from 'vue'
// import { useStore } from 'vuex'

// const {
//   getters,
//   dispatch,
//   state: { modal }
// } = useStore()

// const driver = computed(() => getters.getDriverFromId(modal.id))

// const name = ref(driver.value ? driver.value.name : '')
// const phoneNumber = ref(driver.value ? driver.value.phoneNumber : '')
// const email = ref(driver.value ? driver.value.email : '')
// const licenseNumber = ref(driver.value ? driver.value.licenseNumber : '')

// const image = ref()

// const addDriver = (driver) => {
//   dispatch('addDriver', driver)
// }

// const updateDriver = (updatedDriver) => {
//   dispatch('updateDriver', updatedDriver)
// }
// const deleteDriver = (driverId) => {
//   dispatch('deleteDriver', driverId)
// }
</script>

<template>
  <ModalHeader :title="'Designed By'" />
  <div class="modal-body">
    <div class="me">
      <img src="/me.png" />
    </div>
    <UserForm />
  </div>
  <!-- <div class="driver-modal-actions">
    <div class="save-button-wrapper">
      <SaveButton
        v-if="modal.id === null"
        @onSave="
          () => {
            addDriver({ name, email, phoneNumber, licenseNumber, image, id: uuidv4() })
            dispatch('closeModal')
          }
        "
        :saveButtonCopy="'Add Driver'"
      />
      <SaveButton
        v-if="modal.id !== null"
        @onSave="
          () => {
            updateDriver({ name, email, phoneNumber, licenseNumber, image, id: modal.id })
            dispatch('closeModal')
          }
        "
        :saveButtonCopy="'Update Driver'"
      />
    </div>
    <div v-if="modal.id !== null" class="delete-button-wrapper">
      <DeleteButton
        @onDelete="
          () => {
            deleteDriver(modal.id)
            dispatch('closeModal')
          }
        "
        :deleteButtonCopy="'Delete Driver'"
      />
    </div>
  </div> -->
</template>

<style scoped>
.me {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.me img {
  height: 200px;
}
.driver-modal-actions {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  background-color: #f1f1f1;
}

.modal-body {
  height: calc(100% - 263px);
  overflow-y: scroll;
}

@media screen and (min-width: 768px) {
  .modal-body {
    /* padding-bottom: 120px; */
    height: auto;
    overflow-y: initial;
  }

  .driver-modal-actions {
    position: initial;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  /* .delete-button-wrapper {
    or
  } */
}
</style>
