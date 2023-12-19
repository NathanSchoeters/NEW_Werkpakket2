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
}
</script>
<template>

<div class="shoppingCartWrapper">
  <div class="flexContainer">
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
                    <button class="cartItems-info-left-counter-button" type="button">-</button>
                    <input class="cartItems-info-left-counter-amount" type="text" :value="item.quantity">
                    <button class="cartItems-info-left-counter-button" type="button">+</button>
                </div>
            </div>
            <div class="cartItems-info-right">
                <h2 class="cartItems-info-right-price">€ {{ item.product.price }}</h2>   
                <button class="cartItems-info-right-button" type="button">Remove from Cart</button>
            </div>
        </div>
    </div>
  </div>
  

    </div>
    
</div>
<div>
    <!-- Display your products and allow users to add them to the cart -->
    <!-- <div v-for="(product, index) in products" :key="index">
      {{ product.name }} - {{ product.price }}
      <button @click="addToCart(product)">Add to Cart</button>
    </div> -->

    <!-- Display the shopping cart -->
    <!-- <div>
      <h2>Shopping Cart</h2>
      <div v-for="(item, index) in cart.cartItems" :key="index">
        {{ item.name }} - {{ item.price }}
        <button @click="removeFromCart(index)">Remove</button>
      </div>
      <p>Total: {{ cart.getTotal() }}</p>
    </div> -->
</div>



</template>