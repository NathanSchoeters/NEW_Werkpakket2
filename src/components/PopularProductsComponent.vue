<script>
import productCard from '@/components/ProductCardComponent.vue';
import { useProductsStore } from '@/stores/productsStore.js';
//import Products from '@/products.json';

export default {
    data() {
      return{
          productList: useProductsStore(),
      };
  },
  components: {
    productCard,
  },
  computed: {
    topThreeProducts (){
      return this.productList.topThreeProducts;
    }
  },
}
</script>
<template>
<section class="gallery">
        <h1 class="gallery-title">Best Sold</h1>
        <div class="cards-wrapper">
            <div v-for="(product, id) in topThreeProducts" :key="id">
              <productCard :product="product" />
            </div>
        </div>
    </section>
</template>
<style>
</style>