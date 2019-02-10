<template>
  <div id="app">
    <app-header/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>
<script>
import appHeader from "./components/appHeader"
export default {
  components:{
    appHeader,
    
  }
}
</script>

<style>

</style>
