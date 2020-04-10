<template>
    <div class="sidebar">
       <categories></categories>
       <prices></prices>
    </div>
</template>

<script>
import Categories from './Categories'
import Prices from './Prices'

export default {
    name: 'Sidebar',
    components: {
        Categories,
        Prices
    }
}
</script>

<style scoped>
    /deep/ h3{
        font-weight:bold;
        margin-bottom:16px;
    }
    /deep/ a{
        text-decoration: none;
        color: #212121;
    }
</style>