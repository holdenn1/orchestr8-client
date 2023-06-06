import React from 'react';
import SignInForm from 'components/forms/registrationForms/SignInForm';
import RegistrationPagesWrapper from 'ui/wrappers/RegistrationPagesWrapper/RegistrationPagesWrapper';

function SignInPage() {
  return (
    <RegistrationPagesWrapper>
      <SignInForm />
    </RegistrationPagesWrapper>
  );
}

export default SignInPage;
