<script setup>
defineProps({
  driver: String,
  speed: Number,
  location: String,
  title: String
})
</script>

<template>
  <div class="active-vehicle">
    <div class="vehicle-icon">
      <div v-if="driver === ''">
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
        {{ driver.substring(0, 1) }}
        {{ driver.substring(driver.indexOf(' ') + 1, driver.indexOf(' ') + 2) }}
      </div>
    </div>
    <div class="vehicle-information">
      <div class="vehicle-name-location">
        <div class="vehicle-name">
          {{ driver || title }}
        </div>
        <div class="vehicle-location">
          {{ location }}
        </div>
      </div>
      <div class="vehicle-direction-speed">
        <div class="vehicle-direction">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.217 15.1524L9.99526 14.8175L9.60346 14.729L2.46845 13.1184L18.4815 2.24045L14.2786 21.2857L10.217 15.1524Z"
              fill="#1BA6FF"
              stroke="#004E7F"
              stroke-width="2"
            />
          </svg>
        </div>
        <div class="vehicle-speed">{{ speed }} mph</div>
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
  display: flex;
  gap: 16px;
}

.vehicle-speed {
  font-weight: 500;
}

.vehicle-location {
  font-weight: 300;
}
</style>
