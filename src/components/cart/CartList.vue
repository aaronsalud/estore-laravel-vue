<template>
    <fragment>
        <h2>3 items in Shopping Cart</h2>
        <div class="cart-table-row">
            <cart-item v-for="(item, index) in cart_items" :key="index" :item="item"></cart-item>
        </div>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment' 
import CartItem from './CartItem'
export default {
    name: 'CartList',
    components: {
        Fragment,
        CartItem
    },
    data(){
        return {
            cart_items: [
                { title: 'MacBook Pro', description: '15 inch, 1TB SSD, 32GB RAM', price: '$2499',image: '', link: 'http://google.ca'},
                { title: 'MacBook Pro', description: '15 inch, 1TB SSD, 32GB RAM', price: '$2499',image: '', link: 'http://google.ca'},
                { title: 'MacBook Pro', description: '15 inch, 1TB SSD, 32GB RAM', price: '$2499',image: '', link: 'http://google.ca'}
            ]
        }
    }
}
</script>

<style scoped>
    h2{
        font-size:21px;
        margin-bottom:16px;
    }
</style>