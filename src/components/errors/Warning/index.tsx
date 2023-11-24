import MainButton from '@/components/UI/buttons/MainButton';

import styles from './styles.module.scss';
import { Dispatch, SetStateAction } from 'react';

type WarningProps = {
  setCloseWarning: Dispatch<SetStateAction<boolean>>;
};

function Warning({ setCloseWarning }: WarningProps) {
  return (
    <div className={styles.warningWrapper}>
      <h3 className={styles.title}>Warning</h3>
      <p className={styles.warningText}>
        This application is deployed on free hosting, so its speed might be slowed down
      </p>
      <MainButton title='Close' onClick={() => setCloseWarning(true)} type='prev'></MainButton>
    </div>
  );
}

export default Warning;
