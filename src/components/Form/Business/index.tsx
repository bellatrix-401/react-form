import Input from '@component/components/Input'
import InputFile from '@component/components/InputFile'
import { Step } from '@component/types/step'

const Business: React.FC<Step> = ({ register, errors, getFile }) => {
  return (
    <>
      <h2>Business Data</h2>
      <Input
        register={register}
        name="name"
        error={errors.name ? true : false}
        placeholder="Name"
        required
        label="Name"
      />

      <div className="flex-columns">
        <Input
          register={register}
          name="phone"
          error={errors.phone ? true : false}
          placeholder="Phone"
          required
          label="Phone"
        />
        <Input
          register={register}
          name="category"
          error={errors.category ? true : false}
          placeholder="Business Category"
          required
          label="Category"
        />
      </div>

      <Input
        register={register}
        name="address"
        error={errors.address ? true : false}
        placeholder="Address"
        required
        label="Address"
      />

      <InputFile getFile={getFile} />
    </>
  )
}

export default Business
