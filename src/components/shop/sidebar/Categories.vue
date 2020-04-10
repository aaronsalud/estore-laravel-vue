<template>
    <div>
        <h3>By Category</h3>
        <ul>
            <li v-for="(category, index) in categories" :key="index"><a :href="category.link">{{category.title}}</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Categories',
    data(){
        return{
            categories: [
                {title: 'Laptops', link: '#'},
                {title: 'Desktops', link: '#'},
                {title: 'Mobile Phones', link: '#'},
                {title: 'Tablets', link: '#'},
                {title: 'TVs', link: '#'},
                {title: 'Digital Cameras', link: '#'},
                {title: 'Appliances', link: '#'}
            ]
        }
    }
}
</script>

<style>

</style>