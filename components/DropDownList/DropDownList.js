import { useState, useEffect, useRef } from 'react';
import styles from './dropdownlist.module.css';

const DropDownList = ({
	ingredients,
	addIngredient,
	removeIngredient,
	selectedIngredients,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropDownRef = useRef();

	// Close the Ingredients dropdown list when click outside div
	useEffect(() => {
		let handler = (event) => {
			// Check if the mouse down event if within our dropdown Ref div
			if (!dropDownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		// Listen for the mousedown event then run handler function
		document.addEventListener('mousedown', handler);
		// Clean up the event & handler function
		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	// TODO abstract the Add and remove list items into component
	return (
		<div className={styles.container} ref={dropDownRef}>
			<label htmlFor='name'>Ingredients</label>
			<input
				type='text'
				className={styles.input}
				// Toggle setIsOpen
				onClick={() => setIsOpen((isOpen) => !isOpen)}
			/>
			{/* TODO add Framer motion animation to dropdown */}
			{/* If isOpen is true, show dropdown */}
			{isOpen && (
				<div>
					{/* // Map over the ingredients */}
					{ingredients.map((ingredient) => {
						// Check if there is already ingredients in the selected ingredient list
						if (
							selectedIngredients.some(
								(selectedIngredient) =>
									selectedIngredient._id === ingredient._id,
							)
						) {
							// If the ingredient is already in the selected list, you want to show the remove component
							return (
								<div className={styles.selected_list_item} key={ingredient._id}>
									{ingredient.name}, &nbsp;{ingredient.qty}
									&nbsp;{ingredient.unit}
									<span
										className={styles.remove_btn}
										onClick={(e) =>
											removeIngredient(selectedIngredients, ingredient)
										}>
										-
									</span>
								</div>
							);
						} else {
							// If the ingredient is NOT in the selected list, you want to show the add component
							return (
								<div className={styles.list_item} key={ingredient._id}>
									{ingredient.name}, &nbsp;{ingredient.qty}
									&nbsp;{ingredient.unit}
									<span
										className={styles.add_btn}
										onClick={(e) => addIngredient(ingredient)}>
										+
									</span>
								</div>
							);
						}
					})}
				</div>
			)}
			{selectedIngredients.length > 0 && (
				<div>
					{/* TODO, turn selected ingredients into component */}
					<h3>Selected Ingredients:</h3>
					{selectedIngredients.map((ingredient) => (
						<p>
							{ingredient.name}, {ingredient.qty} {ingredient.unit}
						</p>
					))}
				</div>
			)}
		</div>
	);
};

export default DropDownList;
