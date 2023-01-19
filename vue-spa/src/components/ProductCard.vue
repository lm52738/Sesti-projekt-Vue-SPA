<template>
    <div class="col-md-4 mb-5">
        <div class="card" :style="{width: '300px'}">
          <router-link :to="'/products/' + product.id" class="mr-3">
            <img :src="product.images[0]" class="card-img-top" alt="..." />
          </router-link>
            
            <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">{{ product.description }}</p>
                <ul class="list-group">
                  <li class="list-group-item">
                    Rating: {{ product.rating }}/5
                  </li>
                  <li class="list-group-item">Price: {{ product.price }}</li>
                  <li class="list-group-item">Category: {{ product.category }}</li>
                  <li class="list-group-item">Brand: {{ product.brand }}</li>
                </ul>
                <button 
                    @click="this.addToCart(product)"
                    class="btn btn-primary mt-2">
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    </div>  
  </template>
  
  <script>
  import { mapState, mapActions } from "pinia";
  import { useProductStore } from "../stores/products";
  export default {
    props: [ "id" ],
    data() {
      return {
        product: { url: "" },
      };
    },
    computed: {
      ...mapState(useProductStore, ["getProductById"]),
      idUrl() {
        return "/products" + this.id;
      },
    },
    methods: {
      ...mapActions(useProductStore, ["addToCart"]),
    },
    async created() {
      this.product = { ...this.getProductById(this.id) };
    },
  };
  </script>

  <style scoped>
  div.card-body .badge {
    white-space: pre-wrap;
  }
  </style>
  