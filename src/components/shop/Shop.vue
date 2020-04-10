<template>
  <b-container>
      <b-row>
          <b-col>
              <sidebar></sidebar>
          </b-col>
          <b-col>
              <product-list></product-list>
          </b-col>
      </b-row>

  </b-container>
</template>

<script>
import Sidebar from './sidebar/Sidebar'
import ProductList from './products/ProductList'
export default {
    name: 'Shop',
    components: {
        Sidebar,
        ProductList
    }
}
</script>

<style>
</style>