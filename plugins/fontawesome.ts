import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { 
    faLinkedinIn,
    faTwitter,
    faFacebookF,
    faInstagram,
    faFacebookMessenger,
    faGithub,
    faStackOverflow,
    faGoodreads 
} from "@fortawesome/free-brands-svg-icons";

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
    faUserTie,
    faMapMarkerAlt,
    faCertificate
} from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedinIn,
    faTwitter,
    faFacebookF,
    faInstagram,
    faFacebookMessenger,
    faGithub,
    faStackOverflow,
    faGoodreads,
    faAddressCard,
    faArrowAltCircleDown,
    faBars,
    faBook,
    faBriefcase,
    faCode,
    faHandshake,
    faRedo,
    faRocket,
    faUserTie,
    faMapMarkerAlt,
    faCertificate
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});