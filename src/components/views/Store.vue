<template>
    <div class="store p-5">
        
            <div v-if="searchVisible" class="row justify-content-center mb-4">
            <search></search>
         </div>
        
        <div class="row">
            
                <emenu class="mr-lg-5 col-sm-4 col-md-3 col-lg-2 col-6  align-self-baseline menu-container"></emenu>
          
            <div class="col-6 col-lg-9 col-md-9 col-sm-8">
                <products class="products"></products>
            </div>
        </div>
    </div>
</template>

<script>
import Products from '@/components/Products.vue'
import Emenu from '@/components/Emenu.vue'
import Search from '@/components/Search.vue'

  import {
        FadeTransition
    } from 'vue2-transitions'

import { mapState } from 'vuex'


export default {
components: {
    Products,
    Emenu,
    Search,
    FadeTransition
    },
    computed: {
        ...mapState(['searchVisible'])
    }
}
</script>

<style>

</style>
