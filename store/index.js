import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null,
      authTags: null,
      authUrl: null,
      authName: null
    },
    mutations: {
      setUserId(state, authUser){
        state.authUser = authUser
      },
      signOut(state){
        state.authUser = null
      },
      setTags(state, authTags){
        state.authTags = authTags
      },
      setUrl(state, authUrl){
        state.authUrl = authUrl
      },
      setName(state, authName){
        state.authName = authName
      }
    },
    getters: {
      isAuthenticated: (state) => {
        return !!state.authUser
      }
    }
  })
}

export default createStore