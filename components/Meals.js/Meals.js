import { useContext } from 'react';
import MealContext from '../../context/meal/mealContext';

const Meals = () => {
	const mealContext = useContext(MealContext);

	const { meals } = mealContext;

	return (
		<>
			{meals.map((meal) => (
				<div>
					<h3>{meal.name}</h3>
					<img src={meal.image_URL} width='200' alt='' />
				</div>
			))}
		</>
	);
};

export default Meals;
