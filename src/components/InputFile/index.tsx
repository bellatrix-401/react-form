import { useInputFile } from '@component/hooks/useInputFile'
import { InputFileComponent } from '@component/types/inputFile'
import Input from '../Input'

const InputFile: React.FC<InputFileComponent> = ({ getFile }) => {
  const { file, inputFileRef, handleOpenFile, handleUploadFile, showError } =
    useInputFile({ callback: getFile })

  return (
    <>
      <input
        className="change-file-event"
        type="file"
        ref={inputFileRef}
        style={{ display: 'none' }}
        accept={'.pdf'}
        onChange={handleUploadFile}
      />
      <div onClick={handleOpenFile}>
        <Input
          name="file"
          error={showError}
          placeholder="Selecciona un archivo"
          required
          label="File"
          value={file.data ? file.data.name : ''}
          iconLeft="bxs-cloud-upload"
          disabled
          errorMessage={file.error ? file.error : ''}
        />
      </div>
    </>
  )
}

export default InputFile
