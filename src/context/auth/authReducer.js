import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from '../types'

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenicated: true,
        loading: false,
      }
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenicated: false,
        loading: true,
        user: null,
        error: action.payload,
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenicated: true,
        loading: false,
        user: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default authReducer
