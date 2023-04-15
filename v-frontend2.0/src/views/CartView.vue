<script setup>
import cartMethods from '../utils/cart';
import { ref } from 'vue';
import { onMounted } from 'vue';
const cart = ref([]);
const fetchCart=()=>{
    cart.value = cartMethods.getCart();
}
const removeItem=(id)=>{
    cartMethods.removeFromCartById(id);
    cart.value = cartMethods.getCart();
}
const clearCart = ()=>{
    cartMethods.clearCart();
    cart.value = cartMethods.getCart()
}
onMounted(async ()=>{
    fetchCart()
})
</script>
<template> 
        <!-- <div class="card-body" v-for="item in cart" :key="item.id"> -->
<main style="background-color: cyan;" >
    <h1 style="text-align: center;">Cart</h1>
    <div style="text-align: center; background-color: antiquewhite;" class="card-group container" v-for="item in cart" :key="item.id">
  <div class="card" style="width: 50%; border: 1px solid black; margin: 2%; margin-left: 15%; margin-right: 15%;"> 
    <img :src="item.image" style="width: 300px; "  class="card-img-top" :alt="item.title">
    <div class="card-body justify-content-center ">
      <h2 class="card-title">{{ item.title }}</h2>
      <h3 class="card-text">{{ item.price }}</h3>
      <p class="card-text"><small class="text-body-secondary">{{ item.description }}</small></p>
      <button @click="removeItem(item.id)">Remove</button>
    </div>
  </div>
</div>
<div style="text-align: center;">
<h3>Total:{{ cartMethods.getCartTotal() }}</h3>
    <button @click="clearCart()">Clear cart</button>
</div>
</main>
</template>
<script>
export default {
    name: "CartView"
}
</script>

<!-- <button @click="removeItem(item.id)">Remove</button> -->

