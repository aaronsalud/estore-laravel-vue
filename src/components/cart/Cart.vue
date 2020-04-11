<template>
    <b-container>
        <b-row class="cart-list-section">
            <b-col sm="10">
               <cart-list></cart-list>
               <coupon-code></coupon-code>
               <cart-total></cart-total>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import CartList from './CartList'
import CouponCode from './CouponCode'
import CartTotal from './CartTotal'

export default {
    name: 'Cart',
    components: {
        CartList,
        CouponCode,
        CartTotal
    }
}
</script>
 
<style scoped>
    .cart-list-section {
        margin:15px 0;
    }
</style>