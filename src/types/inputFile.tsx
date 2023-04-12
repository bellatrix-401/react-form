import { PENDING } from '@component/constants'

export type InputFile = {
  data: File | null
  status: string
  error?: string | null
}

export const inputFileDefault: InputFile = {
  data: null,
  status: PENDING,
  error: null,
}

export type InputFileComponent = {
  getFile: (data: File) => void
}
