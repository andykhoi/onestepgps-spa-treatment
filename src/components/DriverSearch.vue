<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const searchText = computed({
  get: () => store.state.driverFilters.searchText,
  set: (value) => store.commit('SET_DRIVER_FILTER_SEARCH_TEXT', value)
})
</script>

<template>
  <div class="driver-search">
    <div class="search-icon">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1191 23.8809L19.6427 18.4056C21.2299 16.5 22.0215 14.0558 21.8525 11.5814C21.6836 9.10709 20.5672 6.79313 18.7357 5.12091C16.9041 3.4487 14.4984 2.54697 12.0189 2.60332C9.53944 2.65967 7.17715 3.66976 5.42345 5.42345C3.66976 7.17715 2.65967 9.53944 2.60332 12.0189C2.54697 14.4984 3.4487 16.9041 5.12091 18.7357C6.79313 20.5672 9.10709 21.6836 11.5814 21.8525C14.0558 22.0215 16.5 21.2299 18.4056 19.6427L23.8809 25.1191C23.9622 25.2004 24.0588 25.2649 24.165 25.3089C24.2712 25.3528 24.385 25.3755 24.5 25.3755C24.615 25.3755 24.7288 25.3528 24.835 25.3089C24.9413 25.2649 25.0378 25.2004 25.1191 25.1191C25.2004 25.0378 25.2649 24.9413 25.3089 24.835C25.3528 24.7288 25.3755 24.615 25.3755 24.5C25.3755 24.385 25.3528 24.2712 25.3089 24.165C25.2649 24.0588 25.2004 23.9622 25.1191 23.8809ZM4.37501 12.25C4.37501 10.6925 4.83687 9.16993 5.70218 7.87489C6.5675 6.57985 7.79741 5.57049 9.23637 4.97445C10.6753 4.37841 12.2587 4.22246 13.7863 4.52632C15.3139 4.83018 16.7171 5.5802 17.8185 6.68154C18.9198 7.78288 19.6698 9.18607 19.9737 10.7137C20.2776 12.2413 20.1216 13.8247 19.5256 15.2636C18.9295 16.7026 17.9202 17.9325 16.6251 18.7978C15.3301 19.6631 13.8075 20.125 12.25 20.125C10.1621 20.1227 8.16045 19.2923 6.6841 17.8159C5.20775 16.3396 4.37732 14.3379 4.37501 12.25Z"
          fill="black"
        />
      </svg>
    </div>
    <input
      v-model="searchText"
      class="driver-search-input"
      type="text"
      placeholder="A name, email, or phone number"
    />
  </div>
</template>

<style scoped>
.driver-search {
  display: flex;
  padding: 12px 20px;
  background-color: #e3e3e3;
  border-radius: 24px;
  margin-left: 20px;
  margin-right: 20px;
  border: 1px solid #d4d4d4;
  /* position: sticky; */
  /* top: 0; */
}

.driver-search-input {
  appearance: none;
  margin-left: 12px;
  border: none;
  width: 100%;
  background-color: transparent;
  /* font-size: 0.9rem; */
  font-size: 1rem;
}

.driver-search-input::placeholder {
  color: #303030;
  opacity: 1; /* Firefox */
}

.driver-search-input::-ms-input-placeholder {
  /* Edge 12 -18 */
  color: #303030;
}

@media screen and (min-width: 768px) {
  .driver-search {
    margin-left: 20px;
    margin-right: 20px;
  }

  .driver-search-input {
    font-size: 0.9rem;
  }
  .driver-search {
    padding: 12px 20px;
  }
}

@media screen and (min-width: 992px) {
  .driver-search {
    margin: 0;
  }
}
</style>
