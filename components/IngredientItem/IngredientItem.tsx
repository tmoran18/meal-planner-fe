import { useContext } from 'react';
import styles from './ingredientitem.module.css';
import IngredientContext from '../../context/ingredient/ingredientContext';
import ingredientContext from '../../context/ingredient/ingredientContext';

interface Props {
	name: string;
	unit?: string;
	index: number;
	id: number;
}

const IngredientItem: React.FC<Props> = ({ name, unit, index, id }) => {
	const ingredientContext = useContext(IngredientContext);

	const itemColorStyle = () => {
		// if the index is even make this color
		if (index % 2 === 0) {
			return styles.odd_item_color;
		} else {
			return styles.even_item_color;
		}
	};

	const deleteIngredient = () => {
		ingredientContext.deleteIngredient(id);
	};

	const editIngredient = (id: number) => {
		alert(id);
	};

	return (
		<div className={`${styles.ingredient_item} ${itemColorStyle()}`}>
			<p style={{ minWidth: '200px' }}>{name}</p>
			<p style={{ minWidth: '100px', textAlign: 'left' }}>{unit}</p>
			<div>
				<svg
					onClick={deleteIngredient}
					className={styles.icon}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'>
					<path
						d='M2 11.5V14H4.5L11.8733 6.62669L9.37333 4.12669L2 11.5ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z'
						fill='#828EA6'
					/>
				</svg>
				&nbsp;&nbsp;
				<svg
					onClick={() => editIngredient(id)}
					className={styles.icon}
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'>
					<path
						d='M4.00016 12.6667C4.00016 13.4 4.60016 14 5.3335 14H10.6668C11.4002 14 12.0002 13.4 12.0002 12.6667V4.66667H4.00016V12.6667ZM12.6668 2.66667H10.3335L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667Z'
						fill='#828EA6'
					/>
				</svg>
			</div>
		</div>
	);
};

export default IngredientItem;
