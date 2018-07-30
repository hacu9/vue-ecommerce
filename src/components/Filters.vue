<template>
    <div class="tree-view-wrapper filter-wrapper" >

        <!-- <switches  label="Disponibilidad"  
         theme="bulma" 
        color="primary" :emit-on-mount="false"></switches> -->

        <p-check class="p-icon p-plain p-tada" toggle v-model="available">
        <font-awesome-icon icon="eye-slash" slot="extra" />
        Disponibles

        <font-awesome-icon icon="eye" slot="off-extra" />
        <label slot="off-label">Disponibles</label>
    </p-check>

     

        <vue-slider v-model="sliderFilter" :dotSize="20"
        :min="min" :max="max" 
        height="8" :tooltipDir="['bottom','top']" 
        :bgStyle="sliderStyles.bgStyle"
        :tooltipStyle="sliderStyles.tooltipStyle"
        :processStyle="sliderStyles.processStyle"
        :sliderStyle="sliderStyles.dotColors"
        formatter="${value}"
        :lazy="true"
        ></vue-slider>
         <br><br>
        <vue-slider v-model="stock" :dotSize="20"
        height="8" :interval="100" :min="0" :max="stockMax"
        :piecewise="true"  :lazy="true"
        tooltipDir="left" >
        </vue-slider>
    </div>
</template>

<script>
    import Switches from 'vue-switches';
    import vueSlider from 'vue-slider-component';

    import PrettyInput from 'pretty-checkbox-vue/input';
    import PrettyCheck from 'pretty-checkbox-vue/check';
    import PrettyRadio from 'pretty-checkbox-vue/radio';

    import { mapState } from 'vuex'

    var primary = '#00bfff';
    var secondary = '#343e3d' 
    export default {
        components: {
            Switches,
            vueSlider,
            'p-input': PrettyInput,
            'p-check': PrettyCheck,
            'p-radio': PrettyRadio,
        },
         mounted() {
            //  var _this = this
            // this.$bus.$on('setUpMaxMin',(x) => {
            //     _this.max = x.max
            //     _this.min = x.min
            //     _this.value = [x.min,x.max]
            //     _this.stock = x.stock
            //     _this.stockMax = _.ceil(x.stock,-2)
            // })
        },
        computed: {
            ...mapState(['max','min','stock','stockMax']),
             sliderFilter: {
                get() {
                    return this.$store.state.sliderFilter
                },
                set(value) {
                    this.$store.commit('updateRanges',value)
                }
            },
             stock: {
                get() {
                    return this.$store.state.stock
                },
                set(value) {
                    this.$store.commit('updateStock',value)
                }
            },
            available: {
                get() {
                    return this.$store.state.available
                },
                set(value) {
                    this.$store.commit('updateAvailable',value)
                }
            }
        },
        data() {
            return {
                sliderStyles: {
                    bgStyle: {
                        "backgroundColor": "#fff",
                        "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
                    },
                    dotColors: [{
                            "backgroundColor": primary
                        },
                        {
                            "backgroundColor": primary
                        }
                    ],
                    tooltipStyle: [{
                            "backgroundColor": "#3498db",
                            "borderColor": "#3498db"
                        },
                        {
                            "backgroundColor": "#3498db",
                            "borderColor": "#3498db"
                        }
                    ],
                    processStyle: {
                        "background": secondary
                    },
                }
            }
        },
    }
</script>


<style lang="scss">
@import 'pretty-checkbox/src/pretty-checkbox.scss';

</style>