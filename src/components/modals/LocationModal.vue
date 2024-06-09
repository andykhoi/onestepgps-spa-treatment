<script setup>
import ModalHeader from './modal-components/ModalHeader.vue'
import SaveButton from './modal-components/SaveButton.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const msg = ref('')

const onPing = (e) => {
  //   console.log(e.target.innerHtml)
  e.target.innerHTML = 'Pinged!'
  msg.value = ''
  setTimeout(() => (e.target.innerHTML = 'Send Ping'), 2000)
}
</script>

<template>
  <ModalHeader :title="`Tracking ${store.state.modal.id}`" />
  <div class="modal-body">
    <div class="modal-location">
      <img src="/location.png" />
    </div>
    <div class="location-modal-actions">
      <div class="ping-input-wrapper">
        <input
          type="text"
          v-model="msg"
          :placeholder="`Send ${store.state.modal.id.substring(0, store.state.modal.id.indexOf(' '))} a message`"
        />
      </div>
      <div class="save-button-wrapper">
        <SaveButton :saveButtonCopy="`Send Ping`" @onSave="onPing" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-location {
  padding: 20px 20px 20px 20px;
  height: 500px;
}

.location-modal-actions {
  /* width: 400px; */
  border-top: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  padding: 20px 20px 20px 20px;
  gap: 24px;
}

.save-button-wrapper {
  /* width: 300px; */
  /* width: 240px; */
  width: 200px;
  margin-left: auto;
}

.ping-input-wrapper {
  appearance: none;
  background-color: #e3e3e3;
  padding: 16px 28px;
  border-radius: 8px;
  width: 100%;
}

.ping-input-wrapper input {
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 0;
}

.modal-location img {
  border-radius: 8px;
  object-fit: cover;
  /* height: 200px; */
  height: 100%;
  width: 100%;
}
</style>
