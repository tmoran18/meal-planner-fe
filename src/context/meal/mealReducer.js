import { ADD_MEAL, DELETE_MEAL, UPDATE_MEAL, MEAL_ERROR } from '../types'

const mealReducer = (state, action) => {
  switch (action.type) {
    case ADD_MEAL:
      return {
        ...state,
        meals: [...state.meals, action.payload],
      }
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
