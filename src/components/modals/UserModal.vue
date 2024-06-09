<script setup>
// import { ref } from 'vue'
import ModalHeader from './modal-components/ModalHeader.vue'
import UserForm from './modal-components/UserForm.vue'
// const modalBodyHeight = ref('100%')
// onMounted(() => {
//   modalBodyHeight.value = `calc(100% - 81px)`
// //   console.log(modalBodyHeight.value)
// })
</script>

<template>
  <ModalHeader :title="'Designs By'" />
  <div class="modal-body">
    <div class="me">
      <img src="/me.png" />
    </div>
    <UserForm />
  </div>
</template>

<style scoped>
.me {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.me img {
  height: 200px;
}
.driver-modal-actions {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  background-color: #f1f1f1;
}

.modal-body {
  height: calc(100% - 81px);
  overflow-y: scroll;
}

@media screen and (min-width: 768px) {
  .modal-body {
    /* padding-bottom: 120px; */
    height: auto;
    overflow-y: initial;
  }

  .driver-modal-actions {
    position: initial;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  /* .delete-button-wrapper {
    or
  } */
}
</style>
