import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
// Import vue3-loading-overlay stylesheet
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { currency, date } from './methods/filter'

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency,
  date
}
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.component('LoadingOverlay', Loading)
app.mount('#app')