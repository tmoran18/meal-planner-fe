import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import IngredientItem from '../IngredientItem/IngredientItem'
import { Button } from '@chakra-ui/button'

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
        <Button
          _hover={{
            background: 'white',
            color: 'gray.500',
            border: '1px solid',
            borderColor: 'gray.500',
          }}
          bg='gray.500'
          color='white'
          my='6'
          type='submit'
        >
          Add Ingredient
        </Button>
      </Link>
    </div>
  )
}

export default IngredientList
