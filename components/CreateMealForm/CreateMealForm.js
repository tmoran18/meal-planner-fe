import { useState, useRef, useContext } from 'react';
import { Formik, Field, Form } from 'formik';
import Axios from 'axios';
import styles from './createmealform.module.css';
import DropDownList from '../DropDownList/DropDownList';
import MealContext from '../../context/meal/mealContext';

const CreateMealForm = () => {
	const [imageSelected, setImageSelected] = useState('');
	const [ingredientsSelected, setIngredientsSelected] = useState([]);
	const imageFileInput = useRef();

	const mealContext = useContext(MealContext);

	const ingredients = [
		{
			_id: '1',
			name: 'Potatoes',
			unit: '',
			qty: '6',
			category: 'Fruit & Veggies',
		},
		{ _id: '2', name: 'Chicken', unit: '', qty: '2', category: 'Meat' },
		{ _id: '3', name: 'Soy Sauce', unit: 'tbs', qty: '2', category: 'Sauce' },
		{ _id: '4', name: 'Milk', unit: 'cup', qty: '3', category: 'Dairy' },
		{ _id: '5', name: 'Cheese', unit: 'cup', qty: '2', category: 'Dairy' },
	];

	const removeIngredient = (ingredientsSelected, ingredient) => {
		const newIngredientsSelected = ingredientsSelected.filter(
			(ingredientSelected) => ingredientSelected._id !== ingredient._id,
		);
		setIngredientsSelected(newIngredientsSelected);
	};

	const addIngredient = (ingredient) => {
		if (ingredientsSelected.length < 1) {
			setIngredientsSelected([...ingredientsSelected, ingredient]);
		} else {
			if (
				!ingredientsSelected.some(
					(ingredientSelected) => ingredientSelected._id === ingredient._id,
				)
			) {
				setIngredientsSelected([...ingredientsSelected, ingredient]);
			}
		}
	};

	// Upload image to cloudinary
	const uploadImage = async () => {
		const formData = new FormData();
		formData.append('file', imageSelected);
		formData.append('upload_preset', 'gznohnsu');

		try {
			const response = await Axios.post(
				'https://api.cloudinary.com/v1_1/dsjhcek2q/image/upload',
				formData,
			);
			const data = await response.data.secure_url;
			return data;
		} catch (error) {
			console.error(error.message);
		}
	};

	const submitMealData = async (values) => {
		const imageURL = await uploadImage(imageSelected);
		if (imageURL) {
			values.image_URL = imageURL;
			values.ingredients = ingredientsSelected;
			mealContext.addMeal(values);
		} else {
			alert('Errors');
		}
	};

	const resetImageInput = () => {
		imageFileInput.current.value = '';
	};

	return (
		<div className={styles.form_container}>
			<h1
				style={{
					color: '#828ea6',
					textAlign: 'center',
					marginBottom: '50px',
					fontWeight: '500',
				}}>
				Create a Meal
			</h1>
			<Formik
				initialValues={{
					name: '',
					secondary_name: '',
				}}
				onSubmit={(values, { resetForm, setSubmitting }) => {
					// Submit the data
					submitMealData(values);
					// Clear the form & state
					imageFileInput.current.value = '';
					setIngredientsSelected([]);
					setImageSelected('');
					resetForm();
					setSubmitting(false);
				}}>
				<Form className={styles.form}>
					<label className={styles.label} htmlFor='name'>
						Name
					</label>
					<Field className={styles.input} id='name' name='name' required />

					<label className={styles.label} htmlFor='secondary_name'>
						Blurb
					</label>
					<Field
						className={styles.input}
						id='secondary_name'
						name='secondary_name'
						required
					/>

					<div className={styles.file_input}>
						<label className={styles.label} htmlFor='secondary_name'>
							Meal Image
						</label>
						<input
							ref={imageFileInput}
							type='file'
							name='imageURL'
							id='imageURL'
							required
							onChange={(e) => setImageSelected(e.target.files[0])}
						/>
						<div className={styles.file_input_cancel}>
							or{' '}
							<span
								onClick={resetImageInput}
								style={{
									fontWeight: 600,
									fontSize: '12px',
									cursor: 'pointer',
								}}>
								cancel
							</span>
						</div>
					</div>

					<DropDownList
						ingredients={ingredients}
						addIngredient={addIngredient}
						removeIngredient={removeIngredient}
						selectedIngredients={ingredientsSelected}
					/>
					<button className={styles.submit_btn} type='submit'>
						Create Meal
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default CreateMealForm;
