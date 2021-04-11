import { Formik, Field, Form } from 'formik'

const Login = () => {
  const loginSubmit = (values) => {
    console.log(values)
  }
  return (
    <>
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
          <Field className='input' id='email' name='email' />

          <label className='label' htmlFor='password'>
            Password *
          </label>

          <Field className='input' id='password2' name='password2' required />
          <button type='submit' className='submit_btn'>
            Sign In
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default Login
