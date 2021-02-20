import { AppProps } from 'next/app';
import '../styles/index.css';
import MealState from '../context/meal/MealState';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MealState>
			<Component {...pageProps} />
		</MealState>
	);
}
