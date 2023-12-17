<script>
import ProductCard from '@/components/ProductCardComponent.vue';
import Products from '@/products.json';

export default {
    data() {
        return{
            Products: []
        }
  },
  components: {
    ProductCard,
  },
  computed: {
    topThreeProducts() {
        const TopProducts = Products.slice().sort((a, b) => b.stock_quantity - a.stock_quantity);
        return TopProducts.slice(0, 3);
        console.log(TopProducts);
    },
  },
  
}
</script>
<template>
<section class="gallery">
        <h1 class="gallery-title">Best Sold</h1>
        <div class="cards-wrapper">
            <div v-for="(product, id) in topThreeProducts" :key="id">
              <ProductCard :product="product" />
            </div>
        </div>
    </section>
</template>
<style>
</style>