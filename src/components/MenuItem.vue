<template>
    <div  :class="depth >= 1 ? 'tree-view-child' : 'depth ' + depth  ">
        <div class="tree-wrapper p-2" @click="[showSublevel()]"  
        :class="filterCat == id ? 'active' : ''">
            <font-awesome-icon v-if="nodes" 
            :icon="showChildren ? 'minus-circle' : 'plus-circle' " 
            pull="left"
            />

            <p :style="indent" @click="updateFilterCat(id)">{{label}} ({{id}}) </p>
        </div>
        <collapse-transition group tag="div" >
         <menu-item :key="node.id" :id="node.id" v-if="showChildren" 
            v-for="node in nodes" :label="node.name" 
            :nodes="node.sublevels" :depth="depth + 1"  
            > 
        </menu-item>
        </collapse-transition>
    </div>
</template>

<script>
    import { mapMutations,mapState } from 'vuex'
    import {
            CollapseTransition
        } from 'vue2-transitions'
    export default {
        name: 'menu-item',
        components : {
            CollapseTransition
        },
        props: [
            'label',
            'nodes',
            'depth',
            'id',
        ],
        data() {
            return {
                showChildren: false,
            }
        },
        watch:  {
           filterCat() {
           if(!this.nodes && this.id == this.filterCat){
                // console.log('final',this.id)
                 this.$store.commit('showSearch')
           }else if(this.$store.state.searchVisible  && this.nodes){
            //    console.log('hide')
                   this.$store.commit('hideSearch')
               }
          
           }
        },
        methods: {
            showSublevel() {
                this.showChildren = !this.showChildren
            },
            ...mapMutations(['updateFilterCat'])
        },
        computed: {
            indent() {
                return {
                    transform: `translate(${this.depth * 20}px)`
                }
            },
             ...mapState(['filterCat'])
        }
    }
</script>

<style>
</style>