import { Children } from '../types';
import styles from './styles.module.scss';

function SignUpFormInputsWrapper({ children }: Children) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default SignUpFormInputsWrapper;
