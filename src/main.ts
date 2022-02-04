import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$http = axios

app.mount('#app')

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $http: typeof axios
    $validate: (data: object, rule: object) => boolean
  }
}
