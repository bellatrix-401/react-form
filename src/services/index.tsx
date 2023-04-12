import { RegisterState } from '@component/store/registerSlice'
import { fileEncrypt, objectEncrypt } from '@component/utils'

export const create = async (payload: RegisterState, file: File) => {
  const formData = new FormData()
  await fileEncrypt(file, formData)
  objectEncrypt(payload, formData)

  try {
    saveSession(formData)
    /* const res = fetch('/react-form', {
      method: 'POST',
      body: formData,
    })
    return res */
    return true
  } catch (error) {
    return Promise.reject(error)
  }
}

const saveSession = (formData: FormData) => {
  const obj = {
    fullName: '',
    email: '',
    password: '',
    name: '',
    phone: '',
    category: '',
    address: '',
    file: '',
  }

  formData.forEach(
    (value, key) => (obj[key as keyof typeof obj] = value.toString())
  )
  sessionStorage.setItem('payload', JSON.stringify(obj))
}
