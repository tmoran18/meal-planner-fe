import styles from './removeingredientmealitem.module.css';

const RemoveIngredientMealItem = ({
	ingredient,
	selectedIngredients,
	removeIngredient,
}) => {
	const { name, qty, unit, _id } = ingredient;

	return (
		<div className={styles.selected_list_item} key={_id}>
			{name}, &nbsp;{qty}
			&nbsp;{unit}
			<img
				onClick={(e) => removeIngredient(selectedIngredients, ingredient)}
				className={styles.btn}
				src='/assets/remove_btn.svg'
				width='20'
				height='20'
				alt='Remove icon'
			/>
		</div>
	);
};

export default RemoveIngredientMealItem;
