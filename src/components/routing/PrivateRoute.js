import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const PrivateRoute = (props) => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, loading } = authContext
  return !isAuthenticated && loading ? (
    <Redirect to='/login' />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  )
}

export default PrivateRoute
