import evaly from '@/api/evaly'

const namespaced = true
const guestUser = {
  first_name: 'Guest',
  last_name: 'User'
}

const initalState = () => {
  const accessToken = localStorage.ACCESS_TOKEN
  const refreshToken = localStorage.REFRESH_TOKEN
  const tokenValidity = localStorage.TOKEN_VALIDITY
  const profile = localStorage.USER_PROFILE

  return {
    profile: profile && profile.length > 3 ? JSON.parse(profile) : guestUser,
    accessToken: accessToken || null,
    refreshToken: refreshToken || null,
    tokenValidity: tokenValidity || null,
    isAuthenticated: accessToken && accessToken.length > 4
  }
}
const state = initalState()

const mutations = {
  LOGIN_USER: (state, val) => {
    state.accessToken = val.accessToken
    state.refreshToken = val.refreshToken
    state.tokenValidity = val.tokenValidity
    state.isAuthenticated = val.accessToken && val.accessToken.length > 4
  },

  MAKE_PROFILE: (state, val) => {
    state.profile = val
  },

  LOGOUT_USER: (state) => {
    state.profile = guestUser
    state.accessToken = null
    state.refreshToken = null
    state.isAuthenticated = false
  }
}

const actions = {
  login ({ dispatch, commit }, credential) {
    return evaly.post('/eauth/api/v1/auth/login', credential)
      .then(({ data }) => {
        const tokenValidity = (new Date()).getTime() + (2000 * 1000)

        localStorage.ACCESS_TOKEN = data.data.access_token
        localStorage.REFRESH_TOKEN = data.data.refresh_token
        localStorage.TOKEN_VALIDITY = tokenValidity

        commit('LOGIN_USER', {
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
          tokenValidity: tokenValidity
        })

        dispatch('fetchProfile', data.data.access_token)
      })
  },

  refreshToken ({ dispatch, commit }, refreshToken = null) {
    refreshToken = refreshToken !== null ? refreshToken : localStorage.REFRESH_TOKEN

    return evaly.post('/eauth/api/v1/auth/token/refresh', { refresh_token: refreshToken })
      .then(({ data }) => {
        const tokenValidity = (new Date()).getTime() + (2000 * 1000)

        localStorage.ACCESS_TOKEN = data.data.access_token
        localStorage.REFRESH_TOKEN = data.data.refresh_token
        localStorage.TOKEN_VALIDITY = tokenValidity

        commit('LOGIN_USER', {
          accessToken: data.data.access_token,
          refreshToken: data.data.refresh_token,
          tokenValidity: tokenValidity
        })

        dispatch('fetchProfile', data.data.access_token)
      })
  },

  fetchProfile ({ commit }, token = null) {
    if (token && token.length > 0) {
      evaly.defaults.headers.common.Authorization = 'Bearer ' + token
    }

    return evaly.get('/eauth/api/v1/auth/profile')
      .then(({ data }) => {
        localStorage.USER_PROFILE = JSON.stringify(data.data)

        commit('MAKE_PROFILE', data.data)
      })
  },

  logout ({ commit }) {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('REFRESH_TOKEN')
    localStorage.removeItem('USER_PROFILE')
    localStorage.removeItem('TOKEN_VALIDITY')

    commit('LOGOUT_USER')

    // TODO: Fix me :D

    return evaly.post('/eauth/api/v1/auth/logout')
      .then(() => {
        localStorage.removeItem('ACCESS_TOKEN')
        localStorage.removeItem('REFRESH_TOKEN')
        localStorage.removeItem('USER_PROFILE')
        localStorage.removeItem('TOKEN_VALIDITY')

        commit('LOGOUT_USER')
      })
  }
}

const getters = {
  profile: (state) => state.profile,
  isAuthenticated: (state) => state.isAuthenticated,
  accessToken: (state) => state.accessToken,
  refreshToken: (state) => state.refreshToken,
  tokenValidity: (state) => state.tokenValidity
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
