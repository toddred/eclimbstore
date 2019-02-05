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
        class="mb-2"
      >
        <p class="card-text">{{product.desc}}</p>
        <b-button href="#" variant="outline-primary">Add to Cart</b-button>
        <b-button variant="outline-success" @click="showModal">Learn More</b-button>
        <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
          <div class="d-block text-center">
            <h3>{{product.desc}}</h3>
            <!-- modal -->
            <b-img :src="product.img" fluid></b-img>
            <p>${{product.price}} | Rating: {{product.rating.toString()}} | Available: {{product.available.toString()}}</p>
          </div>
          <b-row>
            <b-col sm="4">
              <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
            </b-col>
            <b-col sm="4">
              <b-form-input type="number"></b-form-input>
            </b-col>
            <b-col sm="4">
              <b-btn class="mt-3" variant="outline-primary" block>Add To Cart</b-btn>
            </b-col>
          </b-row>
        </b-modal>
        <!-- end modal -->
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-card",
  components: {},
  props: ["product"],
  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  }
};
</script>
