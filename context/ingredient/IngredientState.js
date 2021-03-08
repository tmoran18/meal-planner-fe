import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import IngredientContext from './ingredientContext';
import ingredientReducer from './ingredientReducer';
import { ADD_INGREDIENT, DELETE_INGREDIENT, UPDATE_INGREDIENT } from '../types';

const IngredientState = (props) => {
	const intialState = {
		ingredients: [
			{
				_id: '11',
				name: 'Potatoes',
				unit: '',
				qty: '6',
				category: 'Fruit & Veggies',
			},
			{ _id: '2', name: 'Chicken', unit: '', qty: '2', category: 'Meat' },
			{ _id: '3', name: 'Soy Sauce', unit: 'tbs', qty: '2', category: 'Sauce' },
			{ _id: '4', name: 'Milk', unit: 'cup', qty: '3', category: 'Dairy' },
			{ _id: '5', name: 'Cheese', unit: 'cup', qty: '2', category: 'Dairy' },
			{ _id: '6', name: 'Food', unit: 'cup', qty: '2', category: 'Dairy' },
		],
	};

	const [state, dispatch] = useReducer(ingredientReducer, intialState);

	// Add Ingredient
	const addIngredient = (ingredient) => {
		ingredient.id = uuid();
		dispatch({ type: ADD_INGREDIENT, payload: ingredient });
	};

	// Delete Meal

	const deleteIngredient = (id) => {
		dispatch({ type: DELETE_INGREDIENT, payload: id });
	};

	// Update Meal

	return (
		<IngredientContext.Provider
			value={{
				ingredients: state.ingredients,
				addIngredient,
				deleteIngredient,
			}}>
			{props.children}
		</IngredientContext.Provider>
	);
};

export default IngredientState;
