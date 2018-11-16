export default function ({ store, redirect, route }) {
  if(!store.getters.isAuthenticated && route.name !== 'login' && route.name !== 'signup'){
    redirect('/login')
  }
  if(store.getters.isAuthenticated && (route.name === 'login' || route.name === 'signup')){
    redirect('/users/' + store.state.authUser)
  }
  }
  
  // need to edit admin root meaning '/'