import styles from './removeingredientmealitem.module.css';

const RemoveIngredientMealItem = ({
	ingredient,
	selectedIngredients,
	removeIngredient,
}) => {
	const { name, _id } = ingredient;

	return (
		<div className={styles.selected_list_item} key={_id}>
			{name}
			<img
				onClick={() => removeIngredient(selectedIngredients, ingredient)}
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
