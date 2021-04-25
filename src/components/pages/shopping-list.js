import { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import Layout from '../Layout/Layout'

const ShoppingList = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])
  return (
    <Layout>
      <div>Shopping List</div>
    </Layout>
  )
}
export default ShoppingList
