import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(item) {
      this.cartItems.push(item);
    },
    removeFromCart(index) {
      this.cartItems.splice(index, 1);
    },
    getTotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
});