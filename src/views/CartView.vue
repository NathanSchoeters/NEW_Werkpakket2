<script>
import { useCartStore } from '@/stores/shoppingCartStore.js';
import { useProductsStore } from '@/stores/productsStore.js';

export default {
    data(){
        return{
          productList: useProductsStore(),
        };
    },
    setup() {
    const cart = useCartStore();

    const products = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      // Add more products
    ];

    const addToCart = (product) => {
      cart.addToCart(product);
    };

    const removeFromCart = (index) => {
      cart.removeFromCart(index);
    };

    return { products, addToCart, removeFromCart, cart };
  },
}
</script>
<template>




<div class="shoppingCartWrapper">
    <div class="cartItems">
        <div class="cartItems-left">
            <img class="cartItems-left-image" src="../assets/Illustration1.png" alt="Product Image">
        </div>
        <div class="cartItems-info">
            <div class="cartItems-info-left">
                <h1 class="cartItems-info-left-title">Dit is de naam van het product</h1>
                <p class="cartItems-info-left-description">Dit is een uitleg over de sticker</p>
                <div class="cartItems-info-left-counter">
                    <button class="cartItems-info-left-counter-button" type="button">-</button>
                    <input class="cartItems-info-left-counter-amount" type="text" placeholder="1">
                    <button class="cartItems-info-left-counter-button" type="button">+</button>
                </div>
            </div>
            <div class="cartItems-info-right">
                <h2 class="cartItems-info-right-price">€ 50</h2>   
                <button class="cartItems-info-right-button" type="button">Remove from Cart</button>
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
    <div>
      <h2>Shopping Cart</h2>
      <div v-for="(item, index) in cart.cartItems" :key="index">
        {{ item.name }} - {{ item.price }}
        <button @click="removeFromCart(index)">Remove</button>
      </div>
      <p>Total: {{ cart.getTotal() }}</p>
    </div>
</div>



</template>