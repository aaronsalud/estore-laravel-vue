<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">eStore</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-link v-for="(link, index) in links" :key="index" :to="link.to" router-tag="b-nav-item">{{link.title}}</b-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
      return {
        links: [
          { title: 'Shop', to: '/shop' },
          { title: 'Cart', to: '/cart' }
          // { title: 'Blog', to: '/blog' },
          // { title: 'About', to: '/about' },
     
        ]
      }
    }
}
</script>

<style>

</style>