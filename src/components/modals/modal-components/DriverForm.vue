<script setup>
const name = defineModel('name')
const email = defineModel('email')
const phoneNumber = defineModel('phoneNumber')
const licenseNumber = defineModel('licenseNumber')
</script>

<template>
  <div class="driver-form">
    <div class="driver-form-input">
      <p>Name</p>
      <input type="text" v-model="name" placeholder="Enter a first and last name" />
    </div>
    <div class="driver-form-input">
      <p>Driver's License #</p>
      <input type="text" v-model="licenseNumber" placeholder="Enter a driver's license number" />
    </div>
    <div class="driver-form-input">
      <p>Phone Number</p>
      <input type="text" v-model="phoneNumber" placeholder="Enter a phone number" />
    </div>
    <div class="driver-form-input">
      <p>Email</p>
      <input type="text" v-model="email" placeholder="Enter an email" />
    </div>
  </div>
</template>

<style>
.driver-form {
  display: grid;
  width: 100%;
}

.driver-form-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 20px;
  border-top: 1px solid #d4d4d4;
}

.driver-form-input:last-of-type {
  border-bottom: 1px solid #d4d4d4;
}

.driver-form-input p {
  font-size: 0.8rem;
  font-weight: 300;
}

.driver-form-input input {
  appearance: none;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
}

.driver-form-input input::placeholder {
  font-weight: 400;
  opacity: 0.5;
}

@media screen and (min-width: 768px) {
  .driver-form {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .driver-form-input:nth-of-type(1) {
    border-right: 1px solid #d4d4d4;
  }

  .driver-form-input:nth-of-type(3) {
    border-right: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
  }
}
</style>
