import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ProductCard from "./components/ProductCard.vue";
import SmallCard from "./components/SmallCard.vue";
import ConverterCard from "./components/ConverterCard.vue";

import "./assets/main.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("product-card", ProductCard);
app.component("small-card", SmallCard);
app.component("dollar-converter", ConverterCard);
app.mount("#app");
