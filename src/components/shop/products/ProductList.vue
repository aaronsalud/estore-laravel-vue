<template>
    <div>
        <h1 class="stylish-heading">Laptops</h1>
            <b-row class="products text-center">
                <product v-for="(product, index) in products" :key="index" :product="product"></product>
            </b-row>
    </div>
</template>

<script>
import Product from './Product'
export default {
    name: 'ProductList',
    components: {
        Product
    },
    data(){
        return{
            products: [
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
                {name:'Macbook Pro', image: '/assets/images/macbook-pro.png', price: '$2499.99', link: 'http://google.ca'},
            ]
        }
    }
}
</script>

<style scoped>
    .stylish-heading{
        border-top: solid 1px;
        border-bottom: solid 1px;
        width: 41px;
        padding: 10px;
        margin-bottom: 20px;
    }
</style>