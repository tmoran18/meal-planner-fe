import { useState, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import Axios from 'axios';
import styles from './createingredientform.module.css';
import DropDownList from '../DropDownList/DropDownList';

const CreateIngredientForm = () => {
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
				Create an Ingredient
			</h1>
			<Formik
				initialValues={{
					name: '',
					unit: '',
					qty: '',
					category: '',
				}}
				onSubmit={async (values, { resetForm, setSubmitting }) => {
					// Submit the data
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}>
				<Form className={styles.form}>
					<label className={styles.label} htmlFor='name'>
						Name *
					</label>
					<Field className={styles.input} id='name' name='name' required />

					<label className={styles.label} htmlFor='unit'>
						Unit
					</label>
					<Field className={styles.input} id='unit' name='unit' />

					<label className={styles.label} htmlFor='qty'>
						Qty *
					</label>
					<Field className={styles.input} id='qty' name='qty' required />

					<div
						id='my-radio-group'
						style={{ color: '#828ea6', fontWeight: '500', fontSize: '14px' }}>
						Category
					</div>
					<div
						className={styles.radio_group}
						role='group'
						aria-labelledby='my-radio-group'>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Meat' />
							Meat
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Dairy' />
							Dairy
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Vegetables' />
							Vegetables
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Fruit' />
							Fruit
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Sauces' />
							Sauces
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Canned Goods' />
							Canned Goods
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Baking Goods' />
							Baking Goods
						</label>
						<label className={styles.radio_btn}>
							<Field type='radio' name='category' value='Other' />
							Other
						</label>
					</div>

					<button className={styles.submit_btn} type='submit'>
						Create Ingredient
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default CreateIngredientForm;
