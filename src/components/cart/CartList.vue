<template>
    <fragment>
        <h2>3 items in Shopping Cart</h2>
        <div class="cart-table-row">
            <cart-item></cart-item>
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
    }
}
</script>

<style scoped>
    h2{
        font-size:21px;
        margin-bottom:16px;
    }
</style>