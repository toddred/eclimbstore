import Vue from 'vue'
import Vuex from 'vuex'
import customer from '../customer'
import products from '../products'
import carts from '../carts'
import comments from '../comments'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cust:customer,
    prod:products,
    carts:carts,
    comments:comments
  },
  getters: {
    saleItems: state => {
      let sale = state.carts.cartItems.map(cartItems=>{
          return{
            desc: cartItems.desc+'*',
            price: cartItems.price/2
          }
        })
        return sale;
    },
    cartTotal: state => {
      let total = 0;
      let cartitems = state.carts.cartItems
      cartitems.forEach(c => {
        total+= (c.quantity*c.price);
      });
      return total;
    }

  },

  mutations: {

  },
  actions: {

  }
})
