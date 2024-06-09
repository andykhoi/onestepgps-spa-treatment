<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const title = defineModel('title')
const vin = defineModel('vin')
const licensePlateNumber = defineModel('licensePlateNumber')
const odometer = defineModel('odometer')
const driverId = defineModel('driverId')
const lastServiceDate = defineModel('lastServiceDate')

const store = useStore()

const allDrivers = computed(() => store.getters.getDrivers)
</script>

<template>
  <div class="vehicle-form">
    <div class="vehicle-form-input">
      <p>Title</p>
      <input type="text" v-model="title" placeholder="Enter a vehicle title" />
    </div>
    <div class="vehicle-form-input">
      <p>License Plate</p>
      <input type="text" v-model="licensePlateNumber" placeholder="Enter a license plate" />
    </div>
    <div class="vehicle-form-input">
      <p>Vin</p>
      <input type="text" v-model="vin" placeholder="Enter a vin number" />
    </div>
    <div class="vehicle-form-input">
      <p>Driver</p>
      <select v-model="driverId" required>
        <option value="" selected>Select Driver</option>
        <option v-for="driver in allDrivers" :value="driver.id" :key="driver.id">
          {{ driver.name }}
        </option>
      </select>
    </div>
    <div class="vehicle-form-input">
      <p>Odometer</p>
      <input type="text" v-model="odometer" placeholder="Enter miles driven" />
    </div>
    <div class="vehicle-form-input">
      <p>Last Service Date</p>
      <input type="text" v-model="lastServiceDate" placeholder="Enter last service date" />
    </div>
  </div>
</template>

<style>
.vehicle-form {
  display: grid;
  width: 100%;
}

.vehicle-form-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 20px;
  border-top: 1px solid #d4d4d4;
}

.vehicle-form-input:last-of-type {
  border-bottom: 1px solid #d4d4d4;
}

.vehicle-form-input p {
  font-size: 0.8rem;
  font-weight: 300;
}

.vehicle-form-input input {
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
}

.vehicle-form-input input::placeholder {
  font-weight: 400;
  opacity: 0.5;
}

select {
  /* color: gray; */
  opacity: 0.6;
  color: gray;
  border: none;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 400;
}

select:valid {
  opacity: 1;
  font-weight: 500;
  color: black;
}

@media screen and (min-width: 768px) {
  .vehicle-form {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-template-rows: auto auto auto;
  }

  .vehicle-form-input input {
    font-size: 0.9rem;
  }

  .vehicle-form-input:nth-of-type(1),
  .vehicle-form-input:nth-of-type(2),
  .vehicle-form-input:nth-of-type(4),
  .vehicle-form-input:nth-of-type(5) {
    border-right: 1px solid #d4d4d4;
  }

  .vehicle-form-input:nth-of-type(4),
  .vehicle-form-input:nth-of-type(5) {
    border-bottom: 1px solid #d4d4d4;
  }
}
</style>
