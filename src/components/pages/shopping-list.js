import { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import Layout from '../Layout/Layout'
import Steps from '../Steps/Steps'

const ShoppingList = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])
  return (
    <Layout>
      <Steps></Steps>
    </Layout>
  )
}
export default ShoppingList
