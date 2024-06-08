<script setup>
const title = defineModel('title')
const vin = defineModel('vin')
const licensePlateNumber = defineModel('licensePlateNumber')
const odometer = defineModel('odometer')
const driverId = defineModel('driverid')
const lastServiceDate = defineModel('lastServiceDate')
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
      <input type="text" v-model="driverId" placeholder="Enter driverId CHANGE THIS" />
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
  font-weight: 200;
}

.vehicle-form-input input {
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
}

.vehicle-form-input input::placeholder {
  font-weight: 400;
  opacity: 0.5;
}

@media screen and (min-width: 768px) {
  .vehicle-form {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
    grid-template-rows: auto auto auto;
  }

  /* .vehicle-form-input:nth-of-type(1) {
    border-right: 1px solid #d4d4d4;
  }

  .vehicle-form-input:nth-of-type(3) {
    border-right: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
  } */
}
</style>
