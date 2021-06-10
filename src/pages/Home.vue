<template>
  <div class="bg-gray-100 py-2 min-h-screen">
    <div class="container mx-auto">
      <div class="w-96 bg-white border-l-4 border-t-4 border-blue-600 p-10 mx-auto rounded-tl">
        Hello {{ profile.first_name }}, View your orders <router-link class="border-b-2 border-red-700" :to="{name: 'Orders'}">here</router-link>.
      </div>

      <div class="w-96 bg-white border-l-4 mt-10 border-t-4 border-green-600 p-10 mx-auto rounded-tl">
        Hi folks, I'm trying to build a freaking app to track my Workdays (AKA: Kormodibosh).
      </div>

      <div class="w-96 bg-white border-l-4 mt-10 border-t-4 border-red-500 p-10 mx-auto rounded-tl">
        Note: When you are login using your evaly username and password, All information will be stored in your browser and all safe as your computer. You can see the source linked in the footer.
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const Auth = createNamespacedHelpers('auth')

export default {
  computed: {
    ...Auth.mapGetters({
      isAuthenticated: 'isAuthenticated',
      profile: 'profile'
    })
  }
}
</script>
