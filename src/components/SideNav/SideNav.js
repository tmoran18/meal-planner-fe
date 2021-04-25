import { useContext } from 'react'
import styles from '../SideNav/index.module.css'
import SignedInLinks from '../SignedInLinks/SignedInLinks'
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks'
import AuthContext from '../../context/auth/authContext'

const SideNav = () => {
  const authContext = useContext(AuthContext)

  const { isAuthenicated, loading, token } = authContext

  return (
    <nav className={styles.sidenav}>
      {loading && token ? (
        <></>
      ) : isAuthenicated ? (
        <SignedInLinks />
      ) : (
        <SignedOutLinks />
      )}
    </nav>
  )
}

export default SideNav
