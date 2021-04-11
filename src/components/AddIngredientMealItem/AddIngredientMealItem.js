import { useState } from 'react'
import styles from './index.module.css'

// addIngredient -> DropDownList
const AddIngredientMealItem = ({ ingredient, addIngredient }) => {
  const { name, unit, _id } = ingredient
  const [ingredientQty, setIngedientQty] = useState(0)

  const updateIngredientQty = (ingredient) => {
    const updatedIngredient = { ...ingredient, qty: ingredientQty }
    addIngredient(updatedIngredient)
  }

  return (
    <div className={styles.list_item} key={_id}>
      {unit ? `${name}, ${unit}` : name}
      <input
        type='number'
        value={ingredientQty}
        onChange={(e) => setIngedientQty(e.target.value)}
        name=''
        id=''
      />
      <img
        onClick={() =>
          // addIngredient(ingredient, (ingredient.qty = ingredientQty))
          updateIngredientQty(ingredient)
        }
        className={styles.btn}
        src='/images/add_btn.svg'
        width='20'
        height='20'
        alt='Add Icon'
      />
    </div>
  )
}

export default AddIngredientMealItem
