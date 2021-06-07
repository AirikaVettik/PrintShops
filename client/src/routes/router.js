import Vue from 'vue';
import VueRouter from 'vue-router';
import Shops from './../views/Shops';
import newShop from './../views/newShop';
import editShop from './../views/newShop';
import Products from './../views/Products';
import newProduct from './../views/newProduct';
import editProduct from './../views/editProduct';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Shops',
    components: { default: Shops }
  },   
  {
    path: '/newshop',
    name: 'Lisa uus trükikoda',
    components: { default: newShop }
  },
  {
    path: '/editShop/:id',
    name: 'Muuda poe andmeid',
    components: { default: editShop }
  } 
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

export default router;
