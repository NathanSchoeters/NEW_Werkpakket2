<script>
import productCard from '@/components/ProductCardComponent.vue';
import { useProductsStore } from '@/stores/productsStore.js';

export default {
  data() {
    return {
      products: useProductsStore(),
      selectedFilter: "both",
      currentPage: 1,
      itemsPerPage: 8, 
      filteredProducts: [],
      searchData: "",
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredProducts.slice(startIndex, endIndex);
    },
  },
  methods: {
    filterSelect(filter) {
      this.selectedFilter = filter;
      this.currentPage = 1; // Reset to the first page when the filter changes
      this.filterProducts();
    },
    filterProducts() {
      let filteredList = this.products.productList;

      if (this.selectedFilter === "both") {
        // Do nothing, already considering all products
      } else {
        filteredList = filteredList.filter((product) => product.category === this.selectedFilter);
      }

      // Search bar
      if (this.searchData.trim() !== "") {
        const data = this.searchData.toLowerCase();
        filteredList = filteredList.filter((product) =>
          product.title.toLowerCase().includes(data)
        );
      }

      this.filteredProducts = filteredList;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
  },
  created(){
    this.filterProducts();
  },
  components: {
    productCard,
  },
};
</script>
<template>
    <section class="intro">
      <h1 class="intro-header">Buy High quality stickers and illustrations</h1>
      <p class="intro-text">Stickers can be bought separately or in packages.</p>
    </section>
  
    <section class="products">
      <div class="products-filters">
        <input v-model="searchData" type="text" class="products-filters-search" placeholder="Search.." @input="filterProducts" />
        <button type="button" class="products-filters-button single" @click="filterSelect('single')" :class="{ 'active': selectedFilter === 'single' }">Single stickers</button>
        <button type="button" class="products-filters-button package" @click="filterSelect('package')" :class="{ 'active': selectedFilter === 'package' }">Package</button>
        <button type="button" class="products-filters-button package" @click="filterSelect('both')" :class="{ 'active': selectedFilter === 'both' }">All</button>
      </div>
      <div class="gallery">
        <div class="cards-wrapper">
          <div v-for="(product, id) in paginatedProducts" :key="id">
            <productCard :product="product" />
          </div>
        </div>
      </div>
      <div class="products-pages">
        <button type="button" class="products-pages-button" @click="prevPage">&lt;</button>
        <button type="button" class="products-pages-button"  v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="{ 'active': this.currentPage === page }">{{ page }}</button>
        <button type="button" class="products-pages-button" @click="nextPage">&gt;</button>
      </div>
    </section>
</template>
<style>
</style>

