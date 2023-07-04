import TextInput from 'ui/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper';

function FullNameAndPhone() {
  return (
    <SignUpFormInputsWrapper>
      <TextInput name='firstName' type='text' placeholder='First name' label='First name' />
      <TextInput name='lastName' type='text' placeholder='Last name' label='Last name' />
      <TextInput name='phone' type='tel' placeholder='Your phone' label='Phone number' />
    </SignUpFormInputsWrapper>
  );
}

export default FullNameAndPhone;
