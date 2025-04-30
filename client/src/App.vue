<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Translator App</h1>
      <nav class="space-x-4 local">
        <router-link to="/" class="text-blue-500 hover:underline">Login</router-link>
        <router-link to="/game" class="text-blue-500 hover:underline">Game</router-link>
        <router-link to="/createwords" class="text-blue-500 hover:underline">Add Word</router-link>
      </nav>
    </header>
    <main class="p-6 max-w-2xl mx-auto">
      <router-view />
    </main>
  </div>
</template>
<style scoped>
  .local{
    display: flex;
    gap: 20px;
  }
a{
    text-decoration: none;
    color: #3b82f6;
    
  }
</style>