import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  SET_CURRENT_INGREDIENT,
  CLEAR_CURRENT_INGREDIENT,
  UPDATE_INGREDIENT,
  INGREDIENT_ERROR,
  CLEAR_INGREDIENTS,
  GET_INGREDIENTS,
  INGREDIENT_LOADING,
  CLEAR_INGREDIENT_LOADING,
} from '../types'

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      }
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
        loading: false,
      }
    case UPDATE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map((ingredient) =>
          ingredient._id === action.payload._id ? action.payload : ingredient
        ),
        loading: false,
      }
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient._id !== action.payload
        ),
        loading: false,
      }
    case CLEAR_INGREDIENTS:
      return {
        ...state,
        ingredients: null,
        errors: null,
        current: null,
      }
    case SET_CURRENT_INGREDIENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT_INGREDIENT:
      return { ...state, current: null }
    case INGREDIENT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case INGREDIENT_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CLEAR_INGREDIENT_LOADING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default ingredientReducer
