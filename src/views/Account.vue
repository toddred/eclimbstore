<template>
    <div class="Account">
        <customer-info></customer-info>
        <br>
        <customer-order></customer-order>
    </div>
</template>

<script>
import customerInfo from "../components/customerInfo"
import customerOrder from "../components/customerOrder"
import { mapState } from "vuex";
export default {
    components:{
        customerInfo,
        customerOrder
    },
      computed: mapState(["cust", "carts","comments"]) 

}
</script>

<style>

</style>
