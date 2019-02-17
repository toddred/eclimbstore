<template>
  <div>
    <b-button variant="outline-success" @click="showModal">Learn More</b-button>
    <b-modal ref="myModalRef" hide-footer :title="product.desc">
      <div class="d-block text-center">
        
        <b-img :src="product.img" fluid></b-img>
        <p>${{product.price}} | Rating: {{product.rating.toString()}} | Available: {{product.available.toString()}}</p>
      </div>
      <b-row>
        <b-col sm="4">
          <b-form-select class="mt-3" v-model="selected" :options="count"></b-form-select>
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
  data:()=>{
    return{
      selected :1
    }
  },
  props: ["product"],
  methods: {
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    addToCart: function() {
     
      let payload = {
        productId: this.product.productId,
        quantity: this.selected
      };

      this.$store.commit("addToCart", payload);
      this.$refs.myModalRef.hide();
    }
  },
  computed: {
    count() {
      let avali = [];
      for (let i = 1; i <= this.product.available; i++) {
        let a = { value: i, text: i };
        avali.push(a);
      }
      return avali;
    }
  }
};
</script>

<style>
</style>
