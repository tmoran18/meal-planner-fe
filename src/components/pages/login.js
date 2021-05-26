import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { Formik, Field, Form } from 'formik'
import { useContext, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Spinner } from '@chakra-ui/spinner'

const Login = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenicated, loading, setLoading } =
    authContext

  useEffect(() => {
    if (isAuthenicated) {
      props.history.push('/')
    }

    if (error === 'Invalid credentials' || error === 'Invalid Credentials') {
      setAlert(error)
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenicated, props.history])

  const loginSubmit = (values) => {
    login({
      email: values.email,
      password: values.password,
    })
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
            email: '',
            password: '',
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            // Submit the data
            setLoading()
            loginSubmit(values)
            resetForm()
            setSubmitting(false)
          }}
        >
          <Form className='form'>
            <Heading as='h3' align='center' mb='5' color='gray.500' size='md'>
              Login
            </Heading>

            <label className='label' htmlFor='email'>
              Email *
            </label>
            <Field className='input' id='email' name='email' required />

            <label className='label' htmlFor='password'>
              Password *
            </label>
            <Field
              className='input'
              type='password'
              id='password'
              name='password'
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
              Sign In
            </Button>
          </Form>
        </Formik>
      )}
    </Layout>
  )
}

export default Login
