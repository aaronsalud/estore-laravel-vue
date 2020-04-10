<template>
  <b-container>
      <b-row>
          <b-col>
              <sidebar></sidebar>
          </b-col>
          <b-col></b-col>
      </b-row>

  </b-container>
</template>

<script>
import Sidebar from './sidebar/Sidebar'
export default {
    name: 'Shop',
    components: {
        Sidebar
    }
}
</script>

<style>
</style>