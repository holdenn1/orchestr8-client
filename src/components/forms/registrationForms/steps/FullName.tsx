import React from 'react';
import TextInput from 'ui/inputs/formInputs/TextInput';
import RegistrationFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper/RegistrationFormInputsWrapper';

function FullName() {
  return (
    <RegistrationFormInputsWrapper>
      <TextInput name='name' type='text' placeholder='Your name' label='Name' />
      <TextInput name='surname' type='text' placeholder='Your surname' label='Surname' />
    </RegistrationFormInputsWrapper>
  );
}

export default FullName;
