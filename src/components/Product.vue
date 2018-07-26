<template>
 <div class="card d-flex product" @mouseover="details = true" @mouseout="details = false">
   <router-link :to="{name: 'ProductModal', params: {id: product.id}, 
query: {product}}">
  <img class="card-img-top" src="../assets/img/1.jpg" alt="Card image cap" >

  <span class="badge badge-primary" style="    position: absolute;
    right: -27px;
    border-radius: 40px;
    padding: 9px;">{{product.price | toUSD}}</span>


  <div class="card-body p-0 d-flex card-body-inner" style="" v-if="details">
   
      <slide-x-right-transition>
    <div class="card-upper text-center col p-2" >
    <h5 class="card-title">{{product.name}} id({{product.sublevel_id}}) {{product.available}} </h5>
    <p class="card-text">{{product.price | toUSD}} - Q({{product.quantity}})</p>
    </div>
      </slide-x-right-transition>


     <scale-transition >
    <div class="card-bottom d-flex col  align-items-end justify-content-center"  >
      <button href="#" class="btn btn-primary left"  >Buy</button>
      <button href="#" class="btn btn-primary right" >Cart</button>
    </div>
       </scale-transition>


  </div>

  </router-link>

  
</div>

</template>

<script>
  import { SlideXRightTransition,ScaleTransition } from 'vue2-transitions'

export default {
  name: 'product',
  props: ['product'],
  components: {
    SlideXRightTransition,ScaleTransition
  },
  data() {
    return { details: false}
  },
    methods : {
      showDetails() {
        this.details =  true
        console.log(this.product.id)
      },
      src() {
        // return 'https://loremflickr.com/320/240/product?random=' + Math.floor((Math.random() * 1000) + 1);
        return '../assets/img/1.jpg'
      }
    },
}
</script>

<style >


</style>
