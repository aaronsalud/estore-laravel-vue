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
</style>
