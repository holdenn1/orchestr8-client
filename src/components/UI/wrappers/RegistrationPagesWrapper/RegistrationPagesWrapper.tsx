import React from 'react';
import styles from './RegistrationPagesWrapper.module.scss'
import { Children } from '@/types';

function RegistrationPagesWrapper({children}:Children) {
  return (
    <main className={styles.wrapper}>{children}</main>
  );
}

export default RegistrationPagesWrapper;