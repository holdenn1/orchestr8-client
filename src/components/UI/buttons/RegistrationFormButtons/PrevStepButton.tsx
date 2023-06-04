import React, { useContext } from 'react';
import { SignUpFormContext } from '@/utils/context/signUpFormContext';

function PrevStepButton() {
  const { step, setStep } = useContext(SignUpFormContext);

  return (
    <button type='button' onClick={() => setStep(step - 1)}>
      Previous
    </button>
  );
}

export default PrevStepButton;
