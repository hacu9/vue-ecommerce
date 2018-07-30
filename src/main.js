import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router/dist/vue-router.js'
import routes from './routes.js';
import Transitions from 'vue2-transitions'

import {
  store
} from './store.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlusCircle,
  faMinusCircle,
  faCartPlus,
  faShoppingCart,
  faShoppingBag,
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronRight,
  faChevronLeft,
  faEyeSlash,
  faEye,
  faCreditCard,
 
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import VueAffix from 'vue-affix'

Vue.use(VueAffix)
Vue.use(VueRouter)
Vue.use(Transitions)

const router = new VueRouter({
  routes,
  mode: 'history'
})

library.add(
  faPlusCircle,
  faMinusCircle,
  faCartPlus,
  faShoppingCart, faShoppingBag,
  faChevronCircleDown, faChevronCircleUp, faChevronRight,faChevronLeft,
  faEyeSlash,faEye,faCreditCard)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.filter('toUSD', (value) => `$${value.toFixed(3)}`)

Vue.config.productionTip = false


window.Vue = new Vue({
  render: h => h(App),
  router,
  store,
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.$store.dispatch("setUpStore")
  },
  mounted() {
    this.loading = false
  }
}).$mount('#app')