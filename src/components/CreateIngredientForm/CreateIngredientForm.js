import { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import IngredientContext from '../../context/ingredient/ingredientContext'
import { Button } from '@chakra-ui/button'
import { Heading } from '@chakra-ui/layout'

const CreateIngredientForm = () => {
  const ingredientContext = useContext(IngredientContext)

  const submit = (values) => {
    ingredientContext.addIngredient(values)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        unit: '',
        qty: '',
        category: '',
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        // Submit the data
        submit(values)
        resetForm()
        setSubmitting(false)
      }}
    >
      <Form className='form'>
        <Heading as='h3' align='center' mb='5' color='gray.500' size='md'>
          Create Ingredient
        </Heading>
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
          style={{ color: '#828ea6', fontWeight: '500', fontSize: '14px' }}
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
          Create Ingredient
        </Button>
      </Form>
    </Formik>
  )
}

export default CreateIngredientForm
