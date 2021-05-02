import { useContext, useEffect, useState } from 'react'
import IngredientContext from '../../context/ingredient/ingredientContext'
import { Formik, Field, Form } from 'formik'

const EditIngredient = () => {
  const [isEditing, setIsEditing] = useState(false)
  const ingredientContext = useContext(IngredientContext)
  const { _id, qty, name, unit, category } = ingredientContext.current ?? {}
  const {
    updateIngredient,
    clearCurrentIngredient,
    getIngredients,
    setIngredientLoading,
  } = ingredientContext

  useEffect(() => {
    getIngredients()
    return () => {
      setIsEditing(false)
      setIngredientLoading()
    }
    //eslint-disable-next-line
  }, [isEditing])

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
        setIsEditing(true)
      }}
    >
      <Form id='submit-form' className='form'>
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
            &nbsp;Meat
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Dairy' />
            &nbsp;Dairy
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Vegetables' />
            &nbsp;Vegetables
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Fruit' />
            &nbsp;Fruit
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Sauces' />
            &nbsp;Sauces
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Canned Goods' />
            &nbsp;Canned Goods
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Baking Goods' />
            &nbsp;Baking Goods
          </label>
          <label className='radio_btn'>
            <Field type='radio' name='category' value='Other' />
            &nbsp;Other
          </label>
        </div>
      </Form>
    </Formik>
  )
}

export default EditIngredient
