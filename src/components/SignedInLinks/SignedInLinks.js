import { useContext } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import { useHistory } from 'react-router-dom'

const SignedInLinks = () => {
  const authContext = useContext(AuthContext)
  let history = useHistory()
  const { logout } = authContext

  const onSignout = () => {
    logout()
    history.push('/login')
  }

  return (
    <>
      <div className={styles.menu__container}>
        <ul className={styles.menu}>
          <Link to='/'>Meals</Link>
          <Link to='/create-meal'>Create Meal</Link>
          <Link to='/ingredients'>Ingredients</Link>
          <Link to='/create-ingredient'>Create Ingredient</Link>
          <Link to='/shopping-list'>Shopping List</Link>
        </ul>
        <ul className={styles.menu}>
          <button onClick={onSignout}>Sign Out</button>
        </ul>
      </div>
    </>
  )
}

export default SignedInLinks
