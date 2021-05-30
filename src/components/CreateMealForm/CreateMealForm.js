import { useState, useRef, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import DropDownList from '../DropDownList/DropDownList'
import MealContext from '../../context/meal/mealContext'
import IngredientContext from '../../context/ingredient/ingredientContext'
import AuthContext from '../../context/auth/authContext'
import Steps from '../Steps/Steps'
import { Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const CreateMealForm = () => {
  const [imageSelected, setImageSelected] = useState('')
  const [steps, setSteps] = useState([])
  const [ingredientsSelected, setIngredientsSelected] = useState([])
  const imageFileInput = useRef()
  const [inputValue, setInputValue] = useState('')

  let history = useHistory()

  const mealContext = useContext(MealContext)
  const ingredientContext = useContext(IngredientContext)
  const authContext = useContext(AuthContext)

  const { ingredients, getIngredients } = ingredientContext
  const { token } = authContext

  useEffect(() => {
    getIngredients()
    //eslint-disable-next-line
  }, [])

  // Remove Ingredient from a MEAL
  const removeIngredient = (ingredientsSelected, ingredient) => {
    const newIngredientsSelected = ingredientsSelected.filter(
      (ingredientSelected) => ingredientSelected._id !== ingredient._id
    )
    setIngredientsSelected(newIngredientsSelected)
  }

  // Add Ingredient to a MEAL
  const addIngredient = (ingredient) => {
    if (ingredientsSelected.length < 1) {
      setIngredientsSelected([...ingredientsSelected, ingredient])
    } else {
      if (
        !ingredientsSelected.some(
          (ingredientSelected) => ingredientSelected._id === ingredient._id
        )
      ) {
        setIngredientsSelected([...ingredientsSelected, ingredient])
      }
    }
  }

  // Upload image to cloudinary
  const uploadImage = async () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', 'gznohnsu')

    try {
      delete axios.defaults.headers.common['x-auth-token']
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dsjhcek2q/image/upload',
        formData
      )
      const data = await response.data
      return data
    } catch (error) {
      console.error(error.message)
    }
  }

  const addSteps = (step) => {
    setSteps((steps) => [...steps, step])
  }

  const submitMealData = async (values) => {
    const imageURL = await uploadImage(imageSelected)
    axios.defaults.headers.common['x-auth-token'] = token
    if (imageURL) {
      values.image_URL = imageURL.secure_url
      values.imageID = imageURL.public_id
      values.ingredients = ingredientsSelected
      values.shoppingSelected = false
      values.steps = steps
      mealContext.addMeal(values)
    } else {
      alert('Errors')
    }
  }

  const resetImageInput = () => {
    imageFileInput.current.value = ''
  }

  return (
    <Formik
      initialValues={{
        name: '',
        secondary_name: '',
      }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        // Submit the data
        submitMealData(values)
        // Clear the form & state
        imageFileInput.current.value = ''
        setIngredientsSelected([])
        setImageSelected('')
        resetForm()
        setSubmitting(false)
        history.push('/')
      }}
    >
      <Form className='form'>
        <Heading as='h3' align='center' mb='5' color='gray.500' size='md'>
          Create Meal
        </Heading>
        <label className='label' htmlFor='name'>
          Name
        </label>
        <Field className='input' id='name' name='name' required />

        <label className='label' htmlFor='secondary_name'>
          Blurb
        </label>
        <Field
          className='input'
          id='secondary_name'
          name='secondary_name'
          required
        />

        <div className='file_input'>
          <label className='label' htmlFor='secondary_name'>
            Meal Image
          </label>
          <input
            ref={imageFileInput}
            type='file'
            name='imageURL'
            id='imageURL'
            required
            onChange={(e) => setImageSelected(e.target.files[0])}
          />
          <div className='file_input_cancel'>
            or{' '}
            <span
              onClick={resetImageInput}
              style={{
                fontWeight: 600,
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              cancel
            </span>
          </div>
        </div>

        <DropDownList
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
          selectedIngredients={ingredientsSelected}
        />
        <Steps addSteps={addSteps} steps={steps} />
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
          Create Meal
        </Button>
      </Form>
    </Formik>
  )
}

export default CreateMealForm
