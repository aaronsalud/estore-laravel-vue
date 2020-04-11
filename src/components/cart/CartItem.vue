<template>
    <div class="cart-table-row">
        <div class="cart-table-row-left">
            <a :href="item.link"><img src="@/assets/images/macbook-pro.png" alt="item" class="cart-table-img"></a>
            <div class="cart-item-details">
                <div class="cart-table-item"><a href="#">{{item.title}}</a></div>
                <div class="cart-table-description">{{item.description}}</div>
            </div>
        </div>
        <div class="cart-table-row-right">
            <div class="cart-table-actions">
                <a href="#">Remove</a> <br>
                <a href="#">Save for Later</a>
            </div>
            <div v-if="!quantityDisabled">
                <select class="quantity">
                    <option selected="">1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>{{item.price}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['item', 'quantityDisabled']
}
</script>

<style scoped>
    a, a:visited{
        color: #212121;
        text-decoration:none;
    }
    a:hover{
        color:#919191;
    }
    .cart-table-row {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #919191;
        padding: 14px 0;
    }

    .cart-table-row:last-child {
            border-bottom: 1px solid #919191;
    }

    .cart-table-row-left, .cart-table-row-right {
        display: flex;
        justify-content: space-between;
    }

    .cart-table-row-left {
        width: 50%;
    }

    .cart-table-row-right {
        width: 33%;
        padding-top: 10px;
    }

    .cart-table-img {
        max-height: 75px;
    }

    .cart-table-actions {
        text-align: right;
        font-size: 14px;
    }

    .cart-item-details {
        padding-top: 5px;
    }

    .cart-table-description {
        color: #919191;
    }

    .cart-options {
        color: #212121;
        background: transparent;
        font-size: 14px;
        font-weight: 300;
        padding: 0;
    }
    .cart-options:hover {
        color: lighten(#212121, 30%);
    }

</style>