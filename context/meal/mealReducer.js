import { ADD_MEAL, DELETE_MEAL, UPDATE_MEAL } from '../types';

const mealReducer = (state, action) => {
	switch (action.type) {
		case ADD_MEAL:
			return {
				...state,
				meals: [...state.meals, action.payload],
			};

		default:
			return state;
			break;
	}
};

export default mealReducer;
