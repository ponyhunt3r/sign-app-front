import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { inject } from 'mobx-react';

const store = ({ store }) => ({
    authStore: store.authStore
});

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authStore } = rest
  return (
    <Route {...rest} render={(props) => (
      authStore._isLogged === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />  
  )

}

  export default inject(store)(PrivateRoute);

