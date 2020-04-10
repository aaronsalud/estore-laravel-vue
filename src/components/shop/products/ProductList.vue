<template>
     <div>
        <h1 class="stylish-heading">Laptops</h1>
            <div class="products text-center">
                <product></product>
            </div>
        </div>
</template>

<script>
import Product from './Product'
export default {
    name: 'ProductList',
    components: {
        Product
    }
}
</script>

<style>

</style>