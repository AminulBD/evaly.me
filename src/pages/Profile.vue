<template>
  <div class="bg-gray-100 pt-4 min-h-screen">
    <div class="container mx-auto bg-white shadow-sm rounded p-5">
      <h3 class="uppercase text-lg border-b-2 block mb-2">Personal Information</h3>
      <div class="divide-y divide-gray-100">
        <div class="flex py-1">
          <div class="w-40">
            Username:
          </div>
          <div>
            {{ profile.username }} ({{ profile.user_type }})
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            First Name:
          </div>
          <div>
            {{ profile.first_name }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Last Name:
          </div>
          <div>
            {{ profile.last_name }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Email:
          </div>
          <div>
            {{ profile.email }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Contact:
          </div>
          <div>
            {{ profile.contact }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Status:
          </div>
          <div>
            {{ profile.is_active ? 'Active' : 'Banned' }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Evaly Staff:
          </div>
          <div>
            {{ profile.is_staff ? 'Yes' : 'No' }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Role:
          </div>
          <div>
            {{ profile.role !== '' ? profile.role : 'N/A' }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Super Admin:
          </div>
          <div>
            {{ profile.is_superuser ? 'Yes' : 'No' }}
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Joined at:
          </div>
          <div>
            {{ formatDate(profile.date_joined) }} ({{ workingDays(profile.date_joined)}})
          </div>
        </div>

        <div class="flex py-1">
          <div class="w-40">
            Last Login:
          </div>
          <div>
            {{ formatDate(profile.last_login) }}
          </div>
        </div>
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
      profile: 'profile'
    })
  }
}
</script>
