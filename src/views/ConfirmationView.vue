<script>
import { useCartStore } from '@/stores/shoppingCartStore.js';
import { useProductsStore } from '@/stores/productsStore.js';
export default {
  data(){
      return{
        productStore: useProductsStore(),
        cart: useCartStore(),
      };
  },
  methods: {
    removeFromCart(index) {
      this.cart.removeFromCart(index);      
    },
    addquantity(){
        // this.quantity +=1;
    },   
    lowerQuantity(){
      if(this.quantity >  1){
      console.log(this.quantity)
      this.quantity -= 1;
      }
      else{
          alert("1 is the lowest amount.");
      }
    },
    checkout(){
      this.$router.push('/checkout');
    }
  },
}
</script>
<template>
    <div class="shoppingCartWrapper">
  <div class="flexContainer">
    <h1 class="gallery-title">Purchase succesful!</h1>
    <div v-if="cart.cartItems.length ===0" class="emptyCart">
      <p>Je winkelmand is leeg!</p>
    </div>
    <div v-else>
      <div v-for="(item, index) in cart.cartItems" :key="index">
        <div class="cartItems">
          <div class="cartItems-left">
              <img class="cartItems-left-image" :src="'src/assets/'+ item.product.image" :alt="item.product.title">
          </div>
          <div class="cartItems-info">
              <div class="cartItems-info-left">
                  <h1 class="cartItems-info-left-title"> {{ item.product.title }}</h1>
                  <p class="cartItems-info-left-description">{{ item.product.description }}</p>
              </div>
              <div class="cartItems-info-right">
                  <h2 class="cartItems-info-right-price">€ {{ item.product.price * item.quantity }}</h2>   
              </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="totals">
        <div class="titles">
          <div class="Text">
            <h3 class="totals-subTotal">subTotal:</h3>
            <p class="totals-VAT">VAT:</p>
            <h1 class="totals-total">Total:</h1>
          </div>
          <div class="price">
            <h3 class="totals-subTotal">€ {{ cart.calculateSubTotal}}</h3>
            <p class="totals-VAT">€ {{ cart.calculateVAT }}</p>
            <h1 class="totals-total">€ {{ cart.calculateTotal }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
    
</div>
<div>
</div>
</template>
<style>
</style>