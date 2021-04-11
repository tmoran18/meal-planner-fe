import styles from './index.module.css'
import { Link } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <>
      <div className={styles.menu__container}>
        <ul className={styles.menu}>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Sign In</Link>
        </ul>
      </div>
    </>
  )
}

export default SignOutLinks
