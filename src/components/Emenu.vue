<template>
     <div class="">
         <div v-if="data.categories" >
        <menu-item 
        class="tree-view-root"
        v-for="node in data.categories" 
        :key="node.id"
        :id="node.id"
      :label="node.name" 
      :nodes="node.sublevels" 
      :depth="0"
      > 
      
      </menu-item>
     </div>
     
    <div>
        filters

        disponibilidad, rango de precios, cantidad en
stock.
    </div>

     </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'emenu',
  components: {
      MenuItem
  },
  data() {
      return {data: {}}
  },
  methods: {
    filterCat(a) {
        

}
  },
  created() {
      var _this = this
    fetch('/categories.json')
      .then((res) => res.json())
      .then((json) => {
         
          _this.data = json
      }) 
  },
 
}
</script>

<style>

</style>
