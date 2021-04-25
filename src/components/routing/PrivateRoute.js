import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
  exact,
  path,
  component,
  isAuthenticated,
  loading,
  token,
}) => {
  return !isAuthenticated && loading && !token ? (
    <Redirect to='/login' />
  ) : (
    <Route exact={exact} path={path} component={component} />
  )
}

export default PrivateRoute
