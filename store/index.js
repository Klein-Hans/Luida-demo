import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      userid: null
    },
    mutations: {
      setUserId(state, userid){
        state.userid = userid
      },
      signOut(state){
        state.userid = null
      }
    }
  })
}

export default createStore