<template>
    <div class="cart-totals">
        <div class="cart-totals-left">
            Shipping is free because we’re awesome like that. Also because that’s additional stuff I don’t feel like figuring out :).
        </div>
        <div class="cart-totals-right">
            <div>
                Subtotal <br>
                Tax <br>
                <span class="cart-totals-total">Total</span>
            </div>
            <div class="cart-totals-subtotal">
                $7499.97 <br>
                $975.00 <br>
                <span class="cart-totals-total">$8474.97</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartTotal'
}
</script>

<style scoped>
    .cart-totals {
        margin: 30px 0;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        background: #F5F5F5; 
    }

    .cart-totals-left {
        width: 50%;
    }

    .cart-totals-right {
        display: flex;
        justify-content: space-between;
        width: 25%;
        text-align: right;
    }

    .cart-totals-total {
        font-weight: bold;
        font-size: 22px;
        line-height: 2;
    }
</style>