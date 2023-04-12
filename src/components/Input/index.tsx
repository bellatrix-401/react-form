import React, { FocusEvent, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import styles from './Input.module.css'

type InputProps = {
  error?: boolean
  errorMessage?: string
  label?: string
  name: string
  placeholder?: string
  required?: boolean
  type?: string
  hideOption?: boolean
  disabled?: boolean
  register?: UseFormRegister<any>
  validations?: object
  iconLeft?: string
  contentRight?: string
  contentRightOnClick?: () => void
  handleBlur?: (event: FocusEvent<HTMLInputElement>) => void
  value?: string
}

const Input: React.FC<InputProps> = ({
  error = false,
  errorMessage = 'Formato Incorrecto',
  label,
  name,
  placeholder,
  required = false,
  type,
  hideOption,
  disabled,
  register,
  validations,
  iconLeft,
  contentRight,
  contentRightOnClick,
  handleBlur,
  value,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const getRegister = () => {
    if (register) return { ...register(name, { required, ...validations }) }
    else return { value: value }
  }

  const changeVisibility = () => setIsVisible(!isVisible)

  const getType = isVisible ? 'text' : 'password'

  return (
    <div className={styles.main}>
      {label && <label>{label}</label>}

      <div className={styles.inputWrapper}>
        {iconLeft && (
          <i className={`icons bx bx-sm ${iconLeft} ${styles.iconLeft}`}></i>
        )}
        <input
          {...getRegister()}
          className={styles.input}
          placeholder={placeholder}
          type={hideOption ? getType : type}
          disabled={disabled}
          onBlur={handleBlur}
          style={{ paddingLeft: `${iconLeft ? '42px' : '16px'}` }}
        />
        {hideOption && (
          <div className={styles.visibilityIcon} onClick={changeVisibility}>
            {isVisible ? (
              <i className="icons bx bx-show bx-sm"></i>
            ) : (
              <i className="icons bx bx-hide bx-sm"></i>
            )}
          </div>
        )}
        {contentRight && (
          <div className={styles.visibilityIcon} onClick={contentRightOnClick}>
            <i className={`icons-primary bx bx-sm ${contentRight}`}></i>
          </div>
        )}
      </div>

      {error && <label className={styles.error}>{errorMessage}</label>}
    </div>
  )
}

export default Input
