<script setup>
import { defineEmits, defineProps } from 'vue'
const emit = defineEmits(['onSave'])
defineProps({
  saveButtonCopy: String
})

const handleSave = () => {
  emit('onSave')
}
</script>

<template>
  <div class="modal-save" @click="handleSave">
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
  }
}
</style>
