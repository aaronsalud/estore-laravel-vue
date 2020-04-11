<template>
    <fragment>
        <h2>3 items Saved For Later</h2>
        <div class="saved-for-later cart-table">
            <div class="cart-table-row">
                <cart-item v-for="(item, index) in items_saved" :key="index" :item="item" :quantityDisabled="true"></cart-item>
            </div>
        </div>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import CartItem from './CartItem'

export default {
    name: 'CartItemsSaved',
    components: {
        Fragment,
        CartItem

    },
    data(){
        return {
            items_saved: [
                { title: 'MacBook Pro', description: '15 inch, 1TB SSD, 32GB RAM', price: '$2499',image: '', link: 'http://google.ca'},
                { title: 'MacBook Pro', description: '15 inch, 1TB SSD, 32GB RAM', price: '$2499',image: '', link: 'http://google.ca'},
                { title: 'MacBook Pro', description: '15 inch, 1TB SSD, 32GB RAM', price: '$2499',image: '', link: 'http://google.ca'}
            ]
        }
    }
}
</script>

<style>
    h2{
        font-size:21px;
        margin-bottom:16px;
    }
</style>