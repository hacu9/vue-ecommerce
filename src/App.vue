<template>
  <div id="app">
    <eheader @showCart="showCart = !showCart"> </eheader>

    <zoom-center-transition>
    <router-view></router-view>
    </zoom-center-transition>

    <slide-x-right-transition :duration='800'>
        <product-modal></product-modal>
    </slide-x-right-transition>
    <efooter></efooter>
  </div>
</template>

<script>

  import Eheader from '@/components/layout/Eheader.vue'
  import Efooter from '@/components/layout/Efooter.vue'

  import ProductModal from '@/components/ProductModal.vue'





  import { SlideXRightTransition,ZoomCenterTransition } from 'vue2-transitions'


  import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'

  export default {
    name: 'app',
    components: {
      Eheader,
      Efooter,
      ProductModal,
      SlideXRightTransition,
      ZoomCenterTransition,
    },
    data() {
      return {
        loading: false,
      }
    },
  }
</script>

<style lang="scss">
  @import './assets/styles/custom-boostrap.scss';
  @import 'bootstrap/scss/bootstrap.scss';
  @import './assets/styles/styles.scss';
</style>