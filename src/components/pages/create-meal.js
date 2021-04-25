import { useContext, useEffect } from 'react'
import CreateMealForm from '../CreateMealForm/CreateMealForm'
import AuthContext from '../../context/auth/authContext'
import Layout from '../Layout/Layout'

const CreateMeal = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])
  return (
    <Layout>
      <CreateMealForm />
    </Layout>
  )
}

export default CreateMeal
