<template>
    <div class="">
        <div class=" px-0 pt-4 bg-primary tree-view-wrapper text-white text-shadow">
            <div>
             
                    <div v-if="categories" :key="1">
                           <fade-transition group>
                        <menu-item class="tree-view-root " v-for="node in categories" :key="node.id" :id="node.id" :label="node.name" :nodes="node.sublevels"
                            :depth="0">
                        </menu-item>
                          </fade-transition>
                    </div>

                    <div class="filter p-2 tree-view-root" :key="2">
                        <h5>Filtrar</h5>
                        <!-- @click="showFilter = !showFilter" -->
                        <filters v-show="showFilter"></filters>
                    </div>

                    <div class="order p-2 tree-view-root" :key="3">
                        <h5>Ordenar</h5>
                        <!-- @click="showOrder = !showOrder" -->
                        <order v-show="showOrder"></order>
                    </div>
           
            </div>
        </div>

    </div>
</template>

<script>
    import {
        FadeTransition
    } from 'vue2-transitions'
    import MenuItem from './MenuItem.vue'
    import Filters from './Filters.vue'
    import Order from './Order.vue'
    import {
        mapState
    } from 'vuex';
    export default {
        name: 'emenu',
        components: {
            MenuItem,
            Filters,
            Order,
            FadeTransition
        },
        data() {
            return {
                showFilter: true,
                showOrder: true
            }
        },
        computed: {
            ...mapState(['categories'])
        },
    }
</script>

<style>
</style>