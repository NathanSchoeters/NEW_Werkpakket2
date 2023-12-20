<script>
import { useCartStore } from '@/stores/shoppingCartStore.js';
import { useProductsStore } from '@/stores/productsStore.js';
export default {
  data(){
      return{
        productStore: useProductsStore(),
        cart: useCartStore(),
        billingDetailsSelected: false,
      };
  },
  computed:{
    checked(){
        return this.billingDetailsSelected;
    },
    confirmation(){
        this.$router.push('/confirmation');
    },
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
<div class="checkoutContainer">
    <div class="checkoutWrapper">
        <div class="checkoutLeft">
            <div class="checkoutLeft-checkbox">
                <input v-model="billingDetailsSelected" type="checkbox" id="billingDetails" name="billing"/>
                <label class="checkoutLeft-checkbox-label" for="billingDetails">Do you want the billing details to differ from the address details?</label>
            </div>
            <div v-if="checked" class="checkoutLeft-form">
                <div class="checkoutLeft-form-input">
                    <label class="formText" for="name">full name</label>
                    <input class="formInput" type="text" name="name" id="name">
                </div>
                <div class="checkoutLeft-form-input">
                    <label class="formText" for="street">street</label>
                    <input class="formInput" type="text" name="street" id="street">
                </div>
                <div class="checkoutLeft-form-horizontal">
                    <div class="checkoutLeft-form-horizontal-small">
                    <label class="formText" for="number">house number</label>
                    <input class="formInput" type="text" name="number" id="number">
                    </div>
                    <div class="checkoutLeft-form-horizontal-small">
                    <label class="formText" for="city">city</label>
                    <input class="formInput" type="text" name="city" id="city">
                    </div>
                </div>
                <div class="checkoutLeft-buttons">
                    <h3 class="checkoutLeft-buttons-title">payment method</h3>
                    <div class="checkoutLeft-buttons-button">
                        <input class="checkoutLeft-buttons-button-radio" type="radio" name="payment" value="bank" id="1" checked> <label for="1" class="formText">Banking card</label>
                    </div>
                    <div class="checkoutLeft-buttons-button">
                        <input class="checkoutLeft-buttons-button-radio" type="radio" name="payment" id="2" value="vise"> <label for="2" class="formText">VISA</label>
                    </div>
                    <div class="checkoutLeft-buttons-button">
                        <input class="checkoutLeft-buttons-button-radio" type="radio" name="payment" id="3" value="paypal"> <label for="3" class="formText">Paypal</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkoutRight">
            <div v-for="(item, index) in cart.cartItems" :key="index">
                <div class="checkoutCartItems">
                <div class="checkoutCartItems-left">
                    <img class="checkoutCartItems-left-image" :src="'src/assets/'+ item.product.image" :alt="item.product.title">
                </div>
                <div class="checkoutCartItems-info">
                    <div class="checkoutCartItems-info-left">
                        <h1 class="checkoutCartItems-info-left-title"> {{ item.product.title }}</h1>
                        <p class="checkoutCartItems-info-left-description">{{ item.product.description }}</p>
                    </div>
                    <div class="checkoutCartItems-info-right">
                        <h2 class="checkoutCartItems-info-right-price">€ {{ item.product.price * item.quantity }}</h2>   
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
                <button class="checkoutCartItems-info-right-button" @click='confirmation'>Finish payment</button>
            </div>
        </div>
    </div>
</div>
</template>
<style>
</style>