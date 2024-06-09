<script setup>
import { useStore } from 'vuex'

const store = useStore()

const showModal = ({ modalName, id }) => {
  store.dispatch('showModal', { modalName, id })
}
</script>

<template>
  <div class="profile-button" @click="showModal({ modalName: 'userModal', id: null })">
    <svg width="30" height="6" viewBox="0 0 30 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="5.6" height="5.6" rx="2.8" fill="black" />
      <rect x="12.1333" y="0.000183105" width="5.6" height="5.6" rx="2.8" fill="black" />
      <rect x="24.2666" y="0.000183105" width="5.6" height="5.6" rx="2.8" fill="black" />
    </svg>
  </div>
</template>

<style scoped>
.profile-button {
  /* width: 52px;
  height: 52px; */
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* background-color: #ededed; */
  /* border: 1px solid #bbbbbb; */
  border-radius: 30px;
}

.profile-button:hover {
  background-color: #e8e8e8;
}

@media screen and (min-width: 768px) {
  .profile-button {
    width: 52px;
    height: 52px;
  }
}
</style>
