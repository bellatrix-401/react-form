import { Step } from '@component/types/step'
import { useEffect, useState } from 'react'

export const useSteps = (components: Array<React.FC<Step>>) => {
  const [step, setStep] = useState(0)
  const [success, setSuccess] = useState(false)
  const Step = components[step]

  useEffect(() => {
    if (success) setStep(components.length - 1)
  }, [success])

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    if (step === 0) return
    else setStep(step - 1)
  }

  const isLast = step === components.length - 2
  const isFirst = step === 0

  return {
    Step,
    nextStep,
    prevStep,
    isLast,
    isFirst,
    setSuccess,
    success,
  }
}
