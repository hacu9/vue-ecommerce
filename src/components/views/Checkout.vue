<template>
    <div class="container-fluid"  >
        <div class="row">
            <slide-x-left-transition :duration='800' v-show="show">
            <div class="col-md-4 col-sm-12 text-center  p-5 checkout-inner checkout-left order-sm-2 order-md-1">
              <affix  :offset="{ top: 80, bottom: 100 }" relative-element-selector=".cart" style="width: 300px">
                 <div>
                        <h2 class="mt-4">Resumen</h2>
                <div class="p-3 mt-5 row">
                    <div class="col">
                        Total de la Orden
                    </div>
                    <div class="col">
                        <h3>{{getPrice() | toUSD}}</h3>
                    </div>
                </div>

                <div class="p-3 mt-4 row">
                    <div class="col">
                        Envio
                    </div>
                    <div class="col">
                        <h3>{{random | toUSD}}</h3>
                    </div>
                </div>

                <div class="p-3 mt-4 row">
                    <div class="col">
                        Sub Total
                    </div>
                    <div class="col">
                        <h3>{{ getPrice() + random | toUSD }}</h3>
                    </div>
                </div>
              </div>
                  </affix>
            </div>

        </slide-x-left-transition>

        <slide-x-right-transition :duration='800' v-show="show">
            <div class="col-md-8 cart col-sm-12 text-white text-center text-shadow bg-primary p-5 checkout-inner checkout-right order-sm-1 order-md-2">
                  <h2 class="">Carrito</h2>

                    <div class="row p-3" v-for="product in productsInCart" :key="product.id">
                        <div class="col-3">
                            <img :src="product.src" class="img-fluid rounded" alt="">
                        </div>

                        <div class="col-2">
                            {{product.name}}
                        </div>


                          <div class="col-2">
                             <input type="number" @change="changeQuantity(product.id,product.wanted)" v-model.number="product.wanted" class="form-control" > 
                        </div>

                        <div class="col-2">
                            {{product.price * (product.wanted ? product.wanted : 1) | toUSD}} <small>({{product.price | toUSD}})</small>
                        </div>
                       

                        <div class="col-2" @click="removeFromCart(product)">
                             <!-- <font-awesome-icon icon="times-circle"></font-awesome-icon>   -->
                             x
                        </div>
                       
                        <hr>
                    </div>
                    <div class="row p-3 " v-if="productsInCart.length == 0">
                        <h2 class="col">Por favor agrega items para continuar</h2>
                    </div>
            </div>
        </slide-x-right-transition>

        <slide-y-up-transition :duration='1000' :delay="2" v-show="show"> 
            <div class="col bg-primary text-center bg-primary text-shadow text-white  p-5 checkout-inner checkout-bottom order-sm-3" >
                <div class="row justify-content-between">
                    <div class="col-2" @click="$router.go(-1)">
                        <font-awesome-icon icon="chevron-left"></font-awesome-icon> Volver
                    </div>
                 
                    <router-link tag="div" class="col-2" :to="{name: 'payment'}">
                       Proceder a pago <font-awesome-icon icon="chevron-right"></font-awesome-icon> 
                    </router-link>
            
                </div>
            </div>
        </slide-y-up-transition>

        </div>
        
    </div>
</template>

<script>

    import { mapState, mapMutations } from 'vuex'

    import {
        SlideXRightTransition,
        SlideXLeftTransition,
        SlideYUpTransition
    } from 'vue2-transitions'

    export default {
        components: {
            SlideXRightTransition,
            SlideXLeftTransition,
            SlideYUpTransition
        },
        computed: {
            ...mapState(['productsInCart','price'])
        },
        data() {
            return {show:true,random:0}
        },
        methods: {
           ...mapMutations(['removeFromCart','changeQuantity']),
           getPrice() {
               var price = 0
               this.productsInCart.map((x) => {
                   return price += (x.price * x.wanted)
               })
              this.$store.commit('updatePrice',[price,this.random])
               return price
           },
           getShipping() {
               this.random = Math.floor(Math.random() * (100 - 1)) + 1
           }
        },
        created(){
            this.getShipping()
        }
        
    }
</script>

<style>
/* .checkout-inner{
    height:60vh;
} */
</style>