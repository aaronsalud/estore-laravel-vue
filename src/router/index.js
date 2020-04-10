import Vue from 'vue'
import VueRouter from 'vue-router'

import Shop from '../components/shop/Shop'
import Product from '../components/product/Product'

Vue.use(VueRouter)

const routes = [
    { path: '/shop', component: Shop},
    { path: '/product', component: Product},
    { path: ''}
]

export default new VueRouter({routes, mode:'history'})