import styles from '../SideNav/sidenav.module.css';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks';

const SideNav = () => {
	return (
		<nav className={styles.sidenav}>
			<SignedInLinks />
			{/* <SignedOutLinks /> */}
		</nav>
	);
};

export default SideNav;
