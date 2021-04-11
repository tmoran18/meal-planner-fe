import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
  UPDATE_INGREDIENT,
} from '../types'

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      }
    case UPDATE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action.payload._id ? action.payload : ingredient
        ),
      }
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient._id !== action.payload
        ),
      }
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT_INGREDIENT:
      return { ...state, current: null }
    default:
      return state
  }
}

export default ingredientReducer
