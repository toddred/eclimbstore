<template>
  <div class="home">
    <b-row>
      <div v-for="product in prod" :key="product.productId">
        <b-col>
          <product-card :product="product"></product-card>
        </b-col>
      </div>
    </b-row>
  </div>
</template>

<script>
import productCard from "../components/productCard";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    productCard
  },
  computed: mapState(["prod"])
};
</script>
