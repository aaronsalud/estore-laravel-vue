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
        font-size:16px;
        margin-bottom:16px;
    }
    /deep/ a, a:hover{
        text-decoration: none !important;
        color: #212121;
    }

    /deep/ ul {
        list-style: none;
        padding:0;
    }
</style>