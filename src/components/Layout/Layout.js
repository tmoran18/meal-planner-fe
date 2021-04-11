import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'
import Alerts from '../Alerts/Alerts'

import styles from './index.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Alerts />
      <SideNav />
      <main className={styles.container}>{children}</main>
    </>
  )
}

export default Layout
