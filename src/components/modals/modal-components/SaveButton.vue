<script setup>
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['onSave'])
defineProps({
  saveButtonCopy: String
})

const handleSave = (e) => {
  //   console.log(e)
  emit('onSave', e)
}
</script>

<template>
  <div class="modal-save" @click="(e) => handleSave(e)">
    {{ saveButtonCopy }}
  </div>
</template>

<style scoped>
.modal-save {
  padding: 24px 0px;
  text-align: center;
  background-color: #000000;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 8px;
}

@media screen and (min-width: 768px) {
  .modal-save {
    padding: 16px 28px;
    cursor: pointer;
  }
}
</style>
