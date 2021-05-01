import { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/auth/authContext'
import MealContext from '../../context/meal/mealContext'
import { Formik, Field, Form } from 'formik'
import { useHistory } from 'react-router-dom'
import Layout from '../Layout/Layout'
import { Spinner } from '@chakra-ui/spinner'

const EditMeal = () => {
  const mealContext = useContext(MealContext)
  const authContext = useContext(AuthContext)
  const { _id, name, secondary_name } = mealContext.current ?? {}
  const { updateMeal, clearCurrentMeal } = mealContext
  const [showSpinner, setShowSpinner] = useState(false)
  let history = useHistory()

  useEffect(() => {
    authContext.loadUser()
    //eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <div className='meal_container'>
        <h2
          style={{
            color: '#828ea6',
            textAlign: 'center',
            marginBottom: '30px',
            fontWeight: 500,
          }}
        >
          Edit Meal
        </h2>
        <div className='form_container'>
          <h1
            style={{
              color: '#828ea6',
              textAlign: 'center',
              marginBottom: '50px',
              fontWeight: 500,
            }}
          >
            Update an Meal
          </h1>
          <Formik
            initialValues={{
              _id,
              name,
              secondary_name,
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              // Submit the data
              updateMeal(values)
              clearCurrentMeal()
              resetForm()
              setSubmitting(false)
              setShowSpinner(true)
              setTimeout(() => {
                history.push('/')
              }, 2000)
            }}
          >
            {showSpinner ? (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            ) : (
              <Form className='form'>
                <label className='label' htmlFor='name'>
                  Name *
                </label>
                <Field className='input' id='name' name='name' required />

                <label className='label' htmlFor='secondary_name'>
                  Description
                </label>
                <Field
                  className='input'
                  id='secondary_name'
                  name='secondary_name'
                />
                <button className='submit_btn' type='submit'>
                  Update Meal
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  )
}

export default EditMeal
