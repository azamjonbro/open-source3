import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import "./assets/base.css"
// import './registerServiceWorker' // <-- PWA uchun (productionda oching)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
