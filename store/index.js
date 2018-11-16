import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null
    },
    mutations: {
      setUserId(state, authUser){
        state.authUser = authUser
        console.log(authUser)
      },
      signOut(state){
        state.authUser = null
      }
    },
    getters: {
      getTags: (state, getters) => {
        return this.$store.state.tags
      }
    }
  })
}

export default createStore