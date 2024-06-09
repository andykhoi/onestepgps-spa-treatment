<script setup>
import ModalHeader from './modal-components/ModalHeader.vue'
import VehicleForm from './modal-components/VehicleForm.vue'
import SaveButton from './modal-components/SaveButton.vue'
import DeleteButton from './modal-components/DeleteButton.vue'
import ImageCarousel from './modal-components/ImageCarousel.vue'

import { v4 as uuidv4 } from 'uuid'

import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const {
  getters,
  dispatch,
  state: { modal }
} = useStore()

const vehicle = computed(() => getters.getVehicleFromId(modal.id))

const title = ref(vehicle.value ? vehicle.value.title : '')
const model = ref(vehicle.value ? vehicle.value.model : 'vehicle1.png')
const licensePlateNumber = ref(vehicle.value ? vehicle.value.license_plate_number : '')
const vin = ref(vehicle.value ? vehicle.value.vin : '')
const lastServiceDate = ref(vehicle.value ? vehicle.value.last_service_date : '')
const odometer = ref(vehicle.value ? vehicle.value.odometer : '')
const driverId = ref(vehicle.value ? vehicle.value.driverId : '')
const vehicleImages = ref(['vehicle1.png', 'vehicle2.png', 'vehicle3.png', 'vehicle4.png'])

const addVehicle = (vehicle) => {
  dispatch('addVehicle', vehicle)
}

const updateVehicle = (updatedVehicle) => {
  dispatch('updateVehicle', updatedVehicle)
}

const deleteVehicle = (vehicleId) => {
  dispatch('deleteVehicle', vehicleId)
}

const modalBodyHeight = ref('100%')

onMounted(() => {
  modalBodyHeight.value = `calc(100% - ${document.getElementsByClassName('driver-modal-actions')[0].clientHeight}px - 81px)`
  console.log(modalBodyHeight.value)
})
</script>

<template>
  <ModalHeader v-if="modal.id !== null" :title="'Editing Vehicle'" />
  <ModalHeader v-if="modal.id === null" :title="'Add A New Vehicle'" />
  <div class="modal-body" :style="{ height: modalBodyHeight }">
    <ImageCarousel
      :images="vehicleImages"
      :image="model"
      :objectFit="'contain'"
      @update:image="
        (newModel) => {
          model = newModel
        }
      "
    />
    <VehicleForm
      v-model:title="title"
      v-model:licensePlateNumber="licensePlateNumber"
      v-model:vin="vin"
      v-model:odometer="odometer"
      v-model:driverId="driverId"
      v-model:lastServiceDate="lastServiceDate"
    />
  </div>
  <div class="driver-modal-actions">
    <div class="save-button-wrapper">
      <SaveButton
        v-if="modal.id === null"
        @onSave="
          () => {
            addVehicle({
              ...vehicle,
              title,
              model,
              vin,
              odometer,
              license_plate_number: licensePlateNumber,
              last_service_date: lastServiceDate,
              driverId,
              id: uuidv4()
            })
            dispatch('closeModal')
          }
        "
        :saveButtonCopy="'Add Vehicle'"
      />
      <SaveButton
        v-if="modal.id !== null"
        @onSave="
          () => {
            updateVehicle({
              ...vehicle,
              title,
              model,
              vin,
              odometer,
              license_plate_number: licensePlateNumber,
              last_service_date: lastServiceDate,
              driverId,
              id: modal.id
            })
            dispatch('closeModal')
          }
        "
        :saveButtonCopy="'Update Vehicle'"
      />
    </div>
    <div v-if="modal.id !== null" class="delete-button-wrapper">
      <DeleteButton
        @onDelete="
          () => {
            deleteVehicle(modal.id)
            dispatch('closeModal')
          }
        "
        :deleteButtonCopy="'Delete Vehicle'"
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
  /* padding: 20px; */
  padding: 20px 20px 0px 20px;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 2px 0px #0000006e;
}

.modal-body {
  height: calc(100% - 243px);
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
    padding: 20px;
    box-shadow: none;
  }

  /* .delete-button-wrapper {
    or
  } */
}
</style>
