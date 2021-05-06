<template>
  <div class="bg-gray-100 pt-10 min-h-screen">
    <div class="w-96 mx-auto p-10 shadow-md rounded bg-white">
      <div class="mb-3">
        <label for="username" class="text-gray-700">Username</label>
        <input
          id="username"
          class="mt-1 transition-colors ease-in-out block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          type="text"
          v-model="username"
          placeholder="Username...">
      </div>

      <div class="mb-3">
        <label for="password" class="text-gray-700">Password</label>
        <input
          id="password"
          class="mt-1 transition-colors ease-in-out block w-full rounded-md border-gray-300 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
          type="password"
          v-model="password"
          placeholder="Password...">
      </div>

      <button
        class="block w-full transition-all bg-red-700 rounded px-5 py-2 text-white shadow-sm focus:outline-none hover:bg-red-800"
        v-on:click="handleLogin">
        Login
      </button>

      <div class="bg-red-700 py-2 px-4 rounded text-white text-sm mt-2" v-if="error && error.length > 1">
        {{ error }}
      </div>

      <p class="text-xs text-gray-500 mt-2">
        <strong>Note:</strong> Evaly.me will not store your any data. All information will be stored in your browser. If you can't trust me, don't use it.
      </p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const Auth = createNamespacedHelpers('auth')

export default {
  data () {
    return {
      username: '',
      password: '',
      error: null
    }
  },

  methods: {
    ...Auth.mapActions({
      login: 'login'
    }),

    handleLogin () {
      // TODO: Validate username and passsword.
      this.error = null

      this.login({
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push({ name: 'Orders' })
      }).catch(error => {
        this.error = error.response?.data?.message
      })
    }
  }
}
</script>

<style>

</style>
