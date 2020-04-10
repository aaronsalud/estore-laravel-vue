<template>
    <div>
        <h3>By Price</h3>
        <ul>
            <li v-for="(price, index) in prices" :key="index"><a :href="price.link">{{price.title}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Prices',
    data(){
        return{
            prices: [
                {title: '$0 - $700', link: '#'},
                {title: '$700 - $2500', link: '#'},
                {title: '$2500+', link: '#'},
            ]
        }
    }
}
</script>

<style>

</style>