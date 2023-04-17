import { createApp } from 'vue'

import App from './App.vue'

import router from './plugins/routing'

createApp(App).use(router).mount('#app')
