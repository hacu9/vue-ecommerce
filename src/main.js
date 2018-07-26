import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router/dist/vue-router.js'
import routes from './routes.js';



import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusCircle,faMinusCircle,faCartPlus,faShoppingCart,faShoppingBag,faChevronCircleDown,faChevronCircleUp,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import EventBus from '@/plugins/event-bus'


Vue.use(VueRouter)
Vue.use(EventBus)

 const router = new VueRouter({
  routes ,
  mode: 'history'
})

library.add(
  faPlusCircle,
  faMinusCircle,
  faCartPlus,
  faShoppingCart
  ,faShoppingBag,
  faChevronCircleDown,faChevronCircleUp,faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.filter('toUSD', (value) => `$${value}`)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  mounted() {
    this.$bus.$emit('loaded','')
  }
}).$mount('#app')
