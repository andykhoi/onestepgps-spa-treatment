<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  vehicle: Object
})

const { dispatch } = useStore()

const showModal = (modalName, id) => {
  dispatch('showModal', { modalName, id })
}
</script>
<template>
  <div class="vehicle-card">
    <!-- <div class="vehicle-card-new">Recently Added</div> -->
    <div class="vehicle-card-edit" @click="showModal('vehicleModal', props.vehicle.id)">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H22C31.9411 0 40 8.05887 40 18V40H20C8.95431 40 0 31.0457 0 20V0Z"
          fill="#DBDBDB"
        />
        <path
          d="M28.7586 14.732L25.268 11.2406C25.1519 11.1245 25.0141 11.0324 24.8624 10.9696C24.7107 10.9067 24.5482 10.8744 24.384 10.8744C24.2198 10.8744 24.0572 10.9067 23.9056 10.9696C23.7539 11.0324 23.6161 11.1245 23.5 11.2406L13.8664 20.875C13.7498 20.9907 13.6574 21.1283 13.5945 21.28C13.5316 21.4317 13.4995 21.5944 13.5 21.7586V25.25C13.5 25.5815 13.6317 25.8995 13.8661 26.1339C14.1005 26.3683 14.4185 26.5 14.75 26.5H18.2414C18.4056 26.5005 18.5683 26.4684 18.72 26.4055C18.8717 26.3426 19.0094 26.2502 19.125 26.1336L28.7586 16.5C28.8747 16.3839 28.9668 16.2461 29.0296 16.0944C29.0925 15.9428 29.1248 15.7802 29.1248 15.616C29.1248 15.4518 29.0925 15.2893 29.0296 15.1376C28.9668 14.9859 28.8747 14.8481 28.7586 14.732ZM26 17.4906L22.5086 14L24.3836 12.125L27.875 15.6156L26 17.4906Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="vehicle-card-model">
      <img :src="`/${props.vehicle.model}`" />
      <!-- <img class="small" src="../assets/images/sedan_small.png" /> -->
      <!-- <img class="large" src="../assets/images/sedan_large.png" /> -->
    </div>
    <div class="vehicle-card-specs">
      <div class="vehicle-card-spec b-r b-b">
        <p>Title</p>
        <p>{{ props.vehicle.title }}</p>
      </div>
      <div class="vehicle-card-spec b-r b-b">
        <p>License Plate</p>
        <p>{{ props.vehicle.license_plate_number }}</p>
      </div>
      <div class="vehicle-card-spec b-b">
        <p>Vin</p>
        <p>{{ props.vehicle.vin }}</p>
      </div>
      <div class="vehicle-card-spec b-r">
        <p>Driver</p>
        <p>{{ props.vehicle.driverId }}</p>
      </div>
      <div class="vehicle-card-spec b-r">
        <p>Odometer</p>
        <p>{{ props.vehicle.odometer }}</p>
      </div>
      <div class="vehicle-card-spec">
        <p>Last Service Date</p>
        <p>{{ props.vehicle.last_service_date }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.vehicle-card {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #e3e3e3;
  border-radius: 18px;
  padding-bottom: 8px;
}

.vehicle-card-new {
  border-radius: 40px 40px 40px 0px;
  background-color: #dbcd2c;
  position: absolute;
  padding: 4px 12px;
  font-size: 0.8rem;
  top: -4px;
  box-shadow: 0px 0px 1px #0000005c;
}

.vehicle-card-edit {
  position: absolute;
  right: 0;
  top: 0;
}

.vehicle-card-model {
  height: 112px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .vehicle-card-model .large {
  display: none;
}

.vehicle-card-model .small {
  display: block;
} */

.vehicle-card-model img {
  width: 180px;
  height: 100px;
  object-fit: contain;
}

.vehicle-card-specs {
  height: 90px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 120px);
  grid-column-gap: 24px;
  align-items: center;
  overflow-x: scroll;
  padding: 0px 8px;
  box-shadow: 0px -1px 0px 0px #d4d4d4;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
}

.vehicle-card-spec p:first-of-type {
  font-size: 0.8rem;
  font-weight: 300;
}

.vehicle-card-spec p:last-of-type {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow: hidden; /* Hide the overflowed text */
  text-overflow: ellipsis; /* Display ellipsis (...) when text overflows */
}

.vehicle-card-specs::-webkit-scrollbar {
  -webkit-appearance: none;
  height: 8px;
}

.vehicle-card-specs::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.207);
}

@media screen and (min-width: 768px) {
  .b-r {
    border-right: 1px solid #d4d4d4;
  }

  .b-b {
    border-bottom: 1px solid #d4d4d4;
  }
  .vehicle-card {
    flex-direction: row;
    height: 144px;
    padding-bottom: 0;
  }

  .vehicle-card-model {
    height: 100%;
    /* min-width: 250px; */
    max-width: 250px;
    border-right: 1px solid #d4d4d4;
  }

  .vehicle-card-model .large {
    display: block;
  }

  .vehicle-card-model .small {
    display: none;
  }

  .vehicle-card-model img {
    width: 160px;
    height: 120px;
    object-fit: contain;
  }

  .vehicle-card-specs {
    flex-grow: 2;
    grid-template-rows: 50% 50%;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    height: 100%;
    box-shadow: none;
    /* border-bottom: 4px solid transparent; */
    /* border-top: 4px solid transparent; */
    border-left: 0;
    border-right: 0;
    padding: 0;
    grid-gap: 0;
    /* align-items: center; */
  }
  .vehicle-card-spec {
    padding: 0px 20px;
    /* border-right: 1px solid #d4d4d4; */
    height: 100%;
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    /* justify-content: left; */
    justify-content: center;
    white-space: nowrap;
    /* border-bottom: 1px solid #d4d4d4; */
  }

  .vehicle-card-specs::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0px;
  }

  .vehicle-card-specs::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.207);
  }
}
</style>
