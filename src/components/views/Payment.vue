<template>
    <div class="container-fluid"  >
        <div class="row">
            <slide-x-left-transition :duration='800' v-show="show">
            <div class="col-md-4 col-sm-12 text-center p-5 checkout-inner checkout-left  ">
                 <div>
                        <h2 class="">Payment</h2>
                    <div class="row py-3 mt-3 align-items-center">
                        <div class="col">
                            <font-awesome-icon icon="credit-card" class="fa-8x up"></font-awesome-icon>
                        </div>
                    </div>

                    <div class="row py-3 align-items-center">
                        <div class="col">
                            <font-awesome-icon icon="credit-card" class="fa-8x up"></font-awesome-icon>
                        </div>
                    </div>
              </div>
            </div>

        </slide-x-left-transition>

        <slide-x-right-transition :duration='800' v-show="show">
            <div class="col-md-8 cart col-sm-12 text-center  text-white text-shadow bg-primary p-5 checkout-inner checkout-right  ">
                <div class="row p-5">
                  
                    <div class="col-6"><h5 class="">Total {{productsInCart.length}} articulos</h5></div>
                    <div class="col-6"><h5 class="">{{(price + shipping )| toUSD}}</h5></div>
                    </div>                   
            

               <div class="row p-5">
                   <div class="col">
                       Numero de Tarjeta
                       <input type="number" class="form-control">
                   </div>
                </div> 

                 <div class="row p-5">
                   <div class="col-4">
                       Mes 
                       <input type="number" class="form-control">
                   </div>

                    <div class="col-4">
                       Año
                       <input type="number" class="form-control">
                   </div>

                    <div class="col-4">
                       CVV
                       <input type="number" class="form-control">
                   </div>
                </div> 
                
                <div class="">
                    <button class="btn btn-outline-secondary" @click="purchase()">Comprar</button>
                </div>
            </div>
        </slide-x-right-transition>

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
            ...mapState(['productsInCart','price','shipping'])
        },
        data() {
            return {show:true,card:0}
        },
        methods: {
           ...mapMutations(['purchase'])
        },
    }
</script>

<style>
/* .checkout-inner{
    height:60vh;
} */
</style>