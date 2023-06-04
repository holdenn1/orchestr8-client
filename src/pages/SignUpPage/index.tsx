import React from 'react';
import styles from './styles.module.scss';
import SignUpForm from '@/components/forms/registrationForms/SignUpForm';

function SignUpPage() {
  return (
    <main className={styles.wrapper}>
      <SignUpForm />
    </main>
  );
}

export default SignUpPage;
