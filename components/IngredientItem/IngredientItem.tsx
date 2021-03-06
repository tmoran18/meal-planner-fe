import styles from 'ingredientitem.module.css';

interface Props {
	name: string;
	unit?: string;
	index: number;
}

const IngredientItem: React.FC<Props> = ({ name, unit, index }) => {
	const itemColor = () => {
		// if the index is even make this color
		// else make this color
	};
	return (
		<div>
			<p>{name}</p>
			<p>{unit}</p>
			<div className={index % 1 ? styles.odd : styles.even}>edit/delete</div>
		</div>
	);
};

export default IngredientItem;
