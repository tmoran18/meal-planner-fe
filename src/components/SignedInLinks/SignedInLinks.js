import styles from './index.module.css'
import { Link } from 'react-router-dom'
const SignedInLinks = () => {
  return (
    <>
      <div className={styles.menu__container}>
        <ul className={styles.menu}>
          <Link to='/'>Meals</Link>
          <Link to='/create-meal'>Create Meal</Link>
          <Link to='/ingredients'>Ingredients</Link>
          <Link to='/create-ingredient'>Create Ingredient</Link>
          <Link to='/shopping-list'>Shopping List</Link>
        </ul>
        <ul className={styles.menu}>
          <Link to='/'>Sign Out</Link>
        </ul>
      </div>
    </>
  )
}

export default SignedInLinks
