<template>
  <div class="Cart">
    <b-card title="Cart">
    <p>started on {{carts.createdOn.toLocaleDateString()}}</p>
      <cart-item></cart-item>
      <h4>Sub total: ${{cartTotal.toLocaleString()}}</h4>
      <b-button>Place Order</b-button>
    </b-card>
  </div>
</template>
<script>
import cartItem from "../components/cartItem";
import { mapState } from "vuex";
export default {
  components: {
    cartItem
  },
  computed:{
    cartTotal(){
      return this.$store.getters.cartTotal;
    },
    ...mapState(["cust", "carts"])
  }
};
</script>
