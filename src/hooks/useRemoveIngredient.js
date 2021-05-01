import { useEffect, useState } from 'react'

function useRemoveIngredient(ingredient) {
  const [ingredientsSelected, setIngredientsSelected] = useState([])

  useEffect(() => {
    const newIngredientsSelected = ingredientsSelected.filter(
      (ingredientSelected) => ingredientSelected._id !== ingredient._id
    )
    setIngredientsSelected(newIngredientsSelected)
  }, [])

  return ingredientsSelected
}

export default useRemoveIngredient
