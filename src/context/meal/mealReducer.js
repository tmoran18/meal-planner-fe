import {
  GET_MEALS,
  ADD_MEAL,
  DELETE_MEAL,
  UPDATE_MEAL,
  MEAL_ERROR,
  SET_CURRENT_MEAL,
  CLEAR_CURRENT_MEAL,
  CLEAR_MEALS,
} from '../types'

const mealReducer = (state, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false,
      }
    case ADD_MEAL:
      return {
        ...state,
        meals: [...state.meals, action.payload],
        loading: false,
      }
    case DELETE_MEAL:
      return {
        ...state,
        meals: state.meals.filter((meal) => meal._id !== action.payload),
        loading: false,
      }
    case UPDATE_MEAL:
      return {
        ...state,
        meals: state.meals.map((meal) =>
          meal._id === action.payload._id ? action.payload : meal
        ),
        loading: false,
      }
    case CLEAR_MEALS:
      return {
        ...state,
        meals: null,
        errors: null,
        current: null,
      }
    case SET_CURRENT_MEAL:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT_MEAL:
      return { ...state, current: null }
    case MEAL_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default mealReducer
