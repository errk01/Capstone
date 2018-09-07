
import axios from '../../axios-auth.js'
import globalAxios from 'axios'
import router from '@/router.js'

// /Users/eriktaylor/Documents/GalvanizeG85/Q4/g85-capstone-submissions/stock/src/router.js

export default {
  state: {
    idToken: null,
    userId: null,
    user: null,
    portfolio: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.idToken = null
      this.userId = null
    },
    saveStock (state, portfolio) {
      state.portfolio = portfolio
    }
  },
  actions: {
    setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },
    register ({ commit, dispatch }, authData) {
      axios
        .post('/signupNewUser?key=AIzaSyDffWMDnpr9_NQRgw3tCTE0nibK0mkELjc', {
          firstName: authData.firstName,
          lastName: authData.lastName,
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', {authData})
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    saveData ({ commit, dispatch, state }, authData) {
      console.log(authData)
      globalAxios.post('/portfolio.json', {
        funds: authData.funds,
        stockPortfolio: authData.stockPortfolio,
        stock: authData.stock,
        returnSecureToken: true
      }).then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
        })
        dispatch('saveStock', { authData })
      })
    },

    login ({ commit, dispatch }, authData) {
      axios.post('/verifyPassword?key=AIzaSyDffWMDnpr9_NQRgw3tCTE0nibK0mkELjc', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },

    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
    },
    logout ({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/login')
    },
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUsers ({ commit, state }) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            users.id = key
            users.push(user)
          }
          commit('storeUser', users[0])
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user: (state) => {
      return state.user
    },
    isAuth: (state) => {
      return state.idToken !== null
    },
    stock: (state) => {
      return state.stock
    }
  }
}
