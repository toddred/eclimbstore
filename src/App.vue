<template>
  <div id="app">
    <div @click="clearTemp">
          <app-header/>
    <b-container>
      <div v-if="tempMsg">
        <b-alert ref="myAlert" show>{{tempMsg}}</b-alert>
      </div>
      <router-view/>
    </b-container>
    </div>
  </div>
</template>
<script>
import appHeader from "./components/appHeader"
import { mapState } from 'vuex'
export default {
  components:{
    appHeader,
    
  },
  computed: mapState(["tempMsg"]),
  methods:{
    clearTemp: function() {
      this.$store.commit("clearTemp")
    }
  } 
}
</script>


<style>

</style>
