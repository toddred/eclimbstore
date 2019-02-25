<template>
  <div>

      <b-card
        :title="'$'+product.price.toString()"       
        img-src="https://via.placeholder.com/500"
        :img-alt="product.desc"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <p class="card-text">{{product.desc}}</p>
        <b-row>
          <b-col>
            <b-button @click="addToCart" variant="outline-primary">Add to Cart</b-button>
          </b-col>
          <b-col>
            <product-modal :product="product"></product-modal>
          </b-col>
        </b-row>
      </b-card>

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
    addToCart: function() {
      let payload = { productId: this.product.productId, quantity: 1 };
      this.$store.commit("addToCart", payload);
    },
    getImgUrl: function(pic){
      return `assets/img/${pic}.jpg`;
    }
  }
};
// :img-src="getImgUrl(product.img)"
</script>