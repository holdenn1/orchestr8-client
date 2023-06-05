import React from 'react';
import TextInput from '@/components/UI/inputs/formInputs/TextInput';
import SignUpFormInputsWrapper from '@/components/UI/wrappers/SignUpFormInputsWrapper/SignUpFormInputsWrapper';

function EmailAndPassword() {
  return (
    <SignUpFormInputsWrapper>
      <TextInput name='email' type='email' placeholder='Your email' label='Email' />
      <TextInput name='password' type='password' placeholder='Your password' label='Password' />
    </SignUpFormInputsWrapper>
  );
}

export default EmailAndPassword;
