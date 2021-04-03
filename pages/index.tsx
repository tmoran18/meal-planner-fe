import { useContext } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import MealContext from '../context/meal/mealContext';
import MealCard from '../components/MealCard/MealCard';

const Index = () => {
	const mealContext = useContext(MealContext);
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
					{mealContext.meals.map((meal) => (
						<div>
							<MealCard {...meal} />
							<p>{JSON.stringify(meal.ingredients)}</p>
						</div>
					))}
				</div>
			</Layout>
			<style jsx>{`
				div {
				}
			`}</style>
		</>
	);
};

export default Index;

// export const getStaticProps = async () => {
// 	const allPosts = getAllPosts([
// 		'title',
// 		'date',
// 		'slug',
// 		'author',
// 		'coverImage',
// 		'excerpt',
// 	]);

// 	return {
// 		props: { allPosts },
// 	};
//};
