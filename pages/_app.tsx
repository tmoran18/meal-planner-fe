import { AppProps } from 'next/app';
import '../styles/index.css';
import MealState from '../context/meal/MealState';
import IngredientState from '../context/ingredient/IngredientState';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MealState>
			<IngredientState>
				<Component {...pageProps} />
			</IngredientState>
		</MealState>
	);
}
