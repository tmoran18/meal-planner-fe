import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT } from '../types';

const ingredientReducer = (state, action) => {
	switch (action.type) {
		case ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload],
			};

		default:
			return state;
			break;
	}
};

export default ingredientReducer;
