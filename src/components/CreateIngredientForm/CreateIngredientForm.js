import { useContext } from 'react'
import { Formik, Field, Form } from 'formik'
import styles from './index.module.css'
import IngredientContext from '../../context/ingredient/ingredientContext'

const CreateIngredientForm = () => {
  const ingredientContext = useContext(IngredientContext)

  const submit = (values) => {
    ingredientContext.addIngredient(values)
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
        Create an Ingredient
      </h1>
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
        <Form className={styles.form}>
          <label className={styles.label} htmlFor='name'>
            Name *
          </label>
          <Field className={styles.input} id='name' name='name' required />

          <label className={styles.label} htmlFor='unit'>
            Unit
          </label>
          <Field className={styles.input} id='unit' name='unit' />

          <label className={styles.label} htmlFor='qty'>
            Qty *
          </label>
          <Field className={styles.input} id='qty' name='qty' required />

          <div
            id='my-radio-group'
            style={{ color: '#828ea6', fontWeight: '500', fontSize: '14px' }}
          >
            Category
          </div>
          <div
            className={styles.radio_group}
            role='group'
            aria-labelledby='my-radio-group'
          >
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Meat' />
              Meat
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Dairy' />
              Dairy
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Vegetables' />
              Vegetables
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Fruit' />
              Fruit
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Sauces' />
              Sauces
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Canned Goods' />
              Canned Goods
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Baking Goods' />
              Baking Goods
            </label>
            <label className={styles.radio_btn}>
              <Field type='radio' name='category' value='Other' />
              Other
            </label>
          </div>

          <button className={styles.submit_btn} type='submit'>
            Create Ingredient
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default CreateIngredientForm
