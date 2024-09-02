<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pokemon">Pokemon</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  height: 80px;
  gap: 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  box-shadow: 0px 4px 5px 0px rgb(83, 83, 83);
}

nav a:hover {
  color: rgb(0, 255, 170);
}

nav .router-link-exact-active {
  border: 1px solid rgb(0, 255, 170);
  color: rgb(0, 255, 170);
  border-radius: 10px;
}

nav .router-link-exact-active:hover {
  background-color: transparent;
}

nav {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
