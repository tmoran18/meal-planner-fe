import { useContext, useEffect } from 'react'
import MealContext from '../../context/meal/mealContext'
import AuthContext from '../../context/auth/authContext'
import MealCard from '../MealCard/MealCard'
import Layout from '../Layout/Layout'

const Meals = () => {
  const mealContext = useContext(MealContext)
  const authContext = useContext(AuthContext)

  const { meals, getMeals, loading } = mealContext

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    getMeals()
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      {/* If no meals */}
      {meals !== null && meals.length === 0 && !loading ? (
        <h4>Please add a meal</h4>
      ) : // There are Meals
      meals !== null && !loading ? (
        meals.map((meal) => <MealCard key={meal._id} {...meal} />)
      ) : (
        // Loading State
        <div>Loading...</div>
      )}
    </Layout>
  )
}

export default Meals
