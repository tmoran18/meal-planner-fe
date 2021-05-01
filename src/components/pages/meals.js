import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MealContext from '../../context/meal/mealContext'
import IngredientContext from '../../context/ingredient/ingredientContext'
import AuthContext from '../../context/auth/authContext'
import MealCard from '../MealCard/MealCard'
import Layout from '../Layout/Layout'
import { Spinner, Link as ChakraLink } from '@chakra-ui/react'

const Meals = (props) => {
  const mealContext = useContext(MealContext)
  const ingredientContext = useContext(IngredientContext)
  const authContext = useContext(AuthContext)

  const { meals, getMeals, loading } = mealContext
  const { getIngredients } = ingredientContext

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    getMeals()
    getIngredients()
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      {/* If no meals */}
      {meals !== null && meals.length === 0 && !loading ? (
        <Link to='/create-meal'>
          <ChakraLink color='gray.600'>Please add a meal here</ChakraLink>
        </Link>
      ) : // There are Meals
      meals !== null && !loading ? (
        meals.map((meal) => <MealCard key={meal._id} {...meal} />)
      ) : (
        // Loading State
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      )}
    </Layout>
  )
}

export default Meals
