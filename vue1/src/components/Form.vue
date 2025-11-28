<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const pas = ref('')

const nameInput = ref(null)
const pasInput = ref(null)

const change = (event) => {
  const el = event.target
  const val = el.value.trim()

  if (val === '') {
    el.style.setProperty("border", "1px solid red", "important")
  } else {
    el.style.setProperty("border", "1px solid green", "important")
  }
}

const sendData = () => {
  if (pas.value.trim().length < 6) {
    pasInput.value.style.setProperty("border", "1px solid red", "important")
    alert("Пароль минимум 6 символов!")
  } 
  else if (/\d/.test(name.value)) {
    nameInput.value.style.setProperty("border", "1px solid red", "important")
    alert("Имя не должно содержать цифр!")
  }
  else if (!name.value || !email.value || !pas.value) {
    alert("Введите данные!")
  } 
  else {
    alert("Данные отправлены!")
  }
}
</script>

<template>
  <form @submit.prevent="sendData">
    <input ref="nameInput" @input="change" v-model="name" type="text" placeholder="Введите имя">
    <input @input="change" v-model="email" type="email" placeholder="Введите почту">
    <input ref="pasInput" @input="change" v-model="pas" type="password" placeholder="Введите пароль">
    <button type="submit">Отправить</button>
  </form>
</template>
