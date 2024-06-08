<script setup>
const props = defineProps({
  images: Array,
  image: String,
  objectFit: String
})

const emit = defineEmits(['update:image'])

const prevImage = () => {
  let currentIndex = props.images.findIndex((img) => img === props.image)
  let newIndex
  if (currentIndex > 0) {
    newIndex = currentIndex - 1
  } else {
    newIndex = props.images.length - 1
  }
  emit('update:image', props.images[newIndex])
}

const nextImage = () => {
  let currentIndex = props.images.findIndex((img) => img === props.image)
  let newIndex
  if (currentIndex < props.images.length - 1) {
    newIndex = currentIndex + 1
  } else {
    newIndex = 0
  }
  emit('update:image', props.images[newIndex])
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-back" @click="prevImage">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.796 18.7041C16.0073 18.9154 16.1261 19.2021 16.1261 19.5009C16.1261 19.7998 16.0073 20.0865 15.796 20.2978C15.5846 20.5092 15.298 20.6279 14.9991 20.6279C14.7002 20.6279 14.4136 20.5092 14.2022 20.2978L6.70222 12.7978C6.59734 12.6933 6.51413 12.5691 6.45735 12.4324C6.40057 12.2956 6.37134 12.149 6.37134 12.0009C6.37134 11.8529 6.40057 11.7063 6.45735 11.5695C6.51413 11.4328 6.59734 11.3086 6.70222 11.2041L14.2022 3.70407C14.4136 3.49272 14.7002 3.37399 14.9991 3.37399C15.298 3.37399 15.5846 3.49273 15.796 3.70407C16.0073 3.91541 16.1261 4.20206 16.1261 4.50094C16.1261 4.79983 16.0073 5.08648 15.796 5.29782L9.09379 12L15.796 18.7041Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="carousel-image">
      <img :src="`/${props.image}`" :style="{ objectFit: props.objectFit }" />
    </div>
    <div class="carousel-next" @click="nextImage">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.20403 18.7041C7.99268 18.9154 7.87395 19.2021 7.87395 19.5009C7.87395 19.7998 7.99268 20.0865 8.20403 20.2978C8.41537 20.5092 8.70201 20.6279 9.0009 20.6279C9.29979 20.6279 9.58643 20.5092 9.79778 20.2978L17.2978 12.7978C17.4027 12.6933 17.4859 12.5691 17.5427 12.4324C17.5994 12.2956 17.6287 12.149 17.6287 12.0009C17.6287 11.8529 17.5994 11.7063 17.5427 11.5695C17.4859 11.4328 17.4027 11.3086 17.2978 11.2041L9.79778 3.70407C9.58643 3.49272 9.29979 3.37399 9.0009 3.37399C8.70201 3.37399 8.41537 3.49273 8.20403 3.70407C7.99268 3.91541 7.87395 4.20206 7.87395 4.50094C7.87395 4.79983 7.99268 5.08648 8.20403 5.29782L14.9062 12L8.20403 18.7041Z"
          fill="black"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
}

.carousel-image img {
  height: 252px;
  width: 212px;
  /* object-fit: cover; */
  border-radius: 8px;
}
</style>
