<template>
  <div id="app">

    <div v-if="loading" style="
    background: rgba(0,0,0,1);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;">
      <breeding-rhombus-spinner :animation-duration="2000" :size="65" color="#ff1d5e" />
    </div>

    <eheader></eheader>
     <router-view name="fWidth"></router-view>
    <div class="container-fluid p-5 mx-auto">

      <!-- <slider></slider> -->

      <div class="row ">
        <router-view class="col-sm-3 col-lg-2 col-4 px-0 pt-4 bg-primary tree-view-wrapper" name="nav"></router-view>

        <div class="col-sm-9  col-lg-10 col-8">
          <router-view></router-view>
        </div>
      </div>

    </div>

 <slide-x-right-transition :duration='800'>
    <product-modal></product-modal>
 </slide-x-right-transition>
    <efooter></efooter>
  </div>
</template>

<script>
  import Eheader from './components/layout/Eheader.vue'
  import Efooter from './components/layout/Efooter.vue'

  import ProductModal from './components/ProductModal.vue'




  import { BreedingRhombusSpinner } from 'epic-spinners'

  import { SlideXRightTransition } from 'vue2-transitions'




  import bootstrap from 'bootstrap/dist/js/bootstrap.min.js'
  import jquery from 'jquery/dist/jquery.min.js'
  import popper from 'popper.js/dist/popper.min.js'


  export default {
    name: 'app',
    components: {
      Eheader,
      Efooter,
      BreedingRhombusSpinner,
      ProductModal,
      SlideXRightTransition
    },
    data() {
      return {
        data: {
          cat: null
        },
        loading: true
      }
    },
    created() {
      this.$bus.$on('loaded', () => {
        this.loading = false
      })
    },
    mounted() {

    },
  }
</script>

<style lang="scss">
  @import './assets/styles/custom-boostrap.scss';
  @import 'bootstrap/scss/bootstrap.scss';
  @import './assets/styles/styles.scss';
</style>