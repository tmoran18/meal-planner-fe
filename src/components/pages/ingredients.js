import { useContext, useEffect } from 'react'
import IngredientContext from '../../context/ingredient/ingredientContext'
import AuthContext from '../../context/auth/authContext'
import IngredientList from '../IngredientList/IngredientList'
import Layout from '../Layout/Layout'

const Ingredients = () => {
  const ingredientContext = useContext(IngredientContext)
  const authContext = useContext(AuthContext)
  const ingredients = ingredientContext.ingredients

  useEffect(() => {
    authContext.loadUser()
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
        <IngredientList ingredients={ingredients} />
      </div>
    </Layout>
  )
}

export default Ingredients
