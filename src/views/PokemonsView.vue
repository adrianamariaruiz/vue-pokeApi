<script setup>
import { useGetData } from '@/composables/getData';
import { RouterLink } from 'vue-router';

const { loading, data, getData, errorData } = useGetData();

// const getData = async () => {
//   try {
//     const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
//     console.log(data.results)
//     pokemons.value = data.results
//   } catch (error) {
//     console.log(error)
//   }
// }

getData('https://pokeapi.co/api/v2/pokemon')
</script>

<template>
  <main>
    <h1 class="title">Pokemones</h1>
    <p v-if="errorData">{{ errorData }}</p>
    <p v-if="loading">Cargando información...</p>
    <div v-if="data">
      <ul class="pokemon__container">
        <li v-for="(pokemon, index) in data.results" :key="index" class="li__pokemons">
          <RouterLink :to="`/pokemons/${pokemon.name}`" class="pokemon__link">
            {{ pokemon.name }}
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/').at(-2)}.svg`"
              alt="{{ pokemon.name }}" width="100" height="100" />
          </RouterLink>
        </li>
      </ul>
      <div class="btn__container">
        <button :disabled="!data.previous" @click="getData(data.previous)" class="btn-pagination">Anterior</button>
        <button :disabled="!data.next" @click="getData(data.next)" class="btn-pagination">Siguiente</button>
      </div>
    </div>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 5px;
}

.title {
  margin: 10px;
}

.pokemon__container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.li__pokemons {
  border: 2px solid rgb(83, 83, 83);
  box-shadow: 2px 2px 5px 0px rgb(83, 83, 83);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  margin: 10px;
  font-size: 24px;
  width: 200px;
  height: auto;
  min-height: 100px;
}

.pokemon__link {
  display: flex;
  padding: 10px 2px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.btn__container {
  display: flex;
  justify-content: center;
  margin: 10px 5px;
}

.btn-pagination {
  border: 1px solid rgb(0, 255, 170);
  color: rgb(0, 255, 170);
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  width: 120px;
  margin: 5px 10px;
  cursor: pointer;
  background-color: transparent;
}

.btn-pagination:disabled {
  background-color: rgb(83, 83, 83);
  border: 1px solid rgb(83, 83, 83);
  color: rgb(139, 139, 139);
}
</style>
