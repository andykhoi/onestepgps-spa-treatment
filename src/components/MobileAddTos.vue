<script setup>
import { useStore } from 'vuex'

const store = useStore()

const showModal = ({ modalName, id }) => {
  store.dispatch('showModal', { modalName, id })
}
</script>

<template>
  <div class="mobile-add-tos">
    <!-- <div class="mobile-add-to-icon">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2.1875C11.6637 2.1875 9.37989 2.88029 7.43733 4.17827C5.49478 5.47624 3.98074 7.3211 3.08668 9.47955C2.19262 11.638 1.95869 14.0131 2.41448 16.3045C2.87027 18.5959 3.9953 20.7007 5.64731 22.3527C7.29931 24.0047 9.4041 25.1297 11.6955 25.5855C13.9869 26.0413 16.362 25.8074 18.5205 24.9133C20.6789 24.0193 22.5238 22.5052 23.8217 20.5627C25.1197 18.6201 25.8125 16.3363 25.8125 14C25.809 10.8682 24.5634 7.86566 22.3489 5.65114C20.1343 3.43662 17.1318 2.19097 14 2.1875ZM14 23.1875C12.1829 23.1875 10.4066 22.6487 8.8957 21.6391C7.38483 20.6296 6.20724 19.1947 5.51186 17.5159C4.81648 15.8371 4.63454 13.9898 4.98904 12.2076C5.34354 10.4254 6.21857 8.78835 7.50346 7.50346C8.78836 6.21856 10.4254 5.34354 12.2076 4.98904C13.9898 4.63453 15.8371 4.81648 17.5159 5.51186C19.1947 6.20724 20.6296 7.38482 21.6391 8.8957C22.6487 10.4066 23.1875 12.1829 23.1875 14C23.1849 16.4359 22.2161 18.7712 20.4937 20.4937C18.7712 22.2161 16.4359 23.1849 14 23.1875ZM19.6875 14C19.6875 14.3481 19.5492 14.6819 19.3031 14.9281C19.0569 15.1742 18.7231 15.3125 18.375 15.3125H15.3125V18.375C15.3125 18.7231 15.1742 19.0569 14.9281 19.3031C14.6819 19.5492 14.3481 19.6875 14 19.6875C13.6519 19.6875 13.3181 19.5492 13.0719 19.3031C12.8258 19.0569 12.6875 18.7231 12.6875 18.375V15.3125H9.625C9.27691 15.3125 8.94307 15.1742 8.69693 14.9281C8.45079 14.6819 8.31251 14.3481 8.31251 14C8.31251 13.6519 8.45079 13.3181 8.69693 13.0719C8.94307 12.8258 9.27691 12.6875 9.625 12.6875H12.6875V9.625C12.6875 9.2769 12.8258 8.94306 13.0719 8.69692C13.3181 8.45078 13.6519 8.3125 14 8.3125C14.3481 8.3125 14.6819 8.45078 14.9281 8.69692C15.1742 8.94306 15.3125 9.2769 15.3125 9.625V12.6875H18.375C18.7231 12.6875 19.0569 12.8258 19.3031 13.0719C19.5492 13.3181 19.6875 13.6519 19.6875 14Z"
          fill="black"
        />
      </svg>
    </div> -->
    <div
      class="mobile-add-to-button mobile-add-to-vehicle"
      @click="showModal({ modalName: 'vehicleModal', id: null })"
    >
      Add Vehicle
    </div>
    <div
      class="mobile-add-to-button mobile-add-to-driver"
      @click="showModal({ modalName: 'driverModal', id: null })"
    >
      Add Driver
    </div>
  </div>
</template>

<style scoped>
.mobile-add-tos {
  display: flex;
  width: 100%;
  height: 44px;
  /* background-color: #ededed; */
  border-radius: 40px;
  /* border: 1px solid #bbbbbb; */
  background-color: #e8e8e8;
  border: 1px solid #c4c4c4;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.12);
}

.mobile-add-to-icon {
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-add-to-button {
  flex-grow: 2;
  justify-content: center;
  display: flex;
  align-items: center;
}

.mobile-add-to-vehicle {
  /* padding: 0px 8px; */
}

.mobile-add-to-driver {
  border-left: 1px solid #bbbbbb;
  /* padding: 0px 20px; */
  /* border: 1px solid #bbbbbb; */
}
</style>
