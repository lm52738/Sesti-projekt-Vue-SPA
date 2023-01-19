import { createRouter, createWebHistory } from "vue-router";
import CartView from "../views/CartView.vue";
import ProductsView from "../views/ProductsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import ConverterView from "../views/ConverterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/products/:id?",
      name: "products-id",
      component: ProductsView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/converter",
      name: "converter",
      component: ConverterView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
