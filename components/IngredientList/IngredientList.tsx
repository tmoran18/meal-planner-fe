import styles from './ingredientlist.module.css';
import IngredientItem from '../IngredientItem/IngredientItem';
import Ingredients from '../../pages/ingredients';

const IngredientList = ({ ingredients }) => {
	return (
		<div>
			{ingredients.map((ingredient, index) => (
				<IngredientItem
					name={ingredient.name}
					index={index}
					unit={ingredient.unit}
					id={ingredient._id}
				/>
			))}
		</div>
	);
};

export default IngredientList;
