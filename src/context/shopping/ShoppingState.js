import { useReducer } from 'react'
import ShoppingContext from './shoppingContext'
import shoppingReducer from './shoppingReducer'
import {
  ADD_MEAL_SHOPPING,
  REMOVE_MEAL_SHOPPING,
  CLEAR_SHOPPING_LIST,
} from '../types'

const ShoppingState = (props) => {
  const intialState = {
    shoppingListMeals: [],
    current: null,
    error: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(shoppingReducer, intialState)

  const addMealToShopping = (mealIngredients) => {
    dispatch({
      type: ADD_MEAL_SHOPPING,
      payload: mealIngredients,
    })
  }

  const removeMealFromShopping = (id) => {
    dispatch({
      type: REMOVE_MEAL_SHOPPING,
      payload: id,
    })
  }

  const clearShoppingList = () => {
    dispatch({
      type: CLEAR_SHOPPING_LIST,
    })
  }

  return (
    <ShoppingContext.Provider
      value={{
        shoppingListMeals: state.shoppingListMeals,
        current: state.current,
        error: state.error,
        loading: state.loading,
        addMealToShopping,
        removeMealFromShopping,
        clearShoppingList,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  )
}

export default ShoppingState
