<template>
  <fragment>
    <navbar></navbar>
    <router-view></router-view>
  </fragment>
</template>

<script>
import {Fragment} from 'vue-fragment'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Fragment,
    Navbar
  }
}
</script>

<style>
    .stylish-heading{
        border-top: solid 1px;
        border-bottom: solid 1px;
        width: 7%;
        padding: 10px;
        margin-bottom: 20px;
    }
</style>
