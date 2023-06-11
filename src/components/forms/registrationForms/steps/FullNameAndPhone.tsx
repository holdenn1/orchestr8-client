import React from 'react';
import TextInput from 'ui/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from 'ui/wrappers/SignUpFormInputsWrapper';

function FullNameAndPhone() {
  return (
    <SignUpFormInputsWrapper>
      <TextInput name='name' type='text' placeholder='Your name' label='Name' />
      <TextInput name='surname' type='text' placeholder='Your surname' label='Surname' />
      <TextInput name='phone' type='tel' placeholder='Your phone' label='Phone number' />
    </SignUpFormInputsWrapper>
  );
}

export default FullNameAndPhone;
