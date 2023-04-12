import CryptoJS from 'crypto-js'
import { RegisterState } from '@component/store/registerSlice'
import { ENCRYPTION_KEY } from '@component/constants/env'

function readFile(file: File) {
  return new Promise((resolve, reject) => {
    const blob = new Blob([file], { type: file.type })
    const reader = new FileReader()

    reader.readAsDataURL(blob)

    reader.onloadend = () => {
      resolve(reader.result)
    }

    reader.onerror = reject
  })
}

export const fileEncrypt = async (file: File, formData: FormData) => {
  const read = await readFile(file)

  if (typeof read === 'string' && ENCRYPTION_KEY) {
    const result = CryptoJS.AES.encrypt(read, ENCRYPTION_KEY).toString()
    formData.append('file', result)
  }
}

export const objectEncrypt = (body: RegisterState, formData: FormData) => {
  const keys = Object.keys(body)

  keys.forEach((key) => {
    if (ENCRYPTION_KEY) {
      const value = CryptoJS.AES.encrypt(
        body[key as keyof RegisterState],
        ENCRYPTION_KEY
      ).toString()

      formData.append(key, value)
    }
  })
}
