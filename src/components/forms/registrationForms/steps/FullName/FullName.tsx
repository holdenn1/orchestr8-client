import React from 'react';
import TextInput from '@/components/UI/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from '@/components/UI/wrappers/SignUpFormInputsWrapper/SignUpFormInputsWrapper';

function FullName() {
  return (
    <SignUpFormInputsWrapper>
      <TextInput name='name' type='text' placeholder='Your name' label='Name' />
      <TextInput name='surname' type='text' placeholder='Your surname' label='Surname' />
    </SignUpFormInputsWrapper>
  );
}

export default FullName;
