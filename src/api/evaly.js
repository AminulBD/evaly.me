import axios from 'axios'

const API_URL = import.meta.env.VITE_EVALY_BACKEND
const client = axios.create({
  baseURL: API_URL,
  timeout: 60000
})

// TODO: get it from the vuex
if (localStorage.ACCESS_TOKEN && localStorage.ACCESS_TOKEN.length > 5) {
  client.defaults.headers.common.Authorization = 'Bearer ' + localStorage.ACCESS_TOKEN
}

client.defaults.headers.get.Accept = 'application/json'
client.defaults.headers.post.Accept = 'application/json'
client.defaults.headers.post['Content-Type'] = 'application/json'

export default client
