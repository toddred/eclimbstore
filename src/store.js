import Vue from 'vue'
import Vuex from 'vuex'
import customer from '../customer'
import products from '../products'
import carts from '../carts'
import comments from '../comments'
import cartItem from './assets/CartItem'
import orders from '../orders'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cust:customer,
    prod:products,
    carts:carts,
    comments:comments,
    tempMsg:'Hi Todd',
    orders:orders
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
      state.carts.cartItems
        .forEach(c => {
          total+= c.quantity*c.price;
      });
      return total;
    }

  },

  mutations: {
    addItem(state,payload){
      let i= state.carts.cartItems.findIndex(c=>c.cartItemId == payload)
      return state.carts.cartItems[i].quantity++;
    },
    minusItem(state,payload){
      let i= state.carts.cartItems.findIndex(c=>c.cartItemId == payload)
      if(state.carts.cartItems[i].quantity>0)
      return state.carts.cartItems[i].quantity--;
    },
    removeItem(state,payload){
      let i= state.carts.cartItems.findIndex(c=>c.cartItemId == payload)
      return state.carts.cartItems.splice(i,1);
    },
    addToCart(state,payload){
      let myCartItem = state.carts.cartItems.find(c=>c.productId == payload.productId)
      if(myCartItem){
        let i= state.carts.cartItems.findIndex(c=>c.cartItemId == myCartItem.cartItemId)
        return state.carts.cartItems[i].quantity+=payload.quantity;
      } else {
        let item= state.prod.find(p=>p.productId == payload.productId)
        let myNewItem = new cartItem(item,payload.quantity,state.carts.cartItems.length)
        return state.carts.cartItems.push(myNewItem);
      }
    },

  },
  actions: {

  }
})
