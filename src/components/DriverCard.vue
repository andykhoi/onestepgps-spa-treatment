<script setup>
defineProps({
  driver: Object
})

import { useStore } from 'vuex'

const store = useStore()

const showModal = (modalName, id) => {
  store.dispatch('showModal', { modalName, id })
}
</script>

<template>
  <div class="driver-card">
    <div class="driver-card-new">Recently Added</div>
    <div class="driver-card-edit" @click="showModal('driverModal', driver.id)">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- <path
          d="M0 0H22C31.9411 0 40 8.05887 40 18V40H20C8.95431 40 0 31.0457 0 20V0Z"
          fill="#DBDBDB"
        /> -->
        <path
          d="M28.7586 14.732L25.268 11.2406C25.1519 11.1245 25.0141 11.0324 24.8624 10.9696C24.7107 10.9067 24.5482 10.8744 24.384 10.8744C24.2198 10.8744 24.0572 10.9067 23.9056 10.9696C23.7539 11.0324 23.6161 11.1245 23.5 11.2406L13.8664 20.875C13.7498 20.9907 13.6574 21.1283 13.5945 21.28C13.5316 21.4317 13.4995 21.5944 13.5 21.7586V25.25C13.5 25.5815 13.6317 25.8995 13.8661 26.1339C14.1005 26.3683 14.4185 26.5 14.75 26.5H18.2414C18.4056 26.5005 18.5683 26.4684 18.72 26.4055C18.8717 26.3426 19.0094 26.2502 19.125 26.1336L28.7586 16.5C28.8747 16.3839 28.9668 16.2461 29.0296 16.0944C29.0925 15.9428 29.1248 15.7802 29.1248 15.616C29.1248 15.4518 29.0925 15.2893 29.0296 15.1376C28.9668 14.9859 28.8747 14.8481 28.7586 14.732ZM26 17.4906L22.5086 14L24.3836 12.125L27.875 15.6156L26 17.4906Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="driver-card-col-1">
      <div class="headshot">
        <img :src="`/${driver.image}`" />
        <!-- <img src="../assets/images/headshot2.png" /> -->
      </div>
      <div class="driver-card-form-entry">
        <p>License #</p>
        <p>{{ driver.licenseNumber }}</p>
      </div>
    </div>
    <div class="driver-card-col-2">
      <div class="driver-card-form-entry">
        <p>Name</p>
        <p>{{ driver.name }}</p>
      </div>
      <div class="driver-card-form-entry">
        <p>Email</p>
        <p>{{ driver.email }}</p>
      </div>
      <div class="driver-card-form-entry">
        <p>Phone Number</p>
        <p>{{ driver.phoneNumber }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.driver-card {
  display: flex;
  height: 196.5px;
  border-radius: 18px;
  background-color: #e6e6e6;
  position: relative;
  max-width: 100%;
  /* padding: 4px 0px; */
}

.driver-card-new {
  display: none;
  border-radius: 40px 40px 40px 0px;
  background-color: #dbcd2c;
  position: absolute;
  padding: 4px 12px;
  font-size: 0.8rem;
  top: -4px;
  box-shadow: 0px 0px 1px #0000005c;
}

.driver-card-new.active {
  display: block;
}

.driver-card-edit {
  position: absolute;
  top: 0;
  right: 0;
  border-top-right-radius: 18px;
  border-bottom-left-radius: 18px;
  background-color: #dbdbdb;
  cursor: pointer;
}

.driver-card-edit:hover {
  background-color: #d0d0d0;
}

/* .driver-card-edit svg {
  background-color: blue;
} */

.driver-card-col-1 {
  width: 120px;
  height: 100%;
  border-right: 1px solid #d4d4d4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.headshot {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.headshot img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 6px;
}

.driver-card-col-2 {
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 120px);
  /* width: 100%; */
}

.driver-card-col-2 .driver-card-form-entry:first-of-type {
  border-top: none;
}

.driver-card-form-entry {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px 20px;
  border-top: 1px solid #d4d4d4;
}

.driver-card-form-entry p:first-of-type {
  font-size: 0.8rem;
  font-weight: 200;
}

.driver-card-form-entry p:last-of-type {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
}

@media screen and (min-width: 768px) {
  .driver-card {
    height: 192.5px;
  }
  .driver-card-form-entry {
    padding: 10px 20px;
  }

  .driver-card-form-entry p:first-of-type {
    font-size: 0.75rem;
  }

  .driver-card-form-entry p:last-of-type {
    font-size: 0.9rem;
  }
}
</style>
