<template>
  <div>
    <b-col sm="12" md="6" lg="3">
      <b-card
        :title="'$'+product.price.toString()"
        :img-src="product.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <p class="card-text">{{product.desc}}</p>
        <b-button @click="addToCart" variant="outline-primary">Add to Cart</b-button>
        <product-modal :product="product"></product-modal>
      </b-card>
    </b-col>
  </div>
</template>
<script>
import productModal from "../components/productModal";
export default {
  name: "product-card",
  components: {
    productModal
  },
  props: ["product"],
  methods: {
          addToCart:function(){
            let payload ={"productId":this.product.productId, "quantity":1}
          this.$store.commit('addToCart',payload)
        },
    }
  }

</script>
