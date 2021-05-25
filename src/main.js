import { createApp } from 'vue'
import Day from 'dayjs'
import App from './App.vue'
import router from './router'
import store from './store'
import holidays from './data/holidays.json'
import './index.css'

const app = createApp(App)
app.mixin({
  methods: {
    holidays () {
      const days = {}
      const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

      Object.keys(holidays.years).forEach(year => {
        months.forEach(month => {
          const currentDays = {
            ...holidays.years[year][month] ?? {},
            ...holidays.common[month] ?? {}
          }

          Object.entries(currentDays).forEach(([day, value]) => {
            const today = `${year}-${month}-${day}`

            days[Day(today).unix()] = value
          })
        })
      })

      return days
    },
    formatDate (date) {
      return Day(date).format('DD/MM/YYYY hh:mm A')
    },
    workingDays (start, end = null) {
      const startDate = Day(start)
      const endDate = Day(end ?? Day())
      const startDateUnix = startDate.unix()
      const endDateUnix = endDate.unix()
      const actualDays = startDate.diff(endDate, 'day')

      const holidays = Object.keys(this.holidays()).filter(key => {
        const intKey = parseInt(key)

        return intKey >= startDateUnix && intKey <= endDateUnix
      })

      const weekends = () => {
        let result = []
        let current = startDate

        while(current.isBefore(endDate, 'day')) {
          if (current.day() < 5) {
            current = current.add(5 - current.day(), 'day')
          } else if (current.day() === 5) {
            result.push(current.format('DD/MM/YYYY hh:mm A'))
            current = current.add(1, 'day')
          } else if (current.day() === 6) {
            result.push(current.format('DD/MM/YYYY hh:mm A'))
            current = current.add(7, 'day')
          }
        }
        return result
      }

      
      return Math.abs(actualDays) - (holidays.length + weekends().length)
    }
  }
})

app.use(store)
app.use(router)
app.mount('#app')
