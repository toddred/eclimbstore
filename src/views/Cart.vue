<template>
  <div class="Cart">
    <b-card title="Cart">
      <p>Started on {{carts.createdOn.toLocaleDateString()}}</p>
      <b-table :items="items">
        <template slot="Modify" slot-scope="computed">
          <quant-tools :cartItemId="computed.value"></quant-tools>
        </template>
      </b-table>
      <b-row>
        <b-col align-self="center">
          <b-button variant="outline-info">Place Order</b-button>
        </b-col>
        <b-col align-self="end">
          <h4 class="pull-right">Sub total: ${{cartTotal.toLocaleString()}}</h4>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
// import cartItem from "../components/cartItem";
import quantTools from "../components/quantTools";
import { mapState } from "vuex";
export default {
  components: {
    // cartItem,
    quantTools
  },
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
    items() {
      return this.$store.getters.items;
    },
    ...mapState(["cust", "carts"])
  }
};
</script>
