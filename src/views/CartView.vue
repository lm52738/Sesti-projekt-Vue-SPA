<script setup>
import { useProductStore } from "../stores/products";
const store = useProductStore();
</script>

<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in store.getCartItems" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>
                                    <img :src="item.images[0]" 
                                    class="fluid rounded"
                                    width="60"
                                    height="60"    
                                    :alt="item.title" />
                                </td>
                                <td>
                                    {{item.title}}
                                </td>
                                <td>
                                    <i 
                                        @click="store.incrementQ(item)"
                                        class="bi bi-caret-up"></i>
                                    <span class="mx-2">
                                        {{item.quantity}}
                                    </span>
                                    <i 
                                        @click="store.decrementQ(item)"
                                        class="bi bi-caret-down"></i>
                                </td>
                                <td>
                                    ${{item.price}}
                                </td>
                                <td>
                                    ${{item.price * item.quantity}} 
                                </td>
                                <td>
                                    <i 
                                        @click="store.removeFromCart(item)"
                                        class="bi bi-cart-x text-danger"></i>
                                </td>
                            </tr>
                            <tr>
                                <th colSpan="3" class="text-center">
                                    Total
                                </th>
                                <td colSpan="3" class="text-center">
                                    <span class="badge bg-danger rounded-pill">
                                        ${{ store.cartItems.reduce((acc,item) => acc += item.price * item.quantity,0) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
  i{
      cursor: pointer;
  }
</style>