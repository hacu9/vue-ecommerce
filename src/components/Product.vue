<template>
 <div :class="'card d-flex product'"  
    @mouseover="details = true"  @mouseout="details = false" >
   <router-link :to="{name: store ? 'ProductModalStore' : 'ProductModal' , params: {id:product.id}}">
  <img :class="['card-img-top',product.available ? '' : 'product-disabled']" 
  :src="product.src" alt="Card image cap" >

  <span class="badge badge-primary flying-badge" style="">{{product.price | toUSD}}</span>


  <div class="card-body p-0 d-flex card-body-inner" style="" v-if="details">
   
      <slide-x-right-transition>
    <div class="card-upper text-center col p-2" >
    <h4 class="card-title">{{product.name}} id({{product.sublevel_id}}) {{product.available}} </h4>
    <p class="card-text">{{product.price | toUSD}} - Q({{product.quantity}})</p>
    </div>
      </slide-x-right-transition>


     <scale-transition >
    <div class="card-bottom d-flexalign-items-end justify-content-center"  v-if="product.available">
      <button @click="saveToCart(product)" href="#" class="btn btn-outline-secondary btn-block  p-2 "  >Agregar al Carrito</button>
    </div>
       </scale-transition>


  </div>

  </router-link>
</div>

</template>

<script>
  import { SlideXRightTransition,ScaleTransition } from 'vue2-transitions'
    import { mapMutations } from 'vuex'


export default {
  name: 'product',
  props: ['product'],
  components: {
    SlideXRightTransition,ScaleTransition
  },
  data() {
    return { details: false,store:false}
  },
    methods : {
       ...mapMutations(['saveToCart'])
    },
    created() {
     this.$route.name == 'store' ? this.store = true : ''
    }
}
</script>

<style >
.product-disabled{
  opacity:0.7;
}
.flying-badge{
      position: absolute;
    right: -27px;
    border-radius: 40px;
    padding: 9px;
}
.card-title,.card-text{
  text-shadow:1px 2px 8px black;
}
</style>
