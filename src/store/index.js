import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUserData(state, payload){
      state.user = payload
    }
  },
  actions: {
    async getUserAction({ commit }){
      const accessToken = localStorage.getItem('access_token')
      const refreshToken = localStorage.getItem('refresh_token')
      const userResult = await Axios.GetUser({access_token: accessToken, refresh_token: refreshToken})
      const isUserFetchFail = !userResult?.data
      if( isUserFetchFail ){
        return { error: userResult?.reason }
      }
      const userData = userResult.data
      commit('setUserData', userData)
      return { data: userData }
    },

    async generateTokenAction(state){
      const refreshToken = localStorage.getItem('refresh_token')
      const tokenResult = await Axios.UpdateToken({refresh_token: refreshToken})
      const isGenerateTokenFail = !tokenResult?.data
      if( isGenerateTokenFail ) return false
      const { access_token, refresh_token } = tokenResult.data
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)
      return true
    },

    async verifyTokenAction({ state, dispatch }){
      const accessToken = localStorage.getItem('access_token')
      const refreshToken = localStorage.getItem('refresh_token')
      const hasTokens = !!accessToken && !!refreshToken
      if( !hasTokens ) return false
      const result = await Axios.VerifyToken({ access_token: accessToken, refreshToken: refreshToken })
      const isVerifyFail = !result?.data
      if( isVerifyFail ){
        const { reason: failReason } = result
        if( failReason === 'JWT_EXPIRED' ){
          const generateResult = await dispatch('generateTokenAction')
          if( !generateResult ) return false
          return true
        }
      }
      return true
    },

    async loginAction(state, payload){
      const { username, password } = payload
      const bodyData = { username: username, password: password }
      const loginResult = await Axios.Login(bodyData)

      const isLoginFail = !loginResult?.data
      if( isLoginFail ){
        let loginError = 'Terjadi kesalahan saat login'
        switch( loginResult?.reason ){
          case 'USER_NOT_FOUND':
            loginError = 'Akun tidak ditemukan'
            break
          case 'PASSWORD_NOT_MATCH':
            loginError = 'Password tidak sesuai'
            break
          
        }
        return {
          error: loginError
        }
      }

      const { access_token, refresh_token, user } = loginResult ?. data
      if( process.env.VUE_APP_BUILD === 'dev' ){
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refresh_token)
      }
      
      return { userData: user }
    },

    async registerAction({ dispatch }, payload){
      const registerResult = await Axios.Register(payload)
      const isRegisterFail = !registerResult ?. data
      if( isRegisterFail ){
        return { error: registerResult ?. message }
      }
      
      const { data: userData } = registerResult
      return { data: userData }
    }
  },
  modules: {
  
  }
})
