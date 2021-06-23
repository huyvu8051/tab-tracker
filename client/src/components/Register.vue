<template>
  <div>
    <h1>Register</h1>
    <p>{{ message }}</p>
    <input type="email" name="email" v-model="email" id="email" />
    <input type="password" name="password" v-model="password" id="password" />
    <button @click="register" type="submit">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      message: 'khong nam ma doi co an'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<style>
</style>
