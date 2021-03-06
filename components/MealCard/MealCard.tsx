import styles from './mealcard.module.css';

interface Props {
	name: string;
	secondary_name: string;
	image_URL: string;
}

const MealCard: React.FC<Props> = ({ name, secondary_name, image_URL }) => {
	return (
		<div className={styles.meal__card}>
			<img src={image_URL} width='350' alt={`${name} with ${secondary_name}`} />
			<h3 className={styles.meal__title}>{name}</h3>
			<p className={styles.meal__sec_title}>{secondary_name}</p>
		</div>
	);
};

export default MealCard;
