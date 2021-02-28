import Layout from '../components/layout';
import Head from 'next/head';
import CreateIngredientForm from '../components/CreateIngredientForm/CreateIngredientForm';

const CreateIngredient = () => {
	return (
		<>
			<Layout>
				<Head>
					<title>Meal Planner | Create Ingredient</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'></meta>
				</Head>
				<section>
					<CreateIngredientForm />
				</section>
			</Layout>
			<style jsx>{`
				 {
					section {
						display: flex;
						justify-content: center;
						margin: 100px auto;
					}
				}
			`}</style>
		</>
	);
};

export default CreateIngredient;
