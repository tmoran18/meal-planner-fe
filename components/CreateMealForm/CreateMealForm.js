import { useState, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import Axios from 'axios';
import styles from './createmealform.module.css';
import DropDownList from '../DropDownList/DropDownList';

const CreateMealForm = () => {
	const [imageSelected, setImageSelected] = useState('');
	const [ingredientsSelected, setIngredientsSelected] = useState([]);
	const imageFileInput = useRef();

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
			console.log(JSON.stringify(values));
		} else {
			alert('Errors');
		}
	};

	return (
		<div>
			<h1>Signup</h1>
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
					<label htmlFor='name'>Name</label>
					<Field id='name' name='name' required />

					<label htmlFor='secondary_name'>Blurb</label>
					<Field id='secondary_name' name='secondary_name' required />
					<label htmlFor='secondary_name'>Meal Image</label>
					<input
						ref={imageFileInput}
						type='file'
						name='imageURL'
						id='imageURL'
						required
						onChange={(e) => setImageSelected(e.target.files[0])}
					/>

					<DropDownList
						ingredients={ingredients}
						addIngredient={addIngredient}
						removeIngredient={removeIngredient}
						selectedIngredients={ingredientsSelected}
					/>
					<button type='submit'>Submit</button>
				</Form>
			</Formik>
		</div>
	);
};

export default CreateMealForm;
