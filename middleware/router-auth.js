export default function ({ store, redirect, route }) {
    store.state.userid != null && route.name == 'login' ? redirect('/') : ''
    store.state.userid == null && isAdminRoute(route) ? redirect('/login') : ''
  }
  
  function isAdminRoute(route) {
    if (route.matched.some(record => record.path == '/')) {
      return true
    }
  }

  // need to edit admin root meaning '/'