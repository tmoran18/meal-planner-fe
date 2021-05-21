import { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import ShoppingContext from '../../context/shopping/shoppingContext'
import Layout from '../Layout/Layout'

const ShoppingList = () => {
  const authContext = useContext(AuthContext)
  const shoppingContext = useContext(ShoppingContext)
  const arr = []

  const { shoppingListMeals } = shoppingContext

  useEffect(() => {
    authContext.loadUser()
    shoppingListMeals.map((item) => arr.push(item.ingredients))
    //eslint-disable-next-line
  }, [])
  return <Layout>{console.log(arr[0])}</Layout>
}
export default ShoppingList
