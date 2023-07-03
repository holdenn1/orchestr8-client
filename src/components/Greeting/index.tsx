import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { setModal } from '@/store/slices/mainSlice';

function Greeting() {
  const { modalVisible } = useAppSelector((state) => state.main);
  const dispatch = useAppDispatch();
  
  return (
    <div
      className={classNames(styles.wrapper, { [styles.visibleGreeting]: modalVisible })}
    >
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>Welcome to Orchestr8! </h3>
        <p className={styles.description}>Your project management assistant</p>
        <button
          type='button'
          onClick={() => dispatch(setModal(!modalVisible))}
          className={styles.greetingBtn}
        >
          Start planning
        </button>
      </div>
    </div>
  );
}

export default Greeting;
