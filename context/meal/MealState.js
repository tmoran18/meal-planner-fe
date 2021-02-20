import { useReducer } from 'react';
import uuid from 'uuid';
import MealContext from './mealContext';
import mealReducer from './mealReducer';
import { ADD_MEAl, DELETE_MEAL, UPDATE_MEAL } from '../types';

const MealState = (props) => {
	const intialState = {
		meals: [
			{
				_id: { $oid: '602e3c399d034233f0ddb67b' },
				ingredients: [
					{ name: 'Rice', unit: 'cup', qty: '2' },
					{ name: 'Chicken', unit: '', qty: '4' },
				],
				name: 'Thai Red Chilli',
				secondary_name: 'with asian greens',
				image_URL:
					'https://res.cloudinary.com/dsjhcek2q/image/upload/v1612864540/meal-shopper/parmesan-mustard-crusted-chicken_vtw1wb.jpg',
				user: { $oid: '602dd36618d09833e08893fd' },
				date: { $date: { $numberLong: '1613642809338' } },
				__v: { $numberInt: '0' },
			},
			{
				_id: { $oid: '602e3caf9d034233f0ddb67c' },
				ingredients: [
					{ name: 'Rice', unit: 'cup', qty: '2' },
					{ name: 'Chicken', unit: '', qty: '4' },
					{ name: 'Chillis', unit: '', qty: '1' },
					{ name: 'Thai Pase', unit: 'tsp', qty: '2' },
				],
				name: 'Thai Green Chilli',
				secondary_name: 'with fish balls',
				image_URL:
					'https://res.cloudinary.com/dsjhcek2q/image/upload/v1612864540/meal-shopper/parmesan-mustard-crusted-chicken_vtw1wb.jpg',
				user: { $oid: '602dd36618d09833e08893fd' },
				date: { $date: { $numberLong: '1613642927805' } },
				__v: { $numberInt: '0' },
			},
			{
				_id: { $oid: '602e3cda64c4f4634172885a' },
				ingredients: [
					{ name: 'Rice', unit: 'cup', qty: '2' },
					{ name: 'Chicken', unit: '', qty: '4' },
					{ name: 'Chillis', unit: '', qty: '1' },
					{ name: 'Thai Pase', unit: 'tsp', qty: '2' },
				],
				name: 'Thai Purple Chilli',
				secondary_name: 'with fish balls',
				image_URL:
					'https://res.cloudinary.com/dsjhcek2q/image/upload/v1612864540/meal-shopper/parmesan-mustard-crusted-chicken_vtw1wb.jpg',
				user: { $oid: '602dd36618d09833e08893fd' },
				date: { $date: { $numberLong: '1613642927805' } },
				__v: { $numberInt: '0' },
			},
			{
				_id: { $oid: '602e3dc29d034233f0ddb67e' },
				ingredients: [{ name: 'Potatoes', unit: '', qty: '102' }],
				name: 'Chips',
				secondary_name: 'with Gravy',
				image_URL:
					'https://res.cloudinary.com/dsjhcek2q/image/upload/v1612864540/meal-shopper/parmesan-mustard-crusted-chicken_vtw1wb.jpg',
				user: { $oid: '602e3d4f9d034233f0ddb67d' },
				date: { $date: { $numberLong: '1613643202347' } },
				__v: { $numberInt: '0' },
			},
		],
	};

	const [state, dispatch] = useReducer(mealReducer, intialState);

	// Add Meal

	// Delete Meal

	// Update Meal

	return (
		<MealContext.Provider
			value={{
				meals: state.meals,
			}}>
			{props.children}
		</MealContext.Provider>
	);
};

export default MealState;
