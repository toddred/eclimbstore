<template>
  <div class="home">
    <div v-for="product in prod"
      :key="product.productId">
      <product-card :product="product"></product-card>
      </div>
  </div>
</template>

<script>
import productCard from '../components/productCard'
import {mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    productCard
  },
  computed:mapState([
    'prod'
  ])
}
</script>
