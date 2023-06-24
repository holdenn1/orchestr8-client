import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import MainButton from 'ui/buttons/MainButton';
import SubmitButton from 'ui/buttons/SubmitButton';

type FormNavigation = {
  handlePrev?: () => void;
  step?: number;
};

function FormNavigation({ handlePrev, step }: FormNavigation) {
  const { href } = location;

  const isRegistration = href.includes('sign-up');

  return (
    <div className={styles.wrapper}>
      {isRegistration ? (
        <p className={styles.isAccount}>
          Already have an account? <Link to='/sign-in'>Sign In</Link>
        </p>
      ) : (
        <p className={styles.isAccount}>
          Do you want to register? <Link to='/sign-up'>Sign Up</Link>
        </p>
      )}
      {isRegistration ? (
        <>
          {step > 0 && <MainButton type='prev' title='Previous' onClick={handlePrev} />}
          {step === 0 ? (
            <SubmitButton>Next</SubmitButton>
          ) : (
            <SubmitButton>Submit</SubmitButton>
          )}
        </>
      ) : (
        <SubmitButton>Submit</SubmitButton>
      )}
    </div>
  );
}

export default FormNavigation;
