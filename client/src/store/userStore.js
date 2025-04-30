import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    password: '',
    score: 0
  }),
  actions: {
    login(username, password) {
      this.username = username
      this.password = password
      this.score = 0
      localStorage.setItem('user', JSON.stringify(this.$state))
    },
    loadUser() {
      const data = localStorage.getItem('user')
      if (data) Object.assign(this, JSON.parse(data))
    },
    addPoint() {
      this.score++
      localStorage.setItem('user', JSON.stringify(this.$state))
    }
  }
})
