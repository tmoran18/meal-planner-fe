import styles from '../TopNav/topnav.module.css';

const TopNav = () => {
	return (
		<div className={styles.topnav}>
			<h1 className={styles.logo}>
				<span className='weight_300'>MEAL </span>PLANNER
			</h1>
			<div className={styles.user}>User</div>
		</div>
	);
};

export default TopNav;
