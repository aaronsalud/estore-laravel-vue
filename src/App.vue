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
  .main-container{
    margin:50px 0;
  }

  .full-width{
    width:100%;
  }
  .spacer{
    width:100%;
    padding:10px;
  }
  form.half-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }

  form button[type="submit"] {
    border-style: none;
    cursor: pointer;
    font-size: 18px;
    line-height: 1.6;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group  label {
    display: block;
  }

  .form-group input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }

  .stylish-heading{
    border-top: solid 1px;
    border-bottom: solid 1px;
    width: 7%;
    padding: 10px;
    margin-bottom: 20px;
  }
</style>
