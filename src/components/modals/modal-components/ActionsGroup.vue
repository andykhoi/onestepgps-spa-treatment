<script setup>
import { defineEmits, defineProps, emit } from 'vue'
defineEmits(['onSave', 'onDelete'])
defineProps({
  saveButtonCopy: String
})

const handleSave = () => {
  emit('onSave')
}

const handleDelete = () => {
  emit('onDelete')
}
</script>

<template>
  <div class="modal-actions">
    <div class="delete" @click="handleDelete">delete</div>
    <div class="save" @click="handleSave">
      {{ saveButtonCopy }}
    </div>
  </div>
</template>

<style scoped></style>
