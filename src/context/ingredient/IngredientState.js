import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import IngredientContext from './ingredientContext'
import ingredientReducer from './ingredientReducer'
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
  UPDATE_INGREDIENT,
} from '../types'

const IngredientState = (props) => {
  const intialState = {
    ingredients: [
      {
        _id: '1',
        name: 'Potatoes',
        unit: '',
        qty: 0,
        category: 'Fruit & Veggies',
      },
      { _id: '2', name: 'Chicken', unit: '', qty: 0, category: 'Meat' },
      { _id: '3', name: 'Soy Sauce', unit: 'tbs', qty: 0, category: 'Sauce' },
      { _id: '4', name: 'Milk', unit: 'cup', qty: 0, category: 'Dairy' },
      { _id: '5', name: 'Cheese', unit: 'cup', qty: 0, category: 'Dairy' },
      { _id: '6', name: 'Food', unit: 'cup', qty: 0, category: 'Dairy' },
    ],
    current: null,
  }

  const [state, dispatch] = useReducer(ingredientReducer, intialState)

  // Add Ingredient
  const addIngredient = (ingredient) => {
    ingredient.id = uuid()
    dispatch({ type: ADD_INGREDIENT, payload: ingredient })
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
