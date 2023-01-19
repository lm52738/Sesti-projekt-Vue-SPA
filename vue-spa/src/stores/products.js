import { defineStore } from "pinia";
import Swal from 'sweetalert2'

export const useProductStore = defineStore("products", {
  state: () => ({
    _allProducts: [],
    _cartItems: [],
  }),
  getters: {
    allProducts: (state) => state._allProducts || [],
    getProductById: (state) => {
      return (id) => state._allProducts.find((rcp) => rcp.id === id);
    },
    cartItems: (state) => state._cartItems || [],
    getCartItems: (state) => {
      return state._cartItems;
    },
  },
  actions: {
    // get all products from open api
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
    // add product to cart (Swal library for alerts)
    addToCart(item) {
        let index = this.cartItems.findIndex(product => product.id === item.id);
        if(index !== -1) {
          this.cartItems[index].quantity += 1;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your item has been updated',
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          console.log(item)
          item.quantity = 1;
          this.cartItems.push(item);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your item has been saved',
            showConfirmButton: false,
            timer: 1500
          });
        }
    },
    // increase quantity of item in cart
    incrementQ(item) {
        let index = this.cartItems.findIndex(product => product.id === item.id);
        if(index !== -1) {
            this.cartItems[index].quantity += 1;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
            });
        }
    },
    // decrease quantity of item in cart
    decrementQ(item) {
        let index = this.cartItems.findIndex(product => product.id === item.id);
        if(index !== -1) {
            this.cartItems[index].quantity -= 1;
            if(this.cartItems[index].quantity === 0){
                this._cartItems = this.cartItems.filter(product => product.id !== item.id);
            }
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your item has been updated',
                showConfirmButton: false,
                timer: 1500
            });
        }
    },
    removeFromCart(item) {
        this._cartItems = this.cartItems.filter(product => product.id !== item.id);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your item has been removed',
          showConfirmButton: false,
          timer: 1500
        });
    }

  },
});
