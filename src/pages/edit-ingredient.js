import { useContext } from 'react'
import IngredientContext from '../context/ingredient/ingredientContext'
import { Formik, Field, Form } from 'formik'
import { useHistory } from 'react-router-dom'

const EditIngredient = () => {
  const ingredientContext = useContext(IngredientContext)
  const { _id, qty, name, unit, category } = ingredientContext.current ?? {}
  const { updateIngredient, clearCurrentIngredient } = ingredientContext
  let history = useHistory()

  return (
    <>
      <div className='ingredient_container'>
        <h2
          style={{
            color: '#828ea6',
            textAlign: 'center',
            marginBottom: '30px',
            fontWeight: 500,
          }}
        >
          Edit Ingredient
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
            Update an Ingredient
          </h1>
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
              history.push('/ingredients')
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

              <button className='submit_btn' type='submit'>
                Update Ingredient
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  )
}

export default EditIngredient
