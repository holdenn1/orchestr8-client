import { ReactNode } from 'react';
import styles from './styles.module.scss';

function EmptyList({ children }: { children: ReactNode }) {
  return (
    <div className={styles.emptyProjectListWrapper}>
      <p className={styles.emptyProjectsError}>{children}</p>
    </div>
  );
}

export default EmptyList;
