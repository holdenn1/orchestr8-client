import React from 'react';
import { Children } from '@/types';
import styles from './RegistrationFormInputsWrapper.module.scss';

function RegistrationFormInputsWrapper({children}:Children) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default RegistrationFormInputsWrapper;