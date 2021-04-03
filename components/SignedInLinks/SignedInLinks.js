import styles from '../SignedInLinks/signedInLinks.module.css';
import Link from 'next/link';

const SignedInLinks = () => {
	return (
		<>
			<div className={styles.menu__container}>
				<ul className={styles.menu}>
					<Link href='/'>
						<a className={styles.link}>Meals</a>
					</Link>
					<Link href='/create-meal'>
						<a className={styles.link}>Create Meal</a>
					</Link>
					<Link href='/ingredients'>
						<a className={styles.link}>Ingredients</a>
					</Link>
					<Link href='/create-ingredient'>
						<a className={styles.link}>Create Ingredient</a>
					</Link>
					<Link href='/shopping-list'>
						<a className={styles.link}>Shopping List</a>
					</Link>
				</ul>
				<ul className={styles.menu}>
					<Link href='/'>
						<a className={styles.link}>Sign Out</a>
					</Link>
				</ul>
			</div>
		</>
	);
};

export default SignedInLinks;
