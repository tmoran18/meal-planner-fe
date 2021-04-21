import { useContext, useState } from 'react'
import styles from './index.module.css'
import IngredientContext from '../../context/ingredient/ingredientContext'
import { useHistory } from 'react-router-dom'

const IngredientItem = ({ ingredient, index }) => {
  const ingredientContext = useContext(IngredientContext)
  const {
    deleteIngredient,
    setCurrentIngredient,
    clearCurrentIngredient,
  } = ingredientContext
  let history = useHistory()

  const { name, qty, category, _id, unit } = ingredient

  const itemColorStyle = () => {
    // if the index is even make this color
    if (index % 2 === 0) {
      return styles.odd_item_color
    } else {
      return styles.even_item_color
    }
  }

  // Delete Ingredient
  const onDelete = () => {
    deleteIngredient(_id)
    clearCurrentIngredient()
  }

  const onEdit = () => {
    setCurrentIngredient(ingredient)
    history.push('/edit-ingredient')
  }

  return (
    <div>
      <div className={`${styles.ingredient_item} ${itemColorStyle()}`}>
        <p style={{ minWidth: '200px' }}>{name}</p>
        <p style={{ minWidth: '100px', textAlign: 'left' }}>{unit}</p>
        <div>
          <svg
            onClick={onEdit}
            className={styles.icon}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M2 11.5V14H4.5L11.8733 6.62669L9.37333 4.12669L2 11.5ZM13.8067 4.69335C14.0667 4.43335 14.0667 4.01335 13.8067 3.75335L12.2467 2.19335C11.9867 1.93335 11.5667 1.93335 11.3067 2.19335L10.0867 3.41335L12.5867 5.91335L13.8067 4.69335Z'
              fill='#828EA6'
            />
          </svg>
          &nbsp;&nbsp;
          <svg
            onClick={onDelete}
            className={styles.icon}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M4.00016 12.6667C4.00016 13.4 4.60016 14 5.3335 14H10.6668C11.4002 14 12.0002 13.4 12.0002 12.6667V4.66667H4.00016V12.6667ZM12.6668 2.66667H10.3335L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667Z'
              fill='#828EA6'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default IngredientItem