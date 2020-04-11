<template>
    <fragment>
        <b-container>
            <b-row class="cart-list-section">
                <b-col sm=7>
                    <cart-list></cart-list>
                    <coupon-code></coupon-code>
                    <cart-total></cart-total>
                    <cart-actions></cart-actions>
                    <cart-items-saved></cart-items-saved>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
        <product-recommendations></product-recommendations>
    </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import CartList from './CartList'
import CouponCode from './CouponCode'
import CartTotal from './CartTotal'
import CartActions from './CartActions'
import CartItemsSaved from './CartItemsSaved'
import ProductRecommendations from '../product/ProductRecommendations'

export default {
    name: 'Cart',
    components: {
        Fragment,
        CartList,
        CouponCode,
        CartTotal,
        CartActions,
        CartItemsSaved,
        ProductRecommendations
    }
}
</script>
 
<style scoped>
    .cart-list-section {
        margin:15px 0;
    }
</style>