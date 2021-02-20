import styles from '../SignedOutLinks/signedoutlinks.module.css';
import Link from 'next/link';

const SignOutLinks = () => {
	return (
		<>
			<div className={styles.menu__container}>
				<ul className={styles.menu}>
					<Link href='/'>
						<a className={styles.link}>Register</a>
					</Link>
					<Link href='/'>
						<a className={styles.link}>Sign In</a>
					</Link>
				</ul>
			</div>
		</>
	);
};

export default SignOutLinks;
