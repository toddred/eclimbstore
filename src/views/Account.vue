<template>
    <div class="Account">
        <customer-info></customer-info>
    </div>
</template>

<script>
import customerInfo from "../components/customerInfo"
import { mapState } from "vuex";
export default {
    components:{
        customerInfo
    },

      computed: mapState(["cust", "carts","comments"]) 

}
</script>

<style>

</style>
