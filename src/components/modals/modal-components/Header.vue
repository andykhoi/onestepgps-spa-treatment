<script setup>
import { defineProps } from 'vue'
import { useStore } from 'vuex'

defineProps({
  title: String
})

const store = useStore()

const closeModal = () => {
  store.dispatch('closeModal')
}
</script>

<template>
  <div class="modal-header">
    <div class="close-modal" @click="closeModal()">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.25 17.25L6.75 6.75M17.25 6.75L6.75 17.25"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="modal-title">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.modal-header {
  position: relative;
  width: 100%;
}
.close-modal {
  position: absolute;
  right: 26px;
  top: 26px;
}

.modal-title {
  padding: 28px 0px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #d9d9d9;
}
</style>
