import { Children } from '../types';
import styles from './styles.module.scss';

function RegistrationPagesWrapper({ children }: Children) {
  return <main className={styles.wrapper}>{children}</main>;
}

export default RegistrationPagesWrapper;
