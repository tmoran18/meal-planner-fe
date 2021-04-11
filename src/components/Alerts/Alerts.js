import { useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'
import styles from './index.module.css'

const Alerts = () => {
  const alertContext = useContext(AlertContext)

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={styles.alert}>
        {alert.msg}
      </div>
    ))
  )
}

export default Alerts
