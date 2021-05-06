<template>
  <header class="px-4 py-1 bg-gray-900">
    <div class="container flex place-items-center justify-between mx-auto">
      <div>
        <router-link :to="{name: 'Home'}" class="block w-20">
          <img class="w-auto" src="@/assets/logo.svg" alt="Problematic Evaly">
        </router-link>
      </div>

      <nav class="py-2">
        <ul class="list-none">
          <li class="inline-block" v-if="!isAuthenticated">
            <router-link :to="{name: 'Login'}" class="inline-block transition-all text-sm text-white py-1 px-3 bg-red-700 rounded-full">Login</router-link>
          </li>

          <Menu v-else as="li" class="relative inline-block">
            <MenuButton class="inline-flex justify-center w-full px-3 py-1 text-sm text-white bg-red-700 rounded-full focus:outline-none">
              Welcome, {{ profile.first_name }}
              <ChevronDownIcon class="w-5 h-5 ml-2 -mr-1" aria-hidden="true"/>
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <router-link
                      to="/profile"
                      :class="[
                        active ? 'bg-red-700 text-white' : 'text-gray-900',
                        'transition-all ease-in-out duration-200 group flex rounded-md items-center w-full px-4 py-2 text-sm focus:outline-none',
                      ]"
                    >
                      Profile
                    </router-link>
                  </MenuItem>

                  <MenuItem v-slot="{ active }">
                    <router-link
                      :to="{name: 'Orders'}"
                      :class="[
                        active ? 'bg-red-700 text-white' : 'text-gray-900',
                        'transition-all ease-in-out duration-200 group flex rounded-md items-center w-full px-4 py-2 text-sm focus:outline-none',
                      ]"
                    >
                      Orders
                    </router-link>
                  </MenuItem>
                </div>

                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-red-700 text-white' : 'text-gray-900',
                        'transition-all ease-in-out duration-200 group flex rounded-md items-center w-full px-4 py-2 text-sm focus:outline-none',
                      ]"
                      v-on:click="handleLogout"
                    >
                      Logout
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { createNamespacedHelpers } from 'vuex'

const Auth = createNamespacedHelpers('auth')

export default {
  components: {
    Menu, MenuButton, MenuItems, MenuItem, ChevronDownIcon
  },

  data () {
    return {}
  },

  computed: {
    ...Auth.mapGetters({
      profile: 'profile',
      isAuthenticated: 'isAuthenticated'
    })
  },

  methods: {
    ...Auth.mapActions({
      logout: 'logout'
    }),

    handleLogout () {
      this.logout()
        .then(() => {
          this.$router.push({ name: 'Home' })
        })
    }
  }
}
</script>

<style>

</style>
