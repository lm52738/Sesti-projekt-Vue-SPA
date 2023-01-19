import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    _allProducts: [],
  }),
  getters: {
    allProducts: (state) => state._allProducts || [],
    getProductById: (state) => {
      return (id) => state._allProducts.find((rcp) => rcp.id === id);
    },
  },
  actions: {
    async refreshProducts() {
      if (this.allProducts.length === 0) {
        console.log("fetching products...");
        try {
          let response = await fetch("https://dummyjson.com/products");
          if (response.ok) {
            let all = await response.json();
            this._allProducts = all.products;
          } else {
            throw new Error("HTTP-Error: " + response.status);
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
});
