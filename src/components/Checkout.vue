<template>
    <div class="container-fluid h-100"  >
        <div class="row">
            <slide-x-left-transition :duration='800' v-if="show">
            <div class="col-4 text-center bg-secondary p-5 checkout-inner checkout-left">
                <h2 class="">Resumen</h2>
            <div class="p-4 row">
                <div class="col">
                    Orden
                </div>
                <div class="col">
                    <h3>$29</h3>
                </div>
            </div>

            <div class="p-4 row">
                <div class="col">
                    Orden
                </div>
                <div class="col">
                    <h3>$29</h3>
                </div>
            </div>

            <div class="p-4 row">
                <div class="col">
                    Orden
                </div>
                <div class="col">
                    <h3>$29</h3>
                </div>
            </div>
           
            </div>

        </slide-x-left-transition>

        <slide-x-right-transition :duration='800' v-if="show">
            <div class="col-8 text-center bg-primary p-5 checkout-inner checkout-right">
                  <h2 class="">Resumen</h2>
            <div class="p-4 row">
                <div class="col">
                    Orden
                </div>
                <div class="col">
                    <h3>$29</h3>
                </div>
            </div>

            <div class="p-4 row">
                <div class="col">
                    Orden
                </div>
                <div class="col">
                    <h3>$29</h3>
                </div>
            </div>

            <div class="p-4 row">
                <div class="col">
                    Orden
                </div>
                <div class="col">
                    <h3>$29</h3>
                </div>
            </div>
            </div>
        </slide-x-right-transition>

        <slide-y-up-transition :duration='1000' :delay="2" v-if="show"> 
            <div class="col bg-primary text-center bg-primary p-5 checkout-inner checkout-bottom" >
                <div class="row">
                    <div class="col">
                        <button class="btn btn-outline-secondary">asdasd</button>
                    </div>
                    <div class="col">
                        <button class="btn btn-outline-secondary">asdasd</button>

                    </div>
                </div>
            </div>
        </slide-y-up-transition>

        </div>
        
    </div>
</template>

<script>
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
        data() {
            return {show:true}
        }
    }
</script>

<style>
.checkout-inner{
    height:60vh;
}
</style>