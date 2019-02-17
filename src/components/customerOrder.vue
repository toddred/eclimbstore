<template>
    <div>
        <b-card title="Orders">
            <div v-for="order in orders" :key="order.orderId">
                <p>{{order.orderDate.toLocaleDateString()}}|${{order.total}}|{{order.shipped}}</p>
           </div>
        </b-card>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    
name:'customer-order',
components:{

},
    computed: mapState(["cust", "orders"]) 
}
</script>

<style>

</style>
