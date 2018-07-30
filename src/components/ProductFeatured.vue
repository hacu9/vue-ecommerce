<template>
  <div class="featured-container">
   
  
      <swiper @resize="handleResize" :options="swiperOption">
        <swiper-slide v-for="(product,n) in featuredProducts" 
        :key="product.key"
        :class="['shadow up  slide', 'slide-' + (n + 1)]" > 
        
          <router-link :to="{name: 'ProductModal', params: {id: product.id}}" >

           </router-link>
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->

      </swiper>
 
  </div>
</template>

<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'

  export default {
    name : 'product-featured',
     components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }
    },
    methods: {
    handleResize() {
      if(window.innerWidth < 580){
        this.swiperOption.slidesPerView = 2
      }else {
        this.swiperOption.slidesPerView = 3
      }
     }
    },
    beforeCreate(){
        
    },
    computed: {
      ...mapState(['featuredProducts'])
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: transparent;
  }
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide{
      height:300px;
    }
    &.slide-1 {
      background-image:url('../assets/img/1.jpg');
        // background-image: url(../assets/img/1.jpg);
    }
    &.slide-2 {
      background-image:url('../assets/img/2.jpg');
    }
    &.slide-3 {
      background-image:url('../assets/img/3.jpg');
    }
    &.slide-4 {
      background-image:url('../assets/img/4.jpg');
    }
    &.slide-5 {
      background-image:url('../assets/img/5.jpg');
    }
  }
</style>