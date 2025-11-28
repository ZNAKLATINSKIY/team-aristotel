<script setup>
import { ref } from 'vue'

const itemCount = ref(0)
const newItemName = ref('')
let items = ref([])

function addItem(itemName) {
    const newItem = {
        id: itemCount.value,
        name: `${itemName}`
    }
    items.value.push(newItem)
    itemCount.value++
}
function deleteItem(id) {
    items.value = items.value.filter(item => item.id !== id)
}   
</script>

<template>
  <h1>🛒 Список покупок</h1>

  <div class="shop__add">
    <input type="text" placeholder="Введите товар" v-model="newItemName" />
    <button type="button" @click="addItem(newItemName)">Добавить</button>
  </div>

  <div class="shop__container">
    <p v-if="items.length === 0" class="shop__empty-message">
        Список пуст. Добавьте первый товар.
    </p>

    <ul v-else class="shop__items">
      <li v-for="item in items" :key="item" class="shop__item">
        <span>{{ item.name }}</span>
        <button @click="deleteItem(item.id)" class="item__delete-btn">
            Удалить
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
    .shop__add {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    input {
        width: 200px;
        height: 30px;
    }
    .shop__items {
        width: 500px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
</style>