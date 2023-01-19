<template>
    <div class="col-md-4 mb-5">
        <div class="card" style="width: '300px'; height: '500px';">
            <img :src="images[0]" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <ul class="list-group">
                  <li class="list-group-item">
                    Rating: {{ rating }}/5
                  </li>
                  <li class="list-group-item">Price: {{ price }}</li>
                  <li class="list-group-item">Category: {{ category }}</li>
                  <li class="list-group-item">Brand: {{ brand }}</li>
                </ul>
                <button 
                    @click="data.addToCart(product)"
                    class="btn btn-primary mt-2">
                    <i class="bi bi-cart-check"></i> add to cart
                </button>
            </div>
        </div>
    </div>  
  </template>
  
  <script>
  export default {
    props: [
        "id",
        "title",
        "description",
        "price",
        "discountPercentage",
        "rating",
        "stock",
        "brand",
        "category",
        "thumbnail",
        "images"
    ],
    computed: {
      idUrl() {
        return "/products" + this.id;
      },
    },
    mounted() {
      console.log("mounted, image = " + this.images[0]);
    },
  };
  </script>

  <style scoped>
  div.card-body .badge {
    white-space: pre-wrap;
  }
  </style>
  