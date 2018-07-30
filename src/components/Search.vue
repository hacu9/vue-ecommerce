<template>
    <div>
        <p class="p-1">No encuentras el producto para ti?</p>
     <input type="text" class="form-control" placeholder="Buscar" v-model="searchTerm">
     </div>
</template>

<script>

export default {
    name:'search',
    computed: {
        searchTerm: {
            get() {
               return this.$store.state.searchTerm
            },
            set(value) {
                this.$store.commit('search',value)
            }
        },
    },
}
</script>

<style>

</style>
