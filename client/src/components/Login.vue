<template>
    <div class="flex items-center justify-center min-h-[80vh]">
      <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Kirish</h2>
        
        <label class="block text-gray-700 mb-1">Username</label>
        <input v-model="username"
               placeholder="Foydalanuvchi nomi"
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 transition" />
        
        <label class="block text-gray-700 mb-1">Password</label>
        <input v-model="password"
               type="password"
               placeholder="Parol"
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6 transition" />
  
        <button @click="login"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
          Kirish
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStore } from '@/store/userStore'
  
  const username = ref('')
  const password = ref('')
  const userStore = useUserStore()
  const router = useRouter()
  
  function login() {
    if (!username.value || !password.value) {
      alert("Iltimos, to‘liq kiriting")
      return
    }
    userStore.login(username.value, password.value)
    router.push('/game')
  }
  </script>
  