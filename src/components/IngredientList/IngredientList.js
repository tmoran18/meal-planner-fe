import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import IngredientItem from '../IngredientItem/IngredientItem'

const IngredientList = ({ ingredients }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={styles.ingredient_list_container}>
      <div className={styles.btn_container}>
        <input
          className={styles.search_input}
          type='text'
          placeholder='Search Ingredient...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={styles.list_headings}>
        <span>Ingredient</span>
        <span>Add / Delete</span>
      </div>
      {/* Filter Search Ingredients */}
      {ingredients
        // eslint-disable-next-line array-callback-return
        .filter((ingredient) => {
          if (searchTerm === '') {
            return ingredient
          } else if (
            ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return ingredient
          }
        })
        .map((ingredient, index) => (
          <IngredientItem index={index} ingredient={ingredient} />
        ))}
      <Link to='/create-ingredient'>
        <button className={styles.btn}>Add Ingredient</button>
      </Link>
    </div>
  )
}

export default IngredientList
