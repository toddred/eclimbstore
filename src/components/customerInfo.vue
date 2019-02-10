<template>
  <div>
      <b-card 
      :title="cust.firstName+' '+cust.lastName"
      
      >
        <p>Email: {{cust.email}}</p>
        <p>Username: {{cust.userName}}</p>
        <p>Customer Since: {{cust.createdOn.toLocaleString()}}</p>
        <p>Address: {{cust.street +' '+ cust.city +' '+ cust.city +' '+ cust.prov +' '+ cust.postCode}}</p>
        <customer-update :cust="cust"></customer-update>
     </b-card>

  </div>
</template>

<script>
import { mapState } from "vuex";
import customerUpdate from "../components/customerUpdate"
export default {
  name: "customer-info",
  components:{
      customerUpdate
  },
  computed: mapState(["cust"])
};
</script>

<style>
</style>
