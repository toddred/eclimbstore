<template>
  <div>
    <div v-for="cartItem in carts.cartItems" :key="cartItem.cartItemId">
      <p>
        {{cartItem.desc}} |
        Quantity {{cartItem.quantity}} |
        Unit Price: ${{cartItem.price}} |
        Total Price: ${{cartItem.price*cartItem.quantity}}
        <quant-tools></quant-tools>
      </p>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import quantTools from '../components/quantTools'
export default {
    name:'cartitems',
    components:{
        quantTools
    },
    computed:mapState([
    'carts',
  ])
}
</script>
