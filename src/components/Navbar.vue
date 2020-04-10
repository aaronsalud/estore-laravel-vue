<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">eStore</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Shop</b-nav-item>
        <b-nav-item href="#">Blog</b-nav-item>
        <b-nav-item href="#">About</b-nav-item>
        <b-nav-item href="#">Cart</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>