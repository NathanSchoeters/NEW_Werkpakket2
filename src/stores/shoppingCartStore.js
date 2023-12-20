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
  },
  getters: {
    calculateSubTotal() {
      const subTotal = this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
      return parseFloat(subTotal.toFixed(2));
    },
    // calculateVAT6(){
    //   const vat6 = this.cartItems.reduce((totalVAT, item) => totalVAT + (item.product.price * 6) / 100, 0);
    //   return parseFloat(vat6.toFixed(2));
    // },
    // calculateVAT21(){
    //   const vat21 = this.cartItems.reduce((totalVAT, item) => totalVAT + (item.product.price * 21) / 100, 0);
    //   return parseFloat(vat21.toFixed(2));
    // },
    calculateVAT() {
      const totalVAT = this.cartItems.reduce((total, item) => {
        const itemVAT = (item.product.price * item.product.vat_rate) / 100;
        return total + itemVAT * item.quantity;
      }, 0);
      return parseFloat(totalVAT.toFixed(2));
    },
    calculateTotal(){
      const total = this.calculateSubTotal + this.calculateVAT;
      return parseFloat(total.toFixed(2)); 
    }
  }
});