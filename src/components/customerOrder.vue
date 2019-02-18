<template>
  <div>
    <b-card title="Orders">
      <b-table :items="items">
        <template slot="Details" slot-scope="computed">
          <b-btn @click="review(computed.value)">Details</b-btn>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "customer-order",
  components: {},
  
  computed:{
   items() {
      return this.$store.getters.orders;
    },
    ...mapState(["cust", "orders"])
  },
  methods:{
      review: id=>{
          alert(id);
      }
  }

};
</script>

<style>
</style>
