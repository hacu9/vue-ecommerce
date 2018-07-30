<template>
  <div id="home">
     <div class="home-slider">
        <slider></slider>
      </div>

    <div class="container-fluid">

     <section class="container py-5 text-center" >
       <div class="featured  ">
        <h3 class="py-4 title ">Welcome touchRatio</h3>
          
         <p class="px-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam numquam commodi totam,
            esse exercitationem sunt voluptate qui omnis autem suscipit est reiciendis molestiae quasi quod incidunt error magni quas voluptas?
       <p/>
      </div>
     </section>


      <section class="container py-5">
        <div class="featured  text-center">
        <h3 class="py-4 title">Ofertas</h3>
          
        <product-featured></product-featured>
      </div>
      </section>

      <div class="skew-container container-fluid">
        <div class="skew-decorator bg-primary ">
        </div>
      </div>

      <section class="container py-5">
        <div class="text-center ">
         <h3 class="py-4 title">Los mas vendidos</h3>
          
        <div class=" ">

        <!-- <div class="col-sm-9  col-lg-10 col-8"> -->
          <div class="col">
          <products :limit="9" class="products justify-content-center"></products>
          </div>

        </div>
          <router-link class="btn btn-outline-secondary" :to="{name: 'store'}" >
            Ver todos
            </router-link>
       </div>
       </section>

    </div>

  </div>
</template>

<script>

  import Eheader from '@/components/layout/Eheader.vue'
  import Efooter from '@/components/layout/Efooter.vue'

  import Products from '@/components/Products.vue'

  import ProductFeatured from '@/components/ProductFeatured.vue'

  import Slider from '@/components/Slider.vue'

  import { SlideXRightTransition } from 'vue2-transitions'


  export default {
    name: 'home',
    components: {
      Eheader,
      Efooter,
      SlideXRightTransition,
      Slider,
      ProductFeatured,
      Products
    },
    data() {
      return {
        data: {
          cat: null
        },
        loading: false
      }
    },
    created() {
      this.$store.state.filterCat = null
    },
    mounted() {
    },
  }
</script>

