<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-100 py-5 min-h-screen">
    <div class="container bg-gray-100 mx-auto">
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Invoice
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Details</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="order in orders" :key="order.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">#{{ order.id }}</div>
                      <div class="text-sm text-gray-500">{{ order.invoice_no }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">Ordered at: {{ formatDate(order.date) }}</div>
                      <div class="text-sm text-gray-500">Working Days: {{ workingDays(order.date) }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                        :class="[
                          order.order_status === 'pending' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800',
                          order.order_status === 'confirmed' ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800',
                          order.order_status === 'processing' ? 'bg-pink-100 text-pink-800' : 'bg-gray-100 text-gray-800',
                          order.order_status === 'picked' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800',
                          order.order_status === 'shipped' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                          order.order_status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                          order.order_status === 'cancel' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                        ]"
                      >
                        {{ order.order_status.toUpperCase() }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div>
                        <span
                          class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                          :class="[
                            order.payment_status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800',
                            order.payment_status === 'unpaid' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800',
                            order.payment_status === 'refunded' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                          ]"
                        >
                          {{ order.payment_status.toUpperCase() }}
                        </span>
                      </div>
                      <div v-if="order.payment_method !== ''">
                        <span class="text-xs leading-5 font-semibold">
                          Method: {{ order.payment_method.toUpperCase() }}
                        </span>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" class="text-indigo-600 hover:text-indigo-900" v-on:click.prevent="fetchDetails(order)">Details</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import evaly from '@/api/evaly'

export default {
  data () {
    return {
      isLoading: true,
      orders: [],
      currentPage: 1
    }
  },

  mounted () {
    this.fetchOrders(this.currentPage)
  },

  methods: {
    getStatusClass (status) {
      const statuses = {
        pending: 'bg-yellow-100 text-yellow-800',
        confirmed: 'bg-green-100 text-'
      }

      return statuses[status] || 'bg-gray-100 text-gray-800'
    },

    fetchOrders (page = 1) {
      evaly.get('/core/custom/orders/', {
        params: { page }
      }).then(({ data }) => {
        this.orders = this.orders.concat(data.results)
        this.currentPage += 1

        if (data.next && data.next.length > 10) {
          this.fetchOrders(this.currentPage)
        }
      }).catch(err => {
        console.log(err.response)
      })
    },

    fetchDetails (order) {
      alert('WIP ;)')
    }
  }
}
</script>
