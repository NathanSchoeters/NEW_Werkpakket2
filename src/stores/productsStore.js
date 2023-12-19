import {defineStore } from "pinia";
import Products from '@/products.json';

export const useProductsStore = defineStore('products',{
    //state
    state: () => ({
        productList: Products,
    }),
    //getters
    getters: {
        getProductsById: (state) => productID => {
            return state.productList.find((product) => product.id == productID) || null
        },
        topThreeProducts() {
            const topProducts = [...this.productList].sort((a, b) => b.stock_quantity - a.stock_quantity);
            return topProducts.slice(0, 3);
          },
    }
})