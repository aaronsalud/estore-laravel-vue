<template>
    <div class="checkout-table-row">
        <div class="checkout-table-row-left">
            <img src="@/assets/images/macbook-pro.png" alt="item" class="checkout-table-img">
            <div class="checkout-item-details">
                <div class="checkout-table-item">MacBook Pro</div>
                <div class="checkout-table-description">15 inch, 1TB SSD, 32GB RAM</div>
                <div class="checkout-table-price">$2499.99</div>
            </div>
        </div> 
        <div class="checkout-table-row-right">
            <div class="checkout-table-quantity">1</div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'OrderItem'
}
</script>

<style scoped>
    .checkout-table-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #919191;
        padding: 14px 0;
    }

    .checkout-table-row:last-child {
        border-bottom: 1px solid #919191;
    }

    .checkout-table-row-left, .checkout-table-row-right {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .checkout-table-row-left {
        width: 75%;
    }

    .checkout-table-img {
        max-height: 60px;
    }

    .checkout-table-description {
        color: #919191;
    }

    .checkout-table-price {
        padding-top: 6px;
    }

    .checkout-table-quantity {
        border: 1px solid #919191;
        padding: 4px 12px;
        margin-right: 5px;
    }
</style>