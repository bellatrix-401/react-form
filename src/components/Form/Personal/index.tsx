import Input from '@component/components/Input'
import { Step } from '@component/types/step'

const Personal: React.FC<Step> = ({ register, errors }) => {
  return (
    <>
      <h2>Personal Data</h2>
      <Input
        register={register}
        name="fullName"
        error={errors.fullName ? true : false}
        placeholder="Full name"
        required
        label="Full Name"
      />
      <Input
        register={register}
        name="email"
        error={errors.email ? true : false}
        placeholder="Email"
        required
        label="Email"
      />
      <Input
        register={register}
        name="password"
        error={errors.password ? true : false}
        placeholder="Password"
        required
        label="Password"
        type="password"
        hideOption
      />
    </>
  )
}

export default Personal
