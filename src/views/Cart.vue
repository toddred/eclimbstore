<template>
  <div class="Cart">
    <h2>This is {{cust.firstName}}'s cart</h2>
    <p>Cart from {{carts.createdOn.toLocaleString()}}</p>
    <div>
      <b-row>
      <cart-item></cart-item>
      </b-row>
      <h4>Sub total: $209.98*</h4>
    </div>
  </div>
</template>
<script>
import cartItem from "../components/cartItem";
import { mapState } from "vuex";
export default {
  components: {
    cartItem
  },
  computed: mapState(["cust", "carts"])
};
</script>
