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
    tempMsg:"",
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
    },
    items: state => {
      let myCart = [];
      state.carts.cartItems.forEach(a=>{
        myCart.push({
          "Item":a.desc,
          "Quantity":a.quantity,
          "Item Price":"$"+a.price,
          "Item Total":"$"+(a.price*a.quantity).toLocaleString(),
          "Modify":a.cartItemId
        });
      })
      return myCart;
    },
    orders: state => {
      let myOrder = [];
      state.orders.forEach(a=>{
        myOrder.push({
          "Ordered On":a.orderDate.toLocaleDateString(),
          "Total":"$"+a.total.toLocaleString(),
          "Shipped":a.shipped,
          "Details":a.cartItemId
        });
      })
      return myOrder;
    },
  },

  mutations: {
    addItem(state,payload){
      let i= state.carts.cartItems.findIndex(c=>c.cartItemId == payload)
      state.tempMsg = "Item added to cart";
      return state.carts.cartItems[i].quantity++;
    },
    minusItem(state,payload){
      let i= state.carts.cartItems.findIndex(c=>c.cartItemId == payload)
      if(state.carts.cartItems[i].quantity>0){
        state.tempMsg = "Item removed from cart";
        return state.carts.cartItems[i].quantity--;
      }

    },
    removeItem(state,payload){
      let i= state.carts.cartItems.findIndex(c=>c.cartItemId == payload)
      state.tempMsg = "Item removed from cart";
      return state.carts.cartItems.splice(i,1);
    },
    addToCart(state,payload){
      let myCartItem = state.carts.cartItems.find(c=>c.productId == payload.productId)
      if(myCartItem){
        let i= state.carts.cartItems.findIndex(c=>c.cartItemId == myCartItem.cartItemId)
        state.tempMsg = myCartItem.desc +" added to cart.";
        return state.carts.cartItems[i].quantity+=payload.quantity;
      } else {
        let item= state.prod.find(p=>p.productId == payload.productId)
        state.tempMsg = item.desc + " added to cart";
        let myNewItem = new cartItem(item,payload.quantity,state.carts.cartItems.length)
        return state.carts.cartItems.push(myNewItem);
      }

    },
    clearTemp(state){
      setInterval(()=>{
        state.tempMsg ="";
        return ;
      },3000)
    }

  },
  actions: {

  }
})
