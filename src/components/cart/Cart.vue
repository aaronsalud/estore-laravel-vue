<template>
    <b-container>
        <b-row>
            <b-col>
               <cart-list></cart-list>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import CartList from './CartList'
export default {
    name: 'Cart',
    components: {
        CartList
    }
}
</script>

<style>

</style>