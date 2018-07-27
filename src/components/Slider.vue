<template>
    <div>
        <vue-flux
   :options="fluxOptions"
   :images="fluxImages"
   :transitions="fluxTransitions"
   ref="slider">
</vue-flux>

<button @click="$refs.slider.showImage('next')">NEXT</button>
    </div>
</template>

<script>
import { VueFlux, Transitions } from 'ue-flux';
import 'vue-flux/dist/vue-flux.css';
export default {
   components: {
      'vue-flux': VueFlux
   },

   data: () => ({
      fluxOptions: {
         autoplay: true
      },
      fluxImages: [
         'URL1',
         'URL2',
         'URL3'
      ],
      fluxTransitions: {
         transitionTurn3d: Transitions.transitionTurn3d
      }
   })
}
</script>

<style>

</style>
