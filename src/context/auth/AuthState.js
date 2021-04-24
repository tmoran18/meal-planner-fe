import { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from '../types'
import axios from 'axios'

const AuthState = (props) => {
  const intialState = {
    token: localStorage.getItem('token'),
    isAuthenicated: null,
    loading: true,
    user: null,
    error: null,
  }

  const [state, dispatch] = useReducer(authReducer, intialState)

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/users', formData, config)
      // The payload will be a JWT Token
      dispatch({ type: REGISTER_SUCCESS, payload: res.data })
      loadUser()
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      })
    }
  }

  // login User
  const login = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/auth', formData, config)
      // The payload will be a JWT Token
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      loadUser()
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      })
    }
  }

  // Logout user
  const logout = () => {
    dispatch({ type: LOGOUT })
  }

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/auth')
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      })
    }
  }

  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenicated: state.isAuthenicated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
