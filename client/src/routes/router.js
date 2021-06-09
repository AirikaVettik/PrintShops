import Vue from 'vue';
import VueRouter from 'vue-router';
import Shops from './../views/Shops';
import newShop from './../views/newShop';
import editShop from './../views/editShop';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Eesti trükikojad',
    components: { default: Shops }
  },   
  {
    path: '/newshop',
    name: 'Lisa uus trükikoda',
    components: { default: newShop }
  },
  {
    path: '/editshop/:id',
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
