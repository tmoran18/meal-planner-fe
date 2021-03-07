import { useContext } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import IngredientContext from '../context/ingredient/ingredientContext';
import IngredientList from '../components/IngredientList/IngredientList';

const Ingredients = () => {
	const ingredientContext = useContext(IngredientContext);
	return (
		<>
			<Layout>
				<Head>
					<title>Meal Planner</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'></meta>
				</Head>
				<div>
					Ingredients
					<IngredientList ingredients={ingredientContext.ingredients} />
				</div>
			</Layout>
			<style jsx>{``}</style>
		</>
	);
};

export default Ingredients;
