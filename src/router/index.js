import Vue from 'vue'
import VueRouter from 'vue-router'

import Shop from '../components/shop/Shop'
import Product from '../components/product/Product'
import Cart from '../components/cart/Cart'
import Checkout from '../components/checkout/Checkout'

Vue.use(VueRouter)

const routes = [
    { path: '/shop', component: Shop, name: 'shop'},
    { path: '/product', component: Product, name: 'product'},
    { path: '/cart', component: Cart, name: 'cart'},
    { path: '/checkout', component: Checkout, name: 'checkout'}
]

export default new VueRouter({routes, mode:'history'})