import { useReducer } from 'react'
import axios from 'axios'
import IngredientContext from './ingredientContext'
import ingredientReducer from './ingredientReducer'
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
  UPDATE_INGREDIENT,
  INGREDIENT_ERROR,
} from '../types'

const IngredientState = (props) => {
  const intialState = {
    ingredients: [],
    current: null,
    error: null,
  }

  const [state, dispatch] = useReducer(ingredientReducer, intialState)

  // Add Ingredient
  const addIngredient = async (ingredient) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/ingredients', ingredient, config)
      dispatch({ type: ADD_INGREDIENT, payload: res.data })
    } catch (error) {
      dispatch({
        type: INGREDIENT_ERROR,
        payload: error.response.msg,
      })
    }
  }

  // Delete Ingredient
  const deleteIngredient = (id) => {
    dispatch({ type: DELETE_INGREDIENT, payload: id })
  }

  // Set current Ingredient
  const setCurrentIngredient = (ingredient) => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient })
  }

  // Clear Current Ingredient
  const clearCurrentIngredient = () => {
    dispatch({ type: CLEAR_CURRENT_INGREDIENT })
  }

  // Update Current Ingredient
  const updateIngredient = (ingredient) => {
    dispatch({ type: UPDATE_INGREDIENT, payload: ingredient })
  }

  return (
    <IngredientContext.Provider
      value={{
        ingredients: state.ingredients,
        current: state.current,
        error: state.error,
        addIngredient,
        deleteIngredient,
        setCurrentIngredient,
        clearCurrentIngredient,
        updateIngredient,
      }}
    >
      {props.children}
    </IngredientContext.Provider>
  )
}

export default IngredientState
