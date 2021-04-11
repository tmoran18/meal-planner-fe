import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import { Formik, Field, Form } from 'formik'
import { useContext, useEffect } from 'react'

import '../styles/form.css'

const Register = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenicated } = authContext

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
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password2: '',
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          // Submit the data
          registerSubmit(values)
          resetForm()
          setSubmitting(false)
        }}
      >
        <Form className='form'>
          <h2>Register Account</h2>
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
          <button className='submit_btn' type='submit'>
            Register
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default Register
