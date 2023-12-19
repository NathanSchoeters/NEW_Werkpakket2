<script>
import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/shoppingCartStore.js';

export default {
    data() {
        return {
            product: useProductsStore(),
            imageURL: "http://localhost:5173/src/assets/",
            cart: useCartStore(),
        }
    },
    methods: {
        addToCart() {
            alert('Het item is toegevoegd aan de shoppingcart.');
            if (this.product) {
                console.log(this.product)
                const cartItem = {
                    product: this.product,
                    quantity: this.quantity,
                };
                console.log(cartItem)
                this.cart.addToCart(cartItem);
                console.log(this.cart.cartItems);
            } else {
                console.error('Product not found.');
            }
        },
  },
    computed: {
        product() {
            const productID = this.$route.params.id;
            return this.product.getProductsById(productID)
        }
    }
}
</script>
<template>
<section class="productSection">
        <div class="productContainer">
            <h1 class="productContainer-name">{{product.title}}</h1>
            <div class="productInfo">
                <div class="productInfo-left">
                    <img class="productInfo-left-image" :src="imageURL + product.image" alt="Product Image">
                </div>
                <div class="productInfo-right">
                    <h1 class="productInfo-right-price">€ {{product.price}}</h1>
                    <p class="productInfo-right-text">{{product.description}}
                    </p>
                    <div class="ProductInfo-right-counter">
                        <button class="counter-button" type="button">-</button>
                        <input class="counter-input"  v-model="quantity" type="text" placeholder="1">
                        <button class="counter-button" type="button">+</button>
                    </div>
                    <button class="ProductInfo-right-button" type="button" @click="addToCart()">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
    </section>
</template>