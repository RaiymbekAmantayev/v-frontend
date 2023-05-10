<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const isLoaded = ref(false)
const products = ref([])
const route = useRoute()

const Loading = ref(false)
const sale = ref([])
const user = ref({
  name: '',
  number: ''
})

const SendClick = async () => {
  await axios.post(
    'http://localhost:8000/api/clicks/',{
    first_name: user.value.name,
    number: user.value.number
    }
  )
}

const fetchProducts = async () => {
  isLoaded.value = false
  const product_req = await axios.get('http://127.0.0.1:8000/api/last_five')
  products.value = product_req.data.results
  isLoaded.value = true
}

const fetchProduct = async () => {
  Loading.value = false
  const product_req = await axios.get('http://127.0.0.1:8000/api/sale')
  sale.value = product_req.data.results
  Loading.value = true
}



onMounted(async () => {
  await fetchProducts()
})

onMounted(async () => {
  await fetchProduct()
})
</script>

<template >

  <main id="main">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/asus_rog_strix_g16.webp" class="d-block w-100" alt="notebook">
        </div>
        <div class="carousel-item">
          <img src="public/eshop.jpg" class="d-block w-100" alt="iphone 14">
        </div>
        <div class="carousel-item">
          <img src="public/SALE_july1140ac.jpg" class="d-block w-100" alt="xiaomi">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button >
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <section class="py-5 text-center container" style="background-color:aliceblue;">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Electronic.KZ</h1>
          <p class="lead text-body-secondary">Electronic.KZ Интернет-дүкені "Electronic" компаниясының жобаларының бірі – Қазақстан Республикасының электр тұрмыстық және компьютерлік техника дүкендерінің ұлттық желісінің көшбасшысы болып табылады. Егер Сіз Қазақстандағы ең жақсы интернет-дүкен іздесеңіз .</p>
        </div>
      </div>
      <p>
           <a href="#main"> <button style="margin: 2%;" class="btn btn-dark my-2">Басты бет</button></a>
           <a href="#news"> <button style="margin: 2%"  class="btn btn-dark my-2">Жаңа топтама </button></a>
            <a href="#sale"><button style="margin: 2%" class="btn btn-dark my-2">Жеңілдіктер</button></a>
            <a href="#contact"><button style="margin: 2%"  class="btn btn-dark my-2">Байланысу</button></a>
          </p>
    </section>

  <div class="py-5 text-center container"  style="margin-bottom: 2%; height: 180% ;">
  <h2 style="text-align:center" id="news">Жаңа тауарлар</h2>
  <div class="rows " style="background-color:antiquewhite;">
  <div class="card card-hover shadow-lg p-3 mb-5 bg-body-tertiary rounded" v-for="product in products" :key="product.id" >
    <img class="card-img-top" style="height: 60%;" :src="product.image" :alt="product.title"/>

          <h3 class="card-title">{{ product.title }}</h3>
           <p style="width: 100%; font-weight: bold; display: inline-block; text-align: center;" class="card-text">
            Бағасы:{{ product.price }}</p>
    <RouterLink :to="'products/' + product.id">
           <button class="btn btn-primary" onclick="#" >Толығырақ</button>
    </RouterLink>
  </div>
</div>

<h2 style="text-align:center; margin-top: 2%;" id="sale">Жеңілдіктер</h2>
<div class="rows " style="background-color:antiquewhite;">
  <div class="card card-hover shadow-lg p-3 mb-5 bg-body-tertiary rounded" v-for="product in sale" :key="product.id" >
    <img class="card-img-top" style="height: 60%;" :src="product.image" :alt="product.title"/>
          <h3 class="card-title">{{ product.title }}</h3>
           <p style="width: 100%; font-weight: bold; display: inline-block; text-align: center;" class="card-text">
            Бағасы:{{ product.price }}</p>
    <RouterLink :to="'products/' + product.id">
           <button class="btn btn-primary" onclick="#" >Толығырақ</button>
    </RouterLink>
  </div>
</div>


<section class="py-5 text-center container" style="background-color:aliceblue; ">
  <h1 id="contact">Байланысу</h1>
      <div class="rows row py-lg-5" style="height:300px; display: flex; flex-direction: column; text-align: left; align-items: center;">
        <div>
          <div style="height: 20%;"> 
          <h1 class="h1" >Контакты</h1>
        </div>
          <span>Телефон:</span>
          <h3 style="text-align: left;">8(747) 679 8570</h3>
          <span>Ресми сайт: </span>
          <p style="font-weight: bold; color: blue; ">https://tgrad.kz</p>
          <p></p>
          <p></p>
          <button class="btn btn-primary">Қоңырау шалу</button>
        </div>
        <div>
          <div style="height: 20%;"> 
          <h1 class="h1" >Мекен жай</h1>
        </div>
          <h3 style="text-align: left;">Алматы қаласы</h3>
          <span>Абай көшесі:34</span>
          <p >Жұмыс уақыты: </p>
          <span style="font-weight: bold; color: blue; ">дс-жс 10.00-22.00 </span>
          <p></p>
          <button class="btn btn-primary">Бронь жасау</button>
        </div>
        <div>
          <div style="height: 20%;"> 
          <h1 class="h1" >Желілер:</h1>
        </div >
        <div style="display: flex; justify-content: space-between;">
        <img  src="images/inst.webp"  alt="" style="height: 50px;">
        <img src="images/tiktok.webp" alt="" style="height: 50px;">
        <img src="images/twitter.webp" alt="" style="height: 50px;">
        <img src="images/1_Youtube.webp" alt="" style="height: 50px;">
      </div>
      <p></p>
      Осы желілер арқылы өтіп компания туралы жаңалықтарды біліп отырсаңыз болады
        </div>
      </div>
    </section>
    <form style="width: 50%;" class="container">
        <div style="text-align: center;">
            <h2>Форма</h2>
            <p>Заполните форму чтобы менеджер смог с вами связаться</p>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Напишите имя</label>
            <input type="text" v-model="user.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="Form" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Напишите номер</label>
            <input type="number" v-model="user.number" class="form-control" id="exampleInputPassword1">
        </div>
        <div style="text-align: center;">
            <button type="submit" @click="SendClick" class="btn btn-primary ">Отправить</button>
        </div>
        
    </form>
  </div>
</main>
</template>


<style>
.rows {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid black; */
  margin: 0;
  height: 30%;
}

.rows> div{
width: 40%;
height: 21rem;
width: 15rem; 
border-radius:7%
}

button{
  padding: 5px 10px;
  border:1px solid black;
  border-radius: 20%;
  background-color: blue;
  color: white;
}

button:hover{
  background-color: white;
  color: blue;
  padding: 7px 14px;


  }
  .ul{
margin: 1%; text-align: center;
}
</style>

