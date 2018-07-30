<template>
    <div class="product-modal  mt-5" v-if="product && !closed">
        <div class="product-modal-inner">
            <font-awesome-icon icon="chevron-right" class="flying-arrow" @click="closed = true" 
            />
        <img :src="src()" style="height:290px"  class="" alt="">
        <div class=" p-3">
            <h2>{{product.name}} <small><span class="badge badge-secondary">{{product.price | toUSD}}</span></small></h2> 

            <div class="row p-4" v-if="product.available">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nesciunt, porro deserunt voluptatum rem excepturi dicta unde corporis sint magnam nisi repellat dolor accusantium nihil quis eligendi cupiditate autem corrupti?
                </p>
                <div class="col">
                    <button  class="btn btn-primary" @click="saveToCart(product)">Carrito</button>
                </div>

                <div class="col"  @click="saveToCart(product)">
                    <router-link :to="{name: 'checkout', params: {product: product}}" 
                     class="btn btn-outline-primary btn-block">
                    Comprar
                     </router-link>
                </div>
            </div>

            <div v-else>
                <p>Producto no disponible, Por favor intenta mas tarde</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations,mapState } from 'vuex'

    export default {
        data() {
            return {
                product: null,
                closed:false
            }
        },
        created() {
        
        },
        computed : {
            ...mapState(['products'])
        },
        methods: {
            setUpProduct() {
                this.product = null
                this.closed = false
                  
                var products = this.products.filter((x) => x.id == this.$route.params.id)
                this.product = products[0]
            },
               src() {
               return 'https://loremflickr.com/320/240/product?random=' + Math.floor((Math.random() * 1000) + 1);
               // return '/img/'+ Math.floor(Math.random() * (5 - 1 + 1)) + 1 +'.jpg'
                },
            ...mapMutations(['saveToCart'])
        },
        watch: {
            // call again the method if the route changes
            '$route': 'setUpProduct'
        },
    }
</script>

<style>
.flying-arrow{
    color:white;position: absolute;
            left: 5px;
            z-index: 999;
            top: 17px;
            color: white;cursor:pointer
}
</style>