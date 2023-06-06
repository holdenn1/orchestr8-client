import React from 'react';
import styles from './styles.module.scss';

function SignUpButton() {
  return (
    <button type='submit' className={styles.signUpBtn}>
      Sign Up
    </button>
  );
}

export default SignUpButton;
