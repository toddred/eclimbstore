import Vue from 'vue'
import Vuex from 'vuex'
import customer from '../customer'
import products from '../products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cust:customer,
    prod:products
  },
  // getter:{
  //   PRODUCTS: state =>{
  //     return state.prod
  //   }
  // },
  mutations: {

  },
  actions: {

  }
})
