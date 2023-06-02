import React from 'react';
import styles from './MainWrapper.module.scss'
import { Children } from '@/types';

function MainWrapper({ children }: Children) {
  return <main className={styles.wrapper}>{children}</main>;
}

export default MainWrapper;
