import { useContext } from "react";
import MealContext from "../../context/meal/mealContext";
import styles from "../Meals.js/meals.module.css";

const Meals = () => {
  const mealContext = useContext(MealContext);

  const { meals } = mealContext;

  return (
    <>
      {meals.map((meal) => (
        <div className={styles.meal__card}>
          <img src={meal.image_URL} width="350" alt="" />
          <h3 className={styles.meal__title}>{meal.name}</h3>
          <p className={styles.meal__sec_title}>{meal.secondary_name}</p>
        </div>
      ))}
    </>
  );
};

export default Meals;
