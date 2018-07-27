<template>
    <div class="tree-view-wrapper filter-wrapper">
        <p>Filtrar por: </p>
        <switches v-model="avaliable" label="Disponibilidad"  
        @input="filterAvaliable()" theme="bulma" 
        color="primary" :emit-on-mount="false"></switches>

        <vue-slider v-model="value" :dotSize="20"
        :min="min" :max="max" 
        height="8" :tooltipDir="['bottom','top']" 
        :bgStyle="sliderStyles.bgStyle"
        :tooltipStyle="sliderStyles.tooltipStyle"
        :processStyle="sliderStyles.processStyle"
        :sliderStyle="sliderStyles.dotColors"
        :callback="filterPrice()"
        formatter="${value}"
        :lazy="true"
        ></vue-slider>
         <br><br>
        <vue-slider v-model="stock" :dotSize="20"
        height="8" :interval="100" :min="0" :max="stockMax"
        :piecewise="true"  :lazy="true"
        tooltipDir="left" @callback="filterStock()">
        </vue-slider>
    </div>
</template>

<script>
    import Switches from 'vue-switches';
    import vueSlider from 'vue-slider-component';

    export default {
        components: {
            Switches,
            vueSlider
        },
         mounted() {
             var _this = this
            this.$bus.$on('setUpMaxMin',(x) => {
                _this.max = x.max
                _this.min = x.min
                _this.value = [x.min,x.max]
                _this.stock = x.stock
                _this.stockMax = _.ceil(x.stock,-2)
            })
        },
        data() {
            return {
                avaliable: false,
                value: [1,100],
                max:100,
                min:0,
                stock:15,
                stockMax:200,
                sliderStyles: {
                    bgStyle: {
                        "backgroundColor": "#fff",
                        "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
                    },
                    dotColors: [{
                            "backgroundColor": "#f05b72"
                        },
                        {
                            "backgroundColor": "#3498db"
                        }
                    ],
                    tooltipStyle: [{
                            "backgroundColor": "#f05b72",
                            "borderColor": "#f05b72"
                        },
                        {
                            "backgroundColor": "#3498db",
                            "borderColor": "#3498db"
                        }
                    ],
                    processStyle: {
                        "backgroundImage": "-webkit-linear-gradient(left, #f05b72, #3498db)"
                    },
                }
            }
        },
        methods : {
            filterPrice() {
            this.$bus.$emit('filterPrice',{min:this.value[0],   max:this.value[1]})
            },
            filterAvaliable() {
            this.$bus.$emit('filterAvaliable',this.avaliable)
            },
            filterStock(){
            this.$bus.$emit('filterStock',this.stock)
            }
        },
    }
</script>

<style>
</style>