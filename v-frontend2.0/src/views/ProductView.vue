<script setup>
  import {useRoute} from "vue-router";
  import axios from "axios";
  import {onMounted, ref} from "vue";

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
<main style="background-color: beige; width: 100%;">
    <div class="container-sm sticky-sm-top" style="border: 1px solid black; width: 50%; margin-top: 1%;"><img :src="product.image" style="text-align: left;" class="card-img-top" :alt="product.title"></div>
            <div style="text-align: center;" class="card-body">
                <h1>Product</h1>
                <h5 class="card-title">{{ product.title }}</h5>
                <h4 class="card-text">{{ product.price }}</h4>
                <p class="card-text">{{product.description }}</p>
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
