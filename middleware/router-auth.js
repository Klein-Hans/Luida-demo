export default function ({ store, redirect, route }) {
    if(store.getters.isAuthenticated === false && route.name !== 'login' && route.name !== 'signup'){
      redirect('/')
     }
  }
  
  // need to edit admin root meaning '/'