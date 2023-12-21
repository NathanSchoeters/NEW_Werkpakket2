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
            showAlert: false,
            alertText: "",
            error: "",
            outOfStock: false,
        }
    },
    methods: {
        addToCart() {
            if(this.authStore.authenticated){
                if (this.product) {
                    if(this.quantity <= this.product.stock_quantity){
                        const cartItem = {
                        product: this.product,
                        quantity: parseFloat(this.quantity),
                        };
                        this.cart.addToCart(cartItem);
                        this.productStore.changeStock(this.product.id, this.quantity);
                        
                        // alert als item is toegevoegd
                        this.showAlert = true;
                        this.alertText = "Items added succesfully!";

                        setTimeout(() => {
                            this.showAlert = false;
                        }, 3000);
                    }
                    else{
                        this.error = "error";
                        this.showAlert = true;
                        this.alertText = "We don't have enough stock.";

                        setTimeout(() => {
                            this.showAlert = false;
                            this.error = "";
                        }, 3000);
                    }
                } else {
                    this.error = "error";
                    this.showAlert = true;
                    this.alertText = "Product not found";

                    setTimeout(() => {
                        this.showAlert = false;
                        this.error = "";
                    }, 3000);
                }
            } 
            else{
                this.$router.push('/login');
            }
        },
        addquantity(){
            this.quantity +=1;
            this.productStore.changeStock(this.product.id, -1);
            if(this.product.stock_quantity === 0){
                this.addToCart();
            }
        },   
        lowerQuantity(){
            if(this.quantity >  1){
            this.quantity -= 1;
            this.productStore.changeStock(this.product.id, 1);
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
                        <input class="counter-input"  v-model="quantity" type="number" placeholder="1">
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

        <div v-if="showAlert" class="alert" :class="error">
            <p>{{ alertText }}</p>
        </div>
    </section>
</template>