import { createApp } from 'vue'
import Day from 'dayjs'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const app = createApp(App)
app.mixin({
  methods: {
    formatDate (date) {
      return Day(date).format('DD/MM/YYYY hh:mm A')
    },
    workingDays (start, end = null) {
      const days = Day(start).diff(end || Day(), 'day')

      return Math.abs(days)
    }
  }
})

app.use(store)
app.use(router)
app.mount('#app')
