import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { Formik, Field, Form } from 'formik'
import { useContext, useEffect } from 'react'
import Layout from '../Layout/Layout'

import '../../styles/form.css'
import { Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Spinner } from '@chakra-ui/spinner'

const Register = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenicated, loading, setLoading } =
    authContext

  useEffect(() => {
    if (isAuthenicated) {
      props.history.push('/')
    }

    if (error === 'User already exists') {
      setAlert(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenicated, props.history])

  const registerSubmit = (values) => {
    if (values.password !== values.password2) {
      setAlert('Passwords must match', 'danger')
    } else {
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    }
  }
  return (
    <Layout>
      {loading ? (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      ) : (
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password2: '',
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            // Submit the data
            setLoading()
            registerSubmit(values)
            resetForm()
            setSubmitting(false)
          }}
        >
          <Form className='form'>
            <Heading as='h3' align='center' mb='5' color='gray.500' size='md'>
              Register Account
            </Heading>
            <label className='label' htmlFor='name'>
              Name *
            </label>
            <Field className='input' id='name' name='name' required />

            <label className='label' htmlFor='email'>
              Email *
            </label>
            <Field
              className='input'
              type='email'
              id='email'
              name='email'
              required
            />

            <label className='label' htmlFor='password'>
              Password *
            </label>
            <Field
              className='input'
              minLength={6}
              type='password'
              id='password'
              name='password'
              required
            />

            <label className='label' htmlFor='password'>
              Re-enter Password *
            </label>
            <Field
              className='input'
              minLength={6}
              type='password'
              id='password2'
              name='password2'
              required
            />

            <Button
              _hover={{
                background: 'white',
                color: 'gray.500',
                border: '1px solid',
                borderColor: 'gray.500',
              }}
              bg='gray.500'
              color='white'
              mt='3'
              type='submit'
            >
              Register
            </Button>
          </Form>
        </Formik>
      )}
    </Layout>
  )
}

export default Register
