<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const isLoaded = ref(false)
const products = ref([])
const route = useRoute()

const fetchProducts = async () => {
  isLoaded.value = false
  const product_req = await axios.get('http://127.0.0.1:8000/api/products/?&price__lte=1400')
  products.value = product_req.data.results
  isLoaded.value = true
}


onMounted(async () => {
  await fetchProducts()
})

</script>


<style>
.row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid black; */
  margin: 0;
  height: 30%;
}

.row> div{
border: 1px solid black;
width: 40%;
height: 21rem;
width: 15rem; 
border-radius:7%
}

/* .card card-hover > a{
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
} */
</style>

<template>
  <div class="main container" style="background-color:azure ;">
    <h1 class="h1" style="color:brown;">Мечта</h1>
    <p style="color:blueviolet; font-weight: bold;">электроника дүкені</p>
    <ul class="ul">
    <div class="d-inline p-2 text-bg-dark">Доставка </div>
      <div class="d-inline p-2 text-bg-dark">Оплата </div>
      <div class="d-inline p-2 text-bg-dark">Акции</div>
      <div class="d-inline p-2 text-bg-dark"><a href="/about">Про нас</a></div>
    </ul>
    <div style="text-align: center; margin: 3%;">
    <img src="public/inetshop.jfif" style="height: 270px; text-align: center;" alt="">
  </div>
  <div style="background-color:antiquewhite; margin 0 ;">
  <h2 style="text-align:center">Жеңілдіктер</h2>
  <div class="row">
  <div class="card card-hover" v-for="product in products" :key="product.id" >
    <img class="card-img-top" style="height: 60%;" :src="product.image" :alt="product.title"/>
          <h3 class="card-title">{{ product.title }}</h3>
           <p style="width: 60%; font-weight: bold; display: inline-block;" class="card-text">Бағасы:{{ product.price }}$</p>
          
           <a href="#" class="btn btn-primary" style="border: 3px solid black; margin-top: 0%;">Подробнее</a>
  </div>
</div>
</div>
</div>

</template>

<style>
  .main {
    height: 180vh;
margin:0;
  }
  .ul{
margin: 1%; text-align: center;
}
</style>