import { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import CreateIngredientForm from '../CreateIngredientForm/CreateIngredientForm'
import Layout from '../Layout/Layout'

const CreateIngredient = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])
  return (
    <Layout>
      <CreateIngredientForm />
    </Layout>
  )
}

export default CreateIngredient
