<template>
         <div class="">
                <div class="col" @click="orderPrice = !orderPrice"> 
                <font-awesome-icon 
            :icon="orderPrice ? 'chevron-circle-up' : 'chevron-circle-down' " 
            pull="left" /> Precio </div>
            
            <div class="col" @click="orderAvailable = !orderAvailable">
                <font-awesome-icon 
            :icon="orderAvailable  ? 'chevron-circle-up' : 'chevron-circle-down' " 
            pull="left" /> Disponibilidad </div>

            <div class="col" @click="orderQuantity = !orderQuantity">
                <font-awesome-icon 
            :icon="orderQuantity  ? 'chevron-circle-up' : 'chevron-circle-down' " 
            pull="left" />  Cantidad</div>
            </div>
</template>

<script>
import { mapState } from 'vuex'


export default {
    name: 'order',
    computed : {
        ...mapState(['orderPrice','orderAvailable','orderQuantity']),
         orderPrice: {
                get() {
                    return this.$store.state.orderPrice
                },
                set(value) {
                    this.$store.commit('updateorderPrice',value)
                }
         },
         orderAvailable: {
                get() {
                    return this.$store.state.orderAvailable
                },
                set(value) {
                    this.$store.commit('updateorderAvaliable',value)
                }
         },
          orderQuantity: {
                get() {
                    return this.$store.state.orderQuantity
                },
                set(value) {
                    this.$store.commit('updateorderQuantity',value)
                }
         },
    },
}
</script>

<style>

</style>
