<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
const props = defineProps({
  driverId: String,
  speed: Number,
  location: String,
  title: String,
  bearing: Number
})

const { getters, dispatch } = useStore()

const driver = computed(() => getters.getDriverFromId(props.driverId))
const driverName = ref(driver.value ? driver.value.name : null)
const vehicleSpeed = ref(props.speed)
const vehicleDirection = ref(props.bearing)

const randomSpeedChange = () => {
  vehicleSpeed.value += Math.random() > 0.5 ? 1 : -1
}

const rotateDirection = () => {
  const newDirection = vehicleDirection.value + (Math.random() > 0.5 ? 10 : -10)
  if (newDirection >= vehicleDirection.value - 30 && newDirection <= vehicleDirection.value + 30) {
    vehicleDirection.value = newDirection
  }
}

let intervalId

onMounted(() => {
  intervalId = setInterval(
    () => {
      randomSpeedChange()
      rotateDirection()
    },
    Math.floor(Math.random() * (5000 - 2000 + 1) + 1000)
  )
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const showModal = (modalName, id) => {
  dispatch('showModal', { modalName, id })
}
</script>

<template>
  <div class="active-vehicle" @click="showModal('locationModal', driverName)">
    <div class="vehicle-icon">
      <div v-if="driver === undefined">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.25 11.375H25.0687L22.0303 4.53906C21.8928 4.22978 21.6686 3.96701 21.3847 3.78259C21.1009 3.59816 20.7697 3.5 20.4313 3.5H7.56875C7.23028 3.5 6.89907 3.59816 6.61525 3.78259C6.33144 3.96701 6.10719 4.22978 5.96969 4.53906L2.93125 11.375H1.75C1.51794 11.375 1.29538 11.4672 1.13128 11.6313C0.967187 11.7954 0.875 12.0179 0.875 12.25C0.875 12.4821 0.967187 12.7046 1.13128 12.8687C1.29538 13.0328 1.51794 13.125 1.75 13.125H2.625V21.875C2.625 22.3391 2.80937 22.7842 3.13756 23.1124C3.46575 23.4406 3.91087 23.625 4.375 23.625H7C7.46413 23.625 7.90925 23.4406 8.23744 23.1124C8.56563 22.7842 8.75 22.3391 8.75 21.875V21H19.25V21.875C19.25 22.3391 19.4344 22.7842 19.7626 23.1124C20.0908 23.4406 20.5359 23.625 21 23.625H23.625C24.0891 23.625 24.5342 23.4406 24.8624 23.1124C25.1906 22.7842 25.375 22.3391 25.375 21.875V13.125H26.25C26.4821 13.125 26.7046 13.0328 26.8687 12.8687C27.0328 12.7046 27.125 12.4821 27.125 12.25C27.125 12.0179 27.0328 11.7954 26.8687 11.6313C26.7046 11.4672 26.4821 11.375 26.25 11.375ZM4.84641 11.375L7.56875 5.25H20.4313L23.1536 11.375H4.84641Z"
            fill="white"
          />
        </svg>
      </div>
      <div v-else class="driver-initials">
        {{ driverName.substring(0, 1)
        }}{{ driverName.substring(driverName.indexOf(' ') + 1, driverName.indexOf(' ') + 2) }}
      </div>
    </div>
    <div class="vehicle-information">
      <div class="vehicle-name-location">
        <div class="vehicle-name">
          {{ driverName || title }}
        </div>
        <div class="vehicle-location">
          {{ location }}
        </div>
      </div>
      <div class="vehicle-direction-speed">
        <div class="vehicle-direction" :style="{ transform: `rotate(${vehicleDirection}deg)` }">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5359 29.7974C9.17208 29.7974 3.20255 23.8278 3.20255 16.4641C3.20255 9.1003 9.17208 3.13077 16.5359 3.13077C23.8996 3.13077 29.8692 9.1003 29.8692 16.4641C29.8692 23.8278 23.8996 29.7974 16.5359 29.7974ZM16.5359 27.1308C22.4269 27.1308 27.2025 22.3552 27.2025 16.4641C27.2025 10.5731 22.4269 5.79743 16.5359 5.79743C10.6448 5.79743 5.86921 10.5731 5.86921 16.4641C5.86921 22.3552 10.6448 27.1308 16.5359 27.1308ZM9.86921 15.7974L21.8692 11.1308L17.2025 23.1336L15.2025 17.7974L9.86921 15.7974Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="vehicle-speed">{{ vehicleSpeed }} mph</div>
      </div>
    </div>
  </div>
</template>

<style>
.active-vehicle {
  display: flex;
  width: 100%;
  gap: 16px;
  font-size: 0.9rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  /* border-bottom: 1px solid #c7c7c7; */
  /* padding: 24px 28px; */
}

.vehicle-icon {
  width: 44px;
  height: 44px;
  background-color: #002e6d;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;
}

.driver-initials {
  color: white;
  font-weight: 800;
  font-size: 1rem;
}

.vehicle-name {
  font-weight: 500;
}

.vehicle-information {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.vehicle-direction-speed {
  /* display: flex; */
  position: relative;
  gap: 16px;
}

.vehicle-speed {
  font-weight: 600;
  /* width: 60px; */
  text-align: right;
}

.vehicle-location {
  /* position: absolute; */
  font-weight: 300;
}

.vehicle-direction {
  display: none;
  position: absolute;
  left: -30px;
  top: -8px;
  /* width: 16px; */
  transition: transform 1000ms linear;
}

@media screen and (min-width: 992px) {
  .active-vehicle::after {
    display: none;
    position: absolute;
    content: '';
    background-color: #e8e8e8;
    width: calc(100% + 24px);
    height: calc(100% + 20px);
    z-index: -1;
    top: -10px;
    left: -12px;
    border-radius: 18px;
  }

  .active-vehicle:hover::after {
    display: block;
  }
}
</style>
