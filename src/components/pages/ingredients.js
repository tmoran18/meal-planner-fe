import { useContext, useEffect } from 'react'
import IngredientContext from '../../context/ingredient/ingredientContext'
import AuthContext from '../../context/auth/authContext'
import IngredientList from '../IngredientList/IngredientList'
import Layout from '../Layout/Layout'
import { Spinner } from '@chakra-ui/react'

const Ingredients = () => {
  const ingredientContext = useContext(IngredientContext)
  const authContext = useContext(AuthContext)
  const { ingredients, getIngredients, loading } = ingredientContext

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    getIngredients()
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
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
        {/* If no ingredients */}
        {ingredients !== null && ingredients.length === 0 && !loading ? (
          <h4>Please add your first ingredients</h4>
        ) : // There are Ingredients
        ingredients !== null && !loading ? (
          <IngredientList ingredients={ingredients} />
        ) : (
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        )}
      </div>
    </Layout>
  )
}

export default Ingredients
