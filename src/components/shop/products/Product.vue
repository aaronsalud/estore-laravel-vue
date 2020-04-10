<template>
    <b-col class="product">
        <a :href="product.link"><img src="@/assets/images/macbook-pro.png" alt="product"></a>
        <a :href="product.link"><div class="product-name">{{product.name}}</div></a>
        <div class="product-price">{{product.price}}</div>
    </b-col>
</template>

<script>
export default {
    name: 'Product',
    props: ['product']
}
</script>

<style scoped>
    .product{
        padding:15px;
    }
</style>