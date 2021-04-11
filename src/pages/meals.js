import { useContext, useEffect } from 'react'
import MealContext from '../context/meal/mealContext'
import AuthContext from '../context/auth/authContext'
import MealCard from '../components/MealCard/MealCard'

const Meals = () => {
  const mealContext = useContext(MealContext)
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <div>
        {mealContext.meals.map((meal) => (
          <div>
            <MealCard {...meal} />
            <p>{JSON.stringify(meal.ingredients)}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Meals
