<template>
  <small-card
    v-if="!editMode"
    class="col-md-4 mb-5 card"
    :style="{ width: '300px' }"
  >
    <router-link :to="'/products/' + product.id" class="mr-3">
      <img :src="product.images[0]" class="card-img-top" alt="..." />
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <div class="mt-3 mb-2">
        <span class="p-1" v-for="i in parseInt(product.rating)" :key="i"
          ><i class="bi bi-star-fill"> </i
        ></span>
      </div>
      <p class="card-text">{{ product.description }}</p>
      <ul class="list-group">
        <li class="list-group-item">Category: {{ product.category }}</li>
        <li class="list-group-item">Brand: {{ product.brand }}</li>
      </ul>
      <div class="list-inline mt-3 mb-2 d-flex justify-content-between">
        <h5 class="list-inline-item fw-bold">{{ product.price }},00 $</h5>
        <button
          @click="this.addToCart(product)"
          class="btn btn-primary list-inline-item"
        >
          <i class="bi bi-cart-check"></i>
        </button>
        <button
          v-if="canEdit"
          class="btn btn-secondary list-inline-item"
          @click="editMode = true"
        >
          Review us
        </button>
      </div>
    </div>
  </small-card>
  <small-card v-if="editMode" class="editForm w-50">
    <form @submit.prevent="submitChanges">
      <div class="form-group row g-3 align-items-center">
        <div class="col-auto">
          <label for="rating" class="col-form-label"
            >Please rate this product:
          </label>
        </div>
        <div class="col-auto">
          <input
            type="number"
            min="1"
            max="5"
            class="form-control"
            id="rating"
            placeholder="-"
            v-model="newRating"
            :class="form - control"
          />
        </div>
        <div class="col-auto">
          <span class="form-text p-1" v-for="i in 5" :key="i">
            <i class="bi bi-star-fill"> </i>
          </span>
        </div>
      </div>

      <div class="list-inline mt-3 mb-2 d-flex justify-content-between">
        <button class="btn btn-success list-inline-item" type="submit">
          Save
        </button>
        <button
          class="btn btn-warning list-inline-item"
          @click.stop="exitSingleProduct()"
        >
          Cancel
        </button>
      </div>
    </form>
  </small-card>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useProductStore } from "../stores/products";
export default {
  emits: ["productUpdated"],
  props: ["id", "canEdit"],
  data() {
    return {
      editMode: false,
      product: { url: "" },
      newRating: "",
    };
  },
  computed: {
    ...mapState(useProductStore, ["getProductById", "updateProduct"]),
    idUrl() {
      return "/products" + this.id;
    },
  },
  methods: {
    ...mapActions(useProductStore, ["addToCart"]),
    exitSingleProduct() {
      this.$router.push({ path: "/products" });
    },
    submitChanges() {
      this.product.rating = (this.product.rating + this.newRating) / 2;
      this.updateProduct(this.product);
      this.$emit("productUpdated", this.product);
      this.exitSingleProduct();
    },
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
