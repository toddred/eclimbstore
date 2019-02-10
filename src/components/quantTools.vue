<template>
  <div>
    <b-btn-toolbar>
      <b-btn-group class="mx-1">
        <b-btn outline-primary @click="addItem">+</b-btn>
        <b-btn>-</b-btn>
      </b-btn-group>
      <b-btn-group class="mx-1">
        <b-btn>Remove</b-btn>
      </b-btn-group>
    </b-btn-toolbar>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    name: "quant-tools",

    methods:{
        addItem:function(){
          this.$store.commit('addItem')
        }
    },
        computed:mapState([
    'carts',
  ])
}
</script>
