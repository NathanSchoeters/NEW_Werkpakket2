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
      console.log("test")
      this.$router.push('/checkout');
    }
      
  },
  computed: {
    calculateSubTotal() {
      let subTotal = 0;
      for (let i = 0; i < this.cart.cartItems.length; i++) {
        subTotal += this.cart.cartItems[i].product.price * this.cart.cartItems[i].quantity;
      }
      subTotal = subTotal.toFixed(2);
      return subTotal;
    },
    calculateVAT6(){
      let VAT6 = 0;
      for (let i = 0; i < this.cart.cartItems.length; i++) {
        VAT6 += (this.cart.cartItems[i].product.price * 6)/100;
      }
      VAT6 = VAT6.toFixed(2);
      return VAT6;
    },
    calculateVAT21(){
      let VAT21 = 0;
      for (let i = 0; i < this.cart.cartItems.length; i++) {
        VAT21 += (this.cart.cartItems[i].product.price * 21)/100;
      }
      VAT21 = VAT21.toFixed(2);
      return VAT21;
    },
    calculateTotal(){
      let total = 0;
      total += parseFloat(this.calculateSubTotal) + parseFloat(this.calculateVAT6) + parseFloat(this.calculateVAT21);
      total = total.toFixed(2);
      return total;
    }
    
  }
}
</script>
<template>

<div class="shoppingCartWrapper">
  <div class="flexContainer">
    <h1 class="gallery-title">Shoppingcart</h1>
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
                  <div class="cartItems-info-left-counter">
                      <button class="cartItems-info-left-counter-button" @click="lowerQuantity" type="button">-</button>
                      <input class="cartItems-info-left-counter-amount" type="text" :value="item.quantity">
                      <button class="cartItems-info-left-counter-button" @click="addquantity" type="button">+</button>
                  </div>
              </div>
              <div class="cartItems-info-right">
                  <h2 class="cartItems-info-right-price">€ {{ item.product.price * item.quantity }}</h2>   
                  <button class="cartItems-info-right-button" @click="removeFromCart(index)" type="button">Remove from Cart</button>
              </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="totals">
        <div class="titles">
          <div class="Text">
            <h3 class="totals-subTotal">subTotal:</h3>
            <p class="totals-VAT">6% VAT:</p>
            <p class="totals-VAT">21% VAT:</p>
            <h1 class="totals-total">Total:  </h1>
          </div>
          <div class="price">
            <h3 class="totals-subTotal">{{ calculateSubTotal }}</h3>
            <p class="totals-VAT">€{{ calculateVAT6 }}</p>
            <p class="totals-VAT">€{{ calculateVAT21 }}</p>
            <h1 class="totals-total">€{{ calculateTotal }}</h1>
          </div>
        </div>
        <button class="cartItems-info-right-button" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
    
</div>
<div>
</div>



</template>