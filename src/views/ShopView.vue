<script>
import productCard from '@/components/ProductCardComponent.vue';
import { useProductsStore } from '@/stores/productsStore.js';
export default {
    data() {
      return{
          products: useProductsStore(),
          filteredProducts: [],
          selectedFilter: "both",
      };
    },
  components: {
    productCard,
  },
  methods: {
    filterSelect(filter){
        this.selectedFilter = filter;
        console.log('dario');
        this.filterProducts();
    },
    filterProducts() {
        if (this.selectedFilter ==="both"){
            this.filteredProducts = this.products.productList;
            console.log('nathan')
        }
        else{
            this.filteredProducts = this.products.productList.filter(
                (product) => product.category === this.selectedFilter
            );
            console.log('mike')
        }
    }
  },
  created(){
    this.filterProducts();
  }
}
</script>
<template>
    <section class="intro">
        <h1 class="intro-header">Buy High quality stickers and illustrations</h1>
        <p class="intro-text">Stickers can be bought seperatley or in packages.</p>
    </section>

    <section class="products">
        <div class="products-filters">
            <input type="text"  class="products-filters-search" placeholder="Search..">
            <button type="button" class="products-filters-button single" @click="filterSelect('single')">Single stickers</button>
            <button type="button" class="products-filters-button package" @click="filterSelect('package')">Package</button>
            <button type="button" class="products-filters-button package" @click="filterSelect('both')">All</button>
        </div>
        <div class="gallery">
            <div class="cards-wrapper">
            <div v-for="(product, id) in filteredProducts" :key="id">
                <productCard :product="product" />
            </div>
            </div>
        </div>
        <div class="products-pages">
            <button type="button" class="products-pages-button">&lt;</button>
            <button type="button" class="products-pages-button">1</button>
            <button type="button" class="products-pages-button">2</button>
            <button type="button" class="products-pages-button">3</button>
            <button type="button" class="products-pages-button">></button>
        </div>
    </section>
</template>