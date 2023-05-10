<script setup>
import axios from 'axios'
import { ref } from 'vue'
const user = ref({
  email: '',
  password: ''
})

const loging = async () => {
  const response = await axios.post('http://localhost:8000/api/login/', {
    email: user.value.email,
    password: user.value.password
  })
  localStorage.setItem('access_token', response.data.access)
  localStorage.setItem('refresh_token', response.data.refresh)
  // this.$router.push('/')
}
</script>

<template>
  <div style="width: 50%; margin-bottom: 2%; margin-top: 2%;" class="container">
        <div style="text-align: center;">
            <h2>Войти</h2>
            <p>Напишите логин и пароль чтобы войти свой аккаунт</p>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Напишите имя</label>
            <input type="email" v-model="user.email" placeholder="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="Form" class="form-text"></div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Напишите номер</label>
            <input type="password" v-model="user.password" placeholder="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div style="text-align: center;">
            <button type="submit " @click="loging" class="btn btn-primary ">Отправить</button>
        </div>
      </div>
</template>
  