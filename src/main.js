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
import {
  faAddressCard,
  faArrowAltCircleDown,
  faBars,
  faBook,
  faBriefcase,
  faCode,
  faHandshake,
  faRedo,
  faRocket,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedinIn,
  faTwitter,
  faFacebookF,
  faInstagram,
  faFacebookMessenger,
  faGithub,
  faStackOverflow,
  faAdobe,
  faGoodreads,
  faBriefcase,
  faUserTie,
  faRocket,
  faRedo,
  faCode,
  faHandshake,
  faAddressCard,
  faBook,
  faBars,
  faArrowAltCircleDown
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
