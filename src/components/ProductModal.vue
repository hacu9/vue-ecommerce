<template>
    <div class="product-modal  mt-5" v-if="product && !closed">
        <div class="product-modal-inner">
            <font-awesome-icon icon="chevron-right" @click="closed = true" 
            style="color:white;position: absolute;
    left: 5px;
    z-index: 999;
    top: 17px;
    color: white;cursor:pointer" />
        <img src="@/assets/img/1.jpg" style="height:290px"  class="" alt="">
        <div class=" p-3">
            <h3>{{product.name}} <span class="badge badge-secondary">{{product.quantity}}</span></h3> 
            <h2>{{product.price}}</h2>
            {{$route.params.id}} {{product}}
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: null,
                closed:false
            }
        },
        created() {
        
        },
        methods: {
            setUpProduct() {
                this.product = null
                this.closed = false

                var _this = this
                fetch('/products.json')
                    .then((res) => res.json())
                    .then((json) => {
                       var products = json.products.filter((x) => x.id == this.$route.params.id)
                        _this.product = products[0]
                        console.log(_this.product)
                    })
            }
        },
        watch: {
            // call again the method if the route changes
            '$route': 'setUpProduct'
        },
    }
</script>

<style>
</style>