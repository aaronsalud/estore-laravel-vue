<template>
    <b-container class="checkout-page main-container">
        <h1 class="checkout-heading stylish-heading">Checkout</h1>
        <b-row>
            <b-col>
                <checkout-form></checkout-form>
            </b-col>
            <b-col></b-col>
        </b-row>
    </b-container>
</template>

<script>
import CheckoutForm from './CheckoutForm'
export default {
    name: 'Checkout',
    components: {
        CheckoutForm
    }
}
</script>

<style>
    .checkout-page{
        margin-top:50px;
    }
</style>