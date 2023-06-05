import React, { useContext } from 'react';
import PrevStepButton from '@/components/UI/buttons/RegistrationFormButtons/PrevStepButton';
import NextStepButton from '@/components/UI/buttons/RegistrationFormButtons/NextStepButton';
import SubmitButton from '@/components/UI/buttons/RegistrationFormButtons/SubmitButton';
import { SignUpFormContext } from '@/components/forms/registrationForms/SignUpForm';

function RegistrationFormButtons() {
  const { step } = useContext(SignUpFormContext);
  return (
    <div>
      {step > 0 && <PrevStepButton />}
      {step === 0 || step <= 1 ? <NextStepButton /> : <SubmitButton />}
    </div>
  );
}

export default RegistrationFormButtons;
