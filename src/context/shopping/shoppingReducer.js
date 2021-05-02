import { ADD_MEAL_SHOPPING, REMOVE_MEAL_SHOPPING } from '../types'

const shoppingReducer = (state, action) => {
  switch (action.type) {
    case ADD_MEAL_SHOPPING:
      return {
        ...state,
        shoppingListMeals: [...state.shoppingListMeals, action.payload],
        loading: false,
      }
    case REMOVE_MEAL_SHOPPING:
      return {
        ...state,
        shoppingListMeals: state.shoppingListMeals.filter(
          (meal) => meal._id !== action.payload
        ),
        loading: false,
      }
    default:
      return state
  }
}

export default shoppingReducer
