// import './assets/main.css'
import './assets/styles/reset.css'
import './assets/styles/fonts.css'
import './assets/styles/globals.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
