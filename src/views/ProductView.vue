<script>
import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/shoppingCartStore.js';
import { useAuthenticationStore } from '../stores/authenticationStore';

export default {
    data() {
        return {
            productStore: useProductsStore(),
            authStore: useAuthenticationStore(),
            imageURL: "http://localhost:5173/src/assets/",
            cart: useCartStore(),
            quantity: 1,
        }
    },
    methods: {
        addToCart() {
            if(this.authStore.authenticated){
                alert('Het item is toegevoegd aan de shoppingcart.');
                if (this.product) {
                    // console.log(this.product)
                    const cartItem = {
                        product: this.product,
                        quantity: this.quantity,
                    };
                    console.log('quantity: ' + this.quantity)
                    console.log(cartItem)
                    this.cart.addToCart(cartItem);
                    // console.log(this.cart.cartItems);
                } else {
                    console.error('Product not found.');
                }
            }
            else{
                this.$router.push('/login');
            }
        },
        addquantity(){
        this.quantity +=1;
        },   
        lowerQuantity(){
            if(this.quantity >  1){
            console.log(this.quantity)
            this.quantity -= 1;
            }
            else{
                alert("1 is the lowest amount.");
            }
        }
    },
    computed: {
        product() {
            const productID = this.$route.params.id;
            return this.productStore.getProductsById(productID)
        },
        isStillInStock() {
            if(this.product.stock_quantity !== 0){
                console.log(this.product.stock_quantity);
                return this.product.stock_quantity > 0;
            }
            
        },
        
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
                    <div v-if="isStillInStock">
                        <div class="ProductInfo-right-counter">
                        <button class="counter-button" @click="lowerQuantity" type="button">-</button>
                        <input class="counter-input"  v-model="quantity" type="text" placeholder="1">
                        <button class="counter-button" @click="addquantity" type="button">+</button>
                    </div>
                    <button class="ProductInfo-right-button" type="button" @click="addToCart()">Add to cart <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    <div v-else>
                        <h1 class="noStock">this item is no longer in stock.</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>