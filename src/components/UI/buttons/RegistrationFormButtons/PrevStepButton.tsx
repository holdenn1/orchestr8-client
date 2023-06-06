import React, { useContext } from 'react';
import styles from './styles.module.scss'
import { SignUpFormContext } from 'components/forms/registrationForms/SignUpForm';

function PrevStepButton() {
  const { step, setStep } = useContext(SignUpFormContext);

  return (
    <button type='button' className={styles.prevBtn} onClick={() => setStep(step - 1)}>
      Previous
    </button>
  );
}

export default PrevStepButton;
