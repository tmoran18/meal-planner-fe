import styles from './ingredientlist.module.css';
import IngredientItem from '../IngredientItem/IngredientItem';

interface Props {
	ingredients: {
		name: string;
		unit?: string;
		_id: number;
	}[];
}

const IngredientList: React.FC<Props> = ({ ingredients }) => {
	return (
		<div>
			{ingredients.map((ingredient, index: number) => (
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
