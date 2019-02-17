<template>
  <div id="nav">
    <b-nav tabs>
      <b-nav-item>
        <router-link to="/">Shop</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/cart">Cart</router-link>
      </b-nav-item>
      <b-nav-item v-if="cust.accountId != null">
        <router-link to="/account">Hi {{cust.firstName}}</router-link>
      </b-nav-item>
      <b-nav-item v-if="cust.accountId == null">
        <login-item></login-item>
      </b-nav-item>
    </b-nav>
    <br>
  </div>
</template>

<script>
import loginItem from "../components/loginItem";
import { mapState } from "vuex";
export default {
  name: "app-header",
  components: {
    loginItem
  },
  computed: mapState(["cust"])
};
</script>

<style>
</style>
