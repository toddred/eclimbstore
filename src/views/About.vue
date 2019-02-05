<template>
  <div class="about">
    <h1>This is {{cust[0].firstName}}'s cart</h1>
    <div v-for="cartItem in cust[0].carts[0].cartItems"
    :key="cartItem.cartItemId">
      <h4>{{cartItem.item.desc}} 
        Quantity {{cartItem.quantity}} 
        Unit Price: ${{cartItem.item.price}}
        <!-- Total Price: ${{cartItemTotal()}} -->
        <b-btn-toolbar>
          <b-btn-group class="mx-1">
            <b-btn outline-primary>+</b-btn>
            <b-btn>-</b-btn>
          </b-btn-group>
          <b-btn-group class="mx-1">
            <b-btn>Remove</b-btn>
          </b-btn-group>

        </b-btn-toolbar>
      </h4>
    </div>
    <div>
      <h4>Sub total: $209.98*
        <!-- {{cartSubTotal}} -->
        </h4>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed:mapState([
    'cust'
  ])
}
</script>
