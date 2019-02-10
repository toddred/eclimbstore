<template>
  <div id="nav">
    <b-nav tabs>
      <b-nav-item>
        <router-link to="/">Shop</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/cart">Cart</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link v-if="cust.firstName != null" to="/account">{{cust.firstName}}</router-link>

      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import loginItem from "../components/loginItem"
import { mapState } from 'vuex';
export default {
  name:"app-header",
  components:{
    loginItem
  },
  computed:(['cust'])
  
};
</script>

<style>
</style>
