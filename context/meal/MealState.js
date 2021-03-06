import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import MealContext from './mealContext';
import mealReducer from './mealReducer';
import { ADD_MEAL, DELETE_MEAL, UPDATE_MEAL } from '../types';

const MealState = (props) => {
	const intialState = {
		meals: [
			{
				_id: { $oid: '602e3c399d034233f0ddb67z' },
				ingredients: [
					{ name: 'Chicken Breast', unit: '', qty: '3' },
					{ name: 'Panko Bread Crumbs', unit: 'cup', qty: '2' },
					{ name: 'Sweet Potato', unit: '', qty: '1' },
					{ name: 'Beetroot', unit: '', qty: '1' },
					{ name: 'Zuchinni', unit: '', qty: '1' },
					{ name: 'Djion Mustard', unit: 'tbs', qty: '3' },
				],
				name: 'Parmesan Mustard Crusted Chicken',
				secondary_name: 'with roasted sweet potato & beetroot',
				image_URL:
					'https://res.cloudinary.com/dsjhcek2q/image/upload/v1614931643/meal-shopper/parmesan-mustard-crusted-chicken_h5jzgt.jpg',
				user: { $oid: '602dd36618d09833e08893fd' },
				date: { $date: { $numberLong: '1613642809338' } },
				__v: { $numberInt: '0' },
			},
		],
	};

	const [state, dispatch] = useReducer(mealReducer, intialState);

	// Add Meal
	const addMeal = (meal) => {
		meal._id = uuid();
		dispatch({ type: ADD_MEAL, payload: meal });
	};

	// Delete Meal

	// Update Meal

	return (
		<MealContext.Provider
			value={{
				meals: state.meals,
				addMeal,
			}}>
			{props.children}
		</MealContext.Provider>
	);
};

export default MealState;
