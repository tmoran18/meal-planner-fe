import { useContext } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import IngredientContext from '../context/ingredient/ingredientContext';
import { Formik, Field, Form } from 'formik';

const EditIngredient = () => {
	const ingredientContext = useContext(IngredientContext);
	const { name, unit, qty, category } = ingredientContext.current ?? {};

	return (
		<>
			<Layout>
				<Head>
					<title>Meal Planner | Edit Ingredient</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'></meta>
				</Head>
				<div className='ingredient_container'>
					<h2
						style={{
							color: '#828ea6',
							textAlign: 'center',
							marginBottom: '30px',
							fontWeight: 500,
						}}>
						Edit Ingredient
					</h2>
					<div className='form_container'>
						<h1
							style={{
								color: '#828ea6',
								textAlign: 'center',
								marginBottom: '50px',
								fontWeight: '500',
							}}>
							Update an Ingredient
						</h1>
						<Formik
							initialValues={{
								name,
								unit,
								qty,
								category,
							}}
							onSubmit={(values, { resetForm, setSubmitting }) => {
								// Submit the data
								//submit(values);
								resetForm();
								setSubmitting(false);
							}}>
							<Form className='form'>
								<label className='label' htmlFor='name'>
									Name *
								</label>
								<Field className='input' id='name' name='name' required />

								<label className='label' htmlFor='unit'>
									Unit
								</label>
								<Field className='input' id='unit' name='unit' />

								<label className='label' htmlFor='qty'>
									Qty *
								</label>
								<Field className='input' id='qty' name='qty' required />

								<div
									id='my-radio-group'
									style={{
										color: '#828ea6',
										fontWeight: '500',
										fontSize: '14px',
									}}>
									Category
								</div>
								<div
									className='radio_group'
									role='group'
									aria-labelledby='my-radio-group'>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Meat' />
										Meat
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Dairy' />
										Dairy
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Vegetables' />
										Vegetables
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Fruit' />
										Fruit
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Sauces' />
										Sauces
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Canned Goods' />
										Canned Goods
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Baking Goods' />
										Baking Goods
									</label>
									<label className='radio_btn'>
										<Field type='radio' name='category' value='Other' />
										Other
									</label>
								</div>

								<button className='submit_btn' type='submit'>
									Update Ingredient
								</button>
							</Form>
						</Formik>
					</div>
				</div>
			</Layout>
			<style jsx>{`
				.form_container {
					min-width: 400px;
				}
			`}</style>
		</>
	);
};

export default EditIngredient;
