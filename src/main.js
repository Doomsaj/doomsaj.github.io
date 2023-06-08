import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faUser} from '@fortawesome/free-solid-svg-icons'
library.add(faUser)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/style/style.scss'



createApp(App).use(router).use(i18n).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
