import React from 'react';
import styles from './styles.module.scss';

function SignInButton() {
  return (
    <button type='submit' className={styles.signInButton}>
      Sign In
    </button>
  );
}

export default SignInButton;
