<template>
    <div class="bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl font-semibold mb-4">Add New Word</h2>
      <input v-model="uz" placeholder="O‘zbekcha"
             class="w-full p-2 border border-gray-300 rounded mb-3" />
      <input v-model="en" placeholder="Inglizcha"
             class="w-full p-2 border border-gray-300 rounded mb-4" />
      <button @click="submit"
              class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Qo‘shish
      </button>
      <p class="mt-4 text-sm text-green-600">{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const uz = ref('')
  const en = ref('')
  const message = ref('')
  
  async function submit() {
    const res = await fetch('http://localhost:3001/api/words', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uz: uz.value, en: en.value })
    })
  
    if (res.ok) {
      message.value = "✅ So‘z qo‘shildi!"
      uz.value = ''
      en.value = ''
    } else {
      message.value = "❌ Xatolik yuz berdi."
    }
  }
  </script>
  