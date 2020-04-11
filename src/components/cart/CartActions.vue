<template>
    <div class="cart-buttons">
        <a href="#" class="btn btn-info">Continue Shopping</a>
        <a href="#" class="btn btn-primary">Proceed to Checkout</a>
    </div>
</template>

<script>
export default {
    name: 'CartActions'
}
</script>

<style scoped>
     .cart-buttons {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }
</style>