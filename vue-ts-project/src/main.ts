import './assets/main.css'
import './assets/tailwind.css'

import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { initFlowbite } from 'flowbite'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
nextTick(() => {
  initFlowbite()
})

router.afterEach(() => {
  nextTick(() => {
    initFlowbite()
  })
})
