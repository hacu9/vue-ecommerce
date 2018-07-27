<template>
    <div class="row">
      
            <div class="col" @click="sortProducts('price')"> 
                <font-awesome-icon 
            :icon="oPrice ? 'chevron-circle-up' : 'chevron-circle-down' " 
            pull="left" /> Precio </div>
            
            <div class="col" @click="sortProducts('available')">
                <font-awesome-icon 
            :icon="oAvaliable  ? 'chevron-circle-up' : 'chevron-circle-down' " 
            pull="left" /> Disponibilidad </div>

            <div class="col" @click="sortProducts('quantity')">
                <font-awesome-icon 
            :icon="oQuantity  ? 'chevron-circle-up' : 'chevron-circle-down' " 
            pull="left" />  Cantidad</div>

    <div class="w-100 p-2"></div>

    <scale-transition group class="row">
        <product class="col-sm-4 col-xs-12 col-lg-3 m-2 card shadow up p-0" 
        v-for="(product,n) in sorted" 
        :product="product" 
        :key="product.id" v-if="filterBy(product)" 
        />
    </scale-transition>
    <!-- <button @click="limit++">+</button> -->
    </div>
</template>

<script>
    import Product from './Product.vue'
    import { ScaleTransition } from 'vue2-transitions'
    import _  from 'lodash'
    export default {
        name: 'Products',
        components: {
            Product,
            ScaleTransition
        },
        data() {
            return {
                data: null,
                limit: 6,
                cat: null,
                sortBy:null,
                oPrice:null,
                oAvaliable: null,
                oQuantity:null,
                sorted:[],
                priceRange:{},
                avaliable:false,
                stock:999999
            }
        },
        computed : {
             
        },
        methods: {
            productsOrdered() {
                 
                  let sortedData = []
                  let order = []
                  let data = this.data

                if(this.oAvaliable){
                    sortedData.push('available')
                    order.push('desc')

                }else if(!this.oAvaliable && this.oAvaliable != null){
                     sortedData.push('available')
                    order.push('asc')
                    // sortedData = _.orderBy(sortedData,'available','asc')
                }

                 if(this.oQuantity ){
                    sortedData.push('quantity')
                    order.push('desc')

                }else if(!this.oQuantity && this.oQuantity != null){
                     sortedData.push('quantity')
                    order.push('asc')

                    // sortedData = _.orderBy(sortedData,'quantity','asc')
                }

                if(this.oPrice){
                    sortedData.push('price')
                    order.push('desc')
                    // sortedData = _.orderBy(sortedData,'price','desc')
                }else if(!this.oPrice && this.oPrice != null){
                    sortedData.push('price')
                    order.push('asc')
                    // sortedData = _.orderBy(sortedData,'price','asc')
                }
              console.log(sortedData,order)
              
              this.sorted =  _.orderBy(data, sortedData, order)

            },
            filterBy(product) {
                var flag = true
                if(this.cat) {
                    flag = product.sublevel_id == this.cat
                } 

                 if(!(product.price <= this.priceRange.max && product.price >= this.priceRange.min)) {
                    flag = false
                }
                if(!product.available && this.avaliable){
                    flag = false
                }
                if(product.quantity > this.stock){
                    flag = false
                }
                
                return flag
            },
            sortProducts(by){
                this.sortBy = true
                console.log(by)
                switch(by){
                    case 'price': {
                      this.oPrice =  !this.oPrice 
                        break;
                    }
                    case 'available': {
                      this.oAvaliable =  !this.oAvaliable
                        break;
                    }
                     case 'quantity': {
                       this.oQuantity =  !this.oQuantity
                        break;
                    }
                }
                this.productsOrdered()
            },
            parsetoNum(x){
                if(typeof(x) == 'number') return
               return Number(x.substring(1).replace(',','.'))
            }
        },
        mounted() {
             var _this = this

             this.$bus.$on('filterPrice',(a) => {
                 _this.priceRange = a
            })

            this.$bus.$on('filterAvaliable',(avaliable) => {
                 _this.avaliable = avaliable
            })

            this.$bus.$on('filterStock',(stock) => {
                 _this.stock = stock
            })
        },
        created() {
            var _this = this

            this.$bus.$on('filterCat', (c) => {
                _this.cat = c
            })

            

            fetch('/products.json')
                .then((res) => res.json())
                .then((json) => {
                    _this.data = json.products
                    _this.sorted = json.products.map((x) => {
                        x.price = this.parsetoNum(x.price)
                        return x
                    })

                  var MaxMin = {max : _.maxBy(_this.data,'price').price,
                                min : _.minBy(_this.data,'price').price,
                                stock:_.maxBy(_this.data,'quantity').quantity}
                     this.$bus.$emit('setUpMaxMin',MaxMin)

                })
        }
    }
</script>

<style>
</style>