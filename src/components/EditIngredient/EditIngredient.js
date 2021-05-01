import { useContext } from 'react'
import AuthContext from '../../context/auth/authContext'
import IngredientContext from '../../context/ingredient/ingredientContext'
import { Formik, Field, Form } from 'formik'

const EditIngredient = () => {
    const ingredientContext = useContext(IngredientContext)
  const authContext = useContext(AuthContext)
  const { _id, qty, name, unit, category } = ingredientContext.current ?? {}
  const { updateIngredient, clearCurrentIngredient } = ingredientContext
    return (
          <Formik
            initialValues={{
              _id,
              qty,
              name,
              unit,
              category,
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              // Submit the data
              updateIngredient(values)
              clearCurrentIngredient()
              resetForm()
              setSubmitting(false)
            }}
          >
            <Form className='form'>
              <label className='label' htmlFor='name'>
                Name *
              </label>
              <Field className='input' id='name' name='name' required />

              <label className='label' htmlFor='unit'>
                Unit
              </label>
              <Field className='input' id='unit' name='unit' />
              <div
                id='my-radio-group'
                style={{
                  color: '#828ea6',
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                Category
              </div>
              <div
                className='radio_group'
                role='group'
                aria-labelledby='my-radio-group'
              >
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Meat' />
                  Meat
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Dairy' />
                  Dairy
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Vegetables' />
                  Vegetables
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Fruit' />
                  Fruit
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Sauces' />
                  Sauces
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Canned Goods' />
                  Canned Goods
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Baking Goods' />
                  Baking Goods
                </label>
                <label className='radio_btn'>
                  <Field type='radio' name='category' value='Other' />
                  Other
                </label>
              </div>
            </Form>
          </Formik>    )
}

export default EditIngredient
