<script setup>
import { useGetData } from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const { loading, data, getData, errorData } = useGetData();

const back = () => {
  router.push('/pokemon')
}

// const getData = async () => {
//   try {
//     const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
//     poke.value = data
//   } catch (error) {
//     console.log(error)
//     poke.value = null
//   }
// }
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
  <p v-if="errorData">El pokemon no existe!</p>
  <p v-if="loading">Cargando información...</p>

  <div v-if="data" class="poke__container">
    <h1 class="title">{{ $route.params.name.charAt(0).toUpperCase() + $route.params.name.slice(1) }}</h1>
    <img :src="data.sprites?.other.dream_world.front_default" alt="{{ $route.params.name }}" height="200" width="200" />
    <div>
      <img :src="data.sprites?.front_default" alt="{{ $route.params.name }}" height="100" width="100" />
      <img :src="data.sprites?.back_default" alt="{{ $route.params.name }}" height="100" width="100" />
    </div>
    <p v-for="(pokemon, index) in data.types" :key="index">
      Tipo: {{ pokemon.type.name }}
    </p>
    <p>Peso: {{ data.weight }}</p>
  </div>

  <div v-else>
    <button @click="back" class="btn-pagination">Volver</button>
  </div>
</template>

<style>
.poke__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>