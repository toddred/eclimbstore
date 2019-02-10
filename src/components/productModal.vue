<template>
  <div>
    <b-button variant="outline-success" @click="showModal">Learn More</b-button>
    <b-modal ref="myModalRef" hide-footer :title="product.desc">
      <div class="d-block text-center">
        <h3>{{product.desc}}</h3>
        <b-img :src="product.img" fluid></b-img>
        <p>${{product.price}} | Rating: {{product.rating.toString()}} | Available: {{product.available.toString()}}</p>
      </div>
      <b-row>
        <b-col sm="4">
          <b-form-input type="number"></b-form-input>
        </b-col>
        <b-col sm="4">
          <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </b-col>
        <b-col sm="4">
          <b-btn class="mt-3" variant="outline-primary" @click="addToCart" block>Add To Cart</b-btn>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "product-modal",
  props: ["product"],

  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    addToCart(){
        alert("you did it!");
    }
  }
};
</script>

<style>
</style>
