<template>
    <b-container>
        <b-row class="cart-list-section">
            <b-col sm="10">
               <cart-list></cart-list>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import CartList from './CartList'
export default {
    name: 'Cart',
    components: {
        CartList
    }
}
</script>
 
<style scoped>
    .cart-list-section {
        margin:15px 0;
    }
</style>