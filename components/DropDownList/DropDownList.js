import { useState, useEffect, useRef } from 'react';
import styles from './dropdownlist.module.css';
import AddIngredientMealItem from '../AddIngredientMealItem/AddIngredientMealItem';
import RemoveIngredientMealItem from '../RemoveIngredientMealItem/RemoveIngredientMealItem';

const DropDownList = ({
	ingredients,
	addIngredient,
	removeIngredient,
	selectedIngredients,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
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
			<label className={styles.label} htmlFor='name'>
				Ingredients
			</label>
			<input
				type='text'
				className={styles.input}
				// Toggle setIsOpen
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			{/* TODO add Framer motion animation to dropdown */}
			{/* If isOpen is true, show dropdown */}
			{isOpen && (
				<div>
					{/* // Map over the ingredients */}
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
						.map((ingredient) => {
							// Check if there is already ingredients in the selected ingredient list
							if (
								selectedIngredients.some(
									(selectedIngredient) =>
										selectedIngredient._id === ingredient._id,
								)
							) {
								// If the ingredient is already in the selected list, you want to show the remove component
								return (
									<RemoveIngredientMealItem
										ingredient={ingredient}
										selectedIngredients={selectedIngredients}
										removeIngredient={removeIngredient}
									/>
								);
							} else {
								// If the ingredient is NOT in the selected list, you want to show the add component
								return (
									<AddIngredientMealItem
										ingredient={ingredient}
										addIngredient={addIngredient}
									/>
								);
							}
						})}
				</div>
			)}
			{selectedIngredients.length > 0 && (
				<div className={styles.selected_ingredients}>
					{/* TODO, turn selected ingredients into component */}
					<h4 style={{ marginBottom: '5px' }}>Selected Ingredients:</h4>
					{selectedIngredients.map((ingredient) => (
						<span style={{ marginLeft: '15px' }}>
							{ingredient.name} x {ingredient.qty} {ingredient.unit}
						</span>
					))}
				</div>
			)}
			<svg
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				className={styles.down_arrow}
				xmlns='http://www.w3.org/2000/svg'
				width='14'
				height='11'
				viewBox='0 0 14 11'
				fill='none'>
				<path
					d='M7.86602 10.5C7.48112 11.1667 6.51887 11.1667 6.13397 10.5L0.937821 1.5C0.55292 0.833332 1.03405 -2.67268e-07 1.80385 -1.9997e-07L12.1962 7.08554e-07C12.966 7.75852e-07 13.4471 0.833334 13.0622 1.5L7.86602 10.5Z'
					fill='#828EA6'
				/>
			</svg>
		</div>
	);
};

export default DropDownList;
