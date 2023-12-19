import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(cartItem) {
      const existingItems = this.cartItems.findIndex(item => item.product.id === cartItem.product.id);
      if (existingItems !== -1){
        this.cartItems[existingItems].quantity += cartItem.quantity;
      }
      else{
        this.cartItems.push(cartItem);
      }
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    // getTotal() {
    //   return this.cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
    // },
  },
});