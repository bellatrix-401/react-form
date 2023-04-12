import styles from './Button.module.css'

type ButtonProps = {
  label: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => {
  return (
    <button className={styles.main} onClick={onClick} type={type}>
      {label}
    </button>
  )
}

export default Button
