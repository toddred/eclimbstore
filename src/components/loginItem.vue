
<template>
  <div>
    <b-form inline>
      <b-input size="sm" class="mb-2 mr-sm-2 mb-sm-0" id="username" placeholder="Username"/>
      <b-input type="password" id="passwordg" size="sm" placeholder="Password"/>
      <b-button size="sm" variant="outline-primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "login-item",
  computed: mapState(["cust"]),
};
</script>

<style>
</style>
