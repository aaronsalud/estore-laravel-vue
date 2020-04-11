<template>
    <div class="product-recommendations">
      <h3>You might also like...</h3>
      <b-row>
          <b-col v-for="(product, index) in recommended_products" :key="index" class="recommended-product">
              <img src="@/assets/images/macbook-pro.png" alt="">
              <p>{{product.title}}</p>
              <p>{{product.price}}</p>
          </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
    name: 'ProductRecommendations',
    data(){
        return{
            recommended_products : [
                {
                    title: 'Macbook Pro',
                    price: '$2499.99'
                },
                {
                    title: 'Macbook Pro',
                    price: '$2499.99'
                },
                {
                    title: 'Macbook Pro',
                    price: '$2499.99'
                },
                {
                    title: 'Macbook Pro',
                    price: '$2499.99'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .product-recommendations{
        padding: 50px;
        background: #F5F5F5;
        margin-top:30px;
    }

    .recommended-product{
        border:1px solid #979797;
        text-align:center;
        max-width: 280px;
        margin:5px;
        background-color: #FFFFFF;
    }

    .recommended-product img{
        margin-top:15px;
    }
</style>