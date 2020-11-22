import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
  faFacebookMessenger,
  faGithub,
  faStackOverflow,
  faAdobe,
  faGoodreads
} from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
  faFacebookMessenger,
  faGithub,
  faStackOverflow,
  faAdobe,
  faGoodreads
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
