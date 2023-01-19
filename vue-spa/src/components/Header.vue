<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { useProductStore } from "../stores/products";
const auth = useAuthStore();
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
              </ul>
          </div>
          <div class="ml-5 h3">👥{{ auth.username }}</div>
      </div>
  </nav>
</template>