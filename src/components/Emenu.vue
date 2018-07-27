<template>
     <div class="">
         <div v-if="data.categories" >
        <menu-item 
        class="tree-view-root "
        v-for="node in data.categories" 
        :key="node.id"
        :id="node.id"
      :label="node.name" 
      :nodes="node.sublevels" 
      :depth="0"
      :cat="cat"
      > 
      
      </menu-item>
     </div>
     
    <div>
     <div class="filter p-2 tree-view-root">
         <h5>Filtros</h5>
        <filters></filters>
     </div>
    </div>

     </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

import Filters from './Filters.vue'


export default {
  name: 'emenu',
  components: {
      MenuItem,
      Filters
  },
  data() {
      return {
          data: {},
          cat:null
          }
  },
  methods: {
    filterCat(a) {
    }
  },
  created() {
      _this = this
      this.$bus.$on('filterCat',(cat) => _this.cat = cat)

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
