import { useReducer } from 'react'
import axios from 'axios'
import MealContext from './mealContext'
import mealReducer from './mealReducer'
import {
  ADD_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
  SET_CURRENT_MEAL,
  MEAL_ERROR,
} from '../types'

const MealState = (props) => {
  const intialState = {
    meals: [],
    current: null,
    error: null,
  }

  const [state, dispatch] = useReducer(mealReducer, intialState)

  // Add Meal
  const addMeal = async (meal) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/meals', meal, config)
      dispatch({ type: ADD_MEAL, payload: res.data })
    } catch (error) {
      dispatch({
        type: MEAL_ERROR,
        payload: error.response.msg,
      })
    }
  }

  // Delete Meal
  const deleteMeal = (meal) => {
    dispatch({ type: DELETE_MEAL, payload: meal })
  }
  // Update Meal
  const setCurrentMeal = (meal) => {
    dispatch({ type: SET_CURRENT_MEAL, payload: meal })
  }
  return (
    <MealContext.Provider
      value={{
        meals: state.meals,
        addMeal,
        error: state.error,
      }}
    >
      {props.children}
    </MealContext.Provider>
  )
}

export default MealState
