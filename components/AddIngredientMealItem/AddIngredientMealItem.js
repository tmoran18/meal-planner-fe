import styles from './addingredientmeal.module.css';

const AddIngredientMealItem = ({ ingredient, addIngredient }) => {
	const { name, qty, unit, _id } = ingredient;

	return (
		<div className={styles.list_item} key={_id}>
			{name}, &nbsp;{qty}
			&nbsp;{unit}
			<img
				onClick={() => addIngredient(ingredient)}
				className={styles.btn}
				src='/assets/add_btn.svg'
				width='20'
				height='20'
				alt='Add Icon'
			/>
		</div>
	);
};

export default AddIngredientMealItem;
