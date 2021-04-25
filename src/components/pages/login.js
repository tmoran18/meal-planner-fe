import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'
import { Formik, Field, Form } from 'formik'
import { useContext, useEffect } from 'react'
import Layout from '../Layout/Layout'

const Login = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenicated } = authContext

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
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          // Submit the data
          loginSubmit(values)
          resetForm()
          setSubmitting(false)
        }}
      >
        <Form className='form'>
          <h2>Login</h2>
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
          <button type='submit' className='submit_btn'>
            Sign In
          </button>
        </Form>
      </Formik>
    </Layout>
  )
}

export default Login
