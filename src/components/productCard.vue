<template>
  <div>
    <div>
      <b-card
        :title="product.price.toString()"
        :img-src="product.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2">
        <p class="card-text">{{product.desc}}</p>
        <b-button href="#" variant="outline-primary">Add to Cart</b-button>
        <product-modal :product="product"></product-modal>
      </b-card>
    </div>
  </div>
</template>
<script>
import productModal from "../components/productModal";
export default {
  name: "product-card",
  components: {
    productModal
  },
  props: ["product"]
};
</script>
