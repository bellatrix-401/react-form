import { RegisterState } from '@component/store/registerSlice'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

export type Step = {
  register: UseFormRegister<any>
  errors: FieldErrors<RegisterState>
  getFile: (data: File) => void
}
