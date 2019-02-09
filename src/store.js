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

  mutations: {

  },
  actions: {

  }
})
