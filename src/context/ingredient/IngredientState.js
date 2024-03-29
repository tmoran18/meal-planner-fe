import { useReducer } from 'react'
import axios from 'axios'
import IngredientContext from './ingredientContext'
import ingredientReducer from './ingredientReducer'
import {
  GET_INGREDIENTS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
  UPDATE_INGREDIENT,
  INGREDIENT_ERROR,
  CLEAR_INGREDIENTS,
  INGREDIENT_LOADING,
  CLEAR_INGREDIENT_LOADING,
} from '../types'

const IngredientState = (props) => {
  const intialState = {
    ingredients: null,
    current: null,
    error: null,
    loading: true,
  }

  const [state, dispatch] = useReducer(ingredientReducer, intialState)

  // Get Ingredients
  const getIngredients = async () => {
    try {
      const res = await axios.get('/api/ingredients')
      dispatch({
        type: GET_INGREDIENTS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: INGREDIENT_ERROR,
        payload: error.response.msg,
      })
    }
  }

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
  const deleteIngredient = async (id) => {
    try {
      await axios.delete(`/api/ingredients/${id}`)
      dispatch({
        type: DELETE_INGREDIENT,
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: INGREDIENT_ERROR,
        payload: error.response.msg,
      })
    }
  }

  // Update Current Ingredient
  const updateIngredient = async (ingredient) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.put(
        `/api/ingredients/${ingredient._id}`,
        ingredient,
        config
      )
      dispatch({
        type: UPDATE_INGREDIENT,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: INGREDIENT_ERROR,
        payload: error.response.msg,
      })
    }
  }

  const clearIngredients = () => {
    dispatch({
      type: CLEAR_INGREDIENTS,
    })
  }

  // Set current Ingredient
  const setCurrentIngredient = (ingredient) => {
    dispatch({ type: SET_CURRENT_INGREDIENT, payload: ingredient })
  }

  // Clear Current Ingredient
  const clearCurrentIngredient = () => {
    dispatch({ type: CLEAR_CURRENT_INGREDIENT })
  }

  //  Set loading on Ingredient
  const setIngredientLoading = () => {
    dispatch({ type: INGREDIENT_LOADING })
  }

  const clearIngredientLoading = () => {
    dispatch({ type: CLEAR_INGREDIENT_LOADING })
  }

  return (
    <IngredientContext.Provider
      value={{
        ingredients: state.ingredients,
        current: state.current,
        error: state.error,
        loading: state.loading,
        getIngredients,
        addIngredient,
        deleteIngredient,
        setCurrentIngredient,
        clearCurrentIngredient,
        updateIngredient,
        clearIngredients,
        setIngredientLoading,
        clearIngredientLoading,
      }}
    >
      {props.children}
    </IngredientContext.Provider>
  )
}

export default IngredientState
