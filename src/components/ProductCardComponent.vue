<script>
export default {
    props: {
        product: Object,
    },
    methods:{
        goToLink(){
            this.$router.push({name:'product', params:{id: this.product.id}})
        }
    }
}
</script>
<template>
<a @click='goToLink' class="product-link">
    <div class="card">
        <div class="card-top">
            <img class="card-top-image" :src="'src/assets/'+ product.image" :alt="product.title">
        </div>
        <div class="card-bottom">
            <div class="card-bottom-title">
                <h1 class="card-bottom-title-header">{{product.title}}</h1>
                <h2 class="card-bottom-title-price">€ {{product.price}}</h2>
            </div>
            <div class="card-bottom-info">
                <p class="card-bottom-info-text">{{product.description}}</p>
            </div>
        </div>
    </div>
</a>
 
</template>
<style>
</style>