import styles from './SuccessMessage.module.css'

const SuccessMessage: React.FC = () => {
  return (
    <div className={styles.main}>
      <h1>Encrypted data!</h1>
      <i className="bx bx-check-circle"></i>
      <p>- You can see it in sessionStorage: payload -</p>
    </div>
  )
}

export default SuccessMessage
