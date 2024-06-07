<script setup>
import Header from './modal-components/Header.vue'
import DriverForm from './modal-components/DriverForm.vue'
import SaveButton from './modal-components/SaveButton.vue'
import DeleteButton from './modal-components/DeleteButton.vue'
import ImageCarousel from './modal-components/ImageCarousel.vue'

import { v4 as uuidv4 } from 'uuid'

import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const {
  getters,
  dispatch,
  state: { modal }
} = useStore()

const driver = computed(() => getters.getDriverFromId(modal.id))

const name = ref(driver.value ? driver.value.name : '')
const phoneNumber = ref(driver.value ? driver.value.phoneNumber : '')
const email = ref(driver.value ? driver.value.email : '')
const licenseNumber = ref(driver.value ? driver.value.licenseNumber : '')

const image = ref(driver.value ? driver.value.image : 'headshot1.png')

const headshotImages = ref([
  'headshot1.png',
  'headshot2.png',
  'headshot3.png',
  'headshot4.png',
  'headshot5.png',
  'headshot6.png'
])

const addDriver = (driver) => {
  dispatch('addDriver', driver)
}

const updateDriver = (updatedDriver) => {
  dispatch('updateDriver', updatedDriver)
}
const deleteDriver = (driverId) => {
  dispatch('deleteDriver', driverId)
}
</script>

<template>
  <Header v-if="modal.id !== null" :title="'Editing Driver'" />
  <Header v-if="modal.id === null" :title="'Create A Driver Profile'" />
  <div class="modal-body">
    <ImageCarousel
      :images="headshotImages"
      :image="image"
      @update:image="
        (newImage) => {
          image = newImage
        }
      "
    />
    <DriverForm
      v-model:name="name"
      v-model:phoneNumber="phoneNumber"
      v-model:email="email"
      v-model:licenseNumber="licenseNumber"
    />
  </div>
  <div class="driver-modal-actions">
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
  </div>
</template>

<style scoped>
.driver-modal-actions {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  background-color: #f1f1f1;
}

/* .modal-body {
  height: 100%;
  padding-bottom: 120px;
} */

@media screen and (min-width: 768px) {
  .modal-body {
    /* padding-bottom: 120px; */
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
