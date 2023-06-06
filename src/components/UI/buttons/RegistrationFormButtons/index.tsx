import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { SignUpFormContext } from 'components/forms/registrationForms/SignUpForm';
import PrevStepButton from 'ui/buttons/RegistrationFormButtons/PrevStepButton';
import NextStepButton from 'ui/buttons/RegistrationFormButtons/NextStepButton';
import SignUpButton from 'ui/buttons/RegistrationFormButtons/SignUpButton';
import { Link } from 'react-router-dom';

function RegistrationFormButtons() {
  const { step } = useContext(SignUpFormContext);
  return (
    <div className={styles.wrapper}>
      <p className={styles.isAccount}>
        Already have an account? <Link to='/sign-in'>Sign In</Link>
      </p>
      {step > 0 && <PrevStepButton />}
      {step === 0 || step <= 1 ? <NextStepButton /> : <SignUpButton />}
    </div>
  );
}

export default RegistrationFormButtons;
