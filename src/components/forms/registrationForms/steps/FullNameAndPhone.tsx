import React from 'react';
import TextInput from 'ui/inputs/formInputs/TextInput';
import RegistrationFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper/RegistrationFormInputsWrapper';

function FullNameAndPhone() {
  return (
    <RegistrationFormInputsWrapper>
      <TextInput name='name' type='text' placeholder='Your name' label='Name' />
      <TextInput name='surname' type='text' placeholder='Your surname' label='Surname' />
      <TextInput name='phone' type='tel' placeholder='Your phone' label='Phone number' />
    </RegistrationFormInputsWrapper>
  );
}

export default FullNameAndPhone;
