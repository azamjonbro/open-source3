<template>
    <div class="bg-white p-6 rounded shadow-md">
      <h2 class="text-2xl font-bold mb-4">Translate this:</h2>
      <div class="text-xl mb-4 p-3 bg-gray-100 rounded">{{ wordToTranslate[selectedLang] }}</div>
      <input v-model="answer"
             @keyup.enter="checkAnswer"
             placeholder="Your answer..."
             class="w-full p-2 border border-gray-300 rounded mb-4" />
      <p class="text-gray-600">Score: <span class="font-semibold">{{ userStore.score }}</span></p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useUserStore } from '@/store/userStore'
  
  const userStore = useUserStore()
  const words = ref([])
  const answer = ref('')
  const wordToTranslate = ref({})
  const selectedLang = ref('')
  
  function getRandomWord() {
    const rand = words.value[Math.floor(Math.random() * words.value.length)]
    const lang = Math.random() < 0.5 ? 'uz' : 'en'
    selectedLang.value = lang
    wordToTranslate.value = rand
  }
  
  async function fetchWords() {
    const res = await fetch('http://localhost:3001/api/words')
    words.value = await res.json()
    getRandomWord()
  }
  
  function checkAnswer() {
    const correct = selectedLang.value === 'uz'
      ? wordToTranslate.value.en.toLowerCase()
      : wordToTranslate.value.uz.toLowerCase()
  
    if (answer.value.trim().toLowerCase() === correct) {
      userStore.addPoint()
      alert('✅ Correct!')
    } else {
      alert('❌ Incorrect!')
    }
  
    answer.value = ''
    getRandomWord()
  }
  
  onMounted(() => {
    userStore.loadUser()
    fetchWords()
  })
  </script>
  