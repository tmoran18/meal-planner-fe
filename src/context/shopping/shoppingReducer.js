import {
  ADD_MEAL_SHOPPING,
  CLEAR_SHOPPING_LIST,
  REMOVE_MEAL_SHOPPING,
} from '../types'

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
    case CLEAR_SHOPPING_LIST:
      return {
        ...state,
        shoppingListMeals: [],
        loading: false,
      }
    default:
      return state
  }
}

const arr = [
  { id: '123', name: 'Beans', qty: '4' },
  { id: '124', name: 'Carrots', qty: '2' },
  { id: '123', name: 'Beans', qty: '2' },
]

export default shoppingReducer
