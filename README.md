# vue-spa

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

interpolation/one-way binding - Da, src/components/ConverterCard.vue, :3,6,7 i src/views/ConverterView.vue, :5

two-way binding - Da, src/components/ProductsCard.vue, :44

methods - Da, src/components/ProductsCard.vue, :84 - 95

computed properties - Da, src/views/ProductsView.vue, :28 - 30; src/components/ProductsCard.vue, :78 - 83

barem jedan scoped style - Da, src/components/ProductsCard.vue, :102 - 106

koristiti barem jedan lifecycle hook - Da, src/views/ProductsView.vue, :53 - 56

routing (više stranica) - Da, src/router/index.js ( /,/products, /products:id, /cart, /converter, /:catchAll(.*)*)

aplikacija mora biti bookmarkable, tako da rade linkovi - Da, src/router/index.js, src/components/ProductsCard.vue, :3; src/components/Header.vue :10,17,20,23 (router-link)

dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, src/router/index.js :32, src/views/NotFoundView.vue

(barem) dvije komponente - Da, src/components/ : Header.vue, ProductCard.vue, SmallCard.vue, ConverterCard.vue

komponenta bez stanja, koristiti properties -  Da, src/components/ConverterCard.vue, :13 - 19

komponenta sa stanjem - Da, src/components/ProductsCard.vue, :73

barem jedna komponenta mora emitirati barem jedan event - Da, src/components/ProductsCard.vue, :86 - 88, :89 - 94

store (Pinia) - Da, src/stores/product.js

asinkroni dohvat podataka s backenda: Da, korišten je open api sa stranice: "https://dummyjson.com/" koji se dohvaća asinkrono u src/stores/product.js :25

