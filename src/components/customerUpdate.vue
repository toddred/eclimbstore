<template>
  <div>
    <b-button variant="outline-success" @click="showModal">Edit</b-button>
    <b-modal ref="custUpdModal" hide-footer title="Account Details">
      <div class="d-block">
        <b-form>
          <b-form-group id="gfirstName" label="First Name: ">
            <b-form-input id="firstName" v-model="cust.firstName"></b-form-input>
          </b-form-group>
          <b-form-group id="glastName" label="Last Name: ">
            <b-form-input id="lastName" v-model="cust.lastName"></b-form-input>
          </b-form-group>
          <b-form-group id="gemail" label="Email Address: ">
            <b-form-input type="email" id="email" v-model="cust.email"></b-form-input>
          </b-form-group>
          <b-form-group id="guserName" label="Username: ">
            <b-form-input id="userName" v-model="cust.userName"></b-form-input>
          </b-form-group>
          <b-form-group id="gpassword" label="Password: ">
            <b-form-input type="password" id="password" v-model="cust.password"></b-form-input>
          </b-form-group>
          <b-form-group id="gstreet" label="Street Address: ">
            <b-form-input id="street" v-model="cust.street"></b-form-input>
          </b-form-group>
          <b-form-group id="gcity" label="City: ">
            <b-form-input id="city" v-model="cust.city"></b-form-input>
          </b-form-group>
          <b-form-group id="gprov" label="Province: ">
            <b-form-input id="prov" v-model="cust.prov"></b-form-input>
          </b-form-group>
          <b-form-group id="gpostCode" label="Postal Code: ">
            <b-form-input id="postCode" v-model="cust.postCode"></b-form-input>
          </b-form-group>
        </b-form>
      </div>
      <b-btn-group>
        <b-btn @click="confirm()">Confirm</b-btn>
        <b-btn @click="hideModal()">Cancel</b-btn>
      </b-btn-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "customer-update",
  props: ["cust"],

  methods: {
    showModal() {
      this.$refs.custUpdModal.show();
    },
    hideModal() {
      this.$refs.custUpdModal.hide();
    },
    confirm() {
      alert("you did it!");
    }
  }
};
</script>

<style>
</style>
