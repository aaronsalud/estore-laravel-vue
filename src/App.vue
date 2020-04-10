<template>
  <fragment>
    <navbar></navbar>
    <shop></shop>
  </fragment>
</template>

<script>
import {Fragment} from 'vue-fragment'
import Navbar from './components/Navbar'
import Shop from './components/shop/Shop'

export default {
  name: 'App',
  components: {
    Fragment,
    Navbar,
    Shop
  }
}
</script>

<style>
</style>
