<template>
  <div>
    <b-btn-toolbar>
      <b-btn-group class="mx-1">
        <b-btn variant="outline-info" @click="addItemButton">+</b-btn>
        <b-btn variant="outline-info" @click="minusItemButton">-</b-btn>
      </b-btn-group>
      <b-btn-group class="mx-1">
        <b-btn variant="outline-danger" @click="removeItemButton">Remove</b-btn>
      </b-btn-group>
    </b-btn-toolbar>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: "quant-tools",
  props:['cartItemId'],
    methods:{
        addItemButton:function(){
          this.$store.commit('addItem',this.cartItemId)
        },
        minusItemButton:function(){
          this.$store.commit('minusItem',this.cartItemId)
        },
        removeItemButton:function(){
          this.$store.commit('removeItem',this.cartItemId)
        }
    },
        computed:mapState([
    'carts',
  ])
}
</script>
