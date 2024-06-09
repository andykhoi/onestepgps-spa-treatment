<script setup>
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['onDelete'])
defineProps({
  deleteButtonCopy: String
})

const handleDelete = () => {
  emit('onDelete')
}
</script>

<template>
  <div class="modal-delete" @click="handleDelete">
    {{ deleteButtonCopy }}
  </div>
</template>

<style scoped>
.modal-delete {
  padding: 24px 0px;
  text-align: center;
  /* background-color: #000000; */
  text-decoration: underline;
  color: #616161;
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .modal-delete {
    padding: 16px 0px;
    cursor: pointer;
  }
}
</style>
