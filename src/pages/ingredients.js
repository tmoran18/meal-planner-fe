import { useContext } from 'react'
import IngredientContext from '../context/ingredient/ingredientContext'
import IngredientList from '../components/IngredientList/IngredientList'

const Ingredients = () => {
  const ingredientContext = useContext(IngredientContext)
  const ingredients = ingredientContext.ingredients

  return (
    <>
      <div className='ingredient_container'>
        <h2
          style={{
            color: '#828ea6',
            textAlign: 'center',
            marginBottom: '30px',
            fontWeight: 500,
          }}
        >
          Ingredients
        </h2>
        <IngredientList ingredients={ingredients} />
      </div>
    </>
  )
}

export default Ingredients
