import { useReducer } from 'react'
import axios from 'axios'
import MealContext from './mealContext'
import mealReducer from './mealReducer'
import {
  GET_MEALS,
  ADD_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
  SET_CURRENT_MEAL,
  CLEAR_CURRENT_MEAL,
  CLEAR_MEALS,
  MEAL_ERROR,
} from '../types'

const MealState = (props) => {
  const intialState = {
    meals: null,
    current: null,
    error: null,
  }

  const [state, dispatch] = useReducer(mealReducer, intialState)

  // Get Meals
  const getMeals = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    try {
      const res = await axios.get(
        'https://meal-planner-now.herokuapp.com/api/meals',
        config
      )
      dispatch({
        type: GET_MEALS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: MEAL_ERROR,
        payload: error.response.msg,
      })
    }
  }

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

  const clearMeals = () => {
    dispatch({
      type: CLEAR_MEALS,
    })
  }

  // Set current Meal
  const setCurrentMeal = (meal) => {
    dispatch({ type: SET_CURRENT_MEAL, payload: meal })
  }

  // Clear Current Meal
  const clearCurrentMeal = () => {
    dispatch({ type: CLEAR_CURRENT_MEAL })
  }

  // Update Current Ingredient
  const updateMeal = (meal) => {
    dispatch({ type: UPDATE_MEAL, payload: meal })
  }

  return (
    <MealContext.Provider
      value={{
        meals: state.meals,
        getMeals,
        addMeal,
        deleteMeal,
        updateMeal,
        setCurrentMeal,
        clearCurrentMeal,
        clearMeals,
        error: state.error,
      }}
    >
      {props.children}
    </MealContext.Provider>
  )
}

export default MealState
