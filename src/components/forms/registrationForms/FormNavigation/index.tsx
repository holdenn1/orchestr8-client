import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import MainFormButton from 'ui/buttons/FormButtons/MainFormButton';

type FormNavigation = {
  handleSubmit: () => void;
  handlePrev?: () => void;
  step?: number;
};

function FormNavigation({ handlePrev, handleSubmit, step }: FormNavigation) {
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
          {step > 0 && (
            <MainFormButton type='prev' title='Previous' onClick={handlePrev} />
          )}
          {step === 0 ? (
            <MainFormButton type='next' title='Next' onClick={handleSubmit} />
          ) : (
            <MainFormButton type='submit' title='Submit' onClick={handleSubmit} />
          )}
        </>
      ) : (
        <MainFormButton type='submit' title='Submit' onClick={handleSubmit} />
      )}
    </div>
  );
}

export default FormNavigation;
