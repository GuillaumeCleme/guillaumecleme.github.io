import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStackOverflow)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
