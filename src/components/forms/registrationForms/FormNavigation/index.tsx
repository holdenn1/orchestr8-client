import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import MainButton from 'ui/buttons/MainButton';
import { FormNavigationProps } from 'components/forms/types';
import { useAppSelector } from '@/hooks/reduxHooks';
import classNames from 'classnames';

function FormNavigation({ handleNext, handlePrev, step }: FormNavigationProps) {
  const { isLoading } = useAppSelector((state) => state.account);
  const isRegistration = location.href.includes('sign-up');

  return (
    <div className={styles.formNavigationwrapper}>
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
            <button
              type='submit'
              className={classNames(styles.btnSub, { [styles.submitting]: isLoading })}
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          )}
        </>
      ) : (
        <button
          type='submit'
          className={classNames(styles.btnSub, { [styles.submitting]: isLoading })}
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      )}
    </div>
  );
}

export default FormNavigation;
