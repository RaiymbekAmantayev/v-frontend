<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const isLoaded = ref(false)
const products = ref([])
const route = useRoute()

const fetchProducts = async () => {
  isLoaded.value = false
  const product_req = await axios.get('http://localhost:8000/api/products', {
    params: {
      category: route.query.category || 1
    }
  })
  products.value = product_req.data.results
  isLoaded.value = true
}

watch(route, async () => {
  isLoaded.value = false
  products.value = []
  await fetchProducts()
})

onMounted(async () => {
  await fetchProducts()
})
</script>

<template>
  <h1>Products</h1>
  <div style="background-color:aliceblue;" class="container">
    <div class="dropdown d-flex justify-content-end my-2">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by
      </a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Price asc</a></li>
        <li><a class="dropdown-item" href="#">Price desc</a></li>
        <li><a class="dropdown-item" href="#">Price gte</a></li>
      </ul>
    </div>
  <div v-if="isLoaded" class="row row-cols-4 g-2">
    <div class="card card-hover"
    style="width: 18rem; border-radius:7%"
    v-for="product in products" 
      :key="product.id"
      >
        <img :src="product.image" :alt="product.title" class="ard-img-top"/>
       <div class="card-body">
        <h5 class="card-title">{{ product.title }} </h5>
        <p class="card-text">{{ product.price }}</p>
        </div>
      </div>
        
     <div v-for="product in products" :key="product.id" class="col">
        <div class="card card-hover">
          <img :src="product.image" class="card-img-top"  style="width: 100%; margin: 5% 5%;" :alt="product.title"/>
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <nav class="py-4" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.card-hover:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>  
<!-- <style scoped>
.card-hover:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>


<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const isLoaded = ref(false)
const products = ref([])
const route = useRoute()

const fetchProducts = async () => {
  isLoaded.value = false
  const product_req = await axios.get('http://localhost:8000/api/products', {
    params: {
      category: route.query.category || 1
    }
  })
  products.value = product_req.data.results
  isLoaded.value = true
}

watch(route, async () => {
  isLoaded.value = false
  products.value = []
  await fetchProducts()
})

onMounted(async () => {
  await fetchProducts()
})
</script>

<template >
  <h1>Products</h1>
  <div style="background-color:aliceblue;" class="container">
    <div class="dropdown d-flex justify-content-end my-2">
      <a
        class="btn btn-secondary dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by
      </a>

      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Price asc</a></li>
        <li><a class="dropdown-item" href="#">Price desc</a></li>
      </ul>
    </div>
    <div v-if="isLoaded" class="row row-cols-4 g-2">
      <div
        class="card card-hover"
        style="width: 18rem; border-radius: 15%;"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.image" class="card-img-top" :alt="product.title" />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.price }}</p>
        </div>
      </div>

      <div v-for="product in products" :key="product.id" class="col">
        <div class="card card-hover">
          <img :src="product.image" class="card-img-top" :alt="product.title"/>
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <nav class="py-4" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.card-hover:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>
 -->
