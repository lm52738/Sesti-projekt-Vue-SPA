<script setup>
import { RouterLink } from "vue-router";
import { useProductStore } from "../stores/products";
const product = useProductStore();
</script>

<template>
  <nav class="navbar navbar-expand-lg rounded navbar-dark bg-dark">
      <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">Vue3 Shop</RouterLink>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/cart"><i class="bi bi-cart-check"></i>({{product.cartItems.length}})</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" to="/converter"><i class="bi bi-currency-dollar"></i><i class="bi bi-arrow-right"></i><i class="bi bi-currency-euro"></i></RouterLink>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
</template>