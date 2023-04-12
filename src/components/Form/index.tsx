import { useForm } from 'react-hook-form'
import { useSteps } from '@component/hooks/useSteps'
import { RegisterState } from '@component/store/registerSlice'
import Personal from './Personal'
import Business from './Business'
import SuccessMessage from './SuccessMessage'
import Button from '../Button'
import styles from './Form.module.css'
import { useState } from 'react'

const StepsManage = [Personal, Business, SuccessMessage]

type FormProps = {
  sendForm: (data: RegisterState, file: File) => Promise<boolean>
  saveRegister: (data: RegisterState) => void
}

const Form: React.FC<FormProps> = ({ saveRegister, sendForm }) => {
  const [file, setFile] = useState<File | null>(null)
  const { Step, nextStep, prevStep, isLast, isFirst, setSuccess, success } =
    useSteps(StepsManage)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterState>()

  const handleNext = (data: RegisterState) => {
    saveRegister(data)
    isLast ? validate(data) : nextStep()
  }

  const validate = async (data: RegisterState) => {
    if (file) {
      const result = await sendForm(data, file)
      if (result) setSuccess(true)
    } else window.alert('Please attach a file')
  }

  const getFile = (data: File) => setFile(data)

  return (
    <form onSubmit={handleSubmit(handleNext)} className={styles.main}>
      <Step register={register} errors={errors} getFile={getFile} />

      {!success && (
        <div className={styles.actions}>
          {!isFirst && (
            <Button label="Go back" onClick={prevStep} type="reset" />
          )}
          <Button label={isLast ? 'Save' : 'Next'} type="submit" />
        </div>
      )}
    </form>
  )
}

export default Form
