<template>
<fragment>
 <b-container class="product-page">
   <b-row>
     <b-col>
       <div class="product-image">
         <img src="@/assets/images/macbook-pro.png" alt="">
       </div>
     </b-col>
     <b-col>
        <div class="product-section-information">
            <h1 class="product-section-title">{{product.name}}</h1>
            <div class="product-section-subtitle">{{product.specifications}}</div>
            <div class="product-section-price">{{product.price}}</div>
            <p class="product-section-description">{{product.description}}</p>
            <button :href="product.link" class="button">Add to Cart</button>
        </div>
     </b-col>
   </b-row>
 </b-container>
 <product-recommendations></product-recommendations>
</fragment>
</template>

<script>
import {Fragment} from 'vue-fragment'
import ProductRecommendations from './ProductRecommendations'

export default {
    name: 'Product',
    components: {
      Fragment,
      ProductRecommendations
    },
    data(){
      return {
        product: {
          name:'Macbook Pro',
          specifications: '15 inch, 1TB SSD, 32GB RAM', 
          description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere facilis praesentium eaque et eum, illo repudiandae quia adipisci, soluta voluptatum. Reprehenderit inventore, sed a voluptatibus enim optio cum repellat?',
          image: '/assets/images/macbook-pro.png', 
          price: '$2499.99', 
          link: 'http://google.ca'
        }
      }
    }
}
</script>

<style scoped>
  .product-page{
    margin-top:30px;
  }

  .product-image{
      border:1px solid #979797;
      padding:100px;
      text-align:center;
  }

  .product-section-title{
    font-size: 38px;
    line-height: 1.2;
  }

  .product-section-subtitle{
    font-size: 20px;
    font-weight: bold;
    color: #919191;
  }

  .product-section-price {
    font-size: 38px;
    color: #212121;
    margin-bottom: 16px;
  } 

  .product-section-description {
    margin-bottom: 16px;
  }

  .button {
    border: 1px solid #212121;
    padding: 12px 40px;
  }
</style>