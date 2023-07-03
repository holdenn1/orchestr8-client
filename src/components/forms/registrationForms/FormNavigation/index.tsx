import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import MainButton from 'ui/buttons/MainButton';
import SubmitButton from 'ui/buttons/SubmitButton';
import { FormNavigationProps } from 'components/forms/types';

function FormNavigation({ handleNext, handlePrev, step }: FormNavigationProps) {
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
          {step! > 0 && <MainButton type='prev' title='Previous' onClick={handlePrev} />}
          {step === 0 ? (
            <MainButton type='next' title='Next' onClick={handleNext} />
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
