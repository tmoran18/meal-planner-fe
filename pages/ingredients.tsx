import { useContext } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import IngredientContext from '../context/ingredient/ingredientContext';
import IngredientList from '../components/IngredientList/IngredientList';

const Ingredients = () => {
	const ingredientContext = useContext(IngredientContext);
	const ingredients = ingredientContext.ingredients;

	return (
		<>
			<Layout>
				<Head>
					<title>Meal Planner</title>
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
						Ingredients
					</h2>
					<IngredientList ingredients={ingredients} />
				</div>
			</Layout>
			<style jsx>{`
				.ingredient_container {
					margin: 100px auto;
				}
			`}</style>
		</>
	);
};

export default Ingredients;
