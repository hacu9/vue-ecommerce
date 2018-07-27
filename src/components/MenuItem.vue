<template>
    <div  :class="depth >= 1 ? 'tree-view-child' : 'depth ' + depth  ">
        <div class="tree-wrapper p-2" @click="[showSublevel(),chooseCat(id)]"  
        :class="cat == id ? 'active' : ''">
            <font-awesome-icon v-if="nodes" 
            :icon="showChildren ? 'minus-circle' : 'plus-circle' " 
            pull="left"
            />

            <p :style="indent" >{{label}} ({{id}}) </p>
        </div>

         <menu-item :key="node.id" :id="node.id" v-if="showChildren" 
            v-for="node in nodes" :label="node.name" 
            :nodes="node.sublevels" :depth="depth + 1"  
            @chooseCat="chooseCat($event)" :cat="cat"> 
        </menu-item>
    </div>
</template>

<script>
    export default {
        name: 'menu-item',
        props: [
            'label',
            'nodes',
            'depth',
            'id',
            'cat'
        ],
        data() {
            return {
                showChildren: false,
               
            }
        },
        methods: {
            showSublevel() {
                this.showChildren = !this.showChildren
            },
            chooseCat(node) {
                this.$bus.$emit('filterCat',node)
            },
        },
        computed: {
            indent() {
                return {
                    transform: `translate(${this.depth * 20}px)`
                }
            }
        }
    }
</script>

<style>
</style>