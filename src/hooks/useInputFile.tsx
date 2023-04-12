import { InputFile, inputFileDefault } from '@component/types/inputFile'
import { useState, useRef, ChangeEvent } from 'react'
import {
  ERROR,
  PENDING,
  UPLOADED,
  ERROR_MESSAGES,
  MAX_FILE_SIZE,
} from '../constants'

type InputFileHook = {
  acceptType?: string
  callback?: ((data: File) => void) | null
}

export const useInputFile = ({
  acceptType = 'application/pdf',
  callback = null,
}: InputFileHook) => {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<InputFile>(inputFileDefault)
  const [showError, setShowError] = useState(false)

  const handleOpenFile = () => {
    if (inputFileRef.current) inputFileRef.current.click()
  }

  const handleUploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files) {
        const file = event.target.files[0]

        if (file.size > MAX_FILE_SIZE) {
          setFile({
            data: null,
            error: 'El archivo debe pesar menos de 2MB',
            status: ERROR,
          })
          setShowError(true)
          return
        }

        if (!acceptType.includes(file.type)) {
          setFile({
            data: null,
            error: ERROR_MESSAGES[acceptType as keyof typeof ERROR_MESSAGES],
            status: ERROR,
          })
          setShowError(true)
          return
        }

        if (file) {
          setFile({
            data: file,
            status: UPLOADED,
          })
          callback && callback(file)
          setShowError(false)
        }
      }
    } catch (err) {
      setFile({ ...file, status: ERROR })
      setShowError(true)
    }
  }

  const handleRemoveFile = () => {
    setFile({ data: null, status: PENDING })
  }

  return {
    file,
    inputFileRef,
    handleOpenFile,
    handleUploadFile,
    handleRemoveFile,
    showError,
  }
}
