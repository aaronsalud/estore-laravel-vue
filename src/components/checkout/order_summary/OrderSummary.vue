<template>
    <div class="checkout-table-container">
        <div class="spacer"></div>
        <h2>Your Order</h2>
        <div class="checkout-table">
            <order-item></order-item>
        </div>
        <div class="checkout-totals">
            <div class="checkout-totals-left">
                Subtotal <br>
                Discount (10OFF - 10%) <br>
                Tax <br>
                <span class="checkout-totals-total">Total</span>
            </div>
            <div class="checkout-totals-right">
                $7499.97 <br>
                -$750.00 <br>
                $975.00 <br>
                <span class="checkout-totals-total">$8474.97</span>
            </div>
        </div>
    </div>
</template>

<script>
import OrderItem from './OrderItem'
export default {
    name: 'OrderSummary',
    components: {
        OrderItem
    }
}
</script>

<style scoped>
    .checkout-totals {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #919191;
        padding: 18px 0;
        line-height: 2;
    }

    .checkout-totals-right {
        text-align: right;
    }

    .checkout-totals-total {
        font-weight: bold;
        font-size: 22px;
        line-height: 2.2;
    }
</style>