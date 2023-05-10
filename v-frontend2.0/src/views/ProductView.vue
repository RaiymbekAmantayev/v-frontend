<script setup>
  import {useRoute} from "vue-router";
  import axios from "axios";
  import {onMounted, ref} from "vue";
  import cartMethods from '../utils/cart'

  const route = useRoute()
  const isLoaded = ref(false)
  const product = ref({})
  const fetchProduct = async () => {
      isLoaded.value = false
      const product_req = await axios.get(`http://localhost:8000/api/products/${route.params.id}`)
      product.value = product_req.data
      isLoaded.value = true
  }
  onMounted(async () => {
      await fetchProduct()
  })
</script>

<template>
<main style="background-color:aliceblue;" >
    <div style="height: 650px;">
<div class=" container card mb-3" style="margin-top: 1%;">
  <img  style="height: 400px; width:70%;  margin-left: 15%; margin-top: 1%;"  :src="product.image" class="card-img-top" :alt="product.title">
  <div class="card-body" style="text-align: center;">
    <h2 class="card-title">Толық ақпарат:</h2>
    <h3 class="card-text">{{ product.title }}</h3>
    <p class="card-text" style="font-weight: bold;"><small class="text-muted">{{ product.price }}$</small></p>
    <p class="card-text" style="font-weight: bold;"><small class="text-muted">{{ product.description }}</small></p>
    <button class="btn btn-dark" @click="cartMethods.addToCart(product)">
            Себетке қосу
          </button>
  </div>
</div>
        </div>
  <div>
      <div v-if="isLoaded">
          <p>{{ product.category }}</p>
      </div>
      <div v-else>
          ...loading
      </div>
  </div>


</main>
</template>


<style>
.card-body{
text-align: right;
}
main{
    height: 400%;
}
</style>
