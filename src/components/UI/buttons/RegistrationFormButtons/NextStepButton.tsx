import React, { useContext } from 'react';
import { SignUpFormContext } from '@/utils/context/signUpFormContext';

function NextStepButton() {
  const { step, setStep } = useContext(SignUpFormContext);

  return (
    <button type='button' onClick={() => setStep(step + 1)}>
      Next
    </button>
  );
}

export default NextStepButton;
