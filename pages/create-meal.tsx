import CreateMealForm from '../components/CreateMealForm/CreateMealForm';
import Layout from '../components/layout';
import Head from 'next/head';

const CreateMeal = () => {
	return (
		<>
			<Layout>
				<Head>
					<title>Meal Planner</title>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'></meta>
				</Head>
				<section>
					<CreateMealForm />
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

export default CreateMeal;
