import { useState } from 'react';
import Link from 'next/link';
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
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className={styles.ingredient_list_container}>
			<div className={styles.btn_container}>
				<input
					className={styles.search_input}
					type='text'
					placeholder='Search Ingredient...'
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<Link href='/create-ingredient'>
					<button className={styles.btn}>Add Ingredient</button>
				</Link>
			</div>
			<div className={styles.list_headings}>
				<span>Ingredient</span>
				<span>Unit</span>
				<span></span>
			</div>
			{/* Filter Search Ingredients */}
			{ingredients
				.filter((ingredient) => {
					if (searchTerm === '') {
						return ingredient;
					} else if (
						ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
					) {
						return ingredient;
					}
				})
				.map((ingredient, index: number) => (
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
