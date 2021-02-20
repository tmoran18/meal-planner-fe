import Layout from '../components/layout';
import Head from 'next/head';
import Meals from '../components/Meals.js/Meals';

// { allPosts }: Props
const Index = () => {
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
					Content
					<Meals />
				</div>
			</Layout>
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
