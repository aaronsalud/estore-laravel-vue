import Vue from 'vue'
import VueRouter from 'vue-router'

import Shop from '../components/shop/Shop'
import Product from '../components/product/Product'
import Cart from '../components/cart/Cart'

Vue.use(VueRouter)

const routes = [
    { path: '/shop', component: Shop, name: 'shop'},
    { path: '/product', component: Product, name: 'product'},
    { path: '/cart', component: Cart, name: 'cart'}
]

export default new VueRouter({routes, mode:'history'})