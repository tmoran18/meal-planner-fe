import { useContext, useEffect } from 'react'
import MealContext from '../../context/meal/mealContext'
import AuthContext from '../../context/auth/authContext'
import MealCard from '../MealCard/MealCard'
import Layout from '../Layout/Layout'

const Meals = () => {
  const mealContext = useContext(MealContext)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <div>
        {mealContext.meals.map((meal) => (
          <div>
            <MealCard {...meal} />

            <p>{JSON.stringify(meal.ingredients)}</p>
            <p>Meals</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Meals
