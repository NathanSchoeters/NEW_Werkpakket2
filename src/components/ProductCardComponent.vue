<script>
props: {
    product: Object,
  },
</script>
<template>
<a class="product-link" href="./product.html">
    <div class="card">
        <div class="card-top">
            <img class="card-top-image" v-bind:src="./src/assets/{{product.image}}" alt="Illustration1">
        </div>
        <div class="card-bottom">
            <div class="card-bottom-title">
                <h1 class="card-bottom-title-header">{{product.title}}</h1>
                <h2 class="card-bottom-title-price">{{product.price}}</h2>
            </div>
            <div class="card-bottom-info">
                <p class="card-bottom-info-text">{{product.description}}</p>
                <button class="card-bottom-info-button" type="button"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    </div>
</a>  
</template>
<style>
</style>