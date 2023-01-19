<template>
  <div v-if="selectedProduct" class="d-flex flex-column align-items-center">
    <h2>Product #{{ selectedProduct.id }}</h2>
    <product-card
      :id="selectedProduct.id"
      can-edit="true"
      @product-updated="productUpdated"
    ></product-card>
  </div>
  <div v-else >
    <h2>All products ({{ allProducts.length }})</h2>
    <hr />
    <div className='row my-4'>
      <product-card
        v-for="product in allProducts"
        :key="product.id"
        :id="product.id"
        @product-updated="productUpdated"
      ></product-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../stores/products";
export default {
  computed: {
    ...mapState(useProductStore, ["allProducts"]),
  },
  data() {
    return {
      selectedProduct: null,
    };
  },
  watch: {
    $route(to, from) {
      console.log(`Route changed: ${from.path} -> ${to.path} `);
      this.setSelectedProduct();
    },
  },
  methods: {
    ...mapActions(useProductStore, ["refreshProducts"]),
    setSelectedProduct() {
      this.selectedProduct = this.allProducts.find(
        (x) => x.id == this.$route.params.id
      );
    },
    productUpdated(product) {
      console.log("so now i know products rating is updated...", product);
    },
  },
  async mounted() {
    await this.refreshProducts();
    this.setSelectedProduct();
  },
};
</script>
