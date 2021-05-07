import { useState, useRef, useContext, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import styles from './index.module.css'
import DropDownList from '../DropDownList/DropDownList'
import MealContext from '../../context/meal/mealContext'
import IngredientContext from '../../context/ingredient/ingredientContext'
import AuthContext from '../../context/auth/authContext'
import Steps from '../Steps/Steps'

const CreateMealForm = () => {
  const [imageSelected, setImageSelected] = useState('')
  const [steps, setSteps] = useState([])
  const [ingredientsSelected, setIngredientsSelected] = useState([])
  const imageFileInput = useRef()

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
    <div className={styles.form_container}>
      <h1
        style={{
          color: '#828ea6',
          textAlign: 'center',
          marginBottom: '50px',
          fontWeight: '500',
        }}
      >
        Create a Meal
      </h1>
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
        }}
      >
        <Form className={styles.form}>
          <label className={styles.label} htmlFor='name'>
            Name
          </label>
          <Field className={styles.input} id='name' name='name' required />

          <label className={styles.label} htmlFor='secondary_name'>
            Blurb
          </label>
          <Field
            className={styles.input}
            id='secondary_name'
            name='secondary_name'
            required
          />

          <div className={styles.file_input}>
            <label className={styles.label} htmlFor='secondary_name'>
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
            <div className={styles.file_input_cancel}>
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
          <button className={styles.submit_btn} type='submit'>
            Create Meal
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateMealForm
