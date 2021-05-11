import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleLeft,
  faAngleRight,
  faCheck,
  faClock,
  faCreditCard,
  faEnvelope,
  faFileAlt,
  faMapMarkerAlt,
  faMoneyBill,
  faPaperPlane,
  faPhoneAlt,
  faQuoteLeft,
  faRubleSign,
  faShoppingCart,
  faTimes,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueTheMask from "vue-the-mask";
Vue.use(VueTheMask);

library.add(
  faAngleLeft,
  faAngleRight,
  faCheck,
  faClock,
  faQuoteLeft,
  faPhoneAlt,
  faEnvelope,
  faPaperPlane,
  faMapMarkerAlt,
  faShoppingCart,
  faCreditCard,
  faFileAlt,
  faMoneyBill,
  faTruck,
  faTimes,
  faRubleSign
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
