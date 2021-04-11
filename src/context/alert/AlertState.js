import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = (props) => {
  const intialState = []

  const [state, dispatch] = useReducer(alertReducer, intialState)

  // Set alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuid()
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id },
    })
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
